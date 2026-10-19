// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  zc
} from "B:/~BUN/root/chunk-472kxa0t.js";
import {
  hn,
  Cn,
  iR
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  dOe,
  vBe,
  cOe,
  RS
} from "B:/~BUN/root/chunk-1fjjnb3f.js";
import {
  O1e
} from "B:/~BUN/root/chunk-hhgqcegv.js";
import {
  x9e,
  qee,
  NDs
} from "B:/~BUN/root/chunk-efcxwmhb.js";
import {
  IJt,
  y$e,
  m_,
  nd,
  Mk,
  U_s,
  Hlt,
  Ys
} from "B:/~BUN/root/chunk-9grc6xh0.js";
async function Zts(l, r) {
  return l.some((n) => n.endsWith(`@${hn}`)) ? U_s(r) : "not_needed"
}
var M = ["user", "project", "local"];
async function boe(l, r) {
  let n = new Map;
  for (let e of l) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let a = n.get(e.dependency);
    if (!a) a = new Set, n.set(e.dependency, a);
    a.add(e.source)
  }
  if (n.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let i = await nd(r),
    f = M.map((e) => [e, x9e(iR(e))]),
    g = [],
    s = [],
    p = [];
  for (let [e, a] of n) {
    let u = Cn(e).marketplace,
      k = u ? m_(i, u) : void 0;
    if (!u || !k) {
      s.push(e), p.push(e);
      continue
    }
    if (!zc(k.source)) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${u}" is blocked by enterprise policy`), s.push(e);
      continue
    }
    let y = !1;
    for (let o of a) {
      let c = Cn(o).marketplace;
      if (c === u) {
        y = !0;
        break
      }
      if (!c) continue;
      if ((await Mk(c, r))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
        y = !0;
        break
      }
    }
    if (!y) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), s.push(e);
      continue
    }
    try {
      let o = await Hlt(e, r, "install");
      if (!o) {
        s.push(e);
        continue
      }
      let c = o.entry.source;
      if (typeof c === "object" && c.source === "archive" && dOe(vBe({
          entry: o.entry,
          archiveUrl: c.url,
          marketplaceSource: cOe(e, i),
          trustedSettingsEntryAuth: y$e(RS(e), o.entry.name)
        }).entry)) {
        t(`resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), s.push(e);
        continue
      }
      let m = D(a, f),
        h = await IJt({
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
        for (let S of h.closure)
          if (!g.includes(S)) g.push(S)
      } else t(`resolveMissingDependencies: install of "${e}" did not complete (${h.reason})`, {
        level: "warn"
      }), s.push(e)
    } catch (o) {
      t(`resolveMissingDependencies: install of "${e}" threw: ${d(o)}`, {
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
async function GXr(l, r) {
  let {
    errors: n
  } = await Ys(r);
  return n.filter(O1e).filter((i) => i.source === l)
}
async function fTt(l, r) {
  let n = await GXr(l, r);
  if (n.length === 0) return null;
  let {
    installed: i,
    marketplaceMissing: f
  } = await boe(n, r), g = new Set(i), s = L(n.map((p) => p.dependency)).filter((p) => !g.has(p));
  return {
    suffix: `${qee(i)}${NDs(s,f)}`,
    changed: i.length > 0
  }
}

function D(l, r) {
  for (let [n, i] of r)
    for (let f of l)
      if (i.has(f)) return n;
  return
}
export {
  Zts,
  boe,
  GXr,
  fTt
};
