# -*- coding: utf-8 -*-
"""对《20261112-CC319记忆系统源码调研.md》里的**关键事实**做断言式核验。

设计原则（对应 AGENTS.md §8.5「假验收」教训）：
  - 每条事实都写成「源码文本里必须出现的精确片段 + 必须不出现的反例」，
    而不是「我觉得这段像」。
  - 少一条就报 FAIL，并打印实际窗口，便于人工判读。
  - 只读窗口，不整读大模块（m0591 235k 行）。

用法：
  python docs/probes/20261113-记忆调研断言核验.py
  python docs/probes/20261113-记忆调研断言核验.py --verbose
"""
import os
import re
import sys

DEM = r"D:/git_codes/claudecode283_hack/reconstructed319/deminified"
M0591 = "m0591_0x11be624e.js"
M0832 = "m0832_0x124c3af6.js"
M0191 = "m0191_0x1155a4cc.js"
M0293 = "m0293_0x1177df9f.js"
M0165 = "m0165_0x1145c609.js"
M0143 = "m0143_0x113fa0ff.js"
M0290 = "m0290_0x1177ccad.js"
M0452 = "m0452_0x11a64161.js"
M0064 = "m0064_0x1127ecf0.js"
M0175 = "m0175_0x1153be5b.js"
M0176 = "m0176_0x1153bfed.js"
M0187 = "m0187_0x1154a00b.js"
M0292_AS = "m0292_0x1177de3f.js"
M0244_CO = "m0244_0x116e5478.js"

_cache = {}


def lines_of(fn):
    if fn not in _cache:
        p = os.path.join(DEM, fn)
        if not os.path.exists(p):
            _cache[fn] = None
        else:
            _cache[fn] = open(p, encoding="utf-8", errors="replace").read().split("\n")
    return _cache[fn]


def line_no(fn, needle, nth=1):
    """返回第 nth 个包含 needle 的行号（1-based），找不到返回 None。"""
    ls = lines_of(fn)
    if ls is None:
        return None
    n = 0
    for i, line in enumerate(ls, 1):
        if needle in line:
            n += 1
            if n == nth:
                return i
    return None


def line_text(fn, no):
    ls = lines_of(fn)
    if ls is None or no is None or no < 1 or no > len(ls):
        return ""
    return ls[no - 1]


RESULTS = []


def check(label, fn, needle, nth=1, expect_line=None, tol=0, must_not=False):
    """断言：fn 里第 nth 个 needle 出现在 expect_line（±tol）；或反例不存在。"""
    no = line_no(fn, needle, nth)
    if must_not:
        ok = no is None
        RESULTS.append((ok, label, f"{fn} 不应含 {needle!r}，实际行 {no}"))
        return ok
    if no is None:
        RESULTS.append((False, label, f"{fn} 未找到 {needle!r}"))
        return False
    if expect_line is None:
        RESULTS.append((True, label, f"{fn}:{no}"))
        return True
    ok = abs(no - expect_line) <= tol
    RESULTS.append((ok, label, f"期望 {expect_line}±{tol}，实际 {no}"))
    return ok


def check_multi(label, fn, needles, ok_all=True):
    """断言：一组 needle 全部（或全不）出现。"""
    missing = [n for n in needles if line_no(fn, n) is None]
    if ok_all:
        ok = not missing
        RESULTS.append((ok, label, f"缺失: {missing}" if missing else "全部命中"))
    else:
        ok = len(missing) == len(needles)
        RESULTS.append((ok, label, f"意外出现: {[n for n in needles if n not in missing]}"))
    return ok


def window(fn, no, before=2, after=2):
    ls = lines_of(fn)
    return "\n".join(
        f"    {j}: {ls[j-1][:150]}" for j in range(max(1, no - before), min(len(ls), no + after) + 1)
    )


