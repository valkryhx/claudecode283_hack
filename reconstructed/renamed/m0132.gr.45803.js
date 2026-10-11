/* ==========================================================================
 * m0132.gr   [m0132_0xc24a4bb.js @ 45803]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var gr = e => [...["block", "stopReason", "sessionTitle", "initialUserMessage", "displayContent", "permissionDecisionReason", "worktreePath"].filter(t => e[t] !== void 0 && typeof e[t] !== "string"), ...["preventContinuation", "suppressOriginalPrompt", "reloadSkills", "retry"].filter(t => e[t] !== void 0 && e[t] !== !0), ...["additionalContext", "watchPaths"].filter(t => e[t] !== void 0 && !vNt(e[t]))];
