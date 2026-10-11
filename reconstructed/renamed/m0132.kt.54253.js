/* ==========================================================================
 * m0132.kt   [m0132_0xc24a4bb.js @ 54253]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function kt(e, t) {
  let {
    blocks: o,
    instructionFiles: r
  } = e;
  if (!Array.isArray(o)) return e;
  for (let i = 0; i < o.length; i += 1) {
    let p = o[i];
    if (!(Object.hasOwn(o, i) && G(p) && typeof p.name === "string" && typeof p.text === "string")) return e;
  }
  if (!(r === void 0 || Vt(r))) return e;
  let s = {
    blocks: o,
    instructionFiles: r
  };
  return {
    ...e,
    ...qs(s, t)
  };
}
