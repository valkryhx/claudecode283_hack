/* ==============================================================================
 * m0132.zo   [m0132_0xc24a4bb.js @ 36455]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 36455
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function zo(e, t) {
  if (!G(e)) return `an instruction file that is not { path, kind, content } (at ${t})`;
  let {
    path: o,
    kind: r,
    content: n,
    parent: s
  } = e;
  if (typeof o !== "string" || o === "") return `an instruction file without a path (at ${t})`;
  if (!(typeof r === "string" && oOo.some((a) => a === r))) return `an instruction file whose kind is not one of ${oOo.join(", ")} (${o})`;
  if (typeof n !== "string") return `an instruction file whose content is not a string (${o})`;
  return s === void 0 || typeof s === "string" ? void 0 : `an instruction file whose parent is not a string (${o})`
}
