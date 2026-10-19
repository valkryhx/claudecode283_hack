// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { pi } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { ut, In, aze } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Et, Gt, vEe, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
import { o, v, M, T, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var P = f(() => {
  let e = u({
      enable_email: M().nullish(),
      enable_push: M().nullish()
    }),
    t = u({
      bogosort: e.nullish(),
      code_requires_action: e.nullish()
    }),
    r = u({
      has_active_channel: M(),
      platforms: T(o()).nullish().transform(n => n ?? []),
      most_recent_token_refresh: o().nullish()
    });
  return u({
    account_id: v().nullish(),
    organization_id: v().nullish(),
    preferences: u({
      feature_preference: t.nullish()
    }).nullish(),
    push_reachability: r.nullish()
  });
});
var timeout = 1e4,
  E = new z(() => ({
    reachability: _s(void 0),
    hydrated: Me()
  }));
function a() {
  return E.of(j().host);
}
function Ixn() {
  return a().reachability.getState();
}
function Mxn(e) {
  return a().reachability.subscribe(e);
}
function Nss(e) {
  return a().hydrated.subscribe(e);
}
function N() {
  let e = ut(),
    t = ue();
  return {
    agentPushNotifEnabled: e.agentPushNotifEnabled ?? vEe("agentPushNotifEnabled", t.agentPushNotifEnabled),
    inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? vEe("inputNeededNotifEnabled", t.inputNeededNotifEnabled)
  };
}
var S = "/api/claude_code/notification/preferences";
function d() {
  return Et();
}
async function k() {
  if (!d()) return {
    ok: !1,
    reason: "no_auth"
  };
  try {
    let e = await Gt.get(S, {
      timeout: timeout
    });
    if (!e.ok) return {
      ok: !1,
      reason: "fetch_failed"
    };
    let t = P().safeParse(e.data);
    if (!t.success) return X("warn", "notif_prefs_fetch_parse_failed", {
      issues: t.error.issues.map(item => item.path.join(".")).join(",")
    }), {
      ok: !1,
      reason: "parse_failed"
    };
    return {
      ok: !0,
      prefs: t.data
    };
  } catch (error) {
    let {
      kind: kind
    } = pi(error);
    return X("warn", "notif_prefs_fetch_failed", {
      kind: kind
    }), {
      ok: !1,
      reason: "fetch_failed"
    };
  }
}
async function R(e) {
  if (!d()) return;
  try {
    if (!(await Gt.patch(S, e, {
      timeout: timeout
    })).ok) {
      p("notif_prefs_patch", "no_auth");
      return;
    }
    X("info", "notif_prefs_patch_ok", {}), g("notif_prefs_patch");
  } catch (error) {
    let {
      kind: kind_2
    } = pi(error);
    X("warn", "notif_prefs_patch_failed", {
      kind: kind_2
    }), m("notif_prefs_patch", "http_error");
  }
}
function G7r() {
  aze().then(() => {
    let e = N(),
      feature_preference = {};
    if (typeof e.agentPushNotifEnabled === "boolean") feature_preference.bogosort = {
      enable_push: e.agentPushNotifEnabled
    };
    if (typeof e.inputNeededNotifEnabled === "boolean") feature_preference.code_requires_action = {
      enable_push: e.inputNeededNotifEnabled
    };
    if (Object.keys(feature_preference).length === 0) return;
    return R({
      preferences: {
        feature_preference: feature_preference
      }
    });
  }).catch(l);
}
async function Fss(e) {
  if (!d()) {
    p("notif_prefs_hydrate", "no_auth"), a().reachability.setState(() => null), X("info", "notif_prefs_hydrate_skipped", {
      reason: "no_auth"
    });
    return;
  }
  let t = await k();
  if (!t.ok) {
    m("notif_prefs_hydrate", t.reason), a().reachability.setState(() => null), X("info", "notif_prefs_hydrate_skipped", {
      reason: t.reason
    });
    return;
  }
  let prefs = t.prefs,
    n = prefs.push_reachability ?? null;
  if (a().reachability.setState(() => n), n) i("tengu_push_reachability", {
    has_active_channel: n.has_active_channel,
    platform_count: n.platforms.length
  });
  let _ = prefs.preferences?.feature_preference,
    server_bogosort = _?.bogosort?.enable_push,
    server_code_requires_action = _?.code_requires_action?.enable_push,
    b = N(),
    s = {};
  if (b.agentPushNotifEnabled === void 0 && typeof server_bogosort === "boolean") s.agentPushNotifEnabled = server_bogosort;
  if (b.inputNeededNotifEnabled === void 0 && typeof server_code_requires_action === "boolean") s.inputNeededNotifEnabled = server_code_requires_action;
  if (X("info", "notif_prefs_hydrate_result", {
    has_active_channel: n?.has_active_channel,
    server_bogosort: server_bogosort,
    server_code_requires_action: server_code_requires_action,
    seeded: Object.keys(s).length > 0
  }), Object.keys(s).length === 0) {
    g("notif_prefs_hydrate");
    return;
  }
  await In("userSettings", s, void 0, e), a().hydrated.emit(), g("notif_prefs_hydrate");
}
export { Ixn, Mxn, Nss, G7r, Fss };