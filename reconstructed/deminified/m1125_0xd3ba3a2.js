// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { m } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { $i } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Kr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { my } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { Ak, dI } from "B:/~BUN/root/chunk-8gym6yya.js";
import { YNe, BIr } from "B:/~BUN/root/chunk-06rekkgz.js";
import { UB, Xae } from "B:/~BUN/root/chunk-x8507144.js";
import { Jur } from "B:/~BUN/root/chunk-ngh990hn.js";
import { gy } from "B:/~BUN/root/chunk-hjery5bx.js";
import { Xur } from "B:/~BUN/root/chunk-vpwqf5vh.js";
var w = ["CLAUDE_BRIDGE_BASE_URL", "USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL"];
function v() {
  let e = my();
  if (e !== void 0 && w.some(item => process.env[item] !== e[item])) return;
  try {
    return dI();
  } catch {
    return;
  }
}
function p(reason, r = "bridge_inbox_fetch") {
  return m(r, reason), {
    ok: !1,
    reason: reason
  };
}
async function g(e) {
  let supervisedBridgeSession = Kr().supervisedBridgeSession;
  if (supervisedBridgeSession === null) return {
    stop: "no_bridge"
  };
  if (It()) return {
    stop: "traffic_disabled"
  };
  if (!UB()) return {
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
    i = await Ak(credentials);
  if (i === void 0) return {
    stop: "no_token"
  };
  let stop = await f(supervisedBridgeSession, e, i);
  if (stop) return {
    stop: stop
  };
  try {
    await $i({
      credentials: credentials,
      storageV5: storageV5
    });
  } catch (error) {
    t(`[bridge] supervised send: token refresh failed: ${l(error)}`, {
      level: "error"
    });
  }
  let accessToken = await Ak(credentials);
  if (accessToken === void 0) return {
    stop: "no_token"
  };
  let deviceToken = await gy(),
    stop_2 = await f(supervisedBridgeSession, e, accessToken, {
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
function l4o() {
  return Kr().supervisedBridgeSession !== null;
}
async function c4o(e, repo, prNumber, o) {
  let n = await g(o);
  if ("stop" in n) return p(n.stop, BIr(e));
  let {
    sessionId: sessionId,
    baseUrl: baseUrl_2,
    accessToken: accessToken_2,
    deviceToken: deviceToken_2
  } = n.send;
  return YNe(e, {
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
    mint: Xur({
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
async function f(e, r, d, o) {
  if (!Xae()) return;
  if (e.owner === void 0) return "owner_unverified";
  let n = S(e, r, d);
  if (n.changed) return "owner_changed";
  let i;
  try {
    i = await n.mint;
  } catch (error) {
    return t(`[bridge] inbox fetch: owner pin could not be minted: ${l(error)}`, {
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
async function qur(fileId, r) {
  let d = await g(r);
  if ("stop" in d) return p(d.stop);
  let {
    sessionId: sessionId_2,
    baseUrl: baseUrl_3,
    accessToken: accessToken_3,
    deviceToken: deviceToken_3
  } = d.send;
  return Jur({
    sessionId: sessionId_2,
    fileId: fileId,
    baseUrl: baseUrl_3,
    getAccessToken: () => accessToken_3,
    getTrustedDeviceToken: () => Promise.resolve(deviceToken_3)
  });
}
export { l4o, c4o, qur };