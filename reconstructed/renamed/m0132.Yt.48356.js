/* ==========================================================================
 * m0132.Yt   [m0132_0xc24a4bb.js @ 48356]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Yt(e, t) {
  let {
    label: o,
    description: r,
    isHidden: n
  } = e;
  if (!(typeof o === "string" && o !== "")) return "no { label } (a non-empty string)";
  if (typeof n !== "boolean") return "no { isHidden } (a boolean)";
  if (r !== void 0 && typeof r !== "string") return "a description that is not a string";
  let i = o === t.label || o.length <= NS,
    p = r === void 0 || r === t.description || r.length <= NS;
  return i && p ? void 0 : `a label or description over ${NS} characters`;
}
