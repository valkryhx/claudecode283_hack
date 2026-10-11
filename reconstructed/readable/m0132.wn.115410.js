/* ==============================================================================
 * m0132.wn   [m0132_0xc24a4bb.js @ 115410]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 115410
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function wn() {
  let e = new Map,
    t = new Set,
    o = new Set;

  function r(s) {
    if (e.get(s) !== "engine") return "kind engine but a ref this link never pulled as an engine chunk (pass engine chunks on unchanged)";
    if (t.has(s)) return "kind engine but a ref already passed on (pass each on once)";
    t.add(s);
    return
  }

  function n(s) {
    if (o.has(s)) return `kind tool but an id this step already used (${s})`;
    o.add(s);
    return
  }
  return {
    pulled: (s) => {
      let i = lo(s);
      if (i !== void 0) e.set(i[0], i[1])
    },
    yielded: (s, i) => {
      let p = i ? void 0 : hn(s);
      if (p !== void 0) return p;
      let a = lo(s);
      if (a?.[1] === "engine") return r(a[0]);
      let f = kn(s);
      return f === void 0 ? void 0 : n(f)
    }
  }
}
