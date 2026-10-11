/* ==============================================================================
 * m0869.zr   [m0869_0xd12567a.js @ 76819]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 76819
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function zr(e) {
  let r;
  for (let s of Object.keys(e)) {
    let g = Reflect.get(e, s);
    if (typeof g !== "string") continue;
    let f = Fc(g);
    if (f !== g) r ??= {
      ...e
    }, Reflect.set(r, s, f)
  }
  return r ?? e
}
