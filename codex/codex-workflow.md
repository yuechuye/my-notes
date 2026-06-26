---
title: Codex Workflow
aliases:
  - Codex 工作流
  - codex workflow guide
tags:
  - codex
  - workflow
  - guide
created: 2026-04-01
updated: 2026-04-07
status: evergreen
---

# Codex Workflow

## 概览

这套工作流分为两类场景：

- `0 -> 1`：现在还没有项目，只有一个想法，需要先落成一个新项目
- `1 -> n`：已经有项目，在现有项目上继续新增功能、重构、优化

统一使用短命令：

- `$init`：从想法或已有设计文档初始化一个新项目（`0 -> 1`）
- `$scan`：在现有项目里从任务名或已有设计文档创建任务并分析代码（`1 -> n`）
- `$ideas`：做方案发散
- `$crit`：做设计批判
- `$impl`：实现
- `$cmit`：最终提交

## 命令清单

```text
$init  <项目想法>
$init  <设计文档名>
$scan  <任务名>
$scan  <设计文档名>
$ideas
$crit
$impl
$cmit
```

说明：

- `$init` 必须带“项目想法”或“已有设计文档名”
- `$scan` 必须带“任务名”或“已有设计文档名”
- `$ideas`、`$crit`、`$impl`、`$cmit` 默认基于当前任务或当前项目继续执行
- 如果当前还没有任务/项目上下文，后续命令会要求先执行 `$init <项目想法或设计文档名>` 或 `$scan <任务名或设计文档名>`

## 适用场景

### 0 -> 1：没有项目，只有一个想法

使用流程：

```text
$probe <想法>
$init <项目想法>
$ideas
$crit
$impl
$cmit
```

如果已经在 `$probe` 阶段沉淀出设计文档，也可以直接：

```text
$probe <想法>
$init qq-chat-agent-design-v1.002
```

语义：

- `$init`：把模糊想法收敛成一个具体项目，或者直接基于已有设计文档初始化项目工作区
- `$ideas`：围绕这个新项目做方案发散
- `$crit`：反复批判和收敛设计
- `$impl`：默认只搭建“最小可运行项目骨架”
- `$cmit`：最后检查并直接提交；输入 `$cmit` 就代表批准提交

### 1 -> n：已有项目，在现有项目上继续做功能

使用流程：

```text
$probe <功能方向>
$scan <任务名>
$ideas
$crit
$impl
$cmit
```

如果已经有任务级设计文档，也可以直接：

```text
$probe <功能方向>
$scan qq-chat-agent-design-v1.002
```

语义：

- `$scan`：分析现有代码，创建任务目录；如果已经有设计文档，则直接以该文档为任务输入继续分析和落任务
- `$ideas`：基于分析结果做方案发散
- `$crit`：批判当前设计并继续收敛
- `$impl`：按最终设计完成这个功能/重构任务
- `$cmit`：最后检查并直接提交；输入 `$cmit` 就代表批准提交

## 文档目录结构

### 1 -> n：现有项目任务目录

路径：

```text
/Users/yuechu/MY/code/doc/design/<project-name>/tasks/<task-slug>/
```

默认文件：

```text
meta.yaml
analysis.md
brainstorm.md
design.md
implementation.md
final-check.md
review-rounds/
```

### 0 -> 1：新项目目录

路径：

```text
/Users/yuechu/MY/code/doc/design/<project-name>/project/
```

默认文件：

```text
meta.yaml
product.md
brainstorm.md
design.md
implementation.md
final-check.md
review-rounds/
```

## meta.yaml 规则

`meta.yaml` 的第一行必须是：

```yaml
taskName: "原始任务名或项目想法"
```

示例：

```yaml
taskName: "重构登录页表单校验逻辑"
taskSlug: "refactor-login-form-validation"
projectName: "my-app"
status: "analysis"
critic_round_count: 0
currentDesignDoc: "design.md"
```

说明：

- `taskName`：保留你的中文任务名/项目想法
- `taskSlug`：由系统自动生成，适合当目录名
- `projectName`：项目名
- `status`：当前工作流阶段
- `critic_round_count`：`$crit` 已调用次数
- `currentDesignDoc`：当前生效的设计文档

## 每个命令的行为

### `$init <项目想法或设计文档名>`

适用于 `0 -> 1`。

作用：

- 把原始想法收敛成一个可执行的新项目
- 或基于已有设计文档直接初始化项目工作区
- 生成项目目录
- 写 `product.md`
- 写初版 `design.md`

产出：

- 明确的项目名
- MVP 范围
- 目标用户
- 核心功能
- 初版架构方向

### `$scan <任务名或设计文档名>`

适用于 `1 -> n`。

作用：

- 在现有项目中创建新任务
- 或基于已有设计文档直接创建任务
- 分析相关代码
- 写 `analysis.md`
- 写初版 `design.md`

产出：

- 相关代码路径与调用链
- 约束和风险
- 实现影响面
- 初版设计

### `$ideas`

作用：

- 基于当前 `analysis.md` / `product.md` 和 `design.md` 做方案发散
- 给出 2 到 4 个真实可行的方案
- 推荐一个方案
- 把推荐方案折回 `design.md`

### `$crit`

作用：

- 对当前设计做批判式审查
- 更新 `design.md`
- 把每次批判结果保存到 `review-rounds/critic-XX.md`

支持两种用法：

```text
$crit
$crit 我怀疑这里缺少错误回滚策略
```

