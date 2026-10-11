/* ==========================================================================
 * m0025.p9e   [m0025_0xbf5baa8.js @ 13026]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function p9e(e, r) {
  let s = e.firstPrompt?.startsWith(`<${fK}>`),
    o = e.firstPrompt ? mmt(e.firstPrompt) : "",
    i = o && !s,
    u = e.agentName || e.customTitle || e.aiTitle || e.summary || (i ? o : void 0) || r || (s ? "Autonomous session" : void 0) || (e.sessionId ? e.sessionId.slice(0, 8) : "") || "";
  return Whn(u).trim();
}
