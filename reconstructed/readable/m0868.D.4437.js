/* ==============================================================================
 * m0868.D   [m0868_0xd1234ad.js @ 4437]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0868_0xd1234ad.js  字符偏移 4437
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function D(o, s, n, i) {
  if (i !== void 0 && s === "userSettings") return M(i, o, n);
  let d = ce(),
    w;
  try {
    w = await d.readdir(o)
  } catch {
    return []
  }
  return (await Promise.all(w.map(async (r) => {
    if (!(r.isFile() || r.isSymbolicLink())) return null;
    if (!r.name.endsWith(".js")) {
      if (/\.(mjs|cjs|ts)$/.test(r.name)) n.nearMissExt++;
      return null
    }
    let l = W(o, r.name),
      f;
    try {
      f = await d.readFileBytes(l, Nb + 1)
    } catch {
      return n.skippedUnreadable++, null
    }
    if (f.byteLength > Nb) return t(`Workflow ${l} exceeds ${Nb} bytes \u2014 skipping`, {
      level: "warn"
    }), n.skippedOversize++, null;
    let u = f.toString("utf-8"),
      c = Fy(u, {
        validateBody: !1
      });
    if ("error" in c) return t(`Workflow ${l} has invalid meta: ${c.error} \u2014 skipping`, {
      level: "warn"
    }), n.skippedInvalidMeta++, null;
    return {
      source: s,
      name: c.meta.name,
      description: c.meta.description,
      whenToUse: c.meta.whenToUse,
      phases: c.meta.phases,
      script: u,
      filePath: l
    }
  }))).filter((r) => r !== null)
}
