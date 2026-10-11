/* ==========================================================================
 * m0132.Yi   [m0132_0xc24a4bb.js @ 118216]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Yi(e, t) {
  let o = e,
    r = Date.now(),
    n,
    s = !1,
    i = !1,
    p = () => {},
    a = Tn(new Promise((d, y) => {
      p = y;
    }));
  function f() {
    s = !0, p(new De(t));
  }
  function m() {
    r = Date.now(), i = !0, n = setTimeout(f, o);
  }
  let u = () => i ? Math.max(0, o - (Date.now() - r)) : o;
  return m(), {
    expired: a,
    isExpired: () => s,
    remainingMs: () => s ? 0 : u(),
    pause() {
      clearTimeout(n), o = u(), i = !1;
    },
    resume: m,
    clear: () => clearTimeout(n),
    rearm() {
      if (s) return;
      if (o = e, clearTimeout(n), i) m();
    }
  };
}
