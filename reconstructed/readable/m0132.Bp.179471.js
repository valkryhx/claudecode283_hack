/* ==============================================================================
 * m0132.Bp   [m0132_0xc24a4bb.js @ 179471]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 179471
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Bp(e) {
  let {
    vmClone: t,
    cloneIn: o
  } = e, r = Object.freeze(t([])), n = new WeakMap;

  function s(i) {
    let p = n.get(i);
    if (p !== void 0) return p;
    let {
      index: a,
      plugin: f,
      tier: m,
      event: u,
      outcome: d,
      reason: y,
      ms: c
    } = i, k = Object.freeze(Object.assign(t({
      index: a,
      plugin: f,
      tier: m,
      event: u,
      outcome: d,
      ...y === void 0 ? {} : {
        reason: y
      },
      ms: c
    }), {
      received: o(i.received),
      returned: i.returned === void 0 ? void 0 : o(i.returned)
    }));
    return n.set(i, k), k
  }
  return (i) => {
    if (i.length === 0) return r;
    let p = t([]);
    for (let [a, f] of i.entries()) p[a] = s(f);
    return Object.freeze(p)
  }
}
