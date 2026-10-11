/* ==========================================================================
 * m0132.YIo   [m0132_0xc24a4bb.js @ 175983]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function* YIo(e) {
  let t = !1;
  try {
    while (!0) {
      let o = await e.next().catch(r => {
        throw t = !0, r;
      });
      if (o.done === !0) return t = !0, o.value;
      yield o.value;
    }
  } finally {
    if (!t) await e.return().catch(() => {
      return;
    });
  }
}
