# 🚀 个人简历网站

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

一个现代化、响应式的个人简历网站，专为车辆工程专业毕业生设计。

## ✨ 特点

- 🎨 现代美观的UI设计
- 📱 响应式布局，适配各种设备
- ✨ 炫酷的动画效果
- 🔒 密码保护的内容编辑功能
- 📄 简历PDF下载功能
- 🌐 基于Vue 3和Tailwind CSS构建

## 🛠️ 技术栈

- **前端框架**: Vue 3
- **状态管理**: Pinia
- **路由管理**: Vue Router
- **CSS框架**: Tailwind CSS
- **构建工具**: Vite
- **动画库**: GSAP

## 📋 功能

- **个人信息展示**: 展示基本信息、教育背景、工作经验等
- **技能展示**: 以进度条形式展示各项技能水平
- **项目经验**: 展示参与过的项目，包含详细描述和图片
- **联系方式**: 提供多种联系方式和联系表单
- **简历编辑**: 通过密码验证后可编辑简历内容
- **简历下载**: 支持将简历导出为PDF格式下载

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📝 使用说明

1. 访问网站首页查看简历内容
2. 点击导航栏中的不同选项，浏览不同类别的信息
3. 点击"编辑"进入编辑模式（默认密码：123456）
4. 在编辑页面修改简历内容并保存
5. 点击"下载简历"按钮获取PDF版本的简历

## 🔒 安全说明

- 编辑功能使用简单的前端密码保护
- 在实际部署中，建议实现更安全的身份验证机制
- 所有数据存储在前端状态管理中，刷新页面后会重置为默认值

## 📄 许可证

MIT
