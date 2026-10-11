/* ==============================================================================
 * m0132.xVn   [m0132_0xc24a4bb.js @ 39903]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 39903
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function xVn(e) {
  let t = [],
    o = [];
  for (let r of e) {
    if (r.type === "AutoMemPinned") {
      o.push(r);
      continue
    }
    if (o.length > 0) t.push(Zo(o)), o = [];
    t.push(`Contents of ${r.path}${xs(r.type)}:

` + r.content.trim())
  }
  if (o.length > 0) t.push(Zo(o));
  return t.join(`

`)
}
