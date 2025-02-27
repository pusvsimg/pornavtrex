# HotLinks - 现代化网站导航

![HotLinks Logo](https://github.com/bbylw/claudepornav/blob/main/demo.png)

> 一个由 Claude 3.7 Sonnet AI 辅助开发的现代化网站导航项目，UI和配色模仿 youporn 风格设计。

## 🌟 特点

- **现代化UI设计**：采用优雅的卡片布局和流畅的动画效果
- **精美配色方案**：以橙色渐变为主题，搭配深色模式支持
- **响应式布局**：完美适配各种设备屏幕
- **智能分类**：网站资源分类清晰，快速定位
- **实时搜索**：支持即时搜索功能
- **深色模式**：内置优雅的深色主题切换

## 🎨 设计特色

- 渐变主题色：#ff5e00 → #f90
- 现代化卡片设计
- 平滑过渡动画
- 精心设计的图标和排版
- 优雅的阴影效果

## 🛠️ 技术栈

- HTML5
- CSS3 (现代特性)
- 原生JavaScript
- Font Awesome 图标
- Google Fonts

## 🚀 部署指南

### GitHub Pages 部署

1. Fork 本仓库
2. 进入仓库设置 Settings → Pages
3. Source 选择 main 分支
4. 保存后等待部署完成

### Cloudflare Pages 部署

1. 在 Cloudflare Dashboard 中选择 Pages
2. 点击 "Create a project"
3. 连接你的 GitHub 账号并选择本仓库
4. 部署设置：
   - 构建命令：留空
   - 构建输出目录：留空
5. 点击 "Save and Deploy"

## 🤖 AI 开发说明

本项目由 Claude 3.7 Sonnet AI 辅助开发，主要负责：

- UI/UX 设计方案
- 代码实现和优化
- 文档编写

## 📝 开源协议

MIT License

## 📝 自定义配置

### 添加新网站

在 `script.js` 文件中的 `websites` 数组中添加新的网站对象：

```javascript
{
    name: "网站名称",
    url: "https://www.example.com",
    description: "网站描述",
    icon: "fab fa-icon-name",  // Font Awesome 图标类名
    category: "分类名称"  // 使用已有分类或创建新分类
}
```

### 管理网站分类

1. 添加新分类：
   - 在 `index.html` 的 `category-tabs` 中添加新的分类按钮：
   ```html
   <button class="tab" data-category="新分类名">新分类</button>
   ```
   - 在添加网站时使用新的分类名称

2. 修改现有分类：
   - 更新 `index.html` 中对应的分类按钮文本和 `data-category` 属性
   - 同步更新 `script.js` 中相关网站的 category 值

### Font Awesome 图标

访问 [Font Awesome Icons](https://fontawesome.com/icons) 查找合适的图标类名。

## 🙏 致谢

- [Font Awesome](https://fontawesome.com) - 图标支持
- [Google Fonts](https://fonts.google.com) - 字体支持
- Claude 3.7 Sonnet - AI 开发助手

---

> 🎉 欢迎 Star 和 Fork！如果觉得项目不错，请点个 Star 支持一下！
