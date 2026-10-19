// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, K, Ze } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { nh, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { bt, jo, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { a, oC } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ayt, rFo, e5n, ad } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { W3n, r2s, ZC, o2s, s2s, l2s, d2s } from "B:/~BUN/root/chunk-e4q58xft.js";
import { Hf } from "B:/~BUN/root/chunk-wegca9zh.js";
import { yo } from "B:/~BUN/root/chunk-9kme2ye7.js";
import { vyt, h2s, u4, Dle, GWe, Lle, gy, ZN, ene, KNo, zFr, GFr } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { kWe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Mds } from "B:/~BUN/root/chunk-zg0dbxts.js";
import { Mit, fxt, SC, jbs } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { kr } from "B:/~BUN/root/chunk-t3p4x0tq.js";
import { ga } from "B:/~BUN/root/chunk-vqar0j99.js";
import { ph, fK, $pt, yrn, mMs, vEo, kEo, REo, jAr, AEo, xEo, Vfe, wrn, PEo } from "B:/~BUN/root/chunk-pwz0pnkt.js";
import { IE, Hyo } from "B:/~BUN/root/chunk-c8j3aby6.js";
import { Xkt, z5r, m7o, G5r, kqt, Qkt, K5r, Cqt, eEt, ZLe } from "B:/~BUN/root/chunk-7mwhj9vf.js";
import { jrs, Wrs, zrs, Krs, Yrs, AQr, xQr, Qrs } from "B:/~BUN/root/chunk-7qgtnbqd.js";
import { P5r, O5r, I5r, Esr, bqt, D5r, Rsr, xsr, F5r, gEn } from "B:/~BUN/root/chunk-8jgva2fx.js";
import { XBe } from "B:/~BUN/root/chunk-6xef02qz.js";
import { Sor, wkn, GVt } from "B:/~BUN/root/chunk-9bjzhc3j.js";
import { Qpt } from "B:/~BUN/root/chunk-nbprdt7j.js";
import { randomBytes as de, randomUUID as ue } from "crypto";
import { unlinkSync as ce } from "fs";
import { chmod as We, lstat as x, mkdir as W, readdir as Xe, readlink as Be, realpath as He, unlink as Q } from "fs/promises";
import { createServer as le, Socket as fe } from "net";
import { basename as me, dirname as T, isAbsolute as ge, join as M, normalize as pe, resolve as he } from "path";
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
      let i = this.verdicts.keys().next().value;
      if (i !== void 0) this.verdicts.delete(i);
    }
    this.verdicts.set(e, n);
  }
}
var se = new z(() => new q()),
  re = {
    readAncestors: async e => {
      let {
        ancestors: ancestors,
        readFailed: readFailed,
        truncated: truncated
      } = await e5n(e);
      if (truncated && !readFailed && !ancestors.includes(process.pid)) ({
        ancestors: ancestors,
        readFailed: readFailed,
        truncated: truncated
      } = await e5n(e, ie));
      if (!ancestors.includes(process.pid)) {
        if (readFailed) throw Error("ancestry walk failed");
        if (truncated) throw Error("ancestry walk truncated (maxDepth) above the prefix");
      }
      return ancestors;
    },
    readStartToken: e => ad(e, {
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
  let d = `${e}:${i}`,
    c = se.of(j().host),
    s = c.lookup(d);
  if (s !== void 0) return s ? "self" : "not-self";
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
  if (_ !== i) return "no-evidence";
  let h = process.pid !== 1 && u.includes(process.pid);
  return c.remember(d, h), h ? "self" : "not-self";
}
async function V(e) {
  let n = e.selfPid ?? process.pid;
  if (e.selfSentAncestry !== void 0 && n !== 1) return oe(e.selfSentAncestry, n);
  if (!e.needsVerdict) return !1;
  if (n === 1 || e.platform === "windows") return e.childTokenPresented;
  if (e.platform !== "macos") return !1;
  let i = await (e.verdictOf ?? ae)(e.verifiedPeerPid);
  return i === "self" || i === "no-evidence" && e.childTokenPresented;
}
function r() {
  return GVt.of(j().host);
}
function bti() {
  return r().lastStartFailureCause;
}
function Sti() {
  return r().lastStartDegradedCause;
}
function ye(e) {
  let n = r();
  if (e === "key_publish_failed" && n.lastStartDegradedCause === "primary_dir_refused_fell_back") return;
  n.lastStartDegradedCause = e;
}
function hor() {
  return wkn(r());
}
function L(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e)) return !1;
  return typeof e.type === "string";
}
function yor(e) {
  r().onRename = e;
}
function wti(e) {
  r().onEnableRemoteControl = e;
}
function X(e) {
  return Qpt(e) ? e : e === void 0 ? "(none)" : "(malformed)";
}
function _e(e) {
  if (!Array.isArray(e)) return [];
  let n = [];
  for (let i of e) {
    if (n.length >= vEo) break;
    if (Qpt(i)) n.push(i);
  }
  return n;
}
function _or(e) {
  r().onPeerMessageStatus = e;
}
function vti(e) {
  r().onEnqueue = e;
}
function J(e) {
  if (e.session_id !== void 0 && e.session_id !== K()) return t(`[uds-messaging] Dropping ${ph(e.type)} message: session_id mismatch (got "${ph(String(e.session_id))}", expected "${K()}")`, {
    level: "warn"
  }), !1;
  return !0;
}
async function we(e, verifiedPeerPid, verifiedPeerProcStart, d, c) {
  let s = e.message?.content;
  if (typeof s !== "string" || s.length === 0) {
    t("[uds-messaging] Ignoring user message with missing or non-string content", {
      level: "warn"
    });
    return;
  }
  if (!J(e)) return;
  let uuid = typeof e.uuid === "string" ? e.uuid : ue(),
    _ = eEt();
  if (_ !== void 0) {
    ZLe("uds: dropped before attachment materialization", _), m7o({
      kind: "peer",
      from: e.from ?? "unknown",
      ...(verifiedPeerPid !== void 0 && {
        verifiedPeerPid: verifiedPeerPid
      }),
      ...(Qpt(e.msg_id) && {
        msg_id: e.msg_id
      })
    }, "refused");
    return;
  }
  let priority = Mit(e.priority) ?? "next",
    content = Mds(s),
    plugin = vyt(e.from_plugin),
    E = await fxt({
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
  let o = typeof E.content === "string" ? E.content : content,
    value = o;
  if (e.file_attachments !== void 0 && XBe()) try {
    let {
        emitPeerFileReceiveTelemetry: emitPeerFileReceiveTelemetry,
        injectPeerFilePrefix: injectPeerFilePrefix,
        materializeLocalPeerFiles: materializeLocalPeerFiles
      } = await import("B:/~BUN/root/chunk-18vqx265.js"),
      U = await materializeLocalPeerFiles(e.file_attachments);
    if (U.received > 0) value = injectPeerFilePrefix(o, U.prefix), emitPeerFileReceiveTelemetry("uds", U.received, U.verified);
  } catch (error) {
    t(`[uds-messaging] Failed to materialize file_attachments: ${fK(String(error))}`, {
      level: "warn"
    });
  }
  let selfSent = await N(verifiedPeerPid, d, c),
    origin = Dle({
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
      ...(Qpt(e.msg_id) && {
        msg_id: e.msg_id
      }),
      ...(plugin !== void 0 && {
        plugin: plugin
      }),
      ...GWe(s)
    }, value, s),
    v = {
      mode: "prompt",
      agentId: Ze(),
      value: value,
      uuid: uuid,
      priority: priority,
      origin: origin,
      skipSlashCommands: !0,
      isMeta: !0,
      skipAttachments: !0
    };
  if (Cqt(v) !== "accept") return;
  SC(v), queueing.queued(), t(`[uds-messaging] Routed user message to queue (priority=${priority}): ${ph(value, 80)}`), r().onEnqueue?.(), Z(v);
}
function Z(e) {
  let n = e.origin?.kind === "peer" ? e.origin : void 0,
    activeSocketPath = r().activeSocketPath;
  if (n !== void 0 && n.selfSent !== !0 && n.verifiedPeerPid !== void 0 && typeof n.from === "string" && activeSocketPath !== void 0 && bor(n.from, activeSocketPath, n.verifiedPeerPid) !== void 0) Hyo(n.from, n.verifiedPeerPid, n.verifiedPeerProcStart);
}
function bor(e, n, verifiedPeerPid_2) {
  if (!e.startsWith("uds:") || !Lle(e)) return;
  let target = gy(e).target;
  return target && KNo(target, n, {
    verifiedPeerPid: verifiedPeerPid_2,
    ownerUids: r().peerDirOwnerUids
  }) ? target : void 0;
}
async function B(e, pid, writeToken, d, c) {
  if (!L(e)) {
    t("[uds-messaging] Ignoring message without valid type field", {
      level: "warn"
    });
    return;
  }
  if (e.type === "user") await we(e, pid, writeToken, d, c);else if (e.type === "control") {
    if (!J(e)) return;
    if (e.action === "rename" && typeof e.name === "string") r().onRename?.(e.name);else if (e.action === "peer_message_status" && (e.status === "held" || e.status === "denied" || e.status === "expired" || e.status === "delivered" || e.status === "refused" || e.status === "dropped")) {
      let status = e.status === "expired" && e.status_detail === "refused" ? "refused" : e.status,
        u = AEo(e.orig_msg_id, status);
      if (status === "dropped") {
        let dropReason = mMs(e.drop_reason),
          h = xEo(_e(e.dropped_msg_ids));
        if (u !== void 0) {
          let l = h.get(u.sent.to) ?? {
            sends: [],
            wereHeld: 0
          };
          if (l.sends.push(u.sent), u.wasHeld) l.wereHeld++;
          h.set(u.sent.to, l);
        }
        if (dropReason === "queue-full") for (let [l, {
          wereHeld: wereHeld
        }] of h) for (let E = 0; E < wereHeld; E++) jAr(l);
        if (h.size === 0) t(`[uds-messaging] peer_message_status dropped: neither orig_msg_id=${X(e.orig_msg_id)} nor any named id matches an outstanding send`);
        for (let {
          sends: sends
        } of h.values()) r().onPeerMessageStatus?.({
          status: status,
          sends: sends,
          dropReason: dropReason
        });
      } else if (u === void 0) t(`[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${X(e.orig_msg_id)}`);else {
        if (status === "held") REo(u.sent.to);else if (status === "delivered" && u.wasHeld) jAr(u.sent.to);
        r().onPeerMessageStatus?.({
          status: status,
          sent: u.sent
        });
      }
    } else if (e.action === "notify_when_idle") {
      let s = P5r().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] notify_when_idle dropped: malformed frame"), p("cross_session_notify_idle", "malformed_frame");
        return;
      }
      let activeSocketPath_2 = r().activeSocketPath,
        _ = s.data.from,
        h = activeSocketPath_2 !== void 0 ? bor(_, activeSocketPath_2, pid) : void 0;
      if (activeSocketPath_2 === void 0) t("[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)"), p("cross_session_notify_idle", "own_inbox_unbound");else if (h === void 0) t(`[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${ph(_)})`), p("cross_session_notify_idle", "unvettable_reply_target");else if (ZC(h) === ZC(activeSocketPath_2)) t("[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)"), p("cross_session_notify_idle", "self_target_frame");else {
        let l = await N(pid, d, c),
          f = I5r(_, h, s.data.msg_id, pid, writeToken, c === "peer", H(s.data.from_mode), l);
        if (t(`[uds-messaging] notify_when_idle from ${ph(_)}: ${f}`), f === "full") gEn(h, s.data.msg_id, pid, c === "peer", writeToken);
      }
    } else if (e.action === "peer_idle_notice") {
      let s = O5r().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] peer_idle_notice dropped: malformed frame"), p("cross_session_notify_idle", "malformed_notice");
        return;
      }
      if (!bqt(s.data.orig_msg_id)) {
        t("[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)");
        return;
      }
      let u = await N(pid, d, c);
      if (!D5r(s.data.orig_msg_id, s.data.state, s.data.finished_at, s.data.detail, H(s.data.from_mode), u)) t(`[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${ph(s.data.orig_msg_id)} was already consumed`);
    } else if (e.action === "yield_artifact_replies") {
      let s = jrs().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] yield_artifact_replies dropped: malformed frame"), p("artifact_comments_autoreact", "yield_malformed_frame");
        return;
      }
      let activeSocketPath_3 = r().activeSocketPath,
        _ = activeSocketPath_3 !== void 0 ? bor(s.data.from, activeSocketPath_3, pid) : void 0;
      if (activeSocketPath_3 === void 0 || _ === void 0) {
        t(`[uds-messaging] yield_artifact_replies dropped: ${activeSocketPath_3 === void 0 ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${ph(s.data.from)})`), p("artifact_comments_autoreact", "yield_unvettable_target");
        return;
      }
      if (ZC(_) === ZC(activeSocketPath_3)) {
        t("[uds-messaging] yield_artifact_replies dropped: reply target is this session");
        return;
      }
      let h = await wrn(_);
      if (h === void 0 || h.sessionId !== K() || pid !== void 0 && h.pid !== pid) {
        t(`[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${ph(s.data.from)})`), p("artifact_comments_autoreact", "yield_requester_unverified"), xQr(s.data, _, pid === void 0 ? void 0 : {
          pid: pid,
          writeToken: writeToken
        }, Date.now(), {
          refuse: !0
        });
        return;
      }
      xQr(s.data, _, {
        pid: pid ?? h.pid,
        procStart: pid === void 0 || pid === h.pid ? h.procStart : void 0,
        writeToken: writeToken
      }, Date.now());
    } else if (e.action === "unyield_artifact_replies") {
      let s = zrs().safeParse(e);
      if (!s.success || !Qrs(s.data, pid)) t("[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back");
    } else if (e.action === "artifact_replies_yielded") {
      let s = Wrs().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] artifact_replies_yielded dropped: malformed frame"), p("artifact_live_subscribe", "yield_malformed_answer");
        return;
      }
      if (!Krs(s.data.orig_msg_id)) {
        t("[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled");
        return;
      }
      Yrs(s.data, pid);
    } else t(`[uds-messaging] Unhandled control action: ${ph(String(e.action))}`);
  } else t(`[uds-messaging] Received unhandled message type: ${ph(e.type)}`);
}
function be(e, n, i, d, c) {
  if (L(e) && (e.type === "control" && e.action !== "notify_when_idle" || e.type === "user" && e.priority === "now" && e.file_attachments === void 0)) {
    B(e, n, i, d, c).catch(s => {
      t(`[uds-messaging] Failed to process message: ${s}`, {
        level: "warn"
      });
    });
    return;
  }
  r().processingChain = r().processingChain.then(() => B(e, n, i, d, c)).catch(s => {
    t(`[uds-messaging] Failed to process message: ${s}`, {
      level: "warn"
    });
  });
}
var Se = 3000;
function ke(e = 3000) {
  return Promise.race([r().processingChain, Y(e, void 0, {
    unref: !0
  })]);
}
function Ee(e) {
  e.setEncoding("utf8");
  let firstLineDeadlineMs = r().firstLineDeadlineMs,
    i = setTimeout(() => {
      i = void 0;
      try {
        if (t(`[uds-messaging] Closing a connection that sent no complete line within ${firstLineDeadlineMs} ms`), !r().silentDropReported) r().silentDropReported = !0, p("cross_session_inbox_auth", "silent_connection_deadline");
        e.destroy();
      } catch (error) {
        t(`[uds-messaging] Failed to close a silent connection: ${error}`, {
          level: "warn"
        });
      }
    }, firstLineDeadlineMs);
  i.unref();
  let d = () => {
    if (i !== void 0) clearTimeout(i), i = void 0;
  };
  e.once("close", d), e.once("error", d);
  let c,
    s,
    u = !1,
    _,
    h,
    l = process.pid !== 1 && K5r();
  if (l) {
    let pid_2 = $pt(e),
      token = pid_2 !== void 0 ? Ayt(pid_2) : void 0;
    if (pid_2 !== void 0 && token !== void 0) h = {
      pid: pid_2,
      token: token
    };
  }
  let f = "",
    E,
    S = !1,
    o = w => {
      if (t(`[uds-messaging] Dropped ${w} from a connection that did not authenticate; closing it`, {
        level: "warn"
      }), !r().authDropReported) r().authDropReported = !0, m("cross_session_inbox_auth", "unauthed_drop");
      e.destroy();
    },
    y = w => {
      let v = !S;
      if (S = !0, l2s(w)) {
        if (v) {
          if (E = d2s(w.token, r().activeTokens), E !== void 0 && !r().authOkReported) r().authOkReported = !0, g("cross_session_inbox_auth");
          if (E === void 0 && r().authRequired) o("a bad auth frame");
        }
        return;
      }
      if (r().authRequired && E === void 0) {
        o(L(w) ? `a '${ph(w.type)}' line` : "a line");
        return;
      }
      if (!u) {
        if (c = $pt(e), s = c === void 0 ? void 0 : h !== void 0 ? h.pid === c ? h.token : void 0 : Ayt(c), u = !0, c !== void 0 && l) _ = h !== void 0 && h.pid === c && Ayt(c) === h.token ? rFo(c) : void 0;
      }
      be(w, c, s, _, E);
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
    if (f += w, f.length > yrn) {
      t(`[uds-messaging] Line exceeded ${yrn} chars; dropping connection`, {
        level: "warn"
      }), e.destroy(), f = "";
      return;
    }
    let v;
    while ((v = f.indexOf(`
`)) !== -1) {
      let D = f.slice(0, v);
      if (f = f.slice(v + 1), d(), !D.trim()) {
        if (r().authRequired && E === void 0) {
          S = !0, o("a blank line"), f = "";
          return;
        }
        continue;
      }
      let A;
      try {
        A = jo(D);
      } catch {
        if (t(`[uds-messaging] Failed to parse JSON line: ${fK(D)}`, {
          level: "warn"
        }), r().authRequired && E === void 0) {
          S = !0, o("an unparseable line"), f = "";
          return;
        }
        continue;
      }
      if (b(A), e.destroyed) {
        f = "";
        return;
      }
    }
  }), e.on("end", () => {
    if (f.trim() && !e.destroyed) {
      let w,
        v = !1;
      try {
        w = jo(f), v = !0;
      } catch {
        if (t(`[uds-messaging] Failed to parse final buffer: ${fK(f)}`, {
          level: "warn"
        }), r().authRequired && E === void 0) o("an unparseable final fragment");
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
function kti() {
  return r().activeSocketPath;
}
var F = 103;
function D5s() {
  return `\\\\.\\pipe\\${GFr}\\${zFr}${de(16).toString("hex")}`;
}
function L5s(e = process.getuid?.() ?? 0) {
  let n = a.TERMUX_VERSION ? a.PREFIX : void 0,
    i = n ? M(n, "tmp") : "/tmp";
  return M(i, `cc-socks-${e}`, `${process.pid}.sock`);
}
async function C(e, n, i, {
  settleHeld = !0
} = {}) {
  for (let _ of r().connectedClients) _.destroy();
  if (r().connectedClients.clear(), e.close(), settleHeld) F5r();
  let c = settleHeld ? kqt() : void 0;
  await ke();
  let s = settleHeld ? je(Esr("exited"), Se) : void 0;
  if (await c, await s, settleHeld) await jbs();
  try {
    await Q(n);
  } catch {}
  let u = r();
  if (u.activeKeyFile !== void 0) await s2s(u.activeKeyFile, i), u.activeKeyFile = void 0;
  O();
}
function O() {
  r().activeSocketPath = void 0, r().activeTokens = void 0, delete process.env.CLAUDE_CODE_MESSAGING_SOCKET, oC.unset("CLAUDE_CODE_MESSAGING_TOKEN"), kEo(void 0), z5r(null), G5r(null), Rsr(null), AQr(null), xsr(null), IE().senderMode = null;
}
function ve(e, n, i, d) {
  return async () => {
    await C(e, n, i), d();
  };
}
function De(path) {
  return new Promise(n => {
    let i = new fe(),
      d = c => {
        i.destroy(), n(c);
      };
    i.on("connect", () => d("live")), i.on("error", () => d("dead")), i.setTimeout(250, () => d("dead")), i.connect({
      path: path
    });
  });
}
function $e(e, n) {
  return new Promise((i, d) => {
    function c(s) {
      if (k(s) === "EADDRINUSE") i(!1);else d(s);
    }
    e.once("error", c), e.listen(n, () => {
      e.removeListener("error", c), i(!0);
    });
  });
}
function Eti(e, n, i = {}) {
  return F5s(e ?? D5s(), n, {
    isExplicit: e !== void 0,
    profileStartup: i.profileStartup
  });
}
function R() {
  oC.unset("CLAUDE_CODE_MESSAGING_SOCKET"), oC.unset("CLAUDE_CODE_MESSAGING_TOKEN");
}
var ee = "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.",
  Vn = `A component of the sockets path is not a directory (a regular file is in the way). ${ee}`,
  Wn = `The sockets path runs through a symlink loop. ${ee}`;
async function N5s(e) {
  if (!ge(e)) throw new nh(e === "" ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path." : `--messaging-socket-path must be an absolute path, got: ${e}`);
  if (ene(e) === void 0) throw new nh(`--messaging-socket-path on Windows must be a named-pipe path like \\\\.\\pipe\\<name>, got: ${e}`);
  return e;
}
async function F5s(e, n, i = {}) {
  r().startInFlight = !0;
  try {
    return await Re(e, n, i);
  } finally {
    r().startInFlight = !1;
  }
}
async function Re(e, storageV5, i = {}) {
  let c = i.profileStartup ? performance.now() : void 0,
    s = l => {
      if (c === void 0) return;
      let f = performance.now();
      kr(l, f - c, c), c = f;
    };
  if (r().lastStartFailureCause = "bind_failed", r().lastStartDegradedCause = void 0, !ZN(e)) {
    if (t(`[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`, {
      level: "error"
    }), R(), r().lastStartFailureCause = "path_refused", i.isExplicit) throw new nh(`--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`);
    return;
  }
  if (i.isExplicit, i.isExplicit) {
    if (e = await N5s(e), (await De(e)) === "live") throw new nh(`--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`);
  }
  if (i.isExplicit) try {
    await Q(e);
  } catch {}
  if (r().activeSocketPath = e, i.profileStartup) yo("uds_inbox_dir_ready");
  s("setup_uds_dir_ms");
  let u, _;
  try {
    u = le({
      allowHalfOpen: !0
    }, l => {
      r().connectedClients.add(l), t("[uds-messaging] Client connected"), Ee(l), l.on("close", () => {
        r().connectedClients.delete(l), t("[uds-messaging] Client disconnected");
      });
    });
  } catch (error) {
    O(), t(`[uds-messaging] Failed to create server: ${String(error)}`, {
      level: "error"
    }), R();
    return;
  }
  u.on("error", l => {
    t(`[uds-messaging] Server error: ${l.message}`, {
      level: "error"
    });
  }), r().authRequired = i.requireAuth ?? W3n(), r().firstLineDeadlineMs = i.firstLineDeadlineMs ?? Sor;
  let h = r2s();
  r().activeTokens = h;
  try {
    if (i.isExplicit, !(await $e(u, e))) throw Error("listen EADDRINUSE on the requested socket path");
    if (i.profileStartup) yo("uds_inbox_listening");
    s("setup_uds_listen_ms"), u.unref();
    let l = bt(async () => {
      t("[uds-messaging] Shutting down"), await C(u, e, storageV5);
    });
    _ = l;
    try {
      r().activeKeyFile = await o2s(e, h.peerToken, storageV5, {
        sweepPermitted: await kWe()
      }), Ie();
    } catch (error) {
      if (r().authRequired) {
        if (t(`[uds-messaging] Failed to publish the inbox auth key (refusing to run an inbox no peer can authenticate to): ${error}`, {
          level: "error"
        }), r().lastStartFailureCause = "key_publish_failed", await C(u, e, storageV5, {
          settleHeld: !1
        }), l(), R(), i.isExplicit) throw new nh(`--messaging-socket-path: bound ${e} but could not publish its auth key (${k(error) ?? error}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`);
        return;
      }
      t(`[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${error}`, {
        level: "warn"
      }), ye("key_publish_failed");
    }
    if (i.profileStartup) yo("uds_inbox_key_published");
    s("setup_uds_publish_ms"), process.env.CLAUDE_CODE_MESSAGING_SOCKET = e, oC.set("CLAUDE_CODE_MESSAGING_TOKEN", h.childToken), kEo(u4(e));
    let f = u4(e);
    G5r(Z), IE().senderMode = EJo, Rsr((S, o, expectPeerPid, b, expectPeerProcStart) => Vfe(S, {
      action: "peer_idle_notice",
      ...o,
      from: f,
      ...(b ? Ae() : {})
    }, {
      ...(expectPeerPid !== void 0 && {
        expectPeerPid: expectPeerPid
      }),
      ...(expectPeerProcStart !== void 0 && {
        expectPeerProcStart: expectPeerProcStart
      }),
      storageV5: storageV5
    })), AQr((S, o, expectPeerPid_2, expectPeerProcStart_2) => Vfe(S, {
      action: "artifact_replies_yielded",
      ...o,
      from: f
    }, {
      ...(expectPeerPid_2 !== void 0 && {
        expectPeerPid: expectPeerPid_2
      }),
      ...(expectPeerProcStart_2 !== void 0 && {
        expectPeerProcStart: expectPeerProcStart_2
      }),
      storageV5: storageV5
    }), f), xsr(S => PEo(S)), z5r((S, status_2, y) => {
      let b = S.origin?.kind === "peer" ? S.origin : void 0,
        w = b?.from;
      if (typeof w !== "string") return;
      let v = bor(w, e, b?.verifiedPeerPid);
      if (v === void 0) {
        t(`[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${ph(w)})`);
        return;
      }
      return Vfe(v, {
        action: "peer_message_status",
        ...(status_2 === "refused" ? {
          status: "expired",
          status_detail: "refused"
        } : {
          status: status_2
        }),
        reason: Ce(status_2),
        from: f,
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
      }).catch(D => t(`[uds-messaging] hold-receipt send failed to ${ph(w)}: ${fK(String(D))}`));
    }), t(`[uds-messaging] Listening: ${e}`, {
      level: "info"
    }), t(`[uds-messaging] Inject messages (auth line REQUIRED here; a pipe is not reachable via socat/AF_UNIX): node -e "const c=require('net').connect(process.argv[1],()=>{c.write(JSON.stringify({type:'auth',token:process.env.CLAUDE_CODE_MESSAGING_TOKEN})+'\\n'+JSON.stringify({type:'user',message:{role:'user',content:'hello'}})+'\\n');c.end()})" "${e}"`, {
      level: "info"
    });
    let E = "nc -N -U";
    return t(`[uds-messaging] Connect when the data is ready (run the command first, then connect and write its output as ONE line, as in the node recipe above): a connection that sends no complete line within ${r().firstLineDeadlineMs} ms is closed`, {
      level: "info"
    }), r().lastStartFailureCause = void 0, ve(u, e, storageV5, l);
  } catch (error) {
    if (error instanceof nh) throw error;
    if (i.isExplicit) {
      let f = k(error);
      if (_ !== void 0) throw await C(u, e, storageV5, {
        settleHeld: !1
      }), _(), R(), r().lastStartFailureCause = "post_bind_setup_failed", new nh(`--messaging-socket-path: bound ${e} but could not finish setting the socket up (${f ?? String(error)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`);
      O(), R();
      let E = f === "EACCES" || f === "EADDRINUSE" || f === "EPERM" ? "another process owns this pipe name; choose a different \\\\.\\pipe\\<name>" : "the named pipe could not be created";
      throw new nh(`--messaging-socket-path: cannot bind at ${e} (${f ?? String(error)}): ${E}.`);
    }
    if (_ !== void 0) await C(u, e, storageV5, {
      settleHeld: !1
    }), _(), r().lastStartFailureCause = "post_bind_setup_failed";
    if (k(error) === "ENAMETOOLONG") t(`[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`, {
      level: "error"
    });else t(`[uds-messaging] Failed to start: ${error}`, {
      level: "error"
    });
    O(), R();
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
  let from_mode = EJo();
  return from_mode === void 0 ? {} : {
    from_mode: from_mode
  };
}
function EJo() {
  if (!Xkt()) return;
  let getCurrentMode = ga().inbound.getCurrentMode;
  if (getCurrentMode) try {
    return Qkt(getCurrentMode());
  } catch {
    return;
  }
  let modeAtUnwire = ga().inbound.modeAtUnwire;
  return modeAtUnwire !== void 0 ? Qkt(modeAtUnwire) : void 0;
}
function H(e) {
  return h2s(e) ? e : void 0;
}
function N(verifiedPeerPid_3, selfSentAncestry, i) {
  return V({
    selfSentAncestry: selfSentAncestry,
    verifiedPeerPid: verifiedPeerPid_3,
    childTokenPresented: i === "child",
    needsVerdict: K5r(),
    platform: I()
  });
}
function Ie() {
  if (!process.listeners("exit").includes(TJo)) process.on("exit", TJo);
}
function TJo() {
  try {
    let activeKeyFile = r().activeKeyFile;
    if (activeKeyFile === void 0) return;
    ce(activeKeyFile);
  } catch {}
}
export { bti, Sti, hor, yor, wti, _or, vti, bor, kti, D5s, L5s, Eti, N5s, F5s, EJo, TJo };