/* ==============================================================================
 * m0862.x   [m0862_0xd11f1fb.js @ 1653]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 1653
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function x(e, n) {
  switch (e[n]) {
    case "{":
      return P(e, n);
    case "[":
      return A(e, n, "]", x);
    case "'":
    case '"':
    case "`":
      return _(e, n);
    case "-": {
      let r = R(e, d(e, n + 1));
      return r && {
        value: -r.value,
        end: r.end
      }
    }
    default:
      break
  }
  let t = R(e, n);
  if (t) return t;
  switch (g(e, n)) {
    case "true":
      return {
        value: !0, end: n + 4
      };
    case "false":
      return {
        value: !1, end: n + 5
      };
    case "null":
      return {
        value: null, end: n + 4
      };
    default:
      return
  }
}
