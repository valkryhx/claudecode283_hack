/* ==========================================================================
 * m0132.jy   [m0132_0xc24a4bb.js @ 150550]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function jy(e, t, o) {
  if (typeof t !== "object" || !t) throw new De(`${e.pluginName}: engine.create must return $ ({ ...await next(e), <noun>: { <event>() {} } }), not ${typeof t}`);
  let r = Object.create(null);
  for (let [n, s] of Object.entries(t)) {
    if (e.identity.has(n)) {
      if (s === e.slots[n]) continue;
      throw new De(`${e.pluginName}: engine.create returned $.${n} changed; it is this plugin's identity, not a noun`);
    }
    let p = typeof s === "object" && s !== null ? o.get(s) : void 0;
    if (p && p.name === n) {
      r[n] = p.descriptor;
      continue;
    }
    r[n] = {
      owner: e.pluginName,
      methods: ba(e.pluginName, n, s)
    }, e.own.set(n, s);
  }
  return r;
}
