/* ==========================================================================
 * m1569.Ut   [m1569_0xdceb889.js @ 50721]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
  }).refine(r => r.in < r.addr, {
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
  })]);
})
