// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { eUr, Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { RM, z, gS } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { oc } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { t, ee, ds, Iwe } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Tm, gu, Ife, Rt, oH, Xk, ms, pn, Vy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Hqe, vae } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { fbs } from "B:/~BUN/root/chunk-yhafkw66.js";
import { wE, xd } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { Lx, AF, QZ } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { Hlt, uar, UEn, S6t, BEn as mode } from "B:/~BUN/root/chunk-rmqqhv88.js";
import { mQe } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { Y8, Hhi, mxt, fje, Uki, Bki, Ma, tu, T6, mDe, Lct, Wss, JOt, jde, ji, k9t, Nk, $ct, lZ, Ie, Hg, soe } from "B:/~BUN/root/chunk-27h4st9h.js";
import { dh } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { uO } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { Es } from "B:/~BUN/root/chunk-jmt91fq8.js";
import { _Ue } from "B:/~BUN/root/chunk-arzyzazz.js";
import { Vp, Rx, wb } from "B:/~BUN/root/chunk-1b2nf93s.js";
import { xce } from "B:/~BUN/root/chunk-pgf3n8rv.js";
import { mz } from "B:/~BUN/root/chunk-j0enspnr.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { basename as ne, dirname as Ge, isAbsolute as Xe, resolve as Ye } from "path";
function V(e, n) {
  if (!e?.accountUuid) return "owner_unknown";
  if (!n?.accountUuid) return "identity_unreadable";
  return gu(n, e) ? "match" : "mismatch";
}
var ce = "cse_move",
  fe = new Set(["file", "directory", "compact_file_reference", "at_mention_reference", "pdf_reference", "mcp_resource", "agent_mention", "selected_lines_in_ide", "selected_lines_in_diff", "opened_file_in_ide", "edited_text_file", "edited_image_file", "queued_command", "hook_additional_context", "hook_success", "async_hook_response", "nested_memory", "plan_file_reference", "inlined_image_paths"]),
  X = new Map([[Hlt, "[account memory left out of this copy of the conversation; it stayed on the computer where the conversation ran]"], [uar, "[tool result left out of this copy of the conversation; it stayed on the computer where the conversation ran]"], [UEn, "[message content left out of this copy of the conversation; it stayed on the computer where the conversation ran]"]]);
function Y(e, n) {
  let s = Es([...e]),
    f = s.filter(item => item.type === "user" || item.type === "assistant" || RM(item)),
    l = f.map(item => RM(item) ? Ie({
      content: item.content,
      uuid: item.uuid,
      timestamp: item.timestamp,
      isMeta: !0
    }) : item),
    g = new Set(f.flatMap((item, index) => k9t({
      uuid: item.uuid,
      foreignToBridgeSession: "foreignToBridgeSession" in item && typeof item.foreignToBridgeSession === "string" ? item.foreignToBridgeSession : void 0
    }, ce) ? [l[index].uuid] : []));
  n.note(e);
  let h = n.redact(l, "transcript");
  return {
    messages: h.filter(item => !g.has(item.uuid)).map(item => q(le(item))),
    attachmentRowsLeftBehind: U(s, o => {
      if (o.type !== "attachment" || !fe.has(String(o.attachment?.type))) return !1;
      try {
        return soe(o.attachment).length > 0;
      } catch (error) {
        return t(`[conversation-export] could not render a ${String(o.attachment?.type)} attachment, so it counts as left behind: ${d(error)}`), !0;
      }
    }),
    subagentsSkipped: new Set(l.flatMap(item => item.type === "user" && D(item.toolUseResult) && typeof item.toolUseResult.agentId === "string" ? [item.toolUseResult.agentId] : [])).size,
    summaryWithheld: h.some(item => item.type === "user" && item.isCompactSummary === !0 && X.has(Hg(item) ?? ""))
  };
}
function le(e) {
  if (e.type !== "user" || e.isCompactSummary !== !0) return e;
  let {
      content: content
    } = e.message,
    {
      modelOnlyText: modelOnlyText,
      ...f
    } = e;
  return typeof content === "string" ? {
    ...f,
    message: {
      ...e.message,
      content: Bki(content, modelOnlyText)
    }
  } : e;
}
function q(e) {
  if (typeof e === "string") return oc(X.get(e) ?? e);
  if (Array.isArray(e)) return e.map(q);
  if (D(e)) return Er(uO(e, (n, s) => oc(s)), q);
  return e;
}
var me = "tengu_woolly_blanket",
  te = 3,
  oe = ["zdr", "ldr", "hipaa"];
