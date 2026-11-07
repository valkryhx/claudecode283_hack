// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { za, w_, ORe, DD, Cm } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Pe, De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Pr } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Eme, ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { $U } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { yr } from "B:/~BUN/root/chunk-44q965xg.js";
import { hl, fAe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Xn } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { nN as content_3 } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { MXi } from "B:/~BUN/root/chunk-trd3c21n.js";
import { sc, Z8, X1e, kMe, Qxt, $f, oje, yI, Gge, WQ, g6, i8e, hF, nur, rur, our, XPt, R5t, qM, O8e, sye, rq, p2, Ino, B8e, cE, R6 as message, _ye, Nxn, Xs, Ie } from "B:/~BUN/root/chunk-27h4st9h.js";
import { tNt, yD, jq } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { se, bg, Q2, YFn } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { yee } from "B:/~BUN/root/chunk-detjgwj4.js";
import { nX } from "B:/~BUN/root/chunk-076mmgjt.js";
import { Kp } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { sbr } from "B:/~BUN/root/chunk-tdg0k3wq.js";
import { Xa } from "B:/~BUN/root/chunk-m8dg5txf.js";
import { nio, fut, bRi, kPn, kI, IIt, vPn } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { TXe } from "B:/~BUN/root/chunk-vy4t7613.js";
import { WMn } from "B:/~BUN/root/chunk-98qgaht2.js";
import { FTe, II, xLi, ahs, x0e, M2, rpt, YE, Cco, bze, $W, Sze, YMn, VXe, fE, cSr, rQt, FDt, sQt, HDt, eDn, tDn, h1, nDn, dQt } from "B:/~BUN/root/chunk-k5xd4a86.js";
import { MZ } from "B:/~BUN/root/chunk-y7em5h10.js";
import { PJn, FJn, HJn, Hti, ATt, $Jn } from "B:/~BUN/root/chunk-j79gx234.js";
import { Wii } from "B:/~BUN/root/chunk-3kg80bh2.js";
import { DYr, dI } from "B:/~BUN/root/chunk-ra105wwp.js";
import { Yzo } from "B:/~BUN/root/chunk-ma8vvs6g.js";
import { OKr } from "B:/~BUN/root/chunk-8hnkv6k0.js";
import { $tr, awn, lwn } from "B:/~BUN/root/chunk-m3x50w3h.js";
import { KP } from "B:/~BUN/root/chunk-48hpv12e.js";
import { f_, vb } from "B:/~BUN/root/chunk-az6xed3t.js";
import { X7t, eSr, tSr } from "B:/~BUN/root/chunk-we53d1t3.js";
import { F_e } from "B:/~BUN/root/chunk-xbhv3nhf.js";
import { An } from "B:/~BUN/root/chunk-7yd8y16n.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
var Ke = 500,
  Me = 500;
