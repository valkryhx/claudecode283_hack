/* ==========================================================================
 * m1569.dr   [m1569_0xdceb889.js @ 16513]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
dr = f(() => ut({
  topic: o().min(1)
}).refine(e => !Object.keys(e).some(r => Dr.has(r)), {
  message: "a fact may not carry a reserved key"
}))
