// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, z, st } from "B:/~BUN/root/chunk-game8aqv.js";
import { F_, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { vt, t, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { i, mP } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { kUt, WDs, uDr, tc, uAe, xXi, vJ, mte, pAe, RSe, iS, nj, lpe, JDs, TTo, CTo } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { aDr, hXi, TO, gXi, yXi, SXi, wXi } from "B:/~BUN/root/chunk-smrt7z22.js";
import { xf } from "B:/~BUN/root/chunk-x1xft50h.js";
import { Uo } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { iet } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Omi } from "B:/~BUN/root/chunk-q1xrynbv.js";
import { D3t, GT, Zis } from "B:/~BUN/root/chunk-27h4st9h.js";
import { qr } from "B:/~BUN/root/chunk-vmp6vbba.js";
import { Ni } from "B:/~BUN/root/chunk-ghar8fn5.js";
import { q_, Z9, k0t, h0n, yHi, $ys, Uys, zys, Sfo, Vys, Kys, vJe, _0n, qys } from "B:/~BUN/root/chunk-5gm1xyqv.js";
import { mA, Lfs } from "B:/~BUN/root/chunk-hh77nseb.js";
import { LMt } from "B:/~BUN/root/chunk-4zhce32x.js";
import { CVt, pWo, Sei, mWo, myn, AVt, yWo, yyn, PVt, JUe } from "B:/~BUN/root/chunk-agy96pzd.js";
import { Bsi, jsi, Wsi, Ksi, qsi, UKo, BKo, Jsi } from "B:/~BUN/root/chunk-kss98j6d.js";
import { Zjo, eWo, tWo, HVr, uyn, rWo, BVr, WVr, iWo, JXn } from "B:/~BUN/root/chunk-bapqgq28.js";
import { WJe } from "B:/~BUN/root/chunk-wy3ha3b9.js";
import { L2r, K9n, Lgn } from "B:/~BUN/root/chunk-cqy1xqjq.js";
import { B0t } from "B:/~BUN/root/chunk-x6ny3ghw.js";
import { randomBytes as de, randomUUID as ue } from "crypto";
import { unlinkSync as ce } from "fs";
import { chmod as Xe, lstat as P, mkdir as V, readdir as Be, readlink as He, realpath as je, unlink as Y } from "fs/promises";
import { createServer as le, Socket as fe } from "net";
import { basename as me, dirname as U, isAbsolute as ge, join as M, normalize as pe, resolve as he } from "path";
var te = 500,
  ie = 32;
class q {
  verdicts = new Map();
  lookup(e) {
    let n = this.verdicts.get(e);
    if (n !== void 0) this.verdicts.delete(e), this.verdicts.set(e, n);
    return n;
  }
  remember(e, n) {
    if (this.verdicts.size >= te) {
      let s = this.verdicts.keys().next().value;
      if (s !== void 0) this.verdicts.delete(s);
    }
    this.verdicts.set(e, n);
  }
}
var se = new W(() => new q()),
  re = {
    readAncestors: async e => {
      let {
        ancestors: ancestors,
        readFailed: readFailed,
        truncated: truncated
      } = await uDr(e);
      if (truncated && !readFailed && !ancestors.includes(process.pid)) ({
        ancestors: ancestors,
        readFailed: readFailed,
        truncated: truncated
      } = await uDr(e, ie));
      if (!ancestors.includes(process.pid)) {
        if (readFailed) throw Error("ancestry walk failed");
        if (truncated) throw Error("ancestry walk truncated (maxDepth) above the prefix");
      }
      return ancestors;
    },
    readStartToken: e => tc(e, {
      skipCache: !0
    })
  };
function oe(e, n = process.pid) {
  if (n === 1) return !1;
  return Array.isArray(e) && e.includes(n);
}
async function ae(e, n = re) {
  if (e === void 0 || !Number.isInteger(e) || e <= 0) return "no-evidence";
  let s;
  try {
    s = await n.readStartToken(e);
  } catch {
    s = void 0;
  }
  if (s === void 0) return "no-evidence";
  let d = `${e}:${s}`,
    l = se.of(H().host),
    r = l.lookup(d);
  if (r !== void 0) return r ? "self" : "not-self";
  let u;
  try {
    u = await n.readAncestors(e);
  } catch {
    return "no-evidence";
  }
  let _;
  try {
    _ = await n.readStartToken(e);
  } catch {
    _ = void 0;
  }
  if (_ !== s) return "no-evidence";
  let h = process.pid !== 1 && u.includes(process.pid);
  return l.remember(d, h), h ? "self" : "not-self";
}
async function G(e) {
  let n = e.selfPid ?? process.pid;
  if (e.selfSentAncestry !== void 0 && n !== 1) return oe(e.selfSentAncestry, n);
  if (!e.needsVerdict) return !1;
  if (n === 1 || e.platform === "windows") return e.childTokenPresented;
  if (e.platform !== "macos") return !1;
  let s = await (e.verdictOf ?? ae)(e.verifiedPeerPid);
  return s === "self" || s === "no-evidence" && e.childTokenPresented;
}
function o() {
  return Lgn.of(H().host);
}
function qha() {
  return o().lastStartFailureCause;
}
function Yha() {
  return o().lastStartDegradedCause;
}
function ye(e) {
  let n = o();
  if (e === "key_publish_failed" && n.lastStartDegradedCause === "primary_dir_refused_fell_back") return;
  n.lastStartDegradedCause = e;
}
function O2r() {
  return K9n(o());
}
function L(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e)) return !1;
  return typeof e.type === "string";
}
function I2r(e) {
  o().onRename = e;
}
function Xha(e) {
  o().onEnableRemoteControl = e;
}
function X(e) {
  return B0t(e) ? e : e === void 0 ? "(none)" : "(malformed)";
}
function _e(e) {
  if (!Array.isArray(e)) return [];
  let n = [];
  for (let s of e) {
    if (n.length >= $ys) break;
    if (B0t(s)) n.push(s);
  }
  return n;
}
function M2r(e) {
  o().onPeerMessageStatus = e;
}
function Jha(e) {
  o().onEnqueue = e;
}
function Q(e) {
  if (e.session_id !== void 0 && e.session_id !== z()) return t(`[uds-messaging] Dropping ${q_(e.type)} message: session_id mismatch (got "${q_(String(e.session_id))}", expected "${z()}")`, {
    level: "warn"
  }), !1;
  return !0;
}
async function be(e, verifiedPeerPid, verifiedPeerProcStart, d, l) {
  let r = e.message?.content;
  if (typeof r !== "string" || r.length === 0) {
    t("[uds-messaging] Ignoring user message with missing or non-string content", {
      level: "warn"
    });
    return;
  }
  if (!Q(e)) return;
  let uuid = typeof e.uuid === "string" ? e.uuid : ue(),
    _ = PVt();
  if (_ !== void 0) {
    JUe("uds: dropped before attachment materialization", _), Sei({
      kind: "peer",
      from: e.from ?? "unknown",
      ...(verifiedPeerPid !== void 0 && {
        verifiedPeerPid: verifiedPeerPid
      }),
      ...(B0t(e.msg_id) && {
        msg_id: e.msg_id
      })
    }, "refused");
    return;
  }
  let priority = LMt(e.priority) ?? "next",
    content = Omi(r),
    plugin = uAe(e.from_plugin),
    E = await D3t({
      origin: {
        kind: "peer",
        ...(plugin !== void 0 && {
          plugin: plugin
        })
      },
      content: content
    });
  if (E.consumed !== void 0) return;
  using queueing = E.queueing;
  let a = typeof E.content === "string" ? E.content : content,
    value = a;
  if (e.file_attachments !== void 0 && WJe()) try {
    let {
        emitPeerFileReceiveTelemetry: emitPeerFileReceiveTelemetry,
        injectPeerFilePrefix: injectPeerFilePrefix,
        materializeLocalPeerFiles: materializeLocalPeerFiles
      } = await import("B:/~BUN/root/chunk-f2hd7z7s.js"),
      I = await materializeLocalPeerFiles(e.file_attachments);
    if (I.received > 0) value = injectPeerFilePrefix(a, I.prefix), emitPeerFileReceiveTelemetry("uds", I.received, I.verified);
  } catch (error) {
    t(`[uds-messaging] Failed to materialize file_attachments: ${Z9(String(error))}`, {
      level: "warn"
    });
  }
  let selfSent = await N(verifiedPeerPid, d, l),
    origin = mte({
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
      ...(B0t(e.msg_id) && {
        msg_id: e.msg_id
      }),
      ...(plugin !== void 0 && {
        plugin: plugin
      }),
      ...pAe(r)
    }, value, r),
    v = {
      mode: "prompt",
      agentId: st(),
      value: value,
      uuid: uuid,
      priority: priority,
      origin: origin,
      skipSlashCommands: !0,
      isMeta: !0,
      skipAttachments: !0
    };
  if (yyn(v) !== "accept") return;
  GT(v), queueing.queued(), t(`[uds-messaging] Routed user message to queue (priority=${priority}): ${q_(value, 80)}`), o().onEnqueue?.(), Z(v);
}
function Z(e) {
  let n = e.origin?.kind === "peer" ? e.origin : void 0,
    activeSocketPath = o().activeSocketPath;
  if (n !== void 0 && n.selfSent !== !0 && n.verifiedPeerPid !== void 0 && typeof n.from === "string" && activeSocketPath !== void 0 && D2r(n.from, activeSocketPath, n.verifiedPeerPid) !== void 0) Lfs(n.from, n.verifiedPeerPid, n.verifiedPeerProcStart);
}
function D2r(e, n, verifiedPeerPid_2) {
  if (!e.startsWith("uds:") || !RSe(e)) return;
  let target = iS(e).target;
  return target && JDs(target, n, {
    verifiedPeerPid: verifiedPeerPid_2,
    ownerUids: o().peerDirOwnerUids
  }) ? target : void 0;
}
async function B(e, pid, writeToken, d, l) {
  if (!L(e)) {
    t("[uds-messaging] Ignoring message without valid type field", {
      level: "warn"
    });
    return;
  }
  if (e.type === "user") await be(e, pid, writeToken, d, l);else if (e.type === "control") {
    if (!Q(e)) return;
    if (e.action === "rename" && typeof e.name === "string") o().onRename?.(e.name);else if (e.action === "peer_message_status" && (e.status === "held" || e.status === "denied" || e.status === "expired" || e.status === "delivered" || e.status === "refused" || e.status === "dropped")) {
      let status = e.status === "expired" && e.status_detail === "refused" ? "refused" : e.status,
        u = Vys(e.orig_msg_id, status);
      if (status === "dropped") {
        let dropReason = yHi(e.drop_reason),
          h = Kys(_e(e.dropped_msg_ids));
        if (u !== void 0) {
          let f = h.get(u.sent.to) ?? {
            sends: [],
            wereHeld: 0
          };
          if (f.sends.push(u.sent), u.wasHeld) f.wereHeld++;
          h.set(u.sent.to, f);
        }
        if (dropReason === "queue-full") for (let [f, {
          wereHeld: wereHeld
        }] of h) for (let E = 0; E < wereHeld; E++) Sfo(f);
        if (h.size === 0) t(`[uds-messaging] peer_message_status dropped: neither orig_msg_id=${X(e.orig_msg_id)} nor any named id matches an outstanding send`);
        for (let {
          sends: sends
        } of h.values()) o().onPeerMessageStatus?.({
          status: status,
          sends: sends,
          dropReason: dropReason
        });
      } else if (u === void 0) t(`[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${X(e.orig_msg_id)}`);else {
        if (status === "held") zys(u.sent.to);else if (status === "delivered" && u.wasHeld) Sfo(u.sent.to);
        o().onPeerMessageStatus?.({
          status: status,
          sent: u.sent
        });
      }
    } else if (e.action === "notify_when_idle") {
      let r = Zjo().safeParse(e);
      if (!r.success) {
        t("[uds-messaging] notify_when_idle dropped: malformed frame"), c("cross_session_notify_idle", "malformed_frame");
        return;
      }
      let activeSocketPath_2 = o().activeSocketPath,
        _ = r.data.from,
        h = activeSocketPath_2 !== void 0 ? D2r(_, activeSocketPath_2, pid) : void 0;
      if (activeSocketPath_2 === void 0) t("[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)"), c("cross_session_notify_idle", "own_inbox_unbound");else if (h === void 0) t(`[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${q_(_)})`), c("cross_session_notify_idle", "unvettable_reply_target");else if (TO(h) === TO(activeSocketPath_2)) t("[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)"), c("cross_session_notify_idle", "self_target_frame");else {
        let f = await N(pid, d, l),
          p = tWo(_, h, r.data.msg_id, pid, writeToken, l === "peer", j(r.data.from_mode), f);
        if (t(`[uds-messaging] notify_when_idle from ${q_(_)}: ${p}`), p === "full") JXn(h, r.data.msg_id, pid, l === "peer", writeToken);
      }
    } else if (e.action === "peer_idle_notice") {
      let r = eWo().safeParse(e);
      if (!r.success) {
        t("[uds-messaging] peer_idle_notice dropped: malformed frame"), c("cross_session_notify_idle", "malformed_notice");
        return;
      }
      if (!uyn(r.data.orig_msg_id)) {
        t("[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)");
        return;
      }
      let u = await N(pid, d, l);
      if (!rWo(r.data.orig_msg_id, r.data.state, r.data.finished_at, r.data.detail, j(r.data.from_mode), u)) t(`[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${q_(r.data.orig_msg_id)} was already consumed`);
    } else if (e.action === "yield_artifact_replies") {
      let r = Bsi().safeParse(e);
      if (!r.success) {
        t("[uds-messaging] yield_artifact_replies dropped: malformed frame"), c("artifact_comments_autoreact", "yield_malformed_frame");
        return;
      }
      let activeSocketPath_3 = o().activeSocketPath,
        _ = activeSocketPath_3 !== void 0 ? D2r(r.data.from, activeSocketPath_3, pid) : void 0;
      if (activeSocketPath_3 === void 0 || _ === void 0) {
        t(`[uds-messaging] yield_artifact_replies dropped: ${activeSocketPath_3 === void 0 ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${q_(r.data.from)})`), c("artifact_comments_autoreact", "yield_unvettable_target");
        return;
      }
      if (TO(_) === TO(activeSocketPath_3)) {
        t("[uds-messaging] yield_artifact_replies dropped: reply target is this session");
        return;
      }
      let h = await _0n(_);
      if (h === void 0 || h.sessionId !== z() || pid !== void 0 && h.pid !== pid) {
        t(`[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${q_(r.data.from)})`), c("artifact_comments_autoreact", "yield_requester_unverified"), BKo(r.data, _, pid === void 0 ? void 0 : {
          pid: pid,
          writeToken: writeToken
        }, Date.now(), {
          refuse: !0
        });
        return;
      }
      BKo(r.data, _, {
        pid: pid ?? h.pid,
        procStart: pid === void 0 || pid === h.pid ? h.procStart : void 0,
        writeToken: writeToken
      }, Date.now());
    } else if (e.action === "unyield_artifact_replies") {
      let r = Wsi().safeParse(e);
      if (!r.success || !Jsi(r.data, pid)) t("[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back");
    } else if (e.action === "artifact_replies_yielded") {
      let r = jsi().safeParse(e);
      if (!r.success) {
        t("[uds-messaging] artifact_replies_yielded dropped: malformed frame"), c("artifact_live_subscribe", "yield_malformed_answer");
        return;
      }
      if (!Ksi(r.data.orig_msg_id)) {
        t("[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled");
        return;
      }
      qsi(r.data, pid);
    } else t(`[uds-messaging] Unhandled control action: ${q_(String(e.action))}`);
  } else t(`[uds-messaging] Received unhandled message type: ${q_(e.type)}`);
}
function Se(e, n, s, d, l) {
  if (L(e) && (e.type === "control" && e.action !== "notify_when_idle" || e.type === "user" && e.priority === "now" && e.file_attachments === void 0)) {
    B(e, n, s, d, l).catch(r => {
      t(`[uds-messaging] Failed to process message: ${r}`, {
        level: "warn"
      });
    });
    return;
  }
  o().processingChain = o().processingChain.then(() => B(e, n, s, d, l)).catch(r => {
    t(`[uds-messaging] Failed to process message: ${r}`, {
      level: "warn"
    });
  });
}
var ke = 3000;
function Ee(e = 3000) {
  return Promise.race([o().processingChain, J(e, void 0, {
    unref: !0
  })]);
}
function ve(e) {
  e.setEncoding("utf8");
  let firstLineDeadlineMs = o().firstLineDeadlineMs,
    s = setTimeout(() => {
      s = void 0;
      try {
        if (t(`[uds-messaging] Closing a connection that sent no complete line within ${firstLineDeadlineMs} ms`), !o().silentDropReported) o().silentDropReported = !0, c("cross_session_inbox_auth", "silent_connection_deadline");
        e.destroy();
      } catch (error) {
        t(`[uds-messaging] Failed to close a silent connection: ${error}`, {
          level: "warn"
        });
      }
    }, firstLineDeadlineMs);
  s.unref();
  let d = () => {
    if (s !== void 0) clearTimeout(s), s = void 0;
  };
  e.once("close", d), e.once("error", d);
  let l,
    r,
    u = !1,
    _,
    h,
    f = process.pid !== 1 && yWo();
  if (f) {
    let pid_2 = k0t(e),
      token = pid_2 !== void 0 ? kUt(pid_2) : void 0;
    if (pid_2 !== void 0 && token !== void 0) h = {
      pid: pid_2,
      token: token
    };
  }
  let p = "",
    E,
    S = !1,
    a = w => {
      if (t(`[uds-messaging] Dropped ${w} from a connection that did not authenticate; closing it`, {
        level: "warn"
      }), !o().authDropReported) o().authDropReported = !0, m("cross_session_inbox_auth", "unauthed_drop");
      e.destroy();
    },
    y = w => {
      let v = !S;
      if (S = !0, SXi(w)) {
        if (v) {
          if (E = wXi(w.token, o().activeTokens), E !== void 0 && !o().authOkReported) o().authOkReported = !0, g("cross_session_inbox_auth");
          if (E === void 0 && o().authRequired) a("a bad auth frame");
        }
        return;
      }
      if (o().authRequired && E === void 0) {
        a(L(w) ? `a '${q_(w.type)}' line` : "a line");
        return;
      }
      if (!u) {
        if (l = k0t(e), r = l === void 0 ? void 0 : h !== void 0 ? h.pid === l ? h.token : void 0 : kUt(l), u = !0, l !== void 0 && f) _ = h !== void 0 && h.pid === l && kUt(l) === h.token ? WDs(l) : void 0;
      }
      Se(w, l, r, _, E);
    },
    b = w => {
      try {
        y(w);
      } catch (error) {
        t(`[uds-messaging] Failed to handle line: ${error}`, {
          level: "warn"
        });
      }
    };
  e.on("data", w => {
    if (p += w, p.length > h0n) {
      t(`[uds-messaging] Line exceeded ${h0n} chars; dropping connection`, {
        level: "warn"
      }), e.destroy(), p = "";
      return;
    }
    let v;
    while ((v = p.indexOf(`
`)) !== -1) {
      let D = p.slice(0, v);
      if (p = p.slice(v + 1), d(), !D.trim()) {
        if (o().authRequired && E === void 0) {
          S = !0, a("a blank line"), p = "";
          return;
        }
        continue;
      }
      let A;
      try {
        A = ds(D);
      } catch {
        if (t(`[uds-messaging] Failed to parse JSON line: ${Z9(D)}`, {
          level: "warn"
        }), o().authRequired && E === void 0) {
          S = !0, a("an unparseable line"), p = "";
          return;
        }
        continue;
      }
      if (b(A), e.destroyed) {
        p = "";
        return;
      }
    }
  }), e.on("end", () => {
    if (p.trim() && !e.destroyed) {
      let w,
        v = !1;
      try {
        w = ds(p), v = !0;
      } catch {
        if (t(`[uds-messaging] Failed to parse final buffer: ${Z9(p)}`, {
          level: "warn"
        }), o().authRequired && E === void 0) a("an unparseable final fragment");
      }
      if (v) b(w);
    }
    e.end();
  }), e.on("error", w => {
    t(`[uds-messaging] Connection error: ${w.message}`, {
      level: "warn"
    });
  });
}
function Qha() {
  return o().activeSocketPath;
}
var F = 103;
function Xsa() {
  return `\\\\.\\pipe\\${CTo}\\${TTo}${de(16).toString("hex")}`;
}
function Jsa(e = process.getuid?.() ?? 0) {
  let n = i.TERMUX_VERSION ? i.PREFIX : void 0,
    s = n ? M(n, "tmp") : "/tmp";
  return M(s, `cc-socks-${e}`, `${process.pid}.sock`);
}
async function C(e, n, s, {
  settleHeld = !0
} = {}) {
  for (let _ of o().connectedClients) _.destroy();
  if (o().connectedClients.clear(), e.close(), settleHeld) iWo();
  let l = settleHeld ? myn() : void 0;
  await Ee();
  let r = settleHeld ? we(HVr("exited"), ke) : void 0;
  if (await l, await r, settleHeld) await Zis();
  try {
    await Y(n);
  } catch {}
  let u = o();
  if (u.activeKeyFile !== void 0) await yXi(u.activeKeyFile, s), u.activeKeyFile = void 0;
  T();
}
function T() {
  o().activeSocketPath = void 0, o().activeTokens = void 0, delete process.env.CLAUDE_CODE_MESSAGING_SOCKET, mP.unset("CLAUDE_CODE_MESSAGING_TOKEN"), Uys(void 0), pWo(null), mWo(null), BVr(null), UKo(null), WVr(null), mA().senderMode = null;
}
function De(e, n, s, d) {
  return async () => {
    await C(e, n, s), d();
  };
}
function $e(path) {
  return new Promise(n => {
    let s = new fe(),
      d = l => {
        s.destroy(), n(l);
      };
    s.on("connect", () => d("live")), s.on("error", () => d("dead")), s.setTimeout(250, () => d("dead")), s.connect({
      path: path
    });
  });
}
function Re(e, n) {
  return new Promise((s, d) => {
    function l(r) {
      if (k(r) === "EADDRINUSE") s(!1);else d(r);
    }
    e.once("error", l), e.listen(n, () => {
      e.removeListener("error", l), s(!0);
    });
  });
}
function Zha(e, n, s = {}) {
  return Zsa(e ?? Xsa(), n, {
    isExplicit: e !== void 0,
    profileStartup: s.profileStartup
  });
}
function R() {
  mP.unset("CLAUDE_CODE_MESSAGING_SOCKET"), mP.unset("CLAUDE_CODE_MESSAGING_TOKEN");
}
var ee = "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.",
  Gn = `A component of the sockets path is not a directory (a regular file is in the way). ${ee}`,
  Vn = `The sockets path runs through a symlink loop. ${ee}`;
