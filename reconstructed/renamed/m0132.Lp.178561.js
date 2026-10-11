/* ==========================================================================
 * m0132.Lp   [m0132_0xc24a4bb.js @ 178561]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Lp = (e, t = () => e?.environmentId ?? 0) => o => {
  if (!e) return o();
  let {
      view: r,
      environmentId: n
    } = e,
    s = Atomics.load(r, EVn);
  Atomics.store(r, EVn, n), Atomics.store(r, _dt, t());
  try {
    return o();
  } finally {
    Atomics.store(r, EVn, s), Atomics.store(r, _dt, s === 0 ? t() : s);
  }
};
