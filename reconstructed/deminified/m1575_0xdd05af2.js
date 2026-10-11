// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Si, Jy, WE, Sd } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { go } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { UY, Te } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { _$ } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { mi } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { fC as content_4 } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { VLo } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { lsn } from "B:/~BUN/root/chunk-0vgj9y5e.js";
import { Y3e, LF } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Zh, hp, tie, oVe, I8, SE, xW, PW, IW, N8, fR, T7t, C7t, R7t, xVe, A7t, Ffe, t3, xM, wNn, sv, oF as message, K8, cwr, Yo, Ce, _ke } from "B:/~BUN/root/chunk-3jyp964r.js";
import { mhe } from "B:/~BUN/root/chunk-rtyz5f1n.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { Hn } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { Ek, MB, Tk } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { ei } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Tp } from "B:/~BUN/root/chunk-196w7fz7.js";
import { yR, Yqe, OPt } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Yke } from "B:/~BUN/root/chunk-5yjtercz.js";
import { Mtn } from "B:/~BUN/root/chunk-1xb1enjd.js";
import { YEe, rx, QEo, pxr, Wae, YL, gNe, S_, V1n, Sge, e0, wge, l0t, XEe, jy, Psn, mat, F4e, hat, $4e, p0t, f0t, oI, m0t, Sat } from "B:/~BUN/root/chunk-m1qtc24s.js";
import { o0t } from "B:/~BUN/root/chunk-8p6es4nr.js";
import { Ebt, Obt, Mbt, UJr, Jje, Aqt } from "B:/~BUN/root/chunk-k4yzbknz.js";
import { FRn, fZe, rk, ero } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { Onr } from "B:/~BUN/root/chunk-2h339bcq.js";
import { _En } from "B:/~BUN/root/chunk-zc6n3jyh.js";
import { R4t, iwt, awt } from "B:/~BUN/root/chunk-rx5crs76.js";
import { mwe } from "B:/~BUN/root/chunk-wvy82qn4.js";
import { $$n, lLe, g_o } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { pat, Ssn, wsn } from "B:/~BUN/root/chunk-c1275ktq.js";
import { Sw } from "B:/~BUN/root/chunk-rcz149rn.js";
import { lo } from "B:/~BUN/root/chunk-988g5svb.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
var je = 500,
  he = 500;
