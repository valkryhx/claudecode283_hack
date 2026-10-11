/* ==========================================================================
 * m0862.I   [m0862_0xd11f1fb.js @ 1241]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function I(e, n) {
  let t = d(e, n);
  if (e[t] === ";") return t + 1;
  if (t >= e.length) return n;
  if (!v.test(e.slice(n, t))) return;
  let r = g(e, t);
  if (r === void 0 || r === "in" || r === "instanceof") return;
  return n;
}
