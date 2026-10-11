/* ==========================================================================
 * m0132.Ja   [m0132_0xc24a4bb.js @ 160423]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ja(e) {
  return G(e) && Object.hasOwn(e, "sessionId") !== Object.hasOwn(e, "agentId") ? e.sessionId ?? e.agentId : void 0;
}
