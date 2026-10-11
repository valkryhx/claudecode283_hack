/* ==============================================================================
 * m0132.ai   [m0132_0xc24a4bb.js @ 55415]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 55415
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var ai = {
  event: "prompt.submit",
  checkArgument: (e, t) => typeof e.text === "string" ? Es(e.wait, t.wait) ?? Xo(e.origin, t.origin) ?? or(e.context) : "no { text }",
  measureArgument: (e, t) => Math.max(te(e.text, t.text), gt(e.context, t.context)),
  check: C((e, t, o) => {
    let r = e.drop === void 0,
      n = typeof e.text === "string",
      s = e.drop;
    return r ? n ? Ts(e.origin, t.origin) ?? or(e.context) : "neither { text } nor { drop }" : typeof s === "string" ? ws(s, (o ?? []).map((p) => p.drop)) ?? ls(e.context) : "a drop that is not a string"
  }),
  measure: (e, t, o) => Math.max(te(e.text, t.text, ...o.map((r) => r.text)), gt(e.context, t.context, ...o.map((r) => r.context)))
};
