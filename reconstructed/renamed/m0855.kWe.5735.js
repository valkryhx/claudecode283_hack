/* ==========================================================================
 * m0855.kWe   [m0855_0xd10e439.js @ 5735]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function kWe(e, t, r = !0, n) {
  let s = !1,
    o = null,
    l = await F(e, r, f => {
      s = !0;
      let E = v6e(f.value),
        m = f.ultracode ?? !1;
      t(u => {
        if (o ??= {
          sessionEffort: u.sessionEffort,
          ultracode: u.ultracode ?? !1
        }, RX(u.sessionEffort, E) && (u.ultracode ?? !1) === m) return u;
        return {
          ...u,
          sessionEffort: E,
          ultracode: m
        };
      });
    }, n);
  if (s && !l.effortUpdate) t(f => {
    if (o === null) return f;
    if (RX(f.sessionEffort, o.sessionEffort) && (f.ultracode ?? !1) === o.ultracode) return f;
    return {
      ...f,
      sessionEffort: o.sessionEffort,
      ultracode: o.ultracode
    };
  });
  return l;
}
