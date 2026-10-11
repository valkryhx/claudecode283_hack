/* ==========================================================================
 * m0132.Yo   [m0132_0xc24a4bb.js @ 37373]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Yo(e) {
  let {
      blocks: t
    } = e,
    o = yt(e.instructionFiles);
  if (o !== void 0) return o;
  if (!Array.isArray(t)) return "no { blocks } (a list of { name, text })";
  if (t.length > Gt) return `more than ${Gt} blocks`;
  let r = new Set();
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
    r.add(p);
  }
  return;
}
