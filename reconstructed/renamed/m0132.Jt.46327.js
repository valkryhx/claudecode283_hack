/* ==========================================================================
 * m0132.Jt   [m0132_0xc24a4bb.js @ 46327]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Jt(e, t) {
  let {
    description: o,
    argumentHint: r,
    isHidden: n
  } = e;
  if (typeof o !== "string") return "no { description } (a string)";
  if (!(r === void 0 || typeof r === "string")) return "an argumentHint that is not a string";
  if (typeof n !== "boolean") return "no { isHidden } (a boolean)";
  let a = o === t.description || o.length <= NS,
    f = r === void 0 || r === t.argumentHint || r.length <= NS;
  return a && f ? void 0 : `a description or argumentHint over ${NS} characters`;
}
