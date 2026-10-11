/* ==============================================================================
 * m0132.HVn   [m0132_0xc24a4bb.js @ 101980]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 101980
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function HVn(e) {
  let t = Array.isArray(e) ? e : [e],
    o = t.flatMap((m) => io(m, "component") ?? []),
    r = t.flatMap((m) => io(m, "surface") ?? []),
    n = ot.filter((m) => o.includes(m)),
    s = fe.filter((m) => r.includes(m)),
    i = t.every((m) => en(m).length === 0),
    p = i && n.length > 0 && s.length > 0,
    a = [...ao(o, ot, "component"), ...ao(r, fe, "surface"), ...p ? [n.map((m) => `${m} is raised on ${Qr(m)}`).join(", ") + `; this hook names ${s.join(", ")}`] : []];
  return a.length > 0 ? `${a.join("; ")}${i?", so it never runs":""}` : void 0
}
