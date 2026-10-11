/* ==============================================================================
 * m1569.Ct   [m1569_0xdceb889.js @ 30914]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 30914
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Ct(e) {
  if (e === void 0 || e === null) return !1;
  if (typeof e !== "object" || Array.isArray(e)) throw TypeError("placement options must be an object: {top: true} or nothing");
  let r = e;
  if (Object.keys(r).some((n) => n !== "top")) throw TypeError("unknown placement option \u2014 the only one is top (a boolean)");
  if (r.top !== void 0 && typeof r.top !== "boolean") throw TypeError("placement option top must be a boolean");
  return r.top === !0
}
