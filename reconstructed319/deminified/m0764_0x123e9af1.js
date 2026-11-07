// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, z, st, dne, pm, vG, Vnt, ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { t, _, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { pR, TNn, te, B1i, _Er, j1i, W1i } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { A5, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { zi } from "B:/~BUN/root/chunk-5bb21frh.js";
import { Xt } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { gu, K1, zS, sT, BRe, wc, v, EE } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { cn } from "B:/~BUN/root/chunk-bkfncj77.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { d0r } from "B:/~BUN/root/chunk-5az22yft.js";
import { ss, UJi, BJi, jJi, WJi, I4, hr, xie, Bn, jv, eP } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Mt, mX, hD, Xws, bCe } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { FSi, Veo, jSi, WSi, Qto, Kur, Zto, eno, r8t, tno, ll, Oy } from "B:/~BUN/root/chunk-27h4st9h.js";
import { fXe, lIi } from "B:/~BUN/root/chunk-ybkgfvgz.js";
import { xIt, R9e } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { GM, t6t, nEn, WIe, oXr, sXr, Plt, W8, Wc, wve, kve, vve, Jle } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { VYt, JXo, fir, yir, bge, ZY, G3e, V3e, KYt, _ir, Qvn, mI, aJo, B8, lJo } from "B:/~BUN/root/chunk-gjq813eb.js";
import { cAt } from "B:/~BUN/root/chunk-eahns82c.js";
import { Gii, UYr, Vii, tqt, nqt, XZn, Kii, qii, Yii, Xii, Yqo, Xqo, Jii, Qii, Zii, GG, VYr, RCt, oqt, nai, rai, oai, aai, Dk, lai, ZZn, aQ, dai, uai } from "B:/~BUN/root/chunk-61tvx6vn.js";
import { FOe, HOe, $Oe } from "B:/~BUN/root/chunk-eqb5w0h9.js";
import { Tit, Y4r, ZQn, gBe, zKt, vbn, Ebn } from "B:/~BUN/root/chunk-7qgt8h6x.js";
import { GKt, eZn, MOe, fsi, xKo, nYr, msi, gsi, Rit, ksi, Ait, CB, dx, Csi, aZn, xbn, b6e, jke, Asi } from "B:/~BUN/root/chunk-z0mc9zd3.js";
import { Gsi, Xsi } from "B:/~BUN/root/chunk-kss98j6d.js";
import { aw } from "B:/~BUN/root/chunk-y302yp15.js";
import { NKo, FKo, y8, Msi, mCt, xit, HKo } from "B:/~BUN/root/chunk-3md6z7eb.js";
import { Obn, oYr } from "B:/~BUN/root/chunk-gj3ps2zz.js";
import { aYr } from "B:/~BUN/root/chunk-xp5ya8v1.js";
import { UOe, zhe, sqt, lQ, Xbn, rer, mb, hb, ACt, CS, _ai, VG, vBe, a$, wai, kai } from "B:/~BUN/root/chunk-dq64svjd.js";
import { Irr } from "B:/~BUN/root/chunk-dmmmg90e.js";
import { wQ } from "B:/~BUN/root/chunk-fmk5s6jw.js";
import { Hs } from "B:/~BUN/root/chunk-3xtmwvra.js";
import { o, E, I, oe, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
var ui = "Could not register a durable wake subscription; publishing and reading still work.",
  ci = {
    invalid_slug: "That address is not an artifact this session can name, so nothing was registered; retrying with the same address will not help.",
    trigger_limit: "This session already holds the maximum number of webhook triggers (10); unwatch an artifact to free one.",
    no_originator: "This session currently has no linked human originator, so it cannot hold wake subscriptions. Common causes: the session was started by a background event, or the connection between the chat platform and the Claude account needs re-linking. After the user addresses that (re-link and/or restart the session) \u2014 or if the server-side policy changes \u2014 a deliberate watch retry will re-check; automatic retries while the session stays originator-less are answered locally without contacting the server.",
    client_policy: "This environment's network policy disables artifact subscriptions; no request was sent, and retrying will not help while the policy is active.",
    no_auth: "No credential is available for the artifact service, so the subscription could not be registered; retrying will not help until the session has credentials.",
    session_not_found: "The server no longer has an active record of this remote session, so it cannot hold a wake subscription; retrying in this session will not help.",
    unavailable_in_deployment: "Wake subscriptions are not provisioned in this deployment; retrying will not help.",
    no_wake_minter: "No wake-webhook minter is reachable (the session's own MCP mount was not found or did not connect), so the subscription could not be registered.",
    tool_not_offered: "The server does not offer wake subscriptions to this session, so none was registered; retrying will not help while that holds.",
    org_not_enabled: "Wake subscriptions are not enabled for the user's organization, so none was registered; retrying will not help while that holds.",
    relay_not_served: "This cloud session cannot register wake subscriptions, so none was registered; retrying will not help while that holds.",
    subscribe_forbidden: "The artifact service refuses wake subscriptions from this session, for any artifact until the session ends, so retrying will not help. Later publishes in this session are not armed; only an explicit watch re-checks with the service.",
    relay_unavailable: "This cloud session reaches the artifact service only through its session gateway, and the gateway refused to carry the wake subscription (commonly because wake subscriptions are not enabled there for the user's organization), so none was registered and retrying will not help while that holds. Later publishes in this session are not armed; only an explicit watch re-checks with the gateway.",
    session_device_bound: "This cloud session is bound to the desktop it was started from (Cowork or `claude --cloud`), and that device's trusted-device check means activity on the artifact can't wake it, so no wake subscription was registered. Publishing and reading still work; retrying won't help in this session.",
    aborted: "The request was cancelled before the registration finished (the turn was interrupted); nothing is wrong with the artifact or the session.",
    watch_trigger_release_failed: "The request was cancelled before the registration finished, and the webhook trigger minted for it could not be released \u2014 it counts against this session until the session ends."
  },
  di = new Map(Object.entries(ci));
function ybn(e, n) {
  let r = di.get(e) ?? ui;
  if (n === void 0) return r;
  let s = /[.!?]['")\]]*$/.test(n) ? "" : ".";
  return `${r} Server said: "${n}"${s}`;
}
function aKo(e) {
  if (e.status === void 0) return;
  if (e.relayed) return e.fromGateway ? `HTTP ${e.status} via the session gateway, not attributed to the artifact service` : `HTTP ${e.status} from the artifact service via the session gateway`;
  if (e.gatewayDeclined === void 0) return `HTTP ${e.status} from the artifact service`;
  return e.gatewayDeclined === 0 ? `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer` : `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}
function lKo(e) {
  return e.reason === "subscribe_failed" && e.status === 404 && !e.fromGateway;
}
var li = new Set(["no_originator", "client_policy", "no_auth", "session_not_found", "unavailable_in_deployment", "tool_not_offered", "org_not_enabled", "relay_not_served", "subscribe_forbidden", "relay_unavailable", "session_device_bound", "invalid_slug"]);
function H4r(e) {
  return li.has(e) ? null : Zto;
}
function lsi(e) {
  let {
    armsInFlight: armsInFlight
  } = te().durable;
  armsInFlight.set(e, (armsInFlight.get(e) ?? 0) + 1);
}
function dsi(e, n) {
  let durable = te().durable,
    s = (durable.armsInFlight.get(e) ?? 1) - 1;
  if (s > 0) durable.armsInFlight.set(e, s);else durable.armsInFlight.delete(e);
  if (n?.outcome === "subscribed" || n?.outcome === "already_watching") return cKo(e), {
    settled: "registered"
  };
  let reason = n === void 0 ? "arm_threw" : n.reason;
  if (reason === "stop_latched" || durable.stopLatches.isStopped(e)) return {
    settled: "stopped"
  };
  let d = durable.armOutcomes.get(e),
    l = n?.outcome === "failed" && n.latched && d?.reason === reason ? d : void 0,
    detail = (n?.outcome === "failed" ? aKo(n) : void 0) ?? l?.detail,
    serverMessage = (n?.outcome === "failed" ? n.serverMessage : void 0) ?? l?.serverMessage,
    S = {
      reason: reason,
      ...(detail !== void 0 && {
        detail: detail
      }),
      ...(serverMessage !== void 0 && {
        serverMessage: serverMessage
      })
    };
  return eno(durable.armOutcomes, e, {
    ...S,
    at: Date.now()
  }, Qto), s > 0 ? {
    settled: "pending",
    ...S
  } : {
    settled: "unregistered",
    ...S,
    ...(n?.outcome === "failed" && lKo(n) && {
      refusedByFrame: !0
    })
  };
}
function dKo(e) {
  let durable_2 = te().durable;
  for (let [r, s] of durable_2.armOutcomes) if (s.reason === e) durable_2.armOutcomes.delete(r);
  for (let r of durable_2.announcedArmFailures) if (r.endsWith(`:${e}`)) durable_2.announcedArmFailures.delete(r);
}
function cKo(e) {
  let durable_3 = te().durable;
  durable_3.armOutcomes.delete(e), tno(durable_3.announcedArmFailures, e);
}
function Ot(e, n) {
  return r8t(te().durable.announcedArmFailures, `${e}:${n}`, Kur);
}
function qQn(e) {
  r8t(te().durable.claudeDocSlugs, e, Kur);
}
function csi(e) {
  let durable_4 = te().durable,
    r = [],
    s = new Set();
  for (let slug of durable_4.armsInFlight.keys()) {
    if (!On(durable_4, slug, e)) continue;
    r.push({
      slug: slug,
      state: "arming"
    }), s.add(slug);
  }
  for (let [slug_2, d] of durable_4.armOutcomes) {
    if (!On(durable_4, slug_2, e) || s.has(slug_2)) continue;
    r.push({
      slug: slug_2,
      state: "failed",
      reason: d.reason,
      ...(d.detail !== void 0 && {
        detail: d.detail
      }),
      ...(d.serverMessage !== void 0 && {
        serverMessage: d.serverMessage
      }),
      at: d.at
    });
  }
  return r;
}
function On(e, n, r) {
  return (r === void 0 || n === r) && !e.rows.has(n) && !e.stopLatches.isStopped(n);
}
class Mn {
  working = Hs({
    working: !1
  });
  userPrompt = Hs({
    waitingFor: void 0
  });
}
var Se = new Je(() => new Mn());
function pCt(e, working) {
  Se.of(e).working.setState(r => r.working === working ? r : {
    working: working
  });
}
function GQn(e) {
  return Se.of(e).working.getState().working;
}
function N4r(e, n) {
  return Se.of(e).working.subscribe(n);
}
function VQn(e, waitingFor) {
  Se.of(e).userPrompt.setState(r => r.waitingFor === waitingFor ? r : {
    waitingFor: waitingFor
  });
}
function KQn(e) {
  return iKo(e) !== void 0;
}
function iKo(e) {
  return Se.of(e).userPrompt.getState().waitingFor;
}
function asi(e, n) {
  return Se.of(e).userPrompt.subscribe(n);
}
var Dt = 120,
  Pn = `act:${Dt}`,
  fi = "act:0";
function Dn(e) {
  if (!e.activityOkReported) e.activityOkReported = !0, g("artifact_activity_emit");
}
function Fn(e, n, r) {
  n(r), Dn(e);
}
function Vn(e, n, r) {
  n(r), Dn(e);
}
function Pt(e, n) {
  for (let r of e.activitySenders.values()) Fn(e, r, n ? Pn : fi);
  for (let r of e.agentActivitySinks.values()) Vn(e, r, n ? Dt : 0);
}
function Nn(e) {
  return e.activitySenders.size + e.agentActivitySinks.size;
}
function Ft(e) {
  if (Nn(e) === 0) return;
  if (e.activityRefreshTimer !== void 0) return;
  e.activityRefreshTimer = setInterval(n => Pt(n, !0), e.activityRefreshMs, e), e.activityRefreshTimer.unref?.();
}
function Un(e) {
  if (Nn(e) === 0 && e.activityRefreshTimer !== void 0) clearInterval(e.activityRefreshTimer), e.activityRefreshTimer = void 0;
}
function pi(e, n) {
  if (n) {
    if (e.activityClearTimer !== void 0) {
      clearTimeout(e.activityClearTimer), e.activityClearTimer = void 0;
      return;
    }
    e.activityOnsetTimer ??= setTimeout(r => {
      r.activityOnsetTimer = void 0, Pt(r, !0), Ft(r);
    }, e.activityEdgeDebounceMs, e), e.activityOnsetTimer.unref?.();
  } else {
    if (e.activityOnsetTimer !== void 0) {
      clearTimeout(e.activityOnsetTimer), e.activityOnsetTimer = void 0;
      return;
    }
    e.activityClearTimer ??= setTimeout(r => {
      if (r.activityClearTimer = void 0, r.activityRefreshTimer !== void 0) clearInterval(r.activityRefreshTimer), r.activityRefreshTimer = void 0;
      Pt(r, !1);
    }, e.activityEdgeDebounceMs, e), e.activityClearTimer.unref?.();
  }
}
function $n() {
  return H();
}
function Gn(e) {
  if (e.activityUnsubscribe !== void 0) return;
  let n = $n();
  e.activityUnsubscribe = N4r(n, () => {
    try {
      pi(e, GQn(n));
    } catch (error) {
      a(error);
    }
  });
}
function Hn(e) {
  return GQn($n()) && e.activityOnsetTimer === void 0 || e.activityClearTimer !== void 0;
}
function Kn(e, n, r) {
  if (e.disposed) return;
  if (Gn(e), e.activitySenders.set(n, r), wai(e, n), Hn(e)) Fn(e, r, Pn), Ft(e);
}
function jn(e, n, r) {
  if (e.activitySenders.get(n) === r) e.activitySenders.delete(n), kai(e, n), Un(e);
}
function Qe(e, n, r) {
  if (e.disposed) return;
  if (Gn(e), e.agentActivitySinks.set(n, r), Hn(e)) Vn(e, r, Dt), Ft(e);
}
function Ze(e, n, r) {
  if (e.agentActivitySinks.get(n) === r) e.agentActivitySinks.delete(n), Un(e);
}
var tt = "frame-sync.v1";
function Pe(e, n) {
  let r = new URL("/api/frame/sync", jJi());
  if (r.searchParams.set("slug", e), n?.commentHint === !0) r.searchParams.set("comment_hint", "1");
  if (n?.versionNotices === !0) r.searchParams.set("vn", VYt);
  return Y4r(r);
}
var Vt = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;
function ve(e) {
  if (!Vt.test(e)) return !1;
  let n = e.split(".", 4)[2];
  return n !== void 0 && hi(n).role.endsWith("_agent");
}
var mi = 28;
function hi(role) {
  let n = role.length - mi;
  if (n <= 0 || role.slice(n, n + 4) !== "_id_") return {
    role: role
  };
  let id = role.slice(n + 4);
  return cAt.test(id) ? {
    role: role.slice(0, n),
    id: id
  } : {
    role: ""
  };
}
function nt(e) {
  let n = e.split(".", 6)[4];
  if (n === void 0 || !/^[0-9]{1,12}$/.test(n)) return;
  let r = Number(n);
  return Number.isSafeInteger(r) && r > 0 ? r : void 0;
}
var gi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function me(e) {
  let [n, organizationUuid] = e.split(".", 3);
  if (n === void 0 || organizationUuid === void 0 || organizationUuid === "") return;
  let accountUuid = Buffer.from(n, "base64url").toString("utf8");
  if (!gi.test(accountUuid) || Buffer.from(accountUuid, "utf8").toString("base64url") !== n) return;
  return {
    accountUuid: accountUuid,
    organizationUuid: organizationUuid
  };
}
var bi = 60000,
  errorCode = "boot_request_error",
  Nt = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED",
  Yn = "JOIN_DENIED_REASON_DENIED",
  Jn = "JOIN_DENIED_REASON_CAP_INVALID",
  Xn = {
    on: "socket",
    detail: "4503",
    opened: !0,
    uptimeMs: 0,
    ageMs: 0
  },
  rt = p(() => u({
    kind: o(),
    slug: o().optional(),
    actor: o().optional(),
    payload: oe().optional()
  })),
  Ut = p(() => u({
    cap: o(),
    exp: E()
  })),
  De = p(() => u({
    reason: o()
  }));
function $t(slug_3, busyS) {
  return _({
    kind: "activity",
    slug: slug_3,
    payload: {
      busyS: busyS
    }
  });
}
function Qn(e) {
  if (i.CLAUDE_CODE_REMOTE) return "remote";
  if (WJi()) return "cp_override";
  if (Ebn(Pe(e)) !== null) return "egress_denied";
  return null;
}
async function Zn(e, n) {
  let storedCap = e.storedCap;
  if (!e.rebootNeeded && storedCap !== void 0 && storedCap.exp * 1000 - Date.now() > bi) {
    let w = await EE(e.context.storageV5).catch(() => {
      return;
    });
    if (!n.isCurrent()) return {
      outcome: "stale"
    };
    if (gu(e.owner, w)) return {
      outcome: "token",
      token: storedCap.cap
    };
  }
  let s,
    h = Date.now();
  try {
    s = await mI({
      slug: e.slug,
      env: ss()
    }, n.feature, e.abort.signal, {
      agentPeer: !0,
      ...(e.bootedVersion !== void 0 && {
        lean: {
          version: e.bootedVersion,
          mustCarry: w => "syncToken" in w
        }
      }),
      speculative: !0,
      credentials: e.context.credentials
    });
  } catch {
    s = {
      err: "boot threw",
      errorCode: errorCode
    };
  }
  if (!n.isCurrent()) return {
    outcome: "stale"
  };
  if (s.err !== null) {
    if (ZY(s)) return {
      outcome: "other_org"
    };
    if (bge(s)) return {
      outcome: "not_found"
    };
    return {
      outcome: "boot_failed",
      status: s.status,
      noAnswer: s.errorCode === errorCode,
      elapsedMs: Date.now() - h
    };
  }
  if (s.assetToken === void 0) return {
    outcome: "public_outside_org"
  };
  let d = s.data.syncToken,
    l = typeof d === "string" && Vt.test(d) ? me(d) : void 0;
  if (e.owner !== void 0 && l !== void 0 && !gu(e.owner, l)) return {
    outcome: "owner_changed"
  };
  let b = typeof d === "string" && ve(d) ? l : void 0;
  if (typeof d !== "string" || b === void 0) return {
    outcome: "not_admitted"
  };
  return e.owner = b, e.rebootNeeded = !1, e.bootedVersion = s.ver, er(e, _i(d)), {
    outcome: "token",
    token: d
  };
}
function _i(cap) {
  return {
    cap: cap,
    exp: nt(cap) ?? Math.floor((Date.now() + XZn) / 1000)
  };
}
function er(e, n) {
  let r = Date.now(),
    s = Math.min(r + XZn, Math.max(r + Kii, n.exp * 1000));
  e.storedCap = {
    cap: n.cap,
    exp: Math.floor(s / 1000)
  }, e.capStrikes = 0;
}
function tr(e, n, r) {
  switch (n) {
    case "ctrl:token_refresh":
      {
        let s = Ut().safeParse(r);
        if (s.success && ve(s.data.cap) && gu(e.owner, me(s.data.cap))) er(e, {
          cap: s.data.cap,
          exp: s.data.exp
        });
        return !0;
      }
    case "ctrl:token_refresh_declined":
      {
        let s = De().safeParse(r);
        if (s.success && s.data.reason === Nt) e.rebootNeeded = !0, e.storedCap = void 0;
        return !0;
      }
    default:
      return !1;
  }
}
function Si(e, n, r) {
  if (n()) return;
  if (e.taskId !== void 0) try {
    Dk(e.taskId, e.context.taskRegistry, {
      quiet: !0
    });
  } catch {}
  r("error");
}
function it(e) {
  if (e.stopped = !0, e.storedCap = void 0, e.abort.abort(), e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer), e.reconnectTimer = void 0;
  if (e.send = void 0, e.state = "closed", e.taskId !== void 0) {
    let taskId = e.taskId;
    e.taskId = void 0;
    try {
      Dk(taskId, e.context.taskRegistry, {
        quiet: !0
      });
    } catch {}
  }
}
var vi = 404;
function wi(e) {
  let n = Number(e);
  return n === 1008 || n >= 4000 && n <= 4999;
}
function nr(e, n, r) {
  switch (n.on) {
    case "dial_error":
      return n.deterministic ? "refused" : "dropped";
    case "boot":
      if (B8(n.status)) return "unavailable";
      if (n.noAnswer) return n.elapsedMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      return "refused";
    case "socket":
      {
        if (n.detail === nqt) return "revoked";
        if (n.opened) {
          if (n.uptimeMs >= r.stallThresholdMs) return "dropped";
          if (n.detail === tqt && !e.rebootNeeded) return "unavailable";
          return wi(n.detail) ? "refused" : "dropped";
        }
        let s = gBe(n.detail);
        if (s !== null) return B8(s.status) || s.cfMitigated || s.status === vi ? "unavailable" : "refused";
        return n.detail === ZQn || n.ageMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      }
  }
}
function rr(e, n, r) {
  let s = nr(e, n, r);
  return s === "refused" || s === "revoked";
}
function ir(e, n, r) {
  let s = nr(e, r, n);
  if (s === "revoked" || s === "refused") e.storedCap = void 0;else if (s === "dropped" && r.on !== "boot" && e.storedCap !== void 0) {
    let d = r.on === "socket" && r.opened && r.uptimeMs >= n.minUptimeMs;
    if (e.capStrikes = d ? 0 : e.capStrikes + 1, e.capStrikes >= qii) e.storedCap = void 0;
  }
  if (s === "revoked") return {
    next: "end",
    reason: "revoked"
  };
  if (s === "unavailable") {
    let stallRunStarted = e.stalledSince === void 0;
    if (stallRunStarted) e.stalledSince = Date.now(), e.stalls = 0;
    let l = Math.min(n.stallMinMs * 2 ** e.stalls, n.stallMaxMs / 2),
      b = Math.min(l * 2, n.stallMaxMs);
    return e.stalls++, {
      next: "redial",
      delayMs: Math.round(l + Math.random() * (b - l)),
      stalled: !0,
      stallRunStarted: stallRunStarted
    };
  }
  if (e.stalledSince = void 0, s === "refused") {
    if (e.refusals++, e.refusals > n.maxConsecutiveRefusals) return {
      next: "end",
      reason: "refused"
    };
  }
  if (r.on === "socket" && r.opened) {
    if (r.uptimeMs >= n.stallThresholdMs) e.refusals = 0;
    if (r.uptimeMs >= n.minUptimeMs) e.backoff = 0;
  }
  let h = Math.min(n.capMs, n.baseMs * 2 ** Math.min(e.backoff, 5));
  return e.backoff++, {
    next: "redial",
    delayMs: Math.round(Math.random() * h),
    stalled: !1,
    stallRunStarted: !1
  };
}
function Gt(e, n, r) {
  if (e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer);
  e.state = "closed", e.reconnectTimer = setTimeout(Ai, n, e, r), e.reconnectTimer.unref?.();
}
function Ai(e, n) {
  e.reconnectTimer = void 0, n(e);
}
async function or(e, n, r, s) {
  let {
      slug: slug_4
    } = e,
    {
      live: live
    } = te(),
    opened = !1,
    b = !1,
    w,
    S,
    y = () => b || !s(),
    C = Date.now(),
    G = () => opened && e.openedAt > 0 ? Date.now() - e.openedAt : 0,
    W = R => {
      if (y()) return;
      b = !0;
      let uptimeMs = G(),
        ageMs = Date.now() - C;
      if (e.send === w) e.send = void 0, e.state = "closed", e.openedAt = 0;
      r.onEnded(R, {
        opened: opened,
        uptimeMs: uptimeMs,
        ageMs: ageMs
      });
    };
  try {
    let R = await vbn({
      ws: {
        url: Pe(slug_4, {
          versionNotices: !0
        }),
        protocols: [tt, n]
      },
      headers: {
        "User-Agent": K1()
      },
      description: r.description,
      timeout_ms: 0,
      persistent: !0,
      quietLifecycle: !0,
      ambient: !0,
      handshakeDeadlineMs: r.handshakeDeadlineMs,
      ...(e.taskId !== void 0 && {
        reuseTaskId: e.taskId
      }),
      transform: T => (r.onFrame(T), null),
      keepalive: r.keepalive,
      onSender: T => {
        if (y()) return;
        w = T, e.send = T, e.state = "open", S = P => T($t(slug_4, P)), Qe(live, r.activitySinkKey, S);
      },
      onSenderClosed: () => {
        if (S !== void 0) Ze(live, r.activitySinkKey, S);
        if (w !== void 0 && e.send === w) {
          if (e.send = void 0, e.state === "open") e.state = "closed";
        }
        if (y()) return;
        let taskId_2 = e.taskId,
          P = taskId_2 === void 0 ? void 0 : e.context.taskRegistry.all()[taskId_2];
        if (taskId_2 !== void 0 && P?.status !== "running") {
          W("task_ended");
          return;
        }
        setTimeout(Si, 0, e, y, W).unref?.();
      },
      onLifecycle: (T, P) => {
        if (y()) return;
        if (T === "open") {
          opened = !0, e.everOpened = !0, e.openedAt = Date.now(), r.onOpen();
          return;
        }
        W(P);
      }
    }, e.context);
    if (e.taskId = R.data.taskId, !s()) return Dk(R.data.taskId, e.context.taskRegistry, {
      quiet: !0
    }), {
      outcome: "stale"
    };
    return {
      outcome: "armed"
    };
  } catch (error_2) {
    return t(`[${r.label}] connect failed slug=${slug_4}: ${error_2 instanceof Error ? error_2.name : "error"}`), {
      outcome: "error",
      error: error_2
    };
  }
}
var yi = "tengu_slate_lantern_hush",
  Ri = [600, 86400],
  ki = [25, 600],
  Ei = 50,
  Ti = p(() => {
    let e = E().optional().catch(void 0);
    return u({
      idleAfterS: e,
      idleKeepaliveS: e
    });
  });
function sr(e, [n, r]) {
  return Math.min(Math.max(Math.round(e), n), r);
}
function Ci() {
  let e = v(yi, null);
  if (typeof e === "string") e = et(e, !1);
  let n = Ti().safeParse(e),
    r = n.success ? n.data : {},
    idleAfterMs = r.idleAfterS === void 0 || r.idleAfterS <= 0 ? 0 : sr(r.idleAfterS, Ri) * 1000,
    idleKeepaliveMs = (r.idleKeepaliveS === void 0 ? Ei : sr(r.idleKeepaliveS, ki)) * 1000;
  return {
    idleAfterMs: idleAfterMs,
    idleKeepaliveMs: idleKeepaliveMs
  };
}
function xi(e, n) {
  if (fXe()) return 0;
  let r = Math.max(lIi(), pm(), dne() ?? 0, e.lastArtifactToolCallAt);
  return Math.max(0, n - r);
}
function ot(e, n, r = Date.now()) {
  let s = Ci();
  if (s.idleAfterMs <= 0) return n;
  return xi(e, r) >= s.idleAfterMs ? Math.max(s.idleKeepaliveMs, n) : n;
}
var Ht = p(() => u({
    tag: o(),
    ver: o(),
    replay: I().optional()
  })),
  Kt = "INVALIDATE_TAG_LIVE",
  Bt = "INVALIDATE_TAG_SHARED",
  ur = "INVALIDATE_TAG_HEAD",
  cr = p(() => u({
    commentsEmpty: I(),
    readAtMs: E().int().positive().max(8640000000000000)
  }));
function jt(e) {
  return e * 3 + 5000;
}
function Li() {
  return i.CLAUDE_CODE_ARTIFACT_PRESENCE ?? v("tengu_brass_plover", !1);
}
function at(e) {
  if (!Li()) return "flag_off";
  return Qn(e);
}
function Ae() {
  return te().presence;
}
function Fe(e) {
  return !e.stopped && Ae().conns.get(e.slug) === e;
}
function dr(e) {
  let {
    slug: slug_5,
    url: url
  } = e;
  try {
    let s = at(slug_5);
    if (s !== null) {
      if (s !== "flag_off") t(`[artifactPresence] not arming slug=${slug_5}: ${s}`);
      return;
    }
    let h = Ae();
    if (h.declined.has(slug_5)) return;
    let d = zKt(e.context);
    h.dispose = Fi, h.accountChanged = Vi, h.disposeSlug = Di, h.retireSlug = pr;
    let l = h.conns.get(slug_5);
    if (l !== void 0 && !l.stopped) {
      if (l.url = url, l.stalledSince !== void 0 && l.reconnectTimer !== void 0) Gt(l, Math.round(Math.random() * h.timing.capMs), fr);
      return;
    }
    Wi(h, slug_5, url, d);
  } catch (error) {
    t(`[artifactPresence] arm threw slug=${slug_5}: ${error instanceof Error ? error.name : "error"}`);
  }
}
function Wi(e, slug_6, url_2, context) {
  let h = {
    slug: slug_6,
    url: url_2,
    context: context,
    send: void 0,
    state: "connecting",
    storedCap: void 0,
    capStrikes: 0,
    owner: void 0,
    rebootNeeded: !1,
    bootedVersion: void 0,
    backoff: 0,
    refusals: 0,
    stalledSince: void 0,
    stalls: 0,
    openedAt: 0,
    everOpened: !1,
    reconnectTimer: void 0,
    taskId: void 0,
    refusedAdmission: !1,
    stopped: !1,
    abort: new AbortController()
  };
  e.conns.set(slug_6, h), oai(Ii), lr(h, "initial").catch(d => {
    t(`[artifactPresence] connect threw slug=${slug_6}: ${d instanceof Error ? d.name : "error"}`), we(h, {
      on: "dial_error",
      deterministic: !1
    });
  });
}
var Ii = {
  closeByTaskId: e => Oi(e)
};
function Oi(e) {
  let n = B1i();
  if (n === void 0) return !1;
  for (let r of n.conns.values()) {
    if (r.taskId !== e) continue;
    return r.taskId = void 0, n.declined.add(r.slug), re(r), !0;
  }
  return !1;
}
async function lr(e, n) {
  let r = at(e.slug);
  if (r !== null) {
    t(`[artifactPresence] closing slug=${e.slug}: ${r}`), re(e);
    return;
  }
  e.state = "connecting";
  let s = await Zn(e, {
    feature: "artifact_presence",
    isCurrent: () => Fe(e)
  });
  switch (s.outcome) {
    case "stale":
      return;
    case "not_found":
      re(e);
      return;
    case "other_org":
    case "public_outside_org":
      c("artifact_presence", s.outcome), re(e);
      return;
    case "boot_failed":
      {
        let h = {
          on: "boot",
          status: s.status,
          noAnswer: s.noAnswer,
          elapsedMs: s.elapsedMs
        };
        if (n === "initial" && rr(e, h, Ae().timing)) t(`[artifactPresence] boot failed for slug=${e.slug}; no presence connection`), re(e);else we(e, h);
        return;
      }
    case "not_admitted":
      t(`[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`), re(e);
      return;
    case "owner_changed":
      c("artifact_presence", "owner_changed"), re(e);
      return;
    case "token":
      await Mi(e, s.token);
      return;
  }
}
async function Mi(e, n) {
  let {
      timing: timing
    } = Ae(),
    {
      slug: slug_7
    } = e,
    h = !e.everOpened;
  e.refusedAdmission = !1;
  let d = await or(e, n, {
    description: `presence on artifact ${e.url}`,
    keepalive: {
      openFrames: [],
      frame: _({
        kind: "ping",
        slug: slug_7
      }),
      intervalMs: timing.keepaliveMs,
      sendEveryMs: () => ot(te().live, timing.keepaliveMs),
      deadlineMs: timing.keepaliveDeadlineMs ?? jt(timing.keepaliveMs)
    },
    onFrame: b => Pi(e, b),
    onOpen: () => {
      if (h) g("artifact_presence", {
        connected: !0
      });
    },
    onEnded: (detail_2, w) => {
      let refusedAdmission = e.refusedAdmission;
      if (e.refusedAdmission = !1, refusedAdmission && detail_2 !== nqt) {
        we(e, Xn);
        return;
      }
      if (w.opened) {
        if (detail_2 !== tqt && detail_2 !== nqt) c("artifact_presence", `closed_${detail_2 ?? "unknown"}`);
      } else {
        let y = gBe(detail_2);
        m("artifact_presence", "connect_failed", y === null ? void 0 : {
          http_status: y.status,
          cf_mitigated: y.cfMitigated
        });
      }
      we(e, {
        on: "socket",
        detail: detail_2,
        ...w
      });
    },
    handshakeDeadlineMs: timing.handshakeDeadlineMs,
    activitySinkKey: `presence:${slug_7}`,
    label: "artifactPresence"
  }, () => Fe(e));
  if (d.outcome !== "error") return;
  let deterministic = d.error instanceof Tit && !d.error.message.startsWith("could not resolve");
  if (!Fe(e)) return;
  if (h && deterministic) {
    m("artifact_presence", "ws_open_error"), re(e);
    return;
  }
  c("artifact_presence", "ws_open_error"), e.state = "closed", we(e, {
    on: "dial_error",
    deterministic: deterministic
  });
}
function we(e, n) {
  if (!Fe(e)) return;
  let r = ir(e, Ae().timing, n);
  if (r.next === "end") {
    c("artifact_presence", r.reason === "revoked" ? "closed_4403" : "refused_gave_up"), re(e);
    return;
  }
  if (r.stallRunStarted) {
    let http_status = n.on === "boot" ? n.status : n.on === "socket" ? gBe(n.detail)?.status : void 0;
    c("artifact_presence", "stall_run_started", {
      boot: n.on === "boot",
      ...(http_status !== void 0 && {
        http_status: http_status
      })
    });
  }
  Gt(e, r.delayMs, fr);
}
function fr(e) {
  if (!Fe(e)) return;
  lr(e, "reconnect").catch(n => {
    t(`[artifactPresence] reconnect threw slug=${e.slug}: ${n instanceof Error ? n.name : "error"}`), we(e, {
      on: "dial_error",
      deterministic: !1
    });
  });
}
function re(e) {
  it(e);
  let n = Ae();
  if (n.conns.get(e.slug) === e) n.conns.delete(e.slug);
}
function Pi(e, n) {
  if (e.stopped || n.charCodeAt(0) !== 123) return;
  let r;
  try {
    r = ds(n);
  } catch {
    return;
  }
  let s = rt().safeParse(r);
  if (!s.success) return;
  let {
    kind: kind,
    slug: slug_8,
    actor: actor,
    payload: payload
  } = s.data;
  if (actor !== void 0 || slug_8 !== void 0 && slug_8 !== e.slug) return;
  if (tr(e, kind, payload)) return;
  switch (kind) {
    case "join_denied":
      {
        let w = De().safeParse(payload).data?.reason;
        if (w === Yn) {
          m("artifact_presence", "join_denied"), re(e);
          return;
        }
        if (c("artifact_presence", "join_denied"), w === Jn) e.storedCap = void 0;
        if (e.refusedAdmission = !0, e.taskId !== void 0) try {
          Dk(e.taskId, e.context.taskRegistry, {
            quiet: !0
          });
        } catch {}
        return;
      }
    case "ctrl:comment":
      ar(e.slug)?.comment();
      return;
    case "ctrl:invalidate":
      {
        let w = Ht().safeParse(payload);
        if (w.success && (w.data.tag === Kt || w.data.tag === Bt)) ar(e.slug)?.ver(w.data.ver, "sync");
        return;
      }
    default:
      return;
  }
}
function ar(e) {
  let n = te().live.supervisors.get(e);
  return n !== void 0 && !n.stopped ? n.wake : void 0;
}
function Di(e, n) {
  e.declined.delete(n), pr(e, n);
}
function pr(e, n) {
  let r = e.conns.get(n);
  if (r !== void 0) re(r);
}
function Fi(e) {
  e.declined.clear();
  for (let n of [...e.conns.values()]) it(n);
  e.conns.clear();
}
function Vi(e, n) {
  for (let r of [...e.conns.values()]) {
    if (gu(r.owner, n)) continue;
    if (it(r), e.conns.get(r.slug) === r) e.conns.delete(r.slug);
  }
}
function F4r(e, n) {
  return qt(e, n) >= 0;
}
function qt(e, n) {
  return zt(e, n).at(-1) ?? -1;
}
function zt(e, n) {
  let r = n.toLowerCase(),
    s = [];
  for (let h = 0; h < e.length; h++) {
    let d = e[h];
    try {
      let l = !zS(d) ? null : d.type === "user" ? br(d.message?.content) : d.type === "attachment" && d.attachment.type === "queued_command" ? br(d.attachment.prompt) : null;
      if (l !== null && ji(l, r)) s.push(h);
    } catch {}
  }
  return s;
}
var mr = /^https?:\/\//i,
  Ni = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i,
  _r = "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000",
  regExp = new RegExp(`[${_r}]+`),
  $i = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/,
  Sr = "(<[{'\"`*_~",
  regExp_2 = new RegExp(`^[${Sr}]+`),
  Hi = /[.,;:!?)\]}'">`*_~\u200b]+$/,
  regExp_3 = new RegExp(`(?<=^|[${_r}])[${Sr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`, "g"),
  Bi = "artifact-files";
function ji(e, n) {
  for (let r of e.matchAll(regExp_3)) if (gr(r[1], n)) return !0;
  return e.split(regExp).some(item => gr(item.replace(regExp_2, ""), n));
}
function gr(e, n) {
  let r = e.replace(Hi, "");
  if ($i.test(r)) return !1;
  if (mr.test(r) || Ni.test(r)) {
    let h = mr.test(r) ? r : `https://${r}`;
    return xie(h)?.slug === n;
  }
  let s = r.toLowerCase().split(/[/\\]/);
  if (s.length > 1) return s.some((item, index) => item === n && s[index - 1] === Bi);
  return s[0] === n || I4(r) === n;
}
function br(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let n = [];
  for (let r of e) if (typeof r === "object" && r !== null && "type" in r && r.type === "text" && "text" in r && typeof r.text === "string") n.push(r.text);
  return n.length > 0 ? n.join(`
`) : null;
}
var qi = "frame-live.v1",
  queue = {
    enqueuePendingNotification: e => ll(e)
  },
  intervalMs = 25000;
function uKo() {
  te().live.lastArtifactToolCallAt = Date.now();
}
var Xi = 90000,
  Jt = "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, \u2715 the watch in the tasks list or use the kill-all-agents gesture.",
  Qi = "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";
function Zi(e, slug_9, r) {
  let s = e.supervisors.get(slug_9);
  if (s !== void 0) s.explicit = !1;
  for (let h of Object.values(r.all())) if (GG(h) && h.status === "running" && h.frameLive?.slug === slug_9 && h.frameLive.explicit) r.update(h.id, d => GG(d) && d.frameLive !== void 0 ? {
    ...d,
    description: Qt(Bn({
      slug: slug_9,
      env: ss()
    }), !1, d.frameLive.armedVia),
    frameLive: {
      ...d.frameLive,
      explicit: !1
    }
  } : d);
}
function eo(slug_10, n) {
  let live_2 = te().live,
    storageV5 = live_2.supervisors.get(slug_10)?.context.storageV5 ?? FKo();
  eZn(storageV5);
  let h;
  if (n.taskStop) {
    if (te().durable.stopLatches.confirmStop(slug_10), !VG(slug_10)) mCt(slug_10, {
      storageV5: storageV5
    }), import("B:/~BUN/root/chunk-1dv8fbf5.js").then(l => l.notifyTakenOverSlugStopped(slug_10));
    let {
      wasWatching: wasWatching
    } = Rr({
      slug: slug_10,
      taskRegistry: n.taskRegistry,
      announce: !n.running,
      killRow: l => {
        if (l.id !== n.taskId) Dk(l.id, n.taskRegistry, {
          userStop: !0
        });
      }
    });
    h = wasWatching;
  } else {
    if (!to(live_2, slug_10, n)) return !1;
    ee(live_2, slug_10), h = !0;
  }
  if (n.modelOrigin !== !0) oYr(slug_10, storageV5);
  return h;
}
function Rr(e) {
  let {
      slug: slug_11,
      taskRegistry: taskRegistry
    } = e,
    live_3 = te().live,
    h = live_3.supervisors.get(slug_11),
    wasWatching_2 = h !== void 0 && !h.stopped || live_3.inFlightSubscribes.has(slug_11);
  if (h?.autoReactWiring !== void 0) lai(slug_11);
  let l = Object.values(taskRegistry.all()).filter(item => GG(item) && item.status === "running" && item.frameLive?.slug === slug_11);
  if (e.announce && h !== void 0 && !h.stopped && l.length === 0 && (h.taskId !== void 0 || h.timer !== void 0)) dt(live_3, h, "watching this artifact was stopped just now");else ee(live_3, slug_11);
  for (let b of l) wasWatching_2 = !0, e.killRow(b);
  if (wasWatching_2 && CS(slug_11)) ZZn(slug_11);
  return xKo(slug_11), {
    wasWatching: wasWatching_2
  };
}
function to(e, n, r) {
  let s = e.supervisors.get(n);
  if (s === void 0 || s.stopped) return !1;
  if (r.running) return s.taskId === void 0 || s.taskId === r.taskId;
  if (s.taskId === void 0 || s.taskId !== r.taskId) return !1;
  return s.timer !== void 0 || e.inFlightSubscribes.has(n);
}
function ee(e, n) {
  let r = e.supervisors.get(n);
  if (r) TNn(r), e.supervisors.delete(n);
  fir(n), _Er(n), Ve(n)?.sourceEnded();
}
function Re(e, n, r) {
  let title = n.title ?? e?.title,
    h = title === void 0 ? n : {
      ...n,
      title: title
    };
  if (r) return {
    ...h,
    humanTurnSnapshot: !0
  };
  if (e === void 0) return n;
  let {
    humanTurnSnapshot: humanTurnSnapshot,
    ...l
  } = h;
  return {
    ...l,
    context: e.context,
    publishTranscript: e.publishTranscript,
    ...(e.humanTurnSnapshot && {
      humanTurnSnapshot: !0
    })
  };
}
function vr(e, n, r) {
  let s = e.supervisors.get(n)?.autoReactWiring;
  return s?.humanTurnSnapshot === !0 && (r?.humanTurnSnapshot !== !0 || s.context !== r.context);
}
function wr(e, n) {
  let r = e.supervisors.get(n.slug);
  if (r && !r.stopped) {
    if (n.carriedVer !== void 0) r.carriedVer = n.carriedVer;
    let h = r.armedVia === "mcp_write";
    if (!n.machineArm) {
      if (r.lastActivityAt = Date.now(), r.timer !== void 0) clearTimeout(r.timer), r.timer = void 0;
      if (r.stalledSince = void 0, r.lastStalledAt = void 0, r.stallOutAfterMs = void 0, r.taskId === void 0 && !e.inFlightSubscribes.has(n.slug) && IOe(n.context, n.slug).length === 0) r.watchedSince = Date.now(), r.armedVia = n.armedVia, nYr(n.slug);else if (n.armedVia === "publish") r.armedVia = "publish";else if (r.armedVia === "mcp_write") r.armedVia = n.armedVia;
      if (h && r.armedVia !== "mcp_write") a$(e, n.slug);
    }
    if (r.explicit = r.explicit || n.explicit, n.autoReactWiring !== void 0) {
      let d = r.autoReactWiring !== void 0;
      if (r.autoReactWiring = Re(r.autoReactWiring, n.autoReactWiring, n.humanTurnWiring === !0), !d) a$(e, n.slug);
    }
    return r;
  }
  let s = {
    slug: n.slug,
    url: n.url,
    getKnownVer: n.getKnownVer,
    ownPublishes: n.ownPublishes,
    context: n.context,
    abort: new AbortController(),
    explicit: n.explicit,
    stopped: !1,
    watchedSince: Date.now(),
    lastActivityAt: Date.now(),
    armedVia: n.armedVia,
    consecutiveFailures: 0,
    ...(n.carriedVer !== void 0 && {
      carriedVer: n.carriedVer
    }),
    ...(n.autoReactWiring !== void 0 && {
      autoReactWiring: Re(void 0, n.autoReactWiring, n.humanTurnWiring === !0)
    })
  };
  return e.supervisors.set(n.slug, s), nYr(n.slug, s.watchedSince), s;
}
function no(e, n, r, s) {
  if (e.supervisors.get(r) === n) n.taskId = s;
}
function ro(e, n) {
  let {
    rewatchTiming: rewatchTiming
  } = e;
  if (rewatchTiming.idleTtlMs <= 0) return !1;
  if (n.explicit || kr(e, n) || Date.now() - n.lastActivityAt < rewatchTiming.idleTtlMs) return !1;
  return !(n.autoReactWiring !== void 0 && dx() && (!mb(n.slug) || CS(n.slug)));
}
function kr(e, n) {
  return n.slug === e.mostRecentPublishSlug && n.armedVia !== "mcp_write";
}
function YQn(e, n) {
  return e ? "watch" : n === "watch" ? "watch_stopped" : n;
}
function $4r(e) {
  return Zii.find(item => item === e) ?? "publish";
}
function _bn(e) {
  switch (e) {
    case "publish":
      return {
        task: "auto-armed on publish",
        row: "armed by a publish",
        idle: "automatically when you published this artifact"
      };
    case "attach":
      return {
        task: "attached via /artifacts",
        row: "armed when the user attached it from /artifacts",
        idle: "automatically when you attached this artifact from /artifacts"
      };
    case "watch":
      return {
        task: "watch requested",
        row: "requested by you",
        idle: "when you asked to watch this artifact"
      };
    case "resume":
      return {
        task: "resume requested",
        row: "re-armed when the user asked to resume replies",
        idle: "when you asked to resume its comment auto-replies"
      };
    case "session_resume":
      return {
        task: "re-armed on session resume",
        row: "re-armed when this session was resumed",
        idle: "automatically when this session was resumed"
      };
    case "mcp_write":
      return {
        task: "presence while editing via MCP",
        row: "armed when this session edited the page through an MCP tool",
        idle: "automatically when this session edited this page through an MCP tool"
      };
    case "watch_stopped":
      return {
        task: "watch requested; auto-replies since stopped",
        row: "requested by you; its auto-replies since stopped by the user",
        idle: "when you asked to watch this artifact"
      };
  }
}
function io(e, n) {
  let idle = _bn(n.armedVia).idle,
    s = n.armedVia === "watch" ? "(your watch request was later stopped; idle auto-armed watches are retired)" : "(idle auto-armed watches are retired)";
  return `it was armed ${idle} and has seen no activity for over ${cn(e.rewatchTiming.idleTtlMs, {
    hideTrailingZeros: !0
  })} ${s}`;
}
function oo(e, n, r) {
  return e === ZQn || n >= r.stallThresholdMs;
}
function so(e) {
  let n = gBe(e);
  return n !== null && (B8(n.status) || n.cfMitigated);
}
function ao(e) {
  return Math.max(e.stallMaxMs, e.longStallMaxMs) + 2 * _ir + e.handshakeDeadlineMs + 60000;
}
function en(e, n, r) {
  let {
      uptimeMs: uptimeMs_2,
      resumeNeverOpened = !1,
      stalled = !1
    } = r,
    {
      rewatchTiming: l
    } = e,
    b = e.supervisors.get(n);
  if (!b || b.stopped) return;
  if (te().durable.stopLatches.isStopped(n)) {
    if (c("artifact_live_subscribe", "stop_latched"), resumeNeverOpened) he(e, b, "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed", "could not connect", {
      advice: "tell the user, and call resume_replies again only if they still want auto-replies resumed"
    });else dt(e, b);
    return;
  }
  if (ro(e, b)) {
    g("artifact_live_subscribe", {
      idle_retired: !0
    }), he(e, b, io(e, b), "idle", {
      advice: advice,
      passive: !0
    });
    return;
  }
  let w = !1,
    S = !1;
  if (stalled) {
    let R = Date.now();
    if (b.stalledSince === void 0 || b.lastStalledAt === void 0 || b.stallOutAfterMs === void 0 || R - b.lastStalledAt > ao(l)) {
      b.stalledSince = R, b.stallOutAfterMs = l.maxStallMs + Math.round(Math.random() * l.stallOutJitterMs);
      let http_status_2 = r.httpStatus ?? gBe(r.closeCode)?.status;
      c("artifact_live_subscribe", "stall_run_started", {
        boot: r.closeCode === void 0,
        ...(http_status_2 !== void 0 && {
          http_status: http_status_2
        })
      });
    } else S = !0;
    b.lastStalledAt = R, w = R - b.stalledSince >= b.stallOutAfterMs;
  } else if (b.stalledSince = void 0, b.lastStalledAt = void 0, b.stallOutAfterMs = void 0, uptimeMs_2 >= l.minUptimeMs) b.consecutiveFailures = 0;else if (r.reuseRefused !== !0) b.consecutiveFailures++;
  if (b.consecutiveFailures > l.maxConsecutiveFailures || w) {
    if (w) c("artifact_live_subscribe", "rewatch_gave_up", {
      stalled: !0
    });else c("artifact_live_subscribe", "rewatch_gave_up");
    he(e, b, "the live connection kept failing and reconnecting has stopped", Gr, {
      advice: advice_2,
      passive: !0
    });
    return;
  }
  let leaseMode = kve(),
    longStall = stalled && S && (gBe(r.closeCode)?.cfMitigated === !0 || !leaseMode || b.lease === void 0 || !Xqo(b.lease, l, te().accountEpoch, Date.now() + l.stallMinMs)),
    spread = uptimeMs_2 > 0 && uptimeMs_2 >= l.minUptimeMs && r.closeCode !== void 0 && !(r.expired === !0 && b.transport !== "sync"),
    W = Jii({
      timing: l,
      consecutiveFailures: b.consecutiveFailures,
      leaseMode: leaseMode,
      stalled: stalled,
      longStall: longStall,
      spread: spread
    });
  if (leaseMode && spread && r.expired !== !0) b.spreadReconnect = !0;
  if (b.timer !== void 0) clearTimeout(b.timer);
  b.timer = setTimeout(Er, W, e, n), b.timer.unref?.(), b.nextRewatchAt = Date.now() + W;
}
function he(e, n, r, s, {
  advice: advice_3 = "watch it again if you still need that",
  passive = !1
} = {}) {
  if (e.supervisors.get(n.slug) === n) {
    if (ee(e, n.slug), !te().durable.stopLatches.isStopped(n.slug)) {
      if (Vr(e, n.slug, "ended", s), n.autoReactWiring !== void 0) import("B:/~BUN/root/chunk-1dv8fbf5.js").then(w => w.handBackTakenOverSlug(n.slug));
    }
  } else TNn(n);
  let resumeAnnounce = n.resumeAnnounce;
  if (resumeAnnounce !== void 0) n.resumeAnnounce = void 0, resumeAnnounce.onGiveUp();
  if (n.armedVia === "mcp_write") return;
  let displayName = b6e(() => n.autoReactWiring?.title, n.url);
  ll({
    value: zi({
      taskType: A5,
      summary: Xt(jSi(displayName, s)),
      body: `
<event>${Xt(`Watch on ${n.url} ended \u2014 ${r}. This session no longer keeps track of new versions of it; ${advice_3}.`)}</event>`
    }),
    mode: "task-notification",
    ...(passive && {
      passive: !0
    }),
    priority: "next",
    origin: {
      kind: "task-notification",
      source: A5,
      slug: n.slug,
      displayName: displayName,
      watchEnded: !0
    },
    agentId: st()
  });
}
function dt(e, n, r = "watching this artifact was stopped earlier in this session") {
  n.resumeAnnounce = void 0, he(e, n, r, "stopped", {
    advice: "do not watch it again unless the user asks you to"
  });
}
function X(e, n, r, reason_2, h, {
  unavailable = !1,
  httpStatus: httpStatus
} = {}) {
  return tn(e, n, r, {
    unavailable: unavailable,
    httpStatus: httpStatus
  }), Lo(e, n, r, reason_2, h), {
    outcome: "skipped",
    reason: reason_2,
    ...(unavailable && {
      unavailable: !0
    }),
    ...(unavailable && httpStatus !== void 0 && {
      httpStatus: httpStatus
    })
  };
}
function tn(e, n, r, {
  unavailable: s = !1,
  httpStatus: httpStatus_2
} = {}) {
  if (r) return;
  let d = e.supervisors.get(n);
  if (d !== void 0 && !d.stopped && d.timer === void 0) en(e, n, {
    uptimeMs: 0,
    stalled: s,
    ...(httpStatus_2 !== void 0 && {
      httpStatus: httpStatus_2
    })
  });
}
async function Er(e, n) {
  let r = e.supervisors.get(n);
  if (!r || r.stopped) return;
  if (r.timer = void 0, te().durable.stopLatches.isStopped(n)) {
    c("artifact_live_subscribe", "stop_latched"), dt(e, r);
    return;
  }
  if (r.autoReactWiring !== void 0 && mb(n) && !CS(n)) delete r.autoReactWiring;
  g("artifact_live_subscribe", {
    rewatch_attempt: !0
  });
  let s = await pe(e, {
    slug: r.slug,
    url: r.url,
    getKnownVer: r.getKnownVer,
    ownPublishes: r.ownPublishes,
    context: r.context,
    signal: r.abort.signal,
    machineArm: !0,
    seedKnownVerFromBoot: !0,
    ...(r.carriedVer !== void 0 && {
      seedSurfacedVer: r.carriedVer
    }),
    ...(r.autoReactWiring !== void 0 && {
      autoReactWiring: r.autoReactWiring
    })
  });
  if (s.outcome === "skipped" && s.reason === "stop_latched") return;
  if (r.stopped || e.supervisors.get(n) !== r) {
    if (s.outcome === "skipped") tn(e, n, void 0, {
      unavailable: s.unavailable === !0,
      httpStatus: s.httpStatus
    });
    return;
  }
  if (s.outcome === "skipped") if (s.reason === "boot_failed" || s.reason === "ws_open_error" || s.reason === "sync_unavailable") r.lastFailure = s.reason, en(e, n, {
    uptimeMs: 0,
    stalled: s.unavailable === !0,
    ...(s.httpStatus !== void 0 && {
      httpStatus: s.httpStatus
    })
  });else c("artifact_live_subscribe", `rewatch_stopped_${s.reason}`), he(e, r, y6e(s.reason) ?? s.reason, on[s.reason] ?? Kr, Do(s.reason));
}
async function uo(e, slug_12) {
  let r = e.supervisors.get(slug_12),
    s = r?.lease;
  if (!kve() || r === void 0 || r.stopped || s === void 0 || s.probed) return;
  s.probed = !0;
  let h;
  try {
    h = await Qvn({
      slug: slug_12,
      env: ss()
    }, r.abort.signal, {
      agentPeer: ct(slug_12),
      syncLive: ct(slug_12),
      watchBoot: !0,
      credentials: r.context.credentials
    });
  } catch {
    return;
  }
  if (e.supervisors.get(slug_12) !== r || r.stopped) return;
  let d = h.err === null ? h.assetToken === void 0 ? "public_outside_org" : void 0 : h.status === 404 ? "not_found" : ZY(h) ? "other_org" : void 0;
  if (d !== void 0) {
    c("artifact_live_subscribe", `read_stopped_${d}`), he(e, r, y6e(d) ?? d, on[d] ?? d, {
      advice: _6e(d)
    });
    for (let w of Object.values(r.context.taskRegistry.all())) if (GG(w) && w.status === "running" && w.frameLive?.slug === slug_12) Dk(w.id, r.context.taskRegistry, {
      quiet: !0
    });
    return;
  }
  if (h.err === null && yir(h.data) !== void 0) {
    g("artifact_live_subscribe", {
      read_refused_boot_ok: !0
    });
    return;
  }
  let l = h.err === null ? "tokenless" : h.status ?? h.errorCode;
  if (c("artifact_live_subscribe", `read_refused_boot_${l}`), (l === "tokenless" || typeof l === "number" && l < 500 && l !== 408 && l !== 429) && r.lease === s) delete r.lease, delete r.renewable;
}
function Tr(e) {
  return Y4r(new URL(`/edge-api/frame-live/${e}/ws`, UJi()));
}
var co = 8;
function lo(e) {
  let {
      slug: slug_13,
      url: url_3,
      ownPublishes: ownPublishes,
      getKnownVer: getKnownVer,
      autoReact: autoReact,
      onSurfaced: onSurfaced
    } = e,
    b = e.surfacedVers ?? [];
  function w(R) {
    if (b.push(R), b.length > co) b.shift();
  }
  if (e.seedSurfacedVer !== void 0 && !b.includes(e.seedSurfacedVer)) w(e.seedSurfacedVer);
  let S = $Oe(FOe, HOe),
    y = !1,
    C = !1;
  function comment() {
    if (Cr(slug_13), msi(slug_13), autoReact && dx()) jke({
      slug: slug_13,
      url: url_3,
      env: autoReact.env,
      tool: autoReact.tool,
      context: autoReact.context,
      ...(autoReact.publishTranscript !== void 0 && {
        publishTranscript: autoReact.publishTranscript
      }),
      ...(autoReact.getWiring !== void 0 && {
        getWiring: autoReact.getWiring
      }),
      abort: autoReact.abort,
      notify: autoReact.notify,
      ...(autoReact.getTitle !== void 0 && {
        getTitle: autoReact.getTitle
      }),
      ...(autoReact.onReadRefused !== void 0 && {
        onReadRefused: autoReact.onReadRefused
      })
    });
  }
  function ver(R, T) {
    if (!R || !GM.test(R)) return;
    if (e.presenceOnly?.()) return;
    if (JXo(slug_13, R), b.includes(R)) return;
    let P = T === "sync" && {
      via_sync: !0
    };
    if (nEn(ownPublishes, slug_13, R)) {
      g("artifact_live_subscribe", {
        ...(y ? {
          suppressed_own: !0
        } : {
          suppressed_catch_up: !0
        }),
        ...P
      }), y = !0;
      return;
    }
    if (R === getKnownVer()) return;
    if (Plt(ownPublishes, slug_13)) {
      g("artifact_live_subscribe", {
        suppressed_in_flight: !0,
        ...P
      });
      return;
    }
    if (!S.tryConsume()) {
      if (!C) C = !0, c("artifact_live_subscribe", "ver_rate_suppressed", {
        ...P
      });
      return;
    }
    C = !1, w(R);
    try {
      onSurfaced?.(R);
    } catch {}
    g("artifact_live_subscribe", {
      surfaced: !0,
      passive: VYt === "passive",
      ...P
    });
  }
  return {
    comment: comment,
    ver: ver
  };
}
function fo(e) {
  return n => {
    if (!n.startsWith("{")) return null;
    let r;
    try {
      r = ds(n);
    } catch {
      return null;
    }
    if (r.kind === "comment") return e.comment(), null;
    if (r.kind === "summon") return null;
    if (typeof r.ver === "string") e.ver(r.ver, "live");
    return null;
  };
}
var po = /^\d{1,15}$/;
function Ve(e) {
  return te().liveDocWatch.headSinks.get(e);
}
function Cr(e) {
  let live_4 = te().live,
    r = live_4.supervisors.get(e);
  if (r !== void 0 && !r.stopped && r.armedVia !== "mcp_write" && !live_4.inFlightSubscribes.has(e)) r.lastActivityAt = Date.now();
}
function mo(e, n, r) {
  return s => {
    if (s.charCodeAt(0) !== 123) return null;
    let h;
    try {
      h = ds(s);
    } catch {
      return null;
    }
    let d = rt().safeParse(h);
    if (!d.success) return null;
    let {
      kind: kind_2,
      actor: actor_2,
      payload: payload_2
    } = d.data;
    if (actor_2 !== void 0 || d.data.slug !== void 0 && d.data.slug !== n) return null;
    switch (kind_2) {
      case "ctrl:comment":
        return e.comment(), null;
      case "ctrl:invalidate":
        {
          let S = Ht().safeParse(payload_2);
          if (!S.success) return null;
          if (S.data.tag === Kt || S.data.tag === Bt) e.ver(S.data.ver, "sync");else if (S.data.tag === ur && po.test(S.data.ver)) Cr(n), Ve(n)?.seq(Number(S.data.ver));
          return null;
        }
      case "ctrl:token_refresh":
        {
          let S = Ut().safeParse(payload_2);
          if (S.success && ve(S.data.cap)) r.onTokenRefresh(S.data.cap, S.data.exp);
          return null;
        }
      case "ctrl:token_refresh_declined":
        {
          let S = De().safeParse(payload_2);
          if (S.success && S.data.reason === Nt) r.onExpiryAnnounced();
          return null;
        }
      case "ctrl:comment_hint":
        {
          let S = cr().safeParse(payload_2);
          if (S.success) r.onCommentHint(S.data.commentsEmpty, S.data.readAtMs);
          return null;
        }
      default:
        return null;
    }
  };
}
function xr(e, n, r, s, h, d) {
  if (!d(e, r)) return "dead";
  return s && (mb(n) ? h && (e.autoReactArmed !== !0 || !CS(n) || vBe(n)) : e.autoReactArmed !== !0) ? "replace" : "keep";
}
function ho(e, n) {
  return oqt(e.id) && RCt(e, n);
}
function go(e, n, r, s) {
  let h = Date.now(),
    d = null;
  for (let l of Object.values(e.taskRegistry.all())) {
    if (!GG(l) || l.status !== "running" || l.frameLive?.slug !== n) continue;
    let b = xr(l, n, h, r, s, RCt);
    if (b !== "dead") {
      if (b === "replace") {
        Dk(l.id, e.taskRegistry, {
          quiet: !0
        });
        continue;
      }
      d = l.id;
      continue;
    }
    Dk(l.id, e.taskRegistry, {
      quiet: !0,
      connectionLost: !0
    });
  }
  return d;
}
function Lr(e, n) {
  return Object.values(e.all()).some(item => GG(item) && item.status === "running" && item.frameLive?.slug === n);
}
function bo(e) {
  return VYr(e, dx, {
    includeStopLatched: !0
  });
}
function bbn(e) {
  return VYr(e, dx);
}
function OOe(e, n) {
  eZn(n?.storageV5), zhe(), sqt();
  let live_5 = te().live,
    s = n?.durable !== !1,
    h = 0,
    d = new Set();
  for (let l of Object.values(e.all())) if (bo(l)) {
    let b = l.autoReactSlug !== void 0 && mb(l.autoReactSlug) && (!CS(l.autoReactSlug) || VG(l.autoReactSlug));
    if (s) {
      if (Dk(l.id, e, {
        quiet: !0,
        userStop: !0
      }), l.autoReactSlug !== void 0) xbn(l.autoReactSlug), d.add(l.autoReactSlug);
    } else if (l.autoReactSlug !== void 0) d.add(l.autoReactSlug);
    if (!b && !(l.autoReactSlug !== void 0 && !s && mb(l.autoReactSlug))) {
      if (h++, !s && l.autoReactSlug !== void 0) ACt(l.autoReactSlug), a$(live_5, l.autoReactSlug);
    }
  }
  for (let l of live_5.supervisors.values()) {
    if (l.autoReactWiring === void 0) continue;
    if (s) delete l.autoReactWiring;
    if (s && dx() && (!mb(l.slug) || d.has(l.slug))) if (Lr(e, l.slug) || live_5.inFlightSubscribes.has(l.slug)) Zi(live_5, l.slug, e);else ee(live_5, l.slug), oYr(l.slug, l.context.storageV5);
    if (!d.has(l.slug) && dx() && !mb(l.slug)) if (d.add(l.slug), h++, s) xbn(l.slug), Xbn(l.slug);else ACt(l.slug);
  }
  if (s) aZn({
    storageV5: n?.storageV5
  });else if (h > 0) MOe({
    flush: !0,
    storageV5: n?.storageV5
  });
  return h;
}
function nn(e, n, r, s) {
  if (!CS(n) || vBe(n) || !dx()) return null;
  let h = Wr(e, n);
  if (h === void 0) return null;
  s?.();
  let {
    live: live_6,
    wakes: wakes
  } = te();
  rer(n), wakes.liftedAtScanGeneration.set(n, wakes.scanGeneration), a$(live_6, n);
  let lastWakeArgs = UOe(n).lastWakeArgs;
  if (!oqt(h.id) || lastWakeArgs === null) return "cleared";
  return r?.(lastWakeArgs), jke({
    ...lastWakeArgs,
    seed: !1,
    confirm: void 0,
    confirmBase: void 0,
    confirmAfter: void 0,
    reentry: void 0,
    idlePass: void 0,
    suppressSummonStatus: void 0
  }), "lifted";
}
function Wr(e, n) {
  return Object.values(e.all()).find(item => GG(item) && item.status === "running" && item.autoReactArmed === !0 && item.autoReactSlug === n && RCt(item));
}
function _o(e, n) {
  if (n.ownWords) {
    let notice_latch_released = dai(s => Csi(s) || So(e, Xws(s)));
    if (notice_latch_released > 0) g("artifact_live_subscribe", {
      notice_latch_released: notice_latch_released
    });
  }
  return wo(e);
}
function So(e, n) {
  if (n === void 0) return !1;
  return Object.values(e.all()).some(item => item.startTime >= n && vo(item));
}
function vo(e) {
  let n = e.status === "running" || e.status === "pending";
  if (e.type === "local_bash" || xIt(e)) return n;
  if (!R9e.has(e.type) || e.type === "in_process_teammate") return !1;
  let r = e.status === "completed" && "keepaliveReasons" in e && e.keepaliveReasons instanceof Set && [...e.keepaliveReasons].some(item => item !== "flag:idle-window"),
    s = "resuming" in e && e.resuming === !0;
  return n || r || s;
}
function wo(e) {
  let {
    wakes: wakes_2
  } = te();
  wakes_2.humanTurnAtScanGeneration = wakes_2.scanGeneration;
  let unpaused_on_turn = 0;
  for (let s of [...wakes_2.sweptSlugs]) if (nn(e, s) !== null) unpaused_on_turn++;
  if (unpaused_on_turn > 0) g("artifact_live_subscribe", {
    unpaused_on_turn: unpaused_on_turn
  });
  return unpaused_on_turn;
}
function Sbn() {
  return te().builtInArtifactHiddenForMcp ? aYr() && dx() : dx() && aYr();
}
function IOe(e, n) {
  let r = [],
    s,
    h = () => s ??= CB(),
    d = te(),
    userDisarmed = d.autoReact.userDisarmed;
  for (let b of Object.values(e.taskRegistry.all())) {
    if (!GG(b) || b.status !== "running" || b.frameLive === void 0 || n !== void 0 && b.frameLive.slug !== n) continue;
    let w = d.live.supervisors.get(b.frameLive.slug);
    r.push({
      slug: b.frameLive.slug,
      taskId: b.id,
      since: b.frameLive.watchedSince,
      explicit: w?.explicit ?? b.frameLive.explicit,
      connected: RCt(b),
      tokenExpiresAt: w?.lease?.expMs ?? b.frameLive.armedAt + (w?.transport === "sync" ? XZn : UYr),
      armedVia: w?.armedVia ?? b.frameLive.armedVia,
      autoReply: b.autoReactArmed !== !0 ? hb(b.frameLive.slug) ? userDisarmed ? "disarmed" : h() ? "stopped" : "none" : "none" : userDisarmed ? "disarmed" : !h() ? "none" : b.autoReactSlug !== void 0 && hb(b.autoReactSlug) ? CS(b.autoReactSlug) ? VG(b.autoReactSlug) ? "yielded" : "paused" : "stopped" : Ao(b.frameLive.slug)
    });
  }
  return r.sort((itemA, itemB) => itemA.since - itemB.since);
}
function Ao(e) {
  let n = te().autoReact.artifacts.get(e),
    r = n?.lastProbeDeniedBy ?? null;
  if (r !== null) return r === "denied_by_auto_mode" ? "declined" : "denied";
  return n?.lastReplyDeclinedByAutoMode === !0 ? "declined" : "armed";
}
function U4r(e, n) {
  let {
      live: live_7,
      autoReact: autoReact_2,
      wakes: wakes_3
    } = te(),
    d = [],
    l,
    b = () => l ??= CB();
  for (let slug_14 of wakes_3.stoppedSlugs) {
    if (n !== void 0 && slug_14 !== n) continue;
    if (Lr(e.taskRegistry, slug_14) || live_7.inFlightSubscribes.has(slug_14) || !autoReact_2.userDisarmed && !b()) continue;
    let S = live_7.supervisors.get(slug_14),
      y = S !== void 0 && !S.stopped ? S : void 0;
    d.push({
      slug: slug_14,
      ...(y !== void 0 && {
        since: y.watchedSince,
        explicit: y.explicit,
        armedVia: y.armedVia
      }),
      stopKind: CS(slug_14) ? VG(slug_14) ? "yielded" : "interrupt" : "user",
      autoReply: autoReact_2.userDisarmed ? "disarmed" : "stopped"
    });
  }
  return d.sort((itemA, itemB) => (itemA.since ?? Number.POSITIVE_INFINITY) - (itemB.since ?? Number.POSITIVE_INFINITY));
}
function ut(e, n, {
  forPublish = !1
} = {}) {
  let {
      supervisors: supervisors
    } = e,
    h = [];
  for (let row of IOe(n)) {
    let l = supervisors.get(row.slug),
      b = Mr(e, row, n);
    if (b === "explicit" || b === "most_recent_publish") continue;
    if (b === "auto_reply") {
      if (!forPublish || ksi(row.slug)) continue;
      h.push({
        row: row,
        tier: 3
      });
      continue;
    }
    h.push({
      row: row,
      tier: l === void 0 || l.stopped ? 0 : l.armedVia === "mcp_write" ? 1 : 2
    });
  }
  return h.sort((itemA, itemB) => {
    if (itemA.tier !== itemB.tier) return itemA.tier - itemB.tier;
    let b = supervisors.get(itemA.row.slug),
      w = supervisors.get(itemB.row.slug),
      S = b && !b.stopped ? b.lastActivityAt : 0,
      y = w && !w.stopped ? w.lastActivityAt : 0;
    return S - y || itemA.row.since - itemB.row.since;
  }).map(item => item.row);
}
function Ir(e, n, r, s) {
  let h = e.supervisors.get(n.slug),
    d = Mr(e, n, r) === "auto_reply";
  if (Dk(n.taskId, r.taskRegistry, {
    quiet: !0
  }), d && !VG(n.slug)) xit(n.slug, {
    storageV5: h?.context.storageV5 ?? FKo()
  });
  if (h !== void 0 && !h.stopped) he(e, h, s?.why ?? `this session reached its limit of ${pR} artifact watches and made room to watch a newer one${d ? "; it was auto-replying to comments, and that stops until its next publish" : ""}`, s?.shortReason ?? "made room for a newer watch", s !== void 0 ? {
    advice: advice_2,
    passive: !0
  } : d ? {
    advice: "do not watch it again unless the user asks"
  } : void 0);else ee(e, n.slug);
  g("artifact_live_subscribe", {
    evicted_least_active: !0,
    ...(d && {
      evicted_autoreply: !0
    })
  });
}
function Or(e, n) {
  let r = e.supervisors.get(n);
  if (r === void 0 || r.stopped) return null;
  if (r.explicit) return "explicit";
  if (kr(e, r)) return "most_recent_publish";
  return r.autoReactWiring !== void 0 && dx() && (!mb(n) || CS(n)) ? "auto_reply" : null;
}
function Ar(e, n) {
  return Or(e, n) !== null;
}
function Mr(e, n, r) {
  let s = e.supervisors.get(n.slug);
  if (s !== void 0 && !s.stopped) return Or(e, n.slug);
  let h = r.taskRegistry.all()[n.taskId];
  return n.explicit ? "explicit" : bbn(h) ? "auto_reply" : null;
}
function yo(e, n) {
  let r = ut(e, n);
  if (r.length === 0) return !1;
  return Ir(e, r[0], n, {
    why: `this session reached its limit of ${pR} artifact watches and made room for a protected watch to reconnect`,
    shortReason: shortReason
  }), !0;
}
function fKo() {
  let live_8 = te().live;
  live_8.handoffGeneration += 1, live_8.bootingWiredArms.clear(), Vnt(Obn(vG())), MOe({
    flush: !0
  }), fsi(), zhe(), sqt();
  for (let n of [...live_8.supervisors.keys()]) ee(live_8, n);
  live_8.armOutcomes.clear(), live_8.announcedArmFailures.clear(), uai();
}
function Ro(e) {
  let live_9 = te().live;
  live_9.handoffGeneration += 1, zhe(), sqt();
  let r = 0;
  for (let d of [...live_9.supervisors.values()]) {
    if (!d.stopped) r++;
    if (d.autoReactWiring !== void 0) {
      let {
        slug: slug_15
      } = d;
      import("B:/~BUN/root/chunk-1dv8fbf5.js").then(b => b.handBackTakenOverSlug(slug_15));
    }
    delete d.autoReactWiring, ee(live_9, d.slug);
    for (let l of Object.values(d.context.taskRegistry.all())) {
      if (!GG(l) || l.status !== "running" || l.frameLive?.slug !== d.slug) continue;
      Dk(l.id, d.context.taskRegistry, {
        quiet: !0
      });
    }
  }
  if (live_9.armOutcomes.clear(), live_9.announcedArmFailures.clear(), r === 0) return r;
  let s = `${r} artifact ${r === 1 ? "watch" : "watches"}`,
    h = e === "signed_out" ? "Those watches were opened as the account that signed out: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks." : "Those watches were opened as the previous account: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
  return ll({
    value: zi({
      taskType: A5,
      summary: Xt(`Stopped watching ${s} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`),
      body: `
<event>${Xt(h)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: {
      kind: "task-notification",
      source: A5
    },
    agentId: st()
  }), r;
}
function pKo(e, n, r) {
  let {
    wasWatching: s
  } = Pr(e, n);
  if (te().live.nonEditorSlugs.delete(e), r !== void 0) {
    let repliesConsent = te().live.repliesConsent,
      d = repliesConsent.outstanding.get(e);
    if (d !== void 0) {
      if (repliesConsent.outstanding.delete(e), d.allowed !== !0) repliesConsent.declined.set(e, {
        namingMessages: d.namingMessages
      });
    }
    repliesConsent.approved.delete(e);
  }
  return g("artifact_live_subscribe", {
    unwatched: s
  }), {
    wasWatching: s
  };
}
function mKo(e, n) {
  oYr(e, n.storageV5);
  let {
    wasWatching: wasWatching_3
  } = Pr(e, n);
  if (wasWatching_3) g("artifact_live_subscribe", {
    unwatched: !0,
    artifact_deleted: !0
  });
}
function Pr(slug_16, n) {
  let live_10 = te().live;
  eZn(n.storageV5), live_10.armOutcomes.delete(slug_16), Zt(live_10, slug_16), gsi(slug_16);
  let s = live_10.supervisors.get(slug_16)?.autoReactWiring !== void 0,
    {
      wasWatching: wasWatching_4
    } = Rr({
      slug: slug_16,
      taskRegistry: n.taskRegistry,
      announce: !1,
      killRow: d => {
        let l = d.autoReactArmed === !0;
        if (Dk(d.id, n.taskRegistry, l ? {
          quiet: !0,
          userStop: !0,
          modelOrigin: !0
        } : {
          quiet: !0
        }), l && d.autoReactSlug !== void 0) xbn(d.autoReactSlug);
      }
    });
  if (s) xbn(slug_16);
  return {
    wasWatching: wasWatching_4
  };
}
async function hKo(e) {
  let {
    slug: slug_17,
    url: url_4,
    publishContext: publishContext,
    getKnownVer: getKnownVer_2,
    context: context_2,
    tool: tool,
    commentVerbsInSchema: commentVerbsInSchema
  } = e;
  if (!wQ(publishContext)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  let live_11 = te().live,
    S = tool !== void 0 && commentVerbsInSchema === !0 && CB(),
    degraded = !S ? void 0 : !BRe(context_2.messages) ? "unattended_turn" : !F4r(context_2.messages, slug_17) || !sT(context_2.messages) ? "not_named_by_user" : live_11.repliesConsent.declined.has(slug_17) ? "declined" : live_11.nonEditorSlugs.has(slug_17) ? "not_editor" : e.repliesApproved !== !0 ? "not_approved" : void 0,
    C = Dr({
      tool: S && degraded === void 0 ? tool : void 0,
      commentVerbsInSchema: commentVerbsInSchema,
      context: context_2
    }),
    pickUpRecentSummons = C.autoReactWiring !== void 0,
    title_2 = live_11.supervisors.get(slug_17)?.autoReactWiring?.title,
    R = await pe(live_11, {
      slug: slug_17,
      url: url_4,
      getKnownVer: getKnownVer_2,
      ownPublishes: context_2.artifactRegistries.ownPublishes,
      ...ke(context_2),
      ...C,
      pickUpRecentSummons: pickUpRecentSummons,
      ...(C.autoReactWiring !== void 0 && {
        autoReactWiring: {
          ...C.autoReactWiring,
          title: title_2
        },
        editorGatedWiring: !0
      })
    });
  if (pickUpRecentSummons && R.outcome === "armed" && R.degraded === void 0 && !(mb(slug_17) && !CS(slug_17)) && Ne()) lt(slug_17, {
    title: live_11.supervisors.get(slug_17)?.autoReactWiring?.title ?? title_2,
    storageV5: context_2.storageV5
  });
  if (degraded !== void 0 && R.outcome === "armed") return {
    ...R,
    degraded: degraded
  };
  if (degraded !== void 0 && R.outcome === "already_watching") return {
    ...R,
    degraded: degraded
  };
  return R;
}
function gKo(e) {
  return te().live.nonEditorSlugs.has(e);
}
function yKo(e, n, r, s) {
  let repliesConsent_2 = te().live.repliesConsent,
    d = repliesConsent_2.outstanding.get(n);
  if (e === void 0) return {
    declined: repliesConsent_2.declined.has(n) || r !== void 0 && d !== void 0 && d.toolUseId !== r && d.allowed !== !0,
    approved: !1
  };
  if (r !== void 0 && d !== void 0 && d.toolUseId !== r) {
    if (repliesConsent_2.outstanding.delete(n), d.allowed !== !0) repliesConsent_2.declined.set(n, {
      namingMessages: d.namingMessages
    });
  }
  let l = repliesConsent_2.declined.get(n),
    b = ko(s, n);
  if (l !== void 0 && b !== null && !l.namingMessages.has(b)) repliesConsent_2.declined.delete(n);
  return {
    declined: repliesConsent_2.declined.has(n),
    approved: repliesConsent_2.approved.has(n)
  };
}
function ko(e, n) {
  let r = qt(e, n);
  return r >= 0 ? e[r]?.uuid ?? null : null;
}
function B4r(e, n, toolUseId, s, h = !1) {
  if (e === void 0) return;
  te().live.repliesConsent.outstanding.set(n, {
    toolUseId: toolUseId,
    ...(h && {
      allowed: !0
    }),
    namingMessages: new Set(zt(s, n).flatMap(item => s[item]?.uuid !== void 0 ? [s[item].uuid] : []))
  });
}
function _Ko(e, n) {
  if (e === void 0 || n === void 0) return;
  let {
    outstanding: outstanding
  } = te().live.repliesConsent;
  for (let [slug_18, h] of outstanding) if (h.toolUseId === n) return outstanding.delete(slug_18), {
    slug: slug_18
  };
  return;
}
function bKo(e, n, r, s) {
  let repliesConsent_3 = te().live.repliesConsent;
  if (e === void 0) return !1;
  let d = n?.slug === r;
  if (d && s) repliesConsent_3.approved.add(r), repliesConsent_3.declined.delete(r);
  return d || repliesConsent_3.approved.has(r);
}
function wbn(e) {
  return te().live.repliesConsent.declined.has(e);
}
function SKo(e) {
  let {
      declined: declined,
      outstanding: outstanding_2
    } = te().live.repliesConsent,
    s = outstanding_2.get(e);
  return declined.has(e) || s !== void 0 && s.allowed !== !0;
}
function Eo(e, n) {
  let r = e.mcpWriteSlugs.get(n);
  if (r === void 0) r = {
    arming: !1
  }, e.mcpWriteSlugs.set(n, r);
  return r;
}
var To = new Set(["not_found", "no_subscription_token", "publish_context", "invalid_slug", "remote"]),
  Co = 5000;
function yr(e, n) {
  oXr(e, n), setTimeout((r, s) => sXr(r, s), Co, e, n).unref?.();
}
async function yya(slug_19, n, getKnownVer_3) {
  try {
    if (!hr.test(slug_19)) return;
    let s = te(),
      live_12 = s.live;
    if (live_12.disposed) return;
    let d = live_12.supervisors.get(slug_19),
      ownPublishes_2 = n.artifactRegistries.ownPublishes;
    if (d !== void 0 && !d.stopped) {
      if (yr(ownPublishes_2, slug_19), live_12.inFlightSubscribes.has(slug_19)) return;
      if (d.lastActivityAt = Date.now(), d.timer !== void 0 && d.consecutiveFailures === 0 && d.stalledSince === void 0) clearTimeout(d.timer), d.timer = void 0, d.nextRewatchAt = void 0, Er(live_12, slug_19);
      return;
    }
    let b = Eo(live_12, slug_19);
    if (live_12.inFlightSubscribes.has(slug_19)) {
      if (b.arming) yr(ownPublishes_2, slug_19);
      return;
    }
    let {
      publishContext: publishContext_2
    } = vve({
      agentId: n.agentId,
      agentType: n.agentContext?.agentType,
      isNonInteractiveSession: n.options.isNonInteractiveSession
    });
    if (!wQ(publishContext_2)) return;
    if (b.declinedEpoch === s.accountEpoch) return;
    let accountEpoch = s.accountEpoch;
    b.arming = !0, await pe(live_12, {
      slug: slug_19,
      url: Bn({
        slug: slug_19,
        env: ss()
      }),
      getKnownVer: getKnownVer_3,
      ownPublishes: ownPublishes_2,
      ...ke(n),
      seedKnownVerFromBoot: !0,
      mcpWrite: !0
    }).then(y => {
      if (b.arming = !1, y.outcome === "skipped" && To.has(y.reason)) b.declinedEpoch = accountEpoch;
    }, y => {
      b.arming = !1, a(y);
    });
  } catch (error) {
    a(error);
  }
}
async function wKo(e) {
  let {
    slug: slug_20,
    url: url_5,
    publishContext: publishContext_3,
    getKnownVer: getKnownVer_4,
    context: context_3
  } = e;
  if (te().autoReact.userDisarmed) return {
    outcome: "refused",
    reason: "session_disarmed"
  };
  if (!wQ(publishContext_3)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  if (!e.commentVerbsInSchema) return {
    outcome: "skipped",
    reason: "comments_off"
  };
  if (!mb(slug_20)) return {
    outcome: "skipped",
    reason: "not_stopped"
  };
  if (!CB()) return {
    outcome: "skipped",
    reason: "not_enabled"
  };
  let live_13 = te().live;
  if (context_3.abortController.signal.aborted) return {
    outcome: "skipped",
    reason: "cancelled"
  };
  let taskId_3 = Wr(context_3.taskRegistry, slug_20)?.id,
    w = nn(context_3.taskRegistry, slug_20, S => {
      hD(slug_20), S.notify({
        summary: Veo(b6e(S.getTitle, url_5)),
        detail: `Auto-replies on artifact ${url_5} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop). ${Jt}`
      });
    }, () => {
      let S = live_13.supervisors.get(slug_20);
      if (S !== void 0 && !S.stopped) S.autoReactWiring = Re(S.autoReactWiring, {
        tool: e.tool,
        commentVerbsInSchema: e.commentVerbsInSchema,
        context: context_3,
        title: S.autoReactWiring?.title
      }, !0);
    });
  if (w !== null && taskId_3 !== void 0) {
    if (g("artifact_live_subscribe", {
      resumed_in_place: !0
    }), w === "cleared") te().wakes.pendingResumeDisclosure.add(slug_20);
    return {
      outcome: "armed",
      taskId: taskId_3,
      inPlace: w === "lifted",
      ...(w === "cleared" && {
        connecting: !0
      })
    };
  }
  return pe(live_13, {
    slug: slug_20,
    url: url_5,
    getKnownVer: getKnownVer_4,
    ownPublishes: context_3.artifactRegistries.ownPublishes,
    ...ke(context_3),
    seedKnownVerFromBoot: !0,
    autoReactWiring: {
      tool: e.tool,
      commentVerbsInSchema: e.commentVerbsInSchema,
      context: context_3,
      title: live_13.supervisors.get(slug_20)?.autoReactWiring?.title
    },
    userResumeWiring: !0,
    approvedRelatchGen: e.approvedRelatchGen
  });
}
function j4r(e, n) {
  let {
    live: live_14
  } = te();
  if (!live_14.inFlightSubscribes.has(e)) {
    n();
    return;
  }
  let s = live_14.armSettleWaiters.get(e) ?? [];
  s.push(n), live_14.armSettleWaiters.set(e, s);
}
function W4r(e) {
  let n = te().live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0;
}
async function kKo(e) {
  let {
    slug: slug_21,
    url: url_6,
    getKnownVer: getKnownVer_5,
    tool: tool_2,
    commentVerbsInSchema: commentVerbsInSchema_2,
    context: context_4
  } = e;
  if (tool_2 !== void 0 && wc()) NKo().catch(() => {
    return;
  });
  let b = te(),
    w = await pe(b.live, {
      slug: slug_21,
      url: url_6,
      getKnownVer: getKnownVer_5,
      ownPublishes: context_4.artifactRegistries.ownPublishes,
      ...ke(context_4),
      ...Dr({
        tool: tool_2,
        commentVerbsInSchema: commentVerbsInSchema_2,
        context: context_4
      })
    });
  if (tool_2 !== void 0 && commentVerbsInSchema_2 === !0 && w.outcome !== "skipped" && Ne()) lt(slug_21, {
    title: b.live.supervisors.get(slug_21)?.autoReactWiring?.title,
    storageV5: context_4.storageV5
  });
  return w;
}
function Dr(e) {
  let {
    tool: tool_3,
    commentVerbsInSchema: commentVerbsInSchema_3,
    context: context_5
  } = e;
  return {
    seedKnownVerFromBoot: !0,
    explicit: !0,
    pickUpRecentSummons: !0,
    ...(tool_3 !== void 0 && commentVerbsInSchema_3 === !0 && {
      autoReactWiring: {
        tool: tool_3,
        commentVerbsInSchema: commentVerbsInSchema_3,
        context: context_5
      }
    })
  };
}
async function hBe(e) {
  let {
    slug: slug_22,
    url: url_7,
    version: version,
    publishContext: publishContext_4,
    getKnownVer: getKnownVer_6,
    tool: tool_4,
    commentVerbsInSchema: commentVerbsInSchema_4,
    title: title_3,
    context: context_6
  } = e;
  if (tool_4 !== void 0 && wc()) NKo().catch(() => {
    return;
  });
  let ownPublishes_3 = context_6.artifactRegistries.ownPublishes,
    live_15 = te().live;
  if (version !== void 0) {
    t6t(ownPublishes_3, slug_22, version, {
      merged: !WIe(ownPublishes_3, slug_22, version)
    });
    let T = live_15.supervisors.get(slug_22);
    if (T !== void 0 && !T.stopped) T.lastActivityAt = Date.now();
    if (wQ(publishContext_4)) live_15.mostRecentPublishSlug = slug_22;
  }
  if (!wQ(publishContext_4)) return c("artifact_live_subscribe", "publish_context", {
    publish_context: f(publishContext_4)
  }), {
    outcome: "skipped",
    reason: "publish_context"
  };
  let G = tool_4 !== void 0 && commentVerbsInSchema_4 === !0,
    W = e.carriedPublishConsent !== !0 && e.resumedPublishConsent !== !0 && e.chainPublish !== !0 && e.adoptedPublish !== !0 && BRe(context_6.messages),
    R = await pe(live_15, {
      slug: slug_22,
      url: url_7,
      getKnownVer: getKnownVer_6,
      ownPublishes: ownPublishes_3,
      ...ke(context_6),
      ...(e.onOpen !== void 0 && e.onGiveUp !== void 0 && {
        onOpen: e.onOpen,
        onGiveUp: e.onGiveUp
      }),
      ...(e.seedKnownVerFromBoot === !0 && {
        seedKnownVerFromBoot: !0
      }),
      ...((e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0) && {
        requireEditor: !0
      }),
      ...(e.sessionResume === !0 && {
        sessionResume: !0
      }),
      ...(W && version !== void 0 && {
        freshPublish: !0
      }),
      ...(e.announceArmlessEnd === !0 && {
        announceArmlessEnd: !0
      }),
      ...(e.resumedPublishConsent === !0 && G && {
        pickUpRecentSummons: !0
      }),
      ...(G && {
        autoReactWiring: {
          tool: tool_4,
          commentVerbsInSchema: commentVerbsInSchema_4,
          context: context_6,
          title: title_3,
          ...(e.publishTranscript !== void 0 && {
            publishTranscript: e.publishTranscript
          })
        },
        ...(W && {
          freshPublishWiring: !0
        })
      })
    });
  if ((version !== void 0 || e.adoptedPublish === !0) && R.outcome !== "skipped") {
    let {
        autoReact: autoReact_3,
        wakes: wakes_4
      } = te(),
      ie = !G ? "bare_watch_comments_off" : autoReact_3.userDisarmed ? "bare_watch_session_disarmed" : !Ait() ? "bare_watch_autoreact_off" : mb(slug_22) && !W && !(CS(slug_22) && !vBe(slug_22) && wakes_4.humanTurnAtScanGeneration === wakes_4.scanGeneration) ? "bare_watch_slug_stopped" : void 0;
    if (ie !== void 0) c("artifact_live_subscribe", ie, {
      publish_context: f(publishContext_4)
    });
  }
  if (G && R.outcome !== "skipped" && !(R.outcome === "already_watching" && (e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0)) && !(R.outcome === "armed" && R.degraded !== void 0) && Ne()) lt(slug_22, {
    title: live_15.supervisors.get(slug_22)?.autoReactWiring?.title ?? title_3,
    storageV5: context_6.storageV5
  });
  return R;
}
function Ne() {
  return !te().autoReact.userDisarmed && Ait();
}
function lt(e, n) {
  if (te().builtInArtifactHiddenForMcp) {
    HKo(e, {
      storageV5: n.storageV5
    });
    return;
  }
  Msi(e, n);
}
function Qt(e, n, r) {
  return `live updates for artifact ${e} (${_bn(YQn(n, r)).task})`;
}
function ke(e) {
  return {
    context: zKt(e),
    signal: e.abortController.signal
  };
}
function jKt(e, n) {
  return () => Jle(e(), n);
}
function Fr(e) {
  if (!wve()) return {
    reason: "flag_off"
  };
  if (i.CLAUDE_CODE_REMOTE) return {
    reason: "remote"
  };
  return xo(Tr(e));
}
function ct(e) {
  return wve() && at(e) === null && !W1i(e);
}
function xo(e) {
  if (BJi()) return {
    reason: "cp_override"
  };
  let n = Ebn(e);
  if (n !== null) return {
    reason: "egress_denied",
    egressKind: n.kind
  };
  return null;
}
function vKo(e) {
  let {
      context: context_7,
      slug: slug_23,
      wantWiring: wantWiring,
      canClearLatch: canClearLatch
    } = e,
    d = Date.now();
  for (let l of Object.values(context_7.taskRegistry.all())) if (GG(l) && l.status === "running" && l.frameLive?.slug === slug_23 && xr(l, slug_23, d, wantWiring, canClearLatch, ho) === "keep") return !0;
  return !1;
}
function XQn(e) {
  if (te().durable.stopLatches.isStopped(e.slug)) return "stop_latched";
  if (!wQ(e.publishContext)) return "publish_context";
  return Fr(e.slug)?.reason ?? null;
}
var WKt = "auto-replies armed",
  z4r = "auto-replies paused by the user's interrupt (Ctrl+C or Stop) \u2014 the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)",
  G4r = "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) \u2014 that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks \u2014 the user asking is not itself the take-back); no comment notifications arrive here meanwhile",
  V4r = "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread",
  K4r = "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";
function Yt() {
  return aw() ? `; a comment on it sent to Claude reaches this session while this artifact's status row says ${WKt}, and plain comments never notify \u2014 read them with ${Wc('action "comments"', () => `the ${W8("comments")}`)} when asked` : "";
}
function y6e(e) {
  switch (e) {
    case "flag_off":
      return "the live-subscribe feature flag is off in this session's cached config, so this session does not keep track of new versions of this artifact published elsewhere";
    case "publish_context":
      return "only a main-loop session (interactive, SDK, or background) holds the watch, not a subagent, teammate, or print session";
    case "stop_latched":
      return "watching this artifact was stopped earlier in this session; do not retry on your own. If the user asks you to resume watching it, call the watch action (in permission modes that prompt, they confirm it there)";
    case "remote":
      return "remote sessions do not hold the watch";
    case "cp_override":
      return "the artifact control plane is overridden to a local stack, so the live edge is not reachable";
    case "egress_denied":
      return "network egress to the claude.ai edge is denied by policy, so this session does not keep track of new versions of this artifact published elsewhere";
    case "not_found":
      return "no such artifact for this account (it was deleted, or it has not been shared with the user)";
    case "other_org":
      return G3e;
    case "public_outside_org":
      return KYt;
    case "not_editor":
      return "a restored publish decision does not carry for an artifact this account cannot publish to";
    case "no_subscription_token":
      return "the control plane minted no live-channel credential for this artifact";
    case "boot_failed":
      return "the artifact could not be read right now (network or auth); try again later";
    case "watch_cap":
      return `this session already holds its maximum of ${pR} artifact watches and none could make room (each is a watch you requested, the artifact you most recently published, or one auto-replying to comments: a new publish can displace an idle one, a watch request cannot; or watch slots are still connecting); unwatch one first`;
    case "watch_cap_reconnect":
      return `this session was already holding its maximum of ${pR} artifact watches when this one tried to reconnect, and none of the other watches could make room`;
    case "invalid_slug":
      return "that is not an artifact this session can name";
    case "cancelled":
      return "the request was cancelled before the connection opened";
    case "ws_open_error":
      return "the live connection could not be opened from this environment";
    case "sync_unavailable":
      return "the live channel is not available to this session right now";
    default:
      return null;
  }
}
function kbn(e) {
  switch (e) {
    case "arming":
      return `Live subscription: arming in the background \u2014 not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${Yt()}.`;
    case "connected":
      return `Live subscription: already connected from earlier in this session \u2014 this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${Yt()}.`;
    case "publish_adopted":
      return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally \u2014 that session then keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${Yt()}.`;
    case "publish_context":
      return "Live subscription: none \u2014 this is a print (-p), cloud, subagent, or teammate session, which does not keep track of new versions of this artifact published elsewhere (only the main conversation of a local interactive, background, or TypeScript/Python Agent SDK session does). Expected; not an error.";
    case "remote_unsupported":
      {
        let n = aw();
        return `Live subscription: not supported yet from remote sessions \u2014 nothing notifies this session of new versions${n ? " or of comments sent to Claude" : ""}; re-read the artifact${n ? " (and its comments)" : ""} when the user asks.`;
      }
    default:
      {
        let n = y6e(e);
        return n !== null ? `Live subscription: skipped \u2014 ${n}.` : `Live subscription: skipped (${eP(e, 64)}).`;
      }
  }
}
var EKo = "Live subscription: none in this kind of session (see the earlier publish result); not an error.";
async function q4r(e) {
  let {
    slug: slug_24,
    url: url_8,
    getKnownVer: getKnownVer_7,
    context: context_8
  } = e;
  return pe(te().live, {
    slug: slug_24,
    url: url_8,
    getKnownVer: getKnownVer_7,
    ownPublishes: context_8.artifactRegistries.ownPublishes,
    ...ke(context_8),
    seedKnownVerFromBoot: !0
  });
}
async function pe(e, n) {
  let {
    slug: slug_25,
    url: url_9,
    getKnownVer: getKnownVer_8,
    ownPublishes: ownPublishes_4,
    context: context_9,
    seedKnownVerFromBoot: seedKnownVerFromBoot,
    seedSurfacedVer: seedSurfacedVer,
    explicit = !1,
    signal: signal
  } = n;
  GKt();
  let C = e.supervisors.get(slug_25)?.carriedVer;
  e.endAll ??= Ro;
  let G = n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema,
    armedVia = n.userResumeWiring === !0 ? "resume" : explicit ? "watch" : n.sessionResume === !0 ? "session_resume" : n.mcpWrite === !0 ? "mcp_write" : seedKnownVerFromBoot ? "attach" : "publish";
  if (!hr.test(slug_25)) return {
    outcome: "skipped",
    reason: "invalid_slug"
  };
  e.armOutcomes.delete(slug_25);
  let stopLatches = te().durable.stopLatches;
  y8({
    storageV5: context_9.storageV5
  });
  let T = n.userResumeWiring === !0 ? n.approvedRelatchGen : void 0,
    P = () => stopLatches.isStopped(slug_25) && (T === void 0 || stopLatches.latchGeneration(slug_25) !== T);
  if (P()) return c("artifact_live_subscribe", "stop_latched"), {
    outcome: "skipped",
    reason: "stop_latched"
  };
  let ie = Fr(slug_25);
  if (ie !== null) {
    if (ie.reason === "cp_override") c("artifact_live_subscribe", "cp_override_active");else if (ie.reason === "egress_denied") c("artifact_live_subscribe", `egress_denied_${ie.egressKind === "sandbox-policy" ? "sandbox_policy" : ie.egressKind}`);
    return {
      outcome: "skipped",
      reason: ie.reason
    };
  }
  let url_10 = Tr(slug_25),
    syncLive = ct(slug_25),
    humanTurnWiring = (n.freshPublishWiring === !0 || n.userResumeWiring === !0) && !n.signal.aborted,
    mt = e.supervisors.get(slug_25)?.autoReactWiring,
    taskId_4 = go(context_9, slug_25, G, humanTurnWiring);
  if (taskId_4 !== null || e.inFlightSubscribes.has(slug_25)) {
    if (taskId_4 === null && T !== void 0 && stopLatches.isStopped(slug_25)) return c("artifact_live_subscribe", "arm_in_flight"), {
      outcome: "skipped",
      reason: "arm_in_flight"
    };
    if (!(armedVia === "resume" && taskId_4 === null && !e.supervisors.has(slug_25))) wr(e, {
      slug: slug_25,
      url: url_9,
      getKnownVer: getKnownVer_8,
      ownPublishes: ownPublishes_4,
      context: context_9,
      explicit: explicit,
      machineArm: n.machineArm,
      armedVia: armedVia,
      ...(n.requireEditor !== !0 && n.editorGatedWiring !== !0 && {
        autoReactWiring: n.autoReactWiring,
        humanTurnWiring: humanTurnWiring
      })
    });
    if (taskId_4 !== null) {
      let x = e.supervisors.get(slug_25);
      if (x !== void 0) {
        let description = Qt(url_9, x.explicit, x.armedVia);
        context_9.taskRegistry.update(taskId_4, D => {
          if (!GG(D) || D.frameLive === void 0) return D;
          if (D.description === description && D.frameLive.explicit === x.explicit && D.frameLive.armedVia === x.armedVia) return D;
          return {
            ...D,
            description: description,
            frameLive: {
              ...D.frameLive,
              explicit: x.explicit,
              armedVia: x.armedVia
            }
          };
        });
      }
    }
    if (taskId_4 !== null && n.freshPublishWiring === !0 && !n.signal.aborted) nn(context_9.taskRegistry, slug_25);
    if (taskId_4 === null && n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema && n.requireEditor !== !0 && n.editorGatedWiring !== !0) {
      let x = e.pendingInFlightWiring.get(slug_25),
        J = n.freshPublishWiring === !0 && !n.signal.aborted,
        D = J || x === void 0 ? {
          scanGeneration: te().wakes.scanGeneration,
          stopGeneration: lQ(slug_25)
        } : {
          scanGeneration: x.scanGeneration,
          stopGeneration: x.stopGeneration
        };
      if (e.pendingInFlightWiring.set(slug_25, {
        wiring: Re(x?.wiring, n.autoReactWiring, humanTurnWiring),
        freshPublishWiring: J || x?.freshPublishWiring === !0,
        ...D
      }), e.inFlightWiredIntent.add(slug_25), Ne()) HKo(slug_25, {
        storageV5: context_9.storageV5
      });
      if (J && Ait()) e.bootingWiredArms.set(slug_25, {
        title: n.autoReactWiring.title,
        freshPublish: !0,
        ...D
      });
    }
    return {
      outcome: "already_watching",
      ...(taskId_4 !== null && {
        taskId: taskId_4
      })
    };
  }
  let Y = {
      url: url_9,
      announce: n.announceArmlessEnd === !0 && !n.machineArm,
      handoffGen: e.handoffGeneration,
      getTitle: () => e.supervisors.get(slug_25)?.autoReactWiring?.title ?? n.autoReactWiring?.title
    },
    an = IOe(context_9).length + e.inFlightSubscribes.size;
  if (n.machineArm && IOe(context_9).length >= pR) {
    if (!Ar(e, slug_25) || ut(e, context_9).length === 0) return c("artifact_live_subscribe", "watch_cap_reconnect"), {
      outcome: "skipped",
      reason: "watch_cap_reconnect"
    };
  }
  if (n.mcpWrite && an >= pR) return c("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);
  let forPublish_2 = !n.machineArm && n.freshPublish === !0;
  if (!n.machineArm && an >= pR && ut(e, context_9, {
    forPublish: forPublish_2
  }).length === 0) return c("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);
  let scanGeneration = te().wakes.scanGeneration,
    stopGeneration = lQ(slug_25),
    dn = n.machineArm ? e.supervisors.get(slug_25)?.lastActivityAt : void 0,
    handoffGeneration = e.handoffGeneration;
  if (nai(eo), aai(xKo), rai(x => _o(context_9.taskRegistry, x)), e.inFlightSubscribes.add(slug_25), e.inFlightGenerations.set(slug_25, handoffGeneration), n.autoReactWiring !== void 0) e.inFlightWiredIntent.add(slug_25);
  let Ce,
    xe = !1;
  try {
    if (n.autoReactWiring?.commentVerbsInSchema === !0 && n.requireEditor !== !0 && n.machineArm !== !0 && n.userResumeWiring !== !0 && Ait()) e.bootingWiredArms.set(slug_25, {
      title: n.autoReactWiring.title,
      freshPublish: n.freshPublishWiring === !0 && !n.signal.aborted,
      scanGeneration: scanGeneration,
      stopGeneration: stopGeneration
    });
    let x = () => e.handoffGeneration !== handoffGeneration || e.retiredInFlightArms.has(slug_25),
      J = kve();
    if (!J) {
      let A = e.supervisors.get(slug_25);
      if (A !== void 0) delete A.lease, delete A.renewable;
    }
    let accountEpoch_2 = te().accountEpoch,
      ge = J && n.machineArm === !0 ? e.supervisors.get(slug_25)?.lease : void 0,
      F = ge !== void 0 && (ge.transport === "live" || syncLive) && Xqo(ge, e.rewatchTiming, accountEpoch_2) ? ge : void 0;
    if (F !== void 0 && F.transport === "sync") {
      let A = await EE(context_9.storageV5).catch(() => {
        return;
      });
      if (!gu(me(F.token), A)) F = void 0;
      if (signal.aborted || x()) return X(e, slug_25, n.machineArm, "cancelled", Y);
    }
    let L,
      ht = !1,
      fn = 0;
    if (F !== void 0) L = {
      err: null,
      token: F.token,
      transport: F.transport,
      ver: F.ver,
      editor: void 0,
      tokenExp: void 0,
      renewable: !1
    };else {
      let A = J && !syncLive && n.machineArm === !0 && e.supervisors.get(slug_25)?.renewable === !0;
      try {
        let B;
        if (A) {
          let be = await lJo(slug_25, signal, context_9.credentials);
          if (be.err === null) B = be, ht = !0;else {
            c("artifact_live_subscribe", `renew_miss_${be.status ?? "no_response"}`);
            let ue = e.supervisors.get(slug_25);
            if (ue !== void 0) delete ue.renewable;
            if (signal.aborted || x()) return X(e, slug_25, !0, "cancelled", Y);
          }
        }
        fn = Date.now(), L = B ?? (await aJo(slug_25, signal, context_9.credentials, {
          syncLive: syncLive,
          ...(n.machineArm === !0 && {
            lean: e.supervisors.get(slug_25)?.bootedVersion
          })
        }));
      } catch {
        return X(e, slug_25, n.machineArm, signal.aborted || x() ? "cancelled" : "boot_failed", Y);
      }
    }
    let receivedAtMs = Date.now();
    if (x()) return X(e, slug_25, n.machineArm, "cancelled", Y);
    if (L.err !== null) {
      let A = signal.aborted ? "cancelled" : L.status === 404 ? "not_found" : ZY(L) ? "other_org" : L.publicOutsideOrg === !0 ? "public_outside_org" : "boot_failed",
        unavailable_2 = A === "boot_failed" && (L.unavailable === !0 || L.noAnswer === !0 && Date.now() - fn >= e.rewatchTiming.stallThresholdMs);
      return X(e, slug_25, n.machineArm, A, Y, {
        unavailable: unavailable_2,
        httpStatus: L.status
      });
    }
    let $e = n.requireEditor === !0 && !L.editor,
      se = $e || n.editorGatedWiring === !0 && n.autoReactWiring !== void 0 && L.editor !== !0,
      pn = $e ? "restored_consent_not_editor" : "watch_not_editor";
    if (L.editor === !0) e.nonEditorSlugs.delete(slug_25);
    if (se) {
      if (e.inFlightWiredIntent.delete(slug_25), e.bootingWiredArms.delete(slug_25), !$e && te().accountEpoch === accountEpoch_2) e.nonEditorSlugs.add(slug_25);
    }
    let mn = Mt(slug_25),
      title_4 = L.title === void 0 || L.owner !== !0 || L.outsideWriter !== !1 || mX(mn && {
        ...mn,
        role: "owner"
      }) ? null : jv(L.title),
      autoReactWiring = se || n.autoReactWiring === void 0 ? void 0 : title_4 === null ? n.autoReactWiring : {
        ...n.autoReactWiring,
        title: title_4
      },
      onOpen = se ? void 0 : n.onOpen,
      onGiveUp = se ? void 0 : n.onGiveUp,
      transport = L.transport;
    if (transport === "sync" && (!ct(slug_25) || L.token === void 0 || !ve(L.token))) return c("artifact_live_subscribe", "sync_unavailable"), X(e, slug_25, n.machineArm, "sync_unavailable", Y, {
      unavailable: !0
    });
    let token = L.token;
    if (!token) return c("artifact_live_subscribe", se ? pn : "no_subscription_token"), X(e, slug_25, n.machineArm, $e ? "not_editor" : "no_subscription_token", Y);
    if (se) c("artifact_live_subscribe", pn);
    let ver_2 = L.ver,
      getKnownVer_9 = seedKnownVerFromBoot ? () => getKnownVer_8() ?? ver_2 : getKnownVer_8,
      M = F ?? (J ? Yii({
        transport: transport,
        token: token,
        ver: ver_2,
        accountEpoch: accountEpoch_2,
        expUnixSeconds: transport === "sync" ? nt(token) : L.tokenExp,
        receivedAtMs: receivedAtMs
      }) : void 0);
    if (signal.aborted || x()) return X(e, slug_25, n.machineArm, "cancelled", Y);
    let He = IOe(context_9).length + e.inFlightSubscribes.size - 1,
      bt = e.supervisors.get(slug_25),
      zr = n.machineArm === !0 && dn !== void 0 && bt !== void 0 && !bt.stopped && bt.lastActivityAt > dn,
      bn = IOe(context_9).length + e.pendingRegistrations;
    if (n.machineArm && !zr && He >= pR) {
      if (bn >= pR) {
        if (!Ar(e, slug_25) || !yo(e, context_9)) return c("artifact_live_subscribe", "watch_cap_reconnect"), {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
      }
    } else if (n.mcpWrite && He >= pR) return c("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);else if (He >= pR) {
      let A = He - pR + 1,
        B = ut(e, context_9, {
          forPublish: forPublish_2
        });
      if (B.length < A) {
        if (n.machineArm) return c("artifact_live_subscribe", "watch_cap_reconnect"), {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
        return c("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);
      }
      if (bn >= pR) Ir(e, B[0], context_9, n.machineArm ? {
        why: `this session reached its limit of ${pR} artifact watches and made room for an already-held watch to reconnect`,
        shortReason: shortReason
      } : void 0);
    }
    e.pendingRegistrations++, xe = !0;
    let j = e.supervisors.get(slug_25),
      Yr = j !== void 0 && !j.stopped && j.explicit,
      explicit_2 = explicit || Yr,
      St = j !== void 0 && !j.stopped,
      reuseTaskId = St ? j.taskId : void 0,
      Jr = j === void 0,
      Xr = explicit && j !== void 0 && !j.explicit,
      Sn = !n.machineArm && j !== void 0 && j.armedVia === "mcp_write" && armedVia !== "publish" && armedVia !== "mcp_write",
      vn = Sn ? j.autoReactWiring : void 0,
      wn = autoReactWiring !== void 0 && !vr(e, slug_25, mt),
      An = n.userResumeWiring === !0 && wn && St && j.autoReactWiring?.humanTurnSnapshot === !0,
      vt = e.supervisors.get(slug_25)?.carriedVer,
      seedSurfacedVer_2 = vt !== void 0 && vt !== C ? vt : seedSurfacedVer,
      k = wr(e, {
        slug: slug_25,
        url: url_9,
        getKnownVer: getKnownVer_8,
        ownPublishes: ownPublishes_4,
        context: context_9,
        explicit: explicit,
        machineArm: n.machineArm,
        armedVia: armedVia,
        carriedVer: seedSurfacedVer_2 ?? L.ver,
        ...(wn && {
          autoReactWiring: autoReactWiring
        }),
        humanTurnWiring: humanTurnWiring && !An
      });
    if (F === void 0 && k.armedVia !== "mcp_write") JXo(slug_25, ver_2);
    if (F === void 0 && !ht) k.bootedVersion = ver_2;
    let autoReactWiring_2 = k.autoReactWiring;
    if (M !== void 0 && M.accountEpoch === te().accountEpoch) {
      if (k.lease = M, F === void 0 && L.renewable) k.renewable = !0;else if (F === void 0) delete k.renewable;
    } else delete k.lease, delete k.renewable;
    let lastActivityAt = k.lastActivityAt;
    if (onOpen !== void 0 && onGiveUp !== void 0) k.resumeAnnounce = {
      onOpen: onOpen,
      onGiveUp: onGiveUp,
      wired: autoReactWiring !== void 0
    };
    let At = armedVia === "resume" && k.armedVia !== "watch" && k.armedVia !== "resume" ? k.armedVia : void 0;
    if (At !== void 0) k.armedVia = "resume";
    k.transport = transport;
    let ne = !1,
      yn = z(),
      Rn = !1,
      yt,
      Ke,
      kn = !1,
      We,
      ei = new AbortController(),
      Q = se ? void 0 : e.pendingInFlightWiring.get(slug_25);
    if (!se) e.pendingInFlightWiring.delete(slug_25);
    let fe = autoReactWiring ?? Q?.wiring,
      ti = Q?.wiring.humanTurnSnapshot === !0 && (mt?.humanTurnSnapshot !== !0 || Q.wiring.context !== mt.context);
    if (Q !== void 0 && (autoReactWiring === void 0 || ti) && Q.stopGeneration === lQ(slug_25)) {
      let A = e.supervisors.get(slug_25);
      if (A !== void 0 && !A.stopped) A.autoReactWiring = Re(A.autoReactWiring, {
        ...Q.wiring,
        title: Q.wiring.title ?? A.autoReactWiring?.title
      }, Q.wiring.humanTurnSnapshot === !0);
    }
    let En = n.freshPublishWiring === !0 || Q?.freshPublishWiring === !0;
    if (Q?.freshPublishWiring === !0) scanGeneration = Q.scanGeneration, stopGeneration = Q.stopGeneration;
    let Z = n.userResumeWiring === !0,
      ni = humanTurnWiring || fe?.humanTurnSnapshot === !0,
      getTitle = () => e.supervisors.get(slug_25)?.autoReactWiring?.title ?? fe?.title,
      autoReact_4 = fe === void 0 || !fe.commentVerbsInSchema ? void 0 : {
        env: ss(),
        tool: fe.tool,
        context: fe.context,
        ...(fe.publishTranscript !== void 0 && {
          publishTranscript: fe.publishTranscript
        }),
        getWiring: () => {
          let A = e.supervisors.get(slug_25)?.autoReactWiring;
          return A?.humanTurnSnapshot === !0 || !ni ? A : void 0;
        },
        abort: ei,
        getTitle: getTitle,
        onReadRefused: () => {
          uo(e, slug_25);
        },
        notify: A => {
          if ("coalesce" in A) {
            Gii({
              queue: queue,
              slug: slug_25,
              family: A.coalesce.family,
              artifactName: A.coalesce.artifactName,
              threadId: A.coalesce.threadId,
              detail: A.detail,
              mergeDetails: "append",
              ownGesture: A.ownGesture === !0
            });
            return;
          }
          ll({
            value: zi({
              taskType: "artifact-auto-react",
              summary: Xt(A.summary),
              body: `
${Xt(A.detail)}`
            }),
            mode: "task-notification",
            origin: {
              kind: "task-notification",
              source: "artifact-auto-react",
              slug: slug_25,
              displayName: b6e(getTitle, url_9)
            },
            uuid: Irr(A.handOff, A.ownGesture === !0 ? slug_25 : void 0),
            ...(A.handOff !== void 0 && {
              artifactCommentTurn: "handoff"
            }),
            agentId: st()
          });
        }
      };
    k.surfacedVers ??= [];
    let wake = k.wake,
      Be = lo({
        slug: slug_25,
        url: url_9,
        ownPublishes: ownPublishes_4,
        presenceOnly: () => e.supervisors.get(slug_25)?.armedVia === "mcp_write",
        getKnownVer: getKnownVer_9,
        surfacedVers: k.surfacedVers,
        ...(seedSurfacedVer_2 !== void 0 && {
          seedSurfacedVer: seedSurfacedVer_2
        }),
        onSurfaced: A => {
          let B = e.supervisors.get(slug_25);
          if (B && !B.stopped) B.carriedVer = A, B.lastActivityAt = Date.now();
        },
        autoReact: autoReact_4
      });
    k.wake = Be;
    let kt = 0,
      Et,
      ri = F?.opened === !0 ? F : void 0;
    try {
      let A = await vbn({
        ws: transport === "sync" ? {
          url: Pe(slug_25, {
            commentHint: autoReact_4 !== void 0 && dx() && !mb(slug_25),
            versionNotices: !0
          }),
          protocols: [tt, token]
        } : {
          url: url_10,
          protocols: [qi, token]
        },
        ...(transport === "sync" && {
          headers: {
            "User-Agent": K1()
          }
        }),
        description: Qt(url_9, explicit_2, k.armedVia),
        timeout_ms: 0,
        persistent: !0,
        quietLifecycle: !0,
        ...(reuseTaskId !== void 0 && {
          reuseTaskId: reuseTaskId
        }),
        ambient: !0,
        handshakeDeadlineMs: e.rewatchTiming.handshakeDeadlineMs,
        autoReactArmed: autoReact_4 !== void 0,
        autoReactSlug: autoReact_4 !== void 0 ? slug_25 : void 0,
        frameLive: {
          slug: slug_25,
          explicit: explicit_2,
          watchedSince: k.watchedSince,
          armedVia: k.armedVia
        },
        transform: transport === "sync" ? mo(Be, slug_25, {
          onTokenRefresh: (token_2, expUnixSeconds) => {
            if (M !== void 0 && gu(me(M.token), me(token_2))) Xii(M, {
              token: token_2,
              expUnixSeconds: expUnixSeconds,
              receivedAtMs: Date.now()
            });
          },
          onExpiryAnnounced: () => {
            kn = !0;
          },
          onCommentHint: (comments_empty, V) => {
            let Ie = Et;
            Et = void 0;
            let seed_skipped = comments_empty && Ie !== void 0 && Asi(slug_25, Ie, V);
            g("artifact_live_subscribe", {
              comment_hint: !0,
              comments_empty: comments_empty,
              seed_parked: Ie !== void 0,
              seed_skipped: seed_skipped,
              sync_transport: !0
            });
          }
        }) : fo(Be),
        keepalive: transport === "sync" ? {
          openFrames: [],
          frame: _({
            kind: "ping",
            slug: slug_25
          }),
          intervalMs: te().presence.timing.keepaliveMs,
          sendEveryMs: () => ot(e, te().presence.timing.keepaliveMs),
          deadlineMs: te().presence.timing.keepaliveDeadlineMs ?? jt(te().presence.timing.keepaliveMs)
        } : {
          openFrames: ["ping", "hb"],
          frame: "ping",
          intervalMs: intervalMs
        },
        onSender: U => {
          if (transport === "sync") {
            Ke = V => U($t(slug_25, V)), Qe(e, `watch:${slug_25}`, Ke);
            return;
          }
          yt = U, Kn(e, slug_25, U);
        },
        onSenderClosed: () => {
          if (Ke !== void 0) Ze(e, `watch:${slug_25}`, Ke);
          if (yt !== void 0) jn(e, slug_25, yt);
        },
        onLifecycle: (U, closeCode, Ie) => {
          if (U === "open") {
            ne = !0, k.lastFailure = void 0, We = {
              stalledSince: k.stalledSince,
              lastStalledAt: k.lastStalledAt,
              stallOutAfterMs: k.stallOutAfterMs
            }, k.stalledSince = void 0, k.lastStalledAt = void 0, k.stallOutAfterMs = void 0;
            let Oe = k.spreadReconnect === !0;
            if (k.spreadReconnect = void 0, kt = Date.now(), M !== void 0) M.opened = !0;
            if (T !== void 0 && signal.aborted && stopLatches.isStopped(slug_25) && k.taskId !== void 0) {
              Dk(k.taskId, context_9.taskRegistry, {
                quiet: !0
              }), ee(e, slug_25), c("artifact_live_subscribe", "stop_latched");
              return;
            }
            let Me = e.supervisors.get(slug_25);
            if (Me !== void 0 && !Me.stopped) if (transport === "sync") j1i(slug_25), Ve(slug_25)?.reopened();else dr({
              slug: slug_25,
              url: url_9,
              context: context_9
            }), Ve(slug_25)?.sourceEnded();
            g("artifact_live_subscribe", {
              armed: !0,
              ...(transport === "sync" && {
                sync_transport: !0
              }),
              ...(explicit_2 && {
                explicit: !0
              }),
              ...(F !== void 0 && {
                token_reused: !0,
                lease_remaining_min: Math.max(0, Math.floor((F.expMs - kt) / 60000))
              }),
              ...(ht && {
                token_renewed: !0
              })
            });
            let Ln = autoReact_4 !== void 0 && te().wakes.scanGeneration !== scanGeneration,
              oi = lQ(slug_25) !== stopGeneration,
              {
                wakes: wakes_5
              } = te(),
              si = wakes_5.liftedAtScanGeneration.get(slug_25) === wakes_5.scanGeneration || wakes_5.humanTurnAtScanGeneration === wakes_5.scanGeneration;
            if (Ln && !si && !mb(slug_25) && dx()) ACt(slug_25), aQ(1, [], {
              catchUp: !1,
              nameChordGesture: !ye(),
              passive: !ye()
            }), MOe({
              flush: !0
            });
            if (T !== void 0 && !signal.aborted) stopLatches.clearByApprovedRewatch(slug_25, T);
            if (autoReact_4 !== void 0) UOe(slug_25).lastWakeArgs = {
              slug: slug_25,
              url: url_9,
              ...autoReact_4
            };
            let Wn = Z && P();
            if (Z && autoReact_4 !== void 0 && !signal.aborted && !Wn && Ne()) {
              let N = e.supervisors.get(slug_25)?.autoReactWiring;
              lt(slug_25, {
                title: N?.title,
                storageV5: N?.context.storageV5
              });
            }
            if (autoReact_4 !== void 0 && signal.aborted) ;else if (autoReact_4 !== void 0) if (!Z && CS(slug_25) && !vBe(slug_25) && wakes_5.humanTurnAtScanGeneration === wakes_5.scanGeneration) rer(slug_25), wakes_5.liftedAtScanGeneration.set(slug_25, wakes_5.scanGeneration), a$(e, slug_25), jke({
              slug: slug_25,
              url: url_9,
              ...autoReact_4,
              seed: !1
            });else if (mb(slug_25) && (Ln || oi || Wn || !(En || Z))) ;else if (mb(slug_25)) {
              let N = CS(slug_25),
                de = VG(slug_25);
              if (dx() && (Z || !N || de)) hD(slug_25), bCe(slug_25), autoReact_4.notify({
                summary: (Z ? Veo : FSi)(b6e(autoReact_4.getTitle, url_9)),
                detail: `Auto-replies on artifact ${url_9} were ${Z ? "resumed by a resume_replies request" : "re-enabled by this publish"} \u2014 they had been ${de ? "handed to another session of this conversation that resumed it or published there" : N ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${N && !de ? Jt : Qi}`
              });
              if (!N || de) xbn(slug_25);
              _ai(slug_25), Xsi(slug_25), rer(slug_25), a$(e, slug_25), jke({
                slug: slug_25,
                url: url_9,
                ...autoReact_4,
                seed: !0
              });
            } else {
              if (wakes_5.pendingResumeDisclosure.delete(slug_25)) hD(slug_25), bCe(slug_25), autoReact_4.notify({
                summary: Veo(b6e(autoReact_4.getTitle, url_9)),
                detail: `Auto-replies on artifact ${url_9} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${Jt}`
              });
              if (jke({
                slug: slug_25,
                url: url_9,
                ...autoReact_4,
                seed: !0,
                ...(n.pickUpRecentSummons === !0 && n.machineArm !== !0 && {
                  pickUpRecentSummons: !0
                }),
                ...(n.machineArm === !0 && Oe && kve() && {
                  deferMs: Qii(e.rewatchTiming)
                })
              }), transport === "sync") {
                let N = UOe(slug_25);
                Et = {
                  kickCount: N.kickCount,
                  cancelGeneration: N.cancelGeneration
                };
              }
            }
            let qe = e.supervisors.get(slug_25),
              Wt = qe?.resumeAnnounce;
            if (qe !== void 0 && Wt !== void 0) {
              qe.resumeAnnounce = void 0;
              let {
                  autoReact: autoReact_5
                } = te(),
                de = autoReact_4 !== void 0 && !hb(slug_25) && !autoReact_5.userDisarmed && autoReact_5.enabledMemo === !0;
              if (!signal.aborted && !qe.stopped && !stopLatches.isStopped(slug_25) && (de || !Wt.wired && autoReact_4 === void 0)) Wt.onOpen();
            }
            if (autoReact_4 !== void 0 && (En || Z || explicit) && !Rn && !signal.aborted && !stopLatches.isStopped(slug_25) && !hb(slug_25) && !te().autoReact.userDisarmed && te().autoReact.wakeEnabledMemo === !0) {
              Rn = !0;
              let claim = Gsi([slug_25], Date.now());
              (async () => {
                let de = await import("B:/~BUN/root/chunk-7g5ms3d2.js"),
                  ze = await import("B:/~BUN/root/chunk-1jjhe14r.js"),
                  Ye = await Rit({
                    records: await de.listRegisteredSessionRecords(),
                    sessionId: yn,
                    selfPid: process.pid,
                    isRunning: ze.isProcessRunning,
                    isSameProcess: ze.provenSameProcessAsync
                  });
                if (Ye.verdict !== "live") {
                  claim.end();
                  return;
                }
                let {
                    requestReplyTakeover: requestReplyTakeover
                  } = await import("B:/~BUN/root/chunk-1dv8fbf5.js"),
                  It = (await requestReplyTakeover({
                    holders: [Ye.holder, ...Ye.otherHolders],
                    holdersIncomplete: Ye.unproven === !0,
                    conversationId: yn,
                    slugs: [slug_25],
                    reason: "claim",
                    alreadyReplying: !0,
                    claim: claim
                  })).yielded.has(slug_25),
                  In = !It && claim.lost.has(slug_25),
                  displayName_2 = b6e(() => getTitle(), url_9);
                ll({
                  value: zi({
                    taskType: A5,
                    summary: Xt(It ? `Another session of this conversation handed its replies on ${displayName_2} to this one` : In ? `This session handed its replies on ${displayName_2} to another session of this conversation` : `Another session of this conversation is open while replies are armed on ${displayName_2}`),
                    body: `
<event>${Xt(It ? `Another live session of this same conversation was also armed to reply to comments on ${url_9}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : In ? `Another live session of this same conversation claimed the replies to comments on ${url_9} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do \u2014 a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${url_9}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>`
                  }),
                  mode: "task-notification",
                  passive: !0,
                  priority: "next",
                  origin: {
                    kind: "task-notification",
                    source: A5,
                    slug: slug_25,
                    displayName: displayName_2
                  },
                  agentId: st()
                });
              })().catch(() => {
                claim.end();
              });
            }
            return;
          }
          let _e = ne ? Date.now() - kt : 0,
            Tt = !ne && so(closeCode),
            expired = transport === "sync" ? closeCode === tqt && (kn || M !== void 0 && Date.now() >= M.expMs - Xi) : closeCode === Vii,
            je = transport === "sync" && (ne && closeCode === tqt && !expired || !ne && gBe(closeCode)?.status === 404),
            stalled_2 = je || !ne && (Tt || oo(closeCode, Ie, e.rewatchTiming)),
            Lt = ne || stalled_2 ? void 0 : ri,
            q = e.supervisors.get(slug_25);
          if (je && ne && _e < e.rewatchTiming.minUptimeMs && q !== void 0 && q.stalledSince === void 0 && We?.stalledSince !== void 0) q.stalledSince = We.stalledSince, q.lastStalledAt = We.lastStalledAt, q.stallOutAfterMs = We.stallOutAfterMs;
          if (q !== void 0 && transport === "sync" && closeCode === nqt && M !== void 0 && q.lease === M) delete q.lease;
          if (M !== void 0 && q?.lease === M && (!kve() || !Tt && !je && !Yqo(M, {
            expired: expired,
            refused: Lt !== void 0,
            healthy: ne && _e >= e.rewatchTiming.minUptimeMs
          }))) {
            if (delete q.lease, !M.opened) delete q.renewable;
          }
          if (ne) c("artifact_live_subscribe", `socket_closed_${closeCode ?? "unknown"}`, {
            chain_spared: te().autoReact.artifacts.get(slug_25)?.scanning === !0
          });else if (Lt !== void 0) c("artifact_live_subscribe", "reuse_connect_failed");else {
            let Oe = gBe(closeCode),
              Me = {
                ...(stalled_2 && {
                  stalled: !0
                }),
                ...(Tt && {
                  shed: !0
                }),
                ...(Oe !== null && {
                  http_status: Oe.status,
                  cf_mitigated: Oe.cfMitigated
                })
              };
            if (Object.keys(Me).length > 0) m("artifact_live_subscribe", "connect_failed", Me);else m("artifact_live_subscribe", "connect_failed");
          }
          if (q !== void 0 && !q.stopped) q.lastFailure = _e < e.rewatchTiming.minUptimeMs ? closeCode ?? "unknown" : void 0;
          en(e, slug_25, {
            uptimeMs: je ? 0 : _e,
            ...(closeCode !== void 0 && {
              closeCode: closeCode
            }),
            resumeNeverOpened: Z && !ne,
            reuseRefused: Lt !== void 0,
            stalled: stalled_2,
            expired: expired
          });
        }
      }, context_9);
      if (no(e, k, slug_25, A.data.taskId), xe) e.pendingRegistrations--, xe = !1;
      let B = e.supervisors.get(slug_25);
      if (B === void 0 || B !== k) return Dk(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), tn(e, slug_25, n.machineArm), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (x()) return Dk(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), ee(e, slug_25), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (P()) {
        if (Dk(A.data.taskId, context_9.taskRegistry, {
          quiet: !0
        }), c("artifact_live_subscribe", "stop_latched"), e.armOutcomes.delete(slug_25), Zt(e, slug_25), St || k.lastActivityAt !== lastActivityAt) dt(e, k);else ee(e, slug_25);
        return {
          outcome: "skipped",
          reason: "stop_latched"
        };
      }
      let be = Z && signal.aborted;
      if (be && T !== void 0 && stopLatches.isStopped(slug_25)) return Dk(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), ee(e, slug_25), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (e.armOutcomes.delete(slug_25), Zt(e, slug_25), be) return {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (Z && (te().wakes.scanGeneration !== scanGeneration || lQ(slug_25) !== stopGeneration)) return {
        outcome: "skipped",
        reason: "stopped_again"
      };
      if (An && autoReactWiring !== void 0) {
        let U = e.supervisors.get(slug_25);
        if (U === k && !U.stopped && !vr(e, slug_25, autoReactWiring_2)) U.autoReactWiring = Re(U.autoReactWiring, {
          ...autoReactWiring,
          title: U.autoReactWiring?.title ?? autoReactWiring.title
        }, !0);
      }
      let ue = se ? void 0 : e.pendingInFlightWiring.get(slug_25),
        Cn = mb(slug_25),
        ii = Cn || autoReact_4 !== void 0 && te().wakes.scanGeneration !== scanGeneration,
        xn = ue !== void 0 && ue.freshPublishWiring && ue.scanGeneration === te().wakes.scanGeneration && ue.stopGeneration === lQ(slug_25);
      if (ue === void 0 || signal.aborted || !(autoReact_4 === void 0 ? !Cn || xn : !Z && ii && xn)) return {
        outcome: "armed",
        taskId: A.data.taskId,
        ...(se && {
          degraded: "not_editor"
        })
      };
      e.pendingInFlightWiring.delete(slug_25), Ce = ue, Dk(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      });
    } catch {
      let A = e.supervisors.get(slug_25);
      if (Jr && A === k && !(A !== void 0 && A.explicit && !explicit)) ee(e, slug_25);else if (Xr && A !== void 0 && A === j) A.explicit = !1;
      if (At !== void 0 && A === k && A.armedVia === "resume") A.armedVia = At;else if (Sn && A === k && A.armedVia === armedVia && !A.explicit) {
        if (A.armedVia = "mcp_write", vn === void 0) delete A.autoReactWiring;else A.autoReactWiring = vn;
        a$(e, slug_25);
      }
      if (A !== void 0 && A === k && A.wake === Be) if (wake === void 0) delete A.wake;else A.wake = wake;
      if (A !== void 0 && onOpen !== void 0) A.resumeAnnounce = void 0;
      if (M !== void 0 && A?.lease === M && !Yqo(M, {
        expired: !1,
        refused: !1,
        healthy: !1
      })) {
        if (delete A.lease, !M.opened) delete A.renewable;
      }
      return m("artifact_live_subscribe", F !== void 0 ? "reuse_ws_open_error" : "ws_open_error"), X(e, slug_25, n.machineArm, "ws_open_error", Y);
    }
  } finally {
    e.inFlightSubscribes.delete(slug_25), e.inFlightWiredIntent.delete(slug_25), e.retiredInFlightArms.delete(slug_25), e.inFlightGenerations.delete(slug_25), e.bootingWiredArms.delete(slug_25);
    let x = e.supervisors.get(slug_25);
    if (x === void 0 || x.stopped) Ve(slug_25)?.sourceEnded();
    let J = e.armSettleWaiters.get(slug_25) ?? [];
    e.armSettleWaiters.delete(slug_25);
    for (let D of J) try {
      D();
    } catch (error) {
      a(error);
    }
    if (e.pendingInFlightWiring.delete(slug_25), xe) e.pendingRegistrations--, xe = !1;
  }
  if (Ce === void 0) throw Error("armLiveSubscription: late-park fall-through lost its park");
  return pe(e, {
    ...n,
    machineArm: void 0,
    userResumeWiring: void 0,
    approvedRelatchGen: void 0,
    sessionResume: void 0,
    pickUpRecentSummons: void 0,
    editorGatedWiring: void 0,
    autoReactWiring: Ce.wiring,
    freshPublishWiring: Ce.freshPublishWiring,
    freshPublish: n.freshPublish === !0 || Ce.freshPublishWiring
  });
}
function Vr(e, n, outcome, reason_3) {
  eno(e.armOutcomes, n, {
    outcome: outcome,
    reason: reason_3,
    at: Date.now()
  }, Qto);
}
function Lo(e, n, r, s, h) {
  if (r || e.handoffGeneration !== h.handoffGen || e.retiredInFlightArms.has(n)) return;
  let d = e.supervisors.get(n);
  if (d !== void 0 && !d.stopped && d.timer !== void 0) {
    if (s !== "cancelled") d.lastFailure = s;
    return;
  }
  if (e.armOutcomes.has(n)) return;
  let l = te().durable.stopLatches.isStopped(n);
  if (!l) Vr(e, n, "failed", s);
  if (h.announce && s !== "cancelled" && !l) Fo(e, n, h, s);
}
var not_found = "artifact not found",
  Wo = "there is nothing to retry unless the artifact is shared with the user again",
  other_org = "other organization",
  public_outside_org = "public, outside your organization",
  Io = `there is nothing to retry until ${V3e}`,
  Oo = "there is nothing to retry: read it with the read action instead",
  advice_2 = "it will not come back on its own \u2014 watch it again only if the user asks or your current task still depends on its republishes",
  advice = "watch it again when you next work on this artifact",
  advice_4 = "there is nothing to re-watch while live updates are switched off";
function Do(e) {
  switch (e) {
    case "not_found":
    case "other_org":
    case "public_outside_org":
      return {
        advice: _6e(e)
      };
    case "flag_off":
      return {
        advice: advice_4,
        passive: !0
      };
    default:
      return {
        advice: advice_2,
        passive: !0
      };
  }
}
function _6e(e) {
  switch (e) {
    case "not_found":
    case not_found:
      return Wo;
    case "other_org":
    case other_org:
      return Io;
    case "public_outside_org":
    case public_outside_org:
      return Oo;
    case Gr:
    case no_subscription_token:
    case Kr:
    case shortReason:
      return advice_2;
    default:
      return;
  }
}
var Gr = "connection lost",
  no_subscription_token = "no live credential",
  Kr = "could not reconnect",
  shortReason = "made room for another watch",
  on = {
    boot_failed: "could not connect",
    ws_open_error: "could not connect",
    sync_unavailable: "could not connect",
    not_found: not_found,
    other_org: other_org,
    public_outside_org: public_outside_org,
    no_subscription_token: no_subscription_token,
    watch_cap: "watch limit reached"
  };
function Zt(e, n) {
  tno(e.announcedArmFailures, n), JQn(n);
}
function JQn(e) {
  Oy(n => n.origin?.kind === "task-notification" && n.origin.source === A5 && n.origin.slug === e && (n.origin.armFailed === !0 || n.origin.watchEnded === !0));
}
function Fo(e, slug_26, r, s) {
  if (!r8t(e.announcedArmFailures, `${slug_26}:${s}`, Kur)) return;
  let h = y6e(s) ?? s,
    d = _6e(s) ?? (te().builtInArtifactHiddenForMcp ? void 0 : Zto);
  sn({
    slug: slug_26,
    artifactName: b6e(r.getTitle, r.url),
    shortReason: on[s] ?? "not armed",
    event: `The live subscription for ${r.url} did not arm \u2014 ${h}. This session is NOT watching it and does not keep track of new versions of it; ${d === void 0 ? "do not claim to be watching it" : `${d}, and do not claim to be watching it meanwhile`}.`
  });
}
function sn(e) {
  ll({
    value: zi({
      taskType: A5,
      summary: Xt(WSi(e.artifactName, e.shortReason)),
      body: `
<event>${Xt(e.event)}</event>`
    }),
    mode: "task-notification",
    priority: "next",
    ...(e.passive && {
      passive: !0
    }),
    origin: {
      kind: "task-notification",
      source: A5,
      slug: e.slug,
      displayName: e.artifactName,
      armFailed: !0
    },
    agentId: st()
  });
}
function TKo(e) {
  let {
    slug: slug_27,
    url: url_11,
    liveDocLoss: liveDocLoss,
    claudeDoc: claudeDoc,
    settlement: settlement
  } = e;
  if (settlement.settled === "registered") {
    if (JQn(slug_27), claudeDoc && te().durable.rows.get(slug_27)?.events.includes("comment") === !1) QQn(slug_27, url_11, "comment events unsupported");
    return;
  }
  if (settlement.settled !== "unregistered") return;
  let {
      reason: reason_4,
      detail: detail_3,
      serverMessage: serverMessage_2,
      refusedByFrame: refusedByFrame
    } = settlement,
    y = te().builtInArtifactHiddenForMcp ? null : H4r(reason_4);
  if (claudeDoc) {
    QQn(slug_27, url_11, detail_3 === void 0 ? reason_4 : `${reason_4}: ${detail_3}`, refusedByFrame ? void 0 : `${ybn(reason_4, serverMessage_2)}${y === null ? "" : ` To try again, ${y}.`}`);
    return;
  }
  if (!Ot(slug_27, reason_4)) return;
  let C = liveDocLoss ?? `This session will NOT be woken when ${aw() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`;
  sn({
    slug: slug_27,
    artifactName: b6e(e.getTitle, url_11),
    shortReason: "wake subscription not registered",
    event: `The durable wake subscription for ${url_11} was not registered (${reason_4}${detail_3 !== void 0 ? `: ${detail_3}` : ""}) \u2014 ${ybn(reason_4, serverMessage_2)} ${C}${y === null ? "" : `; ${y}`} \u2014 do not claim to be subscribed to it meanwhile.`
  });
}
function QQn(slug_28, artifactName, r, s) {
  if (!Ot(slug_28, "claude_doc")) return;
  sn({
    slug: slug_28,
    artifactName: artifactName,
    shortReason: "comment wake not registered",
    event: `@Claude comments on the Claude Doc ${artifactName} go to another Claude and will not reach this session: its comment wake was not registered (${r}).${s === void 0 ? "" : ` ${s}`} To see them, read the doc's comments yourself with the Claude Docs connector's \`${d0r}\`, and do not claim to be subscribed to it.`,
    passive: !0
  });
}
function CKo(e) {
  return e.connected && !oqt(e.taskId);
}
function RKo(e, n) {
  let live_16 = te().live,
    s = new Set();
  for (let S of Object.values(e.taskRegistry.all())) if (GG(S) && S.status === "running" && S.frameLive !== void 0) s.add(S.frameLive.slug);
  let stopLatches_2 = te().durable.stopLatches,
    d = S => (n === void 0 || S === n) && !s.has(S) && !stopLatches_2.isStopped(S),
    l = new Set(U4r(e, n).map(item => item.slug)),
    b = [],
    w = new Set();
  for (let slug_29 of live_16.inFlightSubscribes) {
    if (!d(slug_29) || (live_16.inFlightGenerations.get(slug_29) ?? live_16.handoffGeneration) !== live_16.handoffGeneration || live_16.retiredInFlightArms.has(slug_29)) continue;
    w.add(slug_29);
    let y = live_16.supervisors.get(slug_29),
      C = y !== void 0 && !y.stopped ? y : void 0;
    b.push({
      slug: slug_29,
      state: "arming",
      reconnect: C?.taskId !== void 0,
      failures: C?.consecutiveFailures ?? 0,
      ...(C?.lastFailure !== void 0 && {
        lastFailure: C.lastFailure
      })
    });
  }
  for (let S of live_16.supervisors.values()) {
    if (!d(S.slug) || w.has(S.slug) || S.stopped || S.timer === void 0) continue;
    if (w.add(S.slug), l.has(S.slug)) continue;
    b.push({
      slug: S.slug,
      state: "backing_off",
      failures: S.consecutiveFailures,
      maxFailures: live_16.rewatchTiming.maxConsecutiveFailures,
      nextAt: S.nextRewatchAt ?? Date.now(),
      ...(S.lastFailure !== void 0 && {
        lastFailure: S.lastFailure
      })
    });
  }
  for (let [slug_30, y] of live_16.armOutcomes) {
    if (!d(slug_30) || w.has(slug_30)) continue;
    b.push({
      slug: slug_30,
      state: y.outcome,
      reason: y.reason,
      at: y.at
    });
  }
  return b;
}
export { pCt, GQn, N4r, VQn, KQn, iKo, asi, F4r, ybn, aKo, lKo, H4r, lsi, dsi, dKo, cKo, qQn, csi, uKo, YQn, $4r, _bn, bbn, OOe, Sbn, IOe, U4r, fKo, pKo, mKo, hKo, gKo, yKo, B4r, _Ko, bKo, wbn, SKo, yya, wKo, j4r, W4r, kKo, hBe, jKt, vKo, XQn, WKt, z4r, G4r, V4r, K4r, y6e, kbn, EKo, q4r, _6e, JQn, TKo, QQn, CKo, RKo };