function Ve(n, e, s, w, d) {
  return async (A, p, k, T, toolUseId, G) => {
    let result = G ?? (await i8e(A, p, {
      ...k,
      asksNoHost: !0
    }, T, toolUseId, Z8, void 0, w));
    if (result.behavior !== "ask") return result;
    if (result.hostDisplay !== void 0) return m("permission_host_worded_ask", "teammate_lane"), X1e(A.name, "a teammate's permission request", {
      hostWorded: !0,
      remedy: "Ask the team lead to run this tool call itself. When the team lead runs it, the permission prompt shows the full disclosure."
    });
    let input = result.updatedInput ?? p;
    if (e.signal.aborted) return {
      behavior: "ask",
      message: message
    };
    let toolPermissionContext = se(k),
      D = () => A.description(input, {
        isNonInteractiveSession: k.options.isNonInteractiveSession,
        toolPermissionContext: toolPermissionContext,
        tools: k.options.tools
      });
    if (k.requestDialog !== void 0) {
      let permissionContextSetter = $Jn.of(k.session).permissionContextSetter,
        ctx = FJn(A, p, k, T, toolUseId, w, K => {
          permissionContextSetter?.(H => yD(H, K.filter(item => item.type !== "setMode")));
        }),
        u = await PJn({
          ctx: ctx,
          updatedInput: result.updatedInput,
          suggestions: result.suggestions,
          permissionMode: toolPermissionContext.mode,
          askSuppressesAlwaysAllowRule: result.suppressAlwaysAllowRule === !0,
          askIsPersonOnly: result.personOnly === !0
        });
      if (u) return u;
      if (e.signal.aborted) return {
        behavior: "ask",
        message: message
      };
      let description = await D();
      if (e.signal.aborted) return {
        behavior: "ask",
        message: message
      };
      let N = Date.now();
      try {
        return await new Promise((K, H) => {
          HJn({
            ctx: ctx,
            description: description,
            result: result,
            awaitAutomatedChecksBeforeDialog: !0
          }, K).catch(H);
        });
      } finally {
        s(Date.now() - N);
      }
    }
    if (kMe(result) || result.forcedByCaller === !0) return X1e(A.name, "the teammate mailbox (a static-description wire)", {
      hostWorded: result.hostDisplay !== void 0,
      forMcpSkill: result.metadata?.mcpSkill !== void 0
    });
    let description_2 = await D();
    if (e.signal.aborted) return {
      behavior: "ask",
      message: message
    };
    return new Promise(i => {
      let r = eSr({
        toolName: A.name,
        toolUseId: toolUseId,
        input: input,
        description: description_2,
        permissionSuggestions: result.suggestions,
        workerId: n.agentId,
        workerName: n.agentName,
        workerColor: n.color,
        teamName: n.teamName
      });
      $tr({
        requestId: r.id,
        toolUseId: toolUseId,
        toolName: r.toolName,
        inputDigest: X7t(r.toolName, input),
        onAllow(N, K, H, contentBlocks) {
          I();
          let Q = yee(K, void 0, se(k)),
            z = A.suppressesAllPermissionUpdates?.(input) === !0 ? g6(Q) : A.suppressesAlwaysAllowRule?.(input) === !0 || result.suppressAlwaysAllowRule === !0 ? WQ(Q, A, se(k)) : Q;
          jq(z, k.storageV5).catch(a);
          let updatedInput = N && Object.keys(N).length > 0 ? N : input;
          i({
            behavior: "allow",
            updatedInput: updatedInput,
            userModified: !1,
            ...(contentBlocks && contentBlocks.length > 0 && {
              contentBlocks: contentBlocks
            })
          });
        },
        onReject(N, contentBlocks_2) {
          I();
          let message_2 = N ? `${_ye}${N}` : message;
          i({
            behavior: "ask",
            message: message_2,
            contentBlocks: contentBlocks_2
          });
        },
        onRefuse(message_3) {
          I(), i({
            behavior: "ask",
            message: message_3
          });
        },
        onUnboundVerdict() {}
      }), tSr(r, k.storageV5).then(N => {
        if (!N) I(), i({
          behavior: "ask",
          message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
        });
      });
      let y = setInterval(async (N, K, H, B, Q, z, ne) => {
          if (N.signal.aborted) {
            K(), H({
              behavior: "ask",
              message: message
            });
            return;
          }
          let de = await rpt(B.agentName, B.teamName, z),
            le = x0e(de.filter(item => item && !item.read), M2(B.agentName, B.teamName), {
              roster: ne(),
              isPaneTeammate: !1
            });
          for (let R of de) if (R && !R.read && le.get(R) !== "forged") {
            let F = sQt(R.text);
            if (F && F.request_id === Q.id) {
              if (await Cco(B.agentName, B.teamName, R, z), R.from !== hl) {
                t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${R.from}`, {
                  level: "warn"
                });
                continue;
              }
              if (F.subtype === "success") lwn({
                requestId: F.request_id,
                toolUseId: F.tool_use_id,
                approvedRequest: F.approved_request,
                decision: "approved",
                updatedInput: F.response?.updated_input,
                permissionUpdates: F.response?.permission_updates
              });else lwn({
                requestId: F.request_id,
                toolUseId: F.tool_use_id,
                approvedRequest: F.approved_request,
                decision: "rejected",
                feedback: F.error
              });
              return;
            }
          }
        }, Ke, e, I, i, n, r, k.storageV5, d),
        u = () => {
          I(), i({
            behavior: "ask",
            message: message
          });
        };
      e.signal.addEventListener("abort", u, {
        once: !0
      });
      function I() {
        clearInterval(y), awn(r.id), e.signal.removeEventListener("abort", u);
      }
    });
  };
}
function j(n, e, s) {
  s.update(n, w => w.type === "in_process_teammate" ? e(w) : w);
}
async function He(n, text, color, w, d) {
  return YE(hl, {
    from: n,
    text: text,
    timestamp: new Date().toISOString(),
    color: color
  }, w, d);
}
async function Re(n, e, s, w, d) {
  let A = rQt(n, w),
    p;
  try {
    p = await He(n, _(A), e, s, d);
  } finally {
    FDt(A, w?.result, p);
  }
  return p !== void 0;
}
function Ye(n) {
  let e = new Set(n.filter(item => item.status !== "completed").map(item => item.id));
  return n.find(item => {
    if (item.status !== "pending") return !1;
    if (item.owner) return !1;
    return item.blockedBy.every(item => !e.has(item));
  });
}
function Je(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
  if (n.description) e += `

${n.description}`;
  return e;
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
      return;
    }
    return await FTe(n, A.id, {
      status: "in_progress"
    }, w), t(`[inProcessRunner] Claimed task #${A.id}: ${A.subject}`), Je(A);
  } catch (error) {
    t(`[inProcessRunner] Error checking task list: ${error}`);
    return;
  }
}
async function Se(n, e, s, w, d, roster) {
  let p;
  try {
    p = await rpt(n.agentName, n.teamName, w, {
      throwOnUnknownReadError: !0
    }), d.readFailures = 0;
  } catch (error) {
    return d.readFailures++, t(`[inProcessRunner] ${n.agentName} could not read mailbox (${d.readFailures} consecutive): ${error}`, {
      level: "warn"
    }), null;
  }
  let k = x0e(p.filter(item => item && !item.read), M2(n.agentName, n.teamName), {
      roster: roster,
      isPaneTeammate: !1
    }),
    T = i => k.get(i) === "forged",
    W = new Set(p.filter(item => item && !item.read).map($W));
  for (let i of d.consumedUnmarked) if (!W.has(i)) d.consumedUnmarked.delete(i);
  let G = async i => {
      let r = await B8e(i, {
          provenanceOf: u => k.get(u) ?? "unverifiable",
          agentId: n.resumableAgentId ?? n.agentId
        }),
        y = new Set(r.map($W));
      for (let u of i) {
        let I = $W(u);
        if (!y.has(I)) d.consumedUnmarked.add(I);
      }
      return r;
    },
    h = -1,
    request = null;
  for (let i = 0; i < p.length; i++) {
    let r = p[i];
    if (r && !r.read && !T(r)) {
      let y = HDt(r.text),
        I = (k.get(r) === "verified" || r.from === hl || ahs(r.from, roster) !== void 0) && y?.from === r.from ? y : null;
      if (I) {
        h = i, request = I;
        break;
      }
    }
  }
  if (h !== -1) {
    if (d.count > 0) {
      let y = p.filter((item, index) => !item.read && index !== h && (T(item) || !h1(item.text)) && !d.deliveredUnmarked.has($W(item)) && !d.consumedUnmarked.has($W(item)));
      if (y.length > 0) {
        for (let N of y) d.deliveredUnmarked.add($W(N));
        let u = await Sze(n.agentName, n.teamName, y, w);
        if (u) d.count = 0, d.reported = !1, d.deliveredUnmarked.clear();else if (!d.reported) d.reported = !0, c("swarm_inbox_poll", "worker_mark_read_failed_streak");
        t(`[inProcessRunner] ${n.agentName} delivering ${y.length} held message(s) ahead of a shutdown_request${u ? "" : " (mark still not landed)"}`, {
          level: u ? "debug" : "warn"
        });
        let messages = await G(y);
        if (messages.length > 0) return {
          type: "new_messages",
          messages: messages
        };
      }
    }
    let i = p[h],
      r = U(p.slice(0, h), y => !y.read);
    if (t(`[inProcessRunner] ${n.agentName} received shutdown request from ${request?.from} (prioritized over ${r} unread messages)`), await Cco(n.agentName, n.teamName, i, w), fAe(k.get(i) ?? "unverifiable")) nX();
    return {
      type: "shutdown_request",
      request: request,
      originalMessage: i.text,
      entryFrom: i.from
    };
  }
  let M = [],
    D = [];
  for (let i of p) {
    if (!i || i.read) continue;
    if (!T(i) && h1(i.text)) M.push(i);else if (!d.consumedUnmarked.has($W(i))) D.push(i);
  }
  let message_4 = null;
  if (M.length > 0) {
    for (let r of M) {
      let y = eDn(r.text);
      if (y && r.from === hl) {
        let u = Wii(e, y, s, w);
        if (u) t(`[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${u.approved}`), message_4 = nDn(u);else t(`[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue;
      }
      if (tDn(r.text)) {
        t(`[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, {
          level: "warn"
        });
        continue;
      }
      t(`[inProcessRunner] ${n.agentName} dropping protocol frame from ${r.from}: ${r.text.substring(0, 80)}`, {
        level: "warn"
      });
    }
    if (!(await Sze(n.agentName, n.teamName, M, w))) t(`[inProcessRunner] ${n.agentName} could not mark ${M.length} protocol frame(s) read; retrying next poll`, {
      level: "warn"
    });
  }
  if (message_4) return {
    type: "new_message",
    message: message_4,
    from: hl
  };
  if (D.length > 0) {
    if (await Sze(n.agentName, n.teamName, D, w)) d.count = 0, d.reported = !1, d.deliveredUnmarked.clear();else {
      let y = ++d.count;
      if (y < bze) return t(`[inProcessRunner] ${n.agentName} could not mark ${D.length} message(s) read (${y}/${bze}); delivery retried next poll`, {
        level: "warn"
      }), null;
      if (t(`[inProcessRunner] ${n.agentName} could not mark ${D.length} message(s) read for ${y} poll(s); delivering the batch unmarked`, {
        level: "warn"
      }), !d.reported) d.reported = !0, c("swarm_inbox_poll", "worker_mark_read_failed_streak");
      for (let u of D) d.deliveredUnmarked.add($W(u));
    }
    t(`[inProcessRunner] ${n.agentName} draining ${D.length} message(s) from ${L(D.map(item => item.from)).join(", ")}`);
    let messages_2 = await G(D);
    if (messages_2.length === 0) return null;
    return {
      type: "new_messages",
      messages: messages_2
    };
  }
  if (d.count > 0) d.count = 0, d.reported = !1, d.deliveredUnmarked.clear();
  return null;
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
      return j(s, I => ({
        ...I,
        pendingUserMessages: I.pendingUserMessages.slice(1)
      }), d), t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${M})`), {
        type: "new_message",
        message: u.text,
        origin: u.origin,
        from: "user"
      };
    }
    let i = n.resumableAgentId !== void 0 && O8e(n.resumableAgentId, d),
      r = W || x?.type === "in_process_teammate" && x.awaitingPlanApproval || D.viewingAgentTaskId === s || vPn(D.tasks, s) || i;
    if (r) h = Date.now();
    if (W && x?.type === "in_process_teammate" && x.evictAfter !== void 0) j(s, u => ({
      ...u,
      evictAfter: void 0
    }), d);
    if (x?.type === "in_process_teammate" && x.evictAfter !== void 0 && (i && x.evictAfter <= Date.now() + Me || E && !i)) j(s, u => ({
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
        };
      }
      continue;
    }
    t(`[inProcessRunner] ${n.agentName} poll #${M}: checking mailbox`);
    try {
      let u = await Se(n, s, d, G, T, w().teamContext?.teammates);
      if (u) return u;
      if (T.count > 0 && T.readFailures < bze) {
        h = Date.now();
        let I = w().tasks[s];
        if (I?.type === "in_process_teammate" && I.evictAfter !== void 0) j(s, N => ({
          ...N,
          evictAfter: Date.now() + kI
        }), d);
        continue;
      }
    } catch (error) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${error}`);
    }
    let message_5 = await Le(A, n.agentName, k, G);
    if (message_5) return {
      type: "new_message",
      message: message_5,
      from: "task-list"
    };
    if (hF()) {
      if (!r && Date.now() - h >= IIt) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${IIt}ms (poll #${M})`), {
        type: "idle_timeout"
      };
    }
  }
  return t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${M})`), {
    type: "aborted"
  };
}
async function Xe(n) {
  let {
      identity: identity,
      taskId: taskId,
      prompt: w,
      description: d,
      spawnedAgentType: spawnedAgentType,
      agentDefinition: agentDefinition,
      teammateContext: teammateContext,
      toolUseContext: toolUseContext,
      abortController: abortController,
      model: model,
      invokingRequestId: invokingRequestId,
      standalone = !1,
      resumeMessages: resumeMessages,
      resumeReplacementState: resumeReplacementState,
      initialFrom: initialFrom
    } = n,
    {
      setAppState: setAppState,
      taskRegistry: taskRegistry
    } = toolUseContext,
    y = Qxt(taskId),
    u = {
      count: 0,
      reported: !1,
      deliveredUnmarked: new Set(),
      consumedUnmarked: new Set(),
      readFailures: 0
    };
  t(`[inProcessRunner] Starting agent loop for ${identity.agentId}`);
  let agentContext = {
      agentId: identity.agentId,
      parentAgentId: toolUseContext.agentId,
      depth: Cm(toolUseContext.agentContext),
      parentSessionId: identity.parentSessionId,
      agentName: identity.agentName,
      teamName: identity.teamName,
      agentColor: identity.color,
      planModeRequired: identity.planModeRequired,
      isTeamLead: !1,
      agentType: "teammate",
      invokingRequestId: invokingRequestId,
      invocationKind: "spawn",
      invocationEmitted: !1,
      isBackgroundAgent: !0
    },
    {
      tools: N,
      mainLoopModel: mainLoopModel
    } = toolUseContext.rootToolSurface,
    B = [...(await qM(N, mainLoopModel, {
      teammate: !0
    })).filter(item => item !== $U), Yzo];
  if (agentDefinition) {
    let P = agentDefinition.getSystemPrompt({
      toolUseContext: toolUseContext,
      primedAgentMemory: await tNt(agentDefinition, toolUseContext.storageV5)
    });
    if (P) B.push(`
# Custom Agent Instructions
${P}`);
    if (agentDefinition.memory) l("tengu_agent_memory_loaded", {
      ...!1,
      scope: f(agentDefinition.memory),
      source: b("in-process-teammate")
    });
  }
  let Q = B.join(`
`),
    hasTaskListTools = teammateContext.hasTaskListTools,
    ne = [An, ...(hasTaskListTools ? [f_, MZ, KP, vb] : [])],
    disallowedTools = agentDefinition?.disallowedTools?.filter(P => !ne.includes(yr(P).toolName)),
    le = {
      agentType: identity.agentName,
      whenToUse: `In-process teammate: ${identity.agentName}`,
      getSystemPrompt: () => Q,
      tools: agentDefinition?.tools ? L([...agentDefinition.tools, ...ne]) : ["*"],
      ...(disallowedTools?.length && {
        disallowedTools: disallowedTools
      }),
      source: "projectSettings",
      permissionMode: "default",
      ...(agentDefinition?.model && {
        model: agentDefinition.model
      }),
      ...(agentDefinition?.effort !== void 0 && {
        effort: agentDefinition.effort
      }),
      ...(agentDefinition?.omitClaudeMd && {
        omitClaudeMd: !0
      }),
      ...(agentDefinition?.autoCompactWindow !== void 0 && {
        autoCompactWindow: agentDefinition.autoCompactWindow
      })
    },
    R = resumeMessages ? [...resumeMessages] : [],
    recordedUuids = new Set(resumeMessages?.map(P => P.uuid)),
    We = {
      taskKind: "in_process_teammate",
      teamName: identity.teamName,
      color: identity.color,
      planModeRequired: identity.planModeRequired,
      ...(agentDefinition && {
        customAgentType: agentDefinition.agentType
      }),
      ...(spawnedAgentType !== void 0 && {
        spawnedAgentType: spawnedAgentType
      }),
      ...(model && {
        model: model
      })
    },
    content = YMn({
      from: initialFrom ?? hl,
      text: w,
      summary: d
    }),
    V = content,
    origin = void 0,
    fe = !1,
    hold_evict = !1,
    Ne = (resumeMessages?.length ?? 0) > 0,
    Ee = !1,
    Te = resumeMessages ? ATt(resumeMessages).result : void 0,
    _e = !1,
    Ce = async P => {
      switch (hold_evict = !1, P.type) {
        case "shutdown_request":
          t(`[inProcessRunner] ${identity.agentId} received shutdown request - passing to model`), V = YMn({
            from: typeof P.entryFrom === "string" && P.entryFrom !== "" ? P.entryFrom : fE,
            text: dQt(cSr(P.originalMessage, P.entryFrom) ?? P.originalMessage, P.entryFrom)
          }), origin = void 0, OKr(taskId, Ie({
            content: V
          }), taskRegistry);
          break;
        case "new_message":
          if (t(`[inProcessRunner] ${identity.agentId} received new message from ${P.from}`), P.from === "user") V = P.message, origin = P.origin;else V = YMn({
            from: P.from,
            text: P.message,
            color: P.color,
            summary: P.summary
          }), origin = void 0, OKr(taskId, Ie({
            content: V
          }), taskRegistry);
          break;
        case "new_messages":
          t(`[inProcessRunner] ${identity.agentId} received ${P.messages.length} drained message(s)`), V = VXe(P.messages, {
            recipientIsLead: !1
          }), origin = void 0, OKr(taskId, Ie({
            content: V
          }), taskRegistry);
          break;
        case "aborted":
          t(`[inProcessRunner] ${identity.agentId} aborted while waiting`), fe = !0;
          break;
        case "idle_timeout":
          if (t(`[inProcessRunner] ${identity.agentId} idle timeout \u2014 exiting loop`), !standalone) toolUseContext.agentLifecycle.setTeammate(identity.agentId, void 0), await WMn(identity.teamName, identity.agentId, {
            onlyIfJoinedBefore: Date.now()
          }, toolUseContext.storageV5);
          fe = !0;
          break;
      }
    };
  if (!standalone) await Le(identity.parentSessionId, identity.agentName, hasTaskListTools, toolUseContext.storageV5);
  try {
    taskRegistry.updateTranscript(taskId, S => {
      let messages_3 = S.messages;
      if (resumeMessages) for (let Ae of resumeMessages.slice(-nio)) messages_3 = fut(messages_3, Ae);
      return {
        ...S,
        messages: fut(messages_3, Ie({
          content: content
        }))
      };
    });
    let contentReplacementState = toolUseContext.contentReplacementState ? resumeReplacementState ?? sbr() : void 0,
      stickyBetas = Eme(),
      retryWake = De();
    while (!abortController.signal.aborted && !fe) {
      t(`[inProcessRunner] ${identity.agentId} processing prompt: ${V.substring(0, 50)}...`);
      let S = Xn();
      S.signal.addEventListener("abort", () => {
        _e = !0;
      }), j(taskId, o => ({
        ...o,
        currentWorkAbortController: S,
        retryWake: retryWake
      }), taskRegistry);
      let Y = Ie({
          content: V,
          origin: origin
        }),
        promptMessages = [Y],
        ce = R,
        $e = $f(R, w_(mainLoopModel));
      if (!Pe(process.env.DISABLE_COMPACT) && $e > yI(sc(mainLoopModel), DYr(toolUseContext.options.autoCompactWindow, le.autoCompactWindow))) {
        t(`[inProcessRunner] ${identity.agentId} compacting history (${$e} tokens)`);
        let toolUseContext_2 = {
          ...toolUseContext,
          abortController: abortController,
          agentId: identity.resumableAgentId ?? Pr(identity.agentId),
          readFileState: F_e(toolUseContext.readFileState, {
            stripSeededFromContext: !0
          }),
          memorySelector: Gge(),
          onCompactEvent: void 0,
          onRetryStatus: y.setRetryStatus,
          compactTranscriptUnavailable: !0
        };
        try {
          let v = await Ino(R, toolUseContext_2, {
            systemPrompt: Xa([]),
            userContext: {},
            systemContext: {},
            toolUseContext: toolUseContext_2,
            forkContextMessages: R,
            advisorModel: toolUseContext_2.getAppState().advisorModel
          }, !0, {
            isAutoCompact: !0
          });
          if (ce = p2(v), contentReplacementState) contentReplacementState = sbr();
          R.length = 0, R.push(...ce), recordedUuids.clear(), taskRegistry.updateTranscript(taskId, C => ({
            ...C,
            messages: [...ce, Y]
          }));
        } catch (error) {
          if (error instanceof Error && error.message.startsWith(rq)) t(`[inProcessRunner] ${identity.agentId} compaction blocked by PreCompact hook; continuing uncompacted`), Ee = !0;else if (abortController.signal.aborted || error instanceof Error && error.message === content_3) {
            t(`[inProcessRunner] ${identity.agentId} aborted during compaction`), fe = !0;
            break;
          } else throw error;
        }
      }
      let forkContextMessages = ce.length > 0 ? [...ce] : void 0;
      R.push(Y), Te = void 0, _e = S.signal.aborted;
      let pe = nur(),
        ve = taskRegistry.get(taskId);
      if (ve !== void 0 && "progress" in ve && ve.progress !== void 0) pe.latestInputTokens = ve.progress.tokenCount;
      let Fe = R5t(N),
        messages_4 = [],
        be = toolUseContext.getAppState().tasks[taskId],
        permissionMode = be && be.type === "in_process_teammate" ? be.permissionMode : "default",
        agentDefinition_2 = {
          ...le,
          permissionMode: permissionMode
        },
        Ue = !1,
        Z = null;
      if (await MXi(teammateContext, async () => DD(agentContext, async () => {
        if (j(taskId, o => ({
          ...o,
          status: "running",
          isIdle: !1,
          idleNotificationOwedToLead: void 0,
          evictAfter: void 0,
          evictAfterHeldBySibling: void 0
        }), taskRegistry), taskRegistry.updateTranscript(taskId, o => ({
          ...o,
          turnStartTime: Date.now()
        })), y.setMode("responding"), model !== void 0 && le.effort === void 0 && bg(toolUseContext.permissionLayers) === void 0) {
          let o = ORe(model);
          y.setTurnEffort(YFn(toolUseContext, o, Q2(toolUseContext)) ?? null, o);
        }
        for await (let o of dI({
          agentDefinition: agentDefinition_2,
          promptMessages: promptMessages,
          turnPrompt: V,
          toolUseContext: toolUseContext,
          canUseTool: Ve(identity, S, v => {
            j(taskId, C => ({
              ...C,
              totalPausedMs: (C.totalPausedMs ?? 0) + v
            }), taskRegistry);
          }, oje(setAppState), () => toolUseContext.getAppState().teamContext?.teammates),
          isAsync: !0,
          canShowPermissionPrompts: !0,
          forkContextMessages: forkContextMessages,
          querySource: "agent:custom",
          override: {
            abortController: S,
            agentContext: agentContext,
            onRetryStatus: y.setRetryStatus,
            subscribeRetryWake: retryWake.subscribe,
            ...(identity.resumableAgentId && {
              agentId: identity.resumableAgentId
            })
          },
          ...(identity.resumableAgentId && {
            recordedUuids: recordedUuids,
            name: identity.agentName,
            description: d,
            extraMetadata: {
              ...We,
              permissionMode: permissionMode
            }
          }),
          onStreamTokenEstimate: v => {
            our(pe, v);
            let progress = XPt(pe);
            j(taskId, q => q.progress?.tokenCount === progress.tokenCount ? q : {
              ...q,
              progress: progress
            }, taskRegistry);
          },
          model: model,
          preserveToolUseResults: !0,
          availableTools: N,
          contentReplacementState: contentReplacementState,
          stickyBetas: stickyBetas,
          isTeammate: !0,
          teammateContext: teammateContext
        })) {
          if (abortController.signal.aborted) {
            t(`[inProcessRunner] ${identity.agentId} lifecycle aborted`);
            break;
          }
          if (S.signal.aborted) {
            if (t(`[inProcessRunner] ${identity.agentId} current work aborted (Escape pressed)`), o.type === "assistant" || o.type === "user" || o.type === "attachment" && cE(o)) messages_4.push(o), R.push(o), Z = sye(R, o, Z);
            Ue = !0;
            break;
          }
          if (o.type === "spinner_mode") {
            y.setMode(o.mode);
            continue;
          }
          if (o.type === "api_metrics") continue;
          if (o.type === "query_model_change") continue;
          if (o.type === "set_in_progress_tool_use_ids") {
            if (o.op.action !== "remove") continue;
            let ids = o.op.ids;
            taskRegistry.updateTranscript(taskId, q => {
              let inProgressToolUseIDs = new Set(q.inProgressToolUseIDs),
                te = !1;
              for (let we of ids) if (inProgressToolUseIDs.delete(we)) te = !0;
              return te ? {
                ...q,
                inProgressToolUseIDs: inProgressToolUseIDs
              } : q;
            });
            continue;
          }
          if (o.type === "system" && o.subtype === "api_error") continue;
          messages_4.push(o), R.push(o), Z = sye(R, o, Z), rur(pe, o, Fe, N);
          let progress_2 = XPt(pe);
          j(taskId, C => ({
            ...C,
            progress: progress_2
          }), taskRegistry), taskRegistry.updateTranscript(taskId, C => {
            let inProgressToolUseIDs_2 = C.inProgressToolUseIDs;
            if (o.type === "assistant") {
              for (let X of o.message.content) if (X.type === "tool_use") inProgressToolUseIDs_2 = new Set([...inProgressToolUseIDs_2, X.id]);
            } else if (o.type === "user") {
              let content_2 = o.message.content;
              if (Array.isArray(content_2)) {
                for (let te of content_2) if (typeof te === "object" && "type" in te && te.type === "tool_result") {
                  let we = new Set(inProgressToolUseIDs_2);
                  we.delete(te.tool_use_id), inProgressToolUseIDs_2 = we;
                }
              }
            }
            return {
              ...C,
              messages: bRi(C.messages, o),
              ...kPn(C.inProgressToolUseIDs, inProgressToolUseIDs_2)
            };
          });
        }
        return {
          success: !0,
          messages: messages_4
        };
      })).finally(() => {
        if (Z) R.push(...Z.preserved), Z = null;
      }), j(taskId, o => ({
        ...o,
        currentWorkAbortController: void 0
      }), taskRegistry), abortController.signal.aborted) break;
      let me = Ue || S.signal.aborted;
      if (me) {
        _e = !0, t(`[inProcessRunner] ${identity.agentId} work interrupted, returning to idle`);
        let o = Xs({
          content: content_3
        });
        taskRegistry.updateTranscript(taskId, v => ({
          ...v,
          messages: fut(v.messages, o)
        }));
      }
      Ne ||= messages_4.some(item => item.type === "assistant" && !item.isApiErrorMessage || item.type === "user" && !item.isMeta);
      let ee = !me ? Nxn(messages_4) : void 0;
      if (hold_evict = ee?.isTransient === !0 && !standalone && Ne, !standalone && !me) {
        let o = null;
        try {
          o = await Se(identity, taskId, taskRegistry, toolUseContext.storageV5, u, toolUseContext.getAppState().teamContext?.teammates);
          while (o === null && u.count > 0 && u.readFailures < bze && !abortController.signal.aborted) await J(Me), o = await Se(identity, taskId, taskRegistry, toolUseContext.storageV5, u, toolUseContext.getAppState().teamContext?.teammates);
        } catch (error) {
          t(`[inProcessRunner] ${identity.agentName} turn-end mailbox check failed: ${error}`);
        }
        if (o) {
          try {
            let {
              result: result_2,
              summary: summary
            } = ATt(R, {
              emitTelemetry: !0
            });
            if (result_2 !== void 0 || ee !== void 0) {
              if ((await Re(identity.agentName, identity.color, identity.teamName, {
                idleReason: ee !== void 0 ? "failed" : void 0,
                summary: summary,
                failureReason: ee?.reason,
                result: result_2,
                senderReachable: !0
              }, toolUseContext.storageV5)) && result_2 !== void 0) Te = result_2;
            }
          } catch (error) {
            t(`[inProcessRunner] ${identity.agentName} turn-end result delivery failed: ${error}`);
          }
          await Ce(o);
          continue;
        }
      }
      if (ee?.isTransient) l("tengu_teammate_transient_turn_failure", {
        error_kind: f(ee.errorKind ?? "unknown"),
        hold_evict: hold_evict
      });
      let Oe = toolUseContext.getAppState().tasks[taskId],
        qe = !(Oe?.type === "in_process_teammate" && Oe.isIdle) && !standalone;
      j(taskId, o => (o.onIdleCallbacks?.forEach(v => v()), {
        ...o,
        isIdle: !0,
        idleNotificationOwedToLead: qe && ye() || o.idleNotificationOwedToLead,
        evictAfter: hold_evict ? void 0 : Date.now() + kI,
        onIdleCallbacks: []
      }), taskRegistry);
      let failureReason = ee?.reason;
      if (qe) {
        let o = ATt(R, {
            emitTelemetry: !me
          }),
          result_3 = me ? void 0 : o.result,
          C = await Re(identity.agentName, identity.color, identity.teamName, {
            idleReason: me ? "interrupted" : failureReason !== void 0 ? "failed" : "available",
            summary: o.summary,
            failureReason: failureReason,
            result: result_3,
            senderReachable: failureReason === void 0 || hold_evict
          }, toolUseContext.storageV5);
        if (result_3 !== void 0 && C) Te = result_3;
        if (!C) j(taskId, q => q.idleNotificationOwedToLead ? {
          ...q,
          idleNotificationOwedToLead: void 0
        } : q, taskRegistry);
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${identity.agentName}`);
      t(`[inProcessRunner] ${identity.agentId} finished prompt, waiting for next`);
      let Ge = await ze(identity, abortController, taskId, toolUseContext.getAppState, taskRegistry, identity.parentSessionId, standalone, hasTaskListTools, u, hold_evict, toolUseContext.storageV5);
      await Ce(Ge);
    }
    let ie = !1,
      toolUseId_2;
    if (j(taskId, S => {
      if (S.status !== "running") return ie = !0, S;
      return toolUseId_2 = S.toolUseId, S.onIdleCallbacks?.forEach(Y => Y()), {
        ...S,
        status: "completed",
        notified: !0,
        endTime: Date.now(),
        pendingUserMessages: [],
        abortController: void 0,
        currentWorkAbortController: void 0,
        retryWake: void 0,
        onIdleCallbacks: []
      };
    }, taskRegistry), !ie) taskRegistry.updateTranscript(taskId, S => ({
      ...S,
      messages: S.messages.length ? [S.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set()
    }));
    if (Kp(taskId), taskRegistry.evictTerminal(taskId), !ie) za(taskId, "completed", {
      toolUseId: toolUseId_2,
      summary: identity.agentId
    });
    if (TXe(identity.agentId), Ee) c("swarm_in_process_run", "compact_blocked_by_hook");else g("swarm_in_process_run");
    return {
      success: !0,
      messages: R
    };
  } catch (P) {
    let oe = P instanceof Error ? P.message : "Unknown error";
    t(`[inProcessRunner] Agent ${identity.agentId} failed: ${oe}`);
    let ae = !1,
      toolUseId_3;
    if (j(taskId, O => {
      if (O.status !== "running") return ae = !0, O;
      return toolUseId_3 = O.toolUseId, O.onIdleCallbacks?.forEach(S => S()), {
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
      };
    }, taskRegistry), !ae) taskRegistry.updateTranscript(taskId, O => ({
      ...O,
      messages: O.messages.length ? [O.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set()
    }));
    if (Kp(taskId), taskRegistry.evictTerminal(taskId), !ae) za(taskId, "failed", {
      toolUseId: toolUseId_3,
      summary: identity.agentId
    });
    if (!standalone) {
      let result_4;
      try {
        result_4 = _e ? void 0 : Hti(R);
      } catch (error) {
        t(`[inProcessRunner] ${identity.agentName} failed to extract partial result: ${error}`);
      }
      if (result_4 !== void 0 && result_4 === Te) result_4 = void 0;
      await Re(identity.agentName, identity.color, identity.teamName, {
        idleReason: "failed",
        completedStatus: "failed",
        failureReason: oe,
        result: result_4
      }, toolUseContext.storageV5);
    }
    return TXe(identity.agentId), m("swarm_in_process_run", "agent_loop_failed"), {
      success: !1,
      error: oe,
      messages: R
    };
  }
}
function Wzo(n) {
  let agentId = n.identity.agentId;
  Xe(n).catch(s => {
    t(`[inProcessRunner] Unhandled error in ${agentId}: ${s}`);
  });
}
export { Wzo };