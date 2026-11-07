// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  vVe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  jFe
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  Jl
} from "B:/~BUN/root/chunk-nzh2qzgc.js";
import {
  Qd
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  ONt
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  Jrn,
  Pgt,
  Gxr,
  Ogt
} from "B:/~BUN/root/chunk-n98vg3jf.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";

function s(e) {
  return e.scope === "dynamic" && !Qd(e) && Jl.bridgeCarrier === void 0 && "url" in e && typeof e.url === "string" && jFe(e.url)
}

function rvn(e, n) {
  return s(e) ? n : Ogt(n)
}

function ZRt(e, n) {
  if (n === void 0 || !Object.hasOwn(n, Jrn) || !s(e)) return n;
  return {
    ...n,
    [Pgt]: Gxr
  }
}
var p = "approvalTicket",
  u = "anthropic/approvalTicket",
  f = 8192;

function r9o(e) {
  let n = typeof e === "object" && e !== null && "behavior" in e && e.behavior === "allow" && p in e ? e[p] : void 0;
  return typeof n === "string" && n !== "" && n.length <= f ? n : void 0
}
var i = new Je(() => ({
  byToolUse: new Map,
  ofLateAllows: new Map
}));

function a(e, n, t, o) {
  if (n === "") return;
  i.of(e).byToolUse.set(n, {
    serverName: t,
    ticket: o
  }), ONt(e, n, () => {
    i.peek(e)?.byToolUse.delete(n)
  })
}

function ysr(e, n, t, o) {
  let r = n.mcpInfo?.serverName;
  if (e === void 0 || r === void 0 || o.forRemoteExecution === !0) return;
  if (o.permissionRound === void 0 && o.toolUseId !== t) {
    c("mcp_approval_ticket", "not_own_id");
    return
  }
  if (vVe(o.agentId, o.agentContext) !== void 0) {
    c("mcp_approval_ticket", "not_main_conversation");
    return
  }
  a(o.session, t, r, e)
}

function Qui(e, n, t) {
  if (e === void 0) return;
  if (t === void 0) {
    i.peek(e)?.ofLateAllows.delete(n);
    return
  }
  i.of(e).ofLateAllows.set(n, t)
}

function ovn(e, n) {
  let t = e === void 0 ? void 0 : i.peek(e)?.ofLateAllows,
    o = t?.get(n);
  return t?.delete(n), o
}

function olt(e, n, t, o) {
  if (e === void 0 || n === void 0) return;
  let r = i.peek(e)?.byToolUse,
    d = r?.get(n);
  if (d === void 0) return;
  if (d.serverName !== t) {
    c("mcp_approval_ticket", "other_server");
    return
  }
  if (!s(o)) {
    c("mcp_approval_ticket", "not_own_relay");
    return
  }
  return r?.delete(n), g("mcp_approval_ticket"), {
    [u]: d.ticket
  }
}

function _sr(e, n, t, o, r) {
  delete e[u], Object.assign(e, olt(n, t, o, r))
}

function o9o(e) {
  let {
    response: n
  } = e;
  if (n.subtype !== "success") return e;
  let t = n.response;
  if (typeof t !== "object" || t === null || !(p in t)) return e;
  let {
    [p]: o, ...r
  } = t;
  return {
    ...e,
    response: {
      ...n,
      response: r
    }
  }
}
export {
  rvn,
  ZRt,
  r9o,
  ysr,
  Qui,
  ovn,
  olt,
  _sr,
  o9o
};
