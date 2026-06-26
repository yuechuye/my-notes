---
title: Codex Scan Serena MCP 方案
aliases:
  - Skills MCP 增强方案：scan + Serena
  - scan Serena MCP 方案
  - codex scan serena mcp plan
tags:
  - codex
  - skills
  - mcp
  - serena
  - note
created: 2026-04-01
updated: 2026-04-07
status: evergreen
---

# Codex Scan Serena MCP 方案

> [!abstract]
> 这份笔记记录一条最小可行路线：先给现有 skill 增加 MCP 自动路由层，再优先把 Serena 接入 `$scan` 的分析工作流，同时保留本地 fallback 和可审计日志。

## 这份笔记是做什么的

这不是实现文档，而是一份长期参考的决策记录，用来回答三个问题：

- 为什么不是直接把 `$scan` 硬编码到 Serena
- 自动触发 MCP 时，失败该怎么办
- 日志应该记到哪里、记什么

## 当前判断

- 当前还没有统一的 MCP 接入层
- 用户希望 MCP 自动触发
- 如果 Serena 在分析和结构化改代码都更强，后续可以优先统一到 Serena
- 但第一阶段应只覆盖 `$scan` 的分析能力，不直接放开改代码

## 当前落地状态

这份方案已经不只是讨论稿，当前本地已经完成了第一阶段接入：

- 已新增一个最小 runtime，用来做 capability、provider routing、fallback 和 `mcp-log.md`
- 已新增一个可直接调用的 CLI：
  - `/Users/yuechu/MY/code/codex-skills/runtime/prepare_scan_session.py`
- live `$scan` skill 已更新为优先调用这个 CLI：
  - `/Users/yuechu/.codex/skills/scan/SKILL.md`
- `$scan` 现在会先判断这次应该走 `serena` 还是 `local`
- 若 Serena 不可用，会自动 fallback 到本地分析，不中断流程

当前机器上的真实状态是：

- `uv` / `uvx` 已安装
- Serena 本体还没有被稳定验证为可用
- 当前运行结果仍会 fallback 到 `local`

原因是：

- 本机还没有稳定可确认的 Serena 命令可执行结果
- `uvx --from git+https://github.com/oraios/serena ...` 能开始拉起 Serena
- 但首次初始化链路比预期更重，`serena --help` 没有快速完成返回

## 推荐架构

核心原则：

- skill 负责工作流
- MCP 负责能力
- 中间增加一层轻量 router 做 provider 选择和 fallback

第一阶段能力模型：

- `semantic_search`
- `symbol_xref`
- `code_context_expansion`
- `analysis_log`

推荐 provider 策略：

- 首选 `Serena`
- 不可用时自动降级到本地工具链

当前实现中的 provider 检查顺序：

1. 如果有 `SERENA_COMMAND`，优先做真实命令探测
2. 如果有 `SERENA_MCP_URL`，做 TCP 连通性探测
3. 如果都没有，则直接判定缺少 Serena 配置并 fallback

## 什么叫 fallback

fallback 不是“可选优化”，而是自动触发场景里的稳定性底线。

含义是：

1. 本来优先走 Serena
2. 但 Serena 没配置好、连不上、报错、或无法完成当前分析
3. 系统自动切回本地工具继续完成 `$scan`
4. 同时把这次降级写进日志

如果没有这层机制，MCP 一出问题，整个 skill 就会变脆。

## 日志建议

推荐在每个 `$scan` 任务目录下新增：

- `mcp-log.md`

建议记录：

- timestamp
- skill
- phase
- requested_capabilities
- selected_provider
- fallback_used
- fallback_reason
- notes

这样做的价值：

- 能解释“为什么这次没走 Serena”
- 能追踪“是不是某类任务总在降级”
- 能帮助后续比较 provider 的稳定性和收益

当前 `mcp-log.md` 已经在实际写入，记录内容包括：

- 选中的 provider
- 是否 fallback
- fallback 原因
- 当前 repo 路径
- 本次 provider 选择说明

## 第一阶段范围

只做这些：

- `$scan`
- 自动触发
- Serena 优先
- 本地 fallback
- `mcp-log.md`

先不做这些：

- 全 skill 统一改造
- 多 provider 打分系统
- 结构化改代码默认开启

## 目前依赖的外部工具

这套方案当前依赖这些外部工具或运行条件：

- Codex skill 机制
  - live skill 文件位于 `~/.codex/skills`
- Python 3
  - 用于执行本地 runtime 和 CLI
- `uv` / `uvx`
  - 用于轻量拉起 Serena
- 可访问 GitHub
  - `uvx --from git+https://github.com/oraios/serena ...` 首次运行需要联网拉代码

如果要真正启用 Serena，还需要至少满足下面一种：

- `SERENA_COMMAND`
  - 推荐的轻量接法
- `SERENA_MCP_URL`
  - 适合已有常驻服务时使用

当前推荐的轻量命令是：

```bash
uvx --from git+https://github.com/oraios/serena serena start-mcp-server
```

但要注意：

- 首次运行并不完全“秒开”
- Serena 初始化时还会额外拉依赖，例如 `pywebview`
- 因此“轻量”主要体现在配置和运维成本，不代表首次启动绝对快

## 下一步

当前最值得继续补的是：

- 把 `SERENA_COMMAND` 正式配置到稳定位置
- 再做一次 Serena 真正可用的端到端验证
- 如果 Serena 稳定，再考虑把同样的能力模型扩到 `$impl` / `$probe`

相关设计工件位于：

- `/Users/yuechu/MY/code/doc/design/my/tasks/mcp-routing-scan-serena/`

相关实现位于：

- `/Users/yuechu/MY/code/codex-skills/runtime/`
