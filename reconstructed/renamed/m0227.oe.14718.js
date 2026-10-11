/* ==========================================================================
 * m0227.oe   [m0227_0xc482590.js @ 14718]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function oe(e) {
  if (S(e, "type") !== "object") return {
    ok: !1,
    finding: {
      reason: "root_not_object",
      scope: "whole",
      message: "the root schema must declare type: 'object' (the API rejects any other root type for a tool input schema); wrap arrays or primitives in an object property"
    }
  };
  let n = j(e, "", !0, Ne, {
    remaining: Me
  });
  return n === void 0 ? {
    ok: !0
  } : {
    ok: !1,
    finding: n
  };
}
