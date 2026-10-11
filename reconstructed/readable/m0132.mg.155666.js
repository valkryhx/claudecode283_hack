/* ==============================================================================
 * m0132.mg   [m0132_0xc24a4bb.js @ 155666]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 155666
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var mg = (e, t) => R_({
  list: () => t("config.list", {}),
  set: (o) => {
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
    })
  }
});
