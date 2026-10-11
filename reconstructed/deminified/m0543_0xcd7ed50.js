// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { i_, en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Nt, Y, mh, we, iT, fd, BD, fp, Mmt, Dmt, Wo, dQ, Tyn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { v, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Rt, Dn, zh, Gh, Ka, Yi, rS, qg, ns, U2 } from "B:/~BUN/root/chunk-54p0h65d.js";
import { sce, Vr, Dh, R0, cRe, Lh, Be, Tt, Vd, U6, Pl, e_, Cc, Gut } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { wBo, iH, I_e, ff, ph, mf, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { RY, $Ue } from "B:/~BUN/root/chunk-339q6g5w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { Yx, Bo } from "B:/~BUN/root/chunk-2swveyqa.js";
import { gu } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { Hg } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { MHo, rc } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { _d, HF } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { UK } from "B:/~BUN/root/chunk-wkrgyaen.js";
import { HG, EJt, vdo, uk, KU, AT, yfe, CMe, WGe, gRt, AW, Cve, NP, Mfe, o7t, jp, $rt, _f, _a, TZ, tV, Iie, Oie, Xve, nF, eke, BP, Nie, $t, wDe, oen, sen } from "B:/~BUN/root/chunk-3jyp964r.js";
import { hpe, PRn, TOe, bze, YSe } from "B:/~BUN/root/chunk-ncdxkfma.js";
import { Vl } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { bd, a1 } from "B:/~BUN/root/chunk-mrt797ke.js";
import { no } from "B:/~BUN/root/chunk-ewvnv67m.js";
import { x9 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { xR } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { lhe } from "B:/~BUN/root/chunk-6bn0bbdx.js";
import { Ky, xl } from "B:/~BUN/root/chunk-ewv6w8xv.js";
import { FTe } from "B:/~BUN/root/chunk-196w7fz7.js";
import { lae } from "B:/~BUN/root/chunk-je63fn7b.js";
import { Mb } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { fv } from "B:/~BUN/root/chunk-m1qtc24s.js";
import { KOe } from "B:/~BUN/root/chunk-gs52gs75.js";
import { vWe } from "B:/~BUN/root/chunk-26h5tsc5.js";
import { _Yr, Lre } from "B:/~BUN/root/chunk-h2ezagpq.js";
import { Iar, Oar } from "B:/~BUN/root/chunk-vxth281g.js";
import { g6t } from "B:/~BUN/root/chunk-h8a5cy3z.js";
import { Qoe } from "B:/~BUN/root/chunk-mht1nqv1.js";
import { xin, p3e } from "B:/~BUN/root/chunk-07stbc6s.js";
import { cy } from "B:/~BUN/root/chunk-q1gfnztc.js";
import { Jt, Ln } from "B:/~BUN/root/chunk-r833zsf7.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { appendFile as He, readdir as je, rename as de, rmdir as le } from "fs/promises";
import { basename as V, dirname as Ue, join as I, relative as G } from "path";
class K {
  filePath = null;
  key = void 0;
  timestamp = 0;
  recorder = null;
  failed = !1;
  setFile(e, o, r) {
    this.filePath = e, this.key = r, this.timestamp = o;
  }
  setFilePath(e, o) {
    this.filePath = e, this.key = o;
  }
  setRecorder(e) {
    this.recorder = e;
  }
  markFailed() {
    this.failed = !0;
  }
}
function ce(projectKey, sessionId, r) {
  return {
    namespace: "recording",
    projectKey: projectKey,
    sessionId: sessionId,
    stamp: String(r)
  };
}
var me = new Nt(() => new K());
async function Fzt(e, o) {
  let r = me.of(e),
    filePath = r.filePath;
  if (!filePath || r.timestamp === 0) return;
  let s = gu(we()),
    u = r.key,
    l = HF(s);
  if (H() && o !== void 0 && u !== void 0 && l !== void 0) {
    if (r.failed) return;
    let k = Y(),
      R = I(s, k, `${r.timestamp}.cast`);
    if (filePath === R) return;
    let P = ce(l, k, r.timestamp),
      w = G(s, filePath),
      b = G(s, R),
      A = async () => {
        if (r.failed) return;
        try {
          await fe(o, u, P), r.setFilePath(R, P), t(`[asciicast] Renamed recording: ${w} \u2192 ${b}`);
        } catch {
          t(`[asciicast] Failed to rename recording from ${w} to ${b}`);
        }
      };
    await (r.recorder?.park(A) ?? A());
    return;
  }
  let m = I(s, `${Y()}-${r.timestamp}.cast`);
  if (filePath === m) return;
  await r.recorder?.flush();
  let f = V(filePath),
    g = V(m);
  try {
    await de(filePath, m), r.setFilePath(m), t(`[asciicast] Renamed recording: ${f} \u2192 ${g}`);
  } catch {
    t(`[asciicast] Failed to rename recording from ${f} to ${g}`);
  }
}
async function fe(e, o, r) {
  wBo(await e.move(o, r)), await le(I(_d(), o.projectKey, o.sessionId)).catch(() => {});
}
import { dirname as re, resolve as ke, win32 as ne } from "path";
import { realpathSync as Se, statSync as Re } from "fs";
import { open as pe, readdir as ge, unlink as z } from "fs/promises";
import { join as q } from "path";
var he = 200,
  ye = 64;
function E() {
  if (Wo() || _a()) return null;
  try {
    return q(xR(), Y(), Iar);
  } catch (error) {
    return t(`Image store unavailable: ${error}`, {
      level: "warn"
    }), null;
  }
}
function u6r() {
  return E() !== null;
}
async function bbn() {
  let e = E();
  if (e === null) return 0;
  let o;
  try {
    o = await ge(e);
  } catch (error) {
    if (!Et(error)) t(`Could not list stored images: ${error}`, {
      level: "warn"
    });
    return 0;
  }
  let r = 0;
  for (let n of o) {
    let s = Number(Oar.exec(n)?.[1]);
    if (Number.isSafeInteger(s) && s > r) r = s;
  }
  return r;
}
function X(e) {
  if (!Number.isSafeInteger(e.id) || e.id < 0 || typeof e.content !== "string" || e.content === "") return null;
  let o = E();
  if (o === null) return null;
  let r = p3e(e.content.slice(0, ye));
  return q(o, `${e.id}.${xin[r]}`);
}
function iue(e, o) {
  if (e.type !== "image") return null;
  let r = X(e);
  if (r !== null) o(n => D(n, e.id, r));
  return r;
}
async function aue(e, o) {
  let r = await J(e);
  if (r) o(n => D(n, e.id, r));
  return r;
}
async function p6r(e, o) {
  let r = new Map();
  for (let [n, s] of Object.entries(e)) if (s.type === "image") {
    let u = await J(s);
    if (u) r.set(Number(n), u);
  }
  if (r.size > 0) o(n => {
    let s = n;
    for (let [u, l] of r) s = D(s, u, l);
    return s;
  });
  return r;
}
async function J(e) {
  if (e.type !== "image") return null;
  try {
    let o = X(e);
    if (o === null) return null;
    let r = await cy(o, [o], {
        createParents: !0,
        leaf: "replace"
      }),
      n = Yx(r.ioPath),
      s = !1;
    try {
      let u = await pe(n, "wx", 384);
      s = !0;
      try {
        await u.writeFile(e.content, {
          encoding: "base64"
        }), await u.datasync();
      } finally {
        await u.close();
      }
      await r.recheckBeforeWrite();
      try {
        await Bo(n, r.ioPath);
      } catch (error) {
        if (v(error) !== "EEXIST") throw error;
        await r.recheckBeforeWrite(), await z(r.ioPath).catch(() => {}), await r.recheckBeforeWrite(), await Bo(n, r.ioPath);
      }
      s = !1;
    } finally {
      if (s) try {
        await r.recheckBeforeWrite(), await z(n);
      } catch {}
      await r.close();
    }
    return t(`Stored image ${e.id} to ${o}`), o;
  } catch (error) {
    return t(`Failed to store image: ${error}`), null;
  }
}
function D(e, o, r) {
  if (e.get(o) === r) return e;
  let n = new Map(e);
  if (!n.has(o)) while (n.size >= he) {
    let s = n.keys().next().value;
    if (s === void 0) break;
    n.delete(s);
  }
  return n.set(o, r), n;
}
function mPe(e) {
  if (!e || !g6t(e.hooks)) {
    Tyn(void 0);
    return;
  }
  let o = !bd("hooks") || a1(e.source),
    r = CMe(e);
  if (o && r) {
    Tyn(e.hooks);
    return;
  }
  if (o && !r) WGe(e, "mainThread");
  Tyn(void 0);
}
var Q = Rt({
  recorded: null
}, e => {
  e.recorded = null;
});
function Sbn({
  sourceSessionId: sourceSessionId,
  transcriptPath: transcriptPath
}) {
  let sessionId_2 = en(sourceSessionId);
  Q.recorded = sessionId_2 === null ? null : {
    liveSessionId: Y(),
    source: {
      sessionId: sessionId_2,
      transcriptPath: transcriptPath ?? _f(sessionId_2)
    }
  };
}
function f6r() {
  let {
    recorded: recorded
  } = Q;
  return recorded !== null && recorded.liveSessionId === Y() ? recorded.source : null;
}
function Pe(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r?.type !== "assistant") continue;
    let n = r.message.content.find(item => item.type === "tool_use" && item.name === Mb);
    if (!n || n.type !== "tool_use") continue;
    let input = n.input;
    if (input === null || typeof input !== "object") return [];
    let u = wDe().safeParse(input.todos);
    return u.success ? u.data : [];
  }
  return [];
}
function DJn(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) return !1;
  let o = en(e.resume);
  if (!o) return !1;
  return mh(i_(o), "resume"), !0;
}
function RXe(e, o, r, n) {
  try {
    Mfe(e.messages ?? []);
  } catch (error) {
    d(error);
  }
  if (bbn().then(o7t).catch(d), e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0) gRt(e.fileHistorySnapshots, fileHistory => {
    o(u => ({
      ...u,
      fileHistory: fileHistory
    }));
  });
  if (import.meta.require("B:/~BUN/root/chunk-0mm3sc8p.js").restoreGoalFromTranscript(e.messages, o, r), !fv() && e.messages && e.messages.length > 0) {
    let s = Pe(e.messages);
    if (s.length > 0) {
      let u = Y();
      o(l => ({
        ...l,
        todos: {
          ...l.todos,
          [u]: s
        }
      }));
    }
  }
}
function be(e) {
  return;
}
function AXe(e, o) {
  if (!e && !o) return;
  return {
    name: e ?? "",
    color: o === "default" ? void 0 : o
  };
}
function Ore(e, agentDefinition, r, n) {
  if (agentDefinition) return {
    agentDefinition: agentDefinition,
    agentType: void 0
  };
  if (!e) return dQ(void 0), mPe(void 0), {
    agentDefinition: void 0,
    agentType: void 0
  };
  let s = n?.sessionAgentDefinitions ? AW(n.sessionAgentDefinitions.activeAgents, e) : void 0,
    agentDefinition_2 = s ?? AW(r.activeAgents, e);
  if (s) t(`Resume: agent "${e}" restored from the session home set (${n?.sessionCwd ?? "unknown"})`);
  if (!agentDefinition_2) {
    if (t(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`), e !== KOe.agentType) {
      if (p("session_resume", "agent_resolve_miss"), n?.onResolveMiss) {
        let l = we(),
          m = n.sessionAgentDefinitions && n.sessionCwd && n.sessionCwd !== l ? `${n.sessionCwd} or ${l}` : l;
        n.onResolveMiss(Tn(`This session was running agent '${e}', which is no longer available (no agent by that name in ${m}). ` + "Continuing with the default tools and system prompt \u2014 the agent's tool restrictions no longer apply. " + "To restore it, re-create the agent, or resume with an explicit --agent <name>."));
      }
    }
    return dQ(void 0), mPe(void 0), {
      agentDefinition: void 0,
      agentType: void 0
    };
  }
  if (dQ(agentDefinition_2.agentType), mPe(agentDefinition_2), !fd() && agentDefinition_2.model && agentDefinition_2.model !== "inherit") {
    let l = Tt(agentDefinition_2.model);
    if (Lh(l) || Vr(l)) fp(l);else t(`Agent model "${agentDefinition_2.model}" is not in the availableModels allowlist; keeping the session model`, {
      level: "warn"
    });
  }
  return {
    agentDefinition: agentDefinition_2,
    agentType: agentDefinition_2.agentType
  };
}
async function dbe(e, o) {
  if (!e || e === we()) return;
  let r = ke(e);
  if (Dn(e) || Dn(r) || Gh(e) || Gh(r) || Gh(ne.normalize(e)) || qg(e) || qg(r) || Ka(e)) {
    t(`Resume: refusing cross-host session home shape "${e}"`);
    return;
  }
  if (await I_e(e)) {
    t(`Resume: refusing session home with unverifiable ancestry "${e}"`);
    return;
  }
  if (!Gut(e)) {
    t(`Resume: not loading agents from session home "${e}" \u2014 workspace trust not persisted for it`);
    return;
  }
  try {
    return await NP(e, o);
  } catch {
    return;
  }
}
function LJn(e) {
  if (!e.resumedAgentSetting || e.mainThreadAgentType) return {
    attempt: !1,
    loud: !1
  };
  if (e.hasStreamingInput) return {
    attempt: !e.explicitAgentFlag,
    loud: !1
  };
  return {
    attempt: !0,
    loud: !0
  };
}
async function Ae(e, o) {
  if (o || !e) return;
  let r = Hg(e);
  if (r === void 0) return;
  if (r === "plan" || r === "bypassPermissions") return;
  if (r === "default") {
    let {
      isAutoModeFromFallback: isAutoModeFromFallback,
      setProvisionalStartupMode: setProvisionalStartupMode
    } = await import("B:/~BUN/root/chunk-kqfd541t.js");
    if (setProvisionalStartupMode(void 0), isAutoModeFromFallback()) return "default";
    return;
  }
  if (r === "auto") {
    let {
      isAutoModeGateEnabled: isAutoModeGateEnabled
    } = await import("B:/~BUN/root/chunk-7nsmenh3.js");
    if (!isAutoModeGateEnabled()) return;
  }
  return r;
}
var ve = {
  unknown_family: "not a model this version of Claude Code recognizes",
  not_allowed: "not allowed by this account's model settings",
  retired: "retired"
};
function p1e() {
  return Boolean(fd() !== void 0 || a.ANTHROPIC_MODEL || a.ANTHROPIC_DEFAULT_FABLE_MODEL || a.ANTHROPIC_DEFAULT_OPUS_MODEL || a.ANTHROPIC_DEFAULT_SONNET_MODEL || a.ANTHROPIC_DEFAULT_HAIKU_MODEL || cRe() || !rc());
}
async function ube(e, o, r, {
  scheduleTelemetry = l => l(),
  storageV5: storageV5,
  credentials: credentials
} = {}) {
  if (p1e()) return;
  let l = F(e, o),
    m = l.kind === "declined" && l.reason === "not_allowed" ? await Qoe(l.model, storageV5, credentials) : void 0;
  if (m !== void 0 && p1e()) return;
  let f = m === "overturned" ? F(e, o) : l;
  if (f.kind === "none") return;
  if (f.kind === "mode_dependent_setting") {
    scheduleTelemetry(() => i("tengu_resume_model_restore", {
      outcome: c("skipped_mode_dependent_setting"),
      is_eap: !1
    }));
    return;
  }
  if (f.kind === "declined") scheduleTelemetry(() => i("tengu_resume_model_restore", {
    outcome: c("declined"),
    decline_reason: ue(f.reason),
    entitlement_reprobe: ue(m),
    is_eap: lhe(f.model)
  }));
  if (f.kind === "declined") {
    let g = o && Ln(o) || "the default model";
    r?.(`Session model ${f.model} could not be restored (${ve[f.reason]}) \u2014 using ${g} instead.`);
    return;
  }
  return f.model;
}
function NJn(e, o) {
  let r = F(e, o);
  return r.kind === "ok" ? r.model : void 0;
}
function Te(e, o) {
  if (e === "opusplan") return o.includes("opus") || o.includes("sonnet");
  if (e === "haiku") return o.includes("haiku") || o.includes("sonnet");
  return !1;
}
function F(e, o) {
  let r = new Set(MHo.map(item => Be(item))),
    n = o ? Tt(o) : void 0,
    s = n ? Ln(n) : void 0;
  for (let u = e.length - 1; u >= 0; u--) {
    let l = e[u];
    if (l?.type !== "assistant" || l.isMeta || typeof l.message?.model !== "string" || l.message.model === Pl) continue;
    let model = l.message.model,
      f = Dh(),
      g = typeof f === "string" ? Jt(f) : f;
    if (R0(g) && !lhe(model) && Te(g, Be(model))) return {
      kind: "mode_dependent_setting"
    };
    let reason = !(r.has(Be(model)) || lhe(model) || Ln(model) === s) ? "unknown_family" : !Lh(model) && !Vr(model) ? "not_allowed" : sce(model) ? "retired" : void 0;
    if (reason) return {
      kind: "declined",
      model: model,
      reason: reason
    };
    let P = (o && Vd(o) || n !== void 0 && Vd(n)) && (Ln(model) === s || o && Be(Tt(Ln(o))) === Be(model)),
      w = EJt(e)?.modelId,
      b = w !== void 0 && Vd(w) && Be(Ln(w)) === Be(model);
    if ((P || b) && U6(model)) return {
      kind: "ok",
      model: model + "[1m]"
    };
    return {
      kind: "ok",
      model: model
    };
  }
  return {
    kind: "none"
  };
}
function ie(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r?.type === "system" && r.subtype === "model_refusal_fallback") return r;
  }
  return;
}
function _e(e, o) {
  let r = ie(e);
  if (!r) return !1;
  let n = Ln(r.fallbackModel),
    s = Ln(o);
  return n === s || Be(n) === Be(s);
}
function xXe(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r?.type === "system" && r.subtype === "model_refusal_fallback") r.neutralizedByFork = !0;
  }
}
function Me(e) {
  let o = ie(e);
  return o?.neutralizedByFork === !0 ? {
    fallbackModel: o.fallbackModel
  } : void 0;
}
function M(e, o) {
  i("tengu_resume_model_restore", {
    outcome: c(e),
    is_eap: lhe(o)
  });
}
function Z(e, o) {
  import("B:/~BUN/root/chunk-6vy6kmgh.js").then(r => r.fetchBootstrapData(e, o));
}
function pbe(e, fallbackModel, r, n, s) {
  if (!_e(e, fallbackModel)) return fp(fallbackModel), Z(n, s), M("restored", fallbackModel), fallbackModel;
  if (r) {
    i("tengu_refusal_fallback_resume_latch", {
      action: c("fork_skip_restore")
    }), M("skipped_fork_fallback", fallbackModel);
    return;
  }
  let u = Me(e);
  if (u && Ln(u.fallbackModel) === Ln(fallbackModel)) {
    i("tengu_refusal_fallback_resume_latch", {
      action: c("fork_neutralized_skip")
    }), M("skipped_fork_neutralized", fallbackModel);
    return;
  }
  return fp(fallbackModel), Z(n, s), Dmt({
    fallbackModel: fallbackModel,
    previousOverride: void 0,
    previousAppStateModel: BD() ?? null,
    previousModelForSession: null
  }), M("restored", fallbackModel), i("tengu_refusal_fallback_resume_latch", {
    action: c("model_latch_only")
  }), fallbackModel;
}
function fbe(e, o) {
  if (o) return;
  let r = e.flatMap(item => item?.type === "system" && item.subtype === "model_refusal_fallback" && (item.apiRefusalCategory === "cyber" || item.sawCyberRefusal === !0) && item.neutralizedByFork !== !0 ? [item] : []);
  if (r.length > 0) Mmt(r.find(item => item.apiRefusalCategory === "cyber" && item.requestId != null)?.requestId ?? void 0), i("tengu_refusal_fallback_resume_latch", {
    action: c("header_rearmed")
  });
}
async function Ce(e, o, r, n, s) {
  if (!e) return n;
  return lue(o, r, s);
}
async function lue(e, o, r) {
  no().agentDefinitions.clear();
  let n = await NP(e, r);
  return Cve(n, [...n.allAgents, ...o]);
}
function ee(e) {
  try {
    return Se(e);
  } catch {
    return e;
  }
}
function te(e) {
  try {
    return Re(e).isDirectory() ? "present" : "gone";
  } catch (error) {
    let r = v(error);
    return r === "ENOENT" || r === "ENOTDIR" ? "gone" : "inaccessible";
  }
}
var N = "The worktree binding could not be cleared because transcript saving is off";
function $zt(e, o) {
  if (e.reason === "pin-is-own-launch-tree") return `Error: ${uk(e.message)} The worktree binding is kept.
`;
  if (!e.poisoned) return `Error: could not verify worktree ${uk(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient \u2014 the worktree binding is kept; re-run the command to retry.
`;
  let r = o?.bindingCleared === void 0 ? "" : o.bindingCleared ? " The worktree binding has been cleared; re-running will continue in the current directory without worktree isolation." : ` ${N} for this run, so the same command will be refused again until that is resolved; to continue without the worktree, re-run with --fork-session or start a new conversation.`;
  return `Error: cannot resume into worktree ${uk(e.worktreePath)}: ${uk(e.message)} This session was not started.${r}
`;
}
function HJn(e, o) {
  let r = o.bindingCleared ? "The worktree binding has been cleared." : `${N} for this run; a later resume will re-check it.`;
  return `Notice: the worktree ${uk(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. ${r}
`;
}
function PXe(e) {
  let o = `${N}; a later --resume will re-check it.`;
  if (e.reason === "worktree-gone") return `Your worktree ${uk(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. ${_a() ? o : "The worktree binding has been cleared."}`;
  if (e.reason === "pin-is-own-launch-tree") return `Could not re-enter your worktree ${uk(e.worktreePath)}: ${uk(e.message)} The worktree binding is kept.`;
  if (e.poisoned) {
    let r = _a() ? `You are working in the current directory without worktree isolation. ${o}` : "This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.";
    return `Did not re-enter your worktree ${uk(e.worktreePath)}: ${uk(e.message)} ${r}`;
  }
  return `Could not verify your worktree ${uk(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}
function wbn() {
  return;
}
function IXe(e) {
  let o = wbn();
  if (o === void 0) return;
  let r = e.findLastIndex(n => n.type === "system" && n.subtype === "informational" && n.content === o);
  if (r !== -1 && !e.slice(r + 1).some(item => item.type === "user" || item.type === "assistant")) return;
  e.push($t(o, "notice"));
}
function O(e) {
  if (ns(e) || Gh(e) || Gh(ne.normalize(e))) return t("[sessionRestore] transcript path is a network/NT-namespace path \u2014 not chdir-ing", {
    level: "warn"
  }), !0;
  return !1;
}
function mbe(e, o, r, n) {
  let s = Ie(o, r, n);
  return e.record(s), s;
}
function Ie(e, o, r) {
  let n = Cc();
  if (n && r?.preserveBinding !== !0) return BP(n), null;
  if (!e) {
    if (e === null) return i("tengu_worktree_resume_root_rejected", {
      reason: y("worktree-exited-resume"),
      poisoned: y("false")
    }), t("[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation"), null;
    if (!o || oe() === o) return null;
    if (O(o)) return null;
    if (iH(o)) return t("[worktree] resume: the recorded project path has a network spelling; staying put"), null;
    try {
      mf(o);
    } catch {
      return null;
    }
    if (jp(o), YSe(o, TOe(hpe))) iT(oe());
    return yfe(), HG("resume"), xl.cache.clear?.(), Ky(r?.storageV5), RY(), $Ue(), Vl()?.refreshGitBranch?.(), null;
  }
  let s = r?.preserveBinding === !0;
  if (O(e.worktreePath) || zh(e.worktreePath) || Yi(e.worktreePath) || rS(e.worktreePath) || ff(ph, e.worktreePath, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0) {
    if (!s) BP(null);
    return i("tengu_worktree_resume_root_rejected", {
      reason: y("network-spelled-pin"),
      poisoned: y("true")
    }), {
      worktreePath: e.worktreePath,
      reason: "invalid-linked-worktree",
      message: "its recorded path has a network spelling, which can never be a local isolation worktree.",
      poisoned: !0
    };
  }
  let u = te(e.worktreePath);
  if (u === "gone") {
    if (!s) BP(null);
    return i("tengu_worktree_resume_root_rejected", {
      reason: y("worktree-gone"),
      poisoned: y("true")
    }), {
      worktreePath: e.worktreePath,
      reason: "worktree-gone",
      message: "the worktree directory no longer exists",
      poisoned: !0
    };
  }
  if (u === "inaccessible") return t(`[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`, {
    level: "error"
  }), i("tengu_worktree_resume_root_rejected", {
    reason: y("unverifiable"),
    poisoned: y("false")
  }), {
    worktreePath: e.worktreePath,
    reason: "unverifiable",
    message: "the worktree directory could not be examined right now",
    poisoned: !1
  };
  let liveLaunchAnchor = r?.liveLaunchDir ?? hpe,
    m = PRn(oe(), e.worktreePath),
    f = vdo(e.worktreePath, AT(e.originalCwd), L([ee(liveLaunchAnchor), ...AT(liveLaunchAnchor), ee(hpe), ...AT(hpe)]), {
      declineSelfOwningPinUnderLiveRoot: !0
    });
  if (!f.ok) {
    let poisoned = f.reason !== "unverifiable" && f.reason !== "pin-is-own-launch-tree";
    if (t(`[worktree] declining to resume into ${e.worktreePath} (${f.reason}): ${f.message}`, {
      level: "error"
    }), i("tengu_worktree_resume_root_rejected", {
      reason: c(f.reason),
      poisoned: y(poisoned ? "true" : "false")
    }), poisoned) {
      if (!s) BP(null);
      if (m) {
        let k = re(e.worktreePath),
          R = te(k) === "present" ? k : e.originalCwd;
        if (PRn(R, e.worktreePath)) return {
          worktreePath: e.worktreePath,
          reason: f.reason,
          message: f.message,
          poisoned: poisoned
        };
        try {
          mf(R), jp(R);
          let P = T => KU(T, e.worktreePath) === "same",
            w = U2(e.worktreePath),
            b = w !== null ? [w] : [],
            A = [...AT(liveLaunchAnchor), ...b].filter(item => !P(item));
          if (YSe(R, A, {
            requireCovered: !0
          })) iT(R);
          yfe(), HG("resume"), $Ue(), xl.cache.clear?.(), Ky(r?.storageV5), RY(), Vl()?.refreshGitBranch?.();
        } catch {}
      }
    }
    return {
      worktreePath: e.worktreePath,
      reason: f.reason,
      message: f.message,
      poisoned: poisoned
    };
  }
  try {
    mf(e.worktreePath);
  } catch (error) {
    let k = v(error);
    if (k === "ENOENT" || k === "ENOTDIR") {
      if (!s) BP(null);
      return i("tengu_worktree_resume_root_rejected", {
        reason: y("worktree-gone"),
        poisoned: y("true")
      }), {
        worktreePath: e.worktreePath,
        reason: "worktree-gone",
        message: "the worktree directory no longer exists",
        poisoned: !0
      };
    }
    return i("tengu_worktree_resume_root_rejected", {
      reason: y("unverifiable"),
      poisoned: y("false")
    }), {
      worktreePath: e.worktreePath,
      reason: "unverifiable",
      message: "the worktree directory could not be entered right now",
      poisoned: !1
    };
  }
  return jp(e.worktreePath), iT(oe()), $rt({
    ...e,
    liveLaunchAnchor: liveLaunchAnchor,
    originalChangeset: void 0
  }), yfe(), HG("resume"), xl.cache.clear?.(), Ky(r?.storageV5), RY(), Vl()?.refreshGitBranch?.(), null;
}
function FJn(e, o) {
  let r = Cc();
  if (!r) return;
  if ($rt(null), yfe(), HG("resume"), r.worktreePath === e) {
    xl.cache.clear?.(), Ky(o);
    return;
  }
  if (O(r.originalCwd)) return;
  if (iH(r.originalCwd)) {
    t("[worktree] exit: the recorded original cwd has a network spelling; staying put");
    return;
  }
  try {
    mf(r.originalCwd);
  } catch {
    return;
  }
  jp(r.originalCwd);
  let liveLaunchAnchor_2 = r.liveLaunchAnchor;
  if (liveLaunchAnchor_2 === void 0 || YSe(r.originalCwd, TOe(liveLaunchAnchor_2, r.worktreePath), {
    requireCovered: !0,
    coveredWitnesses: bze(liveLaunchAnchor_2, r.worktreePath),
    extraCoveredRoots: (() => {
      let s = U2(r.worktreePath);
      return s !== null ? [s] : [];
    })()
  })) iT(oe());
  xl.cache.clear?.(), Ky(o), RY(), Vl()?.refreshGitBranch?.();
}
async function Uzt(e, o, r) {
  vWe(r.session.host);
  let n;
  if (n = r.modeApi?.matchSessionMode(e.mode), n) e.messages.push($t(n, "warning"));
  let s = _Yr({
      ...e,
      source: o.resumeSource ?? "file"
    }, h => e.messages.push($t(h, "warning"))),
    {
      adoptedSessionId: adoptedSessionId,
      effectiveFork: l
    } = FTe(o.sessionIdOverride ?? e.sessionId, o.forkSession);
  if (adoptedSessionId) mh(adoptedSessionId, "resume", o.transcriptPath ? re(o.transcriptPath) : null), await Fzt(r.session, r.storageV5), await tV();
  if (l) {
    if (await Xve(e, {
      stripWorktreeSession: !0,
      stripRelocatedCwd: !0,
      storageV5: r.storageV5
    }), e.contentReplacements?.length) await TZ(e.contentReplacements, void 0, r.storageV5);
  } else nF(e, {
    storageV5: r.storageV5
  });
  if (Lre(s.declined === !0), IXe(e.messages), Nie(e), !l) {
    let h = mbe(UK.of(r.session.host), e.worktreeSession, void 0, {
      storageV5: r.storageV5
    });
    if (h) e.messages.push($t(PXe(h), "warning"));
    if (H() && r.storageV5 !== void 0) await Oie(r.storageV5);else Iie();
  }
  let sessionAgentDefinitions = await dbe(e.projectPath, r.storageV5),
    {
      agentDefinition: f,
      agentType: g
    } = Ore(e.agentSetting, r.mainThreadAgentDefinition, r.agentDefinitions, {
      sessionAgentDefinitions: sessionAgentDefinitions,
      sessionCwd: e.projectPath,
      onResolveMiss: h => e.messages.push($t(h, "warning"))
    }),
    permissionMode = e.permissionMode,
    R = !1,
    mode = await Ae(permissionMode, r.permissionModeCliSet || !1),
    attentionBudget = null;
  if (l) xXe(e.messages);
  let b = await ube(e.messages, r.initialState.mainLoopModel, h => e.messages.push($t(h, "warning")), {
      storageV5: r.storageV5,
      credentials: r.credentials
    }),
    mainLoopModel = b ? pbe(e.messages, b, l, r.storageV5, r.credentials) : void 0;
  fbe(e.messages, l), OXe(e.messages, {
    fork: l,
    startup: !0
  });
  let toolPermissionContext_2;
  if (mode) {
    let {
        transitionPermissionMode: transitionPermissionMode
      } = await import("B:/~BUN/root/chunk-7nsmenh3.js"),
      toolPermissionContext = r.initialState.toolPermissionContext;
    try {
      toolPermissionContext_2 = {
        ...transitionPermissionMode(toolPermissionContext.mode, mode, toolPermissionContext),
        mode: mode
      };
    } catch (error) {
      t(`[sessionRestore] transitionPermissionMode rejected restored mode '${mode}': ${error}`);
    }
  }
  eke(r.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  let attribution = o.includeAttribution ? be(e) : void 0,
    x = AXe(e.agentName, e.agentColor),
    standaloneAgentContext = r.initialState.standaloneAgentContext ? {
      ...x,
      ...r.initialState.standaloneAgentContext
    } : x;
  lae(standaloneAgentContext?.name, r.storageV5, {
    autoOnly: !e.customTitle && !r.initialState.standaloneAgentContext?.name
  });
  let agentDefinitions = await Ce(!!n, r.currentCwd, r.cliAgents, r.agentDefinitions, r.storageV5),
    initialMessage = r.initialState.initialMessage;
  if (a.CLAUDE_CODE_RESUME_INTERRUPTED_TURN && e.turnInterruptionState?.kind === "interrupted_prompt" && e_(e.turnInterruptionState.message.origin)) t("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"), oen("repl_restore", e.turnInterruptionState.message), sen(e.messages, e.turnInterruptionState.message), initialMessage = {
    message: e.turnInterruptionState.message
  };
  let initialState = r.initialState;
  Sbn({
    sourceSessionId: o.sessionIdOverride ?? e.sessionId,
    transcriptPath: o.transcriptPath
  });
  let sessionHooks = x9();
  return import.meta.require("B:/~BUN/root/chunk-0mm3sc8p.js").restoreGoalFromTranscript(e.messages, h => {
    initialState = h(initialState);
  }, sessionHooks), {
    messages: e.messages.filter(item => !(item.type === "system" && (item.subtype === "bridge_status" || item.subtype === "cloud_session_status"))),
    sessionStartHooks: e.sessionStartHooks,
    fileHistorySnapshots: e.fileHistorySnapshots,
    contentReplacements: e.contentReplacements,
    agentName: e.agentName,
    agentColor: e.agentColor === "default" ? void 0 : e.agentColor,
    restoredAgentDef: f,
    initialState: {
      ...initialState,
      initialMessage: initialMessage,
      ...(!l && e.bridgeSessionId && !(initialState.replBridgeEnabled && !initialState.replBridgeOutboundOnly) && {
        replBridgeEnabled: !0,
        replBridgeOutboundOnly: !1
      }),
      ...(e.endedByModel ? {
        endedByModel: !0
      } : {}),
      ...(g && {
        agent: g
      }),
      ...(attentionBudget && {
        attentionBudget: attentionBudget
      }),
      ...(mainLoopModel && {
        mainLoopModel: mainLoopModel
      }),
      ...(attribution && {
        attribution: attribution
      }),
      ...(standaloneAgentContext && {
        standaloneAgentContext: standaloneAgentContext
      }),
      ...(toolPermissionContext_2 && {
        toolPermissionContext: toolPermissionContext_2
      }),
      agentDefinitions: agentDefinitions
    },
    sessionHooks: sessionHooks
  };
}
function OXe(e, o) {}
export { u6r, bbn, iue, aue, p6r, Fzt, mPe, Sbn, f6r, DJn, RXe, AXe, Ore, dbe, LJn, p1e, ube, NJn, xXe, pbe, fbe, lue, $zt, HJn, PXe, wbn, IXe, mbe, FJn, Uzt, OXe };