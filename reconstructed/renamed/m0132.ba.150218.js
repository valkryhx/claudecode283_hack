/* ==========================================================================
 * m0132.ba   [m0132_0xc24a4bb.js @ 150218]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ba(e, t, o) {
  if (typeof o !== "object" || !o) throw new De(`${e}: $.${t} must be an object of methods, not ${typeof o}`);
  let r = [];
  for (let [n, s] of Object.entries(o)) {
    if (typeof s !== "function") throw new De(`${e}: $.${t}.${n} is not a function; an interface is an object of methods (a value another plugin can call)`);
    r.push(n);
  }
  return r;
}
