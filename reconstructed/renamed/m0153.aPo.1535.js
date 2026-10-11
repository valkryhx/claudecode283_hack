/* ==========================================================================
 * m0153.aPo   [m0153_0xc2a414f.js @ 1535]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function aPo(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:",
    r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}
