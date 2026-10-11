/* ==========================================================================
 * m0227.bin   [m0227_0xc482590.js @ 6251]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function bin({
  kind: e,
  at: n,
  content: r,
  attributes: s,
  children: E
}) {
  if (!N.test(e)) throw new P(`invalid poll event kind: ${JSON.stringify(e)}`, "invalid poll event kind");
  let l = "";
  for (let [p, _] of Object.entries(s ?? {})) {
    if (p === "kind" || p === "at" || !M.has(p) && A.get(e)?.has(p) !== !0) throw new P(`invalid poll event attribute: ${p}`, "invalid poll event attribute");
    l += ` ${p}="${F(_)}"`;
  }
  let g = j0t(r);
  if (E !== void 0) {
    if (r !== "") throw new P("poll event: pass content or children, not both", "poll event: content or children");
    let p = K.get(e);
    g = `
`;
    for (let {
      tag: _,
      text: v
    } of E) {
      if (p === void 0 || !p.has(_)) throw new P(`invalid poll event child: <${_}> on kind ${e}`, "invalid poll event child");
      let h = Te(v);
      g += h === "" ? `<${_}/>
` : `<${_}>${h}</${_}>
`;
    }
  }
  return `<event kind="${e}" at="${F(n)}"${l}>${g}</event>`;
}
