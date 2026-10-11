/* ==========================================================================
 * m1460.oi   [m1460_0xd973957.js @ 26007]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function oi(o, l, a, u, d) {
  let f = l === a,
    h = o.status === "done",
    x = o.status === "failed",
    y = h ? Z.tick : x ? Z.cross : String(l + 1),
    A = f ? "permission" : h ? "success" : x ? "error" : "subtle",
    k = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "",
    C = u === "phases" && f ? `${Z.pointer} ` : "  ",
    W = ie(C) + ie(y) + 1,
    L = k ? 1 + ie(k) : 0,
    D = ot(o.title, Math.max(1, d - W - L)),
    M = Math.max(0, d - W - ie(D) - L),
    q = !f && o.status === "not-started",
    H = [{
      text: C,
      color: f ? "permission" : void 0
    }, {
      text: y,
      color: A
    }, {
      text: " "
    }, {
      text: D,
      color: f ? "permission" : void 0,
      dimColor: q
    }, {
      text: " ".repeat(M)
    }];
  if (k) H.push({
    text: " "
  }, {
    text: k,
    color: f ? "permission" : "subtle"
  });
  return H;
}
