/* ==========================================================================
 * m0132.mg   [m0132_0xc24a4bb.js @ 155666]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var mg = (e, t) => R_({
  list: () => t("config.list", {}),
  set: o => {
    let {
      key: r,
      value: n
    } = G(o) ? {
      key: o.key,
      value: o.value
    } : {
      key: void 0,
      value: void 0
    };
    return typeof r !== "string" || r === "" || kNt(n) !== void 0 ? Promise.reject(new De(`${e}: $.config.set takes { key, value } (the key as $.config.list names it; the value a boolean, a string, a number or a list of strings)`)) : t("config.set", {
      key: r,
      value: n
    });
  }
});
