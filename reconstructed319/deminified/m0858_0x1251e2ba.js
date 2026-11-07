// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Zv, Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Mi, z, Nw, Ee, y0, of, dB, eh, Acn, xcn, q, Uwe, O$r } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { k, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { or, th, yS, bl, Cl, Xv, jb, Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Fra, t, xN, Pwe, Og, ZS, Mh } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Nn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Tc, aj } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { I_ } from "B:/~BUN/root/chunk-65j2302z.js";
import { fP, Is } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { Pg } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { iv } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { JS, ZJ, $xo } from "B:/~BUN/root/chunk-1g25msn4.js";
import { uQi, Uu } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { fd, y3 } from "B:/~BUN/root/chunk-79dw4seg.js";
import { Yee, JF, zPr, WHt, Az, uo, eS, b4, eH, FZe, f$t, hk, rt, Vt, qh, IRe, xb, ql, tin } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { KLe } from "B:/~BUN/root/chunk-tdekz3md.js";
import { p0e, m0e } from "B:/~BUN/root/chunk-vke7wtay.js";
import { yle } from "B:/~BUN/root/chunk-ab1ryk8w.js";
import { dce, pPi, mg, uL, oD } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Zo } from "B:/~BUN/root/chunk-t4pbv0np.js";
import { bBe, yCt, SYr, Iit, _Ct, k6e } from "B:/~BUN/root/chunk-yhn9dxgz.js";
import { Ad } from "B:/~BUN/root/chunk-x4zqd4cy.js";
import { dO, wse } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { jCe } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { eO, gE, rp } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { op, Wq } from "B:/~BUN/root/chunk-ke150ry1.js";
import { hre, War, uCn, qge, IP, Wdt, acr, lcr, $h, I5t, Pje, $ur, Bje, tm, Ma, DEe, Zre, uDe, fDe, a9e, yF, bW, QB, yye, Bt } from "B:/~BUN/root/chunk-27h4st9h.js";
import { yLt, _Lt } from "B:/~BUN/root/chunk-2htsebsg.js";
import { wZ } from "B:/~BUN/root/chunk-rpagz3p9.js";
import { vce } from "B:/~BUN/root/chunk-hh77nseb.js";
import { Jye } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { bL } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { KZt } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { mat } from "B:/~BUN/root/chunk-t1gxrsq8.js";
import { Egn, d8 } from "B:/~BUN/root/chunk-b3z6ptmm.js";
import { UEt } from "B:/~BUN/root/chunk-8dy83cw5.js";
import { VZn, TCt } from "B:/~BUN/root/chunk-rqt5v6pf.js";
import { JOe } from "B:/~BUN/root/chunk-njea5x8z.js";
import { nk } from "B:/~BUN/root/chunk-j7y9vsxb.js";
import { jJe } from "B:/~BUN/root/chunk-ym6b88b3.js";
import { DLn, MSs } from "B:/~BUN/root/chunk-f8zs4vbq.js";
import { G2e } from "B:/~BUN/root/chunk-1ppr2tqn.js";
import { $t, AE, Gn } from "B:/~BUN/root/chunk-zpne314q.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function vst(e) {
  if (!e || !VZn(e.hooks)) {
    O$r(void 0);
    return;
  }
  let r = !fd("hooks") || y3(e.source),
    o = p0e(e);
  if (r && o) {
    let n = KLe(e) ? G(e.hooks, "personal") : TCt(e.source) ? G(e.hooks, "checkout") : e.hooks;
    G2e(e.hooks, e.source === "plugin" ? e.plugin : void 0), O$r(n);
    return;
  }
  if (r && !o) m0e(e, "mainThread");
  O$r(void 0);
}
function G(e, r) {
  let o = {};
  for (let n of Tc) {
    let s = e[n];
    if (s !== void 0) o[n] = s.map(item => r === "personal" ? {
      ...item,
      personal: !0
    } : {
      ...item,
      checkout: !0
    });
  }
  return o;
}
import { dirname as ae, resolve as be, win32 as ue } from "path";
import { realpathSync as Ae, statSync as Te } from "fs";
import { appendFile as ot, readdir as nt, rename as fe, rmdir as ge } from "fs/promises";
import { basename as Y, dirname as st, join as N, relative as J } from "path";
class Q {
  filePath = null;
  key = void 0;
  timestamp = 0;
  recorder = null;
  failed = !1;
  setFile(e, r, o) {
    this.filePath = e, this.key = o, this.timestamp = r;
  }
  setFilePath(e, r) {
    this.filePath = e, this.key = r;
  }
  setRecorder(e) {
    this.recorder = e;
  }
  markFailed() {
    this.failed = !0;
  }
}
function ye(projectKey, sessionId, o) {
  return {
    namespace: "recording",
    projectKey: projectKey,
    sessionId: sessionId,
    stamp: String(o)
  };
}
var Se = new Je(() => new Q());
async function g9n(e, r) {
  let o = Se.of(e),
    filePath = o.filePath;
  if (!filePath || o.timestamp === 0) return;
  let s = iv(Ee()),
    u = o.key,
    d = Wq(s);
  if (X() && r !== void 0 && u !== void 0 && d !== void 0) {
    if (o.failed) return;
    let S = z(),
      h = N(s, S, `${o.timestamp}.cast`);
    if (filePath === h) return;
    let m = ye(d, S, o.timestamp),
      T = J(s, filePath),
      w = J(s, h),
      v = async () => {
        if (o.failed) return;
        try {
          await ke(r, u, m), o.setFilePath(h, m), t(`[asciicast] Renamed recording: ${T} \u2192 ${w}`);
        } catch {
          t(`[asciicast] Failed to rename recording from ${T} to ${w}`);
        }
      };
    await (o.recorder?.park(v) ?? v());
    return;
  }
  let g = N(s, `${z()}-${o.timestamp}.cast`);
  if (filePath === g) return;
  await o.recorder?.flush();
  let p = Y(filePath),
    P = Y(g);
  try {
    await fe(filePath, g), o.setFilePath(g), t(`[asciicast] Renamed recording: ${p} \u2192 ${P}`);
  } catch {
    t(`[asciicast] Failed to rename recording from ${p} to ${P}`);
  }
}
async function ke(e, r, o) {
  Fra(await e.move(r, o)), await ge(N(op(), r.projectKey, r.sessionId)).catch(() => {});
}
import { open as we, readdir as Re, unlink as Z } from "fs/promises";
import { join as ee } from "path";
var Pe = 200,
  ve = 64;
