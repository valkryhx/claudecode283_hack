// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ew } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { q7e, ip } from "B:/~BUN/root/chunk-esnm3r09.js";
import { In, $n, HO } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { hze, zXe, gze, Tv } from "B:/~BUN/root/chunk-63btkzab.js";
import { SD, zNt, Rht, Gue, vEs } from "B:/~BUN/root/chunk-fzefftbw.js";
import { cAn, X8e, cw, Nc, ZC, fEi, BOt, ki, gW } from "B:/~BUN/root/chunk-27h4st9h.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
async function Yoi(i, n) {
  return i.some(item => item.endsWith(`@${In}`)) ? fEi(n) : "not_needed";
}
var w = ["user", "project", "local"];
async function Uhe(i, storageV5, installedOnDisk) {
  let s = new Map();
  for (let e of i) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let p = s.get(e.dependency);
    if (!p) p = new Set(), s.set(e.dependency, p);
    p.add(e.source);
  }
  if (s.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let l = await Nc(storageV5),
    y = w.map(item => [item, Rht(HO(item))]),
    installed = [],
    stillUnresolved = [],
    marketplaceMissing = [];
  for (let [pluginId, p] of s) {
    let marketplace = $n(pluginId).marketplace,
      h = marketplace ? cw(l, marketplace) : void 0;
    if (!marketplace || !h) {
      stillUnresolved.push(pluginId), marketplaceMissing.push(pluginId);
      continue;
    }
    if (!ip(h.source)) {
      t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 marketplace "${marketplace}" is blocked by enterprise policy`), stillUnresolved.push(pluginId);
      continue;
    }
    let c = !1;
    for (let f of p) {
      let marketplace_2 = $n(f).marketplace;
      if (marketplace_2 === marketplace) {
        c = !0;
        break;
      }
      if (!marketplace_2) continue;
      if ((await ZC(marketplace_2, storageV5))?.allowCrossMarketplaceDependenciesOn?.includes(marketplace)) {
        c = !0;
        break;
      }
    }
    if (!c) {
      t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), stillUnresolved.push(pluginId);
      continue;
    }
    try {
      let f = await BOt(pluginId, storageV5, "install");
      if (!f) {
        stillUnresolved.push(pluginId);
        continue;
      }
      let source = f.entry.source;
      if (typeof source === "object" && source.source === "archive" && hze(zXe({
        entry: f.entry,
        archiveUrl: source.url,
        marketplaceSource: gze(pluginId, l),
        trustedSettingsEntryAuth: X8e(Tv(pluginId), f.entry.name)
      }).entry)) {
        t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), stillUnresolved.push(pluginId);
        continue;
      }
      let k = v(p, y),
        S = await cAn({
          pluginId: pluginId,
          entry: f.entry,
          scope: k ?? "user",
          marketplaceInstallLocation: f.marketplaceInstallLocation,
          trigger: "dependency-resolution",
          explicit: !1,
          auto: k !== void 0,
          requiredByEnabledDependent: !0,
          storageV5: storageV5,
          installedOnDisk: installedOnDisk
        });
      if (S.ok) {
        for (let D of S.closure) if (!installed.includes(D)) installed.push(D);
      } else t(`resolveMissingDependencies: install of "${pluginId}" did not complete (${S.reason})`, {
        level: "warn"
      }), stillUnresolved.push(pluginId);
    } catch (error) {
      t(`resolveMissingDependencies: install of "${pluginId}" threw: ${ew(d(error))}`, {
        level: "warn"
      }), stillUnresolved.push(pluginId);
    }
  }
  return {
    installed: installed,
    stillUnresolved: stillUnresolved,
    marketplaceMissing: marketplaceMissing
  };
}
async function A4r(i, n, o) {
  let {
    errors: errors
  } = o ?? (await ki(n));
  return errors.filter(q7e).filter(item => item.source === i);
}
async function aCt(i, n, o) {
  let s = new Set(),
    l = new Set(),
    y = new Set(),
    g = [];
  for (;;) {
    let e = o?.fromDisk ? await gW(n) : void 0,
      p = await A4r(i, n, e);
    y = new Set(p.map(item => item.dependency).filter(item => l.has(item)));
    let u = p.filter(item => !s.has(item.dependency));
    if (u.length === 0) break;
    for (let c of u) s.add(c.dependency);
    let h = await Uhe(u, n, e);
    for (let c of h.installed) l.add(c);
    if (g.push(...h.marketplaceMissing), e === void 0 || h.installed.length === 0) break;
  }
  if (s.size === 0) return null;
  let a = [...s].filter(item => !l.has(item) || y.has(item)),
    r = [...l].filter(item => !y.has(item));
  return {
    suffix: `${Gue(r)}${vEs(a, g)}`,
    changed: l.size > 0,
    unresolved: a.length > 0
  };
}
async function Xoi(i, n) {
  let o = await gW(n, {
      leavesOutPluginUrls: !0
    }),
    s = await A4r(i, n, o);
  if (s.length === 0) return null;
  let y = (o.disabled.find(item => item.source === i)?.manifest.dependencies ?? []).map(item => SD(item, i)).filter(item => !o.enabled.some(e => zNt(item, e.source, i))),
    g = L([...s.map(item => item.dependency), ...y]),
    a = s.some(item => item.type === "dependency-unsatisfied" && item.reason === "not-found");
  return {
    suffix: `${vEs(g, [])}${a ? " Dependencies are not installed while non-essential traffic is turned off." : ""}`,
    changed: !1,
    unresolved: !0
  };
}
function v(i, n) {
  for (let [o, s] of n) for (let l of i) if (s.has(l)) return o;
  return;
}
export { Yoi, Uhe, A4r, aCt, Xoi };