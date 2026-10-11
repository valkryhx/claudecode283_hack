/* ==========================================================================
 * m0132.Ni   [m0132_0xc24a4bb.js @ 107549]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Ni = {
  event: "session.send",
  restoreArgument: (e, t) => W(["agentId"], e, t),
  checkArgument: (e, t) => {
    if ($n(e.origin) !== $n(t.origin)) return "a changed origin (the engine set it; next(e) passes it on)";
    if (e.agentId !== t.agentId) return "a changed agentId (the loop sending; next(e) passes it on)";
    if (!(typeof e.to === "string" && e.to.trim() !== "")) return "no { to } (a non-empty string)";
    return typeof e.text === "string" && e.text.trim() !== "" ? void 0 : "no { text } (a non-empty string)";
  },
  check: C(e => {
    let {
      isDelivered: t,
      reason: o
    } = e;
    if (t === !0) return;
    if (t !== !1) return "no { isDelivered } (true or false)";
    return typeof o === "string" && o !== "" ? void 0 : "isDelivered false without a reason (a non-empty string)";
  })
};
