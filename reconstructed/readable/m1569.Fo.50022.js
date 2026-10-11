/* ==============================================================================
 * m1569.Fo   [m1569_0xdceb889.js @ 50022]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 50022
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
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
