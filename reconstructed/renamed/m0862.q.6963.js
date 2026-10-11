/* ==========================================================================
 * m0862.q   [m0862_0xd11f1fb.js @ 6963]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function q(e) {
  let n;
  if (e.key.type === "Identifier") n = e.key.name;else if (e.key.type === "Literal") n = String(e.key.value);else throw Error(`unsupported key type in meta: ${e.key.type}`);
  if (y.has(n)) throw Error(`reserved key name not allowed in meta: ${n}`);
  return n;
}
