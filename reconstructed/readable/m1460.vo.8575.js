/* ==============================================================================
 * m1460.vo   [m1460_0xd973957.js @ 8575]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 8575
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function vo(o, l) {
  let a = yX(o.name),
    u = await el(o.scope, o.cwd),
    d = So(u, `${a}.js`);
  if (l !== void 0 && o.scope === "user") return nl(l, a, d, o);
  let f = o.scope !== "user" && !zde(To(u));
  if (f) try {
    await q5e(To(To(u)), u)
  } catch (h) {
    throw m("workflow_save", "write_failed"), h
  }
  await Zi(u, {
    recursive: !0,
    mode: 448
  });
  try {
    if (o.overwrite) await Hv(d, o.script, {
      encoding: "utf8",
      mode: 384,
      checkParentDir: f
    });
    else await tl(d, o.script, {
      encoding: "utf8",
      mode: 384,
      flag: "wx"
    })
  } catch (h) {
    if (!o.overwrite && v(h) === "EEXIST") throw p("workflow_save", "already_exists"), Error(`Dynamic workflow "${a}" already exists at ${d}. ${Be}`);
    throw m("workflow_save", "write_failed"), h
  }
  return xs(a, d, o)
}
