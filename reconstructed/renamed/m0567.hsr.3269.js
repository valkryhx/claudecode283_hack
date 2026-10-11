/* ==========================================================================
 * m0567.hsr   [m0567_0xcdd6311.js @ 3269]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function hsr(e, s, r) {
  r.update(e, o => {
    let n = o.status === "running" ? s : void 0;
    if (o.rateLimitWait?.resetsAt === n?.resetsAt && o.rateLimitWait?.resumeAtMs === n?.resumeAtMs && o.rateLimitWait?.waitingAgents === n?.waitingAgents) return o;
    return {
      ...o,
      rateLimitWait: n
    };
  });
}
