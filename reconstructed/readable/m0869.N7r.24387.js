/* ==============================================================================
 * m0869.N7r   [m0869_0xd12567a.js @ 24387]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 24387
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function N7r(e, r, s, g) {
  if (!ko(r, e)) return;
  let f = uo(r),
    w = wr("sha256").update(f).update("\x00").update(s).digest("hex");
  if (g.mirroredScripts.get(e) === w) return;
  let A = mMn();
  if (A === void 0) return;
  g.mirroredScripts.set(e, w), A.mirror(mo, {
    fileName: f,
    script: s
  }, {
    sessionId: Y(),
    agentId: e
  }).catch((F) => {
    g.mirroredScripts.delete(e), wo(F)
  })
}
