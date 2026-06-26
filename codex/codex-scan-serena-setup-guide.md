---
title: Codex Scan Serena 从零配置指南
aliases:
  - scan serena setup
  - codex serena 配置指南
tags:
  - codex
  - skills
  - scan
  - serena
  - mcp
  - setup
created: 2026-04-01
updated: 2026-04-01
status: evergreen
---

# Codex Scan Serena 从零配置指南

> [!abstract]
> 这份笔记用来把一台新机器从 0 配到“`$scan` 可优先尝试 Serena、失败自动 fallback 到本地工具”的状态，适合直接转给别人照着配。

## 目标

配完之后，这套系统应具备下面的行为：

- 执行 `$scan <任务名>` 时，优先尝试 Serena
- 如果 Serena 不可用，自动 fallback 到本地分析
- 不因为 Serena 失败而中断 `$scan`
- 在任务目录中写入 `mcp-log.md`

## 这套方案包含什么

当前实现由三部分组成：

1. live skill 说明
   - `~/.codex/skills/scan/SKILL.md`
2. 本地 runtime
   - `/Users/yuechu/MY/code/codex-skills/runtime/`
3. 任务设计与日志目录
   - `/Users/yuechu/MY/code/doc/design/<project-name>/tasks/<task-slug>/`

## 外部依赖

至少需要：

- Codex 本地环境，且启用 `~/.codex/skills`
- Python 3
- `uv`
- `uvx`
- 可以访问 GitHub

建议检查命令：

```bash
python3 --version
uv --version
uvx --version
```

## 推荐接法

如果要求轻量，优先用：

- `SERENA_COMMAND`

推荐命令：

```bash
uvx --from git+https://github.com/oraios/serena serena start-mcp-server
```

不推荐一开始就用：

- `SERENA_MCP_URL`

除非你已经有常驻 Serena 服务，或者要给多个客户端共用。

## 第一步：安装 uv

macOS 下最短安装方式：

```bash
brew install uv
```

安装后检查：

```bash
which uv
which uvx
uv --version
uvx --version
```

## 第二步：准备 Serena 命令

先验证这条命令能启动：

```bash
uvx --from git+https://github.com/oraios/serena serena start-mcp-server
```

注意：

- 首次运行可能比较慢
- Serena 初始化时可能还会额外拉依赖
- 当前实测中，初始化阶段会拉 `pywebview`

所以不要把“轻量”理解成“首次一定秒开”，这里的轻量主要指：

- 配置简单
- 不需要手动维护常驻服务
- 不需要自己先 clone 和安装 Serena

## 第三步：配置 Serena 接入方式

推荐配置：

```bash
SERENA_COMMAND="uvx --from git+https://github.com/oraios/serena serena start-mcp-server"
```

如果你后续有自己的服务地址，也可以改成：

```bash
SERENA_MCP_URL="http://127.0.0.1:xxxx"
```

但轻量场景默认不建议先走这条。

## 第四步：确认 `$scan` 已接入 runtime

当前 `$scan` skill 会先调用这个本地 CLI：

```bash
python3 /Users/yuechu/MY/code/codex-skills/runtime/prepare_scan_session.py --task-dir <task-dir> --repo-path <repo-path> --format json
```

如果你是复制这套方案到另一台机器，需要确认这两部分也同步过去：

- `~/.codex/skills/scan/SKILL.md`
- `/Users/yuechu/MY/code/codex-skills/runtime/`

## 第五步：验证 fallback 和日志

可以直接手动跑：

```bash
python3 /Users/yuechu/MY/code/codex-skills/runtime/prepare_scan_session.py \
  --task-dir /Users/yuechu/MY/code/doc/design/my/tasks/mcp-routing-scan-serena \
  --repo-path /Users/yuechu/MY/code/codex-skills \
  --format json
```

预期结果：

- 如果 Serena 可用：
  - `selected_provider` 应为 `serena`
- 如果 Serena 不可用：
  - `selected_provider` 应为 `local`
  - `fallback_used` 应为 `true`

同时检查任务目录下是否有：

- `mcp-log.md`

## 当前实现中的真实检查规则

provider 选择逻辑是：

1. 如果有 `SERENA_COMMAND`
   - 实际执行一次 `--help` 做探测
2. 如果有 `SERENA_MCP_URL`
   - 做 TCP 连通性检查
3. 如果都没有
   - 直接 fallback 到本地分析

这意味着它不是纯“看配置名”，而是会做真实检查。

## 当前已知限制

- 还不是 Codex 内核原生集成，而是 skill 调用本地脚本
- `SERENA_COMMAND` 和 `SERENA_MCP_URL` 目前是“真实探测优先”，但还不是完整 MCP 协议握手
- 首次 `uvx` 拉起 Serena 可能比较慢
- 当前只覆盖 `$scan` 分析链路，没有扩到 `$impl` 和结构化改代码

## 适合转交给别人时怎么说

一句话版本：

> 这套配置会让 Codex 的 `$scan` 在分析前优先尝试 Serena，失败就自动退回本地工具，并把结果写到 `mcp-log.md`。

最短操作版本：

1. 安装 `uv`
2. 确认 `uvx` 可用
3. 设置 `SERENA_COMMAND`
4. 同步 `scan/SKILL.md` 和 `runtime/`
5. 跑一次 `prepare_scan_session.py` 验证

## 相关文件

- `/Users/yuechu/.codex/skills/scan/SKILL.md`
- `/Users/yuechu/MY/code/codex-skills/runtime/prepare_scan_session.py`
- `/Users/yuechu/MY/code/codex-skills/runtime/providers.py`
- `/Users/yuechu/MY/code/codex-skills/runtime/scan_workflow.py`
- `/Users/yuechu/MY/code/doc/design/my/tasks/mcp-routing-scan-serena/`
