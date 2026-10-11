/* ==========================================================================
 * m0132.Qr   [m0132_0xc24a4bb.js @ 101262]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Qr(e) {
  let t = $e[e],
    o = fe.every(n => t.includes(n)),
    r = t.length === 1;
  return o ? "every surface" : r ? `the ${t[0]} surface only` : `the ${t.slice(0, -1).join(", ")} and ${t.at(-1)} surfaces only`;
}
