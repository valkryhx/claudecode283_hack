/* ==========================================================================
 * m0132.ua   [m0132_0xc24a4bb.js @ 133898]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ua(e) {
  let t = [],
    o = [];
  function r() {
    let [n] = o,
      s = n?.hop;
    if (n !== void 0 && s !== void 0) t.push(ma(s, o));
    o = [];
  }
  for (let n of e) {
    if (!(n.hop !== void 0 && n.hop.key === o[0]?.hop?.key)) r();
    if (n.hop === void 0) {
      t.push(n);
      continue;
    }
    o.push(n);
  }
  return r(), t;
}
