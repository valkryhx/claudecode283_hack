/* ==========================================================================
 * m0132.Bp   [m0132_0xc24a4bb.js @ 179471]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Bp(e) {
  let {
      vmClone: t,
      cloneIn: o
    } = e,
    r = Object.freeze(t([])),
    n = new WeakMap();
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
      } = i,
      k = Object.freeze(Object.assign(t({
        index: a,
        plugin: f,
        tier: m,
        event: u,
        outcome: d,
        ...(y === void 0 ? {} : {
          reason: y
        }),
        ms: c
      }), {
        received: o(i.received),
        returned: i.returned === void 0 ? void 0 : o(i.returned)
      }));
    return n.set(i, k), k;
  }
  return i => {
    if (i.length === 0) return r;
    let p = t([]);
    for (let [a, f] of i.entries()) p[a] = s(f);
    return Object.freeze(p);
  };
}
