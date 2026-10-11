/* ==============================================================================
 * m0132.xp   [m0132_0xc24a4bb.js @ 169551]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 169551
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function xp() {
  let e = {},
    t = jn({
      pluginName: "core",
      host: Be,
      hostStream: Be,
      resolvedTable: Be,
      timers: new Set,
      unloaded: Be,
      invoke: Be,
      wrapMethod: (o) => o,
      signalFrom: Be,
      makeSignal: Be
    });
  for (let [o, r] of Object.entries(t)) e[o] = Object.freeze(Object.keys(r));
  return Object.freeze(e)
}