function Ke(n, e, s, w, l) {
  return async (f, R, u, C, toolUseId, V) => {
    let result = V ?? (await N8(f, R, u, C, toolUseId, xW, void 0, w));
    if (result.behavior !== "ask") return result;
    let input = result.updatedInput ?? R;
    if (e.signal.aborted) return {
      behavior: "ask",
      message: message
    };
    let toolPermissionContext = me(u),
      x = () => f.description(input, {
        isNonInteractiveSession: u.options.isNonInteractiveSession,
        toolPermissionContext: toolPermissionContext,
        tools: u.options.tools
      });
    if (u.requestDialog !== void 0) {
      let permissionContextSetter = Aqt.of(u.session).permissionContextSetter,
        ctx = Obt(f, R, u, C, toolUseId, w, q => {
          permissionContextSetter?.(q, {
            preserveMode: !0
          });
        }),
        g = await Ebt({
          ctx: ctx,
          updatedInput: result.updatedInput,
          suggestions: result.suggestions,
          permissionMode: toolPermissionContext.mode,
          askSuppressesAlwaysAllowRule: result.suppressAlwaysAllowRule === !0,
          askIsPersonOnly: result.personOnly === !0
        });
      if (g) return g;
      if (e.signal.aborted) return {
        behavior: "ask",
        message: message
      };
      let description = await x();
      if (e.signal.aborted) return {
        behavior: "ask",
        message: message
      };
      let S = Date.now();
      try {
        return await new Promise((q, J) => {
          Mbt({
            ctx: ctx,
            description: description,
            result: result,
            awaitAutomatedChecksBeforeDialog: !0
          }, q).catch(J);
        });
      } finally {
        s(Date.now() - S);
      }
    }
    if (result.localDisplayOnly || result.forcedByCaller === !0) return mwe(f.name, "the teammate mailbox (a static-description wire)");
    let description_2 = await x();
    if (e.signal.aborted) return {
      behavior: "ask",
      message: message
    };
    return new Promise(r => {
      let T = Ssn({
        toolName: f.name,
        toolUseId: toolUseId,
        input: input,
        description: description_2,
        permissionSuggestions: result.suggestions,
        workerId: n.agentId,
        workerName: n.agentName,
        workerColor: n.color,
        teamName: n.teamName
      });
      R4t({
        requestId: T.id,
        toolUseId: toolUseId,
        toolName: T.toolName,
        inputDigest: pat(T.toolName, input),
        onAllow(S, q, J, contentBlocks) {
          a();
          let te = f.suppressesAllPermissionUpdates?.(input) === !0 ? IW(q) : f.suppressesAlwaysAllowRule?.(input) === !0 || result.suppressAlwaysAllowRule === !0 ? PW(q, f, me(u)) : q;
          LF(te, u.storageV5).catch(d);
          let updatedInput = S && Object.keys(S).length > 0 ? S : input;
          r({
            behavior: "allow",
            updatedInput: updatedInput,
            userModified: !1,
            ...(contentBlocks && contentBlocks.length > 0 && {
              contentBlocks: contentBlocks
            })
          });
        },
        onReject(S, contentBlocks_2) {
          a();
          let message_2 = S ? `${K8}${S}` : message;
          r({
            behavior: "ask",
            message: message_2,
            contentBlocks: contentBlocks_2
          });
        },
        onRefuse(message_3) {
          a(), r({
            behavior: "ask",
            message: message_3
          });
        },
        onUnboundVerdict() {}
      }), wsn(T, u.storageV5).then(S => {
        if (!S) a(), r({
          behavior: "ask",
          message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
        });
      });
      let P = setInterval(async (S, q, J, F, te, Z, de) => {
          if (S.signal.aborted) {
            q(), J({
              behavior: "ask",
              message: message
            });
            return;
          }
          let ge = await gNe(F.agentName, F.teamName, Z),
            E = Wae(ge.filter(item => item && !item.read), YL(F.agentName, F.teamName), {
              roster: de(),
              isPaneTeammate: !1
            });
          for (let G of ge) if (G && !G.read && E.get(G) !== "forged") {
            let W = hat(G.text);
            if (W && W.request_id === te.id) {
              if (await V1n(F.agentName, F.teamName, G, Z), G.from !== mi) {
                t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${G.from}`, {
                  level: "warn"
                });
                continue;
              }
              if (W.subtype === "success") awt({
                requestId: W.request_id,
                toolUseId: W.tool_use_id,
                approvedRequest: W.approved_request,
                decision: "approved",
                updatedInput: W.response?.updated_input,
                permissionUpdates: W.response?.permission_updates
              });else awt({
                requestId: W.request_id,
                toolUseId: W.tool_use_id,
                approvedRequest: W.approved_request,
                decision: "rejected",
                feedback: W.error
              });
              return;
            }
          }
        }, je, e, a, r, n, T, u.storageV5, l),
        g = () => {
          a(), r({
            behavior: "ask",
            message: message
          });
        };
      e.signal.addEventListener("abort", g, {
        once: !0
      });
      function a() {
        clearInterval(P), iwt(T.id), e.signal.removeEventListener("abort", g);
      }
    });
  };
}
function j(n, e, s) {
  s.update(n, w => w.type === "in_process_teammate" ? e(w) : w);
}
async function Ge(n, text, color, w, l) {
  return S_(mi, {
    from: n,
    text: text,
    timestamp: new Date().toISOString(),
    color: color
  }, w, l);
}
async function Re(n, e, s, w, l) {
  let f = mat(n, w),
    R;
  try {
    R = await Ge(n, b(f), e, s, l);
  } finally {
    F4e(f, w?.result, R);
  }
  return R !== void 0;
}
function Ve(n) {
  let e = new Set(n.filter(item => item.status !== "completed").map(item => item.id));
  return n.find(item => {
    if (item.status !== "pending") return !1;
    if (item.owner) return !1;
    return item.blockedBy.every(item => !e.has(item));
  });
}
function He(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
  if (n.description) e += `

${n.description}`;
  return e;
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
      return;
    }
    return await YEe(n, f.id, {
      status: "in_progress"
    }, w), t(`[inProcessRunner] Claimed task #${f.id}: ${f.subject}`), He(f);
  } catch (error) {
    t(`[inProcessRunner] Error checking task list: ${error}`);
    return;
  }
}
async function Ie(n, e, s, w, l, roster) {
  let R;
  try {
    R = await gNe(n.agentName, n.teamName, w, {
      throwOnUnknownReadError: !0
    }), l.readFailures = 0;
  } catch (error) {
    return l.readFailures++, t(`[inProcessRunner] ${n.agentName} could not read mailbox (${l.readFailures} consecutive): ${error}`, {
      level: "warn"
    }), null;
  }
  let u = Wae(R.filter(item => item && !item.read), YL(n.agentName, n.teamName), {
      roster: roster,
      isPaneTeammate: !1
    }),
    C = r => u.get(r) === "forged",
    K = new Set(R.filter(item => item && !item.read).map(e0));
  for (let r of l.consumedUnmarked) if (!K.has(r)) l.consumedUnmarked.delete(r);
  let V = async r => {
      let T = await _ke(r, {
          provenanceOf: g => u.get(g) ?? "unverifiable",
          agentId: n.resumableAgentId ?? n.agentId
        }),
        P = new Set(T.map(e0));
      for (let g of r) {
        let a = e0(g);
        if (!P.has(a)) l.consumedUnmarked.add(a);
      }
      return T;
    },
    h = -1,
    request = null;
  for (let r = 0; r < R.length; r++) {
    let T = R[r];
    if (T && !T.read && !C(T)) {
      let P = $4e(T.text),
        a = (u.get(T) === "verified" || T.from === mi || pxr(T.from, roster) !== void 0) && P?.from === T.from ? P : null;
      if (a) {
        h = r, request = a;
        break;
      }
    }
  }
  if (h !== -1) {
    if (l.count > 0) {
      let P = R.filter((item, index) => !item.read && index !== h && (C(item) || !oI(item.text)) && !l.deliveredUnmarked.has(e0(item)) && !l.consumedUnmarked.has(e0(item)));
      if (P.length > 0) {
        for (let S of P) l.deliveredUnmarked.add(e0(S));
        let g = await wge(n.agentName, n.teamName, P, w);
        if (g) l.count = 0, l.reported = !1, l.deliveredUnmarked.clear();else if (!l.reported) l.reported = !0, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
        t(`[inProcessRunner] ${n.agentName} delivering ${P.length} held message(s) ahead of a shutdown_request${g ? "" : " (mark still not landed)"}`, {
          level: g ? "debug" : "warn"
        });
        let messages = await V(P);
        if (messages.length > 0) return {
          type: "new_messages",
          messages: messages
        };
      }
    }
    let r = R[h],
      T = U(R.slice(0, h), P => !P.read);
    return t(`[inProcessRunner] ${n.agentName} received shutdown request from ${request?.from} (prioritized over ${T} unread messages)`), await V1n(n.agentName, n.teamName, r, w), {
      type: "shutdown_request",
      request: request,
      originalMessage: r.text,
      entryFrom: r.from
    };
  }
  let N = [],
    x = [];
  for (let r of R) {
    if (!r || r.read) continue;
    if (!C(r) && oI(r.text)) N.push(r);else if (!l.consumedUnmarked.has(e0(r))) x.push(r);
  }
  let message_4 = null;
  if (N.length > 0) {
    for (let T of N) {
      let P = p0t(T.text);
      if (P && T.from === mi) {
        let g = ero(e, P, s, w);
        if (g) t(`[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${g.approved}`), message_4 = m0t(g);else t(`[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue;
      }
      if (f0t(T.text)) {
        t(`[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, {
          level: "warn"
        });
        continue;
      }
      t(`[inProcessRunner] ${n.agentName} dropping protocol frame from ${T.from}: ${T.text.substring(0, 80)}`, {
        level: "warn"
      });
    }
    if (!(await wge(n.agentName, n.teamName, N, w))) t(`[inProcessRunner] ${n.agentName} could not mark ${N.length} protocol frame(s) read; retrying next poll`, {
      level: "warn"
    });
  }
  if (message_4) return {
    type: "new_message",
    message: message_4,
    from: mi
  };
  if (x.length > 0) {
    if (await wge(n.agentName, n.teamName, x, w)) l.count = 0, l.reported = !1, l.deliveredUnmarked.clear();else {
      let P = ++l.count;
      if (P < Sge) return t(`[inProcessRunner] ${n.agentName} could not mark ${x.length} message(s) read (${P}/${Sge}); delivery retried next poll`, {
        level: "warn"
      }), null;
      if (t(`[inProcessRunner] ${n.agentName} could not mark ${x.length} message(s) read for ${P} poll(s); delivering the batch unmarked`, {
        level: "warn"
      }), !l.reported) l.reported = !0, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
      for (let g of x) l.deliveredUnmarked.add(e0(g));
    }
    t(`[inProcessRunner] ${n.agentName} draining ${x.length} message(s) from ${L(x.map(item => item.from)).join(", ")}`);
    let messages_2 = await V(x);
    if (messages_2.length === 0) return null;
    return {
      type: "new_messages",
      messages: messages_2
    };
  }
  if (l.count > 0) l.count = 0, l.reported = !1, l.deliveredUnmarked.clear();
  return null;
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
      return j(s, a => ({
        ...a,
        pendingUserMessages: a.pendingUserMessages.slice(1)
      }), l), t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${N})`), {
        type: "new_message",
        message: g.text,
        origin: g.origin,
        from: "user"
      };
    }
    let r = n.resumableAgentId !== void 0 && fZe(n.resumableAgentId, l),
      T = K || I?.type === "in_process_teammate" && I.awaitingPlanApproval || x.viewingAgentTaskId === s || OPt(x.tasks, s) || r;
    if (T) h = Date.now();
    if (K && I?.type === "in_process_teammate" && I.evictAfter !== void 0) j(s, g => ({
      ...g,
      evictAfter: void 0
    }), l);
    if (I?.type === "in_process_teammate" && I.evictAfter !== void 0 && (r && I.evictAfter <= Date.now() + he || B && !r)) j(s, g => ({
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
        };
      }
      continue;
    }
    t(`[inProcessRunner] ${n.agentName} poll #${N}: checking mailbox`);
    try {
      let g = await Ie(n, s, l, V, C, w().teamContext?.teammates);
      if (g) return g;
      if (C.count > 0 && C.readFailures < Sge) {
        h = Date.now();
        let a = w().tasks[s];
        if (a?.type === "in_process_teammate" && a.evictAfter !== void 0) j(s, S => ({
          ...S,
          evictAfter: Date.now() + yR
        }), l);
        continue;
      }
    } catch (error) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${error}`);
    }
    let message_5 = await qe(f, n.agentName, u, V);
    if (message_5) return {
      type: "new_message",
      message: message_5,
      from: "task-list"
    };
    if (fR()) {
      if (!T && Date.now() - h >= Yqe) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${Yqe}ms (poll #${N})`), {
        type: "idle_timeout"
      };
    }
  }
  return t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${N})`), {
    type: "aborted"
  };
}
async function Je(n) {
  let {
      identity: identity,
      taskId: taskId,
      prompt: w,
      description: l,
      agentDefinition: agentDefinition,
      teammateContext: teammateContext,
      toolUseContext: toolUseContext,
      abortController: abortController,
      model: model,
      systemPrompt: systemPrompt,
      systemPromptMode: systemPromptMode,
      allowedTools: allowedTools,
      allowPermissionPrompts: allowPermissionPrompts,
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
    S = lsn(taskId),
    q = {
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
      depth: Sd(toolUseContext.agentContext),
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
      tools: F,
      mainLoopModel: mainLoopModel
    } = toolUseContext.rootToolSurface,
    Z;
  if (systemPromptMode === "replace" && systemPrompt) Z = systemPrompt;else {
    let Y = [...(await SE(F, mainLoopModel, {
      teammate: !0
    })).filter(item => item !== _$), Onr];
    if (agentDefinition) {
      let H = agentDefinition.getSystemPrompt({
        toolUseContext: toolUseContext,
        primedAgentMemory: await Y3e(agentDefinition, toolUseContext.storageV5)
      });
      if (H) Y.push(`
# Custom Agent Instructions
${H}`);
      if (agentDefinition.memory) i("tengu_agent_memory_loaded", {
        ...!1,
        scope: c(agentDefinition.memory),
        source: y("in-process-teammate")
      });
    }
    if (systemPromptMode === "append" && systemPrompt) Y.push(systemPrompt);
    Z = Y.join(`
`);
  }
  let hasTaskListTools = teammateContext.hasTaskListTools,
    ge = {
      agentType: identity.agentName,
      whenToUse: `In-process teammate: ${identity.agentName}`,
      getSystemPrompt: () => Z,
      tools: agentDefinition?.tools ? L([...agentDefinition.tools, lo, ...(hasTaskListTools ? [Ek, MB, Sw, Tk] : [])]) : ["*"],
      source: "projectSettings",
      permissionMode: "default",
      ...(agentDefinition?.model && {
        model: agentDefinition.model
      }),
      ...(agentDefinition?.omitClaudeMd && {
        omitClaudeMd: !0
      })
    },
    E = resumeMessages ? [...resumeMessages] : [],
    recordedUuids = new Set(resumeMessages?.map(A => A.uuid)),
    W = {
      taskKind: "in_process_teammate",
      teamName: identity.teamName,
      color: identity.color,
      planModeRequired: identity.planModeRequired,
      ...(agentDefinition && {
        customAgentType: agentDefinition.agentType
      }),
      ...(model && {
        model: model
      })
    },
    content_2 = l0t({
      from: initialFrom ?? mi,
      text: w,
      summary: l
    }),
    content = content_2,
    origin = void 0,
    fe = !1,
    hold_evict = !1,
    ke = (resumeMessages?.length ?? 0) > 0,
    Ne = !1,
    ye = resumeMessages ? Jje(resumeMessages).result : void 0,
    Pe = !1,
    Ee = async A => {
      switch (hold_evict = !1, A.type) {
        case "shutdown_request":
          t(`[inProcessRunner] ${identity.agentId} received shutdown request - passing to model`), content = l0t({
            from: typeof A.entryFrom === "string" && A.entryFrom !== "" ? A.entryFrom : jy,
            text: Sat(Psn(A.originalMessage, A.entryFrom) ?? A.originalMessage, A.entryFrom)
          }), origin = void 0, _En(taskId, Ce({
            content: content
          }), taskRegistry);
          break;
        case "new_message":
          if (t(`[inProcessRunner] ${identity.agentId} received new message from ${A.from}`), A.from === "user") content = A.message, origin = A.origin;else content = l0t({
            from: A.from,
            text: A.message,
            color: A.color,
            summary: A.summary
          }), origin = void 0, _En(taskId, Ce({
            content: content
          }), taskRegistry);
          break;
        case "new_messages":
          t(`[inProcessRunner] ${identity.agentId} received ${A.messages.length} drained message(s)`), content = XEe(A.messages, {
            recipientIsLead: !1
          }), origin = void 0, _En(taskId, Ce({
            content: content
          }), taskRegistry);
          break;
        case "aborted":
          t(`[inProcessRunner] ${identity.agentId} aborted while waiting`), fe = !0;
          break;
        case "idle_timeout":
          if (t(`[inProcessRunner] ${identity.agentId} idle timeout \u2014 exiting loop`), !standalone) toolUseContext.agentLifecycle.setTeammate(identity.agentId, void 0), await o0t(identity.teamName, identity.agentId, {
            onlyIfJoinedBefore: Date.now()
          }, toolUseContext.storageV5);
          fe = !0;
          break;
      }
    };
  if (!standalone) await qe(identity.parentSessionId, identity.agentName, hasTaskListTools, toolUseContext.storageV5);
  try {
    taskRegistry.updateTranscript(taskId, M => {
      let messages_3 = M.messages;
      if (resumeMessages) for (let be of resumeMessages.slice(-$$n)) messages_3 = lLe(messages_3, be);
      return {
        ...M,
        messages: lLe(messages_3, Ce({
          content: content_2
        }))
      };
    });
    let contentReplacementState = toolUseContext.contentReplacementState ? resumeReplacementState ?? Mtn() : void 0,
      stickyBetas = UY(),
      retryWake = Me();
    while (!abortController.signal.aborted && !fe) {
      t(`[inProcessRunner] ${identity.agentId} processing prompt: ${content.substring(0, 50)}...`);
      let M = Hn();
      M.signal.addEventListener("abort", () => {
        Pe = !0;
      }), j(taskId, o => ({
        ...o,
        currentWorkAbortController: M,
        retryWake: retryWake
      }), taskRegistry);
      let X = Ce({
          content: content,
          origin: origin
        }),
        promptMessages = [X],
        ce = E,
        $e = Zh(E, Jy(mainLoopModel));
      if ($e > oVe(hp(mainLoopModel), FRn(toolUseContext.options.autoCompactWindow))) {
        t(`[inProcessRunner] ${identity.agentId} compacting history (${$e} tokens)`);
        let toolUseContext_2 = {
          ...toolUseContext,
          abortController: abortController,
          agentId: go(identity.agentId),
          readFileState: mhe(toolUseContext.readFileState, {
            stripSeededFromContext: !0
          }),
          memorySelector: I8(),
          loadedNestedMemoryPaths: {},
          onCompactEvent: void 0,
          onRetryStatus: S.setRetryStatus
        };
        try {
          let v = await wNn(E, toolUseContext_2, {
            systemPrompt: ei([]),
            userContext: {},
            systemContext: {},
            toolUseContext: toolUseContext_2,
            forkContextMessages: E,
            advisorModel: toolUseContext_2.getAppState().advisorModel
          }, !0, {
            isAutoCompact: !0
          });
          if (ce = xM(v), contentReplacementState) contentReplacementState = Mtn();
          E.length = 0, E.push(...ce), recordedUuids.clear(), taskRegistry.updateTranscript(taskId, k => ({
            ...k,
            messages: [...ce, X]
          }));
        } catch (error) {
          if (error instanceof Error && error.message.startsWith(t3)) t(`[inProcessRunner] ${identity.agentId} compaction blocked by PreCompact hook; continuing uncompacted`), Ne = !0;else if (abortController.signal.aborted || error instanceof Error && error.message === content_4) {
            t(`[inProcessRunner] ${identity.agentId} aborted during compaction`), fe = !0;
            break;
          } else throw error;
        }
      }
      let forkContextMessages = ce.length > 0 ? [...ce] : void 0;
      E.push(X), ye = void 0, Pe = M.signal.aborted;
      let ue = T7t(),
        _e = taskRegistry.get(taskId);
      if (_e !== void 0 && "progress" in _e && _e.progress !== void 0) ue.latestInputTokens = _e.progress.tokenCount;
      let Be = A7t(F),
        messages_4 = [],
        we = toolUseContext.getAppState().tasks[taskId],
        permissionMode = we && we.type === "in_process_teammate" ? we.permissionMode : "default",
        agentDefinition_2 = {
          ...ge,
          permissionMode: permissionMode
        },
        Ue = !1,
        ne = null;
      if (await VLo(teammateContext, async () => WE(agentContext, async () => {
        j(taskId, o => ({
          ...o,
          status: "running",
          isIdle: !1,
          idleNotificationOwedToLead: void 0,
          evictAfter: void 0,
          evictAfterHeldBySibling: void 0
        }), taskRegistry), taskRegistry.updateTranscript(taskId, o => ({
          ...o,
          turnStartTime: Date.now()
        })), S.setMode("responding");
        for await (let o of rk({
          agentDefinition: agentDefinition_2,
          promptMessages: promptMessages,
          toolUseContext: toolUseContext,
          canUseTool: Ke(identity, M, v => {
            j(taskId, k => ({
              ...k,
              totalPausedMs: (k.totalPausedMs ?? 0) + v
            }), taskRegistry);
          }, tie(setAppState), () => toolUseContext.getAppState().teamContext?.teammates),
          isAsync: !0,
          canShowPermissionPrompts: allowPermissionPrompts ?? !0,
          forkContextMessages: forkContextMessages,
          querySource: "agent:custom",
          override: {
            abortController: M,
            agentContext: agentContext,
            onRetryStatus: S.setRetryStatus,
            subscribeRetryWake: retryWake.subscribe,
            ...(identity.resumableAgentId && {
              agentId: identity.resumableAgentId
            })
          },
          ...(identity.resumableAgentId && {
            recordedUuids: recordedUuids,
            name: identity.agentName,
            description: l,
            extraMetadata: {
              ...W,
              permissionMode: permissionMode
            }
          }),
          onStreamTokenEstimate: v => {
            R7t(ue, v);
            let progress = xVe(ue);
            j(taskId, O => O.progress?.tokenCount === progress.tokenCount ? O : {
              ...O,
              progress: progress
            }, taskRegistry);
          },
          model: model,
          preserveToolUseResults: !0,
          availableTools: F,
          allowedTools: allowedTools,
          contentReplacementState: contentReplacementState,
          stickyBetas: stickyBetas,
          isTeammate: !0,
          teammateContext: teammateContext
        })) {
          if (abortController.signal.aborted) {
            t(`[inProcessRunner] ${identity.agentId} lifecycle aborted`);
            break;
          }
          if (M.signal.aborted) {
            if (t(`[inProcessRunner] ${identity.agentId} current work aborted (Escape pressed)`), o.type === "assistant" || o.type === "user" || o.type === "attachment" && sv(o)) messages_4.push(o), E.push(o), ne = Ffe(E, o, ne);
            Ue = !0;
            break;
          }
          if (o.type === "spinner_mode") {
            S.setMode(o.mode);
            continue;
          }
          if (o.type === "api_metrics") continue;
          if (o.type === "query_model_change") continue;
          if (o.type === "set_in_progress_tool_use_ids") {
            if (o.op.action !== "remove") continue;
            let ids = o.op.ids;
            taskRegistry.updateTranscript(taskId, O => {
              let inProgressToolUseIDs = new Set(O.inProgressToolUseIDs),
                re = !1;
              for (let ve of ids) if (inProgressToolUseIDs.delete(ve)) re = !0;
              return re ? {
                ...O,
                inProgressToolUseIDs: inProgressToolUseIDs
              } : O;
            });
            continue;
          }
          if (o.type === "system" && o.subtype === "api_error") continue;
          messages_4.push(o), E.push(o), ne = Ffe(E, o, ne), C7t(ue, o, Be, F);
          let progress_2 = xVe(ue);
          j(taskId, k => ({
            ...k,
            progress: progress_2
          }), taskRegistry), taskRegistry.updateTranscript(taskId, k => {
            let inProgressToolUseIDs_2 = k.inProgressToolUseIDs;
            if (o.type === "assistant") {
              for (let ee of o.message.content) if (ee.type === "tool_use") inProgressToolUseIDs_2 = new Set([...inProgressToolUseIDs_2, ee.id]);
            } else if (o.type === "user") {
              let content_3 = o.message.content;
              if (Array.isArray(content_3)) {
                for (let re of content_3) if (typeof re === "object" && "type" in re && re.type === "tool_result") {
                  let ve = new Set(inProgressToolUseIDs_2);
                  ve.delete(re.tool_use_id), inProgressToolUseIDs_2 = ve;
                }
              }
            }
            return {
              ...k,
              messages: g_o(k.messages, o),
              inProgressToolUseIDs: inProgressToolUseIDs_2
            };
          });
        }
        return {
          success: !0,
          messages: messages_4
        };
      })).finally(() => {
        if (ne) E.push(...ne.preserved), ne = null;
      }), j(taskId, o => ({
        ...o,
        currentWorkAbortController: void 0
      }), taskRegistry), abortController.signal.aborted) break;
      let ie = Ue || M.signal.aborted;
      if (ie) {
        Pe = !0, t(`[inProcessRunner] ${identity.agentId} work interrupted, returning to idle`);
        let o = Yo({
          content: content_4
        });
        taskRegistry.updateTranscript(taskId, v => ({
          ...v,
          messages: lLe(v.messages, o)
        }));
      }
      ke ||= messages_4.some(item => item.type === "assistant" && !item.isApiErrorMessage || item.type === "user" && !item.isMeta);
      let se = !ie ? cwr(messages_4) : void 0;
      if (hold_evict = se?.isTransient === !0 && !standalone && ke, !standalone && !ie) {
        let o = null;
        try {
          o = await Ie(identity, taskId, taskRegistry, toolUseContext.storageV5, q, toolUseContext.getAppState().teamContext?.teammates);
          while (o === null && q.count > 0 && q.readFailures < Sge && !abortController.signal.aborted) await Q(he), o = await Ie(identity, taskId, taskRegistry, toolUseContext.storageV5, q, toolUseContext.getAppState().teamContext?.teammates);
        } catch (error) {
          t(`[inProcessRunner] ${identity.agentName} turn-end mailbox check failed: ${error}`);
        }
        if (o) {
          try {
            let {
              result: result_2,
              summary: summary
            } = Jje(E, {
              emitTelemetry: !0
            });
            if (result_2 !== void 0 || se !== void 0) {
              if ((await Re(identity.agentName, identity.color, identity.teamName, {
                idleReason: se !== void 0 ? "failed" : void 0,
                summary: summary,
                failureReason: se?.reason,
                result: result_2,
                senderReachable: !0
              }, toolUseContext.storageV5)) && result_2 !== void 0) ye = result_2;
            }
          } catch (error) {
            t(`[inProcessRunner] ${identity.agentName} turn-end result delivery failed: ${error}`);
          }
          await Ee(o);
          continue;
        }
      }
      if (se?.isTransient) i("tengu_teammate_transient_turn_failure", {
        error_kind: c(se.errorKind ?? "unknown"),
        hold_evict: hold_evict
      });
      let De = toolUseContext.getAppState().tasks[taskId],
        Oe = !(De?.type === "in_process_teammate" && De.isIdle) && !standalone;
      j(taskId, o => (o.onIdleCallbacks?.forEach(v => v()), {
        ...o,
        isIdle: !0,
        idleNotificationOwedToLead: Oe && Te() || o.idleNotificationOwedToLead,
        evictAfter: hold_evict ? void 0 : Date.now() + yR,
        onIdleCallbacks: []
      }), taskRegistry);
      let failureReason = se?.reason;
      if (Oe) {
        let o = Jje(E, {
            emitTelemetry: !ie
          }),
          result_3 = ie ? void 0 : o.result,
          k = await Re(identity.agentName, identity.color, identity.teamName, {
            idleReason: ie ? "interrupted" : failureReason !== void 0 ? "failed" : "available",
            summary: o.summary,
            failureReason: failureReason,
            result: result_3,
            senderReachable: failureReason === void 0 || hold_evict
          }, toolUseContext.storageV5);
        if (result_3 !== void 0 && k) ye = result_3;
        if (!k) j(taskId, O => O.idleNotificationOwedToLead ? {
          ...O,
          idleNotificationOwedToLead: void 0
        } : O, taskRegistry);
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${identity.agentName}`);
      t(`[inProcessRunner] ${identity.agentId} finished prompt, waiting for next`);
      let We = await Ye(identity, abortController, taskId, toolUseContext.getAppState, taskRegistry, identity.parentSessionId, standalone, hasTaskListTools, q, hold_evict, toolUseContext.storageV5);
      await Ee(We);
    }
    let ae = !1,
      toolUseId_2;
    if (j(taskId, M => {
      if (M.status !== "running") return ae = !0, M;
      return toolUseId_2 = M.toolUseId, M.onIdleCallbacks?.forEach(X => X()), {
        ...M,
        status: "completed",
        notified: !0,
        endTime: Date.now(),
        pendingUserMessages: [],
        abortController: void 0,
        currentWorkAbortController: void 0,
        retryWake: void 0,
        onIdleCallbacks: []
      };
    }, taskRegistry), !ae) taskRegistry.updateTranscript(taskId, M => ({
      ...M,
      messages: M.messages.length ? [M.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set()
    }));
    if (Tp(taskId), taskRegistry.evictTerminal(taskId), !ae) Si(taskId, "completed", {
      toolUseId: toolUseId_2,
      summary: identity.agentId
    });
    if (Yke(identity.agentId), Ne) p("swarm_in_process_run", "compact_blocked_by_hook");else _("swarm_in_process_run");
    return {
      success: !0,
      messages: E
    };
  } catch (A) {
    let Y = A instanceof Error ? A.message : "Unknown error";
    t(`[inProcessRunner] Agent ${identity.agentId} failed: ${Y}`);
    let H = !1,
      toolUseId_3;
    if (j(taskId, D => {
      if (D.status !== "running") return H = !0, D;
      return toolUseId_3 = D.toolUseId, D.onIdleCallbacks?.forEach(M => M()), {
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
      };
    }, taskRegistry), !H) taskRegistry.updateTranscript(taskId, D => ({
      ...D,
      messages: D.messages.length ? [D.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set()
    }));
    if (Tp(taskId), taskRegistry.evictTerminal(taskId), !H) Si(taskId, "failed", {
      toolUseId: toolUseId_3,
      summary: identity.agentId
    });
    if (!standalone) {
      let result_4;
      try {
        result_4 = Pe ? void 0 : UJr(E);
      } catch (error) {
        t(`[inProcessRunner] ${identity.agentName} failed to extract partial result: ${error}`);
      }
      if (result_4 !== void 0 && result_4 === ye) result_4 = void 0;
      await Re(identity.agentName, identity.color, identity.teamName, {
        idleReason: "failed",
        completedStatus: "failed",
        failureReason: Y,
        result: result_4
      }, toolUseContext.storageV5);
    }
    return Yke(identity.agentId), m("swarm_in_process_run", "agent_loop_failed"), {
      success: !1,
      error: Y,
      messages: E
    };
  }
}
function Inr(n) {
  let agentId = n.identity.agentId;
  Je(n).catch(s => {
    t(`[inProcessRunner] Unhandled error in ${agentId}: ${s}`);
  });
}
export { Inr };