// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Ai
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  yt,
  qn,
  stt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Rt,
  jt,
  kFe,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  o,
  E,
  I,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var P = p(() => {
  let e = u({
      enable_email: I().nullish(),
      enable_push: I().nullish()
    }),
    t = u({
      bogosort: e.nullish(),
      code_requires_action: e.nullish()
    }),
    r = u({
      has_active_channel: I(),
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
  k = new W(() => ({
    reachability: Hs(void 0),
    hydrated: De()
  }));

function i() {
  return k.of(H().host)
}

function Ker() {
  return i().reachability.getState()
}

function qer(e) {
  return i().reachability.subscribe(e)
}

function xli(e) {
  return i().hydrated.subscribe(e)
}

function N() {
  let e = yt(),
    t = fe();
  return {
    agentPushNotifEnabled: e.agentPushNotifEnabled ?? kFe("agentPushNotifEnabled", t.agentPushNotifEnabled),
    inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? kFe("inputNeededNotifEnabled", t.inputNeededNotifEnabled)
  }
}
var S = "/api/claude_code/notification/preferences";

function d() {
  return Rt()
}
async function R() {
  if (!d()) return {
    ok: !1,
    reason: "no_auth"
  };
  try {
    let e = await jt.get(S, {
      timeout: y
    });
    if (!e.ok) return {
      ok: !1,
      reason: "fetch_failed"
    };
    let t = P().safeParse(e.data);
    if (!t.success) return V("warn", "notif_prefs_fetch_parse_failed", {
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
    } = Ai(e);
    return V("warn", "notif_prefs_fetch_failed", {
      kind: t
    }), {
      ok: !1,
      reason: "fetch_failed"
    }
  }
}
async function v(e) {
  if (!d()) return;
  try {
    if (!(await jt.patch(S, e, {
        timeout: y
      })).ok) {
      c("notif_prefs_patch", "no_auth");
      return
    }
    V("info", "notif_prefs_patch_ok", {}), g("notif_prefs_patch")
  } catch (t) {
    let {
      kind: r
    } = Ai(t);
    V("warn", "notif_prefs_patch_failed", {
      kind: r
    }), m("notif_prefs_patch", "http_error")
  }
}

function wYo() {
  stt().then(() => {
    let e = N(),
      t = {};
    if (typeof e.agentPushNotifEnabled === "boolean") t.bogosort = {
      enable_push: e.agentPushNotifEnabled
    };
    if (typeof e.inputNeededNotifEnabled === "boolean") t.code_requires_action = {
      enable_push: e.inputNeededNotifEnabled
    };
    if (Object.keys(t).length === 0) return;
    return v({
      preferences: {
        feature_preference: t
      }
    })
  }).catch(a)
}
async function Pli(e) {
  if (!d()) {
    c("notif_prefs_hydrate", "no_auth"), i().reachability.setState(() => null), V("info", "notif_prefs_hydrate_skipped", {
      reason: "no_auth"
    });
    return
  }
  let t = await R();
  if (!t.ok) {
    m("notif_prefs_hydrate", t.reason), i().reachability.setState(() => null), V("info", "notif_prefs_hydrate_skipped", {
      reason: t.reason
    });
    return
  }
  let r = t.prefs,
    n = r.push_reachability ?? null;
  if (i().reachability.setState(() => n), n) l("tengu_push_reachability", {
    has_active_channel: n.has_active_channel,
    platform_count: n.platforms.length
  });
  let _ = r.preferences?.feature_preference,
    f = _?.bogosort?.enable_push,
    h = _?.code_requires_action?.enable_push,
    b = N(),
    s = {};
  if (b.agentPushNotifEnabled === void 0 && typeof f === "boolean") s.agentPushNotifEnabled = f;
  if (b.inputNeededNotifEnabled === void 0 && typeof h === "boolean") s.inputNeededNotifEnabled = h;
  if (V("info", "notif_prefs_hydrate_result", {
      has_active_channel: n?.has_active_channel,
      server_bogosort: f,
      server_code_requires_action: h,
      seeded: Object.keys(s).length > 0
    }), Object.keys(s).length === 0) {
    g("notif_prefs_hydrate");
    return
  }
  await qn("userSettings", s, void 0, e), i().hydrated.emit(), g("notif_prefs_hydrate")
}
export {
  Ker,
  qer,
  xli,
  wYo,
  Pli
};
