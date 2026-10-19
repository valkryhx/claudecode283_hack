// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { at, j, K, Ze, tre, nf, v$, $Ge, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, jo, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Wk, Iin, ee, c$s, sKn, u$s, p$s } from "B:/~BUN/root/chunk-t63e78w2.js";
import { X2, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { li } from "B:/~BUN/root/chunk-mtfk0qfd.js";
import { Ut } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { R_, qN, VT, MD, mWe, Qd, E, Yk } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { rn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Uo, GGs, VGs, qGs, KGs, bW, ar, xJ, Hn, Xk, YT } from "B:/~BUN/root/chunk-qp0344nb.js";
import { TO, Kxo, nXe } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { Ggs, kyr, Xgs, Jgs, y_r, __r, b_r, S_r, aJt, w_r, el, Fb } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Edt, V6e } from "B:/~BUN/root/chunk-k382hx6g.js";
import { iUe, uvs } from "B:/~BUN/root/chunk-57vwkt3t.js";
import { TE, XRt, W5t, gue, sfr, ifr, N4e, tq, dd, hue, yue, _ue, X7 } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { URt, eoo, OIn, Vpr, Koe, Mz, A4e, x4e, v5t, qpr, NIn, XA, vds, zY, kds } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { jst } from "B:/~BUN/root/chunk-khznyweq.js";
import { abe, Kce, eCt, MY, kxn, Exn, Oy, Kh, Yot, c_, lss, V$, JRe, uss, zV, pss, fss, $dr, mss, tCt, nCt, Txn, gss, hss, yss, _ss, F7r, H7r, bss, Sss, wss, q$, Gdr, Xot, rCt, Ess, Tss, Css, xss, Ob, Pss, Rxn, DY, Oss, Mss } from "B:/~BUN/root/chunk-4bgwjb4z.js";
import { dbe, cbe, ube } from "B:/~BUN/root/chunk-q9twqrh6.js";
import { Iot, Glr, TAn, WRe, FTt, EYt, TYt } from "B:/~BUN/root/chunk-8wktghfx.js";
import { HTt, CAn, nbe, ars, _Qr, Zlr, drs, urs, hKe, Ers, PYt, lf, Rrs, DAn, OYt, zNe, Gce, xrs } from "B:/~BUN/root/chunk-f7hn69zw.js";
import { Vrs, Jrs } from "B:/~BUN/root/chunk-7qgtnbqd.js";
import { rw } from "B:/~BUN/root/chunk-srvq2311.js";
import { TQr, CQr, P8, FAn, Mot, yKe, Nrs } from "B:/~BUN/root/chunk-hscn9khv.js";
import { MYt, tdr } from "B:/~BUN/root/chunk-s85z8hdk.js";
import { PQr } from "B:/~BUN/root/chunk-5qc8qrsy.js";
import { HY } from "B:/~BUN/root/chunk-93gzx7c6.js";
import { IPn } from "B:/~BUN/root/chunk-21sxe603.js";
import { _s } from "B:/~BUN/root/chunk-b4xxgr0r.js";
import { o, v, M, oe, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
class Cn {
  working = _s({
    working: !1
  });
  userPrompt = _s({
    waitingFor: void 0
  });
}
var Se = new at(() => new Cn());
function Oot(e, working) {
  Se.of(e).working.setState(r => r.working === working ? r : {
    working: working
  });
}
function bAn(e) {
  return Se.of(e).working.getState().working;
}
function Olr(e, n) {
  return Se.of(e).working.subscribe(n);
}
function SAn(e, waitingFor) {
  Se.of(e).userPrompt.setState(r => r.waitingFor === waitingFor ? r : {
    waitingFor: waitingFor
  });
}
function wAn(e) {
  return XJr(e) !== void 0;
}
function XJr(e) {
  return Se.of(e).userPrompt.getState().waitingFor;
}
function nrs(e, n) {
  return Se.of(e).userPrompt.subscribe(n);
}
var Ot = 120,
  xn = `act:${Ot}`,
  oi = "act:0";
function Ln(e) {
  if (!e.activityOkReported) e.activityOkReported = !0, g("artifact_activity_emit");
}
function Wn(e, n, r) {
  n(r), Ln(e);
}
function In(e, n, r) {
  n(r), Ln(e);
}
function It(e, n) {
  for (let r of e.activitySenders.values()) Wn(e, r, n ? xn : oi);
  for (let r of e.agentActivitySinks.values()) In(e, r, n ? Ot : 0);
}
function On(e) {
  return e.activitySenders.size + e.agentActivitySinks.size;
}
function Mt(e) {
  if (On(e) === 0) return;
  if (e.activityRefreshTimer !== void 0) return;
  e.activityRefreshTimer = setInterval(n => It(n, !0), e.activityRefreshMs, e), e.activityRefreshTimer.unref?.();
}
function Mn(e) {
  if (On(e) === 0 && e.activityRefreshTimer !== void 0) clearInterval(e.activityRefreshTimer), e.activityRefreshTimer = void 0;
}
function si(e, n) {
  if (n) {
    if (e.activityClearTimer !== void 0) {
      clearTimeout(e.activityClearTimer), e.activityClearTimer = void 0;
      return;
    }
    e.activityOnsetTimer ??= setTimeout(r => {
      r.activityOnsetTimer = void 0, It(r, !0), Mt(r);
    }, e.activityEdgeDebounceMs, e), e.activityOnsetTimer.unref?.();
  } else {
    if (e.activityOnsetTimer !== void 0) {
      clearTimeout(e.activityOnsetTimer), e.activityOnsetTimer = void 0;
      return;
    }
    e.activityClearTimer ??= setTimeout(r => {
      if (r.activityClearTimer = void 0, r.activityRefreshTimer !== void 0) clearInterval(r.activityRefreshTimer), r.activityRefreshTimer = void 0;
      It(r, !1);
    }, e.activityEdgeDebounceMs, e), e.activityClearTimer.unref?.();
  }
}
function Pn() {
  return j();
}
function Dn(e) {
  if (e.activityUnsubscribe !== void 0) return;
  let n = Pn();
  e.activityUnsubscribe = Olr(n, () => {
    try {
      si(e, bAn(n));
    } catch (error) {
      l(error);
    }
  });
}
function Fn(e) {
  return bAn(Pn()) && e.activityOnsetTimer === void 0 || e.activityClearTimer !== void 0;
}
function Vn(e, n, r) {
  if (e.disposed) return;
  if (Dn(e), e.activitySenders.set(n, r), pss(e, n), Fn(e)) Wn(e, r, xn), Mt(e);
}
function Nn(e, n, r) {
  if (e.activitySenders.get(n) === r) e.activitySenders.delete(n), fss(e, n), Mn(e);
}
function Xe(e, n, r) {
  if (e.disposed) return;
  if (Dn(e), e.agentActivitySinks.set(n, r), Fn(e)) In(e, r, Ot), Mt(e);
}
function Qe(e, n, r) {
  if (e.agentActivitySinks.get(n) === r) e.agentActivitySinks.delete(n), Mn(e);
}
var et = "frame-sync.v1";
function Pe(e, n) {
  let r = new URL("/api/frame/sync", qGs());
  if (r.searchParams.set("slug", e), n?.commentHint === !0) r.searchParams.set("comment_hint", "1");
  if (n?.versionNotices === !0) r.searchParams.set("vn", URt);
  return Glr(r);
}
var Pt = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;
function ve(e) {
  if (!Pt.test(e)) return !1;
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
  return jst.test(id) ? {
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
  Dt = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED",
  $n = "JOIN_DENIED_REASON_DENIED",
  Kn = "JOIN_DENIED_REASON_CAP_INVALID",
  Bn = {
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
    payload: oe().optional()
  })),
  Ft = f(() => u({
    cap: o(),
    exp: v()
  })),
  De = f(() => u({
    reason: o()
  }));
function Vt(slug, busyS) {
  return _({
    kind: "activity",
    slug: slug,
    payload: {
      busyS: busyS
    }
  });
}
function jn(e) {
  if (a.CLAUDE_CODE_REMOTE) return "remote";
  if (KGs()) return "cp_override";
  if (TYt(Pe(e)) !== null) return "egress_denied";
  return null;
}
async function qn(e, n) {
  let storedCap = e.storedCap;
  if (!e.rebootNeeded && storedCap !== void 0 && storedCap.exp * 1000 - Date.now() > di) {
    let w = await Yk(e.context.storageV5).catch(() => {
      return;
    });
    if (!n.isCurrent()) return {
      outcome: "stale"
    };
    if (R_(e.owner, w)) return {
      outcome: "token",
      token: storedCap.cap,
      boot: void 0
    };
  }
  let i,
    d = Date.now();
  try {
    i = await XA({
      slug: e.slug,
      env: Uo()
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
    i = {
      err: "boot threw",
      errorCode: errorCode
    };
  }
  if (!n.isCurrent()) return {
    outcome: "stale"
  };
  if (i.err !== null) {
    if (Mz(i)) return {
      outcome: "other_org"
    };
    if (Koe(i)) return {
      outcome: "not_found"
    };
    return {
      outcome: "boot_failed",
      status: i.status,
      noAnswer: i.errorCode === errorCode,
      elapsedMs: Date.now() - d
    };
  }
  if (i.assetToken === void 0) return {
    outcome: "public_outside_org"
  };
  let s = i.data.syncToken,
    h = typeof s === "string" && Pt.test(s) ? me(s) : void 0;
  if (e.owner !== void 0 && h !== void 0 && !R_(e.owner, h)) return {
    outcome: "owner_changed"
  };
  let b = typeof s === "string" && ve(s) ? h : void 0;
  if (typeof s !== "string" || b === void 0) return {
    outcome: "not_admitted"
  };
  return e.owner = b, e.rebootNeeded = !1, e.bootedVersion = i.ver, zn(e, fi(s)), {
    outcome: "token",
    token: s,
    boot: i.data
  };
}
function fi(cap) {
  return {
    cap: cap,
    exp: tt(cap) ?? Math.floor((Date.now() + Txn) / 1000)
  };
}
function zn(e, n) {
  let r = Date.now(),
    i = Math.min(r + Txn, Math.max(r + gss, n.exp * 1000));
  e.storedCap = {
    cap: n.cap,
    exp: Math.floor(i / 1000)
  }, e.capStrikes = 0;
}
function Yn(e, n, r) {
  switch (n) {
    case "ctrl:token_refresh":
      {
        let i = Ft().safeParse(r);
        if (i.success && ve(i.data.cap) && R_(e.owner, me(i.data.cap))) zn(e, {
          cap: i.data.cap,
          exp: i.data.exp
        });
        return !0;
      }
    case "ctrl:token_refresh_declined":
      {
        let i = De().safeParse(r);
        if (i.success && i.data.reason === Dt) e.rebootNeeded = !0, e.storedCap = void 0;
        return !0;
      }
    default:
      return !1;
  }
}
function pi(e, n, r) {
  if (n()) return;
  if (e.taskId !== void 0) try {
    Ob(e.taskId, e.context.taskRegistry, {
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
      Ob(taskId, e.context.taskRegistry, {
        quiet: !0
      });
    } catch {}
  }
}
var mi = 404;
function hi(e) {
  let n = Number(e);
  return n === 1008 || n >= 4000 && n <= 4999;
}
function Jn(e, n, r) {
  switch (n.on) {
    case "dial_error":
      return n.deterministic ? "refused" : "dropped";
    case "boot":
      if (zY(n.status)) return "unavailable";
      if (n.noAnswer) return n.elapsedMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      return "refused";
    case "socket":
      {
        if (n.detail === nCt) return "revoked";
        if (n.opened) {
          if (n.uptimeMs >= r.stallThresholdMs) return "dropped";
          if (n.detail === tCt && !e.rebootNeeded) return "unavailable";
          return hi(n.detail) ? "refused" : "dropped";
        }
        let i = WRe(n.detail);
        if (i !== null) return zY(i.status) || i.cfMitigated || i.status === mi ? "unavailable" : "refused";
        return n.detail === TAn || n.ageMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      }
  }
}
function Xn(e, n, r) {
  let i = Jn(e, n, r);
  return i === "refused" || i === "revoked";
}
function Qn(e, n, r) {
  let i = Jn(e, r, n);
  if (i === "revoked" || i === "refused") e.storedCap = void 0;else if (i === "dropped" && r.on !== "boot" && e.storedCap !== void 0) {
    let s = r.on === "socket" && r.opened && r.uptimeMs >= n.minUptimeMs;
    if (e.capStrikes = s ? 0 : e.capStrikes + 1, e.capStrikes >= hss) e.storedCap = void 0;
  }
  if (i === "revoked") return {
    next: "end",
    reason: "revoked"
  };
  if (i === "unavailable") {
    let stallRunStarted = e.stalledSince === void 0;
    if (stallRunStarted) e.stalledSince = Date.now(), e.stalls = 0;
    let h = Math.min(n.stallMinMs * 2 ** e.stalls, n.stallMaxMs / 2),
      b = Math.min(h * 2, n.stallMaxMs);
    return e.stalls++, {
      next: "redial",
      delayMs: Math.round(h + Math.random() * (b - h)),
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
  let d = Math.min(n.capMs, n.baseMs * 2 ** Math.min(e.backoff, 5));
  return e.backoff++, {
    next: "redial",
    delayMs: Math.round(Math.random() * d),
    stalled: !1,
    stallRunStarted: !1
  };
}
function Nt(e, n, r) {
  if (e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer);
  e.state = "closed", e.reconnectTimer = setTimeout(gi, n, e, r), e.reconnectTimer.unref?.();
}
function gi(e, n) {
  e.reconnectTimer = void 0, n(e);
}
async function Zn(e, n, r, i) {
  let {
      slug: slug_2
    } = e,
    {
      live: live
    } = ee(),
    opened = !1,
    b = !1,
    w,
    S,
    R = () => b || !i(),
    x = Date.now(),
    G = () => opened && e.openedAt > 0 ? Date.now() - e.openedAt : 0,
    L = y => {
      if (R()) return;
      b = !0;
      let uptimeMs = G(),
        ageMs = Date.now() - x;
      if (e.send === w) e.send = void 0, e.state = "closed", e.openedAt = 0;
      r.onEnded(y, {
        opened: opened,
        uptimeMs: uptimeMs,
        ageMs: ageMs
      });
    };
  try {
    let y = await EYt({
      ws: {
        url: Pe(slug_2, {
          versionNotices: !0
        }),
        protocols: [et, n]
      },
      headers: {
        "User-Agent": qN()
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
        if (R()) return;
        w = T, e.send = T, e.state = "open", S = P => T(Vt(slug_2, P)), Xe(live, r.activitySinkKey, S);
      },
      onSenderClosed: () => {
        if (S !== void 0) Qe(live, r.activitySinkKey, S);
        if (w !== void 0 && e.send === w) {
          if (e.send = void 0, e.state === "open") e.state = "closed";
        }
        if (R()) return;
        let taskId_2 = e.taskId,
          P = taskId_2 === void 0 ? void 0 : e.context.taskRegistry.all()[taskId_2];
        if (taskId_2 !== void 0 && P?.status !== "running") {
          L("task_ended");
          return;
        }
        setTimeout(pi, 0, e, R, L).unref?.();
      },
      onLifecycle: (T, P) => {
        if (R()) return;
        if (T === "open") {
          opened = !0, e.everOpened = !0, e.openedAt = Date.now(), r.onOpen();
          return;
        }
        L(P);
      }
    }, e.context);
    if (e.taskId = y.data.taskId, !i()) return Ob(y.data.taskId, e.context.taskRegistry, {
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
var bi = "tengu_slate_lantern_hush",
  _i = [600, 86400],
  Si = [25, 600],
  vi = 50,
  wi = f(() => {
    let e = v().optional().catch(void 0);
    return u({
      idleAfterS: e,
      idleKeepaliveS: e
    });
  });
function er(e, [n, r]) {
  return Math.min(Math.max(Math.round(e), n), r);
}
function Ai() {
  let e = E(bi, null);
  if (typeof e === "string") e = pt(e, !1);
  let n = wi().safeParse(e),
    r = n.success ? n.data : {},
    idleAfterMs = r.idleAfterS === void 0 || r.idleAfterS <= 0 ? 0 : er(r.idleAfterS, _i) * 1000,
    idleKeepaliveMs = (r.idleKeepaliveS === void 0 ? vi : er(r.idleKeepaliveS, Si)) * 1000;
  return {
    idleAfterMs: idleAfterMs,
    idleKeepaliveMs: idleKeepaliveMs
  };
}
function Ri(e, n) {
  if (iUe()) return 0;
  let r = Math.max(uvs(), nf(), tre() ?? 0, e.lastArtifactToolCallAt);
  return Math.max(0, n - r);
}
function it(e, n, r = Date.now()) {
  let i = Ai();
  if (i.idleAfterMs <= 0) return n;
  return Ri(e, r) >= i.idleAfterMs ? Math.max(i.idleKeepaliveMs, n) : n;
}
var Gt = f(() => u({
    tag: o(),
    ver: o(),
    replay: M().optional()
  })),
  $t = "INVALIDATE_TAG_LIVE",
  Ht = "INVALIDATE_TAG_SHARED",
  nr = "INVALIDATE_TAG_HEAD",
  rr = f(() => u({
    commentsEmpty: M(),
    readAtMs: v().int().positive().max(8640000000000000)
  }));
function Kt(e) {
  return e * 3 + 5000;
}
function yi() {
  return a.CLAUDE_CODE_ARTIFACT_PRESENCE ?? E("tengu_brass_plover", !1);
}
function ot(e) {
  if (!yi()) return "flag_off";
  return jn(e);
}
function Re() {
  return ee().presence;
}
function Fe(e) {
  return !e.stopped && Re().conns.get(e.slug) === e;
}
function ir(e) {
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
    let d = Re();
    if (d.declined.has(slug_3)) return;
    let s = FTt(e.context);
    d.dispose = Wi, d.accountChanged = Ii, d.disposeSlug = Li, d.retireSlug = ur;
    let h = d.conns.get(slug_3);
    if (h !== void 0 && !h.stopped) {
      if (h.url = url, h.stalledSince !== void 0 && h.reconnectTimer !== void 0) Nt(h, Math.round(Math.random() * d.timing.capMs), sr);
      return;
    }
    ki(d, slug_3, url, s);
  } catch (error) {
    t(`[artifactPresence] arm threw slug=${slug_3}: ${error instanceof Error ? error.name : "error"}`);
  }
}
function ki(e, slug_4, url_2, context) {
  let d = {
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
  e.conns.set(slug_4, d), Css(Ei), or(d, "initial").catch(s => {
    t(`[artifactPresence] connect threw slug=${slug_4}: ${s instanceof Error ? s.name : "error"}`), Ae(d, {
      on: "dial_error",
      deterministic: !1
    });
  });
}
var Ei = {
  closeByTaskId: e => Ti(e)
};
function Ti(e) {
  let n = c$s();
  if (n === void 0) return !1;
  for (let r of n.conns.values()) {
    if (r.taskId !== e) continue;
    return r.taskId = void 0, n.declined.add(r.slug), re(r), !0;
  }
  return !1;
}
async function or(e, n) {
  let r = ot(e.slug);
  if (r !== null) {
    t(`[artifactPresence] closing slug=${e.slug}: ${r}`), re(e);
    return;
  }
  e.state = "connecting";
  let i = await qn(e, {
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
        let d = {
          on: "boot",
          status: i.status,
          noAnswer: i.noAnswer,
          elapsedMs: i.elapsedMs
        };
        if (n === "initial" && Xn(e, d, Re().timing)) t(`[artifactPresence] boot failed for slug=${e.slug}; no presence connection`), re(e);else Ae(e, d);
        return;
      }
    case "not_admitted":
      t(`[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`), re(e);
      return;
    case "owner_changed":
      p("artifact_presence", "owner_changed"), re(e);
      return;
    case "token":
      await Ci(e, i.token);
      return;
  }
}
async function Ci(e, n) {
  let {
      timing: timing
    } = Re(),
    {
      slug: slug_5
    } = e,
    d = !e.everOpened;
  e.refusedAdmission = !1;
  let s = await Zn(e, n, {
    description: `presence on artifact ${e.url}`,
    keepalive: {
      openFrames: [],
      frame: _({
        kind: "ping",
        slug: slug_5
      }),
      intervalMs: timing.keepaliveMs,
      sendEveryMs: () => it(ee().live, timing.keepaliveMs),
      deadlineMs: timing.keepaliveDeadlineMs ?? Kt(timing.keepaliveMs)
    },
    onFrame: b => xi(e, b),
    onOpen: () => {
      if (d) g("artifact_presence", {
        connected: !0
      });
    },
    onEnded: (detail, w) => {
      let refusedAdmission = e.refusedAdmission;
      if (e.refusedAdmission = !1, refusedAdmission && detail !== nCt) {
        Ae(e, Bn);
        return;
      }
      if (w.opened) {
        if (detail !== tCt && detail !== nCt) p("artifact_presence", `closed_${detail ?? "unknown"}`);
      } else {
        let R = WRe(detail);
        m("artifact_presence", "connect_failed", R === null ? void 0 : {
          http_status: R.status,
          cf_mitigated: R.cfMitigated
        });
      }
      Ae(e, {
        on: "socket",
        detail: detail,
        ...w
      });
    },
    handshakeDeadlineMs: timing.handshakeDeadlineMs,
    activitySinkKey: `presence:${slug_5}`,
    label: "artifactPresence"
  }, () => Fe(e));
  if (s.outcome !== "error") return;
  let deterministic = s.error instanceof Iot && !s.error.message.startsWith("could not resolve");
  if (!Fe(e)) return;
  if (d && deterministic) {
    m("artifact_presence", "ws_open_error"), re(e);
    return;
  }
  p("artifact_presence", "ws_open_error"), e.state = "closed", Ae(e, {
    on: "dial_error",
    deterministic: deterministic
  });
}
function Ae(e, n) {
  if (!Fe(e)) return;
  let r = Qn(e, Re().timing, n);
  if (r.next === "end") {
    p("artifact_presence", r.reason === "revoked" ? "closed_4403" : "refused_gave_up"), re(e);
    return;
  }
  if (r.stallRunStarted) {
    let http_status = n.on === "boot" ? n.status : n.on === "socket" ? WRe(n.detail)?.status : void 0;
    p("artifact_presence", "stall_run_started", {
      boot: n.on === "boot",
      ...(http_status !== void 0 && {
        http_status: http_status
      })
    });
  }
  Nt(e, r.delayMs, sr);
}
function sr(e) {
  if (!Fe(e)) return;
  or(e, "reconnect").catch(n => {
    t(`[artifactPresence] reconnect threw slug=${e.slug}: ${n instanceof Error ? n.name : "error"}`), Ae(e, {
      on: "dial_error",
      deterministic: !1
    });
  });
}
function re(e) {
  rt(e);
  let n = Re();
  if (n.conns.get(e.slug) === e) n.conns.delete(e.slug);
}
function xi(e, n) {
  if (e.stopped || n.charCodeAt(0) !== 123) return;
  let r;
  try {
    r = jo(n);
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
  if (Yn(e, kind, payload)) return;
  switch (kind) {
    case "join_denied":
      {
        let w = De().safeParse(payload).data?.reason;
        if (w === $n) {
          m("artifact_presence", "join_denied"), re(e);
          return;
        }
        if (p("artifact_presence", "join_denied"), w === Kn) e.storedCap = void 0;
        if (e.refusedAdmission = !0, e.taskId !== void 0) try {
          Ob(e.taskId, e.context.taskRegistry, {
            quiet: !0
          });
        } catch {}
        return;
      }
    case "ctrl:comment":
      tr(e.slug)?.comment();
      return;
    case "ctrl:invalidate":
      {
        let w = Gt().safeParse(payload);
        if (w.success && (w.data.tag === $t || w.data.tag === Ht)) tr(e.slug)?.ver(w.data.ver, "sync");
        return;
      }
    default:
      return;
  }
}
function tr(e) {
  let n = ee().live.supervisors.get(e);
  return n !== void 0 && !n.stopped ? n.wake : void 0;
}
function Li(e, n) {
  e.declined.delete(n), ur(e, n);
}
function ur(e, n) {
  let r = e.conns.get(n);
  if (r !== void 0) re(r);
}
function Wi(e) {
  e.declined.clear();
  for (let n of [...e.conns.values()]) rt(n);
  e.conns.clear();
}
function Ii(e, n) {
  for (let r of [...e.conns.values()]) {
    if (R_(r.owner, n)) continue;
    if (rt(r), e.conns.get(r.slug) === r) e.conns.delete(r.slug);
  }
}
function Ilr(e, n) {
  return Bt(e, n) >= 0;
}
function Bt(e, n) {
  return jt(e, n).at(-1) ?? -1;
}
function jt(e, n) {
  let r = n.toLowerCase(),
    i = [];
  for (let d = 0; d < e.length; d++) {
    let s = e[d];
    try {
      let h = !VT(s) ? null : s.type === "user" ? lr(s.message?.content) : s.type === "attachment" && s.attachment.type === "queued_command" ? lr(s.attachment.prompt) : null;
      if (h !== null && Ui(h, r)) i.push(d);
    } catch {}
  }
  return i;
}
var cr = /^https?:\/\//i,
  Oi = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i,
  fr = "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000",
  regExp = new RegExp(`[${fr}]+`),
  Pi = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/,
  pr = "(<[{'\"`*_~",
  regExp_2 = new RegExp(`^[${pr}]+`),
  Fi = /[.,;:!?)\]}'">`*_~\u200b]+$/,
  regExp_3 = new RegExp(`(?<=^|[${fr}])[${pr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`, "g"),
  Ni = "artifact-files";
function Ui(e, n) {
  for (let r of e.matchAll(regExp_3)) if (dr(r[1], n)) return !0;
  return e.split(regExp).some(item => dr(item.replace(regExp_2, ""), n));
}
function dr(e, n) {
  let r = e.replace(Fi, "");
  if (Pi.test(r)) return !1;
  if (cr.test(r) || Oi.test(r)) {
    let d = cr.test(r) ? r : `https://${r}`;
    return xJ(d)?.slug === n;
  }
  let i = r.toLowerCase().split(/[/\\]/);
  if (i.length > 1) return i.some((item, index) => item === n && i[index - 1] === Ni);
  return i[0] === n || bW(r) === n;
}
function lr(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let n = [];
  for (let r of e) if (typeof r === "object" && r !== null && "type" in r && r.type === "text" && "text" in r && typeof r.text === "string") n.push(r.text);
  return n.length > 0 ? n.join(`
`) : null;
}
var Gi = "Could not register a durable wake subscription; publishing and reading still work.",
  $i = {
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
  Hi = new Map(Object.entries($i));
function vAn(e, n) {
  let r = Hi.get(e) ?? Gi;
  if (n === void 0) return r;
  let i = /[.!?]['")\]]*$/.test(n) ? "" : ".";
  return `${r} Server said: "${n}"${i}`;
}
function JJr(e) {
  if (e.status === void 0) return;
  if (e.relayed) return e.fromGateway ? `HTTP ${e.status} via the session gateway, not attributed to the artifact service` : `HTTP ${e.status} from the artifact service via the session gateway`;
  if (e.gatewayDeclined === void 0) return `HTTP ${e.status} from the artifact service`;
  return e.gatewayDeclined === 0 ? `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer` : `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}
var Ki = new Set(["no_originator", "client_policy", "no_auth", "session_not_found", "unavailable_in_deployment", "tool_not_offered", "org_not_enabled", "relay_not_served", "subscribe_forbidden", "relay_unavailable", "session_device_bound", "invalid_slug"]);
function Mlr(e) {
  return Ki.has(e) ? null : b_r;
}
function rrs(e) {
  let {
    armsInFlight: armsInFlight
  } = ee().durable;
  armsInFlight.set(e, (armsInFlight.get(e) ?? 0) + 1);
}
function ors(e, n) {
  let durable = ee().durable,
    i = (durable.armsInFlight.get(e) ?? 1) - 1;
  if (i > 0) durable.armsInFlight.set(e, i);else durable.armsInFlight.delete(e);
  if (n?.outcome === "subscribed" || n?.outcome === "already_watching") return ZJr(e), {
    settled: "registered"
  };
  let reason = n === void 0 ? "arm_threw" : n.reason;
  if (reason === "stop_latched" || durable.stopLatches.isStopped(e)) return {
    settled: "stopped"
  };
  let s = durable.armOutcomes.get(e),
    h = n?.outcome === "failed" && n.latched && s?.reason === reason ? s : void 0,
    detail_2 = (n?.outcome === "failed" ? JJr(n) : void 0) ?? h?.detail,
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
  return S_r(durable.armOutcomes, e, {
    ...S,
    at: Date.now()
  }, y_r), i > 0 ? {
    settled: "pending",
    ...S
  } : {
    settled: "unregistered",
    ...S
  };
}
function QJr(e) {
  let durable_2 = ee().durable;
  for (let [r, i] of durable_2.armOutcomes) if (i.reason === e) durable_2.armOutcomes.delete(r);
  for (let r of durable_2.announcedArmFailures) if (r.endsWith(`:${e}`)) durable_2.announcedArmFailures.delete(r);
}
function ZJr(e) {
  let durable_3 = ee().durable;
  durable_3.armOutcomes.delete(e), w_r(durable_3.announcedArmFailures, e);
}
function hr(e, n) {
  return aJt(ee().durable.announcedArmFailures, `${e}:${n}`, __r);
}
function srs(e) {
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
var Bi = "frame-live.v1",
  queue = {
    enqueuePendingNotification: e => el(e)
  },
  intervalMs = 25000;
function eQr() {
  ee().live.lastArtifactToolCallAt = Date.now();
}
var zi = 90000,
  zt = "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, \u2715 the watch in the tasks list or use the kill-all-agents gesture.",
  Yi = "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";
function Ji(e, slug_9, r) {
  let i = e.supervisors.get(slug_9);
  if (i !== void 0) i.explicit = !1;
  for (let d of Object.values(r.all())) if (q$(d) && d.status === "running" && d.frameLive?.slug === slug_9 && d.frameLive.explicit) r.update(d.id, s => q$(s) && s.frameLive !== void 0 ? {
    ...s,
    description: Yt(Hn({
      slug: slug_9,
      env: Uo()
    }), !1, s.frameLive.armedVia),
    frameLive: {
      ...s.frameLive,
      explicit: !1
    }
  } : s);
}
function Xi(slug_10, n) {
  let live_2 = ee().live,
    storageV5 = live_2.supervisors.get(slug_10)?.context.storageV5 ?? CQr();
  CAn(storageV5);
  let d;
  if (n.taskStop) {
    if (ee().durable.stopLatches.confirmStop(slug_10), !V$(slug_10)) Mot(slug_10, {
      storageV5: storageV5
    }), import("B:/~BUN/root/chunk-mzkweted.js").then(h => h.notifyTakenOverSlugStopped(slug_10));
    let {
      wasWatching: wasWatching
    } = vr({
      slug: slug_10,
      taskRegistry: n.taskRegistry,
      announce: !n.running,
      killRow: h => {
        if (h.id !== n.taskId) Ob(h.id, n.taskRegistry, {
          userStop: !0
        });
      }
    });
    d = wasWatching;
  } else {
    if (!Qi(live_2, slug_10, n)) return !1;
    te(live_2, slug_10), d = !0;
  }
  if (n.modelOrigin !== !0) tdr(slug_10, storageV5);
  return d;
}
function vr(e) {
  let {
      slug: slug_11,
      taskRegistry: taskRegistry
    } = e,
    live_3 = ee().live,
    d = live_3.supervisors.get(slug_11),
    wasWatching_2 = d !== void 0 && !d.stopped || live_3.inFlightSubscribes.has(slug_11);
  if (d?.autoReactWiring !== void 0) Pss(slug_11);
  let h = Object.values(taskRegistry.all()).filter(item => q$(item) && item.status === "running" && item.frameLive?.slug === slug_11);
  if (e.announce && d !== void 0 && !d.stopped && h.length === 0 && (d.taskId !== void 0 || d.timer !== void 0)) ct(live_3, d, "watching this artifact was stopped just now");else te(live_3, slug_11);
  for (let b of h) wasWatching_2 = !0, e.killRow(b);
  if (wasWatching_2 && c_(slug_11)) Rxn(slug_11);
  return _Qr(slug_11), {
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
  if (r) Iin(r), e.supervisors.delete(n);
  OIn(n), sKn(n), Ve(n)?.sourceEnded();
}
function ye(e, n, r) {
  if (r) return {
    ...n,
    humanTurnSnapshot: !0
  };
  if (e === void 0) return n;
  let {
    humanTurnSnapshot: humanTurnSnapshot,
    ...d
  } = n;
  return {
    ...d,
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
    let d = r.armedVia === "mcp_write";
    if (!n.machineArm) {
      if (r.lastActivityAt = Date.now(), r.timer !== void 0) clearTimeout(r.timer), r.timer = void 0;
      if (r.stalledSince = void 0, r.lastStalledAt = void 0, r.stallOutAfterMs = void 0, r.taskId === void 0 && !e.inFlightSubscribes.has(n.slug) && tbe(n.context, n.slug).length === 0) r.watchedSince = Date.now(), r.armedVia = n.armedVia, Zlr(n.slug);else if (n.armedVia === "publish") r.armedVia = "publish";else if (r.armedVia === "mcp_write") r.armedVia = n.armedVia;
      if (d && r.armedVia !== "mcp_write") zV(e, n.slug);
    }
    if (r.explicit = r.explicit || n.explicit, n.autoReactWiring !== void 0) r.autoReactWiring = ye(r.autoReactWiring, n.autoReactWiring, n.humanTurnWiring === !0);
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
      autoReactWiring: ye(void 0, n.autoReactWiring, n.humanTurnWiring === !0)
    })
  };
  return e.supervisors.set(n.slug, i), Zlr(n.slug, i.watchedSince), i;
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
  return !(n.autoReactWiring !== void 0 && lf() && (!Oy(n.slug) || c_(n.slug)));
}
function wr(e, n) {
  return n.slug === e.mostRecentPublishSlug && n.armedVia !== "mcp_write";
}
function kAn(e, n) {
  return e ? "watch" : n === "watch" ? "watch_stopped" : n;
}
function Dlr(e) {
  return wss.find(item => item === e) ?? "publish";
}
function _Yt(e) {
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
  let idle = _Yt(n.armedVia).idle,
    i = n.armedVia === "watch" ? "(your watch request was later stopped; idle auto-armed watches are retired)" : "(idle auto-armed watches are retired)";
  return `it was armed ${idle} and has seen no activity for over ${rn(e.rewatchTiming.idleTtlMs, {
    hideTrailingZeros: !0
  })} ${i}`;
}
function no(e, n, r) {
  return e === TAn || n >= r.stallThresholdMs;
}
function ro(e) {
  let n = WRe(e);
  return n !== null && (zY(n.status) || n.cfMitigated);
}
function io(e) {
  return Math.max(e.stallMaxMs, e.longStallMaxMs) + 2 * qpr + e.handshakeDeadlineMs + 60000;
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
    b = e.supervisors.get(n);
  if (!b || b.stopped) return;
  if (ee().durable.stopLatches.isStopped(n)) {
    if (p("artifact_live_subscribe", "stop_latched"), resumeNeverOpened) he(e, b, "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed", "could not connect", {
      advice: "tell the user, and call resume_replies again only if they still want auto-replies resumed"
    });else ct(e, b);
    return;
  }
  if (eo(e, b)) {
    g("artifact_live_subscribe", {
      idle_retired: !0
    }), he(e, b, to(e, b), "idle", {
      advice: advice,
      passive: !0
    });
    return;
  }
  let w = !1,
    S = !1;
  if (stalled) {
    let y = Date.now();
    if (b.stalledSince === void 0 || b.lastStalledAt === void 0 || b.stallOutAfterMs === void 0 || y - b.lastStalledAt > io(h)) {
      b.stalledSince = y, b.stallOutAfterMs = h.maxStallMs + Math.round(Math.random() * h.stallOutJitterMs);
      let http_status_2 = r.httpStatus ?? WRe(r.closeCode)?.status;
      p("artifact_live_subscribe", "stall_run_started", {
        boot: r.closeCode === void 0,
        ...(http_status_2 !== void 0 && {
          http_status: http_status_2
        })
      });
    } else S = !0;
    b.lastStalledAt = y, w = y - b.stalledSince >= b.stallOutAfterMs;
  } else if (b.stalledSince = void 0, b.lastStalledAt = void 0, b.stallOutAfterMs = void 0, uptimeMs_2 >= h.minUptimeMs) b.consecutiveFailures = 0;else if (r.reuseRefused !== !0) b.consecutiveFailures++;
  if (b.consecutiveFailures > h.maxConsecutiveFailures || w) {
    if (w) p("artifact_live_subscribe", "rewatch_gave_up", {
      stalled: !0
    });else p("artifact_live_subscribe", "rewatch_gave_up");
    he(e, b, "the live connection kept failing and reconnecting has stopped", Vr, {
      advice: advice_2,
      passive: !0
    });
    return;
  }
  let leaseMode = yue(),
    longStall = stalled && S && (WRe(r.closeCode)?.cfMitigated === !0 || !leaseMode || b.lease === void 0 || !H7r(b.lease, h, ee().accountEpoch, Date.now() + h.stallMinMs)),
    spread = uptimeMs_2 > 0 && uptimeMs_2 >= h.minUptimeMs && r.closeCode !== void 0 && !(r.expired === !0 && b.transport !== "sync"),
    L = bss({
      timing: h,
      consecutiveFailures: b.consecutiveFailures,
      leaseMode: leaseMode,
      stalled: stalled,
      longStall: longStall,
      spread: spread
    });
  if (leaseMode && spread && r.expired !== !0) b.spreadReconnect = !0;
  if (b.timer !== void 0) clearTimeout(b.timer);
  b.timer = setTimeout(Ar, L, e, n), b.timer.unref?.(), b.nextRewatchAt = Date.now() + L;
}
function he(e, n, r, i, {
  advice: advice_3 = "watch it again if you still need that",
  passive = !1
} = {}) {
  if (e.supervisors.get(n.slug) === n) {
    if (te(e, n.slug), !ee().durable.stopLatches.isStopped(n.slug)) {
      if (Mr(e, n.slug, "ended", i), n.autoReactWiring !== void 0) import("B:/~BUN/root/chunk-mzkweted.js").then(w => w.handBackTakenOverSlug(n.slug));
    }
  } else Iin(n);
  let resumeAnnounce = n.resumeAnnounce;
  if (resumeAnnounce !== void 0) n.resumeAnnounce = void 0, resumeAnnounce.onGiveUp();
  if (n.armedVia === "mcp_write") return;
  let displayName = zNe(() => n.autoReactWiring?.title, n.url);
  el({
    value: li({
      taskType: X2,
      summary: Ut(Xgs(displayName, i)),
      body: `
<event>${Ut(`Watch on ${n.url} ended \u2014 ${r}. This session no longer keeps track of new versions of it; ${advice_3}.`)}</event>`
    }),
    mode: "task-notification",
    ...(passive && {
      passive: !0
    }),
    priority: "next",
    origin: {
      kind: "task-notification",
      source: X2,
      slug: n.slug,
      displayName: displayName,
      watchEnded: !0
    },
    agentId: Ze()
  });
}
function ct(e, n, r = "watching this artifact was stopped earlier in this session") {
  n.resumeAnnounce = void 0, he(e, n, r, "stopped", {
    advice: "do not watch it again unless the user asks you to"
  });
}
function X(e, n, r, reason_2, d, {
  unavailable = !1,
  httpStatus: httpStatus
} = {}) {
  return Qt(e, n, r, {
    unavailable: unavailable,
    httpStatus: httpStatus
  }), To(e, n, r, reason_2, d), {
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
    p("artifact_live_subscribe", "stop_latched"), ct(e, r);
    return;
  }
  if (r.autoReactWiring !== void 0 && Oy(n) && !c_(n)) delete r.autoReactWiring;
  g("artifact_live_subscribe", {
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
  });else p("artifact_live_subscribe", `rewatch_stopped_${i.reason}`), he(e, r, jNe(i.reason) ?? i.reason, tn[i.reason] ?? Ur, Oo(i.reason));
}
async function oo(e, slug_12) {
  let r = e.supervisors.get(slug_12),
    i = r?.lease;
  if (!yue() || r === void 0 || r.stopped || i === void 0 || i.probed) return;
  i.probed = !0;
  let d;
  try {
    d = await NIn({
      slug: slug_12,
      env: Uo()
    }, r.abort.signal, {
      agentPeer: ut(slug_12),
      syncLive: ut(slug_12),
      watchBoot: !0,
      credentials: r.context.credentials
    });
  } catch {
    return;
  }
  if (e.supervisors.get(slug_12) !== r || r.stopped) return;
  let s = d.err === null ? d.assetToken === void 0 ? "public_outside_org" : void 0 : d.status === 404 ? "not_found" : Mz(d) ? "other_org" : void 0;
  if (s !== void 0) {
    p("artifact_live_subscribe", `read_stopped_${s}`), he(e, r, jNe(s) ?? s, tn[s] ?? s, {
      advice: WNe(s)
    });
    for (let w of Object.values(r.context.taskRegistry.all())) if (q$(w) && w.status === "running" && w.frameLive?.slug === slug_12) Ob(w.id, r.context.taskRegistry, {
      quiet: !0
    });
    return;
  }
  if (d.err === null && Vpr(d.data) !== void 0) {
    g("artifact_live_subscribe", {
      read_refused_boot_ok: !0
    });
    return;
  }
  let h = d.err === null ? "tokenless" : d.status ?? d.errorCode;
  if (p("artifact_live_subscribe", `read_refused_boot_${h}`), (h === "tokenless" || typeof h === "number" && h < 500 && h !== 408 && h !== 429) && r.lease === i) delete r.lease, delete r.renewable;
}
function Rr(e) {
  return Glr(new URL(`/edge-api/frame-live/${e}/ws`, GGs()));
}
var so = 8;
function ao(e) {
  let {
      slug: slug_13,
      url: url_3,
      ownPublishes: ownPublishes,
      getKnownVer: getKnownVer,
      autoReact: autoReact,
      onSurfaced: onSurfaced
    } = e,
    b = e.surfacedVers ?? [];
  function w(y) {
    if (b.push(y), b.length > so) b.shift();
  }
  if (e.seedSurfacedVer !== void 0 && !b.includes(e.seedSurfacedVer)) w(e.seedSurfacedVer);
  let S = ube(dbe, cbe),
    R = !1,
    x = !1;
  function comment() {
    if (yr(slug_13), drs(slug_13), autoReact && lf()) Gce({
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
  function ver(y, T) {
    if (!y || !TE.test(y)) return;
    if (e.presenceOnly?.()) return;
    if (eoo(slug_13, y), b.includes(y)) return;
    let P = T === "sync" && {
      via_sync: !0
    };
    if (W5t(ownPublishes, slug_13, y)) {
      g("artifact_live_subscribe", {
        ...(R ? {
          suppressed_own: !0
        } : {
          suppressed_catch_up: !0
        }),
        ...P
      }), R = !0;
      return;
    }
    if (y === getKnownVer()) return;
    if (N4e(ownPublishes, slug_13)) {
      g("artifact_live_subscribe", {
        suppressed_in_flight: !0,
        ...P
      });
      return;
    }
    if (!S.tryConsume()) {
      if (!x) x = !0, p("artifact_live_subscribe", "ver_rate_suppressed", {
        ...P
      });
      return;
    }
    x = !1, w(y);
    try {
      onSurfaced?.(y);
    } catch {}
    g("artifact_live_subscribe", {
      surfaced: !0,
      passive: URt === "passive",
      ...P
    });
  }
  return {
    comment: comment,
    ver: ver
  };
}
function uo(e) {
  return n => {
    if (!n.startsWith("{")) return null;
    let r;
    try {
      r = jo(n);
    } catch {
      return null;
    }
    if (r.kind === "comment") return e.comment(), null;
    if (r.kind === "summon") return null;
    if (typeof r.ver === "string") e.ver(r.ver, "live");
    return null;
  };
}
var co = /^\d{1,15}$/;
function Ve(e) {
  return ee().liveDocWatch.headSinks.get(e);
}
function yr(e) {
  let live_4 = ee().live,
    r = live_4.supervisors.get(e);
  if (r !== void 0 && !r.stopped && r.armedVia !== "mcp_write" && !live_4.inFlightSubscribes.has(e)) r.lastActivityAt = Date.now();
}
function lo(e, n, r) {
  return i => {
    if (i.charCodeAt(0) !== 123) return null;
    let d;
    try {
      d = jo(i);
    } catch {
      return null;
    }
    let s = nt().safeParse(d);
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
          let S = Gt().safeParse(payload_2);
          if (!S.success) return null;
          if (S.data.tag === $t || S.data.tag === Ht) e.ver(S.data.ver, "sync");else if (S.data.tag === nr && co.test(S.data.ver)) yr(n), Ve(n)?.seq(Number(S.data.ver));
          return null;
        }
      case "ctrl:token_refresh":
        {
          let S = Ft().safeParse(payload_2);
          if (S.success && ve(S.data.cap)) r.onTokenRefresh(S.data.cap, S.data.exp);
          return null;
        }
      case "ctrl:token_refresh_declined":
        {
          let S = De().safeParse(payload_2);
          if (S.success && S.data.reason === Dt) r.onExpiryAnnounced();
          return null;
        }
      case "ctrl:comment_hint":
        {
          let S = rr().safeParse(payload_2);
          if (S.success) r.onCommentHint(S.data.commentsEmpty, S.data.readAtMs);
          return null;
        }
      default:
        return null;
    }
  };
}
function kr(e, n, r, i, d, s) {
  if (!s(e, r)) return "dead";
  return i && (Oy(n) ? d && (e.autoReactArmed !== !0 || !c_(n) || JRe(n)) : e.autoReactArmed !== !0) ? "replace" : "keep";
}
function fo(e, n) {
  return rCt(e.id) && Xot(e, n);
}
function po(e, n, r, i) {
  let d = Date.now(),
    s = null;
  for (let h of Object.values(e.taskRegistry.all())) {
    if (!q$(h) || h.status !== "running" || h.frameLive?.slug !== n) continue;
    let b = kr(h, n, d, r, i, Xot);
    if (b !== "dead") {
      if (b === "replace") {
        Ob(h.id, e.taskRegistry, {
          quiet: !0
        });
        continue;
      }
      s = h.id;
      continue;
    }
    Ob(h.id, e.taskRegistry, {
      quiet: !0,
      connectionLost: !0
    });
  }
  return s;
}
function Er(e, n) {
  return Object.values(e.all()).some(item => q$(item) && item.status === "running" && item.frameLive?.slug === n);
}
function mo(e) {
  return Gdr(e, lf, {
    includeStopLatched: !0
  });
}
function bYt(e) {
  return Gdr(e, lf);
}
function ebe(e, n) {
  CAn(n?.storageV5), Kce(), eCt();
  let live_5 = ee().live,
    i = n?.durable !== !1,
    d = 0,
    s = new Set();
  for (let h of Object.values(e.all())) if (mo(h)) {
    let b = h.autoReactSlug !== void 0 && Oy(h.autoReactSlug) && (!c_(h.autoReactSlug) || V$(h.autoReactSlug));
    if (i) {
      if (Ob(h.id, e, {
        quiet: !0,
        userStop: !0
      }), h.autoReactSlug !== void 0) OYt(h.autoReactSlug), s.add(h.autoReactSlug);
    } else if (h.autoReactSlug !== void 0) s.add(h.autoReactSlug);
    if (!b && !(h.autoReactSlug !== void 0 && !i && Oy(h.autoReactSlug))) {
      if (d++, !i && h.autoReactSlug !== void 0) Yot(h.autoReactSlug), zV(live_5, h.autoReactSlug);
    }
  }
  for (let h of live_5.supervisors.values()) {
    if (h.autoReactWiring === void 0) continue;
    if (i) delete h.autoReactWiring;
    if (i && lf() && (!Oy(h.slug) || s.has(h.slug))) if (Er(e, h.slug) || live_5.inFlightSubscribes.has(h.slug)) Ji(live_5, h.slug, e);else te(live_5, h.slug), tdr(h.slug, h.context.storageV5);
    if (!s.has(h.slug) && lf() && !Oy(h.slug)) if (s.add(h.slug), d++, i) OYt(h.slug), kxn(h.slug);else Yot(h.slug);
  }
  if (i) DAn({
    storageV5: n?.storageV5
  });else if (d > 0) nbe({
    flush: !0,
    storageV5: n?.storageV5
  });
  return d;
}
function Zt(e, n, r, i) {
  if (!c_(n) || JRe(n) || !lf()) return null;
  let d = Tr(e, n);
  if (d === void 0) return null;
  i?.();
  let {
    live: live_6,
    wakes: wakes
  } = ee();
  Exn(n), wakes.liftedAtScanGeneration.set(n, wakes.scanGeneration), zV(live_6, n);
  let lastWakeArgs = abe(n).lastWakeArgs;
  if (!rCt(d.id) || lastWakeArgs === null) return "cleared";
  return r?.(lastWakeArgs), Gce({
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
  return Object.values(e.all()).find(item => q$(item) && item.status === "running" && item.autoReactArmed === !0 && item.autoReactSlug === n && Xot(item));
}
function ho(e, n) {
  if (n.ownWords) {
    let notice_latch_released = Oss(i => Rrs(i) || go(e, Kxo(i)));
    if (notice_latch_released > 0) g("artifact_live_subscribe", {
      notice_latch_released: notice_latch_released
    });
  }
  return _o(e);
}
function go(e, n) {
  if (n === void 0) return !1;
  return Object.values(e.all()).some(item => item.startTime >= n && bo(item));
}
function bo(e) {
  let n = e.status === "running" || e.status === "pending";
  if (e.type === "local_bash" || Edt(e)) return n;
  if (!V6e.has(e.type) || e.type === "in_process_teammate") return !1;
  let r = e.status === "completed" && "keepaliveReasons" in e && e.keepaliveReasons instanceof Set && [...e.keepaliveReasons].some(item => item !== "flag:idle-window"),
    i = "resuming" in e && e.resuming === !0;
  return n || r || i;
}
function _o(e) {
  let {
    wakes: wakes_2
  } = ee();
  wakes_2.humanTurnAtScanGeneration = wakes_2.scanGeneration;
  let unpaused_on_turn = 0;
  for (let i of [...wakes_2.sweptSlugs]) if (Zt(e, i) !== null) unpaused_on_turn++;
  if (unpaused_on_turn > 0) g("artifact_live_subscribe", {
    unpaused_on_turn: unpaused_on_turn
  });
  return unpaused_on_turn;
}
function SYt() {
  return lf() && PQr();
}
function tbe(e, n) {
  let r = [],
    i,
    d = () => i ??= lf(),
    s = ee(),
    userDisarmed = s.autoReact.userDisarmed;
  for (let b of Object.values(e.taskRegistry.all())) {
    if (!q$(b) || b.status !== "running" || b.frameLive === void 0 || n !== void 0 && b.frameLive.slug !== n) continue;
    let w = s.live.supervisors.get(b.frameLive.slug);
    r.push({
      slug: b.frameLive.slug,
      taskId: b.id,
      since: b.frameLive.watchedSince,
      explicit: w?.explicit ?? b.frameLive.explicit,
      connected: Xot(b),
      tokenExpiresAt: w?.lease?.expMs ?? b.frameLive.armedAt + (w?.transport === "sync" ? Txn : $dr),
      armedVia: w?.armedVia ?? b.frameLive.armedVia,
      autoReply: b.autoReactArmed !== !0 ? Kh(b.frameLive.slug) ? userDisarmed ? "disarmed" : d() ? "stopped" : "none" : "none" : userDisarmed ? "disarmed" : !d() ? "none" : b.autoReactSlug !== void 0 && Kh(b.autoReactSlug) ? c_(b.autoReactSlug) ? V$(b.autoReactSlug) ? "yielded" : "paused" : "stopped" : So(b.frameLive.slug)
    });
  }
  return r.sort((itemA, itemB) => itemA.since - itemB.since);
}
function So(e) {
  let n = ee().autoReact.artifacts.get(e),
    r = n?.lastProbeDeniedBy ?? null;
  if (r !== null) return r === "denied_by_auto_mode" ? "declined" : "denied";
  return n?.lastReplyDeclinedByAutoMode === !0 ? "declined" : "armed";
}
function Llr(e, n) {
  let {
      live: live_7,
      autoReact: autoReact_2,
      wakes: wakes_3
    } = ee(),
    s = [],
    h,
    b = () => h ??= lf();
  for (let slug_14 of wakes_3.stoppedSlugs) {
    if (n !== void 0 && slug_14 !== n) continue;
    if (Er(e.taskRegistry, slug_14) || live_7.inFlightSubscribes.has(slug_14) || !autoReact_2.userDisarmed && !b()) continue;
    let S = live_7.supervisors.get(slug_14),
      R = S !== void 0 && !S.stopped ? S : void 0;
    s.push({
      slug: slug_14,
      ...(R !== void 0 && {
        since: R.watchedSince,
        explicit: R.explicit,
        armedVia: R.armedVia
      }),
      stopKind: c_(slug_14) ? V$(slug_14) ? "yielded" : "interrupt" : "user",
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
    d = [];
  for (let row of tbe(n)) {
    let h = supervisors.get(row.slug),
      b = Lr(e, row, n);
    if (b === "explicit" || b === "most_recent_publish") continue;
    if (b === "auto_reply") {
      if (!forPublish || Ers(row.slug)) continue;
      d.push({
        row: row,
        tier: 3
      });
      continue;
    }
    d.push({
      row: row,
      tier: h === void 0 || h.stopped ? 0 : h.armedVia === "mcp_write" ? 1 : 2
    });
  }
  return d.sort((itemA, itemB) => {
    if (itemA.tier !== itemB.tier) return itemA.tier - itemB.tier;
    let b = supervisors.get(itemA.row.slug),
      w = supervisors.get(itemB.row.slug),
      S = b && !b.stopped ? b.lastActivityAt : 0,
      R = w && !w.stopped ? w.lastActivityAt : 0;
    return S - R || itemA.row.since - itemB.row.since;
  }).map(item => item.row);
}
function Cr(e, n, r, i) {
  let d = e.supervisors.get(n.slug),
    s = Lr(e, n, r) === "auto_reply";
  if (Ob(n.taskId, r.taskRegistry, {
    quiet: !0
  }), s && !V$(n.slug)) yKe(n.slug, {
    storageV5: d?.context.storageV5 ?? CQr()
  });
  if (d !== void 0 && !d.stopped) he(e, d, i?.why ?? `this session reached its limit of ${Wk} artifact watches and made room to watch a newer one${s ? "; it was auto-replying to comments, and that stops until its next publish" : ""}`, i?.shortReason ?? "made room for a newer watch", i !== void 0 ? {
    advice: advice_2,
    passive: !0
  } : s ? {
    advice: "do not watch it again unless the user asks"
  } : void 0);else te(e, n.slug);
  g("artifact_live_subscribe", {
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
  return r.autoReactWiring !== void 0 && lf() && (!Oy(n) || c_(n)) ? "auto_reply" : null;
}
function _r(e, n) {
  return xr(e, n) !== null;
}
function Lr(e, n, r) {
  let i = e.supervisors.get(n.slug);
  if (i !== void 0 && !i.stopped) return xr(e, n.slug);
  let d = r.taskRegistry.all()[n.taskId];
  return n.explicit ? "explicit" : bYt(d) ? "auto_reply" : null;
}
function vo(e, n) {
  let r = st(e, n);
  if (r.length === 0) return !1;
  return Cr(e, r[0], n, {
    why: `this session reached its limit of ${Wk} artifact watches and made room for a protected watch to reconnect`,
    shortReason: shortReason
  }), !0;
}
function tQr() {
  let live_8 = ee().live;
  live_8.handoffGeneration += 1, live_8.bootingWiredArms.clear(), $Ge(MYt(v$())), nbe({
    flush: !0
  }), ars(), Kce(), eCt();
  for (let n of [...live_8.supervisors.keys()]) te(live_8, n);
  live_8.armOutcomes.clear(), live_8.announcedArmFailures.clear(), Mss();
}
function wo(e) {
  let live_9 = ee().live;
  live_9.handoffGeneration += 1, Kce(), eCt();
  let r = 0;
  for (let s of [...live_9.supervisors.values()]) {
    if (!s.stopped) r++;
    if (s.autoReactWiring !== void 0) {
      let {
        slug: slug_15
      } = s;
      import("B:/~BUN/root/chunk-mzkweted.js").then(b => b.handBackTakenOverSlug(slug_15));
    }
    delete s.autoReactWiring, te(live_9, s.slug);
    for (let h of Object.values(s.context.taskRegistry.all())) {
      if (!q$(h) || h.status !== "running" || h.frameLive?.slug !== s.slug) continue;
      Ob(h.id, s.context.taskRegistry, {
        quiet: !0
      });
    }
  }
  if (live_9.armOutcomes.clear(), live_9.announcedArmFailures.clear(), r === 0) return r;
  let i = `${r} artifact ${r === 1 ? "watch" : "watches"}`,
    d = e === "signed_out" ? "Those watches were opened as the account that signed out: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks." : "Those watches were opened as the previous account: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
  return el({
    value: li({
      taskType: X2,
      summary: Ut(`Stopped watching ${i} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`),
      body: `
<event>${Ut(d)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: {
      kind: "task-notification",
      source: X2
    },
    agentId: Ze()
  }), r;
}
function nQr(e, n, r) {
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
  return g("artifact_live_subscribe", {
    unwatched: i
  }), {
    wasWatching: i
  };
}
function rQr(e, n) {
  tdr(e, n.storageV5);
  let {
    wasWatching: wasWatching_3
  } = Wr(e, n);
  if (wasWatching_3) g("artifact_live_subscribe", {
    unwatched: !0,
    artifact_deleted: !0
  });
}
function Wr(slug_16, n) {
  let live_10 = ee().live;
  CAn(n.storageV5), live_10.armOutcomes.delete(slug_16), Jt(live_10, slug_16), urs(slug_16);
  let i = live_10.supervisors.get(slug_16)?.autoReactWiring !== void 0,
    {
      wasWatching: wasWatching_4
    } = vr({
      slug: slug_16,
      taskRegistry: n.taskRegistry,
      announce: !1,
      killRow: s => {
        let h = s.autoReactArmed === !0;
        if (Ob(s.id, n.taskRegistry, h ? {
          quiet: !0,
          userStop: !0,
          modelOrigin: !0
        } : {
          quiet: !0
        }), h && s.autoReactSlug !== void 0) OYt(s.autoReactSlug);
      }
    });
  if (i) OYt(slug_16);
  return {
    wasWatching: wasWatching_4
  };
}
async function oQr(e) {
  let {
    slug: slug_17,
    url: url_4,
    publishContext: publishContext,
    getKnownVer: getKnownVer_2,
    context: context_2,
    tool: tool,
    commentVerbsInSchema: commentVerbsInSchema
  } = e;
  if (!HY(publishContext)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  let live_11 = ee().live,
    S = tool !== void 0 && commentVerbsInSchema === !0 && lf(),
    degraded = !S ? void 0 : !mWe(context_2.messages) ? "unattended_turn" : !Ilr(context_2.messages, slug_17) || !MD(context_2.messages) ? "not_named_by_user" : live_11.repliesConsent.declined.has(slug_17) ? "declined" : live_11.nonEditorSlugs.has(slug_17) ? "not_editor" : e.repliesApproved !== !0 ? "not_approved" : void 0,
    x = Ir({
      tool: S && degraded === void 0 ? tool : void 0,
      commentVerbsInSchema: commentVerbsInSchema,
      context: context_2
    }),
    pickUpRecentSummons = x.autoReactWiring !== void 0,
    title = live_11.supervisors.get(slug_17)?.autoReactWiring?.title,
    y = await pe(live_11, {
      slug: slug_17,
      url: url_4,
      getKnownVer: getKnownVer_2,
      ownPublishes: context_2.artifactRegistries.ownPublishes,
      ...ke(context_2),
      ...x,
      pickUpRecentSummons: pickUpRecentSummons,
      ...(x.autoReactWiring !== void 0 && {
        autoReactWiring: {
          ...x.autoReactWiring,
          title: title
        },
        editorGatedWiring: !0
      })
    });
  if (pickUpRecentSummons && y.outcome === "armed" && y.degraded === void 0 && !(Oy(slug_17) && !c_(slug_17)) && Ne()) FAn(slug_17, {
    title: live_11.supervisors.get(slug_17)?.autoReactWiring?.title ?? title,
    storageV5: context_2.storageV5
  });
  if (degraded !== void 0 && y.outcome === "armed") return {
    ...y,
    degraded: degraded
  };
  if (degraded !== void 0 && y.outcome === "already_watching") return {
    ...y,
    degraded: degraded
  };
  return y;
}
function sQr(e) {
  return ee().live.nonEditorSlugs.has(e);
}
function iQr(e, n, r, i) {
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
    b = Ao(i, n);
  if (h !== void 0 && b !== null && !h.namingMessages.has(b)) repliesConsent_2.declined.delete(n);
  return {
    declined: repliesConsent_2.declined.has(n),
    approved: repliesConsent_2.approved.has(n)
  };
}
function Ao(e, n) {
  let r = Bt(e, n);
  return r >= 0 ? e[r]?.uuid ?? null : null;
}
function Nlr(e, n, toolUseId, i, d = !1) {
  if (e === void 0) return;
  ee().live.repliesConsent.outstanding.set(n, {
    toolUseId: toolUseId,
    ...(d && {
      allowed: !0
    }),
    namingMessages: new Set(jt(i, n).flatMap(item => i[item]?.uuid !== void 0 ? [i[item].uuid] : []))
  });
}
function aQr(e, n) {
  if (e === void 0 || n === void 0) return;
  let {
    outstanding: outstanding
  } = ee().live.repliesConsent;
  for (let [slug_18, d] of outstanding) if (d.toolUseId === n) return outstanding.delete(slug_18), {
    slug: slug_18
  };
  return;
}
function lQr(e, n, r, i) {
  let repliesConsent_3 = ee().live.repliesConsent;
  if (e === void 0) return !1;
  let s = n?.slug === r;
  if (s && i) repliesConsent_3.approved.add(r), repliesConsent_3.declined.delete(r);
  return s || repliesConsent_3.approved.has(r);
}
function wYt(e) {
  return ee().live.repliesConsent.declined.has(e);
}
function dQr(e) {
  let {
      declined: declined,
      outstanding: outstanding_2
    } = ee().live.repliesConsent,
    i = outstanding_2.get(e);
  return declined.has(e) || i !== void 0 && i.allowed !== !0;
}
function Ro(e, n) {
  let r = e.mcpWriteSlugs.get(n);
  if (r === void 0) r = {
    arming: !1
  }, e.mcpWriteSlugs.set(n, r);
  return r;
}
var yo = new Set(["not_found", "no_subscription_token", "publish_context", "invalid_slug", "remote"]),
  ko = 5000;
function Sr(e, n) {
  sfr(e, n), setTimeout((r, i) => ifr(r, i), ko, e, n).unref?.();
}
async function Vni(slug_19, n, getKnownVer_3) {
  try {
    if (!ar.test(slug_19)) return;
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
    let b = Ro(live_12, slug_19);
    if (live_12.inFlightSubscribes.has(slug_19)) {
      if (b.arming) Sr(ownPublishes_2, slug_19);
      return;
    }
    let {
      publishContext: publishContext_2
    } = _ue({
      agentId: n.agentId,
      agentType: n.agentContext?.agentType,
      isNonInteractiveSession: n.options.isNonInteractiveSession
    });
    if (!HY(publishContext_2)) return;
    if (b.declinedEpoch === i.accountEpoch) return;
    let accountEpoch = i.accountEpoch;
    b.arming = !0, await pe(live_12, {
      slug: slug_19,
      url: Hn({
        slug: slug_19,
        env: Uo()
      }),
      getKnownVer: getKnownVer_3,
      ownPublishes: ownPublishes_2,
      ...ke(n),
      seedKnownVerFromBoot: !0,
      mcpWrite: !0
    }).then(R => {
      if (b.arming = !1, R.outcome === "skipped" && yo.has(R.reason)) b.declinedEpoch = accountEpoch;
    }, R => {
      b.arming = !1, l(R);
    });
  } catch (error) {
    l(error);
  }
}
async function cQr(e) {
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
  if (!HY(publishContext_3)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  if (!e.commentVerbsInSchema) return {
    outcome: "skipped",
    reason: "comments_off"
  };
  if (!Oy(slug_20)) return {
    outcome: "skipped",
    reason: "not_stopped"
  };
  if (!lf()) return {
    outcome: "skipped",
    reason: "not_enabled"
  };
  let live_13 = ee().live;
  if (context_3.abortController.signal.aborted) return {
    outcome: "skipped",
    reason: "cancelled"
  };
  let taskId_3 = Tr(context_3.taskRegistry, slug_20)?.id,
    w = Zt(context_3.taskRegistry, slug_20, S => {
      TO(slug_20), S.notify({
        summary: kyr(zNe(S.getTitle, url_5)),
        detail: `Auto-replies on artifact ${url_5} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop). ${zt}`
      });
    }, () => {
      let S = live_13.supervisors.get(slug_20);
      if (S !== void 0 && !S.stopped) S.autoReactWiring = ye(S.autoReactWiring, {
        tool: e.tool,
        commentVerbsInSchema: e.commentVerbsInSchema,
        context: context_3,
        title: S.autoReactWiring?.title
      }, !0);
    });
  if (w !== null && taskId_3 !== void 0) {
    if (g("artifact_live_subscribe", {
      resumed_in_place: !0
    }), w === "cleared") ee().wakes.pendingResumeDisclosure.add(slug_20);
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
function Flr(e, n) {
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
function Hlr(e) {
  let n = ee().live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0;
}
async function uQr(e) {
  let {
    slug: slug_21,
    url: url_6,
    getKnownVer: getKnownVer_5,
    tool: tool_2,
    commentVerbsInSchema: commentVerbsInSchema_2,
    context: context_4
  } = e;
  if (tool_2 !== void 0 && Qd()) TQr().catch(() => {
    return;
  });
  let b = ee(),
    w = await pe(b.live, {
      slug: slug_21,
      url: url_6,
      getKnownVer: getKnownVer_5,
      ownPublishes: context_4.artifactRegistries.ownPublishes,
      ...ke(context_4),
      ...Ir({
        tool: tool_2,
        commentVerbsInSchema: commentVerbsInSchema_2,
        context: context_4
      })
    });
  if (tool_2 !== void 0 && commentVerbsInSchema_2 === !0 && w.outcome !== "skipped" && Ne()) FAn(slug_21, {
    title: b.live.supervisors.get(slug_21)?.autoReactWiring?.title,
    storageV5: context_4.storageV5
  });
  return w;
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
async function BNe(e) {
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
  if (tool_4 !== void 0 && Qd()) TQr().catch(() => {
    return;
  });
  let ownPublishes_3 = context_6.artifactRegistries.ownPublishes,
    live_15 = ee().live;
  if (version !== void 0) {
    XRt(ownPublishes_3, slug_22, version, {
      merged: !gue(ownPublishes_3, slug_22, version)
    });
    let T = live_15.supervisors.get(slug_22);
    if (T !== void 0 && !T.stopped) T.lastActivityAt = Date.now();
    if (HY(publishContext_4)) live_15.mostRecentPublishSlug = slug_22;
  }
  if (!HY(publishContext_4)) return p("artifact_live_subscribe", "publish_context", {
    publish_context: c(publishContext_4)
  }), {
    outcome: "skipped",
    reason: "publish_context"
  };
  let G = tool_4 !== void 0 && commentVerbsInSchema_4 === !0,
    L = e.carriedPublishConsent !== !0 && e.resumedPublishConsent !== !0 && e.chainPublish !== !0 && e.adoptedPublish !== !0 && mWe(context_6.messages),
    y = await pe(live_15, {
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
  if ((version !== void 0 || e.adoptedPublish === !0) && y.outcome !== "skipped") {
    let {
        autoReact: autoReact_3,
        wakes: wakes_4
      } = ee(),
      ie = !G ? "bare_watch_comments_off" : autoReact_3.userDisarmed ? "bare_watch_session_disarmed" : !PYt() ? "bare_watch_autoreact_off" : Oy(slug_22) && !L && !(c_(slug_22) && !JRe(slug_22) && wakes_4.humanTurnAtScanGeneration === wakes_4.scanGeneration) ? "bare_watch_slug_stopped" : void 0;
    if (ie !== void 0) p("artifact_live_subscribe", ie, {
      publish_context: c(publishContext_4)
    });
  }
  if (G && y.outcome !== "skipped" && !(y.outcome === "already_watching" && (e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0)) && !(y.outcome === "armed" && y.degraded !== void 0) && Ne()) FAn(slug_22, {
    title: live_15.supervisors.get(slug_22)?.autoReactWiring?.title ?? title_2,
    storageV5: context_6.storageV5
  });
  return y;
}
function Ne() {
  return !ee().autoReact.userDisarmed && PYt();
}
function Yt(e, n, r) {
  return `live updates for artifact ${e} (${_Yt(kAn(n, r)).task})`;
}
function ke(e) {
  return {
    context: FTt(e),
    signal: e.abortController.signal
  };
}
function vYt(e, n) {
  return () => X7(e(), n);
}
function Or(e) {
  if (!hue()) return {
    reason: "flag_off"
  };
  if (a.CLAUDE_CODE_REMOTE) return {
    reason: "remote"
  };
  return Eo(Rr(e));
}
function ut(e) {
  return hue() && ot(e) === null && !p$s(e);
}
function Eo(e) {
  if (VGs()) return {
    reason: "cp_override"
  };
  let n = TYt(e);
  if (n !== null) return {
    reason: "egress_denied",
    egressKind: n.kind
  };
  return null;
}
function pQr(e) {
  let {
      context: context_7,
      slug: slug_23,
      wantWiring: wantWiring,
      canClearLatch: canClearLatch
    } = e,
    s = Date.now();
  for (let h of Object.values(context_7.taskRegistry.all())) if (q$(h) && h.status === "running" && h.frameLive?.slug === slug_23 && kr(h, slug_23, s, wantWiring, canClearLatch, fo) === "keep") return !0;
  return !1;
}
function $lr(e) {
  if (ee().durable.stopLatches.isStopped(e.slug)) return "stop_latched";
  if (!HY(e.publishContext)) return "publish_context";
  return Or(e.slug)?.reason ?? null;
}
var NTt = "auto-replies armed",
  Ulr = "auto-replies paused by the user's interrupt (Ctrl+C or Stop) \u2014 the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)",
  Blr = "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) \u2014 that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks \u2014 the user asking is not itself the take-back); no comment notifications arrive here meanwhile",
  jlr = "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread",
  Wlr = "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";
function qt() {
  return rw() ? `; a comment on it sent to Claude reaches this session while this artifact's status row says ${NTt}, and plain comments never notify \u2014 read them with ${dd('action "comments"', () => `the ${tq("comments")}`)} when asked` : "";
}
function jNe(e) {
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
      return A4e;
    case "public_outside_org":
      return v5t;
    case "not_editor":
      return "a restored publish decision does not carry for an artifact this account cannot publish to";
    case "no_subscription_token":
      return "the control plane minted no live-channel credential for this artifact";
    case "boot_failed":
      return "the artifact could not be read right now (network or auth); try again later";
    case "watch_cap":
      return `this session already holds its maximum of ${Wk} artifact watches and none could make room (each is a watch you requested, the artifact you most recently published, or one auto-replying to comments: a new publish can displace an idle one, a watch request cannot; or watch slots are still connecting); unwatch one first`;
    case "watch_cap_reconnect":
      return `this session was already holding its maximum of ${Wk} artifact watches when this one tried to reconnect, and none of the other watches could make room`;
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
function kYt(e) {
  switch (e) {
    case "arming":
      return `Live subscription: arming in the background \u2014 not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;
    case "connected":
      return `Live subscription: already connected from earlier in this session \u2014 this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;
    case "publish_adopted":
      return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally \u2014 that session then keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;
    case "publish_context":
      return "Live subscription: none \u2014 this is a print (-p), cloud, subagent, or teammate session, which does not keep track of new versions of this artifact published elsewhere (only the main conversation of a local interactive, background, or TypeScript/Python Agent SDK session does). Expected; not an error.";
    case "remote_unsupported":
      {
        let n = rw();
        return `Live subscription: not supported yet from remote sessions \u2014 nothing notifies this session of new versions${n ? " or of comments sent to Claude" : ""}; re-read the artifact${n ? " (and its comments)" : ""} when the user asks.`;
      }
    default:
      {
        let n = jNe(e);
        return n !== null ? `Live subscription: skipped \u2014 ${n}.` : `Live subscription: skipped (${YT(e, 64)}).`;
      }
  }
}
var fQr = "Live subscription: none in this kind of session (see the earlier publish result); not an error.";
async function zlr(e) {
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
  HTt();
  let x = e.supervisors.get(slug_25)?.carriedVer;
  e.endAll ??= wo;
  let G = n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema,
    armedVia = n.userResumeWiring === !0 ? "resume" : explicit ? "watch" : n.sessionResume === !0 ? "session_resume" : n.mcpWrite === !0 ? "mcp_write" : seedKnownVerFromBoot ? "attach" : "publish";
  if (!ar.test(slug_25)) return {
    outcome: "skipped",
    reason: "invalid_slug"
  };
  e.armOutcomes.delete(slug_25);
  let stopLatches = ee().durable.stopLatches;
  P8({
    storageV5: context_9.storageV5
  });
  let T = n.userResumeWiring === !0 ? n.approvedRelatchGen : void 0,
    P = () => stopLatches.isStopped(slug_25) && (T === void 0 || stopLatches.latchGeneration(slug_25) !== T);
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
    syncLive = ut(slug_25),
    humanTurnWiring = (n.freshPublishWiring === !0 || n.userResumeWiring === !0) && !n.signal.aborted,
    ft = e.supervisors.get(slug_25)?.autoReactWiring,
    taskId_4 = po(context_9, slug_25, G, humanTurnWiring);
  if (taskId_4 !== null || e.inFlightSubscribes.has(slug_25)) {
    if (taskId_4 === null && T !== void 0 && stopLatches.isStopped(slug_25)) return p("artifact_live_subscribe", "arm_in_flight"), {
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
      let C = e.supervisors.get(slug_25);
      if (C !== void 0) {
        let description = Yt(url_9, C.explicit, C.armedVia);
        context_9.taskRegistry.update(taskId_4, D => {
          if (!q$(D) || D.frameLive === void 0) return D;
          if (D.description === description && D.frameLive.explicit === C.explicit && D.frameLive.armedVia === C.armedVia) return D;
          return {
            ...D,
            description: description,
            frameLive: {
              ...D.frameLive,
              explicit: C.explicit,
              armedVia: C.armedVia
            }
          };
        });
      }
    }
    if (taskId_4 !== null && n.freshPublishWiring === !0 && !n.signal.aborted) Zt(context_9.taskRegistry, slug_25);
    if (taskId_4 === null && n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema && n.requireEditor !== !0 && n.editorGatedWiring !== !0) {
      let C = e.pendingInFlightWiring.get(slug_25),
        J = n.freshPublishWiring === !0 && !n.signal.aborted,
        D = J || C === void 0 ? {
          scanGeneration: ee().wakes.scanGeneration,
          stopGeneration: MY(slug_25)
        } : {
          scanGeneration: C.scanGeneration,
          stopGeneration: C.stopGeneration
        };
      if (e.pendingInFlightWiring.set(slug_25, {
        wiring: ye(C?.wiring, n.autoReactWiring, humanTurnWiring),
        freshPublishWiring: J || C?.freshPublishWiring === !0,
        ...D
      }), e.inFlightWiredIntent.add(slug_25), Ne()) Nrs(slug_25, {
        storageV5: context_9.storageV5
      });
      if (J && PYt()) e.bootingWiredArms.set(slug_25, {
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
    nn = tbe(context_9).length + e.inFlightSubscribes.size;
  if (n.machineArm && tbe(context_9).length >= Wk) {
    if (!_r(e, slug_25) || st(e, context_9).length === 0) return p("artifact_live_subscribe", "watch_cap_reconnect"), {
      outcome: "skipped",
      reason: "watch_cap_reconnect"
    };
  }
  if (n.mcpWrite && nn >= Wk) return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);
  let forPublish_2 = !n.machineArm && n.freshPublish === !0;
  if (!n.machineArm && nn >= Wk && st(e, context_9, {
    forPublish: forPublish_2
  }).length === 0) return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);
  let scanGeneration = ee().wakes.scanGeneration,
    stopGeneration = MY(slug_25),
    sn = n.machineArm ? e.supervisors.get(slug_25)?.lastActivityAt : void 0,
    handoffGeneration = e.handoffGeneration;
  if (Ess(Xi), xss(_Qr), Tss(C => ho(context_9.taskRegistry, C)), e.inFlightSubscribes.add(slug_25), e.inFlightGenerations.set(slug_25, handoffGeneration), n.autoReactWiring !== void 0) e.inFlightWiredIntent.add(slug_25);
  let Ce,
    xe = !1;
  try {
    if (n.autoReactWiring?.commentVerbsInSchema === !0 && n.requireEditor !== !0 && n.machineArm !== !0 && n.userResumeWiring !== !0 && PYt()) e.bootingWiredArms.set(slug_25, {
      title: n.autoReactWiring.title,
      freshPublish: n.freshPublishWiring === !0 && !n.signal.aborted,
      scanGeneration: scanGeneration,
      stopGeneration: stopGeneration
    });
    let C = () => e.handoffGeneration !== handoffGeneration || e.retiredInFlightArms.has(slug_25),
      J = yue();
    if (!J) {
      let A = e.supervisors.get(slug_25);
      if (A !== void 0) delete A.lease, delete A.renewable;
    }
    let accountEpoch_2 = ee().accountEpoch,
      ge = J && n.machineArm === !0 ? e.supervisors.get(slug_25)?.lease : void 0,
      F = ge !== void 0 && (ge.transport === "live" || syncLive) && H7r(ge, e.rewatchTiming, accountEpoch_2) ? ge : void 0;
    if (F !== void 0 && F.transport === "sync") {
      let A = await Yk(context_9.storageV5).catch(() => {
        return;
      });
      if (!R_(me(F.token), A)) F = void 0;
      if (signal.aborted || C()) return X(e, slug_25, n.machineArm, "cancelled", Y);
    }
    let W,
      mt = !1,
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
      let A = J && !syncLive && n.machineArm === !0 && e.supervisors.get(slug_25)?.renewable === !0;
      try {
        let B;
        if (A) {
          let be = await kds(slug_25, signal, context_9.credentials);
          if (be.err === null) B = be, mt = !0;else {
            p("artifact_live_subscribe", `renew_miss_${be.status ?? "no_response"}`);
            let ue = e.supervisors.get(slug_25);
            if (ue !== void 0) delete ue.renewable;
            if (signal.aborted || C()) return X(e, slug_25, !0, "cancelled", Y);
          }
        }
        un = Date.now(), W = B ?? (await vds(slug_25, signal, context_9.credentials, {
          syncLive: syncLive,
          ...(n.machineArm === !0 && {
            lean: e.supervisors.get(slug_25)?.bootedVersion
          })
        }));
      } catch {
        return X(e, slug_25, n.machineArm, signal.aborted || C() ? "cancelled" : "boot_failed", Y);
      }
    }
    let receivedAtMs = Date.now();
    if (C()) return X(e, slug_25, n.machineArm, "cancelled", Y);
    if (W.err !== null) {
      let A = signal.aborted ? "cancelled" : W.status === 404 ? "not_found" : Mz(W) ? "other_org" : W.publicOutsideOrg === !0 ? "public_outside_org" : "boot_failed",
        unavailable_2 = A === "boot_failed" && (W.unavailable === !0 || W.noAnswer === !0 && Date.now() - un >= e.rewatchTiming.stallThresholdMs);
      return X(e, slug_25, n.machineArm, A, Y, {
        unavailable: unavailable_2,
        httpStatus: W.status
      });
    }
    let Ge = n.requireEditor === !0 && !W.editor,
      se = Ge || n.editorGatedWiring === !0 && n.autoReactWiring !== void 0 && W.editor !== !0,
      cn = Ge ? "restored_consent_not_editor" : "watch_not_editor";
    if (W.editor === !0) e.nonEditorSlugs.delete(slug_25);
    if (se) {
      if (e.inFlightWiredIntent.delete(slug_25), e.bootingWiredArms.delete(slug_25), !Ge && ee().accountEpoch === accountEpoch_2) e.nonEditorSlugs.add(slug_25);
    }
    let title_3 = W.title === void 0 ? null : Xk(W.title),
      autoReactWiring = se || n.autoReactWiring === void 0 ? void 0 : title_3 === null ? n.autoReactWiring : {
        ...n.autoReactWiring,
        title: title_3
      },
      onOpen = se ? void 0 : n.onOpen,
      onGiveUp = se ? void 0 : n.onGiveUp,
      transport = W.transport;
    if (transport === "sync" && (!ut(slug_25) || W.token === void 0 || !ve(W.token))) return p("artifact_live_subscribe", "sync_unavailable"), X(e, slug_25, n.machineArm, "sync_unavailable", Y, {
      unavailable: !0
    });
    let token = W.token;
    if (!token) return p("artifact_live_subscribe", se ? cn : "no_subscription_token"), X(e, slug_25, n.machineArm, Ge ? "not_editor" : "no_subscription_token", Y);
    if (se) p("artifact_live_subscribe", cn);
    let ver_2 = W.ver,
      getKnownVer_9 = seedKnownVerFromBoot ? () => getKnownVer_8() ?? ver_2 : getKnownVer_8,
      O = F ?? (J ? yss({
        transport: transport,
        token: token,
        ver: ver_2,
        accountEpoch: accountEpoch_2,
        expUnixSeconds: transport === "sync" ? tt(token) : W.tokenExp,
        receivedAtMs: receivedAtMs
      }) : void 0);
    if (signal.aborted || C()) return X(e, slug_25, n.machineArm, "cancelled", Y);
    let He = tbe(context_9).length + e.inFlightSubscribes.size - 1,
      gt = e.supervisors.get(slug_25),
      Br = n.machineArm === !0 && sn !== void 0 && gt !== void 0 && !gt.stopped && gt.lastActivityAt > sn,
      fn = tbe(context_9).length + e.pendingRegistrations;
    if (n.machineArm && !Br && He >= Wk) {
      if (fn >= Wk) {
        if (!_r(e, slug_25) || !vo(e, context_9)) return p("artifact_live_subscribe", "watch_cap_reconnect"), {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
      }
    } else if (n.mcpWrite && He >= Wk) return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);else if (He >= Wk) {
      let A = He - Wk + 1,
        B = st(e, context_9, {
          forPublish: forPublish_2
        });
      if (B.length < A) {
        if (n.machineArm) return p("artifact_live_subscribe", "watch_cap_reconnect"), {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
        return p("artifact_live_subscribe", "watch_cap"), X(e, slug_25, n.machineArm, "watch_cap", Y);
      }
      if (fn >= Wk) Cr(e, B[0], context_9, n.machineArm ? {
        why: `this session reached its limit of ${Wk} artifact watches and made room for an already-held watch to reconnect`,
        shortReason: shortReason
      } : void 0);
    }
    e.pendingRegistrations++, xe = !0;
    let q = e.supervisors.get(slug_25),
      jr = q !== void 0 && !q.stopped && q.explicit,
      explicit_2 = explicit || jr,
      _t = q !== void 0 && !q.stopped,
      reuseTaskId = _t ? q.taskId : void 0,
      qr = q === void 0,
      zr = explicit && q !== void 0 && !q.explicit,
      mn = !n.machineArm && q !== void 0 && q.armedVia === "mcp_write" && armedVia !== "publish" && armedVia !== "mcp_write",
      hn = mn ? q.autoReactWiring : void 0,
      gn = autoReactWiring !== void 0 && !gr(e, slug_25, ft),
      bn = n.userResumeWiring === !0 && gn && _t && q.autoReactWiring?.humanTurnSnapshot === !0,
      St = e.supervisors.get(slug_25)?.carriedVer,
      seedSurfacedVer_2 = St !== void 0 && St !== x ? St : seedSurfacedVer,
      k = br(e, {
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
    if (F === void 0 && k.armedVia !== "mcp_write") eoo(slug_25, ver_2);
    if (F === void 0 && !mt) k.bootedVersion = ver_2;
    let autoReactWiring_2 = k.autoReactWiring;
    if (O !== void 0 && O.accountEpoch === ee().accountEpoch) {
      if (k.lease = O, F === void 0 && W.renewable) k.renewable = !0;else if (F === void 0) delete k.renewable;
    } else delete k.lease, delete k.renewable;
    let lastActivityAt = k.lastActivityAt;
    if (onOpen !== void 0 && onGiveUp !== void 0) k.resumeAnnounce = {
      onOpen: onOpen,
      onGiveUp: onGiveUp,
      wired: autoReactWiring !== void 0
    };
    let wt = armedVia === "resume" && k.armedVia !== "watch" && k.armedVia !== "resume" ? k.armedVia : void 0;
    if (wt !== void 0) k.armedVia = "resume";
    k.transport = transport;
    let ne = !1,
      _n = K(),
      Sn = !1,
      At,
      Ke,
      vn = !1,
      We,
      Xr = new AbortController(),
      Q = se ? void 0 : e.pendingInFlightWiring.get(slug_25);
    if (!se) e.pendingInFlightWiring.delete(slug_25);
    let fe = autoReactWiring ?? Q?.wiring,
      Qr = Q?.wiring.humanTurnSnapshot === !0 && (ft?.humanTurnSnapshot !== !0 || Q.wiring.context !== ft.context);
    if (Q !== void 0 && (autoReactWiring === void 0 || Qr) && Q.stopGeneration === MY(slug_25)) {
      let A = e.supervisors.get(slug_25);
      if (A !== void 0 && !A.stopped) A.autoReactWiring = ye(A.autoReactWiring, {
        ...Q.wiring,
        title: Q.wiring.title ?? A.autoReactWiring?.title
      }, Q.wiring.humanTurnSnapshot === !0);
    }
    let wn = n.freshPublishWiring === !0 || Q?.freshPublishWiring === !0;
    if (Q?.freshPublishWiring === !0) scanGeneration = Q.scanGeneration, stopGeneration = Q.stopGeneration;
    let Z = n.userResumeWiring === !0,
      Zr = humanTurnWiring || fe?.humanTurnSnapshot === !0,
      getTitle = () => e.supervisors.get(slug_25)?.autoReactWiring?.title ?? fe?.title,
      autoReact_4 = fe === void 0 || !fe.commentVerbsInSchema ? void 0 : {
        env: Uo(),
        tool: fe.tool,
        context: fe.context,
        ...(fe.publishTranscript !== void 0 && {
          publishTranscript: fe.publishTranscript
        }),
        getWiring: () => {
          let A = e.supervisors.get(slug_25)?.autoReactWiring;
          return A?.humanTurnSnapshot === !0 || !Zr ? A : void 0;
        },
        abort: Xr,
        getTitle: getTitle,
        onReadRefused: () => {
          oo(e, slug_25);
        },
        notify: A => {
          if ("coalesce" in A) {
            uss({
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
          el({
            value: li({
              taskType: "artifact-auto-react",
              summary: Ut(A.summary),
              body: `
${Ut(A.detail)}`
            }),
            mode: "task-notification",
            origin: {
              kind: "task-notification",
              source: "artifact-auto-react",
              slug: slug_25,
              displayName: zNe(getTitle, url_9)
            },
            uuid: IPn(A.handOff, A.ownGesture === !0 ? slug_25 : void 0),
            ...(A.handOff !== void 0 && {
              artifactCommentTurn: "handoff"
            }),
            agentId: Ze()
          });
        }
      };
    k.surfacedVers ??= [];
    let wake = k.wake,
      Be = ao({
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
    let yt = 0,
      kt,
      ei = F?.opened === !0 ? F : void 0;
    try {
      let A = await EYt({
        ws: transport === "sync" ? {
          url: Pe(slug_25, {
            commentHint: autoReact_4 !== void 0 && lf() && !Oy(slug_25),
            versionNotices: !0
          }),
          protocols: [et, token]
        } : {
          url: url_10,
          protocols: [Bi, token]
        },
        ...(transport === "sync" && {
          headers: {
            "User-Agent": qN()
          }
        }),
        description: Yt(url_9, explicit_2, k.armedVia),
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
        transform: transport === "sync" ? lo(Be, slug_25, {
          onTokenRefresh: (token_2, expUnixSeconds) => {
            if (O !== void 0 && R_(me(O.token), me(token_2))) _ss(O, {
              token: token_2,
              expUnixSeconds: expUnixSeconds,
              receivedAtMs: Date.now()
            });
          },
          onExpiryAnnounced: () => {
            vn = !0;
          },
          onCommentHint: (comments_empty, V) => {
            let Ie = kt;
            kt = void 0;
            let seed_skipped = comments_empty && Ie !== void 0 && xrs(slug_25, Ie, V);
            g("artifact_live_subscribe", {
              comment_hint: !0,
              comments_empty: comments_empty,
              seed_parked: Ie !== void 0,
              seed_skipped: seed_skipped,
              sync_transport: !0
            });
          }
        }) : uo(Be),
        keepalive: transport === "sync" ? {
          openFrames: [],
          frame: _({
            kind: "ping",
            slug: slug_25
          }),
          intervalMs: ee().presence.timing.keepaliveMs,
          sendEveryMs: () => it(e, ee().presence.timing.keepaliveMs),
          deadlineMs: ee().presence.timing.keepaliveDeadlineMs ?? Kt(ee().presence.timing.keepaliveMs)
        } : {
          openFrames: ["ping", "hb"],
          frame: "ping",
          intervalMs: intervalMs
        },
        onSender: U => {
          if (transport === "sync") {
            Ke = V => U(Vt(slug_25, V)), Xe(e, `watch:${slug_25}`, Ke);
            return;
          }
          At = U, Vn(e, slug_25, U);
        },
        onSenderClosed: () => {
          if (Ke !== void 0) Qe(e, `watch:${slug_25}`, Ke);
          if (At !== void 0) Nn(e, slug_25, At);
        },
        onLifecycle: (U, closeCode, Ie) => {
          if (U === "open") {
            ne = !0, k.lastFailure = void 0, We = {
              stalledSince: k.stalledSince,
              lastStalledAt: k.lastStalledAt,
              stallOutAfterMs: k.stallOutAfterMs
            }, k.stalledSince = void 0, k.lastStalledAt = void 0, k.stallOutAfterMs = void 0;
            let Oe = k.spreadReconnect === !0;
            if (k.spreadReconnect = void 0, yt = Date.now(), O !== void 0) O.opened = !0;
            if (T !== void 0 && signal.aborted && stopLatches.isStopped(slug_25) && k.taskId !== void 0) {
              Ob(k.taskId, context_9.taskRegistry, {
                quiet: !0
              }), te(e, slug_25), p("artifact_live_subscribe", "stop_latched");
              return;
            }
            let Me = e.supervisors.get(slug_25);
            if (Me !== void 0 && !Me.stopped) if (transport === "sync") u$s(slug_25), Ve(slug_25)?.reopened();else ir({
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
                lease_remaining_min: Math.max(0, Math.floor((F.expMs - yt) / 60000))
              }),
              ...(mt && {
                token_renewed: !0
              })
            });
            let kn = autoReact_4 !== void 0 && ee().wakes.scanGeneration !== scanGeneration,
              ni = MY(slug_25) !== stopGeneration,
              {
                wakes: wakes_5
              } = ee(),
              ri = wakes_5.liftedAtScanGeneration.get(slug_25) === wakes_5.scanGeneration || wakes_5.humanTurnAtScanGeneration === wakes_5.scanGeneration;
            if (kn && !ri && !Oy(slug_25) && lf()) Yot(slug_25), DY(1, [], {
              catchUp: !1,
              nameChordGesture: !we(),
              passive: !we()
            }), nbe({
              flush: !0
            });
            if (T !== void 0 && !signal.aborted) stopLatches.clearByApprovedRewatch(slug_25, T);
            if (autoReact_4 !== void 0) abe(slug_25).lastWakeArgs = {
              slug: slug_25,
              url: url_9,
              ...autoReact_4
            };
            let En = Z && P();
            if (Z && autoReact_4 !== void 0 && !signal.aborted && !En && Ne()) {
              let N = e.supervisors.get(slug_25)?.autoReactWiring;
              FAn(slug_25, {
                title: N?.title,
                storageV5: N?.context.storageV5
              });
            }
            if (autoReact_4 !== void 0 && signal.aborted) ;else if (autoReact_4 !== void 0) if (!Z && c_(slug_25) && !JRe(slug_25) && wakes_5.humanTurnAtScanGeneration === wakes_5.scanGeneration) Exn(slug_25), wakes_5.liftedAtScanGeneration.set(slug_25, wakes_5.scanGeneration), zV(e, slug_25), Gce({
              slug: slug_25,
              url: url_9,
              ...autoReact_4,
              seed: !1
            });else if (Oy(slug_25) && (kn || ni || En || !(wn || Z))) ;else if (Oy(slug_25)) {
              let N = c_(slug_25),
                de = V$(slug_25);
              if (lf() && (Z || !N || de)) TO(slug_25), nXe(slug_25), autoReact_4.notify({
                summary: (Z ? kyr : Ggs)(zNe(autoReact_4.getTitle, url_9)),
                detail: `Auto-replies on artifact ${url_9} were ${Z ? "resumed by a resume_replies request" : "re-enabled by this publish"} \u2014 they had been ${de ? "handed to another session of this conversation that resumed it or published there" : N ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${N && !de ? zt : Yi}`
              });
              if (!N || de) OYt(slug_25);
              lss(slug_25), Jrs(slug_25), Exn(slug_25), zV(e, slug_25), Gce({
                slug: slug_25,
                url: url_9,
                ...autoReact_4,
                seed: !0
              });
            } else {
              if (wakes_5.pendingResumeDisclosure.delete(slug_25)) TO(slug_25), nXe(slug_25), autoReact_4.notify({
                summary: kyr(zNe(autoReact_4.getTitle, url_9)),
                detail: `Auto-replies on artifact ${url_9} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${zt}`
              });
              if (Gce({
                slug: slug_25,
                url: url_9,
                ...autoReact_4,
                seed: !0,
                ...(n.pickUpRecentSummons === !0 && n.machineArm !== !0 && {
                  pickUpRecentSummons: !0
                }),
                ...(n.machineArm === !0 && Oe && yue() && {
                  deferMs: Sss(e.rewatchTiming)
                })
              }), transport === "sync") {
                let N = abe(slug_25);
                kt = {
                  kickCount: N.kickCount,
                  cancelGeneration: N.cancelGeneration
                };
              }
            }
            let qe = e.supervisors.get(slug_25),
              Lt = qe?.resumeAnnounce;
            if (qe !== void 0 && Lt !== void 0) {
              qe.resumeAnnounce = void 0;
              let {
                  autoReact: autoReact_5
                } = ee(),
                de = autoReact_4 !== void 0 && !Kh(slug_25) && !autoReact_5.userDisarmed && autoReact_5.enabledMemo === !0;
              if (!signal.aborted && !qe.stopped && !stopLatches.isStopped(slug_25) && (de || !Lt.wired && autoReact_4 === void 0)) Lt.onOpen();
            }
            if (autoReact_4 !== void 0 && (wn || Z || explicit) && !Sn && !signal.aborted && !stopLatches.isStopped(slug_25) && !Kh(slug_25) && !ee().autoReact.userDisarmed && ee().autoReact.enabledMemo === !0) {
              Sn = !0;
              let claim = Vrs([slug_25], Date.now());
              (async () => {
                let de = await import("B:/~BUN/root/chunk-epbwnycc.js"),
                  ze = await import("B:/~BUN/root/chunk-4cwxdhqk.js"),
                  Ye = await hKe({
                    records: await de.listRegisteredSessionRecords(),
                    sessionId: _n,
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
                  } = await import("B:/~BUN/root/chunk-mzkweted.js"),
                  Wt = (await requestReplyTakeover({
                    holders: [Ye.holder, ...Ye.otherHolders],
                    holdersIncomplete: Ye.unproven === !0,
                    conversationId: _n,
                    slugs: [slug_25],
                    reason: "claim",
                    alreadyReplying: !0,
                    claim: claim
                  })).yielded.has(slug_25),
                  Tn = !Wt && claim.lost.has(slug_25),
                  displayName_2 = zNe(() => getTitle(), url_9);
                el({
                  value: li({
                    taskType: X2,
                    summary: Ut(Wt ? `Another session of this conversation handed its replies on ${displayName_2} to this one` : Tn ? `This session handed its replies on ${displayName_2} to another session of this conversation` : `Another session of this conversation is open while replies are armed on ${displayName_2}`),
                    body: `
<event>${Ut(Wt ? `Another live session of this same conversation was also armed to reply to comments on ${url_9}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : Tn ? `Another live session of this same conversation claimed the replies to comments on ${url_9} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do \u2014 a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${url_9}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>`
                  }),
                  mode: "task-notification",
                  passive: !0,
                  priority: "next",
                  origin: {
                    kind: "task-notification",
                    source: X2,
                    slug: slug_25,
                    displayName: displayName_2
                  },
                  agentId: Ze()
                });
              })().catch(() => {
                claim.end();
              });
            }
            return;
          }
          let _e = ne ? Date.now() - yt : 0,
            Et = !ne && ro(closeCode),
            expired = transport === "sync" ? closeCode === tCt && (vn || O !== void 0 && Date.now() >= O.expMs - zi) : closeCode === mss,
            je = transport === "sync" && (ne && closeCode === tCt && !expired || !ne && WRe(closeCode)?.status === 404),
            stalled_2 = je || !ne && (Et || no(closeCode, Ie, e.rewatchTiming)),
            xt = ne || stalled_2 ? void 0 : ei,
            z = e.supervisors.get(slug_25);
          if (je && ne && _e < e.rewatchTiming.minUptimeMs && z !== void 0 && z.stalledSince === void 0 && We?.stalledSince !== void 0) z.stalledSince = We.stalledSince, z.lastStalledAt = We.lastStalledAt, z.stallOutAfterMs = We.stallOutAfterMs;
          if (z !== void 0 && transport === "sync" && closeCode === nCt && O !== void 0 && z.lease === O) delete z.lease;
          if (O !== void 0 && z?.lease === O && (!yue() || !Et && !je && !F7r(O, {
            expired: expired,
            refused: xt !== void 0,
            healthy: ne && _e >= e.rewatchTiming.minUptimeMs
          }))) {
            if (delete z.lease, !O.opened) delete z.renewable;
          }
          if (ne) p("artifact_live_subscribe", `socket_closed_${closeCode ?? "unknown"}`, {
            chain_spared: ee().autoReact.artifacts.get(slug_25)?.scanning === !0
          });else if (xt !== void 0) p("artifact_live_subscribe", "reuse_connect_failed");else {
            let Oe = WRe(closeCode),
              Me = {
                ...(stalled_2 && {
                  stalled: !0
                }),
                ...(Et && {
                  shed: !0
                }),
                ...(Oe !== null && {
                  http_status: Oe.status,
                  cf_mitigated: Oe.cfMitigated
                })
              };
            if (Object.keys(Me).length > 0) m("artifact_live_subscribe", "connect_failed", Me);else m("artifact_live_subscribe", "connect_failed");
          }
          if (z !== void 0 && !z.stopped) z.lastFailure = _e < e.rewatchTiming.minUptimeMs ? closeCode ?? "unknown" : void 0;
          Xt(e, slug_25, {
            uptimeMs: je ? 0 : _e,
            ...(closeCode !== void 0 && {
              closeCode: closeCode
            }),
            resumeNeverOpened: Z && !ne,
            reuseRefused: xt !== void 0,
            stalled: stalled_2,
            expired: expired
          });
        }
      }, context_9);
      if (Zi(e, k, slug_25, A.data.taskId), xe) e.pendingRegistrations--, xe = !1;
      let B = e.supervisors.get(slug_25);
      if (B === void 0 || B !== k) return Ob(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), Qt(e, slug_25, n.machineArm), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (C()) return Ob(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), te(e, slug_25), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (P()) {
        if (Ob(A.data.taskId, context_9.taskRegistry, {
          quiet: !0
        }), p("artifact_live_subscribe", "stop_latched"), e.armOutcomes.delete(slug_25), Jt(e, slug_25), _t || k.lastActivityAt !== lastActivityAt) ct(e, k);else te(e, slug_25);
        return {
          outcome: "skipped",
          reason: "stop_latched"
        };
      }
      let be = Z && signal.aborted;
      if (be && T !== void 0 && stopLatches.isStopped(slug_25)) return Ob(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      }), te(e, slug_25), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (e.armOutcomes.delete(slug_25), Jt(e, slug_25), be) return {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (Z && (ee().wakes.scanGeneration !== scanGeneration || MY(slug_25) !== stopGeneration)) return {
        outcome: "skipped",
        reason: "stopped_again"
      };
      if (bn && autoReactWiring !== void 0) {
        let U = e.supervisors.get(slug_25);
        if (U === k && !U.stopped && !gr(e, slug_25, autoReactWiring_2)) U.autoReactWiring = ye(U.autoReactWiring, {
          ...autoReactWiring,
          title: U.autoReactWiring?.title ?? autoReactWiring.title
        }, !0);
      }
      let ue = se ? void 0 : e.pendingInFlightWiring.get(slug_25),
        Rn = Oy(slug_25),
        ti = Rn || autoReact_4 !== void 0 && ee().wakes.scanGeneration !== scanGeneration,
        yn = ue !== void 0 && ue.freshPublishWiring && ue.scanGeneration === ee().wakes.scanGeneration && ue.stopGeneration === MY(slug_25);
      if (ue === void 0 || signal.aborted || !(autoReact_4 === void 0 ? !Rn || yn : !Z && ti && yn)) return {
        outcome: "armed",
        taskId: A.data.taskId,
        ...(se && {
          degraded: "not_editor"
        })
      };
      e.pendingInFlightWiring.delete(slug_25), Ce = ue, Ob(A.data.taskId, context_9.taskRegistry, {
        quiet: !0
      });
    } catch {
      let A = e.supervisors.get(slug_25);
      if (qr && A === k && !(A !== void 0 && A.explicit && !explicit)) te(e, slug_25);else if (zr && A !== void 0 && A === q) A.explicit = !1;
      if (wt !== void 0 && A === k && A.armedVia === "resume") A.armedVia = wt;else if (mn && A === k && A.armedVia === armedVia && !A.explicit) {
        if (A.armedVia = "mcp_write", hn === void 0) delete A.autoReactWiring;else A.autoReactWiring = hn;
        zV(e, slug_25);
      }
      if (A !== void 0 && A === k && A.wake === Be) if (wake === void 0) delete A.wake;else A.wake = wake;
      if (A !== void 0 && onOpen !== void 0) A.resumeAnnounce = void 0;
      if (O !== void 0 && A?.lease === O && !F7r(O, {
        expired: !1,
        refused: !1,
        healthy: !1
      })) {
        if (delete A.lease, !O.opened) delete A.renewable;
      }
      return m("artifact_live_subscribe", F !== void 0 ? "reuse_ws_open_error" : "ws_open_error"), X(e, slug_25, n.machineArm, "ws_open_error", Y);
    }
  } finally {
    e.inFlightSubscribes.delete(slug_25), e.inFlightWiredIntent.delete(slug_25), e.retiredInFlightArms.delete(slug_25), e.inFlightGenerations.delete(slug_25), e.bootingWiredArms.delete(slug_25);
    let C = e.supervisors.get(slug_25);
    if (C === void 0 || C.stopped) Ve(slug_25)?.sourceEnded();
    let J = e.armSettleWaiters.get(slug_25) ?? [];
    e.armSettleWaiters.delete(slug_25);
    for (let D of J) try {
      D();
    } catch (error) {
      l(error);
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
  S_r(e.armOutcomes, n, {
    outcome: outcome,
    reason: reason_3,
    at: Date.now()
  }, y_r);
}
function To(e, n, r, i, d) {
  if (r || e.handoffGeneration !== d.handoffGen || e.retiredInFlightArms.has(n)) return;
  let s = e.supervisors.get(n);
  if (s !== void 0 && !s.stopped && s.timer !== void 0) {
    if (i !== "cancelled") s.lastFailure = i;
    return;
  }
  if (e.armOutcomes.has(n)) return;
  let h = ee().durable.stopLatches.isStopped(n);
  if (!h) Mr(e, n, "failed", i);
  if (d.announce && i !== "cancelled" && !h) Mo(e, n, d, i);
}
var not_found = "artifact not found",
  Co = "there is nothing to retry unless the artifact is shared with the user again",
  other_org = "other organization",
  public_outside_org = "public, outside your organization",
  xo = `there is nothing to retry until ${x4e}`,
  Lo = "there is nothing to retry: read it with the read action instead",
  advice_2 = "it will not come back on its own \u2014 watch it again only if the user asks or your current task still depends on its republishes",
  advice = "watch it again when you next work on this artifact",
  advice_4 = "there is nothing to re-watch while live updates are switched off";
function Oo(e) {
  switch (e) {
    case "not_found":
    case "other_org":
    case "public_outside_org":
      return {
        advice: WNe(e)
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
function WNe(e) {
  switch (e) {
    case "not_found":
    case not_found:
      return Co;
    case "other_org":
    case other_org:
      return xo;
    case "public_outside_org":
    case public_outside_org:
      return Lo;
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
  tn = {
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
  w_r(e.announcedArmFailures, n), EAn(n);
}
function EAn(e) {
  Fb(n => n.origin?.kind === "task-notification" && n.origin.source === X2 && n.origin.slug === e && (n.origin.armFailed === !0 || n.origin.watchEnded === !0));
}
function Mo(e, slug_26, r, i) {
  if (!aJt(e.announcedArmFailures, `${slug_26}:${i}`, __r)) return;
  let d = jNe(i) ?? i,
    s = WNe(i) ?? b_r;
  Gr({
    slug: slug_26,
    artifactName: zNe(r.getTitle, r.url),
    shortReason: tn[i] ?? "not armed",
    event: `The live subscription for ${r.url} did not arm \u2014 ${d}. This session is NOT watching it and does not keep track of new versions of it; ${s}, and do not claim to be watching it meanwhile.`
  });
}
function Gr(e) {
  el({
    value: li({
      taskType: X2,
      summary: Ut(Jgs(e.artifactName, e.shortReason)),
      body: `
<event>${Ut(e.event)}</event>`
    }),
    mode: "task-notification",
    priority: "next",
    origin: {
      kind: "task-notification",
      source: X2,
      slug: e.slug,
      displayName: e.artifactName,
      armFailed: !0
    },
    agentId: Ze()
  });
}
function mQr(e) {
  let {
    slug: slug_27,
    url: url_11,
    liveDocLoss: liveDocLoss,
    settlement: settlement
  } = e;
  if (settlement.settled === "registered") {
    EAn(slug_27);
    return;
  }
  if (settlement.settled !== "unregistered" || !hr(slug_27, settlement.reason)) return;
  let {
      reason: reason_4,
      detail: detail_3,
      serverMessage: serverMessage_2
    } = settlement,
    w = liveDocLoss ?? `This session will NOT be woken when ${rw() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`,
    S = Mlr(reason_4);
  Gr({
    slug: slug_27,
    artifactName: zNe(e.getTitle, url_11),
    shortReason: "wake subscription not registered",
    event: `The durable wake subscription for ${url_11} was not registered (${reason_4}${detail_3 !== void 0 ? `: ${detail_3}` : ""}) \u2014 ${vAn(reason_4, serverMessage_2)} ${w}${S === null ? "" : `; ${S}`} \u2014 do not claim to be subscribed to it meanwhile.`
  });
}
function gQr(e) {
  return e.connected && !rCt(e.taskId);
}
function hQr(e, n) {
  let live_16 = ee().live,
    i = new Set();
  for (let S of Object.values(e.taskRegistry.all())) if (q$(S) && S.status === "running" && S.frameLive !== void 0) i.add(S.frameLive.slug);
  let stopLatches_2 = ee().durable.stopLatches,
    s = S => (n === void 0 || S === n) && !i.has(S) && !stopLatches_2.isStopped(S),
    h = new Set(Llr(e, n).map(item => item.slug)),
    b = [],
    w = new Set();
  for (let slug_28 of live_16.inFlightSubscribes) {
    if (!s(slug_28) || (live_16.inFlightGenerations.get(slug_28) ?? live_16.handoffGeneration) !== live_16.handoffGeneration || live_16.retiredInFlightArms.has(slug_28)) continue;
    w.add(slug_28);
    let R = live_16.supervisors.get(slug_28),
      x = R !== void 0 && !R.stopped ? R : void 0;
    b.push({
      slug: slug_28,
      state: "arming",
      reconnect: x?.taskId !== void 0,
      failures: x?.consecutiveFailures ?? 0,
      ...(x?.lastFailure !== void 0 && {
        lastFailure: x.lastFailure
      })
    });
  }
  for (let S of live_16.supervisors.values()) {
    if (!s(S.slug) || w.has(S.slug) || S.stopped || S.timer === void 0) continue;
    if (w.add(S.slug), h.has(S.slug)) continue;
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
  for (let [slug_29, R] of live_16.armOutcomes) {
    if (!s(slug_29) || w.has(slug_29)) continue;
    b.push({
      slug: slug_29,
      state: R.outcome,
      reason: R.reason,
      at: R.at
    });
  }
  return b;
}
export { Oot, bAn, Olr, SAn, wAn, XJr, nrs, Ilr, vAn, JJr, Mlr, rrs, ors, QJr, ZJr, srs, eQr, kAn, Dlr, _Yt, bYt, ebe, SYt, tbe, Llr, tQr, nQr, rQr, oQr, sQr, iQr, Nlr, aQr, lQr, wYt, dQr, Vni, cQr, Flr, Hlr, uQr, BNe, vYt, pQr, $lr, NTt, Ulr, Blr, jlr, Wlr, jNe, kYt, fQr, zlr, WNe, EAn, mQr, gQr, hQr };