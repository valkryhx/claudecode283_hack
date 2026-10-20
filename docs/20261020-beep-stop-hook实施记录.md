# 20261020-Claude Code Stop Hook 蜂鸣脚本（Python）实施记录

> 目标：每次**对话回合（turn）结束**时响一声蜂鸣，不按工具调用（step）触发。
> 本文记录完整过程与最终落地内容，供其他 agent（如 Codex）照做/学习。

---

## 1. 需求拆解

| 需求点 | 结论 |
| --- | --- |
| 触发时机 | **Stop** 事件，不是 `PostToolUse`。`Stop` 每次回合结束触发一次，等价于“Claude 停止输出、把控制权交还用户” |
| Hook 类型 | `command`（跑一个本地脚本） |
| 脚本语言 | Python |
| 放置位置 | Claude Code 的 hook 脚本属于**用户级自定义脚本**，放在 `~/.claude/hooks/` 下，即 `C:\Users\drago\.claude\hooks\` |
| 配置位置 | `~/.claude/settings.json`（全局设置，所有项目生效） |
| 发声方式 | Windows 下用 `winsound.Beep(freq, ms)`；最终参数 **800 Hz / 300 ms** |

关键区分：
- `Stop` = 整个回合结束（一回合里可能调几十次工具，只响一次）
- `PostToolUse` = 每次工具调用后（会响很多次，**不符合需求**）

---

## 2. 执行流程（可直接复用的顺序）

### 第 1 步：读取现有配置，确认不覆盖

```text
Read  C:\Users\drago\.claude\settings.json
```

已有键：`effortLevel` / `enabledPlugins` / `env` / `permissions` / `skipDangerousModePermissionPrompt` / `statusLine`。
**铁律：合并，不替换。**

### 第 2 步：检查 Python 与 hooks 目录

```bash
ls -la /c/Users/drago/.claude/hooks
which python && python --version
```

本机结果：`/c/Users/drago/.claude/hooks` 存在但为空；`python` → `/c/anaconda3/python`，Python 3.12.4。
（注意：Git Bash 里别用 `python3`，Windows 下会命中 WindowsApps 存根。）

### 第 3 步：写 Hook 脚本

路径：`C:\Users\drago\.claude\hooks\beep_on_stop.py`
要点：
- 先**读完 stdin**——Claude Code 会把 hook 输入 JSON 写进管道，脚本不读可能造成写入端等待
- 发声失败时回退到 stderr 的 `\a`（终端铃声）
- **不向 stdout 写任何东西**——Stop hook 的 stdout 会被当作 JSON 控制输出解析，乱写会干扰交互
- 用 LF 行尾

### 第 4 步：改 settings.json（合并方式）

在 JSON 对象里新增 `"hooks"` 键（原文件没有该键）：

```json
"hooks": {
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "python \"C:/Users/drago/.claude/hooks/beep_on_stop.py\"",
          "timeout": 10
        }
      ]
    }
  ]
}
```

写法说明：
- `Stop` 不需要 `matcher`（它不针对具体工具），所以事件数组里的对象只写 `hooks`
- `command` 用**正斜杠 Windows 路径**并加引号，避免路径含空格/反斜杠转义问题
- `timeout: 10` 秒足够；Beep 最长也就几百毫秒
- 命令走默认 shell（Windows 上是 Git Bash 或 PowerShell），`python` 与路径无关，两种 shell 都认双引号

### 第 5 步：管道测试（不依赖 Claude Code）

```bash
echo '{}' | python "C:/Users/drago/.claude/hooks/beep_on_stop.py"; echo "exit=$?"
```

期望：听到蜂鸣，`exit=0`。

### 第 6 步：校验 JSON

```bash
python -m json.tool "C:/Users/drago/.claude/settings.json" > /dev/null && echo "JSON OK"
grep -c $'\r' "C:/Users/drago/.claude/settings.json"   # 期望 0（LF）
```

同时用 Python 读回确认 hook 命令与其余键都还在：

```bash
python -c "import json;d=json.load(open('C:/Users/drago/.claude/settings.json',encoding='utf-8'));print(d['hooks']['Stop'][0]['hooks'][0]['command']);print(sorted(d.keys()))"
```

### 第 7 步：实机验证

Stop hook 在**当前回合内无法自触发**，必须等下一次回复结束才听得到。
若没反应：
1. 打开一次 `/hooks` 菜单（会重新加载配置），或重启 Claude Code
2. 用 `/hooks` 查看/编辑/禁用该 hook

---

## 3. 最终文件内容

### 3.1 `C:\Users\drago\.claude\hooks\beep_on_stop.py`

```python
"""Stop hook: beep once when a conversation turn ends.

Reads the hook JSON payload from stdin (so Claude Code does not block on an
unread pipe), then plays a short sound via the Windows speaker. Never writes
to stdout or fails loudly, so it cannot interfere with the turn.
"""

