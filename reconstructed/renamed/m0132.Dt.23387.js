/* ==========================================================================
 * m0132.Dt   [m0132_0xc24a4bb.js @ 23387]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Dt(e, t = new Map()) {
  if (typeof e !== "object" || e === null) return e;
  let o = t.get(e);
  if (o !== void 0) return o;
  if (Array.isArray(e)) {
    let n = [];
    t.set(e, n);
    for (let s of e) n.push(Dt(s, t));
    return n;
  }
  if (!gN(e)) return e;
  let r = {};
  t.set(e, r);
  for (let n of Object.keys(e)) Object.defineProperty(r, n, {
    value: Dt(e[n], t),
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
  return r;
}
