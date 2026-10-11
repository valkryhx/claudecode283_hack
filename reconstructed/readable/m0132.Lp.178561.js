/* ==============================================================================
 * m0132.Lp   [m0132_0xc24a4bb.js @ 178561]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 178561
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Lp = (e, t = () => e?.environmentId ?? 0) => (o) => {
  if (!e) return o();
  let {
    view: r,
    environmentId: n
  } = e, s = Atomics.load(r, EVn);
  Atomics.store(r, EVn, n), Atomics.store(r, _dt, t());
  try {
    return o()
  } finally {
    Atomics.store(r, EVn, s), Atomics.store(r, _dt, s === 0 ? t() : s)
  }
};
