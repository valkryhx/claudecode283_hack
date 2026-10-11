/* ==============================================================================
 * m0132.bt   [m0132_0xc24a4bb.js @ 97037]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 97037
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function bt(e, t, o) {
  if (t > DVn) return `nests deeper than ${DVn}`;
  let r = typeof e === "object" ? o.done.get(e) : void 0;
  o.nodes += r?.nodes ?? 1, o.chars += r?.chars ?? Fr(e) ?? 2;
  let n = hi(o);
  if (n !== void 0 || r !== void 0) return n;
  if (typeof e === "number" && !Number.isFinite(e)) return `holds ${String(e)}`;
  if (Fr(e) !== void 0) return;
  if (e === void 0) return "holds undefined (an array hole, a missing value)";
  if (typeof e !== "object" || e === null) return `holds ${Kz(e)}`;
  if (o.path.has(e)) return "holds a cycle";
  let s = Object.getPrototypeOf(e);
  if (!(Array.isArray(e) || s === null || Object.getPrototypeOf(s) === null)) return "holds an object that is not plain (a class instance)";
  let p = {
    nodes: o.nodes - 1,
    chars: o.chars - 2
  };
  o.path.add(e);
  for (let [a, f] of xi(e)) {
    o.chars += a;
    let m = bt(f, t + 1, o);
    if (m !== void 0) return m
  }
  o.path.delete(e), o.done.set(e, {
    nodes: o.nodes - p.nodes,
    chars: o.chars - p.chars
  });
  return
}
