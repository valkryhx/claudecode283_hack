/* ==========================================================================
 * m0869._r   [m0869_0xd12567a.js @ 26485]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function _r(e, r, {
  entries: s,
  script: g
}) {
  if (g) {
    let w = X3e();
    try {
      await hr(w, {
        recursive: !0,
        mode: 448
      }), await A$(fo(w, g.fileName), g.script, 384);
    } catch (A) {
      if (v(A) !== "EEXIST") t(`Failed to restore a workflow script: ${A}`, {
        level: "warn"
      });
    }
  }
  if (s === void 0) return null;
  let f = new Gt(e, r);
  try {
    if ((await f.restoreState()) === "complete") return null;
    await f.writeRestored(s);
  } catch (w) {
    return `Could not restore the journal for workflow run ${e}: ${l(w)}`;
  }
  return null;
}
