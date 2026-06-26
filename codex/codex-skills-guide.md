---
title: Codex Skills 使用指南
aliases:
  - Codex Skills 总览
  - Codex 技能使用手册
tags:
  - codex
  - skills
  - note
created: 2026-04-01
updated: 2026-04-01
status: evergreen
---

# Codex Skills 使用指南

> [!abstract]
> 这篇笔记整理我当前环境里的 skill，重点不是“文件夹里有哪些名字”，而是“什么场景该用哪个 skill”。

## 一句话理解

我当前的 skill 可以分成 4 类：

- 工作流主线：从想法到设计到实现到提交
- 笔记与知识管理：整理笔记、写 Obsidian 文档、管理 Apple Notes
- 工具增强：搜索、桌面自动化、前端设计、测试
- 系统级 skill：创建 skill、查 OpenAI 文档、装插件等

## 最重要的主线工作流

> [!tip]
> 如果你只想记一套最小心智模型，就记这一组：
> `先聊想法 -> $probe`
> `新项目 -> $init`
> `老项目新任务 -> $scan`
> `发散方案 -> $ideas`
> `设计批判 -> $crit`
> `开始实现 -> $impl`
> `最终提交 -> $cmit`

### `$probe`

用途：

- 在开始设计和写代码前，先讨论一个想法值不值得做、应该怎么做

适合：

- 需求还不清楚
- 你想让我主动指出风险、替代方案、关键问题

### `$init`

用途：

- 从一个原始想法出发，收束成一个新项目
- 或直接基于已有设计文档初始化项目工作区

适合：

- 现在还没有项目
- 你想从 `0 -> 1`
- 你已经在 `$probe` 阶段沉淀出设计文档，想直接进入正式项目初始化

### `$scan`

用途：

- 在现有项目里为一个新任务做代码分析和设计准备
- 或基于已有设计文档直接创建任务并继续分析

适合：

- 已经有项目
- 想继续做新功能、重构、修 bug
- 已经有一份任务级设计文档，想跳过重新描述任务

### `$ideas`

用途：

- 基于当前任务或设计，发散多个可行方案并做比较

适合：

- 你不想直接拍脑袋选方案
- 你希望先看 tradeoff

### `$crit`

用途：

- 对设计做批判式审查，主动找问题并收敛设计

适合：

- 设计已经初步成型
- 你怀疑还有边界情况、风险、遗漏

### `$impl`

用途：

- 按已经确认的设计开始实施，并在提交前做 review 和修正

适合：

- 设计已经基本定了
- 想进入真正编码阶段

### `$cmit`

用途：

- 在明确批准后，完成最后的总结和提交

适合：

- 代码已经改完
- 你确认可以提交

### `$fast`

用途：

- 小任务直达，不走完整工作流

适合：

- 小功能
- 小 bug
- 小范围 UI 调整
- 文案修正

## 推荐使用顺序

### 0 -> 1：从想法到新项目

```text
$probe <想法>
$init <项目想法>
$init <设计文档名>
$ideas
$crit
$impl
$cmit
```

### 1 -> n：现有项目继续做功能

```text
$probe <功能方向>
$scan <任务名>
$scan <设计文档名>
$ideas
$crit
$impl
$cmit
```

### 小任务直达

```text
$fast <任务名>
```

## 笔记与知识管理

> [!info]
> 这组 skill 负责“沉淀内容”，不是直接做代码实现。

### `$note`

用途：

- 把聊天内容、说明文档、草稿整理成 `/Users/yuechu/MY/note` 下的 Markdown 笔记

适合：

- 保存学习笔记
- 把对话整理成长期参考文档
- 转成更适合 Obsidian 的结构

特点：

- 会优先参考现有笔记风格
- 外链如果没验证就不放
- 长期参考型内容会偏 Obsidian 风格

常见用法：

```text
$note 整理一份 React 状态管理笔记
$note 把这段内容保存到我的笔记目录
$note 把这篇说明改成更适合 Obsidian 的格式
```

### `obsidian`

用途：

- 处理 Obsidian vault 中的 Markdown 笔记

适合：

- 查找现有笔记
- 创建或移动 Obsidian 笔记
- 配合 `obsidian-cli` 自动化操作

### `apple-notes`

用途：

- 用 `memo` CLI 管理 Apple Notes

适合：

- 搜索 Apple Notes
- 新建、编辑、移动、导出 Apple Notes

## 工具增强类 skill

### `multi-search-engine`

用途：

- 用多搜索引擎做信息检索

适合：

- 搜索范围更广
- 需要中文和国际搜索混合
- 想用不同搜索引擎交叉验证

