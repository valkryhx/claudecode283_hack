/* ==============================================================================
 * m0132.Ds   [m0132_0xc24a4bb.js @ 50605]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 50605
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ds = {
  event: "ui.close",
  check: K("ui.close").check,
  checkArgument: (e, t) => {
    let o = bdt(e.id);
    if (o !== void 0) return `an unusable id: ${o}`;
    if (e.id !== t.id) return "a changed id (the pane being closed; next(e) passes it on)";
    if (e.origin === void 0) return "no origin (next(e) passes e.origin on; a rewrite spreads it: next({ ...e, id }))";
    return $n(e.origin) !== $n(t.origin) ? dt : void 0
  }
};