def main():
    verbose = "--verbose" in sys.argv

    # ===== 0. 工具名常量身份（这是最容易错的一类）=====
    check("ze = Read（不是 WebFetch）", M0175, 'var ze = "Read"', expect_line=6)
    check("Yt = Write", M0176, 'var Yt = "Write"', expect_line=33)
    check("dt = Edit", M0176, 'var dt = "Edit"', expect_line=6)
    check("Me = Bash", M0176, 'var Me = "Bash"', expect_line=34)
    check("kt = PowerShell", M0187, 'var kt = "PowerShell"', expect_line=5)
    check("Qr = Glob", M0191, 'var Qr = "Glob"', expect_line=35232)
    check("_r = Grep", M0191, 'var _r = "Grep"', expect_line=35233)
    check("as = ToolSearch", M0292_AS, 'var as = "ToolSearch"', expect_line=5)
    check("co = REPL", M0244_CO, 'var co = "REPL"', expect_line=6)

    # ===== 1. laptop 后端白名单：必须是这 7 个，且不含 WebFetch/WebSearch =====
    check_multi(
        "m0832 laptop 白名单只比 Read/Grep/Glob/Bash/PowerShell/Edit/Write",
        M0832,
        ["s.name === ze", "s.name === _r", "s.name === Qr",
         "s.name === Me", "s.name === kt", "s.name === dt", "s.name === Yt"],
    )
    check_multi(
        "m0832 绝不含 WebFetch / WebSearch",
        M0832, ["WebFetch", "WebSearch"], ok_all=False,
    )
    check("m0832 兜底文案列出 ze,_r,Qr", M0832, "only ${ze}, ${_r}, ${Qr}")

    # ===== 2. 工具白名单前缀 = mcp__memory__memory_ =====
    check("kWn = mcp__${mH}__memory_", M0143, "kWn = `mcp__${mH}__memory_`", expect_line=20)
    check("mH = memory", M0143, 'mH = "memory"', expect_line=19)
    check("Vyt = kWn", M0191, "Vyt = kWn", expect_line=2332)
    check("z$t 含 delete（写入侧）", M0191, 'z$t = new Set(["write", "str_replace", "append", "delete"]', expect_line=2338)
    check("XIs 含 read（通用侧）", M0191, 'XIs = new Set(["read", "write", "str_replace", "append"]', expect_line=2337)
    check("mcp 门禁挡非白名单工具", M0832, "if (!XIs.has(o.name))", expect_line=730)
    check("mcp 门禁放行 as/co", M0832, "if (o.name === as || o.name === co)", expect_line=724)
    check("mcp 门禁 newer_turn", M0832, "if (z$t.has(o.name) && V5() !== e)", expect_line=731)

    # ===== 3. 两处都是 fork（不是 fork / 非 fork）=====
    check("第一处 fork", M0832, 'querySource: "extract_memories",', nth=1)
    check("第二处 fork", M0832, 'querySource: "extract_memories",', nth=2)
    check("forkLabel 两处都有", M0832, 'forkLabel: "extract_memories",', nth=2)
    check("skipTranscript 出现 4 次（:93/:110/:1087/:1183）", M0832, "skipTranscript: !0", nth=4)
    check("mcp 路径日志", M0832, "starting (mcp,")
    check("laptop 路径日志", M0832, "starting \\u2014 ${message_count} new messages, memoryDir=")
    check("laptop 遥测 mode file", M0832, 'mode: f("file")')
    check("mcp 遥测 mode mcp", M0832, 'mode: f("mcp")')

    # ===== 4. 写入总闸 CLAUDE_CODE_POST_TURN_MEMORY =====
    check("总闸 fet() 判空", M0191, "if (!i.CLAUDE_CODE_POST_TURN_MEMORY) return null", expect_line=2408)
    check("m0832 用 fet() 取配置", M0832, "config_2 = fet()", expect_line=933)
    check("SYNC 强制 everyNTurns=1", M0191, "everyNTurns: s ? 1 : r.data.every_n_turns", expect_line=2417)
    check("SYNC 强制 idleFlushSeconds=0", M0191, "idleFlushSeconds: s ? 0 : r.data.idle_flush_s", expect_line=2419)
    check("m0848 调用点 sync await", "m0848_0x124d7ee6.js", "await ke;")

    # ===== 5. 直写闸 Nt() =====
    check("直写闸调用点", M0832, "conversation already wrote to memory in this range")
    check("Nt 判 z$t", M0832, "z$t.has(u.name)", expect_line=207)
    check("Nt 判 memory_write", M0832, "u.name === jf", expect_line=208)
    check("Nt 判 R4", M0832, "R4(y)", expect_line=213)

    # ===== 6. nD = 200 =====
    check("nD 常量", M0591, "var nD = 200;", expect_line=69141)
    check("withheld 上限 slice", M0591, ".slice(0, nD)", nth=2)

    # ===== 7. 读侧也触发 nested_memory（原文档说只有写侧）=====
    check("写侧触发", M0591, "DV(r.nestedMemoryAttachmentTriggers, G)", expect_line=74057)
    check("Edit 侧触发", M0591, "DV(n.nestedMemoryAttachmentTriggers, ne)", expect_line=213110)
    check("读侧触发（Read 主路径）", M0591, "let Mt = y.nestedMemoryAttachmentTriggers;", expect_line=147480)
    check("调度器触发", M0591, "DV(e.triggers, n)", expect_line=218848)
    check("DV 定义", M0591, "function DV(e, n) {", expect_line=71375)

    # ===== 8. attachment 管线骨架 =====
    check("dc 定义", M0591, "async function dc(e, n) {", expect_line=151808)
    check("dc 遥测事件", M0591, "tengu_attachment_compute_duration", expect_line=151819)
    check("nested_memory producer（主路径）", M0591, 'dc("nested_memory"', nth=2, expect_line=151783)
    check("nested_memory producer（inputMentionsOnly 短路分支）", M0591, 'dc("nested_memory"', nth=1, expect_line=151746)
    check("inputMentionsOnly 分支条件", M0591, "S?.inputMentionsOnly) {", expect_line=151745)
    check("async_hook_responses producer", M0591, 'dc("async_hook_responses"', expect_line=151789)
    check("late_memory_context producer", M0591, 'dc("late_memory_context"', expect_line=151789)
    check("memory_update producer", M0591, 'dc("memory_update"', expect_line=151789)
    check("withheld_memory producer", M0591, 'dc("withheld_memory"', expect_line=151789)
    check("an() 包装 type:attachment", M0591, 'type: "attachment",', expect_line=154473)
    check("uqr 定义", M0591, "async function uqr(e, n) {", expect_line=154684)
    check("uqr SessionStart 判定", M0591, 'y.hookEvent === "SessionStart"', expect_line=154688)
    check("E0n 入口", M0591, "async function E0n(e, n) {", expect_line=153809)
    check("dqr 入口", M0591, "function dqr(e, n = []) {", expect_line=154658)
    check("dqr 读 app state", M0591, "s = e.getAppState().pendingMemoryUpdates", expect_line=154666)
    check("azr 去重", M0591, "function azr(e) {", expect_line=151795)

    # ===== 9. 记忆根与域 =====
    check("EU per-host", M0191, "return q() ? KI : BI.of(H().host)", expect_line=2742)
    check("vl", M0191, "function vl() {", expect_line=2751)
    check("R4 前缀判定", M0191, "function R4(e) {", expect_line=2759)
    check("bie 写入域", M0191, "function bie(e, n = Dz()) {", expect_line=2767)
    check("bie 多一道 xpe", M0191, "return !xpe(r, n)", expect_line=2771)
    check("resolveEntry（真正 resolve 内部）", M0191, "resolveEntry = po(() => {", expect_line=2661)
    check("resolve = resolveEntry().path", M0191, "resolve = po(() => this.resolveEntry().path", expect_line=2687)
    check("resolveOwnProjectDir 在 2711", M0191, "resolveOwnProjectDir = po(() => {", expect_line=2711)
    check("canLackAFolder", M0191, "canLackAFolder() {", expect_line=2688)
    check("_Eo = qyt() || R4", M0191, "function _Eo(e) {", expect_line=2763)

    # ===== 10. agent-memory 三档（官方 schema 原文）=====
    check("subagent memory 字段 schema", M0165, "Scope for auto-loading agent memory files", expect_line=8724)
    check("三档路径明文", M0165, "agent-memory-local/<agentType>/")
    check("路径构造函数 project", M0293, 'et(pe(), ".claude", "agent-memory", r)', expect_line=4853)
    check("路径构造函数 local", M0293, 'et(pe(), ".claude", "agent-memory-local", e)', expect_line=4847)
    check("路径构造函数 user", M0293, 'et(pet(), "agent-memory", r)', expect_line=4857)
    check("agent-memory 出现在 B9e 分类函数", M0591, 'h.includes("/agent-memory/")', expect_line=76049)
    check("B9e 定义", M0591, "function B9e(e) {", expect_line=76043)
    check("B9e 调用点1", M0591, "lY(Y) || B9e(Y)", expect_line=76083)
    check("B9e 调用点2（UI 分类）", M0591, "lY(e.path) || B9e(e.path)", expect_line=214094)
    check("hio 把工具标记为 memory", M0591, '? "memory" : "other"', expect_line=214433)
    # :76090 属于 _rn()，不属于 B9e()（原文把三处并列，易误读为同一函数）
    check("_rn 定义", M0591, "function _rn(e) {", expect_line=76088)
    check("_rn 里的 agent-memory 判定", M0591, 'e.replaceAll("\\\\", "/").includes("agent-memory/")', expect_line=76090)
    check("_rn 唯一调用点在 hio 的 glob 分支", M0591, "_rn(e.glob)", expect_line=214096)

    # ===== 11. 记忆文件判定 =====
    check("B3e 定义", M0591, "function B3e() {", expect_line=68609)
    check("B3e 排除 MEMORY.md", M0591, 'let n = new Set(["MEMORY.md"])', expect_line=68617)
    check("U3e 定义", M0591, "function U3e(e, n, r) {", expect_line=68651)
    check("uTe 定义", M0591, "function uTe(e, n) {", expect_line=68644)
    check("h0n 四档", M0591, "function h0n(e) {", expect_line=153037)
    check("Nme 五档含 AutoMem", M0591, 'var Nme = ["User", "Project", "Local", "Managed", "AutoMem"]', expect_line=10928)

    # ===== 12. memory store 三工具 =====
    check("Pv = memory_list", M0290, 'Pv = "memory_list"', expect_line=5)
    check("yg = memory_read", M0290, 'yg = "memory_read"', expect_line=6)
    check("jf = memory_write", M0290, 'jf = "memory_write"', expect_line=7)
    check("store 工具定义", M0591, "searchHint: \"read a document from a memory store\"", expect_line=75852)
    check("store_kind personal/project", M0591, 'store_kind: B(["personal", "project"])', expect_line=75838)

    # ===== 13. K8n 缓存重同步 =====
    check("K8n 定义", M0832, "async function K8n(e, r) {", expect_line=56)
    check("K8n requireReadBeforeWrite", M0832, "requireReadBeforeWrite: !0", expect_line=63)
    check("K8n 调用 nZt", M0832, "let u = await nZt(e.readFileState, s, {", expect_line=62)
    check("K8n enqueue 通知", M0832, "e.enqueuePendingMemoryUpdate({", expect_line=70)

    # ===== 14. 闸门与 CJK =====
    check("first look querySource", M0832, 'querySource: "extract_memories_first_look"', expect_line=461)
    check("first look 保守：策略否决", M0832, "the pass is not skipped", nth=1, expect_line=423)
    check("first look 保守：managed 否决", M0832, "the pass is not skipped", nth=2, expect_line=424)
    check("first look 保守：没答出布尔值", M0832, "the pass is not skipped", nth=3, expect_line=467)
    check("first look 保守：异常", M0832, "the pass is not skipped", nth=4, expect_line=470)
    check("first look 空答案判空", M0832, 'b === "") return w("empty")', expect_line=422)
    check("first look 三种模式", M0832, 'config_2.firstLook === void 0 ? "off"', expect_line=1015)
    check("prose 闸 proseGate chat", M0832, 'config_2?.proseGate === "chat"', expect_line=946)
    check("CJK Et = 2", M0832, "var Et = 2,", expect_line=127)
    check("CJK bt 二者取或", M0832, "function bt(e, r) {", expect_line=137)
    check("when_overage 默认 run", M0832, 'return r.overageInUse && Pkr() ? e.whenOverage : "run"', expect_line=820)
    check("declareTask 条件注册", M0832, "if (config_2.declareTask) he = wt(taskRegistry, Re)", expect_line=1054)
    check("post_turn_memory 任务名", M0832, 'OS("post_turn_memory")', expect_line=88)
    check("coalesced 合并", M0832, "tengu_extract_memories_coalesced", expect_line=1286)

    # ===== 15. 否定结论：无向量检索 =====
    for fn in (M0832, M0191, M0452, M0290):
        check(f"{fn} 无 embedding", fn, "embedding", must_not=True)
    check("m0591 唯一 embedding 在安全分类器", M0591, "CLASSIFIER BYPASS", expect_line=134782)

    # ===== 16. 环境变量名（订正点）=====
    check("FORCE_MEMORY_SURVEY 存在", M0064, "CLAUDE_CODE_FORCE_MEMORY_SURVEY", expect_line=883)
    check("FORCE_EVALUATE_MEMORY 存在", M0064, "CLAUDE_CODE_FORCE_EVALUATE_MEMORY", expect_line=881)
    check("无 FORCE_EVALUATE_MEMORY_SURVEY", M0064, "FORCE_EVALUATE_MEMORY_SURVEY", must_not=True)
    check("RAM 变量 MCP_MEMORY_CGROUP", M0064, "CLAUDE_CODE_MCP_MEMORY_CGROUP", expect_line=921)
    check("POST_TURN_MEMORY", M0064, "CLAUDE_CODE_POST_TURN_MEMORY: () =>", expect_line=947)
    check("MEMORY_CONTEXT_NO_WAIT", M0064, "CLAUDE_CODE_MEMORY_CONTEXT_NO_WAIT", expect_line=927)

    # ===== 17. late_memory_context 实现 =====
    check("yxi 定义", M0452, "function yxi(e, n) {", expect_line=3237)
    check("yxi mid-turn 遥测", M0452, "attached_mid_turn: !0", expect_line=3243)

    # ===== 汇总 =====
    fails = [r for r in RESULTS if not r[0]]
    print(f"== 断言核验：{len(RESULTS)} 条，通过 {len(RESULTS)-len(fails)}，失败 {len(fails)} ==\n")
    for ok, label, detail in RESULTS:
        if not ok:
            print(f"[FAIL] {label}\n       {detail}")
    if verbose:
        print("\n-- 全部通过项 --")
        for ok, label, detail in RESULTS:
            if ok:
                print(f"[ ok ] {label}  ({detail})")
    print()
    if fails:
        for ok, label, detail in fails:
            fn = M0832  # 仅用于打印窗口的默认模块名，下面尽量从 detail 解析
            print(f"--- 失败项上下文: {label} ---")
            print(f"    {detail}")
        return 1
    print("全部断言通过。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
