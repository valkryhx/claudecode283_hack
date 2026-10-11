/* ==========================================================================
 * m0869.ao  ->  foldJournalLines   [m0869_0xd12567a.js @ 20124]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function foldJournalLines(lines) {
  let results = new Map(),
    started = new Map(),
    failed = new Set();
  for (let f of lines) if (f.type === "result") results.set(f.key, f);else if (f.type === "started") {
    let w = started.get(f.key);
    if (w) w.push(f);else started.set(f.key, [f]);
  } else if (f.type === "failed") failed.add(f.key);
  return {
    results: results,
    started: started,
    failed: failed
  };
}
