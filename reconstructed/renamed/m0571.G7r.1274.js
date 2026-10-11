/* ==========================================================================
 * m0571.G7r   [m0571_0xcddb07e.js @ 1274]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function G7r(r, a, n) {
  try {
    let i = {
        runId: r,
        timestamp: new Date().toISOString(),
        ...a
      },
      l = P(r),
      s = H() && n ? ETn() : void 0,
      o = Y();
    if (await g(u(l), {
      recursive: !0,
      mode: 448
    }), H() && n && s !== void 0 && jn(`${r}.json`)) {
      let e = await n.write(W(s, o, r), b(i), {
        publishDiscipline: "inPlace",
        mode: 384
      });
      if (!e.ok) t(`Failed to write workflow snapshot ${r}: ${e.error.code}`);
      return;
    }
    await y(l, b(i), {
      encoding: "utf8",
      mode: 384
    });
  } catch (i) {
    t(`Failed to write workflow snapshot ${r}: ${i instanceof Error ? i.message : i}`);
  }
}
