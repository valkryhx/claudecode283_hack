/* ==========================================================================
 * m0132.M2o   [m0132_0xc24a4bb.js @ 38729]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function M2o(e, t) {
  let o = new Map(t.map(r => [`${ds(r)}\x00${r.path}`, r]));
  return e.map(r => {
    let n = o.get(`${r.kind}\x00${r.path}`);
    if (n === void 0) return {
      path: r.path,
      type: ys(r),
      content: r.content,
      ...(r.parent !== void 0 && {
        parent: r.parent
      })
    };
    return n.content !== r.content ? {
      ...n,
      content: r.content
    } : n;
  });
}
