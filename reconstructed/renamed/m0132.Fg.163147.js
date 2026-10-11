/* ==========================================================================
 * m0132.Fg   [m0132_0xc24a4bb.js @ 163147]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    };
  }
  return R_({
    get: async r => t("state.get", o(r, "get")),
    set: async (r, n, s) => t("state.set", {
      ...o(r, "set"),
      value: Hn(n, e, "state.set"),
      ...(s?.ifVersion !== void 0 && {
        ifVersion: s.ifVersion
      })
    })
  });
}
