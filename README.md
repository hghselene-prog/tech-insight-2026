# 科技行业洞察站点 · Tech Industry Insight

> 数据与应用分离的静态洞察站点。每周更新只需改 `data.js` → commit → push，GitHub Pages 自动部署，零 AI 介入、零 token 成本。

## 站点内容

| 板块 | 说明 |
|------|------|
| 📊 财报 | 各大科技大厂最新季度财报关键数据，所有数字附来源链接 |
| 💻 PC/平板新品 | Computex / WWDC 等发布会产品分析 |
| 🧠 AI 模型 | GPT / Claude / Gemini / Llama 等模型发展与能力跃迁 |
| 🤖 端侧 Agent | Apple Intelligence / 华为小艺 / 高通等端侧智能体进展 |
| 🌐 端侧 AI 产业 | NPU 芯片、推理框架、标准与监管动态 |
| 📚 方法论 | 数据来源与更新方式说明 |

## 每周更新流程（3 分钟）

```bash
# 1. 编辑数据文件（改数字、改链接、加条目）
vim data.js

# 2. 提交并推送
git add data.js
git commit -m "weekly update: $(date +%Y-%m-%d)"
git push

# 3. 等 1-2 分钟，GitHub Pages 自动重新部署
#    访问 https://hghselene-prog.github.io/tech-insight-2026/ 查看更新
```

## 文件结构

```
├── index.html    # 入口页面
├── styles.css    # 样式（桌面侧边栏 + 移动底栏响应式）
├── app.js        # 渲染逻辑（读 data.js → 生成 DOM）
├── data.js       # ★ 所有数据与来源链接（唯一需要改的文件）
├── .nojekyll     # 绕过 Jekyll，确保 JS 原样部署
└── README.md     # 本文件
```

## 数据规范

`data.js` 中每条数据必须包含 `src` 字段：

```js
{ k: "指标名", v: "数值", d: "描述", src: { n: "来源名称", u: "https://原始链接" } }
```

页面会自动渲染为可点击的 🔗 标签，点击跳回原始出处。
