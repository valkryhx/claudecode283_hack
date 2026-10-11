/* ==============================================================================
 * m0132.jn   [m0132_0xc24a4bb.js @ 168971]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 168971
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function jn({
  pluginName: e,
  host: t,
  hostStream: o,
  resolvedTable: r,
  timers: n,
  unloaded: s,
  invoke: i,
  wrapMethod: p,
  signalFrom: a,
  makeSignal: f
}) {
  let m = (u) => sg(u, p);
  return {
    ui: m(rx(e, t, r)),
    model: m(kg(t)),
    audio: m(ag(e, t)),
    mcp: m(dg(e, (u) => t("mcp.call", u))),
    session: m(Hg(e, t)),
    prompt: m(vg(e, t)),
    turn: m(zg(e, t)),
    tool: m(Xg(e, t)),
    command: m(fg(e, t)),
    config: m(mg(e, t)),
    agent: m(Vg(e, t)),
    fs: m(cg(t)),
    store: m(Lg(e, t)),
    state: m(Fg(e, t)),
    clock: m(Rd({
      pluginName: e,
      host: t,
      live: n,
      unloaded: s,
      invoke: i,
      signalFrom: a,
      makeSignal: f
    })),
    http: m(lg(e, t)),
    process: m(Tg(t, o)),
    settings: m(Ng(e, t)),
    env: m(ug(t)),
    flag: m(eg(t))
  }
}
