/* ==============================================================================
 * m0132.DCe   [m0132_0xc24a4bb.js @ 15770]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 15770
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function DCe(e) {
  let t = async (...o) => {
    try {
      return await e(...o)
    } catch (r) {
      let {
        msg: n,
        name: s,
        stack: i
      } = MCe(r);
      throw Ohe(n, s, i)
    }
  };
  return Object.setPrototypeOf(t, null), t
}
