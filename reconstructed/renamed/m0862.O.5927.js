/* ==========================================================================
 * m0862.O  ->  evalPureLiteral   [m0862_0xd11f1fb.js @ 5927]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function evalPureLiteral(node) {
  switch (node.type) {
    case "Literal":
      return node.value;
    case "ArrayExpression":
      return node.elements.map(t => {
        if (t === null) throw Error("sparse arrays not allowed");
        if (t.type === "SpreadElement") throw Error("spread not allowed in meta");
        return evalPureLiteral(t);
      });
    case "ObjectExpression":
      return evalObjectLiteral(node);
    case "TemplateLiteral":
      {
        let n = node;
        if (n.expressions.length > 0) throw Error("template interpolation not allowed in meta");
        return n.quasis.map(t => t.value.cooked ?? "").join("");
      }
    case "UnaryExpression":
      {
        let n = node;
        if (n.operator === "-" && n.argument.type === "Literal" && typeof n.argument.value === "number") return -n.argument.value;
        throw Error("only negative-number unary allowed in meta");
      }
    default:
      throw Error(`non-literal node type in meta: ${node.type}`);
  }
}
