/* ==============================================================================
 * m0132.jp   [m0132_0xc24a4bb.js @ 178311]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 178311
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var jp = (e, t) => (o) => {
  if (o === void 0 || o === null) return;
  if (!dOo(o)) throw new De(`${e}: options.signal must be an AbortSignal`);
  let r = new AbortController,
    n = t.relaySignal(o, k0((s, i) => {
      let p = new De(i);
      p.name = s, r.abort(p)
    }));
  return {
    signal: r.signal,
    unlink: n
  }
};
