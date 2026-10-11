/* ==============================================================================
 * m0132.dr   [m0132_0xc24a4bb.js @ 44975]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 44975
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function dr(e) {
  let t = e === void 0;
  if (!G(e)) return t ? void 0 : "a decision that is not an object";
  let o = e;
  if (o.behavior === "deny") return (o.message === void 0 || typeof o.message === "string") && (o.interrupt === void 0 || typeof o.interrupt === "boolean") ? void 0 : "a deny decision whose message or interrupt has the wrong type";
  if (o.behavior !== "allow") return "a decision whose behavior is not allow or deny";
  if (!(o.updatedInput === void 0 || G(o.updatedInput))) return "an allow decision whose updatedInput is not an object";
  let {
    updatedPermissions: n
  } = o, s = Array.isArray(n);
  return s || n === void 0 ? (s ? n : []).map(lr).find((a) => a !== void 0) : "an allow decision whose updatedPermissions is not a list"
}
