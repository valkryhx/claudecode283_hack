/* ==========================================================================
 * m1460.Bt   [m1460_0xd973957.js @ 17403]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Bt(o, l, a) {
  if (l <= a) return {
    from: 0,
    to: l,
    above: 0,
    below: 0
  };
  let u = Math.floor(a / 2),
    d = Math.max(0, Math.min(o - u, l - a)),
    f = d + a;
  return {
    from: d,
    to: f,
    above: d,
    below: l - f
  };
}
