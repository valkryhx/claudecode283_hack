// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  At
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  oo
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  ba
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  ug
} from "B:/~BUN/root/chunk-429xgjya.js";
import {
  Uk,
  PN
} from "B:/~BUN/root/chunk-xf25v2pj.js";
import {
  Y8e,
  KTo
} from "B:/~BUN/root/chunk-rnh5g2g4.js";
import {
  NU,
  Vve
} from "B:/~BUN/root/chunk-1g2t7gtx.js";
import {
  Uso
} from "B:/~BUN/root/chunk-90qdynnd.js";
import {
  FS
} from "B:/~BUN/root/chunk-gygbhz84.js";
import {
  Eoo
} from "B:/~BUN/root/chunk-9rt7ms4d.js";
var w = ["CLAUDE_BRIDGE_BASE_URL", "USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL"];

function v() {
  let e = ug();
  if (e !== void 0 && w.some((r) => process.env[r] !== e[r])) return;
  try {
    return PN()
  } catch {
    return
  }
}

function g(e, r = "bridge_inbox_fetch") {
  return m(r, e), {
    ok: !1,
    reason: e
  }
}
async function l(e) {
  let r = oo().supervisedBridgeSession;
  if (r === null) return {
    stop: "no_bridge"
  };
  if (At()) return {
    stop: "traffic_disabled"
  };
  if (!NU()) return {
    stop: "no_token"
  };
  let a = v();
  if (a === void 0) return {
    stop: "base_url_override"
  };
  let {
    credentials: o,
    storageV5: n
  } = e, i = await Uk(o);
  if (i === void 0) return {
    stop: "no_token"
  };
  let s = await p(r, e, i);
  if (s) return {
    stop: s
  };
  try {
    await ba({
      credentials: o,
      storageV5: n
    })
  } catch (_) {
    t(`[bridge] supervised send: token refresh failed: ${d(_)}`, {
      level: "error"
    })
  }
  let u = await Uk(o);
  if (u === void 0) return {
    stop: "no_token"
  };
  let c = await FS(),
    f = await p(r, e, u, {
      fresh: !0
    });
  if (f) return {
    stop: f
  };
  return {
    send: {
      sessionId: r.bridgeSessionId,
      baseUrl: a,
      accessToken: u,
      deviceToken: c
    }
  }
}

function Fri() {
  return oo().supervisedBridgeSession !== null
}
async function Hri(e, r, a, o) {
  let n = await l(o);
  if ("stop" in n) return g(n.stop, KTo(e));
  let {
    sessionId: i,
    baseUrl: s,
    accessToken: u,
    deviceToken: c
  } = n.send;
  return Y8e(e, {
    sessionId: i,
    repo: r,
    prNumber: a,
    baseUrl: s,
    getAccessToken: () => u,
    getTrustedDeviceToken: () => Promise.resolve(c)
  })
}

function S(e, {
  credentials: r,
  storageV5: a
}, o) {
  if (e.inboxOwner !== void 0) return e.inboxOwner;
  let n = {
    mint: Eoo({
      getAccessToken: () => o,
      storageV5: a,
      credentials: r,
      presetOwner: e.owner
    }),
    changed: !1
  };
  e.inboxOwner = n;
  let i = (s) => {
    if (!s && e.inboxOwner === n) e.inboxOwner = void 0
  };
  return n.mint.then((s) => i(s.pin !== void 0 || s.reason === "not_owner"), () => i(!1)), n
}
async function p(e, r, a, o) {
  if (!Vve()) return;
  if (e.owner === void 0) return "owner_unverified";
  let n = S(e, r, a);
  if (n.changed) return "owner_changed";
  let i;
  try {
    i = await n.mint
  } catch (s) {
    return t(`[bridge] inbox fetch: owner pin could not be minted: ${d(s)}`, {
      level: "error"
    }), "owner_unverified"
  }
  if (i.pin === void 0) switch (i.reason) {
    case "no_token":
      return "no_token";
    case "no_identity":
    case "unresolved":
      return "owner_unverified";
    case "not_owner":
      return n.changed = !0, "owner_changed";
    case "not_store_login":
      return "owner_unverified";
    case "disabled":
      return
  }
  if (o?.fresh || i.pin.identityLooksChanged()) {
    let s = await i.pin.confirmChanged(o);
    if (s === "changed" || n.changed) return n.changed = !0, "owner_changed";
    if (s === "inconclusive") return "owner_unverified"
  }
  if (o?.fresh && !i.pin.ownerVerified()) return "owner_unverified";
  return n.changed ? "owner_changed" : void 0
}
async function woo(e, r) {
  let a = await l(r);
  if ("stop" in a) return g(a.stop);
  let {
    sessionId: o,
    baseUrl: n,
    accessToken: i,
    deviceToken: s
  } = a.send;
  return Uso({
    sessionId: o,
    fileId: e,
    baseUrl: n,
    getAccessToken: () => i,
    getTrustedDeviceToken: () => Promise.resolve(s)
  })
}
export {
  Fri,
  Hri,
  woo
};