async function Qsa(e) {
  if (!ge(e)) throw new F_(e === "" ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path." : `--messaging-socket-path must be an absolute path, got: ${e}`);
  if (lpe(e) === void 0) throw new F_(`--messaging-socket-path on Windows must be a named-pipe path like \\\\.\\pipe\\<name>, got: ${e}`);
  return e;
}
async function Zsa(e, n, s = {}) {
  o().startInFlight = !0;
  try {
    return await Ce(e, n, s);
  } finally {
    o().startInFlight = !1;
  }
}
async function Ce(e, storageV5, s = {}) {
  let l = s.profileStartup ? performance.now() : void 0,
    r = f => {
      if (l === void 0) return;
      let p = performance.now();
      qr(f, p - l, l), l = p;
    };
  if (o().lastStartFailureCause = "bind_failed", o().lastStartDegradedCause = void 0, !nj(e)) {
    if (t(`[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`, {
      level: "error"
    }), R(), o().lastStartFailureCause = "path_refused", s.isExplicit) throw new F_(`--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`);
    return;
  }
  if (s.isExplicit, s.isExplicit) {
    if (e = await Qsa(e), (await $e(e)) === "live") throw new F_(`--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`);
  }
  if (s.isExplicit) try {
    await Y(e);
  } catch {}
  if (o().activeSocketPath = e, s.profileStartup) Uo("uds_inbox_dir_ready");
  r("setup_uds_dir_ms");
  let u, _;
  try {
    u = le({
      allowHalfOpen: !0
    }, f => {
      o().connectedClients.add(f), t("[uds-messaging] Client connected"), ve(f), f.on("close", () => {
        o().connectedClients.delete(f), t("[uds-messaging] Client disconnected");
      });
    });
  } catch (error) {
    T(), t(`[uds-messaging] Failed to create server: ${String(error)}`, {
      level: "error"
    }), R();
    return;
  }
  u.on("error", f => {
    t(`[uds-messaging] Server error: ${f.message}`, {
      level: "error"
    });
  }), o().authRequired = s.requireAuth ?? aDr(), o().firstLineDeadlineMs = s.firstLineDeadlineMs ?? L2r;
  let h = hXi();
  o().activeTokens = h;
  try {
    if (s.isExplicit, !(await Re(u, e))) throw Error("listen EADDRINUSE on the requested socket path");
    if (s.profileStartup) Uo("uds_inbox_listening");
    r("setup_uds_listen_ms"), u.unref();
    let f = vt(async () => {
      t("[uds-messaging] Shutting down"), await C(u, e, storageV5);
    });
    _ = f;
    try {
      o().activeKeyFile = await gXi(e, h.peerToken, storageV5, {
        sweepPermitted: await iet()
      }), Ue();
    } catch (error) {
      if (o().authRequired) {
        if (t(`[uds-messaging] Failed to publish the inbox auth key (refusing to run an inbox no peer can authenticate to): ${error}`, {
          level: "error"
        }), o().lastStartFailureCause = "key_publish_failed", await C(u, e, storageV5, {
          settleHeld: !1
        }), f(), R(), s.isExplicit) throw new F_(`--messaging-socket-path: bound ${e} but could not publish its auth key (${k(error) ?? error}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`);
        return;
      }
      t(`[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${error}`, {
        level: "warn"
      }), ye("key_publish_failed");
    }
    if (s.profileStartup) Uo("uds_inbox_key_published");
    r("setup_uds_publish_ms"), process.env.CLAUDE_CODE_MESSAGING_SOCKET = e, mP.set("CLAUDE_CODE_MESSAGING_TOKEN", h.childToken), Uys(vJ(e));
    let p = vJ(e);
    mWo(Z), mA().senderMode = N7s, BVr((S, a, expectPeerPid, b, expectPeerProcStart) => vJe(S, {
      action: "peer_idle_notice",
      ...a,
      from: p,
      ...(b ? Ie() : {})
    }, {
      ...(expectPeerPid !== void 0 && {
        expectPeerPid: expectPeerPid
      }),
      ...(expectPeerProcStart !== void 0 && {
        expectPeerProcStart: expectPeerProcStart
      }),
      storageV5: storageV5
    })), UKo((S, a, expectPeerPid_2, expectPeerProcStart_2) => vJe(S, {
      action: "artifact_replies_yielded",
      ...a,
      from: p
    }, {
      ...(expectPeerPid_2 !== void 0 && {
        expectPeerPid: expectPeerPid_2
      }),
      ...(expectPeerProcStart_2 !== void 0 && {
        expectPeerProcStart: expectPeerProcStart_2
      }),
      storageV5: storageV5
    }), p), WVr(S => qys(S)), pWo((S, status_2, y) => {
      let b = S.origin?.kind === "peer" ? S.origin : void 0,
        w = b?.from;
      if (typeof w !== "string") return;
      let v = D2r(w, e, b?.verifiedPeerPid);
      if (v === void 0) {
        t(`[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${q_(w)})`);
        return;
      }
      return vJe(v, {
        action: "peer_message_status",
        ...(status_2 === "refused" ? {
          status: "expired",
          status_detail: "refused"
        } : {
          status: status_2
        }),
        reason: Ae(status_2),
        from: p,
        ...(typeof b?.msg_id === "string" && {
          orig_msg_id: b.msg_id
        }),
        ...(status_2 === "dropped" && y !== void 0 && {
          drop_reason: y.dropReason,
          dropped_msg_ids: y.droppedMsgIds
        })
      }, {
        ...(b?.verifiedPeerPid !== void 0 && {
          expectPeerPid: b.verifiedPeerPid
        }),
        ...(b?.verifiedPeerProcStart !== void 0 && {
          expectPeerProcStart: b.verifiedPeerProcStart
        }),
        storageV5: storageV5
      }).catch(D => t(`[uds-messaging] hold-receipt send failed to ${q_(w)}: ${Z9(String(D))}`));
    }), t(`[uds-messaging] Listening: ${e}`, {
      level: "info"
    }), t(`[uds-messaging] Inject messages (auth line REQUIRED here; a pipe is not reachable via socat/AF_UNIX): node -e "const c=require('net').connect(process.argv[1],()=>{c.write(JSON.stringify({type:'auth',token:process.env.CLAUDE_CODE_MESSAGING_TOKEN})+'\\n'+JSON.stringify({type:'user',message:{role:'user',content:'hello'}})+'\\n');c.end()})" "${e}"`);
    let E = "nc -N -U";
    return t(`[uds-messaging] Connect when the data is ready (run the command first, then connect and write its output as ONE line, as in the node recipe above): a connection that sends no complete line within ${o().firstLineDeadlineMs} ms is closed`), o().lastStartFailureCause = void 0, De(u, e, storageV5, f);
  } catch (error) {
    if (error instanceof F_) throw error;
    if (s.isExplicit) {
      let p = k(error);
      if (_ !== void 0) throw await C(u, e, storageV5, {
        settleHeld: !1
      }), _(), R(), o().lastStartFailureCause = "post_bind_setup_failed", new F_(`--messaging-socket-path: bound ${e} but could not finish setting the socket up (${p ?? String(error)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`);
      T(), R();
      let E = p === "EACCES" || p === "EADDRINUSE" || p === "EPERM" ? "another process owns this pipe name; choose a different \\\\.\\pipe\\<name>" : "the named pipe could not be created";
      throw new F_(`--messaging-socket-path: cannot bind at ${e} (${p ?? String(error)}): ${E}.`);
    }
    if (_ !== void 0) await C(u, e, storageV5, {
      settleHeld: !1
    }), _(), o().lastStartFailureCause = "post_bind_setup_failed";
    if (k(error) === "ENAMETOOLONG") t(`[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`, {
      level: "error"
    });else t(`[uds-messaging] Failed to start: ${error}`, {
      level: "error"
    });
    T(), R();
    return;
  }
}
function Ae(e) {
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
function Ie() {
  let from_mode = N7s();
  return from_mode === void 0 ? {} : {
    from_mode: from_mode
  };
}
function N7s() {
  if (!CVt()) return;
  let getCurrentMode = Ni().inbound.getCurrentMode;
  if (getCurrentMode) try {
    return AVt(getCurrentMode());
  } catch {
    return;
  }
  let modeAtUnwire = Ni().inbound.modeAtUnwire;
  return modeAtUnwire !== void 0 ? AVt(modeAtUnwire) : void 0;
}
function j(e) {
  return xXi(e) ? e : void 0;
}
function N(verifiedPeerPid_3, selfSentAncestry, s) {
  return G({
    selfSentAncestry: selfSentAncestry,
    verifiedPeerPid: verifiedPeerPid_3,
    childTokenPresented: s === "child",
    needsVerdict: yWo(),
    platform: x()
  });
}
function Ue() {
  if (!process.listeners("exit").includes(F7s)) process.on("exit", F7s);
}
function F7s() {
  try {
    let activeKeyFile = o().activeKeyFile;
    if (activeKeyFile === void 0) return;
    ce(activeKeyFile);
  } catch {}
}
export { qha, Yha, O2r, I2r, Xha, M2r, Jha, D2r, Qha, Xsa, Jsa, Zha, Qsa, Zsa, N7s, F7s };