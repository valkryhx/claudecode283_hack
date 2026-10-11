/* ==============================================================================
 * m0132.HIo   [m0132_0xc24a4bb.js @ 34087]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 34087
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
var HIo = {
  "session.start": (e) => ({
    cwd: e.cwd
  }),
  "session.attach": (e) => ({
    clientId: e.clientId
  }),
  "session.detach": (e) => ({
    clientId: e.clientId
  }),
  "session.measure": (e) => ({
    changed: e.changed
  }),
  "session.end": (e) => ({
    sessionId: e.sessionId
  }),
  "turn.start": (e) => ({
    turnId: e.turnId
  }),
  "turn.complete": (e) => ({
    text: e.answer,
    ...e.usage && {
      usage: e.usage
    }
  })
};
