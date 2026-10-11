/* ==============================================================================
 * m0862.A   [m0862_0xd11f1fb.js @ 2403]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0862_0xd11f1fb.js  字符偏移 2403
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function A(e, n, t, r) {
  let o = [],
    i = n + 1;
  while (!0) {
    if (i = d(e, i), e[i] === t) return {
      value: o,
      end: i + 1
    };
    if (o.length > 0) {
      if (e[i] !== ",") return;
      if (i = d(e, i + 1), e[i] === t) return {
        value: o,
        end: i + 1
      }
    }
    let a = r(e, i);
    if (!a) return;
    o.push(a.value), i = a.end
  }
}
