/* ==============================================================================
 * m0132.rs   [m0132_0xc24a4bb.js @ 26095]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 26095
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function rs(e, t) {
  let {
    expiredMs: o,
    lingeredMs: r,
    shape: n,
    caught: s
  } = t, i = s === void 0 ? "" : `; ${s}`;
  if (o !== void 0) return {
    kind: "budget",
    why: `ran past its ${Bt(o)} budget${i}`
  };
  if (r !== void 0) return {
    kind: "lingered",
    why: `did not stop within ${Bt(r)} of the turn being interrupted`
  };
  return n !== void 0 ? {
    kind: "shape",
    why: `returned the wrong shape (${ut(n)})`
  } : {
    kind: "threw",
    why: `threw ${Kt(e)}${i}`
  }
}
