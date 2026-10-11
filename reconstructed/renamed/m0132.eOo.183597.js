/* ==========================================================================
 * m0132.eOo   [m0132_0xc24a4bb.js @ 183597]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function eOo(e, t, o) {
  if (!e) return o();
  let r = e.length - yNt,
    n = Array.from({
      length: r
    }, (s, i) => Atomics.load(e, yNt + i));
  for (let s = 0; s < r; s++) Atomics.store(e, yNt + s, t[s] ?? 0);
  try {
    return o();
  } finally {
    for (let [s, i] of n.entries()) Atomics.store(e, yNt + s, i);
  }
}
