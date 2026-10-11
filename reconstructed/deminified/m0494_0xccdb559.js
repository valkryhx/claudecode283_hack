// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Nt, j, Y, qe, jY, Gm, F$, Rxe, Te } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { b, Vo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { vw, iDt, ee, KRo, xan, YRo, XRo } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { M$, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { qt } from "B:/~BUN/root/chunk-9xz983aj.js";
import { wy, vI, Cce, kI, _Re, nc, x, Gb } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { so, dNo, uNo, pNo, fNo, u$, Bn, Fq, En, qb, qE } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { YT, wOr, oHe } from "B:/~BUN/root/chunk-faawr4jv.js";
import { KLn, YLn, XLn, JLn, mAt, QLn, oa, fS } from "B:/~BUN/root/chunk-3jyp964r.js";
import { xA, Ott, I4, KOn, YOn, Y0e, BU, El, U7, B7, j7, M4 } from "B:/~BUN/root/chunk-at7axhcd.js";
import { Ttt, qmr, mXt, FOn, g8, UU, W0e, z0e, CTt, $On, _Xt, RT, Xao, mW, Jao } from "B:/~BUN/root/chunk-7z8vew74.js";
import { B2e } from "B:/~BUN/root/chunk-dty6td52.js";
import { joe, f7, yZe, eW, _6t, b6t, Zm, eg, Cze, bg, gro, hM, bpe, bro, WRn, kro, Ero, Tro, CU, Cro, Rro, GRn, Aro, _Ze, bZe, k6t, xro, Pro, Iro, Oro, Klr, Ylr, Mro, Dro, Hro, yM, YRn, Aze, SZe, Uro, Bro, jro, Gro, Sh, Vro, T6t, nW, qro, Yro } from "B:/~BUN/root/chunk-1mdmjaqt.js";
import { gze, gRn, I3t, mpe, lZe, ovt, svt } from "B:/~BUN/root/chunk-n2j74jq8.js";
import { cZe, O3t, Noe, Oto, plr, bRn, Dto, kRn, Lto, Hto, vOe, Xto, uvt, wu, Zto, U3t, pvt, qSe, u7, tno } from "B:/~BUN/root/chunk-awyadv01.js";
import { _no, kno } from "B:/~BUN/root/chunk-86z0hexb.js";
import { xb } from "B:/~BUN/root/chunk-rt2jhy85.js";
import { _lr, blr, pG, W3t, hze, kOe, fno } from "B:/~BUN/root/chunk-t82zs1e5.js";
import { fvt, CRn } from "B:/~BUN/root/chunk-9dpn4kbz.js";
import { klr } from "B:/~BUN/root/chunk-tvk6phkz.js";
import { Spe, Goe, wpe } from "B:/~BUN/root/chunk-kfsc6egp.js";
import { iW } from "B:/~BUN/root/chunk-zqd621xt.js";
import { rKe, dLe } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { qi } from "B:/~BUN/root/chunk-vr3kcvgy.js";
import { Hs } from "B:/~BUN/root/chunk-aky7m4ay.js";
import { o, E, M, ae, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
class xn {
  working = Hs({
    working: !1
  });
  userPrompt = Hs({
    waitingFor: void 0
  });
}
var Se = new Nt(() => new xn());
function mze(e, working) {
  Se.of(e).working.setState(r => r.working === working ? r : {
    working: working
  });
}
function C3t(e) {
  return Se.of(e).working.getState().working;
}
function tRn(e, n) {
  return Se.of(e).working.subscribe(n);
}
function R3t(e, waitingFor) {
  Se.of(e).userPrompt.setState(r => r.waitingFor === waitingFor ? r : {
    waitingFor: waitingFor
  });
}
function Cto(e) {
  return zar(e) !== void 0;
}
function zar(e) {
  return Se.of(e).userPrompt.getState().waitingFor;
}
function Rto(e, n) {
  return Se.of(e).userPrompt.subscribe(n);
}
var It = 120,
  Ln = `act:${It}`,
  oi = "act:0";
function Wn(e) {
  if (!e.activityOkReported) e.activityOkReported = !0, _("artifact_activity_emit");
}
function In(e, n, r) {
  n(r), Wn(e);
}
function On(e, n, r) {
  n(r), Wn(e);
}
function Wt(e, n) {
  for (let r of e.activitySenders.values()) In(e, r, n ? Ln : oi);
  for (let r of e.agentActivitySinks.values()) On(e, r, n ? It : 0);
}
function Mn(e) {
  return e.activitySenders.size + e.agentActivitySinks.size;
}
function Ot(e) {
  if (Mn(e) === 0) return;
  if (e.activityRefreshTimer !== void 0) return;
  e.activityRefreshTimer = setInterval(n => Wt(n, !0), e.activityRefreshMs, e), e.activityRefreshTimer.unref?.();
}
function Pn(e) {
  if (Mn(e) === 0 && e.activityRefreshTimer !== void 0) clearInterval(e.activityRefreshTimer), e.activityRefreshTimer = void 0;
}
function si(e, n) {
  if (n) {
    if (e.activityClearTimer !== void 0) {
      clearTimeout(e.activityClearTimer), e.activityClearTimer = void 0;
      return;
    }
    e.activityOnsetTimer ??= setTimeout(r => {
      r.activityOnsetTimer = void 0, Wt(r, !0), Ot(r);
    }, e.activityEdgeDebounceMs, e), e.activityOnsetTimer.unref?.();
  } else {
    if (e.activityOnsetTimer !== void 0) {
      clearTimeout(e.activityOnsetTimer), e.activityOnsetTimer = void 0;
      return;
    }
    e.activityClearTimer ??= setTimeout(r => {
      if (r.activityClearTimer = void 0, r.activityRefreshTimer !== void 0) clearInterval(r.activityRefreshTimer), r.activityRefreshTimer = void 0;
      Wt(r, !1);
    }, e.activityEdgeDebounceMs, e), e.activityClearTimer.unref?.();
  }
}
function Dn() {
  return j();
}
function Fn(e) {
  if (e.activityUnsubscribe !== void 0) return;
  let n = Dn();
  e.activityUnsubscribe = tRn(n, () => {
    try {
      si(e, C3t(n));
    } catch (error) {
      d(error);
    }
  });
}
function Vn(e) {
  return C3t(Dn()) && e.activityOnsetTimer === void 0 || e.activityClearTimer !== void 0;
}
function Nn(e, n, r) {
  if (e.disposed) return;
  if (Fn(e), e.activitySenders.set(n, r), Cro(e, n), Vn(e)) In(e, r, Ln), Ot(e);
}
function Un(e, n, r) {
  if (e.activitySenders.get(n) === r) e.activitySenders.delete(n), Rro(e, n), Pn(e);
}
function Qe(e, n, r) {
  if (e.disposed) return;
  if (Fn(e), e.agentActivitySinks.set(n, r), Vn(e)) On(e, r, It), Ot(e);
}
function Ze(e, n, r) {
  if (e.agentActivitySinks.get(n) === r) e.agentActivitySinks.delete(n), Pn(e);
}
var et = "frame-sync.v1";
function Pe(e, n) {
  let r = new URL("/api/frame/sync", pNo());
  if (r.searchParams.set("slug", e), n?.commentHint === !0) r.searchParams.set("comment_hint", "1");
  if (n?.versionNotices === !0) r.searchParams.set("vn", Ttt);
  return gRn(r);
}
var Mt = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;
function ve(e) {
  if (!Mt.test(e)) return !1;
  let n = e.split(".", 4)[2];
  return n !== void 0 && ui(n).role.endsWith("_agent");
}
var ai = 28;
function ui(role) {
  let n = role.length - ai;
  if (n <= 0 || role.slice(n, n + 4) !== "_id_") return {
    role: role
  };
  let id = role.slice(n + 4);
  return B2e.test(id) ? {
    role: role.slice(0, n),
    id: id
  } : {
    role: ""
  };
}
function tt(e) {
  let n = e.split(".", 6)[4];
  if (n === void 0 || !/^[0-9]{1,12}$/.test(n)) return;
  let r = Number(n);
  return Number.isSafeInteger(r) && r > 0 ? r : void 0;
}
var ci = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function me(e) {
  let [n, organizationUuid] = e.split(".", 3);
  if (n === void 0 || organizationUuid === void 0 || organizationUuid === "") return;
  let accountUuid = Buffer.from(n, "base64url").toString("utf8");
  if (!ci.test(accountUuid) || Buffer.from(accountUuid, "utf8").toString("base64url") !== n) return;
  return {
    accountUuid: accountUuid,
    organizationUuid: organizationUuid
  };
}
var di = 60000,
  errorCode = "boot_request_error",
  Pt = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED",
  Hn = "JOIN_DENIED_REASON_DENIED",
  Kn = "JOIN_DENIED_REASON_CAP_INVALID",
  jn = {
    on: "socket",
    detail: "4503",
    opened: !0,
    uptimeMs: 0,
    ageMs: 0
  },
  nt = f(() => u({
    kind: o(),
    slug: o().optional(),
    actor: o().optional(),
    payload: ae().optional()
  })),
  Dt = f(() => u({
    cap: o(),
    exp: E()
  })),
  De = f(() => u({
    reason: o()
  }));
function Ft(slug, busyS) {
  return b({
    kind: "activity",
    slug: slug,
    payload: {
      busyS: busyS
    }
  });
}
function qn(e) {
  if (a.CLAUDE_CODE_REMOTE) return "remote";
  if (fNo()) return "cp_override";
  if (svt(Pe(e)) !== null) return "egress_denied";
  return null;
}
async function zn(e, n) {
  let storedCap = e.storedCap;
  if (!e.rebootNeeded && storedCap !== void 0 && storedCap.exp * 1000 - Date.now() > di) {
    let v = await Gb(e.context.storageV5).catch(() => {
      return;
    });
    if (!n.isCurrent()) return {
      outcome: "stale"
    };
    if (wy(e.owner, v)) return {
      outcome: "token",
      token: storedCap.cap,
      boot: void 0
    };
  }
  let i,
    l = Date.now();
  try {
    i = await RT({
      slug: e.slug,
      env: so()
    }, n.feature, e.abort.signal, {
      agentPeer: !0,
      ...(e.bootedVersion !== void 0 && {
        lean: {
          version: e.bootedVersion,
          mustCarry: v => "syncToken" in v
        }
      }),
      speculative: !0,
      credentials: e.context.credentials
    });
  } catch {
    i = {
      err: "boot threw",
      errorCode: errorCode
    };
  }
  if (!n.isCurrent()) return {
    outcome: "stale"
  };
  if (i.err !== null) {
    if (UU(i)) return {
      outcome: "other_org"
    };
    if (g8(i)) return {
      outcome: "not_found"
    };
    return {
      outcome: "boot_failed",
      status: i.status,
      noAnswer: i.errorCode === errorCode,
      elapsedMs: Date.now() - l
    };
  }
  if (i.assetToken === void 0) return {
    outcome: "public_outside_org"
  };
  let s = i.data.syncToken,
    h = typeof s === "string" && Mt.test(s) ? me(s) : void 0;
  if (e.owner !== void 0 && h !== void 0 && !wy(e.owner, h)) return {
    outcome: "owner_changed"
  };
  let g = typeof s === "string" && ve(s) ? h : void 0;
  if (typeof s !== "string" || g === void 0) return {
    outcome: "not_admitted"
  };
  return e.owner = g, e.rebootNeeded = !1, e.bootedVersion = i.ver, Yn(e, li(s)), {
    outcome: "token",
    token: s,
    boot: i.data
  };
}
function li(cap) {
  return {
    cap: cap,
    exp: tt(cap) ?? Math.floor((Date.now() + k6t) / 1000)
  };
}
function Yn(e, n) {
  let r = Date.now(),
    i = Math.min(r + k6t, Math.max(r + xro, n.exp * 1000));
  e.storedCap = {
    cap: n.cap,
    exp: Math.floor(i / 1000)
  }, e.capStrikes = 0;
}
function Jn(e, n, r) {
  switch (n) {
    case "ctrl:token_refresh":
      {
        let i = Dt().safeParse(r);
        if (i.success && ve(i.data.cap) && wy(e.owner, me(i.data.cap))) Yn(e, {
          cap: i.data.cap,
          exp: i.data.exp
        });
        return !0;
      }
    case "ctrl:token_refresh_declined":
      {
        let i = De().safeParse(r);
        if (i.success && i.data.reason === Pt) e.rebootNeeded = !0, e.storedCap = void 0;
        return !0;
      }
    default:
      return !1;
  }
}
function fi(e, n, r) {
  if (n()) return;
  if (e.taskId !== void 0) try {
    Sh(e.taskId, e.context.taskRegistry, {
      quiet: !0
    });
  } catch {}
  r("error");
}
function rt(e) {
  if (e.stopped = !0, e.storedCap = void 0, e.abort.abort(), e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer), e.reconnectTimer = void 0;
  if (e.send = void 0, e.state = "closed", e.taskId !== void 0) {
    let taskId = e.taskId;
    e.taskId = void 0;
    try {
      Sh(taskId, e.context.taskRegistry, {
        quiet: !0
      });
    } catch {}
  }
}
var pi = 404;
function mi(e) {
  let n = Number(e);
  return n === 1008 || n >= 4000 && n <= 4999;
}
function Xn(e, n, r) {
  switch (n.on) {
    case "dial_error":
      return n.deterministic ? "refused" : "dropped";
    case "boot":
      if (mW(n.status)) return "unavailable";
      if (n.noAnswer) return n.elapsedMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      return "refused";
    case "socket":
      {
        if (n.detail === bZe) return "revoked";
        if (n.opened) {
          if (n.uptimeMs >= r.stallThresholdMs) return "dropped";
          if (n.detail === _Ze && !e.rebootNeeded) return "unavailable";
          return mi(n.detail) ? "refused" : "dropped";
        }
        let i = mpe(n.detail);
        if (i !== null) return mW(i.status) || i.cfMitigated || i.status === pi ? "unavailable" : "refused";
        return n.detail === I3t || n.ageMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      }
  }
}
function Qn(e, n, r) {
  let i = Xn(e, n, r);
  return i === "refused" || i === "revoked";
}
function Zn(e, n, r) {
  let i = Xn(e, r, n);
  if (i === "revoked" || i === "refused") e.storedCap = void 0;else if (i === "dropped" && r.on !== "boot" && e.storedCap !== void 0) {
    let s = r.on === "socket" && r.opened && r.uptimeMs >= n.minUptimeMs;
    if (e.capStrikes = s ? 0 : e.capStrikes + 1, e.capStrikes >= Pro) e.storedCap = void 0;
  }
  if (i === "revoked") return {
    next: "end",
    reason: "revoked"
  };
  if (i === "unavailable") {
    let stallRunStarted = e.stalledSince === void 0;
    if (stallRunStarted) e.stalledSince = Date.now(), e.stalls = 0;
    let h = Math.min(n.stallMinMs * 2 ** e.stalls, n.stallMaxMs / 2),
      g = Math.min(h * 2, n.stallMaxMs);
    return e.stalls++, {
      next: "redial",
      delayMs: Math.round(h + Math.random() * (g - h)),
      stalled: !0,
      stallRunStarted: stallRunStarted
    };
  }
  if (e.stalledSince = void 0, i === "refused") {
    if (e.refusals++, e.refusals > n.maxConsecutiveRefusals) return {
      next: "end",
      reason: "refused"
    };
  }
  if (r.on === "socket" && r.opened) {
    if (r.uptimeMs >= n.stallThresholdMs) e.refusals = 0;
    if (r.uptimeMs >= n.minUptimeMs) e.backoff = 0;
  }
  let l = Math.min(n.capMs, n.baseMs * 2 ** Math.min(e.backoff, 5));
  return e.backoff++, {
    next: "redial",
    delayMs: Math.round(Math.random() * l),
    stalled: !1,
    stallRunStarted: !1
  };
}
function Vt(e, n, r) {
  if (e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer);
  e.state = "closed", e.reconnectTimer = setTimeout(hi, n, e, r), e.reconnectTimer.unref?.();
}
function hi(e, n) {
  e.reconnectTimer = void 0, n(e);
}
async function er(e, n, r, i) {
  let {
      slug: slug_2
    } = e,
    {
      live: live
    } = ee(),
    opened = !1,
    g = !1,
    v,
    S,
    A = () => g || !i(),
    C = Date.now(),
    G = () => opened && e.openedAt > 0 ? Date.now() - e.openedAt : 0,
    L = R => {
      if (A()) return;
      g = !0;
      let uptimeMs = G(),
        ageMs = Date.now() - C;
      if (e.send === v) e.send = void 0, e.state = "closed", e.openedAt = 0;
      r.onEnded(R, {
        opened: opened,
        uptimeMs: uptimeMs,
        ageMs: ageMs
      });
    };
  try {
    let R = await ovt({
      ws: {
        url: Pe(slug_2, {
          versionNotices: !0
        }),
        protocols: [et, n]
      },
      headers: {
        "User-Agent": vI()
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
      transform: k => (r.onFrame(k), null),
      keepalive: r.keepalive,
      onSender: k => {
        if (A()) return;
        v = k, e.send = k, e.state = "open", S = P => k(Ft(slug_2, P)), Qe(live, r.activitySinkKey, S);
      },
      onSenderClosed: () => {
        if (S !== void 0) Ze(live, r.activitySinkKey, S);
        if (v !== void 0 && e.send === v) {
          if (e.send = void 0, e.state === "open") e.state = "closed";
        }
        if (A()) return;
        let taskId_2 = e.taskId,
          P = taskId_2 === void 0 ? void 0 : e.context.taskRegistry.all()[taskId_2];
        if (taskId_2 !== void 0 && P?.status !== "running") {
          L("task_ended");
          return;
        }
        setTimeout(fi, 0, e, A, L).unref?.();
      },
      onLifecycle: (k, P) => {
        if (A()) return;
        if (k === "open") {
          opened = !0, e.everOpened = !0, e.openedAt = Date.now(), r.onOpen();
          return;
        }
        L(P);
      }
    }, e.context);
    if (e.taskId = R.data.taskId, !i()) return Sh(R.data.taskId, e.context.taskRegistry, {
      quiet: !0
    }), {
      outcome: "stale"
    };
    return {
      outcome: "armed"
    };
  } catch (error_2) {
    return t(`[${r.label}] connect failed slug=${slug_2}: ${error_2 instanceof Error ? error_2.name : "error"}`), {
      outcome: "error",
      error: error_2
    };
  }
}
var gi = "tengu_slate_lantern_hush",
  bi = [600, 86400],
  _i = [25, 600],
  Si = 50,
  vi = f(() => {
    let e = E().optional().catch(void 0);
    return u({
      idleAfterS: e,
      idleKeepaliveS: e
    });
  });
function tr(e, [n, r]) {
  return Math.min(Math.max(Math.round(e), n), r);
}
function wi() {
  let e = x(gi, null);
  if (typeof e === "string") e = ct(e, !1);
  let n = vi().safeParse(e),
    r = n.success ? n.data : {},
    idleAfterMs = r.idleAfterS === void 0 || r.idleAfterS <= 0 ? 0 : tr(r.idleAfterS, bi) * 1000,
    idleKeepaliveMs = (r.idleKeepaliveS === void 0 ? Si : tr(r.idleKeepaliveS, _i)) * 1000;
  return {
    idleAfterMs: idleAfterMs,
    idleKeepaliveMs: idleKeepaliveMs
  };
}
function Ai(e, n) {
  if (bRn()) return 0;
  let r = Math.max(Dto(), Gm(), jY() ?? 0, e.lastArtifactToolCallAt);
  return Math.max(0, n - r);
}
function it(e, n, r = Date.now()) {
  let i = wi();
  if (i.idleAfterMs <= 0) return n;
  return Ai(e, r) >= i.idleAfterMs ? Math.max(i.idleKeepaliveMs, n) : n;
}
var Ut = f(() => u({
    tag: o(),
    ver: o(),
    replay: M().optional()
  })),
  Gt = "INVALIDATE_TAG_LIVE",
  $t = "INVALIDATE_TAG_SHARED",
  rr = "INVALIDATE_TAG_HEAD",
  ir = f(() => u({
    commentsEmpty: M(),
    readAtMs: E().int().positive().max(8640000000000000)
  }));
function Ht(e) {
  return e * 3 + 5000;
}
function Ri() {
  return a.CLAUDE_CODE_ARTIFACT_PRESENCE ?? x("tengu_brass_plover", !1);
}
function ot(e) {
  if (!Ri()) return "flag_off";
  return qn(e);
}
function Ae() {
  return ee().presence;
}
function Fe(e) {
  return !e.stopped && Ae().conns.get(e.slug) === e;
}
function or(e) {
  let {
    slug: slug_3,
    url: url
  } = e;
  try {
    let i = ot(slug_3);
    if (i !== null) {
      if (i !== "flag_off") t(`[artifactPresence] not arming slug=${slug_3}: ${i}`);
      return;
    }
    let l = Ae();
    if (l.declined.has(slug_3)) return;
    let s = lZe(e.context);
    l.dispose = Li, l.accountChanged = Wi, l.disposeSlug = xi, l.retireSlug = ur;
    let h = l.conns.get(slug_3);
    if (h !== void 0 && !h.stopped) {
      if (h.url = url, h.stalledSince !== void 0 && h.reconnectTimer !== void 0) Vt(h, Math.round(Math.random() * l.timing.capMs), ar);
      return;
    }
    yi(l, slug_3, url, s);
  } catch (error) {
    t(`[artifactPresence] arm threw slug=${slug_3}: ${error instanceof Error ? error.name : "error"}`);
  }
}
function yi(e, slug_4, url_2, context) {
  let l = {
    slug: slug_4,
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
  e.conns.set(slug_4, l), jro(ki), sr(l, "initial").catch(s => {
    t(`[artifactPresence] connect threw slug=${slug_4}: ${s instanceof Error ? s.name : "error"}`), we(l, {
      on: "dial_error",
      deterministic: !1
    });
  });
}
var ki = {
  closeByTaskId: e => Ei(e)
};
function Ei(e) {
  let n = KRo();
  if (n === void 0) return !1;
  for (let r of n.conns.values()) {
    if (r.taskId !== e) continue;
    return r.taskId = void 0, n.declined.add(r.slug), re(r), !0;
  }
  return !1;
}
async function sr(e, n) {
  let r = ot(e.slug);
  if (r !== null) {
    t(`[artifactPresence] closing slug=${e.slug}: ${r}`), re(e);
    return;
  }
  e.state = "connecting";
  let i = await zn(e, {
    feature: "artifact_presence",
    isCurrent: () => Fe(e)
  });
  switch (i.outcome) {
    case "stale":
      return;
    case "not_found":
      re(e);
      return;
    case "other_org":
    case "public_outside_org":
      p("artifact_presence", i.outcome), re(e);
      return;
    case "boot_failed":
      {
        let l = {
          on: "boot",
          status: i.status,
          noAnswer: i.noAnswer,
          elapsedMs: i.elapsedMs
        };
        if (n === "initial" && Qn(e, l, Ae().timing)) t(`[artifactPresence] boot failed for slug=${e.slug}; no presence connection`), re(e);else we(e, l);
        return;
      }
    case "not_admitted":
      t(`[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`), re(e);
      return;
    case "owner_changed":
      p("artifact_presence", "owner_changed"), re(e);
      return;
    case "token":
      await Ti(e, i.token);
      return;
  }
}
async function Ti(e, n) {
  let {
      timing: timing
    } = Ae(),
    {
      slug: slug_5
    } = e,
    l = !e.everOpened;
  e.refusedAdmission = !1;
  let s = await er(e, n, {
    description: `presence on artifact ${e.url}`,
    keepalive: {
      openFrames: [],
      frame: b({
        kind: "ping",
        slug: slug_5
      }),
      intervalMs: timing.keepaliveMs,
      sendEveryMs: () => it(ee().live, timing.keepaliveMs),
      deadlineMs: timing.keepaliveDeadlineMs ?? Ht(timing.keepaliveMs)
    },
    onFrame: g => Ci(e, g),
    onOpen: () => {
      if (l) _("artifact_presence", {
        connected: !0
      });
    },
    onEnded: (detail, v) => {
      let refusedAdmission = e.refusedAdmission;
      if (e.refusedAdmission = !1, refusedAdmission && detail !== bZe) {
        we(e, jn);
        return;
      }
      if (v.opened) {
        if (detail !== _Ze && detail !== bZe) p("artifact_presence", `closed_${detail ?? "unknown"}`);
      } else {
        let A = mpe(detail);
        m("artifact_presence", "connect_failed", A === null ? void 0 : {
          http_status: A.status,
          cf_mitigated: A.cfMitigated
        });
      }
      we(e, {
        on: "socket",
        detail: detail,
        ...v
      });
    },
    handshakeDeadlineMs: timing.handshakeDeadlineMs,
    activitySinkKey: `presence:${slug_5}`,
    label: "artifactPresence"
  }, () => Fe(e));
  if (s.outcome !== "error") return;
  let deterministic = s.error instanceof gze && !s.error.message.startsWith("could not resolve");
  if (!Fe(e)) return;
  if (l && deterministic) {
    m("artifact_presence", "ws_open_error"), re(e);
    return;
  }
  p("artifact_presence", "ws_open_error"), e.state = "closed", we(e, {
    on: "dial_error",
    deterministic: deterministic
  });
}
function we(e, n) {
  if (!Fe(e)) return;
  let r = Zn(e, Ae().timing, n);
  if (r.next === "end") {
    p("artifact_presence", r.reason === "revoked" ? "closed_4403" : "refused_gave_up"), re(e);
    return;
  }
  if (r.stallRunStarted) {
    let http_status = n.on === "boot" ? n.status : n.on === "socket" ? mpe(n.detail)?.status : void 0;
    p("artifact_presence", "stall_run_started", {
      boot: n.on === "boot",
      ...(http_status !== void 0 && {
        http_status: http_status
      })
    });
  }
  Vt(e, r.delayMs, ar);
}
function ar(e) {
  if (!Fe(e)) return;
  sr(e, "reconnect").catch(n => {
    t(`[artifactPresence] reconnect threw slug=${e.slug}: ${n instanceof Error ? n.name : "error"}`), we(e, {
      on: "dial_error",
      deterministic: !1
    });
  });
}
function re(e) {
  rt(e);
  let n = Ae();
  if (n.conns.get(e.slug) === e) n.conns.delete(e.slug);
}
function Ci(e, n) {
  if (e.stopped || n.charCodeAt(0) !== 123) return;
  let r;
  try {
    r = Vo(n);
  } catch {
    return;
  }
  let i = nt().safeParse(r);
  if (!i.success) return;
  let {
    kind: kind,
    slug: slug_6,
    actor: actor,
    payload: payload
  } = i.data;
  if (actor !== void 0 || slug_6 !== void 0 && slug_6 !== e.slug) return;
  if (Jn(e, kind, payload)) return;
  switch (kind) {
    case "join_denied":
      {
        let v = De().safeParse(payload).data?.reason;
        if (v === Hn) {
          m("artifact_presence", "join_denied"), re(e);
          return;
        }
        if (p("artifact_presence", "join_denied"), v === Kn) e.storedCap = void 0;
        if (e.refusedAdmission = !0, e.taskId !== void 0) try {
          Sh(e.taskId, e.context.taskRegistry, {
            quiet: !0
          });
        } catch {}
        return;
      }
    case "ctrl:comment":
      nr(e.slug)?.comment();
      return;
    case "ctrl:invalidate":
      {
        let v = Ut().safeParse(payload);
        if (v.success && (v.data.tag === Gt || v.data.tag === $t)) nr(e.slug)?.ver(v.data.ver, "sync");
        return;
      }
    default:
      return;
  }
}
function nr(e) {
  let n = ee().live.supervisors.get(e);
  return n !== void 0 && !n.stopped ? n.wake : void 0;
}
function xi(e, n) {
  e.declined.delete(n), ur(e, n);
}
function ur(e, n) {
  let r = e.conns.get(n);
  if (r !== void 0) re(r);
}
function Li(e) {
  e.declined.clear();
  for (let n of [...e.conns.values()]) rt(n);
  e.conns.clear();
}
function Wi(e, n) {
  for (let r of [...e.conns.values()]) {
    if (wy(r.owner, n)) continue;
    if (rt(r), e.conns.get(r.slug) === r) e.conns.delete(r.slug);
  }
}
function nRn(e, n) {
  return Kt(e, n) >= 0;
}
function Kt(e, n) {
  return Bt(e, n).at(-1) ?? -1;
}
function Bt(e, n) {
  let r = n.toLowerCase(),
    i = [];
  for (let l = 0; l < e.length; l++) {
    let s = e[l];
    try {
      let h = !Cce(s) ? null : s.type === "user" ? lr(s.message?.content) : s.type === "attachment" && s.attachment.type === "queued_command" ? lr(s.attachment.prompt) : null;
      if (h !== null && Ni(h, r)) i.push(l);
    } catch {}
  }
  return i;
}
var cr = /^https?:\/\//i,
  Ii = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i,
  fr = "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000",
  regExp = new RegExp(`[${fr}]+`),
  Mi = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/,
  pr = "(<[{'\"`*_~",
  regExp_2 = new RegExp(`^[${pr}]+`),
  Di = /[.,;:!?)\]}'">`*_~\u200b]+$/,
  regExp_3 = new RegExp(`(?<=^|[${fr}])[${pr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`, "g"),
  Vi = "artifact-files";
function Ni(e, n) {
  for (let r of e.matchAll(regExp_3)) if (dr(r[1], n)) return !0;
  return e.split(regExp).some(item => dr(item.replace(regExp_2, ""), n));
}
function dr(e, n) {
  let r = e.replace(Di, "");
  if (Mi.test(r)) return !1;
  if (cr.test(r) || Ii.test(r)) {
    let l = cr.test(r) ? r : `https://${r}`;
    return Fq(l)?.slug === n;
  }
  let i = r.toLowerCase().split(/[/\\]/);
  if (i.length > 1) return i.some((item, index) => item === n && i[index - 1] === Vi);
  return i[0] === n || u$(r) === n;
}
function lr(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let n = [];
  for (let r of e) if (typeof r === "object" && r !== null && "type" in r && r.type === "text" && "text" in r && typeof r.text === "string") n.push(r.text);
  return n.length > 0 ? n.join(`
`) : null;
}
var Ui = "Could not register a durable wake subscription; publishing and reading still work.",
  Gi = {
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
  $i = new Map(Object.entries(Gi));
function A3t(e, n) {
  let r = $i.get(e) ?? Ui;
  if (n === void 0) return r;
  let i = /[.!?]['")\]]*$/.test(n) ? "" : ".";
  return `${r} Server said: "${n}"${i}`;
}
function Gar(e) {
  if (e.status === void 0) return;
  if (e.relayed) return e.fromGateway ? `HTTP ${e.status} via the session gateway, not attributed to the artifact service` : `HTTP ${e.status} from the artifact service via the session gateway`;
  if (e.gatewayDeclined === void 0) return `HTTP ${e.status} from the artifact service`;
  return e.gatewayDeclined === 0 ? `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer` : `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}
var Hi = new Set(["no_originator", "client_policy", "no_auth", "session_not_found", "unavailable_in_deployment", "tool_not_offered", "org_not_enabled", "relay_not_served", "subscribe_forbidden", "relay_unavailable", "session_device_bound", "invalid_slug"]);
function rRn(e) {
  return Hi.has(e) ? null : XLn;
}
function Ato(e) {
  let {
    armsInFlight: armsInFlight
  } = ee().durable;
  armsInFlight.set(e, (armsInFlight.get(e) ?? 0) + 1);
}
function xto(e, n) {
  let durable = ee().durable,
    i = (durable.armsInFlight.get(e) ?? 1) - 1;
  if (i > 0) durable.armsInFlight.set(e, i);else durable.armsInFlight.delete(e);
  if (n?.outcome === "subscribed" || n?.outcome === "already_watching") return qar(e), {
    settled: "registered"
  };
  let reason = n === void 0 ? "arm_threw" : n.reason;
  if (reason === "stop_latched" || durable.stopLatches.isStopped(e)) return {
    settled: "stopped"
  };
  let s = durable.armOutcomes.get(e),
    h = n?.outcome === "failed" && n.latched && s?.reason === reason ? s : void 0,
    detail_2 = (n?.outcome === "failed" ? Gar(n) : void 0) ?? h?.detail,
    serverMessage = (n?.outcome === "failed" ? n.serverMessage : void 0) ?? h?.serverMessage,
    S = {
      reason: reason,
      ...(detail_2 !== void 0 && {
        detail: detail_2
      }),
      ...(serverMessage !== void 0 && {
        serverMessage: serverMessage
      })
    };
  return JLn(durable.armOutcomes, e, {
    ...S,
    at: Date.now()
  }, KLn), i > 0 ? {
    settled: "pending",
    ...S
  } : {
    settled: "unregistered",
    ...S
  };
}
function Var(e) {
  let durable_2 = ee().durable;
  for (let [r, i] of durable_2.armOutcomes) if (i.reason === e) durable_2.armOutcomes.delete(r);
  for (let r of durable_2.announcedArmFailures) if (r.endsWith(`:${e}`)) durable_2.announcedArmFailures.delete(r);
}
function qar(e) {
  let durable_3 = ee().durable;
  durable_3.armOutcomes.delete(e), QLn(durable_3.announcedArmFailures, e);
}
function hr(e, n) {
  return mAt(ee().durable.announcedArmFailures, `${e}:${n}`, YLn);
}
function Pto(e) {
  let durable_4 = ee().durable,
    r = [],
    i = new Set();
  for (let slug_7 of durable_4.armsInFlight.keys()) {
    if (!mr(durable_4, slug_7, e)) continue;
    r.push({
      slug: slug_7,
      state: "arming"
    }), i.add(slug_7);
  }
  for (let [slug_8, s] of durable_4.armOutcomes) {
    if (!mr(durable_4, slug_8, e) || i.has(slug_8)) continue;
    r.push({
      slug: slug_8,
      state: "failed",
      reason: s.reason,
      ...(s.detail !== void 0 && {
        detail: s.detail
      }),
      ...(s.serverMessage !== void 0 && {
        serverMessage: s.serverMessage
      }),
      at: s.at
    });
  }
  return r;
}
function mr(e, n, r) {
  return (r === void 0 || n === r) && !e.rows.has(n) && !e.stopLatches.isStopped(n);
}
var Ki = "frame-live.v1",
  queue = {
    enqueuePendingNotification: e => oa(e)
  },
  intervalMs = 25000;
function Kar() {
  ee().live.lastArtifactToolCallAt = Date.now();
}
var zi = 90000,
  zt = "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, \u2715 the watch in the tasks list or use the kill-all-agents gesture.",
  Yi = "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";
function Ji(e, slug_9, r) {
  let i = e.supervisors.get(slug_9);
  if (i !== void 0) i.explicit = !1;
  for (let l of Object.values(r.all())) if (yM(l) && l.status === "running" && l.frameLive?.slug === slug_9 && l.frameLive.explicit) r.update(l.id, s => yM(s) && s.frameLive !== void 0 ? {
    ...s,
    description: Yt(En({
      slug: slug_9,
      env: so()
    }), !1, s.frameLive.armedVia),
    frameLive: {
      ...s.frameLive,
      explicit: !1
    }
  } : s);
}
function Xi(slug_10, n) {
  let live_2 = ee().live,
    storageV5 = live_2.supervisors.get(slug_10)?.context.storageV5 ?? blr();
  O3t(storageV5);
  let l;
  if (n.taskStop) {
    if (ee().durable.stopLatches.confirmStop(slug_10), !hM(slug_10)) hze(slug_10, {
      storageV5: storageV5
    }), import("B:/~BUN/root/chunk-h77xf4r2.js").then(h => h.notifyTakenOverSlugStopped(slug_10));
    let {
      wasWatching: wasWatching
    } = vr({
      slug: slug_10,
      taskRegistry: n.taskRegistry,
      announce: !n.running,
      killRow: h => {
        if (h.id !== n.taskId) Sh(h.id, n.taskRegistry, {
          userStop: !0
        });
      }
    });
    l = wasWatching;
  } else {
    if (!Qi(live_2, slug_10, n)) return !1;
    te(live_2, slug_10), l = !0;
  }
  if (n.modelOrigin !== !0) CRn(slug_10, storageV5);
  return l;
}
function vr(e) {
  let {
      slug: slug_11,
      taskRegistry: taskRegistry
    } = e,
    live_3 = ee().live,
    l = live_3.supervisors.get(slug_11),
    wasWatching_2 = l !== void 0 && !l.stopped || live_3.inFlightSubscribes.has(slug_11);
  if (l?.autoReactWiring !== void 0) Vro(slug_11);
  let h = Object.values(taskRegistry.all()).filter(item => yM(item) && item.status === "running" && item.frameLive?.slug === slug_11);
  if (e.announce && l !== void 0 && !l.stopped && h.length === 0 && (l.taskId !== void 0 || l.timer !== void 0)) ut(live_3, l, "watching this artifact was stopped just now");else te(live_3, slug_11);
  for (let g of h) wasWatching_2 = !0, e.killRow(g);
  if (wasWatching_2 && bg(slug_11)) T6t(slug_11);
  return plr(slug_11), {
    wasWatching: wasWatching_2
  };
}
function Qi(e, n, r) {
  let i = e.supervisors.get(n);
  if (i === void 0 || i.stopped) return !1;
  if (r.running) return i.taskId === void 0 || i.taskId === r.taskId;
  if (i.taskId === void 0 || i.taskId !== r.taskId) return !1;
  return i.timer !== void 0 || e.inFlightSubscribes.has(n);
}
function te(e, n) {
  let r = e.supervisors.get(n);
  if (r) iDt(r), e.supervisors.delete(n);
  mXt(n), xan(n), Ve(n)?.sourceEnded();
}
function Re(e, n, r) {
  if (r) return {
    ...n,
    humanTurnSnapshot: !0
  };
  if (e === void 0) return n;
  let {
    humanTurnSnapshot: humanTurnSnapshot,
    ...l
  } = n;
  return {
    ...l,
    context: e.context,
    publishTranscript: e.publishTranscript,
    ...(e.humanTurnSnapshot && {
      humanTurnSnapshot: !0
    })
  };
}
function gr(e, n, r) {
  let i = e.supervisors.get(n)?.autoReactWiring;
  return i?.humanTurnSnapshot === !0 && (r?.humanTurnSnapshot !== !0 || i.context !== r.context);
}
function br(e, n) {
  let r = e.supervisors.get(n.slug);
  if (r && !r.stopped) {
    if (n.carriedVer !== void 0) r.carriedVer = n.carriedVer;
    let l = r.armedVia === "mcp_write";
    if (!n.machineArm) {
      if (r.lastActivityAt = Date.now(), r.timer !== void 0) clearTimeout(r.timer), r.timer = void 0;
      if (r.stalledSince = void 0, r.lastStalledAt = void 0, r.stallOutAfterMs = void 0, r.taskId === void 0 && !e.inFlightSubscribes.has(n.slug) && Loe(n.context, n.slug).length === 0) r.watchedSince = Date.now(), r.armedVia = n.armedVia, kRn(n.slug);else if (n.armedVia === "publish") r.armedVia = "publish";else if (r.armedVia === "mcp_write") r.armedVia = n.armedVia;
      if (l && r.armedVia !== "mcp_write") CU(e, n.slug);
    }
    if (r.explicit = r.explicit || n.explicit, n.autoReactWiring !== void 0) r.autoReactWiring = Re(r.autoReactWiring, n.autoReactWiring, n.humanTurnWiring === !0);
    return r;
  }
  let i = {
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
  return e.supervisors.set(n.slug, i), kRn(n.slug, i.watchedSince), i;
}
function Zi(e, n, r, i) {
  if (e.supervisors.get(r) === n) n.taskId = i;
}
function eo(e, n) {
  let {
    rewatchTiming: rewatchTiming
  } = e;
  if (rewatchTiming.idleTtlMs <= 0) return !1;
  if (n.explicit || wr(e, n) || Date.now() - n.lastActivityAt < rewatchTiming.idleTtlMs) return !1;
  return !(n.autoReactWiring !== void 0 && wu() && (!Zm(n.slug) || bg(n.slug)));
}
function wr(e, n) {
  return n.slug === e.mostRecentPublishSlug && n.armedVia !== "mcp_write";
}
function x3t(e, n) {
  return e ? "watch" : n === "watch" ? "watch_stopped" : n;
}
function oRn(e) {
  return Hro.find(item => item === e) ?? "publish";
}
function Qwt(e) {
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
function to(e, n) {
  let idle = Qwt(n.armedVia).idle,
    i = n.armedVia === "watch" ? "(your watch request was later stopped; idle auto-armed watches are retired)" : "(idle auto-armed watches are retired)";
  return `it was armed ${idle} and has seen no activity for over ${Zt(e.rewatchTiming.idleTtlMs, {
    hideTrailingZeros: !0
  })} ${i}`;
}
function no(e, n, r) {
  return e === I3t || n >= r.stallThresholdMs;
}
function ro(e) {
  let n = mpe(e);
  return n !== null && (mW(n.status) || n.cfMitigated);
}
function io(e) {
  return Math.max(e.stallMaxMs, e.longStallMaxMs) + 2 * $On + e.handshakeDeadlineMs + 60000;
}
function Xt(e, n, r) {
  let {
      uptimeMs: uptimeMs_2,
      resumeNeverOpened = !1,
      stalled = !1
    } = r,
    {
      rewatchTiming: h
    } = e,
    g = e.supervisors.get(n);
  if (!g || g.stopped) return;
  if (ee().durable.stopLatches.isStopped(n)) {
    if (p("artifact_live_subscribe", "stop_latched"), resumeNeverOpened) he(e, g, "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed", "could not connect", {
      advice: "tell the user, and call resume_replies again only if they still want auto-replies resumed"
    });else ut(e, g);
    return;
  }
  if (eo(e, g)) {
    _("artifact_live_subscribe", {
      idle_retired: !0
    }), he(e, g, to(e, g), "idle", {
      advice: advice,
      passive: !0
    });
    return;
  }
  let v = !1,
    S = !1;
  if (stalled) {
    let R = Date.now();
    if (g.stalledSince === void 0 || g.lastStalledAt === void 0 || g.stallOutAfterMs === void 0 || R - g.lastStalledAt > io(h)) {
      g.stalledSince = R, g.stallOutAfterMs = h.maxStallMs + Math.round(Math.random() * h.stallOutJitterMs);
      let http_status_2 = r.httpStatus ?? mpe(r.closeCode)?.status;
      p("artifact_live_subscribe", "stall_run_started", {
        boot: r.closeCode === void 0,
        ...(http_status_2 !== void 0 && {
          http_status: http_status_2
        })
      });
    } else S = !0;
    g.lastStalledAt = R, v = R - g.stalledSince >= g.stallOutAfterMs;
  } else if (g.stalledSince = void 0, g.lastStalledAt = void 0, g.stallOutAfterMs = void 0, uptimeMs_2 >= h.minUptimeMs) g.consecutiveFailures = 0;else if (r.reuseRefused !== !0) g.consecutiveFailures++;
  if (g.consecutiveFailures > h.maxConsecutiveFailures || v) {
    if (v) p("artifact_live_subscribe", "rewatch_gave_up", {
      stalled: !0
    });else p("artifact_live_subscribe", "rewatch_gave_up");
    he(e, g, "the live connection kept failing and reconnecting has stopped", Vr, {
      advice: advice_2,
      passive: !0
    });
    return;
  }
  let leaseMode = B7(),
    longStall = stalled && S && (mpe(r.closeCode)?.cfMitigated === !0 || !leaseMode || g.lease === void 0 || !Ylr(g.lease, h, ee().accountEpoch, Date.now() + h.stallMinMs)),
    spread = uptimeMs_2 > 0 && uptimeMs_2 >= h.minUptimeMs && r.closeCode !== void 0 && !(r.expired === !0 && g.transport !== "sync"),
    L = Mro({
      timing: h,
      consecutiveFailures: g.consecutiveFailures,
      leaseMode: leaseMode,
      stalled: stalled,
      longStall: longStall,
      spread: spread
    });
  if (leaseMode && spread && r.expired !== !0) g.spreadReconnect = !0;
  if (g.timer !== void 0) clearTimeout(g.timer);
  g.timer = setTimeout(Ar, L, e, n), g.timer.unref?.(), g.nextRewatchAt = Date.now() + L;
}
function he(e, n, r, i, {
  advice: advice_3 = "watch it again if you still need that",
  passive = !1
} = {}) {
  if (e.supervisors.get(n.slug) === n) {
    if (te(e, n.slug), !ee().durable.stopLatches.isStopped(n.slug)) {
      if (Mr(e, n.slug, "ended", i), n.autoReactWiring !== void 0) import("B:/~BUN/root/chunk-h77xf4r2.js").then(v => v.handBackTakenOverSlug(n.slug));
    }
  } else iDt(n);
  let resumeAnnounce = n.resumeAnnounce;
  if (resumeAnnounce !== void 0) n.resumeAnnounce = void 0, resumeAnnounce.onGiveUp();
  if (n.armedVia === "mcp_write") return;
  let displayName = qSe(() => n.autoReactWiring?.title, n.url);
  oa({
    value: qi({
      taskType: M$,
      summary: qt(kro(displayName, i)),
      body: `
<event>${qt(`Watch on ${n.url} ended \u2014 ${r}. This session no longer keeps track of new versions of it; ${advice_3}.`)}</event>`
    }),
    mode: "task-notification",
    ...(passive && {
      passive: !0
    }),
    priority: "next",
    origin: {
      kind: "task-notification",
      source: M$,
      slug: n.slug,
      displayName: displayName,
      watchEnded: !0
    },
    agentId: qe()
  });
}
function ut(e, n, r = "watching this artifact was stopped earlier in this session") {
  n.resumeAnnounce = void 0, he(e, n, r, "stopped", {
    advice: "do not watch it again unless the user asks you to"
  });
}
function X(e, n, r, reason_2, l, {
  unavailable = !1,
  httpStatus: httpStatus
} = {}) {
  return Qt(e, n, r, {
    unavailable: unavailable,
    httpStatus: httpStatus
  }), Co(e, n, r, reason_2, l), {
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
function Qt(e, n, r, {
  unavailable: i = !1,
  httpStatus: httpStatus_2
} = {}) {
  if (r) return;
  let s = e.supervisors.get(n);
  if (s !== void 0 && !s.stopped && s.timer === void 0) Xt(e, n, {
    uptimeMs: 0,
    stalled: i,
    ...(httpStatus_2 !== void 0 && {
      httpStatus: httpStatus_2
    })
  });
}
async function Ar(e, n) {
  let r = e.supervisors.get(n);
  if (!r || r.stopped) return;
  if (r.timer = void 0, ee().durable.stopLatches.isStopped(n)) {
    p("artifact_live_subscribe", "stop_latched"), ut(e, r);
    return;
  }
  if (r.autoReactWiring !== void 0 && Zm(n) && !bg(n)) delete r.autoReactWiring;
  _("artifact_live_subscribe", {
    rewatch_attempt: !0
  });
  let i = await pe(e, {
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
  if (i.outcome === "skipped" && i.reason === "stop_latched") return;
  if (r.stopped || e.supervisors.get(n) !== r) {
    if (i.outcome === "skipped") Qt(e, n, void 0, {
      unavailable: i.unavailable === !0,
      httpStatus: i.httpStatus
    });
    return;
  }
  if (i.outcome === "skipped") if (i.reason === "boot_failed" || i.reason === "ws_open_error" || i.reason === "sync_unavailable") r.lastFailure = i.reason, Xt(e, n, {
    uptimeMs: 0,
    stalled: i.unavailable === !0,
    ...(i.httpStatus !== void 0 && {
      httpStatus: i.httpStatus
    })
  });else p("artifact_live_subscribe", `rewatch_stopped_${i.reason}`), he(e, r, GSe(i.reason) ?? i.reason, nn[i.reason] ?? Ur, Mo(i.reason));
}
async function oo(e, slug_12) {
  let r = e.supervisors.get(slug_12),
    i = r?.lease;
  if (!B7() || r === void 0 || r.stopped || i === void 0 || i.probed) return;
  i.probed = !0;
  let l;
  try {
    l = await _Xt({
      slug: slug_12,
      env: so()
    }, r.abort.signal, {
      agentPeer: at(slug_12),
      syncLive: at(slug_12),
      watchBoot: !0,
      credentials: r.context.credentials
    });
  } catch {
    return;
  }
  if (e.supervisors.get(slug_12) !== r || r.stopped) return;
  let s = l.err === null ? l.assetToken === void 0 ? "public_outside_org" : void 0 : l.status === 404 ? "not_found" : UU(l) ? "other_org" : void 0;
  if (s !== void 0) {
    p("artifact_live_subscribe", `read_stopped_${s}`), he(e, r, GSe(s) ?? s, nn[s] ?? s, {
      advice: VSe(s)
    });
    for (let v of Object.values(r.context.taskRegistry.all())) if (yM(v) && v.status === "running" && v.frameLive?.slug === slug_12) Sh(v.id, r.context.taskRegistry, {
      quiet: !0
    });
    return;
  }
  if (l.err === null && FOn(l.data) !== void 0) {
    _("artifact_live_subscribe", {
      read_refused_boot_ok: !0
    });
    return;
  }
  let h = l.err === null ? "tokenless" : l.status ?? l.errorCode;
  if (p("artifact_live_subscribe", `read_refused_boot_${h}`), (h === "tokenless" || typeof h === "number" && h < 500 && h !== 408 && h !== 429) && r.lease === i) delete r.lease, delete r.renewable;
}
function Rr(e) {
  return gRn(new URL(`/edge-api/frame-live/${e}/ws`, dNo()));
}
var ao = 8;
function uo(e) {
  let {
      slug: slug_13,
      url: url_3,
      ownPublishes: ownPublishes,
      getKnownVer: getKnownVer,
      autoReact: autoReact,
      onSurfaced: onSurfaced
    } = e,
    g = e.surfacedVers ?? [];
  function v(R) {
    if (g.push(R), g.length > ao) g.shift();
  }
  if (e.seedSurfacedVer !== void 0 && !g.includes(e.seedSurfacedVer)) v(e.seedSurfacedVer);
  let S = wpe(Spe, Goe),
    A = !1,
    C = !1;
  function comment() {
    if (yr(slug_13), Lto(slug_13), autoReact && wu()) u7({
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
  function ver(R, k) {
    if (!R || !xA.test(R)) return;
    if (e.presenceOnly?.()) return;
    if (qmr(slug_13, R), g.includes(R)) return;
    let P = k === "sync" && {
      via_sync: !0
    };
    if (I4(ownPublishes, slug_13, R)) {
      _("artifact_live_subscribe", {
        ...(A ? {
          suppressed_own: !0
        } : {
          suppressed_catch_up: !0
        }),
        ...P
      }), A = !0;
      return;
    }
    if (R === getKnownVer()) return;
    if (Y0e(ownPublishes, slug_13)) {
      _("artifact_live_subscribe", {
        suppressed_in_flight: !0,
        ...P
      });
      return;
    }
    if (!S.tryConsume()) {
      if (!C) C = !0, p("artifact_live_subscribe", "ver_rate_suppressed", {
        ...P
      });
      return;
    }
    C = !1, v(R);
    try {
      onSurfaced?.(R);
    } catch {}
    _("artifact_live_subscribe", {
      surfaced: !0,
      passive: Ttt === "passive",
      ...P
    });
  }
  return {
    comment: comment,
    ver: ver
  };
}
function co(e) {
  return n => {
    if (!n.startsWith("{")) return null;
    let r;
    try {
      r = Vo(n);
    } catch {
      return null;
    }
    if (r.kind === "comment") return e.comment(), null;
    if (r.kind === "summon") return null;
    if (typeof r.ver === "string") e.ver(r.ver, "live");
    return null;
  };
}
var lo = /^\d{1,15}$/;
function Ve(e) {
  return ee().liveDocWatch.headSinks.get(e);
}
function yr(e) {
  let live_4 = ee().live,
    r = live_4.supervisors.get(e);
  if (r !== void 0 && !r.stopped && r.armedVia !== "mcp_write" && !live_4.inFlightSubscribes.has(e)) r.lastActivityAt = Date.now();
}
function fo(e, n, r) {
  return i => {
    if (i.charCodeAt(0) !== 123) return null;
    let l;
    try {
      l = Vo(i);
    } catch {
      return null;
    }
    let s = nt().safeParse(l);
    if (!s.success) return null;
    let {
      kind: kind_2,
      actor: actor_2,
      payload: payload_2
    } = s.data;
    if (actor_2 !== void 0 || s.data.slug !== void 0 && s.data.slug !== n) return null;
    switch (kind_2) {
      case "ctrl:comment":
        return e.comment(), null;
      case "ctrl:invalidate":
        {
          let S = Ut().safeParse(payload_2);
          if (!S.success) return null;
          if (S.data.tag === Gt || S.data.tag === $t) e.ver(S.data.ver, "sync");else if (S.data.tag === rr && lo.test(S.data.ver)) yr(n), Ve(n)?.seq(Number(S.data.ver));
          return null;
        }
      case "ctrl:token_refresh":
        {
          let S = Dt().safeParse(payload_2);
          if (S.success && ve(S.data.cap)) r.onTokenRefresh(S.data.cap, S.data.exp);
          return null;
        }
      case "ctrl:token_refresh_declined":
        {
          let S = De().safeParse(payload_2);
          if (S.success && S.data.reason === Pt) r.onExpiryAnnounced();
          return null;
        }
      case "ctrl:comment_hint":
        {
          let S = ir().safeParse(payload_2);
          if (S.success) r.onCommentHint(S.data.commentsEmpty, S.data.readAtMs);
          return null;
        }
      default:
        return null;
    }
  };
}
function kr(e, n, r, i, l, s) {
  if (!s(e, r)) return "dead";
  return i && (Zm(n) ? l && (e.autoReactArmed !== !0 || !bg(n) || bpe(n)) : e.autoReactArmed !== !0) ? "replace" : "keep";
}
function po(e, n) {
  return SZe(e.id) && Aze(e, n);
}
function mo(e, n, r, i) {
  let l = Date.now(),
    s = null;
  for (let h of Object.values(e.taskRegistry.all())) {
    if (!yM(h) || h.status !== "running" || h.frameLive?.slug !== n) continue;
    let g = kr(h, n, l, r, i, Aze);
    if (g !== "dead") {
      if (g === "replace") {
        Sh(h.id, e.taskRegistry, {
          quiet: !0
        });
        continue;
      }
      s = h.id;
      continue;
    }
    Sh(h.id, e.taskRegistry, {
      quiet: !0,
      connectionLost: !0
    });
  }
  return s;
}
function Er(e, n) {
  return Object.values(e.all()).some(item => yM(item) && item.status === "running" && item.frameLive?.slug === n);
}
function ho(e) {
  return YRn(e, wu, {
    includeStopLatched: !0
  });
}
function Zwt(e) {
  return YRn(e, wu);
}
function Doe(e, n) {
  O3t(n?.storageV5), f7(), yZe();
  let live_5 = ee().live,
    i = n?.durable !== !1,
    l = 0,
    s = new Set();
  for (let h of Object.values(e.all())) if (ho(h)) {
    let g = h.autoReactSlug !== void 0 && Zm(h.autoReactSlug) && (!bg(h.autoReactSlug) || hM(h.autoReactSlug));
    if (i) {
      if (Sh(h.id, e, {
        quiet: !0,
        userStop: !0
      }), h.autoReactSlug !== void 0) pvt(h.autoReactSlug), s.add(h.autoReactSlug);
    } else if (h.autoReactSlug !== void 0) s.add(h.autoReactSlug);
    if (!g && !(h.autoReactSlug !== void 0 && !i && Zm(h.autoReactSlug))) {
      if (l++, !i && h.autoReactSlug !== void 0) Cze(h.autoReactSlug), CU(live_5, h.autoReactSlug);
    }
  }
  for (let h of live_5.supervisors.values()) {
    if (h.autoReactWiring === void 0) continue;
    if (i) delete h.autoReactWiring;
    if (i && wu() && (!Zm(h.slug) || s.has(h.slug))) if (Er(e, h.slug) || live_5.inFlightSubscribes.has(h.slug)) Ji(live_5, h.slug, e);else te(live_5, h.slug), CRn(h.slug, h.context.storageV5);
    if (!s.has(h.slug) && wu() && !Zm(h.slug)) if (s.add(h.slug), l++, i) pvt(h.slug), _6t(h.slug);else Cze(h.slug);
  }
  if (i) U3t({
    storageV5: n?.storageV5
  });else if (l > 0) Noe({
    flush: !0,
    storageV5: n?.storageV5
  });
  return l;
}
function en(e, n, r, i) {
  if (!bg(n) || bpe(n) || !wu()) return null;
  let l = Tr(e, n);
  if (l === void 0) return null;
  i?.();
  let {
    live: live_6,
    wakes: wakes
  } = ee();
  b6t(n), wakes.liftedAtScanGeneration.set(n, wakes.scanGeneration), CU(live_6, n);
  let lastWakeArgs = joe(n).lastWakeArgs;
  if (!SZe(l.id) || lastWakeArgs === null) return "cleared";
  return r?.(lastWakeArgs), u7({
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
function Tr(e, n) {
  return Object.values(e.all()).find(item => yM(item) && item.status === "running" && item.autoReactArmed === !0 && item.autoReactSlug === n && Aze(item));
}
function go(e, n) {
  if (n.ownWords) {
    let notice_latch_released = qro(i => Zto(i) || bo(e, wOr(i)));
    if (notice_latch_released > 0) _("artifact_live_subscribe", {
      notice_latch_released: notice_latch_released
    });
  }
  return So(e);
}
function bo(e, n) {
  if (n === void 0) return !1;
  return Object.values(e.all()).some(item => item.startTime >= n && _o(item));
}
function _o(e) {
  let n = e.status === "running" || e.status === "pending";
  if (e.type === "local_bash" || rKe(e)) return n;
  if (!dLe.has(e.type) || e.type === "in_process_teammate") return !1;
  let r = e.status === "completed" && "keepaliveReasons" in e && e.keepaliveReasons instanceof Set && [...e.keepaliveReasons].some(item => item !== "flag:idle-window"),
    i = "resuming" in e && e.resuming === !0;
  return n || r || i;
}
function So(e) {
  let {
    wakes: wakes_2
  } = ee();
  wakes_2.humanTurnAtScanGeneration = wakes_2.scanGeneration;
  let unpaused_on_turn = 0;
  for (let i of [...wakes_2.sweptSlugs]) if (en(e, i) !== null) unpaused_on_turn++;
  if (unpaused_on_turn > 0) _("artifact_live_subscribe", {
    unpaused_on_turn: unpaused_on_turn
  });
  return unpaused_on_turn;
}
function evt() {
  return wu() && klr();
}
function Loe(e, n) {
  let r = [],
    i,
    l = () => i ??= wu(),
    s = ee(),
    userDisarmed = s.autoReact.userDisarmed;
  for (let g of Object.values(e.taskRegistry.all())) {
    if (!yM(g) || g.status !== "running" || g.frameLive === void 0 || n !== void 0 && g.frameLive.slug !== n) continue;
    let v = s.live.supervisors.get(g.frameLive.slug);
    r.push({
      slug: g.frameLive.slug,
      taskId: g.id,
      since: g.frameLive.watchedSince,
      explicit: v?.explicit ?? g.frameLive.explicit,
      connected: Aze(g),
      tokenExpiresAt: v?.lease?.expMs ?? g.frameLive.armedAt + (v?.transport === "sync" ? k6t : GRn),
      armedVia: v?.armedVia ?? g.frameLive.armedVia,
      autoReply: g.autoReactArmed !== !0 ? eg(g.frameLive.slug) ? userDisarmed ? "disarmed" : l() ? "stopped" : "none" : "none" : userDisarmed ? "disarmed" : !l() ? "none" : g.autoReactSlug !== void 0 && eg(g.autoReactSlug) ? bg(g.autoReactSlug) ? hM(g.autoReactSlug) ? "yielded" : "paused" : "stopped" : vo(g.frameLive.slug)
    });
  }
  return r.sort((itemA, itemB) => itemA.since - itemB.since);
}
function vo(e) {
  let n = ee().autoReact.artifacts.get(e),
    r = n?.lastProbeDeniedBy ?? null;
  if (r !== null) return r === "denied_by_auto_mode" ? "declined" : "denied";
  return n?.lastReplyDeclinedByAutoMode === !0 ? "declined" : "armed";
}
function sRn(e, n) {
  let {
      live: live_7,
      autoReact: autoReact_2,
      wakes: wakes_3
    } = ee(),
    s = [],
    h,
    g = () => h ??= wu();
  for (let slug_14 of wakes_3.stoppedSlugs) {
    if (n !== void 0 && slug_14 !== n) continue;
    if (Er(e.taskRegistry, slug_14) || live_7.inFlightSubscribes.has(slug_14) || !autoReact_2.userDisarmed && !g()) continue;
    let S = live_7.supervisors.get(slug_14),
      A = S !== void 0 && !S.stopped ? S : void 0;
    s.push({
      slug: slug_14,
      ...(A !== void 0 && {
        since: A.watchedSince,
        explicit: A.explicit,
        armedVia: A.armedVia
      }),
      stopKind: bg(slug_14) ? hM(slug_14) ? "yielded" : "interrupt" : "user",
      autoReply: autoReact_2.userDisarmed ? "disarmed" : "stopped"
    });
  }
  return s.sort((itemA, itemB) => (itemA.since ?? Number.POSITIVE_INFINITY) - (itemB.since ?? Number.POSITIVE_INFINITY));
}
function st(e, n, {
  forPublish = !1
} = {}) {
  let {
      supervisors: supervisors
    } = e,
    l = [];
  for (let row of Loe(n)) {
    let h = supervisors.get(row.slug),
      g = Lr(e, row, n);
    if (g === "explicit" || g === "most_recent_publish") continue;
    if (g === "auto_reply") {
      if (!forPublish || Xto(row.slug)) continue;
      l.push({
        row: row,
        tier: 3
      });
      continue;
    }
    l.push({
      row: row,
      tier: h === void 0 || h.stopped ? 0 : h.armedVia === "mcp_write" ? 1 : 2
    });
  }
  return l.sort((itemA, itemB) => {
    if (itemA.tier !== itemB.tier) return itemA.tier - itemB.tier;
    let g = supervisors.get(itemA.row.slug),
      v = supervisors.get(itemB.row.slug),
      S = g && !g.stopped ? g.lastActivityAt : 0,
      A = v && !v.stopped ? v.lastActivityAt : 0;
    return S - A || itemA.row.since - itemB.row.since;
  }).map(item => item.row);
}
function Cr(e, n, r, i) {
  let l = e.supervisors.get(n.slug),
    s = Lr(e, n, r) === "auto_reply";
  if (Sh(n.taskId, r.taskRegistry, {
    quiet: !0
  }), s && !hM(n.slug)) kOe(n.slug, {
    storageV5: l?.context.storageV5 ?? blr()
  });
  if (l !== void 0 && !l.stopped) he(e, l, i?.why ?? `this session reached its limit of ${vw} artifact watches and made room to watch a newer one${s ? "; it was auto-replying to comments, and that stops until its next publish" : ""}`, i?.shortReason ?? "made room for a newer watch", i !== void 0 ? {
    advice: advice_2,
    passive: !0
  } : s ? {
    advice: "do not watch it again unless the user asks"
  } : void 0);else te(e, n.slug);
  _("artifact_live_subscribe", {
    evicted_least_active: !0,
    ...(s && {
      evicted_autoreply: !0
    })
  });
}
function xr(e, n) {
  let r = e.supervisors.get(n);
  if (r === void 0 || r.stopped) return null;
  if (r.explicit) return "explicit";
  if (wr(e, r)) return "most_recent_publish";
  return r.autoReactWiring !== void 0 && wu() && (!Zm(n) || bg(n)) ? "auto_reply" : null;
}
function _r(e, n) {
  return xr(e, n) !== null;
}
function Lr(e, n, r) {
  let i = e.supervisors.get(n.slug);
  if (i !== void 0 && !i.stopped) return xr(e, n.slug);
  let l = r.taskRegistry.all()[n.taskId];
  return n.explicit ? "explicit" : Zwt(l) ? "auto_reply" : null;
}
function wo(e, n) {
  let r = st(e, n);
  if (r.length === 0) return !1;
  return Cr(e, r[0], n, {
    why: `this session reached its limit of ${vw} artifact watches and made room for a protected watch to reconnect`,
    shortReason: shortReason
  }), !0;
}
function Yar() {
  let live_8 = ee().live;
  live_8.handoffGeneration += 1, live_8.bootingWiredArms.clear(), Rxe(fvt(F$())), Noe({
    flush: !0
  }), Oto(), f7(), yZe();
  for (let n of [...live_8.supervisors.keys()]) te(live_8, n);
  live_8.armOutcomes.clear(), live_8.announcedArmFailures.clear(), Yro();
}
function Ao(e) {
  let live_9 = ee().live;
  live_9.handoffGeneration += 1, f7(), yZe();
  let r = 0;
  for (let s of [...live_9.supervisors.values()]) {
    if (!s.stopped) r++;
    if (s.autoReactWiring !== void 0) {
      let {
        slug: slug_15
      } = s;
      import("B:/~BUN/root/chunk-h77xf4r2.js").then(g => g.handBackTakenOverSlug(slug_15));
    }
    delete s.autoReactWiring, te(live_9, s.slug);
    for (let h of Object.values(s.context.taskRegistry.all())) {
      if (!yM(h) || h.status !== "running" || h.frameLive?.slug !== s.slug) continue;
      Sh(h.id, s.context.taskRegistry, {
        quiet: !0
      });
    }
  }
  if (live_9.armOutcomes.clear(), live_9.announcedArmFailures.clear(), r === 0) return r;
  let i = `${r} artifact ${r === 1 ? "watch" : "watches"}`,
    l = e === "signed_out" ? "Those watches were opened as the account that signed out: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks." : "Those watches were opened as the previous account: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
  return oa({
    value: qi({
      taskType: M$,
      summary: qt(`Stopped watching ${i} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`),
      body: `
<event>${qt(l)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: {
      kind: "task-notification",
      source: M$
    },
    agentId: qe()
  }), r;
}
function Xar(e, n, r) {
  let {
    wasWatching: i
  } = Wr(e, n);
  if (ee().live.nonEditorSlugs.delete(e), r !== void 0) {
    let repliesConsent = ee().live.repliesConsent,
      s = repliesConsent.outstanding.get(e);
    if (s !== void 0) {
      if (repliesConsent.outstanding.delete(e), s.allowed !== !0) repliesConsent.declined.set(e, {
        namingMessages: s.namingMessages
      });
    }
    repliesConsent.approved.delete(e);
  }
  return _("artifact_live_subscribe", {
    unwatched: i
  }), {
    wasWatching: i
  };
}
function Jar(e, n) {
  CRn(e, n.storageV5);
  let {
    wasWatching: wasWatching_3
  } = Wr(e, n);
  if (wasWatching_3) _("artifact_live_subscribe", {
    unwatched: !0,
    artifact_deleted: !0
  });
}
function Wr(slug_16, n) {
  let live_10 = ee().live;
  O3t(n.storageV5), live_10.armOutcomes.delete(slug_16), Jt(live_10, slug_16), Hto(slug_16);
  let i = live_10.supervisors.get(slug_16)?.autoReactWiring !== void 0,
    {
      wasWatching: wasWatching_4
    } = vr({
      slug: slug_16,
      taskRegistry: n.taskRegistry,
      announce: !1,
      killRow: s => {
        let h = s.autoReactArmed === !0;
        if (Sh(s.id, n.taskRegistry, h ? {
          quiet: !0,
          userStop: !0,
          modelOrigin: !0
        } : {
          quiet: !0
        }), h && s.autoReactSlug !== void 0) pvt(s.autoReactSlug);
      }
    });
  if (i) pvt(slug_16);
  return {
    wasWatching: wasWatching_4
  };
}
async function Qar(e) {
  let {
    slug: slug_17,
    url: url_4,
    publishContext: publishContext,
    getKnownVer: getKnownVer_2,
    context: context_2,
    tool: tool,
    commentVerbsInSchema: commentVerbsInSchema
  } = e;
  if (!iW(publishContext)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  let live_11 = ee().live,
    S = tool !== void 0 && commentVerbsInSchema === !0 && wu(),
    degraded = !S ? void 0 : !_Re(context_2.messages) ? "unattended_turn" : !nRn(context_2.messages, slug_17) || !kI(context_2.messages) ? "not_named_by_user" : live_11.repliesConsent.declined.has(slug_17) ? "declined" : live_11.nonEditorSlugs.has(slug_17) ? "not_editor" : e.repliesApproved !== !0 ? "not_approved" : void 0,
    C = Ir({
      tool: S && degraded === void 0 ? tool : void 0,
      commentVerbsInSchema: commentVerbsInSchema,
      context: context_2
    }),
    pickUpRecentSummons = C.autoReactWiring !== void 0,
    title = live_11.supervisors.get(slug_17)?.autoReactWiring?.title,
    R = await pe(live_11, {
      slug: slug_17,
      url: url_4,
      getKnownVer: getKnownVer_2,
      ownPublishes: context_2.artifactRegistries.ownPublishes,
      ...ye(context_2),
      ...C,
      pickUpRecentSummons: pickUpRecentSummons,
      ...(C.autoReactWiring !== void 0 && {
        autoReactWiring: {
          ...C.autoReactWiring,
          title: title
        },
        editorGatedWiring: !0
      })
    });
  if (pickUpRecentSummons && R.outcome === "armed" && R.degraded === void 0 && !(Zm(slug_17) && !bg(slug_17)) && Ne()) W3t(slug_17, {
    title: live_11.supervisors.get(slug_17)?.autoReactWiring?.title ?? title,
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
function Zar(e) {
  return ee().live.nonEditorSlugs.has(e);
}
function elr(e, n, r, i) {
  let repliesConsent_2 = ee().live.repliesConsent,
    s = repliesConsent_2.outstanding.get(n);
  if (e === void 0) return {
    declined: repliesConsent_2.declined.has(n) || r !== void 0 && s !== void 0 && s.toolUseId !== r && s.allowed !== !0,
    approved: !1
  };
  if (r !== void 0 && s !== void 0 && s.toolUseId !== r) {
    if (repliesConsent_2.outstanding.delete(n), s.allowed !== !0) repliesConsent_2.declined.set(n, {
      namingMessages: s.namingMessages
    });
  }
  let h = repliesConsent_2.declined.get(n),
    g = Ro(i, n);
  if (h !== void 0 && g !== null && !h.namingMessages.has(g)) repliesConsent_2.declined.delete(n);
  return {
    declined: repliesConsent_2.declined.has(n),
    approved: repliesConsent_2.approved.has(n)
  };
}
function Ro(e, n) {
  let r = Kt(e, n);
  return r >= 0 ? e[r]?.uuid ?? null : null;
}
function iRn(e, n, toolUseId, i, l = !1) {
  if (e === void 0) return;
  ee().live.repliesConsent.outstanding.set(n, {
    toolUseId: toolUseId,
    ...(l && {
      allowed: !0
    }),
    namingMessages: new Set(Bt(i, n).flatMap(item => i[item]?.uuid !== void 0 ? [i[item].uuid] : []))
  });
}
function tlr(e, n) {
  if (e === void 0 || n === void 0) return;
  let {
    outstanding: outstanding
  } = ee().live.repliesConsent;
  for (let [slug_18, l] of outstanding) if (l.toolUseId === n) return outstanding.delete(slug_18), {
    slug: slug_18
  };
  return;
}
function nlr(e, n, r, i) {
  let repliesConsent_3 = ee().live.repliesConsent;
  if (e === void 0) return !1;
  let s = n?.slug === r;
  if (s && i) repliesConsent_3.approved.add(r), repliesConsent_3.declined.delete(r);
  return s || repliesConsent_3.approved.has(r);
}
function tvt(e) {
  return ee().live.repliesConsent.declined.has(e);
}
function rlr(e) {
  let {
      declined: declined,
      outstanding: outstanding_2
    } = ee().live.repliesConsent,
    i = outstanding_2.get(e);
  return declined.has(e) || i !== void 0 && i.allowed !== !0;
}
function yo(e, n) {
  let r = e.mcpWriteSlugs.get(n);
  if (r === void 0) r = {
    arming: !1
  }, e.mcpWriteSlugs.set(n, r);
  return r;
}
var ko = new Set(["not_found", "no_subscription_token", "publish_context", "invalid_slug", "remote"]),
  Eo = 5000;
function Sr(e, n) {
  KOn(e, n), setTimeout((r, i) => YOn(r, i), Eo, e, n).unref?.();
}
async function jKo(slug_19, n, getKnownVer_3) {
  try {
    if (!Bn.test(slug_19)) return;
    let i = ee(),
      live_12 = i.live;
    if (live_12.disposed) return;
    let s = live_12.supervisors.get(slug_19),
      ownPublishes_2 = n.artifactRegistries.ownPublishes;
    if (s !== void 0 && !s.stopped) {
      if (Sr(ownPublishes_2, slug_19), live_12.inFlightSubscribes.has(slug_19)) return;
      if (s.lastActivityAt = Date.now(), s.timer !== void 0 && s.consecutiveFailures === 0 && s.stalledSince === void 0) clearTimeout(s.timer), s.timer = void 0, s.nextRewatchAt = void 0, Ar(live_12, slug_19);
      return;
    }
    let g = yo(live_12, slug_19);
    if (live_12.inFlightSubscribes.has(slug_19)) {
      if (g.arming) Sr(ownPublishes_2, slug_19);
      return;
    }
    let {
      publishContext: publishContext_2
    } = j7({
      agentId: n.agentId,
      agentType: n.agentContext?.agentType,
      isNonInteractiveSession: n.options.isNonInteractiveSession
    });
    if (!iW(publishContext_2)) return;
    if (g.declinedEpoch === i.accountEpoch) return;
    let accountEpoch = i.accountEpoch;
    g.arming = !0, await pe(live_12, {
      slug: slug_19,
      url: En({
        slug: slug_19,
        env: so()
      }),
      getKnownVer: getKnownVer_3,
      ownPublishes: ownPublishes_2,
      ...ye(n),
      seedKnownVerFromBoot: !0,
      mcpWrite: !0
    }).then(A => {
      if (g.arming = !1, A.outcome === "skipped" && ko.has(A.reason)) g.declinedEpoch = accountEpoch;
    }, A => {
      g.arming = !1, d(A);
    });
  } catch (error) {
    d(error);
  }
}
async function olr(e) {
  let {
    slug: slug_20,
    url: url_5,
    publishContext: publishContext_3,
    getKnownVer: getKnownVer_4,
    context: context_3
  } = e;
  if (ee().autoReact.userDisarmed) return {
    outcome: "refused",
    reason: "session_disarmed"
  };
  if (!iW(publishContext_3)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  if (!e.commentVerbsInSchema) return {
    outcome: "skipped",
    reason: "comments_off"
  };
  if (!Zm(slug_20)) return {
    outcome: "skipped",
    reason: "not_stopped"
  };
  if (!wu()) return {
    outcome: "skipped",
    reason: "not_enabled"
  };
  let live_13 = ee().live;
  if (context_3.abortController.signal.aborted) return {
    outcome: "skipped",
    reason: "cancelled"
  };
  let taskId_3 = Tr(context_3.taskRegistry, slug_20)?.id,
    v = en(context_3.taskRegistry, slug_20, S => {
      YT(slug_20), S.notify({
        summary: WRn(qSe(S.getTitle, url_5)),
        detail: `Auto-replies on artifact ${url_5} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop). ${zt}`
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
  if (v !== null && taskId_3 !== void 0) {
    if (_("artifact_live_subscribe", {
      resumed_in_place: !0
    }), v === "cleared") ee().wakes.pendingResumeDisclosure.add(slug_20);
    return {
      outcome: "armed",
      taskId: taskId_3,
      inPlace: v === "lifted",
      ...(v === "cleared" && {
        connecting: !0
      })
    };
  }
  return pe(live_13, {
    slug: slug_20,
    url: url_5,
    getKnownVer: getKnownVer_4,
    ownPublishes: context_3.artifactRegistries.ownPublishes,
    ...ye(context_3),
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
function aRn(e, n) {
  let {
    live: live_14
  } = ee();
  if (!live_14.inFlightSubscribes.has(e)) {
    n();
    return;
  }
  let i = live_14.armSettleWaiters.get(e) ?? [];
  i.push(n), live_14.armSettleWaiters.set(e, i);
}
function lRn(e) {
  let n = ee().live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0;
}
async function slr(e) {
  let {
    slug: slug_21,
    url: url_6,
    getKnownVer: getKnownVer_5,
    tool: tool_2,
    commentVerbsInSchema: commentVerbsInSchema_2,
    context: context_4
  } = e;
  if (tool_2 !== void 0 && nc()) _lr().catch(() => {
    return;
  });
  let g = ee(),
    v = await pe(g.live, {
      slug: slug_21,
      url: url_6,
      getKnownVer: getKnownVer_5,
      ownPublishes: context_4.artifactRegistries.ownPublishes,
      ...ye(context_4),
      ...Ir({
        tool: tool_2,
        commentVerbsInSchema: commentVerbsInSchema_2,
        context: context_4
      })
    });
  if (tool_2 !== void 0 && commentVerbsInSchema_2 === !0 && v.outcome !== "skipped" && Ne()) W3t(slug_21, {
    title: g.live.supervisors.get(slug_21)?.autoReactWiring?.title,
    storageV5: context_4.storageV5
  });
  return v;
}
function Ir(e) {
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
async function zSe(e) {
  let {
    slug: slug_22,
    url: url_7,
    version: version,
    publishContext: publishContext_4,
    getKnownVer: getKnownVer_6,
    tool: tool_4,
    commentVerbsInSchema: commentVerbsInSchema_4,
    title: title_2,
    context: context_6
  } = e;
  if (tool_4 !== void 0 && nc()) _lr().catch(() => {
    return;
  });
  let ownPublishes_3 = context_6.artifactRegistries.ownPublishes,
    live_15 = ee().live;
  if (version !== void 0) {
    Ott(ownPublishes_3, slug_22, version);
    let k = live_15.supervisors.get(slug_22);
    if (k !== void 0 && !k.stopped) k.lastActivityAt = Date.now();
    if (iW(publishContext_4)) live_15.mostRecentPublishSlug = slug_22;
  }
  if (!iW(publishContext_4)) return p("artifact_live_subscribe", "publish_context", {
    publish_context: c(publishContext_4)
  }), {
    outcome: "skipped",
    reason: "publish_context"
  };
  let G = tool_4 !== void 0 && commentVerbsInSchema_4 === !0,
    L = e.carriedPublishConsent !== !0 && e.resumedPublishConsent !== !0 && e.chainPublish !== !0 && e.adoptedPublish !== !0 && _Re(context_6.messages),
    R = await pe(live_15, {
      slug: slug_22,
      url: url_7,
      getKnownVer: getKnownVer_6,
      ownPublishes: ownPublishes_3,
      ...ye(context_6),
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
      ...(L && version !== void 0 && {
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
          title: title_2,
          ...(e.publishTranscript !== void 0 && {
            publishTranscript: e.publishTranscript
          })
        },
        ...(L && {
          freshPublishWiring: !0
        })
      })
    });
  if ((version !== void 0 || e.adoptedPublish === !0) && R.outcome !== "skipped") {
    let {
        autoReact: autoReact_3,
        wakes: wakes_4
      } = ee(),
      ie = !G ? "bare_watch_comments_off" : autoReact_3.userDisarmed ? "bare_watch_session_disarmed" : !uvt() ? "bare_watch_autoreact_off" : Zm(slug_22) && !L && !(bg(slug_22) && !bpe(slug_22) && wakes_4.humanTurnAtScanGeneration === wakes_4.scanGeneration) ? "bare_watch_slug_stopped" : void 0;
    if (ie !== void 0) p("artifact_live_subscribe", ie, {
      publish_context: c(publishContext_4)
    });
  }
  if (G && R.outcome !== "skipped" && !(R.outcome === "already_watching" && (e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0)) && !(R.outcome === "armed" && R.degraded !== void 0) && Ne()) W3t(slug_22, {
    title: live_15.supervisors.get(slug_22)?.autoReactWiring?.title ?? title_2,
    storageV5: context_6.storageV5
  });
  return R;
}
function Ne() {
  return !ee().autoReact.userDisarmed && uvt();
}
function Yt(e, n, r) {
  return `live updates for artifact ${e} (${Qwt(x3t(n, r)).task})`;
}
function ye(e) {
  return {
    context: lZe(e),
    signal: e.abortController.signal
  };
}
function nvt(e, n) {
  return () => M4(e(), n);
}
function Or(e) {
  if (!U7()) return {
    reason: "flag_off"
  };
  if (a.CLAUDE_CODE_REMOTE) return {
    reason: "remote"
  };
  return To(Rr(e));
}
function at(e) {
  return U7() && ot(e) === null && !XRo(e);
}
function To(e) {
  if (uNo()) return {
    reason: "cp_override"
  };
  let n = svt(e);
  if (n !== null) return {
    reason: "egress_denied",
    egressKind: n.kind
  };
  return null;
}
function ilr(e) {
  let {
      context: context_7,
      slug: slug_23,
      wantWiring: wantWiring,
      canClearLatch: canClearLatch
    } = e,
    s = Date.now();
  for (let h of Object.values(context_7.taskRegistry.all())) if (yM(h) && h.status === "running" && h.frameLive?.slug === slug_23 && kr(h, slug_23, s, wantWiring, canClearLatch, po) === "keep") return !0;
  return !1;
}
function cRn(e) {
  if (ee().durable.stopLatches.isStopped(e.slug)) return "stop_latched";
  if (!iW(e.publishContext)) return "publish_context";
  return Or(e.slug)?.reason ?? null;
}
var aZe = "auto-replies armed",
  dRn = "auto-replies paused by the user's interrupt (Ctrl+C or Stop) \u2014 the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)",
  uRn = "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) \u2014 that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks \u2014 the user asking is not itself the take-back); no comment notifications arrive here meanwhile",
  pRn = "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread",
  fRn = "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";
function jt() {
  return xb() ? `; a comment on it sent to Claude reaches this session while this artifact's status row says ${aZe}, and plain comments never notify \u2014 read them with ${El('action "comments"', () => `the ${BU("comments")}`)} when asked` : "";
}
function GSe(e) {
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
      return W0e;
    case "public_outside_org":
      return CTt;
    case "not_editor":
      return "a restored publish decision does not carry for an artifact this account cannot publish to";
    case "no_subscription_token":
      return "the control plane minted no live-channel credential for this artifact";
    case "boot_failed":
      return "the artifact could not be read right now (network or auth); try again later";
    case "watch_cap":
      return `this session already holds its maximum of ${vw} artifact watches and none could make room (each is a watch you requested, the artifact you most recently published, or one auto-replying to comments: a new publish can displace an idle one, a watch request cannot; or watch slots are still connecting); unwatch one first`;
    case "watch_cap_reconnect":
      return `this session was already holding its maximum of ${vw} artifact watches when this one tried to reconnect, and none of the other watches could make room`;
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
function rvt(e) {
  switch (e) {
    case "arming":
      return `Live subscription: arming in the background \u2014 not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${jt()}.`;
    case "connected":
      return `Live subscription: already connected from earlier in this session \u2014 this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${jt()}.`;
    case "publish_adopted":
      return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally \u2014 that session then keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${jt()}.`;
    case "publish_context":
      return "Live subscription: none \u2014 this is a print (-p), cloud, subagent, or teammate session, which does not keep track of new versions of this artifact published elsewhere (only the main conversation of a local interactive, background, or TypeScript/Python Agent SDK session does). Expected; not an error.";
    case "remote_unsupported":
      {
        let n = xb();
        return `Live subscription: not supported yet from remote sessions \u2014 nothing notifies this session of new versions${n ? " or of comments sent to Claude" : ""}; re-read the artifact${n ? " (and its comments)" : ""} when the user asks.`;
      }
    default:
      {
        let n = GSe(e);
        return n !== null ? `Live subscription: skipped \u2014 ${n}.` : `Live subscription: skipped (${qE(e, 64)}).`;
      }
  }
}
var alr = "Live subscription: none in this kind of session (see the earlier publish result); not an error.";
async function mRn(e) {
  let {
    slug: slug_24,
    url: url_8,
    getKnownVer: getKnownVer_7,
    context: context_8
  } = e;
  return pe(ee().live, {
    slug: slug_24,
    url: url_8,
    getKnownVer: getKnownVer_7,
    ownPublishes: context_8.artifactRegistries.ownPublishes,
    ...ye(context_8),
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
  cZe();
  let C = e.supervisors.get(slug_25)?.carriedVer;
  e.endAll ??= Ao;
  let G = n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema,
    armedVia = n.userResumeWiring === !0 ? "resume" : explicit ? "watch" : n.sessionResume === !0 ? "session_resume" : n.mcpWrite === !0 ? "mcp_write" : seedKnownVerFromBoot ? "attach" : "publish";
  if (!Bn.test(slug_25)) return {
    outcome: "skipped",
    reason: "invalid_slug"
  };
  e.armOutcomes.delete(slug_25);
  let stopLatches = ee().durable.stopLatches;
  pG({
    storageV5: context_9.storageV5
  });
  let k = n.userResumeWiring === !0 ? n.approvedRelatchGen : void 0,
    P = () => stopLatches.isStopped(slug_25) && (k === void 0 || stopLatches.latchGeneration(slug_25) !== k);
  if (P()) return p("artifact_live_subscribe", "stop_latched"), {
    outcome: "skipped",
    reason: "stop_latched"
  };
  let ie = Or(slug_25);
  if (ie !== null) {
    if (ie.reason === "cp_override") p("artifact_live_subscribe", "cp_override_active");else if (ie.reason === "egress_denied") p("artifact_live_subscribe", `egress_denied_${ie.egressKind === "sandbox-policy" ? "sandbox_policy" : ie.egressKind}`);
    return {
      outcome: "skipped",
      reason: ie.reason
    };
  }
  let url_10 = Rr(slug_25),
    syncLive = at(slug_25),
    humanTurnWiring = (n.freshPublishWiring === !0 || n.userResumeWiring === !0) && !n.signal.aborted,
    ft = e.supervisors.get(slug_25)?.autoReactWiring,
    taskId_4 = mo(context_9, slug_25, G, humanTurnWiring);
  if (taskId_4 !== null || e.inFlightSubscribes.has(slug_25)) {
    if (taskId_4 === null && k !== void 0 && stopLatches.isStopped(slug_25)) return p("artifact_live_subscribe", "arm_in_flight"), {
      outcome: "skipped",
      reason: "arm_in_flight"
    };
    if (!(armedVia === "resume" && taskId_4 === null && !e.supervisors.has(slug_25))) br(e, {
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
      let T = e.supervisors.get(slug_25);
      if (T !== void 0) {
        let description = Yt(url_9, T.explicit, T.armedVia);
        context_9.taskRegistry.update(taskId_4, D => {
          if (!yM(D) || D.frameLive === void 0) return D;
          if (D.description === description && D.frameLive.explicit === T.explicit && D.frameLive.armedVia === T.armedVia) return D;
          return {
            ...D,
            description: description,
            frameLive: {
              ...D.frameLive,
              explicit: T.explicit,
              armedVia: T.armedVia
            }
          };
        });
      }
    }
    if (taskId_4 !== null && n.freshPublishWiring === !0 && !n.signal.aborted) en(context_9.taskRegistry, slug_25);
    if (taskId_4 === null && n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema && n.requireEditor !== !0 && n.editorGatedWiring !== !0) {
      let T = e.pendingInFlightWiring.get(slug_25),
        J = n.freshPublishWiring === !0 && !n.signal.aborted,
        D = J || T === void 0 ? {
          scanGeneration: ee().wakes.scanGeneration,
          stopGeneration: eW(slug_25)
        } : {
          scanGeneration: T.scanGeneration,
          stopGeneration: T.stopGeneration
        };
      if (e.pendingInFlightWiring.set(slug_25, {
        wiring: Re(T?.wiring, n.autoReactWiring, humanTurnWiring),
        freshPublishWiring: J || T?.freshPublishWiring === !0,
        ...D
      }), e.inFlightWiredIntent.add(slug_25), Ne()) fno(slug_25, {
        storageV5: context_9.storageV5
      });
      if (J && uvt()) e.bootingWiredArms.set(slug_25, {
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
  let z = {
      url: url_9,
      announce: n.announceArmlessEnd === !0 && !n.machineArm,
      handoffGen: e.handoffGeneration,
      getTitle: () => e.supervisors.get(slug_25)?.autoReactWiring?.title ?? n.autoReactWiring?.title
    },
    rn = Loe(context_9).length + e.inFlightSubscribes.size;
  if (n.machineArm && Loe(context_9).length >= vw) {
    if (!_r(e, slug_25) || st(e, context_9).length === 0) return p("artifact_live_subscribe", "watch_cap_reconnect"), {
      outcome: "skipped",
      reason: "watch_cap_reconnect"
    };
  }
  if (n.mcpWrite && rn >= vw) return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", z);
  let forPublish_2 = !n.machineArm && n.freshPublish === !0;
  if (!n.machineArm && rn >= vw && st(e, context_9, {
    forPublish: forPublish_2
  }).length === 0) return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", z);
  let scanGeneration = ee().wakes.scanGeneration,
    stopGeneration = eW(slug_25),
    sn = n.machineArm ? e.supervisors.get(slug_25)?.lastActivityAt : void 0,
    handoffGeneration = e.handoffGeneration;
  if (Uro(Xi), Gro(plr), Bro(T => go(context_9.taskRegistry, T)), e.inFlightSubscribes.add(slug_25), e.inFlightGenerations.set(slug_25, handoffGeneration), n.autoReactWiring !== void 0) e.inFlightWiredIntent.add(slug_25);
  let Ce,
    xe = !1;
  try {
    if (n.autoReactWiring?.commentVerbsInSchema === !0 && n.requireEditor !== !0 && n.machineArm !== !0 && n.userResumeWiring !== !0 && uvt()) e.bootingWiredArms.set(slug_25, {
      title: n.autoReactWiring.title,
      freshPublish: n.freshPublishWiring === !0 && !n.signal.aborted,
      scanGeneration: scanGeneration,
      stopGeneration: stopGeneration
    });
    let T = () => e.handoffGeneration !== handoffGeneration || e.retiredInFlightArms.has(slug_25),
      J = B7();
    if (!J) {
      let w = e.supervisors.get(slug_25);
      if (w !== void 0) delete w.lease, delete w.renewable;
    }
    let accountEpoch_2 = ee().accountEpoch,
      ge = J && n.machineArm === !0 ? e.supervisors.get(slug_25)?.lease : void 0,
      F = ge !== void 0 && (ge.transport === "live" || syncLive) && Ylr(ge, e.rewatchTiming, accountEpoch_2) ? ge : void 0;
    if (F !== void 0 && F.transport === "sync") {
      let w = await Gb(context_9.storageV5).catch(() => {
        return;
      });
      if (!wy(me(F.token), w)) F = void 0;
      if (signal.aborted || T()) return X(e, slug_25, n.machineArm, "cancelled", z);
    }
    let W,
      pt = !1,
      un = 0;
    if (F !== void 0) W = {
      err: null,
      token: F.token,
      transport: F.transport,
      ver: F.ver,
      editor: void 0,
      tokenExp: void 0,
      renewable: !1
    };else {
      let w = J && !syncLive && n.machineArm === !0 && e.supervisors.get(slug_25)?.renewable === !0;
      try {
        let K;
        if (w) {
          let be = await Jao(slug_25, signal, context_9.credentials);
          if (be.err === null) K = be, pt = !0;else {
            p("artifact_live_subscribe", `renew_miss_${be.status ?? "no_response"}`);
            let ue = e.supervisors.get(slug_25);
            if (ue !== void 0) delete ue.renewable;
            if (signal.aborted || T()) return X(e, slug_25, !0, "cancelled", z);
          }
        }
        un = Date.now(), W = K ?? (await Xao(slug_25, signal, context_9.credentials, {
          syncLive: syncLive,
          ...(n.machineArm === !0 && {
            lean: e.supervisors.get(slug_25)?.bootedVersion
          })
        }));
      } catch {
        return X(e, slug_25, n.machineArm, signal.aborted || T() ? "cancelled" : "boot_failed", z);
      }
    }
    let receivedAtMs = Date.now();
    if (T()) return X(e, slug_25, n.machineArm, "cancelled", z);
    if (W.err !== null) {
      let w = signal.aborted ? "cancelled" : W.status === 404 ? "not_found" : UU(W) ? "other_org" : W.publicOutsideOrg === !0 ? "public_outside_org" : "boot_failed",
        unavailable_2 = w === "boot_failed" && (W.unavailable === !0 || W.noAnswer === !0 && Date.now() - un >= e.rewatchTiming.stallThresholdMs);
      return X(e, slug_25, n.machineArm, w, z, {
        unavailable: unavailable_2,
        httpStatus: W.status
      });
    }
    let Ge = n.requireEditor === !0 && !W.editor,
      oe = Ge || n.editorGatedWiring === !0 && n.autoReactWiring !== void 0 && W.editor !== !0,
      cn = Ge ? "restored_consent_not_editor" : "watch_not_editor";
    if (W.editor === !0) e.nonEditorSlugs.delete(slug_25);
    if (oe) {
      if (e.inFlightWiredIntent.delete(slug_25), e.bootingWiredArms.delete(slug_25), !Ge && ee().accountEpoch === accountEpoch_2) e.nonEditorSlugs.add(slug_25);
    }
    let title_3 = W.title === void 0 ? null : qb(W.title),
      autoReactWiring = oe || n.autoReactWiring === void 0 ? void 0 : title_3 === null ? n.autoReactWiring : {
        ...n.autoReactWiring,
        title: title_3
      },
      onOpen = oe ? void 0 : n.onOpen,
      onGiveUp = oe ? void 0 : n.onGiveUp,
      transport = W.transport;
    if (transport === "sync" && (!at(slug_25) || W.token === void 0 || !ve(W.token))) return p("artifact_live_subscribe", "sync_unavailable"), X(e, slug_25, n.machineArm, "sync_unavailable", z, {
      unavailable: !0
    });
    let token = W.token;
    if (!token) return p("artifact_live_subscribe", oe ? cn : "no_subscription_token"), X(e, slug_25, n.machineArm, Ge ? "not_editor" : "no_subscription_token", z);
    if (oe) p("artifact_live_subscribe", cn);
    let ver_2 = W.ver,
      getKnownVer_9 = seedKnownVerFromBoot ? () => getKnownVer_8() ?? ver_2 : getKnownVer_8,
      O = F ?? (J ? Iro({
        transport: transport,
        token: token,
        ver: ver_2,
        accountEpoch: accountEpoch_2,
        expUnixSeconds: transport === "sync" ? tt(token) : W.tokenExp,
        receivedAtMs: receivedAtMs
      }) : void 0);
    if (signal.aborted || T()) return X(e, slug_25, n.machineArm, "cancelled", z);
    let He = Loe(context_9).length + e.inFlightSubscribes.size - 1,
      ht = e.supervisors.get(slug_25),
      Br = n.machineArm === !0 && sn !== void 0 && ht !== void 0 && !ht.stopped && ht.lastActivityAt > sn,
      fn = Loe(context_9).length + e.pendingRegistrations;
    if (n.machineArm && !Br && He >= vw) {
      if (fn >= vw) {
        if (!_r(e, slug_25) || !wo(e, context_9)) return p("artifact_live_subscribe", "watch_cap_reconnect"), {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
      }
    } else if (n.mcpWrite && He >= vw) return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", z);else if (He >= vw) {
      let w = He - vw + 1,
        K = st(e, context_9, {
          forPublish: forPublish_2
        });
      if (K.length < w) {
        if (n.machineArm) return p("artifact_live_subscribe", "watch_cap_reconnect"), {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
        return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", z);
      }
      if (fn >= vw) Cr(e, K[0], context_9, n.machineArm ? {
        why: `this session reached its limit of ${vw} artifact watches and made room for an already-held watch to reconnect`,
        shortReason: shortReason
      } : void 0);
    }
    e.pendingRegistrations++, xe = !0;
    let B = e.supervisors.get(slug_25),
      jr = B !== void 0 && !B.stopped && B.explicit,
      explicit_2 = explicit || jr,
      bt = B !== void 0 && !B.stopped,
      reuseTaskId = bt ? B.taskId : void 0,
      qr = B === void 0,
      zr = explicit && B !== void 0 && !B.explicit,
      mn = !n.machineArm && B !== void 0 && B.armedVia === "mcp_write" && armedVia !== "publish" && armedVia !== "mcp_write",
      hn = mn ? B.autoReactWiring : void 0,
      gn = autoReactWiring !== void 0 && !gr(e, slug_25, ft),
      bn = n.userResumeWiring === !0 && gn && bt && B.autoReactWiring?.humanTurnSnapshot === !0,
      _t = e.supervisors.get(slug_25)?.carriedVer,
      seedSurfacedVer_2 = _t !== void 0 && _t !== C ? _t : seedSurfacedVer,
      y = br(e, {
        slug: slug_25,
        url: url_9,
        getKnownVer: getKnownVer_8,
        ownPublishes: ownPublishes_4,
        context: context_9,
        explicit: explicit,
        machineArm: n.machineArm,
        armedVia: armedVia,
        carriedVer: seedSurfacedVer_2 ?? W.ver,
        ...(gn && {
          autoReactWiring: autoReactWiring
        }),
        humanTurnWiring: humanTurnWiring && !bn
      });
    if (F === void 0 && y.armedVia !== "mcp_write") qmr(slug_25, ver_2);
    if (F === void 0 && !pt) y.bootedVersion = ver_2;
    let autoReactWiring_2 = y.autoReactWiring;
    if (O !== void 0 && O.accountEpoch === ee().accountEpoch) {
      if (y.lease = O, F === void 0 && W.renewable) y.renewable = !0;else if (F === void 0) delete y.renewable;
    } else delete y.lease, delete y.renewable;
    let lastActivityAt = y.lastActivityAt;
    if (onOpen !== void 0 && onGiveUp !== void 0) y.resumeAnnounce = {
      onOpen: onOpen,
      onGiveUp: onGiveUp,
      wired: autoReactWiring !== void 0
    };
    let vt = armedVia === "resume" && y.armedVia !== "watch" && y.armedVia !== "resume" ? y.armedVia : void 0;
    if (vt !== void 0) y.armedVia = "resume";
    y.transport = transport;
    let ne = !1,
      _n = Y(),
      Sn = !1,
      wt,
      Ke,
      vn = !1,
      We,
      Xr = new AbortController(),
      Q = oe ? void 0 : e.pendingInFlightWiring.get(slug_25);
    if (!oe) e.pendingInFlightWiring.delete(slug_25);
    let fe = autoReactWiring ?? Q?.wiring,
      Qr = Q?.wiring.humanTurnSnapshot === !0 && (ft?.humanTurnSnapshot !== !0 || Q.wiring.context !== ft.context);
    if (Q !== void 0 && (autoReactWiring === void 0 || Qr) && Q.stopGeneration === eW(slug_25)) {
      let w = e.supervisors.get(slug_25);
      if (w !== void 0 && !w.stopped) w.autoReactWiring = Re(w.autoReactWiring, {
        ...Q.wiring,
        title: Q.wiring.title ?? w.autoReactWiring?.title
      }, Q.wiring.humanTurnSnapshot === !0);
    }
    let wn = n.freshPublishWiring === !0 || Q?.freshPublishWiring === !0;
    if (Q?.freshPublishWiring === !0) scanGeneration = Q.scanGeneration, stopGeneration = Q.stopGeneration;
    let Z = n.userResumeWiring === !0,
      Zr = humanTurnWiring || fe?.humanTurnSnapshot === !0,
      getTitle = () => e.supervisors.get(slug_25)?.autoReactWiring?.title ?? fe?.title,
      autoReact_4 = fe === void 0 || !fe.commentVerbsInSchema ? void 0 : {
        env: so(),
        tool: fe.tool,
        context: fe.context,
        ...(fe.publishTranscript !== void 0 && {
          publishTranscript: fe.publishTranscript
        }),
        getWiring: () => {
          let w = e.supervisors.get(slug_25)?.autoReactWiring;
          return w?.humanTurnSnapshot === !0 || !Zr ? w : void 0;
        },
        abort: Xr,
        getTitle: getTitle,
        onReadRefused: () => {
          oo(e, slug_25);
        },
        notify: w => {
          if ("coalesce" in w) {
            Tro({
              queue: queue,
              slug: slug_25,
              family: w.coalesce.family,
              artifactName: w.coalesce.artifactName,
              threadId: w.coalesce.threadId,
              detail: w.detail,
              mergeDetails: "append"
            });
            return;
          }
          oa({
            value: qi({
              taskType: "artifact-auto-react",
              summary: qt(w.summary),
              body: `
${qt(w.detail)}`
            }),
            mode: "task-notification",
            origin: {
              kind: "task-notification",
              source: "artifact-auto-react",
              slug: slug_25,
              displayName: qSe(getTitle, url_9)
            },
            ...(w.handOff !== void 0 && {
              uuid: w.handOff
            }),
            agentId: qe()
          });
        }
      };
    y.surfacedVers ??= [];
    let wake = y.wake,
      Be = uo({
        slug: slug_25,
        url: url_9,
        ownPublishes: ownPublishes_4,
        presenceOnly: () => e.supervisors.get(slug_25)?.armedVia === "mcp_write",
        getKnownVer: getKnownVer_9,
        surfacedVers: y.surfacedVers,
        ...(seedSurfacedVer_2 !== void 0 && {
          seedSurfacedVer: seedSurfacedVer_2
        }),
        onSurfaced: w => {
          let K = e.supervisors.get(slug_25);
          if (K && !K.stopped) K.carriedVer = w, K.lastActivityAt = Date.now();
        },
        autoReact: autoReact_4
      });
    y.wake = Be;
    let Rt = 0,
      yt,
      ei = F?.opened === !0 ? F : void 0;
    try {
      let w = await ovt({
        ws: transport === "sync" ? {
          url: Pe(slug_25, {
            commentHint: autoReact_4 !== void 0 && wu() && !Zm(slug_25),
            versionNotices: !0
          }),
          protocols: [et, token]
        } : {
          url: url_10,
          protocols: [Ki, token]
        },
        ...(transport === "sync" && {
          headers: {
            "User-Agent": vI()
          }
        }),
        description: Yt(url_9, explicit_2, y.armedVia),
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
          watchedSince: y.watchedSince,
          armedVia: y.armedVia
        },
        transform: transport === "sync" ? fo(Be, slug_25, {
          onTokenRefresh: (token_2, expUnixSeconds) => {
            if (O !== void 0 && wy(me(O.token), me(token_2))) Oro(O, {
              token: token_2,
              expUnixSeconds: expUnixSeconds,
              receivedAtMs: Date.now()
            });
          },
          onExpiryAnnounced: () => {
            vn = !0;
          },
          onCommentHint: (comments_empty, V) => {
            let Ie = yt;
            yt = void 0;
            let seed_skipped = comments_empty && Ie !== void 0 && tno(slug_25, Ie, V);
            _("artifact_live_subscribe", {
              comment_hint: !0,
              comments_empty: comments_empty,
              seed_parked: Ie !== void 0,
              seed_skipped: seed_skipped,
              sync_transport: !0
            });
          }
        }) : co(Be),
        keepalive: transport === "sync" ? {
          openFrames: [],
          frame: b({
            kind: "ping",
            slug: slug_25
          }),
          intervalMs: ee().presence.timing.keepaliveMs,
          sendEveryMs: () => it(e, ee().presence.timing.keepaliveMs),
          deadlineMs: ee().presence.timing.keepaliveDeadlineMs ?? Ht(ee().presence.timing.keepaliveMs)
        } : {
          openFrames: ["ping", "hb"],
          frame: "ping",
          intervalMs: intervalMs
        },
        onSender: U => {
          if (transport === "sync") {
            Ke = V => U(Ft(slug_25, V)), Qe(e, `watch:${slug_25}`, Ke);
            return;
          }
          wt = U, Nn(e, slug_25, U);
        },
        onSenderClosed: () => {
          if (Ke !== void 0) Ze(e, `watch:${slug_25}`, Ke);
          if (wt !== void 0) Un(e, slug_25, wt);
        },
        onLifecycle: (U, closeCode, Ie) => {
          if (U === "open") {
            ne = !0, y.lastFailure = void 0, We = {
              stalledSince: y.stalledSince,
              lastStalledAt: y.lastStalledAt,
              stallOutAfterMs: y.stallOutAfterMs
            }, y.stalledSince = void 0, y.lastStalledAt = void 0, y.stallOutAfterMs = void 0;
            let Oe = y.spreadReconnect === !0;
            if (y.spreadReconnect = void 0, Rt = Date.now(), O !== void 0) O.opened = !0;
            if (k !== void 0 && signal.aborted && stopLatches.isStopped(slug_25) && y.taskId !== void 0) {
              Sh(y.taskId, context_9.taskRegistry, {
                quiet: !0
              }), te(e, slug_25), p("artifact_live_subscribe", "stop_latched");
              return;
            }
            let Me = e.supervisors.get(slug_25);
            if (Me !== void 0 && !Me.stopped) if (transport === "sync") YRo(slug_25), Ve(slug_25)?.reopened();else or({
              slug: slug_25,
              url: url_9,
              context: context_9
            }), Ve(slug_25)?.sourceEnded();
            _("artifact_live_subscribe", {
              armed: !0,
              ...(transport === "sync" && {
                sync_transport: !0
              }),
              ...(explicit_2 && {
                explicit: !0
              }),
              ...(F !== void 0 && {
                token_reused: !0,
                lease_remaining_min: Math.max(0, Math.floor((F.expMs - Rt) / 60000))
              }),
              ...(pt && {
                token_renewed: !0
              })
            });
            let kn = autoReact_4 !== void 0 && ee().wakes.scanGeneration !== scanGeneration,
              ni = eW(slug_25) !== stopGeneration,
              {
                wakes: wakes_5
              } = ee(),
              ri = wakes_5.liftedAtScanGeneration.get(slug_25) === wakes_5.scanGeneration || wakes_5.humanTurnAtScanGeneration === wakes_5.scanGeneration;
            if (kn && !ri && !Zm(slug_25) && wu()) Cze(slug_25), nW(1, [], {
              catchUp: !1,
              nameChordGesture: !Te(),
              passive: !Te()
            }), Noe({
              flush: !0
            });
            if (k !== void 0 && !signal.aborted) stopLatches.clearByApprovedRewatch(slug_25, k);
            if (autoReact_4 !== void 0) joe(slug_25).lastWakeArgs = {
              slug: slug_25,
              url: url_9,
              ...autoReact_4
            };
            let Tn = Z && P();
            if (Z && autoReact_4 !== void 0 && !signal.aborted && !Tn && Ne()) {
              let N = e.supervisors.get(slug_25)?.autoReactWiring;
              W3t(slug_25, {
                title: N?.title,
                storageV5: N?.context.storageV5
              });
            }
            if (autoReact_4 !== void 0 && signal.aborted) ;else if (autoReact_4 !== void 0) if (!Z && bg(slug_25) && !bpe(slug_25) && wakes_5.humanTurnAtScanGeneration === wakes_5.scanGeneration) b6t(slug_25), wakes_5.liftedAtScanGeneration.set(slug_25, wakes_5.scanGeneration), CU(e, slug_25), u7({
              slug: slug_25,
              url: url_9,
              ...autoReact_4,
              seed: !1
            });else if (Zm(slug_25) && (kn || ni || Tn || !(wn || Z))) ;else if (Zm(slug_25)) {
              let N = bg(slug_25),
                de = hM(slug_25);
              if (wu() && (Z || !N || de)) YT(slug_25), oHe(slug_25), autoReact_4.notify({
                summary: (Z ? WRn : bro)(qSe(autoReact_4.getTitle, url_9)),
                detail: `Auto-replies on artifact ${url_9} were ${Z ? "resumed by a resume_replies request" : "re-enabled by this publish"} \u2014 they had been ${de ? "handed to another session of this conversation that resumed it or published there" : N ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${N && !de ? zt : Yi}`
              });
              if (!N || de) pvt(slug_25);
              gro(slug_25), kno(slug_25), b6t(slug_25), CU(e, slug_25), u7({
                slug: slug_25,
                url: url_9,
                ...autoReact_4,
                seed: !0
              });
            } else {
              if (wakes_5.pendingResumeDisclosure.delete(slug_25)) YT(slug_25), oHe(slug_25), autoReact_4.notify({
                summary: WRn(qSe(autoReact_4.getTitle, url_9)),
                detail: `Auto-replies on artifact ${url_9} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${zt}`
              });
              if (u7({
                slug: slug_25,
                url: url_9,
                ...autoReact_4,
                seed: !0,
                ...(n.pickUpRecentSummons === !0 && n.machineArm !== !0 && {
                  pickUpRecentSummons: !0
                }),
                ...(n.machineArm === !0 && Oe && B7() && {
                  deferMs: Dro(e.rewatchTiming)
                })
              }), transport === "sync") {
                let N = joe(slug_25);
                yt = {
                  kickCount: N.kickCount,
                  cancelGeneration: N.cancelGeneration
                };
              }
            }
            let ze = e.supervisors.get(slug_25),
              xt = ze?.resumeAnnounce;
            if (ze !== void 0 && xt !== void 0) {
              ze.resumeAnnounce = void 0;
              let {
                  autoReact: autoReact_5
                } = ee(),
                de = autoReact_4 !== void 0 && !eg(slug_25) && !autoReact_5.userDisarmed && autoReact_5.enabledMemo === !0;
              if (!signal.aborted && !ze.stopped && !stopLatches.isStopped(slug_25) && (de || !xt.wired && autoReact_4 === void 0)) xt.onOpen();
            }
            if (autoReact_4 !== void 0 && (wn || Z || explicit) && !Sn && !signal.aborted && !stopLatches.isStopped(slug_25) && !eg(slug_25) && !ee().autoReact.userDisarmed && ee().autoReact.enabledMemo === !0) {
              Sn = !0;
              let claim = _no([slug_25], Date.now());
              (async () => {
                let de = await import("B:/~BUN/root/chunk-x94azb76.js"),
                  Ye = await import("B:/~BUN/root/chunk-stb3fr9j.js"),
                  Je = await vOe({
                    records: await de.listRegisteredSessionRecords(),
                    sessionId: _n,
                    selfPid: process.pid,
                    isRunning: Ye.isProcessRunning,
                    isSameProcess: Ye.provenSameProcessAsync
                  });
                if (Je.verdict !== "live") {
                  claim.end();
                  return;
                }
                let {
                    requestReplyTakeover: requestReplyTakeover
                  } = await import("B:/~BUN/root/chunk-h77xf4r2.js"),
                  Lt = (await requestReplyTakeover({
                    holders: [Je.holder, ...Je.otherHolders],
                    holdersIncomplete: Je.unproven === !0,
                    conversationId: _n,
                    slugs: [slug_25],
                    reason: "claim",
                    alreadyReplying: !0,
                    claim: claim
                  })).yielded.has(slug_25),
                  Cn = !Lt && claim.lost.has(slug_25),
                  displayName_2 = qSe(() => getTitle(), url_9);
                oa({
                  value: qi({
                    taskType: M$,
                    summary: qt(Lt ? `Another session of this conversation handed its replies on ${displayName_2} to this one` : Cn ? `This session handed its replies on ${displayName_2} to another session of this conversation` : `Another session of this conversation is open while replies are armed on ${displayName_2}`),
                    body: `
<event>${qt(Lt ? `Another live session of this same conversation was also armed to reply to comments on ${url_9}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : Cn ? `Another live session of this same conversation claimed the replies to comments on ${url_9} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do \u2014 a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${url_9}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>`
                  }),
                  mode: "task-notification",
                  passive: !0,
                  priority: "next",
                  origin: {
                    kind: "task-notification",
                    source: M$,
                    slug: slug_25,
                    displayName: displayName_2
                  },
                  agentId: qe()
                });
              })().catch(() => {
                claim.end();
              });
            }
            return;
          }
          let _e = ne ? Date.now() - Rt : 0,
            kt = !ne && ro(closeCode),
            expired = transport === "sync" ? closeCode === _Ze && (vn || O !== void 0 && Date.now() >= O.expMs - zi) : closeCode === Aro,
            je = transport === "sync" && (ne && closeCode === _Ze && !expired || !ne && mpe(closeCode)?.status === 404),
            stalled_2 = je || !ne && (kt || no(closeCode, Ie, e.rewatchTiming)),
            Ct = ne || stalled_2 ? void 0 : ei,
            q = e.supervisors.get(slug_25);
          if (je && ne && _e < e.rewatchTiming.minUptimeMs && q !== void 0 && q.stalledSince === void 0 && We?.stalledSince !== void 0) q.stalledSince = We.stalledSince, q.lastStalledAt = We.lastStalledAt, q.stallOutAfterMs = We.stallOutAfterMs;
          if (q !== void 0 && transport === "sync" && closeCode === bZe && O !== void 0 && q.lease === O) delete q.lease;
          if (O !== void 0 && q?.lease === O && (!B7() || !kt && !je && !Klr(O, {
            expired: expired,
            refused: Ct !== void 0,
            healthy: ne && _e >= e.rewatchTiming.minUptimeMs
          }))) {
            if (delete q.lease, !O.opened) delete q.renewable;
          }
          if (ne) p("artifact_live_subscribe", `socket_closed_${closeCode ?? "unknown"}`, {
            chain_spared: ee().autoReact.artifacts.get(slug_25)?.scanning === !0
          });else if (Ct !== void 0) p("artifact_live_subscribe", "reuse_connect_failed");else {
            let Oe = mpe(closeCode),
              Me = {
                ...(stalled_2 && {
                  stalled: !0
                }),
                ...(kt && {
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
          Xt(e, slug_25, {
            uptimeMs: je ? 0 : _e,
            ...(closeCode !== void 0 && {
              closeCode: closeCode
            }),
            resumeNeverOpened: Z && !ne,
            reuseRefused: Ct !== void 0,
            stalled: stalled_2,
            expired: expired
          });
        }
      }, context_9);
      if (Zi(e, y, slug_25, w.data.taskId), xe) e.pendingRegistrations--, xe = !1;
      let K = e.supervisors.get(slug_25);
      if (K === void 0 || K !== y) return Sh(w.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), Qt(e, slug_25, n.machineArm), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (T()) return Sh(w.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), te(e, slug_25), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (P()) {
        if (Sh(w.data.taskId, context_9.taskRegistry, {
          quiet: !0
        }), p("artifact_live_subscribe", "stop_latched"), e.armOutcomes.delete(slug_25), Jt(e, slug_25), bt || y.lastActivityAt !== lastActivityAt) ut(e, y);else te(e, slug_25);
        return {
          outcome: "skipped",
          reason: "stop_latched"
        };
      }
      let be = Z && signal.aborted;
      if (be && k !== void 0 && stopLatches.isStopped(slug_25)) return Sh(w.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), te(e, slug_25), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (e.armOutcomes.delete(slug_25), Jt(e, slug_25), be) return {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (Z && (ee().wakes.scanGeneration !== scanGeneration || eW(slug_25) !== stopGeneration)) return {
        outcome: "skipped",
        reason: "stopped_again"
      };
      if (bn && autoReactWiring !== void 0) {
        let U = e.supervisors.get(slug_25);
        if (U === y && !U.stopped && !gr(e, slug_25, autoReactWiring_2)) U.autoReactWiring = Re(U.autoReactWiring, {
          ...autoReactWiring,
          title: U.autoReactWiring?.title ?? autoReactWiring.title
        }, !0);
      }
      let ue = oe ? void 0 : e.pendingInFlightWiring.get(slug_25),
        Rn = Zm(slug_25),
        ti = Rn || autoReact_4 !== void 0 && ee().wakes.scanGeneration !== scanGeneration,
        yn = ue !== void 0 && ue.freshPublishWiring && ue.scanGeneration === ee().wakes.scanGeneration && ue.stopGeneration === eW(slug_25);
      if (ue === void 0 || signal.aborted || !(autoReact_4 === void 0 ? !Rn || yn : !Z && ti && yn)) return {
        outcome: "armed",
        taskId: w.data.taskId,
        ...(oe && {
          degraded: "not_editor"
        })
      };
      e.pendingInFlightWiring.delete(slug_25), Ce = ue, Sh(w.data.taskId, context_9.taskRegistry, {
        quiet: !0
      });
    } catch {
      let w = e.supervisors.get(slug_25);
      if (qr && w === y && !(w !== void 0 && w.explicit && !explicit)) te(e, slug_25);else if (zr && w !== void 0 && w === B) w.explicit = !1;
      if (vt !== void 0 && w === y && w.armedVia === "resume") w.armedVia = vt;else if (mn && w === y && w.armedVia === armedVia && !w.explicit) {
        if (w.armedVia = "mcp_write", hn === void 0) delete w.autoReactWiring;else w.autoReactWiring = hn;
        CU(e, slug_25);
      }
      if (w !== void 0 && w === y && w.wake === Be) if (wake === void 0) delete w.wake;else w.wake = wake;
      if (w !== void 0 && onOpen !== void 0) w.resumeAnnounce = void 0;
      if (O !== void 0 && w?.lease === O && !Klr(O, {
        expired: !1,
        refused: !1,
        healthy: !1
      })) {
        if (delete w.lease, !O.opened) delete w.renewable;
      }
      return m("artifact_live_subscribe", F !== void 0 ? "reuse_ws_open_error" : "ws_open_error"), X(e, slug_25, n.machineArm, "ws_open_error", z);
    }
  } finally {
    e.inFlightSubscribes.delete(slug_25), e.inFlightWiredIntent.delete(slug_25), e.retiredInFlightArms.delete(slug_25), e.inFlightGenerations.delete(slug_25), e.bootingWiredArms.delete(slug_25);
    let T = e.supervisors.get(slug_25);
    if (T === void 0 || T.stopped) Ve(slug_25)?.sourceEnded();
    let J = e.armSettleWaiters.get(slug_25) ?? [];
    e.armSettleWaiters.delete(slug_25);
    for (let D of J) try {
      D();
    } catch (error) {
      d(error);
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
function Mr(e, n, outcome, reason_3) {
  JLn(e.armOutcomes, n, {
    outcome: outcome,
    reason: reason_3,
    at: Date.now()
  }, KLn);
}
function Co(e, n, r, i, l) {
  if (r || e.handoffGeneration !== l.handoffGen || e.retiredInFlightArms.has(n)) return;
  let s = e.supervisors.get(n);
  if (s !== void 0 && !s.stopped && s.timer !== void 0) {
    if (i !== "cancelled") s.lastFailure = i;
    return;
  }
  if (e.armOutcomes.has(n)) return;
  let h = ee().durable.stopLatches.isStopped(n);
  if (!h) Mr(e, n, "failed", i);
  if (l.announce && i !== "cancelled" && !h) Po(e, n, l, i);
}
var not_found = "artifact not found",
  xo = "there is nothing to retry unless the artifact is shared with the user again",
  other_org = "other organization",
  public_outside_org = "public, outside your organization",
  Lo = `there is nothing to retry until ${z0e}`,
  Wo = "there is nothing to retry: read it with the read action instead",
  advice_2 = "it will not come back on its own \u2014 watch it again only if the user asks or your current task still depends on its republishes",
  advice = "watch it again when you next work on this artifact",
  advice_4 = "there is nothing to re-watch while live updates are switched off";
function Mo(e) {
  switch (e) {
    case "not_found":
    case "other_org":
    case "public_outside_org":
      return {
        advice: VSe(e)
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
function VSe(e) {
  switch (e) {
    case "not_found":
    case not_found:
      return xo;
    case "other_org":
    case other_org:
      return Lo;
    case "public_outside_org":
    case public_outside_org:
      return Wo;
    case Vr:
    case no_subscription_token:
    case Ur:
    case shortReason:
      return advice_2;
    default:
      return;
  }
}
var Vr = "connection lost",
  no_subscription_token = "no live credential",
  Ur = "could not reconnect",
  shortReason = "made room for another watch",
  nn = {
    boot_failed: "could not connect",
    ws_open_error: "could not connect",
    sync_unavailable: "could not connect",
    not_found: not_found,
    other_org: other_org,
    public_outside_org: public_outside_org,
    no_subscription_token: no_subscription_token,
    watch_cap: "watch limit reached"
  };
function Jt(e, n) {
  QLn(e.announcedArmFailures, n), P3t(n);
}
function P3t(e) {
  fS(n => n.origin?.kind === "task-notification" && n.origin.source === M$ && n.origin.slug === e && (n.origin.armFailed === !0 || n.origin.watchEnded === !0));
}
function Po(e, slug_26, r, i) {
  if (!mAt(e.announcedArmFailures, `${slug_26}:${i}`, YLn)) return;
  let l = GSe(i) ?? i,
    s = VSe(i) ?? XLn;
  Gr({
    slug: slug_26,
    artifactName: qSe(r.getTitle, r.url),
    shortReason: nn[i] ?? "not armed",
    event: `The live subscription for ${r.url} did not arm \u2014 ${l}. This session is NOT watching it and does not keep track of new versions of it; ${s}, and do not claim to be watching it meanwhile.`
  });
}
function Gr(e) {
  oa({
    value: qi({
      taskType: M$,
      summary: qt(Ero(e.artifactName, e.shortReason)),
      body: `
<event>${qt(e.event)}</event>`
    }),
    mode: "task-notification",
    priority: "next",
    origin: {
      kind: "task-notification",
      source: M$,
      slug: e.slug,
      displayName: e.artifactName,
      armFailed: !0
    },
    agentId: qe()
  });
}
function llr(e) {
  let {
    slug: slug_27,
    url: url_11,
    liveDocLoss: liveDocLoss,
    settlement: settlement
  } = e;
  if (settlement.settled === "registered") {
    P3t(slug_27);
    return;
  }
  if (settlement.settled !== "unregistered" || !hr(slug_27, settlement.reason)) return;
  let {
      reason: reason_4,
      detail: detail_3,
      serverMessage: serverMessage_2
    } = settlement,
    v = liveDocLoss ?? `This session will NOT be woken when ${xb() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`,
    S = rRn(reason_4);
  Gr({
    slug: slug_27,
    artifactName: qSe(e.getTitle, url_11),
    shortReason: "wake subscription not registered",
    event: `The durable wake subscription for ${url_11} was not registered (${reason_4}${detail_3 !== void 0 ? `: ${detail_3}` : ""}) \u2014 ${A3t(reason_4, serverMessage_2)} ${v}${S === null ? "" : `; ${S}`} \u2014 do not claim to be subscribed to it meanwhile.`
  });
}
function clr(e) {
  return e.connected && !SZe(e.taskId);
}
function dlr(e, n) {
  let live_16 = ee().live,
    i = new Set();
  for (let S of Object.values(e.taskRegistry.all())) if (yM(S) && S.status === "running" && S.frameLive !== void 0) i.add(S.frameLive.slug);
  let stopLatches_2 = ee().durable.stopLatches,
    s = S => (n === void 0 || S === n) && !i.has(S) && !stopLatches_2.isStopped(S),
    h = new Set(sRn(e, n).map(item => item.slug)),
    g = [],
    v = new Set();
  for (let slug_28 of live_16.inFlightSubscribes) {
    if (!s(slug_28) || (live_16.inFlightGenerations.get(slug_28) ?? live_16.handoffGeneration) !== live_16.handoffGeneration || live_16.retiredInFlightArms.has(slug_28)) continue;
    v.add(slug_28);
    let A = live_16.supervisors.get(slug_28),
      C = A !== void 0 && !A.stopped ? A : void 0;
    g.push({
      slug: slug_28,
      state: "arming",
      reconnect: C?.taskId !== void 0,
      failures: C?.consecutiveFailures ?? 0,
      ...(C?.lastFailure !== void 0 && {
        lastFailure: C.lastFailure
      })
    });
  }
  for (let S of live_16.supervisors.values()) {
    if (!s(S.slug) || v.has(S.slug) || S.stopped || S.timer === void 0) continue;
    if (v.add(S.slug), h.has(S.slug)) continue;
    g.push({
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
  for (let [slug_29, A] of live_16.armOutcomes) {
    if (!s(slug_29) || v.has(slug_29)) continue;
    g.push({
      slug: slug_29,
      state: A.outcome,
      reason: A.reason,
      at: A.at
    });
  }
  return g;
}
export { mze, C3t, tRn, R3t, Cto, zar, Rto, nRn, A3t, Gar, rRn, Ato, xto, Var, qar, Pto, Kar, x3t, oRn, Qwt, Zwt, Doe, evt, Loe, sRn, Yar, Xar, Jar, Qar, Zar, elr, iRn, tlr, nlr, tvt, rlr, jKo, olr, aRn, lRn, slr, zSe, nvt, ilr, cRn, aZe, dRn, uRn, pRn, fRn, GSe, rvt, alr, mRn, VSe, P3t, llr, clr, dlr };