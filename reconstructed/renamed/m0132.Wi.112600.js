/* ==========================================================================
 * m0132.Wi   [m0132_0xc24a4bb.js @ 112600]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Wi = {
  event: "tool.check",
  restoreArgument: (e, t) => W(["tool_use_id"], e, t),
  checkArgument: (e, t) => wt({
    keys: yn,
    passed: e,
    received: t,
    explanation: "the tool, its input and the call are the question and are pinned; a hook answers { decision }, it does not ask about another call"
  }),
  settle: dn,
  check: C(e => {
    let {
      decision: t,
      reason: o,
      rule: r
    } = e;
    if (!fn(t)) return `no { decision } (one of ${sOo.join(", ")})`;
    return [o, r].every(s => s === void 0 || typeof s === "string") ? void 0 : "a reason or rule that is not a string";
  })
};
