/* ==============================================================================
 * m0132.ca   [m0132_0xc24a4bb.js @ 134135]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 134135
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var ca = (e, t, o) => (r, n, {
  run: s,
  floors: i
}) => u1(async function*() {
  let p = performance.now(),
    a = "rejected",
    f, m = 0;
  try {
    return f = yield* Hhe(e(r, n, i), () => {
      m += 1
    }), a = "returned", f
  } finally {
    Ve(s, {
      index: t,
      plugin: Ate,
      tier: "core",
      event: o,
      outcome: a,
      ms: performance.now() - p,
      chunks: m,
      received: r,
      returned: f
    })
  }
});
