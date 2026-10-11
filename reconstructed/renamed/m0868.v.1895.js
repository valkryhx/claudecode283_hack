/* ==========================================================================
 * m0868.v   [m0868_0xd1234ad.js @ 1895]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function v(o, s, n, i, d) {
  let w = ce();
  if (cre(w, o, d)) return null;
  try {
    let e = await OI(w, o, Nb);
    if (e === null) return t(`Plugin workflow ${o}: not a regular file or exceeds ${Nb} bytes \u2014 skipping`, {
      level: "warn"
    }), null;
    let r = Fy(e, {
      validateBody: !1
    });
    if ("error" in r) return t(`Plugin workflow ${o} has invalid meta: ${r.error} \u2014 skipping`, {
      level: "warn"
    }), null;
    let l = `${s}:${r.meta.name}`;
    return {
      source: "plugin",
      plugin: n,
      pluginManifest: i,
      name: l,
      description: r.meta.description,
      whenToUse: r.meta.whenToUse,
      phases: r.meta.phases,
      script: e,
      filePath: o
    };
  } catch (e) {
    return t(`Failed to load workflow from ${o}: ${e}`, {
      level: "error"
    }), null;
  }
}
