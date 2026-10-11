// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j, Y, qe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { rm, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { gt, Vo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { a, Gw } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { S5e, gUr, vfn, $c } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { Zpn, PLo, xv, ILo, OLo, LLo, NLo } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { Iy } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { Ur } from "B:/~BUN/root/chunk-g2vddtj4.js";
import { ZYe, jLo, O1, Uce, URe, gJ, lh, IN, nY, A$r, K4n, Y4n } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { CRe } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { S9r } from "B:/~BUN/root/chunk-9jmsvqqs.js";
import { EGe, yk, Ogo, Pot } from "B:/~BUN/root/chunk-3jyp964r.js";
import { ti } from "B:/~BUN/root/chunk-nhxcgss8.js";
import { Uf, AB, msn, GOt, PEo, zAr, GAr, YAr, M1n, XAr, JAr, xee, YOt, QAr } from "B:/~BUN/root/chunk-affnknva.js";
import { vS, GEr } from "B:/~BUN/root/chunk-je63fn7b.js";
import { RQe, mnr, xJr, gnr, mbt, xQe, _nr, ybt, IQe, rSe } from "B:/~BUN/root/chunk-dtmq4m96.js";
import { mno, gno, hno, Sno, wno, wlr, vlr, Eno } from "B:/~BUN/root/chunk-86z0hexb.js";
import { enr, tnr, nnr, Zkn, dbt, onr, nEn, oEn, anr, yqt } from "B:/~BUN/root/chunk-kdjavrk6.js";
import { nlt } from "B:/~BUN/root/chunk-pqs37yts.js";
import { pkn, MVt, N_t } from "B:/~BUN/root/chunk-evffehat.js";
import { j4e } from "B:/~BUN/root/chunk-ymhw5dt2.js";
import { randomBytes as de, randomUUID as ue } from "crypto";
import { unlinkSync as ce } from "fs";
import { chmod as Xe, lstat as M, mkdir as V, readdir as Be, readlink as He, realpath as je, unlink as z } from "fs/promises";
import { createServer as le, Socket as fe } from "net";
import { basename as me, dirname as U, isAbsolute as ge, join as P, normalize as pe, resolve as he } from "path";
var te = 500,
  ie = 32;
class K {
  verdicts = new Map();
  lookup(e) {
    let n = this.verdicts.get(e);
    if (n !== void 0) this.verdicts.delete(e), this.verdicts.set(e, n);
    return n;
  }
  remember(e, n) {
    if (this.verdicts.size >= te) {
      let i = this.verdicts.keys().next().value;
      if (i !== void 0) this.verdicts.delete(i);
    }
    this.verdicts.set(e, n);
  }
}
var se = new q(() => new K()),
  re = {
    readAncestors: async e => {
      let {
        ancestors: ancestors,
        readFailed: readFailed,
        truncated: truncated
      } = await vfn(e);
      if (truncated && !readFailed && !ancestors.includes(process.pid)) ({
        ancestors: ancestors,
        readFailed: readFailed,
        truncated: truncated
      } = await vfn(e, ie));
      if (!ancestors.includes(process.pid)) {
        if (readFailed) throw Error("ancestry walk failed");
        if (truncated) throw Error("ancestry walk truncated (maxDepth) above the prefix");
      }
      return ancestors;
    },
    readStartToken: e => $c(e, {
      skipCache: !0
    })
  };
