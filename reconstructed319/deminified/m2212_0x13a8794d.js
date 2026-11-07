// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Lhe } from "B:/~BUN/root/chunk-ex6b1s3x.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { FI } from "B:/~BUN/root/chunk-jypg1bby.js";
import { hn, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { qZt } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { Ad } from "B:/~BUN/root/chunk-x4zqd4cy.js";
import { JW, pD } from "B:/~BUN/root/chunk-q2s07yzr.js";
import { kar } from "B:/~BUN/root/chunk-ecxkb505.js";
import { eRe as message_2 } from "B:/~BUN/root/chunk-yrh147c7.js";
import { FFt as message_4, ZCe, gAr, b_o } from "B:/~BUN/root/chunk-w0nyevkg.js";
import { C7n } from "B:/~BUN/root/chunk-7p033aw4.js";
import { h2e } from "B:/~BUN/root/chunk-xr3thd43.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
function k() {
  return !fe().remoteDialogSeen;
}
async function OTt(n) {
  let o = await qZt();
  if (o) {
    if (o.orgPolicyDenied) FI("allow_remote_control", "slash_command");
    return {
      kind: "error",
      message: o.reason
    };
  }
  let message = await kar();
  if (message) return {
    kind: "error",
    message: message
  };
  if (!(X() && n !== void 0 ? await pD(n) : JW())) return {
    kind: "error",
    message: message_2
  };
  if (await b_o(n), await gAr()) {
    let message_3 = h2e();
    if (message_3 !== null) return {
      kind: "error",
      message: message_3
    };
    if (ZCe()) return {
      kind: "error",
      message: message_4
    };
    return {
      kind: "unenrolled-trusted-device"
    };
  }
  return t("[bridge] Prerequisites passed, enabling bridge"), null;
}
function OGo() {
  return {
    askedAs: p(hn())
  };
}
async function i_n({
  setAppState: setAppState,
  requestDialog: requestDialog,
  dialogStore: dialogStore,
  storageV5: storageV5,
  via: via,
  name: d,
  sessionGroupingId: i,
  consent: consent,
  onCalloutRequested: onCalloutRequested
}) {
  C7n(storageV5);
  let c = {
    action: b("connect"),
    via: b(via)
  };
  if (consent !== void 0 && p(hn()) !== consent.askedAs) return t("[bridge:repl] Remote Control consent was given under a different account than is signed in now \u2014 not enabling"), {
    kind: "account_changed"
  };
  if (dialogStore?.getState().open.some(r => r.kind === Lhe.kind)) return {
    kind: "already_asking"
  };
  if (k()) {
    let r;
    if (consent !== void 0) r = !0;else {
      if (!requestDialog) return {
        kind: "cannot_ask"
      };
      setAppState(m => m.replBridgeInitialName === d && m.replBridgeSessionGroupingId === i ? m : {
        ...m,
        replBridgeInitialName: d,
        replBridgeSessionGroupingId: i
      }), onCalloutRequested?.();
      let e = OGo(),
        B = await requestDialog(Lhe, {}, {
          place: "under"
        });
      if (r = B === "enable" && p(hn()) === e.askedAs, B === "enable" && !r) t("[bridge:repl] Remote Control callout answered under a different account than it was asked for \u2014 not enabling");
    }
    if (r && consent === void 0) Le(e => e.remoteDialogSeen ? e : {
      ...e,
      remoteDialogSeen: !0
    }, storageV5);
    if (r) l("tengu_bridge_command", c);
    return setAppState(e => {
      if (r) return e.replBridgeEnabled && e.replBridgeExplicit && !e.replBridgeOutboundOnly ? e : {
        ...e,
        replBridgeEnabled: !0,
        replBridgeExplicit: !0,
        replBridgeOutboundOnly: !1,
        replBridgeError: void 0,
        replBridgeErrorKind: void 0,
        ...(consent !== void 0 && {
          replBridgeInitialName: d,
          replBridgeSessionGroupingId: i
        })
      };
      return e.replBridgeInitialName === void 0 && e.replBridgeSessionGroupingId === void 0 ? e : {
        ...e,
        replBridgeInitialName: void 0,
        replBridgeSessionGroupingId: void 0
      };
    }), r ? {
      kind: "enabled"
    } : {
      kind: "declined"
    };
  }
  l("tengu_bridge_command", c);
  let f = !1;
  return setAppState(r => {
    if (r.replBridgeEnabled && !r.replBridgeOutboundOnly) {
      if (i !== void 0) f = !0;
      return r;
    }
    return {
      ...r,
      replBridgeEnabled: !0,
      replBridgeExplicit: !0,
      replBridgeOutboundOnly: !1,
      replBridgeInitialName: d,
      replBridgeSessionGroupingId: i,
      replBridgeError: void 0,
      replBridgeErrorKind: void 0
    };
  }), f ? {
    kind: "already_on_project_fixed"
  } : {
    kind: "enabled"
  };
}
async function kni({
  getAppState: getAppState,
  signal: signal,
  timeoutMs: timeoutMs,
  pollMs = 200
}) {
  let g = Date.now() + timeoutMs;
  for (;;) {
    signal.throwIfAborted();
    let d = Ad();
    if (d !== null && d.outboundOnly !== !0) return "connected";
    let i = getAppState();
    if (!i.replBridgeEnabled || i.replBridgeError !== void 0) return "failed";
    if (Date.now() >= g) return "timed_out";
    await J(pollMs, signal);
  }
}
function p(n) {
  return n && `${n.accountUuid}/${n.organizationUuid || ""}`;
}
export { OTt, OGo, i_n, kni };