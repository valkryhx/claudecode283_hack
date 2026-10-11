/* ==========================================================================
 * m0862.U   [m0862_0xd11f1fb.js @ 5679]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function U(e) {
  let n = e.declaration;
  if (!n || n.type !== "VariableDeclaration") return !1;
  if (n.kind !== "const" || n.declarations.length !== 1) return !1;
  let t = n.declarations[0];
  return t.id.type === "Identifier" && t.id.name === "meta" && t.init?.type === "ObjectExpression";
}
