// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Tge, eTe, Cge, o0 } from "B:/~BUN/root/chunk-r6m7remx.js";
import { pCe } from "B:/~BUN/root/chunk-j14vfkmm.js";
import { Ep } from "B:/~BUN/root/chunk-384x2wn9.js";
import { kGe, S8, mco, Dxt, Ske, id, GP, ven, Ti } from "B:/~BUN/root/chunk-3jyp964r.js";
import { or, T0 } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
async function Q7r(a, r) {
  return "not_needed";
}
var S = ["user", "project", "local"];
async function H5(a, storageV5) {
  let n = new Map();
  for (let e of a) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let c = n.get(e.dependency);
    if (!c) c = new Set(), n.set(e.dependency, c);
    c.add(e.source);
  }
  if (n.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let i = await id(storageV5),
    f = S.map(item => [item, kGe(T0(item))]),
    installed = [],
    stillUnresolved = [],
    marketplaceMissing = [];
  for (let [pluginId, c] of n) {
    let marketplace = or(pluginId).marketplace;
    if (!marketplace || !i[marketplace]) {
      stillUnresolved.push(pluginId), marketplaceMissing.push(pluginId);
      continue;
    }
    if (!Ep(i[marketplace].source)) {
      t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 marketplace "${marketplace}" is blocked by enterprise policy`), stillUnresolved.push(pluginId);
      continue;
    }
    let y = !1;
    for (let o of c) {
      let marketplace_2 = or(o).marketplace;
      if (marketplace_2 === marketplace) {
        y = !0;
        break;
      }
      if (!marketplace_2) continue;
      if ((await GP(marketplace_2, storageV5))?.allowCrossMarketplaceDependenciesOn?.includes(marketplace)) {
        y = !0;
        break;
      }
    }
    if (!y) {
      t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), stillUnresolved.push(pluginId);
      continue;
    }
    try {
      let o = await ven(pluginId, storageV5, "install");
      if (!o) {
        stillUnresolved.push(pluginId);
        continue;
      }
      let source = o.entry.source;
      if (typeof source === "object" && source.source === "archive" && Tge(eTe({
        entry: o.entry,
        archiveUrl: source.url,
        marketplaceSource: Cge(pluginId, i),
        trustedSettingsEntryAuth: Ske(o0(pluginId), o.entry.name)
      }).entry)) {
        t(`resolveMissingDependencies: skipping "${pluginId}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), stillUnresolved.push(pluginId);
        continue;
      }
      let m = M(c, f),
        h = await Dxt({
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
        for (let k of h.closure) if (!installed.includes(k)) installed.push(k);
      } else t(`resolveMissingDependencies: install of "${pluginId}" did not complete (${h.reason})`, {
        level: "warn"
      }), stillUnresolved.push(pluginId);
    } catch (error) {
      t(`resolveMissingDependencies: install of "${pluginId}" threw: ${l(error)}`, {
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
async function bsr(a, r) {
  let {
    errors: errors
  } = await Ti(r);
  return errors.filter(pCe).filter(item => item.source === a);
}
async function T7e(a, r) {
  let n = await bsr(a, r);
  if (n.length === 0) return null;
  let {
      installed: installed_2,
      marketplaceMissing: marketplaceMissing_2
    } = await H5(n, r),
    g = new Set(installed_2),
    s = L(n.map(item => item.dependency)).filter(item => !g.has(item));
  return {
    suffix: `${S8(installed_2)}${mco(s, marketplaceMissing_2)}`,
    changed: installed_2.length > 0
  };
}
function M(a, r) {
  for (let [n, i] of r) for (let f of a) if (i.has(f)) return n;
  return;
}
export { Q7r, H5, bsr, T7e };