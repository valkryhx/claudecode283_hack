/* ==============================================================================
 * m1569.Kt   [m1569_0xdceb889.js @ 53337]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 53337
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function Kt(e, r) {
  let n = new TextDecoder("utf-8", {
      ignoreBOM: !0
    }),
    s = [],
    a;
  for (;;) {
    let w = await e.readRecords(r, {
      ...a !== void 0 && {
        fromSeq: a
      },
      maxBytes: Bt
    });
    if (!w.ok) {
      if (w.error.code === "NotFound") return;
      throw t(`world journal read failed: ${rt(w.error)}`, {
        level: "warn"
      }), Error("world journal read failed", {
        cause: w.error
      })
    }
    for (let g of w.value.items) {
      let k = n.decode(g.data);
      s.push(k.endsWith(`
`) ? k.slice(0, -1) : k)
    }
    let h = w.value.nextSeq;
    if (h === void 0) return s;
    if (a !== void 0 && h <= a) throw Error("world journal read cursor failed to advance");
    a = h
  }
}
