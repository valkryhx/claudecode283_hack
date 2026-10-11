/* ==========================================================================
 * m0132.Lg   [m0132_0xc24a4bb.js @ 162790]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Lg(e, t) {
  function o(r, n) {
    if (typeof r !== "string" || r === "") throw new De(`${e}: $.store.${n} takes a non-empty string key`);
    return r;
  }
  return R_({
    get: async r => t("store.get", {
      key: o(r, "get")
    }),
    set: async (r, n) => {
      await t("store.set", {
        value: Hn(n, e),
        key: o(r, "set")
      });
    },
    delete: async r => {
      await t("store.delete", {
        key: o(r, "delete")
      });
    },
    keys: () => t("store.keys", {})
  });
}
