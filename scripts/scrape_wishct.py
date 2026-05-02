#!/usr/bin/env python3
"""
WishCT Forum Scraper — 南马区自由身交流 (fid=538)
自动抓取前6页帖子，同步到 src/data/freelancers.json
有新增/删除时发送 Telegram 通知

依赖安装: pip install requests beautifulsoup4 lxml
环境变量: WISHCT_USERNAME, WISHCT_PASSWORD, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
"""

import requests
import json
import re
import os
import time
from bs4 import BeautifulSoup
from datetime import datetime
from pathlib import Path

# ─── 配置 ───────────────────────────────────────────────────────────────────
FORUM_BASE   = "https://wishct.io"
FID          = 538
MAX_PAGES    = 6
USERNAME     = os.environ.get("WISHCT_USERNAME", "")
PASSWORD     = os.environ.get("WISHCT_PASSWORD", "")
BOT_TOKEN    = os.environ.get("TELEGRAM_BOT_TOKEN", "")
CHAT_ID      = os.environ.get("TELEGRAM_CHAT_ID", "")
DATA_FILE    = Path("src/data/freelancers.json")
IMAGES_DIR   = Path("public/freelancers")
DELAY        = 1.5   # seconds between requests (be polite)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Referer": FORUM_BASE,
}

# 区域关键词 → {name, slug}
AREA_MAP = {
    "r&f":          {"name": "R&F富力公主湾", "slug": "r-and-f"},
    "富力":          {"name": "R&F富力公主湾", "slug": "r-and-f"},
    "austin":       {"name": "Austin奥斯汀",  "slug": "mount-austin"},
    "奥斯汀":        {"name": "Austin奥斯汀",  "slug": "mount-austin"},
    "百万镇":        {"name": "百万镇",         "slug": "taman-century"},
    "taman century":{"name": "百万镇",         "slug": "taman-century"},
    "jb town":      {"name": "坡底JB Town",   "slug": "jb-town"},
    "坡底":          {"name": "坡底JB Town",   "slug": "jb-town"},
    "nusa bestari": {"name": "Nusa Bestari",  "slug": "nusa-bestari"},
    "nusa":         {"name": "Nusa Bestari",  "slug": "nusa-bestari"},
    "tebrau":       {"name": "Tebrau地不佬",  "slug": "tebrau"},
    "地不佬":        {"name": "Tebrau地不佬",  "slug": "tebrau"},
    "danga":        {"name": "Danga Bay",     "slug": "danga-bay"},
    "ksl":          {"name": "KSL",           "slug": "ksl"},
    "perling":      {"name": "Perling",       "slug": "perling"},
    "bukit indah":  {"name": "Bukit Indah",   "slug": "bukit-indah"},
    "武吉英达":      {"name": "Bukit Indah",   "slug": "bukit-indah"},
    "molek":        {"name": "Taman Molek",   "slug": "molek"},
    "sentosa":      {"name": "Taman Sentosa", "slug": "taman-sentosa"},
    "pelangi":      {"name": "彩虹花园",       "slug": "taman-pelangi"},
    "彩虹":          {"name": "彩虹花园",       "slug": "taman-pelangi"},
    "queen":        {"name": "皇后花园",       "slug": "taman-queen"},
    "皇后":          {"name": "皇后花园",       "slug": "taman-queen"},
    "sentral":      {"name": "JB Sentral",    "slug": "jb-sentral"},
    "bayu":         {"name": "Bayu Puteri",   "slug": "bayu-puteri"},
    "taman daya":   {"name": "Taman Daya",    "slug": "taman-daya"},
    "世纪花园":      {"name": "世纪花园",       "slug": "taman-sri-tebrau"},
    "大丰":          {"name": "大丰花园",       "slug": "taman-daya-2"},
    "福林":          {"name": "福林园",         "slug": "taman-daya-fulin"},
}

NAT_FLAG_MAP = {
    "🇨🇳": {"code": "CN", "name": "中国"},
    "🇲🇾": {"code": "MY", "name": "马来西亚"},
    "🇮🇩": {"code": "ID", "name": "印尼"},
    "🇻🇳": {"code": "VN", "name": "越南"},
    "🇹🇭": {"code": "TH", "name": "泰国"},
    "🇹🇼": {"code": "TW", "name": "台湾"},
    "🇰🇷": {"code": "KR", "name": "韩国"},
    "🇵🇭": {"code": "PH", "name": "菲律宾"},
}


