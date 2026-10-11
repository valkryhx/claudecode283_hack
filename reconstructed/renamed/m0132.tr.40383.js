/* ==========================================================================
 * m0132.tr   [m0132_0xc24a4bb.js @ 40383]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function tr(e, t, o) {
  let r = new Map();
  for (let i of [t, ...o].flatMap(p => p.blocks)) r.set(i.name, (r.get(i.name) ?? new Set()).add(i.text));
  let n = Array.isArray(e.blocks) ? e.blocks : [],
    s = er(e.instructionFiles);
  return n.filter(G).flatMap(({
    name: i,
    text: p
  }) => {
    let a = r.get(String(i))?.has(String(p)) === !0 || i === "claudeMd" && p === s;
    return typeof p === "string" && !a ? [p] : [];
  }).reduce((i, p) => Math.max(i, p.length), 0);
}
