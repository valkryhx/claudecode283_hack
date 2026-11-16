# -*- coding: utf-8 -*-
"""第七轮核验：记忆系统的三条此前未覆盖的通道。

本轮新增（相对 20261116-记忆与Projects交叉验证.md）：
  1. memory MCP 服务器：模型可主动调用的 memory_list/read/search/write/str_replace/append
  2. account_memory_recall：账号级记忆的独立通道，UI 渲染为 null，Remote Control 下整体扣留
  3. cowork_memory_context：laptop/远端两档的记忆上下文
  4. memory_update producer：同步未保存的记忆变更通知
  5. spawned_loop_memory_withdrawal：子循环启动时的记忆撤下
  6. 工具身份判定看 MCP 服务器身份，不看工具名字符串

每条断言 = (模块名, 精确片段, 期望行号)，片段抄源码原文。
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
        p = os.path.join(DEM, mod)
        with open(p, encoding="utf-8", newline="") as f:
            CACHE[mod] = f.read().split("\n")
    return CACHE[mod]


def check_line_not(label, mod, snippet, line):
    """指定行不含该片段（用于「闸门在 A 行不在 B 行」这类定位断言）。"""
    lines = _lines(mod)
    ok = line - 1 < len(lines) and snippet not in lines[line - 1]
    detail = "第 %d 行%s含 %r" % (line, "不" if ok else "却", snippet)
    RESULTS.append((ok, label, detail))
    return ok


def check(label, mod, snippet, expect_line=None, must_not=False, nth=1):
    lines = _lines(mod)
    hits = [i + 1 for i, ln in enumerate(lines) if snippet in ln]
    ok = (len(hits) == 0) if must_not else (len(hits) > 0)
    detail = ""
    if must_not:
        detail = "期望不存在，命中 %d 处%s" % (len(hits), (" @" + str(hits[:5])) if hits else "")
    else:
        if hits:
            got = hits[nth - 1] if len(hits) >= nth else None
            if expect_line is not None:
                ok = (got == expect_line)
                detail = "命中 %d 处 %s，取第%d个=%s，期望 %s" % (
                    len(hits), hits[:5], nth, got, expect_line)
            else:
                detail = "命中 %d 处 %s" % (len(hits), hits[:5])
        else:
            detail = "未命中"
    RESULTS.append((ok, label, detail))
    return ok


# ── A. memory MCP 服务器 ────────────────────────────────────────────────
check("A1 memory MCP 服务器名 mH = \"memory\"", "m0143_0x113fa0ff.js",
      'mH = "memory",', expect_line=19)

check("A2 工具前缀由 MCP 服务器名拼出", "m0143_0x113fa0ff.js",
      'kWn = `mcp__${mH}__memory_`,', expect_line=20)

check("A3 工具常量表含 list/read/write", "m0290_0x1177ccad.js",
      'var Nji = ["memory_list", "memory_read", "memory_write"];', expect_line=8)

check("A4 yg = memory_read", "m0290_0x1177ccad.js",
      'yg = "memory_read",', expect_line=6)

check("A5 jf = memory_write", "m0290_0x1177ccad.js",
      'jf = "memory_write";', expect_line=7)

# 读类工具集合（不含 write）
check("A6 只读记忆工具集合 K8i", "m0191_0x1155a4cc.js",
      'K8i = new Set(["memory_read", "memory_list", "memory_search"]),', expect_line=2340)

# 写类工具集合（含 str_replace / append / delete）
check("A7 写类记忆工具集合 z$t", "m0191_0x1155a4cc.js",
      'z$t = new Set(["write", "str_replace", "append", "delete"].map(item => `${Vyt}${item}`)),',
      expect_line=2338)

check("A8 记忆工具名正则 AI", "m0191_0x1155a4cc.js",
      'AI = /^memory_[a-z_]+$/,', expect_line=2339)

# ── B. 工具身份判定：看服务器身份不看名字 ─────────────────────────────
check("B1 工具名以 mcp__memory__memory_ 开头且不含二级 __", "m0316_0x118fc11c.js",
      'return e.startsWith(kWn) && !e.slice(kWn.length).includes("__") || i !== void 0 && e === i;',
      expect_line=8)

check("B2 mcpInfo.accountMemoryServer 才判 verified", "m0316_0x118fc11c.js",
      'if (mcpInfo.accountMemoryServer === !0) return "verified";', expect_line=13)

check("B3 非 sdk 来源判 other_server", "m0316_0x118fc11c.js",
      'return n === void 0 || n === "sdk" ? "unplaced" : "other_server";', expect_line=15)

check("B4 Lse 只在 verified 或无 mcpInfo 时放行", "m0316_0x118fc11c.js",
      'export { mz, pAr, Lse, kNe };', expect_line=60)

# ── C. account_memory_recall（账号级记忆通道）────────────────────────
check("C1 账号记忆与 cowork 记忆同属一个附件集合", "m1636_0x12d49655.js",
      'gs = new Set(["cowork_memory_context", "account_memory_recall"]),', expect_line=265)

check("C2 Remote Control 下账号记忆整体扣留", "m1636_0x12d49655.js",
      'var Hlt = "[account memory withheld from Remote Control; shown in the terminal session]",',
      expect_line=258)

check("C3 账号记忆存储命名空间", "m1636_0x12d49655.js",
      'dd = "anthropic/memory.",', expect_line=266)

check("C4 账号记忆保存事件名", "m1636_0x12d49655.js",
      'ms = "account_memory_saved",', expect_line=267)

check("C5 账号记忆类型名", "m1636_0x12d49655.js",
      'ld = "account_memory",', expect_line=268)

check("C6 account_memory_recall 在 UI 层渲染为 null", "m2057_0x1350b61e.js",
      'case "account_memory_recall":', expect_line=7171)

check("C7 relevant_memories 被嵌入 account_memory_recall.localRecall", "m0591_0x11be624e.js",
      "        localRecall: ne", expect_line=214963)

check("C8 accountMemoryReadKeys 收集已读账号记忆路径", "m0591_0x11be624e.js",
      "for (let ot of Ne.attachment.files) G.accountMemoryReadKeys.add(PWe(ot.path));",
      expect_line=214953)

# ── D. 新增 producer ────────────────────────────────────────────────
check("D1 memory_update producer 已注册", "m0591_0x11be624e.js",
      'dc("memory_update"', expect_line=151789)

check("D2 withheld_memory producer 已注册", "m0591_0x11be624e.js",
      'dc("withheld_memory"', expect_line=151789)

check("D3 late_memory_context 受 CLAUDE_CODE_MEMORY_CONTEXT_NO_WAIT 控制", "m0591_0x11be624e.js",
      'i.CLAUDE_CODE_MEMORY_CONTEXT_NO_WAIT ? [dc("late_memory_context"', expect_line=151789)

check("D4 spawned_loop_memory_withdrawal 存在", "m0591_0x11be624e.js",
      'dc("spawned_loop_memory_withdrawal"', must_not=False)

# ── E. memory_update 的两种 source ───────────────────────────────────
check("E1 memory_update source=sync_unsaved", "m0591_0x11be624e.js",
      'source: "sync_unsaved",', expect_line=154661)

check("E2 memory_update 用 pendingMemoryUpdates 补齐", "m0591_0x11be624e.js",
      "s = e.getAppState().pendingMemoryUpdates;", expect_line=154666)

check("E3 memory_update 有 inContextPaths 标记", "m0591_0x11be624e.js",
      "inContextPaths: G.paths.filter(N)", expect_line=154681)

# ── F. 记忆文档版本与乐观并发 ────────────────────────────────────────
check("F1 记忆读写工具族正则（含 if_version 前缀匹配）", "m0452_0x11a64161.js",
      "var regExp_5 = new RegExp(`^${Vyt}(read|write|str_replace|append)$`),", expect_line=3663)

check("F2 version 标记格式 12 位 hex", "m0452_0x11a64161.js",
      "_c = /^[^\\n]*?\\[version: ([0-9a-f]{12})\\]/,", expect_line=3664)

check("F3 memory_document_N 元素标记", "m0452_0x11a64161.js",
      'Dx = /^Files in <memory_document_([0-9a-f]{16})> elements below', expect_line=3667)

check("F4 读取过期通知 Ux", "m0452_0x11a64161.js",
      "var Ux = `[This memory_read result is stale", expect_line=3815)

check("F5 跨轮记忆变更块 memory_updates", "m0452_0x11a64161.js",
      "  Bx = `<memory_updates>", expect_line=3817)

check("F6 变更块明确说明用户看不见", "m0452_0x11a64161.js",
      "This block is machine-generated bookkeeping from the memory system, not part of the user's message, and the user cannot see it",
      expect_line=3819)

check("F7 版本缓存四张表", "m0452_0x11a64161.js",
      "    read: read_2,\n    written: written_2,\n    last: last,\n    carried: carried_2".split("\n")[0],
      expect_line=3809)

# ── G. 否定断言 ────────────────────────────────────────────────────
check("G1 写集合 z$t 只含 write/str_replace/append/delete，不含 read/list/search",
      "m0191_0x1155a4cc.js",
      '"str_replace", "append", "delete"].map(item => `${Vyt}${item}`)),',
      expect_line=2338)

# Rt 那一行（legacy prose 闸）没有 CJK 加权正则
check_line_not("G4 legacy 的 Rt 行没有 CJK 加权正则", "m0832_0x124c3af6.js",
               "Script=Han", 219)

check("G5 account_memory_recall 不走 dc() 注册（独立路径）", "m0591_0x11be624e.js",
      'dc("account_memory_recall"', must_not=True)

check("G6 本地记忆工具族不以 memory_ 裸名注册（走 MCP 命名空间）",
      "m0316_0x118fc11c.js", '"memory_read"', must_not=True)

print("== 第七轮核验 ==")
npass = 0
for ok, label, detail in RESULTS:
    print("[%s] %-56s | %s" % ("PASS" if ok else "FAIL", label, detail))
    if ok:
        npass += 1
print("\n通过 %d / %d" % (npass, len(RESULTS)))
sys.exit(0 if npass == len(RESULTS) else 1)
