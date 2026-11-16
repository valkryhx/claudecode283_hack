# -*- coding: utf-8 -*-
"""交叉验证：本地未 push 的《20261112-CC319记忆系统源码调研.md》 vs 拉取下来的
Projects / 压缩 / AskUserQuestion 系列文档，全部以 CC 319 源码为准做裁决。

背景（为什么要写这个脚本）：
  2026-11-16 从 origin/main 拉下来 10 个提交（AskUserQuestion、压缩 UX、Projects
  coordinator 的调研与复刻设计），它们和本地未 push 的记忆系统调研**在同一台机器之外
  独立完成**。两边都用 `m0848` 的「回合末」这个落点，因此构成一组天然交叉验证：
  如果两边对同一个函数的归属、门禁、相位说法不一致，必有一边错。

本文只断言**源码事实**，不评价文档写法。每条断言 = (模块, 精确片段, 期望行号)，
三要素齐全，坐标漂移立即变红（AGENTS.md §8.6）。

用法：
  python docs/probes/20261116-记忆与Projects交叉验证.py
  python docs/probes/20261116-记忆与Projects交叉验证.py --verbose
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEM319 = os.path.join(ROOT, "reconstructed319", "deminified")
DEM303 = os.path.join(ROOT, "reconstructed303", "deminified")
DEM283 = os.path.join(ROOT, "reconstructed", "deminified")

M0848_319 = "m0848_0x124d7ee6.js"   # 回合末：状态卡 + reply gate + 记忆写入触发点
M0046_319 = "m0046_0x1125d504.js"   # 导出 Nr / Ue 等运行模式判定
M1860_319 = "m1860_0x131cc40b.js"   # 导出 _n as isTerminalShutdown
M0591_319 = "m0591_0x11be624e.js"   # attachment 注入表 + 压缩
M0832_319 = "m0832_0x124c3af6.js"   # extractMemories 写入管线
M2159_319 = "m2159_0x138a5541.js"   # runHeadless / drainPendingExtraction
M0094_319 = "m0094_0x112cc57f.js"   # settings schema：disableAllHooks / disableReplyCheck 描述
M0779_319 = "m0779_0x12409ec4.js"   # agent_summary 的 fork 构造点
M0833_319 = "m0833_0x124cce31.js"   # auto-dream：runner / 阈值 / prompt / PXs
M0191_319 = "m0191_0x1155a4cc.js"   # extract/dream 配置 schema 与落地
M0349_319 = "m0349_0x1193beaf.js"   # Anthropic SDK：/v1/dreams 端点

M0671_303 = "m0671_0xf53ce11.js"
M0560_283 = "m0560_0xcd966cc.js"

_cache = {}


def lines_of(path):
    if path not in _cache:
        if not os.path.exists(path):
            _cache[path] = None
        else:
            with open(path, encoding="utf-8", errors="replace") as f:
                _cache[path] = f.read().split("\n")
    return _cache[path]


def which(name):
    """按模块名在 319/303/283 三个目录里定位实际路径。"""
    for base in (DEM319, DEM303, DEM283):
        p = os.path.join(base, name)
        if os.path.exists(p):
            return p
    return os.path.join(DEM319, name)


RESULTS = []


def line_no(path, needle, nth=1):
    ls = lines_of(path)
    if ls is None:
        return None
    n = 0
    for i, line in enumerate(ls, 1):
        if needle in line:
            n += 1
            if n == nth:
                return i
    return None


def check(label, module, needle, nth=1, expect_line=None, tol=0, must_not=False):
    path = which(module)
    no = line_no(path, needle, nth)
    if must_not:
        ok = no is None
        RESULTS.append((ok, label, "%s 不应含 %r，实际行 %s" % (module, needle, no)))
        return ok
    if no is None:
        RESULTS.append((False, label, "%s 未找到 %r" % (module, needle)))
        return False
    if expect_line is None:
        RESULTS.append((True, label, "%s:%d" % (module, no)))
        return True
    ok = abs(no - expect_line) <= tol
    RESULTS.append((ok, label, "期望 %s:%d±%d，实际 %d" % (module, expect_line, tol, no)))
    return ok


def count_of(module, needle):
    ls = lines_of(which(module))
    if ls is None:
        return -1
    return sum(1 for line in ls if needle in line)


def blank(label, note):
    RESULTS.append((None, label, note))


SHO_MODULES = ("claudecode319/modules", "claudecode303/modules", "claudecode283/modules")


def check_settingsoff_assignment():
    """扫三个版本的原始模块 + exe 全文，断言 settingsHooksOff 只被读取、从未被赋值。

    用途：订正第一轮那条过头推断。结论分两层（见文档 §2.3）：

      (a) `settingsHooksOff` 在 283/303 的 exe 全文、319 的明文模块里，
          只以 `.settingsHooksOff` 形式出现；**没有任何一处**把它写成 true。
          => 它在客户端明文侧恒为 falsy。
      (b) CC 自己在 m0094:7432 写明了规则：`disableReplyCheck` 的 schema 描述是
          "It is not a hook, so disableAllHooks does not affect it."
          => `disableAllHooks` 只管 hook；记忆写入不是 hook，因此不受它影响。

    (a)+(b) 合起来：`disableAllHooks` **不会**关掉记忆写入（B 级强推）。
    第一轮写的"A 级未实证"是把"没有赋值点"错推成"必被别处注入"，两跳都无证据。
    """
    import re
    assign_pat = re.compile(
        r'(?:[{,]settingsHooksOff\s*:(?!=)|settingsHooksOff\s*=(?!=)|["\']settingsHooksOff["\']\s*:)')
    hits = []
    scanned = 0
    reads = 0
    for sub in SHO_MODULES:
        base = os.path.join(ROOT, sub)
        if not os.path.isdir(base):
            continue
        for name in sorted(os.listdir(base)):
            if not name.endswith(".js"):
                continue
            scanned += 1
            p = os.path.join(base, name)
            try:
                with open(p, encoding="utf-8", errors="replace") as f:
                    txt = f.read()
            except OSError:
                continue
            reads += txt.count(".settingsHooksOff")
            for m in assign_pat.finditer(txt):
                hits.append("%s/%s@%d" % (sub.split("/")[0], name, m.start()))
    ok = not hits
    RESULTS.append((ok, "A4b settingsHooksOff 在 283/303/319 原始模块里 0 处赋值（只有读取）",
                    "扫描 %d 个模块，%d 处 .settingsHooksOff 读取；命中赋值形态 %d 处 %s"
                    % (scanned, reads, len(hits), hits[:5])))
    return ok


def main():
    # 统一输出编码，避免 GBK 控制台对非 ASCII 符号报错
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    verbose = "--verbose" in sys.argv

    # =====================================================================
    # A. 交叉点本体：记忆写入与状态卡是否落在同一个函数、受同一组门禁
    # =====================================================================
    check("A1 状态卡函数 zd 的入口守卫：只有 main 且非子代理",
          M0848_319, 'if (!e || ls(h) !== "main" || s.agentId || _n() && !s.abortController.signal.aborted) return;',
          expect_line=3724)
    check("A2 记忆写入触发点在 zd 的下一层（Jd）里，不在 zd 内",
          M0848_319, "if (yield* zd(T, G.messages, n, toolUseContext_5, querySource_6), !Nr()) {",
          expect_line=3849)
    check("A3 Jd 入口第一道门禁 = isTerminalShutdown（_n）",
          M0848_319, "if (_n() && !toolUseContext_5.abortController.signal.aborted) return {",
          expect_line=3830)
    check("A4 Jd 入口第二道门禁 = settingsHooksOff 或 querySource=agent_summary",
          M0848_319, 'if (toolUseContext_5.options.settingsHooksOff || querySource_6 === "agent_summary") return {',
          expect_line=3834)
    check_settingsoff_assignment()
    check("A5 记忆写入的真实调用（executeExtractMemories）",
          M0848_319, "let ke = qn.executeExtractMemories(G, toolUseContext_5.appendSystemMessage);",
          expect_line=3852)
    check("A6 记忆同步等待开关 = fet()?.sync 或 isLaptopExtractSync",
          M0848_319, "if (fet()?.sync || qn.isLaptopExtractSync(toolUseContext_5.session.host)) try {",
          expect_line=3853)

    blank("A7 结论：记忆写入在 Jd 里，与状态卡共享 Jd 的入口门禁",
          "本地记忆文档把写入描述为『post-turn 后台任务、不是 hook』——"
          "『不是 hook』成立（executeExtractMemories 自身不经 hook 派发），"
          "但它所在函数 Jd 会因 hooks 全关而整体返回，这一层文档未记录")
    # =====================================================================
    # B. 符号身份：Jd 到底是不是 stop hook 执行器
    # =====================================================================
    check("B1 Jd 内的 hook 执行器调用相位 = blockable_turn_end",
          M0848_319, '"blockable_turn_end"),', expect_line=4096)
    check("B2 另一相位 turn_end_reactions 在 po() 里",
          M0848_319, '"turn_end_reactions");', expect_line=4435)
    check("B3 第三相位 loop_tick 在 Pi() 里",
          M0848_319, '"loop_tick"),', expect_line=3672)
    check('B4 Jd 内的注册表读取明确写 "Stop"',
          M0848_319, 'toolUseContext_5.sessionHooksRegistry.get(z(), "Stop").get("Stop")', expect_line=4094)
    check("B5 Pi 路径下没有 executeExtractMemories（记忆写入不在这条路径）",
          M0848_319, "executeExtractMemories", nth=1, expect_line=3852)

    blank("B6 结论：Jd 是 Stop hook 的执行器（blockable_turn_end 相位）",
          "记忆写入点在其内部 -> 文档中『记忆写入发生在轮末』正确，"
          "但把它归为『hook 之外的另一条管线』在调用链层面不准确")

    # =====================================================================
    # C. 运行模式门禁的真实语义（本地文档完全未覆盖）
    # =====================================================================
    check("C1 _n 的真实导出名 = isTerminalShutdown",
          M1860_319, "export { jd as heldUntilExit, _n as isTerminalShutdown, Sie as latchTerminalShutdown };",
          expect_line=6)
    check("C2 Nr 定义行",
          M0046_319, "function Nr() {", expect_line=134)
    check("C3 Nr 的语义 = CLAUDE_CODE_SIMPLE 或 --bare",
          M0046_319, 'return Pe(process.env.CLAUDE_CODE_SIMPLE) || i("--bare");',
          expect_line=135)
    check("C4 bare 模式下整段（含记忆写入）被跳过",
          M0848_319, ", !Nr()) {", expect_line=3849)

    blank("C5 结论：--bare / CLAUDE_CODE_SIMPLE 下记忆写入不执行",
          "文档未记录这条门禁；它比 CLAUDE_CODE_POST_TURN_MEMORY 更早生效")

    # =====================================================================
    # C'. disableAllHooks 的管辖范围（用户质疑点是正确的）
    # =====================================================================
    check("C6 CC 自述规则：不是 hook 的东西不受 disableAllHooks 影响",
          M0094_319, "It is not a hook, so disableAllHooks does not affect it.", expect_line=7432)
    check("C7 agent_summary 是真实存在的 querySource（会真的触发 Jd 早退）",
          M0779_319, 'querySource: "agent_summary",', expect_line=6364)
    check("C8 agent_summary 的另一处构造（subAgent 摘要）",
          M0779_319, 'querySource: "agent_summary",', nth=2, expect_line=6394)

    blank("C9 结论：Jd:3834 的 A || B 里，实际生效的只有 agent_summary 一支",
          "A = settingsHooksOff -> 全仓 0 处赋值 => 恒 falsy；"
          "B = agent_summary -> 真实构造、会触发。"
          "=> 319 在这行的实质变化是把「恒不成立的条件」换成「真会成立的条件」，"
          "而 disableAllHooks 与记忆写入无关（CC 自己的规则 C6）")

    # =====================================================================
    # D. 跨版本一致性：283 / 303 / 319 三版是否同构
    # =====================================================================
    check("D1 283：同名函数入口有 settingsHooksOff 门禁（但无 agent_summary）",
          M0560_283, "if (toolUseContext_5.options.settingsHooksOff) return {",
          expect_line=2245)
    check("D2 283：记忆写入调用点",
          M0560_283, "let pe = Wo.executeExtractMemories(P, toolUseContext_5.appendSystemMessage);",
          expect_line=2263)
    check("D3 303：同名函数入口门禁（也无 agent_summary）",
          M0671_303, "if (toolUseContext_5.options.settingsHooksOff) return {",
          expect_line=3172)
    check("D4 303：记忆写入调用点",
          M0671_303, "let ee = kn.executeExtractMemories(D, toolUseContext_5.appendSystemMessage);",
          expect_line=3190)
    check("D5 319 新增：agent_summary 也被并入同一道门禁",
          M0848_319, '"agent_summary") return {', expect_line=3834)

    blank("D6 结论：三版同构，319 只是把 agent_summary 并入同一行",
          "-> 这条机制不是 319 新增；记忆文档的跨版本裁量应据此修订")

    # =====================================================================
    # E. 拉取文档侧的坐标复算（它们与本地文档共用 m0848）
    # =====================================================================
    check("E1 拉取文档称『触发：每个 turn 结束，m0848:3732 起 postTurnSummary』",
          M0848_319, 'if (E.has("summary")) yield {', expect_line=3732)
    check("E2 拉取文档称 m0848:3743 是迟到丢弃日志",
          M0848_319, "[classifier] dropped a late end-of-turn summary", expect_line=3743)
    check("E3 拉取文档称 m0848:3762 setAppState 回写状态卡",
          M0848_319, "s.setAppState(Te => Te.postTurnSummary?.status_category", expect_line=3762)
    check("E4 拉取文档称 m0848:3767 emit subtype post_turn_summary",
          M0848_319, 'subtype: "post_turn_summary",', expect_line=3767)
    check("E5 拉取文档称 reply gate 在 m0848:3888-3945",
          M0848_319, "let toolNames = Get(toolUseContext_5.options.tools),", expect_line=3888)
    check("E6 拉取设计文档的核心订正：状态卡不走 hook 而是轮末路径（zd 只认 main）",
          M0848_319, 'ls(h) !== "main"', expect_line=3724)

    blank("E7 结论：拉取文档的 m0848 坐标全部复算命中",
          "且其『状态卡不走 Stop hook』的结论与源码一致（zd 是独立函数，由 Jd 顺序调用）")

    # =====================================================================
    # F. 拉取文档中压缩主题与本地记忆文档的交集
    # =====================================================================
    check("F1 压缩中止信号贯穿：m0591 里 abortController.signal 参与压缩判定",
          M0591_319, "abortController.signal", nth=1)
    check("F2 拉取文档称『CC 没有百分比进度条』——源码里 compact_progress 只有类型字段",
          M0591_319, 'type: "compact_progress",', nth=1)
    check("F3 记忆读侧注入表 151783 与压缩无共用名字（nested_memory 只在注入表出现）",
          M0591_319, 'dc("nested_memory"', nth=1, expect_line=151746)

    blank("F4 结论：压缩与记忆两套调研在源码上不重叠",
          "唯一的交集是 m0591 同一模块，但函数/注入项完全不同")

    # =====================================================================
    # G. 否定断言：每次重跑（AGENTS.md §8.6 规则 4）
    # =====================================================================
    check("G1 m0832 全文不含 hook 派发（只有拒绝语义）",
          M0832_319, "hookAskFloor", expect_line=623)
    check("G2 m0832 不含 sessionHooksRegistry（记忆写入不经 hook 注册表）",
          M0832_319, "sessionHooksRegistry", must_not=True)
    check("G3 m0848 中 executeExtractMemories 只有 1 处",
          M0848_319, "executeExtractMemories", nth=2, must_not=True)
    check("G4 zd 函数体内不含 executeExtractMemories（写入在 Jd 而非 zd）",
          M0848_319, "zd(e, n, r, s, h) {", expect_line=3723)

    blank("G5 结论：记忆写入既不经 hook 注册表，也不在状态卡函数内",
          "但它和状态卡同处 Jd，共享 Jd 的入口门禁")

    # =====================================================================
    # H. attachment producer 的性质：固定流程，不是 agent 动作
    # =====================================================================
    check("H1 producer 汇总函数 izr 的入口",
          M0591_319, "async function izr(e, n, r, s, h, y, S) {", expect_line=151694)
    check("H2 inputMentionsOnly 时整个 producer 数组被跳过（唯一的输入形态分支）",
          M0591_319, "if (S?.inputMentionsOnly) return [];", expect_line=151716)
    check("H3 所有 producer 并发汇集，说明每轮全部求值",
          M0591_319, "let [Jt, fn] = await Promise.all([Promise.all(Ut), Promise.all(sn)]);",
          expect_line=151791)
    check("H4 dc 内部立即 await n()（不是惰性求值）",
          M0591_319, "let S = await n(),", expect_line=151815)
    check("H5 tDe 是 async generator，yield 出附件消息",
          M0591_319, "async function* tDe(e, n, r, s, h, y, S, w) {", expect_line=154221)
    check("H6 主循环 for await 消费 tDe（固定流程的直接证据）",
          M0848_319, "for await (let et of tDe(", expect_line=10518)

    blank("H7 结论：producer 是每轮无条件跑一遍的同步管道",
          "模型不能决定'这轮要不要加载记忆'；唯一能左右的是显式读文件"
          "（nested_memory 由文件读取事件触发）")

    # =====================================================================
    # I. auto-dream：第三类后台任务（既非 hook，也非 attachment）
    # =====================================================================
    check("I1 dream 的开关判定 xEt",
          M0833_319, "function xEt() {", expect_line=34)
    check("I2 dream 四道前置否决 he()",
          M0833_319, "function he() {", expect_line=187)
    check("I3 默认阈值 minHours=24", M0833_319, "minHours: 24,", expect_line=177)
    check("I4 默认阈值 minSessions=5", M0833_319, "minSessions: 5", expect_line=178)
    check("I5 扫描节流 10 分钟", M0833_319, "ce = 600000,", expect_line=174)
    check("I6 runner 注册函数 xXs", M0833_319, "function xXs(e) {", expect_line=197)
    check("I7 runner 注册点", "m0998_0x126dc423.js", "xXs(e)", expect_line=457)
    check("I8 派发入口 PXs 只是转调 registry runner",
          M0833_319, "async function PXs(e, r) {", expect_line=408)
    check("I9 PXs 在 Jd 内被调用（与记忆写入同一个函数）",
          M0848_319, "if (!toolUseContext_5.agentId) PXs(G, toolUseContext_5.appendSystemMessage);",
          expect_line=3859)
    check("I10 dream 的 fork 标记", M0833_319, 'fork: "dream",', expect_line=319)
    check("I11 dream 的 querySource / forkLabel",
          M0833_319, 'querySource: "auto_dream",', expect_line=322)
    check("I12 dream prompt 四阶段标题",
          M0833_319, "# Dream: Memory Consolidation", expect_line=55)
    check("I13 dream 的 index 约束写明 ~25KB / 150 字符",
          M0833_319, "under ~25KB", expect_line=96)
    check("I14 extract 与 dream 共用 NGr，只是 fork 值不同",
          M0832_319, 'fork: "extraction"', expect_line=1161)
    check("I15 dream 走 Anthropic 官方 /v1/dreams 端点",
          M0349_319, '"/v1/dreams?beta=true"', expect_line=1805)
    check("I16 客户端聚合对象上注册 dreams",
          M0349_319, "this.dreams = new Lr(this._client)", expect_line=6655)
    check("I17 ge() 恒 false（强制旁路是死代码）",
          M0833_319, "function ge() {", expect_line=194)
    check("I18 m0833 不含 sessionHooksRegistry（dream 不是 hook）",
          M0833_319, "sessionHooksRegistry", must_not=True)

    blank("I19 结论：auto-dream 是第三类后台任务",
          "读=attachment producer / 写=extractMemories fork / 巩固=dream fork。"
          "三者共用 NGr 权限门禁与记忆目录，但没有一条经 hook 派发")

    # =====================================================================
    # J. MEMORY.md 的两条注入通道（§7.2 运行时实证对应的源码）
    # =====================================================================
    check("J1 五档作用域含 AutoMem（instructions 附件里的 type=AutoMem 就来自这里）",
          M0591_319, 'var Nme = ["User", "Project", "Local", "Managed", "AutoMem"];',
          expect_line=10928)
    check("J2 AutoMemPinned 是 AutoMem 的旧别名映射",
          M0591_319, 'T("AutoMemPinned").transform(() => "AutoMem")', expect_line=10931)
    check("J3 MEMORY.md 被排除出 nested_memory 自动注入",
          M0591_319, 'let n = new Set(["MEMORY.md"]),', expect_line=68617)
    check("J4 nested_memory producer 的触发参数是 session 的 readFor（读过才注入）",
          M0591_319, 'dc("nested_memory", () => E0n(GTe.peek(n.session)?.readFor ? n : Fe, h))',
          expect_line=151783)

    blank("J5 结论：MEMORY.md「被排除」≠「不出现」",
          "它不进 nested_memory（J3），但以 AutoMem 档进 instructions 附件（J1）——"
          "两条互斥的 producer，运行时实测见文档 §7.2")

    # =====================================================================
    # K. §8 读机制：双通道 + 延迟档 + 预算
    # =====================================================================
    check("K1 记忆正文必须是 .md 且不在排除集（U3e）",
          M0591_319, "function U3e(e, n, r) {", expect_line=68651)
    check("K2 nested_memory 的 producer 入口（无触发即返回空）",
          M0591_319, "async function E0n(e, n) {", expect_line=153809)
    check("K3 producer 内消费后清空触发队列",
          M0591_319, "return r.length = 0, S", expect_line=153833)
    check("K4 CLAUDE_CODE_DISABLE_CLAUDE_MDS 是读侧总开关",
          M0591_319, "if (i.CLAUDE_CODE_DISABLE_CLAUDE_MDS) {", expect_line=153819)
    check("K5 单轮注入正文候选上限 = 5（不是 200）",
          M0591_319, ".slice(0, 5)", expect_line=153870)
    check("K6 withheld 记账上限 = nD（两处命中 .slice(0, nD)，这里是第 2 处）",
          M0591_319, ".slice(0, nD)", nth=2, expect_line=153193)
    check("K7 扣留条目打包成 withheld_memory",
          M0591_319, 'type: "withheld_memory",', expect_line=153154)
    check("K8 扣留按 session token 记账",
          M0591_319, "by: BT.of(e).token", expect_line=153159)
    check("K9 relevance 检索是独立通道",
          M0591_319, 'type: "relevant_memories",', expect_line=153873)
    check("K10 延迟档在 afterToolStep + NO_WAIT 时启用",
          M0591_319, "late_memory_context", expect_line=151789)

    blank("K11 结论：读有三条通道 + 一条 relevance 旁路",
          "索引走 instructions/AutoMem、正文走 nested_memory（读到才注入，每轮≤5 条）、"
          "NO_WAIT 时走 late_memory_context、另有 relevant_memories")

    # =====================================================================
    # L. §9 写机制：5 道闸 / prose 闸 / first_look / 成本
    # =====================================================================
    check("L1 写触发在 Jd 内受 !Nr() 环境闸",
          M0848_319, "!Nr()", expect_line=3849)
    check("L2 写触发要求 !agentId 且后端 active",
          M0848_319, "isLaptopExtractActive", expect_line=3851)
    check("L3 sync 时才 await（否则 fire-and-forget）",
          M0848_319, "fet()?.sync", expect_line=3853)
    check("L4 直写闸 Nt（本窗口已写过则跳过）",
          M0832_319, "Nt(messages_2", expect_line=938)
    check("L5 频率闸 every_n_turns 的兜底值 1 只在本轮无配置时生效",
          M0832_319, "every_n_turns", expect_line=959)
    check("L6 schema 里 every_n_turns 默认 5（这才是配置下发后的真实默认）",
          M0191_319, "every_n_turns: Xc().min(1).max(100).default(5)", expect_line=2370)
    check("L7 SYNC 模式强制 everyNTurns=1",
          M0191_319, "everyNTurns: s ? 1 : r.data.every_n_turns", expect_line=2417)
    check("L8 prose 闸不通过则 return",
          M0832_319, "if (!ur) {", expect_line=950)
    check("L9 prose_gate 默认 legacy、min_prose_words 默认 3",
          M0191_319, 'prose_gate: B(["legacy", "chat"]).catch("legacy")', expect_line=2374)
    check("L10 CJK 一字算两词（Et = 2）",
          M0832_319, "Et = 2", expect_line=127)
    check("L11 prose 判定只算人的正文（跳过 isMeta/纯 tool_result）",
          M0832_319, "function ce(e) {", expect_line=253)
    check("L12 first_look 默认 off（成本闸默认不开）",
          M0832_319, 'config_2.firstLook === void 0 ? "off"', expect_line=1015)
    check("L13 first_look 是一次独立的模型调用",
          M0832_319, 'querySource: "extract_memories_first_look"', expect_line=461)
    check("L14 first_look 输出被 schema 锁成一个布尔",
          M0832_319, "output_format", expect_line=444)
    check("L15 max_turns 默认 4（限制子代理工具轮数）",
          M0191_319, "max_turns: Xc().min(1).max(8).default(4)", expect_line=2371)
    check("L16 写完后刷新主对话读缓存（K8n）",
          M0832_319, "async function K8n(", expect_line=56)

    blank("L17 结论：写不是每轮都发生",
          "轮末触发，但要过 5 道闸；prose 闸把纯工具轮次挡在外面。"
          "默认配置下 every_n_turns=5 + CJK 加权 prose 判定 => 实际写入频率远低于每轮")

    # =====================================================================
    # M. 第三轮自审订正：读/写机制里被上一版写错或写浅的地方
    # =====================================================================
    # M1: .slice(0,5) 属于 Uzr（relevant_memories），不是 nested_memory 的上限
    check("M1 .slice(0,5) 在 Uzr 内，产出 relevant_memories（不是 nested_memory 上限）",
          M0591_319, 'type: "relevant_memories",', expect_line=153873)
    check("M2 nested_memory 的 _0n 内部无条数 slice",
          M0591_319, "async function _0n(e, n, r, s, h = null, y = !1) {", expect_line=153040)
    # M3: nD 的导出名是 KEPT_MOST；SHOWN_MOST 是另一个常量
    check("M3 nD 的导出名 KEPT_MOST（扣留保留上限）",
          M0591_319, "KEPT_MOST: () => nD,", expect_line=7077)
    check("M4 SHOWN_MOST 是独立常量（展示条数，与 KEPT_MOST 不同）",
          M0591_319, "SHOWN_MOST: () => pTe,", expect_line=7080)
    check("M5 pTe = 20（展示条数）", M0591_319, "var pTe = 20;", expect_line=69194)
    check("M6 aXo = 200（扫描文件数上限，与 nD 同值但不同常量）",
          M0591_319, "var aXo = 200,", expect_line=68606)
    # M7: 默认 legacy 模式无 CJK 加权
    check("M7 legacy 模式的 Rt 用纯空格分词 Pe（无 CJK 加权）",
          M0832_319, "var vt = 3;", expect_line=218)
    check("M8 Pe 是 split(/\\s+/) 纯空格分词",
          M0832_319, "function Pe(e) {", expect_line=131)
    check("M9 CJK 加权只存在于 chat 模式的 bt",
          M0832_319, "function bt(e, r) {", expect_line=137)
    check("M10 prose 两模式分流：chat 走 Dt、否则走 $t",
          M0832_319, 'ur = Fe ? Dt(messages_2, config_2.minProseWords, st) : $t(messages_2, sinceUuid_2)',
          expect_line=948)
    # M11: MEMORY.md 排除有两套分支
    check("M11 U3e 的三目：有 promptIndex 走集合、否则只按文件名排除",
          M0591_319, 'oXo(e) !== "MEMORY.md")', expect_line=68652)
    # M12: V$t 有旗标旁路
    check("M12 V$t 在 fet() 为 null 时仍有旗标旁路",
          M0191_319, 'if (!v("tengu_passport_quail", !1)) return !1;', expect_line=2593)
    # M13: 真实闸门数量
    check("M13 权限闸（第 6 道）", M0832_319, "if (Ue !== void 0) {", expect_line=977)
    check("M14 竞态闸·新轮次已开始（第 7 道）", M0832_319, "if (V5() !== promptIndex_2) {", expect_line=997)
    check("M15 竞态闸·工具被 hold（第 8 道）", M0832_319, "if (o8e(toolPermissionContext_3)) {", expect_line=1001)
    check("M16 超额闸 when_overage=skip（第 9 道）", M0832_319, 'if (_e === "skip") {', expect_line=1005)

    blank("M17 结论：上一版有三处写错/写浅，本节订正",
          "(a) .slice(0,5) 是 relevant_memories 候选上限，不是 nested_memory；"
          "(b) CJK 加权只在 chat 模式，默认 legacy 用纯空格分词 => 中文几乎过不了 prose 闸；"
          "(c) 闸门是 9 道不是 5 道；另补 KEPT_MOST vs SHOWN_MOST、V$t 旗标旁路、U3e 两套排除分支")

    # =====================================================================
    # N. 第五轮：两条通道的去重方向 + slice(0,5) 是否可配置 + 召回总开关
    # =====================================================================
    check("N1 azr 只拿 nested_memory 的 path 去压 withheld（不看 relevant_memories）",
          M0591_319, 'r.type === "nested_memory" ? [r.path] : []', expect_line=151796)
    check("N2 _0n 的去重只看 readFileState",
          M0591_319, "if (n.readFileState.has(G.path)) continue;", expect_line=153045)
    check("N3 Uzr 的过滤链含 readFileState 与历史 relevant paths",
          M0591_319, "!THn(s, ot.path, Y)", expect_line=153870)
    check("N4 THn 判据 = readFileState.has 且 offset 未定义",
          M0591_319, "return e.has(n) && (!r || e.get(n)?.offset === void 0)", expect_line=153837)
    check("N5 jzr 收集历史 relevant_memories 的 path",
          M0591_319, 'if (s.attachment.type === "relevant_memories")', expect_line=153883)
    check("N6 记忆召回入口 Ivi",
          M0591_319, "function Ivi(e, n, r, s) {", expect_line=153923)
    check("N7 memorySelector 恒由 Gge() 构造（不是开关）",
          M0591_319, "function Gge() {", expect_line=85557)
    check("N8 召回的真正门禁 = fh() && lSe()",
          M0591_319, "let y = fh() && lSe(),", expect_line=153926)
    check("N9 召回还要求当前输入含空白（/\\s/ 测试）",
          M0591_319, "if (!N || !/\\s/.test(N.trim())) return;", expect_line=153932)

    blank("N10 结论：去重是单向的 + 召回有两个语言相关的硬条件",
          "(a) relevant_memories 借 readFileState 间接避开 nested_memory，"
          "但反向不去重 => 存在重复窗口，代码层无保证；"
          "(b) .slice(0,5) 是硬编码（Uzr 体内 0 处配置读取），不可配；"
          "(c) 召回要求输入含空白，中文整句不带空格则连召回都不触发——与 prose 闸同一类问题")

    # =====================================================================
    # 输出
    # =====================================================================
    passed = [r for r in RESULTS if r[0] is True]
    failed = [r for r in RESULTS if r[0] is False]
    notes = [r for r in RESULTS if r[0] is None]

    for ok, label, detail in RESULTS:
        if ok is None:
            print("\n=== %s" % label)
            print("    %s" % detail)
            continue
        tag = "PASS" if ok else "FAIL"
        print("[%s] %s" % (tag, label))
        if verbose or not ok:
            print("        %s" % detail)

    print("\n== 汇总：%d 断言通过 %d，失败 %d；另有 %d 条结论说明 ==" %
          (len(passed) + len(failed), len(passed), len(failed), len(notes)))
    if failed:
        print("\n失败项：")
        for _, label, detail in failed:
            print("  - %s\n      %s" % (label, detail))
        return 1
    print("全部断言通过。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
