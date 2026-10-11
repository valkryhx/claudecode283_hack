/* ==========================================================================
 * m1569.Er   [m1569_0xdceb889.js @ 14127]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
    w = J(n);
  } catch {
    return null;
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
  };
}
