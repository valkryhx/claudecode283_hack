/* ==========================================================================
 * m0132.$2o   [m0132_0xc24a4bb.js @ 183834]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function $2o(e, t) {
  let o = e === void 0 ? 0 : Atomics.load(e, _dt);
  try {
    return t();
  } finally {
    if (e) Atomics.store(e, _dt, o);
  }
}
