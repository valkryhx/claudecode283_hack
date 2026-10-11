/* ==========================================================================
 * m0132.xt   [m0132_0xc24a4bb.js @ 48193]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function xt(e, t) {
  let o = e.key !== t.key,
    r = $n(e.provider) !== $n(t.provider);
  return (o ? "a changed key (pinned)" : void 0) ?? (r ? "a changed provider (pinned: a fact)" : void 0);
}
