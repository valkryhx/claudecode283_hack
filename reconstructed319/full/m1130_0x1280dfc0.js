// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  q,
  dWt,
  fVs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  Ke
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  ga,
  we,
  Ao
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Qdn
} from "B:/~BUN/root/chunk-4vxp7kvb.js";
import {
  vi
} from "B:/~BUN/root/chunk-knfpag6d.js";
import {
  g$
} from "B:/~BUN/root/chunk-27h4st9h.js";

function m() {
  let e = fVs(),
    n = e === void 0 ? Qdn() : void 0,
    [t, o] = e !== void 0 ? [Math.max(0, Date.now() - e), "session_switch"] : n !== void 0 ? [Math.max(0, Date.now() - n), "spawn_stamp"] : [q() ? void 0 : Math.round(process.uptime() * 1000), "process_start"];
  return {
    msSinceSessionStart: t,
    startAnchor: f(o),
    isRemoteSession: Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID)
  }
}

function _(e) {
  let n = dWt();
  if (n.has(e)) return !1;
  return n.add(e), !0
}

function Psr(e, n) {
  if (e === 0 || !_("tools_added")) return;
  l("tengu_chrome_tools_added", {
    ...m(),
    toolCount: e,
    discoverySource: f(n)
  })
}

function Osr(e) {
  if (!_("tool_attempted")) return;
  l("tengu_chrome_tool_attempted", {
    ...m(),
    ...e && {
      messageClientPlatform: g$(e)
    }
  })
}

function _fi(e) {
  if (!_("bridge_connected")) return;
  l("tengu_chrome_bridge_connected", {
    ...m(),
    bridgeStatus: de(e)
  })
}

function bfi() {
  if (!_("extension_connected")) return;
  l("tengu_chrome_extension_connected", m())
}

function Sfi(e) {
  l("tengu_chrome_tool_call_disconnected", {
    ...m(),
    tokenAccountMismatch: e
  })
}
var A = 5000,
  E = 4000,
  h = 1000,
  b = 4000,
  M = 1000,
  x = 250;

function wfi(e) {
  e.browserRosterVersion++, e.browserRosterChanged.emit()
}
async function kfi(e) {
  let n = vi(),
    t = n.bridgeBinding,
    o = t?.socketClient;
  if (t === void 0 || o?.listConnectedExtensions === void 0 || o.hasActiveSelection?.() === !0 || !v("tengu_hushed_lantern", !0)) return !1;
  if (!(Boolean(t.context.getPersistedDeviceId?.()) || ((await we(Promise.resolve().then(() => t.context.getLocalDeviceIds?.()), h).catch(() => {
      return
    }))?.size ?? 0) > 0)) return !1;
  if (n.relayConnectFailed === o && !o.isConnected()) return !1;
  let w = o.listConnectedExtensions.bind(o),
    d = ga.monotonicNow(),
    u = n.noBrowserFound?.client === o && n.noBrowserFound.rosterVersion === n.browserRosterVersion,
    r = u ? "none_cached" : await Ao(y(n, o, w), e, () => new Ke).catch((p) => {
      if (e.aborted) return "aborted";
      return a(p), "failed"
    });
  if (r !== "present" && r !== "roster_changed" && !u) c("chrome_permission_prompt", `browser_check_${r}`, {
    elapsed_ms: Math.round(ga.monotonicNow() - d)
  });
  return r === "none" || r === "none_short_wait" || r === "none_cached"
}
async function vfi() {
  let e = vi().bridgeBinding?.socketClient;
  if (e?.listConnectedExtensions === void 0) return !1;
  let n = await C(e, e.listConnectedExtensions.bind(e), h).catch((t) => (a(t), "failed"));
  if (n !== "none" && n !== "present") c("chrome_setup_card_answer", `browser_check_${n}`);
  return n === "none"
}

function Efi(e) {
  return Ao(Promise.resolve(vi().bridgeBinding?.socketClient.awaitPreviousBrowser?.()), e, () => new Ke).then(() => !0, () => !1)
}
async function y(e, n, t) {
  let o = ga.now() + A;
  if (await we(n.ensureConnected(), E) !== !0) return e.relayConnectFailed = n, "connect_failed";
  e.relayConnectFailed = void 0;
  let s = e.browserRosterVersion,
    w = ga.now(),
    d = await C(n, t, h);
  if (d !== "none" || e.browserRosterVersion !== s) return d === "none" ? "roster_changed" : d;
  let u = Math.min(b, o - ga.now() - x);
  if (u < M) return "no_time_to_wait";
  let r = () => {},
    p = new Promise((S) => {
      r = e.browserRosterChanged.subscribe(S)
    });
  if (await we(p, u).finally(() => r()), e.browserRosterVersion !== s) return "roster_changed";
  let g = await C(n, t, h);
  if (g !== "none" || e.browserRosterVersion !== s) return g === "none" ? "roster_changed" : g;
  if (ga.now() - w < b) return "none_short_wait";
  return e.noBrowserFound = {
    client: n,
    rosterVersion: s
  }, "none"
}
async function C(e, n, t) {
  let o = await we(n(), t);
  if (!e.isConnected()) return "connection_lost";
  if (o === void 0) return "list_timeout";
  return o.length > 0 ? "present" : "none"
}
export {
  Psr,
  Osr,
  _fi,
  bfi,
  Sfi,
  wfi,
  kfi,
  vfi,
  Efi
};
