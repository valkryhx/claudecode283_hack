/* ==========================================================================
 * m0869.zr   [m0869_0xd12567a.js @ 76819]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function zr(e) {
  let r;
  for (let s of Object.keys(e)) {
    let g = Reflect.get(e, s);
    if (typeof g !== "string") continue;
    let f = Fc(g);
    if (f !== g) r ??= {
      ...e
    }, Reflect.set(r, s, f);
  }
  return r ?? e;
}
