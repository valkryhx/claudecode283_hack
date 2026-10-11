/* ==============================================================================
 * m0132.Lg   [m0132_0xc24a4bb.js @ 162790]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 162790
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Lg(e, t) {
  function o(r, n) {
    if (typeof r !== "string" || r === "") throw new De(`${e}: $.store.${n} takes a non-empty string key`);
    return r
  }
  return R_({
    get: async (r) => t("store.get", {
      key: o(r, "get")
    }),
    set: async (r, n) => {
      await t("store.set", {
        value: Hn(n, e),
        key: o(r, "set")
      })
    },
    delete: async (r) => {
      await t("store.delete", {
        key: o(r, "delete")
      })
    },
    keys: () => t("store.keys", {})
  })
}
