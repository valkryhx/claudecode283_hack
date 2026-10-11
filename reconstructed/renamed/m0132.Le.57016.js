/* ==========================================================================
 * m0132.Le   [m0132_0xc24a4bb.js @ 57016]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Le(e) {
  switch (typeof e) {
    case "string":
      return [e];
    case "object":
      if (e === null) return [];
      return Array.isArray(e) ? e.flatMap(Le) : Object.entries(e).flatMap(([t, o]) => [t, ...Le(o)]);
    default:
      return [];
  }
}
