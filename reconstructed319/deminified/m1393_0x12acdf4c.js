// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, du, F, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we, Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { DH } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { rte, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { q3, $z } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { n5, hKe } from "B:/~BUN/root/chunk-5az22yft.js";
import { $u, WFe } from "B:/~BUN/root/chunk-grwykqvw.js";
import { Jl } from "B:/~BUN/root/chunk-nzh2qzgc.js";
import { br } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { fq, dIt } from "B:/~BUN/root/chunk-mcdkvptw.js";
import { b3 } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { vf, XTr, JTr as putWithinMs, ztn, W7e, x1, Jzi, Qzi, INt, ZTr, nCr, eGi, dEs, tGi, nGi, oCr, sGi, aGi, qq, Yq, HS } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { _g } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { eue, VZ, WW } from "B:/~BUN/root/chunk-dcmvdxnm.js";
import { GOe, kSn, O6e } from "B:/~BUN/root/chunk-4m01cdtr.js";
import { Zl } from "B:/~BUN/root/chunk-1tbewxs3.js";
import { rlo, bZ, hce, iXe, Qw } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { uu, _Sn } from "B:/~BUN/root/chunk-6v8w6qhz.js";
import { bSn, SSn, wSn } from "B:/~BUN/root/chunk-j5twqvnk.js";
import { I6e } from "B:/~BUN/root/chunk-7xp5jqaj.js";
import { V5t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { mr } from "B:/~BUN/root/chunk-s20ae4sg.js";
import { bn } from "B:/~BUN/root/chunk-2631cdbp.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
function te() {
  try {
    return v("tengu_violin_scroll", !1);
  } catch {
    return !1;
  }
}
function I() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
}
class X {
  #e = new WeakMap();
  reinitialize(e) {
    let n = this.#e.get(e);
    if (n) return n;
    let r = I().clearServerCache(e.name, e.config).catch(() => {});
    return this.#e.set(e, r), r;
  }
}
var Ee = -32000;
async function j(e, n, r) {
  let o = await re(e, n, r);
  if (o.kind !== "session_expired") return oe(e, o);
  await n.recovery.reinitialize(o.connection);
  let u = await re(e, n, r);
  return u.kind === "session_expired" ? {
    kind: "expired_twice"
  } : oe(e, u);
}
async function oe(e, n) {
  if (n.kind === "connect_failed") await I().evictStaleFailedConnectMemoForServe(e.name, e.config).catch(() => {});
  return n;
}
async function re(e, {
  deadlineAt: deadlineAt,
  signal: signal,
  idempotent = !1
}, u) {
  let s = I(),
    connection;
  try {
    connection = await s.ensureConnectedClient(e, {
      signal: signal,
      timeoutMs: Math.max(1, deadlineAt - Date.now()),
      context: "remote tool execution"
    });
  } catch (error) {
    return {
      kind: "connect_failed",
      error: error
    };
  }
  let p = deadlineAt - Date.now();
  if (p <= 0) return {
    kind: "connect_failed",
    error: Error("deadline reached before the request could be sent")
  };
  try {
    return {
      kind: "ok",
      value: await u(connection, p)
    };
  } catch (error_2) {
    return error_2 instanceof Error && (s.isMcpSessionExpiredError(error_2) || idempotent && Me(error_2, connection)) ? {
      kind: "session_expired",
      connection: connection
    } : {
      kind: "failed",
      error: error_2
    };
  }
}
function Me(e, n) {
  return ("code" in e && e.code === Ee && e.message.includes("Connection closed") || k(e) === "CONNECTION_CLOSED") && (n.config.type === "http" || n.config.type === "claudeai-proxy");
}
var limits = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
  },
  De = -32001,
  Oe = "office_bridge.kind",
  Le = "office_bridge.bound_miss",
  He = new Set(["not_connected", "send_failed", "contested", "unsupported_on_bound"]),
  Ie = new Set(["disconnected", "cancelled"]),
  Be = new Set(["timeout"]),
  xe = /not connected|not reachable|offline/i,
  Ne = /disconnected before responding|connection may be closing/i,
  qe = /did not respond within/i,
  Fe = 200;
