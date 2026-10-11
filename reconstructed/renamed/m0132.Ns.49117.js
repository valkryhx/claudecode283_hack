/* ==========================================================================
 * m0132.Ns   [m0132_0xc24a4bb.js @ 49117]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ns = {
  event: "config.set",
  restoreArgument: Me(["previous", "provider", "origin"]),
  checkArgument: (e, t) => {
    let o = $n(e.previous) !== $n(t.previous),
      r = $n(e.origin) !== $n(t.origin),
      n = Object.hasOwn(e, "value");
    return xt(e, t) ?? (o ? "a changed previous (pinned)" : void 0) ?? (r ? "a changed origin (the engine sets it)" : void 0) ?? (n ? kNt(e.value) : "no { value }");
  },
  settle: e => e.deny === void 0 ? {
    value: e.value
  } : {
    deny: e.deny
  },
  check: C(e => {
    let t = e.deny,
      r = typeof t === "string" && t.length > NS ? `a deny over ${NS}` : void 0;
    return ct(e, "{ value }", s => Object.hasOwn(s, "value")) ?? r ?? (t === void 0 ? kNt(e.value) : void 0);
  })
};