# ─── Session / Login ────────────────────────────────────────────────────────

def make_session() -> requests.Session:
    s = requests.Session()
    s.headers.update(HEADERS)
    return s


def login(s: requests.Session) -> None:
    """Discuz! login: GET formhash → POST credentials."""
    r = s.get(f"{FORUM_BASE}/member.php?mod=logging&action=login", timeout=15)
    soup = BeautifulSoup(r.text, "html.parser")
    fh_tag = soup.find("input", {"name": "formhash"})
    if not fh_tag:
        raise RuntimeError("formhash not found — forum structure may have changed")

    payload = {
        "formhash":    fh_tag["value"],
        "referer":     FORUM_BASE + "/",
        "loginfield":  "username",
        "username":    USERNAME,
        "password":    PASSWORD,
        "questionid":  "0",
        "answer":      "",
        "loginsubmit": "true",
    }
    s.post(
        f"{FORUM_BASE}/member.php?mod=logging&action=login"
        f"&loginsubmit=yes&infloat=yes&handlekey=ls",
        data=payload, timeout=15,
    )
    # Verify by fetching the profile page
    check = s.get(f"{FORUM_BASE}/home.php?mod=spacecp", timeout=15)
    if "logging" in check.url or "login" in check.url.lower():
        raise RuntimeError("Login failed — please check WISHCT_USERNAME / WISHCT_PASSWORD")
    print("✅ Login successful")


# ─── Thread List ─────────────────────────────────────────────────────────────

def get_thread_list(s: requests.Session) -> list[dict]:
    """Return [{tid, title, last_updated}] from pages 1–MAX_PAGES."""
    threads = []
    for page in range(1, MAX_PAGES + 1):
        url = f"{FORUM_BASE}/forum.php?mod=forumdisplay&fid={FID}&page={page}"
        r = s.get(url, timeout=15)
        soup = BeautifulSoup(r.text, "html.parser")

        for tbody in soup.select(
            "tbody[id^='normalthread_'], tbody[id^='stickthread_']"
        ):
            link = tbody.select_one("a.s.xst, a[class*='xst']")
            if not link:
                continue
            href = link.get("href", "")
            m = re.search(r"tid=(\d+)|thread-(\d+)-", href)
            if not m:
                continue
            tid = int(m.group(1) or m.group(2))
            title = link.get_text(strip=True)

            ts_tag = tbody.select_one("td.by em span")
            ts = (ts_tag.get("title") or ts_tag.get_text(strip=True)) if ts_tag else ""

            threads.append({"tid": tid, "title": title, "last_updated": ts})

        print(f"  Page {page}: {len(soup.select('tbody[id^=normalthread_]'))} threads")
        time.sleep(DELAY)

    print(f"📋 Total {len(threads)} threads found")
    return threads


# ─── Thread Parsing ──────────────────────────────────────────────────────────

def _find(pattern: str, text: str, default: str = "") -> str:
    m = re.search(pattern, text, re.IGNORECASE)
    return m.group(1).strip() if m else default


