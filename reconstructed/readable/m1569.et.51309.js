/* ==============================================================================
 * m1569.et   [m1569_0xdceb889.js @ 51309]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 51309
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function et(e, r, n) {
  let s = Qr(r),
    a = !1,
    w = !1,
    h = Promise.resolve(),
    g = (R) => {
      h = h.then(async () => {
        if (w) return;
        if (H() && n !== void 0 && s !== void 0) {
          let I = await n.append(s, [{
            data: hj(R)
          }]);
          if (!I.ok) throw t(`world journal append failed: ${rt(I.error)}`, {
            level: "warn"
          }), Error("world journal append failed", {
            cause: I.error
          });
          return
        }
        if (!a) await Dt(gr(r), {
          recursive: !0
        }), a = !0;
        await Lt(r, hj(R))
      }).catch((I) => {
        w = !0, k(), p("workflow_journal", "append_failed"), t(`world journal append failed; the writer detaches and this session's later rows stay in memory only: ${I}`, {
          level: "warn"
        })
      })
    },
    k = e.subscribe((R) => {
      switch (R.kind) {
        case "put": {
          let {
            addr: I,
            kind: x,
            fact: Z,
            by: F,
            at: O,
            status: K
          } = R.row;
          g({
            k: "put",
            addr: I,
            kind: x,
            fact: Z,
            by: F,
            in: R.row.in,
            at: O,
            status: K
          });
          return
        }
        case "settled": {
          let {
            addr: I,
            status: x,
            value: Z,
            error: F
          } = R.row;
          if (x === "done") g({
            k: "settled",
            addr: I,
            status: x,
            value: Z
          });
          else if (x === "failed") g({
            k: "settled",
            addr: I,
            status: x,
            error: F
          });
          return
        }
        case "retracted":
          g({
            k: "retracted",
            addr: R.row.addr
          });
          return;
        case "runaway":
          return
      }
    });
  return () => (k(), h)
}