function oe(e, n = process.pid) {
  if (n === 1) return !1;
  return Array.isArray(e) && e.includes(n);
}
async function ae(e, n = re) {
  if (e === void 0 || !Number.isInteger(e) || e <= 0) return "no-evidence";
  let i;
  try {
    i = await n.readStartToken(e);
  } catch {
    i = void 0;
  }
  if (i === void 0) return "no-evidence";
  let c = `${e}:${i}`,
    u = se.of(j().host),
    s = u.lookup(c);
  if (s !== void 0) return s ? "self" : "not-self";
  let g;
  try {
    g = await n.readAncestors(e);
  } catch {
    return "no-evidence";
  }
  let r;
  try {
    r = await n.readStartToken(e);
  } catch {
    r = void 0;
  }
  if (r !== i) return "no-evidence";
  let f = process.pid !== 1 && g.includes(process.pid);
  return u.remember(c, f), f ? "self" : "not-self";
}
async function G(e) {
  let n = e.selfPid ?? process.pid;
  if (e.selfSentAncestry !== void 0 && n !== 1) return oe(e.selfSentAncestry, n);
  if (!e.needsVerdict) return !1;
  if (n === 1 || e.platform === "windows") return e.childTokenPresented;
  if (e.platform !== "macos") return !1;
  let i = await (e.verdictOf ?? ae)(e.verifiedPeerPid);
  return i === "self" || i === "no-evidence" && e.childTokenPresented;
}
function o() {
  return N_t.of(j().host);
}
function Mqo() {
  return o().lastStartFailureCause;
}
function Dqo() {
  return o().lastStartDegradedCause;
}
function ye(e) {
  let n = o();
  if (e === "key_publish_failed" && n.lastStartDegradedCause === "primary_dir_refused_fell_back") return;
  n.lastStartDegradedCause = e;
}
function lkn() {
  return MVt(o());
}
function L(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e)) return !1;
  return typeof e.type === "string";
}
function ckn(e) {
  o().onRename = e;
}
function Lqo(e) {
  o().onEnableRemoteControl = e;
}
function W(e) {
  return j4e(e) ? e : e === void 0 ? "(none)" : "(malformed)";
}
function _e(e) {
  if (!Array.isArray(e)) return [];
  let n = [];
  for (let i of e) {
    if (n.length >= zAr) break;
    if (j4e(i)) n.push(i);
  }
  return n;
}
function dkn(e) {
  o().onPeerMessageStatus = e;
}
function Nqo(e) {
  o().onEnqueue = e;
}
function J(e) {
  if (e.session_id !== void 0 && e.session_id !== Y()) return t(`[uds-messaging] Dropping ${Uf(e.type)} message: session_id mismatch (got "${Uf(String(e.session_id))}", expected "${Y()}")`, {
    level: "warn"
  }), !1;
  return !0;
}
async function we(e, verifiedPeerPid, verifiedPeerProcStart, c, u) {
  let s = e.message?.content;
  if (typeof s !== "string" || s.length === 0) {
    t("[uds-messaging] Ignoring user message with missing or non-string content", {
      level: "warn"
    });
    return;
  }
  if (!J(e)) return;
  let uuid = typeof e.uuid === "string" ? e.uuid : ue(),
    r = IQe();
  if (r !== void 0) {
    rSe("uds: dropped before attachment materialization", r), xJr({
      kind: "peer",
      from: e.from ?? "unknown",
      ...(verifiedPeerPid !== void 0 && {
        verifiedPeerPid: verifiedPeerPid
      }),
      ...(j4e(e.msg_id) && {
        msg_id: e.msg_id
      })
    }, "refused");
    return;
  }
  let priority = EGe(e.priority) ?? "next",
    content = S9r(s),
    plugin = ZYe(e.from_plugin),
    y = await Pot({
      origin: {
        kind: "peer",
        ...(plugin !== void 0 && {
          plugin: plugin
        })
      },
      content: content
    });
  if (y.consumed !== void 0) return;
  using queueing = y.queueing;
  let d = typeof y.content === "string" ? y.content : content,
    value = d;
  if (e.file_attachments !== void 0 && nlt()) try {
    let {
        emitPeerFileReceiveTelemetry: emitPeerFileReceiveTelemetry,
        injectPeerFilePrefix: injectPeerFilePrefix,
        materializeLocalPeerFiles: materializeLocalPeerFiles
      } = await import("B:/~BUN/root/chunk-tjzfgsyn.js"),
      I = await materializeLocalPeerFiles(e.file_attachments);
    if (I.received > 0) value = injectPeerFilePrefix(d, I.prefix), emitPeerFileReceiveTelemetry("uds", I.received, I.verified);
  } catch (error) {
    t(`[uds-messaging] Failed to materialize file_attachments: ${AB(String(error))}`, {
      level: "warn"
    });
  }
  let selfSent = await N(verifiedPeerPid, c, u),
    origin = Uce({
      kind: "peer",
      from: e.from ?? "unknown",
      ...(verifiedPeerPid !== void 0 && {
        verifiedPeerPid: verifiedPeerPid
      }),
      ...(verifiedPeerProcStart !== void 0 && {
        verifiedPeerProcStart: verifiedPeerProcStart
      }),
      ...(selfSent && {
        selfSent: selfSent
      }),
      ...(j4e(e.msg_id) && {
        msg_id: e.msg_id
      }),
      ...(plugin !== void 0 && {
        plugin: plugin
      }),
      ...URe(s)
    }, value, s),
    k = {
      mode: "prompt",
      agentId: qe(),
      value: value,
      uuid: uuid,
      priority: priority,
      origin: origin,
      skipSlashCommands: !0,
      isMeta: !0,
      skipAttachments: !0
    };
  if (ybt(k) !== "accept") return;
  yk(k), queueing.queued(), t(`[uds-messaging] Routed user message to queue (priority=${priority}): ${Uf(value, 80)}`), o().onEnqueue?.(), Z(k);
}
function Z(e) {
  let n = e.origin?.kind === "peer" ? e.origin : void 0,
    activeSocketPath = o().activeSocketPath;
  if (n !== void 0 && n.selfSent !== !0 && n.verifiedPeerPid !== void 0 && typeof n.from === "string" && activeSocketPath !== void 0 && ukn(n.from, activeSocketPath, n.verifiedPeerPid) !== void 0) GEr(n.from, n.verifiedPeerPid, n.verifiedPeerProcStart);
}
function ukn(e, n, verifiedPeerPid_2) {
  if (!e.startsWith("uds:") || !gJ(e)) return;
  let target = lh(e).target;
  return target && A$r(target, n, {
    verifiedPeerPid: verifiedPeerPid_2,
    ownerUids: o().peerDirOwnerUids
  }) ? target : void 0;
}
async function X(e, pid, writeToken, c, u) {
  if (!L(e)) {
    t("[uds-messaging] Ignoring message without valid type field", {
      level: "warn"
    });
    return;
  }
  if (e.type === "user") await we(e, pid, writeToken, c, u);else if (e.type === "control") {
    if (!J(e)) return;
    if (e.action === "rename" && typeof e.name === "string") o().onRename?.(e.name);else if (e.action === "peer_message_status" && (e.status === "held" || e.status === "denied" || e.status === "expired" || e.status === "delivered" || e.status === "refused" || e.status === "dropped")) {
      let s = e.status === "expired" && e.status_detail === "refused" ? "refused" : e.status,
        g = XAr(e.orig_msg_id, s),
        r = g?.destination;
      if (e.status === "dropped") {
        let dropReason = PEo(e.drop_reason),
          S = JAr(_e(e.dropped_msg_ids));
        if (r !== void 0) {
          let l = S.get(r) ?? {
            dropped: 0,
            wereHeld: 0
          };
          if (l.dropped++, g?.wasHeld) l.wereHeld++;
          S.set(r, l);
        }
        if (dropReason === "queue-full") for (let [l, {
          wereHeld: wereHeld
        }] of S) for (let b = 0; b < wereHeld; b++) M1n(l);
        if (S.size === 0) t(`[uds-messaging] peer_message_status dropped: neither orig_msg_id=${W(e.orig_msg_id)} nor any named id matches an outstanding send`);
        for (let [l, {
          dropped: y
        }] of S) o().onPeerMessageStatus?.("dropped", l, {
          dropReason: dropReason,
          droppedCount: y
        });
      } else if (r === void 0) t(`[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${W(e.orig_msg_id)}`);else {
        if (s === "held") YAr(r);else if (s === "delivered" && g?.wasHeld) M1n(r);
        o().onPeerMessageStatus?.(s, r);
      }
    } else if (e.action === "notify_when_idle") {
      let s = enr().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] notify_when_idle dropped: malformed frame"), p("cross_session_notify_idle", "malformed_frame");
        return;
      }
      let activeSocketPath_2 = o().activeSocketPath,
        r = s.data.from,
        f = activeSocketPath_2 !== void 0 ? ukn(r, activeSocketPath_2, pid) : void 0;
      if (activeSocketPath_2 === void 0) t("[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)"), p("cross_session_notify_idle", "own_inbox_unbound");else if (f === void 0) t(`[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${Uf(r)})`), p("cross_session_notify_idle", "unvettable_reply_target");else if (xv(f) === xv(activeSocketPath_2)) t("[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)"), p("cross_session_notify_idle", "self_target_frame");else {
        let S = await N(pid, c, u),
          l = nnr(r, f, s.data.msg_id, pid, writeToken, u === "peer", H(s.data.from_mode), S);
        if (t(`[uds-messaging] notify_when_idle from ${Uf(r)}: ${l}`), l === "full") yqt(f, s.data.msg_id, pid, u === "peer", writeToken);
      }
    } else if (e.action === "peer_idle_notice") {
      let s = tnr().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] peer_idle_notice dropped: malformed frame"), p("cross_session_notify_idle", "malformed_notice");
        return;
      }
      if (!dbt(s.data.orig_msg_id)) {
        t("[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)");
        return;
      }
      let g = await N(pid, c, u);
      if (!onr(s.data.orig_msg_id, s.data.state, s.data.finished_at, s.data.detail, H(s.data.from_mode), g)) t(`[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${Uf(s.data.orig_msg_id)} was already consumed`);
    } else if (e.action === "yield_artifact_replies") {
      let s = mno().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] yield_artifact_replies dropped: malformed frame"), p("artifact_comments_autoreact", "yield_malformed_frame");
        return;
      }
      let activeSocketPath_3 = o().activeSocketPath,
        r = activeSocketPath_3 !== void 0 ? ukn(s.data.from, activeSocketPath_3, pid) : void 0;
      if (activeSocketPath_3 === void 0 || r === void 0) {
        t(`[uds-messaging] yield_artifact_replies dropped: ${activeSocketPath_3 === void 0 ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${Uf(s.data.from)})`), p("artifact_comments_autoreact", "yield_unvettable_target");
        return;
      }
      if (xv(r) === xv(activeSocketPath_3)) {
        t("[uds-messaging] yield_artifact_replies dropped: reply target is this session");
        return;
      }
      let f = await YOt(r);
      if (f === void 0 || f.sessionId !== Y() || pid !== void 0 && f.pid !== pid) {
        t(`[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${Uf(s.data.from)})`), p("artifact_comments_autoreact", "yield_requester_unverified"), vlr(s.data, r, pid === void 0 ? void 0 : {
          pid: pid,
          writeToken: writeToken
        }, Date.now(), {
          refuse: !0
        });
        return;
      }
      vlr(s.data, r, {
        pid: pid ?? f.pid,
        procStart: pid === void 0 || pid === f.pid ? f.procStart : void 0,
        writeToken: writeToken
      }, Date.now());
    } else if (e.action === "unyield_artifact_replies") {
      let s = hno().safeParse(e);
      if (!s.success || !Eno(s.data, pid)) t("[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back");
    } else if (e.action === "artifact_replies_yielded") {
      let s = gno().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] artifact_replies_yielded dropped: malformed frame"), p("artifact_live_subscribe", "yield_malformed_answer");
        return;
      }
      if (!Sno(s.data.orig_msg_id)) {
        t("[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled");
        return;
      }
      wno(s.data, pid);
    } else t(`[uds-messaging] Unhandled control action: ${Uf(String(e.action))}`);
  } else t(`[uds-messaging] Received unhandled message type: ${Uf(e.type)}`);
}
function be(e, n, i, c, u) {
  if (L(e) && (e.type === "control" && e.action !== "notify_when_idle" || e.type === "user" && e.priority === "now" && e.file_attachments === void 0)) {
    X(e, n, i, c, u).catch(s => {
      t(`[uds-messaging] Failed to process message: ${s}`, {
        level: "warn"
      });
    });
    return;
  }
  o().processingChain = o().processingChain.then(() => X(e, n, i, c, u)).catch(s => {
    t(`[uds-messaging] Failed to process message: ${s}`, {
      level: "warn"
    });
  });
}
var Se = 3000;
function ke(e = 3000) {
  return Promise.race([o().processingChain, Q(e, void 0, {
    unref: !0
  })]);
}
function Ee(e) {
  e.setEncoding("utf8");
  let firstLineDeadlineMs = o().firstLineDeadlineMs,
    i = setTimeout(() => {
      i = void 0;
      try {
        if (t(`[uds-messaging] Closing a connection that sent no complete line within ${firstLineDeadlineMs} ms`), !o().silentDropReported) o().silentDropReported = !0, p("cross_session_inbox_auth", "silent_connection_deadline");
        e.destroy();
      } catch (error) {
        t(`[uds-messaging] Failed to close a silent connection: ${error}`, {
          level: "warn"
        });
      }
    }, firstLineDeadlineMs);
  i.unref();
  let c = () => {
    if (i !== void 0) clearTimeout(i), i = void 0;
  };
  e.once("close", c), e.once("error", c);
  let u,
    s,
    g = !1,
    r,
    f,
    S = process.pid !== 1 && _nr();
  if (S) {
    let pid_2 = msn(e),
      token = pid_2 !== void 0 ? S5e(pid_2) : void 0;
    if (pid_2 !== void 0 && token !== void 0) f = {
      pid: pid_2,
      token: token
    };
  }
  let l = "",
    y,
    b = !1,
    d = w => {
      if (t(`[uds-messaging] Dropped ${w} from a connection that did not authenticate; closing it`, {
        level: "warn"
      }), !o().authDropReported) o().authDropReported = !0, m("cross_session_inbox_auth", "unauthed_drop");
      e.destroy();
    },
    h = w => {
      let k = !b;
      if (b = !0, LLo(w)) {
        if (k) {
          if (y = NLo(w.token, o().activeTokens), y !== void 0 && !o().authOkReported) o().authOkReported = !0, _("cross_session_inbox_auth");
          if (y === void 0 && o().authRequired) d("a bad auth frame");
        }
        return;
      }
      if (o().authRequired && y === void 0) {
        d(L(w) ? `a '${Uf(w.type)}' line` : "a line");
        return;
      }
      if (!g) {
        if (u = msn(e), s = u === void 0 ? void 0 : f !== void 0 ? f.pid === u ? f.token : void 0 : S5e(u), g = !0, u !== void 0 && S) r = f !== void 0 && f.pid === u && S5e(u) === f.token ? gUr(u) : void 0;
      }
      be(w, u, s, r, y);
    },
    E = w => {
      try {
        h(w);
      } catch (error) {
        t(`[uds-messaging] Failed to handle line: ${error}`, {
          level: "warn"
        });
      }
    };
  e.on("data", w => {
    if (l += w, l.length > GOt) {
      t(`[uds-messaging] Line exceeded ${GOt} chars; dropping connection`, {
        level: "warn"
      }), e.destroy(), l = "";
      return;
    }
    let k;
    while ((k = l.indexOf(`
`)) !== -1) {
      let D = l.slice(0, k);
      if (l = l.slice(k + 1), c(), !D.trim()) {
        if (o().authRequired && y === void 0) {
          b = !0, d("a blank line"), l = "";
          return;
        }
        continue;
      }
      let A;
      try {
        A = Vo(D);
      } catch {
        if (t(`[uds-messaging] Failed to parse JSON line: ${AB(D)}`, {
          level: "warn"
        }), o().authRequired && y === void 0) {
          b = !0, d("an unparseable line"), l = "";
          return;
        }
        continue;
      }
      if (E(A), e.destroyed) {
        l = "";
        return;
      }
    }
  }), e.on("end", () => {
    if (l.trim() && !e.destroyed) {
      let w,
        k = !1;
      try {
        w = Vo(l), k = !0;
      } catch {
        if (t(`[uds-messaging] Failed to parse final buffer: ${AB(l)}`, {
          level: "warn"
        }), o().authRequired && y === void 0) d("an unparseable final fragment");
      }
      if (k) E(w);
    }
    e.end();
  }), e.on("error", w => {
    t(`[uds-messaging] Connection error: ${w.message}`, {
      level: "warn"
    });
  });
}
function Hqo() {
  return o().activeSocketPath;
}
var F = 103;
function G1o() {
  return `\\\\.\\pipe\\${Y4n}\\${K4n}${de(16).toString("hex")}`;
}
function V1o(e = process.getuid?.() ?? 0) {
  let n = a.TERMUX_VERSION ? a.PREFIX : void 0,
    i = n ? P(n, "tmp") : "/tmp";
  return P(i, `cc-socks-${e}`, `${process.pid}.sock`);
}
async function C(e, n, i, {
  settleHeld = !0
} = {}) {
  for (let r of o().connectedClients) r.destroy();
  if (o().connectedClients.clear(), e.close(), settleHeld) anr();
  let u = settleHeld ? mbt() : void 0;
  await ke();
  let s = settleHeld ? nt(Zkn("exited"), Se) : void 0;
  if (await u, await s, settleHeld) await Ogo();
  try {
    await z(n);
  } catch {}
  let g = o();
  if (g.activeKeyFile !== void 0) await OLo(g.activeKeyFile, i), g.activeKeyFile = void 0;
  T();
}
function T() {
  o().activeSocketPath = void 0, o().activeTokens = void 0, delete process.env.CLAUDE_CODE_MESSAGING_SOCKET, Gw.unset("CLAUDE_CODE_MESSAGING_TOKEN"), GAr(void 0), mnr(null), gnr(null), nEn(null), wlr(null), oEn(null), vS().senderMode = null;
}
function ve(e, n, i, c) {
  return async () => {
    await C(e, n, i), c();
  };
}
function De(path) {
  return new Promise(n => {
    let i = new fe(),
      c = u => {
        i.destroy(), n(u);
      };
    i.on("connect", () => c("live")), i.on("error", () => c("dead")), i.setTimeout(250, () => c("dead")), i.connect({
      path: path
    });
  });
}
function $e(e, n) {
  return new Promise((i, c) => {
    function u(s) {
      if (v(s) === "EADDRINUSE") i(!1);else c(s);
    }
    e.once("error", u), e.listen(n, () => {
      e.removeListener("error", u), i(!0);
    });
  });
}
function Fqo(e, n, i = {}) {
  return K1o(e ?? G1o(), n, {
    isExplicit: e !== void 0,
    profileStartup: i.profileStartup
  });
}
function R() {
  Gw.unset("CLAUDE_CODE_MESSAGING_SOCKET"), Gw.unset("CLAUDE_CODE_MESSAGING_TOKEN");
}
var ee = "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.",
  qn = `A component of the sockets path is not a directory (a regular file is in the way). ${ee}`,
  Gn = `The sockets path runs through a symlink loop. ${ee}`;
