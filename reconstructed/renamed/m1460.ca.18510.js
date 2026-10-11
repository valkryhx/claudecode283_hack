/* ==========================================================================
 * m1460.ca   [m1460_0xd973957.js @ 18510]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ca(o, l) {
  let a = Dt(o, l),
    u = I1e(o.fallbackModel ?? o.model, void 0),
    d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${cr(o.tokens)} tok`);
  if (a === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
    if (h >= 30) d.push(`idle ${Zt(h * 1000)}`);
  }
  if (a === "queued") d.push("queued");
  if (a === "interrupted") d.push("stopped");
  if (a === "skipped") d.push("skipped");
  if (a === "blocked") d.push("blocked");
  if (a === "failed") d.push("failed");
  let f = o.durationMs ?? (a === "running" && o.startedAt != null ? Math.max(0, Date.now() - o.startedAt) : void 0);
  return {
    model: u,
    stats: d.join(" \xB7 "),
    time: f != null ? Jne(f) : ""
  };
}
