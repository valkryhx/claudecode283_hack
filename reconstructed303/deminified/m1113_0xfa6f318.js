// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ke, kd, H, d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je, ka } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { sP, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { sj, dct } from "B:/~BUN/root/chunk-xyxdcn7p.js";
import { VEe, VMe, lm, Yy, qEe } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { gJ, E, SJ, u2 } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { cu, SVn, wVn as putWithinMs, xNt, N1e, EM, YLs, XLs, Gft, kVn, RVn, QLs, JRo, ZLs, eNs, xVn, oNs, iNs, IG, S3, $T, Sw } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Gq, uG, pH, Q9, fee, rBe, CS } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { q_e, V4t, CNe } from "B:/~BUN/root/chunk-ghxd5shf.js";
import { Ka } from "B:/~BUN/root/chunk-00v9f07q.js";
import { Ed, Y4t } from "B:/~BUN/root/chunk-zta47hte.js";
import { X4t, J4t, Q4t } from "B:/~BUN/root/chunk-j96j964t.js";
import { QNe } from "B:/~BUN/root/chunk-jpa3jye0.js";
import { lPt } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Jn } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { Tae } from "B:/~BUN/root/chunk-hdc8p5sh.js";
import { si } from "B:/~BUN/root/chunk-b0487zs4.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
function te() {
  try {
    return E("tengu_violin_scroll", !1);
  } catch {
    return !1;
  }
}
function B() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule();
}
class X {
  #e = new WeakMap();
  reinitialize(e) {
    let n = this.#e.get(e);
    if (n) return n;
    let r = B().clearServerCache(e.name, e.config).catch(() => {});
    return this.#e.set(e, r), r;
  }
}
var Ce = -32000;
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
  if (n.kind === "connect_failed") await B().evictStaleFailedConnectMemoForServe(e.name, e.config).catch(() => {});
  return n;
}
async function re(e, {
  deadlineAt: deadlineAt,
  signal: signal,
  idempotent = !1
}, u) {
  let s = B(),
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
    return error_2 instanceof Error && (s.isMcpSessionExpiredError(error_2) || idempotent && Re(error_2, connection)) ? {
      kind: "session_expired",
      connection: connection
    } : {
      kind: "failed",
      error: error_2
    };
  }
}
function Re(e, n) {
  return ("code" in e && e.code === Ce && e.message.includes("Connection closed") || k(e) === "CONNECTION_CLOSED") && (n.config.type === "http" || n.config.type === "claudeai-proxy");
}
var limits = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
  },
  Ae = -32001,
  Me = "office_bridge.kind",
  Pe = "office_bridge.bound_miss",
  De = new Set(["not_connected", "send_failed", "contested", "unsupported_on_bound"]),
  Oe = new Set(["disconnected", "cancelled"]),
  Le = new Set(["timeout"]),
  Ie = /not connected|not reachable|offline/i,
  He = /disconnected before responding|connection may be closing/i,
  Be = /did not respond within/i,
  xe = 200;
