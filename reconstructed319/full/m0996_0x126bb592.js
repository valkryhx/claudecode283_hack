// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ew
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  q7e,
  ip
} from "B:/~BUN/root/chunk-esnm3r09.js";
import {
  In,
  $n,
  HO
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  hze,
  zXe,
  gze,
  Tv
} from "B:/~BUN/root/chunk-63btkzab.js";
import {
  SD,
  zNt,
  Rht,
  Gue,
  vEs
} from "B:/~BUN/root/chunk-fzefftbw.js";
import {
  cAn,
  X8e,
  cw,
  Nc,
  ZC,
  fEi,
  BOt,
  ki,
  gW
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
async function Yoi(i, n) {
  return i.some((o) => o.endsWith(`@${In}`)) ? fEi(n) : "not_needed"
}
var w = ["user", "project", "local"];
async function Uhe(i, n, o) {
  let s = new Map;
  for (let e of i) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let p = s.get(e.dependency);
    if (!p) p = new Set, s.set(e.dependency, p);
    p.add(e.source)
  }
  if (s.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let l = await Nc(n),
    y = w.map((e) => [e, Rht(HO(e))]),
    g = [],
    a = [],
    r = [];
  for (let [e, p] of s) {
    let u = $n(e).marketplace,
      h = u ? cw(l, u) : void 0;
    if (!u || !h) {
      a.push(e), r.push(e);
      continue
    }
    if (!ip(h.source)) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${u}" is blocked by enterprise policy`), a.push(e);
      continue
    }
    let c = !1;
    for (let f of p) {
      let m = $n(f).marketplace;
      if (m === u) {
        c = !0;
        break
      }
      if (!m) continue;
      if ((await ZC(m, n))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
        c = !0;
        break
      }
    }
    if (!c) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), a.push(e);
      continue
    }
    try {
      let f = await BOt(e, n, "install");
      if (!f) {
        a.push(e);
        continue
      }
      let m = f.entry.source;
      if (typeof m === "object" && m.source === "archive" && hze(zXe({
          entry: f.entry,
          archiveUrl: m.url,
          marketplaceSource: gze(e, l),
          trustedSettingsEntryAuth: X8e(Tv(e), f.entry.name)
        }).entry)) {
        t(`resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), a.push(e);
        continue
      }
      let k = v(p, y),
        S = await cAn({
          pluginId: e,
          entry: f.entry,
          scope: k ?? "user",
          marketplaceInstallLocation: f.marketplaceInstallLocation,
          trigger: "dependency-resolution",
          explicit: !1,
          auto: k !== void 0,
          requiredByEnabledDependent: !0,
          storageV5: n,
          installedOnDisk: o
        });
      if (S.ok) {
        for (let D of S.closure)
          if (!g.includes(D)) g.push(D)
      } else t(`resolveMissingDependencies: install of "${e}" did not complete (${S.reason})`, {
        level: "warn"
      }), a.push(e)
    } catch (f) {
      t(`resolveMissingDependencies: install of "${e}" threw: ${ew(d(f))}`, {
        level: "warn"
      }), a.push(e)
    }
  }
  return {
    installed: g,
    stillUnresolved: a,
    marketplaceMissing: r
  }
}
async function A4r(i, n, o) {
  let {
    errors: s
  } = o ?? await ki(n);
  return s.filter(q7e).filter((l) => l.source === i)
}
async function aCt(i, n, o) {
  let s = new Set,
    l = new Set,
    y = new Set,
    g = [];
  for (;;) {
    let e = o?.fromDisk ? await gW(n) : void 0,
      p = await A4r(i, n, e);
    y = new Set(p.map((c) => c.dependency).filter((c) => l.has(c)));
    let u = p.filter((c) => !s.has(c.dependency));
    if (u.length === 0) break;
    for (let c of u) s.add(c.dependency);
    let h = await Uhe(u, n, e);
    for (let c of h.installed) l.add(c);
    if (g.push(...h.marketplaceMissing), e === void 0 || h.installed.length === 0) break
  }
  if (s.size === 0) return null;
  let a = [...s].filter((e) => !l.has(e) || y.has(e)),
    r = [...l].filter((e) => !y.has(e));
  return {
    suffix: `${Gue(r)}${vEs(a,g)}`,
    changed: l.size > 0,
    unresolved: a.length > 0
  }
}
async function Xoi(i, n) {
  let o = await gW(n, {
      leavesOutPluginUrls: !0
    }),
    s = await A4r(i, n, o);
  if (s.length === 0) return null;
  let y = (o.disabled.find((r) => r.source === i)?.manifest.dependencies ?? []).map((r) => SD(r, i)).filter((r) => !o.enabled.some((e) => zNt(r, e.source, i))),
    g = L([...s.map((r) => r.dependency), ...y]),
    a = s.some((r) => r.type === "dependency-unsatisfied" && r.reason === "not-found");
  return {
    suffix: `${vEs(g,[])}${a?" Dependencies are not installed while non-essential traffic is turned off.":""}`,
    changed: !1,
    unresolved: !0
  }
}

function v(i, n) {
  for (let [o, s] of n)
    for (let l of i)
      if (s.has(l)) return o;
  return
}
export {
  Yoi,
  Uhe,
  A4r,
  aCt,
  Xoi
};
