// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Si,
  Jy,
  WE,
  Sd
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  go
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  UY,
  Te
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y,
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  _$
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  mi
} from "B:/~BUN/root/chunk-3wnb3s8p.js";
import {
  fC
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  VLo
} from "B:/~BUN/root/chunk-6spmd6p4.js";
import {
  lsn
} from "B:/~BUN/root/chunk-0vgj9y5e.js";
import {
  Y3e,
  LF
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  Zh,
  hp,
  tie,
  oVe,
  I8,
  SE,
  xW,
  PW,
  IW,
  N8,
  fR,
  T7t,
  C7t,
  R7t,
  xVe,
  A7t,
  Ffe,
  t3,
  xM,
  wNn,
  sv,
  oF,
  K8,
  cwr,
  Yo,
  Ce,
  _ke
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  mhe
} from "B:/~BUN/root/chunk-rtyz5f1n.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  Hn
} from "B:/~BUN/root/chunk-hqrtayw5.js";
import {
  Ek,
  MB,
  Tk
} from "B:/~BUN/root/chunk-70qv5h0a.js";
import {
  ei
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Tp
} from "B:/~BUN/root/chunk-196w7fz7.js";
import {
  yR,
  Yqe,
  OPt
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  Yke
} from "B:/~BUN/root/chunk-5yjtercz.js";
import {
  Mtn
} from "B:/~BUN/root/chunk-1xb1enjd.js";
import {
  YEe,
  rx,
  QEo,
  pxr,
  Wae,
  YL,
  gNe,
  S_,
  V1n,
  Sge,
  e0,
  wge,
  l0t,
  XEe,
  jy,
  Psn,
  mat,
  F4e,
  hat,
  $4e,
  p0t,
  f0t,
  oI,
  m0t,
  Sat
} from "B:/~BUN/root/chunk-m1qtc24s.js";
import {
  o0t
} from "B:/~BUN/root/chunk-8p6es4nr.js";
import {
  Ebt,
  Obt,
  Mbt,
  UJr,
  Jje,
  Aqt
} from "B:/~BUN/root/chunk-k4yzbknz.js";
import {
  FRn,
  fZe,
  rk,
  ero
} from "B:/~BUN/root/chunk-fwqmqt2f.js";
import {
  Onr
} from "B:/~BUN/root/chunk-2h339bcq.js";
import {
  _En
} from "B:/~BUN/root/chunk-zc6n3jyh.js";
import {
  R4t,
  iwt,
  awt
} from "B:/~BUN/root/chunk-rx5crs76.js";
import {
  mwe
} from "B:/~BUN/root/chunk-wvy82qn4.js";
import {
  $$n,
  lLe,
  g_o
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  pat,
  Ssn,
  wsn
} from "B:/~BUN/root/chunk-c1275ktq.js";
import {
  Sw
} from "B:/~BUN/root/chunk-rcz149rn.js";
import {
  lo
} from "B:/~BUN/root/chunk-988g5svb.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
var je = 500,
  he = 500;

