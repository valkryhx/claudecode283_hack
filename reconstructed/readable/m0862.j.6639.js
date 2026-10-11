/* ==============================================================================
 * m0862.j   [m0862_0xd11f1fb.js @ 6639]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 6639
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function j(e) {
  let n = Object.create(null);
  for (let t of e.properties) {
    if (t.type !== "Property") throw Error("only plain properties allowed in meta");
    let r = t;
    if (r.computed) throw Error("computed keys not allowed in meta");
    if (r.method || r.kind !== "init") throw Error("methods/accessors not allowed in meta");
    n[q(r)] = O(r.value)
  }
  return n
}
