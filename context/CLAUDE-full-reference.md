# 个人学术主页维护配置

## 🤖 模型配置

**自动模型设置**：Recommended (Claude Sonnet)
- 本项目通过 `.claude.json` 配置文件自动使用 Sonnet 模型
- **每次打开此项目都会自动切换到 Sonnet 模型**
- 平衡性能与成本，适合网页内容更新、代码优化、设计调整等日常维护任务

## 🎯 项目定位

**个人学术主页** - 张统一（Zhang Tongyi）
- **学校**：西北师范大学心理学院
- **技术栈**：Jekyll + GitHub Pages
- **仓库**：tyzhang98/zhang
- **网址**：https://tyzhang98.github.io/zhang

## 📋 核心功能

### 1. 内容更新
- **发表物管理**：更新 `_publications/` 目录下的论文条目
- **教学内容**：维护 `_teaching/` 目录下的课程信息
- **个人简介**：编辑 `_pages/about.md` 等页面
- **新闻动态**：更新首页的最新消息
- **项目展示**：添加/更新研究项目

### 2. 视觉设计
- **响应式布局**：优化移动端显示效果
- **配色方案**：符合学术风格的色彩搭建
- **图片优化**：压缩图片、添加 alt 标签
- **排版调整**：字体、间距、对齐等细节优化
- **无障碍设计**：确保 WCAG 2.1 可访问性标准

### 3. 技术维护
- **Jekyll 配置**：优化 `_config.yml` 设置
- **插件管理**：管理 Jekyll 插件和依赖
- **SEO 优化**：元标签、sitemap、robots.txt
- **性能优化**：图片懒加载、代码压缩、缓存策略
- **跨浏览器兼容**：确保主流浏览器正常显示

### 4. 学术规范
- **引用格式**：确保论文列表使用正确的 APA 7th 格式
- **CV 生成**：自动从数据生成 PDF 简历
- **多语言支持**：中英文内容的双语维护
- **ORCID 集成**：链接 ORCID 个人资料
- **Google Scholar 集成**：同步学术指标

## 🏗️ 项目结构

```
zhang/
├── CLAUDE.md                 # 本配置文件
├── .claude.json              # Claude Code 项目设置
├── _config.yml               # Jekyll 主配置文件
│
├── _pages/                   # 静态页面
│   ├── about.md              # 个人简介
│   ├── cv.md                 # 简历页面
│   ├── publications.md       # 发表物列表
│   └── teaching.md           # 教学页面
│
├── _publications/            # 论文条目
│   └── *.md                  # 各篇论文的 Markdown 文件
│
├── _teaching/                # 教学内容
│   └── *.md                  # 各门课程的信息
│
├── _data/                    # 数据文件
│   ├── navigation.yml        # 导航菜单配置
│   └── authors.yml           # 作者信息
│
├── _layouts/                 # 页面模板
│   └── *.html                # 各类页面布局
│
├── _includes/                # 可复用组件
│   └── *.html                # 头部、脚部等组件
│
├── _sass/                    # 样式文件
│   └── *.scss                # SCSS 样式表
│
├── assets/                   # 静态资源
│   ├── css/                  # 编译后的 CSS
│   ├── js/                   # JavaScript 文件
│   └── images/               # 图片资源
│
├── images/                   # 网站图片
│   ├── profile.png           # 头像
│   └── *.jpg/png             # 其他图片
│
└── files/                    # 可下载文件
    ├── papers/               # 论文 PDF
    └── CV/                   # 简历文件
```

## 🎨 设计原则

### 学术风格指南
1. **专业性**
   - 简洁优雅的布局
   - 学术蓝/灰色调为主
   - 清晰的信息层级
   - 避免过度装饰

2. **可读性**
   - 字体大小：正文 16-18px
   - 行高：1.6-1.8
   - 段落间距：1.5em
   - 最大行宽：70-80 字符

3. **响应式设计**
   - 桌面优先（Desktop-first）
   - 适配平板和手机
   - 图片自适应缩放
   - 触摸友好的交互元素

4. **品牌一致性**
   - 使用西北师范大学标准色
   - 统一的标题风格
   - 协调的间距系统
   - 一致的图标库

### 用户体验目标
- **学术访客**：快速找到研究兴趣和发表物
- **合作者**：方便获取联系方式和研究方向
- **学生**：清晰了解教学内容和课程安排
- **招聘方**：轻松下载 CV 和了解背景

## 🛠️ 常用任务模板

### 1. 添加新论文
```markdown
---
title: "论文标题"
collection: publications
permalink: /publication/YYYY-MM-DD-paper-title
excerpt: '简短摘要（1-2 句话）'
date: YYYY-MM-DD
venue: '期刊名称'
paperurl: 'https://doi.org/xxx'
citation: 'Zhang, T. (YYYY). 论文标题. <i>期刊名称</i>, <i>卷号</i>(期号), 页码.'
---

## 摘要
论文详细摘要...

## 关键发现
- 发现 1
- 发现 2

[下载论文](../files/papers/paper-name.pdf)
```

### 2. 更新个人简介
```markdown
任务：更新 about.md
注意事项：
- 保持中英文双语
- 突出最新研究成果
- 更新联系方式
- 检查链接有效性
```

### 3. 设计调整
```markdown
任务：优化页面视觉效果
检查清单：
- [ ] 配色是否和谐
- [ ] 字体大小是否合适
- [ ] 移动端显示是否正常
- [ ] 图片是否压缩优化
- [ ] 加载速度是否流畅
```

### 4. SEO 优化
```markdown
任务：提升搜索引擎排名
优化项：
- 添加 meta description
- 优化页面标题
- 生成 sitemap.xml
- 添加 structured data（JSON-LD）
- 优化图片 alt 标签
```

