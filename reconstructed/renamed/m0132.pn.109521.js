/* ==========================================================================
 * m0132.pn   [m0132_0xc24a4bb.js @ 109521]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function pn(e, t) {
  let {
    prompt: o,
    model: r,
    cwd: n
  } = e;
  return [["prompt", typeof o === "string" && o.trim() !== "", "no { prompt } (a non-empty string)"], ["description", typeof e.description === "string", "a description that is not a string"], ["subagentType", typeof e.subagentType === "string", "a subagentType that is not a string"], ["model", r === void 0 || typeof r === "string", "a model that is neither a string nor undefined"], ["background", typeof e.background === "boolean", "a background that is not a boolean"], ["cwd", n === void 0 || typeof n === "string" && Hl(n), "a cwd that is not an absolute path"]].find(([i, p]) => !p && e[i] !== t[i])?.[2];
}
