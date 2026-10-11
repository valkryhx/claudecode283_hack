/* ==============================================================================
 * m1569.Ut   [m1569_0xdceb889.js @ 50721]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 50721
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
Ut = f(() => {
  let e = VS().nonnegative();
  return Qo("k", [u({
    k: A("put"),
    addr: e,
    kind: z(["put", "eval", "sub"]),
    fact: dr(),
    by: o(),
    in: VS().min(j),
    at: E().finite(),
    status: z(Fr)
  }).refine((r) => r.in < r.addr, {
    message: "`in` must be ROOT or an earlier address"
  }), u({
    k: A("settled"),
    addr: e,
    status: z(["done", "failed"]),
    value: ae().optional(),
    error: o().optional()
  }), u({
    k: A("retracted"),
    addr: e
  })])
})
