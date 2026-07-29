#!/bin/bash
# ============================================================
# 每周更新脚本 · 用法：
#   ./update.sh "更新说明（可选）"
# 改完 data.js 后运行此脚本，自动 commit + push，GitHub Pages 自动重新部署
# ============================================================
set -e
cd "$(dirname "$0")"

MSG="${1:-weekly update: $(date +%Y-%m-%d)}"

echo "→ 提交更改..."
git add -A
git commit -m "$MSG"

echo "→ 推送到 GitHub..."
git push origin main

echo ""
echo "✅ 已推送。GitHub Pages 将在 1-2 分钟内自动更新。"
echo "   访问：https://hghselene-prog.github.io/tech-insight-2026/"
