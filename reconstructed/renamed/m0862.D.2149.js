/* ==========================================================================
 * m0862.D   [m0862_0xd11f1fb.js @ 2149]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function D(e, n) {
  let t = e[n],
    r;
  if (t === "'" || t === '"') r = _(e, n);else {
    let a = g(e, n);
    r = a === void 0 ? void 0 : {
      value: a,
      end: n + a.length
    };
  }
  if (!r || y.has(r.value)) return;
  let o = d(e, r.end);
  if (e[o] !== ":") return;
  let i = x(e, d(e, o + 1));
  return i && {
    value: [r.value, i.value],
    end: i.end
  };
}
