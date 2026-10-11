// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y,
  c,
  bn
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  st,
  te
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Vn
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  fze,
  l4,
  kto,
  UH
} from "B:/~BUN/root/chunk-90dp6ktw.js";
import {
  Ybn,
  z2,
  fYr,
  kQn,
  t2t
} from "B:/~BUN/root/chunk-xwmqqrba.js";
import {
  cer,
  evn,
  Tue
} from "B:/~BUN/root/chunk-jgc88y6c.js";
import {
  vu
} from "B:/~BUN/root/chunk-xmtkv29j.js";
import {
  cu
} from "B:/~BUN/root/chunk-gsxez0fk.js";
var _1e = "tips";
class a {
  seated = void 0;
  picker = void 0;
  seat(e) {
    this.seated = e
  }
  vacate(e) {
    if (this.seated === e) this.seated = void 0
  }
  current() {
    return this.seated
  }
  install(e) {
    this.picker = e
  }
  pickDue() {
    if (this.picker === void 0 || this.seated === void 0) return !1;
    return this.picker(this.seated), !0
  }
}
var UXe = new q(() => new a);

function u(e) {
  if (e.id.startsWith(cer) || e.id.startsWith(evn)) return y("org-tip");
  if (e.id.startsWith(Ybn)) return e.pluginId !== void 0 && cu(e.pluginId).marketplace === vu ? bn(e.id) : y("marketplace-plugin:org-marketplace");
  return fYr(e.id) ? bn(e.id) : y("other")
}

function m(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let n = e.map((t) => ({
    tip: t,
    sessions: UH(t.id)
  }));
  return n.sort((t, r) => {
    if (t.sessions !== r.sessions) return r.sessions - t.sessions;
    return (r.tip.priority ?? 0) - (t.tip.priority ?? 0)
  }), n[0]?.tip
}
async function z6r(e) {
  if (Vn().spinnerTipsEnabled === !1) return;
  let n = await t2t(e);
  if (n.length === 0) return;
  return m(n)
}
async function G6r(e, n) {
  try {
    return await e.content(n)
  } catch (t) {
    return z2.of(n.session.host).failedTipIds.add(e.id), d(st(te(t), "tip content threw")), ""
  }
}
var s = 2;
class g {
  fired = new Set;
  fire(e, n) {
    if (e <= 0) return;
    let t = e > n ? "true" : "false",
      r = e >= s && n < s ? "true" : "false",
      o = `${t}|${r}`;
    if (this.fired.has(o)) return;
    this.fired.add(o), i("tengu_dead_probe_legacy_plugin_tip_counts", {
      changes_max: c(t),
      changes_outcome: c(r)
    })
  }
}
var T = new q(() => new g);

function h() {
  return T.of(j().host)
}
async function V6r(e) {
  if (Vn().spinnerTipsEnabled === !1) return;
  let n = z2.of(e.session.host);
  if (Tue()) return;
  let t = await n.getMarketplacePluginTips(e.storageV5);
  if (t.length === 0) return;
  let r = [];
  for (let o of t) {
    if (!o.pluginId) continue;
    if (n.failedTipIds.has(o.id)) continue;
    let p = l4(o.id),
      f = kto(o.pluginId);
    if (h().fire(f, p), Math.max(p, f) >= s) continue;
    if (UH(o.id) < o.cooldownSessions) continue;
    if (await kQn(o, e)) r.push(o)
  }
  return m(r)
}

function BXe(e, n = "spinner", t) {
  fze(e.id, t, e.advertisedCommand), _(n === "startup" ? "tips_startup_show" : "tips_spinner_show"), i("tengu_tip_shown", {
    tipIdLength: u(e),
    cooldownSessions: e.cooldownSessions,
    surface: c(n)
  })
}
export {
  UXe,
  z6r,
  G6r,
  V6r,
  BXe,
  _1e
};
