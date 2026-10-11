// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Xs
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  K
} from "B:/~BUN/root/chunk-5px6g0cn.js";
import {
  Je,
  ln
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  pt,
  Dt,
  Mce,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Hs
} from "B:/~BUN/root/chunk-aky7m4ay.js";
import {
  o,
  E,
  M,
  C,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
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
      platforms: C(o()).nullish().transform((n) => n ?? []),
      most_recent_token_refresh: o().nullish()
    });
  return u({
    account_id: E().nullish(),
    organization_id: E().nullish(),
    preferences: u({
      feature_preference: t.nullish()
    }).nullish(),
    push_reachability: r.nullish()
  })
});
var y = 1e4,
  S = new q(() => ({
    reachability: Hs(void 0),
    hydrated: Me()
  }));

function a() {
  return S.of(j().host)
}

function bYt() {
  return a().reachability.getState()
}

function SYt(e) {
  return a().reachability.subscribe(e)
}

function joo(e) {
  return a().hydrated.subscribe(e)
}

function g() {
  let e = Je(),
    t = le();
  return {
    agentPushNotifEnabled: e.agentPushNotifEnabled ?? Mce("agentPushNotifEnabled", t.agentPushNotifEnabled),
    inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? Mce("inputNeededNotifEnabled", t.inputNeededNotifEnabled)
  }
}
var N = "/api/claude_code/notification/preferences";

function h() {
  return pt()
}
async function k() {
  if (!h()) return {
    ok: !1,
    reason: "no_auth"
  };
  try {
    let e = await Dt.get(N, {
      timeout: y
    });
    if (!e.ok) return {
      ok: !1,
      reason: "fetch_failed"
    };
    let t = P().safeParse(e.data);
    if (!t.success) return K("warn", "notif_prefs_fetch_parse_failed", {
      issues: t.error.issues.map((r) => r.path.join(".")).join(",")
    }), {
      ok: !1,
      reason: "parse_failed"
    };
    return {
      ok: !0,
      prefs: t.data
    }
  } catch (e) {
    let {
      kind: t
    } = Xs(e);
    return K("warn", "notif_prefs_fetch_failed", {
      kind: t
    }), {
      ok: !1,
      reason: "fetch_failed"
    }
  }
}
async function R(e) {
  if (!h()) return;
  try {
    if (!(await Dt.patch(N, e, {
        timeout: y
      })).ok) {
      p("notif_prefs_patch", "no_auth");
      return
    }
    K("info", "notif_prefs_patch_ok", {}), _("notif_prefs_patch")
  } catch (t) {
    let {
      kind: r
    } = Xs(t);
    K("warn", "notif_prefs_patch_failed", {
      kind: r
    }), m("notif_prefs_patch", "http_error")
  }
}

function rdr() {
  let e = g(),
    t = {};
  if (typeof e.agentPushNotifEnabled === "boolean") t.bogosort = {
    enable_push: e.agentPushNotifEnabled
  };
  if (typeof e.inputNeededNotifEnabled === "boolean") t.code_requires_action = {
    enable_push: e.inputNeededNotifEnabled
  };
  if (Object.keys(t).length === 0) return;
  R({
    preferences: {
      feature_preference: t
    }
  })
}
async function Woo(e) {
  if (!h()) {
    p("notif_prefs_hydrate", "no_auth"), a().reachability.setState(() => null), K("info", "notif_prefs_hydrate_skipped", {
      reason: "no_auth"
    });
    return
  }
  let t = await k();
  if (!t.ok) {
    m("notif_prefs_hydrate", t.reason), a().reachability.setState(() => null), K("info", "notif_prefs_hydrate_skipped", {
      reason: t.reason
    });
    return
  }
  let r = t.prefs,
    n = r.push_reachability ?? null;
  if (a().reachability.setState(() => n), n) i("tengu_push_reachability", {
    has_active_channel: n.has_active_channel,
    platform_count: n.platforms.length
  });
  let d = r.preferences?.feature_preference,
    c = d?.bogosort?.enable_push,
    l = d?.code_requires_action?.enable_push,
    b = g(),
    s = {};
  if (b.agentPushNotifEnabled === void 0 && typeof c === "boolean") s.agentPushNotifEnabled = c;
  if (b.inputNeededNotifEnabled === void 0 && typeof l === "boolean") s.inputNeededNotifEnabled = l;
  if (K("info", "notif_prefs_hydrate_result", {
      has_active_channel: n?.has_active_channel,
      server_bogosort: c,
      server_code_requires_action: l,
      seeded: Object.keys(s).length > 0
    }), Object.keys(s).length === 0) {
    _("notif_prefs_hydrate");
    return
  }
  await ln("userSettings", s, void 0, e), a().hydrated.emit(), _("notif_prefs_hydrate")
}
export {
  bYt,
  SYt,
  joo,
  rdr,
  Woo
};
