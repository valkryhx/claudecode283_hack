/* ==========================================================================
 * m1460.Br   [m1460_0xd973957.js @ 28884]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Br(o, l, a, u) {
  let W = w(13),
    [d, f] = g(null),
    x = Pe(iS)?.setTimeout ?? yP,
    y = T(void 0),
    A = T(0),
    k = T(0),
    C = T(null),
    L,
    D;
  if (W[0] === S) L = () => () => {
    C.current = null;
  }, D = [], W[0] = L, W[1] = D;else L = W[0], D = W[1];
  R(L, D);
  let M;
  if (W[2] !== l || W[3] !== u || W[4] !== x || W[5] !== o) M = () => {
    if (!o || !l) {
      return;
    }
    C.current = {
      runId: o,
      agentId: l
    };
    let q = A.current = A.current + 1;
    let z = () => {
      bo(o, l, {
        promptFramed: u
      }).catch(mc).then(H => {
        if (q > k.current && C.current?.runId === o && C.current.agentId === l) k.current = q, y.current = l, f({
          agentId: l,
          transcript: H
        });
      });
    };
    if (y.current === l) {
      return x(z, fi);
    }
    z();
  }, W[2] = l, W[3] = u, W[4] = x, W[5] = o, W[6] = M;else M = W[6];
  let E;
  if (W[7] !== l || W[8] !== u || W[9] !== a || W[10] !== x || W[11] !== o) E = [o, l, a, u, x], W[7] = l, W[8] = u, W[9] = a, W[10] = x, W[11] = o, W[12] = E;else E = W[12];
  if (R(M, E), !o || !l) {
    return null;
  }
  if (!d || d.agentId !== l) {
    return "loading";
  }
  return d.transcript;
}