function ae(e, n) {
  return {
    kind: "bridge",
    limits: limits,
    call: (r, o, u, s) => qe(e, n, r, o, u, s),
    callPlumbing: (r, o, u) => Ne(e, n, r, o, u)
  };
}
async function Ne(e, recovery, name, o, u) {
  if (!rBe.has(name)) throw Error("callPlumbing: not a bridge plumbing tool");
  let s = Date.now(),
    m = S3(u.deadlineMs),
    p = await j(e, {
      deadlineAt: s + m,
      recovery: recovery,
      signal: u.signal,
      idempotent: u.idempotent
    }, (f, timeout) => sj(f, {
      name: name,
      arguments: {
        ...o
      }
    }, {
      signal: u.signal,
      timeout: timeout
    }));
  if (p.kind === "ok") {
    let f = IG(p.value),
      text = ue(f.content),
      g = f.isError && f.envelope.status === "absent" ? de(p.value, text, m) : void 0;
    if (g !== void 0) return ie(g);
    return {
      kind: "result",
      structuredContent: p.value.structuredContent,
      text: text,
      isError: f.isError
    };
  }
  if (u.signal.aborted) return {
    kind: "cancelled"
  };
  switch (p.kind) {
    case "connect_failed":
      return {
        kind: "unreachable",
        detail: Ka(d(p.error))
      };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
      };
    case "failed":
      return ie(le(p.error, m, void 0));
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
async function qe(e, recovery_2, name_2, o, u, s) {
  let m = Date.now(),
    p = S3(s.deadlineMs),
    f = QLs(u),
    _ = await j(e, {
      deadlineAt: m + p,
      recovery: recovery_2,
      signal: s.signal
    }, (g, timeout_2) => sj(g, {
      name: name_2,
      arguments: {
        ...o,
        [N1e]: u
      },
      _meta: {
        [XLs]: s.toolUseId,
        ...(f !== void 0 && {
          [YLs]: f
        })
      }
    }, {
      signal: s.signal,
      timeout: timeout_2
    }));
  if (_.kind === "ok") {
    let g = Fe(_.value, Date.now() - m, p);
    return g.kind === "result" ? {
      ...g,
      metaCopy: f === void 0 ? "omitted" : "attached"
    } : g;
  }
  if (s.signal.aborted) return {
    kind: "cancelled"
  };
  switch (_.kind) {
    case "connect_failed":
      return {
        kind: "unreachable",
        detail: Ka(d(_.error))
      };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
      };
    case "failed":
      return le(_.error, p, s.toolUseId);
  }
}
function Fe(e, elapsedMs, r) {
  let o = IG(e);
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
        responseBytes: $T(e),
        ...{}
      };
    case "absent":
      {
        let u = o.isError ? de(e, ue(o.content), r) : void 0;
        if (u) return u;
        return {
          kind: "result",
          content: o.content,
          isError: o.isError,
          envelope: void 0,
          elapsedMs: elapsedMs,
          responseBytes: $T(e)
        };
      }
  }
}
function de(e, n, capMs) {
  let o = Ue(e);
  if (o !== void 0 && Le.has(o)) return {
    kind: "timed_out",
    capMs: capMs
  };
  if (o !== void 0 && Oe.has(o)) return {
    kind: "dropped",
    detail: `bridge: ${o}`
  };
  if (o !== void 0 && De.has(o)) return {
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
  if (n.length > xe) return;
  if (Be.test(n)) return {
    kind: "timed_out",
    capMs: capMs
  };
  if (He.test(n)) return {
    kind: "dropped",
    detail: "bridge: disconnected"
  };
  if (Ie.test(n)) return {
    kind: "unreachable",
    detail: "bridge: not connected",
    machineNotAnswering: !0
  };
  return;
}
function Ue(e) {
  let n = e !== null && typeof e === "object" && "_meta" in e ? e._meta : void 0;
  if (n === null || typeof n !== "object") return;
  let r = n,
    o = r[Me];
  if (typeof o === "string") return o;
  return r[Pe] !== void 0 ? "not_connected" : void 0;
}
function le(e, capMs_2, r) {
  if (se(e) === Ae || k(e) === "REQUEST_TIMEOUT") return {
    kind: "timed_out",
    capMs: capMs_2
  };
  let detail = Ka(d(e));
  if (se(e) === SJ && Ve(e, r)) return {
    kind: "approval_unverified"
  };
  if (u2(e) !== "downstream_unreachable") return {
    kind: "transport_error",
    detail: detail
  };
  return $e.has(k(e) ?? "") ? {
    kind: "unreachable",
    detail: detail
  } : {
    kind: "dropped",
    detail: detail
  };
}
var $e = new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN", "FailedToOpenSocket"]);
function Ve(e, n) {
  let r = e !== null && typeof e === "object" && "data" in e ? e.data : void 0;
  if (typeof r !== "object" || r === null) return !1;
  let o = r;
  return typeof o.args_sha256 === "string" && typeof o.tool_name === "string" && typeof o.tool_use_id === "string" && n !== void 0 && o.tool_use_id === n;
}
function se(e) {
  return e !== null && typeof e === "object" && "code" in e && typeof e.code === "number" ? e.code : void 0;
}
function ue(e) {
  return typeof e === "string" ? e : e.flatMap(item => item.type === "text" ? [item.text] : []).join(`
`);
}
var We = "attached-machine";
function ce(e, n, r) {
  let o = n.map(item => ({
      ...item,
      name: sP(item.name)
    })),
    u = o.filter(item => fee.has(item.name)).map(item => ({
      toolName: item.name,
      meta: Ge(item),
      raw: item._meta?.[EM]
    })),
    s = o.filter(item => !fee.has(item.name) && CNe(item.name) && item._meta?.[q_e] !== void 0),
    m = s.flatMap(item => {
      let marker = Ye(item);
      return marker === void 0 ? [] : [{
        bridgeName: item.name,
        marker: marker
      }];
    }),
    p = new Set(m.map(item => item.bridgeName)),
    rejectedPassthroughTools = new Set(s.filter(item => !p.has(item.name)).map(item => item.name)),
    unreadableMarkers = rejectedPassthroughTools.size,
    unreadable = F(u, h => h.meta === void 0),
    servedTools = new Set(u.map(item => item.toolName)),
    plumbingTools = new Set(o.filter(item => rBe.has(item.name)).map(item => item.name)),
    passthroughTools = new Map(m.map(({
      bridgeName: bridgeName,
      marker: marker_2
    }) => [bridgeName, {
      localName: marker_2.tool
    }])),
    S = new Set([...u.flatMap(item => item.meta ? [item.meta.target.name] : []), ...m.map(({
      marker: marker_3
    }) => marker_3.target.name)]),
    R = o.reduce((acc, item) => {
      let T = Tn(item.name);
      return acc.set(T, (acc.get(T) ?? 0) + 1), acc;
    }, new Map()),
    M = s.some(item => (R.get(Tn(item.name)) ?? 0) > 1),
    invalid = S.size > 1 ? "two_names" : servedTools.size < u.length || M ? "duplicate_tool" : void 0;
  if (u.length === 0 && m.length === 0 && unreadableMarkers === 0) return {
    hosts: [],
    invalid: invalid,
    unreadable: 0,
    unreadableMarkers: unreadableMarkers
  };
  let N = u.find(item => item.meta)?.meta,
    description = N?.target ?? m[0]?.marker.target,
    P = N === void 0 ? u.map(item => item.raw) : [],
    announced = P.map(ZLs).find(item => item !== void 0),
    G = P.map(eNs).find(item => item !== void 0);
  return {
    hosts: [{
      kind: "remote",
      source: "bridge",
      name: description?.name ?? We,
      status: invalid === void 0 ? "online" : "offline",
      enforcement: "self",
      description: description,
      servedTools: servedTools,
      passthroughTools: passthroughTools,
      rejectedPassthroughTools: rejectedPassthroughTools,
      plumbingTools: plumbingTools,
      protocol: announced !== void 0 ? {
        kind: "incompatible",
        announced: announced
      } : RVn(N?.protocol_versions ?? G ?? (u.length === 0 ? [cu] : void 0)),
      transport: ae(e, r)
    }],
    invalid: invalid,
    unreadable: unreadable,
    unreadableMarkers: unreadableMarkers
  };
}
function Ye(e) {
  let n = V4t(sP(e._meta?.[q_e]));
  return n !== void 0 && n.tool === si(...ze(e.name)) && Tae(n.target.name) ? n : void 0;
}
function ze(e) {
  let n = e.indexOf("__");
  return n < 0 ? ["", e] : [e.slice(0, n), e.slice(n + 2)];
}
function Ge(e) {
  let n = xVn(sP(e._meta?.[EM]));
  return n !== void 0 && n.tool === e.name && Tae(n.target.name) ? n : void 0;
}
async function fe(e, n, name_3, args, u) {
  if (!rBe.has(name_3)) throw Error("callPlumbing: not a plumbing tool");
  if (u.signal.aborted) return {
    kind: "cancelled"
  };
  let s = S3(u.deadlineMs),
    request = {
      subtype: "remote_plumbing_call",
      ...iNs({
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
    detail: "the session stream is closed; nothing was sent"
  };
  let f = !1,
    _ = setTimeout(() => {
      f = !0, p.cancel();
    }, s);
  try {
    let g = await p.reply;
    return Je(g) ?? {
      kind: "transport_error",
      detail: "the answer was not a tool result"
    };
  } catch (error) {
    if (f) return {
      kind: "timed_out",
      capMs: s
    };
    if (u.signal.aborted) return {
      kind: "cancelled"
    };
    if (error instanceof kd) return {
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
function me(e) {
  let n = typeof e === "object" && e !== null && "result" in e ? e.result : void 0;
  if (typeof n !== "object" || n === null) return;
  return Array.isArray(n.content) ? n : void 0;
}
function accepts(e) {
  try {
    if (kVn(e)) return !1;
    return me(e) !== void 0;
  } catch {
    return !1;
  }
}
function Je(e) {
  let n = me(e);
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
var nlr = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
  },
  ge = 60000,
  kot = 1e4;
function $ni(e) {
  let n = {
      stale: !1,
      quietMisses: []
    },
    limits_2 = e.limits ?? nlr;
  return {
    kind: "session",
    limits: limits_2,
    call: (o, u, s, m) => Qe(e, n, limits_2, o, u, s, m),
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
      if (s === void 0 || m === void 0 || signal_2.aborted || !(m.status === "offline" || n.stale || p() - m.lastHeardAt > ge)) return;
      if (he(s, p())) return V(s);
      let f = await be(e, n, s, signal_2);
      if (f === "missed" && hold !== void 0 && s.live()?.status === "online" && !n.stale) {
        if (hold.notify("waiting"), f = await sn(e, n, s, signal_2, hold.ms), f === "there") hold.notify("back");
      }
      if (f !== "missed") return;
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
      probe: o => dn(e, n, o),
      missed: () => we(e, n),
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
      let p = await fe(e.sender, {
        instanceId: m.instanceId,
        host: m.hostName
      }, o, u, s);
      if (p.kind === "result") m.heard((e.now ?? Date.now)());
      return p;
    }
  };
}
function V(e) {
  return e.live()?.asleepSince !== void 0 ? {
    kind: "unreachable",
    detail: "it said it was going to sleep",
    machineNotAnswering: !0,
    saidAsleep: !0
  } : {
    kind: "unreachable",
    detail: "the machine did not answer a liveness check on this session; nothing was sent",
    machineNotAnswering: !0
  };
}
function he(e, n) {
  let r = e.live()?.asleepSince;
  return r !== void 0 && n >= r && n - r < SVn;
}
async function Qe(e, state, limits_3, o, input, envelope, m) {
  let p = e.now ?? Date.now;
  if (m.signal.aborted) return {
    kind: "cancelled"
  };
  let entry = e.host(),
    _ = entry?.live();
  if (entry === void 0 || _ === void 0) return {
    kind: "unreachable",
    detail: "the machine is not announcing on this session",
    machineNotAnswering: !0
  };
  let g = "op" in envelope && envelope.op === "outcome_of";
  if (!g && (_.status === "offline" || state.stale || p() - _.lastHeardAt > ge)) {
    if (he(entry, p())) return V(entry);
    let T = p(),
      A = await K(e, entry, m.signal);
    if (A === "cancelled") return {
      kind: "cancelled"
    };
    if (A === "unsent") return {
      kind: "unreachable",
      detail: "this session's event stream is not accepting requests; nothing was sent"
    };
    if (A === "stalled" || A === "taken_back") return {
      kind: "stalled",
      capMs: e.probeDeadlineMs ?? kot,
      request: "probe",
      takenBack: A === "taken_back"
    };
    if (A === "stream_lost") return {
      kind: "unreachable",
      detail: "this session could not complete the liveness check for a reason on its own side (its event stream closed, the service refused the write that carried it, or that write had not completed in time); the machine was not reached and nothing was sent"
    };
    let x = A === "missed" && (entry.live()?.lastHeardAt ?? -1 / 0) > T;
    if (A !== "answered" && !x) {
      if (A === "missed") entry.markAway("probe_missed");
      let D = e.host(),
        ne = D?.live();
      if (D === void 0 || D.instanceId === entry.instanceId || ne === void 0 || ne.status === "offline") return A === "gone" ? {
        kind: "unreachable",
        detail: "the machine withdrew from this session while it was being asked whether it is still there; nothing was sent",
        machineNotAnswering: !0
      } : V(entry);
      entry = D;
    }
    state.stale = !1;
  }
  let w = S3(m.deadlineMs),
    issuedAt = p(),
    C = entry.epoch(),
    sentUnderEpoch = C === void 0 ? {} : {
      sentUnderEpoch: C
    },
    leg = "op" in envelope ? envelope.op : envelope.approval ? 2 : 1,
    M = Y4t(leg),
    y = {
      posts: 0
    },
    onUpload = phase => {
      switch (phase) {
        case "sending":
          y.posts += 1, y.startedAt ??= p(), Ed(envelope.call_id, "post started", {
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
          Ed(envelope.call_id, "post accepted", {
            leg: leg,
            post_ms: y.startedAt === void 0 ? void 0 : y.acceptedAt - y.startedAt,
            attempt: y.posts
          }, M);
          return;
        case "not_accepted":
        case "indeterminate":
          Ed(envelope.call_id, "post not accepted", {
            leg: leg,
            phase: phase,
            attempt: y.posts
          }, M);
      }
    },
    q,
    sent;
  try {
    sent = e.sender.sendServedCallRequest({
      onUpload: onUpload,
      request: {
        subtype: "remote_tool_call",
        ...oNs({
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
      accepts: T => {
        if (!tn(T, envelope.call_id)) return !1;
        if (g && kVn(T)) return q = T, !1;
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
    detail: "this session's event stream is closed; nothing was sent"
  };
  Ed(envelope.call_id, "sent", {
    leg: leg,
    host_inst: entry.instanceId,
    host_epoch: C,
    deadline_ms: w
  }), m.onSent?.({
    instanceId: entry.instanceId,
    epoch: C,
    requestId: sent.requestId
  });
  let withdrawable = !g && !("approval" in envelope && envelope.approval?.decision === "deny"),
    {
      settled: settled,
      late: late
    } = await _e(sent, w, m.signal, {
      holdAtDeadline: m.onHeldAtDeadline !== void 0,
      withdrawable: withdrawable
    }),
    O = T => {
      let A = Ze(T, {
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
        heldBelowFloorAnswer: () => q
      });
      if (A.kind === "result") try {
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
        Ed(envelope.call_id, "answered", {
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
      return A;
    };
  if (late !== void 0) m.onHeldAtDeadline?.({
    late: late.then(O),
    withdraw: () => sent.cancel(),
    takeBack: () => withdrawable && sent.withdraw(),
    accepted: () => {
      let T = sent.delivery();
      return T === "delivered" || T === "untracked";
    }
  });
  return O(settled);
}
function Ze(e, {
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
  let C = () => {
    let S = heldBelowFloorAnswer();
    if (S === void 0) return;
    Ed(callId, "query deadline; taking the below-floor answer held for it", {
      deadline_ms: p,
      host_inst: entry_2.instanceId
    });
    let R = J(S, elapsedMs_2());
    return R.kind === "dropped" ? {
      ...R,
      ...sentUnderEpoch_2
    } : R;
  };
  switch (e.kind) {
    case "answered":
      {
        let S = J(e.payload, elapsedMs_2());
        if (nn(S)) state_2.stale = !1, entry_2.heard(heardNow());
        return S.kind === "dropped" ? {
          ...S,
          ...sentUnderEpoch_2
        } : S;
      }
    case "deadline":
      {
        let S = C();
        if (S !== void 0) return S;
        if (held) return Ed(callId, "no answer by the deadline; request left standing, checking on it", {
          deadline_ms: p,
          host_inst: entry_2.instanceId
        }), {
          kind: "timed_out",
          capMs: p,
          ...sentUnderEpoch_2
        };
        if (Ed(callId, "no answer by the deadline; request withdrawn", {
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
      return Ed(callId, e.takenBack ? "still queued here at the deadline; taken back before any write carried it" : "still queued here at the deadline; cancelled behind it", {
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
        let S = C();
        if (S !== void 0) return S;
        return Ed(callId, "deadline reached with the write carrying the request unresolved; withdrawn, delivery unknown", {
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
async function _e(e, n, r, {
  holdAtDeadline: holdAtDeadline,
  withdrawable: withdrawable_2
}) {
  let late_2 = e.reply.then(payload => ({
      kind: "answered",
      payload: payload
    }), f => {
      if (r.aborted) return {
        kind: "cancelled"
      };
      if (f instanceof Q4t) return {
        kind: "undelivered",
        status: f.status
      };
      if (f instanceof J4t) return {
        kind: "delivery_unknown",
        status: f.status
      };
      if (f instanceof kd) return {
        kind: "dropped"
      };
      if (f instanceof X4t) return {
        kind: "gone",
        why: f.why,
        unsent: e.delivery() === "queued"
      };
      return {
        kind: "failed",
        detail: d(f)
      };
    }),
    settled_2 = await je(late_2, n);
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
function en(e) {
  return e.kind === "approval_unverified" || e.kind === "result" && e.envelope?.outcome === "refused";
}
function nn(e) {
  return !en(e) && e.kind !== "dropped";
}
function tn(e, n) {
  try {
    return on(e, n);
  } catch (error) {
    return t(`[remote-tools] an unreadable reply was not taken as an answer: ${d(error)}`), !1;
  }
}
function on(e, n) {
  let r = L(e) ? e.result : void 0,
    o = IG(r);
  switch (o.envelope.status) {
    case "present":
      return o.envelope.envelope.call_id === n;
    case "malformed":
      return rn(r) === n;
    case "absent":
      return !1;
  }
}
function rn(e) {
  if (!L(e)) return;
  return [e.structuredContent, e._meta].filter(L).map(item => item[EM]).find(L)?.call_id;
}
function J(e, elapsedMs_3) {
  if (kVn(e)) {
    let {
        [Gft]: s,
        ...m
      } = e,
      p = J(m, elapsedMs_3),
      f = p.kind === "result" && p.envelope?.outcome === "refused" ? p.envelope : void 0;
    return {
      kind: "dropped",
      why: "unverified_refusal",
      detail: "a sender this session could not verify reported the call refused; the machine itself is asked what became of it",
      ...(p.kind === "result" && f !== void 0 && {
        reported: {
          kind: "result",
          content: "",
          isError: p.isError,
          envelope: {
            v: f.v,
            outcome: f.outcome,
            target: {
              name: "",
              working_dir: ""
            },
            code: f.code,
            ...(f.reason !== void 0 && {
              reason: f.reason
            }),
            ...(f.limit !== void 0 && {
              limit: f.limit
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
    o = IG(r);
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
    responseBytes: $T(r),
    ...{}
  };
}
async function be(e, n, r, o) {
  let u = (e.now ?? Date.now)(),
    s = await K(e, r, o),
    m = (r.live()?.lastHeardAt ?? -1 / 0) > u,
    p = e.host(),
    f = p?.instanceId !== r.instanceId;
  if (s === "answered" || s === "missed" && (m || f)) n.stale = !1;
  if (s === "answered" || s === "missed" && m || s !== "cancelled" && f && p !== void 0) return "there";
  return s === "missed" && !f ? "missed" : "unknown";
}
async function sn(e, n, r, o, u) {
  if (n.hold === void 0) {
    let m = new AbortController(),
      p = an(e, n, r, m.signal, u);
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
    return await ka(hold_2.ended, o, () => new Ke());
  } catch {
    return "unknown";
  } finally {
    if (hold_2.waiting -= 1, hold_2.waiting === 0) hold_2.stop.abort();
  }
}
async function an(e, n, r, o, u) {
  let s = e.probeDeadlineMs ?? kot;
  for (let m = u; m > 0; m -= s) {
    let p = await be(e, n, r, o);
    if (p !== "missed") return p;
  }
  return "missed";
}
function we(e, n) {
  let r = n.quietMisses[0],
    o = e.host()?.live();
  if (r !== void 0 && (o === void 0 || ye(o, r.writtenAt))) n.quietMisses = [];
  return n.quietMisses;
}
function ye(e, n) {
  return e.lastHeardAt > n || e.lastStillHereAt !== void 0 && e.lastStillHereAt > n;
}
function dn(e, n, r) {
  if (n.quietProbe !== void 0) return n.quietProbe;
  let o = e.host(),
    u = o?.live();
  if (o === void 0 || u === void 0 || u.asleepSince !== void 0) return Promise.resolve(void 0);
  let writtenAt = (e.now ?? Date.now)(),
    m = r ?? e.probeDeadlineMs ?? kot,
    p = K(e, o, new AbortController().signal, {
      putWithinMs: putWithinMs,
      deadlineMs: m
    }).then(f => {
      let _ = o.live();
      if (f === "answered" || f === "missed" && _ !== void 0 && ye(_, writtenAt)) {
        if (f === "answered" || (_?.lastHeardAt ?? -1 / 0) > writtenAt) n.stale = !1;
        return n.quietMisses = [], !0;
      }
      if (f !== "missed" || _ === void 0 || _.asleepSince !== void 0) return;
      return n.quietMisses = [...we(e, n), {
        writtenAt: writtenAt,
        waitedMs: m
      }], !1;
    }).catch(f => {
      t(`[remote-tools] a liveness probe for a waiting call failed: ${d(f)}`);
      return;
    }).finally(() => {
      n.quietProbe = void 0;
    });
  return n.quietProbe = p, p;
}
async function K(e, n, signal_4, o) {
  let u = e.now ?? Date.now,
    deadline_ms = o?.deadlineMs ?? e.probeDeadlineMs ?? kot,
    issued_at = u(),
    p,
    f;
  try {
    f = e.sender.sendServedCallRequest({
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
  if (!f.sent) return "unsent";
  let {
    settled: settled_3
  } = await _e(f, deadline_ms, signal_4, {
    holdAtDeadline: !1,
    withdrawable: !0
  });
  if (settled_3.kind === "answered") {
    let g = L(settled_3.payload) ? settled_3.payload.result : void 0;
    return n.heard(u(), L(g) ? JRo(g.epoch) : void 0), "answered";
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
      return o !== void 0 && (p === void 0 || issued_at + deadline_ms - p < (e.probeDeadlineMs ?? kot) - o.putWithinMs) ? "stream_lost" : "missed";
    case "dropped":
    case "delivery_unknown":
    case "unconfirmed":
      return "stream_lost";
  }
}
function accepts_2(e) {
  let n = L(e) ? e.result : void 0;
  return L(n) && JRo(n.epoch) !== void 0;
}
function L(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Eot(e) {
  return {
    toolState: e.toolState,
    agentContext: e.agentContext,
    mcpClients: () => Sw(e)
  };
}
var un = 8000,
  cn = 5000,
  fn = 30000,
  mn = 2000,
  W = 5000,
  Y = 60000;
class I {
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
function kns(e) {
  let n = e.toolState.get(I),
    r = Date.now(),
    o = n.provisional !== void 0 && (n.provisional.stub || r - n.provisional.since < Y) ? W : pn;
  if (n.lastForcedRelistAt !== void 0 && r - n.lastForcedRelistAt < o || n.lastListedAt !== void 0 && r - n.lastListedAt < W) return !1;
  n.lastForcedRelistAt = r;
  let connection_2 = n.connection;
  if (connection_2 !== void 0) B().fetchToolsForClient.cache.delete(Jn(connection_2.name, connection_2.config));
  return n.synced = !1, n.listingMemo = void 0, !0;
}
var pn = 30000;
async function Tot(e, n, r) {
  rlr(e, n, r), await gn(e, n, r), rlr(e, n, r);
}
function rlr(e, n, r) {
  let o = n.sourceHosts("session");
  n.replaceRemoteHosts("session", e.toolState.get(CS).hostsForTable());
  let u = n.sourceHosts("session");
  if (z(o) === z(u)) return;
  i("tengu_remote_tool_targets", {
    event: e.toolState.get(CS).entries().length === 0 ? b("withdrawn") : c(Te(o, u)),
    source: b("session"),
    trigger: c(r),
    target_count: u.length,
    served_tool_count: u.reduce((acc, item) => acc + item.servedTools.size, 0),
    passthrough_tool_count: u.reduce((acc, item) => acc + (item.passthroughTools?.size ?? 0), 0),
    target_kind: pe(u[0]?.description?.kind),
    target_platform: pe(xNt(u[0]?.description?.platform)),
    incompatible_count: F(u, s => s.protocol.kind === "incompatible")
  });
}
async function gn(e, n, r) {
  if (!(await Gq())) return;
  let o = e.toolState.get(I);
  return o.inFlight ??= hn(e, o, n, r).catch(u => {
    l(H(u));
  }).finally(() => {
    o.inFlight = void 0;
  }), o.inFlight;
}
function Ens(e) {
  let n = e.toolState.get(I),
    r = olr(e);
  if (n.synced && !n.lastListingFailed && r !== void 0 && r !== "set_aside") return "unlisted";
  if (n.synced && !n.lastListingFailed) return "listed";
  return Q(e) ? "unlisted" : "absent";
}
function Tns(e) {
  return e.toolState.get(I).connection !== void 0;
}
function Cns(e, n) {
  return e.toolState.get(I).lastListingFailed && !n.hosts().some(item => item.kind === "remote" && (item.source === "bridge" || item.source === "session"));
}
async function hn(e, n, r, trigger) {
  let u = e.mcpClients(),
    connection_3 = Cn(u);
  if (connection_3 === void 0) {
    if (gJ(e.agentContext)) return;
    if (Sn(u, n, trigger), n.failedAt = void 0, n.lastListingFailed = !1, Q(e)) n.unconnectedSince ??= Date.now();else n.provisional = void 0, n.unconnectedSince = void 0;
    if (n.connection !== void 0) n.connection = void 0, n.listingMemo = void 0, n.setAside = 0, Se(r, [], {
      invalid: void 0,
      unreadable: 0,
      unreadableMarkers: 0,
      trigger: trigger
    });
    return;
  }
  let m = B().fetchToolsForClient.cache.get(Jn(connection_3.name, connection_3.config)),
    p = e.toolState.get(CS).entries().some(item => item.status === "online"),
    f = trigger !== "resolve" && n.provisional?.stub === !0 && !pH();
  if (n.synced && connection_3 === n.connection && m === n.listingMemo && (p || f || !vn(n.provisional))) return;
  if (n.failedAt?.connection === connection_3 && Date.now() - n.failedAt.time < fn) return;
  let _ = Date.now(),
    g = await j(connection_3, {
      deadlineAt: _ + un,
      recovery: n.recovery,
      idempotent: !0
    }, (M, y) => _n(M, Math.min(y, cn)));
  if (g.kind !== "ok") {
    n.lastListingFailed = !0, n.failedAt = Date.now() - _ >= mn ? {
      connection: connection_3,
      time: Date.now()
    } : void 0, t(`[remote-tools] device-bridge tools/list failed (${g.kind}); keeping last known machines${"error" in g ? `: ${d(g.error)}` : ""}`, {
      level: "warn"
    }), i("tengu_remote_tool_targets", {
      event: b("list_failed"),
      trigger: c(trigger),
      reason: "error" in g && wn(g.error) ? b("timeout") : c(g.kind)
    });
    return;
  }
  if (g.value.truncated) t("[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery", {
    level: "warn"
  });
  let w = ce(connection_3, g.value.tools, n.recovery),
    v = pH() ? w : {
      ...w,
      hosts: [],
      invalid: void 0
    },
    host_count = w.hosts.length - v.hosts.length;
  if (n.offer = host_count > 0 ? "offered" : "none", host_count !== n.setAside) {
    if (n.setAside = host_count, host_count > 0) i("tengu_remote_tool_targets", {
      event: b("listing_set_aside"),
      trigger: c(trigger),
      host_count: host_count,
      tool_count: g.value.tools.length,
      stub: g.value.stub,
      invalid: pe(w.invalid)
    }), t("[remote-tools] device-bridge listing offered a machine; not adopted: machines are taken from the session channel alone", {
      level: "warn"
    });
  }
  let S = v.hosts.length === 0;
  if (S && (n.provisional === void 0 || n.provisional.stub !== g.value.stub)) i("tengu_remote_tool_targets", {
    event: b("listed_empty"),
    trigger: c(trigger),
    tool_count: g.value.tools.length,
    truncated: g.value.truncated,
    has_served_name: g.value.tools.some(item => fee.has(item.name)),
    marker_count: F(g.value.tools, M => M._meta?.[q_e] !== void 0),
    stub: g.value.stub
  }), t(`[remote-tools] device-bridge listing adopted no machine (${g.value.tools.length} tools${g.value.stub ? p ? ", stub listing \u2014 the bound machine serves over the session channel instead" : ", stub listing \u2014 the bound machine has not announced yet" : ""})`);
  if (v.invalid !== void 0) t(`[remote-tools] device-bridge listing rejected (${v.invalid}): one connection must announce exactly one machine \u2014 its first announced name stays attached but unreachable`, {
    level: "warn"
  });
  Se(r, v.hosts, {
    invalid: v.invalid,
    unreadable: v.unreadable,
    unreadableMarkers: v.unreadableMarkers,
    trigger: trigger
  });
  let R = !S && n.provisional !== void 0 && m !== void 0 && m === n.listingMemo;
  if (R) B().fetchToolsForClient.cache.delete(Jn(connection_3.name, connection_3.config));
  n.connection = connection_3, n.listingMemo = R ? void 0 : m, n.synced = !0, n.lastListedAt = Date.now(), n.unconnectedSince = void 0, n.provisional = S ? {
    at: Date.now(),
    since: n.provisional?.since ?? Date.now(),
    stub: g.value.stub
  } : void 0, n.reportedUnmatched = !1, n.failedAt = void 0, n.lastListingFailed = !1, t(`[remote-tools] device bridge matched: ${connection_3.name} (${g.value.tools.length} tools over ${g.value.pages} page(s))`);
}
async function _n(e, timeout_3) {
  let r = await dct(e, {
    timeout: timeout_3
  });
  return {
    tools: r.tools.filter(bn),
    pages: 1,
    truncated: Boolean(r.nextCursor),
    stub: VMe(r) === "stub"
  };
}
function bn(e) {
  return typeof e === "object" && e !== null && typeof e.name === "string";
}
function wn(e) {
  let n = d(e).toLowerCase();
  return n.includes("timed out") || n.includes("timeout");
}
function Q(e) {
  return e.mcpClients().some(item => Z(item) && item.type !== "disabled" && item.type !== "needs-auth");
}
function olr(e) {
  let n = yn(e),
    r = n !== "connecting" && e.toolState.get(I).setAside > 0 ? "set_aside" : n;
  if (n === void 0 || pH()) return r;
  let o = e.toolState.get(CS);
  if (o.hasAnnouncedThisLife()) return o.entries().length === 0 ? "serves_nothing" : r;
  return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 ? "not_reannounced" : r;
}
function Rns(e) {
  if (pH()) return "none";
  let {
    offer: offer
  } = e.toolState.get(I);
  if (offer !== "unread") return offer;
  let r = e.mcpClients().filter(item => item.name === Q9);
  return r.length > 0 && !r.some(item => Z(item) || ee(item)) ? "none" : "unread";
}
var ve = 15000;
function Ans(e) {
  return e ? Math.max(ve, nlr.defaultDeadlineMs) : ve;
}
function _Jr(e) {
  let n = e.toolState.get(CS);
  return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 && !pH() && !(n.hasAnnouncedThisLife() && n.entries().length === 0) && e.toolState.get(QNe).canAsk() && uG() && te();
}
function xns(e, n, r) {
  return n.has(r) && !e.toolState.get(CS).withdrawnThisLife(r) && _Jr(e);
}
async function Pns(e, n, {
  deadlineMs = nlr.defaultDeadlineMs,
  sliceMs = W,
  routableOtherwise: routableOtherwise,
  forMachine: forMachine
} = {}) {
  let m = e.toolState.get(CS);
  if (forMachine === void 0 && m.entries().length > 0) return {
    kind: "announced"
  };
  let waitedMs = m.announceWaitExpired();
  if (waitedMs !== void 0) return {
    kind: "gave_up_earlier",
    waitedMs: waitedMs
  };
  if (forMachine !== void 0 && e.toolState.get(QNe).askOnce({
    workerEpoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 1,
    deadlineMs: deadlineMs
  })) t("[remote-tools] asked the attached client to announce to this replacement worker");
  let f = Date.now();
  for (;;) {
    if (n.aborted) return {
      kind: "aborted"
    };
    if (forMachine === void 0 ? m.hasAnnouncedThisLife() : m.withdrawnThisLife(forMachine)) return {
      kind: "announced"
    };
    let g = deadlineMs - (Date.now() - f);
    if (g <= 0) break;
    let w = await lPt(m, n, Math.min(sliceMs, g));
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
  let waitedMs_2 = Date.now() - f;
  return m.markAnnounceWaitExpired(waitedMs_2), {
    kind: "gave_up",
    waitedMs: waitedMs_2
  };
}
function yn(e) {
  let n = e.toolState.get(I);
  if (n.connection === void 0) return Q(e) && n.unconnectedSince !== void 0 && Date.now() - n.unconnectedSince < Y ? "connecting" : void 0;
  if (!n.provisional) return;
  if (Date.now() - n.provisional.since < Y) return "connecting";
  return n.provisional.stub ? "not_connected" : void 0;
}
function vn(e) {
  if (e === void 0) return !1;
  let n = Date.now();
  if (!e.stub && n - e.since >= Y) return !1;
  return n - e.at >= W;
}
function Sn(e, n, r) {
  let o = e.filter(item => item.name === Q9);
  if (o.length === 0 || n.reportedUnmatched) return;
  let u = o.map(kn);
  if (u.every(item => item === "connecting")) return;
  n.reportedUnmatched = !0, t(`[remote-tools] a '${Q9}' MCP entry exists but was not adopted as the device bridge: ${o.map((item, index) => `${u[index]} (type=${item.type}, scope=${item.config.scope})`).join("; ")}`, {
    level: "warn"
  }), i("tengu_remote_tool_targets", {
    event: b("no_bridge_connection"),
    trigger: c(r),
    servers_seen: o.length,
    reason: c(u[0] ?? "none"),
    ingress_base_unset: lm.atStartup === void 0
  });
}
function kn(e) {
  if (ee(e)) return "scoped_entry";
  if (!("url" in e.config) || typeof e.config.url !== "string") return "no_url";
  if (!Yy(e.config.url)) return "not_ccr_proxy_url";
  if (!qEe(e.config.url)) return "not_devices_upstream";
  if (!ke(e.config.url)) return "routing_shape";
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
function Cn(e) {
  return e.find(item => item.type === "connected" && Z(item));
}
function Z(e) {
  return e.name === Q9 && !ee(e) && "url" in e.config && typeof e.config.url === "string" && qEe(e.config.url) && ke(e.config.url);
}
function ee(e) {
  let {
    scope: scope,
    pluginSource: pluginSource,
    agentSource: agentSource
  } = e.config;
  return scope === "project" || scope === "local" || scope === "agent" || pluginSource !== void 0 || agentSource !== void 0;
}
function ke(e) {
  try {
    let n = new URL(e),
      r = n.searchParams.getAll("toolbox_mcp_server_id"),
      o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(n.pathname)?.[1],
      u = r[0];
    return n.searchParams.getAll("mcp_url").length === 1 && (r.length === 0 || r.length === 1 && (u === Q9 || o !== void 0 && u === Rn(o)));
  } catch {
    return !1;
  }
}
function Rn(e) {
  return VEe(e, Q9);
}
function Se(e, n, {
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
  let f = e.sourceHosts("bridge"),
    _ = z(m) !== z(f);
  if (invalid_2 !== void 0) i("tengu_remote_tool_targets", {
    event: b("listing_invalid"),
    reason: c(invalid_2),
    trigger: c(trigger_2)
  });
  let g = _ ? Te(m, f) : void 0;
  if (g !== void 0) i("tengu_remote_tool_targets", {
    event: c(g),
    trigger: c(trigger_2),
    target_count: f.length,
    served_tool_count: f.reduce((acc, item) => acc + item.servedTools.size, 0),
    passthrough_tool_count: f.reduce((acc, item) => acc + (item.passthroughTools?.size ?? 0), 0),
    target_kind: pe(f[0]?.description?.kind),
    target_platform: pe(xNt(f[0]?.description?.platform)),
    incompatible_count: F(f, w => w.protocol.kind === "incompatible"),
    protocol_version: f[0]?.protocol.kind === "compatible" ? f[0].protocol.version : void 0
  });
  if (o > 0 || u > 0) i("tengu_remote_tool_targets", {
    event: b("unreadable"),
    trigger: c(trigger_2),
    unreadable_count: o,
    unreadable_marker_count: u
  });
}
function z(e) {
  return e.map(item => `${item.name}\x00${item.status}\x00${item.servedTools.size}\x00${item.passthroughTools?.size ?? 0}`).sort().join(`
`);
}
function Te(e, n) {
  let r = e.some(item => item.status === "online"),
    o = n.some(item => item.status === "online");
  if (e.length === 0) return n.length === 0 ? "changed" : "discovered";
  if (r && !o) return "went_offline";
  if (!r && o) return "came_online";
  return "changed";
}
export { nlr, kot, $ni, Eot, kns, Tot, rlr, Ens, Tns, Cns, olr, Rns, Ans, _Jr, xns, Pns };