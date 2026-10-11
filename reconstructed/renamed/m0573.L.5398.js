/* ==========================================================================
 * m0573.L   [m0573_0xcde50bc.js @ 5398]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function L(e) {
  let {
    bySlug: n
  } = V3t();
  if (n.size === 0) return e;
  return e.map(o => {
    let s = Math.min((n.get(o.slug) ?? 0) + (o.unattendedReplies ?? 0), _ze);
    return s > 0 ? {
      ...o,
      unattendedReplies: s
    } : o;
  });
}
