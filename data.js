/* ============================================================
   科技行业洞察 · 2026 Q2
   数据与应用分离：所有指标均带 src（来源名称 + 可点击链接）
   更新方式：改本文件对应字段 → 刷新页面即生效（GitHub Pages 自动部署）
   ============================================================ */
var SITE = {
  meta: {
    title: "科技行业洞察",
    period: "2026 Q2 财报季",
    lastUpdated: "2026-07-29",
    updateCadence: "每周更新（周一）",
    note: "第一页为财报数据呈现；所有数据均附来源链接，可点回原始出处。"
  },

  nav: [
    { id: "earnings", label: "财报",          ico: "📊" },
    { id: "pc",       label: "PC/平板新品",   ico: "💻" },
    { id: "models",   label: "AI 模型",       ico: "🧠" },
    { id: "agent",    label: "端侧 Agent",    ico: "🤖" },
    { id: "industry", label: "端侧 AI 产业",  ico: "🌐" },
    { id: "method",   label: "方法论",        ico: "📚" }
  ],

  /* ============================ 1. 财报 ============================ */
  earnings: {
    title: "各大科技大厂财报",
    ico: "📊",
    sub: "关注：云业务增速、AI 资本开支（Capex）指引、自由现金流、模型调用与订单储备（Backlog）",
    lede: "AI 投入进入“云收入 + 订单储备 + 产能扩张”正循环验证期。Alphabet、TSMC、NVIDIA 用业绩证明需求侧真实存在；但 Alphabet 季度自由现金流自 2004 年上市以来首次转负，激进基建的可持续性成为下半年核心变量。",
    cards: [
      { k: "Alphabet 营收 (Q2'26)", v: "$1198 亿", d: "同比 +24%，连续 12 季双位数增长", src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
      { k: "Google Cloud 增速", v: "+82%", d: "$248 亿；运营利润率 35.6%（去年 20.7%）", src: { n: "Yahoo Finance", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" } },
      { k: "TSMC 营收 (Q2'26)", v: "$402 亿", d: "同比 +33.7%，净利 +77.4%，毛利率 67.7%", src: { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" } },
      { k: "NVIDIA 营收 (FY27 Q1)", v: "$816 亿", d: "同比 +85%，净利 +211%，市值 >$5 万亿", src: { n: "NVIDIA Newsroom", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } },
      { k: "Microsoft Azure", v: "+40%", d: "云收入 +29%，AI 业务年化收入超 $370 亿", src: { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } },
      { k: "Meta 营收 (Q1'26)", v: "$563 亿", d: "同比 +33%，净利 +61%", src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } }
    ],
    table: {
      head: ["公司", "最新财报期", "营收 / 同比", "净利 / 同比", "AI 相关信号", "来源"],
      rows: [
        { cells: ["Alphabet", "Q2'26（截至 6/30，7/22 发）", "$1198 亿 / +24%", "$1121 亿 / +298%*", "Capex 指引上修至 $1950–2050 亿；云 Backlog $5140 亿（环比 +$500 亿）；Gemini MAU 9.5 亿、220 亿 token/分钟"], src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
        { cells: ["TSMC", "Q2'26（7/16 发）", "$402 亿 / +33.7%", "$223 亿 / +77.4%", "2nm 占晶圆营收 3% 并快速爬坡；Q3 指引 $446–458 亿；先进制程（≤7nm）占 77%"], src: { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" } },
        { cells: ["NVIDIA", "FY27 Q1（截至 4/26，5/20 发）", "$816 亿 / +85.2%", "$583 亿 / +210.6%", "毛利率 74.9%；数据中心 $752 亿（+92%）；Vera Rubin 成云厂商争抢对象；边缘计算 $64 亿"], src: { n: "NVIDIA Newsroom", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" } },
        { cells: ["Microsoft", "FY26 Q3（截至 3/31，4/29 发）", "$829 亿 / +18.3%", "$318 亿 / +23%", "Azure +40%；微软云 $545 亿（+29%）；全年 Capex 预计 $1900 亿；商业 RPO $6270 亿"], src: { n: "Microsoft IR", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" } },
        { cells: ["Meta", "Q1'26（4/29 发）", "$563 亿 / +33%", "$268 亿 / +61%", "Capex 占销售比 33.7%；Q2 指引 $580–610 亿；面临欧盟儿童安全监管"], src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
        { cells: ["Amazon", "Q1'26（4/29 发）", "$1815 亿 / +16.6%", "$303 亿 / +76.7%", "AWS 年化 $1287 亿；Capex 占销售比 24.35%"], src: { n: "Investopedia", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" } },
        { cells: ["Apple", "FY26 Q2（截至 3/28，4/30 发）", "$1112 亿 / +16.6%", "$296 亿 / +19.4%", "毛利率 49.3%；大中华区营收 $205 亿（+28%）；端侧 AI 仍依赖 Google Gemini 补位；库克将于 9/1 转任执行主席、Ternus 接任 CEO"], src: { n: "Apple Newsroom", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" } }
      ]
    },
    insights: [
      { type: "", html: "<b>洞察 1：</b>AI 投资叙事正从“先投入、等需求”转向“云收入 + 订单储备 + 产能扩张相互验证”。Google Cloud 82% 增速、微软 Azure 40%、Alphabet $5140 亿云 Backlog 提供需求侧硬证据；“网传谷歌砍 Capex”被证伪，其 2026 全年 Capex 反而再上修 150 亿美元。", src: { n: "智东西", u: "https://new.qq.com/rain/a/20260723A0BV1600" } },
      { type: "warn", html: "<b>洞察 2（风险）：</b>Alphabet 季度自由现金流自 2004 年上市以来<b>首次转负（-$58.5 亿）</b>；TSMC/微软/Meta 的 Capex 占销售比均处 33%–39% 高位。若云收入增速掉档，高资本开支可持续性将成市场焦点。", src: { n: "Yahoo Finance", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" } },
      { type: "good", html: "<b>对产业链的启示：</b>上游（TSMC 先进制程、NVIDIA 算力、HBM/封装）确定性最强；中游云与模型调用（国产算力、国产卡订单）在产能约束下至少维持一年供不应求；下游应用需看真实付费转化。", src: { n: "TSMC 官方", u: "https://pr.tsmc.com/english/news/3326" } }
    ],
    pill: "* Alphabet 净利含约 $990 亿股权证券未实现收益（一次性），经营层面增长由云与搜索驱动，需剔除后看真实盈利质量。",
    sources: [
      { n: "Alphabet Q2'26 财报（智东西）", u: "https://new.qq.com/rain/a/20260723A0BV1600" },
      { n: "Alphabet Q2'26（Yahoo Finance）", u: "https://finance.yahoo.com/m/4bc8709b-15c6-32af-bb7d-91d52d26e31f/alphabet-q2-2026-earnings%3A.html" },
      { n: "TSMC Q2'26 财报（官方）", u: "https://pr.tsmc.com/english/news/3326" },
      { n: "NVIDIA FY27 Q1 财报（官方）", u: "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027" },
      { n: "Microsoft FY26 Q3 财报（官方）", u: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast" },
      { n: "Apple FY26 Q2 财报（官方）", u: "https://www.apple.com.cn/newsroom/2026/04/apple-reports-second-quarter-results/" },
      { n: "Apple CEO 变更（新华社）", u: "https://www.news.cn/20260501/7bc2207dfdc14ef28d22c447926a044a/c.html" },
      { n: "Big Tech 财报综述（Investopedia）", u: "https://www.investopedia.com/big-tech-earningspalooza-alphabet-amazon-meta-and-microsoft-report-today-amzn-goog-meta-msft-stock-11959805" }
    ]
  },

  /* ============================ 2. PC/平板新品 ============================ */
  pc: {
    title: "PC / 平板新品发布会分析",
    ico: "💻",
    sub: "关注：AI PC 芯片格局、Copilot+ 阵营、端侧算力释放、操作系统层智能体框架缺口",
    lede: "Computex 2026 标志“AI PC”从概念走向分层落地——NVIDIA RTX Spark 入局消费级 Windows 芯片，Copilot+ PC 全形态铺开。但操作系统层智能体框架才是换机潮的真正瓶颈。",
    table: {
      head: ["厂商 / 芯片", "关键动作", "端侧 AI 含义", "来源"],
      rows: [
        { cells: ["NVIDIA RTX Spark", "发布消费级 Windows 11 AI PC 芯片（区别于 Linux 的 DGX Spark）；华硕/戴尔/惠普/联想/微星/微软首批机型秋季上市", "GPU 巨头正式下场 PC 主芯片，统一内存 + NPU 加速本地推理与创作"], src: { n: "腾讯新闻", u: "https://new.qq.com/rain/a/20260602A08OAP00" } },
        { cells: ["Acer", "Aspire X 16 AI / Swift Spin 14 AI（Copilot+，Intel Core Ultra 3 / 骁龙 X2）；Predator Helios 18 AI（Ultra 9 290HX Plus + RTX 5090）；Iconia Duo 平板（Android 16、3:2 OLED）；Gemini 驱动 AI 眼镜", "全形态覆盖，把 NPU 算力塞进轻薄本、游戏本与平板"], src: { n: "Windows Blog", u: "https://blogs.windows.com/devices?p=263856" } },
        { cells: ["ASUS / Dell / HP", "ProArt P16/P14、XPS 13（$699 起最薄）、XPS 16 Creator Edition、OmniBook Ultra 16 / X 14，均引入 RTX Spark 与 agentic AI 工作流", "创作者/开发者专属的本地 AI 流水线成为高端卖点"], src: { n: "Windows Blog", u: "https://blogs.windows.com/devices?p=263856" } },
        { cells: ["Qualcomm 骁龙 X2", "WoA 平台，Hexagon NPU 约 80 TOPS；CEO 安蒙称 2026 为“智能体之年”，已能本地跑 Claude Desktop、OpenClaw 等规划器", "ARM 阵营主打“常驻智能体”，功耗与续航优势突出"], src: { n: "头条 Computex", u: "https://www.toutiao.com/article/7647915875579806258" } },
        { cells: ["AMD / MediaTek", "锐龙 AI Max PRO 400 APU（大内存架构提升端侧推理）；联发科自研 ARM PC 芯片（Chromebook 切入）", "x86 守主流本、ARM 双线（WoA + Chromebook）并行渗透"], src: { n: "头条 Computex", u: "https://www.toutiao.com/article/7647915875579806258" } },
        { cells: ["Apple", "M4/M5 系列神经网络引擎，macOS 闭环内全链路端侧 AI", "统一内存架构天然利于本地大模型推理"], src: { n: "Windows Blog", u: "https://blogs.windows.com/devices?p=263856" } }
      ]
    },
    insights: [
      { type: "", html: "<b>洞察 3（关键矛盾）：</b>天风国际郭明錤指出，<b>操作系统才是撬动 AI PC 换机潮的核心变量</b>。当前多数 PC 的 AI 仍停留在“联网调云端 API”，端侧 NPU/GPU 算力未转化为刚需。只有微软完成系统级智能体改造（智能体专属内存调度、KV Cache 本地存储、跨设备任务编排），端侧算力才能变成用户愿付费的能力。", src: { n: "头条 Computex", u: "https://www.toutiao.com/article/7647915875579806258" } },
      { type: "good", html: "<b>洞察 4：</b>2026 年高通 WoA 独家排他协议到期，微软放开 WoA 芯片准入，并着手为 Agentic AI 重构底层逻辑。x86 与 ARM 将长期双线并存、分层渗透——<b>AI PC 的胜负手从“芯片算力”转向“系统调度框架 + 开发者生态”</b>。", src: { n: "腾讯新闻 RTX Spark", u: "https://new.qq.com/rain/a/20260602A08OAP00" } }
    ],
    sources: [
      { n: "Microsoft/Windows Computex 2026", u: "https://blogs.windows.com/devices?p=263856" },
      { n: "NVIDIA RTX Spark（腾讯新闻）", u: "https://new.qq.com/rain/a/20260602A08OAP00" },
      { n: "Computex 2026 AI PC 军备竞赛（头条）", u: "https://www.toutiao.com/article/7647915875579806258" }
    ]
  },

  /* ============================ 3. AI 模型 ============================ */
  models: {
    title: "AI 模型发展",
    ico: "🧠",
    sub: "关注：推理能力、多模态、上下文效率、开放权重、Agentic 能力、成本",
    lede: "竞争从“谁最聪明”转向“谁最会当 Agent”——规划/执行/迭代时长、上下文利用效率、成本与开放权重成为新战场。",
    cards: [
      { k: "OpenAI", v: "GPT-5.6", d: "7 月 GA，Agentic 编程领跑，SOTA BrowseComp/OSWorld", src: { n: "AI Stack Digest", u: "https://aistackdigest.com/ai-model-comparison/" } },
      { k: "Anthropic", v: "Claude Opus 4.8", d: "编码/智能体推理第一梯队；Fable 5 / Mythos 5 已出", src: { n: "AI Stack Digest", u: "https://aistackdigest.com/ai-model-comparison/" } },
      { k: "Google", v: "Gemini 3.5", d: "2M 上下文、多模态原生；Gemini 4 预训练启动，更新近月度", src: { n: "TechAimag", u: "https://www.techaimag.com/generative-ai/generative-ai-2026-trends-what-matters" } },
      { k: "Meta", v: "Llama 4.5", d: "开放权重，Scout 版 10M 上下文；开源阵营标杆", src: { n: "MachineBrief", u: "https://www.machinebrief.com/news/every-major-ai-model-released-2026-so-far" } },
      { k: "国产 / 其他", v: "DeepSeek V4 · Qwen 3.7 · GLM-5 · Grok 4.5", d: "多路线并发，成本与效率持续压缩", src: { n: "best-ai.news", u: "https://best-ai.news/ai-model-releases-2026" } }
    ],
    bulletsTitle: "2026 模型格局的五个结构性变化",
    bullets: [
      { t: "<b>推理已“真能用”：</b>前沿模型在竞赛数学（AIME 90 分位）、多文件代码调试、长合同逻辑纠错上达到可靠水平，不再是模式匹配。", src: { n: "cinextech", u: "https://cinextech.com/technology/llm-advancements-2025" } },
      { t: "<b>多模态成基线：</b>视觉/音频/视频/代码执行与工具调用已成标配，差异化在“跨模态无缝推理”而非“能不能看”。", src: { n: "TechAimag", u: "https://www.techaimag.com/generative-ai/generative-ai-2026-trends-what-matters" } },
      { t: "<b>Agentic 能力才是主战场：</b>静态问答是入场券，真正比拼能规划、执行、迭代数小时，调用工具/API/记忆的自主系统。", src: { n: "AI Stack Digest", u: "https://aistackdigest.com/ai-model-comparison/" } },
      { t: "<b>上下文窗口“失宠”：</b>多数前沿模型已稳居数十万至百万 token，规模不再上头条，比拼转向“上下文怎么被高效利用”。", src: { n: "TechAimag", u: "https://www.techaimag.com/generative-ai/generative-ai-2026-trends-what-matters" } },
      { t: "<b>效率 > 蛮力、路由 > 单模型：</b>每 token 成本、延迟、硬件效率成关键；头部系统动态路由（快模型处理简单查询、深度模型处理复杂任务），开放 vs 闭源变成“能力 vs 控制”的战略选择。", src: { n: "MachineBrief", u: "https://www.machinebrief.com/news/every-major-ai-model-released-2026-so-far" } }
    ],
    insights: [
      { type: "", html: "<b>洞察 5：</b>模型竞争进入“AI 系统栈”时代——没有万能第一，只有按任务选模型。对企业而言，<b>模型路由、私有化部署（开放权重）、Agent 编排框架</b>的重要性已超过“追某一个最强模型”。Google 把 Gemini 更新节奏提到接近每月一次，也预示模型迭代将像软件一样持续交付。", src: { n: "TechAimag", u: "https://www.techaimag.com/generative-ai/generative-ai-2026-trends-what-matters" } }
    ],
    sources: [
      { n: "AI Model Comparison Table 2026", u: "https://aistackdigest.com/ai-model-comparison/" },
      { n: "LLM Advancements in 2026", u: "https://cinextech.com/technology/llm-advancements-2025" },
      { n: "Every Major AI Model Released in 2026", u: "https://www.machinebrief.com/news/every-major-ai-model-released-2026-so-far" },
      { n: "Generative AI 2026: Core Trends", u: "https://www.techaimag.com/generative-ai/generative-ai-2026-trends-what-matters" },
      { n: "Latest AI Models 2026", u: "https://best-ai.news/ai-model-releases-2026" }
    ]
  },

  /* ============================ 4. 端侧 Agent ============================ */
  agent: {
    title: "端侧 Agent 发展",
    ico: "🤖",
    sub: "关注：系统级 Agent 框架、本地多步编排、小模型 + 常驻 NPU、跨设备协同",
    lede: "Apple、华为、Qualcomm 三条路线同时把“系统级 Agent”推向设备底层，2026 被高通定义为“智能体之年”。",
    bulletsTitle: "三大系统级 Agent 路线",
    bullets: [
      { t: "<b>Apple（WWDC 2026）：</b>Siri AI / Apple Intelligence 2.0 屏幕感知、跨 App 操作、本地多模态推理；Foundation Models 框架支持图像输入与云端模型热切换；Core AI 框架让开发者带自己的模型上设备，零服务器依赖、零 token 成本。", src: { n: "Apple Newsroom", u: "https://www.apple.com.cn/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" } },
      { t: "<b>华为（HDC 2026 · 鸿蒙 7）：</b>“Agent 亲和系统架构”让 OS 原生支持智能体感知/决策/执行；小艺 200+ 系统权限，复杂任务成功率 >90%，可跨设备执行；天工计划（10 亿元）孵化 1 万+ AI 元服务、1000+ 意图框架、5000+ Agent，兼容 MCP、A2A 端侧直连。", src: { n: "财经杂志 HDC", u: "https://www.mycaijing.com/article/detail/570133" } },
      { t: "<b>Qualcomm “Ecosystem of You”：</b>骁龙 X2 Elite Hexagon NPU 约 80 TOPS，8 Elite Gen 5 可本地跑 GPT-OSS 20B；Snapdragon Wear Elite 为全球首款集成 NPU 的可穿戴平台，支持设备上至多 20 亿参数模型。", src: { n: "Qualcomm Wear Elite", u: "https://www.qualcomm.com/news/onq/2026/03/snapdragon-wear-elite-platform" } }
    ],
    bulletsTitle2: "端侧 Agent 栈与工具",
    bullets2: [
      { t: "<b>LLMWare Model HQ：</b>在骁龙 X 上以 1–8B 小模型跑多步 Agent 工作流，无代码拖拽、纯本地编排。", src: { n: "aitechconnect", u: "https://aitechconnect.in/news/snapdragon-x2-npu-on-device-agents-2026" } },
      { t: "<b>Paage.ai 等应用：</b>本地加载 LLM + 长期记忆，执行建日程、开 App、读文档等 Agent 动作，敏感数据不出设备。", src: { n: "Qualcomm Mobile AI", u: "http://qca.qualcomm.com/smartphones/features/mobile-ai" } }
    ],
    insights: [
      { type: "", html: "<b>洞察 6（工程范式）：</b>端侧 Agent 的可行架构已清晰——<b>“小专家模型（1–8B 量化）+ 常驻微 NPU（意图/唤醒）+ 本地多步编排 + 云端按需升级”</b>。本地编排使断网也不中断，云端仅在本地模型力有不逮时按需调用（且需用户授权）。", src: { n: "aitechconnect", u: "https://aitechconnect.in/news/snapdragon-x2-npu-on-device-agents-2026" } },
      { type: "warn", html: "<b>洞察 7（被忽视的真相）：</b>TOPS 是厂商峰值营销数字，<b>真实瓶颈是内存带宽</b>。自回归推理每生成一个 token 都要从内存读一遍权重——一个 7B 模型 4-bit 量化约 3.5GB 权重，若内存带宽 100GB/s，理论天花板仅约 28 token/s，翻倍 TOPS 也动不了这根天花板。选型务必按设备实跑基准。", src: { n: "aitechconnect", u: "https://aitechconnect.in/news/snapdragon-x2-npu-on-device-agents-2026" } }
    ],
    sources: [
      { n: "On-Device AI Agents（aitechconnect）", u: "https://aitechconnect.in/news/snapdragon-x2-npu-on-device-agents-2026" },
      { n: "Qualcomm Mobile AI", u: "http://qca.qualcomm.com/smartphones/features/mobile-ai" },
      { n: "Snapdragon Wear Elite（Qualcomm）", u: "https://www.qualcomm.com/news/onq/2026/03/snapdragon-wear-elite-platform" },
      { n: "端侧多模态 AI Agent（腾讯云）", u: "https://cloud.tencent.com/developer/article/2703466" },
      { n: "Apple WWDC26 Newsroom", u: "https://www.apple.com.cn/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" },
      { n: "WWDC26 Platforms State of the Union", u: "https://developer.apple.com/jp/videos/play/wwdc2026/122/" },
      { n: "WWDC26 Highlights（coderlegion）", u: "https://coderlegion.com/20016/wwdc26-highlights" }
    ]
  },

  /* ============================ 5. 端侧 AI 产业 ============================ */
  industry: {
    title: "端侧 AI 业界动态",
    ico: "🌐",
    sub: "关注：监管合规、市场规模拐点、芯片/制程、国内全栈路线、OS AI 化体系战",
    lede: "合规 + 芯片 + 生态三轮驱动：欧盟《AI 法案》8 月生效、国内监管收紧，使“数据不出设备”从卖点变刚需；IDC 预测端侧推理市场将在 2026 年底首次超过云端。",
    cards: [
      { k: "端侧推理市场（2026 底预测）", v: "$480 亿", d: "IDC：首次超过云端推理市场", src: { n: "腾讯云端侧 Agent", u: "https://cloud.tencent.com/developer/article/2703466" } },
      { k: "端侧 AI 设备出货（2026 底）", v: ">20 亿台", d: "规模化普及拐点确立", src: { n: "IDC 官方", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" } },
      { k: "欧盟《AI 法案》", v: "8 月生效", d: "端侧推理成合规“安全港”", src: { n: "腾讯云端侧 Agent", u: "https://cloud.tencent.com/developer/article/2703466" } },
      { k: "鸿蒙国内份额（26Q1）", v: "19%", d: "首超 iOS 的 18%，全球第三大移动 OS", src: { n: "财经杂志 HDC", u: "https://www.mycaijing.com/article/detail/570133" } }
    ],
    bulletsTitle: "三条主线索",
    bullets: [
      { t: "<b>合规驱动本地化：</b>欧盟《AI 法案》2026 年 8 月生效、国内《生成式人工智能服务管理暂行办法》持续收紧，医疗、金融等行业严限数据出境。端侧推理因“数据不出设备”天然满足隐私要求，从体验卖点升级为合规刚需。", src: { n: "腾讯云端侧 Agent", u: "https://cloud.tencent.com/developer/article/2703466" } },
      { t: "<b>芯片与制程底座：</b>2nm/3nm 量产、硅碳电池续航、HBM 高带宽内存、模型压缩（如 Netspresso 体积 -90% 不损精度）共同把“本地跑大模型”从噱头变现实；TOPS 军备竞赛背后，内存带宽与能效才是体验分水岭。", src: { n: "IDC 官方", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" } },
      { t: "<b>国内全栈自主路线：</b>华为以昇腾 + 麒麟芯片亲和，将原生 30B 入端模型（2B 激活）常驻运存，openPangu 2.0 开源（5050 亿 Pro / 920 亿 Flash、512K 上下文）；小米/OPPO/vivo 展示端侧视觉-语言-动作（VLA）Agent；鸿蒙纯血 7.0 把“Agent 亲和”放系统核心。", src: { n: "财经杂志 HDC", u: "https://www.mycaijing.com/article/detail/570133" } }
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
    title: "方法论与更新说明",
    ico: "📚",
    sub: "本站的架构、数据可追溯性设计与“实时更新”机制",
    lede: "本站沿用“平板竞争分析”的思考架构：数据与应用分离、响应式双版本、每条数据可溯源。",
    bulletsTitle: "架构要点",
    bullets: [
      { t: "<b>数据与应用分离：</b>所有指标与信源集中在 <code>data.js</code>，渲染逻辑在 <code>app.js</code>。改数据无需动代码，刷新即生效。" },
      { t: "<b>可追溯性：</b>每个数字卡片、表格行、列表项、洞察结论都带 <code>src</code> 字段（来源名称 + 链接），页面内以 🔗 标签呈现，点击可回到原始出处。" },
      { t: "<b>响应式双版本：</b>桌面端左侧边栏导航，移动端底部标签栏，同一套数据自动适配。" },
      { t: "<b>实时更新机制：</b>将本目录推送到 GitHub Pages（或任意静态托管）后，编辑 <code>data.js</code> 并提交即自动重新部署——无需 AI 每日介入，零额外 token 成本。" }
    ],
    bulletsTitle2: "数据口径说明",
    bullets2: [
      { t: "财务数据以各公司最近一期已披露财报为准（Alphabet/TSMC 为 Q2'26；微软/Meta/Amazon 为日历年 Q1'26；苹果为 FY26 Q2；NVIDIA 为 FY27 Q1）。" },
      { t: "含一次性因素的数字已加注（如 Alphabet 净利含约 $990 亿股权收益、NVIDIA 含证券投资收益）。" },
      { t: "市场预测类数据（如 IDC 端侧推理规模）标注为预测口径，并以权威来源链接呈现。" }
    ],
    sources: [
      { n: "Apple WWDC26 Newsroom", u: "https://www.apple.com.cn/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" },
      { n: "IDC 官方观点", u: "https://www.idc.com/resource-center/press-releases/china-is-leading-the-ai-supercycle-and-the-distance-is-growing" }
    ]
  }
};
