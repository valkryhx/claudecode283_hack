/* ==========================================================================
 * m1569.Kt   [m1569_0xdceb889.js @ 53337]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function Kt(e, r) {
  let n = new TextDecoder("utf-8", {
      ignoreBOM: !0
    }),
    s = [],
    a;
  for (;;) {
    let w = await e.readRecords(r, {
      ...(a !== void 0 && {
        fromSeq: a
      }),
      maxBytes: Bt
    });
    if (!w.ok) {
      if (w.error.code === "NotFound") return;
      throw t(`world journal read failed: ${rt(w.error)}`, {
        level: "warn"
      }), Error("world journal read failed", {
        cause: w.error
      });
    }
    for (let g of w.value.items) {
      let k = n.decode(g.data);
      s.push(k.endsWith(`
`) ? k.slice(0, -1) : k);
    }
    let h = w.value.nextSeq;
    if (h === void 0) return s;
    if (a !== void 0 && h <= a) throw Error("world journal read cursor failed to advance");
    a = h;
  }
}