def parse_thread(s: requests.Session, tid: int, title: str) -> dict | None:
    url = f"{FORUM_BASE}/forum.php?mod=viewthread&tid={tid}"
    r = s.get(url, timeout=15)
    soup = BeautifulSoup(r.text, "html.parser")

    posts = soup.select("div[id^='post_']")
    if not posts:
        return None

    # ── First post = profile ──
    first = posts[0]
    msg_td = first.select_one("td[id^='postmessage_']")
    if not msg_td:
        return None
    content = msg_td.get_text("\n", strip=True)

    # ── 清理固定模板文字 ──
    _NOISE_PATTERNS = [
        r"直接点击\s*WhatsApp\s*我",
        r"[（(]\s*加我个人\s*[Ww]hats[Aa]pp\s*时[，,]?\s*请说明是愿望的会员\s*[）)]",
    ]
    for _pat in _NOISE_PATTERNS:
        content = re.sub(_pat, "", content, flags=re.IGNORECASE).strip()

    # ── Images ──
    img_urls: list[str] = []
    for img in first.select("img[file]"):
        url_raw = img.get("file", "") or img.get("src", "")
        if url_raw:
            img_urls.append(url_raw if url_raw.startswith("http") else FORUM_BASE + url_raw)
    for img in first.select("img[src*='/data/attachment/']"):
        src = img["src"]
        img_urls.append(src if src.startswith("http") else FORUM_BASE + src)
    img_urls = list(dict.fromkeys(img_urls))[:5]  # deduplicate, max 5

    # ── Field extraction ──
    full = f"{title}\n{content}"

    height  = _find(r"(\d{3})\s*cm", full)
    weight  = _find(r"(\d{2})\s*kg", full)
    cup     = _find(r"\b(\d{2}[A-G])\b", full)

    price_raw = _find(r"RM\s*(\d{2,4}(?:\s*[-~]\s*\d{2,4})?)", full)
    if price_raw:
        nums = re.findall(r"\d+", price_raw)
        price_min = int(nums[0]) if nums else 0
        price_max = int(nums[-1]) if len(nums) > 1 else price_min
    else:
        price_min = price_max = 0

    # WhatsApp
    wa = _find(r"(?:whatsapp|wa|联系|电话)[^\d]*(\+?6?\s*01[0-9][\s\-]?\d{7,8})", full)
    if not wa:
        wa = _find(r"(01[0-9][\s\-]?\d{7,8})", full)
    wa = re.sub(r"[\s\-]", "", wa)  # clean formatting
    if wa and not wa.startswith("60"):
        wa = "60" + wa

    # Service type
    water_kws   = ["下水", "过水", "全套", "做全", "爱爱", "有套", "无套"]
    massage_kws = ["按摩", "massage", "马杀鸡"]
    if any(k in full for k in water_kws):
        service_type = "water"
    elif any(k in full for k in massage_kws):
        service_type = "massage"
    else:
        service_type = "other"

    # Nationality
    nat_flag = "🇨🇳"
    nat_code = "CN"
    nat_name = "中国"
    for flag, info in NAT_FLAG_MAP.items():
        if flag in full:
            nat_flag, nat_code, nat_name = flag, info["code"], info["name"]
            break

    # Area
    area_name = "新山"
    area_slug = "johor-bahru"
    full_lower = full.lower()
    for kw, info in AREA_MAP.items():
        if kw.lower() in full_lower:
            area_name, area_slug = info["name"], info["slug"]
            break

    # Name: first meaningful token from title
    name_m = re.match(r"^([^\[【\(（\s\/]{2,10})", title.strip())
    name = name_m.group(1) if name_m else title[:8]

    # ── 从原始内容提取各字段，组装标准描述模板 ──
    def _get_field(raw: str, *labels) -> str:
        for label in labels:
            m2 = re.search(
                rf'(?:{re.escape(label)})\s*[：:]\s*\n?(.*?)(?:\n[^\n]*[：:]|\Z)',
                raw, re.DOTALL
            )
            if m2:
                for line in m2.group(1).strip().splitlines():
                    line = line.strip()
                    if line and not re.match(r'^[A-Za-z\s]+$', line):
                        return line
                return m2.group(1).strip().splitlines()[0].strip() if m2.group(1).strip() else ""
        return ""

    def _get_service_block(raw: str) -> str:
        svc_m2 = re.search(r'服务价钱[：:]|(?:服务|价钱)[：:]', raw)
        if not svc_m2:
            svc_m2 = re.search(r'(?:配套|RM\d)', raw)
        if not svc_m2:
            return ""
        after = raw[svc_m2.end():]
        cm2 = re.search(r'(?:联系|[Tt]elegram|https://t\.me|[Ww]hats[Aa]pp|直接点击)', after)
        block = after[:cm2.start()] if cm2 else after
        block = re.sub(r'好评\d+', '', block)
        return block.strip()

    _name_clean = _get_field(content, "名字") or name
    _nat_clean  = _get_field(content, "国籍") or nat_name
    _size_raw   = _get_field(content, "身材", "身高")
    if not _size_raw:
        _parts = []
        if height: _parts.append(f"{height}cm")
        if weight: _parts.append(f"{weight}kg")
        if cup:    _parts.append(cup)
        _size_raw = "/".join(_parts)
    _area_clean = _get_field(content, "地点") or area_name
    _svc_block  = _get_service_block(content)
    _tg = re.search(r'https://t\.me/\S+', content)
    _contact_lines = []
    if _tg:
        _contact_lines.append(f"Telegram：{_tg.group(0)}")
    if wa:
        _contact_lines.append(f"WhatsApp：{wa}")
    _contact = "\n".join(_contact_lines) if _contact_lines else wa

    description = (
        f"名字：{_name_clean}\n"
        f"国籍：{_nat_clean}\n"
        f"身材：{_size_raw}\n"
        f"地点：{_area_clean}\n"
        f"服务价钱：\n{_svc_block}\n\n"
        f"联系方式：\n{_contact}"
    ).strip()

    # ── Reviews (replies) ──
    reviews = []
    for post in posts[1:11]:
        r_td = post.select_one("td[id^='postmessage_']")
        a_tag = post.select_one("a[href*='uid='], div.authi a")
        if r_td and a_tag:
            text = r_td.get_text("\n", strip=True)
            if len(text) > 15:
                reviews.append({
                    "author": a_tag.get_text(strip=True),
                    "content": text[:400],
                })

    return {
        "forumTid":       tid,
        "name":           name,
        "nationalityFlag": nat_flag,
        "nationalityCode": nat_code,
        "nationalityName": nat_name,
        "serviceType":    service_type,
        "area":           area_name,
        "areaSlug":       area_slug,
        "height":         height,
        "weight":         weight,
        "cup":            cup,
        "priceMin":       price_min,
        "priceMax":       price_max,
        "description":    description,
        "whatsapp":       wa,
        "_photoUrls":     img_urls,    # temp field, removed after download
        "reviews":        reviews,
        "lastUpdated":    datetime.now().isoformat(),
    }


