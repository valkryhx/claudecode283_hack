/* ==============================================================================
 * m0132.Hhe   [m0132_0xc24a4bb.js @ 126543]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 126543
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function* Hhe(e, t = () => {}) {
  let o = !1;
  async function r() {
    try {
      return await e.next()
    } catch (n) {
      throw o = !0, n
    }
  }
  try {
    while (!0) {
      let n = await r();
      if (n.done === !0) return o = !0, n.value;
      t(n.value), yield n.value
    }
  } finally {
    if (!o) await e.return?.(void 0)
  }
}
