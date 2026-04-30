#!/usr/bin/env python3
"""
将 freelancers.json 里所有 description 重新格式化为标准模板:
名字：
国籍：
身材：
地点：
服务价钱：
  ...
联系方式：
"""
import json, re
from pathlib import Path

DATA_FILE = Path("src/data/freelancers.json")

# ── 提取单个字段 ─────────────────────────────────────────────────────────────
def get_field(desc: str, *labels) -> str:
    """从描述中提取标签后的值（取第一行非空内容）"""
    for label in labels:
        m = re.search(
            rf'(?:{re.escape(label)})\s*[：:]\s*\n?(.*?)(?:\n[^\n]*[：:]|\Z)',
            desc, re.DOTALL
        )
        if m:
            val = m.group(1).strip().splitlines()
            # 取第一行非空，过滤掉 BingBing 之类的英文别名
            for line in val:
                line = line.strip()
                if line and not re.match(r'^[A-Za-z\s]+$', line):
                    return line
            if val:
                return val[0].strip()
    return ""

# ── 提取服务价钱区块 ─────────────────────────────────────────────────────────
def get_service_block(desc: str) -> str:
    # 找服务起始位置
    svc_m = re.search(r'服务价钱[：:]|(?:服务|价钱)[：:]', desc)
    if not svc_m:
        # 没有明确标签，尝试找第一个 配套/RM 开头的行
        svc_m = re.search(r'(?:配套|RM\d)', desc)
    if not svc_m:
        return ""

    after_svc = desc[svc_m.end():]

    # 找联系区块起始
    contact_m = re.search(
        r'(?:联系|[Tt]elegram|https://t\.me|[Ww]hats[Aa]pp|直接点击)',
        after_svc
    )
    if contact_m:
        block = after_svc[:contact_m.start()]
    else:
        block = after_svc

    # 清理噪音
    block = re.sub(r'直接点击\s*WhatsApp\s*我', '', block, flags=re.IGNORECASE)
    block = re.sub(r'[（(]\s*加我个人\s*[Ww]hats[Aa]pp时.*?[）)]', '', block, flags=re.DOTALL)
    block = re.sub(r'好评\d+', '', block)
    return block.strip()

# ── 提取联系方式 ─────────────────────────────────────────────────────────────
def get_contact(desc: str, wa: str) -> str:
    lines = []
    # Telegram
    tg = re.search(r'https://t\.me/\S+', desc)
    if tg:
        lines.append(f"Telegram：{tg.group(0)}")
    # WhatsApp
    if wa:
        lines.append(f"WhatsApp：{wa}")
    return "\n".join(lines) if lines else wa

# ── 主逻辑 ───────────────────────────────────────────────────────────────────
with open(DATA_FILE, "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data["freelancers"]:
    desc = item.get("description", "")

    # 名字：优先从描述提取，否则用 JSON name（去掉区域前缀）
    name = get_field(desc, "名字") or re.sub(r'^[【\[].+?[】\]]\s*', '', item.get("name", "")).strip()

    # 国籍
    nat = get_field(desc, "国籍") or item.get("nationalityName", "")

    # 身材
    size = get_field(desc, "身材", "身高")
    if not size:
        h = item.get("height", "")
        w = item.get("weight", "")
        cup = item.get("cup", "")
        parts = []
        if h: parts.append(f"{h}cm")
        if w: parts.append(f"{w}kg")
        if cup: parts.append(cup)
        size = "/".join(parts)

    # 地点
    area = get_field(desc, "地点") or item.get("area", "")

    # 服务价钱
    service = get_service_block(desc)

    # 联系方式
    contact = get_contact(desc, item.get("whatsapp", ""))

    # 组装新描述
    new_desc = f"名字：{name}\n国籍：{nat}\n身材：{size}\n地点：{area}\n服务价钱：\n{service}\n\n联系方式：\n{contact}"
    item["description"] = new_desc

with open(DATA_FILE, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"✅ 已重新格式化 {len(data['freelancers'])} 条记录")

# 打印前3条验证
for item in data["freelancers"][:3]:
    print(f"\n=== id:{item['id']} ===")
    print(item["description"][:400])
