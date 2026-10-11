/* ==========================================================================
 * m0132.rs   [m0132_0xc24a4bb.js @ 26095]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function rs(e, t) {
  let {
      expiredMs: o,
      lingeredMs: r,
      shape: n,
      caught: s
    } = t,
    i = s === void 0 ? "" : `; ${s}`;
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
  };
}
