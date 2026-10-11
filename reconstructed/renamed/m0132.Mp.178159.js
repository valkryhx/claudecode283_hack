/* ==========================================================================
 * m0132.Mp   [m0132_0xc24a4bb.js @ 178159]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Mp = (e, t = () => e?.environmentId ?? 0) => async o => {
  function r() {
    if (e) Atomics.store(e.view, _dt, t());
  }
  r(), queueMicrotask(r);
  try {
    return await o;
  } finally {
    r();
  }
};
