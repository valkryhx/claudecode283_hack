/* ==========================================================================
 * m0227.ee   [m0227_0xc482590.js @ 18596]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ee(e, n) {
  return e.some(r => {
    switch (r) {
      case "null":
        return n === null;
      case "boolean":
        return typeof n === "boolean";
      case "string":
        return typeof n === "string";
      case "number":
        return typeof n === "number" && Number.isFinite(n);
      case "integer":
        return typeof n === "number" && Number.isInteger(n);
      case "array":
        return Array.isArray(n);
      case "object":
        return G(n);
      default:
        return !0;
    }
  });
}
