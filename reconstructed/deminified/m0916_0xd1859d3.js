// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ul, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { FT, FKe, Trn, JCr, tvo, rvo, iz, vB, wR } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { FSt, $St, USt } from "B:/~BUN/root/chunk-dxbqhx2r.js";
import { r4t } from "B:/~BUN/root/chunk-ddsh90nc.js";
import { lc, BSt } from "B:/~BUN/root/chunk-twqr14hq.js";
import { Eoe } from "B:/~BUN/root/chunk-6wjpaxb7.js";
async function D(e, i, name, args, d) {
  if (!Eoe.has(name)) throw Error("callPlumbing: not a plumbing tool");
  if (d.signal.aborted) return {
    kind: "cancelled"
  };
  let r = vB(d.deadlineMs),
    request = {
      subtype: "remote_plumbing_call",
      ...rvo({
        instanceId: i.instanceId,
        host: i.host,
        name: name,
        args: args,
        issuedAt: Date.now(),
        deadlineMs: r
      })
    },
    n;
  try {
    n = e.sendServedCallRequest({
      request: request,
      accepts: accepts,
      signal: d.signal
    });
  } catch (error) {
    return {
      kind: "transport_error",
      detail: `send failed: ${l(error)}`
    };
  }
  if (!n.sent) return n.reply.catch(() => {}), {
    kind: "unreachable",
    detail: "the session stream is closed; nothing was sent"
  };
  let s = !1,
    f = setTimeout(() => {
      s = !0, n.cancel();
    }, r);
  try {
    let p = await n.reply;
    return F(p) ?? {
      kind: "transport_error",
      detail: "the answer was not a tool result"
    };
  } catch (error) {
    if (s) return {
      kind: "timed_out",
      capMs: r
    };
    if (d.signal.aborted) return {
      kind: "cancelled"
    };
    if (error instanceof ul) return {
      kind: "dropped",
      detail: "the session stream closed after the request left"
    };
    return {
      kind: "transport_error",
      detail: l(error)
    };
  } finally {
    clearTimeout(f);
  }
}
function M(e) {
  let i = typeof e === "object" && e !== null && "result" in e ? e.result : void 0;
  if (typeof i !== "object" || i === null) return;
  return Array.isArray(i.content) ? i : void 0;
}
function accepts(e) {
  try {
    if (Trn(e)) return !1;
    return M(e) !== void 0;
  } catch {
    return !1;
  }
}
function F(e) {
  let i = M(e);
  if (i === void 0) return;
  let {
    content: content,
    structuredContent: structuredContent,
    isError: isError
  } = i;
  return {
    kind: "result",
    structuredContent: structuredContent,
    text: content.flatMap(item => typeof item === "object" && item !== null && item.type === "text" && typeof item.text === "string" ? [item.text] : []).join(`
`),
    isError: isError === !0
  };
}
var t4t = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
  },
  E = 60000,
  B = 1e4;
