// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ke } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { cr, b3, eRr, que, e2e, e4, rC, tRr } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { zFn } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { Gk } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { zo } from "B:/~BUN/root/chunk-5az22yft.js";
import { O6e } from "B:/~BUN/root/chunk-4m01cdtr.js";
import { eue, MS } from "B:/~BUN/root/chunk-dcmvdxnm.js";
import { r1, Qw } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { xVr, FXn, PVr, AZs, xZs, PZs, Djo, OVr, Ljo, OZs, wVt, HXn, IZs, lyn, MZs, DZs, Fjo, LZs, NZs, FZs, HZs, $Zs, qZs, Hst } from "B:/~BUN/root/chunk-b0dvdw0m.js";
import { Ple } from "B:/~BUN/root/chunk-18dhdj9e.js";
import { tIe } from "B:/~BUN/root/chunk-cj22vbs9.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var S = 3000,
  v = 2000;
async function RZs(e, input, n, s) {
  if (YYe(e)) return N(e, input, n, s);
  let i = n.toolState.get(Ple).machineFor(e);
  if (i !== void 0 && e.isMcp !== !0) return H(e, input, i, n, s);
  if (!Gk(e).supported || !MS()) return {
    kind: "local",
    input: input
  };
  let {
    requested: requested,
    input: input_2
  } = e4(input);
  return requested === void 0 ? {
    kind: "local",
    input: input_2
  } : _(e, requested, input_2, n, s);
}
async function H(e, o, n, s, i) {
  if (!(await eue())) return {
    kind: "error",
    code: "not_served",
    message: FZs({
      name: n,
      toolName: e.name
    })
  };
  let r = o[cr];
  if (typeof r === "string" && (r.trim() === "" || e2e(r))) return {
    kind: "error",
    code: "unknown_host",
    message: Fjo({
      toolName: e.name,
      machines: [n, ...T(s, e.name, n)]
    })
  };
  let {
      requested: requested_2,
      input: input_3
    } = e4(M(o)),
    l = requested_2 === void 0 ? R(s, e.name) : [];
  if (l.length > 1) return {
    kind: "error",
    code: "unknown_host",
    message: Fjo({
      toolName: e.name,
      machines: [n, ...T(s, e.name, n)]
    })
  };
  let g = requested_2 ?? l[0] ?? n,
    d = await _(e, g, input_3, s, i);
  if (d.kind !== "error") return d;
  let h = s.toolState.get(r1).resolve(g),
    name = h.kind === "remote" ? h.host.name : que(g, n) ? n : g;
  switch (d.code) {
    case "unknown_host":
      return name === n ? {
        ...d,
        message: LZs({
          name: n,
          toolName: e.name
        })
      } : d;
    case "not_served":
      return {
        ...d,
        message: name === n ? HZs({
          name: name,
          toolName: e.name
        }) : NZs({
          name: name,
          toolName: e.name,
          servedBy: n
        })
      };
    case "incompatible":
      {
        if (h.kind !== "remote" || h.host.protocol.kind !== "incompatible") return d;
        return {
          ...d,
          message: name === n ? FXn({
            name: name,
            why: h.host.protocol,
            runsOnlyThere: e.name
          }) : FXn({
            name: name,
            why: h.host.protocol,
            servedInsteadBy: {
              toolName: e.name,
              name: n
            }
          })
        };
      }
    default:
      return d;
  }
}
function R(e, o) {
  return L(e.toolState.get(r1).hosts().flatMap(item => item.kind === "remote" && item.status === "online" && item.protocol.kind !== "incompatible" && item.servedTools.has(o) ? [item.name] : []));
}
function T(e, o, n) {
  let s = e.toolState.get(r1).hosts().flatMap(item => item.kind === "remote" && item.name !== n && item.servedTools.has(o) ? [item] : []);
  return [...new Map(s.map(item => [item.name, item])).values()].map(item => item.status === "offline" ? `${item.name} (offline)` : item.name);
}
async function _(e, requested_3, input_4, s, i) {
  if (s.remoteCall !== void 0) return {
    kind: "error",
    code: "unknown_host",
    message: xVr({
      requested: requested_3,
      attached: []
    })
  };
  if (!(await eue())) return {
    kind: "error",
    code: "gate_off",
    message: tRr()
  };
  let r = s.toolState.get(r1);
  await b(i, s.abortController.signal, r);
  let a = r.resolve(requested_3);
  if (i.forget !== void 0 && (a.kind === "unknown" || a.kind === "remote" && a.host.source !== "session" && (a.host.status === "offline" || y(s.toolState, a.host.name) || !a.host.servedTools.has(e.name) || a.host.protocol.kind === "incompatible")) && !i.listingUnavailable(r) && i.forget()) await b(i, s.abortController.signal, r), a = r.resolve(requested_3);
  let c,
    l = a.kind === "unknown" ? eRr(requested_3) : void 0,
    g = requested_3.trim().toLowerCase(),
    d = l === void 0 ? void 0 : b3(g) ? g : l,
    waitMs = d !== void 0 && b3(d) ? i.reconnectWaitMs?.(d) : void 0,
    u = d !== void 0 && waitMs !== void 0 ? {
      machine: d,
      waitMs: waitMs
    } : void 0,
    waitedMs;
  if (a.kind === "unknown" && i.awaitAnnounce !== void 0 && (u !== void 0 || C(i.listingProvisional?.(), r, requested_3))) {
    if (t(`[remote-tools] holding ${e.name} for "${rC(requested_3)}" until its machine announces to this worker (bounded by the call's own deadline)`), u !== void 0) i.status?.(qZs(u.machine, Math.round(u.waitMs / 1000)), u.waitMs + v);
    let f = Date.now();
    if (c = await i.awaitAnnounce(s.abortController.signal, async () => (i.forget?.(), await b(i, s.abortController.signal, r), r.resolve(requested_3).kind === "remote"), u), u !== void 0) {
      let p = Date.now() - f;
      waitedMs = p > S ? p : void 0;
    }
    if (t(`[remote-tools] ${e.name} for "${rC(requested_3)}": ${O(c)}`), c.kind !== "aborted") await b(i, s.abortController.signal, r), a = r.resolve(requested_3);
  }
  switch (a.kind) {
    case "local":
    case "unknown":
      {
        let reason = d === void 0 ? void 0 : s.toolState.get(Qw).withdrawnFor(d),
          p = d !== void 0 && reason !== void 0 ? {
            name: d,
            reason: reason
          } : void 0;
        return i.listingUnavailable(r) ? {
          kind: "error",
          code: "host_offline",
          message: PVr()
        } : P(i.listingProvisional?.(), r, u?.machine ?? requested_3, c, u !== void 0 || (i.bridgeReached?.() ?? !0), u !== void 0, p, i.canAskForFolder?.() ?? !1) ?? (p !== void 0 ? {
          kind: "error",
          code: "host_offline",
          message: OVr(p.name, p.reason)
        } : {
          kind: "error",
          code: "unknown_host",
          message: xVr({
            requested: requested_3,
            attached: r.hosts().flatMap(item => item.kind !== "remote" ? [] : [item.status === "offline" ? `${item.name} (offline)` : item.name])
          })
        });
      }
    case "remote":
      {
        let {
          host: host
        } = a;
        if (host.status === "offline" && host.source !== "session") return {
          kind: "error",
          code: "host_offline",
          message: wVt(host.name)
        };
        if (host.protocol.kind === "incompatible") return {
          kind: "error",
          code: "incompatible",
          message: FXn({
            name: host.name,
            why: host.protocol
          })
        };
        if (!host.servedTools.has(e.name)) return {
          kind: "error",
          code: "not_served",
          message: $Zs({
            name: host.name,
            toolName: e.name,
            served: [...host.servedTools]
          })
        };
        return {
          kind: "remote",
          host: host,
          input: input_4,
          ...(waitedMs !== void 0 && {
            waitedMs: waitedMs
          })
        };
      }
  }
}
function YYe(e) {
  return e.mcpInfo?.serverName === zo;
}
function w(e, o, n) {
  let s = n.mcpInfo?.toolName;
  if (s === void 0) return;
  if (o === void 0) return e.passthroughHost(s);
  let i = r => r.name === o && r.passthroughTools?.has(s) === !0;
  return e.sourceHosts("session").find(i) ?? e.sourceHosts("bridge").find(i);
}
async function N(e, input_5, n, s) {
  if (n.remoteCall !== void 0) return {
    kind: "local",
    input: input_5
  };
  let i = n.toolState.get(Ple),
    name_3 = i.machineFor(e),
    a = name_2 => ({
      kind: "error",
      code: "not_served",
      message: MZs({
        name: name_2,
        toolName: e.name
      })
    });
  if (!(await eue())) return name_3 === void 0 ? {
    kind: "local",
    input: input_5
  } : a(name_3);
  if (name_3 !== void 0 && !i.presentable()) return a(name_3);
  let c = n.toolState.get(r1);
  await b(s, n.abortController.signal, c);
  let host_2 = w(c, name_3, e);
  if ((host_2 === void 0 || host_2.source !== "session" && (host_2.status === "offline" || host_2.protocol.kind === "incompatible")) && O6e(e.mcpInfo?.toolName ?? "") && s.forget !== void 0 && !s.listingUnavailable(c) && s.forget()) await b(s, n.abortController.signal, c), host_2 = w(c, name_3, e);
  if (host_2 === void 0) {
    if (name_3 !== void 0) return {
      kind: "error",
      code: "not_served",
      message: lyn({
        name: name_3,
        toolName: e.name
      })
    };
    if (s.listingUnavailable(c)) return {
      kind: "error",
      code: "host_offline",
      message: PVr()
    };
    let m = A(c),
      f = e.mcpInfo?.toolName ?? e.name;
    if (!O6e(f)) return {
      kind: "local",
      input: input_5
    };
    if (m === void 0) switch (s.machineOffer()) {
      case "offered":
        return {
          kind: "error",
          code: "incompatible",
          message: Ljo()
        };
      case "unread":
        return {
          kind: "error",
          code: "host_offline",
          message: PVr()
        };
      case "none":
        return {
          kind: "local",
          input: input_5
        };
    }
    if (m.status === "offline") {
      if (m.source === "session") n.toolState.get(tIe).told(n.toolState.get(Qw), n.agentId, m.name);
      return {
        kind: "error",
        code: "host_offline",
        message: m.source === "session" ? HXn(m.name, m.asleep === !0 ? "it said it was going to sleep" : "it did not answer a liveness check", "machine", Hst(m), {
          cause: m.asleep === !0 ? "asleep" : m.busy === !0 ? "busy" : "silent",
          lastHeardAt: m.lastHeardAt
        }) : wVt(m.name)
      };
    }
    return {
      kind: "error",
      code: "not_served",
      message: m.rejectedPassthroughTools?.has(f) === !0 ? IZs({
        name: m.name,
        toolName: e.name
      }) : lyn({
        name: m.name,
        toolName: e.name
      })
    };
  }
  if (host_2.source === "session" && !i.presentable()) return a(host_2.name);
  if (host_2.status === "offline" && host_2.source !== "session") return {
    kind: "error",
    code: "host_offline",
    message: wVt(host_2.name)
  };
  if (host_2.protocol.kind === "incompatible") return {
    kind: "error",
    code: "incompatible",
    message: FXn({
      name: host_2.name,
      why: host_2.protocol,
      runsOnlyThere: e.name
    })
  };
  let g = input_5[cr];
  if (typeof g === "string" && (g.trim() === "" || e2e(g))) return {
    kind: "error",
    code: "unknown_host",
    message: DZs({
      name: host_2.name,
      toolName: e.name
    })
  };
  let {
    requested: requested_4,
    input: input_6
  } = e4(M(input_5));
  if (requested_4 === void 0) return {
    kind: "remote",
    host: host_2,
    input: input_6
  };
  let u = c.resolve(requested_4);
  return u.kind === "remote" && u.host.name === host_2.name ? {
    kind: "remote",
    host: host_2,
    input: input_6
  } : {
    kind: "error",
    code: "unknown_host",
    message: xVr({
      requested: requested_4,
      attached: [host_2.name]
    })
  };
}
function y(e, o) {
  return e.get(Qw).entries().some(item => item.name === o && item.status === "offline");
}
function A(e) {
  return e.hosts().find(item => item.kind === "remote" && (item.source === "bridge" || item.source === "session"));
}
function M(e) {
  let o = vo(e, zFn),
    n = e[cr];
  return typeof n === "string" ? {
    ...o,
    [cr]: n
  } : o;
}
function C(e, o, n) {
  return e === "not_reannounced" && !e2e(n) && !o.hosts().some(item => item.kind === "remote");
}
function O(e) {
  switch (e.kind) {
    case "announced":
      return "the machine announced";
    case "routable":
      return "the machine became routable over the device bridge";
    case "gave_up":
      return `gave up after ${e.waitedMs} ms`;
    case "gave_up_earlier":
      return `not waiting again (gave up after ${e.waitedMs} ms earlier this worker life)`;
    case "aborted":
      return "the turn was aborted while waiting";
  }
}
function P(e, o, n, s, i, r, a, c) {
  if (e2e(n) || !r && o.hosts().some(item => item.kind === "remote")) return;
  if (r && s?.kind === "announced") return {
    kind: "error",
    code: "host_offline",
    message: a === void 0 ? Djo(n) : OVr(a.name, a.reason)
  };
  let g = s?.kind === "gave_up" || s?.kind === "gave_up_earlier" ? "not_reannounced" : e;
  if (a !== void 0 && g !== "connecting") return {
    kind: "error",
    code: "host_offline",
    message: OVr(a.name, a.reason)
  };
  if (g === void 0) return;
  return {
    kind: "error",
    code: g === "set_aside" ? "incompatible" : "host_offline",
    message: E(g, n, s, i, c)
  };
}
function E(e, o, n, s, i) {
  switch (e) {
    case "connecting":
      return AZs(o);
    case "not_connected":
      return OZs();
    case "serves_nothing":
      return Djo(o);
    case "set_aside":
      return Ljo();
    case "not_reannounced":
      return n?.kind === "gave_up_earlier" ? PZs(o, n.waitedMs, s, i) : xZs(o, n?.kind === "gave_up" ? n.waitedMs : 0, s, i);
  }
}
async function b(e, o, n) {
  await Ao(e.refresh(n), o, () => new Ke()).catch(s => {
    if (!(s instanceof Ke)) throw s;
  });
}
export { RZs, YYe };