function hsa() {
  return Lx() && !St() && !AF() && !oe.some(hs);
}
function P1r() {
  let e = pn(me, !1);
  return e.value === !0 && Vy(e.source);
}
async function O1r() {
  if (await ms().catch(() => null), !P1r() || !hsa()) return !1;
  if (await dh(), xd("allow_remote_sessions") === "cache_miss") await QZ();
  return !ye();
}
async function I1r(e, n) {
  if (!eUr(e.localSessionId)) return u("check_incomplete");
  let s = z(),
    f = {
      accountUuid: e.account.accountUuid.toLowerCase(),
      organizationUuid: e.account.organizationUuid.toLowerCase()
    };
  if (n.turnBlocked()) return u("turn_running");
  if (!(await O1r())) return u("policy");
  if (!Rt()) return u("not_signed_in");
  let l = await Xk(n.credentials).catch(a => {
    if (a instanceof oH) return;
    throw a;
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
  if (m.records.some(item => item.noBackfill)) return u("source_history_held_back");
  if (m.locked && fbs()) return u("policy");
  let T = e.localSessionId === s ? gS() : void 0,
    agent = [...m.agents, ...(T ? [T] : [])].find(item => !n.agentLeavesNoLimits(item));
  if (agent !== void 0) return {
    outcome: "refused",
    reason: "agent_not_carried",
    agent: agent
  };
  let k = m.records.map(item => V(item.owner, g === "unreadable" ? void 0 : g));
  if (k.includes("mismatch") || m.ledgerAccounts.some(item => g === "unreadable" || item !== g.accountUuid) || m.requestOrganizations.some(item => item !== l.orgUUID.toLowerCase())) return u("account_mismatch");
  if (m.records.some((item, index) => item.named && k[index] !== "match") || L(m.records.map(item => item.transcript)).some(item => !m.records.some((S, index) => S.transcript === item && k[index] === "match"))) return u("check_incomplete");
  let O = fje(o.messages),
    I = Y(O, S6t({
      mode: mode,
      placeAccountMemoryTool: mz(() => n.tools),
      accountMemoryInPlay: () => _Ue(n.host),
      sendsCompactSummaries: !0
    }));
  if (!I.messages.some(item => item.type === "user" || item.type === "assistant")) return u("nothing_to_move");
  if ((await Promise.all(m.ends.map(async a => ({
    read: a,
    now: await se(a.path, n.storageV5)
  })))).some(({
    read: read,
    now: now
  }) => now !== read.end)) return u("check_incomplete");
  if (n.turnBlocked()) return u("turn_running");
  if (z() !== s) return u("conversation_changed");
  let A = Z(w, o);
  if (A !== void 0) return u(A);
  return {
    outcome: "cleared",
    conversation: {
      ...I,
      historyHoldCleared: m.records.some(item => item.holdCleared),
      privacyLabels: mQe(O, [], o.toolsUsed)
    }
  };
}
function pe(e) {
  return typeof e === "string" && e !== "";
}
async function re(e, n, s) {
  let f = Vp(e, n),
    size,
    g = await ie(f),
    h = f !== void 0 ? mxt(f.backend, f.key) : Iwe(e, Lct, {
      onOpen: r => {
        size = r;
      }
    }),
    records = [],
    w = new Set(),
    M = new Set(),
    ledgerAccounts = [],
    requestOrganizations = [],
    R = new Set(),
    k = new Set(),
    O = f !== void 0 ? mDe.forBackendRead() : new mDe(),
    lastLine,
    x = () => `${size ?? g}
${lastLine}`,
    thirdParty = !1,
    locked = !1,
    S = ne(e, ".jsonl"),
    markers = [],
    J = new Set(),
    b = [],
    N = !1,
    B = new Map();
  for await (let r of h) {
    if (lastLine ??= r, r !== "" && (!r.startsWith("{") || !r.endsWith("}") || r.includes("\x00"))) throw Error("damaged transcript line");
    if (JOt(r)) return {
      ends: [{
        path: e,
        end: x()
      }],
      suppressed: !0,
      thirdParty: thirdParty,
      locked: locked,
      records: records,
      ledgerAccounts: ledgerAccounts,
      requestOrganizations: requestOrganizations,
      folders: [...M],
      agents: [...R],
      markers: markers
    };
    let p = _e(r);
    if (p?.savedIn !== void 0) J.add(p.savedIn);
    N ||= p?.fetched === !0;
    let E = he(r, S);
    if (E !== void 0) {
      if (typeof E.uuid === "string") markers.push(E.uuid);
      b = b.map(item => item.kept?.has(E.uuid) ? {
        ...item,
        kept: void 0
      } : item), b.push({
        ...E,
        remote: E.remote || N,
        parentsBefore: B.size
      }), N = !1;
    } else if (r.includes('"parentUuid"')) {
      let _ = ds(r);
      if (D(_) && _.parentUuid !== void 0) {
        let {
          uuid: uuid,
          parentUuid: parentUuid,
          remoteSourced: remoteSourced
        } = _;
        if (b = typeof uuid === "string" ? b.filter(({
          kept: kept,
          parentsBefore: parentsBefore,
          remote: remote
        }) => kept === void 0 || kept.has(uuid) || (B.get(uuid) ?? 1 / 0) < parentsBefore || remote && remoteSourced !== !0) : b, !B.has(parentUuid)) B.set(parentUuid, B.size);
      }
    }
    let G = Y8(r),
      c = G || r.includes('"bridge-session"') || r.includes('"isolation-latch"') || r.includes('"artifact-autoreact-ledger"') || r.includes('"credential_org"') || r.includes('"forkedFrom"') || r.includes('"agent-setting"') || r.includes('"history-suppression"') ? ee(r) : void 0;
    if (D(c) && c.type === "artifact-autoreact-ledger") ledgerAccounts.push(Q(c.accountUuid).toLowerCase());
    if (D(c) && D(c.attachment) && c.attachment.type === "credential_org") requestOrganizations.push(Q(c.attachment.organizationUuid).toLowerCase());
    if (D(c)) {
      if (thirdParty ||= G && Hhi(c), [c.cwd, c.relocatedCwd].filter(pe).forEach(item => M.add(item)), locked ||= c.type === "isolation-latch", c.type === "agent-setting" && typeof c.agentSetting === "string") R.add(c.agentSetting);
      let forkedFrom = c.forkedFrom;
      if (forkedFrom !== void 0) {
        if (!D(forkedFrom) || typeof forkedFrom.sessionId !== "string" || !vae(forkedFrom.sessionId)) return "budget-exhausted";
        k.add(forkedFrom.sessionId);
      }
    }
    if (D(c) && c.type === "bridge-session") {
      let _ = Boolean(c.noHistoryBackfill),
        y = w.has(c.sessionId),
        {
          ownerAccountUuid: ownerAccountUuid,
          ownerOrganizationUuid: ownerOrganizationUuid
        } = c,
        F = typeof ownerAccountUuid === "string" && vae(ownerAccountUuid) && (ownerOrganizationUuid === void 0 || typeof ownerOrganizationUuid === "string" && vae(ownerOrganizationUuid));
      if (records.push({
        transcript: e,
        owner: F ? {
          accountUuid: ownerAccountUuid.toLowerCase(),
          organizationUuid: typeof ownerOrganizationUuid === "string" ? ownerOrganizationUuid.toLowerCase() : void 0
        } : void 0,
        named: typeof c.bridgeSessionId === "string" && c.bridgeSessionId !== "",
        noBackfill: _ && !y,
        holdCleared: _ && y
      }), typeof c.sessionId === "string" && c.sessionId !== "") w.add(c.sessionId);
    }
    if (O.spend(r)) return "budget-exhausted";
  }
  let H = L([...k, ...(b.length > 0 ? J : [])]).filter(item => item !== S);
  if (H.length > te || H.length > 0 && s === 0) return "budget-exhausted";
  let K = await Promise.all(H.map(async item => {
      let p = await Hqe(item, void 0, wb(Rx(n)));
      if (p === null) return k.has(item) ? "budget-exhausted" : "history-gone";
      return re(p, n, s - 1);
    })),
    j = size !== void 0 ? await Wss(e, {
      size: size,
      lastLine: lastLine
    }, {}, O) : "clean";
  if (j === "budget-exhausted") return "budget-exhausted";
  if (j === "clean" && (await se(e, n)) !== x()) return "budget-exhausted";
  let W = K.reduce((acc, item) => typeof acc === "string" ? acc : typeof item === "string" ? item : {
      ends: [...acc.ends, ...item.ends],
      suppressed: acc.suppressed || item.suppressed,
      thirdParty: acc.thirdParty || item.thirdParty,
      locked: acc.locked || item.locked,
      records: [...acc.records, ...item.records],
      ledgerAccounts: [...acc.ledgerAccounts, ...item.ledgerAccounts],
      requestOrganizations: [...acc.requestOrganizations, ...item.requestOrganizations],
      folders: [...acc.folders, ...item.folders],
      agents: [...acc.agents, ...item.agents],
      markers: acc.markers
    }, {
      ends: [{
        path: e,
        end: x()
      }],
      suppressed: j !== "clean",
      thirdParty: thirdParty,
      locked: locked,
      records: records,
      ledgerAccounts: ledgerAccounts,
      requestOrganizations: requestOrganizations,
      folders: [...M],
      agents: [...R],
      markers: markers
    }),
    ae = new Set(K.flatMap(item => typeof item === "string" ? [] : item.markers));
  return typeof W !== "string" && !W.suppressed && b.some(({
    uuid: uuid_2,
    namesSource: namesSource
  }) => !namesSource && !ae.has(uuid_2)) ? "history-gone" : W;
}
function Z(e, n) {
  if (Ma()) return "transcript_not_saved";
  let s = gsa(e);
  if (s !== void 0) return s;
  return (n.isolationLatch !== void 0 || $ct() !== void 0) && fbs() ? "policy" : void 0;
}
function Q(e) {
  if (typeof e !== "string") throw Error("unreadable transcript mark");
  return e;
}
async function ie(e) {
  let n = await e?.backend.readRecords(e.key, {
    order: "backward",
    limit: 1
  });
  if (n?.ok === !1 && n.error.code !== "NotFound") throw Error("its saved transcript couldn't be read");
  let s = n?.ok === !0 ? n.value.items[0] : void 0;
  if (n?.ok === !0 && s === void 0 && n.value.nextSeq !== void 0) throw Error("its saved transcript couldn't be read");
  return s?.seq;
}
async function se(e, n) {
  let s = Vp(e, n),
    f,
    l = await ie(s),
    g = s !== void 0 ? mxt(s.backend, s.key) : Iwe(e, Lct, {
      onOpen: h => {
        f = h;
      }
    });
  for await (let h of g) return `${f ?? l}
${h}`;
  return `${f ?? l}
undefined`;
}
async function ge(e) {
  let n = await Ife(e.storageV5, e.credentials).catch(() => {
      return;
    }),
    s = await Tm(e.credentials).catch(() => {
      return;
    });
  if (s === "env" || s === "fd") {
    let accountUuid = Nt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase(),
      organizationUuid = Nt(i.CLAUDE_CODE_ORGANIZATION_UUID)?.toLowerCase();
    return accountUuid !== void 0 && organizationUuid !== void 0 ? {
      accountUuid: accountUuid,
      organizationUuid: organizationUuid
    } : "unreadable";
  }
  if (n === void 0) return "no_login";
  return s === "store" ? {
    accountUuid: n.accountUuid?.toLowerCase(),
    organizationUuid: n.organizationUuid?.toLowerCase()
  } : "unreadable";
}
function gsa(e) {
  if (!Nk(e)) return;
  return T6() || jde(e) ? "conversation_marked" : "history_held_back";
}
function ye() {
  return xd("allow_remote_sessions") !== null || wE() || oe.some(hs);
}
function u(reason) {
  return {
    outcome: "refused",
    reason: reason
  };
}
function he(e, n) {
  let s = e.includes('"compact_boundary"') ? ee(e) : void 0;
  if (!D(s) || s.type !== "system" || s.subtype !== "compact_boundary") return;
  let {
      forkedFrom: forkedFrom_2,
      compactMetadata: compactMetadata
    } = s,
    g = D(compactMetadata) ? compactMetadata.preservedMessages : null;
  return {
    uuid: s.uuid,
    remote: s.remoteSourced === !0,
    namesSource: D(forkedFrom_2) && typeof forkedFrom_2.sessionId === "string" && forkedFrom_2.sessionId !== n,
    kept: D(g) && Array.isArray(g.uuids) ? new Set(g.uuids) : g === void 0 && D(compactMetadata) && compactMetadata.preservedSegment === void 0 ? new Set() : void 0
  };
}
function _e(e) {
  let n = e.includes('"isCompactSummary":true') ? ee(e) : void 0;
  if (!D(n) || n.isCompactSummary !== !0 || !D(n.message)) return;
  let s = typeof n.message.content === "string" ? Uki(n.message.content) : void 0;
  return {
    savedIn: s === void 0 ? void 0 : ne(s, ".jsonl"),
    fetched: n.remoteSourced === !0
  };
}
export { hsa, P1r, O1r, I1r, gsa };