/* ==========================================================================
 * m0869.N7r   [m0869_0xd12567a.js @ 24387]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  }).catch(F => {
    g.mirroredScripts.delete(e), wo(F);
  });
}
