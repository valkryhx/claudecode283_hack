/* ==========================================================================
 * m0132.ag   [m0132_0xc24a4bb.js @ 154262]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    }, n);
  },
  speak: (o, r) => t("audio.speak", {
    text: String(o),
    voice: r?.voice
  })
});
