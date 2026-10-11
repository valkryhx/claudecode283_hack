/* ==========================================================================
 * m1569.tt   [m1569_0xdceb889.js @ 52319]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function tt(e, r) {
  let n = Qr(e);
  if (H() && r !== void 0 && n !== void 0) {
    let g = await Kt(r, n);
    if (g === void 0) return {
      lines: [],
      skipped: 0
    };
    let k = Gr(g),
      R = await r.statMeta(n);
    if (!R.ok) throw t(`world journal stat failed: ${rt(R.error)}`, {
      level: "warn"
    }), Error("world journal stat failed", {
      cause: R.error
    });
    return (R.value.storedBytes ?? R.value.size) > R.value.size ? {
      lines: k.lines,
      skipped: k.skipped + 1
    } : k;
  }
  let s;
  try {
    s = await Vt(e, "utf8");
  } catch (g) {
    if (B(g)) return {
      lines: [],
      skipped: 0
    };
    throw g;
  }
  let a = s.split(`
`),
    w = s.length > 0 && !s.endsWith(`
`);
  if (w) a.pop();
  let h = Gr(a);
  return w ? {
    lines: h.lines,
    skipped: h.skipped + 1
  } : h;
}
