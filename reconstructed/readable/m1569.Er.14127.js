/* ==============================================================================
 * m1569.Er   [m1569_0xdceb889.js @ 14127]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 14127
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Er(e, {
  apply: r
}) {
  if (!G(e)) return null;
  let n = e.args;
  if (typeof n !== "string") return null;
  let a = n.trimStart()[0];
  if (a !== "{" && a !== "[") return null;
  let w;
  try {
    w = J(n)
  } catch {
    return null
  }
  if (w === null || typeof w !== "object") return null;
  let h = typeof e.name === "string" ? "_named" : "",
    g = Array.isArray(w) ? "args_json_string_to_array" : "args_json_string_to_object";
  if (!r) return {
    input: e,
    shapeClass: `${g}${h}_detect_only`
  };
  return {
    input: {
      ...e,
      args: w
    },
    shapeClass: `${g}${h}`
  }
}
