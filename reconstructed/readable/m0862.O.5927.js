/* ==============================================================================
 * m0862.O   [m0862_0xd11f1fb.js @ 5927]
 * --------------------------------------------------------------------------
 * 作用: meta 纯字面量递归求值器：只接受 Literal / Array(禁稀疏禁spread) / Object / TemplateLiteral(禁插值) / 负数字面量。
 * 标识: e=AST 节点
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 5927
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function O(e) {
  switch (e.type) {
    case "Literal":
      return e.value;
    case "ArrayExpression":
      return e.elements.map((t) => {
        if (t === null) throw Error("sparse arrays not allowed");
        if (t.type === "SpreadElement") throw Error("spread not allowed in meta");
        return O(t)
      });
    case "ObjectExpression":
      return j(e);
    case "TemplateLiteral": {
      let n = e;
      if (n.expressions.length > 0) throw Error("template interpolation not allowed in meta");
      return n.quasis.map((t) => t.value.cooked ?? "").join("")
    }
    case "UnaryExpression": {
      let n = e;
      if (n.operator === "-" && n.argument.type === "Literal" && typeof n.argument.value === "number") return -n.argument.value;
      throw Error("only negative-number unary allowed in meta")
    }
    default:
      throw Error(`non-literal node type in meta: ${e.type}`)
  }
}
