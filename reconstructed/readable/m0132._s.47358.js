/* ==============================================================================
 * m0132._s   [m0132_0xc24a4bb.js @ 47358]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 47358
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var _s = {
  event: "command.run",
  restoreArgument: Me(["presentation"]),
  checkArgument: (e, t) => {
    if (e.command !== t.command) return "a changed command (the engine runs the one it resolved)";
    if ($n(e.presentation) !== $n(t.presentation)) return "a changed presentation (pinned: where the answer shows is a fact)";
    return typeof e.args === "string" ? Xo(e.origin, t.origin) : "no { args } (a string)"
  },
  measureArgument: (e, t) => te(e.args, t.args),
  settle: (e) => ({
    text: e.text,
    ...e.context !== void 0 && {
      context: iD(e.context) ?? Wo
    },
    ref: e.ref
  }),
  restoreResult: hr,
  check: C((e, t, o) => {
    let {
      text: r,
      context: n,
      ref: s
    } = e;
    if (s !== void 0 && typeof s !== "number") return "a ref that is not the one next(e) gave";
    return r !== void 0 && typeof r !== "string" ? "a text that is not a string" : cs(n, s, o ?? [])
  }),
  measure: (e, t, o) => Math.max(te(e.text, ...o.map((r) => r.text)), gt(e.context, ...o.map((r) => r.context)))
};
