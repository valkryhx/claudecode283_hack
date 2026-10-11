/* ==============================================================================
 * m0132.tr   [m0132_0xc24a4bb.js @ 40383]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 40383
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function tr(e, t, o) {
  let r = new Map;
  for (let i of [t, ...o].flatMap((p) => p.blocks)) r.set(i.name, (r.get(i.name) ?? new Set).add(i.text));
  let n = Array.isArray(e.blocks) ? e.blocks : [],
    s = er(e.instructionFiles);
  return n.filter(G).flatMap(({
    name: i,
    text: p
  }) => {
    let a = r.get(String(i))?.has(String(p)) === !0 || i === "claudeMd" && p === s;
    return typeof p === "string" && !a ? [p] : []
  }).reduce((i, p) => Math.max(i, p.length), 0)
}
