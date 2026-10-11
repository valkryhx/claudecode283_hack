/* ==========================================================================
 * m0132.W   [m0132_0xc24a4bb.js @ 35379]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function W(e, t, o) {
  let r = e.filter(s => !Object.hasOwn(t, s) && Object.hasOwn(o, s));
  if (r.length === 0) return t;
  let n = {
    ...t
  };
  for (let s of r) n[s] = o[s];
  return n;
}
