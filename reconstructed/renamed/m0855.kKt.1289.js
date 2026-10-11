/* ==========================================================================
 * m0855.kKt   [m0855_0xd10e439.js @ 1289]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function kKt() {
  let e = it(),
    t = fx(e),
    r = Ple(e);
  return `Usage: /effort [${r.join("|")}${t ? "|ultracode" : ""}|auto]

Effort levels:
` + r.map(n => `- ${n}: ${U[n]}
`).join("") + (t ? `- ultracode: xhigh + dynamic workflow orchestration (this session only)
` : "") + "- auto: Use the default effort level for your model";
}
