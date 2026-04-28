// 地区数据：覆盖新山所有主要区域
export interface AreaData {
  slug: string
  name: string
  nameZh: string
  description: string
  descriptionZh: string
  nearby: string[]      // 附近地标
  platforms: string[]   // 推荐平台名称
}

export const areas: AreaData[] = [
  {
    slug: 'bukit-indah',
    name: 'Bukit Indah',
    nameZh: '武吉英达',
    description: 'Bukit Indah is one of the most popular escort service areas in Johor Bahru, known for its upscale residential neighborhoods and convenient hotel accommodations. Many premium escort platforms serve the Bukit Indah area with reliable incall and outcall options.',
    descriptionZh: '武吉英达是新山最热门的伴游服务区域之一，以高档住宅区和便利的酒店住宿闻名。多个优质伴游平台在武吉英达提供可靠的上门和到店服务。',
    nearby: ['Bukit Indah Walk', 'AEON Bukit Indah', 'Tesco Bukit Indah'],
    platforms: ['jb69girl', 'Jbgirl', 'JBSam'],
  },
  {
    slug: 'mount-austin',
    name: 'Mount Austin',
    nameZh: '奥斯汀山',
    description: 'Mount Austin is a thriving residential and commercial hub in JB with numerous hotels and serviced apartments, making it a top choice for escort services. The area offers easy access from major highways and is well-served by multiple JB escort platforms.',
    descriptionZh: '奥斯汀山是新山繁华的住宅和商业中心，拥有众多酒店和服务公寓，是伴游服务的热门选择。该区域交通便利，多个JB伴游平台均有覆盖。',
    nearby: ['Austin Heights Water & Adventure Park', 'Mount Austin Food Street'],
    platforms: ['jb69girl', 'JBESCORT4U', 'JBSam'],
  },
  {
    slug: 'nusa-bestari',
    name: 'Nusa Bestari',
    nameZh: '努沙百斯达利',
    description: 'Nusa Bestari is a well-developed township in Johor Bahru popular among escort service seekers for its central location and variety of accommodation options. Several top-rated JB escort platforms actively serve this area.',
    descriptionZh: '努沙百斯达利是新山发展成熟的城镇区，因其中心位置和丰富的住宿选择而深受伴游服务需求者欢迎。多个顶级JB伴游平台在此区域提供服务。',
    nearby: ['Nusa Bestari Commercial Centre', 'D\'Pristine Medini'],
    platforms: ['jb69girl', 'Jbgirl', 'JBESCORT4U'],
  },
  {
    slug: 'jb-town',
    name: 'JB Town',
    nameZh: '新山市中心',
    description: 'JB Town (Johor Bahru City Centre) is the heart of the city, home to Jalan Dhoby and the busiest nightlife district. It is the most sought-after location for escort services with the highest density of available companions and platforms.',
    descriptionZh: '新山市中心是城市的核心地带，Jalan Dhoby 所在地，也是最繁忙的夜生活区。这里是伴游服务需求最集中的区域，平台和可选伴侣密度最高。',
    nearby: ['Jalan Dhoby', 'City Square JB', 'KSL City Mall', 'JB Sentral'],
    platforms: ['jb69girl', 'JBE', 'JB Escort 2 Me', 'JOHOR BAHRU 88'],
  },
  {
    slug: 'permas-jaya',
    name: 'Permas Jaya',
    nameZh: '百万镇',
    description: 'Permas Jaya is a mature township in eastern Johor Bahru offering a quieter, more private setting for escort services. With a good selection of hotels and condominiums, it is favored by those seeking discretion and comfort.',
    descriptionZh: '百万镇位于新山东部，是成熟的城镇区，为伴游服务提供更安静、更私密的环境。拥有丰富的酒店和公寓选择，深受注重隐私和舒适度的客户青睐。',
    nearby: ['Permas Jaya Waterfront', 'Giant Permas Jaya'],
    platforms: ['jb69girl', 'Jbgirl', 'JBSam'],
  },
  {
    slug: 'skudai',
    name: 'Skudai',
    nameZh: '士古来',
    description: 'Skudai is a major town in Johor Bahru close to the Senai Airport corridor. Its strategic location and affordable accommodations make it a popular choice for escort services in the western JB region.',
    descriptionZh: '士古来是新山的主要城镇，靠近士乃机场走廊。其战略位置和实惠的住宿使其成为新山西部伴游服务的热门选择。',
    nearby: ['Sutera Mall', 'Skudai Parade', 'UTM'],
    platforms: ['jb69girl', 'JBESCORT4U', 'JBSam'],
  },
  {
    slug: 'desa-tebrau',
    name: 'Desa Tebrau',
    nameZh: '地不佬',
    description: 'Desa Tebrau is a bustling commercial area in Johor Bahru with excellent connectivity and numerous mid-range hotels. Escort platforms serving this area provide convenient options for both incall and outcall services.',
    descriptionZh: '地不佬是新山繁忙的商业区，交通便利，拥有众多中档酒店。服务该区域的伴游平台提供便捷的上门和到店服务选择。',
    nearby: ['AEON Tebrau City', 'Tesco Desa Tebrau'],
    platforms: ['jb69girl', 'Jbgirl', 'JBESCORT4U'],
  },
  {
    slug: 'taman-pelangi',
    name: 'Taman Pelangi',
    nameZh: '彩虹花园',
    description: 'Taman Pelangi is a vibrant residential area in central Johor Bahru known for its food scene and proximity to JB Town. Its convenient location makes it an accessible choice for escort services in the city core.',
    descriptionZh: '彩虹花园是新山中部充满活力的住宅区，以美食和靠近市中心闻名。其便利的位置使其成为市区核心伴游服务的理想选择。',
    nearby: ['Pelangi Leisure Mall', 'Jalan Kuning food street'],
    platforms: ['jb69girl', 'JBE', 'Jbgirl'],
  },
  {
    slug: 'iskandar-puteri',
    name: 'Iskandar Puteri',
    nameZh: '依斯干达公主城',
    description: 'Iskandar Puteri (formerly Nusajaya) is a fast-growing development zone in Johor Bahru with luxury hotels and modern amenities. Premium escort platforms cater to this area for clients seeking high-end companionship.',
    descriptionZh: '依斯干达公主城（原努沙再也）是新山快速发展的开发区，拥有豪华酒店和现代化设施。高端伴游平台在此区域为寻求优质陪伴的客户提供服务。',
    nearby: ['Legoland Malaysia', 'Puteri Harbour', 'EduCity'],
    platforms: ['jb69girl', 'JBSam', 'JB Escort Xiaojie'],
  },
]

