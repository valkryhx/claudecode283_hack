/* ==============================================================================
 * m0132.Yo   [m0132_0xc24a4bb.js @ 37373]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 37373
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Yo(e) {
  let {
    blocks: t
  } = e, o = yt(e.instructionFiles);
  if (o !== void 0) return o;
  if (!Array.isArray(t)) return "no { blocks } (a list of { name, text })";
  if (t.length > Gt) return `more than ${Gt} blocks`;
  let r = new Set;
  for (let n = 0; n < t.length; n += 1) {
    let s = t[n];
    if (!(Object.hasOwn(t, n) && G(s))) return `a block that is not { name, text } (at ${n})`;
    let {
      name: p,
      text: a
    } = s;
    if (typeof p !== "string" || p === "") return `a block without a name (at ${n})`;
    if (typeof a !== "string") return `a block whose text is not a string (${p})`;
    if (r.has(p)) return `two blocks named ${p} (the engine keys the context by name)`;
    r.add(p)
  }
  return
}
