/* ==========================================================================
 * m0862.M   [m0862_0xd11f1fb.js @ 7222]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function M(e) {
  let n = e.name;
  if (typeof n !== "string" || n.length === 0) return {
    error: "meta.name must be a non-empty string"
  };
  let t = e.description;
  if (typeof t !== "string" || t.length === 0) return {
    error: "meta.description must be a non-empty string"
  };
  let r = typeof e.title === "string" && e.title.length > 0 ? e.title : void 0,
    o = typeof e.whenToUse === "string" ? e.whenToUse : void 0,
    i = K(e.phases);
  return {
    meta: {
      name: n,
      description: t,
      title: r,
      whenToUse: o,
      phases: i
    }
  };
}
