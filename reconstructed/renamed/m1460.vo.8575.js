/* ==========================================================================
 * m1460.vo   [m1460_0xd973957.js @ 8575]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function vo(o, l) {
  let a = yX(o.name),
    u = await el(o.scope, o.cwd),
    d = So(u, `${a}.js`);
  if (l !== void 0 && o.scope === "user") return nl(l, a, d, o);
  let f = o.scope !== "user" && !zde(To(u));
  if (f) try {
    await q5e(To(To(u)), u);
  } catch (h) {
    throw m("workflow_save", "write_failed"), h;
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
    });else await tl(d, o.script, {
      encoding: "utf8",
      mode: 384,
      flag: "wx"
    });
  } catch (h) {
    if (!o.overwrite && v(h) === "EEXIST") throw p("workflow_save", "already_exists"), Error(`Dynamic workflow "${a}" already exists at ${d}. ${Be}`);
    throw m("workflow_save", "write_failed"), h;
  }
  return xs(a, d, o);
}
