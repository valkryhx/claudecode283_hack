/* ==========================================================================
 * m0025.g   [m0025_0xbf5baa8.js @ 11262]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function g(e, {
  suffix: r = "nodejs"
} = {}) {
  if (typeof e !== "string") throw TypeError(`Expected a string, got ${typeof e}`);
  if (r) e += `-${r}`;
  if (l.platform === "darwin") return x(e);
  if (l.platform === "win32") return M(e);
  return N(e);
}
