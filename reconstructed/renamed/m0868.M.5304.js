/* ==========================================================================
 * m0868.M   [m0868_0xd1234ad.js @ 5304]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function M(o, s, n) {
  let i = [];
  switch ((await Ks(e => o.listEntries({
    namespace: "userConfigDir",
    dir: "workflows"
  }, e === void 0 ? void 0 : {
    cursor: e
  }), e => {
    for (let r of e) {
      if (r.kind !== "key" || r.key.namespace !== "userConfigDir") continue;
      let l = r.key.relPath.at(-1);
      if (l === void 0 || r.key.relPath.length !== 1) continue;
      if (!l.endsWith(".js")) {
        if (/\.(mjs|cjs|ts)$/.test(l)) n.nearMissExt++;
        continue;
      }
      i.push({
        key: r.key,
        name: l
      });
    }
  })).status) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      t(`User workflows listing of ${s} truncated at ${cp} pages \u2014 loading the ${i.length} workflow files seen`, {
        level: "warn"
      }), n.userListingTruncated = !0;
      break;
  }
  return (await Promise.all(i.map(async ({
    key: e,
    name: r
  }) => {
    let l = await o.read([{
      key: e,
      offset: 0,
      length: Nb + 1
    }]);
    if (!l.ok) return t(`Workflow ${W(s, r)} could not be read through the storage backend (${l.error.code}) \u2014 skipping`, {
      level: "warn"
    }), n.skippedUnreadable++, null;
    let f = l.value.items[0];
    if (f === void 0 || !f.found) return n.skippedUnreadable++, null;
    let u = W(s, r);
    if (f.value.byteLength > Nb) return t(`Workflow ${u} exceeds ${Nb} bytes \u2014 skipping`, {
      level: "warn"
    }), n.skippedOversize++, null;
    let c = Buffer.from(f.value).toString("utf-8"),
      g = Fy(c, {
        validateBody: !1
      });
    if ("error" in g) return t(`Workflow ${u} has invalid meta: ${g.error} \u2014 skipping`, {
      level: "warn"
    }), n.skippedInvalidMeta++, null;
    return {
      source: "userSettings",
      name: g.meta.name,
      description: g.meta.description,
      whenToUse: g.meta.whenToUse,
      phases: g.meta.phases,
      script: c,
      filePath: u
    };
  }))).filter(e => e !== null);
}
