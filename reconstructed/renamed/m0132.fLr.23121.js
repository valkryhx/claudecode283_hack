/* ==========================================================================
 * m0132.fLr   [m0132_0xc24a4bb.js @ 23121]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function fLr(e) {
  let t = mt.getStore();
  if (t === void 0) return e();
  t.pause();
  try {
    return await e();
  } finally {
    t.resume();
  }
}
