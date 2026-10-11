/* ==========================================================================
 * m0862._   [m0862_0xd11f1fb.js @ 2768]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function _(e, n) {
  let t = e[n],
    r = t === "`",
    o = "",
    i = n + 1,
    a = i;
  while (a < e.length) {
    let s = e[a];
    if (s === t) return {
      value: o + e.slice(i, a),
      end: a + 1
    };
    if (s === "\\") {
      let l = F(e, a);
      if (!l) return;
      o += e.slice(i, a) + l.value, a = i = l.end;
    } else if (r ? s === "$" && e[a + 1] === "{" : s === `
` || s === "\r") return;else if (r && s === "\r") o += `${e.slice(i, a)}
`, a = i = a + (e[a + 1] === `
` ? 2 : 1);else a++;
  }
  return;
}
