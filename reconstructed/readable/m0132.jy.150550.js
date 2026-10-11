/* ==============================================================================
 * m0132.jy   [m0132_0xc24a4bb.js @ 150550]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 150550
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function jy(e, t, o) {
  if (typeof t !== "object" || !t) throw new De(`${e.pluginName}: engine.create must return $ ({ ...await next(e), <noun>: { <event>() {} } }), not ${typeof t}`);
  let r = Object.create(null);
  for (let [n, s] of Object.entries(t)) {
    if (e.identity.has(n)) {
      if (s === e.slots[n]) continue;
      throw new De(`${e.pluginName}: engine.create returned $.${n} changed; it is this plugin's identity, not a noun`)
    }
    let p = typeof s === "object" && s !== null ? o.get(s) : void 0;
    if (p && p.name === n) {
      r[n] = p.descriptor;
      continue
    }
    r[n] = {
      owner: e.pluginName,
      methods: ba(e.pluginName, n, s)
    }, e.own.set(n, s)
  }
  return r
}
