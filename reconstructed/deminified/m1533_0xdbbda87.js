// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { Om, Rr, P1, CFt, k$r } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { lh, Bce, hJ } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { Tq } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { S3e } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { Hae } from "B:/~BUN/root/chunk-zn0k3ezm.js";
var mKt = "target is this session itself \u2014 there is no one else to send to",
  u = `address the main conversation as "${Om}"`;
function d7e(e) {
  let {
      ownMessagingSocket: ownMessagingSocket
    } = import.meta.require("B:/~BUN/root/chunk-x94azb76.js"),
    n = ownMessagingSocket();
  return n !== void 0 && Bce(e, n);
}
function mSe(e) {
  let {
      ownMessagingSocket: ownMessagingSocket_2
    } = import.meta.require("B:/~BUN/root/chunk-x94azb76.js"),
    n = ownMessagingSocket_2();
  return n !== void 0 && hJ(e, n);
}
function d(e) {
  let {
      ownMessagingSocket: ownMessagingSocket_3
    } = import.meta.require("B:/~BUN/root/chunk-x94azb76.js"),
    n = ownMessagingSocket_3(),
    t = P1(e);
  return n !== void 0 && t !== null && k$r(t.ref, n);
}
function lSt(e, s) {
  return d(e) && !d7e(s);
}
function cSt(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function a7r(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function KIe(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function O5(e) {
  let s = pr(e);
  return [S3e()?.bridgeSessionId, Hae()].some(item => typeof item === "string" && pr(item) === s);
}
function tR(e) {
  return e.teammateContext !== void 0 || e.agentContext !== void 0 && Tq(e.agentContext);
}
function hWe(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`;
}
function u7e(e, s, n = u) {
  let {
      getRegisteredSessionName: getRegisteredSessionName
    } = import.meta.require("B:/~BUN/root/chunk-xmwbad2m.js"),
    o = CFt(getRegisteredSessionName()?.name),
    i = o === null ? "this session" : `this session ("${o}")`;
  return s ? `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)` : `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`;
}
function p7e(e) {
  return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally;
}
function f7e(e) {
  let {
      getRegisteredSessionName: getRegisteredSessionName_2,
      getHeldSessionNames: getHeldSessionNames
    } = import.meta.require("B:/~BUN/root/chunk-xmwbad2m.js"),
    {
      ownMessagingSocket: ownMessagingSocket_4
    } = import.meta.require("B:/~BUN/root/chunk-x94azb76.js"),
    o = getRegisteredSessionName_2(),
    i = ownMessagingSocket_4();
  if (o === void 0 || i === void 0 || lh(e).scheme !== "other") return "no";
  let r = P1(e);
  if (r !== null) {
    let a = Rr(r.name);
    if (!k$r(r.ref, i)) return "no";
    if (a !== Rr(o.name)) {
      let c = getHeldSessionNames().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if (Rr(e) !== Rr(o.name)) return "no";
  let {
    getSessionNamingState: getSessionNamingState
  } = import.meta.require("B:/~BUN/root/chunk-epw8s2kw.js");
  return o.source === "derived" || (o.source === "user" || o.source === "collision") && getSessionNamingState().userTypedName === o.name ? "categorical" : "note";
}
function JK(e, s, n = u) {
  let {
      getRegisteredSessionName: getRegisteredSessionName_3
    } = import.meta.require("B:/~BUN/root/chunk-xmwbad2m.js"),
    o = CFt(getRegisteredSessionName_3()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`;
  }
  return o !== null ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.` : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`;
}
export { mKt, d7e, mSe, lSt, cSt, a7r, KIe, O5, tR, hWe, u7e, p7e, f7e, JK };