/* ==========================================================================
 * m0862.j   [m0862_0xd11f1fb.js @ 6639]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function j(e) {
  let n = Object.create(null);
  for (let t of e.properties) {
    if (t.type !== "Property") throw Error("only plain properties allowed in meta");
    let r = t;
    if (r.computed) throw Error("computed keys not allowed in meta");
    if (r.method || r.kind !== "init") throw Error("methods/accessors not allowed in meta");
    n[q(r)] = O(r.value);
  }
  return n;
}