# ─── Image Download ───────────────────────────────────────────────────────────

def download_images(freelancer_id: int, photo_urls: list[str], s: requests.Session) -> list[str]:
    if not photo_urls:
        return []

    img_dir = IMAGES_DIR / str(freelancer_id)
    img_dir.mkdir(parents=True, exist_ok=True)

    paths = []
    for i, url in enumerate(photo_urls[:5], 1):
        dest = img_dir / f"{i}.jpg"
        if dest.exists():
            paths.append(f"/freelancers/{freelancer_id}/{i}.jpg")
            continue
        try:
            resp = s.get(url, timeout=15, stream=True)
            if resp.status_code == 200:
                with open(dest, "wb") as f:
                    for chunk in resp.iter_content(8192):
                        f.write(chunk)
                paths.append(f"/freelancers/{freelancer_id}/{i}.jpg")
                print(f"    📷 Downloaded image {i}")
            time.sleep(0.5)
        except Exception as e:
            print(f"    ⚠️  Image {i} failed: {e}")

    return paths


# ─── Telegram ────────────────────────────────────────────────────────────────

def send_telegram(message: str) -> None:
    if not BOT_TOKEN or not CHAT_ID:
        print("⚠️  TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set, skipping notification")
        return
    try:
        requests.post(
            f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
            data={
                "chat_id":                  CHAT_ID,
                "text":                     message,
                "parse_mode":               "HTML",
                "disable_web_page_preview": True,
            },
            timeout=10,
        )
        print("📱 Telegram message sent")
    except Exception as e:
        print(f"⚠️  Telegram failed: {e}")


