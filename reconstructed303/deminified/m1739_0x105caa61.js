// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _a, yh, Ox, hp } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Vr } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Zne, F, L, we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { QO } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { zn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { _i } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { Oa } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { VO as content_3 } from "B:/~BUN/root/chunk-qp0344nb.js";
import { S2s } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { cUn } from "B:/~BUN/root/chunk-0p489043.js";
import { yft, Rj } from "B:/~BUN/root/chunk-c44qc88s.js";
import { Vd, t6, kf, RSe, Uz, yse, s6, i6, Tse, rM, KLn, YLn, XLn, Qat, Zxt, ex, QHe, ppe, a6e, vxe, J1, fU, hbr, g$e, cw, rG as message, Vse, BQt, Os, Re } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { lae } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { c3 } from "B:/~BUN/root/chunk-ses0c36n.js";
import { Pp } from "B:/~BUN/root/chunk-7j5tvnqj.js";
import { PC } from "B:/~BUN/root/chunk-1xwk1cwp.js";
import { rvr, G6e, ISs, $R, Adt, P7t } from "B:/~BUN/root/chunk-k382hx6g.js";
import { xUe } from "B:/~BUN/root/chunk-r1z1wgpe.js";
import { Cnn } from "B:/~BUN/root/chunk-p7n9drc0.js";
import { Nfe, uD, KOs, mko, Pve, vj, S8e, Zw, RRr, mOe, wH, gOe, Nnn, TBe, fw, qWn, fDt, _pt, gDt, bpt, Unn, Bnn, vN, jnn, bDt } from "B:/~BUN/root/chunk-74f4ssah.js";
import { Fk, PT, Q6 } from "B:/~BUN/root/chunk-f06s8ws5.js";
import { nUn } from "B:/~BUN/root/chunk-m42n0wc9.js";
import { Iqt, Uqt, Bqt, R7o, xrt, xEn } from "B:/~BUN/root/chunk-ty76a0fm.js";
import { tss } from "B:/~BUN/root/chunk-aatsy169.js";
import { Ddr, AR } from "B:/~BUN/root/chunk-fbgs9vjp.js";
import { u8r } from "B:/~BUN/root/chunk-xkkzvdyh.js";
import { Wsr } from "B:/~BUN/root/chunk-j3m1ners.js";
import { qPn, Q6t, Z6t } from "B:/~BUN/root/chunk-d66nsegc.js";
import { aDt, DWn, LWn } from "B:/~BUN/root/chunk-25qdy3nw.js";
import { Rn } from "B:/~BUN/root/chunk-hwnj8m4g.js";
var Ve = 500,
  Se = 500;
