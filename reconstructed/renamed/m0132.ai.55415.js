/* ==========================================================================
 * m0132.ai   [m0132_0xc24a4bb.js @ 55415]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ai = {
  event: "prompt.submit",
  checkArgument: (e, t) => typeof e.text === "string" ? Es(e.wait, t.wait) ?? Xo(e.origin, t.origin) ?? or(e.context) : "no { text }",
  measureArgument: (e, t) => Math.max(te(e.text, t.text), gt(e.context, t.context)),
  check: C((e, t, o) => {
    let r = e.drop === void 0,
      n = typeof e.text === "string",
      s = e.drop;
    return r ? n ? Ts(e.origin, t.origin) ?? or(e.context) : "neither { text } nor { drop }" : typeof s === "string" ? ws(s, (o ?? []).map(p => p.drop)) ?? ls(e.context) : "a drop that is not a string";
  }),
  measure: (e, t, o) => Math.max(te(e.text, t.text, ...o.map(r => r.text)), gt(e.context, t.context, ...o.map(r => r.context)))
};