function ae(e, n) {
  return {
    kind: "bridge",
    limits: limits,
    call: (r, o, u, s) => je(e, n, r, o, u, s),
    callPlumbing: (r, o, u) => Ue(e, n, r, o, u)
  };
}
async function Ue(e, recovery, name, o, u) {
  if (!iXe.has(name)) throw Error("callPlumbing: not a bridge plumbing tool");
  let s = Date.now(),
    m = Yq(u.deadlineMs),
    p = await j(e, {
      deadlineAt: s + m,
      recovery: recovery,
      signal: u.signal,
      idempotent: u.idempotent
    }, (c, timeout) => fq(c, {
      name: name,
      arguments: {
        ...o
      }
    }, {
      signal: u.signal,
      timeout: timeout
    }));
  if (p.kind === "ok") {
    let c = qq(p.value),
      text = ce(c.content),
      g = c.isError && c.envelope.status === "absent" ? le(p.value, text, m) : void 0;
    if (g !== void 0) return ie(g);
    return {
      kind: "result",
      structuredContent: p.value.structuredContent,
      text: text,
      isError: c.isError
    };
  }
  if (u.signal.aborted) return {
    kind: "cancelled"
  };
  switch (p.kind) {
    case "connect_failed":
      return {
        kind: "unreachable",
        detail: Zl(d(p.error))
      };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
      };
    case "failed":
      return ie(ue(p.error, m, void 0));
  }
}
function ie(e) {
  switch (e.kind) {
    case "timed_out":
    case "unreachable":
    case "dropped":
    case "transport_error":
    case "cancelled":
      return e;
    default:
      return {
        kind: "transport_error",
        detail: `unexpected: ${e.kind}`
      };
  }
}
async function je(e, recovery_2, name_2, o, u, s) {
  let m = Date.now(),
    p = Yq(s.deadlineMs),
    c = eGi(u),
    _ = await j(e, {
      deadlineAt: m + p,
      recovery: recovery_2,
      signal: s.signal
    }, (g, timeout_2) => fq(g, {
      name: name_2,
      arguments: {
        ...o,
        [W7e]: u
      },
      _meta: {
        [Qzi]: s.toolUseId,
        ...(c !== void 0 && {
          [Jzi]: c
        })
      }
    }, {
      signal: s.signal,
      timeout: timeout_2
    }));
  if (_.kind === "ok") {
    let g = $e(_.value, Date.now() - m, p);
    return g.kind === "result" ? {
      ...g,
      metaCopy: c === void 0 ? "omitted" : "attached"
    } : g;
  }
  if (s.signal.aborted) return {
    kind: "cancelled"
  };
  switch (_.kind) {
    case "connect_failed":
      return {
        kind: "unreachable",
        detail: Zl(d(_.error))
      };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
      };
    case "failed":
      return ue(_.error, p, s.toolUseId);
  }
}
function $e(e, elapsedMs, r) {
  let o = qq(e);
  switch (o.envelope.status) {
    case "malformed":
      return {
        kind: "transport_error",
        detail: "malformed result envelope",
        unreadableResult: !0
      };
    case "present":
      return {
        kind: "result",
        content: o.content,
        isError: o.isError,
        envelope: o.envelope.envelope,
        elapsedMs: elapsedMs,
        responseBytes: HS(e),
        ...{}
      };
    case "absent":
      {
        let u = o.isError ? le(e, ce(o.content), r) : void 0;
        if (u) return u;
        return {
          kind: "result",
          content: o.content,
          isError: o.isError,
          envelope: void 0,
          elapsedMs: elapsedMs,
          responseBytes: HS(e)
        };
      }
  }
}
function le(e, n, capMs) {
  let o = Ve(e);
  if (o !== void 0 && Be.has(o)) return {
    kind: "timed_out",
    capMs: capMs
  };
  if (o !== void 0 && Ie.has(o)) return {
    kind: "dropped",
    detail: `bridge: ${o}`
  };
  if (o !== void 0 && He.has(o)) return {
    kind: "unreachable",
    detail: `bridge: ${o}`,
    ...(o === "not_connected" && {
      machineNotAnswering: !0
    })
  };
  if (o === "malformed_result") return {
    kind: "transport_error",
    detail: "bridge: malformed result",
    unreadableResult: !0
  };
  if (n.length > Fe) return;
  if (qe.test(n)) return {
    kind: "timed_out",
    capMs: capMs
  };
  if (Ne.test(n)) return {
    kind: "dropped",
    detail: "bridge: disconnected"
  };
  if (xe.test(n)) return {
    kind: "unreachable",
    detail: "bridge: not connected",
    machineNotAnswering: !0
  };
  return;
}
function Ve(e) {
  let n = e !== null && typeof e === "object" && "_meta" in e ? e._meta : void 0;
  if (n === null || typeof n !== "object") return;
  let r = n,
    o = r[Oe];
  if (typeof o === "string") return o;
  return r[Le] !== void 0 ? "not_connected" : void 0;
}
function ue(e, capMs_2, r) {
  if (se(e) === De || k(e) === "REQUEST_TIMEOUT") return {
    kind: "timed_out",
    capMs: capMs_2
  };
  let detail = Zl(d(e));
  if (se(e) === q3 && Ye(e, r)) return {
    kind: "approval_unverified"
  };
  if ($z(e) !== "downstream_unreachable") return {
    kind: "transport_error",
    detail: detail
  };
  return We.has(k(e) ?? "") ? {
    kind: "unreachable",
    detail: detail
  } : {
    kind: "dropped",
    detail: detail
  };
}
var We = new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN", "FailedToOpenSocket"]);
function Ye(e, n) {
  let r = e !== null && typeof e === "object" && "data" in e ? e.data : void 0;
  if (typeof r !== "object" || r === null) return !1;
  let o = r;
  return typeof o.args_sha256 === "string" && typeof o.tool_name === "string" && typeof o.tool_use_id === "string" && n !== void 0 && o.tool_use_id === n;
}
function se(e) {
  return e !== null && typeof e === "object" && "code" in e && typeof e.code === "number" ? e.code : void 0;
}
function ce(e) {
  return typeof e === "string" ? e : e.flatMap(item => item.type === "text" ? [item.text] : []).join(`
`);
}
var ze = "attached-machine";
function fe(e, n, r) {
  let o = n.map(item => ({
      ...item,
      name: DH(item.name)
    })),
    u = o.filter(item => hce.has(item.name)).map(item => ({
      toolName: item.name,
      meta: Je(item),
      raw: item._meta?.[x1]
    })),
    s = o.filter(item => !hce.has(item.name) && O6e(item.name) && item._meta?.[GOe] !== void 0),
    m = s.flatMap(item => {
      let marker = Ge(item);
      return marker === void 0 ? [] : [{
        bridgeName: item.name,
        marker: marker
      }];
    }),
    p = new Set(m.map(item => item.bridgeName)),
    rejectedPassthroughTools = new Set(s.filter(item => !p.has(item.name)).map(item => item.name)),
    unreadableMarkers = rejectedPassthroughTools.size,
    unreadable = U(u, h => h.meta === void 0),
    servedTools = new Set(u.map(item => item.toolName)),
    plumbingTools = new Set(o.filter(item => iXe.has(item.name)).map(item => item.name)),
    passthroughTools = new Map(m.map(({
      bridgeName: bridgeName,
      marker: marker_2
    }) => [bridgeName, {
      localName: marker_2.tool
    }])),
    T = new Set([...u.flatMap(item => item.meta ? [item.meta.target.name] : []), ...m.map(({
      marker: marker_3
    }) => marker_3.target.name)]),
    A = o.reduce((acc, item) => {
      let C = bn(item.name);
      return acc.set(C, (acc.get(C) ?? 0) + 1), acc;
    }, new Map()),
    M = s.some(item => (A.get(bn(item.name)) ?? 0) > 1),
    invalid = T.size > 1 ? "two_names" : servedTools.size < u.length || M ? "duplicate_tool" : void 0;
  if (u.length === 0 && m.length === 0 && unreadableMarkers === 0) return {
    hosts: [],
    invalid: invalid,
    unreadable: 0,
    unreadableMarkers: unreadableMarkers
  };
  let N = u.find(item => item.meta)?.meta,
    description = N?.target ?? m[0]?.marker.target,
    P = N === void 0 ? u.map(item => item.raw) : [],
    announced = P.map(tGi).find(item => item !== void 0),
    G = P.map(nGi).find(item => item !== void 0);
  return {
    hosts: [{
      kind: "remote",
      source: "bridge",
      name: description?.name ?? ze,
      status: invalid === void 0 ? "online" : "offline",
      enforcement: "self",
      description: description,
      servedTools: servedTools,
      passthroughTools: passthroughTools,
      rejectedPassthroughTools: rejectedPassthroughTools,
      plumbingTools: plumbingTools,
      protocol: rlo(announced !== void 0 ? {
        kind: "incompatible",
        announced: announced
      } : nCr(N?.protocol_versions ?? G ?? (u.length === 0 ? [vf] : void 0)), description?.tool_host_interface),
      transport: ae(e, r)
    }],
    invalid: invalid,
    unreadable: unreadable,
    unreadableMarkers: unreadableMarkers
  };
}
function Ge(e) {
  let n = kSn(DH(e._meta?.[GOe]));
  return n !== void 0 && n.tool === br(...Xe(e.name)) && b3(n.target.name) ? n : void 0;
}
function Xe(e) {
  let n = e.indexOf("__");
  return n < 0 ? ["", e] : [e.slice(0, n), e.slice(n + 2)];
}
function Je(e) {
  let n = oCr(DH(e._meta?.[x1]));
  return n !== void 0 && n.tool === e.name && b3(n.target.name) ? n : void 0;
}
async function me(e, n, name_3, args, u) {
  if (!iXe.has(name_3)) throw Error("callPlumbing: not a plumbing tool");
  if (u.signal.aborted) return {
    kind: "cancelled"
  };
  let s = Yq(u.deadlineMs),
    request = {
      subtype: "remote_plumbing_call",
      ...aGi({
        instanceId: n.instanceId,
        host: n.host,
        name: name_3,
        args: args,
        issuedAt: Date.now(),
        deadlineMs: s
      })
    },
    p;
  try {
    p = e.sendServedCallRequest({
      request: request,
      accepts: accepts,
      signal: u.signal
    });
  } catch (error) {
    return {
      kind: "transport_error",
      detail: `send failed: ${d(error)}`
    };
  }
  if (!p.sent) return p.reply.catch(() => {}), {
    kind: "unreachable",
    detail: e.whyNotSending?.() ?? "the session stream is closed; nothing was sent"
  };
  let c = !1,
    _ = setTimeout(() => {
      c = !0, p.cancel();
    }, s);
  try {
    let g = await p.reply;
    return Ze(g) ?? {
      kind: "transport_error",
      detail: "the answer was not a tool result"
    };
  } catch (error) {
    if (c) return {
      kind: "timed_out",
      capMs: s
    };
    if (u.signal.aborted) return {
      kind: "cancelled"
    };
    if (error instanceof du) return {
      kind: "dropped",
      detail: "the session stream closed after the request left"
    };
    return {
      kind: "transport_error",
      detail: d(error)
    };
  } finally {
    clearTimeout(_);
  }
}
function pe(e) {
  let n = typeof e === "object" && e !== null && "result" in e ? e.result : void 0;
  if (typeof n !== "object" || n === null) return;
  return Array.isArray(n.content) ? n : void 0;
}
function accepts(e) {
  try {
    if (ZTr(e)) return !1;
    return pe(e) !== void 0;
  } catch {
    return !1;
  }
}
function Ze(e) {
  let n = pe(e);
  if (n === void 0) return;
  let {
    content: content,
    structuredContent: structuredContent,
    isError: isError
  } = n;
  return {
    kind: "result",
    structuredContent: structuredContent,
    text: content.flatMap(item => typeof item === "object" && item !== null && item.type === "text" && typeof item.text === "string" ? [item.text] : []).join(`
`),
    isError: isError === !0
  };
}
var P6r = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
  },
  he = 60000,
  $Ct = 1e4;