function He(n, e, s, v, a) {
  return async (I, f, S, y, toolUseId, H) => {
    let result = H ?? (await Tse(I, f, {
      ...S,
      asksNoHost: !0
    }, y, toolUseId, t6, void 0, v));
    if (result.behavior !== "ask") return result;
    if (result.hostDisplay !== void 0) return m("permission_host_worded_ask", "teammate_lane"), ppe(I.name, "a teammate's permission request", {
      hostWorded: !0,
      remedy: "Ask the team lead to run this tool call itself. When the team lead runs it, the permission prompt shows the full disclosure."
    });
    let input = result.updatedInput ?? f;
    if (e.signal.aborted) return {
      behavior: "ask",
      message: message
    };
    let toolPermissionContext = le(S),
      E = () => I.description(input, {
        isNonInteractiveSession: S.options.isNonInteractiveSession,
        toolPermissionContext: toolPermissionContext,
        tools: S.options.tools
      });
    if (S.requestDialog !== void 0) {
      let permissionContextSetter = xEn.of(S.session).permissionContextSetter,
        ctx = Uqt(I, f, S, y, toolUseId, v, B => {
          permissionContextSetter?.(B, {
            preserveMode: !0
          });
        }),
        T = await Iqt({
          ctx: ctx,
          updatedInput: result.updatedInput,
          suggestions: result.suggestions,
          permissionMode: toolPermissionContext.mode,
          askSuppressesAlwaysAllowRule: result.suppressAlwaysAllowRule === !0,
          askIsPersonOnly: result.personOnly === !0
        });
      if (T) return T;
      if (e.signal.aborted) return {
        behavior: "ask",
        message: message
      };
      let description = await E();
      if (e.signal.aborted) return {
        behavior: "ask",
        message: message
      };
      let d = Date.now();
      try {
        return await new Promise((B, V) => {
          Bqt({
            ctx: ctx,
            description: description,
            result: result,
            awaitAutomatedChecksBeforeDialog: !0
          }, B).catch(V);
        });
      } finally {
        s(Date.now() - d);
      }
    }
    if (a6e(result) || result.forcedByCaller === !0) return ppe(I.name, "the teammate mailbox (a static-description wire)", {
      hostWorded: result.hostDisplay !== void 0
    });
    let description_2 = await E();
    if (e.signal.aborted) return {
      behavior: "ask",
      message: message
    };
    return new Promise(o => {
      let u = DWn({
        toolName: I.name,
        toolUseId: toolUseId,
        input: input,
        description: description_2,
        permissionSuggestions: result.suggestions,
        workerId: n.agentId,
        workerName: n.agentName,
        workerColor: n.color,
        teamName: n.teamName
      });
      qPn({
        requestId: u.id,
        toolUseId: toolUseId,
        toolName: u.toolName,
        inputDigest: aDt(u.toolName, input),
        onAllow(d, B, V, contentBlocks) {
          R();
          let z = c3(B, void 0, le(S)),
            ee = I.suppressesAllPermissionUpdates?.(input) === !0 ? i6(z) : I.suppressesAlwaysAllowRule?.(input) === !0 || result.suppressAlwaysAllowRule === !0 ? s6(z, I, le(S)) : z;
          Rj(ee, S.storageV5).catch(l);
          let updatedInput = d && Object.keys(d).length > 0 ? d : input;
          o({
            behavior: "allow",
            updatedInput: updatedInput,
            userModified: !1,
            ...(contentBlocks && contentBlocks.length > 0 && {
              contentBlocks: contentBlocks
            })
          });
        },
        onReject(d, contentBlocks_2) {
          R();
          let message_2 = d ? `${Vse}${d}` : message;
          o({
            behavior: "ask",
            message: message_2,
            contentBlocks: contentBlocks_2
          });
        },
        onRefuse(message_3) {
          R(), o({
            behavior: "ask",
            message: message_3
          });
        },
        onUnboundVerdict() {}
      }), LWn(u, S.storageV5).then(d => {
        if (!d) R(), o({
          behavior: "ask",
          message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
        });
      });
      let P = setInterval(async (d, B, V, G, z, ee, ne) => {
          if (d.signal.aborted) {
            B(), V({
              behavior: "ask",
              message: message
            });
            return;
          }
          let ae = await S8e(G.agentName, G.teamName, ee),
            fe = Pve(ae.filter(item => item && !item.read), vj(G.agentName, G.teamName), {
              roster: ne(),
              isPaneTeammate: !1
            });
          for (let K of ae) if (K && !K.read && fe.get(K) !== "forged") {
            let W = gDt(K.text);
            if (W && W.request_id === z.id) {
              if (await RRr(G.agentName, G.teamName, K, ee), K.from !== Oa) {
                t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${K.from}`, {
                  level: "warn"
                });
                continue;
              }
              if (W.subtype === "success") Z6t({
                requestId: W.request_id,
                toolUseId: W.tool_use_id,
                approvedRequest: W.approved_request,
                decision: "approved",
                updatedInput: W.response?.updated_input,
                permissionUpdates: W.response?.permission_updates
              });else Z6t({
                requestId: W.request_id,
                toolUseId: W.tool_use_id,
                approvedRequest: W.approved_request,
                decision: "rejected",
                feedback: W.error
              });
              return;
            }
          }
        }, Ve, e, R, o, n, u, S.storageV5, a),
        T = () => {
          R(), o({
            behavior: "ask",
            message: message
          });
        };
      e.signal.addEventListener("abort", T, {
        once: !0
      });
      function R() {
        clearInterval(P), Q6t(u.id), e.signal.removeEventListener("abort", T);
      }
    });
  };
}
function j(n, e, s) {
  s.update(n, v => v.type === "in_process_teammate" ? e(v) : v);
}
async function Ye(n, text, color, v, a) {
  return Zw(Oa, {
    from: n,
    text: text,
    timestamp: new Date().toISOString(),
    color: color
  }, v, a);
}
async function Ie(n, e, s, v, a) {
  let I = fDt(n, v),
    f;
  try {
    f = await Ye(n, _(I), e, s, a);
  } finally {
    _pt(I, v?.result, f);
  }
  return f !== void 0;
}
function Je(n) {
  let e = new Set(n.filter(item => item.status !== "completed").map(item => item.id));
  return n.find(item => {
    if (item.status !== "pending") return !1;
    if (item.owner) return !1;
    return item.blockedBy.every(item => !e.has(item));
  });
}
function ze(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: 

 ${n.subject}`;
  if (n.description) e += `

${n.description}`;
  return e;
}
async function Le(n, e, s, v) {
  if (!s) return;
  try {
    let a = await uD(n, v),
      I = Je(a);
    if (!I) return;
    let f = await KOs(n, I.id, e, void 0, v);
    if (!f.success) {
      t(`[inProcessRunner] Failed to claim task #${I.id}: ${f.reason}`);
      return;
    }
    return await Nfe(n, I.id, {
      status: "in_progress"
    }, v), t(`[inProcessRunner] Claimed task #${I.id}: ${I.subject}`), ze(I);
  } catch (error) {
    t(`[inProcessRunner] Error checking task list: ${error}`);
    return;
  }
}
async function ke(n, e, s, v, a, roster) {
  let f;
  try {
    f = await S8e(n.agentName, n.teamName, v, {
      throwOnUnknownReadError: !0
    }), a.readFailures = 0;
  } catch (error) {
    return a.readFailures++, t(`[inProcessRunner] ${n.agentName} could not read mailbox (${a.readFailures} consecutive): ${error}`, {
      level: "warn"
    }), null;
  }
  let S = Pve(f.filter(item => item && !item.read), vj(n.agentName, n.teamName), {
      roster: roster,
      isPaneTeammate: !1
    }),
    y = o => S.get(o) === "forged",
    D = new Set(f.filter(item => item && !item.read).map(wH));
  for (let o of a.consumedUnmarked) if (!D.has(o)) a.consumedUnmarked.delete(o);
  let H = async o => {
      let u = await g$e(o, {
          provenanceOf: T => S.get(T) ?? "unverifiable",
          agentId: n.resumableAgentId ?? n.agentId
        }),
        P = new Set(u.map(wH));
      for (let T of o) {
        let R = wH(T);
        if (!P.has(R)) a.consumedUnmarked.add(R);
      }
      return u;
    },
    A = -1,
    request = null;
  for (let o = 0; o < f.length; o++) {
    let u = f[o];
    if (u && !u.read && !y(u)) {
      let P = bpt(u.text),
        R = (S.get(u) === "verified" || u.from === Oa || mko(u.from, roster) !== void 0) && P?.from === u.from ? P : null;
      if (R) {
        A = o, request = R;
        break;
      }
    }
  }
  if (A !== -1) {
    if (a.count > 0) {
      let P = f.filter((item, index) => !item.read && index !== A && (y(item) || !vN(item.text)) && !a.deliveredUnmarked.has(wH(item)) && !a.consumedUnmarked.has(wH(item)));
      if (P.length > 0) {
        for (let d of P) a.deliveredUnmarked.add(wH(d));
        let T = await gOe(n.agentName, n.teamName, P, v);
        if (T) a.count = 0, a.reported = !1, a.deliveredUnmarked.clear();else if (!a.reported) a.reported = !0, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
        t(`[inProcessRunner] ${n.agentName} delivering ${P.length} held message(s) ahead of a shutdown_request${T ? "" : " (mark still not landed)"}`, {
          level: T ? "debug" : "warn"
        });
        let messages = await H(P);
        if (messages.length > 0) return {
          type: "new_messages",
          messages: messages
        };
      }
    }
    let o = f[A],
      u = F(f.slice(0, A), P => !P.read);
    return t(`[inProcessRunner] ${n.agentName} received shutdown request from ${request?.from} (prioritized over ${u} unread messages)`), await RRr(n.agentName, n.teamName, o, v), {
      type: "shutdown_request",
      request: request,
      originalMessage: o.text,
      entryFrom: o.from
    };
  }
  let N = [],
    E = [];
  for (let o of f) {
    if (!o || o.read) continue;
    if (!y(o) && vN(o.text)) N.push(o);else if (!a.consumedUnmarked.has(wH(o))) E.push(o);
  }
  let message_4 = null;
  if (N.length > 0) {
    for (let u of N) {
      let P = Unn(u.text);
      if (P && u.from === Oa) {
        let T = tss(e, P, s, v);
        if (T) t(`[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${T.approved}`), message_4 = jnn(T);else t(`[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue;
      }
      if (Bnn(u.text)) {
        t(`[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, {
          level: "warn"
        });
        continue;
      }
      t(`[inProcessRunner] ${n.agentName} dropping protocol frame from ${u.from}: ${u.text.substring(0, 80)}`, {
        level: "warn"
      });
    }
    if (!(await gOe(n.agentName, n.teamName, N, v))) t(`[inProcessRunner] ${n.agentName} could not mark ${N.length} protocol frame(s) read; retrying next poll`, {
      level: "warn"
    });
  }
  if (message_4) return {
    type: "new_message",
    message: message_4,
    from: Oa
  };
  if (E.length > 0) {
    if (await gOe(n.agentName, n.teamName, E, v)) a.count = 0, a.reported = !1, a.deliveredUnmarked.clear();else {
      let P = ++a.count;
      if (P < mOe) return t(`[inProcessRunner] ${n.agentName} could not mark ${E.length} message(s) read (${P}/${mOe}); delivery retried next poll`, {
        level: "warn"
      }), null;
      if (t(`[inProcessRunner] ${n.agentName} could not mark ${E.length} message(s) read for ${P} poll(s); delivering the batch unmarked`, {
        level: "warn"
      }), !a.reported) a.reported = !0, p("swarm_inbox_poll", "worker_mark_read_failed_streak");
      for (let T of E) a.deliveredUnmarked.add(wH(T));
    }
    t(`[inProcessRunner] ${n.agentName} draining ${E.length} message(s) from ${L(E.map(item => item.from)).join(", ")}`);
    let messages_2 = await H(E);
    if (messages_2.length === 0) return null;
    return {
      type: "new_messages",
      messages: messages_2
    };
  }
  if (a.count > 0) a.count = 0, a.reported = !1, a.deliveredUnmarked.clear();
  return null;
}
async function Xe(n, e, s, v, a, I, f, S, y, D = !1, H) {
  t(`[inProcessRunner] ${n.agentName} starting poll loop (abort=${e.signal.aborted})`);
  let A = Date.now(),
    q = !1,
    N = 0;
  while (!e.signal.aborted) {
    if (N > 0) await Y(Se);
    N++;
    let E = v(),
      C = E.tasks[s];
    if (C && C.type === "in_process_teammate" && C.pendingUserMessages.length > 0) {
      let T = C.pendingUserMessages[0];
      return j(s, R => ({
        ...R,
        pendingUserMessages: R.pendingUserMessages.slice(1)
      }), a), t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${N})`), {
        type: "new_message",
        message: T.text,
        origin: T.origin,
        from: "user"
      };
    }
    let o = n.resumableAgentId !== void 0 && QHe(n.resumableAgentId, a),
      u = D || C?.type === "in_process_teammate" && C.awaitingPlanApproval || E.viewingAgentTaskId === s || P7t(E.tasks, s) || o;
    if (u) A = Date.now();
    if (D && C?.type === "in_process_teammate" && C.evictAfter !== void 0) j(s, T => ({
      ...T,
      evictAfter: void 0
    }), a);
    if (C?.type === "in_process_teammate" && C.evictAfter !== void 0 && (o && C.evictAfter <= Date.now() + Se || q && !o)) j(s, T => ({
      ...T,
      evictAfter: Date.now() + $R
    }), a);
    if (q = o, e.signal.aborted) return t(`[inProcessRunner] ${n.agentName} aborted while waiting (poll #${N})`), {
      type: "aborted"
    };
    if (f) {
      if (rM()) {
        if (!u && Date.now() - A >= Adt) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${Adt}ms (poll #${N})`), {
          type: "idle_timeout"
        };
      }
      continue;
    }
    t(`[inProcessRunner] ${n.agentName} poll #${N}: checking mailbox`);
    try {
      let T = await ke(n, s, a, H, y, v().teamContext?.teammates);
      if (T) return T;
      if (y.count > 0 && y.readFailures < mOe) {
        A = Date.now();
        let R = v().tasks[s];
        if (R?.type === "in_process_teammate" && R.evictAfter !== void 0) j(s, d => ({
          ...d,
          evictAfter: Date.now() + $R
        }), a);
        continue;
      }
    } catch (error) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${error}`);
    }
    let message_5 = await Le(I, n.agentName, S, H);
    if (message_5) return {
      type: "new_message",
      message: message_5,
      from: "task-list"
    };
    if (rM()) {
      if (!u && Date.now() - A >= Adt) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${Adt}ms (poll #${N})`), {
        type: "idle_timeout"
      };
    }
  }
  return t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${N})`), {
    type: "aborted"
  };
}
async function Qe(n) {
  let {
      identity: identity,
      taskId: taskId,
      prompt: v,
      description: a,
      spawnedAgentType: spawnedAgentType,
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
    B = cUn(taskId),
    V = {
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
      depth: hp(toolUseContext.agentContext),
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
      tools: z,
      mainLoopModel: mainLoopModel
    } = toolUseContext.rootToolSurface,
    ne;
  if (systemPromptMode === "replace" && systemPrompt) ne = systemPrompt;else {
    let Q = [...(await ex(z, mainLoopModel, {
      teammate: !0
    })).filter(item => item !== QO), u8r];
    if (agentDefinition) {
      let J = agentDefinition.getSystemPrompt({
        toolUseContext: toolUseContext,
        primedAgentMemory: await yft(agentDefinition, toolUseContext.storageV5)
      });
      if (J) Q.push(`
# Custom Agent Instructions
${J}`);
      if (agentDefinition.memory) i("tengu_agent_memory_loaded", {
        ...!1,
        scope: c(agentDefinition.memory),
        source: b("in-process-teammate")
      });
    }
    if (systemPromptMode === "append" && systemPrompt) Q.push(systemPrompt);
    ne = Q.join(`
`);
  }
  let hasTaskListTools = teammateContext.hasTaskListTools,
    fe = [Rn, ...(hasTaskListTools ? [Fk, Q6, PC, PT] : [])],
    disallowedTools = agentDefinition?.disallowedTools?.filter(h => !fe.includes(zn(h).toolName)),
    W = {
      agentType: identity.agentName,
      whenToUse: `In-process teammate: ${identity.agentName}`,
      getSystemPrompt: () => ne,
      tools: agentDefinition?.tools ? L([...agentDefinition.tools, ...fe]) : ["*"],
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
    O = resumeMessages ? [...resumeMessages] : [],
    recordedUuids = new Set(resumeMessages?.map(h => h.uuid)),
    Be = {
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
    content = Nnn({
      from: initialFrom ?? Oa,
      text: v,
      summary: a
    }),
    X = content,
    origin = void 0,
    Te = !1,
    hold_evict = !1,
    Ee = (resumeMessages?.length ?? 0) > 0,
    $e = !1,
    ye = resumeMessages ? xrt(resumeMessages).result : void 0,
    Pe = !1,
    xe = async h => {
      switch (hold_evict = !1, h.type) {
        case "shutdown_request":
          t(`[inProcessRunner] ${identity.agentId} received shutdown request - passing to model`), X = Nnn({
            from: typeof h.entryFrom === "string" && h.entryFrom !== "" ? h.entryFrom : fw,
            text: bDt(qWn(h.originalMessage, h.entryFrom) ?? h.originalMessage, h.entryFrom)
          }), origin = void 0, Wsr(taskId, Re({
            content: X
          }), taskRegistry);
          break;
        case "new_message":
          if (t(`[inProcessRunner] ${identity.agentId} received new message from ${h.from}`), h.from === "user") X = h.message, origin = h.origin;else X = Nnn({
            from: h.from,
            text: h.message,
            color: h.color,
            summary: h.summary
          }), origin = void 0, Wsr(taskId, Re({
            content: X
          }), taskRegistry);
          break;
        case "new_messages":
          t(`[inProcessRunner] ${identity.agentId} received ${h.messages.length} drained message(s)`), X = TBe(h.messages, {
            recipientIsLead: !1
          }), origin = void 0, Wsr(taskId, Re({
            content: X
          }), taskRegistry);
          break;
        case "aborted":
          t(`[inProcessRunner] ${identity.agentId} aborted while waiting`), Te = !0;
          break;
        case "idle_timeout":
          if (t(`[inProcessRunner] ${identity.agentId} idle timeout \u2014 exiting loop`), !standalone) toolUseContext.agentLifecycle.setTeammate(identity.agentId, void 0), await Cnn(identity.teamName, identity.agentId, {
            onlyIfJoinedBefore: Date.now()
          }, toolUseContext.storageV5);
          Te = !0;
          break;
      }
    };
  if (!standalone) await Le(identity.parentSessionId, identity.agentName, hasTaskListTools, toolUseContext.storageV5);
  try {
    taskRegistry.updateTranscript(taskId, M => {
      let messages_3 = M.messages;
      if (resumeMessages) for (let ve of resumeMessages.slice(-rvr)) messages_3 = G6e(messages_3, ve);
      return {
        ...M,
        messages: G6e(messages_3, Re({
          content: content
        }))
      };
    });
    let contentReplacementState = toolUseContext.contentReplacementState ? resumeReplacementState ?? nUn() : void 0,
      stickyBetas = Zne(),
      retryWake = Me();
    while (!abortController.signal.aborted && !Te) {
      t(`[inProcessRunner] ${identity.agentId} processing prompt: ${X.substring(0, 50)}...`);
      let M = mr();
      M.signal.addEventListener("abort", () => {
        Pe = !0;
      }), j(taskId, r => ({
        ...r,
        currentWorkAbortController: M,
        retryWake: retryWake
      }), taskRegistry);
      let Z = Re({
          content: X,
          origin: origin
        }),
        promptMessages = [Z],
        ce = O,
        Ue = kf(O, yh(mainLoopModel));
      if (Ue > Uz(Vd(mainLoopModel), Ddr(toolUseContext.options.autoCompactWindow, W.autoCompactWindow))) {
        t(`[inProcessRunner] ${identity.agentId} compacting history (${Ue} tokens)`);
        let toolUseContext_2 = {
          ...toolUseContext,
          abortController: abortController,
          agentId: identity.resumableAgentId ?? Vr(identity.agentId),
          readFileState: lae(toolUseContext.readFileState, {
            stripSeededFromContext: !0
          }),
          memorySelector: yse(),
          onCompactEvent: void 0,
          onRetryStatus: B.setRetryStatus,
          compactTranscriptUnavailable: !0
        };
        try {
          let w = await hbr(O, toolUseContext_2, {
            systemPrompt: _i([]),
            userContext: {},
            systemContext: {},
            toolUseContext: toolUseContext_2,
            forkContextMessages: O,
            advisorModel: toolUseContext_2.getAppState().advisorModel
          }, !0, {
            isAutoCompact: !0
          });
          if (ce = fU(w), contentReplacementState) contentReplacementState = nUn();
          O.length = 0, O.push(...ce), recordedUuids.clear(), taskRegistry.updateTranscript(taskId, k => ({
            ...k,
            messages: [...ce, Z]
          }));
        } catch (error) {
          if (error instanceof Error && error.message.startsWith(J1)) t(`[inProcessRunner] ${identity.agentId} compaction blocked by PreCompact hook; continuing uncompacted`), $e = !0;else if (abortController.signal.aborted || error instanceof Error && error.message === content_3) {
            t(`[inProcessRunner] ${identity.agentId} aborted during compaction`), Te = !0;
            break;
          } else throw error;
        }
      }
      let forkContextMessages = ce.length > 0 ? [...ce] : void 0;
      O.push(Z), ye = void 0, Pe = M.signal.aborted;
      let pe = KLn(),
        _e = taskRegistry.get(taskId);
      if (_e !== void 0 && "progress" in _e && _e.progress !== void 0) pe.latestInputTokens = _e.progress.tokenCount;
      let je = Zxt(z),
        messages_4 = [],
        Ae = toolUseContext.getAppState().tasks[taskId],
        permissionMode = Ae && Ae.type === "in_process_teammate" ? Ae.permissionMode : "default",
        agentDefinition_2 = {
          ...W,
          permissionMode: permissionMode
        },
        Oe = !1,
        se = null;
      if (await S2s(teammateContext, async () => Ox(agentContext, async () => {
        j(taskId, r => ({
          ...r,
          status: "running",
          isIdle: !1,
          idleNotificationOwedToLead: void 0,
          evictAfter: void 0,
          evictAfterHeldBySibling: void 0
        }), taskRegistry), taskRegistry.updateTranscript(taskId, r => ({
          ...r,
          turnStartTime: Date.now()
        })), B.setMode("responding");
        for await (let r of AR({
          agentDefinition: agentDefinition_2,
          promptMessages: promptMessages,
          turnPrompt: X,
          toolUseContext: toolUseContext,
          canUseTool: He(identity, M, w => {
            j(taskId, k => ({
              ...k,
              totalPausedMs: (k.totalPausedMs ?? 0) + w
            }), taskRegistry);
          }, RSe(setAppState), () => toolUseContext.getAppState().teamContext?.teammates),
          isAsync: !0,
          canShowPermissionPrompts: allowPermissionPrompts ?? !0,
          forkContextMessages: forkContextMessages,
          querySource: "agent:custom",
          override: {
            abortController: M,
            agentContext: agentContext,
            onRetryStatus: B.setRetryStatus,
            subscribeRetryWake: retryWake.subscribe,
            ...(identity.resumableAgentId && {
              agentId: identity.resumableAgentId
            })
          },
          ...(identity.resumableAgentId && {
            recordedUuids: recordedUuids,
            name: identity.agentName,
            description: a,
            extraMetadata: {
              ...Be,
              permissionMode: permissionMode
            }
          }),
          onStreamTokenEstimate: w => {
            XLn(pe, w);
            let progress = Qat(pe);
            j(taskId, U => U.progress?.tokenCount === progress.tokenCount ? U : {
              ...U,
              progress: progress
            }, taskRegistry);
          },
          model: model,
          preserveToolUseResults: !0,
          availableTools: z,
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
            if (t(`[inProcessRunner] ${identity.agentId} current work aborted (Escape pressed)`), r.type === "assistant" || r.type === "user" || r.type === "attachment" && cw(r)) messages_4.push(r), O.push(r), se = vxe(O, r, se);
            Oe = !0;
            break;
          }
          if (r.type === "spinner_mode") {
            B.setMode(r.mode);
            continue;
          }
          if (r.type === "api_metrics") continue;
          if (r.type === "query_model_change") continue;
          if (r.type === "set_in_progress_tool_use_ids") {
            if (r.op.action !== "remove") continue;
            let ids = r.op.ids;
            taskRegistry.updateTranscript(taskId, U => {
              let inProgressToolUseIDs = new Set(U.inProgressToolUseIDs),
                oe = !1;
              for (let be of ids) if (inProgressToolUseIDs.delete(be)) oe = !0;
              return oe ? {
                ...U,
                inProgressToolUseIDs: inProgressToolUseIDs
              } : U;
            });
            continue;
          }
          if (r.type === "system" && r.subtype === "api_error") continue;
          messages_4.push(r), O.push(r), se = vxe(O, r, se), YLn(pe, r, je, z);
          let progress_2 = Qat(pe);
          j(taskId, k => ({
            ...k,
            progress: progress_2
          }), taskRegistry), taskRegistry.updateTranscript(taskId, k => {
            let inProgressToolUseIDs_2 = k.inProgressToolUseIDs;
            if (r.type === "assistant") {
              for (let te of r.message.content) if (te.type === "tool_use") inProgressToolUseIDs_2 = new Set([...inProgressToolUseIDs_2, te.id]);
            } else if (r.type === "user") {
              let content_2 = r.message.content;
              if (Array.isArray(content_2)) {
                for (let oe of content_2) if (typeof oe === "object" && "type" in oe && oe.type === "tool_result") {
                  let be = new Set(inProgressToolUseIDs_2);
                  be.delete(oe.tool_use_id), inProgressToolUseIDs_2 = be;
                }
              }
            }
            return {
              ...k,
              messages: ISs(k.messages, r),
              inProgressToolUseIDs: inProgressToolUseIDs_2
            };
          });
        }
        return {
          success: !0,
          messages: messages_4
        };
      })).finally(() => {
        if (se) O.push(...se.preserved), se = null;
      }), j(taskId, r => ({
        ...r,
        currentWorkAbortController: void 0
      }), taskRegistry), abortController.signal.aborted) break;
      let de = Oe || M.signal.aborted;
      if (de) {
        Pe = !0, t(`[inProcessRunner] ${identity.agentId} work interrupted, returning to idle`);
        let r = Os({
          content: content_3
        });
        taskRegistry.updateTranscript(taskId, w => ({
          ...w,
          messages: G6e(w.messages, r)
        }));
      }
      Ee ||= messages_4.some(item => item.type === "assistant" && !item.isApiErrorMessage || item.type === "user" && !item.isMeta);
      let re = !de ? BQt(messages_4) : void 0;
      if (hold_evict = re?.isTransient === !0 && !standalone && Ee, !standalone && !de) {
        let r = null;
        try {
          r = await ke(identity, taskId, taskRegistry, toolUseContext.storageV5, V, toolUseContext.getAppState().teamContext?.teammates);
          while (r === null && V.count > 0 && V.readFailures < mOe && !abortController.signal.aborted) await Y(Se), r = await ke(identity, taskId, taskRegistry, toolUseContext.storageV5, V, toolUseContext.getAppState().teamContext?.teammates);
        } catch (error) {
          t(`[inProcessRunner] ${identity.agentName} turn-end mailbox check failed: ${error}`);
        }
        if (r) {
          try {
            let {
              result: result_2,
              summary: summary
            } = xrt(O, {
              emitTelemetry: !0
            });
            if (result_2 !== void 0 || re !== void 0) {
              if ((await Ie(identity.agentName, identity.color, identity.teamName, {
                idleReason: re !== void 0 ? "failed" : void 0,
                summary: summary,
                failureReason: re?.reason,
                result: result_2,
                senderReachable: !0
              }, toolUseContext.storageV5)) && result_2 !== void 0) ye = result_2;
            }
          } catch (error) {
            t(`[inProcessRunner] ${identity.agentName} turn-end result delivery failed: ${error}`);
          }
          await xe(r);
          continue;
        }
      }
      if (re?.isTransient) i("tengu_teammate_transient_turn_failure", {
        error_kind: c(re.errorKind ?? "unknown"),
        hold_evict: hold_evict
      });
      let qe = toolUseContext.getAppState().tasks[taskId],
        We = !(qe?.type === "in_process_teammate" && qe.isIdle) && !standalone;
      j(taskId, r => (r.onIdleCallbacks?.forEach(w => w()), {
        ...r,
        isIdle: !0,
        idleNotificationOwedToLead: We && we() || r.idleNotificationOwedToLead,
        evictAfter: hold_evict ? void 0 : Date.now() + $R,
        onIdleCallbacks: []
      }), taskRegistry);
      let failureReason = re?.reason;
      if (We) {
        let r = xrt(O, {
            emitTelemetry: !de
          }),
          result_3 = de ? void 0 : r.result,
          k = await Ie(identity.agentName, identity.color, identity.teamName, {
            idleReason: de ? "interrupted" : failureReason !== void 0 ? "failed" : "available",
            summary: r.summary,
            failureReason: failureReason,
            result: result_3,
            senderReachable: failureReason === void 0 || hold_evict
          }, toolUseContext.storageV5);
        if (result_3 !== void 0 && k) ye = result_3;
        if (!k) j(taskId, U => U.idleNotificationOwedToLead ? {
          ...U,
          idleNotificationOwedToLead: void 0
        } : U, taskRegistry);
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${identity.agentName}`);
      t(`[inProcessRunner] ${identity.agentId} finished prompt, waiting for next`);
      let Ke = await Xe(identity, abortController, taskId, toolUseContext.getAppState, taskRegistry, identity.parentSessionId, standalone, hasTaskListTools, V, hold_evict, toolUseContext.storageV5);
      await xe(Ke);
    }
    let me = !1,
      toolUseId_2;
    if (j(taskId, M => {
      if (M.status !== "running") return me = !0, M;
      return toolUseId_2 = M.toolUseId, M.onIdleCallbacks?.forEach(Z => Z()), {
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
    }, taskRegistry), !me) taskRegistry.updateTranscript(taskId, M => ({
      ...M,
      messages: M.messages.length ? [M.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set()
    }));
    if (Pp(taskId), taskRegistry.evictTerminal(taskId), !me) _a(taskId, "completed", {
      toolUseId: toolUseId_2,
      summary: identity.agentId
    });
    if (xUe(identity.agentId), $e) p("swarm_in_process_run", "compact_blocked_by_hook");else g("swarm_in_process_run");
    return {
      success: !0,
      messages: O
    };
  } catch (h) {
    let Q = h instanceof Error ? h.message : "Unknown error";
    t(`[inProcessRunner] Agent ${identity.agentId} failed: ${Q}`);
    let J = !1,
      toolUseId_3;
    if (j(taskId, x => {
      if (x.status !== "running") return J = !0, x;
      return toolUseId_3 = x.toolUseId, x.onIdleCallbacks?.forEach(M => M()), {
        ...x,
        status: "failed",
        notified: !0,
        error: Q,
        isIdle: !0,
        endTime: Date.now(),
        onIdleCallbacks: [],
        pendingUserMessages: [],
        abortController: void 0,
        currentWorkAbortController: void 0,
        retryWake: void 0
      };
    }, taskRegistry), !J) taskRegistry.updateTranscript(taskId, x => ({
      ...x,
      messages: x.messages.length ? [x.messages.at(-1)] : [],
      inProgressToolUseIDs: new Set()
    }));
    if (Pp(taskId), taskRegistry.evictTerminal(taskId), !J) _a(taskId, "failed", {
      toolUseId: toolUseId_3,
      summary: identity.agentId
    });
    if (!standalone) {
      let result_4;
      try {
        result_4 = Pe ? void 0 : R7o(O);
      } catch (error) {
        t(`[inProcessRunner] ${identity.agentName} failed to extract partial result: ${error}`);
      }
      if (result_4 !== void 0 && result_4 === ye) result_4 = void 0;
      await Ie(identity.agentName, identity.color, identity.teamName, {
        idleReason: "failed",
        completedStatus: "failed",
        failureReason: Q,
        result: result_4
      }, toolUseContext.storageV5);
    }
    return xUe(identity.agentId), m("swarm_in_process_run", "agent_loop_failed"), {
      success: !1,
      error: Q,
      messages: O
    };
  }
}
function s8r(n) {
  let agentId = n.identity.agentId;
  Qe(n).catch(s => {
    t(`[inProcessRunner] Unhandled error in ${agentId}: ${s}`);
  });
}
export { s8r };