/* ==============================================================================
 * m0855.kWe   [m0855_0xd10e439.js @ 5735]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0855_0xd10e439.js  字符偏移 5735
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function kWe(e, t, r = !0, n) {
  let s = !1,
    o = null,
    l = await F(e, r, (f) => {
      s = !0;
      let E = v6e(f.value),
        m = f.ultracode ?? !1;
      t((u) => {
        if (o ??= {
            sessionEffort: u.sessionEffort,
            ultracode: u.ultracode ?? !1
          }, RX(u.sessionEffort, E) && (u.ultracode ?? !1) === m) return u;
        return {
          ...u,
          sessionEffort: E,
          ultracode: m
        }
      })
    }, n);
  if (s && !l.effortUpdate) t((f) => {
    if (o === null) return f;
    if (RX(f.sessionEffort, o.sessionEffort) && (f.ultracode ?? !1) === o.ultracode) return f;
    return {
      ...f,
      sessionEffort: o.sessionEffort,
      ultracode: o.ultracode
    }
  });
  return l
}
