/* ==========================================================================
 * m0132.Xi   [m0132_0xc24a4bb.js @ 116013]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Xi = {
  ...Wt({
    event: "turn.complete",
    check: ({
      text: e
    }, t) => typeof e === "string" ? rr(e, t.answer) : "no { text }",
    checkArgument: (e, t) => {
      let o = e.answer;
      if (typeof o !== "string") return "no { answer }";
      return e.agentId === t.agentId ? rr(o, t.answer) : "a changed agentId (the loop the turn ran in is pinned)";
    }
  }),
  restoreArgument: (e, t) => W(["agentId"], e, t)
};