规则：

- 不带参数：系统自己找问题
- 带参数：你给出一个怀疑点，但这只是线索，不是结论
- 系统必须自己判断你说得对不对
- 即使你指出了一个问题，系统仍然要继续自己找其他问题
- 如果你指出的问题不正确，系统必须明确说明为什么不正确

强度递增规则：

- 第 1 次调用：做 1 轮
- 第 2 次调用：做 2 轮
- 第 3 次及以后：每次做 4 轮

### `$impl`

作用：

- 按最终设计执行实现
- 跑检查
- 做 review
- 修问题
- 写 `implementation.md`
- 写 `final-check.md`

模式区分：

#### 在 `tasks/<task-slug>/` 下

说明是 `1 -> n` 场景。

目标：

- 完成当前功能、重构或改动

#### 在 `project/` 下

说明是 `0 -> 1` 场景。

目标：

- 只搭建“最小可运行项目骨架”

通常包括：

- 项目脚手架
- 技术栈和基础配置
- 核心目录和入口
- 一个最小主流程或占位页
- 基础运行能力

默认不做：

- 一次性完成整个产品
- 超出 MVP 的大范围实现
- 不必要的过度打磨

### `$cmit`

作用：

- 检查最终 diff
- 生成 commit message
- 直接提交

规则：

- 输入 `$cmit` 本身就等于批准提交
- 不再做第二次确认
- 只有存在真实阻塞问题时才不提交

阻塞问题示例：

- diff 明显还没准备好
- 必要文件缺失
- 存在不应该提交的未解决问题

## 真实案例

### 案例 A：1 -> n，现有项目新增功能

需求：

```text
重构登录页表单校验逻辑
```

使用方式：

```text
$scan 重构登录页表单校验逻辑
$ideas
$crit
$crit 我怀疑这里缺少服务端错误和本地校验错误的合并策略
$impl
$cmit
```

过程：

1. `$scan 重构登录页表单校验逻辑`
   创建任务目录，分析登录页代码，写 `analysis.md` 和初版 `design.md`
2. `$ideas`
   给出多个校验重构方案，并推荐一个
3. `$crit`
   第一次设计批判，做 1 轮
4. `$crit 我怀疑这里缺少服务端错误和本地校验错误的合并策略`
   第二次设计批判，做 2 轮，既判断你说得是否成立，也继续找别的问题
5. `$impl`
   实现、review、修问题，写 `implementation.md` 和 `final-check.md`
6. `$cmit`
   做最后检查并直接提交

### 案例 B：0 -> 1，从想法落地为项目

想法：

```text
做一个帮助用户管理待办事项和专注时间的 web 应用
```

使用方式：

```text
$init 做一个帮助用户管理待办事项和专注时间的 web 应用
$ideas
$crit
$impl
$cmit
```

过程：

1. `$init ...`
   生成新项目名，写 `product.md` 和初版 `design.md`
2. `$ideas`
   对产品方向和技术方案做发散
3. `$crit`
   批判设计并收敛到可执行方案
4. `$impl`
   默认只搭一个最小可运行项目骨架
5. `$cmit`
   做最后检查并直接提交

## 推荐习惯

- 新项目从 `$init` 开始
- 现有项目新任务从 `$scan` 开始
- 设计不稳时多次使用 `$crit`
- `$crit` 可以带你的怀疑点，但不要把它当成唯一问题来源
- `0 -> 1` 场景下，不要期待 `$impl` 一次做完整个产品
- 输入 `$cmit` 之前，默认你已经接受本次结果并允许提交

## 快速模式：`$fast`

当任务很小、很明确、风险较低时，可以直接使用：

```text
$fast <任务名>
```

例如：

```text
$fast 给登录按钮加一个 loading 状态
$fast 修复空列表页面的提示文案
$fast 在设置页增加主题切换开关
```

语义：

- 快速分析相关代码
- 做最小必要设计判断
- 直接实现
- 跑最相关的检查
- 自查并修复明显问题
- 如果没有阻塞问题，直接提交

适合：

- 小功能
- 小 bug
- 小范围 UI 修改
- 文案修正
- 范围清晰的轻量改动

不适合：

- 跨模块重构
- 新子系统
- 数据模型变化
- 需要多轮设计推敲的需求

如果任务做着做着发现变复杂，应切换回完整流程：

```text
$scan <任务名>
$ideas
$crit
$impl
$cmit
```

## 需求调研模式：`$probe`

当你还在讨论一个功能点、一个实现方向、或者一个想法是否值得落地时，可以直接使用：

```text
$probe <想法或功能点>
```

例如：

```text
$probe 我想给登录页增加免密登录
$probe 我想给订单页增加批量操作能力
$probe 做一个帮助用户管理待办事项和专注时间的 web 应用
```

`$probe` 的目标不是直接开始编码，而是帮你把想法想清楚。

它默认必须回答这些内容：

- 我对你当前设计/想法的看法
- 有没有更优雅、更简单、更安全的方式
- 在继续往前之前，还需要确认哪些问题

适合：

- 需求调研
- 功能方案讨论
- idea 落地前的共同思考
- 你对领域不熟，需要我主动补充隐含问题和 tradeoff

典型后续流转：

- 想法还很模糊：继续使用 `$probe`
- 没有项目，想开始落地：切到 `$init`
- 已有项目，想开始做具体任务：切到 `$scan`
- 任务很小，可以直接做：切到 `$fast`
