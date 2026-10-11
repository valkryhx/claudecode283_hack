/* ==============================================================================
 * m0132.Qn   [m0132_0xc24a4bb.js @ 22724]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 22724
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Qn(e) {
  let {
    plugin: t,
    tier: o,
    event: r,
    ms: n
  } = e, s = `${r} ${t}`, i = Xe.get(s), p = `${t} (${o}) answered ${r} without next()`;
  if (i !== void 0) {
    i.count += 1, i.lastMs = n;
    return
  }
  kc().log(`${p} in ${n.toFixed(1)}ms; nothing beneath it ran for this dispatch`);
  let a = setTimeout(qn, $t, s, p);
  a.unref(), Xe.set(s, {
    count: 0,
    lastMs: n,
    timer: a
  })
}
