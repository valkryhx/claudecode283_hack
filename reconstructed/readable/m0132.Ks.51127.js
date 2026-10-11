/* ==============================================================================
 * m0132.Ks   [m0132_0xc24a4bb.js @ 51127]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 51127
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Ks = {
  event: "plugin.register",
  restoreArgument: (e, t) => W(["version"], e, t),
  checkArgument: (e, t) => pe(["name", "tier", "root", "version", "provenance", "uses"], e, t),
  check: C((e) => {
    let {
      allow: t,
      refuse: o
    } = e;
    if (o === void 0) return t === !0 ? void 0 : "neither { allow: true } nor { refuse }";
    if (typeof o !== "string") return "a refuse that is not a string";
    return t === void 0 ? void 0 : "an allow beside { refuse }"
  })
};
