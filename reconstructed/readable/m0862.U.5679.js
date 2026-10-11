/* ==============================================================================
 * m0862.U   [m0862_0xd11f1fb.js @ 5679]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 5679
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function U(e) {
  let n = e.declaration;
  if (!n || n.type !== "VariableDeclaration") return !1;
  if (n.kind !== "const" || n.declarations.length !== 1) return !1;
  let t = n.declarations[0];
  return t.id.type === "Identifier" && t.id.name === "meta" && t.init?.type === "ObjectExpression"
}
