// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { fne } from "B:/~BUN/root/chunk-game8aqv.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { zA, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, oy } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { hr } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Don } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { fq } from "B:/~BUN/root/chunk-mcdkvptw.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { xu } from "B:/~BUN/root/chunk-17caj8fw.js";
import { qLn, wLt, ose, xL, lmo, ZP, Au } from "B:/~BUN/root/chunk-hhd7smkx.js";
import { xsi, Psi, yBe, Osi, y8, cZn } from "B:/~BUN/root/chunk-3md6z7eb.js";
import { lKo, lsi, dsi, dKo, cKo, qQn } from "B:/~BUN/root/chunk-vdr4jpe1.js";
import { aw } from "B:/~BUN/root/chunk-y302yp15.js";
import { vge } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { llt } from "B:/~BUN/root/chunk-vhw6mw44.js";
function v() {
  return te().durable.rows;
}
async function N(e, n) {
  let slugOps = te().durable.slugOps,
    s = (slugOps.get(e) ?? Promise.resolve()).then(n, n),
    u = s.then(() => {
      return;
    }, () => {
      return;
    });
  slugOps.set(e, u);
  try {
    return await s;
  } finally {
    if (slugOps.get(e) === u) slugOps.delete(e);
  }
}
function EJn() {
  return [...v().values()];
}
function Ike(e) {
  return v().get(e);
}
var Se = [30000, 120000, 600000];
function Tti(e, n) {
  if (!i.CLAUDE_CODE_REMOTE || e === null) return;
  if (e.readFailed) {
    if (c("artifact_durable_subscribe", "registry_unread"), n.reread !== void 0) De(n.reread, n);
    return;
  }
  se(e, n);
}
async function De(e, n, r = Se) {
  for (let o of r) {
    if (await J(o, void 0, {
      unref: !0
    }), te().durable.registrySink !== null) return !0;
    let s;
    try {
      s = await e();
    } catch (error) {
      t(`[artifact] worker-state re-read threw: ${String(error)}`);
      continue;
    }
    if (s === null || s.readFailed) continue;
    try {
      se(s, n);
    } catch (error) {
      return a(error), !1;
    }
    return g("artifact_durable_subscribe", {
      registry_reread: !0
    }), !0;
  }
  return c("artifact_durable_subscribe", "registry_reread_failed"), !1;
}
function se(e, n) {
  let r = Osi(e.internal?.artifact_durable_watches),
    {
      durable: durable
    } = te();
  for (let s of r?.orphans ?? []) durable.orphanTriggers.add(s);
  for (let s of r?.rows ?? []) {
    if (durable.unwatchedSlugs.has(s.slug) && !durable.rows.has(s.slug)) {
      j(s);
      continue;
    }
    if (durable.slugOps.has(s.slug)) {
      durable.pendingRestoredRows.set(s.slug, s), H(N(s.slug, async () => {
        durable.pendingRestoredRows.delete(s.slug), j(s), yBe();
      }));
      continue;
    }
    j(s);
  }
  cZn(r?.stopped ?? new Map(), n);
  for (let s of new Set([...durable.rows.keys(), ...durable.pendingRestoredRows.keys(), ...durable.slugOps.keys()])) if (durable.stopLatches.isStopped(s)) Ce(s);
  if (xsi(n.sink), r !== null) Psi();
  if (yBe(), r !== null && r.rows.length + r.stopped.size > 0) g("artifact_durable_subscribe", {
    restored_rows: r.rows.length,
    restored_stops: r.stopped.size
  }), t(`[artifact] restored ${r.rows.length} durable watch row(s) and ${r.stopped.size} stop(s) from prior worker epoch`);
}
function Ce(e) {
  let {
      durable: durable_2
    } = te(),
    r = () => {
      let o = durable_2.rows.get(e);
      if (o === void 0 || !durable_2.stopLatches.isStopped(e)) return;
      durable_2.rows.delete(e), durable_2.unwatchedSlugs.add(e);
      for (let s of [o.triggerId, ...(o.unreleased ?? [])]) durable_2.orphanTriggers.add(s);
      c("artifact_durable_subscribe", "restored_stop_retired_row");
    };
  if (durable_2.slugOps.has(e)) {
    H(N(e, async () => {
      r(), yBe();
    }));
    return;
  }
  r();
}
function j(e) {
  let {
    durable: durable_3
  } = te();
  if (e.claudeDoc) qQn(e.slug);
  let r = durable_3.rows.get(e.slug);
  if (r !== void 0 || durable_3.unwatchedSlugs.has(e.slug) || durable_3.stopLatches.isStopped(e.slug)) {
    for (let o of [e.triggerId, ...(e.unreleased ?? [])]) if (o !== r?.triggerId) durable_3.orphanTriggers.add(o);
    if (r !== void 0 && e.claudeDoc) durable_3.rows.set(e.slug, {
      ...r,
      claudeDoc: !0
    });
    return;
  }
  durable_3.rows.set(e.slug, {
    ...e,
    restored: !0
  });
}
function ie(e) {
  let found = llt(e);
  if (!found) return null;
  let dial = fne();
  if (!dial) return null;
  return {
    found: found,
    dial: dial
  };
}
function Cti(e) {
  return ie(e) !== null;
}
async function le(e, signal, r) {
  let o = ie(e);
  if (!o) return null;
  try {
    return await o.dial(o.found, r?.detachedFromUser ? {
      timeoutMs: 15000
    } : {
      signal: signal
    });
  } catch {
    return null;
  }
}
function L(e, n) {
  let r = new RegExp(`^${n}:\\s*(\\S+)`, "m").exec(e);
  return r && r[1] ? r[1] : null;
}
function Ee(e) {
  let url = L(e, "url"),
    triggerId = L(e, "trigger_id"),
    sealedSecret = L(e, "sealed_secret");
  if (!url || !triggerId || !sealedSecret) return null;
  return {
    url: url,
    triggerId: triggerId,
    sealedSecret: sealedSecret
  };
}
function Me(e) {
  return L(e, "trigger_id");
}
var We = "/integrations/v1/code/webhook-triggers/",
  ke = "/fire",
  Ae = ["published", "comment"],
  q = ["published"];
