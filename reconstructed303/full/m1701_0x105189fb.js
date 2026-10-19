// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  er
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  Sh,
  lo,
  d4,
  Dcn,
  WNo
} from "B:/~BUN/root/chunk-e4q58xft.js";
import {
  gy,
  jEe,
  Nle
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import {
  gJ
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  rft
} from "B:/~BUN/root/chunk-aqd86p9a.js";
import {
  Wve
} from "B:/~BUN/root/chunk-ft39p62b.js";
var UCn = "target is this session itself \u2014 there is no one else to send to",
  u = `address the main conversation as "${Sh}"`;

function ZEt(e) {
  let {
    ownMessagingSocket: s
  } = import.meta.require("B:/~BUN/root/chunk-epbwnycc.js"), n = s();
  return n !== void 0 && jEe(e, n)
}

function bNe(e) {
  let {
    ownMessagingSocket: s
  } = import.meta.require("B:/~BUN/root/chunk-epbwnycc.js"), n = s();
  return n !== void 0 && Nle(e, n)
}

function d(e) {
  let {
    ownMessagingSocket: s
  } = import.meta.require("B:/~BUN/root/chunk-epbwnycc.js"), n = s(), t = d4(e);
  return n !== void 0 && t !== null && WNo(t.ref, n)
}

function p4t(e, s) {
  return d(e) && !ZEt(s)
}

function f4t(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`
}

function lts(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`
}

function Xqe(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`
}

function yoe(e) {
  let s = er(e);
  return [rft()?.bridgeSessionId, Wve()].some((n) => typeof n === "string" && er(n) === s)
}

function $I(e) {
  return e.teammateContext !== void 0 || e.agentContext !== void 0 && gJ(e.agentContext)
}

function not(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`
}

function eTt(e, s, n = u) {
  let {
    getRegisteredSessionName: t
  } = import.meta.require("B:/~BUN/root/chunk-85gfj6gb.js"), o = Dcn(t()?.name), i = o === null ? "this session" : `this session ("${o}")`;
  return s ? `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)` : `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`
}

function tTt(e) {
  return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally
}

function nTt(e) {
  let {
    getRegisteredSessionName: s,
    getHeldSessionNames: n
  } = import.meta.require("B:/~BUN/root/chunk-85gfj6gb.js"), {
    ownMessagingSocket: t
  } = import.meta.require("B:/~BUN/root/chunk-epbwnycc.js"), o = s(), i = t();
  if (o === void 0 || i === void 0 || gy(e).scheme !== "other") return "no";
  let r = d4(e);
  if (r !== null) {
    let a = lo(r.name);
    if (!WNo(r.ref, i)) return "no";
    if (a !== lo(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note"
    }
  } else if (lo(e) !== lo(o.name)) return "no";
  let {
    getSessionNamingState: l
  } = import.meta.require("B:/~BUN/root/chunk-3jes15qf.js");
  return o.source === "derived" || (o.source === "user" || o.source === "collision") && l().userTypedName === o.name ? "categorical" : "note"
}

function h7(e, s, n = u) {
  let {
    getRegisteredSessionName: t
  } = import.meta.require("B:/~BUN/root/chunk-85gfj6gb.js"), o = Dcn(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`
  }
  return o !== null ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.` : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`
}
export {
  UCn,
  ZEt,
  bNe,
  p4t,
  f4t,
  lts,
  Xqe,
  yoe,
  $I,
  not,
  eTt,
  tTt,
  nTt,
  h7
};
