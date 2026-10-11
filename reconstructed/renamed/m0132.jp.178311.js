/* ==========================================================================
 * m0132.jp   [m0132_0xc24a4bb.js @ 178311]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var jp = (e, t) => o => {
  if (o === void 0 || o === null) return;
  if (!dOo(o)) throw new De(`${e}: options.signal must be an AbortSignal`);
  let r = new AbortController(),
    n = t.relaySignal(o, k0((s, i) => {
      let p = new De(i);
      p.name = s, r.abort(p);
    }));
  return {
    signal: r.signal,
    unlink: n
  };
};
