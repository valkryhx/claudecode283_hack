/* ==========================================================================
 * m0132.Ks   [m0132_0xc24a4bb.js @ 51127]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ks = {
  event: "plugin.register",
  restoreArgument: (e, t) => W(["version"], e, t),
  checkArgument: (e, t) => pe(["name", "tier", "root", "version", "provenance", "uses"], e, t),
  check: C(e => {
    let {
      allow: t,
      refuse: o
    } = e;
    if (o === void 0) return t === !0 ? void 0 : "neither { allow: true } nor { refuse }";
    if (typeof o !== "string") return "a refuse that is not a string";
    return t === void 0 ? void 0 : "an allow beside { refuse }";
  })
};
