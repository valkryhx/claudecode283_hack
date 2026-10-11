/* ==============================================================================
 * m0862._   [m0862_0xd11f1fb.js @ 2768]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 2768
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function _(e, n) {
  let t = e[n],
    r = t === "`",
    o = "",
    i = n + 1,
    a = i;
  while (a < e.length) {
    let s = e[a];
    if (s === t) return {
      value: o + e.slice(i, a),
      end: a + 1
    };
    if (s === "\\") {
      let l = F(e, a);
      if (!l) return;
      o += e.slice(i, a) + l.value, a = i = l.end
    } else if (r ? s === "$" && e[a + 1] === "{" : s === `
` || s === "\r") return;
    else if (r && s === "\r") o += `${e.slice(i,a)}
`, a = i = a + (e[a + 1] === `
` ? 2 : 1);
    else a++
  }
  return
}
