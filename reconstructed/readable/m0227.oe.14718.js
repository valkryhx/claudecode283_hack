/* ==============================================================================
 * m0227.oe   [m0227_0xc482590.js @ 14718]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0227_0xc482590.js  字符偏移 14718
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
  }
}
