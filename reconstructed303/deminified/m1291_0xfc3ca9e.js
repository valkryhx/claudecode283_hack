// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { oo } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { ba } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { ug } from "B:/~BUN/root/chunk-429xgjya.js";
import { Uk, PN } from "B:/~BUN/root/chunk-xf25v2pj.js";
import { Y8e, KTo } from "B:/~BUN/root/chunk-rnh5g2g4.js";
import { NU, Vve } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { Uso } from "B:/~BUN/root/chunk-90qdynnd.js";
import { FS } from "B:/~BUN/root/chunk-gygbhz84.js";
import { Eoo } from "B:/~BUN/root/chunk-9rt7ms4d.js";
var w = ["CLAUDE_BRIDGE_BASE_URL", "USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL"];
function v() {
  let e = ug();
  if (e !== void 0 && w.some(item => process.env[item] !== e[item])) return;
  try {
    return PN();
  } catch {
    return;
  }
}
function g(reason, r = "bridge_inbox_fetch") {
  return m(r, reason), {
    ok: !1,
    reason: reason
  };
}
async function l(e) {
  let supervisedBridgeSession = oo().supervisedBridgeSession;
  if (supervisedBridgeSession === null) return {
    stop: "no_bridge"
  };
  if (At()) return {
    stop: "traffic_disabled"
  };
  if (!NU()) return {
    stop: "no_token"
  };
  let baseUrl = v();
  if (baseUrl === void 0) return {
    stop: "base_url_override"
  };
  let {
      credentials: credentials,
      storageV5: storageV5
    } = e,
    i = await Uk(credentials);
  if (i === void 0) return {
    stop: "no_token"
  };
  let stop = await p(supervisedBridgeSession, e, i);
  if (stop) return {
    stop: stop
  };
  try {
    await ba({
      credentials: credentials,
      storageV5: storageV5
    });
  } catch (error) {
    t(`[bridge] supervised send: token refresh failed: ${d(error)}`, {
      level: "error"
    });
  }
  let accessToken = await Uk(credentials);
  if (accessToken === void 0) return {
    stop: "no_token"
  };
  let deviceToken = await FS(),
    stop_2 = await p(supervisedBridgeSession, e, accessToken, {
      fresh: !0
    });
  if (stop_2) return {
    stop: stop_2
  };
  return {
    send: {
      sessionId: supervisedBridgeSession.bridgeSessionId,
      baseUrl: baseUrl,
      accessToken: accessToken,
      deviceToken: deviceToken
    }
  };
}
function Fri() {
  return oo().supervisedBridgeSession !== null;
}
async function Hri(e, repo, prNumber, o) {
  let n = await l(o);
  if ("stop" in n) return g(n.stop, KTo(e));
  let {
    sessionId: sessionId,
    baseUrl: baseUrl_2,
    accessToken: accessToken_2,
    deviceToken: deviceToken_2
  } = n.send;
  return Y8e(e, {
    sessionId: sessionId,
    repo: repo,
    prNumber: prNumber,
    baseUrl: baseUrl_2,
    getAccessToken: () => accessToken_2,
    getTrustedDeviceToken: () => Promise.resolve(deviceToken_2)
  });
}
function S(e, {
  credentials: credentials_2,
  storageV5: storageV5_2
}, o) {
  if (e.inboxOwner !== void 0) return e.inboxOwner;
  let n = {
    mint: Eoo({
      getAccessToken: () => o,
      storageV5: storageV5_2,
      credentials: credentials_2,
      presetOwner: e.owner
    }),
    changed: !1
  };
  e.inboxOwner = n;
  let i = s => {
    if (!s && e.inboxOwner === n) e.inboxOwner = void 0;
  };
  return n.mint.then(s => i(s.pin !== void 0 || s.reason === "not_owner"), () => i(!1)), n;
}
async function p(e, r, a, o) {
  if (!Vve()) return;
  if (e.owner === void 0) return "owner_unverified";
  let n = S(e, r, a);
  if (n.changed) return "owner_changed";
  let i;
  try {
    i = await n.mint;
  } catch (error) {
    return t(`[bridge] inbox fetch: owner pin could not be minted: ${d(error)}`, {
      level: "error"
    }), "owner_unverified";
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
      return;
  }
  if (o?.fresh || i.pin.identityLooksChanged()) {
    let s = await i.pin.confirmChanged(o);
    if (s === "changed" || n.changed) return n.changed = !0, "owner_changed";
    if (s === "inconclusive") return "owner_unverified";
  }
  if (o?.fresh && !i.pin.ownerVerified()) return "owner_unverified";
  return n.changed ? "owner_changed" : void 0;
}
async function woo(fileId, r) {
  let a = await l(r);
  if ("stop" in a) return g(a.stop);
  let {
    sessionId: sessionId_2,
    baseUrl: baseUrl_3,
    accessToken: accessToken_3,
    deviceToken: deviceToken_3
  } = a.send;
  return Uso({
    sessionId: sessionId_2,
    fileId: fileId,
    baseUrl: baseUrl_3,
    getAccessToken: () => accessToken_3,
    getTrustedDeviceToken: () => Promise.resolve(deviceToken_3)
  });
}
export { Fri, Hri, woo };