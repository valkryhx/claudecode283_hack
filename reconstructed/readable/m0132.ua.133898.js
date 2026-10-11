/* ==============================================================================
 * m0132.ua   [m0132_0xc24a4bb.js @ 133898]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 133898
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ua(e) {
  let t = [],
    o = [];

  function r() {
    let [n] = o, s = n?.hop;
    if (n !== void 0 && s !== void 0) t.push(ma(s, o));
    o = []
  }
  for (let n of e) {
    if (!(n.hop !== void 0 && n.hop.key === o[0]?.hop?.key)) r();
    if (n.hop === void 0) {
      t.push(n);
      continue
    }
    o.push(n)
  }
  return r(), t
}
