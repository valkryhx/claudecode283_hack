/* ==============================================================================
 * m0132.Fe   [m0132_0xc24a4bb.js @ 95204]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 95204
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Fe(e, t) {
  if (e.plugin !== t.plugin) return "a plugin other than the one that drew the element";
  if (typeof e.element !== "string") return "no { element }";
  if (typeof e.component !== "string") return "no { component }";
  if (e.requestId !== t.requestId) return "a requestId other than the instance the element was drawn in";
  if (!HCe(e.surface)) return "no { surface } naming a surface";
  let {
    link: i
  } = e;
  if (t.link === void 0) return i !== void 0 ? "a { link } on a press that had none" : void 0;
  return G(i) && typeof i.href === "string" ? void 0 : "no { link: { href } } on a press that had one"
}