## 📊 内容规范

### 论文条目格式（APA 7th）
```
Author, A. A., & Author, B. B. (Year). Title of article.
Title of Journal, volume(issue), page range.
https://doi.org/xxx
```

### 课程信息模板
```markdown
---
title: "课程名称"
collection: teaching
type: "本科课程/研究生课程"
permalink: /teaching/YYYY-course-name
venue: "西北师范大学, 心理学院"
date: YYYY-MM-DD
location: "中国，兰州"
---

## 课程简介
课程描述...

## 教学目标
- 目标 1
- 目标 2

## 课程大纲
1. 第一章
2. 第二章
```

### 图片优化标准
- **格式**：WebP（首选）、JPEG（照片）、PNG（图标）
- **尺寸**：
  - 头像：300x300px（1x）、600x600px（2x）
  - 横幅：1200x400px（最大）
  - 缩略图：400x300px
- **压缩**：TinyPNG 或 ImageOptim
- **命名**：小写字母-连字符-描述.ext

## 🚀 部署流程

### 本地预览
```bash
# 安装依赖（首次）
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问
open http://localhost:4000/zhang
```

### Git 工作流
```bash
# 查看修改
git status
git diff

# 提交更改
git add .
git commit -m "描述性提交信息"

# 推送到 GitHub
git push origin master

# 等待 GitHub Pages 自动部署（1-3 分钟）
```

### 提交信息规范
- `feat: 添加新论文 XXX`
- `fix: 修复导航栏显示问题`
- `style: 优化移动端布局`
- `content: 更新个人简介`
- `perf: 压缩图片减少加载时间`
- `docs: 更新维护文档`

## 🔍 质量检查清单

### 发布前检查
- [ ] 所有链接可正常访问
- [ ] 图片正确加载且优化
- [ ] 无拼写和语法错误
- [ ] 移动端显示正常
- [ ] 页面加载速度 < 3 秒
- [ ] 无控制台报错
- [ ] SEO 元标签完整
- [ ] 可访问性测试通过

### 定期维护（每月）
- [ ] 更新发表物列表
- [ ] 同步 Google Scholar 数据
- [ ] 检查外部链接有效性
- [ ] 备份重要内容
- [ ] 更新 Jekyll 依赖
- [ ] 查看网站分析数据

## 🤝 AI 助手工作准则

### 角色定位
作为**学术主页维护专家**，我具备：
- **网页设计**：精通 HTML/CSS/JavaScript、响应式设计
- **Jekyll 技术**：熟悉 Liquid 模板、YAML 配置、Markdown
- **学术规范**：了解 CV 格式、论文引用标准、学术网站惯例
- **用户体验**：关注信息架构、导航设计、可访问性
- **内容策略**：帮助组织和呈现学术成果

### 工作方式
1. **内容优先**：先理解内容目标，再考虑技术实现
2. **设计迭代**：提供多种方案供选择，快速原型验证
3. **代码质量**：符合 Web 标准，注释清晰，易于维护
4. **学术素养**：尊重学术规范，准确呈现研究成果
5. **持续优化**：基于用户反馈和数据分析改进网站

### 主动服务
- 发现内容不一致时主动指出
- 建议更优的信息架构
- 推荐学术主页最佳实践
- 提醒即将过期的内容
- 推荐有用的 Jekyll 插件

## 📚 参考资源

### Jekyll 文档
- [Jekyll 官方文档](https://jekyllrb.com/)
- [Liquid 模板语法](https://shopify.github.io/liquid/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

### 学术主页示例
- [academicpages.github.io](https://academicpages.github.io/)
- [al-folio theme](https://github.com/alshedivat/al-folio)
- [minimal-mistakes theme](https://mmistakes.github.io/minimal-mistakes/)

### 设计工具
- **配色**：[Coolors](https://coolors.co/)、[Adobe Color](https://color.adobe.com/)
- **图标**：[Font Awesome](https://fontawesome.com/)、[Academicons](https://jpswalsh.github.io/academicons/)
- **字体**：[Google Fonts](https://fonts.google.com/)
- **原型**：[Figma](https://figma.com/)、[Wireframe.cc](https://wireframe.cc/)

### 优化工具
- **性能**：[Google PageSpeed Insights](https://pagespeed.web.dev/)
- **SEO**：[Google Search Console](https://search.google.com/search-console)
- **可访问性**：[WAVE](https://wave.webaim.org/)
- **图片压缩**：[TinyPNG](https://tinypng.com/)、[Squoosh](https://squoosh.app/)

## 🎓 学术网站最佳实践

### 必备页面
- [x] 首页（简介 + 亮点）
- [x] 发表物列表（按时间倒序）
- [x] CV/简历（可下载 PDF）
- [x] 教学（课程列表）
- [ ] 研究项目（项目详情）
- [ ] 合作机会（招收学生/合作意向）

### 推荐功能
- [ ] Google Scholar 徽章
- [ ] ORCID 图标链接
- [ ] 论文下载统计
- [ ] 最新消息/博客
- [ ] 研究兴趣云图
- [ ] 合作者网络图

### 避免的错误
- ❌ 过时的信息（检查日期）
- ❌ 失效的链接
- ❌ 低质量的头像照片
- ❌ 过度复杂的导航
- ❌ 缺少联系方式
- ❌ 未优化的大图片

---

**创建时间**：2026-02-11
**维护者**：张统一（Zhang Tongyi）
**项目类型**：个人学术主页
**推荐模型**：Recommended (Claude Sonnet)
**技术栈**：Jekyll + GitHub Pages
**仓库地址**：https://github.com/tyzhang98/zhang

欢迎使用个人学术主页维护工作区！🎓🌐✨
