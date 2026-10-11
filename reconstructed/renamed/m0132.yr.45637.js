/* ==========================================================================
 * m0132.yr   [m0132_0xc24a4bb.js @ 45637]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function yr(e) {
  let {
    permissionDecision: t
  } = e;
  return t === void 0 || t === "allow" || t === "deny" || t === "ask" ? dr(e.decision) : "a permissionDecision that is not allow, deny or ask";
}
