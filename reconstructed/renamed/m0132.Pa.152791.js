/* ==========================================================================
 * m0132.Pa   [m0132_0xc24a4bb.js @ 152791]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Pa = e => (t, o) => async (r, n) => {
  let s = o !== void 0,
    i = new WeakMap(),
    p;
  function a(c) {
    return p = c, Wy(e, {
      table: p,
      beneath: i,
      isObserving: s
    });
  }
  let f = async c => a(await n(c)),
    m = async (c, ...k) => a(await _Nt(c, n, k));
  async function u(c) {
    if (kc().log(`hooks module ${e.pluginName}: the on("${o}") hook failed at engine.create (${l(c)}); passed on`, "warn"), p) return p;
    if (n.signal.aborted) throw c;
    return await n(r);
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
    y = await e.invoke(t, [nt, r, d]);
  } catch (c) {
    if (!s) throw c;
    return u(c);
  }
  return jy(e, y, i);
};
