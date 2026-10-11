/* ==========================================================================
 * m0132.Ng   [m0132_0xc24a4bb.js @ 162191]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ng = (e, t) => R_({
  read: o => {
    let r = G(o) ? o.source : void 0;
    return o !== void 0 && !G(o) ? Promise.reject(new De(`${e}: $.settings.read takes { source } or nothing`)) : t("settings.read", r !== void 0 ? {
      source: r
    } : {});
  }
});
