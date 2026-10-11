/* ==========================================================================
 * m1569.Gr   [m1569_0xdceb889.js @ 52907]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Gr(e) {
  let r = [],
    n = new Set(),
    s = 0;
  for (let a of e) {
    if (!a) continue;
    let w;
    try {
      w = Vo(a);
    } catch {
      s++;
      continue;
    }
    let h = Ut().safeParse(w);
    if (!h.success) {
      s++;
      continue;
    }
    if (h.data.k === "put") {
      if (n.has(h.data.addr)) {
        s++;
        continue;
      }
      n.add(h.data.addr);
    }
    r.push(h.data);
  }
  if (s > 0) t(`world journal: skipped ${s} malformed or invalid line(s)`, {
    level: "warn"
  });
  return {
    lines: r,
    skipped: s
  };
}