import sys


def main() -> None:
    try:
        sys.stdin.buffer.read()
    except Exception:
        pass

    try:
        import winsound

        winsound.Beep(800, 300)
    except Exception:
        try:
            sys.stderr.write("\a")
            sys.stderr.flush()
        except Exception:
            pass


if __name__ == "__main__":
    main()
```

### 3.2 `C:\Users\drago\.claude\settings.json`（改动后，仅示结构）

```json
{
  "effortLevel": "xhigh",
  "enabledPlugins": {
    "andrej-karpathy-skills@karpathy-skills": true,
    "claude-hd@claude-hud": false,
    "...": "..."
  },
  "env": {
    "...": "..."
  },
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python \"C:/Users/drago/.claude/hooks/beep_on_stop.py\"",
            "timeout": 10
          }
        ]
      }
    ]
  },
  "permissions": {
    "defaultMode": "bypassPermissions"
  },
  "skipDangerousModePermissionPrompt": true,
  "statusLine": {
    "command": "\"...\"",
    "type": "command"
  }
}
```

> 只新增了 `hooks` 这一个键，其余键原样保留。

---

## 4. 参数演变（本次会话实际发生的调整）

| 调整 | 代码 |
| --- | --- |
| 初版：系统提示音 | `winsound.MessageBeep(winsound.MB_ICONASTERISK)` |
| 改成纯音 600 Hz / 800 ms | `winsound.Beep(600, 800)` |
| 频率改 800 Hz | `winsound.Beep(800, 800)` |
| 时长改 300 ms（最终） | `winsound.Beep(800, 300)` |

---

## 5. 踩坑清单

1. **不要用 `PostToolUse`**：那是每 step 触发，会变成“按键音”。
2. **脚本不要写 stdout**：Stop hook 的 stdout 被当作 JSON 控制输出解析；要提示用户可用 `{"systemMessage": "..."}`。
3. **先读 stdin**：不读可能导致管道写入端挂住，进程超时。
4. **settings.json 必须合并**：直接覆盖会丢掉 `env`、`permissions`、`statusLine` 等。
5. **行尾统一 LF**：本机 Git Bash + Python 写文件时注意 `open(..., "w", newline="\n")`；`grep -c $'\r'` 应为 0。
6. **改完不一定立即生效**：settings watcher 只监听会话启动时已存在的目录/文件；失效时打开 `/hooks` 或重启。
7. **路径写法**：JSON 字符串里用正斜杠 `C:/Users/...`，避免 `\U`、`\h` 等被当转义。
8. **静默成功**：hook 正常时 UI 不会有任何提示，这是预期行为；想确认可临时在脚本里往临时文件追加一行时间戳。

---

## 6. 跨平台迁移提示

| 平台 | 发声方式 | 脚本其他部分 |
| --- | --- | --- |
| Windows | `winsound.Beep(800, 300)` | 不变 |
| macOS | `subprocess.run(["afplay", "/System/Library/Sounds/Ping.aiff"])` | stdin 读取逻辑不变 |
| Linux | `sys.stderr.write("\a")` 或 `paplay / canberra-gtk-play` | stdin 读取逻辑不变 |
