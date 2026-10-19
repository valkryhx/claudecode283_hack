// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c, xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ye, H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { fc } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { nr } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Bot, R7, Ros, Tz } from "B:/~BUN/root/chunk-fv1y2eh7.js";
import { H8r, mir, SRe } from "B:/~BUN/root/chunk-5zqsbvq1.js";
import { Su } from "B:/~BUN/root/chunk-9dv7wnd0.js";
class u {
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
var fEt = new z(() => new u());
function mEt() {
  return import.meta.require("B:/~BUN/root/chunk-gec7sm6k.js");
}
function m(e) {
  if (e.id.startsWith(H8r) || e.id.startsWith(mir)) return b("org-tip");
  let {
    isBuiltInTipId: isBuiltInTipId,
    MARKETPLACE_PLUGIN_TIP_ID_PREFIX: MARKETPLACE_PLUGIN_TIP_ID_PREFIX
  } = mEt();
  if (e.id.startsWith(MARKETPLACE_PLUGIN_TIP_ID_PREFIX)) return e.pluginId !== void 0 && fc(e.pluginId).marketplace === Su ? xn(e.id) : b("marketplace-plugin:org-marketplace");
  return isBuiltInTipId(e.id) ? xn(e.id) : b("other");
}
function T(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let n = e.map(t => ({
    tip: t,
    sessions: Tz(t.id)
  }));
  return n.sort((itemA, itemB) => {
    if (itemA.sessions !== itemB.sessions) return itemB.sessions - itemA.sessions;
    return (itemB.tip.priority ?? 0) - (itemA.tip.priority ?? 0);
  }), n[0]?.tip;
}
async function qZo(e) {
  if (nr().spinnerTipsEnabled === !1) return;
  let {
      getRelevantTips: getRelevantTips
    } = await import("B:/~BUN/root/chunk-gec7sm6k.js"),
    t = await getRelevantTips(e);
  if (t.length === 0) return;
  return T(t);
}
async function KZo(e, n) {
  try {
    return await e.content(n);
  } catch (error) {
    let {
      tipSessionCaches: tipSessionCaches
    } = await import("B:/~BUN/root/chunk-gec7sm6k.js");
    return tipSessionCaches.of(n.session.host).failedTipIds.add(e.id), l(Ye(H(error), "tip content threw")), "";
  }
}
var p = 2;
class h {
  fired = new Set();
  fire(e, n) {
    if (e <= 0) return;
    let t = e > n ? "true" : "false",
      o = e >= p && n < p ? "true" : "false",
      s = `${t}|${o}`;
    if (this.fired.has(s)) return;
    this.fired.add(s), i("tengu_dead_probe_legacy_plugin_tip_counts", {
      changes_max: c(t),
      changes_outcome: c(o)
    });
  }
}
var S = new z(() => new h());
function _() {
  return S.of(j().host);
}
async function YZo(e) {
  if (nr().spinnerTipsEnabled === !1) return;
  let {
      isTipRelevantSafe: isTipRelevantSafe,
      tipSessionCaches: tipSessionCaches_2
    } = await import("B:/~BUN/root/chunk-gec7sm6k.js"),
    o = tipSessionCaches_2.of(e.session.host);
  if (SRe()) return;
  let s = await o.getMarketplacePluginTips(e.storageV5);
  if (s.length === 0) return;
  let d = [];
  for (let r of s) {
    if (!r.pluginId) continue;
    if (o.failedTipIds.has(r.id)) continue;
    let f = R7(r.id),
      a = Ros(r.pluginId);
    if (_().fire(a, f), Math.max(f, a) >= p) continue;
    if (Tz(r.id) < r.cooldownSessions) continue;
    if (await isTipRelevantSafe(r, e)) d.push(r);
  }
  return T(d);
}
function gEt(e, n = "spinner", t) {
  Bot(e.id, t, e.advertisedCommand), g(n === "startup" ? "tips_startup_show" : "tips_spinner_show"), i("tengu_tip_shown", {
    tipIdLength: m(e),
    cooldownSessions: e.cooldownSessions,
    surface: c(n)
  });
}
var Drt = "cc-plugin-tips";
export { fEt, mEt, qZo, KZo, YZo, gEt, Drt };