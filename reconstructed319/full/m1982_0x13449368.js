// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  za,
  w_,
  ORe,
  DD,
  Cm
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Pe,
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Pr
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  Eme,
  ye
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  $U
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  yr
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  hl,
  fAe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  Xn
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  nN
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  MXi
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  sc,
  Z8,
  X1e,
  kMe,
  Qxt,
  $f,
  oje,
  yI,
  Gge,
  WQ,
  g6,
  i8e,
  hF,
  nur,
  rur,
  our,
  XPt,
  R5t,
  qM,
  O8e,
  sye,
  rq,
  p2,
  Ino,
  B8e,
  cE,
  R6,
  _ye,
  Nxn,
  Xs,
  Ie
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  tNt,
  yD,
  jq
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  se,
  bg,
  Q2,
  YFn
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  yee
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  nX
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  Kp
} from "B:/~BUN/root/chunk-xgwmwbnb.js";
import {
  sbr
} from "B:/~BUN/root/chunk-tdg0k3wq.js";
import {
  Xa
} from "B:/~BUN/root/chunk-m8dg5txf.js";
import {
  nio,
  fut,
  bRi,
  kPn,
  kI,
  IIt,
  vPn
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  TXe
} from "B:/~BUN/root/chunk-vy4t7613.js";
import {
  WMn
} from "B:/~BUN/root/chunk-98qgaht2.js";
import {
  FTe,
  II,
  xLi,
  ahs,
  x0e,
  M2,
  rpt,
  YE,
  Cco,
  bze,
  $W,
  Sze,
  YMn,
  VXe,
  fE,
  cSr,
  rQt,
  FDt,
  sQt,
  HDt,
  eDn,
  tDn,
  h1,
  nDn,
  dQt
} from "B:/~BUN/root/chunk-k5xd4a86.js";
import {
  MZ
} from "B:/~BUN/root/chunk-y7em5h10.js";
import {
  PJn,
  FJn,
  HJn,
  Hti,
  ATt,
  $Jn
} from "B:/~BUN/root/chunk-j79gx234.js";
import {
  Wii
} from "B:/~BUN/root/chunk-3kg80bh2.js";
import {
  DYr,
  dI
} from "B:/~BUN/root/chunk-ra105wwp.js";
import {
  Yzo
} from "B:/~BUN/root/chunk-ma8vvs6g.js";
import {
  OKr
} from "B:/~BUN/root/chunk-8hnkv6k0.js";
import {
  $tr,
  awn,
  lwn
} from "B:/~BUN/root/chunk-m3x50w3h.js";
import {
  KP
} from "B:/~BUN/root/chunk-48hpv12e.js";
import {
  f_,
  vb
} from "B:/~BUN/root/chunk-az6xed3t.js";
import {
  X7t,
  eSr,
  tSr
} from "B:/~BUN/root/chunk-we53d1t3.js";
import {
  F_e
} from "B:/~BUN/root/chunk-xbhv3nhf.js";
import {
  An
} from "B:/~BUN/root/chunk-7yd8y16n.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var Ke = 500,
  Me = 500;

