/* ==============================================================================
 * m0132.ba   [m0132_0xc24a4bb.js @ 150218]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 150218
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ba(e, t, o) {
  if (typeof o !== "object" || !o) throw new De(`${e}: $.${t} must be an object of methods, not ${typeof o}`);
  let r = [];
  for (let [n, s] of Object.entries(o)) {
    if (typeof s !== "function") throw new De(`${e}: $.${t}.${n} is not a function; an interface is an object of methods (a value another plugin can call)`);
    r.push(n)
  }
  return r
}
