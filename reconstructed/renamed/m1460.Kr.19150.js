/* ==========================================================================
 * m1460.Kr   [m1460_0xd973957.js @ 19150]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Kr(o, l, a, u) {
  if (l <= 0) return [];
  let {
      model: d,
      stats: f,
      time: h
    } = ca(o, u),
    x = a ? "permission" : void 0,
    y = !a,
    A = (H, z) => z <= 0 ? "" : ot(H, z),
    k = h ? A(h, l).padStart(Math.min(Pi, l)) : "",
    C = k ? l - ie(k) - 1 : l,
    W = (H, z) => H && z ? 3 : 0,
    L = d,
    D = f;
  if (ie(L) + W(L, D) + ie(D) > C) {
    if (D = A(D, C - ie(L) - W(L, D)), ie(L) + W(L, D) + ie(D) > C) L = A(L, C - ie(D) - W(L, D));
  }
  let M = L && D ? " \xB7 " : "",
    q = Math.max(0, l - ie(L) - ie(M) - ie(D) - ie(k));
  return [{
    text: L,
    color: x,
    dimColor: y
  }, {
    text: M,
    color: x,
    dimColor: y
  }, {
    text: D,
    color: x,
    dimColor: y
  }, {
    text: " ".repeat(q)
  }, {
    text: k,
    color: x,
    dimColor: y
  }];
}
