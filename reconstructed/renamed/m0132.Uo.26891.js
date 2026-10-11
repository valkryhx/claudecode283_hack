/* ==========================================================================
 * m0132.Uo   [m0132_0xc24a4bb.js @ 26891]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Uo(e, t, o) {
  let r = !1,
    n = () => {
      r = !0;
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
    });
  }, Mhe).unref?.();
}
