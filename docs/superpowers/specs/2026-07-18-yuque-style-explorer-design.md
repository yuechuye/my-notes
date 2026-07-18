# 语雀风格左侧目录树设计

## 概述

将 Quartz 笔记站点的左侧 Explorer 组件改造为语雀风格的目录树，包括视觉样式重写和"新建"入口。

## 目标

- 左侧边栏外观接近语雀的目录树风格
- 清晰的层级缩进线、文件夹/文件图标、hover 高亮、激活态标记
- 顶部工具栏提供"新建"按钮，点击后弹出 CLI 命令提示

## 改动范围

修改 `.quartz/plugins/explorer/` 下的 3 个文件：

| 文件 | 改动内容 |
|------|---------|
| `src/components/Explorer.tsx` | 添加顶部工具栏（标题 + 新建按钮），调整模板结构 |
| `src/components/styles/explorer.scss` | 重写样式：缩进线、图标、hover、激活态、工具栏 |
| `src/components/scripts/explorer.inline.ts` | 添加新建按钮交互（弹出 CLI 命令提示面板） |

## 视觉设计

### 布局结构

```
┌─────────────────────────────┐
│ 📁 目录           [+ 新建]  │  ← 工具栏（固定顶部）
├─────────────────────────────┤
│ ● 笔记导航                  │  ← 文件项（当前页高亮）
│ ▼ notes                     │  ← 展开的文件夹
│ │ ├ ▼ learning              │
│ │ │ └ ● Rust 所有权         │
│ │ └ ▶ ideas                 │  ← 折叠的文件夹
│ ▶ projects                  │
│ ▶ daily                     │
│ ▶ inbox                     │
└─────────────────────────────┘
```

### 文件夹状态

- **折叠**：`▶` 三角朝右 + 文件夹图标
- **展开**：`▼` 三角朝下 + 打开的文件夹图标
- 子节点通过左侧竖线连接，形成连续缩进线

### 文件项

- 用实心圆点 `●` 或小图标标记
- 当前页：加粗 + 左侧蓝色色块 + 浅蓝背景
- hover：浅灰背景

### 工具栏

- 左侧显示"目录"标题
- 右侧 `+ 新建` 按钮

## 交互设计

### 折叠/展开

- 点击箭头图标切换文件夹展开/折叠（保留现有行为）
- 点击文件夹名跳转到对应目录页（保留现有 `folderClickBehavior: "link"` 行为）
- 状态持久化到 localStorage（保留现有行为）

### 新建按钮

- 点击 `+ 新建` 按钮，从侧边栏滑出或展开一个命令提示面板
- 面板内容：
  ```
  新建学习笔记：note new learning "标题"
  新建想法：    note new idea "标题"
  新建项目：    note new project "项目名"
  ```
- 面板外点击或按 ESC 关闭

## 实现要点

### Explorer.tsx 改动

1. 引入 `toolbar` 区域在 `.explorer` 容器顶部
2. 工具栏包含标题 `h2` 和 `+ 新建` 按钮
3. 新增 `template-tooltip` 模板用于命令提示面板
4. 保持现有模板 (`template-folder`, `template-file`) 基本不变

### explorer.scss 改动

1. 工具栏样式：flex 布局，border-bottom 分隔
2. 缩进线：`.content` ul 用 `border-left` + `padding-left` 形成层级线
3. 图标：文件夹折叠/展开使用不同 SVG，文件用圆点
4. 激活态：`::before` 伪元素做左侧色块 + 背景色
5. hover：`background: var(--highlight)`
6. 新建按钮：小型按钮样式，hover 变色
7. 命令面板：absolute 定位在按钮下方，card 风格阴影

### explorer.inline.ts 改动

1. 为新建按钮绑定 click 事件
2. 创建/显示命令提示面板
3. 绑定 ESC 和外部点击关闭事件
4. 不修改现有的树渲染逻辑

## 不改变的行为

- SPA 导航（点击文件链接走 SPA router）
- 折叠状态 localStorage 持久化
- 移动端响应式行为
- `folderClickBehavior` 和 `filterFn` 等配置项
- 当前页自动展开父文件夹

## 风险与约束

- `.quartz/plugins/explorer/` 是 git 子模块，改动后需要确认不会被更新覆盖
- 需兼容深色/浅色主题（使用 Quartz CSS 变量）
- 移动端（<800px）侧边栏行为保持不变
