/* ==============================================================================
 * m0132.eOo   [m0132_0xc24a4bb.js @ 183597]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 183597
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function eOo(e, t, o) {
  if (!e) return o();
  let r = e.length - yNt,
    n = Array.from({
      length: r
    }, (s, i) => Atomics.load(e, yNt + i));
  for (let s = 0; s < r; s++) Atomics.store(e, yNt + s, t[s] ?? 0);
  try {
    return o()
  } finally {
    for (let [s, i] of n.entries()) Atomics.store(e, yNt + s, i)
  }
}
