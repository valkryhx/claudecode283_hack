/* ==========================================================================
 * m0132.qn   [m0132_0xc24a4bb.js @ 22552]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function qn(e, t) {
  let o = Xe.get(e);
  if (Xe.delete(e), o !== void 0 && o.count > 0) kc().log(`${t} ${o.count} more times in the last ${$t / Yle}s (the last in ${o.lastMs.toFixed(1)}ms)`);
}
