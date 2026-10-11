/* ==========================================================================
 * m0862.x   [m0862_0xd11f1fb.js @ 1653]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    case "-":
      {
        let r = R(e, d(e, n + 1));
        return r && {
          value: -r.value,
          end: r.end
        };
      }
    default:
      break;
  }
  let t = R(e, n);
  if (t) return t;
  switch (g(e, n)) {
    case "true":
      return {
        value: !0,
        end: n + 4
      };
    case "false":
      return {
        value: !1,
        end: n + 5
      };
    case "null":
      return {
        value: null,
        end: n + 4
      };
    default:
      return;
  }
}
