/* ==========================================================================
 * m0132.dn   [m0132_0xc24a4bb.js @ 112088]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function dn(e) {
  let {
      decision: t,
      reason: o,
      rule: r
    } = e,
    n = {
      decision: t
    };
  if (o !== void 0) n.reason = o;
  if (r !== void 0) n.rule = r;
  return n;
}