### `desktop-control`

用途：

- 桌面自动化，包括鼠标、键盘、截图、窗口控制

适合：

- 需要模拟桌面操作
- 需要做 GUI 自动化
- 需要控制本机窗口或做屏幕级交互

注意：

- 这是高能力、高风险工具，只有在确实需要桌面级操作时才该用

### `frontend-design`

来源：

- 你这里同时存在两个前端设计相关 skill
- 一个是系统里的 `frontend-design`
- 一个是本地 `superdesign`，它的 `name` 也写成了 `frontend-design`

用途：

- 做页面、落地页、组件、仪表盘等前端界面设计

适合：

- 你希望我先考虑布局、视觉、主题、动效，再落代码

### `webapp-testing`

用途：

- 用 Playwright 测本地 Web 应用

适合：

- 验证前端交互
- 排查 UI 行为
- 截图、看日志、检查页面状态

### `theme-factory`

用途：

- 给页面、文档、报告、幻灯片这类产物套主题

适合：

- 已经有内容，想统一视觉风格

### `web-artifacts-builder`

用途：

- 构建较复杂的 HTML / React / Tailwind / shadcn/ui 产物

适合：

- 不是简单单页，而是有组件结构、状态管理、较复杂前端需求

## 设计与实现增强 skill

这组和主线有重叠，但更偏“完整版”或“长名称版本”：

### `codebase-analysis-design`

用途：

- 分析现有代码库并产出设计工作区

关系：

- 可以理解为 `scan` 的完整版表达

### `brainstorm-design-options`

用途：

- 围绕设计做方案发散

关系：

- 可以理解为 `ideas` 的完整版表达

### `design-critic-loop`

用途：

- 对设计做多轮批判和改进

关系：

- 可以理解为 `crit` 的完整版表达

### `implementation-review-commit`

用途：

- 实现、review、修复问题，但不自动越过最终提交确认

关系：

- 可以理解为 `impl` 相关的完整版工作流

### `finalize-commit`

用途：

- 实现结束后的最终提交步骤

关系：

- 可以理解为 `cmit` 的完整版表达

## 系统级与维护型 skill

> [!warning]
> 这组更多是“扩展 Codex 能力”或“维护工具链”，不是你日常写业务最常用的入口。

### `skill-creator`

用途：

- 创建或更新 skill

适合：

- 像这次一样，你想新建一个 `$note` 之类的技能

### `plugin-creator`

用途：

- 创建 Codex 插件目录和基础结构

### `skill-installer`

用途：

- 安装新的 Codex skill

### `openai-docs`

用途：

- 当问题涉及 OpenAI 产品或 API 时，优先基于官方文档回答

### `imagegen`

用途：

- 生成或编辑位图图片

适合：

- 插图、贴图、视觉素材、透明底图像等

## 当前环境里较弱或未完成的 skill

有几个 skill 当前描述明显还没完善：

- `analyze-codebase`
- `design-critic`
- `design-doc-writer`

它们的 `SKILL.md` 里仍有明显的 `TODO`，说明这些 skill 目前更像半成品或占位版本。能看出大方向，但不适合当成最稳定的主入口。

## 我建议你平时怎么用

### 最常用的一组

```text
$probe
$scan
$ideas
$crit
$impl
$cmit
$fast
$note
```

这组已经够覆盖你大部分日常任务。

### 当你在写笔记时

优先顺序可以这样理解：

- 想整理内容成笔记：`$note`
- 想直接操作 Obsidian vault：`obsidian`
- 想操作 Apple Notes：`apple-notes`

### 当你在做前端时

- 想做视觉和界面：`frontend-design`
- 想测网页：`webapp-testing`
- 想做复杂 Web 产物：`web-artifacts-builder`

## 最短速查卡

> [!summary]
> 这一段适合以后直接扫一眼。

```text
聊想法：$probe
新项目：$init
老项目新任务：$scan
方案发散：$ideas
设计批判：$crit
开始实现：$impl
最终提交：$cmit
小任务直达：$fast
整理笔记：$note
操作 Obsidian：obsidian
操作 Apple Notes：apple-notes
多引擎搜索：multi-search-engine
桌面自动化：desktop-control
前端设计：frontend-design
网页测试：webapp-testing
创建 skill：skill-creator
```

## 关联笔记

- [[codex-workflow]]
- [[codex-workflow-cheatsheet]]
- [[codex-slash-commands-guide]]

## 备注

- 这篇是基于我在当前环境里实际扫描到的 skill 写的，不是泛泛而谈
- 一些 skill 是别名，一些是完整版，一些是系统内部型工具
- 真正常用的，不会超过十个
