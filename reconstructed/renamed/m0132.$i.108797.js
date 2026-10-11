/* ==========================================================================
 * m0132.$i   [m0132_0xc24a4bb.js @ 108797]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var $i = {
  event: "agent.offer",
  restoreArgument: (e, t) => W(["provider"], e, t),
  checkArgument: (e, t) => {
    if (typeof e.agent !== "string") return "no { agent }";
    if (e.agent !== t.agent) return "a changed agent (the hooks beneath match on it)";
    if (typeof e.description !== "string") return "no { description }";
    if (e.source !== t.source) return "a changed source (the hooks beneath match on it)";
    return $n(e.provider) === $n(t.provider) ? void 0 : "a changed provider (pinned: who provides the agent is a fact)";
  },
  check: C(e => typeof e.isOffered === "boolean" ? void 0 : "no { isOffered } (a boolean)")
};
