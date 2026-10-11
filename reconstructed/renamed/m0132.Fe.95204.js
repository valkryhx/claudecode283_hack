/* ==========================================================================
 * m0132.Fe   [m0132_0xc24a4bb.js @ 95204]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  return G(i) && typeof i.href === "string" ? void 0 : "no { link: { href } } on a press that had one";
}
