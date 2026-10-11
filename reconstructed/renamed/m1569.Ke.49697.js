/* ==========================================================================
 * m1569.Ke   [m1569_0xdceb889.js @ 49697]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function Ke(e) {
  if (typeof e.runId !== "string") return;
  let r = e.put !== void 0 || typeof e.retract === "number" || e.read !== void 0;
  return {
    runId: e.runId,
    ...(e.put !== void 0 && {
      put: e.put
    }),
    ...(typeof e.retract === "number" && {
      retract: e.retract
    }),
    ...(e.read !== void 0 && {
      read: e.read
    }),
    ...(!r && typeof e.script === "string" && e.script !== "" && {
      script: e.script
    })
  };
}
