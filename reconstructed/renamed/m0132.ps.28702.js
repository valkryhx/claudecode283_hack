/* ==========================================================================
 * m0132.ps   [m0132_0xc24a4bb.js @ 28702]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ps = e => e.reduce((t, o) => {
  let r = t.at(-1);
  return o.hop !== void 0 && r?.hop?.key === o.hop.key ? [...t.slice(0, -1), {
    hop: r.hop,
    members: [...r.members, o]
  }] : [...t, {
    hop: o.hop,
    members: [o]
  }];
}, []);