function Ke(n, e, s, w, l) {
  return async (f, R, u, C, K, V) => {
    let h = V ?? await N8(f, R, u, C, K, xW, void 0, w);
    if (h.behavior !== "ask") return h;
    let B = h.updatedInput ?? R;
    if (e.signal.aborted) return {
      behavior: "ask",
      message: oF
    };
    let N = me(u),
      x = () => f.description(B, {
        isNonInteractiveSession: u.options.isNonInteractiveSession,
        toolPermissionContext: N,
        tools: u.options.tools
      });
    if (u.requestDialog !== void 0) {
      let r = Aqt.of(u.session).permissionContextSetter,
        P = Obt(f, R, u, C, K, w, (q) => {
          r?.(q, {
            preserveMode: !0
          })
        }),
        g = await Ebt({
          ctx: P,
          updatedInput: h.updatedInput,
          suggestions: h.suggestions,
          permissionMode: N.mode,
          askSuppressesAlwaysAllowRule: h.suppressAlwaysAllowRule === !0,
          askIsPersonOnly: h.personOnly === !0
        });
      if (g) return g;
      if (e.signal.aborted) return {
        behavior: "ask",
        message: oF
      };
      let a = await x();
      if (e.signal.aborted) return {
        behavior: "ask",
        message: oF
      };
      let S = Date.now();
      try {
        return await new Promise((q, J) => {
          Mbt({
            ctx: P,
            description: a,
            result: h,
            awaitAutomatedChecksBeforeDialog: !0
          }, q).catch(J)
        })
      } finally {
        s(Date.now() - S)
      }
    }
    if (h.localDisplayOnly || h.forcedByCaller === !0) return mwe(f.name, "the teammate mailbox (a static-description wire)");
    let I = await x();
    if (e.signal.aborted) return {
      behavior: "ask",
      message: oF
    };
    return new Promise((r) => {
      let T = Ssn({
        toolName: f.name,
        toolUseId: K,
        input: B,
        description: I,
        permissionSuggestions: h.suggestions,
        workerId: n.agentId,
        workerName: n.agentName,
        workerColor: n.color,
        teamName: n.teamName
      });
      R4t({
        requestId: T.id,
        toolUseId: K,
        toolName: T.toolName,
        inputDigest: pat(T.toolName, B),
        onAllow(S, q, J, F) {
          a();
          let te = f.suppressesAllPermissionUpdates?.(B) === !0 ? IW(q) : f.suppressesAlwaysAllowRule?.(B) === !0 || h.suppressAlwaysAllowRule === !0 ? PW(q, f, me(u)) : q;
          LF(te, u.storageV5).catch(d);
          let Z = S && Object.keys(S).length > 0 ? S : B;
          r({
            behavior: "allow",
            updatedInput: Z,
            userModified: !1,
            ...F && F.length > 0 && {
              contentBlocks: F
            }
          })
        },
        onReject(S, q) {
          a();
          let J = S ? `${K8}${S}` : oF;
          r({
            behavior: "ask",
            message: J,
            contentBlocks: q
          })
        },
        onRefuse(S) {
          a(), r({
            behavior: "ask",
            message: S
          })
        },
        onUnboundVerdict() {}
      }), wsn(T, u.storageV5).then((S) => {
        if (!S) a(), r({
          behavior: "ask",
          message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
        })
      });
      let P = setInterval(async (S, q, J, F, te, Z, de) => {
          if (S.signal.aborted) {
            q(), J({
              behavior: "ask",
              message: oF
            });
            return
          }
          let ge = await gNe(F.agentName, F.teamName, Z),
            E = Wae(ge.filter((G) => G && !G.read), YL(F.agentName, F.teamName), {
              roster: de(),
              isPaneTeammate: !1
            });
          for (let G of ge)
            if (G && !G.read && E.get(G) !== "forged") {
              let W = hat(G.text);
              if (W && W.request_id === te.id) {
                if (await V1n(F.agentName, F.teamName, G, Z), G.from !== mi) {
                  t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${G.from}`, {
                    level: "warn"
                  });
                  continue
                }
                if (W.subtype === "success") awt({
                  requestId: W.request_id,
                  toolUseId: W.tool_use_id,
                  approvedRequest: W.approved_request,
                  decision: "approved",
                  updatedInput: W.response?.updated_input,
                  permissionUpdates: W.response?.permission_updates
                });
                else awt({
                  requestId: W.request_id,
                  toolUseId: W.tool_use_id,
                  approvedRequest: W.approved_request,
                  decision: "rejected",
                  feedback: W.error
                });
                return
              }
            }
        }, je, e, a, r, n, T, u.storageV5, l),
        g = () => {
          a(), r({
            behavior: "ask",
            message: oF
          })
        };
      e.signal.addEventListener("abort", g, {
        once: !0
      });

      function a() {
        clearInterval(P), iwt(T.id), e.signal.removeEventListener("abort", g)
      }
    })
  }
}

function j(n, e, s) {
  s.update(n, (w) => w.type === "in_process_teammate" ? e(w) : w)
}
async function Ge(n, e, s, w, l) {
  return S_(mi, {
    from: n,
    text: e,
    timestamp: new Date().toISOString(),
    color: s
  }, w, l)
}
async function Re(n, e, s, w, l) {
  let f = mat(n, w),
    R;
  try {
    R = await Ge(n, b(f), e, s, l)
  } finally {
    F4e(f, w?.result, R)
  }
  return R !== void 0
}

function Ve(n) {
  let e = new Set(n.filter((s) => s.status !== "completed").map((s) => s.id));
  return n.find((s) => {
    if (s.status !== "pending") return !1;
    if (s.owner) return !1;
    return s.blockedBy.every((w) => !e.has(w))
  })
}

function He(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
  if (n.description) e += `

${n.description}`;
  return e
}
async function qe(n, e, s, w) {
  if (!s) return;
  try {
    let l = await rx(n, w),
      f = Ve(l);
    if (!f) return;
    let R = await QEo(n, f.id, e, void 0, w);
    if (!R.success) {
      t(`[inProcessRunner] Failed to claim task #${f.id}: ${R.reason}`);
      return
    }
    return await YEe(n, f.id, {
      status: "in_progress"
    }, w), t(`[inProcessRunner] Claimed task #${f.id}: ${f.subject}`), He(f)
  } catch (l) {
    t(`[inProcessRunner] Error checking task list: ${l}`);
    return
  }
}
async function Ie(n, e, s, w, l, f) {
  let R;
  try {
    R = await gNe(n.agentName, n.teamName, w, {
      throwOnUnknownReadError: !0
    }), l.readFailures = 0
  } catch (r) {
    return l.readFailures++, t(`[inProcessRunner] ${n.agentName} could not read mailbox (${l.readFailures} consecutive): ${r}`, {
      level: "warn"
    }), null
  }
  let u = Wae(R.filter((r) => r && !r.read), YL(n.agentName, n.teamName), {
      roster: f,
      isPaneTeammate: !1
    }),
    C = (r) => u.get(r) === "forged",
    K = new Set(R.filter((r) => r && !r.read).map(e0));
  for (let r of l.consumedUnmarked)
    if (!K.has(r)) l.consumedUnmarked.delete(r);
  let V = async (r) => {
    let T = await _ke(r, {
        provenanceOf: (g) => u.get(g) ?? "unverifiable",
        agentId: n.resumableAgentId ?? n.agentId
      }),
      P = new Set(T.map(e0));
    for (let g of r) {
      let a = e0(g);
      if (!P.has(a)) l.consumedUnmarked.add(a)
    }
    return T
  }, h = -1, B = null;
  for (let r = 0; r < R.length; r++) {
    let T = R[r];
    if (T && !T.read && !C(T)) {
      let P = $4e(T.text),
        a = (u.get(T) === "verified" || T.from === mi || pxr(T.from, f) !== void 0) && P?.from === T.from ? P : null;
      if (a) {
        h = r, B = a;
        break
      }
    }
  }
  if (h !== -1) {
    if (l.count > 0) {
      let P = R.filter((g, a) => !g.read && a !== h && (C(g) || !oI(g.text)) && !l.deliveredUnmarked.has(e0(g)) && !l.consumedUnmarked.has(e0(g)));
      if (P.length > 0) {
        for (let S of P) l.deliveredUnmarked.add(e0(S));
        let g = await wge(n.agentName, n.teamName, P, w);
        if (g) l.count = 0, l.reported = !1, l.deliveredUnmarked.clear();
        else if (!l.reported) l.reported = !0, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
        t(`[inProcessRunner] ${n.agentName} delivering ${P.length} held message(s) ahead of a shutdown_request${g?"":" (mark still not landed)"}`, {
          level: g ? "debug" : "warn"
        });
        let a = await V(P);
        if (a.length > 0) return {
          type: "new_messages",
          messages: a
        }
      }
    }
    let r = R[h],
      T = U(R.slice(0, h), (P) => !P.read);
    return t(`[inProcessRunner] ${n.agentName} received shutdown request from ${B?.from} (prioritized over ${T} unread messages)`), await V1n(n.agentName, n.teamName, r, w), {
      type: "shutdown_request",
      request: B,
      originalMessage: r.text,
      entryFrom: r.from
    }
  }
  let N = [],
    x = [];
  for (let r of R) {
    if (!r || r.read) continue;
    if (!C(r) && oI(r.text)) N.push(r);
    else if (!l.consumedUnmarked.has(e0(r))) x.push(r)
  }
  let I = null;
  if (N.length > 0) {
    for (let T of N) {
      let P = p0t(T.text);
      if (P && T.from === mi) {
        let g = ero(e, P, s, w);
        if (g) t(`[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${g.approved}`), I = m0t(g);
        else t(`[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue
      }
      if (f0t(T.text)) {
        t(`[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, {
          level: "warn"
        });
        continue
      }
      t(`[inProcessRunner] ${n.agentName} dropping protocol frame from ${T.from}: ${T.text.substring(0,80)}`, {
        level: "warn"
      })
    }
    if (!await wge(n.agentName, n.teamName, N, w)) t(`[inProcessRunner] ${n.agentName} could not mark ${N.length} protocol frame(s) read; retrying next poll`, {
      level: "warn"
    })
  }
  if (I) return {
    type: "new_message",
    message: I,
    from: mi
  };
  if (x.length > 0) {
    if (await wge(n.agentName, n.teamName, x, w)) l.count = 0, l.reported = !1, l.deliveredUnmarked.clear();
    else {
      let P = ++l.count;
      if (P < Sge) return t(`[inProcessRunner] ${n.agentName} could not mark ${x.length} message(s) read (${P}/${Sge}); delivery retried next poll`, {
        level: "warn"
      }), null;
      if (t(`[inProcessRunner] ${n.agentName} could not mark ${x.length} message(s) read for ${P} poll(s); delivering the batch unmarked`, {
          level: "warn"
        }), !l.reported) l.reported = !0, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
      for (let g of x) l.deliveredUnmarked.add(e0(g))
    }
    t(`[inProcessRunner] ${n.agentName} draining ${x.length} message(s) from ${L(x.map((P)=>P.from)).join(", ")}`);
    let T = await V(x);
    if (T.length === 0) return null;
    return {
      type: "new_messages",
      messages: T
    }
  }
  if (l.count > 0) l.count = 0, l.reported = !1, l.deliveredUnmarked.clear();
  return null
}
async function Ye(n, e, s, w, l, f, R, u, C, K = !1, V) {
  t(`[inProcessRunner] ${n.agentName} starting poll loop (abort=${e.signal.aborted})`);
  let h = Date.now(),
    B = !1,
    N = 0;
  while (!e.signal.aborted) {
    if (N > 0) await Q(he);
    N++;
    let x = w(),
      I = x.tasks[s];
    if (I && I.type === "in_process_teammate" && I.pendingUserMessages.length > 0) {
      let g = I.pendingUserMessages[0];
      return j(s, (a) => ({
        ...a,
        pendingUserMessages: a.pendingUserMessages.slice(1)
      }), l), t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${N})`), {
        type: "new_message",
        message: g.text,
        origin: g.origin,
        from: "user"
      }
    }
    let r = n.resumableAgentId !== void 0 && fZe(n.resumableAgentId, l),
      T = K || I?.type === "in_process_teammate" && I.awaitingPlanApproval || x.viewingAgentTaskId === s || OPt(x.tasks, s) || r;
    if (T) h = Date.now();
    if (K && I?.type === "in_process_teammate" && I.evictAfter !== void 0) j(s, (g) => ({
      ...g,
      evictAfter: void 0
    }), l);
    if (I?.type === "in_process_teammate" && I.evictAfter !== void 0 && (r && I.evictAfter <= Date.now() + he || B && !r)) j(s, (g) => ({
      ...g,
      evictAfter: Date.now() + yR
    }), l);
    if (B = r, e.signal.aborted) return t(`[inProcessRunner] ${n.agentName} aborted while waiting (poll #${N})`), {
      type: "aborted"
    };
    if (R) {
      if (fR()) {
        if (!T && Date.now() - h >= Yqe) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${Yqe}ms (poll #${N})`), {
          type: "idle_timeout"
        }
      }
      continue
    }
    t(`[inProcessRunner] ${n.agentName} poll #${N}: checking mailbox`);
    try {
      let g = await Ie(n, s, l, V, C, w().teamContext?.teammates);
      if (g) return g;
      if (C.count > 0 && C.readFailures < Sge) {
        h = Date.now();
        let a = w().tasks[s];
        if (a?.type === "in_process_teammate" && a.evictAfter !== void 0) j(s, (S) => ({
          ...S,
          evictAfter: Date.now() + yR
        }), l);
        continue
      }
    } catch (g) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${g}`)
    }
    let P = await qe(f, n.agentName, u, V);
    if (P) return {
      type: "new_message",
      message: P,
      from: "task-list"
    };
    if (fR()) {
      if (!T && Date.now() - h >= Yqe) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${Yqe}ms (poll #${N})`), {
        type: "idle_timeout"
      }
    }
  }
  return t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${N})`), {
    type: "aborted"
  }
}
async function Je(n) {
  let {
    identity: e,
    taskId: s,
    prompt: w,
    description: l,
    agentDefinition: f,
    teammateContext: R,
    toolUseContext: u,
    abortController: C,
    model: K,
    systemPrompt: V,
    systemPromptMode: h,
    allowedTools: B,
    allowPermissionPrompts: N,
    invokingRequestId: x,
    standalone: I = !1,
    resumeMessages: r,
    resumeReplacementState: T,
    initialFrom: P
  } = n, {
    setAppState: g,
    taskRegistry: a
  } = u, S = lsn(s), q = {
    count: 0,
    reported: !1,
    deliveredUnmarked: new Set,
    consumedUnmarked: new Set,
    readFailures: 0
  };
  t(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let J = {
      agentId: e.agentId,
      parentAgentId: u.agentId,
      depth: Sd(u.agentContext),
      parentSessionId: e.parentSessionId,
      agentName: e.agentName,
      teamName: e.teamName,
      agentColor: e.color,
      planModeRequired: e.planModeRequired,
      isTeamLead: !1,
      agentType: "teammate",
      invokingRequestId: x,
      invocationKind: "spawn",
      invocationEmitted: !1,
      isBackgroundAgent: !0
    },
    {
      tools: F,
      mainLoopModel: te
    } = u.rootToolSurface,
    Z;
  if (h === "replace" && V) Z = V;
  else {
    let Y = [...(await SE(F, te, {
      teammate: !0
    })).filter((H) => H !== _$), Onr];
    if (f) {
      let H = f.getSystemPrompt({
        toolUseContext: u,
        primedAgentMemory: await Y3e(f, u.storageV5)
      });
      if (H) Y.push(`
# Custom Agent Instructions
${H}`);
      if (f.memory) i("tengu_agent_memory_loaded", {
        ...!1,
        scope: c(f.memory),
        source: y("in-process-teammate")
      })
    }
    if (h === "append" && V) Y.push(V);
    Z = Y.join(`
`)
  }
  let de = R.hasTaskListTools,
    ge = {
      agentType: e.agentName,
      whenToUse: `In-process teammate: ${e.agentName}`,
      getSystemPrompt: () => Z,
      tools: f?.tools ? L([...f.tools, lo, ...de ? [Ek, MB, Sw, Tk] : []]) : ["*"],
      source: "projectSettings",
      permissionMode: "default",
      ...f?.model && {
        model: f.model
      },
      ...f?.omitClaudeMd && {
        omitClaudeMd: !0
      }
    },
    E = r ? [...r] : [],
    G = new Set(r?.map((A) => A.uuid)),
    W = {
      taskKind: "in_process_teammate",
      teamName: e.teamName,
      color: e.color,
      planModeRequired: e.planModeRequired,
      ...f && {
        customAgentType: f.agentType
      },
      ...K && {
        model: K
      }
    },
    Se = l0t({
      from: P ?? mi,
      text: w,
      summary: l
    }),
    z = Se,
    le = void 0,
    fe = !1,
    oe = !1,
    ke = (r?.length ?? 0) > 0,
    Ne = !1,
    ye = r ? Jje(r).result : void 0,
    Pe = !1,
    Ee = async (A) => {
      switch (oe = !1, A.type) {
        case "shutdown_request":
          t(`[inProcessRunner] ${e.agentId} received shutdown request - passing to model`), z = l0t({
            from: typeof A.entryFrom === "string" && A.entryFrom !== "" ? A.entryFrom : jy,
            text: Sat(Psn(A.originalMessage, A.entryFrom) ?? A.originalMessage, A.entryFrom)
          }), le = void 0, _En(s, Ce({
            content: z
          }), a);
          break;
        case "new_message":
          if (t(`[inProcessRunner] ${e.agentId} received new message from ${A.from}`), A.from === "user") z = A.message, le = A.origin;
          else z = l0t({
            from: A.from,
            text: A.message,
            color: A.color,
            summary: A.summary
          }), le = void 0, _En(s, Ce({
            content: z
          }), a);
          break;
        case "new_messages":
          t(`[inProcessRunner] ${e.agentId} received ${A.messages.length} drained message(s)`), z = XEe(A.messages, {
            recipientIsLead: !1
          }), le = void 0, _En(s, Ce({
            content: z
          }), a);
          break;
        case "aborted":
          t(`[inProcessRunner] ${e.agentId} aborted while waiting`), fe = !0;
          break;
        case "idle_timeout":
          if (t(`[inProcessRunner] ${e.agentId} idle timeout \u2014 exiting loop`), !I) u.agentLifecycle.setTeammate(e.agentId, void 0), await o0t(e.teamName, e.agentId, {
            onlyIfJoinedBefore: Date.now()
          }, u.storageV5);
          fe = !0;
          break
      }
    };
  if (!I) await qe(e.parentSessionId, e.agentName, de, u.storageV5);
  try {
    a.updateTranscript(s, (M) => {
      let X = M.messages;
      if (r)
        for (let be of r.slice(-$$n)) X = lLe(X, be);
      return {
        ...M,
        messages: lLe(X, Ce({
          content: Se
        }))
      }
    });
    let A = u.contentReplacementState ? T ?? Mtn() : void 0,
      Y = UY(),
      H = Me();
    while (!C.signal.aborted && !fe) {
      t(`[inProcessRunner] ${e.agentId} processing prompt: ${z.substring(0,50)}...`);
      let M = Hn();
      M.signal.addEventListener("abort", () => {
        Pe = !0
      }), j(s, (o) => ({
        ...o,
        currentWorkAbortController: M,
        retryWake: H
      }), a);
      let X = Ce({
          content: z,
          origin: le
        }),
        be = [X],
        ce = E,
        $e = Zh(E, Jy(te));
      if ($e > oVe(hp(te), FRn(u.options.autoCompactWindow))) {
        t(`[inProcessRunner] ${e.agentId} compacting history (${$e} tokens)`);
        let o = {
          ...u,
          abortController: C,
          agentId: go(e.agentId),
          readFileState: mhe(u.readFileState, {
            stripSeededFromContext: !0
          }),
          memorySelector: I8(),
          loadedNestedMemoryPaths: {},
          onCompactEvent: void 0,
          onRetryStatus: S.setRetryStatus
        };
        try {
          let v = await wNn(E, o, {
            systemPrompt: ei([]),
            userContext: {},
            systemContext: {},
            toolUseContext: o,
            forkContextMessages: E,
            advisorModel: o.getAppState().advisorModel
          }, !0, {
            isAutoCompact: !0
          });
          if (ce = xM(v), A) A = Mtn();
          E.length = 0, E.push(...ce), G.clear(), a.updateTranscript(s, (k) => ({
            ...k,
            messages: [...ce, X]
          }))
        } catch (v) {
          if (v instanceof Error && v.message.startsWith(t3)) t(`[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`), Ne = !0;
          else if (C.signal.aborted || v instanceof Error && v.message === fC) {
            t(`[inProcessRunner] ${e.agentId} aborted during compaction`), fe = !0;
            break
          } else throw v
        }
      }
      let Le = ce.length > 0 ? [...ce] : void 0;
      E.push(X), ye = void 0, Pe = M.signal.aborted;
      let ue = T7t(),
        _e = a.get(s);
      if (_e !== void 0 && "progress" in _e && _e.progress !== void 0) ue.latestInputTokens = _e.progress.tokenCount;
      let Be = A7t(F),
        pe = [],
        we = u.getAppState().tasks[s],
        xe = we && we.type === "in_process_teammate" ? we.permissionMode : "default",
        Fe = {
          ...ge,
          permissionMode: xe
        },
        Ue = !1,
        ne = null;
      if (await VLo(R, async () => WE(J, async () => {
          j(s, (o) => ({
            ...o,
            status: "running",
            isIdle: !1,
            idleNotificationOwedToLead: void 0,
            evictAfter: void 0,
            evictAfterHeldBySibling: void 0
          }), a), a.updateTranscript(s, (o) => ({
            ...o,
            turnStartTime: Date.now()
          })), S.setMode("responding");
          for await (let o of rk({
            agentDefinition: Fe,
            promptMessages: be,
            toolUseContext: u,
            canUseTool: Ke(e, M, (v) => {
              j(s, (k) => ({
                ...k,
                totalPausedMs: (k.totalPausedMs ?? 0) + v
              }), a)
            }, tie(g), () => u.getAppState().teamContext?.teammates),
            isAsync: !0,
            canShowPermissionPrompts: N ?? !0,
            forkContextMessages: Le,
            querySource: "agent:custom",
            override: {
              abortController: M,
              agentContext: J,
              onRetryStatus: S.setRetryStatus,
              subscribeRetryWake: H.subscribe,
              ...e.resumableAgentId && {
                agentId: e.resumableAgentId
              }
            },
            ...e.resumableAgentId && {
              recordedUuids: G,
              name: e.agentName,
              description: l,
              extraMetadata: {
                ...W,
                permissionMode: xe
              }
            },
            onStreamTokenEstimate: (v) => {
              R7t(ue, v);
              let k = xVe(ue);
              j(s, (O) => O.progress?.tokenCount === k.tokenCount ? O : {
                ...O,
                progress: k
              }, a)
            },
            model: K,
            preserveToolUseResults: !0,
            availableTools: F,
            allowedTools: B,
            contentReplacementState: A,
            stickyBetas: Y,
            isTeammate: !0,
            teammateContext: R
          })) {
            if (C.signal.aborted) {
              t(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
              break
            }
            if (M.signal.aborted) {
              if (t(`[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`), o.type === "assistant" || o.type === "user" || o.type === "attachment" && sv(o)) pe.push(o), E.push(o), ne = Ffe(E, o, ne);
              Ue = !0;
              break
            }
            if (o.type === "spinner_mode") {
              S.setMode(o.mode);
              continue
            }
            if (o.type === "api_metrics") continue;
            if (o.type === "query_model_change") continue;
            if (o.type === "set_in_progress_tool_use_ids") {
              if (o.op.action !== "remove") continue;
              let k = o.op.ids;
              a.updateTranscript(s, (O) => {
                let ee = new Set(O.inProgressToolUseIDs),
                  re = !1;
                for (let ve of k)
                  if (ee.delete(ve)) re = !0;
                return re ? {
                  ...O,
                  inProgressToolUseIDs: ee
                } : O
              });
              continue
            }
            if (o.type === "system" && o.subtype === "api_error") continue;
            pe.push(o), E.push(o), ne = Ffe(E, o, ne), C7t(ue, o, Be, F);
            let v = xVe(ue);
            j(s, (k) => ({
              ...k,
              progress: v
            }), a), a.updateTranscript(s, (k) => {
              let O = k.inProgressToolUseIDs;
              if (o.type === "assistant") {
                for (let ee of o.message.content)
                  if (ee.type === "tool_use") O = new Set([...O, ee.id])
              } else if (o.type === "user") {
                let ee = o.message.content;
                if (Array.isArray(ee)) {
                  for (let re of ee)
                    if (typeof re === "object" && "type" in re && re.type === "tool_result") {
                      let ve = new Set(O);
                      ve.delete(re.tool_use_id), O = ve
                    }
                }
              }
              return {
                ...k,
                messages: g_o(k.messages, o),
                inProgressToolUseIDs: O
              }
            })
          }
          return {
            success: !0,
            messages: pe
          }
        })).finally(() => {
          if (ne) E.push(...ne.preserved), ne = null
        }), j(s, (o) => ({
          ...o,
          currentWorkAbortController: void 0
        }), a), C.signal.aborted) break;
      let ie = Ue || M.signal.aborted;
      if (ie) {
        Pe = !0, t(`[inProcessRunner] ${e.agentId} work interrupted, returning to idle`);
        let o = Yo({
          content: fC
        });
        a.updateTranscript(s, (v) => ({
          ...v,
          messages: lLe(v.messages, o)
        }))
      }
      ke ||= pe.some((o) => o.type === "assistant" && !o.isApiErrorMessage || o.type === "user" && !o.isMeta);
      let se = !ie ? cwr(pe) : void 0;
      if (oe = se?.isTransient === !0 && !I && ke, !I && !ie) {
        let o = null;
        try {
          o = await Ie(e, s, a, u.storageV5, q, u.getAppState().teamContext?.teammates);
          while (o === null && q.count > 0 && q.readFailures < Sge && !C.signal.aborted) await Q(he), o = await Ie(e, s, a, u.storageV5, q, u.getAppState().teamContext?.teammates)
        } catch (v) {
          t(`[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${v}`)
        }
        if (o) {
          try {
            let {
              result: v,
              summary: k
            } = Jje(E, {
              emitTelemetry: !0
            });
            if (v !== void 0 || se !== void 0) {
              if (await Re(e.agentName, e.color, e.teamName, {
                  idleReason: se !== void 0 ? "failed" : void 0,
                  summary: k,
                  failureReason: se?.reason,
                  result: v,
                  senderReachable: !0
                }, u.storageV5) && v !== void 0) ye = v
            }
          } catch (v) {
            t(`[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${v}`)
          }
          await Ee(o);
          continue
        }
      }
      if (se?.isTransient) i("tengu_teammate_transient_turn_failure", {
        error_kind: c(se.errorKind ?? "unknown"),
        hold_evict: oe
      });
      let De = u.getAppState().tasks[s],
        Oe = !(De?.type === "in_process_teammate" && De.isIdle) && !I;
      j(s, (o) => (o.onIdleCallbacks?.forEach((v) => v()), {
        ...o,
        isIdle: !0,
        idleNotificationOwedToLead: Oe && Te() || o.idleNotificationOwedToLead,
        evictAfter: oe ? void 0 : Date.now() + yR,
        onIdleCallbacks: []
      }), a);
      let Ae = se?.reason;
      if (Oe) {
        let o = Jje(E, {
            emitTelemetry: !ie
          }),
          v = ie ? void 0 : o.result,
          k = await Re(e.agentName, e.color, e.teamName, {
            idleReason: ie ? "interrupted" : Ae !== void 0 ? "failed" : "available",
            summary: o.summary,
            failureReason: Ae,
            result: v,
            senderReachable: Ae === void 0 || oe
          }, u.storageV5);
        if (v !== void 0 && k) ye = v;
        if (!k) j(s, (O) => O.idleNotificationOwedToLead ? {
          ...O,
          idleNotificationOwedToLead: void 0
        } : O, a)
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`);
      t(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let We = await Ye(e, C, s, u.getAppState, a, e.parentSessionId, I, de, q, oe, u.storageV5);
      await Ee(We)
    }
    let ae = !1,
      D;
    if (j(s, (M) => {
        if (M.status !== "running") return ae = !0, M;
        return D = M.toolUseId, M.onIdleCallbacks?.forEach((X) => X()), {
          ...M,
          status: "completed",
          notified: !0,
          endTime: Date.now(),
          pendingUserMessages: [],
          abortController: void 0,
          currentWorkAbortController: void 0,
          retryWake: void 0,
          onIdleCallbacks: []
        }
      }, a), !ae) a.updateTranscript(s, (M) => ({
      ...M,
      messages: M.messages.length ? [M.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set
    }));
    if (Tp(s), a.evictTerminal(s), !ae) Si(s, "completed", {
      toolUseId: D,
      summary: e.agentId
    });
    if (Yke(e.agentId), Ne) p("swarm_in_process_run", "compact_blocked_by_hook");
    else _("swarm_in_process_run");
    return {
      success: !0,
      messages: E
    }
  } catch (A) {
    let Y = A instanceof Error ? A.message : "Unknown error";
    t(`[inProcessRunner] Agent ${e.agentId} failed: ${Y}`);
    let H = !1,
      ae;
    if (j(s, (D) => {
        if (D.status !== "running") return H = !0, D;
        return ae = D.toolUseId, D.onIdleCallbacks?.forEach((M) => M()), {
          ...D,
          status: "failed",
          notified: !0,
          error: Y,
          isIdle: !0,
          endTime: Date.now(),
          onIdleCallbacks: [],
          pendingUserMessages: [],
          abortController: void 0,
          currentWorkAbortController: void 0,
          retryWake: void 0
        }
      }, a), !H) a.updateTranscript(s, (D) => ({
      ...D,
      messages: D.messages.length ? [D.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set
    }));
    if (Tp(s), a.evictTerminal(s), !H) Si(s, "failed", {
      toolUseId: ae,
      summary: e.agentId
    });
    if (!I) {
      let D;
      try {
        D = Pe ? void 0 : UJr(E)
      } catch (M) {
        t(`[inProcessRunner] ${e.agentName} failed to extract partial result: ${M}`)
      }
      if (D !== void 0 && D === ye) D = void 0;
      await Re(e.agentName, e.color, e.teamName, {
        idleReason: "failed",
        completedStatus: "failed",
        failureReason: Y,
        result: D
      }, u.storageV5)
    }
    return Yke(e.agentId), m("swarm_in_process_run", "agent_loop_failed"), {
      success: !1,
      error: Y,
      messages: E
    }
  }
}

function Inr(n) {
  let e = n.identity.agentId;
  Je(n).catch((s) => {
    t(`[inProcessRunner] Unhandled error in ${e}: ${s}`)
  })
}
export {
  Inr
};