async function q1o(e) {
  if (!ge(e)) throw new rm(e === "" ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path." : `--messaging-socket-path must be an absolute path, got: ${e}`);
  if (nY(e) === void 0) throw new rm(`--messaging-socket-path on Windows must be a named-pipe path like \\\\.\\pipe\\<name>, got: ${e}`);
  return e;
}
async function K1o(e, n, i = {}) {
  o().startInFlight = !0;
  try {
    return await Re(e, n, i);
  } finally {
    o().startInFlight = !1;
  }
}
async function Re(e, storageV5, i = {}) {
  if (o().lastStartFailureCause = "bind_failed", o().lastStartDegradedCause = void 0, !IN(e)) {
    if (t(`[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`, {
      level: "error"
    }), R(), o().lastStartFailureCause = "path_refused", i.isExplicit) throw new rm(`--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`);
    return;
  }
  if (i.isExplicit, i.isExplicit) {
    if (e = await q1o(e), (await De(e)) === "live") throw new rm(`--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`);
  }
  if (i.isExplicit) try {
    await z(e);
  } catch {}
  if (o().activeSocketPath = e, i.profileStartup) Ur("uds_inbox_dir_ready");
  let u, s;
  try {
    u = le({
      allowHalfOpen: !0
    }, r => {
      o().connectedClients.add(r), t("[uds-messaging] Client connected"), Ee(r), r.on("close", () => {
        o().connectedClients.delete(r), t("[uds-messaging] Client disconnected");
      });
    });
  } catch (error) {
    T(), t(`[uds-messaging] Failed to create server: ${String(error)}`, {
      level: "error"
    }), R();
    return;
  }
  u.on("error", r => {
    t(`[uds-messaging] Server error: ${r.message}`, {
      level: "error"
    });
  }), o().authRequired = i.requireAuth ?? Zpn(), o().firstLineDeadlineMs = i.firstLineDeadlineMs ?? pkn;
  let g = PLo();
  o().activeTokens = g;
  try {
    if (i.isExplicit, !(await $e(u, e))) throw Error("listen EADDRINUSE on the requested socket path");
    if (i.profileStartup) Ur("uds_inbox_listening");
    u.unref();
    let r = gt(async () => {
      t("[uds-messaging] Shutting down"), await C(u, e, storageV5);
    });
    s = r;
    try {
      o().activeKeyFile = await ILo(e, g.peerToken, storageV5, {
        sweepPermitted: await CRe()
      }), Ie();
    } catch (error) {
      if (o().authRequired) {
        if (t(`[uds-messaging] Failed to publish the inbox auth key (refusing to run an inbox no peer can authenticate to): ${error}`, {
          level: "error"
        }), o().lastStartFailureCause = "key_publish_failed", await C(u, e, storageV5, {
          settleHeld: !1
        }), r(), R(), i.isExplicit) throw new rm(`--messaging-socket-path: bound ${e} but could not publish its auth key (${v(error) ?? error}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`);
        return;
      }
      t(`[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${error}`, {
        level: "warn"
      }), ye("key_publish_failed");
    }
    if (i.profileStartup) Ur("uds_inbox_key_published");
    process.env.CLAUDE_CODE_MESSAGING_SOCKET = e, Gw.set("CLAUDE_CODE_MESSAGING_TOKEN", g.childToken), GAr(O1(e));
    let f = O1(e);
    gnr(Z), vS().senderMode = _9r, nEn((l, y, expectPeerPid, d, expectPeerProcStart) => xee(l, {
      action: "peer_idle_notice",
      ...y,
      from: f,
      ...(d ? Ae() : {})
    }, {
      ...(expectPeerPid !== void 0 && {
        expectPeerPid: expectPeerPid
      }),
      ...(expectPeerProcStart !== void 0 && {
        expectPeerProcStart: expectPeerProcStart
      }),
      storageV5: storageV5
    })), wlr((l, y, expectPeerPid_2, expectPeerProcStart_2) => xee(l, {
      action: "artifact_replies_yielded",
      ...y,
      from: f
    }, {
      ...(expectPeerPid_2 !== void 0 && {
        expectPeerPid: expectPeerPid_2
      }),
      ...(expectPeerProcStart_2 !== void 0 && {
        expectPeerProcStart: expectPeerProcStart_2
      }),
      storageV5: storageV5
    }), f), oEn(l => QAr(l)), mnr((l, status, b) => {
      let d = l.origin?.kind === "peer" ? l.origin : void 0,
        h = d?.from;
      if (typeof h !== "string") return;
      let E = ukn(h, e, d?.verifiedPeerPid);
      if (E === void 0) {
        t(`[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${Uf(h)})`);
        return;
      }
      return xee(E, {
        action: "peer_message_status",
        ...(status === "refused" ? {
          status: "expired",
          status_detail: "refused"
        } : {
          status: status
        }),
        reason: Ce(status),
        from: f,
        ...(typeof d?.msg_id === "string" && {
          orig_msg_id: d.msg_id
        }),
        ...(status === "dropped" && b !== void 0 && {
          drop_reason: b.dropReason,
          dropped_msg_ids: b.droppedMsgIds
        })
      }, {
        ...(d?.verifiedPeerPid !== void 0 && {
          expectPeerPid: d.verifiedPeerPid
        }),
        ...(d?.verifiedPeerProcStart !== void 0 && {
          expectPeerProcStart: d.verifiedPeerProcStart
        }),
        storageV5: storageV5
      }).catch(w => t(`[uds-messaging] hold-receipt send failed to ${Uf(h)}: ${AB(String(w))}`));
    }), t(`[uds-messaging] Listening: ${e}`, {
      level: "info"
    }), t(`[uds-messaging] Inject messages (auth line REQUIRED here; a pipe is not reachable via socat/AF_UNIX): node -e "const c=require('net').connect(process.argv[1],()=>{c.write(JSON.stringify({type:'auth',token:process.env.CLAUDE_CODE_MESSAGING_TOKEN})+'\\n'+JSON.stringify({type:'user',message:{role:'user',content:'hello'}})+'\\n');c.end()})" "${e}"`, {
      level: "info"
    });
    let S = "nc -N -U";
    return t(`[uds-messaging] Connect when the data is ready (run the command first, then connect and write its output as ONE line, as in the node recipe above): a connection that sends no complete line within ${o().firstLineDeadlineMs} ms is closed`, {
      level: "info"
    }), o().lastStartFailureCause = void 0, ve(u, e, storageV5, r);
  } catch (error) {
    if (error instanceof rm) throw error;
    if (i.isExplicit) {
      let f = v(error);
      if (s !== void 0) throw await C(u, e, storageV5, {
        settleHeld: !1
      }), s(), R(), o().lastStartFailureCause = "post_bind_setup_failed", new rm(`--messaging-socket-path: bound ${e} but could not finish setting the socket up (${f ?? String(error)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`);
      T(), R();
      let S = f === "EACCES" || f === "EADDRINUSE" || f === "EPERM" ? "another process owns this pipe name; choose a different \\\\.\\pipe\\<name>" : "the named pipe could not be created";
      throw new rm(`--messaging-socket-path: cannot bind at ${e} (${f ?? String(error)}): ${S}.`);
    }
    if (s !== void 0) await C(u, e, storageV5, {
      settleHeld: !1
    }), s(), o().lastStartFailureCause = "post_bind_setup_failed";
    if (v(error) === "ENAMETOOLONG") t(`[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`, {
      level: "error"
    });else t(`[uds-messaging] Failed to start: ${error}`, {
      level: "error"
    });
    T(), R();
    return;
  }
}
function Ce(e) {
  switch (e) {
    case "held":
      return "Your message is held for the recipient user's approval before it reaches their Claude session (permission-mode parity).";
    case "denied":
      return "The recipient user declined your message; it was not delivered to their Claude session.";
    case "expired":
      return "Your held message expired without approval and was not delivered to the recipient's Claude session.";
    case "delivered":
      return "Your previously-held message was approved and released to the recipient's Claude session.";
    case "refused":
      return "The recipient session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); your message was not delivered to its Claude.";
    case "dropped":
      return "The recipient's session dropped your message at its inbox (rate limit, duplicate, relay loop, or full queue); it was not delivered and will not be.";
  }
}
function Ae() {
  let from_mode = _9r();
  return from_mode === void 0 ? {} : {
    from_mode: from_mode
  };
}
function _9r() {
  if (!RQe()) return;
  let getCurrentMode = ti().inbound.getCurrentMode;
  if (getCurrentMode) try {
    return xQe(getCurrentMode());
  } catch {
    return;
  }
  let modeAtUnwire = ti().inbound.modeAtUnwire;
  return modeAtUnwire !== void 0 ? xQe(modeAtUnwire) : void 0;
}
function H(e) {
  return jLo(e) ? e : void 0;
}
function N(verifiedPeerPid_3, selfSentAncestry, i) {
  return G({
    selfSentAncestry: selfSentAncestry,
    verifiedPeerPid: verifiedPeerPid_3,
    childTokenPresented: i === "child",
    needsVerdict: _nr(),
    platform: O()
  });
}
function Ie() {
  if (!process.listeners("exit").includes(b9r)) process.on("exit", b9r);
}
function b9r() {
  try {
    let activeKeyFile = o().activeKeyFile;
    if (activeKeyFile === void 0) return;
    ce(activeKeyFile);
  } catch {}
}
export { Mqo, Dqo, lkn, ckn, Lqo, dkn, Nqo, ukn, Hqo, G1o, V1o, Fqo, q1o, K1o, _9r, b9r };