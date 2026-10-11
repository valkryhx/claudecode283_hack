/* ==========================================================================
 * m0862.R   [m0862_0xd11f1fb.js @ 2627]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function R(e, n) {
  k.lastIndex = n;
  let t = k.exec(e);
  if (!t) return;
  let r = n + t[0].length;
  if (T(e, r) || e[r] === ".") return;
  return {
    value: Number(t[0]),
    end: r
  };
}
