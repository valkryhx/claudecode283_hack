// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  jn
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  Cg,
  Yo,
  wJ,
  Cjn,
  UDs
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  iS,
  $Fe,
  ASe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  rte
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  uGe
} from "B:/~BUN/root/chunk-x4zqd4cy.js";
import {
  dLe
} from "B:/~BUN/root/chunk-kh33ctc6.js";
var oQn = "target is this session itself \u2014 there is no one else to send to",
  u = `address the main conversation as "${Cg}"`;

function kKt(e) {
  let {
    ownMessagingSocket: s
  } = import.meta.require("B:/~BUN/root/chunk-7g5ms3d2.js"), n = s();
  return n !== void 0 && $Fe(e, n)
}

function u6e(e) {
  let {
    ownMessagingSocket: s
  } = import.meta.require("B:/~BUN/root/chunk-7g5ms3d2.js"), n = s();
  return n !== void 0 && ASe(e, n)
}

function d(e) {
  let {
    ownMessagingSocket: s
  } = import.meta.require("B:/~BUN/root/chunk-7g5ms3d2.js"), n = s(), t = wJ(e);
  return n !== void 0 && t !== null && UDs(t.ref, n)
}

function $_n(e, s) {
  return d(e) && !kKt(s)
}

function U_n(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`
}

function uoi(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`
}

function _it(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`
}

function Fhe(e) {
  let s = jn(e);
  return [uGe()?.bridgeSessionId, dLe()].some((n) => typeof n === "string" && jn(n) === s)
}

function tF(e) {
  return e.teammateContext !== void 0 || e.agentContext !== void 0 && rte(e.agentContext)
}

function YTt(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`
}

function vKt(e, s, n = u) {
  let {
    getRegisteredSessionName: t
  } = import.meta.require("B:/~BUN/root/chunk-hfvre0s6.js"), o = Cjn(t()?.name), i = o === null ? "this session" : `this session ("${o}")`;
  return s ? `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)` : `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`
}

function EKt(e) {
  return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally
}

function TKt(e) {
  let {
    getRegisteredSessionName: s,
    getHeldSessionNames: n
  } = import.meta.require("B:/~BUN/root/chunk-hfvre0s6.js"), {
    ownMessagingSocket: t
  } = import.meta.require("B:/~BUN/root/chunk-7g5ms3d2.js"), o = s(), i = t();
  if (o === void 0 || i === void 0 || iS(e).scheme !== "other") return "no";
  let r = wJ(e);
  if (r !== null) {
    let a = Yo(r.name);
    if (!UDs(r.ref, i)) return "no";
    if (a !== Yo(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note"
    }
  } else if (Yo(e) !== Yo(o.name)) return "no";
  let {
    getSessionNamingState: l
  } = import.meta.require("B:/~BUN/root/chunk-3remrqga.js");
  return o.source === "derived" || (o.source === "user" || o.source === "collision") && l().userTypedName === o.name ? "categorical" : "note"
}

function Ele(e, s, n = u) {
  let {
    getRegisteredSessionName: t
  } = import.meta.require("B:/~BUN/root/chunk-hfvre0s6.js"), o = Cjn(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`
  }
  return o !== null ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.` : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`
}
export {
  oQn,
  kKt,
  u6e,
  $_n,
  U_n,
  uoi,
  _it,
  Fhe,
  tF,
  YTt,
  vKt,
  EKt,
  TKt,
  Ele
};
