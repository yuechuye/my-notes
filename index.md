---
title: 笔记导航
aliases:
  - Note Home
  - 笔记首页
tags:
  - note
  - index
created: 2026-06-27
updated: 2026-06-27
status: evergreen
---

# 📝 我的知识库

> 学习笔记、项目设计、灵感碎片——写作即思考。

## 快速入口

- 🕐 **[[timeline|时间线]]** — 按时间浏览所有笔记
- 📖 **[[guides/知识库使用指南|使用指南]]** — 怎么用这个知识库

## 常用命令

打开终端，用下面命令快速写入：

### 快速捕获
```bash
note capture "突然想到一个点子"
```
→ 自动追加到 `inbox/` 今天的碎片页。不用管文件在不在，自动创建。

### 日常记录
```bash
note daily
```
→ 创建今天的日常记录，自动在 Obsidian 打开。记流水账。

### 新建笔记
```bash
note new learning "Rust 所有权机制"   # 学习笔记 → notes/learning/
note new idea "用 Rust 写个工具"       # 想法笔记 → notes/ideas/
note new project "个人博客重构"        # 项目设计 → projects/<名>/
```
→ 从模板生成笔记，带引导式提问，填就行。

### 周报
```bash
note weekly
```
→ 生成当周周报。本周做了啥？卡在哪？下周重点？

### 发布
```bash
note publish
```
→ 自动刷新时间线 → 构建网站 → 推送到 GitHub → 网站更新。

## 按类型浏览

### 📚 [[notes/learning/|学习笔记]]
学完、读完后的总结输出。用自己的话复述。

### 💡 [[notes/ideas/|想法]]
从模糊点子到成型想法。先写下来，再整理。

### 🚧 [[projects/|项目]]
正在做或打算做的项目，方案与复盘。

### 📊 [[weekly/|周报]]
每周回顾：做了什么、学到什么、卡在哪。

## 写作规则

| 你的状态 | 放这里 |
|---------|--------|
| 💭 模糊想法，一两句话 | `inbox/` |
| 📅 今天做了什么 | `daily/` |
| 🎓 学完一个东西想整理 | `notes/learning/` |
| ✨ 有个想法想展开 | `notes/ideas/` |
| 🏗️ 开始一个新项目 | `projects/<项目名>/` |
| 📋 周末回顾 | `weekly/` |
