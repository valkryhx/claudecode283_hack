/* ==============================================================================
 * m0571.G7r   [m0571_0xcddb07e.js @ 1274]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0571_0xcddb07e.js  字符偏移 1274
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
      return
    }
    await y(l, b(i), {
      encoding: "utf8",
      mode: 384
    })
  } catch (i) {
    t(`Failed to write workflow snapshot ${r}: ${i instanceof Error?i.message:i}`)
  }
}
