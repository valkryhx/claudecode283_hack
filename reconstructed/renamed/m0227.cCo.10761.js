/* ==========================================================================
 * m0227.cCo   [m0227_0xc482590.js @ 10761]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function cCo(e, n) {
  let r = e[n],
    s = r?.message?.content;
  if (r?.type !== "user" || !Array.isArray(s)) return !1;
  let E = new Set();
  for (let l = 0; l < n; l++) {
    let g = e[l],
      p = g.message?.content;
    if (g.type === "assistant" && Array.isArray(p)) {
      for (let _ of p) if (_?.type === "tool_use" && _.name === FB) E.add(_.id);
    }
  }
  if (E.size === 0) return !1;
  return s.some(l => l?.type === "tool_result" && typeof l.tool_use_id === "string" && E.has(l.tool_use_id));
}
