/* ==========================================================================
 * m0132.HVn   [m0132_0xc24a4bb.js @ 101980]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function HVn(e) {
  let t = Array.isArray(e) ? e : [e],
    o = t.flatMap(m => io(m, "component") ?? []),
    r = t.flatMap(m => io(m, "surface") ?? []),
    n = ot.filter(m => o.includes(m)),
    s = fe.filter(m => r.includes(m)),
    i = t.every(m => en(m).length === 0),
    p = i && n.length > 0 && s.length > 0,
    a = [...ao(o, ot, "component"), ...ao(r, fe, "surface"), ...(p ? [n.map(m => `${m} is raised on ${Qr(m)}`).join(", ") + `; this hook names ${s.join(", ")}`] : [])];
  return a.length > 0 ? `${a.join("; ")}${i ? ", so it never runs" : ""}` : void 0;
}