function bKo(e) {
  let i = {
      stale: !1
    },
    limits = e.limits ?? t4t;
  return {
    kind: "session",
    limits: limits,
    call: (a, d, r, o) => U(e, i, limits, a, d, r, o),
    markUnresponsive: () => {
      i.stale = !0;
    },
    checkLive: async ({
      signal: signal
    }) => {
      let d = e.host(),
        r = d?.live(),
        o = e.now ?? Date.now;
      if (d === void 0 || r === void 0 || signal.aborted || !(r.status === "offline" || i.stale || o() - r.lastHeardAt > E)) return;
      let n = o(),
        s = await L(e, d, signal),
        f = (d.live()?.lastHeardAt ?? -1 / 0) > n || e.host()?.instanceId !== d.instanceId;
      if (s === "answered" || s === "missed" && f) i.stale = !1;
      if (s !== "missed" || f) return;
      return d.markAway("probe_missed"), {
        kind: "unreachable",
        detail: "the machine did not answer a liveness check on this session; nothing was sent",
        machineNotAnswering: !0
      };
    },
    ...(e.sender.withdrawStandingServedCall !== void 0 && {
      withdrawStanding: a => {
        e.sender.withdrawStandingServedCall?.(a);
      }
    }),
    callPlumbing: async (a, d, r) => {
      let o = e.host();
      if (o === void 0) return {
        kind: "unreachable",
        detail: "the machine is no longer announced on this session"
      };
      let n = await D(e.sender, {
        instanceId: o.instanceId,
        host: o.hostName
      }, a, d, r);
      if (n.kind === "result") o.heard((e.now ?? Date.now)());
      return n;
    }
  };
}
async function U(e, state, limits_2, a, input, envelope, o) {
  let n = e.now ?? Date.now;
  if (o.signal.aborted) return {
    kind: "cancelled"
  };
  let entry = e.host(),
    f = entry?.live();
  if (entry === void 0 || f === void 0) return {
    kind: "unreachable",
    detail: "the machine is not announcing on this session",
    machineNotAnswering: !0
  };
  let p = "op" in envelope && envelope.op === "outcome_of";
  if (!p && (f.status === "offline" || state.stale || n() - f.lastHeardAt > E)) {
    let h = n(),
      w = await L(e, entry, o.signal);
    if (w === "cancelled") return {
      kind: "cancelled"
    };
    if (w === "unsent") return {
      kind: "unreachable",
      detail: "this session's event stream is not accepting requests; nothing was sent"
    };
    if (w === "stalled" || w === "taken_back") return {
      kind: "stalled",
      capMs: e.probeDeadlineMs ?? B,
      request: "probe",
      takenBack: w === "taken_back"
    };
    if (w === "stream_lost") return {
      kind: "unreachable",
      detail: "this session could not complete the liveness check for a reason on its own side (its event stream closed, the service refused the write that carried it, or that write had not completed in time); the machine was not reached and nothing was sent"
    };
    let A = w === "missed" && (entry.live()?.lastHeardAt ?? -1 / 0) > h;
    if (w !== "answered" && !A) {
      if (w === "missed") entry.markAway("probe_missed");
      let k = e.host(),
        I = k?.live();
      if (k === void 0 || k.instanceId === entry.instanceId || I === void 0 || I.status === "offline") return {
        kind: "unreachable",
        detail: w === "gone" ? "the machine withdrew from this session while it was being asked whether it is still there; nothing was sent" : "the machine did not answer a liveness check on this session; nothing was sent",
        machineNotAnswering: !0
      };
      entry = k;
    }
    state.stale = !1;
  }
  let _ = vB(o.deadlineMs),
    issuedAt = n(),
    S = entry.epoch(),
    sentUnderEpoch = S === void 0 ? {} : {
      sentUnderEpoch: S
    },
    leg = "op" in envelope ? envelope.op : envelope.approval ? 2 : 1,
    R = BSt(leg),
    c = {
      posts: 0
    },
    onUpload = phase => {
      switch (phase) {
        case "sending":
          c.posts += 1, c.startedAt ??= n(), lc(envelope.call_id, "post started", {
            leg: leg,
            queue_ms: c.startedAt - issuedAt,
            attempt: c.posts
          }, R);
          return;
        case "accepted":
          c.acceptedAt ??= n(), lc(envelope.call_id, "post accepted", {
            leg: leg,
            post_ms: c.startedAt === void 0 ? void 0 : c.acceptedAt - c.startedAt,
            attempt: c.posts
          }, R);
          return;
        case "not_accepted":
        case "indeterminate":
          lc(envelope.call_id, "post not accepted", {
            leg: leg,
            phase: phase,
            attempt: c.posts
          }, R);
      }
    },
    q,
    sent;
  try {
    sent = e.sender.sendServedCallRequest({
      onUpload: onUpload,
      request: {
        subtype: "remote_tool_call",
        ...tvo({
          instanceId: entry.instanceId,
          host: entry.hostName,
          name: a,
          input: input,
          envelope: envelope,
          toolUseId: o.toolUseId,
          issuedAt: issuedAt,
          deadlineMs: _
        })
      },
      accepts: h => {
        if (!Y(h, envelope.call_id)) return !1;
        if (p && Trn(h)) return q = h, !1;
        return !0;
      },
      signal: o.signal
    });
  } catch (error) {
    return {
      kind: "transport_error",
      detail: `send failed: ${l(error)}`
    };
  }
  if (!sent.sent) return {
    kind: "unreachable",
    detail: "this session's event stream is closed; nothing was sent"
  };
  lc(envelope.call_id, "sent", {
    leg: leg,
    host_inst: entry.instanceId,
    host_epoch: S,
    deadline_ms: _
  }), o.onSent?.({
    instanceId: entry.instanceId,
    epoch: S,
    requestId: sent.requestId
  });
  let withdrawable = !p && !("approval" in envelope && envelope.approval?.decision === "deny"),
    {
      settled: settled,
      late: late
    } = await H(sent, _, o.signal, {
      holdAtDeadline: o.onHeldAtDeadline !== void 0,
      withdrawable: withdrawable
    }),
    P = h => {
      let w = K(h, {
        state: state,
        limits: limits_2,
        entry: entry,
        sent: sent,
        toolName: a,
        callId: envelope.call_id,
        capMs: _,
        held: late !== void 0,
        sentUnderEpoch: sentUnderEpoch,
        elapsedMs: () => n() - issuedAt,
        heardNow: () => n(),
        heldBelowFloorAnswer: () => q
      });
      if (w.kind === "result") try {
        let A = n(),
          k = {
            ...(c.startedAt !== void 0 && {
              queueMs: c.startedAt - issuedAt
            }),
            ...(c.startedAt !== void 0 && c.acceptedAt !== void 0 && {
              postMs: c.acceptedAt - c.startedAt
            }),
            ...(c.acceptedAt !== void 0 && {
              replyWaitMs: A - c.acceptedAt
            }),
            totalMs: A - issuedAt,
            posts: c.posts
          };
        lc(envelope.call_id, "answered", {
          leg: leg,
          total_ms: k.totalMs,
          queue_ms: k.queueMs,
          post_ms: k.postMs,
          reply_wait_ms: k.replyWaitMs,
          posts: k.posts
        }, R), o.onTransit?.(k);
      } catch (error) {
        t(`[remote-tools] a leg's transit was not reported: ${l(error)}`);
      }
      return w;
    };
  if (late !== void 0) o.onHeldAtDeadline?.({
    late: late.then(P),
    withdraw: () => sent.cancel(),
    takeBack: () => withdrawable && sent.withdraw(),
    accepted: () => {
      let h = sent.delivery();
      return h === "delivered" || h === "untracked";
    }
  });
  return P(settled);
}
function K(e, {
  state: state_2,
  limits: limits_3,
  entry: entry_2,
  sent: sent_2,
  toolName: toolName,
  callId: callId,
  capMs: n,
  held: held,
  sentUnderEpoch: sentUnderEpoch_2,
  elapsedMs: elapsedMs,
  heardNow: heardNow,
  heldBelowFloorAnswer: heldBelowFloorAnswer
}) {
  let S = () => {
    let m = heldBelowFloorAnswer();
    if (m === void 0) return;
    lc(callId, "query deadline; taking the below-floor answer held for it", {
      deadline_ms: n,
      host_inst: entry_2.instanceId
    });
    let b = C(m, elapsedMs());
    return b.kind === "dropped" ? {
      ...b,
      ...sentUnderEpoch_2
    } : b;
  };
  switch (e.kind) {
    case "answered":
      {
        let m = C(e.payload, elapsedMs());
        if (G(m)) state_2.stale = !1, entry_2.heard(heardNow());
        return m.kind === "dropped" ? {
          ...m,
          ...sentUnderEpoch_2
        } : m;
      }
    case "deadline":
      {
        let m = S();
        if (m !== void 0) return m;
        if (held) return lc(callId, "no answer by the deadline; request left standing, checking on it", {
          deadline_ms: n,
          host_inst: entry_2.instanceId
        }), {
          kind: "timed_out",
          capMs: n,
          ...sentUnderEpoch_2
        };
        if (lc(callId, "no answer by the deadline; request withdrawn", {
          deadline_ms: n,
          host_inst: entry_2.instanceId,
          error_replies_ignored: sent_2.errorRepliesIgnored()
        }), n >= limits_3.defaultDeadlineMs) state_2.stale = !0;
        return {
          kind: "timed_out",
          capMs: n,
          ...sentUnderEpoch_2
        };
      }
    case "stalled":
      return lc(callId, e.takenBack ? "still queued here at the deadline; taken back before any write carried it" : "still queued here at the deadline; cancelled behind it", {
        deadline_ms: n,
        host_inst: entry_2.instanceId
      }), {
        kind: "stalled",
        capMs: n,
        request: "call",
        takenBack: e.takenBack
      };
    case "unconfirmed":
      {
        let m = S();
        if (m !== void 0) return m;
        return lc(callId, "deadline reached with the write carrying the request unresolved; withdrawn, delivery unknown", {
          deadline_ms: n,
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
async function H(e, i, u, {
  holdAtDeadline: holdAtDeadline,
  withdrawable: withdrawable_2
}) {
  let late_2 = e.reply.then(payload => ({
      kind: "answered",
      payload: payload
    }), s => {
      if (u.aborted) return {
        kind: "cancelled"
      };
      if (s instanceof USt) return {
        kind: "undelivered",
        status: s.status
      };
      if (s instanceof $St) return {
        kind: "delivery_unknown",
        status: s.status
      };
      if (s instanceof ul) return {
        kind: "dropped"
      };
      if (s instanceof FSt) return {
        kind: "gone",
        why: s.why,
        unsent: e.delivery() === "queued"
      };
      return {
        kind: "failed",
        detail: l(s)
      };
    }),
    settled_2 = await nt(late_2, i);
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
function W(e) {
  return e.kind === "approval_unverified" || e.kind === "result" && e.envelope?.outcome === "refused";
}
function G(e) {
  return !W(e) && e.kind !== "dropped";
}
function Y(e, i) {
  try {
    return J(e, i);
  } catch (error) {
    return t(`[remote-tools] an unreadable reply was not taken as an answer: ${l(error)}`), !1;
  }
}
function J(e, i) {
  let u = g(e) ? e.result : void 0,
    a = iz(u);
  switch (a.envelope.status) {
    case "present":
      return a.envelope.envelope.call_id === i;
    case "malformed":
      return Q(u) === i;
    case "absent":
      return !1;
  }
}
function Q(e) {
  if (!g(e)) return;
  return [e.structuredContent, e._meta].filter(g).map(item => item[FT]).find(g)?.call_id;
}
function C(e, elapsedMs_2) {
  if (Trn(e)) {
    let {
        [FKe]: r,
        ...o
      } = e,
      n = C(o, elapsedMs_2),
      s = n.kind === "result" && n.envelope?.outcome === "refused" ? n.envelope : void 0;
    return {
      kind: "dropped",
      why: "unverified_refusal",
      detail: "a sender this session could not verify reported the call refused; the machine itself is asked what became of it",
      ...(n.kind === "result" && s !== void 0 && {
        reported: {
          kind: "result",
          content: "",
          isError: n.isError,
          envelope: {
            v: s.v,
            outcome: s.outcome,
            target: {
              name: "",
              working_dir: ""
            },
            code: s.code,
            ...(s.reason !== void 0 && {
              reason: s.reason
            }),
            ...(s.limit !== void 0 && {
              limit: s.limit
            }),
            message: ""
          },
          elapsedMs: n.elapsedMs,
          responseBytes: n.responseBytes
        }
      })
    };
  }
  let u = g(e) ? e.result : void 0,
    a = iz(u);
  if (a.envelope.status === "malformed") return {
    kind: "transport_error",
    detail: "malformed result envelope",
    unreadableResult: !0
  };
  if (a.envelope.status === "absent") return {
    kind: "transport_error",
    detail: "answer without an envelope"
  };
  let envelope_2 = a.envelope.envelope;
  if (envelope_2.outcome === "refused" && envelope_2.code === "no_approval") return {
    kind: "approval_unverified"
  };
  return {
    kind: "result",
    content: a.content,
    isError: a.isError,
    envelope: envelope_2,
    elapsedMs: elapsedMs_2,
    responseBytes: wR(u),
    dirSync: r4t(u)
  };
}
async function L(e, i, signal_2) {
  let a = e.now ?? Date.now,
    deadline_ms = e.probeDeadlineMs ?? B,
    r;
  try {
    r = e.sender.sendServedCallRequest({
      request: {
        subtype: "remote_tools_probe",
        instance_id: i.instanceId,
        issued_at: a(),
        deadline_ms: deadline_ms
      },
      accepts: accepts_2,
      signal: signal_2
    });
  } catch (error) {
    return t(`[remote-tools] liveness probe to ${i.hostName} could not be sent: ${l(error)}`), "unsent";
  }
  if (!r.sent) return "unsent";
  let {
    settled: settled_3
  } = await H(r, deadline_ms, signal_2, {
    holdAtDeadline: !1,
    withdrawable: !0
  });
  if (settled_3.kind === "answered") {
    let n = g(settled_3.payload) ? settled_3.payload.result : void 0;
    return i.heard(a(), g(n) ? JCr(n.epoch) : void 0), "answered";
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
      return "missed";
    case "dropped":
    case "delivery_unknown":
    case "unconfirmed":
      return "stream_lost";
  }
}
function accepts_2(e) {
  let i = g(e) ? e.result : void 0;
  return g(i) && JCr(i.epoch) !== void 0;
}
function g(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
export { t4t, bKo };