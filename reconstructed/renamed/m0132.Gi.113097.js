/* ==========================================================================
 * m0132.Gi   [m0132_0xc24a4bb.js @ 113097]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Gi = {
  event: "tool.describe",
  restoreArgument: (e, t) => W(["provider"], e, t),
  checkArgument: (e, t) => {
    if (typeof e.tool !== "string") return "no { tool }";
    if (e.tool !== t.tool) return "a changed tool (the engine caches the description by it)";
    if ($n(e.provider) !== $n(t.provider)) return "a changed provider (pinned: who provides the tool is a fact)";
    if (!(e.isDeferred === void 0 || typeof e.isDeferred === "boolean")) return "an isDeferred that is not a boolean";
    return typeof e.description === "string" ? void 0 : "no { description }";
  },
  measureArgument: (e, t) => te(e.description, t.description),
  restoreResult: (e, t, o) => {
    if (e.isDeferred !== void 0) return e;
    let n = t.at(-1)?.isDeferred ?? o.isDeferred;
    return n === void 0 ? e : {
      ...e,
      isDeferred: n
    };
  },
  check: C(e => {
    if (typeof e.description !== "string") return "no { description } (a string)";
    return e.isDeferred === void 0 || typeof e.isDeferred === "boolean" ? void 0 : "an isDeferred that is not a boolean";
  }),
  measure: Ze("description")
};
