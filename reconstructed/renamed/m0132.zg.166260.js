/* ==========================================================================
 * m0132.zg   [m0132_0xc24a4bb.js @ 166260]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var zg = (e, t) => R_({
  abort: o => {
    let r = G(o) ? o.turnId : void 0;
    return typeof r !== "string" || r === "" ? Promise.reject(new De(`${e}: $.turn.abort takes { turnId } (the id turn.start carried)`)) : t("turn.abort", {
      turnId: r
    });
  }
});
