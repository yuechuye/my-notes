---
title: Codex Workflow Cheatsheet
aliases:
  - Codex 工作流速查表
  - codex workflow cheat sheet
tags:
  - codex
  - workflow
  - cheatsheet
created: 2026-04-01
updated: 2026-04-07
status: evergreen
---

# Codex Workflow Cheatsheet

## 需求调研

```text
$probe <想法或功能点>
```

适合：

- 讨论一个功能怎么做
- 讨论一个 idea 值不值得落地
- 我需要你主动给看法、替代方案、关键问题

## 0 -> 1：从想法到项目

```text
$init <项目想法>
$ideas
$crit
$impl
$cmit
```

说明：

- `$init`：把想法收敛成项目
- `$impl`：默认只搭最小可运行项目骨架
- `$cmit`：直接代表批准提交

## 1 -> n：现有项目继续做功能

```text
$scan <任务名>
$ideas
$crit
$impl
$cmit
```

说明：

- `$scan`：分析现有代码并建任务
- `$cmit`：直接代表批准提交

## 小任务直达

```text
$fast <任务名>
```

适合：

- 小功能
- 小 bug
- 小范围 UI 修改
- 文案修正

## `$crit` 用法

```text
$crit
$crit <你怀疑的问题>
```

规则：

- 不带参数：你自己找问题
- 带参数：我给线索，但你要自己判断对不对
- 你不能只看我提的问题，还要继续自己找问题
- 第 1 次调用：1 轮
- 第 2 次调用：2 轮
- 第 3 次及以后：4 轮

## 最短心智模型

```text
先聊想法：$probe
新项目：$init
老项目新任务：$scan
发散方案：$ideas
设计批判：$crit
开始实现：$impl
直接提交：$cmit
小任务直达：$fast
```
