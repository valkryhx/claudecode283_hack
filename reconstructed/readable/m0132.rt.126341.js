/* ==============================================================================
 * m0132.rt   [m0132_0xc24a4bb.js @ 126341]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 126341
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function rt(e) {
  let t = new AbortController,
    o = Promise.resolve().then(() => e.return?.(void 0)).then(() => {
      return
    }, () => {
      return
    });
  try {
    await Promise.race([o, Q(Mhe, t.signal, {
      unref: !0
    })])
  } finally {
    t.abort()
  }
}
