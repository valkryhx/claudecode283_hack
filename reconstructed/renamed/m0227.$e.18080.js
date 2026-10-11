/* ==========================================================================
 * m0227.$e   [m0227_0xc482590.js @ 18080]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function $e(e) {
  let n = S(e, "type"),
    r;
  if (typeof n === "string" && Q.has(n)) r = [n];else if (Array.isArray(n) && n.length > 0 && n.every(s => typeof s === "string" && Q.has(s))) r = n.slice();else return;
  if (S(e, "nullable") === !0 && !r.includes("null")) r.push("null");
  return r;
}
