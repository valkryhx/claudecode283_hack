/* ==========================================================================
 * m1460.ri   [m1460_0xd973957.js @ 26586]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ri(o, l, a, u, d, f, h) {
  let x = u === "agents" && l === a,
    {
      glyph: y,
      color: A
    } = cn(Dt(o, h)),
    k = ot(o.label, f),
    C = " ".repeat(Math.max(0, f - ie(k))),
    W = Math.max(0, d - (f + 4));
  return [{
    text: x ? Z.pointer : " ",
    color: "permission"
  }, {
    text: y,
    color: A
  }, {
    text: " "
  }, {
    text: `${k}${C}`,
    color: x ? "permission" : void 0,
    dimColor: !x && It(o)
  }, {
    text: " "
  }, ...Kr(o, W, x, h)];
}