def build_card_caption(f: dict) -> str:
    """Build formatted caption for a freelancer photo card."""
    area  = f.get("area", "")
    flag  = f.get("nationalityFlag", "")
    # 优先从 description 提取真实名字，与前端逻辑一致
    desc = f.get("description", "")
    m = re.search(r'名字[：:]\s*\n?([^\n]+)', desc)
    name = m.group(1).strip() if m else f.get("name", "")

    p_min  = f.get("priceMin", 0)
    p_max  = f.get("priceMax", 0)
    if p_min and p_max and p_min != p_max:
        price = f"RM{p_min}-{p_max}"
    elif p_min:
        price = f"RM{p_min}"
    else:
        price = "价格面议"

    svc_map = {"water": "💦 水类", "massage": "💆 按摩", "other": "✨ 其他"}
    service = svc_map.get(f.get("serviceType", "other"), "✨ 其他")

    nat_name = f.get("nationalityName", "")
    area_slug = f.get("areaSlug", "")
    fid  = f.get("id", "")

    # hashtags
    tag_area = f"#{area.replace(' ', '').replace('&', '')}"
    tag_svc  = "#水类" if f.get("serviceType") == "water" else ("#按摩" if f.get("serviceType") == "massage" else "#其他")
    tag_nat  = f"#{nat_name}" if nat_name else ""

    sep = "━━━━━━━━━━━━━━━"
    lines = [
        f"📍 {area} | {service}",
        sep,
        f"",
        f"💃 姓名：{name} {flag}",
        f"💰 价格：{price}",
        f"",
        sep,
        f'🌐 查看详情 jbescorts.org/freelancer/{fid}',
        sep,
        f"{tag_area} {tag_svc} {tag_nat}",
    ]
    return "\n".join(lines)


def send_telegram_card(f: dict) -> None:
    """Send a photo card with caption; fall back to text if no photo."""
    if not BOT_TOKEN or not CHAT_ID:
        return
    caption = build_card_caption(f)
    photos  = f.get("photos", [])

    sent = False
    if photos:
        photo_path = Path("public") / photos[0].lstrip("/")
        if photo_path.exists():
            try:
                with open(photo_path, "rb") as img:
                    r = requests.post(
                        f"https://api.telegram.org/bot{BOT_TOKEN}/sendPhoto",
                        data={"chat_id": CHAT_ID, "caption": caption, "parse_mode": "HTML"},
                        files={"photo": img},
                        timeout=30,
                    )
                if r.status_code == 200:
                    sent = True
                    print(f"  📸 Card sent: {f.get('name')}")
            except Exception as e:
                print(f"  ⚠️  Photo upload failed: {e}")

    if not sent:
        send_telegram(caption)
        print(f"  📝 Text card sent: {f.get('name')}")

    time.sleep(0.5)  # Telegram rate limit


# ─── Main ────────────────────────────────────────────────────────────────────

