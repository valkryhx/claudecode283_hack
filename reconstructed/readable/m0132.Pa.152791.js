/* ==============================================================================
 * m0132.Pa   [m0132_0xc24a4bb.js @ 152791]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 152791
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var Pa = (e) => (t, o) => async (r, n) => {
  let s = o !== void 0,
    i = new WeakMap,
    p;

  function a(c) {
    return p = c, Wy(e, {
      table: p,
      beneath: i,
      isObserving: s
    })
  }
  let f = async (c) => a(await n(c)), m = async (c, ...k) => a(await _Nt(c, n, k));
  async function u(c) {
    if (kc().log(`hooks module ${e.pluginName}: the on("${o}") hook failed at engine.create (${l(c)}); passed on`, "warn"), p) return p;
    if (n.signal.aborted) throw c;
    return await n(r)
  }
  let d = LCe({
      call: e.wrapMethod(f),
      to: e.wrapMethod(m),
      signal: n.signal,
      is: n.is,
      event: n.event,
      origin: n.origin,
      trace: () => n.trace,
      budget: () => n.budget
    }),
    y;
  try {
    y = await e.invoke(t, [nt, r, d])
  } catch (c) {
    if (!s) throw c;
    return u(c)
  }
  return jy(e, y, i)
};
