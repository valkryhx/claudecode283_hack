/* ==============================================================================
 * m0132.gf   [m0132_0xc24a4bb.js @ 21557]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 21557
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var gf = ({
  bottom: e,
  index: t,
  event: o
}) => async (r, n, {
  run: s,
  floors: i
}) => {
  let p = performance.now(),
    a = "rejected",
    f;
  try {
    return f = await e(r, n, i), a = "returned", f
  } finally {
    Ve(s, {
      index: t,
      plugin: Ate,
      tier: "core",
      event: o,
      outcome: a,
      ms: performance.now() - p,
      received: r,
      returned: f
    })
  }
};
