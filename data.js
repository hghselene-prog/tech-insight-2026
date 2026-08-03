/* ============================================================
   科技行业洞察 · 2026 Q2
   统一结构：所有页面共用 blocks[]，渲染由 app.js 单一遍历完成。
   每块 type：table | cards | bullets | company | compare | tabs | taxonomy | pages | hwlist
   每条数据均带 src（来源名称 + 可点击链接），页面内可点回原始出处。
   更新方式：改本文件对应字段 → 刷新即生效（GitHub Pages 自动部署）。
   ============================================================ */
var SITE = {
  meta: {
    title: "科技行业洞察",
    period: "2026 Q2 财报季",
    lastUpdated: "2026-08-03",
    updateCadence: "每周更新（周一）",
    note: "第一页为财报数据呈现；所有数据均附来源链接，可点回原始出处。"
  },

  nav: [
    { id: "earnings", label: "财报",          ico: "📊" },
    { id: "pc",       label: "硬件新品",      ico: "💻" },
    { id: "models",   label: "AI 模型",       ico: "🧠" },
    { id: "agent",    label: "端侧 Agent",    ico: "🤖" },
    { id: "industry", label: "端侧 AI 产业",  ico: "🌐" },
    { id: "method",   label: "方法论",        ico: "📚" }
  ],

  /* ============================ 1. 财报 ============================ */
  earnings: {
    title: "各大科技大厂财报",
    ico: "📊",
    sub: "三层结构：① 按「上市 / 未上市」梳理财报全景　② 核心数据（披露状态 + 各厂关键指标）　③ 跨公司洞察。所有数据均附来源链接，可点回原始出处。",
    conclusions: [
      { html: "<b>AI 投入进入验证期：</b>Google Cloud +82%、微软 Azure +40%、阿里云外部商业化 +40%，云收入 + 订单储备 + 产能扩张形成正循环，需求侧真实存在。", src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
      { html: "<b>高 Capex 可持续性成核心变量：</b>Alphabet 季度自由现金流自 2004 年上市以来首次转负（-$58.5 亿）；TSMC / 微软 / Meta 的 Capex 占销售比均处 33%–39% 高位。", src: { n: "Yahoo Finance", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" } },
      { html: "<b>上游确定性最强：</b>TSMC 营收 +33.7%、NVIDIA 营收 +85%，先进制程与算力供需偏紧至少维持一年；国内平头哥 GPU 已规模化交付（累计 47 万片）。", src: { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" } },
      { html: "<b>国内 AI 投入明显分化：</b>阿里云 AI 收入占比首破 30%、腾讯单季 AI 新业务拖累经营盈利约 88 亿、小米三年 AI 投入超 600 亿；但 C 端付费渗透仍低，回报兑现依赖 B 端与云。", src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } }
    ],
    blocks: [
      { type: "taxonomy", heading: "一、财报披露全景 · 按上市 / 未上市梳理",
        items: [
          { cat: "已上市（公开财报，数据最透明）", desc: "需逐季披露完整财报，可拿到营收 / 利润 / Capex / 现金流全口径。注：Meta（NASDAQ: META）实为上市公司，已据此归入本组（此前误归未上市）。",
            examples: [
              { n: "Alphabet（Gemini）· GOOGL", u: "https://www.abc.xyz/investor/" },
              { n: "Apple · AAPL", u: "https://www.apple.com/newsroom/" },
              { n: "Microsoft · MSFT", u: "https://www.microsoft.com/en-us/investor/" },
              { n: "NVIDIA · NVDA", u: "https://investor.nvidia.com/" },
              { n: "Meta · META", u: "https://investor.atmeta.com/" },
              { n: "腾讯 · 0700.HK", u: "https://www.tencent.com/zh-cn/investors.html" },
              { n: "阿里巴巴 · 9988.HK / BABA", u: "https://www.alibabagroup.com/en-US/about-alibaba/investor-relations" },
              { n: "小米 · 1810.HK", u: "https://ir.mi.com/" },
              { n: "TSMC · TSM（上游算力）", u: "https://pr.tsmc.com/english/news" },
              { n: "Amazon · AMZN（云 + 零售）", u: "https://ir.aboutamazon.com/" },
              { n: "智谱 · 02513.HK（大模型）", u: "https://www.zhipuai.cn/" },
              { n: "MiniMax · 00100.HK（大模型）", u: "https://www.minimax.io/" }
            ] },
          { cat: "未上市（无公开财报，看融资 / 估值 / 收入 run-rate）", desc: "不强制披露财务，市场以融资轮次、投后估值、年化收入 run-rate 与用户量间接衡量；DeepSeek 连融资 / 估值均未公开。",
            examples: [
              { n: "OpenAI（估值 $8520 亿）", u: "https://openai.com/news/" },
              { n: "Anthropic（估值 $9650 亿）", u: "https://www.anthropic.com/news" },
              { n: "月之暗面 Kimi（估值 $350 亿）", u: "https://www.huxiu.com/ainews/14326.html" },
              { n: "DeepSeek（未公开披露财务）", u: "https://www.deepseek.com/" }
            ] }
        ] },
      { type: "table", heading: "二、核心数据 · 披露状态与关键指标一览",
        table: {
          head: ["公司", "上市状态", "最新财报期", "披露日", "关键指标（同比）", "来源"],
          rows: [
            { cells: ["Alphabet", "已上市", "Q2'26（自然季）", "7/22", "营收 $1198 亿 +24%；云 +82%；FCF 上市来首负"], src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
            { cells: ["Microsoft", "已上市", "FY26 Q3", "4/29", "Azure +40%；微软云 $545 亿；Capex $1900 亿"], src: { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } },
            { cells: ["NVIDIA", "已上市", "FY27 Q1", "5/20", "营收 $816 亿 +85%；数据中心 $752 亿 +92%"], src: { n: "NVIDIA", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } },
            { cells: ["Apple", "已上市", "FY26 Q2", "4/30", "营收 $1112 亿 +16.6%；大中华区 +28%"], src: { n: "Apple", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" } },
            { cells: ["Meta", "已上市", "Q1'26", "4/29", "营收 $563 亿 +33%；Capex 占销售 33.7%"], src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
            { cells: ["TSMC", "已上市", "Q2'26", "7/16", "营收 $402 亿 +33.7%；净利 +77.4%"], src: { n: "TSMC", u: "https://pr.tsmc.com/english/news/3326" } },
            { cells: ["Amazon", "已上市", "Q1'26", "4/29", "营收 $1815 亿 +16.6%；AWS 年化 $1287 亿"], src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
            { cells: ["腾讯", "已上市", "2026 Q1", "5/13", "营收 1965 亿 +9%；归母净利 581 亿 +21%；AI 拖累约 88 亿"], src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } },
            { cells: ["阿里巴巴", "已上市", "FY26 Q4", "5/13", "收入 2434 亿 +3%（同口径 +11%）；云 +38%；AI 收入占比 30%"], src: { n: "阿里财报", u: "https://www.alibabagroup.com/zh-HK/document-1991237455038119936" } },
            { cells: ["小米", "已上市", "2026 Q1", "5/26", "营收 991 亿 -10.9%；经调整净利 61 亿 -43.1%；汽车+AI 199 亿"], src: { n: "经济参考报", u: "http://jjckb.xinhuanet.com/20260527/ea4aa6cf2a96483c992465d23a48d5b6/c.html" } },
            { cells: ["OpenAI", "未上市", "融资 2026-03-31", "—", "估值 $8520 亿；ARR ~$250 亿；WAU 9 亿"], src: { n: "证券时报", u: "https://www.stcn.com/article/detail/3720297.html" } },
            { cells: ["Anthropic", "未上市", "融资 2026-05-28", "—", "估值 $9650 亿；run-rate >$470 亿"], src: { n: "Anthropic", u: "https://www.anthropic.com/news/series-h" } },
            { cells: ["月之暗面 Kimi", "未上市", "融资 2026-07-29", "—", "F 轮 >$35 亿，估值 $350 亿；计划赴港 IPO"], src: { n: "虎嗅", u: "https://www.huxiu.com/ainews/14326.html" } },
            { cells: ["智谱", "已上市", "2025 年报", "—", "营收 7.24 亿 +132%；净亏 47 亿；港股 02513.HK"], src: { n: "新浪财经·智谱回撤", u: "https://cj.sina.com.cn/articles/view/6192937794/17120bb4202002sgio?finpagefr=p_101" } },
            { cells: ["MiniMax", "已上市", "2025 年报", "—", "收入 $7904 万 +159%；港股 00100.HK"], src: { n: "腾讯新闻·中国大模型突围", u: "https://new.qq.com/rain/a/20260706A07XT600" } },
            { cells: ["DeepSeek", "未上市", "未披露", "—", "未公开披露财务与估值"], src: { n: "DeepSeek", u: "https://www.deepseek.com/" } }
          ]
        } },
      { type: "table", heading: "三、核心财务指标速览（营收 / 净利 / 资本开支）",
        table: {
          head: ["公司", "最新季营收", "同比", "净利 / 盈利", "资本开支 / 投入", "来源"],
          rows: [
            { cells: ["Alphabet", "$1198 亿", "+24%", "含 $990 亿一次性股权收益", "Capex $1950–2050 亿"], src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
            { cells: ["Microsoft", "微软云 $545 亿", "+29%", "商业 RPO $6270 亿", "Capex $1900 亿"], src: { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } },
            { cells: ["NVIDIA", "$816 亿", "+85%", "净利 $583 亿（+211%）", "—"], src: { n: "NVIDIA", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } },
            { cells: ["Apple", "$1112 亿", "+16.6%", "毛利率 49.3%", "—"], src: { n: "Apple", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" } },
            { cells: ["Meta", "$563 亿", "+33%", "净利 $268 亿（+61%）", "Capex 占销售 33.7%"], src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
            { cells: ["TSMC", "$402 亿", "+33.7%", "净利 $223 亿（+77.4%）", "—"], src: { n: "TSMC", u: "https://pr.tsmc.com/english/news/3326" } },
            { cells: ["Amazon", "$1815 亿", "+16.6%", "净利 $303 亿（+76.7%）", "Capex 占销售 24.35%"], src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
            { cells: ["腾讯", "1965 亿", "+9%", "归母 581 亿（+21%）", "Capex 319 亿（+63%）"], src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } },
            { cells: ["阿里巴巴", "2434 亿", "+3%（同口径 +11%）", "经营利润转亏", "Capex >3800 亿（三年）"], src: { n: "阿里财报", u: "https://www.alibabagroup.com/zh-HK/document-1991237455038119936" } },
            { cells: ["小米", "991 亿", "-10.9%", "经调整 61 亿（-43.1%）", "研发 90 亿（+33.4%）"], src: { n: "经济参考报", u: "http://jjckb.xinhuanet.com/20260527/ea4aa6cf2a96483c992465d23a48d5b6/c.html" } },
            { cells: ["智谱", "2025 营收 7.24 亿", "+131.9%", "净亏 47.18 亿", "研发 31.8 亿"], src: { n: "新浪财经·智谱回撤", u: "https://cj.sina.com.cn/articles/view/6192937794/17120bb4202002sgio?finpagefr=p_101" } },
            { cells: ["MiniMax", "2025 收入 $7904 万", "+158.9%", "毛利 $2008 万（毛利率 25.4%）", "—"], src: { n: "腾讯新闻·中国大模型突围", u: "https://new.qq.com/rain/a/20260706A07XT600" } },
            { cells: ["OpenAI", "ARR ~$250 亿", "—", "2025 净亏 $90 亿", "—"], src: { n: "Sacra", u: "https://sacra.com/c/openai/" } },
            { cells: ["Anthropic", "run-rate >$470 亿", "—", "预计 2027 正现金流", "—"], src: { n: "Anthropic", u: "https://www.anthropic.com/news/series-h" } },
            { cells: ["月之暗面 Kimi", "估值 $350 亿", "—", "半年融资 >$39 亿", "拟赴港 IPO"], src: { n: "虎嗅", u: "https://www.huxiu.com/ainews/14326.html" } },
            { cells: ["DeepSeek", "未公开披露", "—", "未公开披露", "未公开披露"], src: { n: "DeepSeek 官方", u: "https://www.deepseek.com/" } }
          ]
        } },
      { type: "company", heading: "四、已上市 · 海外大厂",
        companies: [
          { name: "Alphabet", tag: "Q2'26 · 7/22",
            summary: "AI 投入进入验证期：云收入 +82%、Capex 指引再上修，但季度自由现金流自 2004 年上市以来首次转负（-$58.5 亿），激进基建可持续性成焦点。",
            metrics: [
              { k: "营收", v: "$1198 亿", d: "同比 +24%", src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
              { k: "Google Cloud", v: "+82%", d: "$248 亿；运营利润率 35.6%（去年 20.7%）", src: { n: "Yahoo Finance", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" } },
              { k: "云 Backlog", v: "$5140 亿", d: "环比 +$500 亿，需求侧硬证据", src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
              { k: "Capex 指引", v: "$1950–2050 亿", d: "2026 全年再上修 $150 亿", src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } }
            ],
            insights: [
              { type: "warn", html: "净利含约 <b>$990 亿</b>股权证券未实现收益（一次性），经营层面增长由云与搜索驱动，需剔除后看真实盈利质量。", src: { n: "Yahoo Finance", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" } }
            ],
            src: { n: "Alphabet Q2'26（智东西）", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
          { name: "Microsoft", tag: "FY26 Q3 · 4/29",
            summary: "云与 AI 双轮驱动：Azure +40%、微软云 $545 亿（+29%），全年 Capex 预计 $1900 亿，商业 RPO $6270 亿。",
            metrics: [
              { k: "Azure", v: "+40%", d: "云收入 +29%，AI 年化收入超 $370 亿", src: { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } },
              { k: "微软云", v: "$545 亿", d: "同比 +29%", src: { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } },
              { k: "全年 Capex", v: "$1900 亿", d: "商业 RPO $6270 亿", src: { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } }
            ],
            src: { n: "Microsoft FY26 Q3（官方）", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } },
          { name: "NVIDIA", tag: "FY27 Q1 · 5/20",
            summary: "算力需求持续兑现：营收 +85%、净利 +211%，数据中心 $752 亿（+92%），市值突破 $5 万亿。",
            metrics: [
              { k: "营收", v: "$816 亿", d: "同比 +85.2%", src: { n: "NVIDIA", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } },
              { k: "净利", v: "$583 亿", d: "同比 +210.6%，毛利率 74.9%", src: { n: "NVIDIA", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } },
              { k: "数据中心", v: "$752 亿", d: "同比 +92%", src: { n: "NVIDIA", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } }
            ],
            src: { n: "NVIDIA FY27 Q1（官方）", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } },
          { name: "Apple", tag: "FY26 Q2 · 4/30",
            summary: "硬件回暖、端侧 AI 仍依赖外部补位：营收 +16.6%、大中华区 +28%；管理层将于 9/1 交接（库克转任执行主席、Ternus 接任 CEO）。",
            metrics: [
              { k: "营收", v: "$1112 亿", d: "同比 +16.6%，毛利率 49.3%", src: { n: "Apple", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" } },
              { k: "大中华区", v: "$205 亿", d: "同比 +28%，区域显著回暖", src: { n: "Apple", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" } },
              { k: "端侧 AI", v: "依赖 Gemini", d: "仍靠 Google Gemini 补位智能能力", src: { n: "Apple", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" } }
            ],
            insights: [
              { html: "管理层交接：库克将于 <b>9/1 转任执行主席</b>、Ternus 接任 CEO。", src: { n: "Apple CEO 变更（新华社）", u: "https://www.news.cn/20260501/7bc2207dfdc14ef28d22c447926a044a/c.html" } }
            ],
            src: { n: "Apple FY26 Q2（官方）", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" } },
          { name: "Meta", tag: "Q1'26 · 4/29 · 已上市",
            summary: "广告与 AI 投入并行：营收 +33%、净利 +61%，但 Capex 占销售比升至 33.7%，Q2 指引 $580–610 亿。注：Meta 为上市公司（NASDAQ: META），此前误归未上市，已修正。",
            metrics: [
              { k: "营收", v: "$563 亿", d: "同比 +33%", src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
              { k: "净利", v: "$268 亿", d: "同比 +61%", src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
              { k: "Capex 占销售", v: "33.7%", d: "Q2 指引 $580–610 亿；面临欧盟儿童安全监管", src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } }
            ],
            src: { n: "Big Tech 财报综述（Investopedia）", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
          { name: "TSMC", tag: "Q2'26 · 7/16",
            summary: "受 AI 拉动高增：营收 +33.7%、净利 +77.4%，2nm 占晶圆营收 3% 并快速爬坡，先进制程（≤7nm）占 77%。",
            metrics: [
              { k: "营收", v: "$402 亿", d: "同比 +33.7%", src: { n: "TSMC", u: "https://pr.tsmc.com/english/news/3326" } },
              { k: "净利", v: "$223 亿", d: "同比 +77.4%，毛利率 67.7%", src: { n: "TSMC", u: "https://pr.tsmc.com/english/news/3326" } },
              { k: "Q3 指引", v: "$446–458 亿", d: "环比续增，AI 需求强劲", src: { n: "TSMC", u: "https://pr.tsmc.com/english/news/3326" } }
            ],
            src: { n: "TSMC Q2'26（官方）", u: "https://pr.tsmc.com/english/news/3326" } },
          { name: "Amazon", tag: "Q1'26 · 4/29",
            summary: "零售稳健、云续增：营收 +16.6%、净利 +76.7%，AWS 年化收入 $1287 亿，Capex 占销售 24.35%。",
            metrics: [
              { k: "营收", v: "$1815 亿", d: "同比 +16.6%", src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
              { k: "净利", v: "$303 亿", d: "同比 +76.7%", src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
              { k: "AWS 年化", v: "$1287 亿", d: "Capex 占销售 24.35%", src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } }
            ],
            src: { n: "Big Tech 财报综述（Investopedia）", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } }
        ] },
      { type: "company", heading: "五、已上市 · 国内三巨头",
        companies: [
          { name: "腾讯", tag: "2026 Q1 · 5/13",
            summary: "AI 新业务单季拖累经营盈利约 88 亿（元宝、混元、CodeBuddy、WorkBuddy、QClaw）；资本开支 319 亿（环比 +63%）。马化腾称 AI 仍“船速太慢”。",
            metrics: [
              { k: "营收", v: "1965 亿", d: "同比 +9%；毛利 1113 亿（+11%）", src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } },
              { k: "归母净利润", v: "581 亿", d: "同比 +21%；Non-IFRS 经营利润 756 亿（+9%）", src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } },
              { k: "AI 拖累", v: "约 88 亿", d: "新 AI 产品对单季经营盈利的折损", src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } },
              { k: "资本开支", v: "319 亿", d: "环比 +63%，大部分用于 AI；自由现金流 567 亿", src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } }
            ],
            src: { n: "腾讯 Q1'26（21 世纪经济报道）", u: "https://www.stcn.com/article/detail/3910101.html" } },
          { name: "阿里巴巴", tag: "FY26 Q4 · 5/13",
            summary: "AI 收入占比首破 30%、云外部商业化 +40%；但高投入令利润承压（经营利润由盈转亏），自由现金流净流出 173 亿。",
            metrics: [
              { k: "收入", v: "2434 亿", d: "同比 +3%（同口径 +11%）", src: { n: "阿里财报", u: "https://www.alibabagroup.com/zh-HK/document-1991237455038119936" } },
              { k: "云智能集团", v: "416 亿", d: "同比 +38%；外部商业化 +40%", src: { n: "阿里财报", u: "https://www.alibabagroup.com/zh-HK/document-1991237455038119936" } },
              { k: "AI 收入占比", v: "30%", d: "AI 相关收入 89.71 亿，年化 ARR 破 358 亿", src: { n: "21 世纪经济报道", u: "https://www.21jingji.com/article/20260514/herald/f452745b951bab66b31a870d018ad674.html" } },
              { k: "资本开支", v: ">3800 亿", d: "三年云+AI 规划，管理层称“远超此数”", src: { n: "21 世纪经济报道", u: "https://www.21jingji.com/article/20260514/herald/f452745b951bab66b31a870d018ad674.html" } }
            ],
            src: { n: "阿里巴巴 FY26 Q4（官方）", u: "https://www.alibabagroup.com/zh-HK/document-1991237455038119936" } },
          { name: "小米", tag: "2026 Q1 · 5/26",
            summary: "业绩承压（营收 -10.9%、净利 -43.1%），但汽车 + AI 创新业务收入 199 亿（+6.9%）；三年 AI 投入承诺超 600 亿，MiMo-V2.5-pro 登顶开源模型。",
            metrics: [
              { k: "营收", v: "991 亿", d: "同比 -10.9%；经调整净利 61 亿（-43.1%）", src: { n: "经济参考报", u: "http://jjckb.xinhuanet.com/20260527/ea4aa6cf2a96483c992465d23a48d5b6/c.html" } },
              { k: "汽车 + AI", v: "199 亿", d: "同比 +6.9%；其中汽车 190 亿（+5.1%）", src: { n: "经济参考报", u: "http://jjckb.xinhuanet.com/20260527/ea4aa6cf2a96483c992465d23a48d5b6/c.html" } },
              { k: "研发开支", v: "90 亿", d: "同比 +33.4%；AI 今年≥160 亿、三年>600 亿", src: { n: "经济参考报", u: "http://jjckb.xinhuanet.com/20260527/ea4aa6cf2a96483c992465d23a48d5b6/c.html" } }
            ],
            src: { n: "小米 Q1'26（经济参考报）", u: "http://jjckb.xinhuanet.com/20260527/ea4aa6cf2a96483c992465d23a48d5b6/c.html" } }
        ] },
      { type: "company", heading: "六、未上市 · AI 创企（融资 / 估值 / 收入 run-rate）",
        companies: [
          { name: "OpenAI", tag: "未上市 · 融资 2026-03-31",
            summary: "完成 $1220 亿融资、估值 $8520 亿；ARR 约 $250 亿、ChatGPT 周活 9 亿；2025 净亏约 $90 亿，预计 2030 才现金流转正。2026-06-08 秘密递交 IPO。",
            metrics: [
              { k: "估值", v: "$8520 亿", d: "2026-03-31 完成 $1220 亿融资", src: { n: "证券时报", u: "https://www.stcn.com/article/detail/3720297.html" } },
              { k: "年化收入", v: "~$250 亿", d: "ChatGPT 周活 9 亿、付费订阅 >5000 万", src: { n: "Sacra", u: "https://sacra.com/c/openai/" } },
              { k: "盈利时点", v: "2030", d: "2025 净亏约 $90 亿；2026 预计亏 ~$140 亿", src: { n: "Investing.com", u: "https://www.investing.com/analysis/openais-real-ipo-risk-is-financial-transparency-200680136" } }
            ],
            src: { n: "OpenAI 融资（证券时报）", u: "https://www.stcn.com/article/detail/3720297.html" } },
          { name: "Anthropic", tag: "未上市 · 融资 2026-05-28",
            summary: "H 轮 $650 亿、估值 $9650 亿（超 OpenAI）；run-rate 收入 >$470 亿（企业级为主），预计 2027 年实现正现金流。",
            metrics: [
              { k: "估值", v: "$9650 亿", d: "2026-05-28 H 轮 $650 亿，全球最贵 AI 创企", src: { n: "Anthropic", u: "https://www.anthropic.com/news/series-h" } },
              { k: "run-rate 收入", v: ">$470 亿", d: "2026-04；预计 6 月底达 $500 亿", src: { n: "21 世纪经济报道", u: "https://www.21jingji.com/article/20260530/d1815e391c6ce7b0ce25e0d74bb61f55.html" } },
              { k: "Claude Code", v: ">$25 亿", d: "run-rate 收入，2026 年初以来翻倍", src: { n: "Anthropic", u: "https://www.anthropic.com/news/series-h" } }
            ],
            src: { n: "Anthropic H 轮（官方）", u: "https://www.anthropic.com/news/series-h" } },
          { name: "月之暗面 Kimi", tag: "未上市 · 融资 2026-07-29",
            summary: "F 轮超 $35 亿、估值 $350 亿；半年累计融资超 $39 亿；G 轮（Pre-IPO）投前估值 $500 亿，计划赴港上市。",
            metrics: [
              { k: "估值", v: "$350 亿", d: "F 轮超 $35 亿，提前关闭", src: { n: "虎嗅", u: "https://www.huxiu.com/ainews/14326.html" } },
              { k: "累计融资", v: ">$39 亿", d: "2026 上半年，Pre-IPO 轮投前 $500 亿", src: { n: "虎嗅", u: "https://www.huxiu.com/ainews/14326.html" } }
            ],
            src: { n: "月之暗面 Kimi 融资（虎嗅）", u: "https://www.huxiu.com/ainews/14326.html" } },
          { name: "DeepSeek", tag: "未上市 · 未披露财务",
            summary: "以低成本训练、高性价比著称，但公司不公开披露营收、利润、估值与融资；市场仅能从模型发布节奏与行业影响间接判断其进展。",
            metrics: [
              { k: "财务披露", v: "无", d: "未公开营收 / 利润 / 估值 / 融资", src: { n: "DeepSeek 官方", u: "https://www.deepseek.com/" } }
            ],
            src: { n: "DeepSeek 官方", u: "https://www.deepseek.com/" } }
        ] }
    ],
    insightsTitle: "七、洞察",
    insights: [
      { type: "", html: "<b>洞察 1：</b>AI 投资叙事正从“先投入、等需求”转向“云收入 + 订单储备 + 产能扩张相互验证”。Google Cloud 82% 增速、微软 Azure 40%、阿里云外部商业化 +40%、Alphabet $5140 亿云 Backlog 提供需求侧硬证据；“网传谷歌砍 Capex”被证伪，其 2026 全年 Capex 反而再上修。", src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
      { type: "warn", html: "<b>洞察 2（风险）：</b>Alphabet 季度自由现金流自 2004 年上市以来<b>首次转负（-$58.5 亿）</b>；TSMC / 微软 / Meta 的 Capex 占销售比均处 33%–39% 高位，阿里全年自由现金流亦净流出 466 亿。若云收入增速掉档，高资本开支可持续性将成市场焦点。", src: { n: "Yahoo Finance", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" } },
      { type: "good", html: "<b>洞察 3：</b>上游（TSMC 先进制程、NVIDIA 算力、平头哥 GPU 已交付 47 万片）确定性最强；中游云与模型调用在产能约束下至少维持一年供不应求；下游应用（C 端 AI 助手）仍受付费渗透低制约，回报兑现依赖 B 端与云。", src: { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" } },
      { type: "", html: "<b>洞察 4（国内分化）：</b>国内三巨头路径不同——阿里把 AI 并入云、AI 收入占比破 30%；腾讯把“新 AI 产品”单列、单季拖累约 88 亿；小米以汽车 + AI 创新业务托底、三年承诺超 600 亿。共同点：C 端订阅付费渗透仍个位数，短期收入难覆盖投入。", src: { n: "21 世纪经济报道", u: "https://www.stcn.com/article/detail/3910101.html" } },
      { type: "warn", html: "<b>洞察 5（未上市估值）：</b>Anthropic（$9650 亿）、OpenAI（$8520 亿）估值已超多数标普 500 企业，但均深亏、现金流转正要到 2030；Kimi 半年融资超 $39 亿、奔赴港 IPO。一级市场用 run-rate 收入给企业级 AI 定天价，透明度远低于上市公司，需警惕估值与盈利的剪刀差。", src: { n: "Anthropic", u: "https://www.anthropic.com/news/series-h" } }
    ],
    sources: [
      { n: "Alphabet Q2'26 财报（智东西）", u: "https://new.qq.com/rain/a/20260723A0BV1600" },
      { n: "Alphabet Q2'26（Yahoo Finance）", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" },
      { n: "Microsoft FY26 Q3 财报（官方）", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" },
      { n: "NVIDIA FY27 Q1 财报（官方）", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" },
      { n: "Apple FY26 Q2 财报（官方）", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" },
      { n: "Apple CEO 变更（新华社）", u: "https://www.news.cn/20260501/7bc2207dfdc14ef28d22c447926a044a/c.html" },
      { n: "Meta / Amazon 财报综述（Investopedia）", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" },
      { n: "TSMC Q2'26 财报（官方）", u: "https://pr.tsmc.com/english/news/3326" },
      { n: "腾讯 Q1'26（21 世纪经济报道）", u: "https://www.stcn.com/article/detail/3910101.html" },
      { n: "阿里巴巴 FY26 Q4（官方）", u: "https://www.alibabagroup.com/zh-HK/document-1991237455038119936" },
      { n: "阿里 AI 投入（21 世纪经济报道）", u: "https://www.21jingji.com/article/20260514/herald/f452745b951bab66b31a870d018ad674.html" },
      { n: "小米 Q1'26（经济参考报）", u: "http://jjckb.xinhuanet.com/20260527/ea4aa6cf2a96483c992465d23a48d5b6/c.html" },
      { n: "OpenAI 融资（证券时报）", u: "https://www.stcn.com/article/detail/3720297.html" },
      { n: "OpenAI 财务（Sacra）", u: "https://sacra.com/c/openai/" },
      { n: "Anthropic H 轮（官方）", u: "https://www.anthropic.com/news/series-h" },
      { n: "月之暗面 Kimi 融资（虎嗅）", u: "https://www.huxiu.com/ainews/14326.html" }
    ]
  },

  /* ============================ 2. PC/平板新品 ============================ */
  pc: {
    title: "硬件新品 · PC / 平板 / AI 智能硬件",
    ico: "💻",
    sub: "按「品类三大模块 + 时间 × 关注级别」组织：① PC/笔记本 ② 平板 ③ AI 智能硬件（耳机/云台/键盘/穿戴等）。每条目带日期与关注级别——⭐长期关注（结构性重要，如新 AI 系统/芯片平台）🆕新品速览（一过性新机）。页顶可按时间范围 / 关注级别筛选，近期信息默认全显，重要旧信息靠「长期关注」不漏看。数据来源覆盖 IT之家、太平洋电脑网、腾讯/新浪新闻与各大品牌官网。",
    conclusions: [
      { html: "<b>2026 硬件主线三线并行：</b>轻薄化（华为 798g / 联想 975g）、自研芯片（华为麒麟 X 系、苹果 M5）、端侧 AI（NPU 普遍 40–180 TOPS）成为新品共同卖点。", src: { n: "网易/机智猫", u: "https://www.163.com/dy/article/L317LSAB05118UEG.html" } },
      { html: "<b>华为打出「鸿蒙 PC + 自研麒麟」组合拳：</b>MateBook Pro S 仅 798g 刷新 14″ 金属本纪录，MateBook Fold 二代加手写笔，麒麟 XE90/X90 Plus 形成三层芯片布局。", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260729A04C9A00?refer=cp_1009" } },
      { html: "<b>游戏本进入「性能释放内卷」：</b>荣耀 WIN H9 干到 270W、雷神小轻龙碳纤维 1.64kg、机械革命翼龙 1.5kg——轻薄与高性能的边界被持续打破。", src: { n: "荣耀官网", u: "https://www.honor.com/cn/news/honor-win-h9-h7-launch" } },
      { html: "<b>国产厂集体上探高端：</b>联想 ThinkPad X1 Carbon <984g、荣耀 MagicBook Pro、机械革命/雷神用镁合金/碳纤维，硬件工艺追平国际大厂且价格更具侵略性。", src: { n: "联想商城", u: "https://thinkpad.lenovo.com.cn/index.html?sm" } },
      { html: "<b>端侧 AI 仍是「算力到位、场景缺位」：</b>NPU 普遍 40–180 TOPS，但系统级智能体（联想 Qira、华为小艺、Apple Intelligence）才是把算力变刚需的关键，瓶颈仍在 OS 层。", src: { n: "联想 CES 社区", u: "https://mclub.lenovo.com.cn/thread-9454008-1-1.html" } }
    ],
    blocks: [
      { type: "hwlist", filterHint: "提示：选「近30天」看最新动态；选「⭐ 长期关注」看结构性重要信息（如联想 Qira、华为鸿蒙 PC+麒麟）；重要旧信息默认不被时间筛选隐藏。平板 / AI 智能硬件模块当前为框架占位（🚧），真实 2026 数据可随时补。",
        modules: [
          { id: "pc", name: "PC / 笔记本", icon: "💻",
            items: [
              { name: "华为 鸿蒙 PC + 麒麟 XE90 平台", brand: "华为", date: "2026-07-29", level: "long",
                summary: "7/29 技术沟通会官宣 MateBook Pro S 与 MateBook Fold 二代，并发布自研 PC 芯片麒麟 XE90 / X90 Plus，形成「高能效/高性能/旗舰」三层芯片布局；鸿蒙电脑版打通软硬一体。属结构性重要信息，中长期仍值得回看。",
                metrics: [
                  { k: "麒麟 XE90 / X90 Plus", v: "自研 PC 芯片", d: "X90 Plus 高性能、XE90 高能效；XE90 对比 X90 单核 +23%、能效 +25%、NPU +40%", src: { n: "网易/机智猫", u: "https://www.163.com/dy/article/L317LSAB05118UEG.html" } },
                  { k: "鸿蒙电脑版", v: "生态闭环", d: "折叠+手写笔+鸿蒙 AI 小艺，强化国产 PC 差异化路线", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260729A04C9A00?refer=cp_1009" } }
                ],
                src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260729A04C9A00?refer=cp_1009" } },
              { name: "华为 MateBook Pro S", brand: "华为", date: "2026-08-05", level: "new",
                summary: "全球最轻 14″ 金属本，798g；麒麟 XE90 首发，内置小艺。",
                metrics: [ { k: "重量", v: "798g", d: "全球最轻 14″ 金属本；16/24/32GB，512GB/1TB；140W；五种配色", src: { n: "网易/机智猫", u: "https://www.163.com/dy/article/L317LSAB05118UEG.html" } } ],
                src: { n: "网易/机智猫", u: "https://www.163.com/dy/article/L317LSAB05118UEG.html" } },
              { name: "华为 MateBook Fold 非凡大师（二代）", brand: "华为", date: "2026-08-05", level: "new",
                summary: "折叠 PC，8/5 全场景发布会；金色机身，首次支持手写笔；麒麟 X9 系旗舰芯片。",
                metrics: [ { k: "形态", v: "折叠 PC", d: "24GB+512GB / 24GB+1TB / 32GB+2TB；鸿蒙电脑版；上代 23,999 元起", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260729A04C9A00?refer=cp_1009" } } ],
                src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260729A04C9A00?refer=cp_1009" } },
              { name: "华为 MateBook 14 鸿蒙版", brand: "华为", date: "2026-04-20", level: "new",
                summary: "2.8K OLED 云晰柔光屏；鸿蒙 AI；21 小时续航。",
                metrics: [ { k: "屏幕", v: "2.8K OLED", d: "云晰柔光屏；鸿蒙 AI；21h 续航", src: { n: "PChome", u: "https://article.pchome.net/n308/z60-p2-l1/53.html" } } ],
                src: { n: "PChome", u: "https://article.pchome.net/n308/z60-p2-l1/53.html" } },
              { name: "Apple M5 平台 + Apple Intelligence", brand: "Apple", date: "2026-03-04", level: "long",
                summary: "2026 春季定义为「端侧 AI 普及元年」——M5 全系落地 + Apple Intelligence 让本地 AI 成默认能力；平台级迭代，中长期仍具参考性。",
                metrics: [
                  { k: "M5 芯片", v: "全系", d: "MacBook Air/Pro、iPad Air 同步适配；端侧 AI 任务本地化", src: { n: "Apple 新闻稿", u: "https://www.apple.com.cn/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5" } },
                  { k: "Apple Intelligence", v: "默认能力", d: "本地 AI 成默认，形态创新保守（芯片+存储迭代）", src: { n: "Apple 新闻稿", u: "https://www.apple.com.cn/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5" } }
                ],
                src: { n: "Apple 新闻稿", u: "https://www.apple.com.cn/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5" } },
              { name: "Apple MacBook Air (M5)", brand: "Apple", date: "2026-03-11", level: "new",
                summary: "13″/15″，M5 芯片，512GB 起最高 4TB；N1 芯片 Wi-Fi 7 + 蓝牙 6；18h 续航。",
                metrics: [ { k: "起售", v: "美 $1099", d: "3/11 发售；台 NT$35,900 起", src: { n: "Apple 新闻稿", u: "https://www.apple.com.cn/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5" } } ],
                src: { n: "Apple 新闻稿", u: "https://www.apple.com.cn/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5" } },
              { name: "Apple MacBook Pro (M5 Pro/Max)", brand: "Apple", date: "2026-03", level: "new",
                summary: "14″/16″，M5 Pro/Max，24GB 起最高 48GB；Thunderbolt 5；SSD 提速 2×；20–22h 续航。",
                metrics: [ { k: "芯片", v: "M5 Pro/Max", d: "24GB 起；Thunderbolt 5；20–22h 续航", src: { n: "yipee 整理", u: "https://3c.yipee.cc/329743/" } } ],
                src: { n: "yipee 整理", u: "https://3c.yipee.cc/329743/" } },
              { name: "小米 REDMI Book 14/16 2026", brand: "小米 / REDMI", date: "2026-04-17", level: "new",
                summary: "酷睿 Ultra 5 125H，双风扇双热管 60W；80Wh；120Hz；国补后 4,674 起。",
                metrics: [ { k: "起售", v: "¥5,499", d: "4/17 开售；14″ 2880×1800/1.49kg，16″ 2560×1600/1.86kg", src: { n: "IT之家", u: "https://tech.ifeng.com/c/8sOUmAZpqMO" } } ],
                src: { n: "IT之家", u: "https://tech.ifeng.com/c/8sOUmAZpqMO" } },
              { name: "小米 REDMI Book Pro 2026", brand: "小米 / REDMI", date: "2026-04", level: "new",
                summary: "第三代酷睿 Ultra X7 358H（Intel 18A），180 TOPS AI 算力；LPDDR5X 9600；92Wh。",
                metrics: [ { k: "AI 算力", v: "180 TOPS", d: "酷睿 Ultra X7 358H；¥6,999 起", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260422A052R600?refer=cp_1009" } } ],
                src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260422A052R600?refer=cp_1009" } },
              { name: "联想 Lenovo Qira 个人超级智能体", brand: "联想", date: "2026-01-07", level: "long",
                summary: "CES 2026 发布个人超级智能体 Lenovo Qira，打通 PC/手机/平板跨设备；配卷轴屏概念机。属「新 AI 系统」类结构性信息——你举例的长期关注对象。",
                metrics: [ { k: "Qira 智能体", v: "跨设备", d: "PC/手机/平板统一调度；ThinkPad Rollable XD 卷轴屏、Legion Pro Rollable 概念 AI PC", src: { n: "联想 CES 社区", u: "https://mclub.lenovo.com.cn/thread-9454008-1-1.html" } } ],
                src: { n: "联想 CES 社区", u: "https://mclub.lenovo.com.cn/thread-9454008-1-1.html" } },
              { name: "联想 ThinkPad X1 Carbon Aura 2026", brand: "联想", date: "2026", level: "new",
                summary: "Ultra X7，2.8K 120Hz，内置 SIM 卡；<984g。",
                metrics: [ { k: "重量", v: "<984g", d: "¥15,299 起（FIFA 版 ¥19,999）", src: { n: "联想商城", u: "https://thinkpad.lenovo.com.cn/index.html?sm" } } ],
                src: { n: "联想商城", u: "https://thinkpad.lenovo.com.cn/index.html?sm" } },
              { name: "联想 YOGA Air 14 Ultra", brand: "联想", date: "2026-05-19", level: "new",
                summary: "2.8K POLED 1100nits 极致轻薄；975g。",
                metrics: [ { k: "重量", v: "975g", d: "Ultra 7 258V/32G/1TB；5/19 开售", src: { n: "联想 CES 社区", u: "https://mclub.lenovo.com.cn/thread-9454008-1-1.html" } } ],
                src: { n: "联想 CES 社区", u: "https://mclub.lenovo.com.cn/thread-9454008-1-1.html" } },
              { name: "联想 拯救者 Y9000P 2026", brand: "联想", date: "2026-05-19", level: "new",
                summary: "酷睿 Ultra 9 290HX Plus，面向重度游戏/创作；同场小新 Air 14 2026。",
                metrics: [ { k: "定位", v: "高性能", d: "酷睿 Ultra 9 290HX Plus", src: { n: "爱企查", u: "https://aiqicha.baidu.com/details/rankList?query=42a73e8a5d01b4aa70d2680260d011dd&type=20" } } ],
                src: { n: "爱企查", u: "https://aiqicha.baidu.com/details/rankList?query=42a73e8a5d01b4aa70d2680260d011dd&type=20" } },
              { name: "荣耀 WIN 游戏本 H9", brand: "荣耀", date: "2026-04-23", level: "new",
                summary: "自研「2+4」轴流风扇，至 270W 性能释放；联名款 ¥14,699。",
                metrics: [ { k: "性能释放", v: "270W", d: "酷睿 Ultra 9 290HX Plus + RTX 5070 Ti；300Hz 屏、AI 离焦护眼", src: { n: "荣耀官网", u: "https://www.honor.com/cn/news/honor-win-h9-h7-launch" } } ],
                src: { n: "荣耀官网", u: "https://www.honor.com/cn/news/honor-win-h9-h7-launch" } },
              { name: "机械革命 翼龙15 Air 2026", brand: "机械革命", date: "2026-07-10", level: "new",
                summary: "1.5kg 轻薄电竞；AI 9 HX470 + RTX 5060，双烤 170W。",
                metrics: [ { k: "重量", v: "1.5kg", d: "7/10 预约；15.3″ 2.5K 240Hz OLED；首发 ¥12,999", src: { n: "17173", u: "https://news.17173.com/content/07102026/140456776.shtml" } } ],
                src: { n: "17173", u: "https://news.17173.com/content/07102026/140456776.shtml" } },
              { name: "雷神 ZERO Air 16 小轻龙", brand: "雷神", date: "2026-08", level: "new",
                summary: "碳纤维 ACD 壳，1.64kg 实现 160W 双满功耗。",
                metrics: [ { k: "重量", v: "1.64kg", d: "酷睿 Ultra 7 356H + RTX 5070；2.5K 240Hz；赛车版 8 月上市", src: { n: "游民星空", u: "https://wap.gamersky.com/news/Content-2172646.html" } } ],
                src: { n: "游民星空", u: "https://wap.gamersky.com/news/Content-2172646.html" } },
              { name: "微星 神影 Crosshair 16 Max HX", brand: "微星", date: "2026-04-16", level: "new",
                summary: "轻薄机身 + 200W 高性能释放，配 OLED 电竞屏与 RTX 50 系。",
                metrics: [ { k: "性能释放", v: "200W", d: "4/16 发布；轻薄机身 + 高素质 OLED 电竞屏", src: { n: "PChome", u: "https://article.pchome.net/n308/z60-p2-l1/53.html" } } ],
                src: { n: "PChome", u: "https://article.pchome.net/n308/z60-p2-l1/53.html" } },
              { name: "戴尔 Alienware 星舰 16X 2026", brand: "戴尔", date: "2026-04-20", level: "new",
                summary: "Ultra 7 270HX Plus ¥17,499 / Ultra 9 290HX Plus ¥19,499，可享国补。",
                metrics: [ { k: "起售", v: "¥17,499", d: "4/20 上市；酷睿 Ultra 200HX Plus", src: { n: "PChome", u: "https://article.pchome.net/n308/z60-p2-l1/53.html" } } ],
                src: { n: "PChome", u: "https://article.pchome.net/n308/z60-p2-l1/53.html" } }
            ] },
          { id: "tablet", name: "平板", icon: "📱", note: "🚧 框架占位：平板真实 2026 数据待补充，以下为已知系列结构，告诉我即可填充来源。",
            items: [
              { name: "iPad 系列（Apple）", brand: "Apple", date: "2026-03", level: "new", placeholder: true,
                summary: "iPad Air (M4) / iPad 12 (A19) 等，M4/M5 芯片 + Apple Intelligence 端侧 AI。真实参数与 2026 新品待补充。" },
              { name: "MatePad 系列（华为）", brand: "华为", date: "2026", level: "new", placeholder: true,
                summary: "MatePad Edge X90（14.2″ 鸿蒙二合一 ¥5,999）、MatePad Air 12（¥2,799）、MatePad 11.5 2026（¥1,999）、MatePad Pro 12.2（¥4,499）等，鸿蒙生态。价格已部分已知，待系统补充来源。" },
              { name: "REDMI Pad / K Pad（小米）", brand: "小米", date: "2026-04", level: "new", placeholder: true,
                summary: "REDMI K Pad 2：天玑 9500、8.8″ 3K LCD 165Hz、9100mAh+67W（¥3,399 起）。更多平板型号待补充。" },
              { name: "荣耀平板 MagicPad 3 Pro 12.3", brand: "荣耀", date: "2026-04", level: "new", placeholder: true,
                summary: "4/23 随 WIN 游戏本一同发布。真实参数待补充。" }
            ] },
          { id: "aihw", name: "AI 智能硬件", icon: "🤖", note: "🚧 框架占位：以下四类为对产业有益的 AI 智能硬件结构，真实 2026 新品与来源待补充（告诉我即可填充）。",
            subs: [
              { cat: "智能音频（AI 耳机 / 音箱）", items: [
                { name: "AI 耳机（字节 Ola Friend / 小米 AI 音频 / 韶音等）", brand: "—", date: "2026", level: "new", placeholder: true, summary: "实时翻译 / 语音助手 / 降噪等 AI 功能耳机。真实 2026 新品与来源待补充。" },
                { name: "AI 智能音箱", brand: "—", date: "2026", level: "new", placeholder: true, summary: "带端侧大模型的智能音箱。待补充。" }
              ] },
              { cat: "AI 拍摄配件（云台 / 相机）", items: [
                { name: "AI 云台（大疆 / 影石 / 智云等）", brand: "—", date: "2026", level: "new", placeholder: true, summary: "自动跟拍 / AI 构图 / 手势控制的智能云台与运动相机。待补充。" },
                { name: "AI 摄像头 / 会议相机", brand: "—", date: "2026", level: "new", placeholder: true, summary: "AI 追踪 / 美颜 / 自动取景的摄像头。待补充。" }
              ] },
              { cat: "AI 输入设备（键盘 / 鼠标）", items: [
                { name: "AI 键盘（科大讯飞 / 双飞燕等）", brand: "—", date: "2026", level: "new", placeholder: true, summary: "带语音转写 / AI 写作助手的智能键盘。待补充。" },
                { name: "AI 鼠标 / 手写板", brand: "—", date: "2026", level: "new", placeholder: true, summary: "AI 语音鼠标 / 智能手写板。待补充。" }
              ] },
              { cat: "AI 穿戴与其他（眼镜 / 家居）", items: [
                { name: "AI 眼镜（小米 AI 眼镜 / Meta Ray-Ban / 闪极拍拍镜）", brand: "—", date: "2026", level: "new", placeholder: true, summary: "拍照 / 实时翻译 / 语音助手的 AI 眼镜。待补充。" },
                { name: "AI 手表 / AI 家居", brand: "—", date: "2026", level: "new", placeholder: true, summary: "健康 AI 手表、带端侧模型的智能家居中枢。待补充。" }
              ] }
            ] }
        ]
      },
      { type: "compare", chart: {
        title: "轻薄化军备竞赛：2026 最轻 14″ 级本（机身重量，对数刻度）",
        items: [
          { name: "华为 MateBook Pro S", value: 798, label: "798g" },
          { name: "联想 YOGA Air 14 Ultra", value: 975, label: "975g" },
          { name: "小米 REDMI Book 14", value: 1490, label: "1.49kg" },
          { name: "机械革命 翼龙15 Air", value: 1500, label: "1.5kg" },
          { name: "雷神 ZERO Air 16", value: 1640, label: "1.64kg" }
        ],
        note: "仅列公开标称重量且来源明确的机型；苹果 MacBook Air 13 未公开 2026 重量故未纳入。重量越低越轻（红=更轻）。"
      } }
    ],
    insightsTitle: "洞察",
    insights: [
      { type: "", html: "<b>洞察 1 · 轻薄化军备竞赛：</b>重量从「1.5kg 级」卷到「<1kg」，华为 798g / 联想 975g 刷新 14″ 纪录——便携成为第一卖点，性能释放被迫在散热结构上找补。", src: { n: "网易/机智猫", u: "https://www.163.com/dy/article/L317LSAB05118UEG.html" } },
      { type: "", html: "<b>洞察 2 · 自研芯片回归：</b>华为麒麟 X 系、苹果 M5 代表「整机厂自研 SoC」路线，强化软硬一体与生态壁垒；联想/小米仍依赖 Intel/AMD，差异化靠设计与生态。", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260729A04C9A00?refer=cp_1009" } },
      { type: "", html: "<b>洞察 3 · 游戏本性能释放内卷：</b>荣耀 270W、雷神 160W 双满功耗、机械革命双烤 170W——散热结构（轴流风扇 / 碳纤维 / 镁合金）成为差异化核心，单纯堆功耗已不够。", src: { n: "荣耀官网", u: "https://www.honor.com/cn/news/honor-win-h9-h7-launch" } },
      { type: "", html: "<b>洞察 4 · 国产工艺上探：</b>镁合金（机械革命/荣耀）、碳纤维（雷神）、云晰柔光屏（华为）等工艺追平国际大厂，价格带更具侵略性，高端市场不再由国际品牌独占。", src: { n: "游民星空", u: "https://wap.gamersky.com/news/Content-2172646.html" } },
      { type: "", html: "<b>洞察 5 · 端侧 AI 仍是「算力到位、场景缺位」：</b>NPU 普遍 40–180 TOPS，但系统级智能体（联想 Qira、华为小艺、Apple Intelligence）才是把算力变刚需的关键，OS 层调度框架仍是行业瓶颈。", src: { n: "联想 CES 社区", u: "https://mclub.lenovo.com.cn/thread-9454008-1-1.html" } }
    ],
    sources: [
      { n: "Apple 新闻稿（MacBook Air M5）", u: "https://www.apple.com.cn/newsroom/2026/03/apple-introduces-the-new-macbook-air-with-m5" },
      { n: "yipee 2026 苹果春季新品整理", u: "https://3c.yipee.cc/329743/" },
      { n: "腾讯新闻（华为 MateBook Fold 二代）", u: "https://new.qq.com/rain/a/20260729A04C9A00?refer=cp_1009" },
      { n: "网易/机智猫（华为 MateBook Pro S + 麒麟 XE90）", u: "https://www.163.com/dy/article/L317LSAB05118UEG.html" },
      { n: "中关村在线（华为 Fold 参数）", u: "https://nb.zol.com.cn/1223/12233356_all.html" },
      { n: "PChome（华为 MateBook14 / 微星 / 外星人 / 小新）", u: "https://article.pchome.net/n308/z60-p2-l1/53.html" },
      { n: "华为商城 vmall（MatePad 系列）", u: "https://www.vmall.com?cid=119884/" },
      { n: "IT之家/凤凰网（小米 REDMI Book 2026）", u: "https://tech.ifeng.com/c/8sOUmAZpqMO" },
      { n: "腾讯新闻（小米春季发布会 REDMI Book Pro / K Pad 2）", u: "https://new.qq.com/rain/a/20260422A052R600?refer=cp_1009" },
      { n: "联想商城 thinkpad.lenovo.com.cn", u: "https://thinkpad.lenovo.com.cn/index.html?sm" },
      { n: "联想 CES 2026 社区（Qira / 卷轴屏）", u: "https://mclub.lenovo.com.cn/thread-9454008-1-1.html" },
      { n: "爱企查（联想 2026 笔记本新品）", u: "https://aiqicha.baidu.com/details/rankList?query=42a73e8a5d01b4aa70d2680260d011dd&type=20" },
      { n: "荣耀官网（WIN 游戏本 H9/H7）", u: "https://www.honor.com/cn/news/honor-win-h9-h7-launch" },
      { n: "17173（机械革命 翼龙15 Air / 荣耀 BW 联名）", u: "https://news.17173.com/content/07102026/140456776.shtml" },
      { n: "游民星空（雷神 ZERO Air 16 小轻龙）", u: "https://wap.gamersky.com/news/Content-2172646.html" },
      { n: "太平洋电脑网（BW2026 英特尔携众品牌）", u: "https://news.pconline.com.cn/2178/21786429.html" }
    ]
  },

  models: {
    title: "AI 模型发展",
    ico: "🧠",
    sub: "关注：推理与编码能力、多模态、上下文效率、开放权重、Agentic 能力、成本结构。实时排行与中美 Code Arena 演进详见 LLM Monitor。",
    conclusions: [
      { html: "<b>Claude Opus 5 重塑性价比基线：</b>7/24 发布，SWE-bench Verified 96.0%、1M 上下文，定价 $5/$25 仅为 Fable 5 一半，发布即登顶 AA 智力指数。", src: { n: "Anthropic 官方", u: "https://www.anthropic.com/news/claude-opus-5" } },
      { html: "<b>GPT-5.6 把价格战打到比开源还低：</b>7/9 三档齐发，7/31 再降——Luna 直降 80% 至 $0.20/$1.20（输入价已是 DeepSeek V4 Pro 的一半），Terra 降 20% 至 $2/$12；Sol 新增 Fast 模式（最高 2.5× 速度）。", src: { n: "腾讯新闻·OpenAI 降价", u: "https://new.qq.com/rain/a/20260731A05V3D00?refer=cp_1009" } },
      { html: "<b>Kimi K3 登顶全球编程榜：</b>7/16 发布，2.8 万亿参数成全球最大开源模型，Frontend Code Arena 以 1679 Elo 登顶（首个登顶编程榜的开放模型）。", src: { n: "网易科技", u: "https://www.163.com/dy/article/L29OEJBH0550A7UY.html" } },
      { html: "<b>DeepSeek V4 Flash 把“低成本 + 长上下文”同时拉满：</b>4/24 开源，284B 总参 / 13B 活跃 MoE，1M 上下文、¥1/¥2 每百万 token（缓存命中 ¥0.02），与 Pro（1.6T/49B 活跃）同架构但便宜数倍。", src: { n: "百度百科·DeepSeek V4 Flash", u: "https://baike.baidu.com/item/DeepSeek-V4-Flash/67674324" } },
      { html: "<b>中美差距快速收敛：</b>斯坦福 2026 报告称中国顶级模型“基本追上美国”（Arena 差距约 2.7%），但美国私人 AI 投资为中国的 23 倍——差距从性能转向成本/投资/生态。", src: { n: "新浪·斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } }
    ],
    reference: {
      title: "LLM Monitor · 大模型性能监控对比平台",
      desc: "聚合 Artificial Analysis / LiveBench / LMArena 三大权威源，实时追踪 10+ 模型的智力指数、Arena Elo、成本、编程与多模态 SOTA，以及「中美 Code Arena 演进差距」。本页结论与排行以该看板为动态锚点。",
      url: "https://hghselene-prog.github.io/llm-monitor/"
    },
    blocks: [
      { type: "company", heading: "一、海外闭源旗舰进展",
        companies: [
          { name: "Claude Opus 5", tag: "Anthropic · 7/24", src: { n: "Anthropic 官方", u: "https://www.anthropic.com/news/claude-opus-5" },
            summary: "Anthropic 不到两月内第四款 Claude 5 模型，定位“接近 Fable 性能、半价”，主攻 agentic coding 与长程推理，思考默认开启。",
            metrics: [
              { k: "SWE-bench Verified", v: "96.0%", d: "编码 SOTA；Pro 版 79.2%，较 Opus 4.8 的 69.2% 大幅跃升", src: { n: "datanorth", u: "https://datanorth.ai/news/claude-opus-5-by-anthropic" } },
              { k: "AA 智力指数", v: "61", d: "发布即登顶；Agentic Index 55.3，领先 Fable 5 与 GPT-5.6 Sol", src: { n: "datanorth", u: "https://datanorth.ai/news/claude-opus-5-by-anthropic" } },
              { k: "上下文", v: "1M", d: "默认即最大，输出上限 128K；知识截止 2026/5", src: { n: "hokai", u: "https://hokai.io/hub/models/claude-opus-5" } },
              { k: "定价", v: "$5/$25", d: "每百万 token 输入/输出，为 Fable 5（$10/$50）一半", src: { n: "hokai", u: "https://hokai.io/hub/models/claude-opus-5" } }
            ],
            insights: [
              { type: "", html: "<b>看点：</b>Opus 5 用“半价换接近旗舰性能”的定价，把前沿能力的单位成本直接砍半，对跑 agent 流量的团队最划算。", src: { n: "claude5.ai", u: "https://claude5.ai/news/anthropic-launches-claude-opus-5" } }
            ]
          },
          { name: "GPT-5.6", tag: "OpenAI · 7/9", src: { n: "OpenAI 官方", u: "https://openai.com/index/previewing-gpt-5-6-sol/" },
            summary: "首次三档齐发：Sol（旗舰，开放 Max/Ultra 推理）、Terra（均衡，约 GPT-5.5 性能半价）、Luna（轻量）。Codex 正式合体 ChatGPT，并推出对标 Claude Cowork 的 ChatGPT Work。",
            metrics: [
              { k: "Terminal-Bench 2.1", v: "91.9%", d: "Sol Ultra 模式，超越 Claude Mythos 5（88.0%）", src: { n: "中国电子报", u: "https://www.toutiao.com/article/7660885560914952756" } },
              { k: "上下文", v: "105万", d: "三档共享，输出上限 12.8 万 token", src: { n: "新浪科技", u: "https://k.sina.com.cn/article_7879848924_1d5acf3dc01901kcs6.html" } },
              { k: "定价（7/9）→ 7/31 再降", v: "Sol $5/$30", d: "不变；Terra 降 20% 至 $2/$12；Luna 暴降 80% 至 $0.20/$1.20（输入价已是 DeepSeek V4 Pro 一半）", src: { n: "腾讯新闻·OpenAI 降价", u: "https://new.qq.com/rain/a/20260731A05V3D00?refer=cp_1009" } },
              { k: "Sol Fast 模式", v: "2.5× 速度", d: "新推出、取代 Priority Processing，价格为标准模式 2×，智能水平不变", src: { n: "腾讯新闻·OpenAI 降价", u: "https://new.qq.com/rain/a/20260731A05V3D00?refer=cp_1009" } },
              { k: "交付形态", v: "Codex 合体", d: "Chat / Work / Codex 三模式一站，Ultra 可调度 4–16 个子代理；自动审查由 GPT-5.4 切到 Luna，成本降至约 1/10", src: { n: "新浪财经", u: "https://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/838145043362/index.phtml" } }
            ],
            insights: [
              { type: "", html: "<b>看点：</b>Luna 降价后输入价（$0.20/M）已低于 DeepSeek V4 Pro（约 $0.40/M），闭源首次在“最便宜档”价格上压倒国产开源——价格战从国产打到闭源腹地，同时 Sol Fast 把低延迟交互场景也收了。", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260731A03A8900?refer=cp_1009" } }
            ]
          },
          { name: "Gemini 3.1 Pro", tag: "Google · 2/19", src: { n: "百度百科", u: "https://baike.baidu.com/item/Gemini%203.1/67530594" },
            summary: "Google 科学/长上下文标杆，2M 上下文、多模态原生，在 GPQA Diamond 等硬科学基准领先。",
            metrics: [
              { k: "GPQA Diamond", v: "94.3%", d: "科学知识测试领先，超越 Claude Opus 4.6 与 GPT-5.2", src: { n: "百度百科", u: "https://baike.baidu.com/item/Gemini%203.1/67530594" } },
              { k: "Humanity's Last Exam", v: "44.4%", d: "超 Claude Opus 4.6 与 GPT-5.2", src: { n: "百度百科", u: "https://baike.baidu.com/item/Gemini%203.1/67530594" } },
              { k: "上下文", v: "2M", d: "科学、长上下文类目 #1", src: { n: "futureagi", u: "https://futureagi.com/blog/best-llms-march-2026/" } },
              { k: "定价", v: "$2/$12", d: "≤200K prompt，美国前沿最便宜之一", src: { n: "futureagi", u: "https://futureagi.com/blog/best-llms-march-2026/" } }
            ]
          }
        ]
      },
      { type: "company", heading: "二、国内开源开放模型进展",
        companies: [
          { name: "Kimi K3", tag: "月之暗面 · 7/16", src: { n: "网易科技", u: "https://www.163.com/dy/article/L29OEJBH0550A7UY.html" },
            summary: "2.8 万亿参数、全球最大开源模型，100 万上下文、原生多模态（KDA 混合线性注意力）。发布三天即因用户暴涨触发算力告急，7/19 暂停 C 端新订阅；7/27 开放权重（MIT）。被称“中国 Fable 5 时刻”。",
            metrics: [
              { k: "Frontend Code Arena", v: "全球第一", d: "1679 Elo，首个登顶编程榜的开放模型，超越 Claude / Fable", src: { n: "swfte LMArena", u: "https://www.swfte.com/lmsys-leaderboard" } },
              { k: "FrontierSWE", v: "81.2", d: "大幅领先 GPT-5.6 Sol 的 71.3；Program Bench 77.8 > Sol 77.6", src: { n: "今日头条", u: "https://www.toutiao.com/a7664506810425950726" } },
              { k: "参数 / 上下文", v: "2.8T / 1M", d: "每次激活 1040 亿，支持图文视频混合", src: { n: "搜狐", u: "https://www.sohu.com/a/1055774628_122014422" } },
              { k: "开放", v: "7/27 权重", d: "MIT 许可；API 输出 ¥100/M，较闭源仍显著便宜", src: { n: "新浪", u: "https://k.sina.cn/article_7880068204_1d5b04c6c06801e5ga.html" } }
            ],
            insights: [
              { type: "", html: "<b>看点：</b>Kimi 选择“卷能力天花板”——长程 Agent 式执行（120+ 轮迭代、2800+ 次搜索），更像“主动交付视觉结果的 Agent 模型”。", src: { n: "今日头条", u: "https://www.toutiao.com/a7664506810425950726" } }
            ]
          },
          { name: "DeepSeek V4（Pro / Flash）", tag: "深度求索 · 4/24 预览并开源", src: { n: "百度百科·DeepSeek V4 Flash", u: "https://baike.baidu.com/item/DeepSeek-V4-Flash/67674324" },
            summary: "同系列双版本：Pro（1.6T 总参 / 49B 活跃，专家模式）与 Flash（284B 总参 / 13B 活跃，快速模式）。均原生 1M 上下文、CSA/DSA 压缩稀疏注意力，以极致性价比 + 长上下文撬动普惠市场；华为云首发适配。",
            metrics: [
              { k: "V4 Flash 参数", v: "284B / 13B 活跃", d: "MoE + Compressed Sparse Attention，1M 上下文原生，单 token FLOPs 仅为 V3.2 的 10%、KV cache 7%", src: { n: "therouter", u: "https://therouter.ai/models/deepseek--deepseek-v4-flash/" } },
              { k: "V4 Flash 定价", v: "¥1 / ¥2", d: "每百万 token 输入/输出（约 $0.14/$0.28），缓存命中低至 ¥0.02；输入低于 GPT-5.6 Luna 的 $0.20/M，但 Luna 输出 $1.20 显著低于 Flash ¥2/M", src: { n: "llmabacus", u: "https://www.llmabacus.com/models/deepseek-v4-flash" } },
              { k: "V4 Flash 能力", v: "Arena 1438", d: "智能指数 40.3、Coding 56.2、LiveBench 66.0、输出 130 tok/s；GPQA Diamond 89.4%", src: { n: "aib.vote", u: "https://www.aib.vote/en/models/compare?a=deepseek-v4-flash" } },
              { k: "Pro 版定位", v: "1.6T / 49B 活跃", d: "专家模式，SWE-bench Verified 80.6%（近 Opus 4.6 的 80.8%）；峰谷分时计费，高峰输出约 $1.74/M", src: { n: "搜狐", u: "https://www.sohu.com/a/1055774628_122014422" } },
              { k: "开放", v: "MIT", d: "Flash 权重已开源、支持本地私有化；旧名 deepseek-chat/reasoner 于 7/24 停用", src: { n: "百度百科", u: "https://baike.baidu.com/item/DeepSeek-V4-Flash/67674324" } }
            ]
          },
          { name: "智谱 GLM-5.2", tag: "智谱 AI · 6/17 开源（02513.HK）", src: { n: "智谱港股·GLM-5.2", u: "https://new.qq.com/rain/a/20260713A07NX300?refer=cp_1009" },
            summary: "6/17 以 MIT 协议全量开源，Artificial Analysis 开源智能指数 51 分（一度全球开源第一）。744B 总参 / 40B 激活 MoE，1M 无损上下文，发布当日完成华为昇腾、寒武纪、摩尔线程等 8 家国产算力 Day0 适配。在 Code Arena 百万用户盲测中拿“全球可用模型第一”。",
            metrics: [
              { k: "Code Arena", v: "全球第一", d: "百万真实开发者盲测“全球可用模型”首位，超越闭源", src: { n: "腾讯新闻·智谱", u: "https://new.qq.com/rain/a/20260713A07NX300?refer=cp_1009" } },
              { k: "开源智能指数", v: "51 分", d: "Artificial Analysis 开源综合榜首（一度）", src: { n: "智通财经", u: "https://www.zhitongcaijing.com/content/detail/1473506.html" } },
              { k: "参数 / 上下文", v: "744B / 1M", d: "总参 744B、激活 40B（256 专家激活 8）；1M 无损上下文", src: { n: "网易/钛媒体", u: "https://www.163.com/dy/article/KVPFUFH205118O92.html" } },
              { k: "长程任务", v: "≈ Opus 4.8", d: "FrontierSWE / Terminal-Bench 差距仅 0.7%–4%，首进闭源前沿区间", src: { n: "腾讯新闻·智谱", u: "https://new.qq.com/rain/a/20260713A07NX300?refer=cp_1009" } },
              { k: "国产适配 + 定价", v: "Day0 全栈", d: "华为/寒武纪/摩尔线程等 8 家 Day0 适配；API 输出约 28 元/百万 tokens，Lite 月订阅 49 元", src: { n: "智通财经", u: "https://www.zhitongcaijing.com/content/detail/1473506.html" } }
            ],
            insights: [
              { type: "", html: "<b>看点：</b>GLM-5.2 把“开源 + 国产算力 100% 适配 + 长上下文”焊成一体，是国产开源路线标杆；但智谱 2025 仍净亏 47 亿、研发投入 31.8 亿（为营收 4.4 倍），商业化仍早期（详见财报页）。", src: { n: "新浪财经·智谱回撤", u: "https://cj.sina.com.cn/articles/view/6192937794/17120bb4202002sgio?finpagefr=p_101" } }
            ],
            src: { n: "智谱港股·GLM-5.2", u: "https://new.qq.com/rain/a/20260713A07NX300?refer=cp_1009" } },
          { name: "MiniMax", tag: "稀宇科技 · M3 6/1 发布（00100.HK）", src: { n: "MiniMax 百科", u: "https://baike.baidu.com/item/上海稀宇科技有限公司/64244184" },
            summary: "全模态第一梯队（全球唯四），70% 收入来自海外。模型迭代“按月刷新”：M1→M2/M2.1→M2.5（2/12 编程模型）→M3（6/1 新一代通用模型），M2.7 已获摩尔线程/沐曦国产 GPU Day0 适配。1/20 推出 MiniMax Agent 2.0 与 Desktop App，主打“AI-Native Workspace”。",
            metrics: [
              { k: "最新旗舰 M3", v: "6/1 发布", d: "新一代通用模型；华为云 6 月即完成昇腾开源首发适配", src: { n: "腾讯新闻·中国大模型突围", u: "https://new.qq.com/rain/a/20260706A07XT600" } },
              { k: "编程模型 M2.5", v: "2/12", d: "面向 Coding 的旗舰编程模型；1/14 开源 OctoCodingBench 评测集", src: { n: "百度百科", u: "https://baike.baidu.com/item/上海稀宇科技有限公司/64244184" } },
              { k: "Agent 2.0", v: "1/20", d: "MiniMax Agent 升级 2.0 + Desktop App，“专家 Agent”+ AI 原生工作台", src: { n: "百度百科", u: "https://baike.baidu.com/item/上海稀宇科技有限公司/64244184" } },
              { k: "商业化（2025）", v: "收入 $7904 万", d: "同比 +158.9%，毛利 +437.2%、毛利率 25.4%", src: { n: "腾讯新闻·中国大模型突围", u: "https://new.qq.com/rain/a/20260706A07XT600" } },
              { k: "资本", v: "7/10 募 160 亿港元", d: "配售+可转债；创始人闫俊杰零薪并捐 5% 股份；1/9 港股上市、拟回 A 科创板", src: { n: "21世纪经济报道", u: "https://www.toutiao.com/article/7660818856771879459" } }
            ],
            insights: [
              { type: "", html: "<b>看点：</b>MiniMax 走“全模态 + 全球化 + Agent 产品化”路线，与智谱“开源基座”形成对照；上市半年市值大幅波动（3 月高点 1330 港元→解禁后缩水至 800 亿），反映一级到二级的估值重构（详见财报页）。", src: { n: "今日头条·MiniMax 募资", u: "https://www.toutiao.com/article/7660818856771879459" } }
            ],
            src: { n: "MiniMax 百科", u: "https://baike.baidu.com/item/上海稀宇科技有限公司/64244184" } },
          { name: "Qwen 3.8 / 混元 Hy3", tag: "阿里 · 腾讯", src: { n: "网易科技", u: "https://www.163.com/dy/article/L29OEJBH0550A7UY.html" },
            summary: "国产开源的另外两股主力：阿里 Qwen 3.8（2.4 万亿、动态稀疏门控、拟开源）、腾讯混元 Hy3 preview（复杂推理接近 Gemini 3.1 Pro）。智谱 GLM-5.2 因模型能力强、国产适配完整，已在上方单列。",
            metrics: [
              { k: "Qwen 3.8", v: "2.4T", d: "7/19 预览，性能仅次于 Fable 5，正式版拟开源", src: { n: "网易科技", u: "https://www.163.com/dy/article/L29OEJBH0550A7UY.html" } },
              { k: "混元 Hy3", v: "AA 57", d: "智能维度 57、编码 56；复杂推理接近 Gemini 3.1 Pro", src: { n: "百度百科", u: "https://baike.baidu.com/item/Gemini%203.1/67530594" } }
            ]
          }
        ]
      },
      { type: "table", heading: "三、中美能力对比 · 关键指标（2026）",
        table: {
          head: ["维度", "美国", "中国", "来源"],
          rows: [
            { cells: ["顶级模型 Arena Elo（2026/3）", "Anthropic 1503（榜首）", "阿里 1449 / DeepSeek 1424", ], src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } },
            { cells: ["中美顶级差距", "约 2.7%（同一能力档）", "六家中美顶级已挤进同一分档", ], src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } },
            { cells: ["私人 AI 投资（2025）", "$2859 亿", "$124 亿（约 1/23）", ], src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } },
            { cells: ["论文 / 专利", "高影响力专利引用领先", "数量领先（专利占全球 74.2%）", ], src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } },
            { cells: ["代表模型数（2025）", "50 个", "30 个", ], src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } },
            { cells: ["中美 Code Arena 差距", "曾领先", "Kimi K3 后差距快速收窄（实时看板）", ], src: { n: "LLM Monitor", u: "https://hghselene-prog.github.io/llm-monitor/" } }
          ]
        }
      },
      { type: "bullets", heading: "四、2026 模型格局的结构性变化",
        items: [
          { t: "<b>月度迭代 + 多档分层 + Agent 协作：</b>Anthropic 两月内发 4 款 Claude 5，OpenAI 一次三档，Google 把 Gemini 更新逼到近月度——模型交付开始像软件一样持续。", src: { n: "新浪财经", u: "https://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/838145043362/index.phtml" } },
          { t: "<b>“最强”与“最值”分离：</b>性价比最优（DeepSeek V4 Pro）与速度最快（Gemini 3.1 Pro）都不是榜首；选模型看任务，而非追单一第一。", src: { n: "futureagi", u: "https://futureagi.com/blog/best-llms-march-2026/" } },
          { t: "<b>开放权重反击：</b>Kimi / DeepSeek / GLM / Qwen 全部以 MIT 开放权重，全球最大开源模型（2.8T）出自中国，闭源对 Agent 能力的领先正在缩小。", src: { n: "搜狐", u: "https://www.sohu.com/a/1055774628_122014422" } },
          { t: "<b>竞争从“跑分”转向“成本 + 可靠性 + 场景”：</b>7/31 GPT-5.6 Luna 降价后输入价已低于 DeepSeek V4 Pro，闭源把价格战打到开源腹地；峰谷计费、模型路由、私有化部署比单点跑分更决定落地。", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260731A03A8900?refer=cp_1009" } },
          { t: "<b>评测体系在失效：</b>“锯齿状智能”——能解奥数却看不懂指针钟；多项高难度基准数月即被攻破，Arena 也可能被风格适配，需以真实任务可靠性为准。", src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } }
        ]
      }
    ],
    insightsTitle: "五、洞察",
    insights: [
      { type: "", html: "<b>洞察 1（迭代节奏）：</b>2026 年模型竞争进入“月度迭代 + 多档分层 + Agent 协作”新常态。对企业选型而言，版本切换成本上升，需建立“模型路由 + 私有化兜底”的工程能力，而非绑定单一供应商。", src: { n: "新浪财经", u: "https://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/838145043362/index.phtml" } },
      { type: "", html: "<b>洞察 2（中美收敛）：</b>Kimi K3 登顶编程榜、DeepSeek 极致性价比、斯坦福报告确认“基本追上”，国产在编程/性价比单点已摸到闭源水平线；但美国以 23 倍私人投资与高影响力专利构筑生态壁垒，差距从“性能”转向“资本 + 生态”。", src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } },
      { type: "", html: "<b>洞察 3（开放路线）：</b>国产四家（Kimi/DeepSeek/GLM/Qwen）集体走 MIT 开放权重，既换生态话语权、也服务私有化部署需求；这意味着“闭源能力 vs 开放控制”的战略分叉会长期存在。", src: { n: "搜狐", u: "https://www.sohu.com/a/1055774628_122014422" } },
      { type: "", html: "<b>洞察 4（价格战白热化）：</b>GPT-5.6 Luna 降价后输入价（$0.20/M）已低于 DeepSeek V4 Pro（约 $0.40/M），闭源在最便宜档首次压过国产开源；而 Flash 的输入（¥1/M）又比 Luna 略低。结论：选型核心从“谁最强”变成“谁在特定场景最稳最省”，路由 + 缓存命中率成为实际账单关键变量。", src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260731A03A8900?refer=cp_1009" } },
      { type: "", html: "<b>洞察 5（评测风险）：</b>基准失速 + 锯齿状智能意味着“榜单第一”不等于“好用”。落地应以真实工作负载复现（领域 prompt + 可靠性衰减曲线）替代 headline 分数。", src: { n: "斯坦福报告", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" } }
    ],
    sources: [
      { n: "Anthropic 官方 · Claude Opus 5", u: "https://www.anthropic.com/news/claude-opus-5" },
      { n: "datanorth · Claude Opus 5 benchmarks", u: "https://datanorth.ai/news/claude-opus-5-by-anthropic" },
      { n: "hokai · Claude Opus 5", u: "https://hokai.io/hub/models/claude-opus-5" },
      { n: "OpenAI 官方 · GPT-5.6 Sol", u: "https://openai.com/index/previewing-gpt-5-6-sol/" },
      { n: "腾讯新闻 · OpenAI GPT-5.6 最高降价 80%", u: "https://new.qq.com/rain/a/20260731A05V3D00?refer=cp_1009" },
      { n: "腾讯新闻 · ChatGPT 比 DeepSeek 都便宜了", u: "https://new.qq.com/rain/a/20260731A03A8900?refer=cp_1009" },
      { n: "中国电子报 · GPT-5.6 获放行", u: "https://www.toutiao.com/article/7660885560914952756" },
      { n: "新浪财经 · GPT-5.6 系列（长江证券）", u: "https://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/838145043362/index.phtml" },
      { n: "百度百科 · Gemini 3.1", u: "https://baike.baidu.com/item/Gemini%203.1/67530594" },
      { n: "futureagi · Best LLMs Mar 2026", u: "https://futureagi.com/blog/best-llms-march-2026/" },
      { n: "网易科技 · Kimi/千问/DeepSeek 连放大招", u: "https://www.163.com/dy/article/L29OEJBH0550A7UY.html" },
      { n: "搜狐 · 中国开源模型三连击", u: "https://www.sohu.com/a/1055774628_122014422" },
      { n: "今日头条 · Kimi K3 vs DeepSeek V4", u: "https://www.toutiao.com/a7664506810425950726" },
      { n: "新浪 · Kimi 与 DeepSeek 路线对比", u: "https://k.sina.cn/article_7880068204_1d5b04c6c06801e5ga.html" },
      { n: "百度百科 · DeepSeek V4 Flash", u: "https://baike.baidu.com/item/DeepSeek-V4-Flash/67674324" },
      { n: "therouter · DeepSeek V4 Flash 规格", u: "https://therouter.ai/models/deepseek--deepseek-v4-flash/" },
      { n: "llmabacus · DeepSeek V4 Flash 核价", u: "https://www.llmabacus.com/models/deepseek-v4-flash" },
      { n: "aib.vote · DeepSeek V4 Flash 评测", u: "https://www.aib.vote/en/models/compare?a=deepseek-v4-flash" },
      { n: "智通财经 · 国产旗舰模型密集发布", u: "https://www.zhitongcaijing.com/content/detail/1473506.html" },
      { n: "腾讯新闻 · 智谱 AGI 背水一战", u: "https://new.qq.com/rain/a/20260713A07NX300?refer=cp_1009" },
      { n: "网易/钛媒体 · 智谱 GLM-5.2 技术", u: "https://www.163.com/dy/article/KVPFUFH205118O92.html" },
      { n: "新浪财经 · 智谱回撤逾七成", u: "https://cj.sina.com.cn/articles/view/6192937794/17120bb4202002sgio?finpagefr=p_101" },
      { n: "百度百科 · MiniMax（稀宇科技）", u: "https://baike.baidu.com/item/上海稀宇科技有限公司/64244184" },
      { n: "腾讯新闻 · 中国大模型突围", u: "https://new.qq.com/rain/a/20260706A07XT600" },
      { n: "21世纪经济报道 · MiniMax 募 160 亿", u: "https://www.toutiao.com/article/7660818856771879459" },
      { n: "解放日报 · MiniMax A+H 双布局", u: "https://m.jfdaily.com/staticsg/res/html/journal/detail.html?code=jfrb&date=2026-05-31&id=513048&page=02" },
      { n: "斯坦福 2026 AI 指数报告（新浪摘编）", u: "https://finance.sina.cn/stock/jdts/2026-04-15/detail-inhupzph3580759.d.html?vt=4" },
      { n: "LLM Monitor · 大模型性能监控对比平台", u: "https://hghselene-prog.github.io/llm-monitor/" }
    ]
  },

  /* ============================ 4. 端侧 Agent ============================ */
  agent: {
    title: "个人 / 端侧 Agent",
    ico: "🤖",
    sub: "两条路径（顶部可切换）：① 供给侧·品牌平台（苹果 / 华为 / 微软 / 谷歌）　② 需求侧·具体产品（ChatGPT / WorkBuddy / 悟空 / OpenClaw）。",
    conclusions: [
      { html: "<b>2026 = 智能体落地年：</b>四大 OS 厂商（苹果 / 华为 / 微软 / 谷歌）集体把 Agent 下沉为系统级能力，端侧优先成行业共识。", src: { n: "Apple / 华为 / 微软 / 谷歌 发布", u: "https://www.huxiu.com/article/4865592.html" } },
      { html: "<b>两条路线：</b>① OS 级 on-device（Apple Siri AI、华为小艺、谷歌 Gemini Nano 3、微软 Windows Local AI，隐私 / 离线优先）；② 跨端本地执行型（WorkBuddy、ChatGPT agent mode、阿里悟空，强调替你把事干完）。", src: { n: "Windows Local AI / 鸿蒙小艺", u: "https://windowsnews.ai/article/build-2026-microsoft-unleashes-ai-agents-across-office-365-windows-and-azure-at-san-francisco-keynot.421349" } },
      { html: "<b>用户量爆发：</b>ChatGPT 月活破 10 亿、智能体用户破 1000 万；WorkBuddy 国内 PC 端月访问破 2000 万、MAU 2000 万；华为小艺日活 1.8 亿——Agent 已不是玩具。", src: { n: "ChatGPT 月活 / WorkBuddy 月访问", u: "https://new.qq.com/rain/a/20260613A01C1Y00?refer=cp_1009" } },
      { html: "<b>“会干活”成主战场：</b>ChatGPT agent mode 时长占比上升、WorkBuddy 自给交付、悟空“沟通即执行”、钉钉 8 亿用户 CLI 化——竞争焦点从聊天转向执行。", src: { n: "阿里悟空 / WorkBuddy", u: "https://www.cnr.cn/tech/techgd/20260720/t20260720_527720335.shtml" } },
      { html: "<b>企业级决战落地：</b>阿里悟空规模化放量、腾讯元器 3000+ 企业、百度千帆 130 万+ Agents、华为 AgentArts 私有化——确定性 / 权限 / 审计成胜负手，而非模型多聪明。", src: { n: "企业级 Agent 决战（36氪）", u: "https://www.36kr.com/p/3809987729842183" } }
    ],
    blocks: [
      { type: "tabs", tabs: [
          { id: "supply", label: "维度一 · 供给侧（品牌平台）" },
          { id: "demand", label: "维度二 · 需求侧（具体产品）" }
        ],
        panels: [
          { id: "supply", blocks: [
            { type: "cards", heading: "品牌平台 Agent（系统级 / 端侧优先）",
              cards: [
                { k: "Apple · Siri AI", v: "iOS 27 起", edge: "端侧优先（中国区暂未开放）", d: "WWDC26 推出 Siri AI：屏幕感知 + 跨 App 执行 + 个人情境理解；System Orchestrator 调度『端侧模型 / Gemini / 私有云』三层路由，数据默认不出设备。欧盟与中国区暂未开放，需配合监管推进。", src: { n: "WWDC26 Siri AI（虎嗅）", u: "https://www.huxiu.com/article/4865592.html" } },
                { k: "华为 · 小艺（鸿蒙 7）", v: "日活 1.8 亿", edge: "端侧优先（按需上云）", d: "HDC2026：鸿蒙 7 首建 Agent 亲和架构，小艺深度融入内核与资源调度；已接入 2000+ 智能体、300+ 精品 Skill，日均唤醒 30 亿次，过去一年 Agent 分发量涨 4.5 倍；端侧优先、按需上云。", src: { n: "HDC2026 小艺（China Daily）", u: "https://ex.chinadaily.com.cn/exchange/partners/82/rss/channel/cn/columns/sz8srm/stories/WS6a2bce5aa310942cc49b181c.html" } },
                { k: "微软 · Windows Local AI", v: "40 TOPS 起步", edge: "本地 NPU（默认无网沙箱）", d: "Build2026 发布系统级 Agent Runtime + Windows Copilot Runtime：本地 NPU 跑 Phi-4-silicon，无需联网即可会议纪要 / 文档处理；承诺 2026 年底前上线 100+ 预置 Agent，Agent 沙箱默认无网络访问。", src: { n: "Build2026 Windows Local AI", u: "https://windowsnews.ai/article/build-2026-microsoft-unleashes-ai-agents-across-office-365-windows-and-azure-at-san-francisco-keynot.421349" } },
                { k: "谷歌 · Gemini Nano 3 / COSMO", v: "端侧 Function Calling", edge: "端侧优先（需 12GB RAM）", d: "I/O2026：Gemini 取代 Google Assistant 成 Android 17 系统层；Gemini Nano 3 开放公开 SDK（3.5B 参数、多模态、端侧 Function Calling），数据不出设备；后台常驻代理 COSMO 负责主动执行。Gemini Intelligence 需 12GB RAM 机型。", src: { n: "Gemini Nano 3 开放（掘金）", u: "https://juejin.cn/post/7663089074582634538" } }
              ] }
          ] },
          { id: "demand", blocks: [
            { type: "table", heading: "具体 Agent 产品（功能 / 用户量 / 使用变化）",
              table: {
                head: ["产品", "厂商 / 形态", "核心功能", "用户量 / 使用变化", "端侧程度", "信源"],
                rows: [
                  { cells: ["ChatGPT（Agent）", "OpenAI · 云端为主，Web / 移动 / IDE", "ChatGPT Work（综合任务 Agent）+ Codex（编程 Agent）；agent mode 多步任务时长占比上升；企业席位 + agent 执行计费", "月活破 10 亿（2026-05，Sensor Tower）；智能体用户破 1000 万（2026-07，Work + Codex）；周活约 5 亿", "云端为主（agent mode 跑云）"], src: { n: "ChatGPT 月活破 10 亿（腾讯新闻）", u: "https://new.qq.com/rain/a/20260613A01C1Y00?refer=cp_1009" } },
                  { cells: ["WorkBuddy", "腾讯 · 桌面 / 鸿蒙电脑 / App / 微信小程序", "自然语言→自主拆解→读写本地文件、调桌面应用→直接交付成品；接混元 / DeepSeek / Kimi / GLM 等；技能智库 140+ 顾问、2.2 万+ 插件", "2026-06 月访问 2097 万（国内 PC 端 AI 办公第一，超二三名总和）；MAU 2000 万、DAU 1300 万；3→6 月访问量 2.4 倍", "桌面跨端 + 云模型"], src: { n: "WorkBuddy 月访问破 2000 万（央广网）", u: "https://www.cnr.cn/tech/techgd/20260720/t20260720_527720335.shtml" } },
                  { cells: ["悟空（Wukong）", "阿里巴巴 / 钉钉 · 企业级 CLI 原生", "把钉钉 CLI 化改造，Agent 原生操作钉钉上千项能力（文档 / 审批 / 日程 / 通讯录），实现“沟通即执行”；继承企业权限，安全沙箱运行、全程可审计", "2026-03-17 发布；钉钉 8 亿用户底座；5 月阿里财报称已“规模化放量”，落地电商 / 零售 / 制造等真实场景", "企业云（钉钉底座）"], src: { n: "钉钉悟空（人民日报海外版）", u: "http://m2.people.cn/news/default.html?s=MV8xXzQwNjg4MjczXzQwNDIxNF8xNzc0Mzk3MjIw&from=sohu" } },
                  { cells: ["OpenClaw（龙虾）", "开源 · 本地优先自主执行", "本地运行、自主执行、工具联动，重新定义 Agent 落地形态；引发“养龙虾”风潮，阿里 / 腾讯 / 字节 / 智谱等推出兼容或自研框架", "GitHub 26 万+ Stars；中国日均 Token 调用从 2024 初 1000 亿飙至 2026-03 破 140 万亿（两年超千倍）", "本地优先（自主执行）"], src: { n: "OpenClaw 与 Token 消耗（人民网）", u: "http://m2.people.cn/news/default.html?s=MV8xXzQwNjg4MjczXzQwNDIxNF8xNzc0Mzk3MjIw&from=sohu" } }
                ]
              } },
            { type: "compare",
              chart: {
                title: "用户量 / 活跃度量级对比（口径见注）",
                items: [
                  { name: "ChatGPT", value: 1000000000, label: "月活 10 亿", basis: "Sensor Tower（月活）" },
                  { name: "悟空（钉钉底座）", value: 800000000, label: "8 亿用户", basis: "阿里财报（间接）" },
                  { name: "WorkBuddy", value: 20000000, label: "MAU 2000 万", basis: "央广网（MAU）" },
                  { name: "OpenClaw", value: 260000, label: "GitHub 26 万★", basis: "人民网（Stars·开发者热度）" }
                ],
                note: "口径不同，不可直接相加：ChatGPT / WorkBuddy 为月活，悟空为钉钉底座用户（间接），OpenClaw 为 GitHub Stars（开发者热度）。此处仅用于直观感受量级差异。"
              } }
          ] }
        ] }
    ],
    insights: [
      { type: "", html: "<b>洞察（分水岭）：</b>端侧 / 个人 Agent 的真正分水岭不是“能不能聊天”，而是“能不能替你把事干完且可追溯”。两类路线殊途同归：OS 厂商把能力下沉到 NPU 与内核（隐私 / 离线），应用厂商把能力上提到工作流与文件（效率 / 交付）。选型看场景——重隐私选 on-device，重交付选跨端执行型。", src: { n: "企业级 Agent 决战（36氪）", u: "https://www.36kr.com/p/3809987729842183" } },
      { type: "warn", html: "<b>洞察（被忽视的真相）：</b>“月活”≠“付费”，Agent 收入仍在早期。ChatGPT 智能体用户约 1000 万 vs 9 亿周活，内部转化空间巨大；企业级 Agent 胜负手是确定性 / 权限 / 审计，而非模型多聪明。引用数据时注意口径：ChatGPT 月活 10 亿（Sensor Tower 估算）与周活 5 亿、智能体 1000 万来源不同，勿混用。", src: { n: "ChatGPT 用户数据（countly）", u: "https://countly.net/how-many-chatgpt-users-are-there-in-2026-global-by-country-45ee" } }
    ],
    sources: [
      { n: "WWDC26 Siri AI（虎嗅）", u: "https://www.huxiu.com/article/4865592.html" },
      { n: "HDC2026 小艺（China Daily）", u: "https://ex.chinadaily.com.cn/exchange/partners/82/rss/channel/cn/columns/sz8srm/stories/WS6a2bce5aa310942cc49b181c.html" },
      { n: "Build2026 Windows Local AI（windowsnews.ai）", u: "https://windowsnews.ai/article/build-2026-microsoft-unleashes-ai-agents-across-office-365-windows-and-azure-at-san-francisco-keynot.421349" },
      { n: "Microsoft Agent Platform（windowsnews.ai）", u: "https://windowsnews.ai/article/microsoft-unleashes-ai-agent-platform-across-windows-copilot-and-azure.421835" },
      { n: "Gemini Nano 3 开放（掘金）", u: "https://juejin.cn/post/7663089074582634538" },
      { n: "Google I/O 2026 Astra（今日头条）", u: "https://www.toutiao.com/article/7641423620539826697" },
      { n: "ChatGPT 月活破 10 亿（腾讯新闻）", u: "https://new.qq.com/rain/a/20260613A01C1Y00?refer=cp_1009" },
      { n: "WorkBuddy 月访问破 2000 万（央广网）", u: "https://www.cnr.cn/tech/techgd/20260720/t20260720_527720335.shtml" },
      { n: "WorkBuddy 鸿蒙电脑（腾讯新闻）", u: "https://new.qq.com/rain/a/20260727A060OI00?refer=cp_1009" },
      { n: "钉钉悟空（人民日报海外版 / 央视）", u: "http://m2.people.cn/news/default.html?s=MV8xXzQwNjg4MjczXzQwNDIxNF8xNzc0Mzk3MjIw&from=sohu" },
      { n: "企业级 Agent 决战（36氪）", u: "https://www.36kr.com/p/3809987729842183" },
      { n: "OpenClaw 与 Token 消耗（人民网）", u: "http://m2.people.cn/news/default.html?s=MV8xXzQwNjg4MjczXzQwNDIxNF8xNzc0Mzk3MjIw&from=sohu" }
    ]
  },

  /* ============================ 5. 端侧 AI 产业 ============================ */
  industry: {
    title: "端侧 AI 业界动态",
    ico: "🌐",
    sub: "两个维度：① 合规与监管驱动本地化　② 芯片 / 生态 / 国内全栈；叠加市场规模拐点与 OS AI 化体系战。",
    conclusions: [
      { html: "<b>端侧推理市场拐点：</b>IDC 预测 2026 年底端侧推理市场（$480 亿）首次超过云端，设备出货 >20 亿台，普及拐点确立。", src: { n: "IDC 官方", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" } },
      { html: "<b>合规成刚需：</b>欧盟《AI 法案》2026 年 8 月生效、国内《生成式人工智能服务管理暂行办法》持续收紧，使“数据不出设备”从体验卖点升级为合规刚需。", src: { n: "腾讯云端侧 Agent", u: "https://cloud.tencent.com/developer/article/2703466" } },
      { html: "<b>国内全栈突破：</b>华为以昇腾 + 麒麟将原生 30B 入端模型（2B 激活）常驻运存，openPangu 2.0 开源；鸿蒙国内份额 19% 首超 iOS 的 18%。", src: { n: "财经杂志 HDC", u: "https://www.mycaijing.com/article/detail/570133" } },
      { html: "<b>OS AI 化体系战：</b>苹果主打“隐私优先的端侧计算”、华为主打“跨设备协同 + 开源生态”，大模型深嵌 OS 底层已成全球行业共识。", src: { n: "腾讯新闻 HDC", u: "https://new.qq.com/rain/a/20260614A06YXC00" } }
    ],
    blocks: [
      { type: "cards", heading: "核心指标速览",
        cards: [
          { k: "端侧推理市场（2026 底预测）", v: "$480 亿", d: "IDC：首次超过云端推理市场", src: { n: "腾讯云端侧 Agent", u: "https://cloud.tencent.com/developer/article/2703466" } },
          { k: "端侧 AI 设备出货（2026 底）", v: ">20 亿台", d: "规模化普及拐点确立", src: { n: "IDC 官方", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" } },
          { k: "欧盟《AI 法案》", v: "8 月生效", d: "端侧推理成合规“安全港”", src: { n: "腾讯云端侧 Agent", u: "https://cloud.tencent.com/developer/article/2703466" } },
          { k: "鸿蒙国内份额（26Q1）", v: "19%", d: "首超 iOS 的 18%，全球第三大移动 OS", src: { n: "财经杂志 HDC", u: "https://www.mycaijing.com/article/detail/570133" } }
        ] },
      { type: "bullets", heading: "维度一 · 合规与监管驱动本地化",
        items: [
          { t: "<b>合规驱动本地化：</b>欧盟《AI 法案》2026 年 8 月生效、国内《生成式人工智能服务管理暂行办法》持续收紧，医疗、金融等行业严限数据出境。端侧推理因“数据不出设备”天然满足隐私要求，从体验卖点升级为合规刚需。", src: { n: "腾讯云端侧 Agent", u: "https://cloud.tencent.com/developer/article/2703466" } }
        ] },
      { type: "bullets", heading: "维度二 · 芯片 / 生态 / 国内全栈",
        items: [
          { t: "<b>芯片与制程底座：</b>2nm/3nm 量产、硅碳电池续航、HBM 高带宽内存、模型压缩（如 Netspresso 体积 -90% 不损精度）共同把“本地跑大模型”从噱头变现实；TOPS 军备竞赛背后，内存带宽与能效才是体验分水岭。", src: { n: "IDC 官方", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" } },
          { t: "<b>国内全栈自主路线：</b>华为以昇腾 + 麒麟芯片亲和，将原生 30B 入端模型（2B 激活）常驻运存，openPangu 2.0 开源（5050 亿 Pro / 920 亿 Flash、512K 上下文）；小米/OPPO/vivo 展示端侧视觉-语言-动作（VLA）Agent；鸿蒙纯血 7.0 把“Agent 亲和”放系统核心。", src: { n: "财经杂志 HDC", u: "https://www.mycaijing.com/article/detail/570133" } }
        ] }
    ],
    insights: [
      { type: "", html: "<b>洞察 8：</b>操作系统 AI 化竞赛已从“加点 AI 功能”升级为<b>体系战</b>。苹果主打“隐私优先的端侧计算”（Gemini 补智能、私有云计算兜底），华为主打“跨设备协同 + 开源生态灵活”，二者同周亮剑意味着“大模型深嵌 OS 底层”已成全球行业共识。", src: { n: "腾讯新闻 HDC", u: "https://new.qq.com/rain/a/20260614A06YXC00" } },
      { type: "good", html: "<b>洞察 9：</b>从云端到指尖、从对话到行动、从单一模态到多模态融合——2026 年是端侧 AI 的<b>拐点年</b>。对厂商：得“系统级 Agent 框架 + 开发者生态”者得端侧；对用户：隐私与离线可用成为默认期待；对投资：端侧芯片（NPU/内存带宽）、端侧推理框架、端侧 Agent 工具链是比单点模型更长的雪道。", src: { n: "IDC 官方", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" } }
    ],
    sources: [
      { n: "端侧多模态 AI Agent（腾讯云）", u: "https://cloud.tencent.com/developer/article/2703466" },
      { n: "IDC：China Is Leading the AI Supercycle", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" },
      { n: "HDC 2026 鸿蒙（财经杂志）", u: "https://www.mycaijing.com/article/detail/570133" },
      { n: "HDC 2026 小艺（腾讯新闻）", u: "https://new.qq.com/rain/a/20260614A06YXC00" },
      { n: "鸿蒙 7 拐点（腾讯新闻）", u: "https://new.qq.com/rain/a/20260613A069VU00" },
      { n: "Agent 手机底牌（搜狐）", u: "https://m.sohu.com/a/1039772204_116157" }
    ]
  },

  /* ============================ 6. 方法论 ============================ */
  method: {
    title: "方法论与数据信源",
    ico: "📚",
    sub: "每个界面的分析逻辑 · 数据信源分类与质量门槛 · 可追溯性设计。",
    blocks: [
      { type: "taxonomy", heading: "一、我们采信的信源分类（按权威度从高到低）",
        items: [
          { cat: "① 官方发布 / 投资者关系（一手）",
            desc: "厂商财报、新闻稿、开发者大会主题演讲、监管/央行原文件。最权威、最可追溯，硬指标优先采用。",
            examples: [
              { n: "Apple Newsroom / IR", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" },
              { n: "NVIDIA Newsroom", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" },
              { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" },
              { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" },
              { n: "Windows Blog（Computex）", u: "https://blogs.windows.com/devices?p=263856" }
            ] },
          { cat: "② 行业研究 / 咨询公司",
            desc: "IDC、Gartner、Counterpoint、麦肯锡、BCG 等的市场规模与趋势预测；提供第三方口径与跨厂商可比性。",
            examples: [
              { n: "IDC：China Is Leading the AI Supercycle", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" }
            ] },
          { cat: "③ 基准 / 评测平台（业界标准）",
            desc: "Artificial Analysis、LMArena、LiveBench、MLCommons / MLPerf 等量化榜单——让“谁更强”可比、可复现，是模型能力的事实标准。",
            examples: [
              { n: "LLM Monitor（聚合 AA / LMArena / LiveBench）", u: "https://hghselene-prog.github.io/llm-monitor/" },
              { n: "Artificial Analysis", u: "https://artificialanalysis.ai" },
              { n: "LMArena", u: "https://lmarena.ai" },
              { n: "MLCommons / MLPerf", u: "https://mlcommons.org" }
            ] },
          { cat: "④ 科技 / 财经媒体（二手解读）",
            desc: "虎嗅、36氪、财新、智东西、CNBC、Bloomberg 等对一手信息的整理与解读。用作补充与交叉验证，一般不单独作为硬指标唯一出处。",
            examples: [
              { n: "虎嗅 WWDC26 Siri AI", u: "https://www.huxiu.com/article/4865592.html" },
              { n: "36氪 企业级 Agent 决战", u: "https://www.36kr.com/p/3809987729842183" },
              { n: "智东西 Alphabet Q2", u: "https://new.qq.com/rain/a/20260723A0BV1600" },
              { n: "央广网 WorkBuddy", u: "https://www.cnr.cn/tech/techgd/20260720/t20260720_527720335.shtml" }
            ] },
          { cat: "⑤ 前沿论文 / 论坛 / 开源社区",
            desc: "arXiv 预印本、NeurIPS / ICML 等顶会、Hugging Face、GitHub。用于跟踪技术路线与实现细节，是趋势的“先行指标”。",
            examples: [
              { n: "arXiv", u: "https://arxiv.org" },
              { n: "Hugging Face", u: "https://huggingface.co" },
              { n: "GitHub", u: "https://github.com" }
            ] },
          { cat: "⑥ 监管 / 标准 / 政府文件",
            desc: "欧盟《AI 法案》、国内《生成式人工智能服务管理暂行办法》、IEEE / ISO 标准。定义合规边界与长期约束，决定端侧与数据本地化的刚需。",
            examples: [
              { n: "EU AI Act 官方", u: "https://artificialintelligenceact.eu" },
              { n: "国家网信办 生成式AI暂行办法", u: "https://www.cac.gov.cn" },
              { n: "IEEE Standards", u: "https://standards.ieee.org" }
            ] }
        ] },
      { type: "bullets", heading: "二、信源质量门槛（我们怎么用）",
        items: [
          { t: "<b>一手优先：</b>财务数字、产品发布以官方 / IR 为准；媒体数字用于交叉验证，存在差异处标注并附双链接。" },
          { t: "<b>交叉验证：</b>单一媒体来源的关键结论（尤其用户量、增速）尽量有第二来源；预测 / 估算类一律标注“预测 / 估算”口径。" },
          { t: "<b>口径透明：</b>一次性因素（如股权收益）、统计口径（月活 vs 周活 vs 智能体用户）在出处或脚注注明，避免混用。" },
          { t: "<b>可追溯：</b>每条数据在页面内以 🔗 回链到原始出处；页尾汇总“数据来源”索引，可逐条点回。" }
        ] },
      { type: "pages", heading: "三、五个界面的分析逻辑与信源构成",
        pages: [
          { id: "earnings", label: "📊 财报",
            logic: "先按“各家财报披露状态”切分（是否出、何时出、哪一期），再看每家已出财报的关键结论。主线是“AI 投入是否进入验证期”——比对云增速、Capex 指引、自由现金流、订单储备（Backlog），结论聚焦需求侧真实性 vs 基建可持续性。",
            focus: ["维度一·披露状态：公司 / 财报期 / 披露日 / 状态", "维度二·关键结论：云厂商（Alphabet / 微软 / Amazon）云增速·Capex·Backlog", "芯片厂（TSMC / NVIDIA）营收·毛利率·先进制程", "终端厂（Apple）端侧 AI 补给·区域表现·管理层变更"],
            cats: ["① 官方 / IR（主）", "② 咨询（趋势次）", "④ 媒体（交叉验证）"],
            examples: [
              { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" },
              { n: "NVIDIA Newsroom", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" },
              { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" }
            ] },
          { id: "pc", label: "💻 PC/平板新品",
            logic: "以“AI PC 从概念到分层落地”为主线，看芯片格局（NVIDIA RTX Spark 入局、骁龙 X2、锐龙 AI）、Copilot+ 阵营，以及“操作系统层智能体框架”这一真正换机瓶颈。",
            focus: ["维度一·芯片与平台厂（NVIDIA / 高通 / AMD / 联发科 / Apple）", "维度二·整机与 OEM 发布（Acer / ASUS / Dell / HP）", "关键矛盾：OS 层 Agent 框架缺口（郭明錤）"],
            cats: ["① 官方 / IR（厂商发布、Windows Blog）", "④ 媒体（综合）"],
            examples: [
              { n: "Windows Blog（Computex）", u: "https://blogs.windows.com/devices?p=263856" },
              { n: "NVIDIA RTX Spark（腾讯新闻）", u: "https://new.qq.com/rain/a/20260602A08OAP00" }
            ] },
          { id: "models", label: "🧠 AI 模型",
            logic: "以“从比聪明到比会干活”为主线，看推理、多模态、上下文效率、开放权重、Agentic 能力、成本六维度；顶部结论直接引用 LLM Monitor 聚合的 AA / LMArena / LiveBench 基准。",
            focus: ["能力格局（GPT / Claude / Gemini / Llama / 国产）", "五大结构性变化", "基准可比（智力指数 / Arena Elo / 成本）"],
            cats: ["③ 基准 / 评测（主，LLM Monitor / AA / LMArena）", "④ 媒体（次）", "⑤ 论文 / 社区（趋势先行）"],
            examples: [
              { n: "LLM Monitor（聚合 AA / LMArena / LiveBench）", u: "https://hghselene-prog.github.io/llm-monitor/" },
              { n: "Artificial Analysis", u: "https://artificialanalysis.ai" }
            ] },
          { id: "agent", label: "🤖 端侧 Agent",
            logic: "双维度：① 品牌平台（苹果 / 华为 / 微软 / 谷歌）把 Agent 做成 OS 级、端侧优先；② 具体 Agent 产品（ChatGPT / WorkBuddy / 悟空 / OpenClaw）的功能、用户量、使用变化。结论看“会干活”与“可交付”。",
            focus: ["品牌平台：系统级 / 端侧优先路线", "产品维度：用户量、使用变化、付费转化", "企业级 Agent 的确定性 / 权限 / 审计"],
            cats: ["① 官方 / IR（厂商发布）", "④ 媒体（用户量交叉）", "⑥ 监管（合规约束）"],
            examples: [
              { n: "WWDC26 Siri AI（虎嗅）", u: "https://www.huxiu.com/article/4865592.html" },
              { n: "WorkBuddy 月访问（央广网）", u: "https://www.cnr.cn/tech/techgd/20260720/t20260720_527720335.shtml" },
              { n: "企业级 Agent 决战（36氪）", u: "https://www.36kr.com/p/3809987729842183" }
            ] },
          { id: "industry", label: "🌐 端侧 AI 产业",
            logic: "以“合规 + 芯片 + 生态三轮驱动”为主线，看监管拐点（EU AI 法案、国内办法）、市场规模（IDC 端侧推理首超云端）、芯片 / 制程、国内全栈路线与 OS AI 化体系战。",
            focus: ["维度一·合规与监管（EU AI 法案 / 国内办法 → 数据本地化刚需）", "维度二·芯片 / 生态 / 全栈（IDC 拐点 / 华为昇腾+麒麟 / openPangu）", "OS AI 化体系战（苹果 vs 华为）"],
            cats: ["② 咨询（IDC 主）", "⑥ 监管 / 标准（刚需）", "④ 媒体（综合）", "① 官方（厂商技术发布）"],
            examples: [
              { n: "IDC：China Is Leading the AI Supercycle", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" },
              { n: "EU AI Act", u: "https://artificialintelligenceact.eu" }
            ] }
        ] },
      { type: "bullets", heading: "四、架构与可追溯性",
        items: [
          { t: "<b>数据与应用分离：</b>所有指标与信源集中在 <code>data.js</code>，渲染逻辑在 <code>app.js</code>。改数据无需动代码，刷新即生效。" },
          { t: "<b>可追溯性：</b>每个数字卡片、表格行、列表项、洞察结论都带 <code>src</code> 字段（来源名称 + 链接），页面内以 🔗 标签呈现，点击可回到原始出处。" },
          { t: "<b>响应式双版本：</b>桌面端左侧边栏导航，移动端底部标签栏，同一套数据自动适配。" },
          { t: "<b>每周更新机制：</b>将本目录推送到 GitHub Pages（或任意静态托管）后，编辑 <code>data.js</code> 并提交即自动重新部署——无需 AI 每日介入，零额外 token 成本。" }
        ] },
      { type: "bullets", heading: "五、数据口径说明",
        items: [
          { t: "财务数据以各公司最近一期已披露财报为准（Alphabet / TSMC 为 Q2'26；微软 / Meta / Amazon 为日历年 Q1'26；苹果为 FY26 Q2；NVIDIA 为 FY27 Q1）。" },
          { t: "含一次性因素的数字已加注（如 Alphabet 净利含约 $990 亿股权收益、NVIDIA 含证券投资收益）。" },
          { t: "市场预测类数据（如 IDC 端侧推理规模）标注为预测口径，并以权威来源链接呈现。" }
        ] }
    ],
    sources: [
      { n: "Apple Newsroom / IR", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" },
      { n: "NVIDIA Newsroom", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" },
      { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" },
      { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" },
      { n: "IDC：China Is Leading the AI Supercycle", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" },
      { n: "LLM Monitor（聚合 AA / LMArena / LiveBench）", u: "https://hghselene-prog.github.io/llm-monitor/" },
      { n: "虎嗅 WWDC26 Siri AI", u: "https://www.huxiu.com/article/4865592.html" },
      { n: "36氪 企业级 Agent 决战", u: "https://www.36kr.com/p/3809987729842183" },
      { n: "EU AI Act 官方", u: "https://artificialintelligenceact.eu" }
    ]
  }
};
