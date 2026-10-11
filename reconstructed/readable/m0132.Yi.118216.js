/* ==============================================================================
 * m0132.Yi   [m0132_0xc24a4bb.js @ 118216]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 118216
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Yi(e, t) {
  let o = e,
    r = Date.now(),
    n, s = !1,
    i = !1,
    p = () => {},
    a = Tn(new Promise((d, y) => {
      p = y
    }));

  function f() {
    s = !0, p(new De(t))
  }

  function m() {
    r = Date.now(), i = !0, n = setTimeout(f, o)
  }
  let u = () => i ? Math.max(0, o - (Date.now() - r)) : o;
  return m(), {
    expired: a,
    isExpired: () => s,
    remainingMs: () => s ? 0 : u(),
    pause() {
      clearTimeout(n), o = u(), i = !1
    },
    resume: m,
    clear: () => clearTimeout(n),
    rearm() {
      if (s) return;
      if (o = e, clearTimeout(n), i) m()
    }
  }
}