function $ya(e) {
  let n = {
      stale: !1,
      quietMisses: []
    },
    limits_2 = e.limits ?? P6r;
  return {
    kind: "session",
    limits: limits_2,
    call: (o, u, s, m) => en(e, n, limits_2, o, u, s, m),
    markUnresponsive: () => {
      n.stale = !0;
    },
    checkLive: async ({
      signal: signal_2,
      hold: hold
    }) => {
      let s = e.host(),
        m = s?.live(),
        p = e.now ?? Date.now;
      if (s === void 0 || m === void 0 || signal_2.aborted || !(m.status === "offline" || n.stale || p() - m.lastHeardAt > he)) return;
      if (_e(s, p())) return V(s);
      let c = await ye(e, n, s, signal_2);
      if (c === "missed" && hold !== void 0 && s.live()?.status === "online" && !n.stale) {
        if (hold.notify("waiting"), c = await dn(e, n, s, signal_2, hold.ms), c === "there") hold.notify("back");
      }
      if (c !== "missed") return;
      return s.markAway("probe_missed"), V(s);
    },
    saidAsleep: () => e.host()?.live()?.asleepSince !== void 0,
    probeLive: async ({
      signal: signal_3
    }) => {
      let u = e.host();
      if (u === void 0 || u.live() === void 0 || signal_3.aborted) return;
      let s = (e.now ?? Date.now)(),
        m = await K(e, u, signal_3),
        p = (u.live()?.lastHeardAt ?? -1 / 0) > s;
      if (m === "answered" || p) return n.stale = !1, !0;
      if (m !== "missed") return;
      return u.markAway("probe_missed"), !1;
    },
    isAway: () => e.host()?.live()?.status === "offline",
    silence: {
      quietForMs: () => {
        let o = e.host()?.live();
        return o === void 0 || o.status === "offline" || o.asleepSince !== void 0 ? void 0 : (e.now ?? Date.now)() - o.lastHeardAt;
      },
      probe: o => un(e, n, o),
      missed: () => ve(e, n),
      ownStreamFrameAt: () => e.sender.readStreamFrameAt?.(),
      giveUp: () => {
        e.host()?.markAway("probe_missed");
      }
    },
    isRechecked: () => e.rechecked?.() === !0,
    ...(e.sender.withdrawStandingServedCall !== void 0 && {
      withdrawStanding: o => {
        e.sender.withdrawStandingServedCall?.(o);
      }
    }),
    callPlumbing: async (o, u, s) => {
      let m = e.host();
      if (m === void 0) return {
        kind: "unreachable",
        detail: "the machine is no longer announced on this session"
      };
      let p = await me(e.sender, {
        instanceId: m.instanceId,
        host: m.hostName
      }, o, u, s);
      if (p.kind === "result") m.heard((e.now ?? Date.now)());
      return p;
    }
  };
}
function V(e) {
  let n = e.live();
  return n?.asleepSince !== void 0 ? {
    kind: "unreachable",
    detail: "it said it was going to sleep",
    machineNotAnswering: !0,
    saidAsleep: !0,
    lastHeardAt: n.asleepSince
  } : {
    kind: "unreachable",
    detail: "the machine did not answer a liveness check on this session; nothing was sent",
    machineNotAnswering: !0,
    ...(n !== void 0 && {
      lastHeardAt: Math.max(n.lastHeardAt, n.lastStillHereAt ?? 0)
    }),
    ...(n?.lastStillHereAt !== void 0 && n.lastStillHereAt > n.lastHeardAt && {
      saidBusy: !0
    })
  };
}
function _e(e, n) {
  let r = e.live()?.asleepSince;
  return r !== void 0 && n >= r && n - r < XTr;
}
async function en(e, state, limits_3, o, input, envelope, m) {
  let p = e.now ?? Date.now;
  if (m.signal.aborted) return {
    kind: "cancelled"
  };
  let entry = e.host(),
    _ = entry?.live();
  if (entry === void 0 || _ === void 0) return {
    kind: "unreachable",
    detail: "the machine is not announcing on this session",
    machineNotAnswering: !0,
    ...(e.signedOff?.() === !0 && {
      signedOff: !0,
      ...ge(e.leftFor?.())
    })
  };
  let g = "op" in envelope && envelope.op === "outcome_of";
  if (!g && (_.status === "offline" || state.stale || p() - _.lastHeardAt > he)) {
    if (_e(entry, p())) return V(entry);
    let C = p(),
      E = await K(e, entry, m.signal);
    if (E === "cancelled") return {
      kind: "cancelled"
    };
    if (E === "unsent") return {
      kind: "unreachable",
      detail: e.sender.whyNotSending?.() ?? "this session's event stream is not accepting requests; nothing was sent"
    };
    if (E === "stalled" || E === "taken_back") return {
      kind: "stalled",
      capMs: e.probeDeadlineMs ?? $Ct,
      request: "probe",
      takenBack: E === "taken_back"
    };
    if (E === "stream_lost") return {
      kind: "unreachable",
      detail: "this session could not complete the liveness check for a reason on its own side (its event stream closed, the service refused the write that carried it, or that write had not completed in time); the machine was not reached and nothing was sent"
    };
    let x = E === "missed" && (entry.live()?.lastHeardAt ?? -1 / 0) > C;
    if (E !== "answered" && !x) {
      if (E === "missed") entry.markAway("probe_missed");
      let D = e.host(),
        ne = D?.live();
      if (D === void 0 || D.instanceId === entry.instanceId || ne === void 0 || ne.status === "offline") return E === "gone" ? {
        kind: "unreachable",
        detail: "the machine withdrew from this session while it was being asked whether it is still there; nothing was sent",
        machineNotAnswering: !0,
        signedOff: !0,
        ...ge(e.leftFor?.())
      } : V(entry);
      entry = D;
    }
    state.stale = !1;
  }
  let w = Yq(m.deadlineMs),
    issuedAt = p(),
    R = entry.epoch(),
    sentUnderEpoch = R === void 0 ? {} : {
      sentUnderEpoch: R
    },
    leg = "op" in envelope ? envelope.op : envelope.approval ? 2 : 1,
    M = _Sn(leg),
    y = {
      posts: 0
    },
    onUpload = phase => {
      switch (phase) {
        case "sending":
          y.posts += 1, y.startedAt ??= p(), uu(envelope.call_id, "post started", {
            leg: leg,
            queue_ms: y.startedAt - issuedAt,
            attempt: y.posts
          }, M);
          return;
        case "accepted":
          if (y.acceptedAt === void 0) {
            y.acceptedAt = p();
            try {
              m.onAccepted?.();
            } catch (error) {
              t(`[remote-tools] a leg's acceptance was not reported: ${d(error)}`);
            }
          }
          uu(envelope.call_id, "post accepted", {
            leg: leg,
            post_ms: y.startedAt === void 0 ? void 0 : y.acceptedAt - y.startedAt,
            attempt: y.posts
          }, M);
          return;
        case "not_accepted":
        case "indeterminate":
          uu(envelope.call_id, "post not accepted", {
            leg: leg,
            phase: phase,
            attempt: y.posts
          }, M);
      }
    },
    B,
    sent;
  try {
    sent = e.sender.sendServedCallRequest({
      onUpload: onUpload,
      request: {
        subtype: "remote_tool_call",
        ...sGi({
          instanceId: entry.instanceId,
          host: entry.hostName,
          name: o,
          input: input,
          envelope: envelope,
          toolUseId: m.toolUseId,
          issuedAt: issuedAt,
          deadlineMs: w
        })
      },
      accepts: C => {
        if (!rn(C, envelope.call_id)) return !1;
        if (g && ZTr(C)) return B = C, !1;
        return !0;
      },
      signal: m.signal
    });
  } catch (error) {
    return {
      kind: "transport_error",
      detail: `send failed: ${d(error)}`
    };
  }
  if (!sent.sent) return {
    kind: "unreachable",
    detail: e.sender.whyNotSending?.() ?? "this session's event stream is closed; nothing was sent"
  };
  uu(envelope.call_id, "sent", {
    leg: leg,
    host_inst: entry.instanceId,
    host_epoch: R,
    deadline_ms: w
  }), m.onSent?.({
    instanceId: entry.instanceId,
    epoch: R,
    requestId: sent.requestId
  });
  let withdrawable = !g && !("approval" in envelope && envelope.approval?.decision === "deny"),
    {
      settled: settled,
      late: late
    } = await be(sent, w, m.signal, {
      holdAtDeadline: m.onHeldAtDeadline !== void 0,
      withdrawable: withdrawable
    }),
    O = C => {
      let E = nn(C, {
        state: state,
        limits: limits_3,
        entry: entry,
        sent: sent,
        toolName: o,
        callId: envelope.call_id,
        capMs: w,
        held: late !== void 0,
        sentUnderEpoch: sentUnderEpoch,
        elapsedMs: () => p() - issuedAt,
        heardNow: () => p(),
        heldBelowFloorAnswer: () => B
      });
      if (E.kind === "result") try {
        let x = p(),
          D = {
            ...(y.startedAt !== void 0 && {
              queueMs: y.startedAt - issuedAt
            }),
            ...(y.startedAt !== void 0 && y.acceptedAt !== void 0 && {
              postMs: y.acceptedAt - y.startedAt
            }),
            ...(y.acceptedAt !== void 0 && {
              replyWaitMs: x - y.acceptedAt
            }),
            totalMs: x - issuedAt,
            posts: y.posts
          };
        uu(envelope.call_id, "answered", {
          leg: leg,
          total_ms: D.totalMs,
          queue_ms: D.queueMs,
          post_ms: D.postMs,
          reply_wait_ms: D.replyWaitMs,
          posts: D.posts
        }, M), m.onTransit?.(D);
      } catch (error) {
        t(`[remote-tools] a leg's transit was not reported: ${d(error)}`);
      }
      return E;
    };
  if (late !== void 0) m.onHeldAtDeadline?.({
    late: late.then(O),
    withdraw: () => sent.cancel(),
    takeBack: () => withdrawable && sent.withdraw(),
    accepted: () => {
      let C = sent.delivery();
      return C === "delivered" || C === "untracked";
    }
  });
  return O(settled);
}
function nn(e, {
  state: state_2,
  limits: limits_4,
  entry: entry_2,
  sent: sent_2,
  toolName: toolName,
  callId: callId,
  capMs: p,
  held: held,
  sentUnderEpoch: sentUnderEpoch_2,
  elapsedMs: elapsedMs_2,
  heardNow: heardNow,
  heldBelowFloorAnswer: heldBelowFloorAnswer
}) {
  let R = () => {
    let T = heldBelowFloorAnswer();
    if (T === void 0) return;
    uu(callId, "query deadline; taking the below-floor answer held for it", {
      deadline_ms: p,
      host_inst: entry_2.instanceId
    });
    let A = J(T, elapsedMs_2());
    return A.kind === "dropped" ? {
      ...A,
      ...sentUnderEpoch_2
    } : A;
  };
  switch (e.kind) {
    case "answered":
      {
        let T = J(e.payload, elapsedMs_2());
        if (on(T)) state_2.stale = !1, entry_2.heard(heardNow());
        return T.kind === "dropped" ? {
          ...T,
          ...sentUnderEpoch_2
        } : T;
      }
    case "deadline":
      {
        let T = R();
        if (T !== void 0) return T;
        if (held) return uu(callId, "no answer by the deadline; request left standing, checking on it", {
          deadline_ms: p,
          host_inst: entry_2.instanceId
        }), {
          kind: "timed_out",
          capMs: p,
          ...sentUnderEpoch_2
        };
        if (uu(callId, "no answer by the deadline; request withdrawn", {
          deadline_ms: p,
          host_inst: entry_2.instanceId,
          error_replies_ignored: sent_2.errorRepliesIgnored()
        }), p >= limits_4.defaultDeadlineMs) state_2.stale = !0;
        return {
          kind: "timed_out",
          capMs: p,
          ...sentUnderEpoch_2
        };
      }
    case "stalled":
      return uu(callId, e.takenBack ? "still queued here at the deadline; taken back before any write carried it" : "still queued here at the deadline; cancelled behind it", {
        deadline_ms: p,
        host_inst: entry_2.instanceId
      }), {
        kind: "stalled",
        capMs: p,
        request: "call",
        takenBack: e.takenBack
      };
    case "unconfirmed":
      {
        let T = R();
        if (T !== void 0) return T;
        return uu(callId, "deadline reached with the write carrying the request unresolved; withdrawn, delivery unknown", {
          deadline_ms: p,
          host_inst: entry_2.instanceId,
          delivery: e.delivery
        }), {
          kind: "dropped",
          why: "write_unresolved",
          detail: "the write carrying the request to the session service had not completed, or ended without an answer, by its deadline; whether the machine received it is unknown",
          ...sentUnderEpoch_2
        };
      }
    case "cancelled":
      return {
        kind: "cancelled"
      };
    case "dropped":
      return {
        kind: "dropped",
        detail: "this session's event stream closed after the call was sent",
        ...sentUnderEpoch_2
      };
    case "undelivered":
      return {
        kind: "unreachable",
        detail: `the session service refused the request${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; nothing was delivered`
      };
    case "delivery_unknown":
      return {
        kind: "dropped",
        detail: `an upload of the request ended without an answer and a later attempt was refused${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; whether the machine received it is unknown`,
        ...sentUnderEpoch_2
      };
    case "gone":
      return {
        kind: "host_gone",
        why: e.why,
        unsent: e.unsent
      };
    case "failed":
      return {
        kind: "transport_error",
        detail: e.detail
      };
  }
}
async function be(e, n, r, {
  holdAtDeadline: holdAtDeadline,
  withdrawable: withdrawable_2
}) {
  let late_2 = e.reply.then(payload => ({
      kind: "answered",
      payload: payload
    }), c => {
      if (r.aborted) return {
        kind: "cancelled"
      };
      if (c instanceof wSn) return {
        kind: "undelivered",
        status: c.status
      };
      if (c instanceof SSn) return {
        kind: "delivery_unknown",
        status: c.status
      };
      if (c instanceof du) return {
        kind: "dropped"
      };
      if (c instanceof bSn) return {
        kind: "gone",
        why: c.why,
        unsent: e.delivery() === "queued"
      };
      return {
        kind: "failed",
        detail: d(c)
      };
    }),
    settled_2 = await we(late_2, n);
  if (settled_2 !== void 0) return {
    settled: settled_2,
    late: void 0
  };
  let delivery = e.delivery();
  if (delivery === "queued") {
    if (withdrawable_2 && e.withdraw()) return {
      settled: {
        kind: "stalled",
        takenBack: !0
      },
      late: void 0
    };
    return e.cancel(), {
      settled: {
        kind: "stalled",
        takenBack: !1
      },
      late: void 0
    };
  }
  if (holdAtDeadline) return {
    settled: {
      kind: "deadline"
    },
    late: late_2
  };
  return e.cancel(), {
    settled: delivery === "in_flight" || delivery === "indeterminate" ? {
      kind: "unconfirmed",
      delivery: delivery
    } : {
      kind: "deadline"
    },
    late: void 0
  };
}
function tn(e) {
  return e.kind === "approval_unverified" || e.kind === "result" && e.envelope?.outcome === "refused";
}
function on(e) {
  return !tn(e) && e.kind !== "dropped";
}
function rn(e, n) {
  try {
    return sn(e, n);
  } catch (error) {
    return t(`[remote-tools] an unreadable reply was not taken as an answer: ${d(error)}`), !1;
  }
}
function sn(e, n) {
  let r = L(e) ? e.result : void 0,
    o = qq(r);
  switch (o.envelope.status) {
    case "present":
      return o.envelope.envelope.call_id === n;
    case "malformed":
      return an(r) === n;
    case "absent":
      return !1;
  }
}
function an(e) {
  if (!L(e)) return;
  return [e.structuredContent, e._meta].filter(L).map(item => item[x1]).find(L)?.call_id;
}
function J(e, elapsedMs_3) {
  if (ZTr(e)) {
    let {
        [INt]: s,
        ...m
      } = e,
      p = J(m, elapsedMs_3),
      c = p.kind === "result" && p.envelope?.outcome === "refused" ? p.envelope : void 0;
    return {
      kind: "dropped",
      why: "unverified_refusal",
      detail: "a sender this session could not verify reported the call refused; the machine itself is asked what became of it",
      ...(p.kind === "result" && c !== void 0 && {
        reported: {
          kind: "result",
          content: "",
          isError: p.isError,
          envelope: {
            v: c.v,
            outcome: c.outcome,
            target: {
              name: "",
              working_dir: ""
            },
            code: c.code,
            ...(c.reason !== void 0 && {
              reason: c.reason
            }),
            ...(c.limit !== void 0 && {
              limit: c.limit
            }),
            message: ""
          },
          elapsedMs: p.elapsedMs,
          responseBytes: p.responseBytes
        }
      })
    };
  }
  let r = L(e) ? e.result : void 0,
    o = qq(r);
  if (o.envelope.status === "malformed") return {
    kind: "transport_error",
    detail: "malformed result envelope",
    unreadableResult: !0
  };
  if (o.envelope.status === "absent") return {
    kind: "transport_error",
    detail: "answer without an envelope"
  };
  let envelope_2 = o.envelope.envelope;
  if (envelope_2.outcome === "refused" && envelope_2.code === "no_approval") return {
    kind: "approval_unverified"
  };
  return {
    kind: "result",
    content: o.content,
    isError: o.isError,
    envelope: envelope_2,
    elapsedMs: elapsedMs_3,
    responseBytes: HS(r),
    ...{}
  };
}
async function ye(e, n, r, o) {
  let u = (e.now ?? Date.now)(),
    s = await K(e, r, o),
    m = (r.live()?.lastHeardAt ?? -1 / 0) > u,
    p = e.host(),
    c = p?.instanceId !== r.instanceId;
  if (s === "answered" || s === "missed" && (m || c)) n.stale = !1;
  if (s === "answered" || s === "missed" && m || s !== "cancelled" && c && p !== void 0) return "there";
  return s === "missed" && !c ? "missed" : "unknown";
}
async function dn(e, n, r, o, u) {
  if (n.hold === void 0) {
    let m = new AbortController(),
      p = ln(e, n, r, m.signal, u);
    n.hold = {
      ended: p.finally(() => {
        n.hold = void 0;
      }),
      stop: m,
      waiting: 0
    };
  }
  let hold_2 = n.hold;
  hold_2.waiting += 1;
  try {
    return await Ao(hold_2.ended, o, () => new Ke());
  } catch {
    return "unknown";
  } finally {
    if (hold_2.waiting -= 1, hold_2.waiting === 0) hold_2.stop.abort();
  }
}
async function ln(e, n, r, o, u) {
  let s = e.probeDeadlineMs ?? $Ct;
  for (let m = u; m > 0; m -= s) {
    let p = await ye(e, n, r, o);
    if (p !== "missed") return p;
  }
  return "missed";
}
function ve(e, n) {
  let r = n.quietMisses[0],
    o = e.host()?.live();
  if (r !== void 0 && (o === void 0 || Se(o, r.writtenAt))) n.quietMisses = [];
  return n.quietMisses;
}
function Se(e, n) {
  return e.lastHeardAt > n || e.lastStillHereAt !== void 0 && e.lastStillHereAt > n;
}
function un(e, n, r) {
  if (n.quietProbe !== void 0) return n.quietProbe;
  let o = e.host(),
    u = o?.live();
  if (o === void 0 || u === void 0 || u.asleepSince !== void 0) return Promise.resolve(void 0);
  let writtenAt = (e.now ?? Date.now)(),
    m = r ?? e.probeDeadlineMs ?? $Ct,
    p = K(e, o, new AbortController().signal, {
      putWithinMs: putWithinMs,
      deadlineMs: m
    }).then(c => {
      let _ = o.live();
      if (c === "answered" || c === "missed" && _ !== void 0 && Se(_, writtenAt)) {
        if (c === "answered" || (_?.lastHeardAt ?? -1 / 0) > writtenAt) n.stale = !1;
        return n.quietMisses = [], !0;
      }
      if (c !== "missed" || _ === void 0 || _.asleepSince !== void 0) return;
      return n.quietMisses = [...ve(e, n), {
        writtenAt: writtenAt,
        waitedMs: m
      }], !1;
    }).catch(c => {
      t(`[remote-tools] a liveness probe for a waiting call failed: ${d(c)}`);
      return;
    }).finally(() => {
      n.quietProbe = void 0;
    });
  return n.quietProbe = p, p;
}
async function K(e, n, signal_4, o) {
  let u = e.now ?? Date.now,
    deadline_ms = o?.deadlineMs ?? e.probeDeadlineMs ?? $Ct,
    issued_at = u(),
    p,
    c;
  try {
    c = e.sender.sendServedCallRequest({
      request: {
        subtype: "remote_tools_probe",
        instance_id: n.instanceId,
        issued_at: issued_at,
        deadline_ms: deadline_ms
      },
      accepts: accepts_2,
      signal: signal_4,
      ...(o !== void 0 && {
        onUpload: g => {
          if (g === "accepted") p ??= u();
        }
      })
    });
  } catch (error) {
    return t(`[remote-tools] liveness probe to ${n.hostName} could not be sent: ${d(error)}`), "unsent";
  }
  if (!c.sent) return "unsent";
  let {
    settled: settled_3
  } = await be(c, deadline_ms, signal_4, {
    holdAtDeadline: !1,
    withdrawable: !0
  });
  if (settled_3.kind === "answered") {
    let g = L(settled_3.payload) ? settled_3.payload.result : void 0;
    return n.heard(u(), L(g) ? dEs(g.epoch) : void 0), "answered";
  }
  switch (settled_3.kind) {
    case "cancelled":
      return "cancelled";
    case "undelivered":
    case "failed":
      return "unsent";
    case "stalled":
      return settled_3.takenBack ? "taken_back" : "stalled";
    case "gone":
      return "gone";
    case "deadline":
      return o !== void 0 && (p === void 0 || issued_at + deadline_ms - p < (e.probeDeadlineMs ?? $Ct) - o.putWithinMs) ? "stream_lost" : "missed";
    case "dropped":
    case "delivery_unknown":
    case "unconfirmed":
      return "stream_lost";
  }
}
function accepts_2(e) {
  let n = L(e) ? e.result : void 0;
  return L(n) && dEs(n.epoch) !== void 0;
}
function ge(leftFor) {
  return leftFor === void 0 ? {} : {
    leftFor: leftFor
  };
}
function L(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function UCt(e) {
  return {
    toolState: e.toolState,
    agentContext: e.agentContext,
    mcpClients: () => _g(e)
  };
}
var fn = 8000,
  mn = 5000,
  pn = 30000,
  gn = 2000,
  W = 5000,
  Y = 60000;
class H {
  recovery = new X();
  connection = void 0;
  listingMemo = void 0;
  synced = !1;
  lastListingFailed = !1;
  lastForcedRelistAt = void 0;
  reportedUnmatched = !1;
  provisional = void 0;
  setAside = 0;
  offer = "unread";
  lastListedAt = void 0;
  unconnectedSince = void 0;
  failedAt = void 0;
  inFlight = void 0;
}
function lli(e) {
  let n = e.toolState.get(H),
    r = Date.now(),
    o = n.provisional !== void 0 && (n.provisional.stub || r - n.provisional.since < Y) ? W : hn;
  if (n.lastForcedRelistAt !== void 0 && r - n.lastForcedRelistAt < o || n.lastListedAt !== void 0 && r - n.lastListedAt < W) return !1;
  n.lastForcedRelistAt = r;
  let connection_2 = n.connection;
  if (connection_2 !== void 0) I().fetchToolsForClient.cache.delete(mr(connection_2.name, connection_2.config));
  return n.synced = !1, n.listingMemo = void 0, !0;
}
var hn = 30000;
async function BCt(e, n, r) {
  O6r(e, n, r), await _n(e, n, r), O6r(e, n, r);
}
function O6r(e, n, r) {
  let o = n.sourceHosts("session");
  n.replaceRemoteHosts("session", e.toolState.get(Qw).hostsForTable());
  let u = n.sourceHosts("session");
  if (z(o) === z(u)) return;
  l("tengu_remote_tool_targets", {
    event: e.toolState.get(Qw).entries().length === 0 ? b("withdrawn") : f(Ae(o, u)),
    source: b("session"),
    trigger: f(r),
    target_count: u.length,
    served_tool_count: u.reduce((acc, item) => acc + item.servedTools.size, 0),
    passthrough_tool_count: u.reduce((acc, item) => acc + (item.passthroughTools?.size ?? 0), 0),
    target_kind: de(u[0]?.description?.kind),
    target_platform: de(ztn(u[0]?.description?.platform)),
    incompatible_count: U(u, s => s.protocol.kind === "incompatible"),
    incompatible_interface_count: U(u, Re)
  });
}
async function _n(e, n, r) {
  if (!(await eue())) return;
  let o = e.toolState.get(H);
  return o.inFlight ??= wn(e, o, n, r).catch(u => {
    a(F(u));
  }).finally(() => {
    o.inFlight = void 0;
  }), o.inFlight;
}
function dli(e) {
  let n = e.toolState.get(H),
    r = I6r(e);
  if (n.synced && !n.lastListingFailed && r !== void 0 && r !== "set_aside") return "unlisted";
  if (n.synced && !n.lastListingFailed) return "listed";
  return Q(e) ? "unlisted" : "absent";
}
function cli(e) {
  return e.toolState.get(H).connection !== void 0;
}
function uli(e, n) {
  return e.toolState.get(H).lastListingFailed && !n.hosts().some(item => item.kind === "remote" && (item.source === "bridge" || item.source === "session"));
}
async function wn(e, n, r, trigger) {
  let u = e.mcpClients(),
    connection_3 = An(u);
  if (connection_3 === void 0) {
    if (rte(e.agentContext)) return;
    if (Cn(u, n, trigger), n.failedAt = void 0, n.lastListingFailed = !1, Q(e)) n.unconnectedSince ??= Date.now();else n.provisional = void 0, n.unconnectedSince = void 0;
    if (n.connection !== void 0) n.connection = void 0, n.listingMemo = void 0, n.setAside = 0, Te(r, [], {
      invalid: void 0,
      unreadable: 0,
      unreadableMarkers: 0,
      trigger: trigger
    });
    return;
  }
  let m = I().fetchToolsForClient.cache.get(mr(connection_3.name, connection_3.config)),
    p = e.toolState.get(Qw).entries().some(item => item.status === "online"),
    c = trigger !== "resolve" && n.provisional?.stub === !0 && !WW();
  if (n.synced && connection_3 === n.connection && m === n.listingMemo && (p || c || !Tn(n.provisional))) return;
  if (n.failedAt?.connection === connection_3 && Date.now() - n.failedAt.time < pn) return;
  let _ = Date.now(),
    g = await j(connection_3, {
      deadlineAt: _ + fn,
      recovery: n.recovery,
      idempotent: !0
    }, (M, y) => yn(M, Math.min(y, mn)));
  if (g.kind !== "ok") {
    n.lastListingFailed = !0, n.failedAt = Date.now() - _ >= gn ? {
      connection: connection_3,
      time: Date.now()
    } : void 0, t(`[remote-tools] device-bridge tools/list failed (${g.kind}); keeping last known machines${"error" in g ? `: ${d(g.error)}` : ""}`, {
      level: "warn"
    }), l("tengu_remote_tool_targets", {
      event: b("list_failed"),
      trigger: f(trigger),
      reason: "error" in g && Sn(g.error) ? b("timeout") : f(g.kind)
    });
    return;
  }
  if (g.value.truncated) t("[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery", {
    level: "warn"
  });
  let w = fe(connection_3, g.value.tools, n.recovery),
    S = WW() ? w : {
      ...w,
      hosts: [],
      invalid: void 0
    },
    host_count = w.hosts.length - S.hosts.length;
  if (n.offer = host_count > 0 ? "offered" : "none", host_count !== n.setAside) {
    if (n.setAside = host_count, host_count > 0) l("tengu_remote_tool_targets", {
      event: b("listing_set_aside"),
      trigger: f(trigger),
      host_count: host_count,
      tool_count: g.value.tools.length,
      stub: g.value.stub,
      invalid: de(w.invalid)
    }), t("[remote-tools] device-bridge listing offered a machine; not adopted: machines are taken from the session channel alone", {
      level: "warn"
    });
  }
  let T = S.hosts.length === 0;
  if (T && (n.provisional === void 0 || n.provisional.stub !== g.value.stub)) l("tengu_remote_tool_targets", {
    event: b("listed_empty"),
    trigger: f(trigger),
    tool_count: g.value.tools.length,
    truncated: g.value.truncated,
    has_served_name: g.value.tools.some(item => hce.has(item.name)),
    marker_count: U(g.value.tools, M => M._meta?.[GOe] !== void 0),
    stub: g.value.stub
  }), t(`[remote-tools] device-bridge listing adopted no machine (${g.value.tools.length} tools${g.value.stub ? p ? ", stub listing \u2014 the bound machine serves over the session channel instead" : ", stub listing \u2014 the bound machine has not announced yet" : ""})`);
  if (S.invalid !== void 0) t(`[remote-tools] device-bridge listing rejected (${S.invalid}): one connection must announce exactly one machine \u2014 its first announced name stays attached but unreachable`, {
    level: "warn"
  });
  Te(r, S.hosts, {
    invalid: S.invalid,
    unreadable: S.unreadable,
    unreadableMarkers: S.unreadableMarkers,
    trigger: trigger
  });
  let A = !T && n.provisional !== void 0 && m !== void 0 && m === n.listingMemo;
  if (A) I().fetchToolsForClient.cache.delete(mr(connection_3.name, connection_3.config));
  n.connection = connection_3, n.listingMemo = A ? void 0 : m, n.synced = !0, n.lastListedAt = Date.now(), n.unconnectedSince = void 0, n.provisional = T ? {
    at: Date.now(),
    since: n.provisional?.since ?? Date.now(),
    stub: g.value.stub
  } : void 0, n.reportedUnmatched = !1, n.failedAt = void 0, n.lastListingFailed = !1, t(`[remote-tools] device bridge matched: ${connection_3.name} (${g.value.tools.length} tools over ${g.value.pages} page(s))`);
}
async function yn(e, timeout_3) {
  let r = await dIt(e, {
    timeout: timeout_3
  });
  return {
    tools: r.tools.filter(vn),
    pages: 1,
    truncated: Boolean(r.nextCursor),
    stub: hKe(r) === "stub"
  };
}
function vn(e) {
  return typeof e === "object" && e !== null && typeof e.name === "string";
}
function Sn(e) {
  let n = d(e).toLowerCase();
  return n.includes("timed out") || n.includes("timeout");
}
function Q(e) {
  return e.mcpClients().some(item => Z(item) && item.type !== "disabled" && item.type !== "needs-auth");
}
function I6r(e) {
  let n = kn(e),
    r = n !== "connecting" && e.toolState.get(H).setAside > 0 ? "set_aside" : n;
  if (n === void 0 || WW()) return r;
  let o = e.toolState.get(Qw);
  if (o.hasAnnouncedThisLife()) return o.entries().length === 0 ? "serves_nothing" : r;
  return (i.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 ? "not_reannounced" : r;
}
function fli(e) {
  if (WW()) return "none";
  let {
    offer: offer
  } = e.toolState.get(H);
  if (offer !== "unread") return offer;
  let r = e.mcpClients().filter(item => item.name === bZ);
  return r.length > 0 && !r.some(item => Z(item) || ee(item)) ? "none" : "unread";
}
var ke = 15000;
function pli(e) {
  return e ? Math.max(ke, P6r.defaultDeadlineMs) : ke;
}
function tYo(e) {
  let n = e.toolState.get(Qw);
  return (i.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 && !WW() && !(n.hasAnnouncedThisLife() && n.entries().length === 0) && e.toolState.get(I6e).canAsk() && VZ() && te();
}
function mli(e, n, r) {
  return n.has(r) && !e.toolState.get(Qw).withdrawnThisLife(r) && tYo(e);
}
async function hli(e, n, {
  deadlineMs = P6r.defaultDeadlineMs,
  sliceMs = W,
  routableOtherwise: routableOtherwise,
  forMachine: forMachine
} = {}) {
  let m = e.toolState.get(Qw);
  if (forMachine === void 0 && m.entries().length > 0) return {
    kind: "announced"
  };
  let waitedMs = m.announceWaitExpired();
  if (waitedMs !== void 0) return {
    kind: "gave_up_earlier",
    waitedMs: waitedMs
  };
  if (forMachine !== void 0 && e.toolState.get(I6e).askOnce({
    workerEpoch: i.CLAUDE_CODE_WORKER_EPOCH ?? 1,
    deadlineMs: deadlineMs
  })) t("[remote-tools] asked the attached client to announce to this replacement worker");
  let c = Date.now();
  for (;;) {
    if (n.aborted) return {
      kind: "aborted"
    };
    if (forMachine === void 0 ? m.hasAnnouncedThisLife() : m.withdrawnThisLife(forMachine)) return {
      kind: "announced"
    };
    let g = deadlineMs - (Date.now() - c);
    if (g <= 0) break;
    let w = await V5t(m, n, Math.min(sliceMs, g));
    if (w === "announced" && (forMachine === void 0 || routableOtherwise === void 0)) return {
      kind: "announced"
    };
    if (w === "aborted") return {
      kind: "aborted"
    };
    if (routableOtherwise !== void 0 && (await routableOtherwise())) return w === "announced" ? {
      kind: "announced"
    } : {
      kind: "routable"
    };
  }
  let waitedMs_2 = Date.now() - c;
  return m.markAnnounceWaitExpired(waitedMs_2), {
    kind: "gave_up",
    waitedMs: waitedMs_2
  };
}
function kn(e) {
  let n = e.toolState.get(H);
  if (n.connection === void 0) return Q(e) && n.unconnectedSince !== void 0 && Date.now() - n.unconnectedSince < Y ? "connecting" : void 0;
  if (!n.provisional) return;
  if (Date.now() - n.provisional.since < Y) return "connecting";
  return n.provisional.stub ? "not_connected" : void 0;
}
function Tn(e) {
  if (e === void 0) return !1;
  let n = Date.now();
  if (!e.stub && n - e.since >= Y) return !1;
  return n - e.at >= W;
}
function Cn(e, n, r) {
  let o = e.filter(item => item.name === bZ);
  if (o.length === 0 || n.reportedUnmatched) return;
  let u = o.map(Rn);
  if (u.every(item => item === "connecting")) return;
  n.reportedUnmatched = !0, t(`[remote-tools] a '${bZ}' MCP entry exists but was not adopted as the device bridge: ${o.map((item, index) => `${u[index]} (type=${item.type}, scope=${item.config.scope})`).join("; ")}`, {
    level: "warn"
  }), l("tengu_remote_tool_targets", {
    event: b("no_bridge_connection"),
    trigger: f(r),
    servers_seen: o.length,
    reason: f(u[0] ?? "none"),
    ingress_base_unset: Jl.atStartup === void 0
  });
}
function Rn(e) {
  if (ee(e)) return "scoped_entry";
  if (!("url" in e.config) || typeof e.config.url !== "string") return "no_url";
  if (!$u(e.config.url)) return "not_ccr_proxy_url";
  if (!WFe(e.config.url)) return "not_devices_upstream";
  if (!Ce(e.config.url)) return "routing_shape";
  switch (e.type) {
    case "connected":
      return "none";
    case "disabled":
      return "disabled";
    case "needs-auth":
      return "needs_auth";
    default:
      return "connecting";
  }
}
function An(e) {
  return e.find(item => item.type === "connected" && Z(item));
}
function Z(e) {
  return e.name === bZ && !ee(e) && "url" in e.config && typeof e.config.url === "string" && WFe(e.config.url) && Ce(e.config.url);
}
function ee(e) {
  let {
    scope: scope,
    pluginSource: pluginSource,
    agentSource: agentSource
  } = e.config;
  return scope === "project" || scope === "local" || scope === "agent" || pluginSource !== void 0 || agentSource !== void 0;
}
function Ce(e) {
  try {
    let n = new URL(e),
      r = n.searchParams.getAll("toolbox_mcp_server_id"),
      o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(n.pathname)?.[1],
      u = r[0];
    return n.searchParams.getAll("mcp_url").length === 1 && (r.length === 0 || r.length === 1 && (u === bZ || o !== void 0 && u === En(o)));
  } catch {
    return !1;
  }
}
function En(e) {
  return n5(e, bZ);
}
function Te(e, n, {
  invalid: invalid_2,
  unreadable: o,
  unreadableMarkers: u,
  trigger: trigger_2
}) {
  let m = e.sourceHosts("bridge"),
    {
      dropped: dropped
    } = e.replaceRemoteHosts("bridge", n);
  if (dropped.length > 0) t(`[remote-tools] the bridge announced ${dropped.length} machine(s) under a name this session cannot adopt; not adopted: ${dropped.join(", ")}`, {
    level: "warn"
  });
  let c = e.sourceHosts("bridge"),
    _ = z(m) !== z(c);
  if (invalid_2 !== void 0) l("tengu_remote_tool_targets", {
    event: b("listing_invalid"),
    reason: f(invalid_2),
    trigger: f(trigger_2)
  });
  let g = _ ? Ae(m, c) : void 0;
  if (g !== void 0) l("tengu_remote_tool_targets", {
    event: f(g),
    trigger: f(trigger_2),
    target_count: c.length,
    served_tool_count: c.reduce((acc, item) => acc + item.servedTools.size, 0),
    passthrough_tool_count: c.reduce((acc, item) => acc + (item.passthroughTools?.size ?? 0), 0),
    target_kind: de(c[0]?.description?.kind),
    target_platform: de(ztn(c[0]?.description?.platform)),
    incompatible_count: U(c, w => w.protocol.kind === "incompatible"),
    incompatible_interface_count: U(c, Re),
    protocol_version: c[0]?.protocol.kind === "compatible" ? c[0].protocol.version : void 0,
    interface_agreed_version: c[0]?.protocol.kind === "compatible" ? c[0].protocol.interfaceVersion : void 0
  });
  if (o > 0 || u > 0) l("tengu_remote_tool_targets", {
    event: b("unreadable"),
    trigger: f(trigger_2),
    unreadable_count: o,
    unreadable_marker_count: u
  });
}
function Re(e) {
  return e.protocol.kind === "incompatible" && e.protocol.cause === "interface";
}
function z(e) {
  return e.map(item => `${item.name}\x00${item.status}\x00${item.servedTools.size}\x00${item.passthroughTools?.size ?? 0}`).sort().join(`
`);
}
function Ae(e, n) {
  let r = e.some(item => item.status === "online"),
    o = n.some(item => item.status === "online");
  if (e.length === 0) return n.length === 0 ? "changed" : "discovered";
  if (r && !o) return "went_offline";
  if (!r && o) return "came_online";
  return "changed";
}
export { P6r, $Ct, $ya, UCt, lli, BCt, O6r, dli, cli, uli, I6r, fli, pli, tYo, mli, hli };