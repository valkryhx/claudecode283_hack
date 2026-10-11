/* ==========================================================================
 * m0132.wp   [m0132_0xc24a4bb.js @ 169934]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function wp(e, t) {
  let {
    pattern: o,
    matcher: r
  } = t;
  if (r !== void 0) {
    let n = W6e(o),
      s = n ? PNt.filter(i => x6(o, i)) : [o];
    for (let i of s) {
      let p = $Ce(i).checkMatcher?.(r, n);
      if (p !== void 0) throw new De(`${e.pluginName}: ${i}: ${p}`);
    }
  }
  e.clauses = [...e.clauses, t];
}
