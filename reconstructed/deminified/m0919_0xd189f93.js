// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { te, l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { BB, Win } from "B:/~BUN/root/chunk-rtxwm8ds.js";
import { YE, Lv, E$t } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Tq, cDo, x, lJ, xq } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Dk } from "B:/~BUN/root/chunk-msy8grqx.js";
import { N_ } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { ble } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { E9, bV, ZP, Sf, yit, fEe, FT, Vwo, qwo, xrn, Ywo, Xwo, Jwo, Irn, iz, vB, wR, ga } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { koe, HSt, CSe } from "B:/~BUN/root/chunk-k7mv1tkq.js";
import { t4t } from "B:/~BUN/root/chunk-786r45cb.js";
import { fO } from "B:/~BUN/root/chunk-9kdkyxyv.js";
import { A7e } from "B:/~BUN/root/chunk-ddne1pz2.js";
import { r4t } from "B:/~BUN/root/chunk-ddsh90nc.js";
import { e4, Xj, Eoe } from "B:/~BUN/root/chunk-6wjpaxb7.js";
import { Er } from "B:/~BUN/root/chunk-yzpw1mdr.js";
import { vn } from "B:/~BUN/root/chunk-z24e0xw2.js";
import { Ia } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
function j() {
  try {
    return x("tengu_violin_scroll", !1);
  } catch {
    return !1;
  }
}
function T() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
}
class L {
  #e = new WeakMap();
  reinitialize(n) {
    let e = this.#e.get(n);
    if (e) return e;
    let r = T().clearServerCache(n.name, n.config).catch(() => {});
    return this.#e.set(n, r), r;
  }
}
var ce = -32000;
async function M(n, e, r) {
  let o = await K(n, e, r);
  if (o.kind !== "session_expired") return V(n, o);
  await e.recovery.reinitialize(o.connection);
  let s = await K(n, e, r);
  return s.kind === "session_expired" ? {
    kind: "expired_twice"
  } : V(n, s);
}
async function V(n, e) {
  if (e.kind === "connect_failed") await T().evictStaleFailedConnectMemoForServe(n.name, n.config).catch(() => {});
  return e;
}
async function K(n, {
  deadlineAt: deadlineAt,
  signal: signal,
  idempotent = !1
}, s) {
  let u = T(),
    connection;
  try {
    connection = await u.ensureConnectedClient(n, {
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
  let _ = deadlineAt - Date.now();
  if (_ <= 0) return {
    kind: "connect_failed",
    error: Error("deadline reached before the request could be sent")
  };
  try {
    return {
      kind: "ok",
      value: await s(connection, _)
    };
  } catch (error_2) {
    return error_2 instanceof Error && (u.isMcpSessionExpiredError(error_2) || idempotent && le(error_2, connection)) ? {
      kind: "session_expired",
      connection: connection
    } : {
      kind: "failed",
      error: error_2
    };
  }
}
function le(n, e) {
  return ("code" in n && n.code === ce && n.message.includes("Connection closed") || v(n) === "CONNECTION_CLOSED") && (e.config.type === "http" || e.config.type === "claudeai-proxy");
}
var limits = {
    maxRequestBytes: 4128768,
    defaultDeadlineMs: 58000
  },
  fe = -32001,
  ge = "office_bridge.kind",
  pe = "office_bridge.bound_miss",
  Y = "office_bridge.listing",
  _e = new Set(["not_connected", "send_failed", "contested", "unsupported_on_bound"]),
  ve = new Set(["disconnected", "cancelled"]),
  ye = new Set(["timeout"]),
  be = /not connected|not reachable|offline/i,
  he = /disconnected before responding|connection may be closing/i,
  Se = /did not respond within/i,
  Ee = 200;
function q(n, e) {
  return {
    kind: "bridge",
    limits: limits,
    call: (r, o, s, u) => Ce(n, e, r, o, s, u),
    callPlumbing: (r, o, s) => Te(n, e, r, o, s)
  };
}
async function Te(n, recovery, name, o, s) {
  if (!Eoe.has(name)) throw Error("callPlumbing: not a bridge plumbing tool");
  let u = Date.now(),
    g = vB(s.deadlineMs),
    _ = await M(n, {
      deadlineAt: u + g,
      recovery: recovery,
      signal: s.signal,
      idempotent: s.idempotent
    }, (f, timeout) => BB(f, {
      name: name,
      arguments: {
        ...o
      }
    }, {
      signal: s.signal,
      timeout: timeout
    }));
  if (_.kind === "ok") {
    let f = iz(_.value),
      text = J(f.content),
      b = f.isError && f.envelope.status === "absent" ? W(_.value, text, g) : void 0;
    if (b !== void 0) return G(b);
    return {
      kind: "result",
      structuredContent: _.value.structuredContent,
      text: text,
      isError: f.isError
    };
  }
  if (s.signal.aborted) return {
    kind: "cancelled"
  };
  switch (_.kind) {
    case "connect_failed":
      return {
        kind: "unreachable",
        detail: ga(l(_.error))
      };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
      };
    case "failed":
      return G(X(_.error, g, void 0));
  }
}
function G(n) {
  switch (n.kind) {
    case "timed_out":
    case "unreachable":
    case "dropped":
    case "transport_error":
    case "cancelled":
      return n;
    default:
      return {
        kind: "transport_error",
        detail: `unexpected: ${n.kind}`
      };
  }
}
async function Ce(n, recovery_2, name_2, o, s, u) {
  let g = Date.now(),
    _ = vB(u.deadlineMs),
    f = Ywo(s),
    p = await M(n, {
      deadlineAt: g + _,
      recovery: recovery_2,
      signal: u.signal
    }, (b, timeout_2) => BB(b, {
      name: name_2,
      arguments: {
        ...o,
        [fEe]: s
      },
      _meta: {
        [qwo]: u.toolUseId,
        ...(f !== void 0 && {
          [Vwo]: f
        })
      }
    }, {
      signal: u.signal,
      timeout: timeout_2
    }));
  if (p.kind === "ok") {
    let b = Re(p.value, Date.now() - g, _);
    return b.kind === "result" ? {
      ...b,
      metaCopy: f === void 0 ? "omitted" : "attached"
    } : b;
  }
  if (u.signal.aborted) return {
    kind: "cancelled"
  };
  switch (p.kind) {
    case "connect_failed":
      return {
        kind: "unreachable",
        detail: ga(l(p.error))
      };
    case "expired_twice":
      return {
        kind: "unreachable",
        detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
      };
    case "failed":
      return X(p.error, _, u.toolUseId);
  }
}
function Re(n, elapsedMs, r) {
  let o = iz(n);
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
        responseBytes: wR(n),
        dirSync: r4t(n)
      };
    case "absent":
      {
        let s = o.isError ? W(n, J(o.content), r) : void 0;
        if (s) return s;
        return {
          kind: "result",
          content: o.content,
          isError: o.isError,
          envelope: void 0,
          elapsedMs: elapsedMs,
          responseBytes: wR(n)
        };
      }
  }
}
function W(n, e, capMs) {
  let o = Me(n);
  if (o !== void 0 && ye.has(o)) return {
    kind: "timed_out",
    capMs: capMs
  };
  if (o !== void 0 && ve.has(o)) return {
    kind: "dropped",
    detail: `bridge: ${o}`
  };
  if (o !== void 0 && _e.has(o)) return {
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
  if (e.length > Ee) return;
  if (Se.test(e)) return {
    kind: "timed_out",
    capMs: capMs
  };
  if (he.test(e)) return {
    kind: "dropped",
    detail: "bridge: disconnected"
  };
  if (be.test(e)) return {
    kind: "unreachable",
    detail: "bridge: not connected",
    machineNotAnswering: !0
  };
  return;
}
function Me(n) {
  let e = n !== null && typeof n === "object" && "_meta" in n ? n._meta : void 0;
  if (e === null || typeof e !== "object") return;
  let r = e,
    o = r[ge];
  if (typeof o === "string") return o;
  return r[pe] !== void 0 ? "not_connected" : void 0;
}
function X(n, capMs_2, r) {
  if (z(n) === fe || v(n) === "REQUEST_TIMEOUT") return {
    kind: "timed_out",
    capMs: capMs_2
  };
  let detail = ga(l(n));
  if (z(n) === lJ && we(n, r)) return {
    kind: "approval_unverified"
  };
  if (xq(n) !== "downstream_unreachable") return {
    kind: "transport_error",
    detail: detail
  };
  return ke.has(v(n) ?? "") ? {
    kind: "unreachable",
    detail: detail
  } : {
    kind: "dropped",
    detail: detail
  };
}
var ke = new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN", "FailedToOpenSocket"]);
function we(n, e) {
  let r = n !== null && typeof n === "object" && "data" in n ? n.data : void 0;
  if (typeof r !== "object" || r === null) return !1;
  let o = r;
  return typeof o.args_sha256 === "string" && typeof o.tool_name === "string" && typeof o.tool_use_id === "string" && e !== void 0 && o.tool_use_id === e;
}
function z(n) {
  return n !== null && typeof n === "object" && "code" in n && typeof n.code === "number" ? n.code : void 0;
}
function J(n) {
  return typeof n === "string" ? n : n.flatMap(item => item.type === "text" ? [item.text] : []).join(`
`);
}
var De = "attached-machine";
function Q(n, e, r) {
  let o = e.map(item => ({
      ...item,
      name: N_(item.name)
    })),
    s = o.filter(item => Xj.has(item.name)).map(item => ({
      toolName: item.name,
      meta: Pe(item),
      raw: item._meta?.[FT]
    })),
    u = o.filter(item => !Xj.has(item.name) && CSe(item.name) && item._meta?.[koe] !== void 0),
    g = u.flatMap(item => {
      let marker = Ae(item);
      return marker === void 0 ? [] : [{
        bridgeName: item.name,
        marker: marker
      }];
    }),
    _ = new Set(g.map(item => item.bridgeName)),
    rejectedPassthroughTools = new Set(u.filter(item => !_.has(item.name)).map(item => item.name)),
    unreadableMarkers = rejectedPassthroughTools.size,
    unreadable = U(s, m => m.meta === void 0),
    servedTools = new Set(s.map(item => item.toolName)),
    plumbingTools = new Set(o.filter(item => Eoe.has(item.name)).map(item => item.name)),
    passthroughTools = new Map(g.map(({
      bridgeName: bridgeName,
      marker: marker_2
    }) => [bridgeName, {
      localName: marker_2.tool
    }])),
    A = new Set([...s.flatMap(item => item.meta ? [item.meta.target.name] : []), ...g.map(({
      marker: marker_3
    }) => marker_3.target.name)]),
    se = o.reduce((acc, item) => {
      let F = vn(item.name);
      return acc.set(F, (acc.get(F) ?? 0) + 1), acc;
    }, new Map()),
    ae = u.some(item => (se.get(vn(item.name)) ?? 0) > 1),
    invalid = A.size > 1 ? "two_names" : servedTools.size < s.length || ae ? "duplicate_tool" : void 0;
  if (s.length === 0 && g.length === 0 && unreadableMarkers === 0) return {
    hosts: [],
    invalid: invalid,
    unreadable: 0,
    unreadableMarkers: unreadableMarkers
  };
  let P = s.find(item => item.meta)?.meta,
    description = P?.target ?? g[0]?.marker.target,
    N = P === void 0 ? s.map(item => item.raw) : [],
    announced = N.map(Xwo).find(item => item !== void 0),
    de = N.map(Jwo).find(item => item !== void 0);
  return {
    hosts: [{
      kind: "remote",
      source: "bridge",
      name: description?.name ?? De,
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
      } : xrn(P?.protocol_versions ?? de ?? (s.length === 0 ? [Sf] : void 0)),
      transport: q(n, r)
    }],
    invalid: invalid,
    unreadable: unreadable,
    unreadableMarkers: unreadableMarkers
  };
}
function Ae(n) {
  let e = HSt(N_(n._meta?.[koe]));
  return e !== void 0 && e.tool === Ia(...Oe(n.name)) && ble(e.target.name) ? e : void 0;
}
function Oe(n) {
  let e = n.indexOf("__");
  return e < 0 ? ["", n] : [n.slice(0, e), n.slice(e + 2)];
}
function Pe(n) {
  let e = Irn(N_(n._meta?.[FT]));
  return e !== void 0 && e.tool === n.name && ble(e.target.name) ? e : void 0;
}
function C7e(n) {
  return {
    toolState: n.toolState,
    agentContext: n.agentContext,
    mcpClients: () => Dk(n)
  };
}
var Le = 8000,
  xe = 5000,
  Ie = 30000,
  Be = 2000,
  k = 5000,
  w = 60000;
