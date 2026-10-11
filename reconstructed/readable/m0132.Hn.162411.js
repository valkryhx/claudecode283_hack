/* ==============================================================================
 * m0132.Hn   [m0132_0xc24a4bb.js @ 162411]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 162411
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Hn(e, t, o = "store.set") {
  let r;
  try {
    r = JSON.stringify(e)
  } catch (n) {
    throw new De(`${t}: $.${o}: value is not JSON data (${l(n)})`)
  }
  if (typeof r !== "string") throw new De(`${t}: $.${o}: value is not JSON data (${e===void 0?"undefined":`a ${typeof e}`})`);
  if (r.length > Pte) throw new De(`${t}: $.${o}: the value is ${r.length} characters, over the ${Pte} limit`);
  return JSON.parse(r)
}
