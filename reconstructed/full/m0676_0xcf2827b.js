// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Tge,
  eTe,
  Cge,
  o0
} from "B:/~BUN/root/chunk-r6m7remx.js";
import {
  pCe
} from "B:/~BUN/root/chunk-j14vfkmm.js";
import {
  Ep
} from "B:/~BUN/root/chunk-384x2wn9.js";
import {
  kGe,
  S8,
  mco,
  Dxt,
  Ske,
  id,
  GP,
  ven,
  Ti
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  or,
  T0
} from "B:/~BUN/root/chunk-gsxez0fk.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
async function Q7r(a, r) {
  return "not_needed"
}
var S = ["user", "project", "local"];
async function H5(a, r) {
  let n = new Map;
  for (let e of a) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let c = n.get(e.dependency);
    if (!c) c = new Set, n.set(e.dependency, c);
    c.add(e.source)
  }
  if (n.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let i = await id(r),
    f = S.map((e) => [e, kGe(T0(e))]),
    g = [],
    s = [],
    p = [];
  for (let [e, c] of n) {
    let u = or(e).marketplace;
    if (!u || !i[u]) {
      s.push(e), p.push(e);
      continue
    }
    if (!Ep(i[u].source)) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${u}" is blocked by enterprise policy`), s.push(e);
      continue
    }
    let y = !1;
    for (let o of c) {
      let d = or(o).marketplace;
      if (d === u) {
        y = !0;
        break
      }
      if (!d) continue;
      if ((await GP(d, r))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
        y = !0;
        break
      }
    }
    if (!y) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), s.push(e);
      continue
    }
    try {
      let o = await ven(e, r, "install");
      if (!o) {
        s.push(e);
        continue
      }
      let d = o.entry.source;
      if (typeof d === "object" && d.source === "archive" && Tge(eTe({
          entry: o.entry,
          archiveUrl: d.url,
          marketplaceSource: Cge(e, i),
          trustedSettingsEntryAuth: Ske(o0(e), o.entry.name)
        }).entry)) {
        t(`resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), s.push(e);
        continue
      }
      let m = M(c, f),
        h = await Dxt({
          pluginId: e,
          entry: o.entry,
          scope: m ?? "user",
          marketplaceInstallLocation: o.marketplaceInstallLocation,
          trigger: "dependency-resolution",
          explicit: !1,
          auto: m !== void 0,
          requiredByEnabledDependent: !0,
          storageV5: r
        });
      if (h.ok) {
        for (let k of h.closure)
          if (!g.includes(k)) g.push(k)
      } else t(`resolveMissingDependencies: install of "${e}" did not complete (${h.reason})`, {
        level: "warn"
      }), s.push(e)
    } catch (o) {
      t(`resolveMissingDependencies: install of "${e}" threw: ${l(o)}`, {
        level: "warn"
      }), s.push(e)
    }
  }
  return {
    installed: g,
    stillUnresolved: s,
    marketplaceMissing: p
  }
}
async function bsr(a, r) {
  let {
    errors: n
  } = await Ti(r);
  return n.filter(pCe).filter((i) => i.source === a)
}
async function T7e(a, r) {
  let n = await bsr(a, r);
  if (n.length === 0) return null;
  let {
    installed: i,
    marketplaceMissing: f
  } = await H5(n, r), g = new Set(i), s = L(n.map((p) => p.dependency)).filter((p) => !g.has(p));
  return {
    suffix: `${S8(i)}${mco(s,f)}`,
    changed: i.length > 0
  }
}

function M(a, r) {
  for (let [n, i] of r)
    for (let f of a)
      if (i.has(f)) return n;
  return
}
export {
  Q7r,
  H5,
  bsr,
  T7e
};
