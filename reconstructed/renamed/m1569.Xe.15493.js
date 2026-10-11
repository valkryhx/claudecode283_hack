/* ==========================================================================
 * m1569.Xe   [m1569_0xdceb889.js @ 15493]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Xe(e, r, n = {}) {
  if (e === null || typeof e !== "object") return Object.is(e, r) ? n : void 0;
  if (zr(e)) {
    if (r === void 0) return;
    if (Object.hasOwn(n, e.$var)) return St(n[e.$var], r) ? n : void 0;
    return {
      ...n,
      [e.$var]: r
    };
  }
  if (Nr(e)) {
    if (!Array.isArray(r) || r.length !== e.length) return;
    let w = n;
    for (let h = 0; h < e.length && w; h++) w = Xe(e[h], r[h], w);
    return w;
  }
  if (r === null || typeof r !== "object" || Array.isArray(r)) return;
  let s = e,
    a = n;
  for (let w of Object.keys(s)) {
    if (w === "__proto__") continue;
    let h = Object.hasOwn(r, w) ? r[w] : void 0;
    if (a = Xe(s[w], h, a), !a) return;
  }
  return a;
}
