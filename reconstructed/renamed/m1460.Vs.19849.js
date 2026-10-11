/* ==========================================================================
 * m1460.Vs   [m1460_0xd973957.js @ 19849]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Vs(o, l) {
  let a = 0;
  for (let u = 0; u < o.length; u++) {
    let d = o[u],
      f = ie(d.text);
    if (a + f > l) {
      let h = l - a,
        x = h > 0 ? ot(d.text, h) : "",
        y = o.slice(0, u);
      if (x) y.push({
        ...d,
        text: x
      });
      return {
        segs: y,
        pad: Math.max(0, h - ie(x))
      };
    }
    a += f;
  }
  return {
    segs: o,
    pad: Math.max(0, l - a)
  };
}
