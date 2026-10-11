/* ==============================================================================
 * m0132.KIo   [m0132_0xc24a4bb.js @ 175266]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 175266
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function KIo(e) {
  let {
    loaded: t,
    host: o,
    hostStream: r,
    resolvedTable: n,
    invoke: s,
    wrapMethod: i,
    signalFrom: p,
    makeSignal: a
  } = e, {
    modulePath: f,
    pluginName: m,
    pluginRoot: u
  } = e.args, d = new Set, y = !1, c = {
    plugin: R_({
      name: m,
      root: u
    })
  };
  Object.setPrototypeOf(c, null);
  let k = Yy({
      engine: c,
      core: jn({
        pluginName: m,
        host: o,
        hostStream: r,
        resolvedTable: n,
        timers: d,
        unloaded: () => y,
        invoke: s,
        wrapMethod: i,
        signalFrom: p,
        makeSignal: a
      }),
      pluginName: m,
      callInterface: (x) => o("interface.call", x),
      invoke: s,
      wrapMethod: i
    }),
    A = vx({
      pluginName: m,
      engine: c,
      interfaces: k
    }, e);
  return await s(ng(t, f, m), [Cx(A), UCe(e.args.options)]), A.isRegistered = !0, {
    registrations: A.registrations,
    finalize: k.finalize,
    callInterface: k.call,
    dispose() {
      y = !0;
      for (let x of d) x.cancel();
      d.clear()
    }
  }
}
