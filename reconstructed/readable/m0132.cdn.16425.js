/* ==============================================================================
 * m0132.cdn   [m0132_0xc24a4bb.js @ 16425]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 16425
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function cdn(e, t = new WeakMap) {
  if (typeof e === "function") return;
  if (e === null || typeof e !== "object") return e;
  let o = t.get(e);
  if (o !== void 0) return o;
  if (Array.isArray(e)) {
    let s = [];
    t.set(e, s);
    let i = Yn(e);
    for (let p = 0; p < i; p++) try {
      s[p] = cdn(e[p], t)
    } catch (a) {
      if (Vn(a)) throw a;
      s[p] = void 0
    }
    return s
  }
  let r = {};
  t.set(e, r);
  let n;
  try {
    n = Object.keys(e)
  } catch {
    return r
  }
  for (let s of n) {
    if (s === "__proto__") continue;
    try {
      let i = e[s];
      if (typeof i === "function") continue;
      r[s] = cdn(i, t)
    } catch (i) {
      if (Vn(i)) throw i
    }
  }
  return r
}
