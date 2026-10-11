/* ==========================================================================
 * m0132.Qi   [m0132_0xc24a4bb.js @ 119749]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Qi = () => ({
  pendingDownstream: 0,
  settled: !1,
  inFlight: void 0,
  fromBelow: [],
  belowRejected: void 0,
  beneathMs: 0,
  beneathSince: 0
});