class C {
  recovery = new L();
  connection = void 0;
  listingMemo = void 0;
  synced = !1;
  lastListingFailed = !1;
  lastForcedRelistAt = void 0;
  reportedUnmatched = !1;
  provisional = void 0;
  lastListedAt = void 0;
  unconnectedSince = void 0;
  failedAt = void 0;
  inFlight = void 0;
}
function oZr(n) {
  let e = n.toolState.get(C),
    r = Date.now(),
    o = e.provisional !== void 0 && (e.provisional.stub || r - e.provisional.since < w) ? k : Ne;
  if (e.lastForcedRelistAt !== void 0 && r - e.lastForcedRelistAt < o || e.lastListedAt !== void 0 && r - e.lastListedAt < k) return !1;
  e.lastForcedRelistAt = r;
  let connection_2 = e.connection;
  if (connection_2 !== void 0) T().fetchToolsForClient.cache.delete(Er(connection_2.name, connection_2.config));
  return e.synced = !1, e.listingMemo = void 0, !0;
}
var Ne = 30000;
async function R7e(n, e, r) {
  ITn(n, e, r), await He(n, e, r), ITn(n, e, r);
}
function ITn(n, e, r) {
  let o = e.sourceHosts("session");
  e.replaceRemoteHosts("session", n.toolState.get(fO).hostsForTable());
  let s = e.sourceHosts("session");
  if (D(o) === D(s)) return;
  i("tengu_remote_tool_targets", {
    event: n.toolState.get(fO).entries().length === 0 ? y("withdrawn") : c(ie(o, s)),
    source: y("session"),
    trigger: c(r),
    target_count: s.length,
    served_tool_count: s.reduce((acc, item) => acc + item.servedTools.size, 0),
    passthrough_tool_count: s.reduce((acc, item) => acc + (item.passthroughTools?.size ?? 0), 0),
    target_kind: ue(s[0]?.description?.kind),
    target_platform: ue(yit(s[0]?.description?.platform)),
    incompatible_count: U(s, u => u.protocol.kind === "incompatible")
  });
}
async function He(n, e, r) {
  if (!(await E9())) return;
  let o = n.toolState.get(C);
  return o.inFlight ??= Fe(n, o, e, r).catch(s => {
    d(te(s));
  }).finally(() => {
    o.inFlight = void 0;
  }), o.inFlight;
}
function sZr(n) {
  let e = n.toolState.get(C);
  if (e.synced && !e.lastListingFailed && OTn(n) !== void 0) return "unlisted";
  if (e.synced && !e.lastListingFailed) return "listed";
  return I(n) ? "unlisted" : "absent";
}
function iZr(n) {
  return n.toolState.get(C).connection !== void 0;
}
function aZr(n, e) {
  return n.toolState.get(C).lastListingFailed && !e.hosts().some(item => item.kind === "remote" && (item.source === "bridge" || item.source === "session"));
}
async function Fe(n, e, r, trigger) {
  let s = n.mcpClients(),
    connection_3 = Ye(s);
  if (connection_3 === void 0) {
    if (Tq(n.agentContext)) return;
    if (Ge(s, e, trigger), e.failedAt = void 0, e.lastListingFailed = !1, I(n)) e.unconnectedSince ??= Date.now();else e.provisional = void 0, e.unconnectedSince = void 0;
    if (e.connection !== void 0) e.connection = void 0, e.listingMemo = void 0, ee(r, [], {
      invalid: void 0,
      unreadable: 0,
      unreadableMarkers: 0,
      trigger: trigger
    });
    return;
  }
  let g = T().fetchToolsForClient.cache.get(Er(connection_3.name, connection_3.config)),
    _ = n.toolState.get(fO).entries().some(item => item.status === "online");
  if (e.synced && connection_3 === e.connection && g === e.listingMemo && (_ || !Ke(e.provisional))) return;
  if (e.failedAt?.connection === connection_3 && Date.now() - e.failedAt.time < Ie) return;
  let f = Date.now(),
    p = await M(connection_3, {
      deadlineAt: f + Le,
      recovery: e.recovery,
      idempotent: !0
    }, (S, A) => Ue(S, Math.min(A, xe)));
  if (p.kind !== "ok") {
    e.lastListingFailed = !0, e.failedAt = Date.now() - f >= Be ? {
      connection: connection_3,
      time: Date.now()
    } : void 0, t(`[remote-tools] device-bridge tools/list failed (${p.kind}); keeping last known machines${"error" in p ? `: ${l(p.error)}` : ""}`, {
      level: "warn"
    }), i("tengu_remote_tool_targets", {
      event: y("list_failed"),
      trigger: c(trigger),
      reason: "error" in p && Ve(p.error) ? y("timeout") : c(p.kind)
    });
    return;
  }
  if (p.value.truncated) t("[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery", {
    level: "warn"
  });
  let b = Q(connection_3, p.value.tools, e.recovery),
    h = b.hosts.length === 0;
  if (h && (e.provisional === void 0 || e.provisional.stub !== p.value.stub)) i("tengu_remote_tool_targets", {
    event: y("listed_empty"),
    trigger: c(trigger),
    tool_count: p.value.tools.length,
    truncated: p.value.truncated,
    has_served_name: p.value.tools.some(item => Xj.has(item.name)),
    marker_count: U(p.value.tools, S => S._meta?.[koe] !== void 0),
    stub: p.value.stub
  }), t(`[remote-tools] device-bridge listing adopted no machine (${p.value.tools.length} tools${p.value.stub ? _ ? ", stub listing \u2014 the bound machine serves over the session channel instead" : ", stub listing \u2014 the bound machine has not announced yet; re-listing until it does" : ""})`);
  if (b.invalid !== void 0) t(`[remote-tools] device-bridge listing rejected (${b.invalid}): one connection must announce exactly one machine \u2014 its first announced name stays attached but unreachable`, {
    level: "warn"
  });
  ee(r, b.hosts, {
    invalid: b.invalid,
    unreadable: b.unreadable,
    unreadableMarkers: b.unreadableMarkers,
    trigger: trigger
  });
  let E = !h && e.provisional !== void 0 && g !== void 0 && g === e.listingMemo;
  if (E) T().fetchToolsForClient.cache.delete(Er(connection_3.name, connection_3.config));
  e.connection = connection_3, e.listingMemo = E ? void 0 : g, e.synced = !0, e.lastListedAt = Date.now(), e.unconnectedSince = void 0, e.provisional = h ? {
    at: Date.now(),
    since: e.provisional?.since ?? Date.now(),
    stub: p.value.stub
  } : void 0, e.reportedUnmatched = !1, e.failedAt = void 0, e.lastListingFailed = !1, t(`[remote-tools] device bridge matched: ${connection_3.name} (${p.value.tools.length} tools over ${p.value.pages} page(s))`);
}
async function Ue(n, timeout_3) {
  let r = await Win(n, {
      timeout: timeout_3
    }),
    _meta = r._meta;
  return {
    tools: r.tools.filter(je),
    pages: 1,
    truncated: Boolean(r.nextCursor),
    stub: typeof _meta === "object" && _meta !== null && _meta[Y] === "stub"
  };
}
function je(n) {
  return typeof n === "object" && n !== null && typeof n.name === "string";
}
function Ve(n) {
  let e = l(n).toLowerCase();
  return e.includes("timed out") || e.includes("timeout");
}
function I(n) {
  return n.mcpClients().some(item => ne(item) && item.type !== "disabled" && item.type !== "needs-auth");
}
function OTn(n) {
  let e = $e(n);
  if (e === void 0) return;
  if (ZP()) return e;
  let r = n.toolState.get(fO);
  if (r.hasAnnouncedThisLife()) return r.entries().length === 0 ? "serves_nothing" : e;
  return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 ? "not_reannounced" : e;
}
var Z = 15000;
function lZr(n) {
  return n ? Math.max(Z, t4t.defaultDeadlineMs) : Z;
}
function Rsr(n) {
  let e = n.toolState.get(fO);
  return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 && !ZP() && !(e.hasAnnouncedThisLife() && e.entries().length === 0) && n.toolState.get(A7e).canAsk() && bV() && j();
}
function cZr(n, e, r) {
  return e.has(r) && !n.toolState.get(fO).withdrawnThisLife(r) && Rsr(n);
}
async function dZr(n, e, {
  deadlineMs = t4t.defaultDeadlineMs,
  sliceMs = k,
  routableOtherwise: routableOtherwise,
  forMachine: forMachine
} = {}) {
  let g = n.toolState.get(fO);
  if (forMachine === void 0 && g.entries().length > 0) return {
    kind: "announced"
  };
  let waitedMs = g.announceWaitExpired();
  if (waitedMs !== void 0) return {
    kind: "gave_up_earlier",
    waitedMs: waitedMs
  };
  if (forMachine !== void 0 && n.toolState.get(A7e).askOnce({
    workerEpoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 1,
    deadlineMs: deadlineMs
  })) t("[remote-tools] asked the attached client to announce to this replacement worker");
  let f = Date.now();
  for (;;) {
    if (e.aborted) return {
      kind: "aborted"
    };
    if (forMachine === void 0 ? g.hasAnnouncedThisLife() : g.withdrawnThisLife(forMachine)) return {
      kind: "announced"
    };
    let b = deadlineMs - (Date.now() - f);
    if (b <= 0) break;
    let h = await Asr(g, e, Math.min(sliceMs, b));
    if (h === "announced" && (forMachine === void 0 || routableOtherwise === void 0)) return {
      kind: "announced"
    };
    if (h === "aborted") return {
      kind: "aborted"
    };
    if (routableOtherwise !== void 0 && (await routableOtherwise())) return h === "announced" ? {
      kind: "announced"
    } : {
      kind: "routable"
    };
  }
  let waitedMs_2 = Date.now() - f;
  return g.markAnnounceWaitExpired(waitedMs_2), {
    kind: "gave_up",
    waitedMs: waitedMs_2
  };
}
function Asr(n, e, r) {
  return new Promise(o => {
    let s = f => {
        clearTimeout(_), g(), e.removeEventListener("abort", u), o(f);
      },
      u = () => s("aborted"),
      g = n.onNextAnnounce(() => s("announced")),
      _ = setTimeout(f => f("slice"), r, s);
    if (e.addEventListener("abort", u, {
      once: !0
    }), e.aborted) s("aborted");
  });
}
function $e(n) {
  let e = n.toolState.get(C);
  if (e.connection === void 0) return I(n) && e.unconnectedSince !== void 0 && Date.now() - e.unconnectedSince < w ? "connecting" : void 0;
  if (!e.provisional) return;
  if (Date.now() - e.provisional.since < w) return "connecting";
  return e.provisional.stub ? "not_connected" : void 0;
}
function Ke(n) {
  if (n === void 0) return !1;
  let e = Date.now();
  if (!n.stub && e - n.since >= w) return !1;
  return e - n.at >= k;
}
function Ge(n, e, r) {
  let o = n.filter(item => item.name === e4);
  if (o.length === 0 || e.reportedUnmatched) return;
  let s = o.map(ze);
  if (s.every(item => item === "connecting")) return;
  e.reportedUnmatched = !0, t(`[remote-tools] a '${e4}' MCP entry exists but was not adopted as the device bridge: ${o.map((item, index) => `${s[index]} (type=${item.type}, scope=${item.config.scope})`).join("; ")}`, {
    level: "warn"
  }), i("tengu_remote_tool_targets", {
    event: y("no_bridge_connection"),
    trigger: c(r),
    servers_seen: o.length,
    reason: c(s[0] ?? "none"),
    ingress_base_unset: YE.atStartup === void 0
  });
}
function ze(n) {
  if (oe(n)) return "scoped_entry";
  if (!("url" in n.config) || typeof n.config.url !== "string") return "no_url";
  if (!Lv(n.config.url)) return "not_ccr_proxy_url";
  if (!E$t(n.config.url)) return "not_devices_upstream";
  if (!re(n.config.url)) return "routing_shape";
  switch (n.type) {
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
function Ye(n) {
  return n.find(item => item.type === "connected" && ne(item));
}
function ne(n) {
  return n.name === e4 && !oe(n) && "url" in n.config && typeof n.config.url === "string" && E$t(n.config.url) && re(n.config.url);
}
function oe(n) {
  let {
    scope: scope,
    pluginSource: pluginSource,
    agentSource: agentSource
  } = n.config;
  return scope === "project" || scope === "local" || scope === "agent" || pluginSource !== void 0 || agentSource !== void 0;
}
function re(n) {
  try {
    let e = new URL(n),
      r = e.searchParams.getAll("toolbox_mcp_server_id"),
      o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(e.pathname)?.[1],
      s = r[0];
    return e.searchParams.getAll("mcp_url").length === 1 && (r.length === 0 || r.length === 1 && (s === e4 || o !== void 0 && s === qe(o)));
  } catch {
    return !1;
  }
}
function qe(n) {
  return cDo(n, e4);
}
function ee(n, e, {
  invalid: invalid_2,
  unreadable: o,
  unreadableMarkers: s,
  trigger: trigger_2
}) {
  let g = n.sourceHosts("bridge"),
    {
      dropped: dropped
    } = n.replaceRemoteHosts("bridge", e);
  if (dropped.length > 0) t(`[remote-tools] the bridge announced ${dropped.length} machine(s) under a name this session cannot adopt; not adopted: ${dropped.join(", ")}`, {
    level: "warn"
  });
  let f = n.sourceHosts("bridge"),
    p = D(g) !== D(f);
  if (invalid_2 !== void 0) i("tengu_remote_tool_targets", {
    event: y("listing_invalid"),
    reason: c(invalid_2),
    trigger: c(trigger_2)
  });
  let b = p ? ie(g, f) : void 0;
  if (b !== void 0) i("tengu_remote_tool_targets", {
    event: c(b),
    trigger: c(trigger_2),
    target_count: f.length,
    served_tool_count: f.reduce((acc, item) => acc + item.servedTools.size, 0),
    passthrough_tool_count: f.reduce((acc, item) => acc + (item.passthroughTools?.size ?? 0), 0),
    target_kind: ue(f[0]?.description?.kind),
    target_platform: ue(yit(f[0]?.description?.platform)),
    incompatible_count: U(f, h => h.protocol.kind === "incompatible"),
    protocol_version: f[0]?.protocol.kind === "compatible" ? f[0].protocol.version : void 0
  });
  if (o > 0 || s > 0) i("tengu_remote_tool_targets", {
    event: y("unreadable"),
    trigger: c(trigger_2),
    unreadable_count: o,
    unreadable_marker_count: s
  });
}
function D(n) {
  return n.map(item => `${item.name}\x00${item.status}\x00${item.servedTools.size}\x00${item.passthroughTools?.size ?? 0}`).sort().join(`
`);
}
function ie(n, e) {
  let r = n.some(item => item.status === "online"),
    o = e.some(item => item.status === "online");
  if (n.length === 0) return e.length === 0 ? "changed" : "discovered";
  if (r && !o) return "went_offline";
  if (!r && o) return "came_online";
  return "changed";
}
export { C7e, oZr, R7e, ITn, sZr, iZr, aZr, OTn, lZr, Rsr, cZr, dZr, Asr };