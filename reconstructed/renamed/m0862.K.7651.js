/* ==========================================================================
 * m0862.K   [m0862_0xd11f1fb.js @ 7651]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function K(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let t of e) if (t && typeof t === "object" && "title" in t) {
    let {
      title: r,
      detail: o,
      model: i
    } = t;
    if (typeof r === "string") n.push({
      title: r,
      detail: typeof o === "string" ? o : void 0,
      model: typeof i === "string" ? i : void 0
    });
  }
  return n.length > 0 ? n : void 0;
}
