/* ==========================================================================
 * m1460.ps   [m1460_0xd973957.js @ 6564]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ps(o, l, a, u, d, f) {
  if (a) {
    let y = Co(l, d);
    o.push([{
      text: y
    }, {
      ...a,
      text: ot(a.text, d - y.length - 1)
    }, {
      text: ":",
      dimColor: !0
    }]);
  }
  let h = Co(a ? l + 1 : l, d),
    x = d - h.length;
  for (let y of u) {
    if (y === "") {
      o.push([{
        text: ""
      }]);
      continue;
    }
    for (let A of GUe(y, x)) o.push([f ? {
      text: h + A,
      color: f
    } : {
      text: h + A
    }]);
  }
}
