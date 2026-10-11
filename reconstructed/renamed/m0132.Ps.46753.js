/* ==========================================================================
 * m0132.Ps   [m0132_0xc24a4bb.js @ 46753]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ps = {
  event: "command.describe",
  restoreArgument: (e, t) => W(["provider"], e, t),
  checkArgument: (e, t) => {
    if (e.command !== t.command) return "a changed command (the engine lists and caches by it)";
    if (e.immediate !== t.immediate) return "a changed immediate (read only: the command declares whether it runs mid-turn; next(e) passes it on)";
    return $n(e.provider) === $n(t.provider) ? Jt(e, t) : "a changed provider (pinned: who provides the command is a fact)";
  },
  check: C(Jt)
};
