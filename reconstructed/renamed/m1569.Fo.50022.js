/* ==========================================================================
 * m1569.Fo   [m1569_0xdceb889.js @ 50022]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
var Fo = f(() => u({
  verb: z(["put", "retract", "read", "script"]),
  addr: E().optional(),
  retracted: M().optional(),
  rows: C(ae()).optional(),
  rowsTotal: E().optional(),
  foreignArtifactContent: M().optional(),
  error: o().optional(),
  reopened: M(),
  status: u({
    pending: E()
  }),
  killed: u({
    at: E(),
    reason: z([...Ze, "unknown"]).catch("unknown"),
    rows: E(),
    pending: E(),
    rules: E(),
    agents: E()
  }).optional()
}));
