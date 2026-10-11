/* ==========================================================================
 * m0862.P   [m0862_0xd11f1fb.js @ 2019]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function P(e, n) {
  let t = A(e, n, "}", D);
  if (!t) return;
  let r = Object.create(null);
  for (let [o, i] of t.value) r[o] = i;
  return {
    value: r,
    end: t.end
  };
}
