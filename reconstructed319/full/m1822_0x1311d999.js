// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  eUr,
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  RM,
  z,
  gS
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  St
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  oc
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  t,
  ee,
  ds,
  Iwe
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Tm,
  gu,
  Ife,
  Rt,
  oH,
  Xk,
  ms,
  pn,
  Vy
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Hqe,
  vae
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  Er
} from "B:/~BUN/root/chunk-pc24rkga.js";
import {
  hs
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  fbs
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  wE,
  xd
} from "B:/~BUN/root/chunk-f0zgv0ya.js";
import {
  Lx,
  AF,
  QZ
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  Hlt,
  uar,
  UEn,
  S6t,
  BEn
} from "B:/~BUN/root/chunk-rmqqhv88.js";
import {
  mQe
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  Y8,
  Hhi,
  mxt,
  fje,
  Uki,
  Bki,
  Ma,
  tu,
  T6,
  mDe,
  Lct,
  Wss,
  JOt,
  jde,
  ji,
  k9t,
  Nk,
  $ct,
  lZ,
  Ie,
  Hg,
  soe
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  dh
} from "B:/~BUN/root/chunk-rc0vwsyy.js";
import {
  uO
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  Es
} from "B:/~BUN/root/chunk-jmt91fq8.js";
import {
  _Ue
} from "B:/~BUN/root/chunk-arzyzazz.js";
import {
  Vp,
  Rx,
  wb
} from "B:/~BUN/root/chunk-1b2nf93s.js";
import {
  xce
} from "B:/~BUN/root/chunk-pgf3n8rv.js";
import {
  mz
} from "B:/~BUN/root/chunk-j0enspnr.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  basename as ne,
  dirname as Ge,
  isAbsolute as Xe,
  resolve as Ye
} from "path";

function V(e, n) {
  if (!e?.accountUuid) return "owner_unknown";
  if (!n?.accountUuid) return "identity_unreadable";
  return gu(n, e) ? "match" : "mismatch"
}
var ce = "cse_move",
  fe = new Set(["file", "directory", "compact_file_reference", "at_mention_reference", "pdf_reference", "mcp_resource", "agent_mention", "selected_lines_in_ide", "selected_lines_in_diff", "opened_file_in_ide", "edited_text_file", "edited_image_file", "queued_command", "hook_additional_context", "hook_success", "async_hook_response", "nested_memory", "plan_file_reference", "inlined_image_paths"]),
  X = new Map([
    [Hlt, "[account memory left out of this copy of the conversation; it stayed on the computer where the conversation ran]"],
    [uar, "[tool result left out of this copy of the conversation; it stayed on the computer where the conversation ran]"],
    [UEn, "[message content left out of this copy of the conversation; it stayed on the computer where the conversation ran]"]
  ]);

function Y(e, n) {
  let s = Es([...e]),
    f = s.filter((o) => o.type === "user" || o.type === "assistant" || RM(o)),
    l = f.map((o) => RM(o) ? Ie({
      content: o.content,
      uuid: o.uuid,
      timestamp: o.timestamp,
      isMeta: !0
    }) : o),
    g = new Set(f.flatMap((o, w) => k9t({
      uuid: o.uuid,
      foreignToBridgeSession: "foreignToBridgeSession" in o && typeof o.foreignToBridgeSession === "string" ? o.foreignToBridgeSession : void 0
    }, ce) ? [l[w].uuid] : []));
  n.note(e);
  let h = n.redact(l, "transcript");
  return {
    messages: h.filter((o) => !g.has(o.uuid)).map((o) => q(le(o))),
    attachmentRowsLeftBehind: U(s, (o) => {
      if (o.type !== "attachment" || !fe.has(String(o.attachment?.type))) return !1;
      try {
        return soe(o.attachment).length > 0
      } catch (w) {
        return t(`[conversation-export] could not render a ${String(o.attachment?.type)} attachment, so it counts as left behind: ${d(w)}`), !0
      }
    }),
    subagentsSkipped: new Set(l.flatMap((o) => o.type === "user" && D(o.toolUseResult) && typeof o.toolUseResult.agentId === "string" ? [o.toolUseResult.agentId] : [])).size,
    summaryWithheld: h.some((o) => o.type === "user" && o.isCompactSummary === !0 && X.has(Hg(o) ?? ""))
  }
}

function le(e) {
  if (e.type !== "user" || e.isCompactSummary !== !0) return e;
  let {
    content: n
  } = e.message, {
    modelOnlyText: s,
    ...f
  } = e;
  return typeof n === "string" ? {
    ...f,
    message: {
      ...e.message,
      content: Bki(n, s)
    }
  } : e
}

