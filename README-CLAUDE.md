# 🤖 Claude Code 维护指南

这个文档说明如何使用 Claude Code 高效维护你的个人学术主页。

## 🚀 快速开始

### 1. 打开项目

在终端中进入项目目录并启动 Claude Code：

```bash
cd /Users/zhangtongyi/Documents/GitHub/zhang
claude
```

或者在 VS Code 中打开此文件夹，Claude Code 会自动加载项目配置。

### 2. 自动配置

打开项目后，Claude Code 会自动：
- ✅ 切换到 **Sonnet 模型**（适合日常维护任务）
- ✅ 加载项目特定的配置（见 [CLAUDE.md](CLAUDE.md)）
- ✅ 识别这是一个 Jekyll 学术主页项目

### 3. 开始对话

你可以直接向 Claude 提出需求，例如：

#### 📝 内容更新
```
"帮我添加一篇新论文到发表物列表"
"更新个人简介，强调最新的研究方向"
"添加一门新课程到教学页面"
```

#### 🎨 设计优化
```
"优化移动端的导航菜单显示"
"调整首页的配色方案，使用更学术的色调"
"改进论文列表的排版，增加可读性"
```

#### 🔧 技术任务
```
"优化网站加载速度"
"添加 Google Scholar 引用数自动显示"
"生成可下载的 PDF 简历"
```

#### 🐛 问题修复
```
"修复在 Safari 浏览器中的显示问题"
"某些链接失效了，帮我批量检查"
"图片加载太慢，需要压缩优化"
```

## 📂 项目结构说明

Claude 已经熟悉你的项目结构，可以直接操作：

- **`_pages/`** - 主要页面（about.md, cv.md, publications.md 等）
- **`_publications/`** - 论文条目（每篇论文一个 .md 文件）
- **`_teaching/`** - 教学内容
- **`_config.yml`** - 网站主配置
- **`images/`** - 图片资源
- **`files/`** - 可下载文件（论文 PDF、简历等）

## 🎯 常见任务示例

### 添加新论文

**你只需说：**
> "帮我添加一篇新论文，标题是 XXX，发表在 XXX 期刊"

**Claude 会：**
1. 在 `_publications/` 创建新文件
2. 使用正确的 APA 格式
3. 添加必要的元数据
4. 提醒你上传 PDF 到 `files/papers/`

### 更新个人照片

**你只需说：**
> "我有新的证件照，文件是 new-profile.jpg，帮我更新网站头像"

**Claude 会：**
1. 压缩和优化图片
2. 更新 `_config.yml` 中的配置
3. 确保响应式显示正常
4. 备份旧头像

### 优化网站性能

**你只需说：**
> "网站加载有点慢，帮我优化一下"

**Claude 会：**
1. 检查图片大小并压缩
2. 优化 CSS/JS 加载
3. 添加懒加载
4. 检查外部资源
5. 生成优化报告

## 🛠️ 本地预览

在修改网站后，建议本地预览效果：

```bash
# 启动 Jekyll 本地服务器
bundle exec jekyll serve

# 在浏览器访问
open http://localhost:4000/zhang
```

Claude 可以帮你执行这些命令并查看输出。

## 📤 部署到 GitHub Pages

当修改完成后，部署流程：

**你只需说：**
> "修改完成了，帮我提交并部署到 GitHub"

**Claude 会：**
1. 检查所有修改
2. 生成合适的 commit message
3. 执行 git add、commit、push
4. 提醒你等待 GitHub Pages 自动部署

通常 1-3 分钟后，你的网站就会更新。

## 🎨 推荐 Skills

在这个项目中，以下 Skills 特别有用：

### `/commit`
快速提交代码到 Git，自动生成规范的 commit message。

**使用场景：**
```
更新了多个文件后：
用户: "/commit"
Claude: 自动分析修改，生成提交信息并推送
```

### `/review-pr`
（如果使用分支开发）审查 Pull Request。

## 💡 最佳实践

### 1. 频繁小改动
每次修改一个小功能后就提交，而不是积累大量修改。

### 2. 描述性提交信息
Claude 会自动生成符合规范的 commit message：
- `feat: 添加新论文《XXX》`
- `style: 优化移动端导航布局`
- `fix: 修复 Safari 浏览器兼容问题`

### 3. 本地预览
重要修改前先本地预览，避免直接部署到线上。

### 4. 备份重要文件
Claude 会在修改关键文件前自动提醒备份。

## 🔄 工作流示例

### 场景：添加新论文并更新首页

1. **启动对话：**
   ```
   用户: "我有一篇新论文发表了，帮我更新网站"
   ```

2. **Claude 询问信息：**
   ```
   Claude: "好的！请提供论文信息：
   - 标题
   - 作者
   - 期刊名称
   - 发表日期
   - DOI 或 URL
   - 是否有 PDF 文件？"
   ```

3. **用户提供信息：**
   ```
   用户: "标题：XXX
   作者：Zhang, T., & Li, X.
   期刊：Journal of Experimental Psychology
   日期：2026-01-15
   DOI：10.1037/xxx
   PDF 在 Downloads 文件夹"
   ```

4. **Claude 执行任务：**
   ```
   Claude:
   ✓ 已创建论文条目文件
   ✓ 已优化并移动 PDF 到 files/papers/
   ✓ 已更新首页"最新发表"部分
   ✓ 本地预览：http://localhost:4000/zhang
   ```

5. **确认并部署：**
   ```
   用户: "看起来不错，部署吧"
   Claude:
   ✓ git commit: "feat: 添加新论文《XXX》"
   ✓ git push 成功
   ✓ GitHub Pages 将在 1-3 分钟内更新
   ```

## 📚 进一步学习

### 了解配置
- 阅读 [CLAUDE.md](CLAUDE.md) 了解完整的配置和功能
- 查看 `.claude.json` 了解项目设置

### Jekyll 文档
- [Jekyll 官方文档](https://jekyllrb.com/)
- [GitHub Pages 指南](https://docs.github.com/en/pages)

### 学术主页最佳实践
- 参考 [academicpages.github.io](https://academicpages.github.io/)
- 查看其他优秀的学术主页案例

## 🆘 常见问题

### Q: 如何切换到 Opus 模型？
A: 在对话中输入 `/opus`，用于复杂的设计任务。完成后可用 `/sonnet` 切回。

### Q: 修改后网站没更新？
A:
1. 检查 Git 是否 push 成功
2. 访问 GitHub 仓库的 Actions 标签查看部署状态
3. 清除浏览器缓存后刷新

### Q: 如何回滚到之前的版本？
A: 告诉 Claude "回滚到上一个版本"，它会帮你用 Git 恢复。

### Q: 可以同时维护多个主页吗？
A: 可以！每个主页都是独立的 Claude Code 项目，切换目录即可。

## 📞 获取帮助

如果遇到问题，可以：
1. 直接问 Claude："这个问题怎么解决？"
2. 查看 [Claude Code 文档](https://github.com/anthropics/claude-code)
3. 查看 Jekyll 社区支持

---

**祝你的学术主页维护顺利！** 🎓✨

如有任何问题，随时在对话中提问，Claude 会持续为你服务。
