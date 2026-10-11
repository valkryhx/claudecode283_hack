/* ==========================================================================
 * m0132.ca   [m0132_0xc24a4bb.js @ 134135]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var ca = (e, t, o) => (r, n, {
  run: s,
  floors: i
}) => u1(async function* () {
  let p = performance.now(),
    a = "rejected",
    f,
    m = 0;
  try {
    return f = yield* Hhe(e(r, n, i), () => {
      m += 1;
    }), a = "returned", f;
  } finally {
    Ve(s, {
      index: t,
      plugin: Ate,
      tier: "core",
      event: o,
      outcome: a,
      ms: performance.now() - p,
      chunks: m,
      received: r,
      returned: f
    });
  }
});
