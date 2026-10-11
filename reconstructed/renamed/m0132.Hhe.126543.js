/* ==========================================================================
 * m0132.Hhe   [m0132_0xc24a4bb.js @ 126543]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function* Hhe(e, t = () => {}) {
  let o = !1;
  async function r() {
    try {
      return await e.next();
    } catch (n) {
      throw o = !0, n;
    }
  }
  try {
    while (!0) {
      let n = await r();
      if (n.done === !0) return o = !0, n.value;
      t(n.value), yield n.value;
    }
  } finally {
    if (!o) await e.return?.(void 0);
  }
}
