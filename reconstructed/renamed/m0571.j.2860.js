/* ==========================================================================
 * m0571.j   [m0571_0xcddb07e.js @ 2860]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function j(r, a) {
  let n = {
      namespace: "sidecar",
      projectKey: a,
      sessionId: Y(),
      relPath: ["workflows"]
    },
    i = [],
    l;
  do {
    let o = await r.listEntries(n, l === void 0 ? void 0 : {
      cursor: l
    });
    if (!o.ok) return t(`Failed to list workflow snapshots: ${o.error.code}`), [];
    for (let e of o.value.items) {
      if (e.kind !== "key" || e.key.namespace !== "sidecar") continue;
      if ((e.key.relPath.at(-1) ?? "").endsWith(".json")) i.push(e.key);
    }
    l = o.value.cursor;
  } while (l !== void 0);
  let s = (await Promise.all(i.map(async o => {
    let e = o.relPath.at(-1) ?? "";
    try {
      let f = await r.read([o]);
      if (!f.ok) return t(`Failed to parse workflow snapshot ${e}: ${f.error.code}`), null;
      let c = f.value.items[0];
      if (!c?.found) return t(`Failed to parse workflow snapshot ${e}: deleted between list and read`), null;
      let w = J(Buffer.from(c.value).toString("utf8"));
      return d(w, e.replace(/\.json$/, ""));
    } catch (f) {
      return t(`Failed to parse workflow snapshot ${e}: ${f instanceof Error ? f.message : f}`), null;
    }
  }))).filter(o => o !== null);
  return s.sort((o, e) => e.startTime - o.startTime), s;
}
