/* ==============================================================================
 * m1460.ca   [m1460_0xd973957.js @ 18510]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 18510
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ca(o, l) {
  let a = Dt(o, l),
    u = I1e(o.fallbackModel ?? o.model, void 0),
    d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${cr(o.tokens)} tok`);
  if (a === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
    if (h >= 30) d.push(`idle ${Zt(h*1000)}`)
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
  }
}
