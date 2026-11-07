// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, k, kh } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { bl, NC, Ba, Cl, Qxe, uqn, Ks, Jv, jH, wh, R0 } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { ku } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { KA } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { iB } from "B:/~BUN/root/chunk-09sn55yf.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Pr } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { st, rf, Ee, eh, k7, Jp, w$e, jcn, $Kn, cne } from "B:/~BUN/root/chunk-game8aqv.js";
import { t, _, ee, Zy, xN, Og, ZS } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { q4 } from "B:/~BUN/root/chunk-2f1svh63.js";
import { za, $s, WL, zL } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Rxo, iG, JS } from "B:/~BUN/root/chunk-1g25msn4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { c0 } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { OH, Is, zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { x2n, P2n } from "B:/~BUN/root/chunk-x1xft50h.js";
import { Hr, Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { Zoe } from "B:/~BUN/root/chunk-yhafkw66.js";
import { cAe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { $l } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { Xt, oBt, RE, Xg } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { sze } from "B:/~BUN/root/chunk-0jhmwh3q.js";
import { iD } from "B:/~BUN/root/chunk-9ajgj3y1.js";
import { xge, PP, qSi, tu } from "B:/~BUN/root/chunk-27h4st9h.js";
import { op, Wq, lht, Em } from "B:/~BUN/root/chunk-ke150ry1.js";
import { Hm, eO } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { zi } from "B:/~BUN/root/chunk-5bb21frh.js";
import { Ql } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { pR, LLe, te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { aio, Cn } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { j6 } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { No } from "B:/~BUN/root/chunk-4vcs773m.js";
import { npt } from "B:/~BUN/root/chunk-8rnfdnh3.js";
import { p6e } from "B:/~BUN/root/chunk-qx88ee6a.js";
import { GG, zke, Dk } from "B:/~BUN/root/chunk-61tvx6vn.js";
import { xit } from "B:/~BUN/root/chunk-3md6z7eb.js";
import { uBe, nF } from "B:/~BUN/root/chunk-d3pgwd75.js";
import { ehn, Xvt } from "B:/~BUN/root/chunk-a4zd2bs8.js";
import { xK } from "B:/~BUN/root/chunk-q42n6mwr.js";
import { hCt, S6e, Dbn, gCt } from "B:/~BUN/root/chunk-xp5ya8v1.js";
import { bCt, vYr, Fbn } from "B:/~BUN/root/chunk-df199zqm.js";
import { nU } from "B:/~BUN/root/chunk-50p1vzkm.js";
import { An } from "B:/~BUN/root/chunk-7yd8y16n.js";
import { Or, ge, Mn, ws, qc, vr, Ft, Lp, Ec, Nfa } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { createHash as Ue, randomBytes as be } from "crypto";
import { constants as H } from "fs";
import { copyFile as Te, link as ue, mkdir as pe, readdir as Be, readFile as He, realpath as C, rm as ze, rmdir as Ke, stat as ve, symlink as Ge, unlink as O, lstat as N, readlink as Pe, open as q } from "fs/promises";
import { basename as G, dirname as j, isAbsolute as ne, join as W, relative as Re, sep as ae } from "path";
var Kvt = 120000,
  Isa = 60000,
  kHo = 4000,
  Xe = 250,
  KWr = /^[\w-]+$/,
  BGt = 256,
  m5n = 128,
  Ye = 16777216;
function se(e) {
  let n = () => [...e(), ...[]],
    o = r => {
      let s = Ba(r) ? Qxe(r) : null;
      return s === null ? null : uqn(s);
    };
  return ge().transform((r, s) => {
    let d = message => (s.addIssue({
        code: Or.custom,
        message: message
      }), Nfa),
      i,
      u = () => {
        if (i === void 0) {
          let S = n(),
            allowed = S.map(wh).filter(item => item !== null);
          i = {
            allowed: allowed,
            anchor: [...S, ...allowed]
          };
        }
        return i;
      };
    if (jH(r)) return d(`adopt path is remote UNC: ${r}`);
    let g = Jv(r);
    if (NC(g) || R0(g) || g !== r && /[. ](?:[\\/]|$)/.test(g)) return d(`adopt path is a Windows device-namespace spelling (\\\\?\\, \\\\.\\ or \\??\\) other than a plain \\\\?\\<drive>:\\ path: ${r}`);
    if (r = g, !ne(r) || bl(r)) return d(`adopt path is not an absolute, dot-free spelling: ${r}`);
    let w = o(r),
      anchors = w !== null && w.startsWith("/net/") ? u().anchor.filter(item => o(item) === w) : [];
    if (w !== null && anchors.length === 0) return d(w.startsWith("/net/") ? `adopt path is on an automount host (or map) none of the allowed roots live on: ${r}` : `adopt path is under the macOS /Network/Servers automount directory, refused regardless of the allowed roots: ${r}`);
    let y = Og(ZS, r, anchors.length > 0 ? {
      anchors: anchors,
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0
    } : void 0);
    if (y === Zy) return d(`adopt path runs through a directory that could not be examined or a symlink chain too long to follow: ${r}`);
    if (y !== void 0) return d(`adopt path traverses symlink/junction to remote UNC: ${y}`);
    let T = wh(r);
    if (T === null) return d(`adopt path unresolvable: ${r}`);
    let allowed_2 = u().allowed;
    if (allowed_2.length === 0) return d("adopt path roots unresolvable");
    if (!allowed_2.some(item => {
      let m = Re(item, T);
      return m === "" || !m.startsWith("..") && !ne(m);
    })) return d(`adopt path outside allowed roots: ${T}`);
    return T;
  });
}
function Ie() {
  let e = c0(Ee()),
    n = x2n(e);
  return P2n(e).flatMap(item => {
    let r = W(Hm(), item);
    if (item !== n) try {
      if (!ZS.lstatSync(r).isDirectory()) return [];
    } catch {
      return [];
    }
    return [r + ae];
  });
}
function re() {
  return ge().max(BGt).regex(KWr);
}
function Le(e) {
  return Ft({
    taskId: re(),
    pid: Mn().int().positive(),
    procStart: ge().optional(),
    startTimeTicks: Mn().int().optional(),
    command: ge().transform(n => PP(n) ?? ""),
    description: ge().transform(n => PP(n) ?? ""),
    outputPath: se(e),
    lastReportedTotalLines: Mn().int(),
    toolUseId: qc().transform(nU).optional(),
    kind: Ec(["bash", "monitor"]).optional(),
    agentId: re().optional()
  });
}
var Je = p(() => Le(Ie)),
  ke = 1e5,
  Qe = p(() => Ft({
    id: ge().max(BGt),
    cron: ge(),
    prompt: ge(),
    createdAt: Mn(),
    recurring: ws().optional(),
    agentId: ge().max(BGt).optional(),
    plugin: qc().optional(),
    kind: Lp("loop").optional(),
    scheduledFor: Mn().optional(),
    reason: ge().transform(e => PP(e)).optional(),
    keepalive: Lp(!0).optional()
  })),
  Ze = p(() => Ft({
    taskId: re(),
    workflowRunId: ge().max(m5n).regex(npt),
    scriptPath: ge(),
    scriptSha256: ge().regex(/^[0-9a-f]{64}$/).optional(),
    argsJson: ge().optional(),
    description: ge().transform(e => PP(e) ?? ""),
    startTime: Mn().optional(),
    withholdScriptFromSdkEvents: ws().optional(),
    transcriptDir: se(() => [op()])
  })),
  qe = p(() => Ft({
    agentId: re(),
    agentType: ge().optional(),
    description: ge().transform(e => PP(e)).optional(),
    toolUseId: qc().transform(nU).optional(),
    spawnDepth: Mn().int().optional(),
    startTime: Mn().optional(),
    transcriptPath: se(() => [op()]).optional(),
    parentAgentId: re().optional(),
    forkedSkillName: ge().min(1).max(256).optional()
  })),
  tt = p(() => Ft({
    slug: ge().uuid(),
    title: ge().min(1).max(256).optional(),
    writtenAtMs: Mn().finite().optional(),
    unattendedReplies: Mn().int().min(0).max(gCt).optional()
  }));
function Fe(e = Je()) {
  return Ft({
    writtenAtMs: Mn(),
    origin: Ec(["background", "exit"]).optional(),
    shells: vr(e),
    cron: vr(Qe()),
    loopWakeFires: Mn().int().nonnegative().optional(),
    agents: vr(qe()).optional(),
    workflows: vr(Ze()).optional(),
    frameLive: vr(tt()).optional(),
    prefill: Ft({
      text: ge(),
      boundaryUuid: ge().max(BGt).optional()
    }).optional()
  });
}
var Oe = p(() => Fe());
function Me(e) {
  let n = Array.isArray(e) ? e : [e];
  return Fe(Le(() => [...Ie(), ...n]));
}
var le = 67108864;
async function qWr(e, n) {
  let pid = await e.shellCommand?.detach?.();
  if (pid === void 0) return null;
  let outputPath = e.shellCommand.taskOutput.path,
    s = n?.rerootOutputsTo;
  if (s !== void 0) {
    let d = async u => {
        t(`[adopt] dropping shell ${e.id} from the handoff (${u})`, {
          level: "error"
        });
        try {
          await e.shellCommand?.kill?.();
        } catch {}
        return null;
      },
      i = !1;
    try {
      if (Ks(outputPath) || Cl(outputPath)) throw Error("network-spelled output path");
      let u = Og(ZS, outputPath);
      if (u === Zy) throw Error("output path has a symlink chain too long to vet");
      if (u !== void 0) throw Error("output path traverses a junction to remote UNC");
      if ((await N(outputPath)).isSymbolicLink()) {
        let T = await Pe(outputPath);
        if (Ks(T) || Cl(T)) throw Error("network-spelled symlink target");
        let v = ne(T) ? T : W(j(outputPath), T);
        if (Ks(v) || Cl(v)) throw Error("network-spelled symlink hop");
        let P = Og(ZS, v);
        if (P === Zy) throw Error("symlink target has a symlink chain too long to vet");
        if (P !== void 0) throw Error("symlink target traverses a junction to remote UNC");
        if ((await N(v)).isSymbolicLink()) throw Error("multi-hop symlink chain");
      }
      let w = await C(outputPath),
        h = await N(w);
      i = !0;
      let y = await C(s).catch(() => s);
      if (!w.startsWith(y + ae)) {
        if (!(await Promise.all([Hm(), ...[]].map(item => C(item).catch(() => null)))).filter(item => item !== null).some(item => w.startsWith(item + ae))) return await d("its output resolves outside the task-output tree");
        let P = W(s, "rerooted", `${e.id}.output`),
          S;
        try {
          S = await JS(P, [P], {
            createParents: !0,
            leaf: "replace"
          });
        } catch {
          return await d("reroot directory not trustworthy");
        }
        let ioPath = S.ioPath;
        try {
          if (!h.isFile()) return await d("gate target is not a regular file");
          if (h.nlink !== 1) return await d("gate target has another name");
          let A = await q(w, x() === "windows" ? "r" : H.O_RDONLY | (H.O_NONBLOCK ?? 0) | Go);
          try {
            let E = await A.stat();
            if (!E.isFile() || E.nlink !== 1 || E.dev !== h.dev || E.ino !== h.ino) return await d("handle identity mismatch");
            {
              if (await S.recheckBeforeWrite(), await O(ioPath).catch(() => {}), E.size > le) return await d("over-cap escaping output");
              let z;
              try {
                await S.recheckBeforeWrite(), z = x() === "windows" ? await q(ioPath, "wx") : await iG(ioPath, H.O_WRONLY | H.O_CREAT | H.O_EXCL | H.O_NOFOLLOW, x());
              } catch {
                return await d("reroot destination not creatable");
              }
              try {
                let B = 0,
                  I = Buffer.allocUnsafe(65536);
                while (B < le) {
                  let {
                    bytesRead: bytesRead
                  } = await A.read(I, 0, Math.min(I.length, le - B), B);
                  if (bytesRead === 0) break;
                  let L = 0;
                  while (L < bytesRead) {
                    let {
                      bytesWritten: bytesWritten
                    } = await z.write(I, L, bytesRead - L);
                    L += bytesWritten;
                  }
                  B += bytesRead;
                }
              } finally {
                await z.close();
              }
              outputPath = P;
            }
          } finally {
            await A.close();
          }
        } finally {
          await S.close();
        }
      }
    } catch {
      if (i) return await d("reroot failed after the gate");
    }
  }
  return {
    taskId: e.id,
    pid: pid,
    procStart: await cAe(pid),
    startTimeTicks: (await ehn(pid)) ?? void 0,
    command: e.command,
    description: e.description,
    outputPath: outputPath,
    lastReportedTotalLines: e.lastReportedTotalLines,
    toolUseId: e.toolUseId,
    kind: e.kind,
    agentId: e.agentId
  };
}
async function YWr(e, n = {}) {
  let o = n.derivedTranscriptPath ?? Em(Pr(e.agentId));
  return {
    agentId: e.agentId,
    agentType: e.agentType,
    description: e.description,
    toolUseId: e.toolUseId,
    spawnDepth: e.spawnDepth,
    startTime: e.startTime,
    transcriptPath: await C(o).catch(() => {
      return;
    }),
    parentAgentId: e.parentAgentId,
    forkedSkillName: e.forkedSkillName
  };
}
async function XWr(e, n = {}) {
  let o = n.derivedTranscriptDir ?? xK(e.workflowRunId);
  return {
    taskId: e.id,
    workflowRunId: e.workflowRunId,
    scriptPath: e.scriptPath,
    scriptSha256: e.script ? Ue("sha256").update(e.script).digest("hex") : void 0,
    argsJson: e.args !== void 0 ? _(e.args) : void 0,
    description: e.description,
    startTime: e.startTime,
    withholdScriptFromSdkEvents: e.withholdScriptFromSdkEvents,
    transcriptDir: await C(o).catch(() => o)
  };
}
function j7(e) {
  return uBe() && zke(e) && e.frameLive !== void 0;
}
function UPe(e) {
  let n = new Set();
  if (!uBe()) return n;
  for (let o of Object.values(e)) if (j7(o) && o.frameLive !== void 0) n.add(o.frameLive.slug);
  for (let o of hCt()) n.add(o);
  for (let o of S6e()) n.add(o);
  return n;
}
function h5n(e) {
  let {
      supervisors: supervisors,
      bootingWiredArms: bootingWiredArms
    } = te().live,
    r = S6e(),
    s = [],
    writtenAtMs = Date.now();
  for (let slug of UPe(e)) {
    let u = supervisors.get(slug),
      g = r.has(slug) ? bootingWiredArms.get(slug) : void 0;
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
async function g5n(e, n) {
  let o = Tne(e),
    r = Object.values(e).filter(item => ezr(item, o)),
    s = Object.values(e).filter(item => tzr(item, o)),
    d = Object.values(e).filter(item => b5n(item, o)),
    i = Jp().filter(item => bYe(item, o));
  if (r.length === 0 && s.length === 0 && d.length === 0 && i.length === 0 && h5n(e).length === 0) return null;
  let shells = (await Promise.all(r.map(item => qWr(item, {
      rerootOutputsTo: eO()
    })))).filter(item => item !== null),
    agents = await Promise.all(s.map(item => YWr(item))),
    workflows = await Promise.all(d.map(item => XWr(item))),
    frameLive = h5n(e),
    y = new Set(frameLive.map(item => item.slug)),
    T = Object.values(e).filter(item => j7(item) && item.frameLive !== void 0 && y.has(item.frameLive.slug)).map(item => item.id);
  if (shells.length === 0 && agents.length === 0 && workflows.length === 0 && i.length === 0 && frameLive.length === 0) return null;
  let v = !1,
    P = !1,
    stopCarriedWatches = m => {
      if (P) return;
      P = !0, xit(y), Dbn(y);
      let A = new Set(T);
      if (y.size > 0) {
        for (let E of Object.values(m.all())) if (GG(E) && E.status === "running" && E.frameLive !== void 0 && y.has(E.frameLive.slug)) A.add(E.id);
      }
      for (let E of A) Dk(E, m, {
        quiet: !0
      });
    };
  return {
    payload: {
      writtenAtMs: Date.now(),
      shells: shells,
      cron: i.map(item => ({
        id: item.id,
        cron: item.cron,
        prompt: item.prompt,
        createdAt: item.createdAt,
        recurring: item.recurring,
        agentId: item.agentId,
        plugin: item.plugin,
        kind: item.kind,
        scheduledFor: item.scheduledFor,
        reason: item.reason,
        keepalive: item.keepalive
      })),
      ...(jcn() > 0 && {
        loopWakeFires: jcn()
      }),
      agents: agents,
      workflows: workflows,
      ...(frameLive.length > 0 && {
        frameLive: frameLive
      })
    },
    checkpointAgents: async m => {
      for (let A of d) A.abortController?.abort($l("background")), p6e(A.id, m);
      if (agents.length === 0) return;
      for (let A of shells) if (A.agentId !== void 0) m.remove(A.taskId);
      for (let A of s) A.abortController.abort($l("background"));
      await ku(), await tu().catch(A => {
        c("task_local_agent", "adopt_checkpoint_flush_failed"), t(`[adopt] checkpoint flush: ${A}`, {
          level: "warn"
        });
      });
    },
    stopCarriedWatches: stopCarriedWatches,
    disown: m => {
      stopCarriedWatches(m);
      for (let A of shells) m.remove(A.taskId);
      for (let A of agents) m.remove(A.agentId);
      for (let A of workflows) m.remove(A.taskId);
      if (i.length > 0) cne(i.map(item => item.id));
    },
    abandon: () => {
      if (v) return;
      v = !0;
      for (let m of r) try {
        m.shellCommand?.kill();
      } catch (error) {
        t(`[adopt] abandon ${m.id}: ${error}`, {
          level: "warn"
        });
      }
      for (let m of s) {
        let A = `Background agent "${Yvt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; the agent was not resumed.`;
        Y(m.agentId, A, n);
      }
      if (s.length > 0) c("task_local_agent", "adopt_spawn_failed");
      for (let m of d) {
        let A = m.withholdScriptFromSdkEvents === !0 ? "" : We({
            workflowRunId: m.workflowRunId ?? "",
            scriptPath: m.scriptPath,
            argsJson: m.args !== void 0 ? _(m.args) : void 0
          }, ""),
          E = `Background workflow "${Yvt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; it was not resumed.${A}`;
        Y(m.id, E, n);
      }
      if (d.length > 0) c("task_local_workflow", "adopt_spawn_failed");
      if (P) {
        for (let m of T) Y(m, "The background session didn't start, so automatic replies to Artifact comments stopped. Publish the Artifact again to turn them back on.", n);
        if (frameLive.length > 0) c("artifact_live_subscribe", "adopt_spawn_failed");
      }
    }
  };
}
function JWr(e) {
  let n = new Map();
  for (let o of e) for (let r of o.entries) {
    let s = {
        ...r,
        writtenAtMs: r.writtenAtMs ?? o.fallbackBasis
      },
      d = n.get(r.slug),
      unattendedReplies = Math.min((d?.unattendedReplies ?? 0) + (r.unattendedReplies ?? 0), gCt),
      u = d === void 0 || s.writtenAtMs > (d.writtenAtMs ?? 0) ? s : d;
    n.set(r.slug, unattendedReplies > 0 ? {
      ...u,
      unattendedReplies: unattendedReplies
    } : u);
  }
  if (n.size > pR) c("artifact_live_subscribe", "merged_consent_capped");
  return [...n.values()].sort((itemA, itemB) => (itemB.writtenAtMs ?? 0) - (itemA.writtenAtMs ?? 0)).slice(0, LLe);
}
function nt(e, n) {
  let o = (r, s, d) => [...r, ...s].filter((item, index, g) => g.findIndex(w => d(w) === d(item)) === index);
  return {
    writtenAtMs: n.writtenAtMs,
    origin: n.origin ?? e.origin,
    shells: o(e.shells, n.shells, r => r.pid),
    cron: o(e.cron, n.cron, r => r.id),
    ...((n.loopWakeFires ?? e.loopWakeFires) !== void 0 && {
      loopWakeFires: n.loopWakeFires ?? e.loopWakeFires
    }),
    agents: o(e.agents ?? [], n.agents ?? [], r => r.agentId),
    workflows: o(e.workflows ?? [], n.workflows ?? [], r => r.taskId),
    ...(((e.frameLive?.length ?? 0) > 0 || (n.frameLive?.length ?? 0) > 0) && {
      frameLive: JWr([{
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
async function rt(e, n) {
  let o = await e.read([Ve.job(n, ["adopt.json"])]);
  if (!o.ok) return t(`[adopt] v5 merge read refused: ${Ht(o.error)}`), null;
  let r = o.value.items[0];
  if (!r.found) return null;
  return Buffer.from(r.value).toString("utf8");
}
async function qvt(e, n, o = {}, r) {
  let s = W(e, "adopt.json"),
    d = G(e),
    i = X() && r !== void 0 && Hr(d) && e === No(d) ? r : void 0,
    u = n;
  try {
    let g = i ? await rt(i, d) : await He(s, "utf-8");
    if (g !== null && g.length <= 1e6) {
      let h = (o.mergeShellOutputRoot !== void 0 ? Me(o.mergeShellOutputRoot) : Oe()).safeParse(ee(g));
      if (h.success) {
        if (h.data.shells.length + (h.data.cron?.length ?? 0) + (h.data.agents?.length ?? 0) + (h.data.workflows?.length ?? 0) + (h.data.frameLive?.length ?? 0) <= 256) u = nt(h.data, n);
      }
    }
  } catch {}
  if (i) {
    let g = await i.write(Ve.job(d, ["adopt.json"]), _(u), {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask(),
      parent: o.parent ?? "mustExist"
    });
    if (!g.ok) throw Object.assign(new R(`adopt.json v5 write failed: ${Ht(g.error)}`, "adopt.json v5 write failed"), "telemetryCode" in g.error && g.error.telemetryCode !== void 0 ? {
      code: g.error.telemetryCode
    } : {});
    return;
  }
  await zn(s, _(u));
}
async function vHo(e, n = {}) {
  if (!e) return null;
  let o = W(e, "adopt.json"),
    r = `${o}.${process.pid}`,
    s = Date.now() + (n.waitMs ?? 0),
    d = !1;
  for (;;) try {
    d = await Is(o, r);
    break;
  } catch (error) {
    let w = k(error);
    if (w === "ENOENT") {
      if (Date.now() < s) {
        await J(Xe);
        continue;
      }
      return l("tengu_adopt_claim", {
        result: b("enoent")
      }), null;
    }
    return t(`[adopt] rename failed: ${error}`, {
      level: "warn"
    }), l("tengu_adopt_claim", {
      result: w !== void 0 && OH.has(w) ? b("ebusy_gave_up") : kh(error)
    }), null;
  }
  let i = Date.now(),
    result = d ? b("ebusy_retry") : b("ok");
  try {
    let g = await j6(r, Ye);
    if (g.kind !== "ok") return t(`[adopt] carrier not read: ${g.kind}`, {
      level: "warn"
    }), l("tengu_adopt_claim", {
      result: b("not_read")
    }), null;
    let content = g.content,
      y = (n.extraShellOutputRoot !== void 0 ? Me(n.extraShellOutputRoot) : Oe()).safeParse(JSON.parse(content));
    if (!y.success) return t(`[adopt] schema rejected: ${y.error.message}`, {
      level: "warn"
    }), l("tengu_adopt_claim", {
      result: b("schema_rejected")
    }), null;
    let T = i - y.data.writtenAtMs;
    if (y.data.origin !== "exit" && T > Kvt) {
      t(`[adopt] stale (age ${T}ms)`, {
        level: "warn"
      });
      let v = y.data.frameLive ?? [];
      if (v.length === 0) return l("tengu_adopt_claim", {
        result: b("stale")
      }), null;
      return l("tengu_adopt_claim", {
        result: b("stale"),
        frame_live_stale: b("true")
      }), c("artifact_live_subscribe", "carried_consent_stale_dropped"), {
        writtenAtMs: y.data.writtenAtMs,
        ...(y.data.origin !== void 0 && {
          origin: y.data.origin
        }),
        shells: [],
        cron: [],
        frameLive: v.map(item => ({
          ...item,
          writtenAtMs: item.writtenAtMs ?? y.data.writtenAtMs,
          stale: !0
        }))
      };
    }
    if ((y.data.frameLive?.length ?? 0) > 0) {
      let frameLive_2 = y.data.frameLive.map(item => {
          let writtenAtMs_2 = item.writtenAtMs ?? y.data.writtenAtMs,
            A = i - writtenAtMs_2;
          return A >= -Isa && A <= Kvt ? {
            ...item,
            writtenAtMs: writtenAtMs_2
          } : {
            ...item,
            writtenAtMs: writtenAtMs_2,
            stale: !0
          };
        }),
        P = U(frameLive_2, S => "stale" in S);
      if (P > 0) t(`[adopt] ${P}/${frameLive_2.length} frameLive entries marked stale`, {
        level: "warn"
      });
      return l("tengu_adopt_claim", {
        result: result,
        ...(P > 0 && {
          frame_live_stale: b("true")
        })
      }), Object.assign(y.data, {
        frameLive: frameLive_2
      });
    }
    return l("tengu_adopt_claim", {
      result: result
    }), y.data;
  } catch (error) {
    return t(`[adopt] read/parse failed: ${error}`, {
      level: "warn"
    }), l("tengu_adopt_claim", {
      result: b("parse_failed")
    }), null;
  } finally {
    await O(r).catch(() => {});
  }
}
function EHo(e, agents_2, workflows_2, owner) {
  let s = xge();
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
function THo(e, n) {
  if (xge().unresumedAdopt.get(e)?.owner !== n) return {
    agents: [],
    workflows: []
  };
  return QWr(e);
}
function QWr(e) {
  let n = xge(),
    o = n.unresumedAdopt.get(e);
  return n.unresumedAdopt.delete(e), {
    agents: o?.agents ?? [],
    workflows: o?.workflows ?? []
  };
}
function CHo(e, n, owner_2) {
  let r = xge();
  if (n.length === 0) {
    r.unresumedFrameLive.delete(e);
    return;
  }
  r.unresumedFrameLive.set(e, {
    entries: n.map(({
      stale: stale,
      ...d
    }) => d),
    owner: owner_2
  });
}
function RHo(e, n) {
  if (xge().unresumedFrameLive.get(e)?.owner !== n) return [];
  return y5n(e);
}
function y5n(e) {
  let n = xge(),
    o = n.unresumedFrameLive.get(e);
  return n.unresumedFrameLive.delete(e), o?.entries ?? [];
}
function AHo(e, n, owner_3) {
  let r = xge(),
    s = r.unresumedFrameLive.get(e);
  if (n.length === 0 || s !== void 0 && s.owner !== owner_3) return;
  r.unresumedFrameLive.set(e, {
    entries: [...n],
    owner: owner_3
  });
}
function xHo(e, n, owner_4) {
  let r = xge(),
    s = r.unresumedFrameLive.get(e);
  if (s === void 0 || s.owner !== owner_4) return;
  let entries = s.entries.filter(item => item.slug !== n);
  if (entries.length > 0) r.unresumedFrameLive.set(e, {
    entries: entries,
    owner: owner_4
  });else r.unresumedFrameLive.delete(e);
}
function PHo(e, n) {
  if (n.length > 0) xge().exitRetryFrameLive.set(e, [...n]);
}
function OHo(e) {
  if (e === void 0) return [];
  let n = xge(),
    o = n.exitRetryFrameLive.get(e) ?? [];
  return n.exitRetryFrameLive.delete(e), o;
}
var ot = new Set(["EXDEV", "EPERM", "ENOTSUP", "EOPNOTSUPP", "ENOSYS", "EMLINK"]),
  it = 1048576,
  Ne = ".adopt-relink.";
function at(e) {
  return `${e}${Ne}${process.pid}.${Date.now()}.${be(4).toString("hex")}`;
}
async function dt(e, n, identity, r) {
  let fallbackCode;
  try {
    await r(e, n), fallbackCode = "UNVERIFIED";
  } catch (error) {
    let u = k(error);
    if (u === void 0 || !ot.has(u)) throw error;
    fallbackCode = u;
  }
  if (fallbackCode === "UNVERIFIED") {
    let i = await N(n);
    if (i.isFile() && i.dev === identity.dev && i.ino === identity.ino) return {
      method: "hardlink",
      identity: identity
    };
    await O(n);
  }
  let identity_2 = await lt(e, n, identity);
  return {
    method: "copy",
    fallbackCode: fallbackCode,
    identity: identity_2
  };
}
async function lt(e, n, o) {
  let r = await q(e, H.O_RDONLY | Go);
  try {
    let s = await r.stat();
    if (!s.isFile() || s.dev !== o.dev || s.ino !== o.ino) throw Object.assign(Error("adopted file copy source is not the validated inode"), {
      code: "ADOPT_IDENTITY_MISMATCH"
    });
    let d = await q(n, "wx", Rxo),
      i = !1;
    try {
      let u = Buffer.allocUnsafe(it);
      for (;;) {
        let {
          bytesRead: bytesRead_2
        } = await r.read(u, 0, u.length, null);
        if (bytesRead_2 === 0) break;
        let y = 0;
        while (y < bytesRead_2) {
          let {
            bytesWritten: bytesWritten_2
          } = await d.write(u, y, bytesRead_2 - y);
          if (bytesWritten_2 === 0) throw Object.assign(Error("adopted file copy made no progress"), {
            code: "ADOPT_COPY_STALLED"
          });
          y += bytesWritten_2;
        }
      }
      let {
        dev: dev,
        ino: ino
      } = await d.stat();
      return await d.utimes(s.atime, s.mtime).catch(h => {
        t(`[adopt] copied file keeps fresh timestamps (${k(h) ?? "error"})`, {
          level: "warn"
        });
      }), await d.close(), i = !0, {
        dev: dev,
        ino: ino
      };
    } finally {
      if (!i) await d.close().catch(() => {}), await O(n).catch(() => {});
    }
  } finally {
    await r.close().catch(() => {});
  }
}
async function ct(e, n, o) {
  let r;
  try {
    r = await N(n);
  } catch (error) {
    if (k(error) !== "ENOENT") throw error;
  }
  if (r !== void 0 && !r.isSymbolicLink()) {
    if (!r.isFile()) throw Object.assign(Error("adopted agent name is held by a non-file entry"), {
      code: "ADOPT_NAME_NOT_FILE"
    });
    if (o) return "kept";
  }
  try {
    await Is(e, n);
  } catch (error) {
    if (r === void 0 || k(error) !== "EEXIST") throw error;
    await O(n), await Is(e, n);
  }
  return r === void 0 ? "created" : "replaced";
}
async function ce(e, n, o, r, s) {
  if (s) {
    let h = await N(e).catch(() => {
      return;
    });
    if (h !== void 0 && !h.isSymbolicLink() && h.isFile()) return {
      method: "kept",
      created: null
    };
  }
  let d = at(e),
    i = await dt(n, d, o, r),
    u = "kept";
  try {
    u = await ct(d, e, s);
  } finally {
    await O(d).catch(() => {});
  }
  let {
    identity: identity_3,
    ...w
  } = i;
  return u === "kept" ? {
    method: "kept",
    created: null
  } : {
    ...w,
    created: u === "created" ? identity_3 : null
  };
}
async function IHo(e, {
  storageV5: storageV5,
  linkFn = ue
} = {}) {
  if (storageV5 === void 0) return ut(e);
  try {
    let r = await pt(e, linkFn);
    if (r.method !== void 0) l("tengu_adopt_link", {
      kind: b("agent"),
      method: f(r.method),
      fallback_code: kh({
        code: r.fallbackCode
      })
    });
    return r;
  } catch (error) {
    throw l("tengu_adopt_link", {
      kind: b("agent"),
      method: f("fail"),
      error_code: kh(error)
    }), error;
  }
}
async function ut(e) {
  if (!e.transcriptPath) return {};
  let n = Em(Pr(e.agentId)),
    o = i => i.replace(/\.jsonl$/, ".meta.json");
  await ve(o(e.transcriptPath));
  let r = null,
    forkedSkillNameFromSidecar,
    parent = bCt(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let i = await Fbn(parent);
    if (i.status !== "valid") throw new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${i.status})`, "adopted forked-skill scoping record unusable");
    if (i.scoping.skillName !== e.forkedSkillName) throw new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch");
    r = {
      parent: parent,
      fork: bCt(n)
    };
  } else {
    let i = await Fbn(parent);
    switch (i.status) {
      case "absent":
        break;
      case "valid":
        r = {
          parent: parent,
          fork: bCt(n)
        }, forkedSkillNameFromSidecar = i.scoping.skillName;
        break;
      case "malformed":
      case "absent-but-marked":
      case "diskless":
        throw new R(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${i.status})`, "adopted forked-skill scoping record unusable");
    }
  }
  if (n === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar
  };
  if ((await C(n).catch(() => {
    return;
  })) === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar
  };
  if (await pe(j(n), {
    recursive: !0
  }), r) await O(r.fork.provenanceMarker).catch(() => {}), await vYr(r.fork.provenanceMarker, e.forkedSkillName ?? forkedSkillNameFromSidecar), await O(r.fork.scoping).catch(() => {}), await Te(r.parent.scoping, r.fork.scoping);
  for (let [i, u] of [[n, e.transcriptPath], [o(n), o(e.transcriptPath)]]) await O(i).catch(() => {}), await ue(u, i);
  return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar
  };
}
function Q(e, code) {
  return Object.assign(e, {
    code: code
  });
}
async function pt(e, n) {
  if (!e.transcriptPath) return {};
  let o = Em(Pr(e.agentId)),
    r = S => S.replace(/\.jsonl$/, ".meta.json");
  if (G(e.transcriptPath) !== G(o)) throw Q(new R(`adopted agent ${e.agentId} carrier names a transcript that is not agent-${e.agentId}.jsonl`, "adopted agent transcript path has the wrong leaf name"), "ADOPT_WRONG_LEAF");
  let [s, d] = await Promise.all([N(e.transcriptPath), N(r(e.transcriptPath))]);
  if (!s.isFile() || !d.isFile()) throw Q(new R(`adopted agent ${e.agentId} parent transcript or .meta.json is not a regular file`, "adopted agent parent file is not a regular file"), "ADOPT_PARENT_NOT_REGULAR");
  let i = null,
    forkedSkillNameFromSidecar_2,
    parent_2 = bCt(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let S = await Fbn(parent_2);
    if (S.status !== "valid") throw Q(new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${S.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    if (S.scoping.skillName !== e.forkedSkillName) throw Q(new R(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch"), "ADOPT_SCOPING_MISMATCH");
    i = {
      parent: parent_2,
      fork: bCt(o)
    };
  } else {
    let S = await Fbn(parent_2);
    switch (S.status) {
      case "absent":
        break;
      case "valid":
        i = {
          parent: parent_2,
          fork: bCt(o)
        }, forkedSkillNameFromSidecar_2 = S.scoping.skillName;
        break;
      case "malformed":
      case "absent-but-marked":
      case "diskless":
        throw Q(new R(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${S.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    }
  }
  if (o === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar_2,
    method: "noop"
  };
  let w = await C(j(o)).catch(() => {
    return;
  });
  if (w !== void 0 && W(w, G(o)) === e.transcriptPath) return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar_2,
    method: "noop"
  };
  if (await pe(j(o), {
    recursive: !0
  }), i) await O(i.fork.provenanceMarker).catch(() => {}), await vYr(i.fork.provenanceMarker, e.forkedSkillName ?? forkedSkillNameFromSidecar_2), await O(i.fork.scoping).catch(() => {}), await Te(i.parent.scoping, i.fork.scoping);
  let h = await N(o).catch(() => {
      return;
    }),
    y = h !== void 0 && (h.isFile() || h.isSymbolicLink() && (await C(o).catch(() => {
      return;
    })) === e.transcriptPath),
    T = await ce(r(o), r(e.transcriptPath), d, n, y),
    v;
  try {
    v = await ce(o, e.transcriptPath, s, n, !0);
  } catch (error) {
    if (T.created !== null) {
      let created = T.created;
      await N(r(o)).then(async A => {
        if (A.dev === created.dev && A.ino === created.ino) await O(r(o));
      }).catch(() => {});
    }
    throw error;
  }
  let fallbackCode_2 = v.fallbackCode ?? T.fallbackCode;
  if (fallbackCode_2 !== void 0) {
    let S = [...(v.method === "copy" ? ["transcript"] : []), ...(T.method === "copy" ? ["meta"] : [])].join("+");
    t(`[adopt] agent ${e.agentId}: hard link impossible (${fallbackCode_2}) \u2014 materialised a copy of ${S}`, {
      level: "warn"
    }), c("task_local_agent", "adopt_link_fallback_copy");
  }
  return {
    forkedSkillNameFromSidecar: forkedSkillNameFromSidecar_2,
    method: v.method,
    fallbackCode: fallbackCode_2
  };
}
var ft = /^agent-[\w-]+\.(?:jsonl|meta\.json)$/,
  regExp = new RegExp("^agent-[\\w-]+\\.(?:jsonl|meta\\.json)" + Ne.replace(/[.]/g, "\\.") + "\\d+\\.(\\d+)\\.[0-9a-f]{8}$"),
  gt = 900000,
  ht = 64;
function Ce(e, n) {
  let o = Re(e, n);
  if (o === "" || o.startsWith("..") || ne(o)) return null;
  let r = o.split(ae);
  if (r.length < 3 || r[2] !== "subagents") return null;
  return {
    session: W(r[0], r[1]),
    depth: r.length
  };
}
async function MHo({
  storageV5: storageV5_2,
  linkFn: linkFn_2 = ue
} = {}) {
  if (storageV5_2 === void 0) return;
  try {
    await kt(lht(), linkFn_2);
  } catch (error) {
    if (k(error) !== void 0) {
      t(`[adopt] relink sweep abandoned: ${error}`, {
        level: "warn"
      });
      return;
    }
    a(error);
  }
}
async function kt(e, n) {
  let o;
  try {
    o = await Be(e, {
      withFileTypes: !0
    });
  } catch {
    return;
  }
  let r = Date.now(),
    s = [];
  for (let I of o) {
    let M = regExp.exec(I.name);
    if (M) {
      if (Math.abs(r - Number(M[1])) > gt) await O(W(e, I.name)).catch(() => {});
      continue;
    }
    if (I.isSymbolicLink() && ft.test(I.name)) s.push(I.name);
  }
  s.length;
  return;
}
var Z = 65536,
  wt = p(() => Ft({
    agentType: ge()
  })),
  At = p(() => Ft({
    agentId: ge()
  }));
async function $e(e, n, o) {
  let r = await q(e, H.O_RDONLY | Go);
  try {
    let s = await r.stat();
    if (s.dev !== n.dev || s.ino !== n.ino) return "target changed during the check";
    if (o.endsWith(".meta.json")) {
      if (s.size > Z) return "meta too large";
      let g = we((await Ae(r)).toString("utf-8"));
      return wt().safeParse(g).success ? void 0 : "not an agent meta";
    }
    if (s.size === 0) return;
    let d = o.slice(6, -6),
      i = await Ae(r),
      u = i.toString("utf-8");
    if (i.length >= Z && i.indexOf(10) === -1) return St(u, d) ? void 0 : "no record naming this agent in the first 64 KiB";
    for (let g of u.split(`
`)) {
      let w = we(g);
      if (w === null) continue;
      let h = At().safeParse(w);
      if (h.success && h.data.agentId === d) return;
    }
    return "no record naming this agent in the first 64 KiB";
  } finally {
    await r.close().catch(() => {});
  }
}
function we(e) {
  try {
    return ee(e);
  } catch {
    return null;
  }
}
async function Ae(e) {
  let n = Buffer.allocUnsafe(Z),
    o = 0;
  while (o < Z) {
    let {
      bytesRead: bytesRead_3
    } = await e.read(n, o, Z - o, o);
    if (bytesRead_3 === 0) break;
    o += bytesRead_3;
  }
  return n.subarray(0, o);
}
function St(e, n) {
  if (e[0] !== "{") return !1;
  let o = `"agentId":"${n}"`,
    r = 0,
    s = !1,
    d = !1;
  for (let i = 0; i < e.length; i++) {
    let u = e[i];
    if (s) {
      if (d) d = !1;else if (u === "\\") d = !0;else if (u === '"') s = !1;
      continue;
    }
    if (u === "{" || u === "[") r++;else if (u === "}" || u === "]") {
      if (r--, r === 0) return !1;
    } else if (u === '"') {
      if (r === 1 && e.startsWith(o, i) && (e[i - 1] === "{" || e[i - 1] === ",")) return !0;
      s = !0;
    }
  }
  return !1;
}
async function Se(e, n, o, r, {
  besideDir: besideDir
} = {}) {
  let linkPath = W(e, n),
    i = await Pe(linkPath);
  if (!ne(i) || G(i) !== n || xN(i)) return "unexpected target spelling";
  let gate;
  try {
    gate = await N(i);
  } catch (error) {
    return `target ${k(error) ?? "unreadable"}`;
  }
  if (!gate.isFile()) return gate.isSymbolicLink() ? "chained link" : "non-regular target";
  let real = await C(i),
    w = Ce(o, real);
  if (w === null || w.depth < 4 || G(real) !== n) return "outside the transcript store";
  if (w.session === r) return "this session's own file";
  if (besideDir !== void 0 && j(real) !== besideDir) return "not beside its transcript";
  let h = await N(real);
  if (!h.isFile() || h.dev !== gate.dev || h.ino !== gate.ino) return "target changed during the check";
  let y = await $e(real, gate, n);
  if (y !== void 0) return y;
  return {
    linkPath: linkPath,
    real: real,
    gate: gate
  };
}
async function yt(e, n) {
  let o = W(e, n),
    r;
  try {
    r = await N(o);
  } catch {
    return "meta without its transcript";
  }
  if (!r.isFile() || r.size === 0) return "meta without its transcript";
  let s = await $e(o, r, n);
  return s === void 0 ? null : `transcript ${s}`;
}
async function ye(e, n) {
  return (await ce(e.linkPath, e.real, e.gate, n, !0)).method;
}
function DHo(e) {
  return Xvt(e.pid, e.startTimeTicks, e.procStart);
}
async function LHo(e) {
  let n = xK(e.workflowRunId);
  if (n === e.transcriptDir) return;
  if ((await C(n).catch(() => {
    return;
  })) === e.transcriptDir) return;
  await ve(W(e.transcriptDir, "journal.jsonl")), await pe(j(n), {
    recursive: !0
  });
  try {
    await O(n);
  } catch (error) {
    if (k(error) !== "ENOENT") try {
      await Ke(n);
    } catch (error) {
      if (k(error) === "ENOTEMPTY") await ze(n, {
        recursive: !0,
        force: !0
      });
    }
  }
  await Ge(e.transcriptDir, n, "junction");
}
function Qmn(e, n, o, r = "") {
  let s = e.withholdScriptFromSdkEvents === !0 ? "" : We(e, r),
    d = `Background workflow "${Yvt(e.description)}" was checkpointed for the background fork but could not be resumed (${_Ye(n, fe, regExp_3) ?? me}).${s}`;
  Y(e.taskId, d, o);
}
var _e = 16000,
  _t = 4096,
  fe = 1000,
  xe = "!#$%&(*+,\\-./:;<=>?@[\\\\\\]^_{|~\\u00b7\\u2013\\u2014\\u3001\\u3002",
  De = `${xe})}`,
  regExp_2 = new RegExp(`^(?:\\p{L}[\\p{Mn}\\p{Mc}]{0,4}|[\\p{N}\\p{Sc} '${De}])*$`, "u"),
  regExp_3 = new RegExp(`^(?:\\p{L}[\\p{Mn}\\p{Mc}]{0,4}|[\\p{N}\\p{Sc} '${xe}])*$`, "u"),
  regExp_4 = new RegExp(`^(?:\\p{L}[\\p{Mn}\\p{Mc}]{0,4}|[\\p{N}\\p{Sc} '"${De}])*$`, "u"),
  vt = "\\u030b\\u030d-\\u030f\\u0312-\\u0315\\u0329\\u0334-\\u0338\\u0348\\u0350\\u0351\\u0354-\\u0358\\u0485\\u0486\\u059c-\\u059e\\u08f7-\\u08fd\\u1ab0-\\u1aff\\u1cd4\\u1ce2-\\u1ce8\\u1dce\\u1dfe\\u1dff\\u{10efa}\\u20d2\\u20d3\\u20d8-\\u20da\\u20e5\\u20e6\\u20ea\\u20eb\\u{10a39}\\u{16af0}-\\u{16af4}\\u{1bc9e}\\u{1d167}-\\u{1d169}",
  regExp_5 = new RegExp(`[${oBt}\\u02b0-\\u02ff\\u0559\\u07f4\\u07f5\\ua700-\\ua721\\ua788-\\ua78c\\u144a\\ua4f8-\\ua4ff${vt}]|\\\\$`, "u");
function _Ye(e, n, o = regExp_2) {
  if (!(RE(e) === e && iB(e) === e && o.test(e) && !regExp_5.test(e))) return;
  let s = Xt(e);
  return s.length <= n || KA(s) <= n ? s : void 0;
}
function We(e, n) {
  if (e.scriptPath === void 0) return "";
  let o = _Ye(e.scriptPath, _t, regExp_3),
    r = _Ye(e.workflowRunId, m5n);
  if (o === void 0 || r === void 0) return " Its script's file name or run id holds what this notice does not repeat, so no call to resume it is given.";
  return ` To resume manually: Workflow({scriptPath: ${_(o)}, resumeFromRunId: ${_(r)}${It(e.argsJson)}${n}`;
}
var Et = "(a description this notice does not repeat)",
  me = "a reason this notice does not repeat",
  Rt = 1000;
function Yvt(e) {
  return _Ye(e, Rt, regExp_3) ?? Et;
}
var ie = " The launch's args are not in this call: they are not JSON, are too long or too deeply nested for a notice, or hold characters a notice never repeats. Add them as args, or the run resumes without its input.";
function It(e) {
  if (e === void 0) return "}).";
  if (e.length > _e) return `}).${ie}`;
  let n = et(e, !1);
  if (n === null) return e.trim() === "null" ? "})." : `}).${ie}`;
  try {
    let o = _Ye(_(_(n)), _e, regExp_4);
    return o === void 0 ? `}).${ie}` : `, args: JSON.parse(${o})}).`;
  } catch {
    return `}).${ie}`;
  }
}
function Y(taskId, summary, o, agentId = st(), status = "failed") {
  o.enqueuePendingNotification({
    value: zi({
      taskId: Xt(taskId),
      status: status,
      summary: summary
    }),
    agentId: agentId,
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    taskId: taskId
  }), za(taskId, status, {
    summary: Xg(summary)
  });
}
function NHo(e) {
  let n = se(() => [op()]).safeParse(e);
  if (!n.success) throw new R(n.error.issues[0]?.message ?? "scriptPath rejected", "adopt scriptPath rejected");
  return n.data;
}
function ZWr(e) {
  return e.mcp.clientsInitialized === !0 && !e.mcp.clients.some(item => item.type === "pending");
}
function FHo(e) {
  return {
    emit: e.parentAgentId !== void 0 || e.forkedSkillName !== void 0
  };
}
function _5n(e, n, o, r) {
  let s = `Background agent "${Yvt(e.description ?? e.agentId)}" was checkpointed for the background fork but could not be resumed (${_Ye(n, fe, regExp_3) ?? me}).`;
  Y(e.agentId, s, r, je(e, o));
}
function HHo(e, n, o, r) {
  qSi(e.agentId, o), Y(e.agentId, `Background agent "${Yvt(e.description ?? e.agentId)}" was checkpointed for the background fork and was not resumed (${_Ye(n, fe, regExp_3) ?? me}). Sending it a message with ${An} asks to resume it again.`, r, je(e, o), "stopped");
}
function je(e, n) {
  return e.parentAgentId !== void 0 && Cn(n.get(e.parentAgentId)) ? Pr(e.parentAgentId) : st();
}
function $Ho(e, n) {
  let lastFiredAt = Date.now(),
    r = new Set(Jp().map(item => item.id)),
    s = 0;
  for (let d of e) {
    if (d.prompt.length > ke) {
      c("task_local_agent", "adopt_cron_prompt_too_long"), t(`[adopt] cron ${q4(d.id, 64)} skipped: prompt is ${d.prompt.length} characters, over the ${ke} limit`, {
        level: "warn"
      });
      continue;
    }
    let {
      plugin: plugin,
      ...u
    } = d;
    if (plugin !== void 0 && !sze(plugin)) {
      t(`[adopt] cron ${q4(d.id, 64)} skipped: its plugin name fails the rule for a stored name`, {
        level: "warn"
      });
      continue;
    }
    if (!r.has(d.id)) w$e({
      ...u,
      ...(plugin !== void 0 && {
        plugin: plugin
      }),
      ...(d.recurring && {
        lastFiredAt: lastFiredAt
      })
    }), r.add(d.id), s++;
  }
  if (s > 0) {
    if (iD()) k7(!0);
  }
  for (let d = 0; d < (n ?? 0); d++) $Kn();
}
function Tne(e) {
  let n = new Map();
  if (!uBe()) return n;
  let o = i => Cn(i) ? i.parentAgentId : "agentId" in i ? i.agentId : void 0,
    r = new Map();
  for (let i of Object.values(e)) {
    if (i.status !== "running" && i.status !== "pending" || Cn(i) && i.forkWorker) continue;
    let u = o(i);
    if (u !== void 0) {
      let g = r.get(u) ?? [];
      g.push(i), r.set(u, g);
    }
  }
  let s = i => {
      if (Cn(i)) return i.agentType !== "main-session" && i.status === "running" && i.isBackgrounded && i.abortController !== void 0;
      if (Ql(i)) return i.kind !== "monitor" && i.status === "running" && i.isBackgrounded && i.shellCommand !== null && i.shellCommand.detach !== void 0;
      if (aio(i)) return i.status === "running" && i.v2Run === void 0 && i.scriptPath !== void 0 && i.workflowRunId !== void 0 && i.abortController !== void 0;
      return !1;
    },
    d = (i, u) => {
      u.push(i.id);
      let g = s(i);
      for (let w of r.get(i.id) ?? []) g = d(w, u) && g;
      return g;
    };
  for (let i of Object.values(e)) {
    if (!(Cn(i) ? i.parentAgentId === void 0 : Ql(i) ? i.agentId === void 0 : aio(i))) continue;
    let g = [],
      w = d(i, g);
    for (let h of g) n.set(h, w);
  }
  return n;
}
function ezr(e, n) {
  return Ql(e) && (n.get(e.id) ?? !1);
}
function bYe(e, n) {
  return uBe() && (e.agentId === void 0 || (n.get(e.agentId) ?? !1));
}
function tzr(e, n) {
  return Cn(e) && (n.get(e.id) ?? !1);
}
function b5n(e, n) {
  return aio(e) && (n.get(e.id) ?? !1);
}
function Jot(e, n) {
  return n.get(e.id) ?? !1;
}
function jGt(e, n = Tne(e)) {
  let o = UPe(e);
  return U(Object.values(e), r => Jot(r, n)) + U(Jp(), r => bYe(r, n)) + o.size;
}
function WGt(e, n = Tne(e)) {
  return nF(e).count - jGt(e, n);
}
function Qot(e, n = Tne(e)) {
  let running = 0,
    finished = 0,
    rerun = 0;
  for (let d of Object.values(e)) {
    if (!b5n(d, n)) continue;
    let i = 1 / 0;
    for (let u of d.workflowProgress) if (u.type === "workflow_agent" && u.state === "error") i = Math.min(i, u.index);
    for (let u of d.workflowProgress) {
      if (u.type !== "workflow_agent") continue;
      if (u.state === "done") {
        if (u.index > i) rerun++;else finished++;
      } else if (u.state === "progress" || u.state === "start" && !(u.queuedAt !== void 0 && u.startedAt === void 0)) running++;
    }
  }
  return {
    running: running,
    finished: finished,
    rerun: rerun
  };
}
function UHo(e, n = Tne(e)) {
  return WGt(e, n) > 0 || UPe(e).size > 0 || Qot(e, n).running > 0;
}
function zGt(e, n) {
  let o = 0;
  for (let r of UPe(e)) if (!n.has(r)) o++;
  return o;
}
function BHo(e) {
  return e.shells.length > 0 || (e.agents?.length ?? 0) > 0 || (e.workflows?.length ?? 0) > 0 || e.cron.length > 0;
}
function S5n(e) {
  return {
    adopted_shells: e?.shells.length ?? 0,
    adopted_agents: e?.agents?.length ?? 0,
    adopted_workflows: e?.workflows?.length ?? 0,
    adopted_cron: e?.cron.length ?? 0,
    adopted_frame_live: e?.frameLive?.length ?? 0
  };
}
function Zmn(e) {
  return rf((n, o, r) => {
    if (!r) return;
    Lt(r, e), l("tengu_refusal_fallback_latch_reset", {
      source: f(o),
      restored_to_explicit_override: r.restoredToExplicitOverride,
      model_scope: f(Zoe(r.fallbackModel))
    });
  });
}
function G8s(e) {
  return rf((n, o, r) => {
    if (r) e();
  });
}
function Lt(e, n) {
  let o, r;
  if (n(s => {
    let d = e.overrideValue ?? e.forSessionValue ?? e.appStateModel,
      fastMode = $s() ? WL(d, s.fastMode) : !!s.fastMode;
    return o = s.fastMode, r = fastMode, s.mainLoopModel === e.appStateModel && s.mainLoopModelForSession === e.forSessionValue && fastMode === !!s.fastMode ? s : {
      ...s,
      mainLoopModel: e.appStateModel,
      mainLoopModelForSession: e.forSessionValue,
      fastMode: fastMode
    };
  }), r !== void 0) zL(o, r);
  eh(e.overrideValue);
}
export { Kvt, Isa, kHo, KWr, BGt, m5n, qWr, YWr, XWr, j7, UPe, h5n, g5n, JWr, qvt, vHo, EHo, THo, QWr, CHo, RHo, y5n, AHo, xHo, PHo, OHo, IHo, MHo, DHo, LHo, Qmn, _Ye, Yvt, NHo, ZWr, FHo, _5n, HHo, $Ho, Tne, ezr, bYe, tzr, b5n, Jot, jGt, WGt, Qot, UHo, zGt, BHo, S5n, Zmn, G8s };