function q(e) {
  if (typeof e === "string") return oc(X.get(e) ?? e);
  if (Array.isArray(e)) return e.map(q);
  if (D(e)) return Er(uO(e, (n, s) => oc(s)), q);
  return e
}
var me = "tengu_woolly_blanket",
  te = 3,
  oe = ["zdr", "ldr", "hipaa"];

function hsa() {
  return Lx() && !St() && !AF() && !oe.some(hs)
}

function P1r() {
  let e = pn(me, !1);
  return e.value === !0 && Vy(e.source)
}
async function O1r() {
  if (await ms().catch(() => null), !P1r() || !hsa()) return !1;
  if (await dh(), xd("allow_remote_sessions") === "cache_miss") await QZ();
  return !ye()
}
async function I1r(e, n) {
  if (!eUr(e.localSessionId)) return u("check_incomplete");
  let s = z(),
    f = {
      accountUuid: e.account.accountUuid.toLowerCase(),
      organizationUuid: e.account.organizationUuid.toLowerCase()
    };
  if (n.turnBlocked()) return u("turn_running");
  if (!await O1r()) return u("policy");
  if (!Rt()) return u("not_signed_in");
  let l = await Xk(n.credentials).catch((a) => {
    if (a instanceof oH) return;
    throw a
  });
  if (l === void 0 || l.profile) return u("not_signed_in");
  let g = await ge(n);
  if (g === "no_login") return u("not_signed_in");
  let h = V(f, g === "unreadable" ? void 0 : g);
  if (h !== "match") return u(h === "mismatch" ? "account_mismatch" : "check_incomplete");
  if (l.orgUUID.toLowerCase() !== f.organizationUuid) return u("account_mismatch");
  if (Ma()) return u("transcript_not_saved");
  await tu();
  let o = await lZ(e.localSessionId, void 0, n.storageV5);
  if (o === null || o.fullPath === void 0) return u("nothing_to_move");
  if (n.turnBlocked()) return u("turn_running");
  let w = ji(e.localSessionId);
  if (o.sessionHistorySuppressed === !0) return u("conversation_marked");
  if (xce(o) === !0) return u("ended_by_claude");
  let M = Z(w, o);
  if (M !== void 0) return u(M);
  let m = await re(o.fullPath, n.storageV5, te).catch(() => "unread");
  if (m === "history-gone") return u("history_gone");
  if (m === "unread" || m === "budget-exhausted") return u("check_incomplete");
  if (m.suppressed) return u("conversation_marked");
  if (m.thirdParty) return u("third_party_turns");
  if (o.bridgeNoHistoryBackfill === !0) return u("history_held_back");
  if (m.records.some((a) => a.noBackfill)) return u("source_history_held_back");
  if (m.locked && fbs()) return u("policy");
  let T = e.localSessionId === s ? gS() : void 0,
    R = [...m.agents, ...T ? [T] : []].find((a) => !n.agentLeavesNoLimits(a));
  if (R !== void 0) return {
    outcome: "refused",
    reason: "agent_not_carried",
    agent: R
  };
  let k = m.records.map((a) => V(a.owner, g === "unreadable" ? void 0 : g));
  if (k.includes("mismatch") || m.ledgerAccounts.some((a) => g === "unreadable" || a !== g.accountUuid) || m.requestOrganizations.some((a) => a !== l.orgUUID.toLowerCase())) return u("account_mismatch");
  if (m.records.some((a, S) => a.named && k[S] !== "match") || L(m.records.map((a) => a.transcript)).some((a) => !m.records.some((S, P) => S.transcript === a && k[P] === "match"))) return u("check_incomplete");
  let O = fje(o.messages),
    I = Y(O, S6t({
      mode: BEn,
      placeAccountMemoryTool: mz(() => n.tools),
      accountMemoryInPlay: () => _Ue(n.host),
      sendsCompactSummaries: !0
    }));
  if (!I.messages.some((a) => a.type === "user" || a.type === "assistant")) return u("nothing_to_move");
  if ((await Promise.all(m.ends.map(async (a) => ({
      read: a,
      now: await se(a.path, n.storageV5)
    })))).some(({
      read: a,
      now: S
    }) => S !== a.end)) return u("check_incomplete");
  if (n.turnBlocked()) return u("turn_running");
  if (z() !== s) return u("conversation_changed");
  let A = Z(w, o);
  if (A !== void 0) return u(A);
  return {
    outcome: "cleared",
    conversation: {
      ...I,
      historyHoldCleared: m.records.some((a) => a.holdCleared),
      privacyLabels: mQe(O, [], o.toolsUsed)
    }
  }
}

