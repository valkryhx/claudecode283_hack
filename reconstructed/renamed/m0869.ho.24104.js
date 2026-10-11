/* ==========================================================================
 * m0869.ho   [m0869_0xd12567a.js @ 24104]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function ho(e, r) {
  let s = new Gt(e, r),
    g = Y();
  return {
    load: () => s.load(),
    async append(f) {
      await s.append(f), mMn()?.mirror(po, {
        entry: f
      }, {
        sessionId: g,
        agentId: e
      }).catch(wo);
    }
  };
}
