// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { zc } from "B:/~BUN/root/chunk-472kxa0t.js";
import { hn, Cn, iR } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { dOe, vBe, cOe, RS } from "B:/~BUN/root/chunk-1fjjnb3f.js";
import { O1e } from "B:/~BUN/root/chunk-hhgqcegv.js";
import { x9e, qee, NDs } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { IJt, y$e, m_, nd, Mk, U_s, Hlt, Ys } from "B:/~BUN/root/chunk-9grc6xh0.js";
async function Zts(l, r) {
  return l.some(item => item.endsWith(`@${hn}`)) ? U_s(r) : "not_needed";
}
var M = ["user", "project", "local"];
async function boe(l, storageV5) {
  let n = new Map();
  for (let e of l) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let a = n.get(e.dependency);
    if (!a) a = new Set(), n.set(e.dependency, a);
    a.add(e.source);
  }
  if (n.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let i = await nd(storageV5),
    f = M.map(item => [item, x9e(iR(item))]),
    installed = [],
    stillUnresolved = [],
    marketplaceMissing = [];
  for (let [pluginId, a] of n) {
    let marketplace = Cn(pluginId).marketplace,
      k = marketplace ? m_(i, marketplace) : void 0;
    if (!marketplace || !k) {
      stillUnresolved.push(pluginId), marketplaceMissing.push(pluginId);
      continue;
    }
    if (!zc(k.source)) {
      t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 marketplace "${marketplace}" is blocked by enterprise policy`), stillUnresolved.push(pluginId);
      continue;
    }
    let y = !1;
    for (let o of a) {
      let marketplace_2 = Cn(o).marketplace;
      if (marketplace_2 === marketplace) {
        y = !0;
        break;
      }
      if (!marketplace_2) continue;
      if ((await Mk(marketplace_2, storageV5))?.allowCrossMarketplaceDependenciesOn?.includes(marketplace)) {
        y = !0;
        break;
      }
    }
    if (!y) {
      t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), stillUnresolved.push(pluginId);
      continue;
    }
    try {
      let o = await Hlt(pluginId, storageV5, "install");
      if (!o) {
        stillUnresolved.push(pluginId);
        continue;
      }
      let source = o.entry.source;
      if (typeof source === "object" && source.source === "archive" && dOe(vBe({
        entry: o.entry,
        archiveUrl: source.url,
        marketplaceSource: cOe(pluginId, i),
        trustedSettingsEntryAuth: y$e(RS(pluginId), o.entry.name)
      }).entry)) {
        t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), stillUnresolved.push(pluginId);
        continue;
      }
      let m = D(a, f),
        h = await IJt({
          pluginId: pluginId,
          entry: o.entry,
          scope: m ?? "user",
          marketplaceInstallLocation: o.marketplaceInstallLocation,
          trigger: "dependency-resolution",
          explicit: !1,
          auto: m !== void 0,
          requiredByEnabledDependent: !0,
          storageV5: storageV5
        });
      if (h.ok) {
        for (let S of h.closure) if (!installed.includes(S)) installed.push(S);
      } else t(`resolveMissingDependencies: install of "${pluginId}" did not complete (${h.reason})`, {
        level: "warn"
      }), stillUnresolved.push(pluginId);
    } catch (error) {
      t(`resolveMissingDependencies: install of "${pluginId}" threw: ${d(error)}`, {
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
async function GXr(l, r) {
  let {
    errors: errors
  } = await Ys(r);
  return errors.filter(O1e).filter(item => item.source === l);
}
async function fTt(l, r) {
  let n = await GXr(l, r);
  if (n.length === 0) return null;
  let {
      installed: installed_2,
      marketplaceMissing: marketplaceMissing_2
    } = await boe(n, r),
    g = new Set(installed_2),
    s = L(n.map(item => item.dependency)).filter(item => !g.has(item));
  return {
    suffix: `${qee(installed_2)}${NDs(s, marketplaceMissing_2)}`,
    changed: installed_2.length > 0
  };
}
function D(l, r) {
  for (let [n, i] of r) for (let f of l) if (i.has(f)) return n;
  return;
}
export { Zts, boe, GXr, fTt };