function Ve(n, e, s, w, d) {
  return async (A, p, k, T, W, G) => {
    let h = G ?? await i8e(A, p, {
      ...k,
      asksNoHost: !0
    }, T, W, Z8, void 0, w);
    if (h.behavior !== "ask") return h;
    if (h.hostDisplay !== void 0) return m("permission_host_worded_ask", "teammate_lane"), X1e(A.name, "a teammate's permission request", {
      hostWorded: !0,
      remedy: "Ask the team lead to run this tool call itself. When the team lead runs it, the permission prompt shows the full disclosure."
    });
    let E = h.updatedInput ?? p;
    if (e.signal.aborted) return {
      behavior: "ask",
      message: R6
    };
    let M = se(k),
      D = () => A.description(E, {
        isNonInteractiveSession: k.options.isNonInteractiveSession,
        toolPermissionContext: M,
        tools: k.options.tools
      });
    if (k.requestDialog !== void 0) {
      let i = $Jn.of(k.session).permissionContextSetter,
        y = FJn(A, p, k, T, W, w, (K) => {
          i?.((H) => yD(H, K.filter((B) => B.type !== "setMode")))
        }),
        u = await PJn({
          ctx: y,
          updatedInput: h.updatedInput,
          suggestions: h.suggestions,
          permissionMode: M.mode,
          askSuppressesAlwaysAllowRule: h.suppressAlwaysAllowRule === !0,
          askIsPersonOnly: h.personOnly === !0
        });
      if (u) return u;
      if (e.signal.aborted) return {
        behavior: "ask",
        message: R6
      };
      let I = await D();
      if (e.signal.aborted) return {
        behavior: "ask",
        message: R6
      };
      let N = Date.now();
      try {
        return await new Promise((K, H) => {
          HJn({
            ctx: y,
            description: I,
            result: h,
            awaitAutomatedChecksBeforeDialog: !0
          }, K).catch(H)
        })
      } finally {
        s(Date.now() - N)
      }
    }
    if (kMe(h) || h.forcedByCaller === !0) return X1e(A.name, "the teammate mailbox (a static-description wire)", {
      hostWorded: h.hostDisplay !== void 0,
      forMcpSkill: h.metadata?.mcpSkill !== void 0
    });
    let x = await D();
    if (e.signal.aborted) return {
      behavior: "ask",
      message: R6
    };
    return new Promise((i) => {
      let r = eSr({
        toolName: A.name,
        toolUseId: W,
        input: E,
        description: x,
        permissionSuggestions: h.suggestions,
        workerId: n.agentId,
        workerName: n.agentName,
        workerColor: n.color,
        teamName: n.teamName
      });
      $tr({
        requestId: r.id,
        toolUseId: W,
        toolName: r.toolName,
        inputDigest: X7t(r.toolName, E),
        onAllow(N, K, H, B) {
          I();
          let Q = yee(K, void 0, se(k)),
            z = A.suppressesAllPermissionUpdates?.(E) === !0 ? g6(Q) : A.suppressesAlwaysAllowRule?.(E) === !0 || h.suppressAlwaysAllowRule === !0 ? WQ(Q, A, se(k)) : Q;
          jq(z, k.storageV5).catch(a);
          let ne = N && Object.keys(N).length > 0 ? N : E;
          i({
            behavior: "allow",
            updatedInput: ne,
            userModified: !1,
            ...B && B.length > 0 && {
              contentBlocks: B
            }
          })
        },
        onReject(N, K) {
          I();
          let H = N ? `${_ye}${N}` : R6;
          i({
            behavior: "ask",
            message: H,
            contentBlocks: K
          })
        },
        onRefuse(N) {
          I(), i({
            behavior: "ask",
            message: N
          })
        },
        onUnboundVerdict() {}
      }), tSr(r, k.storageV5).then((N) => {
        if (!N) I(), i({
          behavior: "ask",
          message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
        })
      });
      let y = setInterval(async (N, K, H, B, Q, z, ne) => {
          if (N.signal.aborted) {
            K(), H({
              behavior: "ask",
              message: R6
            });
            return
          }
          let de = await rpt(B.agentName, B.teamName, z),
            le = x0e(de.filter((R) => R && !R.read), M2(B.agentName, B.teamName), {
              roster: ne(),
              isPaneTeammate: !1
            });
          for (let R of de)
            if (R && !R.read && le.get(R) !== "forged") {
              let F = sQt(R.text);
              if (F && F.request_id === Q.id) {
                if (await Cco(B.agentName, B.teamName, R, z), R.from !== hl) {
                  t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${R.from}`, {
                    level: "warn"
                  });
                  continue
                }
                if (F.subtype === "success") lwn({
                  requestId: F.request_id,
                  toolUseId: F.tool_use_id,
                  approvedRequest: F.approved_request,
                  decision: "approved",
                  updatedInput: F.response?.updated_input,
                  permissionUpdates: F.response?.permission_updates
                });
                else lwn({
                  requestId: F.request_id,
                  toolUseId: F.tool_use_id,
                  approvedRequest: F.approved_request,
                  decision: "rejected",
                  feedback: F.error
                });
                return
              }
            }
        }, Ke, e, I, i, n, r, k.storageV5, d),
        u = () => {
          I(), i({
            behavior: "ask",
            message: R6
          })
        };
      e.signal.addEventListener("abort", u, {
        once: !0
      });

      function I() {
        clearInterval(y), awn(r.id), e.signal.removeEventListener("abort", u)
      }
    })
  }
}

function j(n, e, s) {
  s.update(n, (w) => w.type === "in_process_teammate" ? e(w) : w)
}
async function He(n, e, s, w, d) {
  return YE(hl, {
    from: n,
    text: e,
    timestamp: new Date().toISOString(),
    color: s
  }, w, d)
}
async function Re(n, e, s, w, d) {
  let A = rQt(n, w),
    p;
  try {
    p = await He(n, _(A), e, s, d)
  } finally {
    FDt(A, w?.result, p)
  }
  return p !== void 0
}

function Ye(n) {
  let e = new Set(n.filter((s) => s.status !== "completed").map((s) => s.id));
  return n.find((s) => {
    if (s.status !== "pending") return !1;
    if (s.owner) return !1;
    return s.blockedBy.every((w) => !e.has(w))
  })
}

function Je(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
  if (n.description) e += `

${n.description}`;
  return e
}
async function Le(n, e, s, w) {
  if (!s) return;
  try {
    let d = await II(n, w),
      A = Ye(d);
    if (!A) return;
    let p = await xLi(n, A.id, e, void 0, w);
    if (!p.success) {
      t(`[inProcessRunner] Failed to claim task #${A.id}: ${p.reason}`);
      return
    }
    return await FTe(n, A.id, {
      status: "in_progress"
    }, w), t(`[inProcessRunner] Claimed task #${A.id}: ${A.subject}`), Je(A)
  } catch (d) {
    t(`[inProcessRunner] Error checking task list: ${d}`);
    return
  }
}
async function Se(n, e, s, w, d, A) {
  let p;
  try {
    p = await rpt(n.agentName, n.teamName, w, {
      throwOnUnknownReadError: !0
    }), d.readFailures = 0
  } catch (i) {
    return d.readFailures++, t(`[inProcessRunner] ${n.agentName} could not read mailbox (${d.readFailures} consecutive): ${i}`, {
      level: "warn"
    }), null
  }
  let k = x0e(p.filter((i) => i && !i.read), M2(n.agentName, n.teamName), {
      roster: A,
      isPaneTeammate: !1
    }),
    T = (i) => k.get(i) === "forged",
    W = new Set(p.filter((i) => i && !i.read).map($W));
  for (let i of d.consumedUnmarked)
    if (!W.has(i)) d.consumedUnmarked.delete(i);
  let G = async (i) => {
    let r = await B8e(i, {
        provenanceOf: (u) => k.get(u) ?? "unverifiable",
        agentId: n.resumableAgentId ?? n.agentId
      }),
      y = new Set(r.map($W));
    for (let u of i) {
      let I = $W(u);
      if (!y.has(I)) d.consumedUnmarked.add(I)
    }
    return r
  }, h = -1, E = null;
  for (let i = 0; i < p.length; i++) {
    let r = p[i];
    if (r && !r.read && !T(r)) {
      let y = HDt(r.text),
        I = (k.get(r) === "verified" || r.from === hl || ahs(r.from, A) !== void 0) && y?.from === r.from ? y : null;
      if (I) {
        h = i, E = I;
        break
      }
    }
  }
  if (h !== -1) {
    if (d.count > 0) {
      let y = p.filter((u, I) => !u.read && I !== h && (T(u) || !h1(u.text)) && !d.deliveredUnmarked.has($W(u)) && !d.consumedUnmarked.has($W(u)));
      if (y.length > 0) {
        for (let N of y) d.deliveredUnmarked.add($W(N));
        let u = await Sze(n.agentName, n.teamName, y, w);
        if (u) d.count = 0, d.reported = !1, d.deliveredUnmarked.clear();
        else if (!d.reported) d.reported = !0, c("swarm_inbox_poll", "worker_mark_read_failed_streak");
        t(`[inProcessRunner] ${n.agentName} delivering ${y.length} held message(s) ahead of a shutdown_request${u?"":" (mark still not landed)"}`, {
          level: u ? "debug" : "warn"
        });
        let I = await G(y);
        if (I.length > 0) return {
          type: "new_messages",
          messages: I
        }
      }
    }
    let i = p[h],
      r = U(p.slice(0, h), (y) => !y.read);
    if (t(`[inProcessRunner] ${n.agentName} received shutdown request from ${E?.from} (prioritized over ${r} unread messages)`), await Cco(n.agentName, n.teamName, i, w), fAe(k.get(i) ?? "unverifiable")) nX();
    return {
      type: "shutdown_request",
      request: E,
      originalMessage: i.text,
      entryFrom: i.from
    }
  }
  let M = [],
    D = [];
  for (let i of p) {
    if (!i || i.read) continue;
    if (!T(i) && h1(i.text)) M.push(i);
    else if (!d.consumedUnmarked.has($W(i))) D.push(i)
  }
  let x = null;
  if (M.length > 0) {
    for (let r of M) {
      let y = eDn(r.text);
      if (y && r.from === hl) {
        let u = Wii(e, y, s, w);
        if (u) t(`[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${u.approved}`), x = nDn(u);
        else t(`[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue
      }
      if (tDn(r.text)) {
        t(`[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, {
          level: "warn"
        });
        continue
      }
      t(`[inProcessRunner] ${n.agentName} dropping protocol frame from ${r.from}: ${r.text.substring(0,80)}`, {
        level: "warn"
      })
    }
    if (!await Sze(n.agentName, n.teamName, M, w)) t(`[inProcessRunner] ${n.agentName} could not mark ${M.length} protocol frame(s) read; retrying next poll`, {
      level: "warn"
    })
  }
  if (x) return {
    type: "new_message",
    message: x,
    from: hl
  };
  if (D.length > 0) {
    if (await Sze(n.agentName, n.teamName, D, w)) d.count = 0, d.reported = !1, d.deliveredUnmarked.clear();
    else {
      let y = ++d.count;
      if (y < bze) return t(`[inProcessRunner] ${n.agentName} could not mark ${D.length} message(s) read (${y}/${bze}); delivery retried next poll`, {
        level: "warn"
      }), null;
      if (t(`[inProcessRunner] ${n.agentName} could not mark ${D.length} message(s) read for ${y} poll(s); delivering the batch unmarked`, {
          level: "warn"
        }), !d.reported) d.reported = !0, c("swarm_inbox_poll", "worker_mark_read_failed_streak");
      for (let u of D) d.deliveredUnmarked.add($W(u))
    }
    t(`[inProcessRunner] ${n.agentName} draining ${D.length} message(s) from ${L(D.map((y)=>y.from)).join(", ")}`);
    let r = await G(D);
    if (r.length === 0) return null;
    return {
      type: "new_messages",
      messages: r
    }
  }
  if (d.count > 0) d.count = 0, d.reported = !1, d.deliveredUnmarked.clear();
  return null
}
async function ze(n, e, s, w, d, A, p, k, T, W = !1, G) {
  t(`[inProcessRunner] ${n.agentName} starting poll loop (abort=${e.signal.aborted})`);
  let h = Date.now(),
    E = !1,
    M = 0;
  while (!e.signal.aborted) {
    if (M > 0) await J(Me);
    M++;
    let D = w(),
      x = D.tasks[s];
    if (x && x.type === "in_process_teammate" && x.pendingUserMessages.length > 0) {
      let u = x.pendingUserMessages[0];
      return j(s, (I) => ({
        ...I,
        pendingUserMessages: I.pendingUserMessages.slice(1)
      }), d), t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${M})`), {
        type: "new_message",
        message: u.text,
        origin: u.origin,
        from: "user"
      }
    }
    let i = n.resumableAgentId !== void 0 && O8e(n.resumableAgentId, d),
      r = W || x?.type === "in_process_teammate" && x.awaitingPlanApproval || D.viewingAgentTaskId === s || vPn(D.tasks, s) || i;
    if (r) h = Date.now();
    if (W && x?.type === "in_process_teammate" && x.evictAfter !== void 0) j(s, (u) => ({
      ...u,
      evictAfter: void 0
    }), d);
    if (x?.type === "in_process_teammate" && x.evictAfter !== void 0 && (i && x.evictAfter <= Date.now() + Me || E && !i)) j(s, (u) => ({
      ...u,
      evictAfter: Date.now() + kI
    }), d);
    if (E = i, e.signal.aborted) return t(`[inProcessRunner] ${n.agentName} aborted while waiting (poll #${M})`), {
      type: "aborted"
    };
    if (p) {
      if (hF()) {
        if (!r && Date.now() - h >= IIt) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${IIt}ms (poll #${M})`), {
          type: "idle_timeout"
        }
      }
      continue
    }
    t(`[inProcessRunner] ${n.agentName} poll #${M}: checking mailbox`);
    try {
      let u = await Se(n, s, d, G, T, w().teamContext?.teammates);
      if (u) return u;
      if (T.count > 0 && T.readFailures < bze) {
        h = Date.now();
        let I = w().tasks[s];
        if (I?.type === "in_process_teammate" && I.evictAfter !== void 0) j(s, (N) => ({
          ...N,
          evictAfter: Date.now() + kI
        }), d);
        continue
      }
    } catch (u) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${u}`)
    }
    let y = await Le(A, n.agentName, k, G);
    if (y) return {
      type: "new_message",
      message: y,
      from: "task-list"
    };
    if (hF()) {
      if (!r && Date.now() - h >= IIt) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${IIt}ms (poll #${M})`), {
        type: "idle_timeout"
      }
    }
  }
  return t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${M})`), {
    type: "aborted"
  }
}
async function Xe(n) {
  let {
    identity: e,
    taskId: s,
    prompt: w,
    description: d,
    spawnedAgentType: A,
    agentDefinition: p,
    teammateContext: k,
    toolUseContext: T,
    abortController: W,
    model: G,
    invokingRequestId: h,
    standalone: E = !1,
    resumeMessages: M,
    resumeReplacementState: D,
    initialFrom: x
  } = n, {
    setAppState: i,
    taskRegistry: r
  } = T, y = Qxt(s), u = {
    count: 0,
    reported: !1,
    deliveredUnmarked: new Set,
    consumedUnmarked: new Set,
    readFailures: 0
  };
  t(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let I = {
      agentId: e.agentId,
      parentAgentId: T.agentId,
      depth: Cm(T.agentContext),
      parentSessionId: e.parentSessionId,
      agentName: e.agentName,
      teamName: e.teamName,
      agentColor: e.color,
      planModeRequired: e.planModeRequired,
      isTeamLead: !1,
      agentType: "teammate",
      invokingRequestId: h,
      invocationKind: "spawn",
      invocationEmitted: !1,
      isBackgroundAgent: !0
    },
    {
      tools: N,
      mainLoopModel: K
    } = T.rootToolSurface,
    B = [...(await qM(N, K, {
      teammate: !0
    })).filter((P) => P !== $U), Yzo];
  if (p) {
    let P = p.getSystemPrompt({
      toolUseContext: T,
      primedAgentMemory: await tNt(p, T.storageV5)
    });
    if (P) B.push(`
# Custom Agent Instructions
${P}`);
    if (p.memory) l("tengu_agent_memory_loaded", {
      ...!1,
      scope: f(p.memory),
      source: b("in-process-teammate")
    })
  }
  let Q = B.join(`
`),
    z = k.hasTaskListTools,
    ne = [An, ...z ? [f_, MZ, KP, vb] : []],
    de = p?.disallowedTools?.filter((P) => !ne.includes(yr(P).toolName)),
    le = {
      agentType: e.agentName,
      whenToUse: `In-process teammate: ${e.agentName}`,
      getSystemPrompt: () => Q,
      tools: p?.tools ? L([...p.tools, ...ne]) : ["*"],
      ...de?.length && {
        disallowedTools: de
      },
      source: "projectSettings",
      permissionMode: "default",
      ...p?.model && {
        model: p.model
      },
      ...p?.effort !== void 0 && {
        effort: p.effort
      },
      ...p?.omitClaudeMd && {
        omitClaudeMd: !0
      },
      ...p?.autoCompactWindow !== void 0 && {
        autoCompactWindow: p.autoCompactWindow
      }
    },
    R = M ? [...M] : [],
    F = new Set(M?.map((P) => P.uuid)),
    We = {
      taskKind: "in_process_teammate",
      teamName: e.teamName,
      color: e.color,
      planModeRequired: e.planModeRequired,
      ...p && {
        customAgentType: p.agentType
      },
      ...A !== void 0 && {
        spawnedAgentType: A
      },
      ...G && {
        model: G
      }
    },
    ke = YMn({
      from: x ?? hl,
      text: w,
      summary: d
    }),
    V = ke,
    ue = void 0,
    fe = !1,
    re = !1,
    Ne = (M?.length ?? 0) > 0,
    Ee = !1,
    Te = M ? ATt(M).result : void 0,
    _e = !1,
    Ce = async (P) => {
      switch (re = !1, P.type) {
        case "shutdown_request":
          t(`[inProcessRunner] ${e.agentId} received shutdown request - passing to model`), V = YMn({
            from: typeof P.entryFrom === "string" && P.entryFrom !== "" ? P.entryFrom : fE,
            text: dQt(cSr(P.originalMessage, P.entryFrom) ?? P.originalMessage, P.entryFrom)
          }), ue = void 0, OKr(s, Ie({
            content: V
          }), r);
          break;
        case "new_message":
          if (t(`[inProcessRunner] ${e.agentId} received new message from ${P.from}`), P.from === "user") V = P.message, ue = P.origin;
          else V = YMn({
            from: P.from,
            text: P.message,
            color: P.color,
            summary: P.summary
          }), ue = void 0, OKr(s, Ie({
            content: V
          }), r);
          break;
        case "new_messages":
          t(`[inProcessRunner] ${e.agentId} received ${P.messages.length} drained message(s)`), V = VXe(P.messages, {
            recipientIsLead: !1
          }), ue = void 0, OKr(s, Ie({
            content: V
          }), r);
          break;
        case "aborted":
          t(`[inProcessRunner] ${e.agentId} aborted while waiting`), fe = !0;
          break;
        case "idle_timeout":
          if (t(`[inProcessRunner] ${e.agentId} idle timeout \u2014 exiting loop`), !E) T.agentLifecycle.setTeammate(e.agentId, void 0), await WMn(e.teamName, e.agentId, {
            onlyIfJoinedBefore: Date.now()
          }, T.storageV5);
          fe = !0;
          break
      }
    };
  if (!E) await Le(e.parentSessionId, e.agentName, z, T.storageV5);
  try {
    r.updateTranscript(s, (S) => {
      let Y = S.messages;
      if (M)
        for (let Ae of M.slice(-nio)) Y = fut(Y, Ae);
      return {
        ...S,
        messages: fut(Y, Ie({
          content: ke
        }))
      }
    });
    let P = T.contentReplacementState ? D ?? sbr() : void 0,
      oe = Eme(),
      ae = De();
    while (!W.signal.aborted && !fe) {
      t(`[inProcessRunner] ${e.agentId} processing prompt: ${V.substring(0,50)}...`);
      let S = Xn();
      S.signal.addEventListener("abort", () => {
        _e = !0
      }), j(s, (o) => ({
        ...o,
        currentWorkAbortController: S,
        retryWake: ae
      }), r);
      let Y = Ie({
          content: V,
          origin: ue
        }),
        Ae = [Y],
        ce = R,
        $e = $f(R, w_(K));
      if (!Pe(process.env.DISABLE_COMPACT) && $e > yI(sc(K), DYr(T.options.autoCompactWindow, le.autoCompactWindow))) {
        t(`[inProcessRunner] ${e.agentId} compacting history (${$e} tokens)`);
        let o = {
          ...T,
          abortController: W,
          agentId: e.resumableAgentId ?? Pr(e.agentId),
          readFileState: F_e(T.readFileState, {
            stripSeededFromContext: !0
          }),
          memorySelector: Gge(),
          onCompactEvent: void 0,
          onRetryStatus: y.setRetryStatus,
          compactTranscriptUnavailable: !0
        };
        try {
          let v = await Ino(R, o, {
            systemPrompt: Xa([]),
            userContext: {},
            systemContext: {},
            toolUseContext: o,
            forkContextMessages: R,
            advisorModel: o.getAppState().advisorModel
          }, !0, {
            isAutoCompact: !0
          });
          if (ce = p2(v), P) P = sbr();
          R.length = 0, R.push(...ce), F.clear(), r.updateTranscript(s, (C) => ({
            ...C,
            messages: [...ce, Y]
          }))
        } catch (v) {
          if (v instanceof Error && v.message.startsWith(rq)) t(`[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`), Ee = !0;
          else if (W.signal.aborted || v instanceof Error && v.message === nN) {
            t(`[inProcessRunner] ${e.agentId} aborted during compaction`), fe = !0;
            break
          } else throw v
        }
      }
      let Be = ce.length > 0 ? [...ce] : void 0;
      R.push(Y), Te = void 0, _e = S.signal.aborted;
      let pe = nur(),
        ve = r.get(s);
      if (ve !== void 0 && "progress" in ve && ve.progress !== void 0) pe.latestInputTokens = ve.progress.tokenCount;
      let Fe = R5t(N),
        ge = [],
        be = T.getAppState().tasks[s],
        xe = be && be.type === "in_process_teammate" ? be.permissionMode : "default",
        je = {
          ...le,
          permissionMode: xe
        },
        Ue = !1,
        Z = null;
      if (await MXi(k, async () => DD(I, async () => {
          if (j(s, (o) => ({
              ...o,
              status: "running",
              isIdle: !1,
              idleNotificationOwedToLead: void 0,
              evictAfter: void 0,
              evictAfterHeldBySibling: void 0
            }), r), r.updateTranscript(s, (o) => ({
              ...o,
              turnStartTime: Date.now()
            })), y.setMode("responding"), G !== void 0 && le.effort === void 0 && bg(T.permissionLayers) === void 0) {
            let o = ORe(G);
            y.setTurnEffort(YFn(T, o, Q2(T)) ?? null, o)
          }
          for await (let o of dI({
            agentDefinition: je,
            promptMessages: Ae,
            turnPrompt: V,
            toolUseContext: T,
            canUseTool: Ve(e, S, (v) => {
              j(s, (C) => ({
                ...C,
                totalPausedMs: (C.totalPausedMs ?? 0) + v
              }), r)
            }, oje(i), () => T.getAppState().teamContext?.teammates),
            isAsync: !0,
            canShowPermissionPrompts: !0,
            forkContextMessages: Be,
            querySource: "agent:custom",
            override: {
              abortController: S,
              agentContext: I,
              onRetryStatus: y.setRetryStatus,
              subscribeRetryWake: ae.subscribe,
              ...e.resumableAgentId && {
                agentId: e.resumableAgentId
              }
            },
            ...e.resumableAgentId && {
              recordedUuids: F,
              name: e.agentName,
              description: d,
              extraMetadata: {
                ...We,
                permissionMode: xe
              }
            },
            onStreamTokenEstimate: (v) => {
              our(pe, v);
              let C = XPt(pe);
              j(s, (q) => q.progress?.tokenCount === C.tokenCount ? q : {
                ...q,
                progress: C
              }, r)
            },
            model: G,
            preserveToolUseResults: !0,
            availableTools: N,
            contentReplacementState: P,
            stickyBetas: oe,
            isTeammate: !0,
            teammateContext: k
          })) {
            if (W.signal.aborted) {
              t(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
              break
            }
            if (S.signal.aborted) {
              if (t(`[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`), o.type === "assistant" || o.type === "user" || o.type === "attachment" && cE(o)) ge.push(o), R.push(o), Z = sye(R, o, Z);
              Ue = !0;
              break
            }
            if (o.type === "spinner_mode") {
              y.setMode(o.mode);
              continue
            }
            if (o.type === "api_metrics") continue;
            if (o.type === "query_model_change") continue;
            if (o.type === "set_in_progress_tool_use_ids") {
              if (o.op.action !== "remove") continue;
              let C = o.op.ids;
              r.updateTranscript(s, (q) => {
                let X = new Set(q.inProgressToolUseIDs),
                  te = !1;
                for (let we of C)
                  if (X.delete(we)) te = !0;
                return te ? {
                  ...q,
                  inProgressToolUseIDs: X
                } : q
              });
              continue
            }
            if (o.type === "system" && o.subtype === "api_error") continue;
            ge.push(o), R.push(o), Z = sye(R, o, Z), rur(pe, o, Fe, N);
            let v = XPt(pe);
            j(s, (C) => ({
              ...C,
              progress: v
            }), r), r.updateTranscript(s, (C) => {
              let q = C.inProgressToolUseIDs;
              if (o.type === "assistant") {
                for (let X of o.message.content)
                  if (X.type === "tool_use") q = new Set([...q, X.id])
              } else if (o.type === "user") {
                let X = o.message.content;
                if (Array.isArray(X)) {
                  for (let te of X)
                    if (typeof te === "object" && "type" in te && te.type === "tool_result") {
                      let we = new Set(q);
                      we.delete(te.tool_use_id), q = we
                    }
                }
              }
              return {
                ...C,
                messages: bRi(C.messages, o),
                ...kPn(C.inProgressToolUseIDs, q)
              }
            })
          }
          return {
            success: !0,
            messages: ge
          }
        })).finally(() => {
          if (Z) R.push(...Z.preserved), Z = null
        }), j(s, (o) => ({
          ...o,
          currentWorkAbortController: void 0
        }), r), W.signal.aborted) break;
      let me = Ue || S.signal.aborted;
      if (me) {
        _e = !0, t(`[inProcessRunner] ${e.agentId} work interrupted, returning to idle`);
        let o = Xs({
          content: nN
        });
        r.updateTranscript(s, (v) => ({
          ...v,
          messages: fut(v.messages, o)
        }))
      }
      Ne ||= ge.some((o) => o.type === "assistant" && !o.isApiErrorMessage || o.type === "user" && !o.isMeta);
      let ee = !me ? Nxn(ge) : void 0;
      if (re = ee?.isTransient === !0 && !E && Ne, !E && !me) {
        let o = null;
        try {
          o = await Se(e, s, r, T.storageV5, u, T.getAppState().teamContext?.teammates);
          while (o === null && u.count > 0 && u.readFailures < bze && !W.signal.aborted) await J(Me), o = await Se(e, s, r, T.storageV5, u, T.getAppState().teamContext?.teammates)
        } catch (v) {
          t(`[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${v}`)
        }
        if (o) {
          try {
            let {
              result: v,
              summary: C
            } = ATt(R, {
              emitTelemetry: !0
            });
            if (v !== void 0 || ee !== void 0) {
              if (await Re(e.agentName, e.color, e.teamName, {
                  idleReason: ee !== void 0 ? "failed" : void 0,
                  summary: C,
                  failureReason: ee?.reason,
                  result: v,
                  senderReachable: !0
                }, T.storageV5) && v !== void 0) Te = v
            }
          } catch (v) {
            t(`[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${v}`)
          }
          await Ce(o);
          continue
        }
      }
      if (ee?.isTransient) l("tengu_teammate_transient_turn_failure", {
        error_kind: f(ee.errorKind ?? "unknown"),
        hold_evict: re
      });
      let Oe = T.getAppState().tasks[s],
        qe = !(Oe?.type === "in_process_teammate" && Oe.isIdle) && !E;
      j(s, (o) => (o.onIdleCallbacks?.forEach((v) => v()), {
        ...o,
        isIdle: !0,
        idleNotificationOwedToLead: qe && ye() || o.idleNotificationOwedToLead,
        evictAfter: re ? void 0 : Date.now() + kI,
        onIdleCallbacks: []
      }), r);
      let he = ee?.reason;
      if (qe) {
        let o = ATt(R, {
            emitTelemetry: !me
          }),
          v = me ? void 0 : o.result,
          C = await Re(e.agentName, e.color, e.teamName, {
            idleReason: me ? "interrupted" : he !== void 0 ? "failed" : "available",
            summary: o.summary,
            failureReason: he,
            result: v,
            senderReachable: he === void 0 || re
          }, T.storageV5);
        if (v !== void 0 && C) Te = v;
        if (!C) j(s, (q) => q.idleNotificationOwedToLead ? {
          ...q,
          idleNotificationOwedToLead: void 0
        } : q, r)
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`);
      t(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let Ge = await ze(e, W, s, T.getAppState, r, e.parentSessionId, E, z, u, re, T.storageV5);
      await Ce(Ge)
    }
    let ie = !1,
      O;
    if (j(s, (S) => {
        if (S.status !== "running") return ie = !0, S;
        return O = S.toolUseId, S.onIdleCallbacks?.forEach((Y) => Y()), {
          ...S,
          status: "completed",
          notified: !0,
          endTime: Date.now(),
          pendingUserMessages: [],
          abortController: void 0,
          currentWorkAbortController: void 0,
          retryWake: void 0,
          onIdleCallbacks: []
        }
      }, r), !ie) r.updateTranscript(s, (S) => ({
      ...S,
      messages: S.messages.length ? [S.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set
    }));
    if (Kp(s), r.evictTerminal(s), !ie) za(s, "completed", {
      toolUseId: O,
      summary: e.agentId
    });
    if (TXe(e.agentId), Ee) c("swarm_in_process_run", "compact_blocked_by_hook");
    else g("swarm_in_process_run");
    return {
      success: !0,
      messages: R
    }
  } catch (P) {
    let oe = P instanceof Error ? P.message : "Unknown error";
    t(`[inProcessRunner] Agent ${e.agentId} failed: ${oe}`);
    let ae = !1,
      ie;
    if (j(s, (O) => {
        if (O.status !== "running") return ae = !0, O;
        return ie = O.toolUseId, O.onIdleCallbacks?.forEach((S) => S()), {
          ...O,
          status: "failed",
          notified: !0,
          error: oe,
          isIdle: !0,
          endTime: Date.now(),
          onIdleCallbacks: [],
          pendingUserMessages: [],
          abortController: void 0,
          currentWorkAbortController: void 0,
          retryWake: void 0
        }
      }, r), !ae) r.updateTranscript(s, (O) => ({
      ...O,
      messages: O.messages.length ? [O.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set
    }));
    if (Kp(s), r.evictTerminal(s), !ae) za(s, "failed", {
      toolUseId: ie,
      summary: e.agentId
    });
    if (!E) {
      let O;
      try {
        O = _e ? void 0 : Hti(R)
      } catch (S) {
        t(`[inProcessRunner] ${e.agentName} failed to extract partial result: ${S}`)
      }
      if (O !== void 0 && O === Te) O = void 0;
      await Re(e.agentName, e.color, e.teamName, {
        idleReason: "failed",
        completedStatus: "failed",
        failureReason: oe,
        result: O
      }, T.storageV5)
    }
    return TXe(e.agentId), m("swarm_in_process_run", "agent_loop_failed"), {
      success: !1,
      error: oe,
      messages: R
    }
  }
}

function Wzo(n) {
  let e = n.identity.agentId;
  Xe(n).catch((s) => {
    t(`[inProcessRunner] Unhandled error in ${e}: ${s}`)
  })
}
export {
  Wzo
};
