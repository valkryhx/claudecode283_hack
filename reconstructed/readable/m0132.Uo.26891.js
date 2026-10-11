/* ==============================================================================
 * m0132.Uo   [m0132_0xc24a4bb.js @ 26891]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 26891
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Uo(e, t, o) {
  let r = !1,
    n = () => {
      r = !0
    };
  e.then(n, n), setTimeout(() => {
    if (r || q(t)) return;
    let i = Ye(t, `still running ${Mhe}ms after its budget ran out; ignores its signal`);
    kc().log(`hook overran: ${i} (${o.event})`, "error"), kc().hookFailed({
      plugin: t.name,
      event: o.event,
      reason: i,
      effect: "counted toward a runaway",
      hasOverrun: !0
    })
  }, Mhe).unref?.()
}
