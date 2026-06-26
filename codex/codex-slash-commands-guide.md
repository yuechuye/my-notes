---
title: Codex Slash Commands 使用指南
aliases:
  - Codex 命令指南
  - Codex CLI 斜杠命令
tags:
  - codex
  - cli
  - note
created: 2026-04-01
updated: 2026-04-01
status: evergreen
---

# Codex Slash Commands 使用指南

> [!abstract]
> 这篇整理的是 **Codex 的 `/` 内置命令**，比如 `/new`、`/model`、`/clear`。
> 它和 [[codex-workflow]] 里那套 `$probe`、`$scan`、`$impl` 工作流命令不是一回事。

## 一句话理解

如果我在终端里使用 Codex，最值得先记住的是：

- `/new`：开新对话
- `/clear`：清屏并重开对话
- `/model`：切模型
- `/status`：看当前状态
- `/permissions`：调权限或审批模式

## 最常用命令

> [!tip]
> 真正常用的高频命令通常只有 5 个：`/new`、`/clear`、`/model`、`/status`、`/permissions`。

### `/new`

作用：

- 在当前 CLI 会话里开启一个新对话

适合：

- 当前任务聊完了，准备切换到另一个任务
- 想保留当前终端显示，但不想继续沿用旧上下文

特点：

- 会开始一段新的会话上下文
- 一般不会清空当前终端显示

### `/clear`

作用：

- 清空终端显示，并开启一个新对话

适合：

- 想彻底重开
- 当前上下文已经很乱，想重新开始

要点：

- `/clear` 不只是清屏
- 它通常还会重置当前对话

### `/model`

作用：

- 切换当前使用的模型

适合：

- 想在“更快”和“更强”之间切换
- 想针对不同任务调整模型或推理强度

常见场景：

- 简单任务用更快模型
- 复杂分析、代码改动、设计讨论用更强模型

### `/status`

作用：

- 查看当前会话状态

通常能看到：

- 当前模型
- 会话或上下文使用情况
- 权限设置
- 其他运行状态信息

### `/permissions`

作用：

- 查看或调整当前会话的权限和审批设置

补充：

- 旧命令 `/approvals` 目前通常仍可兼容
- 但现在更应该优先记 `/permissions`

### `/compact`

作用：

- 把当前长对话压缩成较短总结

适合：

- 会话已经很长
- 想节省上下文
- 还想继续当前任务，但不想带着太多历史细节

### `/diff`

作用：

- 查看当前 Git 改动

适合：

- Codex 改完代码后快速检查改动内容
- 提交前确认哪些文件被修改了

### `/init`

作用：

- 在当前项目目录生成 `AGENTS.md` 模板

适合：

- 想给 Codex 固定项目规则
- 想声明代码风格、测试要求、目录约束、协作方式

### `/resume`

作用：

- 恢复之前的会话

### `/fork`

作用：

- 从当前对话分叉出一个新线程

适合：

- 想保留原方案
- 同时探索另一种思路

### `/plan`

作用：

- 切到先规划、再执行的模式

### `/quit` / `/exit`

作用：

- 退出 Codex CLI

## 容易混淆的几组命令

> [!warning]
> `Ctrl + L` 只是终端清屏，不等于 `/clear`。

### `/new` 和 `/clear`

- `/new`：新开对话，但通常保留屏幕上的历史显示
- `/clear`：清屏，并新开对话

### `/clear` 和 `Ctrl + L`

- `/clear`：通常会清屏并重置对话
- `Ctrl + L`：只是在终端里清屏，不会重置会话

### `/permissions` 和 `/approvals`

- `/permissions`：现在更应该记住的入口
- `/approvals`：更像兼容旧写法

## CLI、App、IDE 的差异

> [!info]
> 不同环境支持的 `/` 命令不完全一样，不要默认 CLI 的命令在 App 或 IDE 里都能用。

### Codex CLI

最完整，常见的是：

- `/new`
- `/clear`
- `/model`
- `/status`
- `/permissions`
- `/compact`
- `/diff`
- `/init`
- `/resume`
- `/fork`
- `/plan`

### Codex App

常见会看到：

- `/status`
- `/review`
- `/plan-mode`
- `/mcp`
- `/feedback`

说明：

- 在 App 里，新建对话有时更依赖界面按钮或快捷键
- 不一定有 CLI 那样的 `/clear`、`/model`

### Codex IDE Extension

常见可能包括：

- `/status`
- `/review`
- `/local`
- `/cloud`
- `/auto-context`
- `/feedback`

## 速查卡

> [!summary]
> 这块适合直接扫一眼。

```text
/new           开新对话
/clear         清屏并开新对话
/model         切模型
/status        看当前状态
/permissions   调权限/审批
/compact       压缩长对话
/diff          看 Git 改动
/init          生成 AGENTS.md
/resume        恢复历史会话
/fork          分叉当前会话
/plan          先规划再执行
/quit          退出 CLI
```

## 和工作流命令的区别

可以直接这样记：

### 第一类：Codex 内置命令

```text
/new
/clear
/model
/status
/permissions
```

用途：

- 管理会话
- 控制模型
- 调整权限
- 查看状态

### 第二类：我自己的工作流命令

```text
$probe
$init
$scan
$ideas
$crit
$impl
$cmit
$fast
```

用途：

- 组织需求讨论
- 分析代码
- 发散方案
- 做设计批判
- 实施和提交

相关笔记：

- [[codex-workflow]]
- [[codex-workflow-cheatsheet]]

## 使用建议

### 什么时候优先用 `/new`

- 当前任务已经结束
- 你不想让新任务继承旧任务语境
- 但你还想保留终端里的历史显示

### 什么时候优先用 `/clear`

- 当前上下文混乱
- 对话很脏，想彻底重来
- 想同时清屏和重置会话

### 什么时候优先用 `/compact`

- 已经聊了很多轮
- 当前任务还没做完
- 想降低上下文负担，而不是直接开新会话

## 仍需注意的点

- 不同版本的 Codex，命令可能会调整
- CLI、App、IDE 的命令并不完全一致
- 如果你看到旧资料里写的是 `/approvals`，优先按 `/permissions` 理解
- 如果某个命令在你当前环境不可用，先判断是不是因为你换到了 App 或 IDE

## 参考

- CLI Slash Commands
  - https://developers.openai.com/codex/cli/slash-commands
- Codex App Commands
  - https://developers.openai.com/codex/app/commands
- Codex IDE Slash Commands
  - https://developers.openai.com/codex/ide/slash-commands
