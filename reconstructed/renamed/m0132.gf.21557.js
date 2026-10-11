/* ==========================================================================
 * m0132.gf   [m0132_0xc24a4bb.js @ 21557]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var gf = ({
  bottom: e,
  index: t,
  event: o
}) => async (r, n, {
  run: s,
  floors: i
}) => {
  let p = performance.now(),
    a = "rejected",
    f;
  try {
    return f = await e(r, n, i), a = "returned", f;
  } finally {
    Ve(s, {
      index: t,
      plugin: Ate,
      tier: "core",
      event: o,
      outcome: a,
      ms: performance.now() - p,
      received: r,
      returned: f
    });
  }
};
