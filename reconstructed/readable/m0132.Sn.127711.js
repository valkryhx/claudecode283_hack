/* ==============================================================================
 * m0132.Sn   [m0132_0xc24a4bb.js @ 127711]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 127711
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Sn(e) {
  let t = 0,
    o = 0,
    r = 0;
  e.pause();

  function n() {
    if (t++ === 0) o = performance.now(), e.resume()
  }

  function s() {
    if (--t === 0) r += performance.now() - o, e.pause()
  }
  return {
    async own(i) {
      n();
      try {
        return await mt.run(e, i)
      } finally {
        s()
      }
    },
    async away(i) {
      if (!(t > 0)) return i();
      s();
      try {
        return await i()
      } finally {
        n()
      }
    },
    ms: () => t > 0 ? r + (performance.now() - o) : r
  }
}