// 获取推荐平台的完整信息
export const platformLinks: Record<string, { slug: string; url: string; descEn: string; descZh: string }> = {
  'jb69girl': { slug: 'jb69girl', url: 'https://jb69girl.com/', descEn: 'Premium JB escort platform with real photos and verified profiles.', descZh: '新山顶级伴游平台，真实照片与认证资料。' },
  'JBE': { slug: 'jbe', url: 'https://jbescort.fun/', descEn: 'Popular JB escort directory, updated daily.', descZh: '热门新山伴游目录，每日更新。' },
  'JB Escort 2 Me': { slug: 'jb-escort-2-me', url: 'https://jbescorts2me.net/', descEn: 'Verified door-to-door escort service in JB.', descZh: '新山认证上门伴游服务。' },
  'JOHOR BAHRU 88': { slug: 'johor-bahru-88', url: 'https://jbescort88.com/', descEn: 'Established JB escort directory with long-standing reputation.', descZh: '老牌新山伴游目录。' },
  'Jbgirl': { slug: 'jbgirl', url: 'https://jbescort2u.net/', descEn: 'Curated selection of JB girls with detailed profiles.', descZh: '精选JB女孩合集。' },
  'JBESCORT4U': { slug: 'jbescort4u', url: 'https://jbescort4u.com/', descEn: 'Dedicated JB escort platform with secure booking.', descZh: '专属JB伴游平台。' },
  'JBSam': { slug: 'jbsam', url: 'https://johorescortsangels.com/', descEn: 'Handpicked premium companions with elegance.', descZh: '精心挑选的高端伴侣。' },
  'JB Escort Xiaojie': { slug: 'jb-escort-xiaojie', url: 'https://jbxiaojie.com/', descEn: 'Specializing in Chinese-speaking escorts.', descZh: '专注中文伴游服务。' },
}
