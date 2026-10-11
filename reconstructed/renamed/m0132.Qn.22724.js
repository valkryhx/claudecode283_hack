/* ==========================================================================
 * m0132.Qn   [m0132_0xc24a4bb.js @ 22724]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Qn(e) {
  let {
      plugin: t,
      tier: o,
      event: r,
      ms: n
    } = e,
    s = `${r} ${t}`,
    i = Xe.get(s),
    p = `${t} (${o}) answered ${r} without next()`;
  if (i !== void 0) {
    i.count += 1, i.lastMs = n;
    return;
  }
  kc().log(`${p} in ${n.toFixed(1)}ms; nothing beneath it ran for this dispatch`);
  let a = setTimeout(qn, $t, s, p);
  a.unref(), Xe.set(s, {
    count: 0,
    lastMs: n,
    timer: a
  });
}
