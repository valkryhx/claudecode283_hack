// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { zce, x8 } from "B:/~BUN/root/chunk-d8rhtyyx.js";
import { Wce } from "B:/~BUN/root/chunk-bvx12xr8.js";
import { Kbe } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { Cy } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { j, aC, PQ } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ye, H, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { bt, _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { sot, iot as teammateColors, _oe as permissionRelays } from "B:/~BUN/root/chunk-0s60mnx7.js";
import { tt, TNr, G$t, kdn } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { mr, gg, jl } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { Mf } from "B:/~BUN/root/chunk-bp7zxkzq.js";
import { $0, I0n, xSe, ZAe, tpe, LR, zlo, sw, Rp, TPt, c6e, CPt, yd, Fg, Emo, Jbs } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { vee } from "B:/~BUN/root/chunk-8gzvb73z.js";
import { CO } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { HT, hw } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { Pn, fb } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { gH } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Wc } from "B:/~BUN/root/chunk-7j5tvnqj.js";
import { A6 as taskRegistry } from "B:/~BUN/root/chunk-k382hx6g.js";
import { $b } from "B:/~BUN/root/chunk-351qj2sm.js";
import { Dvn } from "B:/~BUN/root/chunk-9f50y83h.js";
import { lot as queuedNotificationsRegistry } from "B:/~BUN/root/chunk-sgcv8apk.js";
import { TL as runQuery } from "B:/~BUN/root/chunk-5c2pwbes.js";
import { X_, bY as toolCatalog } from "B:/~BUN/root/chunk-3yw4brjw.js";
import { jE } from "B:/~BUN/root/chunk-psvhak2h.js";
import { wre, VDe, qDe, Tet, TWt, mKo, NWr } from "B:/~BUN/root/chunk-90mm1g9e.js";
import { cnt as sessionHooksRegistry } from "B:/~BUN/root/chunk-vv0ryjbc.js";
import { jVt } from "B:/~BUN/root/chunk-vpngb77h.js";
import { hst as agentLifecycle } from "B:/~BUN/root/chunk-bq1ehv15.js";
import { bje } from "B:/~BUN/root/chunk-q56gve2c.js";
var ke = 30000;
function Q(progressToken, M, c = ke) {
  if (progressToken === void 0) return {
    report: void 0,
    [Symbol.dispose]() {}
  };
  let N = 0,
    progress = 0,
    I = (w, message) => (progress = w > progress ? w : progress + 0.001, M({
      method: "notifications/progress",
      params: {
        progressToken: progressToken,
        progress: progress,
        message: message
      }
    })),
    h = setInterval(() => {
      N += 1;
      let w = N * c / 1000;
      I(w, `Running for ${w}s`).catch(E => {
        t(`MCP server: progress heartbeat not sent: ${d(E)}`);
      });
    }, c);
  return h.unref?.(), {
    report: w => I(0, w),
    [Symbol.dispose]() {
      clearInterval(h);
    }
  };
}
function _e(a) {
  return "closeSSEStream" in a;
}
var $hn = "callerGone";
async function CZs(a, M, c, N, P, I) {
  Rp(a);
  let h = OQn(M, c, j(), "stdio", N, P, I),
    w = new jVt();
  await h.connect(w), bt(() => h.close());
}
class Te extends gH {
  #e;
  constructor(a) {
    super();
    this.#e = a;
  }
  get(a) {
    return this.#e.get(a);
  }
}
function OQn(debug, verbose, session, N, storageV5, I = "raw", h = {
  kind: "absent"
}, workspaceRoot) {
  let launchPermissionContext = h.kind === "parsed" ? h.context : void 0,
    credentials = jE(storageV5),
    f = N === "http";
  kdn(session.host, G$t);
  let Y = Mf();
  if (Y.disableBackgroundAgentLaunch(), Y.disableRemoteAgentIsolation(), Y.disableBackgroundDeadline(), Y.disableForkSubagent(), f) NWr(Mf());else Y.disableBackgroundCompletionNotice();
  if (Jbs(Emo()), $0(), aC()) Dvn(storageV5).catch(l);
  if (vee(), PQ()) I0n().catch(l);
  let readFileState = hw(HT, void 0, f),
    ye = new gH(),
    agentDefinitions = {
      activeAgents: [],
      allAgents: []
    },
    ie = f ? Promise.resolve() : LR(ce(), storageV5).then(e => {
      agentDefinitions = tpe(e, e.allAgents.filter(item => {
        if (xSe(item)) return !0;
        return ZAe(item, "subagent", "definition"), !1;
      }));
    }).catch(e => {
      l(e);
    }),
    C = new Wce({
      name: "claude/tengu",
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION
    }, {
      capabilities: {
        tools: {
          listChanged: !0
        }
      }
    }),
    ae = mr(),
    servedTools = () => TWt(f);
  if (f) {
    let {
        toolOutputServerCapabilities: toolOutputServerCapabilities
      } = import.meta.require("B:/~BUN/root/chunk-j1c3f4re.js"),
      i = toolOutputServerCapabilities(servedTools, launchPermissionContext);
    if (i !== void 0) {
      if (C.registerCapabilities(i), !bje()) {
        let {
          backgroundCommands: backgroundCommands,
          keepsBackgroundCommandsCapability: keepsBackgroundCommandsCapability
        } = import.meta.require("B:/~BUN/root/chunk-cgm44pbr.js");
        C.registerCapabilities(keepsBackgroundCommandsCapability(backgroundCommands.of(session.host).life));
      }
    }
    if (launchPermissionContext !== void 0) {
      let {
        holdsSafetyAsksCapability: holdsSafetyAsksCapability
      } = import.meta.require("B:/~BUN/root/chunk-22qr2fep.js");
      C.registerCapabilities(holdsSafetyAsksCapability());
      let {
        rendersUnderSessionRulesCapability: rendersUnderSessionRulesCapability
      } = import.meta.require("B:/~BUN/root/chunk-95vsf7hc.js");
      C.registerCapabilities(rendersUnderSessionRulesCapability());
    }
    let {
      uploadsUnderSessionRulesCapability: uploadsUnderSessionRulesCapability,
      monitorUnderSessionRulesCapability: monitorUnderSessionRulesCapability
    } = import.meta.require("B:/~BUN/root/chunk-shj3djfw.js");
    C.registerCapabilities(uploadsUnderSessionRulesCapability()), C.registerCapabilities(monitorUnderSessionRulesCapability());
    let {
      interfaceVersionCapability: interfaceVersionCapability
    } = import.meta.require("B:/~BUN/root/chunk-7fa6zh58.js");
    C.registerCapabilities(interfaceVersionCapability());
  }
  let F = null,
    Re = () => {
      if (F === null) return;
      let e = servedTools().map(item => item.name).join(`
`);
      if (e === F) return;
      let i = F;
      F = e, C.sendToolListChanged().catch(s => {
        if (F === e) F = i;
        t(`mcp serve: tools/list_changed not sent: ${d(s)}`);
      });
    },
    le = !1,
    Ee = CO(() => {
      queueMicrotask(() => {
        if (le) return;
        try {
          Re();
        } catch (error) {
          t(`mcp serve: tool re-list on policy verdict failed: ${d(error)}`, {
            level: "error"
          });
        }
      });
    });
  C.onclose = () => {
    le = !0, Ee(), ae.abort(jl("shutdown"));
  }, C.setRequestHandler(zce, async () => {
    await ie;
    let tools = await mKo(N, {
      agentDefinitions: agentDefinitions
    });
    return F = tools.map(item => item.name).join(`
`), {
      tools: tools
    };
  });
  let be = {
    session: session,
    run: e => e(),
    bind: e => e,
    [Symbol.dispose]: () => {}
  };
  function W(e, tools_2, session_2) {
    let abortController = gg(ae),
      O = () => abortController.abort(jl("remote-cancel"));
    if (e.aborted) O();else e.addEventListener("abort", O, {
      once: !0
    });
    let toolState = new Te(ye),
      q,
      getAppState = () => q ??= {
        ...wre(),
        ...(h.kind === "parsed" && {
          toolPermissionContext: h.context
        })
      };
    return {
      toolUseContext: {
        abortController: abortController,
        messageQueue: Fg(),
        session: session_2,
        agentContext: {
          agentType: "main",
          agentId: Cy()
        },
        options: {
          commands: [],
          tools: tools_2,
          toolCatalog: toolCatalog,
          mainLoopModel: tt(),
          thinkingConfig: {
            type: "disabled",
            mechanical: !0
          },
          mcpClients: [],
          mcpResources: {},
          isNonInteractiveSession: !0,
          runQuery: runQuery,
          debug: debug,
          verbose: verbose,
          agentDefinitions: agentDefinitions
        },
        getAppState: getAppState,
        setAppState: () => {},
        markPrResolvedThisSession: () => {},
        isUltrareviewOverageConfirmed: () => !1,
        markUltrareviewOverageConfirmed: () => {},
        getAdvisorSetting: () => getAppState().advisorModel,
        getMcp: () => getAppState().mcp,
        getProactivityLevel: () => getAppState().proactivityLevel,
        getWebBrowser: () => getAppState().webBrowser,
        setToolPermissionContext: () => {},
        setSessionToolPermissionContext: () => {},
        taskRegistry: taskRegistry,
        queuedNotificationsRegistry: queuedNotificationsRegistry,
        sessionHooksRegistry: sessionHooksRegistry,
        setWebBrowserSlice: () => {},
        setArtifactReadVersion: () => {},
        getArtifactReadObservation: Kbe(getAppState),
        artifactRegistries: sot(),
        setArtifactContractTarget: () => {},
        getArtifactContractTarget: () => ({
          targetSlug: void 0,
          pins: {}
        }),
        enqueuePendingMemoryUpdate: () => {},
        agentLifecycle: agentLifecycle,
        teammateColors: teammateColors,
        rootToolSurface: {
          tools: tools_2,
          mainLoopModel: tt()
        },
        messages: [],
        turnStartIndex: 0,
        readFileState: readFileState,
        dedupUnchangedReads: !1,
        toolState: toolState,
        toolDecisions: new Map(),
        permissionRelays: permissionRelays,
        getFileHistoryState: () => {
          return;
        },
        applyFileHistoryOp: () => {},
        applyAttributionOp: () => {},
        storageV5: storageV5,
        credentials: credentials
      },
      toolState: toolState
    };
  }
  return C.setRequestHandler(x8, async ({
    params: {
      name: name,
      arguments: args,
      _meta: s
    }
  }, {
    signal: signal,
    sendNotification: sendNotification,
    authInfo: authInfo,
    requestId: requestId
  }) => {
    let {
      transport: transport
    } = C;
    using Pe = f ? import.meta.require("B:/~BUN/root/chunk-d13f5qs4.js").servingCall(session.host) : void 0;
    let K = r => f ? import.meta.require("B:/~BUN/root/chunk-d13f5qs4.js").withCpuReport(r, session.host, s) : r,
      callerLogsSharedEvents = f && transport !== void 0 && kdn(session.host, s?.[TNr]),
      pe = () => {
        if (transport !== void 0 && _e(transport)) transport.closeSSEStream(requestId);
      };
    if (signal.aborted) pe();else signal.addEventListener("abort", pe, {
      once: !0
    });
    if (await ie, f) {
      let {
          refuseCallerInterface: refuseCallerInterface
        } = import.meta.require("B:/~BUN/root/chunk-7fa6zh58.js"),
        {
          bringsToolHostPermissionRequest: bringsToolHostPermissionRequest
        } = import.meta.require("B:/~BUN/root/chunk-j1c3f4re.js"),
        n = bringsToolHostPermissionRequest(s) ? void 0 : refuseCallerInterface(name, s);
      if (n !== void 0) return n;
    }
    if (h.kind === "unreadable") {
      let text = `${name} was not run: this server could not read its launch settings (CLAUDE_CODE_MCP_SERVE_SETTINGS), so it runs nothing.`;
      return t(`MCP server: ${text}`, {
        level: "error"
      }), {
        isError: !0,
        content: [{
          type: "text",
          text: text
        }]
      };
    }
    if (f && name !== (await import("B:/~BUN/root/chunk-0pwgdfxg.js")).RUN_MONITOR_COMMAND_CALL) {
      let {
        bringsToolHostPermissionRequest: bringsToolHostPermissionRequest_2,
        refusedResult: refusedResult
      } = import.meta.require("B:/~BUN/root/chunk-j1c3f4re.js");
      if (bringsToolHostPermissionRequest_2(s)) {
        let {
            handleToolHostPermissionRequest: handleToolHostPermissionRequest
          } = await import("B:/~BUN/root/chunk-cajh6mc2.js"),
          A = await handleToolHostPermissionRequest({
            name: name,
            args: args,
            meta: s,
            servedTools: servedTools,
            launchPermissionContext: launchPermissionContext,
            newCall: () => {
              let R = W(VDe.has(name) ? ge(signal, authInfo) : signal, servedTools(), session);
              return {
                toolUseContext: R.toolUseContext,
                release: () => te(R.toolState)
              };
            },
            startHeartbeat: () => Q(s?.progressToken, sendNotification),
            callerLogsSharedEvents: callerLogsSharedEvents
          });
        return K(A ?? refusedResult({
          code: "unsupported_protocol",
          message: `${name} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.`
        }));
      }
    }
    let de = args?.deny_rules;
    using v = launchPermissionContext === void 0 && !(Array.isArray(de) && de.length > 0) ? be : (await import("B:/~BUN/root/chunk-06mph8sr.js")).ownCallDirectory(session, signal);
    if (f) {
      let {
          countedUnlessRepeated: countedUnlessRepeated,
          SERVED_FILE_CALLS: SERVED_FILE_CALLS
        } = await import("B:/~BUN/root/chunk-n7eqbgkh.js"),
        n = SERVED_FILE_CALLS.get(name);
      if (n) {
        using A = Q(s?.progressToken, sendNotification);
        let R,
          T = authInfo?.extra?.[$hn];
        try {
          let {
              summary: summary,
              output: output
            } = await countedUnlessRepeated(name, v.bind(() => n(args, signal, {
              toolUseContext: () => (R ??= W(signal, servedTools(), v.session)).toolUseContext,
              session: v.session,
              launchPermissionContext: launchPermissionContext,
              workspaceRoot: workspaceRoot,
              ...(callerLogsSharedEvents && {
                callerLogsSharedEvents: !0
              }),
              reportProgress: A.report,
              callerGone: T instanceof AbortSignal ? T : void 0,
              meta: s,
              checkAsServedTool: async (V, o, L, X) => {
                let B = Pn(servedTools(), V);
                if (!B?.isEnabled()) return {
                  rejection: `${name} was not run: this server does not serve ${V}.`
                };
                let ee = fb(B, o);
                if (!ee.success) return {
                  rejection: `${name} was not run: its input is not valid for ${V}: ${ee.error.message}`
                };
                let {
                    toolUseContext: toolUseContext
                  } = R ??= W(signal, servedTools(), v.session),
                  ne = await B.validateInput?.(ee.data, toolUseContext);
                if (ne && !ne.result) return {
                  rejection: `${name} was not run: ${V} refused its input: ${ne.message}`
                };
                let fe = X ?? launchPermissionContext,
                  Se = L.length === 0 ? fe : (await import("B:/~BUN/root/chunk-vf2nkpbg.js")).withDenyRulesOfOneCall(fe, L);
                if (L.length > 0 && Se === void 0) return {
                  rejection: `${name} was not run: one of the deny rules sent with it could not be read. Retrying won't help.`
                };
                let {
                  checkPlainCall: checkPlainCall
                } = await import("B:/~BUN/root/chunk-j1c3f4re.js");
                return checkPlainCall(B, ee.data, toolUseContext, Se, s);
              }
            }))),
            {
              encodeServedOutput: encodeServedOutput
            } = await import("B:/~BUN/root/chunk-7q8a24qj.js");
          return K(v.run(() => encodeServedOutput(summary, output)));
        } catch (error) {
          return K({
            isError: !0,
            content: [{
              type: "text",
              text: d(error)
            }]
          });
        } finally {
          if (R) te(R.toolState);
        }
      }
    }
    let tools_3 = servedTools(),
      Z = f && VDe.has(name),
      ue = callerLogsSharedEvents;
    if (f && !Z) {
      let {
          answerToolOutputRequest: answerToolOutputRequest
        } = await import("B:/~BUN/root/chunk-j1c3f4re.js"),
        y = await v.run(() => answerToolOutputRequest({
          name: name,
          args: args,
          meta: s,
          tools: tools_3,
          launchPermissionContext: launchPermissionContext,
          newCall: () => {
            let n = W(signal, tools_3, v.session);
            return {
              toolUseContext: n.toolUseContext,
              release: () => te(n.toolState)
            };
          },
          startHeartbeat: () => Q(s?.progressToken, sendNotification)
        }));
      if (y !== void 0) return y;
    }
    let S = Z ? $b(X_(), name) : $b(tools_3, name);
    if (!S) throw Error(`Tool ${name} not found`);
    let {
      toolUseContext: toolUseContext_2,
      toolState: toolState_2
    } = W(Z ? ge(signal, authInfo) : signal, tools_3, v.session);
    try {
      if (!S.isEnabled()) {
        let text_2 = `Tool ${name} is not enabled`;
        return t(`MCP server: ${text_2}`, {
          level: "error"
        }), {
          isError: !0,
          content: [{
            type: "text",
            text: text_2
          }]
        };
      }
      let r = {
          ...(args ?? {})
        },
        y = [];
      if (f) {
        for (let o of qDe) if (o in r) delete r[o], y.push(o);
      }
      let n = fb(S, r);
      if (!n.success) {
        let text_3 = `Tool ${name} arguments failed schema validation: ${n.error.message}`;
        return t(`MCP server: ${text_3}`, {
          level: "error"
        }), {
          isError: !0,
          content: [{
            type: "text",
            text: text_3
          }]
        };
      }
      let A = await v.run(() => S.validateInput?.(n.data, toolUseContext_2));
      if (A && !A.result) {
        let text_4 = `Tool ${name} input is invalid: ${A.message}`;
        return t(`MCP server: ${text_4}`, {
          level: "error"
        }), {
          isError: !0,
          content: [{
            type: "text",
            text: text_4
          }]
        };
      }
      let R = !1;
      if (f && I === "rendered") {
        let {
          asksForEditResult: asksForEditResult
        } = await import("B:/~BUN/root/chunk-d2k9xyjz.js");
        R = asksForEditResult(S.name, s);
      }
      let T = await v.run(async () => (await import("B:/~BUN/root/chunk-j1c3f4re.js")).checkPlainCall(S, n.data, toolUseContext_2, launchPermissionContext, s));
      if ("rejection" in T) return t(`MCP server: ${T.rejection}`, {
        level: "error"
      }), {
        isError: !0,
        content: [{
          type: "text",
          text: T.rejection
        }],
        ...(T.meta !== void 0 && {
          _meta: T.meta
        })
      };
      using J = Q(s?.progressToken, sendNotification);
      let G = await v.run(() => S.call(n.data, {
          ...T.toolUseContext,
          permissionPhase: T.toolUseContext.permissionPhase ?? {}
        }, sw, yd({
          content: []
        }), void 0, I === "raw" ? {
          gitDiffRead: !0
        } : R ? {
          smallResultAsked: !0
        } : void 0)),
        U,
        V = !1;
      if (Z) {
        let {
          encodeUnlistedToolResult: encodeUnlistedToolResult
        } = await import("B:/~BUN/root/chunk-7q8a24qj.js");
        U = v.run(() => encodeUnlistedToolResult(S, G));
      } else if (I === "rendered") {
        let {
            renderToolResultForMCP: renderToolResultForMCP,
            withinAnswerLimit: withinAnswerLimit
          } = await import("B:/~BUN/root/chunk-wa545qwe.js"),
          {
            answer: answer,
            tooLarge: tooLarge
          } = withinAnswerLimit(S, await v.run(() => renderToolResultForMCP(S, G, toolUseContext_2)));
        U = R ? await (await import("B:/~BUN/root/chunk-d2k9xyjz.js")).withEditResult(answer, G) : answer, V = tooLarge;
      }
      if (U === void 0) {
        let o = G.data,
          L = typeof o === "object" && o !== null && "backgroundTaskId" in o && typeof o.backgroundTaskId === "string" ? {
            ...o,
            backgroundOutputPath: Wc(o.backgroundTaskId)
          } : o;
        U = {
          content: [{
            type: "text",
            text: _(L)
          }]
        };
      }
      if (y.length > 0) {
        let text_5 = Tet(y),
          L = U.content.at(-1);
        if (L?.type === "text") L.text += `
${text_5}`;else U.content.push({
          type: "text",
          text: text_5
        });
      }
      if (!ue) if (V) p(TPt(S.name), "result_too_large");else g(TPt(S.name));
      return K(U);
    } catch (error) {
      let text_6 = (error instanceof Error ? zlo(error) : [String(error)]).filter(Boolean).join(`
`).trim() || "Error";
      if (c6e(error)) t(`MCP server tool call '${name}' aborted`);else {
        let {
          code: code,
          isSad: isSad
        } = CPt(error);
        if (isSad) {
          if (t(`MCP server tool call '${name}' failed: ${text_6}`, {
            level: "error"
          }), !ue) p(TPt(S.name), code);
        } else {
          let T = H(error);
          l("telemetryMessage" in T ? T : Ye(T, `mcp server tool '${S.name}' threw`)), m(TPt(S.name), code);
        }
      }
      return K({
        isError: !0,
        content: [{
          type: "text",
          text: text_6
        }]
      });
    } finally {
      te(toolState_2);
    }
  }), C;
}
function te(a) {}
function ge(a, M) {
  let c = M?.extra?.[$hn];
  return c instanceof AbortSignal ? AbortSignal.any([a, c]) : a;
}
export { $hn, CZs, OQn };