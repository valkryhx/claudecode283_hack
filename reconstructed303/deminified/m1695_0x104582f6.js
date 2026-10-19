// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Z5 } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { mI, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, Zg } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ar } from "B:/~BUN/root/chunk-qp0344nb.js";
import { sj } from "B:/~BUN/root/chunk-xyxdcn7p.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { KHt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { lu } from "B:/~BUN/root/chunk-p64g0hj8.js";
import { Prs, Ors, zRe, Irs, P8, HAn } from "B:/~BUN/root/chunk-hscn9khv.js";
import { rrs, ors, QJr, ZJr } from "B:/~BUN/root/chunk-93pyppxk.js";
import { rw } from "B:/~BUN/root/chunk-srvq2311.js";
import { Joe } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { hMn, iAt, J7, KI, wso, OR, Oc } from "B:/~BUN/root/chunk-neajqqs3.js";
import { m4e } from "B:/~BUN/root/chunk-0m1mwrvx.js";
import { fr } from "B:/~BUN/root/chunk-c6mbjdcy.js";
function R() {
  return ee().durable.rows;
}
async function N(e, n) {
  let slugOps = ee().durable.slugOps,
    s = (slugOps.get(e) ?? Promise.resolve()).then(n, n),
    d = s.then(() => {
      return;
    }, () => {
      return;
    });
  slugOps.set(e, d);
  try {
    return await s;
  } finally {
    if (slugOps.get(e) === d) slugOps.delete(e);
  }
}
function Kkn() {
  return [...R().values()];
}
function pRe(e) {
  return R().get(e);
}
var ve = [30000, 120000, 600000];
function _Qo(e, n) {
  if (!a.CLAUDE_CODE_REMOTE || e === null) return;
  if (e.readFailed) {
    if (p("artifact_durable_subscribe", "registry_unread"), n.reread !== void 0) Se(n.reread, n);
    return;
  }
  oe(e, n);
}
async function Se(e, n, r = ve) {
  for (let o of r) {
    if (await Y(o, void 0, {
      unref: !0
    }), ee().durable.registrySink !== null) return !0;
    let s;
    try {
      s = await e();
    } catch (error) {
      t(`[artifact] worker-state re-read threw: ${String(error)}`);
      continue;
    }
    if (s === null || s.readFailed) continue;
    try {
      oe(s, n);
    } catch (error) {
      return l(error), !1;
    }
    return g("artifact_durable_subscribe", {
      registry_reread: !0
    }), !0;
  }
  return p("artifact_durable_subscribe", "registry_reread_failed"), !1;
}
function oe(e, n) {
  let r = Irs(e.internal?.artifact_durable_watches),
    {
      durable: durable
    } = ee();
  for (let s of r?.orphans ?? []) durable.orphanTriggers.add(s);
  for (let s of r?.rows ?? []) {
    if (durable.unwatchedSlugs.has(s.slug) && !durable.rows.has(s.slug)) {
      G(s);
      continue;
    }
    if (durable.slugOps.has(s.slug)) {
      durable.pendingRestoredRows.set(s.slug, s), H(N(s.slug, async () => {
        durable.pendingRestoredRows.delete(s.slug), G(s), zRe();
      }));
      continue;
    }
    G(s);
  }
  HAn(r?.stopped ?? new Map(), n);
  for (let s of new Set([...durable.rows.keys(), ...durable.pendingRestoredRows.keys(), ...durable.slugOps.keys()])) if (durable.stopLatches.isStopped(s)) Ce(s);
  if (Prs(n.sink), r !== null) Ors();
  if (zRe(), r !== null && r.rows.length + r.stopped.size > 0) g("artifact_durable_subscribe", {
    restored_rows: r.rows.length,
    restored_stops: r.stopped.size
  }), t(`[artifact] restored ${r.rows.length} durable watch row(s) and ${r.stopped.size} stop(s) from prior worker epoch`);
}
function Ce(e) {
  let {
      durable: durable_2
    } = ee(),
    r = () => {
      let o = durable_2.rows.get(e);
      if (o === void 0 || !durable_2.stopLatches.isStopped(e)) return;
      durable_2.rows.delete(e), durable_2.unwatchedSlugs.add(e);
      for (let s of [o.triggerId, ...(o.unreleased ?? [])]) durable_2.orphanTriggers.add(s);
      p("artifact_durable_subscribe", "restored_stop_retired_row");
    };
  if (durable_2.slugOps.has(e)) {
    H(N(e, async () => {
      r(), zRe();
    }));
    return;
  }
  r();
}
function G(e) {
  let {
      durable: durable_3
    } = ee(),
    r = durable_3.rows.get(e.slug);
  if (r !== void 0 || durable_3.unwatchedSlugs.has(e.slug) || durable_3.stopLatches.isStopped(e.slug)) {
    for (let o of [e.triggerId, ...(e.unreleased ?? [])]) if (o !== r?.triggerId) durable_3.orphanTriggers.add(o);
    return;
  }
  durable_3.rows.set(e.slug, {
    ...e,
    restored: !0
  });
}
function se(e) {
  let found = m4e(e);
  if (!found) return null;
  let dial = Z5();
  if (!dial) return null;
  return {
    found: found,
    dial: dial
  };
}
function bQo(e) {
  return se(e) !== null;
}
async function ie(e, signal, r) {
  let o = se(e);
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
function x(e, n) {
  let r = new RegExp(`^${n}:\\s*(\\S+)`, "m").exec(e);
  return r && r[1] ? r[1] : null;
}
function De(e) {
  let url = x(e, "url"),
    triggerId = x(e, "trigger_id"),
    sealedSecret = x(e, "sealed_secret");
  if (!url || !triggerId || !sealedSecret) return null;
  return {
    url: url,
    triggerId: triggerId,
    sealedSecret: sealedSecret
  };
}
function Me(e) {
  return x(e, "trigger_id");
}
var Ee = "/integrations/v1/code/webhook-triggers/",
  We = "/fire",
  ke = ["published", "comment"],
  q = ["published"];
function SQo() {
  return a.CLAUDE_CODE_REMOTE ? null : "not_remote";
}
function k3r() {
  let durable_4 = ee().durable,
    subscribeForbidden = durable_4.subscribeForbidden;
  if (subscribeForbidden) if (!subscribeForbidden.relayActive && KI(hMn)) j();else return {
    reason: "subscribe_forbidden",
    serverMessage: subscribeForbidden.serverMessage
  };
  let subscribeUnrelayed = durable_4.subscribeUnrelayed;
  return subscribeUnrelayed ? {
    reason: "relay_unavailable",
    ...subscribeUnrelayed
  } : null;
}
function j() {
  let durable_5 = ee().durable;
  if (durable_5.subscribeForbidden === null) return;
  durable_5.subscribeForbidden = null, QJr("subscribe_forbidden");
}
function le() {
  let durable_6 = ee().durable;
  if (durable_6.subscribeUnrelayed === null) return;
  durable_6.subscribeUnrelayed = null, QJr("relay_unavailable");
}
var ue = "watch_url";
function Ae(e, n) {
  let r = !1;
  for (let o of e) {
    if (o.mcpInfo?.serverName !== n) continue;
    if (o.mcpInfo.toolName === ue) return !0;
    r = !0;
  }
  return r ? !1 : null;
}
function E3r() {
  return fr() && J7() && !KI(hMn) && !KHt();
}
function T3r(e) {
  if (!a.CLAUDE_CODE_REMOTE) return null;
  let {
    watchUrlWithheld: watchUrlWithheld,
    watchUrlGranted: watchUrlGranted
  } = ee().durable;
  if (watchUrlWithheld) return watchUrlWithheld;
  if (watchUrlGranted) return null;
  let o = m4e(e.clients);
  return o?.type === "connected" && Ae(e.tools, o.name) === !1 ? "tool_not_offered" : null;
}
function Pe(e, n) {
  if (Vt(n) === null) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return r.protocol === "https:" && r.username === "" && r.password === "" && r.search === "" && r.hash === "" && r.pathname === Ee + n + We;
}
function Te(e) {
  return e.includes("trigger limit reached") || e.includes("maximum number of webhook triggers");
}
function Ie(e) {
  return e.includes("a session with an originator account");
}
function Fe(e) {
  if (e.includes("tool is not available to this session")) return "tool_not_offered";
  if (e.includes("bound to a desktop device")) return "session_device_bound";
  if (e.includes("tool is not enabled for this organization") || e.includes("Session webhooks are not enabled for this organization")) return "org_not_enabled";
  return null;
}
var Oe = [["cannot be found or is no longer active", "session_not_found"], ["not available in this deployment", "unavailable_in_deployment"]];
function Le(e) {
  for (let [n, r] of Oe) if (e.includes(n)) return r;
  return null;
}
var J = 160,
  Ue = /^[('\[]?[A-Za-z_]+(?:[-'][A-Za-z_]+)?[\])'.,;:!?]*$/,
  Ne = 40,
  $e = /^[(']?\d{1,5}[)'.,;:!?%]*$/,
  de = /^[-\u2013\u2014.,;:!?()]{1,3}$/,
  He = /(?!\u0020)\p{Zs}|[\p{M}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu,
  ce = /\r\n|[\n\v\f\r\u0085\u2028\u2029]/,
  k = "[redacted]",
  L = "[url]",
  Be = 2048;
function fe(e) {
  return e.length <= Ne && Ue.test(e);
}
function Q(e) {
  return e === void 0 || e !== L && e !== k && fe(e);
}
function ze(e, n, r) {
  return fe(e) || de.test(e) || $e.test(e) && Q(n) && Q(r);
}
var re = /(?:^|[^A-Za-z_])(url|trigger_id)[ \t]*:|sealed_secret/i;
function te(e) {
  if (re.test(e)) return;
  let n = ne(e, Be),
    r = n.split(ce).map(item => Zg(item.replaceAll("\t", " ")).replace(He, ""));
  if (r.some(item => re.test(item))) return;
  let o = r.findIndex(item => item.trim() !== "");
  if (o === -1) return;
  let s = r[o] ?? "",
    d = o === r.length - 1 && n.length < e.length,
    f = s.replace(/["`]/g, "'").replace(/[a-z][a-z0-9+.-]*:\/\/\S+/gi, ` ${L} `).split(/\s+/).filter(item => item !== "");
  if (d && f.length > 0) f[f.length - 1] = k;
  let h = f.map((item, index) => item === L || ze(item, f[index - 1], f[index + 1]) ? item : k).filter((item, index, y) => item !== k || y[index - 1] !== k);
  if (!h.some(item => item !== k && item !== L && !de.test(item))) return;
  let b = h.join(" ");
  return b.length > J ? `${ne(b, J - 3)}...` : b;
}
function Ge(e) {
  let n = "content" in e ? e.content : void 0;
  if (!Array.isArray(n)) return "";
  let r = [];
  for (let o of n) if (typeof o === "object" && o !== null && "type" in o && o.type === "text" && "text" in o && typeof o.text === "string") r.push(o.text);
  return r.join(`
`);
}
async function be(e, name, r) {
  try {
    let o = await sj(e, {
      name: name,
      arguments: r
    }, {
      timeout: 15000
    });
    return {
      isError: "isError" in o && o.isError === !0,
      text: Ge(o)
    };
  } catch {
    return null;
  }
}
async function D(e, trigger_id) {
  let r = await be(e, "unwatch_url", {
    trigger_id: trigger_id
  });
  return r !== null && !r.isError;
}
async function ge(e) {
  let {
      durable: durable_7
    } = ee(),
    r = [...durable_7.orphanTriggers];
  if (r.length === 0) return;
  let o = await Promise.all(r.map(item => D(e, item))),
    s = 0;
  if (r.forEach((item, index) => {
    if (o[index]) durable_7.orphanTriggers.delete(item);else s++;
  }), s > 0) p("artifact_durable_subscribe", "orphan_trigger_release_failed");
  zRe();
}
async function pe(e, n, signal_2, credentials) {
  try {
    let res = await Oc.postRelayBound(e, n, {
      headers: lu(),
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
      relayed: OR(error)
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
async function Qor(e) {
  let {
    slug: slug,
    context: context,
    detachedFromUser: detachedFromUser
  } = e;
  rrs(slug);
  let s;
  try {
    let d = Ke(slug, context, detachedFromUser);
    return H(d), s = await d, Ye(s), s;
  } finally {
    let d = ors(slug, s);
    try {
      e.onSettled?.(d);
    } catch (error) {
      l(error);
    }
  }
}
function H(e) {
  let {
    pendingOps: pendingOps
  } = ee().durable;
  pendingOps.add(e);
  let r = () => void pendingOps.delete(e);
  e.then(r, r), mI(Ve);
}
async function Ve() {
  await je(Promise.allSettled([...ee().durable.pendingOps]), 1e4);
}
async function Ke(e, n, r) {
  return N(e, async () => {
    let o = R().get(e);
    if (o?.restored && !r) {
      let s = await ae(e, n, !1, o);
      if (s.outcome === "subscribed") return s;
      let d = s.outcome === "already_watching" ? s.outcome : s.outcome === "failed" && s.kept ? "outcome_unknown" : s.reason;
      return p("artifact_durable_subscribe", `refresh_${d}`), t(`[artifact] restored durable watch not refreshed: reason=${d}`), _e(R().get(e) ?? o);
    }
    return ae(e, n, r);
  });
}
function Ye(e) {
  switch (e.outcome) {
    case "subscribed":
      if (e.downgraded) {
        p("artifact_durable_subscribe", "comment_events_unsupported", ...U(e));
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
      p("artifact_durable_subscribe", e.reason);
      break;
    case "failed":
      {
        let n = Xe(e),
          [r] = U(e),
          o = {
            ...(e.status !== void 0 && {
              status: e.status
            }),
            ...(e.gatewayDeclined !== void 0 && {
              gateway_declined: e.gatewayDeclined
            }),
            ...r
          },
          s = Object.keys(o).length > 0 ? [o] : [];
        if (n !== void 0) p("artifact_durable_subscribe", n, ...s);else m("artifact_durable_subscribe", e.reason, s[0]);
        let d = e.status !== void 0 ? ` status=${e.status}` : "",
          f = e.serverMessage !== void 0 ? ` server="${e.serverMessage}"` : "";
        t(`[artifact] durable watch failed: reason=${e.reason}${d}${f}`, {
          level: n !== void 0 ? "debug" : "warn"
        });
        break;
      }
  }
}
function Xe(e) {
  switch (e.reason) {
    case "aborted":
      return "aborted";
    case "no_originator":
      return e.latched ? "no_originator_latched" : void 0;
    case "subscribe_forbidden":
      return e.latched ? "subscribe_forbidden_latched" : "subscribe_forbidden";
    case "relay_unavailable":
      return e.latched ? "relay_unavailable_latched" : "relay_unavailable";
    default:
      return;
  }
}
function _e(e) {
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
async function ae(slug_2, n, detachedFromUser_2, o) {
  if (!ar.test(slug_2)) return {
    outcome: "failed",
    reason: "invalid_slug"
  };
  let s = R().get(slug_2);
  if (s && s !== o) return _e(s);
  if (P8({
    storageV5: n.storageV5
  }), ee().durable.stopLatches.isStopped(slug_2)) return {
    outcome: "skipped",
    reason: "stop_latched"
  };
  if (At() || xe() !== "firstParty") return {
    outcome: "failed",
    reason: "client_policy"
  };
  if (E3r()) return {
    outcome: "skipped",
    reason: "relay_not_served"
  };
  if (detachedFromUser_2 && ee().durable.originatorRefused) return {
    outcome: "failed",
    reason: "no_originator",
    latched: !0
  };
  let d = k3r();
  if (detachedFromUser_2 && d) return d.reason === "subscribe_forbidden" ? {
    outcome: "failed",
    reason: "subscribe_forbidden",
    latched: !0,
    serverMessage: d.serverMessage
  } : {
    outcome: "failed",
    reason: "relay_unavailable",
    latched: !0,
    status: d.status,
    relayed: !0,
    fromGateway: !0
  };
  let reason = detachedFromUser_2 ? T3r(n.getMcp()) : null;
  if (reason) return {
    outcome: "skipped",
    reason: reason
  };
  let h = await ie(n.getMcp().clients, n.abortController.signal, detachedFromUser_2 ? {
    detachedFromUser: detachedFromUser_2
  } : void 0);
  if (!h) {
    if (!detachedFromUser_2 && n.abortController.signal.aborted) return {
      outcome: "failed",
      reason: "aborted"
    };
    return {
      outcome: "skipped",
      reason: "no_wake_minter"
    };
  }
  await ge(h);
  let b = await be(h, ue, {});
  if (!b || b.isError) {
    let serverMessage = b ? te(b.text) : void 0,
      v = serverMessage !== void 0 ? {
        serverMessage: serverMessage
      } : {};
    if (b && Te(b.text)) return {
      outcome: "failed",
      reason: "trigger_limit",
      ...v
    };
    if (b && Ie(b.text)) {
      let durable_8 = ee().durable,
        originatorRefused = durable_8.originatorRefused;
      return durable_8.originatorRefused = !0, originatorRefused ? {
        outcome: "failed",
        reason: "no_originator",
        latched: !0,
        ...v
      } : {
        outcome: "failed",
        reason: "no_originator",
        ...v
      };
    }
    let reason_2 = b ? Fe(b.text) : null;
    if (reason_2) return ee().durable.watchUrlWithheld = reason_2, {
      outcome: "skipped",
      reason: reason_2
    };
    return {
      outcome: "failed",
      reason: (b ? Le(b.text) : null) ?? "mint_failed",
      ...v
    };
  }
  let durable_9 = ee().durable;
  durable_9.originatorRefused = !1, durable_9.watchUrlWithheld = null, durable_9.watchUrlGranted = !0;
  let c = De(b.text);
  if (!c) {
    let _ = Me(b.text);
    if (_) await D(h, _);
    return {
      outcome: "failed",
      reason: "mint_failed"
    };
  }
  if (!Pe(c.url, c.triggerId)) return await D(h, c.triggerId), {
    outcome: "failed",
    reason: "mint_failed"
  };
  if (!detachedFromUser_2 && n.abortController.signal.aborted) return {
    outcome: "failed",
    reason: (await D(h, c.triggerId)) ? "aborted" : "watch_trigger_release_failed"
  };
  let status,
    w = !1,
    S = {},
    A = !1,
    P = !1,
    C,
    T = !1,
    events = rw() ? ke : q,
    V = !1,
    K = `/api/frame/subscribe/${slug_2}`,
    B = J7() ? iAt("POST", K) : null,
    relayActive = KI(B),
    ye = B !== null && wso(B),
    X = () => pe(K, {
      url: c.url,
      sealed_secret: c.sealedSecret,
      events: events
    }, detachedFromUser_2 ? void 0 : n.abortController.signal, n.credentials),
    M = await X();
  if (M.res?.ok && M.res.fromFrame && M.res.status === 400 && events.includes("comment")) events = q, V = !0, M = await X();
  let O = me(M),
    {
      res: res_2
    } = M;
  if (!res_2) T = !detachedFromUser_2 && n.abortController.signal.aborted;else if (res_2.ok) {
    if (status = res_2.status, w = res_2.status >= 200 && res_2.status < 300, !w) {
      let _ = typeof res_2.data === "string" ? res_2.data.trim() : void 0,
        v = res_2.response?.headers?.["content-type"],
        E = _ !== void 0 && _ !== "" && !ce.test(_) && !/[<>]/.test(_) && typeof v === "string" && v.toLowerCase().startsWith("text/plain"),
        z = Joe(res_2.data),
        F = res_2.fromFrame && (z !== null || E),
        serverMessage_2 = F ? te(z?.error ?? _ ?? "") : void 0;
      S = {
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
      let Re = res_2.route === "relay" || !(ye || res_2.gatewayDeclined === 0);
      if (res_2.status === 403 && E && serverMessage_2 !== void 0 && Re && o === void 0) A = !0, P = durable_9.subscribeForbidden !== null, durable_9.subscribeForbidden = {
        serverMessage: serverMessage_2,
        relayActive: relayActive
      };else if (F && res_2.status >= 400 && res_2.status < 500 && res_2.status !== 401 && res_2.status !== 403) j();
    } else if (res_2.fromFrame) j();
    if (res_2.fromFrame) le();
  } else if (res_2.reason === "relay-unavailable" || res_2.reason === "relay-not-served") {
    if (res_2.status !== 0) {
      if (C = "relay_unavailable", status = res_2.status, S = {
        fromGateway: !0
      }, o === void 0) P = durable_9.subscribeUnrelayed !== null, durable_9.subscribeUnrelayed = {
        status: status
      };
    }
  } else C = res_2.reason === "no-auth" ? "no_auth" : "client_policy";
  if (!w) {
    let _ = !res_2 || res_2.ok && (!res_2.fromFrame || res_2.status >= 500);
    if (o !== void 0 && _) return R().set(slug_2, {
      ...o,
      unreleased: [...(o.unreleased ?? []), c.triggerId]
    }), zRe(), t(`[artifact] refresh subscribe outcome unknown; keeping trigger ${c.triggerId} beside ${o.triggerId}`), {
      outcome: "failed",
      reason: T ? "aborted" : "subscribe_failed",
      status: status,
      kept: !0,
      ...O,
      ...S
    };
    let v = await D(h, c.triggerId);
    if (T) return {
      outcome: "failed",
      reason: v ? "aborted" : "watch_trigger_release_failed",
      ...O
    };
    return {
      outcome: "failed",
      reason: C ?? (A ? "subscribe_forbidden" : "subscribe_failed"),
      status: status,
      ...O,
      ...S,
      ...(P && {
        latched: !0
      })
    };
  }
  let since = new Date().toISOString();
  R().set(slug_2, {
    slug: slug_2,
    triggerId: c.triggerId,
    since: since,
    events: events
  }), zRe();
  let we = o ? [o.triggerId, ...(o.unreleased ?? [])].filter(item => item !== c.triggerId) : [];
  if ((await Promise.all(we.map(item => D(h, item)))).includes(!1)) p("artifact_durable_subscribe", "superseded_trigger_release_failed");
  return {
    outcome: "subscribed",
    triggerId: c.triggerId,
    since: since,
    events: events,
    ...(V && {
      downgraded: !0
    }),
    ...O
  };
}
async function Ykn(e) {
  let {
    slug: slug_3,
    context: context_2
  } = e;
  if (ZJr(slug_3), !R().has(slug_3) && !a.CLAUDE_CODE_REMOTE) return {
    wasWatching: !1,
    teardown: "unsent"
  };
  if (!ar.test(slug_3)) return {
    wasWatching: !1,
    teardown: "unsent"
  };
  let o = N(slug_3, () => Ze(slug_3, context_2));
  return H(o), o;
}
async function Ze(e, n) {
  let r = R().get(e);
  ee().durable.unwatchedSlugs.add(e);
  let o = !1,
    teardown = "dispatched",
    d = !1,
    status_2,
    h = !1,
    b = await pe(`/api/frame/unsubscribe/${e}`, {}, n.abortController.signal, n.credentials),
    i = U(me(b)),
    {
      res: res_3
    } = b;
  if (!res_3) d = n.abortController.signal.aborted;else if (res_3.ok) {
    if (o = res_3.status >= 200 && res_3.status < 300, res_3.fromFrame) le();
  } else if (teardown = "refused", res_3.reason === "relay-unavailable" || res_3.reason === "relay-not-served") if (res_3.status !== 0) status_2 = res_3.status;else h = !0;
  let y = !0;
  if (r || ee().durable.orphanTriggers.size > 0) {
    let w = await ie(n.getMcp().clients, n.abortController.signal, {
      detachedFromUser: !0
    });
    if (r) {
      let S = [r.triggerId, ...(r.unreleased ?? [])],
        A = w === null ? S.map(() => !1) : await Promise.all(S.map(item => D(w, item)));
      y = !A.includes(!1);
      let {
        durable: durable_10
      } = ee();
      S.forEach((item, index) => {
        if (!A[index]) durable_10.orphanTriggers.add(item);
      }), R().delete(e), zRe();
    }
    if (w !== null) await ge(w);
  }
  if (o && y) g("artifact_durable_subscribe", {
    unwatch: !0,
    ...i[0]
  });else if (d && y) p("artifact_durable_subscribe", "unwatch_aborted", ...i);else if (status_2 !== void 0 && y) p("artifact_durable_subscribe", "unwatch_relay_unavailable", {
    status: status_2,
    ...i[0]
  });else {
    let w = res_3?.ok && !o ? {
      status: res_3.status,
      ...i[0]
    } : status_2 !== void 0 ? {
      status: status_2,
      ...i[0],
      trigger_release_failed: !0
    } : i[0];
    m("artifact_durable_subscribe", o ? "unwatch_trigger_release_failed" : status_2 !== void 0 ? "unwatch_relay_unavailable" : teardown === "refused" && !h ? "unwatch_client_policy" : "unwatch_failed", ...(w ? [w] : []));
  }
  return {
    wasWatching: r !== void 0,
    teardown: teardown
  };
}
export { Kkn, pRe, _Qo, bQo, SQo, k3r, E3r, T3r, Qor, Ykn };