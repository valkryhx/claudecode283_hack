/* ==============================================================================
 * m0869.ho   [m0869_0xd12567a.js @ 24104]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 24104
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
      }).catch(wo)
    }
  }
}