function Rti() {
  return i.CLAUDE_CODE_REMOTE ? null : "not_remote";
}
function Nzo() {
  let durable_4 = te().durable,
    subscribeForbidden = durable_4.subscribeForbidden;
  if (subscribeForbidden) if (!subscribeForbidden.relayActive && xL(qLn)) V();else return {
    reason: "subscribe_forbidden",
    serverMessage: subscribeForbidden.serverMessage
  };
  let subscribeUnrelayed = durable_4.subscribeUnrelayed;
  return subscribeUnrelayed ? {
    reason: "relay_unavailable",
    ...subscribeUnrelayed
  } : null;
}
function V() {
  let durable_5 = te().durable;
  if (durable_5.subscribeForbidden === null) return;
  durable_5.subscribeForbidden = null, dKo("subscribe_forbidden");
}
function ue() {
  let durable_6 = te().durable;
  if (durable_6.subscribeUnrelayed === null) return;
  durable_6.subscribeUnrelayed = null, dKo("relay_unavailable");
}
var de = "watch_url",
  Pe = "anthropic/ccr.error";
function Ie(e, n) {
  let r = !1;
  for (let o of e) {
    if (o.mcpInfo?.serverName !== n) continue;
    if (o.mcpInfo.toolName === de) return !0;
    r = !0;
  }
  return r ? !1 : null;
}
function Fzo() {
  return tn() && ose() && !xL(qLn) && !Don();
}
function Hzo(e) {
  if (!i.CLAUDE_CODE_REMOTE) return null;
  let {
    watchUrlWithheld: watchUrlWithheld,
    watchUrlGranted: watchUrlGranted
  } = te().durable;
  if (watchUrlWithheld) return watchUrlWithheld;
  if (watchUrlGranted) return null;
  let o = llt(e.clients);
  return (o?.type === "connected" || o?.type === "cached" && o.listedByHost === !0) && Ie(e.tools, o.name) === !1 ? "tool_not_offered" : null;
}
function Oe(e, n) {
  if (Nt(n) === null) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return r.protocol === "https:" && r.username === "" && r.password === "" && r.search === "" && r.hash === "" && r.pathname === We + n + ke;
}
var Fe = "url_webhook_trigger_limit",
  Le = "no_originator",
  xe = ["tool_not_offered", "org_not_enabled", "session_device_bound"],
  Ue = ["session_not_found", "unavailable_in_deployment"],
  ee = 160,
  Ne = /^[('\[]?[A-Za-z_]+(?:[-'][A-Za-z_]+)?[\])'.,;:!?]*$/,
  He = 40,
  $e = /^[(']?\d{1,5}[)'.,;:!?%]*$/,
  ce = /^[-\u2013\u2014.,;:!?()]{1,3}$/,
  Be = /(?!\u0020)\p{Zs}|[\p{M}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu,
  fe = /\r\n|[\n\v\f\r\u0085\u2028\u2029]/,
  A = "[redacted]",
  x = "[url]",
  Ge = 2048;
function be(e) {
  return e.length <= He && Ne.test(e);
}
function re(e) {
  return e === void 0 || e !== x && e !== A && be(e);
}
function ze(e, n, r) {
  return be(e) || ce.test(e) || $e.test(e) && re(n) && re(r);
}
var ne = /(?:^|[^A-Za-z_])(url|trigger_id)[ \t]*:|sealed_secret/i;
function ae(e) {
  if (ne.test(e)) return;
  let n = Q(e, Ge),
    r = n.split(fe).map(item => oy(item.replaceAll("\t", " ")).replace(Be, ""));
  if (r.some(item => ne.test(item))) return;
  let o = r.findIndex(item => item.trim() !== "");
  if (o === -1) return;
  let s = r[o] ?? "",
    u = o === r.length - 1 && n.length < e.length,
    b = s.replace(/["`]/g, "'").replace(/[a-z][a-z0-9+.-]*:\/\/\S+/gi, ` ${x} `).split(/\s+/).filter(item => item !== "");
  if (u && b.length > 0) b[b.length - 1] = A;
  let p = b.map((item, index) => item === x || ze(item, b[index - 1], b[index + 1]) ? item : A).filter((item, index, y) => item !== A || y[index - 1] !== A);
  if (!p.some(item => item !== A && item !== x && !ce.test(item))) return;
  let h = p.join(" ");
  return h.length > ee ? `${Q(h, ee - 3)}...` : h;
}
function je(e) {
  let n = "content" in e ? e.content : void 0;
  if (!Array.isArray(n)) return "";
  let r = [];
  for (let o of n) if (typeof o === "object" && o !== null && "type" in o && o.type === "text" && "text" in o && typeof o.text === "string") r.push(o.text);
  return r.join(`
`);
}
async function ge(e, name, r) {
  try {
    let o = await fq(e, {
        name: name,
        arguments: r
      }, {
        timeout: 15000
      }),
      s = o._meta?.[Pe];
    return {
      isError: "isError" in o && o.isError === !0,
      text: je(o),
      errorCode: typeof s === "object" && s !== null && "code" in s && typeof s.code === "string" ? s.code : void 0
    };
  } catch {
    return null;
  }
}
async function M(e, trigger_id) {
  let r = await ge(e, "unwatch_url", {
    trigger_id: trigger_id
  });
  return r !== null && !r.isError;
}
async function _e(e) {
  let {
      durable: durable_7
    } = te(),
    r = [...durable_7.orphanTriggers];
  if (r.length === 0) return;
  let o = await Promise.all(r.map(item => M(e, item))),
    s = 0;
  if (r.forEach((item, index) => {
    if (o[index]) durable_7.orphanTriggers.delete(item);else s++;
  }), s > 0) c("artifact_durable_subscribe", "orphan_trigger_release_failed");
  yBe();
}
async function pe(e, n, signal_2, credentials) {
  try {
    let res = await Au.postRelayBound(e, n, {
      headers: xu(),
      timeout: 15000,
      refreshOAuth: !0,
      credentials: credentials,
      ...(signal_2 && {
        signal: signal_2
      })
    });
    return {
      res: res,
      relayed: res.route === "relay"
    };
  } catch (error) {
    return {
      res: void 0,
      relayed: ZP(error)
    };
  }
}
function me(e) {
  return e.relayed ? {
    relayed: !0
  } : {};
}
function U(e) {
  return e.relayed ? [{
    relay: !0
  }] : [];
}
async function kKr(e) {
  let {
    slug: slug,
    context: context,
    detachedFromUser: detachedFromUser
  } = e;
  lsi(slug);
  let s;
  try {
    let u = Ke(slug, context, detachedFromUser);
    return H(u), s = await u, Ye(s, te().durable.claudeDocSlugs.has(slug) || void 0), s;
  } finally {
    let u = dsi(slug, s);
    try {
      e.onSettled?.(u);
    } catch (error) {
      a(error);
    }
  }
}
function H(e) {
  let {
    pendingOps: pendingOps
  } = te().durable;
  pendingOps.add(e);
  let r = () => void pendingOps.delete(e);
  e.then(r, r), zA(Ve);
}
async function Ve() {
  await we(Promise.allSettled([...te().durable.pendingOps]), 1e4);
}
async function Ke(e, n, r) {
  return N(e, async () => {
    let o = v().get(e);
    if (o?.restored && !r) {
      let s = await oe(e, n, !1, o);
      if (s.outcome === "subscribed") return s;
      let u = s.outcome === "already_watching" ? s.outcome : s.outcome === "failed" && s.kept ? "outcome_unknown" : s.reason;
      return c("artifact_durable_subscribe", `refresh_${u}`), t(`[artifact] restored durable watch not refreshed: reason=${u}`), he(v().get(e) ?? o);
    }
    return oe(e, n, r);
  });
}
function Ye(e, n) {
  switch (e.outcome) {
    case "subscribed":
      if (e.downgraded) {
        c("artifact_durable_subscribe", "comment_events_unsupported", ...U(e));
        break;
      }
      g("artifact_durable_subscribe", ...U(e));
      break;
    case "already_watching":
      g("artifact_durable_subscribe", {
        already_watching: !0,
        ...(e.restored && {
          restored: !0
        })
      });
      break;
    case "skipped":
      c("artifact_durable_subscribe", e.reason);
      break;
    case "failed":
      {
        let r = Xe(e, n),
          [o] = U(e),
          s = {
            ...(e.status !== void 0 && {
              status: e.status
            }),
            ...(e.gatewayDeclined !== void 0 && {
              gateway_declined: e.gatewayDeclined
            }),
            ...o
          },
          u = Object.keys(s).length > 0 ? [s] : [];
        if (r !== void 0) c("artifact_durable_subscribe", r, ...u);else m("artifact_durable_subscribe", e.reason, u[0]);
        let b = e.status !== void 0 ? ` status=${e.status}` : "",
          p = e.serverMessage !== void 0 ? ` server="${e.serverMessage}"` : "";
        t(`[artifact] durable watch failed: reason=${e.reason}${b}${p}`, {
          level: r !== void 0 ? "debug" : "warn"
        });
        break;
      }
  }
}
function Xe(e, n) {
  switch (e.reason) {
    case "aborted":
      return "aborted";
    case "no_originator":
      return e.latched ? "no_originator_latched" : void 0;
    case "subscribe_forbidden":
      return e.latched ? "subscribe_forbidden_latched" : "subscribe_forbidden";
    case "relay_unavailable":
      return e.latched ? "relay_unavailable_latched" : "relay_unavailable";
    case "subscribe_failed":
      return n && lKo(e) ? "claude_doc_not_admitted" : void 0;
    default:
      return;
  }
}
function he(e) {
  return {
    outcome: "already_watching",
    triggerId: e.triggerId,
    since: e.since,
    events: e.events,
    ...(e.restored && {
      restored: !0
    })
  };
}
async function oe(slug_2, n, detachedFromUser_2, o) {
  if (!hr.test(slug_2)) return {
    outcome: "failed",
    reason: "invalid_slug"
  };
  let s = v().get(slug_2);
  if (s && s !== o) return he(s);
  if (y8({
    storageV5: n.storageV5
  }), te().durable.stopLatches.isStopped(slug_2)) return {
    outcome: "skipped",
    reason: "stop_latched"
  };
  if (St() || Te() !== "firstParty") return {
    outcome: "failed",
    reason: "client_policy"
  };
  if (Fzo()) return {
    outcome: "skipped",
    reason: "relay_not_served"
  };
  if (detachedFromUser_2 && te().durable.originatorRefused) return {
    outcome: "failed",
    reason: "no_originator",
    latched: !0
  };
  let u = Nzo();
  if (detachedFromUser_2 && u) return u.reason === "subscribe_forbidden" ? {
    outcome: "failed",
    reason: "subscribe_forbidden",
    latched: !0,
    serverMessage: u.serverMessage
  } : {
    outcome: "failed",
    reason: "relay_unavailable",
    latched: !0,
    status: u.status,
    relayed: !0,
    fromGateway: !0
  };
  let reason = detachedFromUser_2 ? Hzo(n.getMcp()) : null;
  if (reason) return {
    outcome: "skipped",
    reason: reason
  };
  let p = await le(n.getMcp().clients, n.abortController.signal, detachedFromUser_2 ? {
    detachedFromUser: detachedFromUser_2
  } : void 0);
  if (!p) {
    if (!detachedFromUser_2 && n.abortController.signal.aborted) return {
      outcome: "failed",
      reason: "aborted"
    };
    return {
      outcome: "skipped",
      reason: "no_wake_minter"
    };
  }
  await _e(p);
  let h = await ge(p, de, {});
  if (!h || h.isError) {
    let serverMessage = h ? ae(h.text) : void 0,
      S = serverMessage !== void 0 ? {
        serverMessage: serverMessage
      } : {},
      E = h?.errorCode;
    if (E === Fe) return {
      outcome: "failed",
      reason: "trigger_limit",
      ...S
    };
    if (E === Le) {
      let durable_8 = te().durable,
        originatorRefused = durable_8.originatorRefused;
      return durable_8.originatorRefused = !0, originatorRefused ? {
        outcome: "failed",
        reason: "no_originator",
        latched: !0,
        ...S
      } : {
        outcome: "failed",
        reason: "no_originator",
        ...S
      };
    }
    let reason_2 = xe.find(item => item === E);
    if (reason_2) return te().durable.watchUrlWithheld = reason_2, {
      outcome: "skipped",
      reason: reason_2
    };
    return {
      outcome: "failed",
      reason: Ue.find(item => item === E) ?? "mint_failed",
      ...S
    };
  }
  let durable_9 = te().durable;
  durable_9.originatorRefused = !1, durable_9.watchUrlWithheld = null, durable_9.watchUrlGranted = !0;
  let f = Ee(h.text);
  if (!f) {
    let _ = Me(h.text);
    if (_) await M(p, _);
    return {
      outcome: "failed",
      reason: "mint_failed"
    };
  }
  if (!Oe(f.url, f.triggerId)) return await M(p, f.triggerId), {
    outcome: "failed",
    reason: "mint_failed"
  };
  if (!detachedFromUser_2 && n.abortController.signal.aborted) return {
    outcome: "failed",
    reason: (await M(p, f.triggerId)) ? "aborted" : "watch_trigger_release_failed"
  };
  let status,
    w = !1,
    D = {},
    T = !1,
    P = !1,
    C,
    I = !1,
    events = aw() ? Ae : q,
    K = !1,
    Y = `/api/frame/subscribe/${slug_2}`,
    B = ose() ? wLt("POST", Y) : null,
    relayActive = xL(B),
    Re = B !== null && lmo(B),
    X = () => pe(Y, {
      url: f.url,
      sealed_secret: f.sealedSecret,
      events: events
    }, detachedFromUser_2 ? void 0 : n.abortController.signal, n.credentials),
    W = await X();
  if (W.res?.ok && W.res.fromFrame && W.res.status === 400 && events.includes("comment")) events = q, K = !0, W = await X();
  let F = me(W),
    {
      res: res_2
    } = W;
  if (!res_2) I = !detachedFromUser_2 && n.abortController.signal.aborted;else if (res_2.ok) {
    if (status = res_2.status, w = res_2.status >= 200 && res_2.status < 300, !w) {
      let _ = typeof res_2.data === "string" ? res_2.data.trim() : void 0,
        S = res_2.response?.headers?.["content-type"],
        E = _ !== void 0 && _ !== "" && !fe.test(_) && !/[<>]/.test(_) && typeof S === "string" && S.toLowerCase().startsWith("text/plain"),
        k = vge(res_2.data),
        G = res_2.fromFrame && (k !== null || E),
        serverMessage_2 = G ? ae(k?.error ?? _ ?? "") : void 0;
      D = {
        ...(!res_2.fromFrame && {
          fromGateway: !0
        }),
        ...(res_2.gatewayDeclined !== void 0 && {
          gatewayDeclined: res_2.gatewayDeclined
        }),
        ...(serverMessage_2 !== void 0 && {
          serverMessage: serverMessage_2
        })
      };
      let z = res_2.route === "relay" || !(Re || res_2.gatewayDeclined === 0);
      if (res_2.status === 403 && E && serverMessage_2 !== void 0 && z && o === void 0) T = !0, P = durable_9.subscribeForbidden !== null, durable_9.subscribeForbidden = {
        serverMessage: serverMessage_2,
        relayActive: relayActive
      };else if (G && res_2.status >= 400 && res_2.status < 500 && res_2.status !== 401 && res_2.status !== 403) V();
    } else if (res_2.fromFrame) V();
    if (res_2.fromFrame) ue();
  } else if (res_2.reason === "relay-unavailable" || res_2.reason === "relay-not-served") {
    if (res_2.status !== 0) {
      if (C = "relay_unavailable", status = res_2.status, D = {
        fromGateway: !0
      }, o === void 0) P = durable_9.subscribeUnrelayed !== null, durable_9.subscribeUnrelayed = {
        status: status
      };
    }
  } else C = res_2.reason === "no-auth" ? "no_auth" : "client_policy";
  if (!w) {
    let _ = !res_2 || res_2.ok && (!res_2.fromFrame || res_2.status >= 500);
    if (o !== void 0 && _) return v().set(slug_2, {
      ...o,
      unreleased: [...(o.unreleased ?? []), f.triggerId]
    }), yBe(), t(`[artifact] refresh subscribe outcome unknown; keeping trigger ${f.triggerId} beside ${o.triggerId}`), {
      outcome: "failed",
      reason: I ? "aborted" : "subscribe_failed",
      status: status,
      kept: !0,
      ...F,
      ...D
    };
    let S = await M(p, f.triggerId);
    if (I) return {
      outcome: "failed",
      reason: S ? "aborted" : "watch_trigger_release_failed",
      ...F
    };
    return {
      outcome: "failed",
      reason: C ?? (T ? "subscribe_forbidden" : "subscribe_failed"),
      status: status,
      ...F,
      ...D,
      ...(P && {
        latched: !0
      })
    };
  }
  let since = new Date().toISOString();
  v().set(slug_2, {
    slug: slug_2,
    triggerId: f.triggerId,
    since: since,
    events: events,
    ...((durable_9.claudeDocSlugs.has(slug_2) || o?.claudeDoc) && {
      claudeDoc: !0
    })
  }), yBe();
  let ve = o ? [o.triggerId, ...(o.unreleased ?? [])].filter(item => item !== f.triggerId) : [];
  if ((await Promise.all(ve.map(item => M(p, item)))).includes(!1)) c("artifact_durable_subscribe", "superseded_trigger_release_failed");
  return {
    outcome: "subscribed",
    triggerId: f.triggerId,
    since: since,
    events: events,
    ...(K && {
      downgraded: !0
    }),
    ...F
  };
}
async function TJn(e) {
  let {
    slug: slug_3,
    context: context_2
  } = e;
  if (cKo(slug_3), !v().has(slug_3) && !i.CLAUDE_CODE_REMOTE) return {
    wasWatching: !1,
    teardown: "unsent"
  };
  if (!hr.test(slug_3)) return {
    wasWatching: !1,
    teardown: "unsent"
  };
  let o = N(slug_3, () => Ze(slug_3, context_2));
  return H(o), o;
}
async function Ze(e, n) {
  let r = v().get(e);
  te().durable.unwatchedSlugs.add(e);
  let o = !1,
    teardown = "dispatched",
    u = !1,
    status_2,
    p = !1,
    h = await pe(`/api/frame/unsubscribe/${e}`, {}, n.abortController.signal, n.credentials),
    l = U(me(h)),
    {
      res: res_3
    } = h;
  if (!res_3) u = n.abortController.signal.aborted;else if (res_3.ok) {
    if (o = res_3.status >= 200 && res_3.status < 300, res_3.fromFrame) ue();
  } else if (teardown = "refused", res_3.reason === "relay-unavailable" || res_3.reason === "relay-not-served") if (res_3.status !== 0) status_2 = res_3.status;else p = !0;
  let y = !0;
  if (r || te().durable.orphanTriggers.size > 0) {
    let w = await le(n.getMcp().clients, n.abortController.signal, {
      detachedFromUser: !0
    });
    if (r) {
      let D = [r.triggerId, ...(r.unreleased ?? [])],
        T = w === null ? D.map(() => !1) : await Promise.all(D.map(item => M(w, item)));
      y = !T.includes(!1);
      let {
        durable: durable_10
      } = te();
      D.forEach((item, index) => {
        if (!T[index]) durable_10.orphanTriggers.add(item);
      }), v().delete(e), yBe();
    }
    if (w !== null) await _e(w);
  }
  if (o && y) g("artifact_durable_subscribe", {
    unwatch: !0,
    ...l[0]
  });else if (u && y) c("artifact_durable_subscribe", "unwatch_aborted", ...l);else if (status_2 !== void 0 && y) c("artifact_durable_subscribe", "unwatch_relay_unavailable", {
    status: status_2,
    ...l[0]
  });else {
    let w = res_3?.ok && !o ? {
      status: res_3.status,
      ...l[0]
    } : status_2 !== void 0 ? {
      status: status_2,
      ...l[0],
      trigger_release_failed: !0
    } : l[0];
    m("artifact_durable_subscribe", o ? "unwatch_trigger_release_failed" : status_2 !== void 0 ? "unwatch_relay_unavailable" : teardown === "refused" && !p ? "unwatch_client_policy" : "unwatch_failed", ...(w ? [w] : []));
  }
  return {
    wasWatching: r !== void 0,
    teardown: teardown
  };
}
export { EJn, Ike, Tti, Cti, Rti, Nzo, Fzo, Hzo, kKr, TJn };