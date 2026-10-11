/* ==============================================================================
 * m1569.Xe   [m1569_0xdceb889.js @ 15493]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 15493
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Xe(e, r, n = {}) {
  if (e === null || typeof e !== "object") return Object.is(e, r) ? n : void 0;
  if (zr(e)) {
    if (r === void 0) return;
    if (Object.hasOwn(n, e.$var)) return St(n[e.$var], r) ? n : void 0;
    return {
      ...n,
      [e.$var]: r
    }
  }
  if (Nr(e)) {
    if (!Array.isArray(r) || r.length !== e.length) return;
    let w = n;
    for (let h = 0; h < e.length && w; h++) w = Xe(e[h], r[h], w);
    return w
  }
  if (r === null || typeof r !== "object" || Array.isArray(r)) return;
  let s = e,
    a = n;
  for (let w of Object.keys(s)) {
    if (w === "__proto__") continue;
    let h = Object.hasOwn(r, w) ? r[w] : void 0;
    if (a = Xe(s[w], h, a), !a) return
  }
  return a
}
