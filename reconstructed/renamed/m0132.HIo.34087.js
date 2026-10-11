/* ==========================================================================
 * m0132.HIo   [m0132_0xc24a4bb.js @ 34087]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var HIo = {
  "session.start": e => ({
    cwd: e.cwd
  }),
  "session.attach": e => ({
    clientId: e.clientId
  }),
  "session.detach": e => ({
    clientId: e.clientId
  }),
  "session.measure": e => ({
    changed: e.changed
  }),
  "session.end": e => ({
    sessionId: e.sessionId
  }),
  "turn.start": e => ({
    turnId: e.turnId
  }),
  "turn.complete": e => ({
    text: e.answer,
    ...(e.usage && {
      usage: e.usage
    })
  })
};
