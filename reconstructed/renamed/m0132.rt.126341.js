/* ==========================================================================
 * m0132.rt   [m0132_0xc24a4bb.js @ 126341]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function rt(e) {
  let t = new AbortController(),
    o = Promise.resolve().then(() => e.return?.(void 0)).then(() => {
      return;
    }, () => {
      return;
    });
  try {
    await Promise.race([o, Q(Mhe, t.signal, {
      unref: !0
    })]);
  } finally {
    t.abort();
  }
}
