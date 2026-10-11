/* ==========================================================================
 * m0855.F   [m0855_0xd10e439.js @ 5501]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function F(e, t = !0, r, n) {
  let s = e.toLowerCase();
  if (s === "auto" || s === "unset") return O(t, r, n);
  if (s === "ultracode") return R(r);
  let o = bhe(e);
  if (!o) return {
    message: `Invalid argument: ${e}. Valid options are: ${g(it())}`
  };
  return w(o, t, r, n);
}
