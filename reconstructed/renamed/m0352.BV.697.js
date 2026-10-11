/* ==========================================================================
 * m0352.BV   [m0352_0xc63a7b9.js @ 697]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function BV(n, s, r) {
  let e = !1,
    i;
  return s.update(n, t => {
    if (i = t, t.notified) return t;
    if (e = !0, r?.skipStampIfRunning && t.status === "running") return t;
    return {
      ...t,
      notified: !0
    };
  }), {
    claimed: e,
    task: i
  };
}
