/* ==========================================================================
 * m1460.Yi   [m1460_0xd973957.js @ 5552]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Yi(o) {
  if (typeof o === "string") return o;
  let l = cs(o);
  if (l || !Array.isArray(o)) return l;
  let a = o.filter(yn);
  return a.length === 0 ? "" : `(${a.map(u => u.type).join(", ")} content)`;
}