def main():
    print(f"🚀 WishCT Scraper — {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

    # NOTIFY_ONLY mode: just read saved data and send pending notifications
    if os.environ.get("NOTIFY_ONLY") == "true":
        print("📱 NOTIFY_ONLY mode — sending Telegram notifications from saved data")
        if not DATA_FILE.exists():
            print("⚠️  No data file found, skipping")
            return
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            saved = json.load(f)
        final_list = saved.get("freelancers", [])
        # Read pending notification list saved by scraper step
        pending_file = Path("scripts/.pending_notify.json")
        if not pending_file.exists():
            print("📭 No pending notifications")
            return
        with open(pending_file, "r", encoding="utf-8") as f:
            pending = json.load(f)
        new_tids     = set(pending.get("new_tids", []))
        deleted_names = pending.get("deleted_names", [])
        new_names    = pending.get("new_names", [])
        updated      = {item["forumTid"]: item for item in final_list}

        MAX_CARDS = 20
        if new_names or deleted_names:
            lines = [
                "🔄 <b>JBEscorts 自由身数据更新</b>",
                f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M')}",
            ]
            if new_names:
                extra = f"（仅展示前{MAX_CARDS}条）" if len(new_names) > MAX_CARDS else ""
                lines.append(f"➕ 新增 <b>{len(new_names)}</b> 条{extra}")
            if deleted_names:
                preview = "、".join(deleted_names[:5])
                suffix  = f"…等{len(deleted_names)}条" if len(deleted_names) > 5 else ""
                lines.append(f"❌ 删除：{preview}{suffix}")
            lines.append(f"📊 当前共 <b>{len(final_list)}</b> 条自由身资料")
            lines.append(f'🔗 <a href="https://jbescorts.org/freelance">查看完整列表</a>')
            send_telegram("\n".join(lines))

            new_cards = [updated[tid] for tid in list(new_tids)[:MAX_CARDS] if tid in updated]
            for f_data in new_cards:
                send_telegram_card(f_data)
        else:
            print("📭 No changes — skipping Telegram notification")

        # Clean up pending file
        pending_file.unlink(missing_ok=True)
        return

    if not USERNAME or not PASSWORD:
        raise RuntimeError("WISHCT_USERNAME and WISHCT_PASSWORD must be set")

    # Load existing data
    existing: dict[int, dict] = {}
    if DATA_FILE.exists():
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            saved = json.load(f)
            existing = {item["forumTid"]: item for item in saved.get("freelancers", [])}
    print(f"📂 Existing records: {len(existing)}")

    s = make_session()
    login(s)

    threads = get_thread_list(s)
    current_tids = {t["tid"] for t in threads}
    old_tids     = set(existing.keys())

    new_tids     = current_tids - old_tids
    deleted_tids = old_tids - current_tids
    print(f"📊 New: {len(new_tids)}, Deleted: {len(deleted_tids)}, Unchanged: {len(current_tids & old_tids)}")

    # Next available sequential ID
    max_id = max((item.get("id", 0) for item in existing.values()), default=0)

    # Build updated dataset
    updated: dict[int, dict] = {
        tid: item for tid, item in existing.items() if tid not in deleted_tids
    }

    new_names: list[str] = []
    for thread in threads:
        tid = thread["tid"]
        if tid not in new_tids:
            continue
        print(f"  ➕ {thread['title'][:50]}")
        profile = parse_thread(s, tid, thread["title"])
        if not profile:
            print("     ⚠️  Parse failed, skipping")
            continue

        max_id += 1
        profile["id"] = max_id
        profile["photos"] = download_images(max_id, profile.pop("_photoUrls", []), s)
        updated[tid] = profile
        new_names.append(profile["name"])
        time.sleep(DELAY)

    # Sort by id ascending
    final_list = sorted(updated.values(), key=lambda x: x.get("id", 0))

    # Build areas index
    areas_map: dict[str, dict] = {}
    for item in final_list:
        slug = item.get("areaSlug", "johor-bahru")
        if slug not in areas_map:
            areas_map[slug] = {"name": item.get("area", slug), "slug": slug, "count": 0}
        areas_map[slug]["count"] += 1
    areas = sorted(areas_map.values(), key=lambda x: -x["count"])

    output = {
        "lastUpdated": datetime.now().isoformat(),
        "totalCount":  len(final_list),
        "areas":       areas,
        "freelancers": final_list,
    }

    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    print(f"✅ Saved {len(final_list)} records → {DATA_FILE}")

    # ── 清理孤立图片目录（freelancer 已删除但图片仍存在）──
    active_ids = {str(item["id"]) for item in final_list}
    if IMAGES_DIR.exists():
        for img_dir in IMAGES_DIR.iterdir():
            if img_dir.is_dir() and img_dir.name not in active_ids:
                import shutil
                shutil.rmtree(img_dir)
                print(f"  🗑️  Removed orphaned images: {img_dir}")

    # Save pending notification info for NOTIFY_ONLY step (runs after VPS deploy)
    pending_file = Path("scripts/.pending_notify.json")
    deleted_names_list = [
        existing[t]["name"] for t in list(deleted_tids)[:5] if t in existing
    ]
    with open(pending_file, "w", encoding="utf-8") as f:
        json.dump({
            "new_tids":      list(new_tids),
            "new_names":     new_names,
            "deleted_names": deleted_names_list,
        }, f, ensure_ascii=False)
    print(f"📝 Pending notifications saved ({len(new_names)} new, {len(deleted_tids)} deleted)")

    # Telegram notification — sent AFTER data is saved (VPS deploy is triggered by workflow)
    # Actual sending is done in the NOTIFY_ONLY step after VPS deploy completes.
    if new_names or deleted_tids:
        print(f"📋 {len(new_names)} new, {len(deleted_tids)} deleted — notifications queued for post-deploy step")
    else:
        print("📭 No changes — skipping Telegram notification")


if __name__ == "__main__":
    main()
