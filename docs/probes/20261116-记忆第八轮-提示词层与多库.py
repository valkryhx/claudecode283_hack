# -*- coding: utf-8 -*-
"""第八轮核验：记忆系统的提示词层、可见性追踪层、多库/team 层、云端项目记忆层。

前七轮集中在「读通道 / 写闸门 / producer / MCP 工具」。
本轮补四块此前完全没碰过的：
  1. 记忆系统提示词本体（li / Ul / WNn）与四种记忆类型全文
  2. 引用追踪 Pen：injection 三档 body/surfaced/listed + cc-memory 标签
  3. team memory 多库：CLAUDE_MEMORY_STORES schema + .memory-sync 分区冲突
  4. Projects 云端项目记忆 HTTP 层（乐观并发协议）
  5. agent-memory 三作用域 + 符号链接越界防护
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEM = os.path.join(ROOT, "reconstructed319", "deminified")

RESULTS = []
CACHE = {}


def _lines(mod):
    if mod not in CACHE:
        with open(os.path.join(DEM, mod), encoding="utf-8", newline="") as f:
            CACHE[mod] = f.read().split("\n")
    return CACHE[mod]


def check(label, mod, snippet, expect_line=None, must_not=False, nth=1):
    lines = _lines(mod)
    hits = [i + 1 for i, ln in enumerate(lines) if snippet in ln]
    ok = (len(hits) == 0) if must_not else (len(hits) > 0)
    detail = ""
    if must_not:
        detail = "期望不存在，命中 %d 处%s" % (len(hits), (" @" + str(hits[:5])) if hits else "")
    elif hits:
        got = hits[nth - 1] if len(hits) >= nth else None
        if expect_line is not None:
            ok = (got == expect_line)
            detail = "命中 %d 处 %s，取第%d个=%s，期望 %s" % (len(hits), hits[:5], nth, got, expect_line)
        else:
            detail = "命中 %d 处 %s" % (len(hits), hits[:5])
    else:
        detail = "未命中"
    RESULTS.append((ok, label, detail))
    return ok


def check_line_not(label, mod, snippet, line):
    lines = _lines(mod)
    ok = line - 1 < len(lines) and snippet not in lines[line - 1]
    RESULTS.append((ok, label, "第 %d 行%s含 %r" % (line, "不" if ok else "却", snippet)))
    return ok


S = "m0293_0x1177df9f.js"   # 提示词层 / 多库 / agent 记忆
P = "m0591_0x11be624e.js"   # 通道 / 追踪
T = "m0452_0x11a64161.js"   # team memory 同步
J = "m1968_0x1340550d.js"   # Projects 云端记忆

# ── A. 记忆系统提示词本体 ────────────────────────────────────────────
check("A1 提示词模板函数 li", S, "function li(e, n, r) {", expect_line=4569)

check("A2 记忆目录名常量 si = auto memory", S, 'var si = "auto memory";', expect_line=4443)

check("A3 四种记忆类型取自 <types> 块", S, '"## Types of memory"', expect_line=3857, nth=2)

check("A4 user 类型定义", S, '    <name>user</name>', expect_line=3857, nth=2)

check("A5 feedback 类型要求记录失败与成功两面", S,
      "Record from failure AND success", expect_line=3857, nth=2)

check("A6 project 类型要求相对日期转绝对", S,
      'Always convert relative dates in user messages to absolute dates when saving',
      expect_line=3857, nth=2)

check("A7 reference 类型存外部系统指针", S, '    <name>reference</name>', expect_line=3857, nth=2)

check("A8 不该存的五类（代码模式/git 历史/调试方案/CLAUDE.md 已记/临时细节）", S,
      '"## What NOT to save in memory"', expect_line=3866)

check("A9 用户明确要求保存时豁免不成立：排除项仍然适用", S,
      "These exclusions apply even when the user explicitly asks you to save.", expect_line=3866)

check("A10 何时访问记忆 + 用户说忽略时必须不用", S,
      '"## When to access memories"', expect_line=3868)

check("A11 记忆会过期，需先验证再据以行动", S,
      "Memory records can become stale over time", expect_line=3867)

check("A12 推荐前要核实（文件名 grep / 路径存在）", S,
      '"## Before recommending from memory"', expect_line=3869)

check("A13 保存前先查重，更新而非新建", S,
      "Before saving, check for an existing file that already covers it.", expect_line=3873)

check("A14 引用记忆要包 <cc-memory> 标签", S, "jr = 'Whenever you use or cite content from a memory", expect_line=3874)

check("A15 四类型一句话摘要 sr", S, "sr = \"`user`: who the user is", expect_line=3875)

check("A16 记忆与 plan/task 的分工说明", S,
      '## Memory and other forms of persistence', expect_line=4580, nth=4)

check("A17 readOnly 时整段提示词改变", S,
      "This memory is read-only this session", expect_line=4579)

# ── B. 引用追踪 Pen：injection 三档 ─────────────────────────────────
check("B1 追踪类 Pen", P, "class Pen {", expect_line=69063)

check("B2 injection 默认 none", P, '    injection: "none"', expect_line=69061)

check("B3 injectionForKey 三档 body/surfaced/listed", P,
      'return this.memoryContext?.bodyKeys.has(e) ? "body" : this.surfacedKeys.has(e) ? "surfaced" : this.memoryContext?.listedKeys.has(e) ? "listed" : "none"',
      expect_line=69119)

check("B4 访问状态四值 none/read/written/read_written", P,
      'let h = n === "read" ? "read" : "written";', expect_line=69090)

check("B5 recordAccess 合并成 read_written", P,
      'this.accessedKeys.set(r, s === void 0 || s === h ? h : "read_written")', expect_line=69091)

check("B6 追踪上限 2000", P, "var fTe = 2000,", expect_line=69055)

check("B7 recordContextBuild 记录注入正文与索引列表", P,
      "recordContextBuild({", expect_line=70762)

check("B8 citedStatus 拒绝 .. 路径穿越", P,
      's.split(/[\\\\/]/).includes("..")', expect_line=69104, nth=2)

check("B9 引用文件名的容错别名表（6 种写法）", S,
      'Ja = ["cc-memory", "cc_memory", "ccmemory", "CC-MEMORY", "CC_MEMORY", "CCMEMORY"],',
      expect_line=3304)

check("B10 引用标签的句子上限 300 字符", S, "var Qo = 300;", expect_line=3345)

check("B11 单条消息最多追踪 32 个引用", S, "var Xm = 32;", expect_line=3354)

check("B12 遥测统计三档注入计数", S,
      'injectedBody: U(r, h => h.injection === "body"),', expect_line=3363)

# ── C. team memory 多库 ────────────────────────────────────────────
check("C1 多库配置来源 CLAUDE_MEMORY_STORES", S,
      "let CLAUDE_MEMORY_STORES = i.CLAUDE_MEMORY_STORES;", expect_line=352)

check("C2 非法 JSON 明确报错", S, "CLAUDE_MEMORY_STORES is not valid JSON", expect_line=358)

check("C3 每个库的字段：path/mode/scope/mount/promptIndex/skillsDirs", S,
      'mode: B(["rw", "ro"]).default("rw"),', expect_line=336)

check("C4 scope 只有 user/team 两档", S, 'scope: B(["user", "team"]).default("team"),', expect_line=337)

check("C5 重复 mount 直接报错", S, "has duplicate mount", expect_line=375)

check("C6 scope:user 最多一个", S, 'has more than one scope:"user" entry', expect_line=377)

check("C7 skillsDirs 末段必须是 skills", S,
      "the last segment must be 'skills'", expect_line=343)

check("C8 分段名禁止 . 和 ..", S, 'message: "segments must match', expect_line=332)

check("C9 team memory 同步清单文件名 .memory-sync", S, 'var vEr = ".memory-sync";', expect_line=1802)

check("C10 分区不匹配即冲突（防不同来源互踩）", T,
      'c("team_memory_multistore_conflict", "manifest_changed_mid_pull");', expect_line=4486)

check("C11 写入时遇到外来 manifest 直接 fail closed", T,
      'throw Error("mount dir holds another store\'s .memory-sync manifest at write time (fail closed)");',
      expect_line=4527)

check("C12 manifest 用 ifAbsent 前置条件创建", T,
      'type: "ifAbsent"', expect_line=4533)

check("C13 分区号版本常量 v_2 = 1", T, "  v_2 = 1,", expect_line=4476)

# ── D. Projects 云端项目记忆 ────────────────────────────────────────
check("D1 云端记忆 API 路径", J,
      'return `/v1/code/memory/channel/${encodeURIComponent(e)}/memories`;', expect_line=1148)

check("D2 项目记忆固定路径 /MEMORY.md", J, 'path_2 = "/MEMORY.md",', expect_line=1143)

check("D3 创建用 not_exists 前置条件", J, 'type: "not_exists"', expect_line=1155)

check("D4 409 表示路径冲突，同路径则保留已有", J,
      'if (l === void 0 || l === n.path) return {', expect_line=1170)

check("D5 重试退避 1s/2s/4s/8s/12s", J, "Vt = [1000, 2000, 4000, 8000, 12000],", expect_line=1144)

check("D6 分页读取最多 10 页、每页 100", J, 'limit: "100"', expect_line=1215)

check("D7 页数超限明确报错", J,
      "the project memory store has too many files to search", expect_line=1234)

check("D8 替换用 content_sha256 前置条件（乐观并发）", J,
      'type: "content_sha256",', expect_line=1266)

check("D9 Jt 是「创建或替换」两段式", J,
      'if (l !== "kept-existing") return l;', expect_line=1285)

check("D10 记忆 id 格式校验 cmsg_", J, "var qo = /^cmsg_[A-Za-z0-9_-]{1,160}$/;", expect_line=1299)

check("D11 请求超时 15s", J, "var timeout_3 = 15000,", expect_line=1142)

# ── E. agent-memory 三作用域 ───────────────────────────────────────
check("E1 三作用域路径分派 pho", S, "function pho(e, n) {", expect_line=4849)

check("E2 project -> .claude/agent-memory", S, '"agent-memory", r) + ct;', expect_line=4853)

check("E3 local -> agent-memory-local", S, '"agent-memory-local", e) + ct;', expect_line=4847, nth=2)

check("E4 user -> home 下 agent-memory", S, 'return et(pet(), "agent-memory", r) + ct;', expect_line=4857)

check("E5 目录名规范化：非字母数字下划线连字符一律转 -", S,
      'let n = e.replace(/[^a-zA-Z0-9\\-_]/g, "-");', expect_line=4842)

check("E6 user 作用域不做越界检查", S, 'return e !== "user";', expect_line=4861)

check("E7 符号链接越界防护：elsewhere 即不读", S,
      'leads out of the working copy or through a dangling link; its MEMORY.md is not read',
      expect_line=4870)

check("E8 三种作用域各自的提示语", S,
      "Since this memory is user-scope, keep learnings general", expect_line=4980)

check("E9 project 作用域提到随版本控制共享", S,
      "shared with your team via version control", expect_line=4983)

check("E10 local 作用域不入版本控制", S,
      "not checked into version control", expect_line=4986)

check("E11 agent 记忆提示词标题 Persistent Agent Memory", S,
      'displayName: "Persistent Agent Memory",', expect_line=4994)

check("E12 MEMORY.md 为空时给出建立指引", S,
      "Your ${lm} is currently empty. When you save new memories, they will appear here.",
      expect_line=4639)

check("E13 被拒绝时明确告知只读、不要创建", S,
      "Treat this agent memory as read-only in this session", expect_line=4639)

check("E14 agent-memory API beta header", "m0349_0x1193beaf.js",
      '"agent-memory-2026-07-22"', expect_line=3493)

# ── F. cowork 记忆的版本重放 ───────────────────────────────────────
check("F1 cowork 记忆按 version 取最近一条", "m0779_0x12409ec4.js",
      'if (s.type === "attachment" && s.attachment.type === "cowork_memory_context" && !s.attachment.anchor) return s.attachment.content !== null ? s.attachment.version : void 0;',
      expect_line=6121)

check("F2 锚点按版本号把记忆拼回消息流", "m0779_0x12409ec4.js",
      "if (S !== void 0) n.splice(s, 0, an(S));", expect_line=6132)

# ── G. 否定断言 ────────────────────────────────────────────────────
check("G1 cc-memory 引用标签只存在于提示词层模块，不在写入闸模块", "m0832_0x124c3af6.js",
      "cc-memory", must_not=True)

check_line_not("G2 记忆读写不以裸 memory_ 名注册（走 MCP 命名空间）", "m0290_0x1177ccad.js",
               "mcp__", 6)

check("G3 云端项目记忆不是本地 MEMORY.md（路径不同）", J,
      'path_2 = "/MEMORY.md",', expect_line=1143)

print("== 第八轮核验 ==")
npass = 0
for ok, label, detail in RESULTS:
    print("[%s] %-60s | %s" % ("PASS" if ok else "FAIL", label, detail))
    if ok:
        npass += 1
print("\n通过 %d / %d" % (npass, len(RESULTS)))
sys.exit(0 if npass == len(RESULTS) else 1)
