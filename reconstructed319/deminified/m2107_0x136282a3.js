// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, Yn } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { uc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { yt, Cr } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { RBe, dQ, Uai, AB } from "B:/~BUN/root/chunk-h434y56c.js";
import { i2o, Oqr, SOe } from "B:/~BUN/root/chunk-d0mxnbww.js";
import { wf } from "B:/~BUN/root/chunk-dew5sv9w.js";
class m {
  seated = void 0;
  picker = void 0;
  seat(e) {
    this.seated = e;
  }
  vacate(e) {
    if (this.seated === e) this.seated = void 0;
  }
  current() {
    return this.seated;
  }
  install(e) {
    this.picker = e;
  }
  pickDue() {
    if (this.picker === void 0 || this.seated === void 0) return !1;
    return this.picker(this.seated), !0;
  }
}
var uKt = new W(() => new m());
function fKt() {
  return import.meta.require("B:/~BUN/root/chunk-c1hxxj5d.js");
}
function T(e) {
  if (e.id.startsWith(i2o) || e.id.startsWith(Oqr)) return b("org-tip");
  let {
    isBuiltInTipId: isBuiltInTipId,
    MARKETPLACE_PLUGIN_TIP_ID_PREFIX: MARKETPLACE_PLUGIN_TIP_ID_PREFIX
  } = fKt();
  if (e.id.startsWith(MARKETPLACE_PLUGIN_TIP_ID_PREFIX)) return e.pluginId !== void 0 && uc(e.pluginId).marketplace === wf ? Yn(e.id) : b("marketplace-plugin:org-marketplace");
  return isBuiltInTipId(e.id) ? Yn(e.id) : b("other");
}
function S(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let i = e.map(t => ({
    tip: t,
    sessions: AB(t.id)
  }));
  return i.sort((itemA, itemB) => {
    if (itemA.sessions !== itemB.sessions) return itemB.sessions - itemA.sessions;
    return (itemB.tip.priority ?? 0) - (itemA.tip.priority ?? 0);
  }), i[0]?.tip;
}
async function Lri(e) {
  if (Cr().spinnerTipsEnabled === !1) return;
  let {
      getRelevantTips: getRelevantTips
    } = await import("B:/~BUN/root/chunk-c1hxxj5d.js"),
    t = await getRelevantTips(e);
  if (t.length === 0) return;
  return S(t);
}
async function Nri(e, i) {
  try {
    return await e.content(i);
  } catch (error) {
    let {
      tipSessionCaches: tipSessionCaches
    } = await import("B:/~BUN/root/chunk-c1hxxj5d.js");
    return tipSessionCaches.of(i.session.host).failedTipIds.add(e.id), a(qe(F(error), "tip content threw")), "";
  }
}
async function Fri(e) {
  try {
    if (yt().spinnerTipsEnabled === !1) return null;
    let {
      getSecurityReviewClosingTip: getSecurityReviewClosingTip
    } = await import("B:/~BUN/root/chunk-c1hxxj5d.js");
    return await getSecurityReviewClosingTip(e);
  } catch (error) {
    return a(qe(F(error), "security review closing tip threw")), c("tips_security_review_show", "threw"), null;
  }
}
var s = 2;
class h {
  fired = new Set();
  fire(e, i) {
    if (e <= 0) return;
    let t = e > i ? "true" : "false",
      n = e >= s && i < s ? "true" : "false",
      o = `${t}|${n}`;
    if (this.fired.has(o)) return;
    this.fired.add(o), l("tengu_dead_probe_legacy_plugin_tip_counts", {
      changes_max: f(t),
      changes_outcome: f(n)
    });
  }
}
var w = new W(() => new h());
function y() {
  return w.of(H().host);
}
async function Hri(e) {
  if (Cr().spinnerTipsEnabled === !1) return;
  let {
      isTipRelevantSafe: isTipRelevantSafe,
      tipSessionCaches: tipSessionCaches_2
    } = await import("B:/~BUN/root/chunk-c1hxxj5d.js"),
    n = tipSessionCaches_2.of(e.session.host);
  if (SOe()) return;
  let o = await n.getMarketplacePluginTips(e.storageV5);
  if (o.length === 0) return;
  let p = [];
  for (let r of o) {
    if (!r.pluginId) continue;
    if (n.failedTipIds.has(r.id)) continue;
    let d = dQ(r.id),
      u = Uai(r.pluginId);
    if (y().fire(u, d), Math.max(d, u) >= s) continue;
    if (AB(r.id) < r.cooldownSessions) continue;
    if (await isTipRelevantSafe(r, e)) p.push(r);
  }
  return S(p);
}
function pKt(e, i = "spinner", t) {
  RBe(e.id, t, e.advertisedCommand), g(i === "startup" ? "tips_startup_show" : "tips_spinner_show"), l("tengu_tip_shown", {
    tipIdLength: T(e),
    cooldownSessions: e.cooldownSessions,
    surface: f(i)
  });
}
var HTt = "cc-plugin-tips";
export { uKt, fKt, Lri, Nri, Fri, Hri, pKt, HTt };