function pe(e) {
  return typeof e === "string" && e !== ""
}
async function re(e, n, s) {
  let f = Vp(e, n),
    l, g = await ie(f),
    h = f !== void 0 ? mxt(f.backend, f.key) : Iwe(e, Lct, {
      onOpen: (r) => {
        l = r
      }
    }),
    o = [],
    w = new Set,
    M = new Set,
    m = [],
    T = [],
    R = new Set,
    k = new Set,
    O = f !== void 0 ? mDe.forBackendRead() : new mDe,
    I, x = () => `${l??g}
${I}`,
    A = !1,
    a = !1,
    S = ne(e, ".jsonl"),
    P = [],
    J = new Set,
    b = [],
    N = !1,
    B = new Map;
  for await (let r of h) {
    if (I ??= r, r !== "" && (!r.startsWith("{") || !r.endsWith("}") || r.includes("\x00"))) throw Error("damaged transcript line");
    if (JOt(r)) return {
      ends: [{
        path: e,
        end: x()
      }],
      suppressed: !0,
      thirdParty: A,
      locked: a,
      records: o,
      ledgerAccounts: m,
      requestOrganizations: T,
      folders: [...M],
      agents: [...R],
      markers: P
    };
    let p = _e(r);
    if (p?.savedIn !== void 0) J.add(p.savedIn);
    N ||= p?.fetched === !0;
    let E = he(r, S);
    if (E !== void 0) {
      if (typeof E.uuid === "string") P.push(E.uuid);
      b = b.map((_) => _.kept?.has(E.uuid) ? {
        ..._,
        kept: void 0
      } : _), b.push({
        ...E,
        remote: E.remote || N,
        parentsBefore: B.size
      }), N = !1
    } else if (r.includes('"parentUuid"')) {
      let _ = ds(r);
      if (D(_) && _.parentUuid !== void 0) {
        let {
          uuid: y,
          parentUuid: v,
          remoteSourced: C
        } = _;
        if (b = typeof y === "string" ? b.filter(({
            kept: F,
            parentsBefore: de,
            remote: ue
          }) => F === void 0 || F.has(y) || (B.get(y) ?? 1 / 0) < de || ue && C !== !0) : b, !B.has(v)) B.set(v, B.size)
      }
    }
    let G = Y8(r),
      c = G || r.includes('"bridge-session"') || r.includes('"isolation-latch"') || r.includes('"artifact-autoreact-ledger"') || r.includes('"credential_org"') || r.includes('"forkedFrom"') || r.includes('"agent-setting"') || r.includes('"history-suppression"') ? ee(r) : void 0;
    if (D(c) && c.type === "artifact-autoreact-ledger") m.push(Q(c.accountUuid).toLowerCase());
    if (D(c) && D(c.attachment) && c.attachment.type === "credential_org") T.push(Q(c.attachment.organizationUuid).toLowerCase());
    if (D(c)) {
      if (A ||= G && Hhi(c), [c.cwd, c.relocatedCwd].filter(pe).forEach((v) => M.add(v)), a ||= c.type === "isolation-latch", c.type === "agent-setting" && typeof c.agentSetting === "string") R.add(c.agentSetting);
      let y = c.forkedFrom;
      if (y !== void 0) {
        if (!D(y) || typeof y.sessionId !== "string" || !vae(y.sessionId)) return "budget-exhausted";
        k.add(y.sessionId)
      }
    }
    if (D(c) && c.type === "bridge-session") {
      let _ = Boolean(c.noHistoryBackfill),
        y = w.has(c.sessionId),
        {
          ownerAccountUuid: v,
          ownerOrganizationUuid: C
        } = c,
        F = typeof v === "string" && vae(v) && (C === void 0 || typeof C === "string" && vae(C));
      if (o.push({
          transcript: e,
          owner: F ? {
            accountUuid: v.toLowerCase(),
            organizationUuid: typeof C === "string" ? C.toLowerCase() : void 0
          } : void 0,
          named: typeof c.bridgeSessionId === "string" && c.bridgeSessionId !== "",
          noBackfill: _ && !y,
          holdCleared: _ && y
        }), typeof c.sessionId === "string" && c.sessionId !== "") w.add(c.sessionId)
    }
    if (O.spend(r)) return "budget-exhausted"
  }
  let H = L([...k, ...b.length > 0 ? J : []]).filter((r) => r !== S);
  if (H.length > te || H.length > 0 && s === 0) return "budget-exhausted";
  let K = await Promise.all(H.map(async (r) => {
      let p = await Hqe(r, void 0, wb(Rx(n)));
      if (p === null) return k.has(r) ? "budget-exhausted" : "history-gone";
      return re(p, n, s - 1)
    })),
    j = l !== void 0 ? await Wss(e, {
      size: l,
      lastLine: I
    }, {}, O) : "clean";
  if (j === "budget-exhausted") return "budget-exhausted";
  if (j === "clean" && await se(e, n) !== x()) return "budget-exhausted";
  let W = K.reduce((r, p) => typeof r === "string" ? r : typeof p === "string" ? p : {
      ends: [...r.ends, ...p.ends],
      suppressed: r.suppressed || p.suppressed,
      thirdParty: r.thirdParty || p.thirdParty,
      locked: r.locked || p.locked,
      records: [...r.records, ...p.records],
      ledgerAccounts: [...r.ledgerAccounts, ...p.ledgerAccounts],
      requestOrganizations: [...r.requestOrganizations, ...p.requestOrganizations],
      folders: [...r.folders, ...p.folders],
      agents: [...r.agents, ...p.agents],
      markers: r.markers
    }, {
      ends: [{
        path: e,
        end: x()
      }],
      suppressed: j !== "clean",
      thirdParty: A,
      locked: a,
      records: o,
      ledgerAccounts: m,
      requestOrganizations: T,
      folders: [...M],
      agents: [...R],
      markers: P
    }),
    ae = new Set(K.flatMap((r) => typeof r === "string" ? [] : r.markers));
  return typeof W !== "string" && !W.suppressed && b.some(({
    uuid: r,
    namesSource: p
  }) => !p && !ae.has(r)) ? "history-gone" : W
}

