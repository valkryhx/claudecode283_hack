// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, v, Kg } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Ka, oM, Wi, Yi, $xe, Bjt, ns, iM, rP, nm, SH } from "B:/~BUN/root/chunk-54p0h65d.js";
import { go } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Nt, qe, Qd, hm, fp, U_, $de, Vmt, wjt, $2 } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { b, J, Uh, iH, r2r, ff, ph, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Fv, X1r } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { nT, Bo, Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Si, mo, sC, iC, o$e } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { NYn } from "B:/~BUN/root/chunk-339q6g5w.js";
import { mu } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { jn, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { Ui } from "B:/~BUN/root/chunk-290k5gh5.js";
import { he, Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { eAe } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { qt } from "B:/~BUN/root/chunk-9xz983aj.js";
import { _d, HF, JDt, Ig } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { Lb, vz, Kan, gHe, KTe, hDt, vc, tp, xR } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { $z } from "B:/~BUN/root/chunk-mrt797ke.js";
import { Kl } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { T8, $Rt, _p, Z4, ru, MT } from "B:/~BUN/root/chunk-3jyp964r.js";
import { vV } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { vw, cHe, ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { In } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Pr } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { npe } from "B:/~BUN/root/chunk-4grky1fs.js";
import { yM, m7, Sh } from "B:/~BUN/root/chunk-1mdmjaqt.js";
import { kOe } from "B:/~BUN/root/chunk-t82zs1e5.js";
import { Fyt, lje } from "B:/~BUN/root/chunk-vczknmbj.js";
import { zAn, VAn, KAn, jdr, KYt, YAn, cwe } from "B:/~BUN/root/chunk-0mn860zt.js";
import { bWe } from "B:/~BUN/root/chunk-18pna2e9.js";
import { tpe, fM } from "B:/~BUN/root/chunk-8tap4h55.js";
import { uO } from "B:/~BUN/root/chunk-zfm0jkby.js";
import { yze, KSe, hvt, _ze } from "B:/~BUN/root/chunk-tvk6phkz.js";
import { wze, IRn, bvt } from "B:/~BUN/root/chunk-0f5aa3v1.js";
import { U$n } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { jke } from "B:/~BUN/root/chunk-nakgperr.js";
import { qi } from "B:/~BUN/root/chunk-vr3kcvgy.js";
import { sX, cy } from "B:/~BUN/root/chunk-q1gfnztc.js";
import { Rw } from "B:/~BUN/root/chunk-0b2y1gsk.js";
import { k$ } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { rr, de, fn, ho, Pc, Xn, lt, qu, jl, bVo } from "B:/~BUN/root/chunk-8386ms9e.js";
import { createHash as De, randomBytes as be } from "crypto";
import { constants as V } from "fs";
import { copyFile as ve, link as fe, mkdir as pe, readdir as Ne, readFile as Te, realpath as W, rm as $e, rmdir as We, stat as _e, symlink as je, unlink as D, lstat as N, readlink as Pe, open as ne } from "fs/promises";
import { basename as K, dirname as z, isAbsolute as oe, join as B, relative as Re, sep as ce } from "path";
var ije = 120000,
  j1o = 60000,
  NZn = 4000,
  Be = 250,
  re = /^[\w-]+$/;
function ie(e) {
  let n = () => [...e(), ...[]],
    r = o => {
      let s = Wi(o) ? $xe(o) : null;
      return s === null ? null : Bjt(s);
    };
  return de().transform((o, s) => {
    let l = message => (s.addIssue({
        code: rr.custom,
        message: message
      }), bVo),
      a,
      u = () => {
        if (a === void 0) {
          let A = n(),
            allowed = A.map(nm).filter(item => item !== null);
          a = {
            allowed: allowed,
            anchor: [...A, ...allowed]
          };
        }
        return a;
      };
    if (rP(o)) return l(`adopt path is remote UNC: ${o}`);
    let g = iM(o);
    if (oM(g) || SH(g) || g !== o && /[. ](?:[\\/]|$)/.test(g)) return l(`adopt path is a Windows device-namespace spelling (\\\\?\\, \\\\.\\ or \\??\\) other than a plain \\\\?\\<drive>:\\ path: ${o}`);
    if (o = g, !oe(o) || Ka(o)) return l(`adopt path is not an absolute, dot-free spelling: ${o}`);
    let k = r(o),
      anchors = k !== null && k.startsWith("/net/") ? u().anchor.filter(item => r(item) === k) : [];
    if (k !== null && anchors.length === 0) return l(k.startsWith("/net/") ? `adopt path is on an automount host (or map) none of the allowed roots live on: ${o}` : `adopt path is under the macOS /Network/Servers automount directory, refused regardless of the allowed roots: ${o}`);
    let _ = ff(ph, o, anchors.length > 0 ? {
      anchors: anchors,
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0
    } : void 0);
    if (_ === Uh) return l(`adopt path runs through a directory that could not be examined or a symlink chain too long to follow: ${o}`);
    if (_ !== void 0) return l(`adopt path traverses symlink/junction to remote UNC: ${_}`);
    let T = nm(o);
    if (T === null) return l(`adopt path unresolvable: ${o}`);
    let allowed_2 = u().allowed;
    if (allowed_2.length === 0) return l("adopt path roots unresolvable");
    if (!allowed_2.some(item => {
      let m = Re(item, T);
      return m === "" || !m.startsWith("..") && !oe(m);
    })) return l(`adopt path outside allowed roots: ${T}`);
    return T;
  });
}
function Ue() {
  return [xR()];
}
function Fe(e) {
  return lt({
    taskId: de().regex(re),
    pid: fn().int().positive(),
    procStart: de().optional(),
    startTimeTicks: fn().int().optional(),
    command: de().transform(n => Z4(n) ?? ""),
    description: de().transform(n => Z4(n) ?? ""),
    outputPath: ie(e),
    lastReportedTotalLines: fn().int(),
    toolUseId: Pc().transform(jke).optional(),
    kind: jl(["bash", "monitor"]).optional(),
    agentId: de().regex(re).optional()
  });
}
var ze = f(() => Fe(Ue)),
  ge = 1e5,
  Ve = f(() => lt({
    id: de(),
    cron: de(),
    prompt: de(),
    createdAt: fn(),
    recurring: ho().optional(),
    agentId: de().optional(),
    kind: qu("loop").optional(),
    scheduledFor: fn().optional(),
    reason: de().transform(e => Z4(e)).optional(),
    keepalive: qu(!0).optional()
  })),
  He = f(() => lt({
    taskId: de().regex(re),
    workflowRunId: de().regex(/^wf_[a-z0-9-]{6,}$/),
    scriptPath: de(),
    scriptSha256: de().regex(/^[0-9a-f]{64}$/).optional(),
    argsJson: de().optional(),
    description: de().transform(e => Z4(e) ?? ""),
    startTime: fn().optional(),
    transcriptDir: ie(() => [_d()])
  })),
  Ge = f(() => lt({
    agentId: de().regex(re),
    agentType: de().optional(),
    description: de().transform(e => Z4(e)).optional(),
    toolUseId: Pc().transform(jke).optional(),
    spawnDepth: fn().int().optional(),
    startTime: fn().optional(),
    transcriptPath: ie(() => [_d()]).optional(),
    parentAgentId: de().regex(re).optional(),
    forkedSkillName: de().min(1).max(256).optional()
  })),
  Ke = f(() => lt({
    slug: de().uuid(),
    title: de().min(1).max(256).optional(),
    writtenAtMs: fn().finite().optional(),
    unattendedReplies: fn().int().min(0).max(_ze).optional()
  }));
function Le(e = ze()) {
  return lt({
    writtenAtMs: fn(),
    origin: jl(["background", "exit"]).optional(),
    shells: Xn(e),
    cron: Xn(Ve()),
    loopWakeFires: fn().int().nonnegative().optional(),
    agents: Xn(Ge()).optional(),
    workflows: Xn(He()).optional(),
    frameLive: Xn(Ke()).optional(),
    prefill: lt({
      text: de(),
      boundaryUuid: de().optional()
    }).optional()
  });
}
var Ee = f(() => Le());
function Ie(e) {
  let n = Array.isArray(e) ? e : [e];
  return Le(Fe(() => [xR(), ...n]));
}
var le = 67108864;
async function Wwn(e, n) {
  let pid = await e.shellCommand?.detach?.();
  if (pid === void 0) return null;
  let outputPath = e.shellCommand.taskOutput.path,
    s = n?.rerootOutputsTo;
  if (s !== void 0) {
    let l = async u => {
        t(`[adopt] dropping shell ${e.id} from the handoff (${u})`, {
          level: "error"
        });
        try {
          await e.shellCommand?.kill?.();
        } catch {}
        return null;
      },
      a = !1;
    try {
      if (ns(outputPath) || Yi(outputPath)) throw Error("network-spelled output path");
      let u = ff(ph, outputPath);
      if (u === Uh) throw Error("output path has a symlink chain too long to vet");
      if (u !== void 0) throw Error("output path traverses a junction to remote UNC");
      if ((await N(outputPath)).isSymbolicLink()) {
        let T = await Pe(outputPath);
        if (ns(T) || Yi(T)) throw Error("network-spelled symlink target");
        let F = oe(T) ? T : B(z(outputPath), T);
        if (ns(F) || Yi(F)) throw Error("network-spelled symlink hop");
        let L = ff(ph, F);
        if (L === Uh) throw Error("symlink target has a symlink chain too long to vet");
        if (L !== void 0) throw Error("symlink target traverses a junction to remote UNC");
        if ((await N(F)).isSymbolicLink()) throw Error("multi-hop symlink chain");
      }
      let k = await W(outputPath),
        h = await N(k);
      a = !0;
      let _ = await W(s).catch(() => s);
      if (!k.startsWith(_ + ce)) {
        if (!(await Promise.all([tp(), ...[]].map(item => W(item).catch(() => null)))).filter(item => item !== null).some(item => k.startsWith(item + ce))) return await l("its output resolves outside the task-output tree");
        let L = B(s, "rerooted", `${e.id}.output`),
          A;
        try {
          A = await cy(L, [L], {
            createParents: !0,
            leaf: "replace"
          });
        } catch {
          return await l("reroot directory not trustworthy");
        }
        let ioPath = A.ioPath;
        try {
          if (!h.isFile()) return await l("gate target is not a regular file");
          if (h.nlink !== 1) return await l("gate target has another name");
          let w = await ne(k, O() === "windows" ? "r" : V.O_RDONLY | (V.O_NONBLOCK ?? 0) | mu);
          try {
            let S = await w.stat();
            if (!S.isFile() || S.nlink !== 1 || S.dev !== h.dev || S.ino !== h.ino) return await l("handle identity mismatch");
            {
              if (await A.recheckBeforeWrite(), await D(ioPath).catch(() => {}), S.size > le) return await l("over-cap escaping output");
              let E;
              try {
                await A.recheckBeforeWrite(), E = O() === "windows" ? await ne(ioPath, "wx") : await sX(ioPath, V.O_WRONLY | V.O_CREAT | V.O_EXCL | V.O_NOFOLLOW, O());
              } catch {
                return await l("reroot destination not creatable");
              }
              try {
                let x = 0,
                  R = Buffer.allocUnsafe(65536);
                while (x < le) {
                  let {
                    bytesRead: bytesRead
                  } = await w.read(R, 0, Math.min(R.length, le - x), x);
                  if (bytesRead === 0) break;
                  let I = 0;
                  while (I < bytesRead) {
                    let {
                      bytesWritten: bytesWritten
                    } = await E.write(R, I, bytesRead - I);
                    I += bytesWritten;
                  }
                  x += bytesRead;
                }
              } finally {
                await E.close();
              }
              outputPath = L;
            }
          } finally {
            await w.close();
          }
        } finally {
          await A.close();
        }
      }
    } catch {
      if (a) return await l("reroot failed after the gate");
    }
  }
  return {
    taskId: e.id,
    pid: pid,
    procStart: await eAe(pid),
    startTimeTicks: (await Fyt(pid)) ?? void 0,
    command: e.command,
    description: e.description,
    outputPath: outputPath,
    lastReportedTotalLines: e.lastReportedTotalLines,
    toolUseId: e.toolUseId,
    kind: e.kind,
    agentId: e.agentId
  };
}
async function zwn(e, n = {}) {
  let r = n.derivedTranscriptPath ?? Ig(go(e.agentId));
  return {
    agentId: e.agentId,
    agentType: e.agentType,
    description: e.description,
    toolUseId: e.toolUseId,
    spawnDepth: e.spawnDepth,
    startTime: e.startTime,
    transcriptPath: await W(r).catch(() => {
      return;
    }),
    parentAgentId: e.parentAgentId,
    forkedSkillName: e.forkedSkillName
  };
}
async function Gwn(e, n = {}) {
  let r = n.derivedTranscriptDir ?? uO(e.workflowRunId);
  return {
    taskId: e.id,
    workflowRunId: e.workflowRunId,
    scriptPath: e.scriptPath,
    scriptSha256: e.script ? De("sha256").update(e.script).digest("hex") : void 0,
    argsJson: e.args !== void 0 ? b(e.args) : void 0,
    description: e.description,
    startTime: e.startTime,
    transcriptDir: await W(r).catch(() => r)
  };
}
function Mj(e) {
  return tpe() && m7(e) && e.frameLive !== void 0;
}
function Kre(e) {
  let n = new Set();
  if (!tpe()) return n;
  for (let r of Object.values(e)) if (Mj(r) && r.frameLive !== void 0) n.add(r.frameLive.slug);
  for (let r of yze()) n.add(r);
  for (let r of KSe()) n.add(r);
  return n;
}
function wGt(e) {
  let {
      supervisors: supervisors,
      bootingWiredArms: bootingWiredArms
    } = ee().live,
    o = KSe(),
    s = [],
    writtenAtMs = Date.now();
  for (let slug of Kre(e)) {
    let u = supervisors.get(slug),
      g = o.has(slug) ? bootingWiredArms.get(slug) : void 0;
    if (u === void 0 && g === void 0) continue;
    let title = g?.title ?? u?.autoReactWiring?.title,
      h = title !== void 0 && title.length >= 1 && title.length <= 256;
    s.push({
      slug: slug,
      writtenAtMs: writtenAtMs,
      ...(h && {
        title: title
      })
    });
  }
  return s;
}
async function vGt(e, n) {
  let r = Y2(e),
    o = Object.values(e).filter(item => Ywn(item, r)),
    s = Object.values(e).filter(item => Xwn(item, r)),
    l = Object.values(e).filter(item => CGt(item, r)),
    a = U_().filter(item => Obe(item, r));
  if (o.length === 0 && s.length === 0 && l.length === 0 && a.length === 0 && wGt(e).length === 0) return null;
  let shells = (await Promise.all(o.map(item => Wwn(item, {
      rerootOutputsTo: xR()
    })))).filter(item => item !== null),
    agents = await Promise.all(s.map(item => zwn(item))),
    workflows = await Promise.all(l.map(item => Gwn(item))),
    frameLive = wGt(e),
    _ = new Set(frameLive.map(item => item.slug)),
    T = Object.values(e).filter(item => Mj(item) && item.frameLive !== void 0 && _.has(item.frameLive.slug)).map(item => item.id);
  if (shells.length === 0 && agents.length === 0 && workflows.length === 0 && a.length === 0 && frameLive.length === 0) return null;
  let F = !1,
    L = !1,
    stopCarriedWatches = m => {
      if (L) return;
      L = !0, kOe(_), hvt(_);
      let w = new Set(T);
      if (_.size > 0) {
        for (let S of Object.values(m.all())) if (yM(S) && S.status === "running" && S.frameLive !== void 0 && _.has(S.frameLive.slug)) w.add(S.id);
      }
      for (let S of w) Sh(S, m, {
        quiet: !0
      });
    };
  return {
    payload: {
      writtenAtMs: Date.now(),
      shells: shells,
      cron: a.map(item => ({
        id: item.id,
        cron: item.cron,
        prompt: item.prompt,
        createdAt: item.createdAt,
        recurring: item.recurring,
        agentId: item.agentId,
        kind: item.kind,
        scheduledFor: item.scheduledFor,
        reason: item.reason,
        keepalive: item.keepalive
      })),
      ...(Vmt() > 0 && {
        loopWakeFires: Vmt()
      }),
      agents: agents,
      workflows: workflows,
      ...(frameLive.length > 0 && {
        frameLive: frameLive
      })
    },
    checkpointAgents: async m => {
      for (let w of l) w.abortController?.abort(Kl("background")), npe(w.id, m);
      if (agents.length === 0) return;
      for (let w of shells) if (w.agentId !== void 0) m.remove(w.taskId);
      for (let w of s) w.abortController.abort(Kl("background"));
      await Fv(), await ru().catch(w => {
        p("task_local_agent", "adopt_checkpoint_flush_failed"), t(`[adopt] checkpoint flush: ${w}`, {
          level: "warn"
        });
      });
    },
    stopCarriedWatches: stopCarriedWatches,
    disown: m => {
      stopCarriedWatches(m);
      for (let w of shells) m.remove(w.taskId);
      for (let w of agents) m.remove(w.agentId);
      for (let w of workflows) m.remove(w.taskId);
      if (a.length > 0) $2(a.map(item => item.id));
    },
    abandon: () => {
      if (F) return;
      F = !0;
      for (let m of o) try {
        m.shellCommand?.kill();
      } catch (error) {
        t(`[adopt] abandon ${m.id}: ${error}`, {
          level: "warn"
        });
      }
      for (let m of s) {
        let w = `Background agent "${qt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; the agent was not resumed.`;
        te(m.agentId, w, n);
      }
      if (s.length > 0) p("task_local_agent", "adopt_spawn_failed");
      for (let m of l) {
        let w = `Background workflow "${qt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; it was not resumed. To resume manually: Workflow({scriptPath: '${qt(m.scriptPath ?? "")}', resumeFromRunId: '${qt(m.workflowRunId ?? "")}'}).`;
        te(m.id, w, n);
      }
      if (l.length > 0) p("task_local_workflow", "adopt_spawn_failed");
      if (L) {
        for (let m of T) te(m, "The background session didn't start, so automatic replies to Artifact comments stopped. Publish the Artifact again to turn them back on.", n);
        if (frameLive.length > 0) p("artifact_live_subscribe", "adopt_spawn_failed");
      }
    }
  };
}
function Vwn(e) {
  let n = new Map();
  for (let r of e) for (let o of r.entries) {
    let s = {
        ...o,
        writtenAtMs: o.writtenAtMs ?? r.fallbackBasis
      },
      l = n.get(o.slug),
      unattendedReplies = Math.min((l?.unattendedReplies ?? 0) + (o.unattendedReplies ?? 0), _ze),
      u = l === void 0 || s.writtenAtMs > (l.writtenAtMs ?? 0) ? s : l;
    n.set(o.slug, unattendedReplies > 0 ? {
      ...u,
      unattendedReplies: unattendedReplies
    } : u);
  }
  if (n.size > vw) p("artifact_live_subscribe", "merged_consent_capped");
  return [...n.values()].sort((itemA, itemB) => (itemB.writtenAtMs ?? 0) - (itemA.writtenAtMs ?? 0)).slice(0, cHe);
}
function Xe(e, n) {
  let r = (o, s, l) => [...o, ...s].filter((item, index, g) => g.findIndex(k => l(k) === l(item)) === index);
  return {
    writtenAtMs: n.writtenAtMs,
    origin: n.origin ?? e.origin,
    shells: r(e.shells, n.shells, o => o.pid),
    cron: r(e.cron, n.cron, o => o.id),
    ...((n.loopWakeFires ?? e.loopWakeFires) !== void 0 && {
      loopWakeFires: n.loopWakeFires ?? e.loopWakeFires
    }),
    agents: r(e.agents ?? [], n.agents ?? [], o => o.agentId),
    workflows: r(e.workflows ?? [], n.workflows ?? [], o => o.taskId),
    ...(((e.frameLive?.length ?? 0) > 0 || (n.frameLive?.length ?? 0) > 0) && {
      frameLive: Vwn([{
        entries: e.frameLive ?? [],
        fallbackBasis: e.writtenAtMs
      }, {
        entries: n.frameLive ?? [],
        fallbackBasis: n.writtenAtMs
      }])
    }),
    prefill: n.prefill ?? e.prefill
  };
}
async function Qe(e, n) {
  let r = await e.read([Ae.job(n, ["adopt.json"])]);
  if (!r.ok) return t(`[adopt] v5 merge read refused: ${rt(r.error)}`), null;
  let o = r.value.items[0];
  if (!o.found) return null;
  return Buffer.from(o.value).toString("utf8");
}
async function aje(e, n, r = {}, o) {
  let s = B(e, "adopt.json"),
    l = K(e),
    a = H() && o !== void 0 && jn(l) && e === Pr(l) ? o : void 0,
    u = n;
  try {
    let g = a ? await Qe(a, l) : await Te(s, "utf-8");
    if (g !== null && g.length <= 1e6) {
      let h = (r.mergeShellOutputRoot !== void 0 ? Ie(r.mergeShellOutputRoot) : Ee()).safeParse(J(g));
      if (h.success) {
        if (h.data.shells.length + (h.data.cron?.length ?? 0) + (h.data.agents?.length ?? 0) + (h.data.workflows?.length ?? 0) + (h.data.frameLive?.length ?? 0) <= 256) u = Xe(h.data, n);
      }
    }
  } catch {}
  if (a) {
    let g = await a.write(Ae.job(l, ["adopt.json"]), b(u), {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask(),
      parent: r.parent ?? "mustExist"
    });
    if (!g.ok) throw Object.assign(new P(`adopt.json v5 write failed: ${rt(g.error)}`, "adopt.json v5 write failed"), "telemetryCode" in g.error && g.error.telemetryCode !== void 0 ? {
      code: g.error.telemetryCode
    } : {});
    return;
  }
  await Cn(s, b(u));
}
async function HZn(e, n = {}) {
  if (!e) return null;
  let r = B(e, "adopt.json"),
    o = `${r}.${process.pid}`,
    s = Date.now() + (n.waitMs ?? 0),
    l = !1;
  for (;;) try {
    l = await Bo(r, o);
    break;
  } catch (error) {
    let k = v(error);
    if (k === "ENOENT") {
      if (Date.now() < s) {
        await Q(Be);
        continue;
      }
      return i("tengu_adopt_claim", {
        result: y("enoent")
      }), null;
    }
    return t(`[adopt] rename failed: ${error}`, {
      level: "warn"
    }), i("tengu_adopt_claim", {
      result: k !== void 0 && nT.has(k) ? y("ebusy_gave_up") : Kg(error)
    }), null;
  }
  let a = Date.now(),
    result = l ? y("ebusy_retry") : y("ok");
  try {
    let g = await Te(o, "utf-8"),
      h = (n.extraShellOutputRoot !== void 0 ? Ie(n.extraShellOutputRoot) : Ee()).safeParse(JSON.parse(g));
    if (!h.success) return t(`[adopt] schema rejected: ${h.error.message}`, {
      level: "warn"
    }), i("tengu_adopt_claim", {
      result: y("schema_rejected")
    }), null;
    let _ = a - h.data.writtenAtMs;
    if (h.data.origin !== "exit" && _ > ije) {
      t(`[adopt] stale (age ${_}ms)`, {
        level: "warn"
      });
      let T = h.data.frameLive ?? [];
      if (T.length === 0) return i("tengu_adopt_claim", {
        result: y("stale")
      }), null;
      return i("tengu_adopt_claim", {
        result: y("stale"),
        frame_live_stale: y("true")
      }), p("artifact_live_subscribe", "carried_consent_stale_dropped"), {
        writtenAtMs: h.data.writtenAtMs,
        ...(h.data.origin !== void 0 && {
          origin: h.data.origin
        }),
        shells: [],
        cron: [],
        frameLive: T.map(item => ({
          ...item,
          writtenAtMs: item.writtenAtMs ?? h.data.writtenAtMs,
          stale: !0
        }))
      };
    }
    if ((h.data.frameLive?.length ?? 0) > 0) {
      let frameLive_2 = h.data.frameLive.map(item => {
          let writtenAtMs_2 = item.writtenAtMs ?? h.data.writtenAtMs,
            m = a - writtenAtMs_2;
          return m >= -j1o && m <= ije ? {
            ...item,
            writtenAtMs: writtenAtMs_2
          } : {
            ...item,
            writtenAtMs: writtenAtMs_2,
            stale: !0
          };
        }),
        F = U(frameLive_2, L => "stale" in L);
      if (F > 0) t(`[adopt] ${F}/${frameLive_2.length} frameLive entries marked stale`, {
        level: "warn"
      });
      return i("tengu_adopt_claim", {
        result: result,
        ...(F > 0 && {
          frame_live_stale: y("true")
        })
      }), Object.assign(h.data, {
        frameLive: frameLive_2
      });
    }
    return i("tengu_adopt_claim", {
      result: result
    }), h.data;
  } catch (error) {
    return t(`[adopt] read/parse failed: ${error}`, {
      level: "warn"
    }), i("tengu_adopt_claim", {
      result: y("parse_failed")
    }), null;
  } finally {
    await D(o).catch(() => {});
  }
}
function FZn(e, agents_2, workflows_2, owner) {
  let s = T8();
  if (agents_2.length === 0 && workflows_2.length === 0) {
    s.unresumedAdopt.delete(e);
    return;
  }
  s.unresumedAdopt.set(e, {
    agents: agents_2,
    workflows: workflows_2,
    owner: owner
  });
}
function $Zn(e, n) {
  if (T8().unresumedAdopt.get(e)?.owner !== n) return {
    agents: [],
    workflows: []
  };
  return qwn(e);
}
function qwn(e) {
  let n = T8(),
    r = n.unresumedAdopt.get(e);
  return n.unresumedAdopt.delete(e), {
    agents: r?.agents ?? [],
    workflows: r?.workflows ?? []
  };
}
function UZn(e, n, owner_2) {
  let o = T8();
  if (n.length === 0) {
    o.unresumedFrameLive.delete(e);
    return;
  }
  o.unresumedFrameLive.set(e, {
    entries: n.map(({
      stale: stale,
      ...l
    }) => l),
    owner: owner_2
  });
}
function BZn(e, n) {
  if (T8().unresumedFrameLive.get(e)?.owner !== n) return [];
  return kGt(e);
}
function kGt(e) {
  let n = T8(),
    r = n.unresumedFrameLive.get(e);
  return n.unresumedFrameLive.delete(e), r?.entries ?? [];
}
function jZn(e, n, owner_3) {
  let o = T8(),
    s = o.unresumedFrameLive.get(e);
  if (n.length === 0 || s !== void 0 && s.owner !== owner_3) return;
  o.unresumedFrameLive.set(e, {
    entries: [...n],
    owner: owner_3
  });
}
function WZn(e, n, owner_4) {
  let o = T8(),
    s = o.unresumedFrameLive.get(e);
  if (s === void 0 || s.owner !== owner_4) return;
  let entries = s.entries.filter(item => item.slug !== n);
  if (entries.length > 0) o.unresumedFrameLive.set(e, {
    entries: entries,
    owner: owner_4
  });else o.unresumedFrameLive.delete(e);
}
function zZn(e, n) {
  if (n.length > 0) T8().exitRetryFrameLive.set(e, [...n]);
}
function GZn(e) {
  if (e === void 0) return [];
  let n = T8(),
    r = n.exitRetryFrameLive.get(e) ?? [];
  return n.exitRetryFrameLive.delete(e), r;
}
var Ze = new Set(["EXDEV", "EPERM", "ENOTSUP", "EOPNOTSUPP", "ENOSYS", "EMLINK"]),
  et = 1048576,
  Oe = ".adopt-relink.";
function tt(e) {
  return `${e}${Oe}${process.pid}.${Date.now()}.${be(4).toString("hex")}`;
}
async function nt(e, n, identity, o) {
  let fallbackCode;
  try {
    await o(e, n), fallbackCode = "UNVERIFIED";
  } catch (error) {
    let u = v(error);
    if (u === void 0 || !Ze.has(u)) throw error;
    fallbackCode = u;
  }
  if (fallbackCode === "UNVERIFIED") {
    let a = await N(n);
    if (a.isFile() && a.dev === identity.dev && a.ino === identity.ino) return {
      method: "hardlink",
      identity: identity
    };
    await D(n);
  }
  let identity_2 = await ot(e, n, identity);
  return {
    method: "copy",
    fallbackCode: fallbackCode,
    identity: identity_2
  };
}
async function ot(e, n, r) {
  let o = await ne(e, V.O_RDONLY | mu);
  try {
    let s = await o.stat();
    if (!s.isFile() || s.dev !== r.dev || s.ino !== r.ino) throw Object.assign(Error("adopted file copy source is not the validated inode"), {
      code: "ADOPT_IDENTITY_MISMATCH"
    });
    let l = await ne(n, "wx", NYn),
      a = !1;
    try {
      let u = Buffer.allocUnsafe(et);
      for (;;) {
        let {
          bytesRead: bytesRead_2
        } = await o.read(u, 0, u.length, null);
        if (bytesRead_2 === 0) break;
        let _ = 0;
        while (_ < bytesRead_2) {
          let {
            bytesWritten: bytesWritten_2
          } = await l.write(u, _, bytesRead_2 - _);
          if (bytesWritten_2 === 0) throw Object.assign(Error("adopted file copy made no progress"), {
            code: "ADOPT_COPY_STALLED"
          });
          _ += bytesWritten_2;
        }
      }
      let {
        dev: dev,
        ino: ino
      } = await l.stat();
      return await l.utimes(s.atime, s.mtime).catch(h => {
        t(`[adopt] copied file keeps fresh timestamps (${v(h) ?? "error"})`, {
          level: "warn"
        });
      }), await l.close(), a = !0, {
        dev: dev,
        ino: ino
      };
    } finally {
      if (!a) await l.close().catch(() => {}), await D(n).catch(() => {});
    }
  } finally {
    await o.close().catch(() => {});
  }
}
async function it(e, n, r) {
  let o;
  try {
    o = await N(n);
  } catch (error) {
    if (v(error) !== "ENOENT") throw error;
  }
  if (o !== void 0 && !o.isSymbolicLink()) {
    if (!o.isFile()) throw Object.assign(Error("adopted agent name is held by a non-file entry"), {
      code: "ADOPT_NAME_NOT_FILE"
    });
    if (r) return "kept";
  }
  try {
    await Bo(e, n);
  } catch (error) {
    if (o === void 0 || v(error) !== "EEXIST") throw error;
    await D(n), await Bo(e, n);
  }
  return o === void 0 ? "created" : "replaced";
}
async function ue(e, n, r, o, s) {
  if (s) {
    let h = await N(e).catch(() => {
      return;
    });
    if (h !== void 0 && !h.isSymbolicLink() && h.isFile()) return {
      method: "kept",
      created: null
    };
  }
  let l = tt(e),
    a = await nt(n, l, r, o),
    u = "kept";
  try {
    u = await it(l, e, s);
  } finally {
    await D(l).catch(() => {});
  }
  let {
    identity: identity_3,
    ...k
  } = a;
  return u === "kept" ? {
    method: "kept",
    created: null
  } : {
    ...k,
    created: u === "created" ? identity_3 : null
  };
}
async function VZn(e, {
  storageV5: storageV5,
  linkFn = fe
} = {}) {
  if (storageV5 === void 0) return at(e);
  try {
    let o = await st(e, linkFn);
    if (o.method !== void 0) i("tengu_adopt_link", {
      kind: y("agent"),
      method: c(o.method),
      fallback_code: Kg({
        code: o.fallbackCode
      })
    });
    return o;
  } catch (error) {
    throw i("tengu_adopt_link", {
      kind: y("agent"),
      method: c("fail"),
      error_code: Kg(error)
    }), error;
  }
}
async function at(e) {
  if (!e.transcriptPath) return {};
  let n = Ig(go(e.agentId)),
    r = a => a.replace(/\.jsonl$/, ".meta.json");
  await _e(r(e.transcriptPath));
  let o = null,
    forkedSkillNameFromSidecar,
    parent = wze(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let a = await bvt(parent);
    if (a.status !== "valid") throw new P(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${a.status})`, "adopted forked-skill scoping record unusable");
    if (a.scoping.skillName !== e.forkedSkillName) throw new P(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch");
    o = {
      parent: parent,
      fork: wze(n)
    };
  } else {
    let a = await bvt(parent);
    switch (a.status) {
      case "absent":
        break;
      case "valid":
        o = {
          parent: parent,
          fork: wze(n)
        }, forkedSkillNameFromSidecar = a.scoping.skillName;
        break;
      case "malformed":
      case "absent-but-marked":
        throw new P(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${a.status})`, "adopted forked-skill scoping record unusable");
    }
  }
  if (n === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar
  };
  if ((await W(n).catch(() => {
    return;
  })) === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar
  };
  if (await pe(z(n), {
    recursive: !0
  }), o) await D(o.fork.provenanceMarker).catch(() => {}), await IRn(o.fork.provenanceMarker, e.forkedSkillName ?? forkedSkillNameFromSidecar), await D(o.fork.scoping).catch(() => {}), await ve(o.parent.scoping, o.fork.scoping);
  for (let [a, u] of [[n, e.transcriptPath], [r(n), r(e.transcriptPath)]]) await D(a).catch(() => {}), await fe(u, a);
  return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar
  };
}
function q(e, code) {
  return Object.assign(e, {
    code: code
  });
}
async function st(e, n) {
  if (!e.transcriptPath) return {};
  let r = Ig(go(e.agentId)),
    o = A => A.replace(/\.jsonl$/, ".meta.json");
  if (K(e.transcriptPath) !== K(r)) throw q(new P(`adopted agent ${e.agentId} carrier names a transcript that is not agent-${e.agentId}.jsonl`, "adopted agent transcript path has the wrong leaf name"), "ADOPT_WRONG_LEAF");
  let [s, l] = await Promise.all([N(e.transcriptPath), N(o(e.transcriptPath))]);
  if (!s.isFile() || !l.isFile()) throw q(new P(`adopted agent ${e.agentId} parent transcript or .meta.json is not a regular file`, "adopted agent parent file is not a regular file"), "ADOPT_PARENT_NOT_REGULAR");
  let a = null,
    forkedSkillNameFromSidecar_2,
    parent_2 = wze(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let A = await bvt(parent_2);
    if (A.status !== "valid") throw q(new P(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    if (A.scoping.skillName !== e.forkedSkillName) throw q(new P(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch"), "ADOPT_SCOPING_MISMATCH");
    a = {
      parent: parent_2,
      fork: wze(r)
    };
  } else {
    let A = await bvt(parent_2);
    switch (A.status) {
      case "absent":
        break;
      case "valid":
        a = {
          parent: parent_2,
          fork: wze(r)
        }, forkedSkillNameFromSidecar_2 = A.scoping.skillName;
        break;
      case "malformed":
      case "absent-but-marked":
        throw q(new P(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    }
  }
  if (r === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar_2,
    method: "noop"
  };
  let k = await W(z(r)).catch(() => {
    return;
  });
  if (k !== void 0 && B(k, K(r)) === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar_2,
    method: "noop"
  };
  if (await pe(z(r), {
    recursive: !0
  }), a) await D(a.fork.provenanceMarker).catch(() => {}), await IRn(a.fork.provenanceMarker, e.forkedSkillName ?? forkedSkillNameFromSidecar_2), await D(a.fork.scoping).catch(() => {}), await ve(a.parent.scoping, a.fork.scoping);
  let h = await N(r).catch(() => {
      return;
    }),
    _ = h !== void 0 && (h.isFile() || h.isSymbolicLink() && (await W(r).catch(() => {
      return;
    })) === e.transcriptPath),
    T = await ue(o(r), o(e.transcriptPath), l, n, _),
    F;
  try {
    F = await ue(r, e.transcriptPath, s, n, !0);
  } catch (error) {
    if (T.created !== null) {
      let created = T.created;
      await N(o(r)).then(async w => {
        if (w.dev === created.dev && w.ino === created.ino) await D(o(r));
      }).catch(() => {});
    }
    throw error;
  }
  let fallbackCode_2 = F.fallbackCode ?? T.fallbackCode;
  if (fallbackCode_2 !== void 0) {
    let A = [...(F.method === "copy" ? ["transcript"] : []), ...(T.method === "copy" ? ["meta"] : [])].join("+");
    t(`[adopt] agent ${e.agentId}: hard link impossible (${fallbackCode_2}) \u2014 materialised a copy of ${A}`, {
      level: "warn"
    }), p("task_local_agent", "adopt_link_fallback_copy");
  }
  return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar_2,
    method: F.method,
    fallbackCode: fallbackCode_2
  };
}
var dt = /^agent-[\w-]+\.(?:jsonl|meta\.json)$/,
  regExp = new RegExp("^agent-[\\w-]+\\.(?:jsonl|meta\\.json)" + Oe.replace(/[.]/g, "\\.") + "\\d+\\.(\\d+)\\.[0-9a-f]{8}$"),
  ut = 900000,
  ft = 64;
function xe(e, n) {
  let r = Re(e, n);
  if (r === "" || r.startsWith("..") || oe(r)) return null;
  let o = r.split(ce);
  if (o.length < 3 || o[2] !== "subagents") return null;
  return {
    session: B(o[0], o[1]),
    depth: o.length
  };
}
async function qZn({
  storageV5: storageV5_2,
  linkFn: linkFn_2 = fe
} = {}) {
  if (storageV5_2 === void 0) return;
  try {
    await pt(JDt(), linkFn_2);
  } catch (error) {
    if (v(error) !== void 0) {
      t(`[adopt] relink sweep abandoned: ${error}`, {
        level: "warn"
      });
      return;
    }
    d(error);
  }
}
async function pt(e, n) {
  let r;
  try {
    r = await Ne(e, {
      withFileTypes: !0
    });
  } catch {
    return;
  }
  let o = Date.now(),
    s = [];
  for (let R of r) {
    let M = regExp.exec(R.name);
    if (M) {
      if (Math.abs(o - Number(M[1])) > ut) await D(B(e, R.name)).catch(() => {});
      continue;
    }
    if (R.isSymbolicLink() && dt.test(R.name)) s.push(R.name);
  }
  s.length;
  return;
}
var Z = 65536,
  mt = f(() => lt({
    agentType: de()
  })),
  gt = f(() => lt({
    agentId: de()
  }));
async function Ce(e, n, r) {
  let o = await ne(e, V.O_RDONLY | mu);
  try {
    let s = await o.stat();
    if (s.dev !== n.dev || s.ino !== n.ino) return "target changed during the check";
    if (r.endsWith(".meta.json")) {
      if (s.size > Z) return "meta too large";
      let g = ke((await we(o)).toString("utf-8"));
      return mt().safeParse(g).success ? void 0 : "not an agent meta";
    }
    if (s.size === 0) return;
    let l = r.slice(6, -6),
      a = await we(o),
      u = a.toString("utf-8");
    if (a.length >= Z && a.indexOf(10) === -1) return ht(u, l) ? void 0 : "no record naming this agent in the first 64 KiB";
    for (let g of u.split(`
`)) {
      let k = ke(g);
      if (k === null) continue;
      let h = gt().safeParse(k);
      if (h.success && h.data.agentId === l) return;
    }
    return "no record naming this agent in the first 64 KiB";
  } finally {
    await o.close().catch(() => {});
  }
}
function ke(e) {
  try {
    return J(e);
  } catch {
    return null;
  }
}
async function we(e) {
  let n = Buffer.allocUnsafe(Z),
    r = 0;
  while (r < Z) {
    let {
      bytesRead: bytesRead_3
    } = await e.read(n, r, Z - r, r);
    if (bytesRead_3 === 0) break;
    r += bytesRead_3;
  }
  return n.subarray(0, r);
}
function ht(e, n) {
  if (e[0] !== "{") return !1;
  let r = `"agentId":"${n}"`,
    o = 0,
    s = !1,
    l = !1;
  for (let a = 0; a < e.length; a++) {
    let u = e[a];
    if (s) {
      if (l) l = !1;else if (u === "\\") l = !0;else if (u === '"') s = !1;
      continue;
    }
    if (u === "{" || u === "[") o++;else if (u === "}" || u === "]") {
      if (o--, o === 0) return !1;
    } else if (u === '"') {
      if (o === 1 && e.startsWith(r, a) && (e[a - 1] === "{" || e[a - 1] === ",")) return !0;
      s = !0;
    }
  }
  return !1;
}
async function ye(e, n, r, o, {
  besideDir: besideDir
} = {}) {
  let linkPath = B(e, n),
    a = await Pe(linkPath);
  if (!oe(a) || K(a) !== n || iH(a)) return "unexpected target spelling";
  let gate;
  try {
    gate = await N(a);
  } catch (error) {
    return `target ${v(error) ?? "unreadable"}`;
  }
  if (!gate.isFile()) return gate.isSymbolicLink() ? "chained link" : "non-regular target";
  let real = await W(a),
    k = xe(r, real);
  if (k === null || k.depth < 4 || K(real) !== n) return "outside the transcript store";
  if (k.session === o) return "this session's own file";
  if (besideDir !== void 0 && z(real) !== besideDir) return "not beside its transcript";
  let h = await N(real);
  if (!h.isFile() || h.dev !== gate.dev || h.ino !== gate.ino) return "target changed during the check";
  let _ = await Ce(real, gate, n);
  if (_ !== void 0) return _;
  return {
    linkPath: linkPath,
    real: real,
    gate: gate
  };
}
async function kt(e, n) {
  let r = B(e, n),
    o;
  try {
    o = await N(r);
  } catch {
    return "meta without its transcript";
  }
  if (!o.isFile() || o.size === 0) return "meta without its transcript";
  let s = await Ce(r, o, n);
  return s === void 0 ? null : `transcript ${s}`;
}
async function Se(e, n) {
  return (await ue(e.linkPath, e.real, e.gate, n, !0)).method;
}
function KZn(e) {
  return lje(e.pid, e.startTimeTicks, e.procStart);
}
async function YZn(e) {
  let n = uO(e.workflowRunId);
  if (n === e.transcriptDir) return;
  if ((await W(n).catch(() => {
    return;
  })) === e.transcriptDir) return;
  await _e(B(e.transcriptDir, "journal.jsonl")), await pe(z(n), {
    recursive: !0
  });
  try {
    await D(n);
  } catch (error) {
    if (v(error) !== "ENOENT") try {
      await We(n);
    } catch (error) {
      if (v(error) === "ENOTEMPTY") await $e(n, {
        recursive: !0,
        force: !0
      });
    }
  }
  await je(e.transcriptDir, n, "junction");
}
function EGt(e, n, r) {
  let o = e.scriptPath !== void 0 ? ` To resume manually: Workflow({scriptPath: '${qt(e.scriptPath)}', resumeFromRunId: '${qt(e.workflowRunId)}'}).` : "",
    s = `Background workflow "${qt(e.description)}" was checkpointed for the background fork but could not be resumed (${qt(n)}).${o}`;
  te(e.taskId, s, r);
}
function te(taskId, summary, r, agentId = qe()) {
  r.enqueuePendingNotification({
    value: qi({
      taskId: qt(taskId),
      status: "failed",
      summary: summary
    }),
    agentId: agentId,
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    taskId: taskId
  }), Si(taskId, "failed", {
    summary: summary
  });
}
function XZn(e) {
  let n = ie(() => [_d()]).safeParse(e);
  if (!n.success) throw new P(n.error.issues[0]?.message ?? "scriptPath rejected", "adopt scriptPath rejected");
  return n.data;
}
function Kwn(e) {
  return e.mcp.clientsInitialized === !0 && !e.mcp.clients.some(item => item.type === "pending");
}
function JZn(e) {
  let n = e.parentAgentId !== void 0,
    r = e.forkedSkillName !== void 0;
  return {
    emit: n || r,
    excludeFromReconcile: !n && r
  };
}
function TGt(e, n, r, o) {
  let s = e.parentAgentId !== void 0 && In(r.get(e.parentAgentId)) ? go(e.parentAgentId) : qe(),
    l = `Background agent "${qt(e.description ?? e.agentId)}" was checkpointed for the background fork but could not be resumed (${qt(n)}).`;
  te(e.agentId, l, o, s);
}
function QZn(e, n) {
  let r = new Set(U_().map(item => item.id));
  for (let o of e) {
    if (o.prompt.length > ge) {
      p("task_local_agent", "adopt_cron_prompt_too_long"), t(`[adopt] cron ${k$(o.id, 64)} skipped: prompt is ${o.prompt.length} characters, over the ${ge} limit`, {
        level: "warn"
      });
      continue;
    }
    if (!r.has(o.id)) $de(o), r.add(o.id);
  }
  for (let o = 0; o < (n ?? 0); o++) wjt();
}
function Y2(e) {
  let n = new Map();
  if (!tpe()) return n;
  let r = a => In(a) ? a.parentAgentId : "agentId" in a ? a.agentId : void 0,
    o = new Map();
  for (let a of Object.values(e)) {
    if (a.status !== "running" && a.status !== "pending" || In(a) && a.forkWorker) continue;
    let u = r(a);
    if (u !== void 0) {
      let g = o.get(u) ?? [];
      g.push(a), o.set(u, g);
    }
  }
  let s = a => {
      if (In(a)) return a.agentType !== "main-session" && a.status === "running" && a.isBackgrounded && a.abortController !== void 0;
      if (_p(a)) return a.kind !== "monitor" && a.status === "running" && a.isBackgrounded && a.shellCommand !== null && a.shellCommand.detach !== void 0;
      if (U$n(a)) return a.status === "running" && a.v2Run === void 0 && a.scriptPath !== void 0 && a.workflowRunId !== void 0 && a.abortController !== void 0;
      return !1;
    },
    l = (a, u) => {
      u.push(a.id);
      let g = s(a);
      for (let k of o.get(a.id) ?? []) g = l(k, u) && g;
      return g;
    };
  for (let a of Object.values(e)) {
    if (!(In(a) ? a.parentAgentId === void 0 : _p(a) ? a.agentId === void 0 : U$n(a))) continue;
    let g = [],
      k = l(a, g);
    for (let h of g) n.set(h, k);
  }
  return n;
}
function Ywn(e, n) {
  return _p(e) && (n.get(e.id) ?? !1);
}
function Obe(e, n) {
  return tpe() && (e.agentId === void 0 || (n.get(e.agentId) ?? !1));
}
function Xwn(e, n) {
  return In(e) && (n.get(e.id) ?? !1);
}
function CGt(e, n) {
  return U$n(e) && (n.get(e.id) ?? !1);
}
function eIe(e, n) {
  return n.get(e.id) ?? !1;
}
function DJe(e, n = Y2(e)) {
  let r = Kre(e);
  return U(Object.values(e), o => eIe(o, n)) + U(U_(), o => Obe(o, n)) + r.size;
}
function LJe(e, n = Y2(e)) {
  return fM(e).count - DJe(e, n);
}
function tIe(e, n = Y2(e)) {
  let running = 0,
    finished = 0,
    rerun = 0;
  for (let l of Object.values(e)) {
    if (!CGt(l, n)) continue;
    let a = 1 / 0;
    for (let u of l.workflowProgress) if (u.type === "workflow_agent" && u.state === "error") a = Math.min(a, u.index);
    for (let u of l.workflowProgress) {
      if (u.type !== "workflow_agent") continue;
      if (u.state === "done") {
        if (u.index > a) rerun++;else finished++;
      } else if (u.state === "progress" || u.state === "start" && !(u.queuedAt !== void 0 && u.startedAt === void 0)) running++;
    }
  }
  return {
    running: running,
    finished: finished,
    rerun: rerun
  };
}
function ZZn(e, n = Y2(e)) {
  return LJe(e, n) > 0 || Kre(e).size > 0 || tIe(e, n).running > 0;
}
function NJe(e, n) {
  let r = 0;
  for (let o of Kre(e)) if (!n.has(o)) r++;
  return r;
}
function eer(e) {
  return e.shells.length > 0 || (e.agents?.length ?? 0) > 0 || (e.workflows?.length ?? 0) > 0 || e.cron.length > 0;
}
function RGt(e) {
  return {
    adopted_shells: e?.shells.length ?? 0,
    adopted_agents: e?.agents?.length ?? 0,
    adopted_workflows: e?.workflows?.length ?? 0,
    adopted_cron: e?.cron.length ?? 0,
    adopted_frame_live: e?.frameLive?.length ?? 0
  };
}
function Dyt(e) {
  return Qd((n, r, o) => {
    if (!o) return;
    wt(o, e), i("tengu_refusal_fallback_latch_reset", {
      source: c(r),
      restored_to_explicit_override: o.restoredToExplicitOverride,
      model_scope: c(vV(o.fallbackModel))
    });
  });
}
function T8r(e) {
  return Qd((n, r, o) => {
    if (o) e();
  });
}
function wt(e, n) {
  let r, o;
  if (n(s => {
    let l = e.overrideValue ?? e.forSessionValue ?? e.appStateModel,
      fastMode = mo() ? sC(l, s.fastMode) : !!s.fastMode;
    return r = s.fastMode, o = fastMode, s.mainLoopModel === e.appStateModel && s.mainLoopModelForSession === e.forSessionValue && fastMode === !!s.fastMode ? s : {
      ...s,
      mainLoopModel: e.appStateModel,
      mainLoopModelForSession: e.forSessionValue,
      fastMode: fastMode
    };
  }), o !== void 0) iC(r, o);
  fp(e.overrideValue);
}
import { resolve as yt } from "path";
var ter = new Nt(() => Me());
function Lyt(e, n, r, o, s) {
  let settings = Je();
  t(`Settings changed from ${n}, updating app state`), o$e();
  let a = vz();
  $z({
    userLayer: "retain"
  }), MT();
  let u = !1;
  if (r(g => {
    let toolPermissionContext = $Rt(g.toolPermissionContext, a);
    toolPermissionContext = rer(toolPermissionContext, g.settings.permissions?.additionalDirectories, gHe(), n, s?.trustFlip === !0, s?.prevCwd, o);
    let h = ner(toolPermissionContext, a);
    if (toolPermissionContext = h.context, u = h.exitedAutoMode, toolPermissionContext.blockReadsOutsideWorkingDirectories !== !0 && KTe()) toolPermissionContext = {
      ...toolPermissionContext,
      blockReadsOutsideWorkingDirectories: !0
    }, hDt();
    let awaySummaryEnabled = bWe();
    return {
      ...g,
      settings: settings,
      toolPermissionContext: toolPermissionContext,
      ...(g.awaySummaryEnabled !== awaySummaryEnabled && {
        awaySummaryEnabled: awaySummaryEnabled
      })
    };
  }), u && e !== void 0) ter.of(e).emit();
}
function Nyt(e) {
  if (X1r()) e();
}
function ner(e, n) {
  let r = e;
  if (r.isBypassPermissionsModeAvailable && Rw()) r = jdr(r);
  if (r.strippedDangerousRules !== void 0) {
    let s = new Set(Ui),
      l = !Lb(),
      strippedDangerousRules = {};
    for (let [u, g] of Object.entries(r.strippedDangerousRules)) if (g && (l || u === "command") && !s.has(u)) strippedDangerousRules[u] = [...g];
    r = {
      ...r,
      strippedDangerousRules: strippedDangerousRules
    };
  }
  let exitedAutoMode = KYt(r) && KAn();
  if (exitedAutoMode) r = YAn(r);
  return {
    context: cwe(r),
    exitedAutoMode: exitedAutoMode
  };
}
function rer(e, n, r, o, s = !1, l, a) {
  let u = new Set((n ?? []).flatMap(item => X(item, l))),
    g = new Set((r ?? []).flatMap(item => X(item))),
    additionalWorkingDirectories = e.additionalWorkingDirectories,
    directories = [...u].filter(item => !g.has(item) && !ae(additionalWorkingDirectories.get(item)?.source)),
    _ = [...g].filter(item => (!u.has(item) || s && !additionalWorkingDirectories.has(item)) && !ae(additionalWorkingDirectories.get(item)?.source)),
    T = hm(),
    {
      declared: declared,
      repoOnly: repoOnly
    } = Kan(S => [...(T === null ? [] : X(S, T)), ...X(S)], a),
    A = S => repoOnly.has(S) ? "projectSettings" : "localSettings",
    m = [...additionalWorkingDirectories.entries()].filter(([S, E]) => !ae(E.source) && !directories.includes(S) && declared.has(S) && E.source !== A(S));
  if (directories.length === 0 && _.length === 0 && m.length === 0 && o !== "flagSettings") return e;
  let w = e;
  if (m.length > 0) {
    let additionalWorkingDirectories_2 = new Map(additionalWorkingDirectories);
    for (let [E, x] of m) additionalWorkingDirectories_2.set(E, {
      ...x,
      source: A(E)
    });
    w = {
      ...w,
      additionalWorkingDirectories: additionalWorkingDirectories_2
    };
  }
  if (o === "flagSettings") {
    let S = new Set((he("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap(item => X(item))),
      trustedNetworkDirectories = new Map(w.trustedNetworkDirectories ?? []),
      x = !1;
    for (let R of [...trustedNetworkDirectories.keys()]) if (!S.has(R) && additionalWorkingDirectories.get(R)?.source !== "cliArg") {
      for (let M of trustedNetworkDirectories.get(R) ?? []) if (M !== R) directories.push(M);
      trustedNetworkDirectories.delete(R), x = !0;
    }
    if (VAn()) {
      for (let R of S) if (!trustedNetworkDirectories.has(R)) {
        if (r2r(R)) continue;
        let M = zAn(R);
        if (M.length > 0) {
          trustedNetworkDirectories.set(R, M);
          for (let I of M) if (I !== R) _.push(I);
          x = !0;
        }
      }
    }
    if (x) w = {
      ...w,
      trustedNetworkDirectories: trustedNetworkDirectories
    };
  }
  if (directories.length > 0) w = vc(w, {
    type: "removeDirectories",
    directories: directories,
    destination: "localSettings"
  });
  if (_.length > 0) for (let destination of ["projectSettings", "localSettings"]) {
    let directories_2 = _.filter(item => A(item) === destination);
    if (directories_2.length > 0) w = vc(w, {
      type: "addDirectories",
      directories: directories_2,
      destination: destination
    });
  }
  return w;
}
function Hyt(e, n) {
  let r = new Set(gHe().flatMap(item => X(item))),
    additionalWorkingDirectories_3 = e.additionalWorkingDirectories,
    directories_3 = n.filter(item => {
      let a = additionalWorkingDirectories_3.get(item);
      return a !== void 0 && !r.has(item) && !ae(a.source);
    });
  if (directories_3.length === 0) return e;
  return vc(e, {
    type: "removeDirectories",
    directories: directories_3,
    destination: "localSettings"
  });
}
function ae(e) {
  return e === "cliArg" || e === "command" || e === "session";
}
function St(e, n) {
  return yt(Ye(e, n));
}
function X(e, n) {
  try {
    return [St(e, n)];
  } catch {
    return [];
  }
}
export { ije, j1o, NZn, Wwn, zwn, Gwn, Mj, Kre, wGt, vGt, Vwn, aje, HZn, FZn, $Zn, qwn, UZn, BZn, kGt, jZn, WZn, zZn, GZn, VZn, qZn, KZn, YZn, EGt, XZn, Kwn, JZn, TGt, QZn, Y2, Ywn, Obe, Xwn, CGt, eIe, DJe, LJe, tIe, ZZn, NJe, eer, RGt, Dyt, T8r, ter, Lyt, Nyt, ner, rer, Hyt };