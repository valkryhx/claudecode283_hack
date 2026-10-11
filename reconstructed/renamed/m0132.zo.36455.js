/* ==========================================================================
 * m0132.zo   [m0132_0xc24a4bb.js @ 36455]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function zo(e, t) {
  if (!G(e)) return `an instruction file that is not { path, kind, content } (at ${t})`;
  let {
    path: o,
    kind: r,
    content: n,
    parent: s
  } = e;
  if (typeof o !== "string" || o === "") return `an instruction file without a path (at ${t})`;
  if (!(typeof r === "string" && oOo.some(a => a === r))) return `an instruction file whose kind is not one of ${oOo.join(", ")} (${o})`;
  if (typeof n !== "string") return `an instruction file whose content is not a string (${o})`;
  return s === void 0 || typeof s === "string" ? void 0 : `an instruction file whose parent is not a string (${o})`;
}
