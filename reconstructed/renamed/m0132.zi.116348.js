/* ==========================================================================
 * m0132.zi   [m0132_0xc24a4bb.js @ 116348]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var zi = {
  event: "turn.step",
  chunkChecker: wn,
  restoreArgument: Me(["agentId"]),
  checkArgument: (e, t) => {
    let o = pe(["turnId", "index", "messageCount", "agentId"], e, t);
    if (o !== void 0) return o;
    let {
      model: r,
      effort: n
    } = e;
    if (!(typeof r === "string" && r.trim() !== "")) return "no { model } (a non-empty model name)";
    let i = !1;
    return n === void 0 || n === t.effort || typeof n === "number" && i || wd.some(a => a === n) ? void 0 : `an effort that is not one of ${wd.join(", ")}` + (i ? " or a number" : " (a number is internal-only)");
  },
  check: C((e, t) => {
    if (!(e.turnId === t.turnId && e.index === t.index)) return "a { turnId, index } other than the step it answers for";
    return typeof e.answer === "string" && Array.isArray(e.toolUses) ? void 0 : "no { answer, toolUses }";
  })
};
