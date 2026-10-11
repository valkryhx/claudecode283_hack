/* ==========================================================================
 * m0855.hSt   [m0855_0xd10e439.js @ 3445]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function hSt(e, t, r) {
  if (mx(t, e, r)) return {
    message: "Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)"
  };
  let n = lr() ? void 0 : $F(),
    s = n === null ? void 0 : n ?? e;
  if (s === void 0) {
    let l = gx(t, e),
      f = hCe(t) !== null && Aw(t, e) !== void 0 ? ", set by your organization" : "";
    return {
      message: `Effort level: auto (currently ${g6(l)}${f})`
    };
  }
  let o = eMr(s);
  return {
    message: `Current effort level: ${g6(s)} (${o})`
  };
}
