/* ==========================================================================
 * m0862.A   [m0862_0xd11f1fb.js @ 2403]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function A(e, n, t, r) {
  let o = [],
    i = n + 1;
  while (!0) {
    if (i = d(e, i), e[i] === t) return {
      value: o,
      end: i + 1
    };
    if (o.length > 0) {
      if (e[i] !== ",") return;
      if (i = d(e, i + 1), e[i] === t) return {
        value: o,
        end: i + 1
      };
    }
    let a = r(e, i);
    if (!a) return;
    o.push(a.value), i = a.end;
  }
}
