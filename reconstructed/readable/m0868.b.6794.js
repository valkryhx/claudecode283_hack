/* ==============================================================================
 * m0868.b   [m0868_0xd1234ad.js @ 6794]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0868_0xd1234ad.js  字符偏移 6794
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function b(o, s) {
  let n = S7e(),
    i = {
      skippedInvalidMeta: 0,
      skippedOversize: 0,
      skippedUnreadable: 0,
      nearMissExt: 0,
      walkFailed: !1,
      userListingTruncated: !1
    },
    d = await T(o, i),
    [w, ...e] = await Promise.all([ar("userSettings") ? D(n, "userSettings", i, s) : Promise.resolve([]), ...ar("projectSettings") ? d.map((u) => D(u, "projectSettings", i)) : []]),
    r = new Map;
  for (let u of w) {
    if (!y(u, r.get(u.name))) continue;
    r.set(u.name, u)
  }
  for (let u = e.length - 1; u >= 0; u--)
    for (let c of e[u]) {
      if (!y(c, r.get(c.name))) continue;
      r.set(c.name, c)
    }
  let l = i.walkFailed && ar("projectSettings"),
    f = i.skippedInvalidMeta + i.skippedOversize + i.skippedUnreadable;
  if (l || i.userListingTruncated || f > 0 || i.nearMissExt > 0) p("workflow_discover", l ? "project_dir_walk_failed" : i.userListingTruncated ? "user_listing_truncated" : i.skippedInvalidMeta > 0 ? "invalid_meta" : i.skippedOversize > 0 ? "oversize" : i.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", {
    found: r.size,
    skipped_invalid_meta: i.skippedInvalidMeta,
    skipped_oversize: i.skippedOversize,
    skipped_unreadable: i.skippedUnreadable,
    near_miss_ext: i.nearMissExt,
    ...i.userListingTruncated && {
      user_listing_truncated: !0
    }
  });
  else _("workflow_discover", {
    found: r.size
  });
  return [...r.values()].sort((u, c) => u.name.localeCompare(c.name))
}
