/* ==============================================================================
 * m0132.YIo   [m0132_0xc24a4bb.js @ 175983]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 175983
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function* YIo(e) {
  let t = !1;
  try {
    while (!0) {
      let o = await e.next().catch((r) => {
        throw t = !0, r
      });
      if (o.done === !0) return t = !0, o.value;
      yield o.value
    }
  } finally {
    if (!t) await e.return().catch(() => {
      return
    })
  }
}
