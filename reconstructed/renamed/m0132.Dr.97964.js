/* ==========================================================================
 * m0132.Dr   [m0132_0xc24a4bb.js @ 97964]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Dr(e, t) {
  for (let r of ["surface", "component", "requestId", "element", "module"]) if (e[r] !== t[r]) return `{ ${r} } rewritten; only data may change`;
  if (!("data" in e) || e.data === void 0) return "no { data }";
  let o = TNt(e.data);
  return o === void 0 ? void 0 : `data ${o}`;
}
