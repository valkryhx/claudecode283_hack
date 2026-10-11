/* ==========================================================================
 * m0869.Ur   [m0869_0xd12567a.js @ 36093]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
Ur = `Workflow agent() call cap reached (${xo}). This usually means a loop using budget.remaining() never terminates because ` + "no token budget was set \u2014 remaining() returns Infinity when budget.total is null. " + "Add a hard iteration cap to the loop, or pass a token budget."