function B() {
  if (q() || Ma()) return null;
  try {
    return ee(eO(), z(), DLn);
  } catch (error) {
    return t(`Image store unavailable: ${error}`, {
      level: "warn"
    }), null;
  }
}
function u7s() {
  return B() !== null;
}
async function p2r() {
  let e = B();
  if (e === null) return 0;
  let r;
  try {
    r = await Re(e);
  } catch (error) {
    if (!qt(error)) t(`Could not list stored images: ${error}`, {
      level: "warn"
    });
    return 0;
  }
  let o = 0;
  for (let n of r) {
    let s = Number(MSs.exec(n)?.[1]);
    if (Number.isSafeInteger(s) && s > o) o = s;
  }
  return o;
}
function te(e) {
  if (!Number.isSafeInteger(e.id) || e.id < 0 || typeof e.content !== "string" || e.content === "") return null;
  let r = B();
  if (r === null) return null;
  let o = _Lt(e.content.slice(0, ve));
  return ee(r, `${e.id}.${yLt[o]}`);
}
function WUe(e, r) {
  if (e.type !== "image") return null;
  let o = te(e);
  if (o !== null) r(n => x(n, e.id, o));
  return o;
}
async function zUe(e, r) {
  let o = await oe(e);
  if (o) r(n => x(n, e.id, o));
  return o;
}
async function f7s(e, r) {
  let o = new Map();
  for (let [n, s] of Object.entries(e)) if (s.type === "image") {
    let u = await oe(s);
    if (u) o.set(Number(n), u);
  }
  if (o.size > 0) r(n => {
    let s = n;
    for (let [u, d] of o) s = x(s, u, d);
    return s;
  });
  return o;
}
async function oe(e) {
  if (e.type !== "image") return null;
  try {
    let r = te(e);
    if (r === null) return null;
    let o = await JS(r, [r], {
        createParents: !0,
        leaf: "replace"
      }),
      n = fP(o.ioPath),
      s = !1;
    try {
      let u = await we(n, "wx", 384);
      s = !0;
      try {
        await u.writeFile(e.content, {
          encoding: "base64"
        }), await u.datasync();
      } finally {
        await u.close();
      }
      await o.recheckBeforeWrite();
      try {
        await Is(n, o.ioPath);
      } catch (error) {
        if (k(error) !== "EEXIST") throw error;
        await o.recheckBeforeWrite(), await Z(o.ioPath).catch(() => {}), await o.recheckBeforeWrite(), await Is(n, o.ioPath);
      }
      s = !1;
    } finally {
      if (s) try {
        await o.recheckBeforeWrite(), await Z(n);
      } catch {}
      await o.close();
    }
    return t(`Stored image ${e.id} to ${r}`), r;
  } catch (error) {
    return t(`Failed to store image: ${error}`), null;
  }
}
function x(e, r, o) {
  if (e.get(r) === o) return e;
  let n = new Map(e);
  if (!n.has(r)) while (n.size >= Pe) {
    let s = n.keys().next().value;
    if (s === void 0) break;
    n.delete(s);
  }
  return n.set(r, o), n;
}
var re = he({
  recorded: null
}, e => {
  e.recorded = null;
});
function m2r({
  sourceSessionId: sourceSessionId,
  transcriptPath: transcriptPath
}) {
  let sessionId_2 = Nt(sourceSessionId);
  re.recorded = sessionId_2 === null ? null : {
    liveSessionId: z(),
    source: {
      sessionId: sessionId_2,
      transcriptPath: transcriptPath ?? tm(sessionId_2)
    }
  };
}
function y9n() {
  let {
    recorded: recorded
  } = re;
  return recorded !== null && recorded.liveSessionId === z() ? recorded.source : null;
}
function Me(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type !== "assistant") continue;
    let n = o.message.content.find(item => item.type === "tool_use" && item.name === nk);
    if (!n || n.type !== "tool_use") continue;
    let input = n.input;
    if (input === null || typeof input !== "object") return [];
    let u = Wdt().safeParse(input.todos);
    return u.success ? u.data : [];
  }
  return [];
}
function NBo(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) return !1;
  let r = Nt(e.resume);
  if (!r) return !1;
  return Nw(Zv(r), "resume"), !0;
}
function J2t(e, r, o, n) {
  try {
    Pje(e.messages ?? []);
  } catch (error) {
    a(error);
  }
  if (p2r().then($ur).catch(a), e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0) uCn(e.fileHistorySnapshots, fileHistory => {
    r(u => ({
      ...u,
      fileHistory: fileHistory
    }));
  });
  if (import.meta.require("B:/~BUN/root/chunk-9req3ter.js").restoreGoalFromTranscript(e.messages, r, o), !bL() && e.messages && e.messages.length > 0) {
    let s = Me(e.messages);
    if (s.length > 0) {
      let u = z();
      r(d => ({
        ...d,
        todos: {
          ...d.todos,
          [u]: s
        }
      }));
    }
  }
}
function _e(e) {
  return;
}
function Q2t(e, r) {
  if (!e && !r) return;
  return {
    name: e ?? "",
    color: r === "default" ? void 0 : r
  };
}
function uOe(e, agentDefinition, o, n) {
  if (agentDefinition) return {
    agentDefinition: agentDefinition,
    agentType: void 0
  };
  if (!e) return Uwe(void 0), vst(void 0), {
    agentDefinition: void 0,
    agentType: void 0
  };
  let s = n?.sessionAgentDefinitions ? wZ(n.sessionAgentDefinitions.activeAgents, e) : void 0,
    agentDefinition_2 = s ?? wZ(o.activeAgents, e);
  if (s) t(`Resume: agent "${e}" restored from the session home set (${n?.sessionCwd ?? "unknown"})`);
  if (!agentDefinition_2) {
    if (t(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`), e !== mat.agentType) {
      if (c("session_resume", "agent_resolve_miss"), n?.onResolveMiss) {
        let d = Ee(),
          g = n.sessionAgentDefinitions && n.sessionCwd && n.sessionCwd !== d ? `${n.sessionCwd} or ${d}` : d;
        n.onResolveMiss(Nn(`This session was running agent '${e}', which is no longer available (no agent by that name in ${g}). ` + "Continuing with the default tools and system prompt \u2014 the agent's tool restrictions no longer apply. " + "To restore it, re-create the agent, or resume with an explicit --agent <name>."));
      }
    }
    return Uwe(void 0), vst(void 0), {
      agentDefinition: void 0,
      agentType: void 0
    };
  }
  if (Uwe(agentDefinition_2.agentType), vst(agentDefinition_2), !of() && agentDefinition_2.model && agentDefinition_2.model !== "inherit") {
    let d = Vt(agentDefinition_2.model);
    if (hk(d) || uo(d)) eh(d);else t(`Agent model "${agentDefinition_2.model}" is not in the availableModels allowlist; keeping the session model`, {
      level: "warn"
    });
  }
  return {
    agentDefinition: agentDefinition_2,
    agentType: agentDefinition_2.agentType
  };
}
async function FYe(e, r) {
  if (!e || e === Ee()) return;
  let o = be(e);
  if (or(e) || or(o) || yS(e) || yS(o) || yS(ue.normalize(e)) || jb(e) || jb(o) || bl(e)) {
    t(`Resume: refusing cross-host session home shape "${e}"`);
    return;
  }
  if (await Pwe(e)) {
    t(`Resume: refusing session home with unverifiable ancestry "${e}"`);
    return;
  }
  if (!tin(e)) {
    t(`Resume: not loading agents from session home "${e}" \u2014 workspace trust not persisted for it`);
    return;
  }
  try {
    return await IP(e, r);
  } catch {
    return;
  }
}
function FBo(e) {
  if (!e.resumedAgentSetting || e.mainThreadAgentType || I_()) return {
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
async function Ie(e, r) {
  if (r || !e) return;
  let o = Pg(e);
  if (o === void 0) return;
  if (o === "plan" || o === "bypassPermissions") return;
  if (o === "default") {
    let {
      isAutoModeFromFallback: isAutoModeFromFallback,
      setProvisionalStartupMode: setProvisionalStartupMode
    } = await import("B:/~BUN/root/chunk-5ap8vqjp.js");
    if (setProvisionalStartupMode(void 0), isAutoModeFromFallback()) return "default";
    return;
  }
  if (o === "auto") {
    let {
      isAutoStartWithheldForHipaaTaint: isAutoStartWithheldForHipaaTaint
    } = await import("B:/~BUN/root/chunk-5ap8vqjp.js");
    if (isAutoStartWithheldForHipaaTaint() || hs("hipaa")) return;
    let {
      isAutoModeGateEnabled: isAutoModeGateEnabled
    } = await import("B:/~BUN/root/chunk-prfqjhn8.js");
    if (!isAutoModeGateEnabled()) return;
  }
  return o;
}
async function Z2t({
  storedPermissionMode: storedPermissionMode,
  messages: messages,
  forkSession: forkSession,
  permissionModeSuppliedOnInvocation: permissionModeSuppliedOnInvocation,
  lane: lane
}) {
  let planModeOnInteractiveResume;
  try {
    ({
      planModeOnInteractiveResume: planModeOnInteractiveResume
    } = await import("B:/~BUN/root/chunk-cmxq0vg1.js"));
  } catch (error) {
    a(error);
  }
  return d => {
    if (planModeOnInteractiveResume === void 0) return;
    try {
      let g = d.startupModeDecidedByProactivityLevel !== void 0 && dO();
      return planModeOnInteractiveResume(d, {
        storedPermissionMode: storedPermissionMode,
        messages: messages,
        forkSession: forkSession,
        startupModePinned: permissionModeSuppliedOnInvocation || g,
        lane: lane
      });
    } catch (error) {
      a(error);
      return;
    }
  };
}
var Ce = {
  unknown_family: "not a model this version of Claude Code recognizes",
  not_allowed: "not allowed by this account's model settings",
  retired: "retired"
};
function HEt() {
  return Boolean(of() !== void 0 || i.ANTHROPIC_MODEL || i.ANTHROPIC_DEFAULT_FABLE_MODEL || i.ANTHROPIC_DEFAULT_OPUS_MODEL || i.ANTHROPIC_DEFAULT_SONNET_MODEL || i.ANTHROPIC_DEFAULT_HAIKU_MODEL || FZe() || !Uu());
}
async function HYe(e, r, o, {
  scheduleTelemetry = d => d(),
  storageV5: storageV5,
  credentials: credentials
} = {}) {
  if (HEt()) return;
  let d = H(e, r),
    g = d.kind === "declined" && d.reason === "not_allowed" ? await JOe(d.model, storageV5, credentials) : void 0;
  if (g !== void 0 && HEt()) return;
  let p = g === "overturned" ? H(e, r) : d;
  if (p.kind === "none") return;
  if (p.kind === "mode_dependent_setting") {
    scheduleTelemetry(() => l("tengu_resume_model_restore", {
      outcome: f("skipped_mode_dependent_setting")
    }));
    return;
  }
  if (p.kind === "declined") scheduleTelemetry(() => l("tengu_resume_model_restore", {
    outcome: f("declined"),
    decline_reason: de(p.reason),
    entitlement_reprobe: de(g)
  }));
  if (p.kind === "declined") {
    let P = r && Gn(r) || "the default model";
    o?.(`Session model ${p.model} could not be restored (${Ce[p.reason]}) \u2014 using ${P} instead.`, p.model);
    return;
  }
  return p.model;
}
function HBo(e, r) {
  let o = H(e, r);
  return o.kind === "ok" ? o.model : void 0;
}
function De(e, r) {
  if (e === "opusplan") return r.includes("opus") || r.includes("sonnet");
  if (e === "haiku") return r.includes("haiku") || r.includes("sonnet");
  return !1;
}
function H(e, r) {
  let o = new Set(uQi.map(item => rt(item))),
    n = r ? Vt(r) : void 0,
    s = n ? Gn(n) : void 0;
  for (let u = e.length - 1; u >= 0; u--) {
    let d = e[u];
    if (d?.type !== "assistant" || d.isMeta || typeof d.message?.model !== "string" || d.message.model === Mi) continue;
    let g = typeof d.inPlaceOfModel === "string" ? d.inPlaceOfModel : d.message.model,
      p = Yee(g),
      P = rt(g),
      S = o.has(P) || p !== void 0 && WHt(p) || JF(P) || Gn(g) === s,
      h = War(e)?.modelId,
      model = S || h === void 0 ? g : Gn(h),
      T = Yee(model),
      w = S || h !== void 0 && !(T !== void 0 && zPr(T)),
      v = eS(),
      _ = typeof v === "string" ? $t(v) : v;
    if (eH(_) && De(_, rt(model))) return {
      kind: "mode_dependent_setting"
    };
    let reason = !w ? "unknown_family" : !hk(model) && !uo(model) ? "not_allowed" : Az(model) ? "retired" : void 0;
    if (reason) return {
      kind: "declined",
      model: model,
      reason: reason
    };
    let A = r && qh(r) || n !== void 0 && qh(n),
      U = A && (Gn(model) === s || r && rt(Vt(Gn(r))) === rt(model)),
      C = h !== void 0 && qh(h) && rt(Gn(h)) === rt(model),
      E = A && n !== void 0 && AE(n, model) || h !== void 0 && qh(h) && AE(h, model);
    if ((U || C) && IRe(model) || E && !f$t(model) && IRe(model, rt(model, {
      identity: !0,
      overridesMap: {}
    }))) return {
      kind: "ok",
      model: b4(model + "[1m]")
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
function le(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") return o;
  }
  return;
}
function Oe(e, r) {
  let o = le(e);
  if (!o) return !1;
  let n = Gn(o.fallbackModel),
    s = Gn(r);
  return n === s || rt(n) === rt(s);
}
function eVt(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") o.neutralizedByFork = !0;
    if (o?.type === "user") delete o.turnAttributionKey;
  }
}
function Fe(e) {
  let r = le(e);
  return r?.neutralizedByFork === !0 ? {
    fallbackModel: r.fallbackModel
  } : void 0;
}
function D(e) {
  l("tengu_resume_model_restore", {
    outcome: f(e)
  });
}
function ne(e, r) {
  KZt(import("B:/~BUN/root/chunk-eqapgmx8.js").then(o => o.fetchBootstrapData(e, r)));
}
function $Ye(e, fallbackModel, o, n, s) {
  if (!Oe(e, fallbackModel)) return eh(fallbackModel), ne(n, s), D("restored"), fallbackModel;
  if (o) {
    l("tengu_refusal_fallback_resume_latch", {
      action: f("fork_skip_restore")
    }), D("skipped_fork_fallback");
    return;
  }
  let u = Fe(e);
  if (u && Gn(u.fallbackModel) === Gn(fallbackModel)) {
    l("tengu_refusal_fallback_resume_latch", {
      action: f("fork_neutralized_skip")
    }), D("skipped_fork_neutralized");
    return;
  }
  return eh(fallbackModel), ne(n, s), xcn({
    fallbackModel: fallbackModel,
    previousOverride: void 0,
    previousAppStateModel: dB() ?? null,
    previousModelForSession: null
  }), D("restored"), l("tengu_refusal_fallback_resume_latch", {
    action: f("model_latch_only")
  }), fallbackModel;
}
function UYe(e, r) {
  if (r) return;
  let o = e.flatMap(item => item?.type === "system" && item.subtype === "model_refusal_fallback" && (item.apiRefusalCategory === "cyber" || item.sawCyberRefusal === !0) && item.neutralizedByFork !== !0 ? [item] : []);
  if (o.length > 0) Acn(o.find(item => item.apiRefusalCategory === "cyber" && item.requestId != null)?.requestId ?? void 0), l("tengu_refusal_fallback_resume_latch", {
    action: f("header_rearmed")
  });
}
async function Ne(e, r, o, n, s) {
  if (!e) return n;
  return whe(r, o, s);
}
async function whe(e, r, o) {
  Fr().agentDefinitions.clear();
  let n = await IP(e, o);
  return qge(n, [...n.allAgents, ...r]);
}
function ie(e) {
  try {
    return Ae(e);
  } catch {
    return e;
  }
}
function se(e) {
  try {
    return Te(e).isDirectory() ? "present" : "gone";
  } catch (error) {
    let o = k(error);
    return o === "ENOENT" || o === "ENOTDIR" ? "gone" : "inaccessible";
  }
}
var W = "The worktree binding could not be cleared because transcript saving is off";
function _9n(e, r) {
  if (e.reason === "pin-is-own-launch-tree") return `Error: ${mg(e.message)} The worktree binding is kept.
`;
  if (!e.poisoned) return `Error: could not verify worktree ${mg(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient \u2014 the worktree binding is kept; re-run the command to retry.
`;
  let o = r?.bindingCleared === void 0 ? "" : r.bindingCleared ? " The worktree binding has been cleared; re-running will continue in the current directory without worktree isolation." : ` ${W} for this run, so the same command will be refused again until that is resolved; to continue without the worktree, re-run with --fork-session or start a new conversation.`;
  return `Error: cannot resume into worktree ${mg(e.worktreePath)}: ${mg(e.message)} This session was not started.${o}
`;
}
function $Bo(e, r) {
  let o = r.bindingCleared ? "The worktree binding has been cleared." : `${W} for this run; a later resume will re-check it.`;
  return `Notice: the worktree ${mg(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. ${o}
`;
}
function tVt(e) {
  let r = `${W}; a later --resume will re-check it.`;
  if (e.reason === "worktree-gone") return `Your worktree ${mg(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. ${Ma() ? r : "The worktree binding has been cleared."}`;
  if (e.reason === "pin-is-own-launch-tree") return `Could not re-enter your worktree ${mg(e.worktreePath)}: ${mg(e.message)} The worktree binding is kept.`;
  if (e.poisoned) {
    let o = Ma() ? `You are working in the current directory without worktree isolation. ${r}` : "This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.";
    return `Did not re-enter your worktree ${mg(e.worktreePath)}: ${mg(e.message)} ${o}`;
  }
  return `Could not verify your worktree ${mg(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}
var Be = "Memory is still paused from";
function h2r() {
  return;
}
var Le = "Auto-memory is still off for this session";
function g2r() {
  return;
}
function nVt(e) {
  for (let [r, o] of [[h2r(), Be], [g2r(), Le]]) {
    if (r === void 0) continue;
    let n = e.findLastIndex(s => s.type === "system" && s.subtype === "informational" && typeof s.content === "string" && s.content.includes(o));
    if (n !== -1 && !e.slice(n + 1).some(item => item.type === "user" || item.type === "assistant")) continue;
    e.push(Bt(r, "notice"));
  }
}
function j(e) {
  if (Ks(e) || yS(e) || yS(ue.normalize(e))) return t("[sessionRestore] transcript path is a network/NT-namespace path \u2014 not chdir-ing", {
    level: "warn"
  }), !0;
  return !1;
}
function BYe(e, r, o, n) {
  let s = xe(r, o, n);
  return e.record(s), s;
}
function xe(e, r, o) {
  let n = ql();
  if (n && o?.preserveBinding !== !0) return QB(n), null;
  if (!e) {
    if (e === null) return l("tengu_worktree_resume_root_rejected", {
      reason: b("worktree-exited-resume"),
      poisoned: b("false")
    }), t("[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation"), null;
    if (!r || pe() === r) return null;
    if (j(r)) return null;
    if (xN(r)) return t("[worktree] resume: the recorded project path has a network spelling; staying put"), null;
    try {
      Mh(r);
    } catch {
      return null;
    }
    if ($h(r), k6e(r, Iit(bBe))) y0(pe());
    return Bje(), hre("resume"), rp.cache.clear?.(), gE(o?.storageV5), ZJ(), $xo(), Ad()?.refreshGitBranch?.(), null;
  }
  let s = o?.preserveBinding === !0;
  if (j(e.worktreePath) || th(e.worktreePath) || Cl(e.worktreePath) || Xv(e.worktreePath) || Og(ZS, e.worktreePath, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0) {
    if (!s) QB(null);
    return l("tengu_worktree_resume_root_rejected", {
      reason: b("network-spelled-pin"),
      poisoned: b("true")
    }), {
      worktreePath: e.worktreePath,
      reason: "invalid-linked-worktree",
      message: "its recorded path has a network spelling, which can never be a local isolation worktree.",
      poisoned: !0
    };
  }
  let u = se(e.worktreePath);
  if (u === "gone") {
    if (!s) QB(null);
    return l("tengu_worktree_resume_root_rejected", {
      reason: b("worktree-gone"),
      poisoned: b("true")
    }), {
      worktreePath: e.worktreePath,
      reason: "worktree-gone",
      message: "the worktree directory no longer exists",
      poisoned: !0
    };
  }
  if (u === "inaccessible") return t(`[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`, {
    level: "error"
  }), l("tengu_worktree_resume_root_rejected", {
    reason: b("unverifiable"),
    poisoned: b("false")
  }), {
    worktreePath: e.worktreePath,
    reason: "unverifiable",
    message: "the worktree directory could not be examined right now",
    poisoned: !1
  };
  let liveLaunchAnchor = o?.liveLaunchDir ?? bBe,
    g = SYr(pe(), e.worktreePath),
    p = pPi(e.worktreePath, oD(e.originalCwd), L([ie(liveLaunchAnchor), ...oD(liveLaunchAnchor), ie(bBe), ...oD(bBe)]), {
      declineSelfOwningPinUnderLiveRoot: !0
    });
  if (!p.ok) {
    let poisoned = p.reason !== "unverifiable" && p.reason !== "pin-is-own-launch-tree";
    if (t(`[worktree] declining to resume into ${e.worktreePath} (${p.reason}): ${p.message}`, {
      level: "error"
    }), l("tengu_worktree_resume_root_rejected", {
      reason: f(p.reason),
      poisoned: b(poisoned ? "true" : "false")
    }), poisoned) {
      if (!s) QB(null);
      if (g) {
        let h = ae(e.worktreePath),
          m = se(h) === "present" ? h : e.originalCwd;
        if (SYr(m, e.worktreePath)) return {
          worktreePath: e.worktreePath,
          reason: p.reason,
          message: p.message,
          poisoned: poisoned
        };
        try {
          Mh(m), $h(m);
          let T = M => uL(M, e.worktreePath) === "same",
            w = dce(e.worktreePath),
            v = w !== null ? [w.checkout] : [],
            _ = [...oD(liveLaunchAnchor), ...v].filter(item => !T(item));
          if (k6e(m, _, {
            requireCovered: !0
          })) y0(m);
          Bje(), hre("resume"), $xo(), rp.cache.clear?.(), gE(o?.storageV5), ZJ(), Ad()?.refreshGitBranch?.();
        } catch {}
      }
    }
    return {
      worktreePath: e.worktreePath,
      reason: p.reason,
      message: p.message,
      poisoned: poisoned
    };
  }
  try {
    Mh(e.worktreePath);
  } catch (error) {
    let h = k(error);
    if (h === "ENOENT" || h === "ENOTDIR") {
      if (!s) QB(null);
      return l("tengu_worktree_resume_root_rejected", {
        reason: b("worktree-gone"),
        poisoned: b("true")
      }), {
        worktreePath: e.worktreePath,
        reason: "worktree-gone",
        message: "the worktree directory no longer exists",
        poisoned: !0
      };
    }
    return l("tengu_worktree_resume_root_rejected", {
      reason: b("unverifiable"),
      poisoned: b("false")
    }), {
      worktreePath: e.worktreePath,
      reason: "unverifiable",
      message: "the worktree directory could not be entered right now",
      poisoned: !1
    };
  }
  let rootBeforeResume = Ee();
  return $h(e.worktreePath), y0(pe()), I5t({
    ...e,
    liveLaunchAnchor: liveLaunchAnchor,
    rootBeforeResume: rootBeforeResume,
    originalChangeset: void 0
  }), Bje(), hre("resume"), rp.cache.clear?.(), gE(o?.storageV5), ZJ(), Ad()?.refreshGitBranch?.(), null;
}
function UBo(e, r) {
  let o = ql();
  if (!o) return;
  if (I5t(null), Bje(), hre("resume"), o.worktreePath === e) {
    rp.cache.clear?.(), gE(r);
    return;
  }
  if (j(o.originalCwd)) return;
  if (xN(o.originalCwd)) {
    t("[worktree] exit: the recorded original cwd has a network spelling; staying put");
    return;
  }
  try {
    Mh(o.originalCwd);
  } catch {
    return;
  }
  $h(o.originalCwd);
  let liveLaunchAnchor_2 = o.liveLaunchAnchor;
  if (liveLaunchAnchor_2 === void 0 || k6e(o.originalCwd, Iit(liveLaunchAnchor_2, o.worktreePath), {
    requireCovered: !0,
    coveredWitnesses: _Ct(liveLaunchAnchor_2, o.worktreePath),
    extraCoveredRoots: (() => {
      let s = dce(o.worktreePath);
      return s !== null ? [s.checkout] : [];
    })(),
    bootLaunchTree: yCt(o.rootBeforeResume, o.worktreePath)
  })) y0(pe());
  rp.cache.clear?.(), gE(r), ZJ(), Ad()?.refreshGitBranch?.();
}
async function b9n(e, r, o) {
  UEt(o.session.host);
  let n = o.modeApi?.matchSessionMode(e.mode);
  if (n) e.messages.push(Bt(n, "warning"));
  let s = Egn({
      ...e,
      source: r.resumeSource ?? "file"
    }, y => e.messages.push(Bt(y, "warning"))),
    {
      adoptedSessionId: adoptedSessionId,
      effectiveFork: d
    } = jJe(r.sessionIdOverride ?? e.sessionId, r.forkSession);
  if (adoptedSessionId) Nw(adoptedSessionId, "resume", r.transcriptPath ? ae(r.transcriptPath) : null), await g9n(o.session, o.storageV5), await Zre();
  let g = adoptedSessionId && Zo() ? await (await import("B:/~BUN/root/chunk-bc18000z.js")).rekeySessionTeamAtStartup(o.storageV5) : void 0;
  if (d) {
    if (await a9e(e, {
      stripWorktreeSession: !0,
      stripRelocatedCwd: !0,
      storageV5: o.storageV5
    }), e.contentReplacements?.length) await DEe(e.contentReplacements, void 0, o.storageV5);
  } else yF(e, {
    storageV5: o.storageV5
  });
  if (d8(s.declined === !0), nVt(e.messages), yye(e), !d) {
    let y = BYe(yle.of(o.session.host), e.worktreeSession, void 0, {
      storageV5: o.storageV5
    });
    if (y) e.messages.push(Bt(tVt(y), "warning"));
    if (X() && o.storageV5 !== void 0) await fDe(o.storageV5);else uDe();
  }
  let sessionAgentDefinitions = await FYe(e.projectPath, o.storageV5),
    {
      agentDefinition: P,
      agentType: S
    } = uOe(e.agentSetting, o.mainThreadAgentDefinition, o.agentDefinitions, {
      sessionAgentDefinitions: sessionAgentDefinitions,
      sessionCwd: e.projectPath,
      onResolveMiss: y => e.messages.push(Bt(y, "warning"))
    }),
    h = e.permissionMode,
    m = !1;
  if (!o.permissionModeCliSet && Pg(h) === "auto" && o.initialState.proactivityLevel === "ask" && !wse()) h = jCe("ask", {
    isAutoModeAvailable: !1,
    isBypassPermissionsModeAvailable: !1
  }, void 0), m = !0, t(`[sessionRestore] stored mode 'auto' read as '${h}': proactivity 'ask' with levels off in this process`);
  let T = o.initialState.toolPermissionContext.startupModeDecidedByProactivityLevel !== void 0 && dO(),
    mode = await Ie(h, o.permissionModeCliSet || T);
  if (m) {
    let y = mode ?? o.initialState.toolPermissionContext.mode;
    if (y !== "auto") e.messages.push(Bt(`Resumed in ${aj(y).toLowerCase()} mode instead of auto: this session is set to ask before each file edit, and auto mode alone would not. Press shift+tab to switch modes.`, "warning"));
  }
  let attentionBudget = null;
  if (d) eVt(e.messages);
  let _ = await HYe(e.messages, o.initialState.mainLoopModel, y => e.messages.push(Bt(y, "warning")), {
      storageV5: o.storageV5,
      credentials: o.credentials
    }),
    mainLoopModel = _ ? $Ye(e.messages, _, d, o.storageV5, o.credentials) : void 0;
  UYe(e.messages, d), rVt(e.messages, {
    fork: d,
    startup: !0
  });
  let toolPermissionContext_2;
  if (mode) {
    let {
        transitionPermissionMode: transitionPermissionMode
      } = await import("B:/~BUN/root/chunk-prfqjhn8.js"),
      toolPermissionContext = o.initialState.toolPermissionContext;
    try {
      if (toolPermissionContext_2 = {
        ...transitionPermissionMode(toolPermissionContext.mode, mode, toolPermissionContext),
        mode: mode
      }, !toolPermissionContext.proactivityBaseline?.fromRelaunchHandoff) toolPermissionContext_2 = {
        ...toolPermissionContext_2,
        proactivityBaseline: {
          mode: mode,
          fromRelaunchHandoff: !1
        }
      };
    } catch (error) {
      t(`[sessionRestore] transitionPermissionMode rejected restored mode '${mode}': ${error}`);
    }
  }
  toolPermissionContext_2 = (await Z2t({
    storedPermissionMode: h,
    messages: e.messages,
    forkSession: d,
    permissionModeSuppliedOnInvocation: o.permissionModeSuppliedOnInvocation,
    lane: "interactive"
  }))(toolPermissionContext_2 ?? o.initialState.toolPermissionContext) ?? toolPermissionContext_2, bW(o.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
  let attribution = r.includeAttribution ? _e(e) : void 0,
    E = Q2t(e.agentName, e.agentColor),
    standaloneAgentContext = o.initialState.standaloneAgentContext ? {
      ...E,
      ...o.initialState.standaloneAgentContext
    } : E;
  vce(standaloneAgentContext?.name, o.storageV5, {
    autoOnly: !e.customTitle && !o.initialState.standaloneAgentContext?.name
  });
  let agentDefinitions = await Ne(!!n, o.currentCwd, o.cliAgents, o.agentDefinitions, o.storageV5),
    initialMessage = o.initialState.initialMessage;
  if (i.CLAUDE_CODE_RESUME_INTERRUPTED_TURN && e.turnInterruptionState?.kind === "interrupted_prompt" && xb(e.turnInterruptionState.message.origin)) t("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"), acr("repl_restore", e.turnInterruptionState.message, {
    tail: e.turnInterruptionState.tail
  }), lcr(e.messages, e.turnInterruptionState.message), initialMessage = {
    message: e.turnInterruptionState.message
  };
  let initialState = o.initialState;
  m2r({
    sourceSessionId: r.sessionIdOverride ?? e.sessionId,
    transcriptPath: r.transcriptPath
  });
  let sessionHooks = Jye();
  return import.meta.require("B:/~BUN/root/chunk-9req3ter.js").restoreGoalFromTranscript(e.messages, y => {
    initialState = y(initialState);
  }, sessionHooks), {
    messages: e.messages.filter(item => !(item.type === "system" && (item.subtype === "bridge_status" || item.subtype === "cloud_session_status"))),
    sessionStartHooks: e.sessionStartHooks,
    fileHistorySnapshots: e.fileHistorySnapshots,
    contentReplacements: e.contentReplacements,
    agentName: e.agentName,
    agentColor: e.agentColor === "default" ? void 0 : e.agentColor,
    restoredAgentDef: P,
    initialState: {
      ...initialState,
      ...(g && {
        teamContext: g.teamContext,
        teammateColors: g.teammateColors
      }),
      initialMessage: initialMessage,
      ...(!d && e.bridgeSessionId && !(initialState.replBridgeEnabled && !initialState.replBridgeOutboundOnly) && {
        replBridgeEnabled: !0,
        replBridgeOutboundOnly: !1
      }),
      ...(e.endedByModel ? {
        endedByModel: !0
      } : {}),
      ...(S && {
        agent: S
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
function rVt(e, r) {}
export { vst, g9n, u7s, p2r, WUe, zUe, f7s, m2r, y9n, NBo, J2t, Q2t, uOe, FYe, FBo, Z2t, HEt, HYe, HBo, eVt, $Ye, UYe, whe, _9n, $Bo, tVt, h2r, g2r, nVt, BYe, UBo, b9n, rVt };