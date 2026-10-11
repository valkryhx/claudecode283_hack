/* ==============================================================================
 * m0132.Fg   [m0132_0xc24a4bb.js @ 163147]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 163147
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Fg(e, t) {
  function o(r, n) {
    let s = G(r) ? r.plugin : void 0,
      i = G(r) ? r.key : void 0,
      p = G(r) ? r.id : void 0;
    if (!(typeof s === "string" && typeof i === "string" && (p === void 0 || typeof p === "string"))) throw new De(`${e}: $.state.${n} takes a reference { plugin, key } (and id for a family's member)`);
    return p === void 0 ? {
      plugin: s,
      key: i
    } : {
      plugin: s,
      key: i,
      id: p
    }
  }
  return R_({
    get: async (r) => t("state.get", o(r, "get")),
    set: async (r, n, s) => t("state.set", {
      ...o(r, "set"),
      value: Hn(n, e, "state.set"),
      ...s?.ifVersion !== void 0 && {
        ifVersion: s.ifVersion
      }
    })
  })
}
