/* ==============================================================================
 * m0862.D   [m0862_0xd11f1fb.js @ 2149]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 2149
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function D(e, n) {
  let t = e[n],
    r;
  if (t === "'" || t === '"') r = _(e, n);
  else {
    let a = g(e, n);
    r = a === void 0 ? void 0 : {
      value: a,
      end: n + a.length
    }
  }
  if (!r || y.has(r.value)) return;
  let o = d(e, r.end);
  if (e[o] !== ":") return;
  let i = x(e, d(e, o + 1));
  return i && {
    value: [r.value, i.value],
    end: i.end
  }
}
