// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { $o, nd, K$ } from "B:/~BUN/root/chunk-54p0h65d.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { To, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { iee, gl, k9, EKe, CSo, _F, OUn, CLe, Cd, TKe, Unn, Sf as v_2, FT, sy } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Vpt, ss } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { On, ia, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Xf, Ct as toolName_2, wn, Ue as toolName_3, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { np, DS, py } from "B:/~BUN/root/chunk-msy8grqx.js";
import { Jn, Mn } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Xx, oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { K$t } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { Lb, ZB, vz, KTe, px, dr, Sle, $zn, to, n6, Ra } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { FE, vv } from "B:/~BUN/root/chunk-rtyz5f1n.js";
import { pi, Pz, che, l6, OHe, oN, lCe, nq, DHe } from "B:/~BUN/root/chunk-7zm7ax4t.js";
import { Ldo, C8, hfe, KJt, vMe, jCt, Ndo, Ipo, AL, ORt, jQt, Jpo, VQt, w_r, fie, Ife, Bp, Ofe, XDn, JQt, mie, yp, q7t, GHn, VHn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { c0 } from "B:/~BUN/root/chunk-d8zzdckb.js";
import { GAn, Udr } from "B:/~BUN/root/chunk-0mn860zt.js";
import { Yvt } from "B:/~BUN/root/chunk-b8z99tfd.js";
import { vpe, Qw } from "B:/~BUN/root/chunk-nadb9e0w.js";
import { tG } from "B:/~BUN/root/chunk-tdkq03qj.js";
import { GVt, VVt, cXr, nG } from "B:/~BUN/root/chunk-6pasxt6h.js";
import { sL } from "B:/~BUN/root/chunk-bhvv8yep.js";
import { lc } from "B:/~BUN/root/chunk-twqr14hq.js";
import { mwe, O5t } from "B:/~BUN/root/chunk-wvy82qn4.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { at as toolName } from "B:/~BUN/root/chunk-2h7x7bdj.js";
import { Yr } from "B:/~BUN/root/chunk-n0832wgz.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { randomUUID as un } from "crypto";
function G9r() {
  let e = new Map();
  return {
    add(n, o) {
      if (!e.has(n)) e.set(n, o);
    },
    lines: () => [...e.values()]
  };
}
function Wj(target, n, code, r, s = {}) {
  let l = sy(r);
  return {
    envelope: {
      v: v_2,
      outcome: "refused",
      ...(n.envelope && {
        call_id: n.envelope.call_id
      }),
      target: target,
      code: code,
      ...(s.reason !== void 0 && {
        reason: s.reason
      }),
      ...(s.limit !== void 0 && {
        limit: s.limit
      }),
      message: l,
      ...(s.notes !== void 0 && s.notes.length > 0 && {
        notes: s.notes
      })
    },
    content: [{
      type: "text",
      text: l
    }]
  };
}
function K({
  target: target_2,
  callId: n,
  reason: reason,
  message: message
}) {
  let s = sy(message);
  return {
    envelope: {
      v: v_2,
      outcome: "refused",
      call_id: n,
      target: target_2,
      code: "withdrawn",
      reason: reason,
      message: s
    },
    content: [{
      type: "text",
      text: s
    }]
  };
}
function eG(target_3, n, code_2, r, s = {}) {
  let l = sy(r);
  return {
    envelope: {
      v: v_2,
      outcome: "failed",
      ...(n.envelope && {
        call_id: n.envelope.call_id
      }),
      target: target_3,
      code: code_2,
      message: l,
      ...s.partial,
      ...(s.notes !== void 0 && s.notes.length > 0 && {
        notes: s.notes
      })
    },
    content: [{
      type: "text",
      text: l
    }]
  };
}
function hQe(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function wkn(e) {
  if (e?.envelope.outcome === "completed") {
    let {
      disposition: n
    } = e.envelope;
    return n === "ask_expired" || n === "denied_by_session" ? {
      state: "failed",
      code: n
    } : {
      state: "completed",
      isError: e.envelope.is_error
    };
  }
  if (e?.envelope.outcome === "needs_approval") return {
    state: "asked",
    askId: e.envelope.ask_id
  };
  return {
    state: "failed",
    ...((e?.envelope.outcome === "failed" || e?.envelope.outcome === "refused") && {
      code: e.envelope.code
    }),
    ...(e?.envelope.outcome === "refused" && e.envelope.reason !== void 0 && e.envelope.reason !== "unrecognized" && {
      endedAs: e.envelope.reason
    })
  };
}
function cn(e, n) {
  if (n.state === "failed" && n.code === vMe) {
    let r = new Date(n.servedAt).toISOString().slice(11, 19);
    return `This call reached ${e} only after the session had been told (at ${r} UTC) that it never arrived here \u2014 it was not run.`;
  }
  return n.state === "failed" && n.code !== void 0 && (KJt.has(n.code) || n.code === "stale") ? `This request was already answered on ${e}: nothing was run for it (${ae(n)}).` : `This call was already delivered to ${e} (${ae(n)}) \u2014 it was not run again.`;
}
function ae(e) {
  let n = new Date(e.servedAt).toISOString().slice(11, 19);
  switch (e.state) {
    case "received":
      return `it was received at ${n} UTC and is still being admitted`;
    case "running":
      return `it has been running since ${n} UTC`;
    case "asked":
      return `it has been waiting for the session's approval since ${n} UTC`;
    case "completed":
      return `it ${e.isError ? "completed with an error" : "completed"} at ${n} UTC`;
    case "failed":
      switch (e.code) {
        case "timed_out":
        case "cancelled":
          return `it ended as ${e.code} at ${n} UTC; if it had started, it may have partially run`;
        case C8:
          return `at ${n} UTC it joined the same command already under way here from an earlier request, since forgotten`;
        case hfe:
          return `its permission question was handed to a newer request for the same command at ${n} UTC`;
        case jCt:
          return `it was started here at ${n} UTC and Claude Code on this machine restarted before its outcome was recorded: it may have partially run`;
        default:
          return `it ended as ${e.code ?? "failed"} at ${n} UTC`;
      }
  }
}
function V_t(e, call_id) {
  let {
    envelope: envelope
  } = e;
  if (envelope.call_id === call_id) return e;
  if (envelope.outcome !== "needs_approval" || envelope.elicitation === void 0) return {
    ...e,
    envelope: {
      ...envelope,
      call_id: call_id
    }
  };
  let r = envelope.elicitation._meta[FT];
  return {
    ...e,
    envelope: {
      ...envelope,
      call_id: call_id,
      elicitation: {
        ...envelope.elicitation,
        _meta: {
          [FT]: {
            ...r,
            call_id: call_id
          }
        }
      }
    }
  };
}
function V9r(e, served_at) {
  let {
    envelope: envelope_2
  } = e;
  switch (envelope_2.outcome) {
    case "completed":
    case "refused":
    case "failed":
      return {
        ...e,
        envelope: {
          ...envelope_2,
          replayed: !0,
          served_at: served_at
        }
      };
    default:
      return e;
  }
}
function q9r({
  target: target_4,
  callId: n,
  state: state,
  sinceMs: sinceMs,
  hostEpoch: s
}) {
  let l = Math.max(0, Math.round(sinceMs / 1000)),
    text = state === "running" ? `This call is still running on ${target_4.name} (received ${l} s ago); its outcome is not known yet.` : state === "admitting" ? `This call was received on ${target_4.name} ${l} s ago and is still being admitted; nothing has started yet.` : `This call is waiting on ${target_4.name} for the session's approval (received ${l} s ago); nothing has run yet.`;
  return {
    envelope: {
      v: v_2,
      outcome: "in_progress",
      call_id: n,
      target: target_4,
      state: state,
      since_ms: Math.max(0, Math.floor(sinceMs)),
      host_epoch: s
    },
    content: [{
      type: "text",
      text: text
    }]
  };
}
function K9r({
  target: target_5,
  callId: n,
  hostEpoch: o
}) {
  let r = o === void 0 ? `${target_5.name} has no record of this call (it may never have arrived, or its record here was dropped); nothing is running for it here now.` : `${target_5.name} has no record of this call: it never arrived here, or this machine's Claude Code has restarted since; nothing is running for it here.`;
  return {
    envelope: {
      v: v_2,
      outcome: "refused",
      call_id: n,
      target: target_5,
      code: "unknown_call",
      message: r,
      ...(o !== void 0 && {
        host_epoch: o
      })
    },
    content: [{
      type: "text",
      text: r
    }]
  };
}
function Ttr(target_6, n, o) {
  if (o.state === "failed" && o.code === "withdrawn" && o.endedAs !== void 0) return K({
    target: target_6,
    callId: n,
    reason: o.endedAs,
    message: o.endedMessage ?? nG({
      targetName: target_6.name,
      reason: o.endedAs
    })
  });
  let content = [{
    type: "text",
    text: cn(target_6.name, o)
  }];
  return {
    envelope: {
      v: v_2,
      outcome: "completed",
      call_id: n,
      target: target_6,
      is_error: !0,
      content: content,
      disposition: "duplicate_call"
    },
    content: content
  };
}
var reason_2 = "remote_call_ask_ended";
function fn(message_2) {
  return {
    behavior: "deny",
    message: message_2,
    decisionReason: {
      type: "other",
      reason: reason_2
    },
    decideLocation: "ask-path"
  };
}
function mn() {
  let e = new Map();
  return {
    register: o => void e.set(o.askId, o),
    take: o => {
      let r = e.get(o);
      return e.delete(o), r;
    },
    list: () => [...e.values()],
    peek: o => e.get(o),
    findByCallId: o => [...e.values()].findLast(r => r.callId === o),
    get size() {
      return e.size;
    }
  };
}
function de(e, n, o, r) {
  let s = e.pendingAsks.take(n);
  if (s === void 0) return;
  if (s.callId !== void 0) o(s.callId, s);
  return s.windDown(), s.answer(r), s;
}
function Y9r(e, n, o) {
  de(e, n, r => e.calls.remember(r, {
    state: "failed",
    code: "denied_by_session"
  }), o);
}
function C5(e, n, o) {
  let r = de(e, n, (callId, l) => e.calls.settle(callId, o.retain ?? K({
    target: l.asked.envelope.target,
    callId: callId,
    reason: o.reason,
    message: o.message
  }), {
    state: "failed",
    code: "withdrawn",
    endedAs: o.reason,
    endedMessage: sy(o.message)
  }), fn(o.message));
  if (r !== void 0) {
    switch (o.reason) {
      case "host_unbound":
      case "host_stopped":
        p("remote_tool_serve", o.reason);
        break;
      case "evicted":
        p("remote_tool_serve", "ask_superseded");
        break;
      case "tool_withdrawn":
      case "stale_answer":
      case "replaced_by_retry":
        break;
    }
    lc(r.callId, "ask ended", {
      ask_id: n,
      reason: o.reason
    }), e.onAskEnded?.({
      callerSessionId: e.callerSessionId,
      callId: r.callId,
      askId: n,
      reason: o.reason
    });
  }
}
var pn = 16;
function X9r(e, n) {
  if (n === void 0) return;
  let conversation_id = n.caller.conversation_id;
  if (conversation_id !== void 0 && !e.conversationIds.includes(conversation_id)) {
    if (e.conversationIds.length > 0) {
      if (e.cwd !== void 0) e.directoryReset = {
        from: e.cwd,
        at: Date.now()
      };
      e.cwd = void 0, e.readFileState.clear(), lc(n.call_id, "caller conversation cleared: launch directory and read state reset");
    }
    le(e.conversationIds, conversation_id);
  }
  let compaction_id = n.caller.compaction_id;
  if (compaction_id !== void 0 && !e.compactionIds.includes(compaction_id)) e.readFileState.clear(), le(e.compactionIds, compaction_id), lc(n.call_id, "caller conversation compacted: read state reset");
}
function le(e, n) {
  if (e.push(n), e.length > pn) e.shift();
}
function gn(callerSessionId, n = {}) {
  return {
    callerSessionId: callerSessionId,
    readFileState: vv(FE),
    toolState: new sL(),
    calls: Ndo(n.callRecordBounds),
    pendingAsks: mn(),
    sessionPermissionUpdates: [],
    cwd: void 0,
    directoryReset: void 0,
    conversationIds: [],
    compactionIds: [],
    createdAt: Date.now(),
    onAskEnded: n.onAskEnded
  };
}
var Ctr = 20;
function J9r(e = {}) {
  let limit = e.limit ?? Ctr,
    o = new Map(),
    epoch = e.epoch ?? un(),
    s = l => {
      let f = gn(l, {
        callRecordBounds: e.callRecordBounds,
        onAskEnded: e.onAskEnded
      });
      for (let m of e.priorCallsFor?.(l) ?? []) f.calls.seed(m);
      return o.set(l, f), f;
    };
  return {
    epoch: epoch,
    limit: limit,
    peek: l => o.get(l),
    forCaller: l => o.get(l) ?? (o.size < limit ? s(l) : void 0),
    heldAsk: (l, f) => {
      let m = o.get(l)?.pendingAsks.findByCallId(f);
      return m === void 0 ? void 0 : {
        toolName: m.toolName,
        evaluatedInput: m.evaluatedInput,
        startCwd: m.startCwd
      };
    },
    get size() {
      return o.size;
    }
  };
}
var Ekn = new Set([toolName_3, St, toolName, wn, toolName_2]);
import { isDeepStrictEqual as yo } from "util";
function q_t() {
  return Udr() || Yvt();
}
var yn = "tengu_violin_lining";
function U() {
  try {
    let {
      value: value,
      source: source
    } = ia(yn, !0);
    return !(value === !1 && source !== "override");
  } catch {
    return !0;
  }
}
import { homedir as Sn } from "os";
import { basename as hn, dirname as _n } from "path";
import { homedir as ce } from "os";
import { join as E } from "path";
var Z = $o(() => {
  let e = ce(),
    n = [E(e, ".ssh"), E(e, ".aws"), E(e, ".config", "gcloud"), E(e, ".azure"), E(e, ".kube"), E(e, ".gnupg"), E(e, ".config", "gh"), E(e, ".config", "glab-cli")],
    o = [E(e, ".docker", "config.json"), E(e, ".netrc"), E(e, ".git-credentials"), E(e, ".config", "git", "credentials"), E(e, ".npmrc"), E(e, ".pypirc"), E(e, ".cargo", "credentials"), E(e, ".cargo", "credentials.toml"), E(e, ".gem", "credentials"), E(e, ".pgpass"), E(e, ".my.cnf"), E(e, ".mylogin.cnf"), E(e, ".terraform.d", "credentials.tfrc.json"), E(e, ".boto"), E(e, ".s3cfg")];
  return gl([..._F(n).flatMap(r => [{
    literal: r,
    tail: ""
  }, {
    literal: r,
    tail: "/**"
  }]), ..._F(o).flatMap(r => [{
    literal: r,
    tail: ""
  }, {
    literal: r,
    tail: ".*"
  }])], ({
    literal: literal,
    tail: tail
  }) => `${literal}\x00${tail}`);
}, () => ce());
var source_2 = "hostCredential";
function ye() {
  return he(U() ? [...EKe(), ...Z()] : EKe());
}
function Se() {
  return he(CSo());
}
function he(e) {
  let n = O(),
    o = n === "linux" || n === "wsl";
  return [...OUn(e).flatMap(r => [{
    toolName: toolName,
    ruleContent: r
  }, {
    toolName: toolName_2,
    ruleContent: r
  }]), ...(o ? [{
    toolName: toolName,
    ruleContent: "//proc/**/environ"
  }] : []), ...(n === "windows" ? [toolName_3, St].flatMap(r => vn.map(s => ({
    toolName: r,
    ruleContent: s
  }))) : W().flatMap(item => [item, `/usr/bin/${item}`]).map(be))];
}
function W() {
  switch (O()) {
    case "macos":
      return ["security"];
    case "linux":
    case "wsl":
      return ["secret-tool"];
    case "windows":
      return z.flatMap(item => [item, `${item}.exe`]);
    default:
      return [];
  }
}
var z = ["cmdkey", "vaultcmd"],
  ve = ["PSCredentialManager", "BetterCredentials"],
  Re = [...z, "CredRead", "CredReadDomainCredentials", "CredWrite", "CredWriteDomainCredentials", "CredDelete", "CredEnumerate", "CredFindBestCredential", "CredBackupCredentials", "CredRestoreCredentials", "vaultcli", "Get-StoredCredential", "New-StoredCredential", "Remove-StoredCredential", "Get-CredManCredential", "New-CredManCredential", "Remove-CredManCredential", ...ve, "Find-Credential", "Test-Credential", "Set-Credential", "Remove-Credential", "Get-Secret", "Get-SecretInfo", "Set-Secret", "Set-SecretInfo", "Remove-Secret", "Get-SecretVault", "Register-SecretVault", "Unregister-SecretVault", "Unlock-SecretVault", "Test-SecretVault", "Set-SecretVaultDefault"],
  vn = z.map(item => `*${item}*`);
function Rn(e) {
  if (z.includes(e)) return `${e}(?:\\.exe)?`;
  if (/^Cred/.test(e)) return `${e}[AW]?`;
  if (e === "vaultcli") return "vaultcli(?:\\.dll)?";
  if (ve.includes(e)) return `${e}(?:\\.ps[dm]1|(?:\\.[A-Za-z0-9_]+)+)?`;
  let n = e.indexOf("-");
  return /(?:StoredCredential|CredManCredential)$/.test(e) ? `${e.slice(0, n)}-(?:[^\\s'"\`;&|(){}\\[\\],-]*|[^\\s'"\`;&|(){}\\[\\],]{0,64})${e.slice(n + 1)}` : e;
}
var regExp = new RegExp(`(?:^|[^A-Za-z0-9_])(?:${Re.map(item => `(${Rn(item)})`).join("|")})\\.*(?![A-Za-z0-9_.-])`, "i"),
  Cn = /(?:^|[^A-Za-z0-9_])(?:(?:import|install|save|update|find|get)-module|ipmo|gmo|inmo|fimo|upmo|using[ \t]+(?:module|assembly)|#requires[ \t]+-(?:modules?|assembly)|(?:install|save|update|find)-psresource|(?:is|sv|ud|fd)res|(?:install|save|find)-package|get-command|gcm|add-type|loadfrom|loadfile|loadwithpartialname|unsafeloadfrom|loadfromassemblypath|loadfromstream|loadfromassemblyname|createinstancefrom|assemblyloadcontext)(?![A-Za-z0-9_-])|(?:assembly|activator|appdomain)\s*\]|reflection\s*\.\s*assembly|currentdomain|(?:^|[^A-Za-z0-9_])using[ \t]*(?:<#|`[\r\n])/i,
  En = /(?:^|[^A-Za-z0-9_])(?:(CredentialManager)|SecretManagement)(?![A-Za-z0-9_])/i,
  kn = /(?:^|[^$])(?:(Stored)|CredMan)Credential(?![A-Za-z0-9_])/i,
  bn = /(?:^|[^A-Za-z0-9_])PasswordVault(?![A-Za-z0-9_.])/i,
  Pn = /\[(?=\s*[\w.]*PasswordVault)|\[\s*(?:System\.)?Type\s*\]|New-Object|Credentials\.|(?:^|[^A-Za-z0-9_])-as(?:\s+[^\s;|&)-]|[^\sA-Za-z0-9_;|&)-])/i,
  Tn = /(?:^|[^A-Za-z0-9_])runas(?:\.exe)?(?![A-Za-z0-9_])/i,
  In = /\/savecred(?![A-Za-z0-9_])/i,
  Dn = /(?:^|[^A-Za-z0-9_-])(?:iex|invoke-expression)(?![A-Za-z0-9_-])|scriptblock\s*\]|invokescript|newscriptblock|addscript|expandstring/i,
  Nn = /(?:^|[^\w.-])(?:powershell|pwsh(?:-preview)?|cmd)(?:\.exe)?(?![\w-])/i;
function xn(e) {
  return Nn.test(e) && /[($@{%!|]/.test(e);
}
var regExp_2 = new RegExp(vpe.source.replace(/\\[tnr]| /g, "").replace(/\+$/, ""), "g"),
  Hn = /[\u2013-\u2015]/g;
function Ae(e) {
  return e.replace(regExp_2, " ").replace(Hn, "-").replace(/[\u2018-\u201b]/g, "'").replace(/[\u201c-\u201e]/g, '"');
}
function Ce(e) {
  let n = Ae(e),
    o = regExp.exec(n);
  if (o !== null) return Re[o.slice(1).findIndex(item => item !== void 0)];
  let r = Dn.test(n) || xn(n);
  if (Cn.test(n) || r) {
    let s = En.exec(n);
    if (s !== null) return s[1] !== void 0 ? "CredentialManager" : "SecretManagement";
    let l = kn.exec(n);
    if (l !== null) return l[1] !== void 0 ? "Get-StoredCredential" : "Get-CredManCredential";
  }
  if (bn.test(n) && (Pn.test(n) || r)) return "PasswordVault";
  if (Tn.test(n) && In.test(n)) return "runas";
  return;
}
function we(e, n = "either") {
  let o = Ee(e),
    r = $n(e),
    s = n !== "powershell" || [e, o, r].some(item => {
      let f = B(Ae(item));
      return regExp_3.test(f) || regExp_3.test(B(f.normalize("NFKC")));
    });
  return L([e, o, r, ...(s ? [Y(o), Y(r)] : [])].flatMap(item => {
    let f = item.normalize("NFKC");
    return [item, B(item), f, B(f)];
  }));
}
var regExp_3 = new RegExp(`(?:^|[\\s\\\\/'":&()|;,{}=-])(?:${[...oN].filter(item => !["cmd", "powershell", "pwsh"].includes(item)).join("|")})(?:\\.exe)?(?=[\\s'"|);}&,({]|$)|alias\\.[\\w-]+[ \\t]*(?:=[ \\t]*)?['"]?!`, "i");
function Y(e) {
  return e.replace(/\\\r?\n/g, "").replaceAll("\\", "");
}
function B(e) {
  return e.replace(/\u0131/g, "i").replace(/\u017f/g, "s");
}
function Ee(e) {
  return ke(e, "");
}
function $n(e) {
  return ke(e, " ");
}
function ke(e, n) {
  return Fn(Qw(e.replace(/\^\r?\n/g, ""))).replace(/\$(?=["'])/g, "").replace(Un, n);
}
var Wn = {
  n: `
`,
  t: "\t",
  r: "\r",
  e: "\x1B"
};
function Fn(e) {
  return e.replace(/\$'((?:[^'\\]|\\.)*)'/g, (n, o) => `'${o.replace(/\\(?:x([0-9A-Fa-f]{1,2})|u([0-9A-Fa-f]{1,4})|U([0-9A-Fa-f]{1,8})|([0-7]{1,3})|(.))/g, (r, s, l, f, m, h) => {
    let g = s !== void 0 ? parseInt(s, 16) : l !== void 0 ? parseInt(l, 16) : f !== void 0 ? parseInt(f, 16) : m !== void 0 ? parseInt(m, 8) : void 0;
    if (g === void 0) return Wn[h ?? ""] ?? h ?? "";
    return g <= 1114111 ? String.fromCodePoint(g) : "";
  })}'`);
}
var Un = /["'`^\u2018-\u201e]/g;
function be(e) {
  return {
    toolName: toolName_3,
    ruleContent: `${e}:*`
  };
}
var Bn = 4;
async function Pe(e, n) {
  let {
    command: command
  } = n;
  if (typeof command !== "string") return;
  if (O() === "windows") {
    if (e.name !== toolName_3 && e.name !== St) return;
    let s;
    for (let l of we(command, e.name === toolName_3 ? "bash" : "powershell")) s ??= Ce(l);
    if (s !== void 0) return {
      source: source_2,
      ruleBehavior: "deny",
      ruleValue: {
        toolName: e.name,
        ruleContent: `*${s}*`
      }
    };
    return;
  }
  let [r] = W();
  return r !== void 0 && e.name === toolName_3 && (await De(command, Bn)) ? {
    source: source_2,
    ruleBehavior: "deny",
    ruleValue: be(r)
  } : void 0;
}
var Vn = 8,
  zn = 512,
  jn = 131072,
  Kn = /^(?:\/|~(?:\/|$)|\.{1,2}(?:\/|$)|\$\{?HOME\}?(?:\/|$)|file:)/i,
  Gn = /(^|[/\\])\.\.?([/\\]|$)/,
  q = /[/\\~*?[\]{}<>|;&`\x00-\x1f\x7f-\x9f\p{Cf}]|^\.|%(?=[0-9a-f]{2}|u[0-9a-f]{4})|\$(?=[\p{L}_{('"])|[@!+](?=\()|\+(?=[.~])|^[a-z][a-z0-9+.-]*:(?=\S)/iu,
  Zn = /^["'(<[{]+|["')>\]}]+$/g,
  qn = /[.,;:!?]+$/,
  pe = /[,:=]+/,
  Oe = /[*?[\]{}()@+!\\]/,
  Yn = /[\x00-\x1f\x7f-\x9f\p{Cf}\s"'`%#|<>;&,:=]/u,
  V = /[\t\n\v\f\r\x85\u2028\u2029]+/g,
  Xn = /[\n\v\f\r\x85\u2028\u2029;&|]+/,
  Qn = /^\$(?=['"])|['"\\]/g,
  eo = /^file:\/\/(?:localhost)?(?=\/)/i;
function Te(e, n) {
  if (e.isMcp !== !0) return;
  let o = O(),
    r = o === "macos",
    s = o === "linux" || o === "wsl",
    l = W(),
    f = u => r ? to(u.normalize("NFC")) : o === "windows" ? Cd(u).replaceAll("\\", "/") : u,
    m = _F(L([...k9(), ...EKe().filter(({
      tail: tail_2
    }) => tail_2 === "/**").map(({
      literal: literal_2
    }) => literal_2), ...(a.CLAUDE_CODE_HOST_CREDS_FILE ? [_n(a.CLAUDE_CODE_HOST_CREDS_FILE)] : [])]).map(item => item.replace(/[\\/]+$/, ""))).map(f),
    h = ruleContent => ({
      kind: "deny",
      rule: {
        source: source_2,
        ruleBehavior: "deny",
        ruleValue: {
          toolName: toolName,
          ruleContent: ruleContent
        }
      }
    }),
    g = EKe().filter(({
      tail: tail_3
    }) => tail_3.startsWith("/")).map(({
      literal: literal_3,
      tail: tail_4
    }) => ({
      dir: f(literal_3.replace(/[\\/]+$/, "")),
      segments: tail_4.split("/").slice(1).map(item => new RegExp(`^${item.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*+/g, "[^/]*").replace(/\?/g, "[^/]")}$`, r ? "i" : ""))
    })),
    A = u => {
      let v = !1,
        _ = L([...To(u), ...(r ? [K$(u)] : [])]);
      for (let under of _) {
        let C = f(under);
        if (CLe(under) || (r || o === "windows") && CLe(C) || s && /^\/proc\/.+\/environ$/.test(under) || m.some(item => C === item || C.startsWith(`${item}/`))) return {
          under: under
        };
        let k = C.replace(/\/+$/, "");
        if (k === "" || m.some(item => item.startsWith(`${k}/`)) || g.some(({
          dir: dir,
          segments: segments
        }) => dir.startsWith(`${k}/`) || k === dir || k.startsWith(`${dir}/`) && k.slice(dir.length + 1).split("/").every((item, index) => index < segments.length && segments[index].test(item))) || s && /^\/proc(?:\/|$)/.test(k) || r && /^\/system(?:\/volumes(?:\/data)?)?$/.test(k) || /^\/dev(?:\/fd(?:\/|$)|$)/.test(k)) v = !0;
      }
      return v ? "above" : "clear";
    },
    S = o === "windows" ? L([...m, ...g.map(({
      dir: dir_2
    }) => dir_2)].flatMap(item => /^([a-z]):\//.exec(item)?.slice(1) ?? [])) : [],
    R = u => {
      let v = ge(u);
      if (v !== void 0) {
        let w = /^[\\/](?![\\/])/.test(v) && !/^\/[a-z]\//i.test(v) ? [v, ...S.map(item => `${item.toUpperCase()}:${v.replace(/\//g, "\\")}`)] : [v],
          C;
        for (let k of w) {
          let P = A(k);
          if (P === "above") C = "ask";else if (P !== "clear") return {
            deny: P.under
          };
        }
        return C;
      }
      let _ = u.search(Oe);
      if (_ > 0) {
        let w = u.slice(0, _).replace(/[^/]*$/, ""),
          C = w === "" ? void 0 : ge(w);
        if (C !== void 0) {
          let k = A(C);
          if (k !== "clear" && k !== "above") return {
            deny: `${k.under} (${u.slice(0, 128)})`
          };
        }
      }
      return "ask";
    },
    b = u => {
      let v = u;
      for (let _ = 0; _ < 3; _++) {
        let w = v.replace(Zn, ""),
          C = w.replace(qn, "");
        if (C === "") return w || v;
        if (C === v) break;
        v = C;
      }
      return v;
    },
    M = u => {
      let v = b(u);
      return [v, ...v.split(pe), ...u.split(pe)].some(item => item !== "" && item !== u && q.test(b(item)));
    },
    I = u => {
      if (u === "") return;
      if (!/\s/.test(u)) return q.test(u) ? R(u) : M(u) ? "ask" : void 0;
      if (Kn.test(u)) return "ask";
      for (let v of u.split(/\s+/)) {
        let _ = b(v);
        if (q.test(_) ? R(_) !== void 0 : M(v)) return "ask";
      }
      return;
    },
    T,
    D = 0,
    N = 0;
  for (let u of Me(n, Vn)) {
    if (u === Ie || ++D > zn) return h("(nested input this machine could not inspect)");
    let v = u.normalize("NFKC");
    for (let _ of L([u, v].flatMap(item => [item.replace(V, " ").trim(), item.replace(V, "").trim()]))) {
      let w = I(_);
      if (w === "ask") {
        if (T === void 0) T = {
          kind: "ask",
          spelling: _.slice(0, 256)
        };
      } else if (w !== void 0) return h(w.deny);
    }
    if (o === "windows" && T === void 0 && ((N += Math.max(u.length, v.length)) > jn || L([u, v].flatMap(item => [item.replace(V, " "), item.replace(V, "")])).some(item => we(item).some(item => Ce(item) !== void 0)))) T = {
      kind: "ask",
      spelling: v.slice(0, 256)
    };
    if (l.length > 0 && T === void 0) for (let _ of v.split(Xn)) {
      let w = _.trim().split(/\s+/).filter(Boolean).map(item => b(item).replace(Qn, "")),
        C = w.length < 2 ? w : Ne(w);
      if (C === void 0 || C.length >= 2 && l.includes(C[0])) {
        T = {
          kind: "ask",
          spelling: _.trim().slice(0, 256)
        };
        break;
      }
    }
  }
  return T;
}
function ge(e) {
  let n = e;
  if (/^file:/i.test(n)) {
    let o = eo.exec(n);
    if (o === null) return;
    n = n.slice(o[0].length);
  }
  if (n = n.replace(/^\$\{?HOME\}?(?=\/|$)/, "~"), n === "~") n = "~/";
  if (O() === "windows") {
    if (n = (n[0] ?? "") + n.slice(1).replace(/[\\/]{2,}/g, "/"), n = n.replace(/^([A-Za-z]):[\\/]/, (o, r) => `/${r.toLowerCase()}/`).replace(/^\/(?:proc\/cygdrive|cygdrive|mnt)\/(?=[a-z](?:\/|$))/i, "/").replace(/^\/([A-Za-z])$/, "/$1/").replace(/^\/([A-Z])\//, (o, r) => `/${r.toLowerCase()}/`), /^\/[a-z]\//.test(n)) n = n.replaceAll("\\", "/");
    if (/^[\\/]{2}/.test(n) || /^\/(?:mnt|cygdrive)\/?$/i.test(n) || /^\/proc(?:\/|$)/i.test(n)) return;
  }
  if (n = O() === "windows" && /^\/[a-z]\/+$/i.test(n) ? n.replace(/\/+$/, "/") : n.replace(/(?<=[^/])\/+$/, ""), !/^(?:\/|~\/)/.test(n) || Yn.test(n) || Oe.test(n) || n.includes("$") || n.includes("~", 1) || Gn.test(n.slice(1))) return;
  return Ye(n, Sn());
}
var Ie = Symbol("depth-exhausted");
function* Me(e, n) {
  if (typeof e === "string") {
    yield e;
    return;
  }
  if (e === null || typeof e !== "object") return;
  let o = Array.isArray(e) ? e.map(item => ["", item]) : Object.entries(e);
  if (n <= 0) {
    if (o.length > 0) yield Ie;
    return;
  }
  for (let [r, s] of o) {
    if (r !== "") yield r;
    yield* Me(s, n - 1);
  }
}
async function De(e, n) {
  let o = await Pz(e);
  if (o.kind !== "simple") return !1;
  for (let r of o.commands) {
    let s = Ne(r.argv);
    if (s === void 0) return !0;
    let [l = "", ...f] = s;
    if (W().includes(l)) return !0;
    let m = l.replace(/\.exe$/, "");
    if (!oN.has(m)) continue;
    if (!OHe.has(m)) {
      if (f.some(item => {
        let g = Y(Ee(item)),
          A = O() === "macos" ? g.toUpperCase().toLowerCase() : g;
        return W().some(item => A.includes(item));
      })) return !0;
      continue;
    }
    if (!f.some(item => /^[-+][a-zA-Z]*c[a-zA-Z]*$/.test(item))) continue;
    if (n <= 1) return !0;
    for (let h of f) if (await De(h, n - 1)) return !0;
  }
  return !1;
}
function Ne(e) {
  let n = O(),
    o = n === "macos" || n === "windows",
    r = [...e];
  for (let s = 0; s < 32; s++) {
    let l = hn(r[0] ?? "");
    r[0] = o ? l.toUpperCase().toLowerCase() : l;
    let f = r[0] === "env" ? no(r) : void 0;
    if (f !== void 0) {
      r = f;
      continue;
    }
    let m = ORt(r),
      h = m.length !== r.length || m[0] !== r[0];
    if (h && !/^[-+\d]/.test(m[0] ?? "")) {
      r = m;
      continue;
    }
    if (!lCe.has(r[0]) || r[0] === "command" && r.some(item => /^-[pvV]*[vV][pvV]*$/.test(item))) return h ? m : r;
    let g = r.findIndex((item, index) => index > 0 && !/^(?:[-+]|\d+(?:\.\d+)?[smhd]?$|[A-Za-z_]\w*=)/.test(item));
    if (g < 1) return r;
    r = r.slice(g);
  }
  return;
}
function no(e) {
  for (let n = 1; n < e.length; n++) {
    let o = e[n],
      r = o.startsWith("--split-string=") ? o.slice(15) : /^-[^-]*S/.test(o) ? o.slice(o.indexOf("S") + 1) : void 0,
      s = o === "--split-string" || r === "",
      l = s ? e[n + 1] ?? "" : r;
    if (l !== void 0) return [...l.trim().split(/\s+/).filter(Boolean), ...e.slice(n + (s ? 2 : 1))];
    if (["-u", "-C", "--unset", "--chdir"].includes(o)) n++;else if (o === "--" || !/^(?:-|[A-Za-z_]\w*=)/.test(o)) return;
  }
  return;
}
function X(e) {
  if (e?.type === "rule") return e.rule.source === source_2 ? e.rule : void 0;
  if (e?.type === "subcommandResults") for (let n of e.reasons.values()) {
    let o = X(n.decisionReason);
    if (o !== void 0) return o;
  }
  return;
}
function Q9r(e, n, o, r) {
  if (e.getPath === void 0) return;
  let s = DS(e, n);
  if (!s.success) return;
  let l = Xx(r, () => e.getPath?.(s.data));
  if (typeof l !== "string" || l === "") return;
  let f = e.isReadOnly(s.data) ? ["read", "edit"] : ["edit", "read"],
    m = To(Ye(l, r)),
    h = O() === "macos" ? m.flatMap(item => [item, to(item)]) : m;
  for (let g of h) for (let A of f) {
    let S = Ra(g, o, A, "deny");
    if (S?.source === source_2) return S;
  }
  return;
}
function vkn(e) {
  let n = e.ruleValue.ruleContent ?? "";
  return n.startsWith("//") ? n.slice(1) : n;
}
function kkn(e) {
  if (e.ruleValue.toolName === toolName_3 || e.ruleValue.toolName === St) return "keychain";
  let n = e.ruleValue.ruleContent ?? "";
  if (OUn(Z()).includes(n)) return "personal_credential";
  if (/\/daemon\/dispatch\/\*\*$/.test(n)) return "exec_ingest";
  if (/\/Library\/Keychains\/\*\*$/.test(n)) return "keychain_files";
  if (/\/Microsoft\/(?:Credentials|Vault|Protect)\/\*\*$/.test(n)) return "credential_store_files";
  return e.ruleValue.toolName === toolName_2 ? "write" : "read";
}
var xe = 20000,
  oo = 5000,
  ro = 2000,
  Le = "This computer's own safety check did not clear this, so a person needs to approve it.";
function $e(e) {
  let n = e.trimEnd();
  if (n === "") return Le;
  return `${/[.!?\u2026]$/.test(n) ? n : `${n}.`} ${Le}`;
}
function We(e) {
  if (e === void 0) return xe;
  return Math.min(xe, e - Date.now() - oo);
}
async function Fe(e) {
  let n = Date.now(),
    o;
  if (e.capMs < ro) o = {
    verdict: "no_verdict",
    why: "no_budget"
  };else {
    let s = Ao(e.stopSignal, {
      timeoutMs: e.capMs,
      refTimer: !0
    });
    try {
      let l = Ife(e.tool.name, e.input);
      if (w_r(l, [e.tool]) === "") o = {
        verdict: "no_verdict",
        why: "not_run"
      };else {
        let f = await fie([], l, [e.tool], {
            ...e.permissionContext,
            alwaysDenyRules: so(e.permissionContext)
          }, s.signal, {
            isSubagentLoop: !1,
            recordPresumed: !1,
            onlyBuiltInContext: !0
          }),
          why = He(s.signal, e.stopSignal);
        if (why !== void 0) o = {
          verdict: "no_verdict",
          why: why
        };else if (f.classifierRan === !1) o = {
          verdict: "no_verdict",
          why: "not_run"
        };else if (f.unavailable === !0 || f.transcriptTooLong === !0 || f.refusedBySafeguard === !0 || f.failureMode !== void 0) o = {
          verdict: "no_verdict",
          why: "unavailable"
        };else o = {
          verdict: f.shouldBlock === !1 ? "allow" : "block"
        };
      }
    } catch (error) {
      let f = He(s.signal, e.stopSignal);
      if (f === void 0) d(error);
      o = {
        verdict: "no_verdict",
        why: f ?? "threw"
      };
    } finally {
      s.cleanup();
    }
  }
  let r = Date.now() - n;
  return i("tengu_remote_tool_serve", {
    op: y("second_check"),
    call_id: _e(e.callId),
    mode: y("enforce"),
    verdict: c(o.verdict),
    why: ue(o.verdict === "no_verdict" ? o.why : void 0),
    duration_ms: r,
    tool: On(e.tool.name)
  }), {
    ...o,
    ms: r
  };
}
function so(e) {
  let n = new Set(e.alwaysDenyRules[source_2]);
  return {
    [source_2]: Se().map(Mn).filter(item => n.has(item))
  };
}
function He(e, n) {
  if (n.aborted) return "stopped";
  return e.aborted ? "timeout" : void 0;
}
function Q(e) {
  return e === "auto" || e === "plan";
}
function Z9r(e) {
  if (e.callerKind !== "ccr_container") return;
  if (e.attested === !0) return "attested";
  return e.attested === !1 && Q(e.sessionMode) && e.askedInMode === e.sessionMode && e.classifierEligible && !e.autoModeRefusedHere && (e.sessionMode !== "plan" || e.planClaimBackedHere) && (Ekn.has(e.toolName) || e.isServedMcpTool) ? "auto_arm" : void 0;
}
function Be() {
  try {
    return x("tengu_violin_purfling", !1);
  } catch {
    return !1;
  }
}
function Ve() {
  try {
    return x("tengu_violin_purfling", !0) !== !1;
  } catch {
    return !0;
  }
}
import { homedir as ze } from "os";
import { isAbsolute as J, resolve as ne } from "path";
var io = 16,
  je = 64;
function te(e) {
  return DHe(e) || e === "PWD" || e === "OLDPWD";
}
function qe(e) {
  return !/^(?:LANG|LANGUAGE|LC_[A-Z]+)$/i.test(e) && te(e);
}
var ao = new Set(["export", "declare", "typeset", "readonly", "local", "unset"]),
  lo = new Set([...l6, ...che, ...oN, ...lCe, ...nq, "xargs", "parallel"]);
function Ke(e) {
  return e === "[" || e === "[[" || /^[A-Za-z0-9_.+:~/-]+$/.test(e);
}
async function Xe(e, n, o, r) {
  let s = o.behavior === "ask" && yp(o.decisionReason, Vpt) !== void 0;
  if (e.name === toolName_3) return typeof n.command === "string" ? co(n.command, r, s) : "uncertain";
  if (e.name !== St) return "none";
  if (s) return "settings";
  return o.behavior === "ask" && Qe(o) ? "uncertain" : "none";
}
function Qe(e) {
  let decisionReason = e.decisionReason;
  if (decisionReason?.type === "subcommandResults") {
    for (let o of decisionReason.reasons.values()) if (o.behavior === "ask" && Qe(o)) return !0;
    return !1;
  }
  if (decisionReason === void 0) return e.blockedPath === void 0;
  return decisionReason.type === "other";
}
async function co(e, n, o = !1) {
  let r = await Pz(e);
  if (r.kind !== "simple") return "uncertain";
  let s = r.bareAssignmentNames.some(te),
    l = [n],
    f = !0,
    m = !1,
    h = !0,
    g = 0;
  for (let A of r.commands) {
    let {
      simple: simple,
      wrapperWords: wrapperWords,
      pathSpelled: pathSpelled,
      doubt: doubt
    } = uo(A);
    if (doubt || fo(simple)) s = !0;
    let I = mo(simple, l);
    if (I === "unknown") f = !1;else if (I !== void 0) {
      if (l = I, simple.argv.slice(1).some(po)) f = !1;
    }
    let T = Ipo(simple);
    if (T.writesUnseen) s = !0;
    if (!T.known && I === void 0 && simple.argv.length > 0) h = !1;
    let D = u => J(u) || u.startsWith("~") ? [n] : l,
      N = [...wrapperWords, ...(T.known && !pathSpelled ? [] : simple.argv.slice(1)), ...simple.envVars.map(item => item.value)].flatMap(item => [item, ...(item.includes("=") ? [item.slice(item.indexOf("=") + 1)] : []), ...(/^-[^-]./.test(item) ? Array.from({
        length: item.length - 2
      }, (v, _) => item.slice(_ + 2)) : [])]);
    if (!T.known && I === void 0 && simple.argv.length > 0 && l.some(item => j(".", item))) s = !0;
    if (!f && N.some(item => item !== "" && !J(item) && !item.startsWith("~") && j(item, ne(n, ".claude")))) s = !0;
    for (let u of [...N, ...T.landings]) if (u !== "" && D(u).some(item => j(u, item))) s = !0;
    for (let u of T.written) {
      if (g++, g > je) return "uncertain";
      if (pi(u) || D(u) === l && !f) s = !0;
      for (let v of D(u)) {
        let _ = ee(u, v);
        if (_ === "settings") return "settings";
        if (_ === "uncertain") s = !0;
      }
    }
    for (let u of T.copySources) {
      if (g++, g > je) return "uncertain";
      if (D(u).some(item => ee(u, item) === "settings")) m = !0;
    }
  }
  if (s || o && !(m && h)) return "uncertain";
  return "none";
}
function uo(simple_2) {
  let [n, ...o] = simple_2.argv;
  if (n === void 0) return {
    simple: simple_2,
    wrapperWords: [],
    pathSpelled: !1,
    doubt: !1
  };
  let r = [Ge(n), ...o],
    argv = AL(ORt(r)),
    l = r.length - argv.length,
    f = l >= 0 && argv.every((item, index) => item === r[l + index]),
    wrapperWords_2 = f ? r.slice(0, l) : r,
    h = f && l === 0 ? n : argv[0],
    g = h === void 0 ? void 0 : Ge(h);
  return {
    simple: f && l === 0 && n === r[0] ? simple_2 : {
      ...simple_2,
      argv: argv,
      text: Yr(argv)
    },
    wrapperWords: wrapperWords_2,
    pathSpelled: n !== r[0] || h !== void 0 && h !== g,
    doubt: !f || !Ke(n) || [...wrapperWords_2, ...(h === void 0 ? [] : [h])].some(pi) || wrapperWords_2.some(item => item.startsWith("-") && item !== "-" && item !== "--" || qe(/^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(item)?.[1] ?? "")) || h !== void 0 && g !== void 0 && (!Ke(h) || g.startsWith("-") || lo.has(g))
  };
}
function Ge(e) {
  return e.replace(O() === "windows" ? /^.*[\\/]/ : /^.*\//, "");
}
function fo(e) {
  let [n, ...o] = e.argv;
  return e.envVars.some(item => qe(item.name)) || n !== void 0 && ao.has(n) && o.some(item => {
    let s = item.split(/\+?=/, 1)[0] ?? "";
    return pi(s) || te(s);
  });
}
function ee(e, n) {
  let o = c0(e, n, np(), "write");
  if (o.allowed) return "none";
  if (o.decisionReason?.type === "safetyCheck") return Vpt(o.decisionReason) ? "settings" : "none";
  if (o.decisionReason?.type !== "other") return "none";
  return j(e, n) ? "settings" : "uncertain";
}
function j(e, n) {
  let o = ne(n, nd(O() === "windows" ? e.replaceAll("\\", "/") : e)),
    r = n6(o, [o]);
  return !r.safe && Vpt(r);
}
function mo(e, n) {
  let [o, ...r] = e.argv;
  if (o === "popd") return "unknown";
  if (o !== "cd" && o !== "chdir" && o !== "pushd") return;
  let s = [],
    l = !1;
  for (let g of r) {
    if (!l) {
      if (g === "--") {
        l = !0;
        continue;
      }
      if (g.startsWith("-") && g !== "-") continue;
      l = !0;
    }
    s.push(g);
  }
  let f = s[0];
  if (f === void 0) return o === "pushd" ? "unknown" : Ze(n, [ze()]);
  if (s.length > 1 || f === "-" || o === "pushd" && /^[+-]\d+$/.test(f) || pi(f) || ee(f, n[0] ?? ze()) === "uncertain") return "unknown";
  let m = nd(f),
    h = J(m) ? [m] : n.map(item => ne(item, m));
  return Ze(n, [...h, ...h.flatMap(go)]);
}
function po(e) {
  let n = !1;
  for (let o of e.split(/[\\/]/)) if (o === "..") {
    if (n) return !0;
  } else if (o !== "" && o !== ".") n = !0;
  return !1;
}
function go(e) {
  try {
    return To(e).filter(item => item !== e);
  } catch {
    return [];
  }
}
function Ze(e, n) {
  let o = L([...e, ...n]);
  return o.length > io ? "unknown" : o;
}
var So = 16,
  WVt = "remote_call_session_answer",
  destructive = "remote_call_destructive_ask",
  classifier = "remote_call_classifier_ask",
  F = "remote_call_served_mcp_ask",
  reason_4 = "remote_call_host_settings_shell_write",
  unresolved_shell_write = "remote_call_unresolved_shell_write_ask",
  Tkn = !1;
function rn(e) {
  return e.isMcp === !0 || !py(e).supported;
}
function Co(e) {
  return `This command is flagged as destructive. ${e} asks before running destructive commands sent from a cloud session.`;
}
var reason_3 = "remote_call_stopped",
  re = {
    behavior: "deny",
    message: "The remote session's call was stopped before it was answered; it did not run.",
    decisionReason: {
      type: "other",
      reason: reason_3
    },
    decideLocation: "ask-path"
  },
  wo = new Set(["default", "plan", "dontAsk", "acceptEdits"]);
function Rtr(e) {
  if (e.stance.mode !== "session") return {
    mode: e.stance.mode,
    capped: !1,
    autoRefusedHere: !1
  };
  let n = e.sessionMode ?? "default",
    autoRefusedHere = e.sessionMode === "auto" || e.sessionMode === "bypassPermissions";
  if (se(e.sessionMode)) return {
    mode: "acceptEdits",
    capped: n === "bypassPermissions",
    autoRefusedHere: !1
  };
  return {
    mode: wo.has(n) ? n : "default",
    capped: n === "bypassPermissions",
    autoRefusedHere: autoRefusedHere
  };
}
var reason_5 = "remote_call_auto_mode_allowlist";
function se(e) {
  return (e === "auto" || e === "bypassPermissions") && !q_t();
}
function K_t(e) {
  return e === "plan" && !q_t() && K$t();
}
function ko(e) {
  return !1;
}
function zVt(e) {
  let {
      mode: mode
    } = Rtr({
      stance: e.stance,
      sessionMode: e.sessionMode
    }),
    o = se(e.sessionMode) || K_t(e.sessionMode),
    r = Lb(),
    s = GHn(),
    l = s.launchedInAutoMode || Xf(),
    f = e.stance.honorLocalRules ? [...vz(), ...(r ? [] : s.allowRules.map(item => ({
      source: "cliArg",
      ruleBehavior: "allow",
      ruleValue: Jn(item)
    }))), ...VHn(s)] : [],
    m = new Set(GAn(f).map(item => Mn(item.ruleValue))),
    h = f.filter(item => !en(item.ruleBehavior, item.ruleValue, o || item.source === "cliArg" && l) && !(item.ruleBehavior === "allow" && m.has(Mn(item.ruleValue)))),
    g = mie(np(), h),
    A = {
      ...g,
      alwaysDenyRules: Oo(g.alwaysDenyRules, e.stance.honorLocalRules && s.toolsNarrowingDenyRules.length > 0 ? {
        toolsNarrowing: [...s.toolsNarrowingDenyRules]
      } : {}),
      additionalWorkingDirectories: new Map([...(e.stance.honorLocalRules ? [...s.additionalWorkingDirectories].flatMap(([, R]) => {
        let b = {
          ...R,
          path: Unn(R.path)
        };
        if (TKe(R.path) || !bo(b)) return [];
        return [[b.path, b]];
      }) : []), [e.launchDir, {
        path: e.launchDir,
        source: "session"
      }]]),
      mode: mode,
      isBypassPermissionsModeAvailable: mode === "bypassPermissions",
      shouldAvoidPermissionPrompts: !1,
      servedCall: !0,
      ...(e.stance.honorLocalRules && KTe() && {
        blockReadsOutsideWorkingDirectories: !0
      }),
      ...((U() || !Ldo()) && {
        sandboxAutoAllowSuspended: !0
      })
    };
  if (e.stance.honorLocalRules) {
    let cliarg_allows = s.allowRules.length;
    Po({
      cliarg_allows: cliarg_allows,
      cliarg_allows_kept: (A.alwaysAllowRules.cliArg ?? []).length,
      startup_dirs: s.additionalWorkingDirectories.size,
      startup_dirs_kept: A.additionalWorkingDirectories.size - 1
    });
  }
  let S = (e.sessionUpdates ?? []).filter(item => item.type === "addRules" && !(r && item.behavior === "allow") && !item.rules.some(b => en(item.behavior, b, o)) && !(item.behavior === "allow" && GAn(item.rules.map(b => ({
    source: "session",
    ruleBehavior: "allow",
    ruleValue: b
  }))).length > 0));
  return S.length > 0 ? {
    ...px(A, S),
    mode: mode
  } : A;
}
function bo(e) {
  return !TKe(e.path);
}
var Je = new Set();
function Po(e) {
  if (e.cliarg_allows === e.cliarg_allows_kept && e.startup_dirs === e.startup_dirs_kept) return;
  let n = Object.entries(e).map(([o, r]) => `${o}=${r}`).join(" ");
  if (Je.has(n)) return;
  Je.add(n), t(`[remote-tools] served-context screens dropped rules ${n}`);
}
function Oo(e, n) {
  return {
    ...e,
    ...n,
    [source_2]: ye().map(Mn)
  };
}
function en(e, n, o) {
  return e === "allow" && o && (Sle(n.toolName, n.ruleContent) || $zn(n.toolName));
}
function eXr(e) {
  return async (tool, o, r, s, callId_2, f) => {
    let m = f !== void 0 && f.behavior !== "allow" ? f : await Bp(tool, o, r, s, callId_2),
      h = Te(tool, o),
      g = h?.kind === "ask",
      rule = m.behavior === "deny" ? X(m.decisionReason) : (await Pe(tool, o)) ?? (h?.kind === "deny" ? h.rule : void 0),
      S = m;
    if (rule !== void 0) {
      let kind = kkn(rule),
        message_3 = VVt({
          targetName: e.targetName,
          kind: kind,
          subject: kind === "keychain" && typeof o.command === "string" ? o.command : vkn(rule)
        });
      S = m.behavior === "deny" ? {
        ...m,
        message: message_3
      } : {
        behavior: "deny",
        decisionReason: {
          type: "rule",
          rule: rule
        },
        message: message_3
      };
    }
    let R = S.behavior !== "deny" && tG(tool) && Be() ? await Xe(tool, "updatedInput" in S && S.updatedInput !== void 0 ? S.updatedInput : o, S, oe()) : "none";
    if (R !== "none") i("tengu_served_shell_settings_hold", {
      verdict: c(R),
      tool: c(tool.name === toolName_3 ? "bash" : "powershell")
    });
    if (R === "settings") S = {
      behavior: "deny",
      message: cXr({
        targetName: e.targetName
      }),
      decisionReason: {
        type: "other",
        reason: reason_4
      }
    };
    let unresolvedShellWrite = R === "uncertain",
      M = e.stance.askOnDestructive && tool.name === toolName_3 && typeof o.command === "string" && o.command !== "" && q7t(o.command),
      I = rn(tool) && (Tkn || g),
      T = se(e.sessionMode),
      D = e.sessionModel !== void 0 && T && S.behavior === "allow" && S.decisionReason?.type === "mode" && S.decisionReason.mode === "acceptEdits" && VQt(tool.name) && Jpo(e.sessionModel),
      N = (T || K_t(e.sessionMode)) && ko(tool.name),
      raisedToAsk = (M || I || D || N || unresolvedShellWrite) && S.behavior === "allow",
      v = S.behavior === "allow" && S.decisionReason?.type === "classifier",
      _ = raisedToAsk || v ? Do(S, e.targetName, I ? g ? "served_mcp_path" : "served_mcp" : M ? "destructive" : unresolvedShellWrite ? "unresolved_shell_write" : "classifier") : S,
      forcedByHook = f !== void 0 && S === f,
      C = g && _.behavior === "ask" && !forcedByHook && _.decisionReason?.type !== "hook" && !(_.decisionReason?.type === "other" && _.decisionReason.reason === F) ? {
        ..._,
        decisionReason: {
          type: "other",
          reason: F
        }
      } : _;
    if (!e.stopSignal.aborted && T && C.behavior === "ask" && C.localDisplayOnly !== !0 && an(C, tool, forcedByHook || r.hookAskFloor === !0, me(r), unresolvedShellWrite) && jQt(tool.name, o)) {
      let P = {
        behavior: "allow",
        updatedInput: "updatedInput" in C && C.updatedInput !== void 0 ? C.updatedInput : o,
        decisionReason: {
          type: "other",
          reason: reason_5
        }
      };
      return e.onOutcome({
        kind: tn(P, P),
        raisedToAsk: raisedToAsk,
        allowBasis: "auto_allowlist"
      }), P;
    }
    let k = await No(C, e, o, r, {
      raisedToAsk: raisedToAsk,
      tool: tool,
      forcedByHook: forcedByHook,
      callId: callId_2,
      unresolvedShellWrite: unresolvedShellWrite
    });
    return e.onOutcome({
      kind: tn(k, C),
      raisedToAsk: raisedToAsk,
      ...(C.behavior === "allow" && {
        allowBasis: C.decisionReason?.type ?? "unspecified"
      }),
      ...(C.behavior === "deny" && {
        denySource: ln(C.decisionReason)
      })
    }), k;
  };
}
function Io(e, n) {
  let o = DS(e, n);
  if (!o.success) return n;
  let r = {
    ...o.data
  };
  return e.backfillObservableInput?.(r), r;
}
function Mo(e, n) {
  let o = s => Object.keys(s).filter(item => s[item] !== void 0),
    r = o(e);
  return r.length === o(n).length && r.every(item => n[item] !== void 0 && yo(e[item], n[item]));
}
function Do(e, n, o = "destructive") {
  if (e.behavior !== "allow") return e;
  let r = {
      destructive: Co(n),
      classifier: `${n} would not decide this one on its own \u2014 it needs approval in this session.`,
      unresolved_shell_write: `${n} could not work out everything this command writes, so it cannot rule out a change to its own Claude Code settings files. A person needs to approve it in this session.`,
      served_mcp: `${n} asks before one of its own MCP tools runs for a cloud session.`,
      served_mcp_path: `${n} asks before one of its own MCP tools runs with a path it cannot vouch for from here (a relative path, a pattern, a variable, an encoded or quoted spelling, or a directory above its Claude credentials) \u2014 check it does not reach this machine's Claude credentials before approving.`
    },
    s = {
      destructive: destructive,
      classifier: classifier,
      unresolved_shell_write: unresolved_shell_write,
      served_mcp: F,
      served_mcp_path: F
    };
  return {
    behavior: "ask",
    message: r[o],
    updatedInput: e.updatedInput,
    decisionReason: {
      type: "other",
      reason: s[o]
    }
  };
}
async function No(e, n, o, r, s) {
  if (e.behavior !== "ask") return e;
  let l = "updatedInput" in e && e.updatedInput !== void 0 ? e.updatedInput : o,
    f = !Mo(l, Io(s.tool, n.forwardedInput));
  if (f) t(`[remote-tools call=${s.callId}] ask input rewritten by a hook here; prior answer and classifier set aside tool=${s.tool.name}`);
  if (n.stance.onAsk === "allow") return {
    behavior: "allow",
    updatedInput: l,
    decisionReason: e.decisionReason
  };
  if (n.stopSignal.aborted) return re;
  if (e.behavior === "ask" && e.localDisplayOnly === !0) return mwe(s.tool.name, "a cloud session");
  let m = nn(e, r, s, f, n.sessionMode),
    h = m && (await Fe({
      tool: s.tool,
      input: l,
      permissionContext: me(r),
      stopSignal: n.stopSignal,
      callId: r.remoteCall?.origin.callId ?? s.callId,
      capMs: We(n.legDeadlineAt)
    })).verdict !== "allow";
  if (n.stopSignal.aborted) return re;
  let g = !m || nn(e, r, s, f, n.sessionMode),
    promise = new Promise((answer, b) => {
      try {
        n.onAsk({
          message: e.decisionReason?.type === "hook" ? `PreToolUse hook on ${n.targetName}: ${e.message}` : e.message,
          ...(h && {
            message: $e(e.message)
          }),
          input: l,
          decisionReason: e.decisionReason?.type,
          heldHook: e.decisionReason?.type === "hook" && e.decisionReason.heldForServedCall === !0,
          raisedToAsk: s.raisedToAsk,
          classifierEligible: m && g && !h,
          priorAnswerOk: !f && xo(e, s.tool, s.forcedByHook || r.hookAskFloor === !0, l),
          standingRowOffered: !f && on(e),
          suggestions: !f && on(e) ? Lo(e) : [],
          answer: answer
        });
      } catch (error) {
        b(error);
      }
    }),
    S = await Ho(promise.catch(() => {
      return;
    }), n.stopSignal);
  return S === void 0 || n.stopSignal.aborted ? re : S;
}
function nn(e, n, o, r, s) {
  return !r && Q(s) && (s !== "plan" || K_t(s)) && an(e, o.tool, o.forcedByHook || n.hookAskFloor === !0, me(n), o.unresolvedShellWrite);
}
function an(e, n, o, r, s) {
  if (e.behavior !== "ask" || o || s) return !1;
  if (q_t()) return !1;
  if (n.requiresUserInteraction?.() === !0) return !1;
  if (n.mcpInfo?.effectiveMaxPermission === "ask") return !1;
  if (Tkn && rn(n) || e.decisionReason?.type === "other" && e.decisionReason.reason === F) return !1;
  if (e.decisionReason?.type === "hook") return !1;
  if (e.decisionReason?.type === "mode" && e.decisionReason.mode === "plan") return !1;
  if (JQt(e.decisionReason, r)) return !1;
  let l = Ofe(e.decisionReason) || e.matchedAskRule?.ruleBehavior === "ask",
    f = XDn(e.decisionReason) || e.matchedAskRule?.source === "mcpServerPolicy";
  if (l && !f) return !1;
  return yp(e.decisionReason, m => !m.classifierApprovable || Vpt(m) && Ve()) === void 0;
}
function xo(e, n, o, r = {}) {
  if (e.behavior !== "ask" || o) return !1;
  if (r.dangerouslyDisableSandbox === !0) return !1;
  if (n.requiresUserInteraction?.() === !0) return !1;
  if (e.decisionReason?.type === "hook") return !1;
  if (e.decisionReason?.type === "sandboxOverride") return !1;
  return yp(e.decisionReason, () => !0) === void 0;
}
function on(e) {
  return ZB() && e.behavior === "ask" && e.suggestions !== void 0 && e.suggestions.some(item => item.type === "addRules") && e.suppressAlwaysAllowRule !== !0 && yp(e.decisionReason, n => !n.classifierApprovable) === void 0;
}
function Lo(e) {
  if (e.behavior !== "ask" || e.suggestions === void 0) return [];
  return e.suggestions.flatMap(item => item.type === "addRules" ? item.rules.map(item => Mn(item)) : []).slice(0, So);
}
function Ho(e, n) {
  return new Promise(o => {
    if (n.aborted) {
      o(void 0);
      return;
    }
    let r = () => o(void 0);
    n.addEventListener("abort", r, {
      once: !0
    }), e.then(o).finally(() => n.removeEventListener("abort", r));
  });
}
function ln(e) {
  if (e?.type === "rule") return e.rule.source;
  if (e?.type === "subcommandResults") for (let [, n] of e.reasons) {
    let o = n.behavior === "deny" ? ln(n.decisionReason) : void 0;
    if (o !== void 0) return o;
  }
  return;
}
function tn(e, n) {
  if (n.behavior !== "ask") return e.behavior === "allow" ? "allowed" : "denied_by_rule";
  if (e.behavior === "allow") return "approved_by_session";
  let o = e.behavior === "deny" && e.decisionReason.type === "other" ? e.decisionReason.reason : void 0;
  if (o !== void 0 && O5t(o)) return "ask_refused_no_surface";
  return o === reason_3 || o === reason_2 ? "stopped" : "denied_by_session";
}
var Wo = "nested remote execution is not supported: a served call cannot name another machine.",
  Ckn = "_simulatedSedEdit",
  Fo = new Map();
function Y_t() {
  return Fo;
}
function Rkn(e, n) {
  if (n.size === 0) return e;
  let o = new Set(n.values());
  return Object.fromEntries(Object.entries(e).filter(([r]) => !o.has(r)).map(([r, s]) => [n.get(r) ?? r, s]));
}
function tXr(e, n) {
  if (n.size === 0) return e;
  let o = new Map([...n].map(([r, s]) => [s, r]));
  return iee(e, (r, s) => o.get(s) ?? s);
}
function nXr(e, n) {
  if (e === void 0) return;
  let o = e[dr] === n ? ss(e, [dr]) : e;
  return Object.keys(o).length === 0 ? void 0 : o;
}
function X_t(e, n, targetName) {
  if (dr in e) return Wo;
  let field = n.find(item => Boolean(e[item]));
  return field === void 0 ? void 0 : GVt({
    field: field,
    targetName: targetName
  });
}
function yQe(e, n) {
  return ss(e, [Ckn, ...n]);
}
function rXr(e, n) {
  return Object.fromEntries(Object.keys(n).filter(item => Object.hasOwn(e, item)).map(item => [item, n[item]]));
}
export { G9r, Wj, eG, hQe, wkn, V_t, V9r, q9r, K9r, Ttr, Y9r, C5, X9r, Ctr, J9r, q_t, source_2 as uoe, Q9r, vkn, kkn, Ekn, Z9r, WVt, Tkn, Rtr, K_t, zVt, eXr, Ckn, Y_t, Rkn, tXr, nXr, X_t, yQe, rXr };