function Z(e, n) {
  if (Ma()) return "transcript_not_saved";
  let s = gsa(e);
  if (s !== void 0) return s;
  return (n.isolationLatch !== void 0 || $ct() !== void 0) && fbs() ? "policy" : void 0
}

function Q(e) {
  if (typeof e !== "string") throw Error("unreadable transcript mark");
  return e
}
async function ie(e) {
  let n = await e?.backend.readRecords(e.key, {
    order: "backward",
    limit: 1
  });
  if (n?.ok === !1 && n.error.code !== "NotFound") throw Error("its saved transcript couldn't be read");
  let s = n?.ok === !0 ? n.value.items[0] : void 0;
  if (n?.ok === !0 && s === void 0 && n.value.nextSeq !== void 0) throw Error("its saved transcript couldn't be read");
  return s?.seq
}
async function se(e, n) {
  let s = Vp(e, n),
    f, l = await ie(s),
    g = s !== void 0 ? mxt(s.backend, s.key) : Iwe(e, Lct, {
      onOpen: (h) => {
        f = h
      }
    });
  for await (let h of g) return `${f??l}
${h}`;
  return `${f??l}
undefined`
}
async function ge(e) {
  let n = await Ife(e.storageV5, e.credentials).catch(() => {
      return
    }),
    s = await Tm(e.credentials).catch(() => {
      return
    });
  if (s === "env" || s === "fd") {
    let f = Nt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase(),
      l = Nt(i.CLAUDE_CODE_ORGANIZATION_UUID)?.toLowerCase();
    return f !== void 0 && l !== void 0 ? {
      accountUuid: f,
      organizationUuid: l
    } : "unreadable"
  }
  if (n === void 0) return "no_login";
  return s === "store" ? {
    accountUuid: n.accountUuid?.toLowerCase(),
    organizationUuid: n.organizationUuid?.toLowerCase()
  } : "unreadable"
}

function gsa(e) {
  if (!Nk(e)) return;
  return T6() || jde(e) ? "conversation_marked" : "history_held_back"
}

function ye() {
  return xd("allow_remote_sessions") !== null || wE() || oe.some(hs)
}

function u(e) {
  return {
    outcome: "refused",
    reason: e
  }
}

function he(e, n) {
  let s = e.includes('"compact_boundary"') ? ee(e) : void 0;
  if (!D(s) || s.type !== "system" || s.subtype !== "compact_boundary") return;
  let {
    forkedFrom: f,
    compactMetadata: l
  } = s, g = D(l) ? l.preservedMessages : null;
  return {
    uuid: s.uuid,
    remote: s.remoteSourced === !0,
    namesSource: D(f) && typeof f.sessionId === "string" && f.sessionId !== n,
    kept: D(g) && Array.isArray(g.uuids) ? new Set(g.uuids) : g === void 0 && D(l) && l.preservedSegment === void 0 ? new Set : void 0
  }
}

function _e(e) {
  let n = e.includes('"isCompactSummary":true') ? ee(e) : void 0;
  if (!D(n) || n.isCompactSummary !== !0 || !D(n.message)) return;
  let s = typeof n.message.content === "string" ? Uki(n.message.content) : void 0;
  return {
    savedIn: s === void 0 ? void 0 : ne(s, ".jsonl"),
    fetched: n.remoteSourced === !0
  }
}
export {
  hsa,
  P1r,
  O1r,
  I1r,
  gsa
};
