/* ==========================================================================
 * m0132.Pe   [m0132_0xc24a4bb.js @ 25015]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Pe(e) {
  let t = e instanceof De && e.thrownName !== void 0 ? {
    name: e.thrownName
  } : e;
  return `errorKind=${e instanceof Error ? Ym(t) ?? "Error" : "unknown"} errorChars=${String(l(e)).length}`;
}
