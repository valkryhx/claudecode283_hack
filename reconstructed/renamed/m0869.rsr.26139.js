/* ==========================================================================
 * m0869.rsr   [m0869_0xd12567a.js @ 26139]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function rsr(e, r) {
  if (e.kind !== "restore" || e.script === void 0) return;
  let s = fo(X3e(), e.script.fileName);
  return mY(En(oe(), r), s) ? e.script.script : void 0;
}
