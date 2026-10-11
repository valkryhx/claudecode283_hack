/* ==========================================================================
 * m0132.Sn   [m0132_0xc24a4bb.js @ 127711]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Sn(e) {
  let t = 0,
    o = 0,
    r = 0;
  e.pause();
  function n() {
    if (t++ === 0) o = performance.now(), e.resume();
  }
  function s() {
    if (--t === 0) r += performance.now() - o, e.pause();
  }
  return {
    async own(i) {
      n();
      try {
        return await mt.run(e, i);
      } finally {
        s();
      }
    },
    async away(i) {
      if (!(t > 0)) return i();
      s();
      try {
        return await i();
      } finally {
        n();
      }
    },
    ms: () => t > 0 ? r + (performance.now() - o) : r
  };
}
