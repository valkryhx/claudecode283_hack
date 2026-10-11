/* ==============================================================================
 * m0132.ag   [m0132_0xc24a4bb.js @ 154262]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 154262
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var ag = (e, t) => R_({
  play: (o, r) => {
    let {
      signal: n,
      shouldLoop: s,
      gain: i
    } = r ?? {};
    return n !== void 0 && !dOo(n) ? Promise.reject(new De(`${e}: $.audio.play options.signal must be an AbortSignal`)) : Ia(s, n) ? Promise.reject(new De(`${e}: $.audio.play with shouldLoop needs options.signal: the clip repeats until it aborts`)) : t("audio.play", {
      clip: o,
      shouldLoop: s === !0,
      gain: i
    }, n)
  },
  speak: (o, r) => t("audio.speak", {
    text: String(o),
    voice: r?.voice
  })
});
