/* ==============================================================================
 * m0869.ao   [m0869_0xd12567a.js @ 20124]
 * --------------------------------------------------------------------------
 * 作用: journal 行折叠：把 [{type:result|started|failed}] 折成 {results:Map, started:Map, failed:Set}。
 * 标识: e=journal 行数组
 * 原文: claudecode283/modules/m0869_0xd12567a.js  字符偏移 20124
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ao(e) {
  let r = new Map,
    s = new Map,
    g = new Set;
  for (let f of e)
    if (f.type === "result") r.set(f.key, f);
    else if (f.type === "started") {
    let w = s.get(f.key);
    if (w) w.push(f);
    else s.set(f.key, [f])
  } else if (f.type === "failed") g.add(f.key);
  return {
    results: r,
    started: s,
    failed: g
  }
}
