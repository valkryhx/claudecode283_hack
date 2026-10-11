/* ==============================================================================
 * m1460.Sl   [m1460_0xd973957.js @ 16015]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 16015
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function Sl(o, l, {
  indent: a,
  width: u,
  maxLines: d
}) {
  let f = d,
    h = 0,
    x = 0,
    y = `${a}  `;
  for (let A of l) {
    if (f <= 0) {
      h += A.lineCount;
      continue
    }
    let k = Me(A.key),
      C = `${a}${k}: `;
    if (!(A.lineCount === 1 && A.truncatedChars === 0 && ie(C) + ie(Me(A.head)) <= u) && ie(C) > Math.floor(u / 2)) {
      if (o.push([{
          text: ot(`${a}${k}:`, u),
          dimColor: !0
        }]), f--, C = y, f <= 0) {
        h += A.lineCount;
        continue
      }
    }
    let L = Ms(o, A, {
      firstPrefix: C,
      restPrefix: y,
      width: u,
      maxLines: f,
      color: void 0,
      reportHidden: !1
    });
    f -= L.lines, h += L.hiddenLines, x += L.hiddenChars
  }
  Rs(o, a, u, h, x)
}
