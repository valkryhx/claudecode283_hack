/* ==========================================================================
 * m0132.yo   [m0132_0xc24a4bb.js @ 118654]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function yo(e, t, o) {
  let r = () => o === void 0 ? Number.POSITIVE_INFINITY : Math.max(0, o - Date.now()),
    n = Math.min(e <= 0 ? Number.POSITIVE_INFINITY : e, r());
  if (e <= 0) return {
    expired: void 0,
    isExpired: () => !1,
    reading: () => o === void 0 ? Po : Object.freeze({
      ms: n,
      remainingMs: r()
    }),
    hasGraceExpired: () => !1,
    pause() {},
    resume() {},
    clear() {},
    rearm() {}
  };
  let s = 0,
    i = !1,
    p,
    a = Yi(e, `exceeded ${e}ms budget`),
    f = Promise.withResolvers();
  function m() {
    if (p = Yi(Mhe, `did not settle within ${Mhe}ms of its signal aborting`), s > 0) p.pause();
    p.expired.catch(f.reject);
  }
  let u = Mw(t, {
    abort: m
  });
  return {
    expired: Tn(Promise.race([a.expired, f.promise])),
    isExpired: () => a.isExpired(),
    reading: () => Object.freeze({
      ms: n,
      remainingMs: Math.min(a.remainingMs(), r())
    }),
    hasGraceExpired: () => p?.isExpired() ?? !1,
    pause() {
      if (s++ === 0) a.pause(), p?.pause();
    },
    resume() {
      if (--s === 0 && !i) a.resume(), p?.resume();
    },
    clear() {
      i = !0, a.clear(), p?.clear(), u();
    },
    rearm() {
      if (!i) a.rearm();
    }
  };
}
