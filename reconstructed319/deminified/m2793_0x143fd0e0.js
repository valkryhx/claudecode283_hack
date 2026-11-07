// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ove, Jne } from "B:/~BUN/root/chunk-ahv8vexc.js";
import { Nke } from "B:/~BUN/root/chunk-m0t2mx64.js";
import { GIe } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { _S } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { H, QA, oK } from "B:/~BUN/root/chunk-game8aqv.js";
import { qe, F, d, k, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { vt, t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { JTt, QTt as teammateColors, Hhe as permissionRelays } from "B:/~BUN/root/chunk-bq1zhyqz.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { LA } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { un, Jg } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { at, iEo, Wsn, ZIr, I1n } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Xn, Ju, $l } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { dbe } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { kg } from "B:/~BUN/root/chunk-2392ztjf.js";
import { h$, _lr, qge, IP, fts, Kw, $h, o8t, mct, s8t, el, wm, sas, xTi } from "B:/~BUN/root/chunk-27h4st9h.js";
import { NZ } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { wn, Jb } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { xD } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { Fi } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Rd } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { OW } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { p0e, m0e } from "B:/~BUN/root/chunk-vke7wtay.js";
import { tk } from "B:/~BUN/root/chunk-kk81ayzj.js";
import { mq as taskRegistry } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { h9n } from "B:/~BUN/root/chunk-a32crq0f.js";
import { eCt as queuedNotificationsRegistry } from "B:/~BUN/root/chunk-dsf173dz.js";
import { SB as runQuery } from "B:/~BUN/root/chunk-vsw8ycmm.js";
import { vS, c8 as toolCatalog } from "B:/~BUN/root/chunk-zk8rd694.js";
import { TA } from "B:/~BUN/root/chunk-sc660841.js";
import { Fme, P4e, Hme, skt, ikt, O4e, o4s, GMo } from "B:/~BUN/root/chunk-bk8e5jj0.js";
import { I4e } from "B:/~BUN/root/chunk-5n9rt7jw.js";
import { TEt as sessionHooksRegistry } from "B:/~BUN/root/chunk-1zre46ws.js";
import { _gn } from "B:/~BUN/root/chunk-w6ejqas5.js";
import { ZCt as agentLifecycle } from "B:/~BUN/root/chunk-xa8mb85y.js";
import { $x, _E } from "B:/~BUN/root/chunk-xbhv3nhf.js";
var De = 30000;
function J(progressToken, u, o = De) {
  if (progressToken === void 0) return {
    report: void 0,
    [Symbol.dispose]() {}
  };
  let l = 0,
    progress = 0,
    b = (h, message) => (progress = h > progress ? h : progress + 0.001, u({
      method: "notifications/progress",
      params: {
        progressToken: progressToken,
        progress: progress,
        message: message
      }
    })),
    y = setInterval(() => {
      l += 1;
      let h = l * o / 1000;
      b(h, `Running for ${h}s`).catch(E => {
        t(`MCP server: progress heartbeat not sent: ${d(E)}`);
      });
    }, o);
  return y.unref?.(), {
    report: h => b(0, h),
    [Symbol.dispose]() {
      clearInterval(y);
    }
  };
}
var Ie = "anthropic/shellDirectory",
  ye = "anthropic/shellDirectoryHeld";
function pUr(r, u) {
  return {
    ...r,
    _meta: {
      ...r._meta,
      [Ie]: u
    }
  };
}
import { stat as je } from "fs/promises";
var Ee = "claudecode/repoHooksStamp",
  Rqs = 4096,
  Tun = ["userSettings", ...LA];
async function _Mo() {
  let r = [...Tun.map(un), Jg()];
  return (await Promise.all(r.map(async item => {
    if (item === void 0) return "-";
    try {
      let {
        ino: ino,
        size: size,
        ctimeNs: ctimeNs
      } = await je(item, {
        bigint: !0
      });
      return `${ino}:${size}:${ctimeNs}`;
    } catch (error) {
      return qt(error) ? "-" : `?${k(error)}`;
    }
  }))).join("|");
}
var le = new W(() => ({}));
function Aqs(r, u, o = () => !1) {
  let l = le.of(r);
  if (l.tell = u, l.stop !== void 0) return;
  let f = Fi.subscribe(b => {
    if (!o() && !Tun.some(item => item === b)) return;
    if (l.tell === void 0) {
      c("mcp_serve_repo_settings_notice", "no_caller");
      return;
    }
    l.tell().then(() => g("mcp_serve_repo_settings_notice")).catch(h => {
      c("mcp_serve_repo_settings_notice", "not_sent"), t(`repo settings notice not sent: ${d(h)}`);
    });
  });
  l.stop = () => {
    f(), l.stop = void 0;
  }, Fi.initialize(async () => !1);
}
function Re(r, u) {
  let o = le.of(r);
  if (o.stop !== void 0) o.tell = u;
}
function he(r, u) {
  let o = le.of(r);
  if (o.tell === u) o.tell = void 0;
}
function Pe(r, u, o, l) {
  r.setRequestHandler(u, async (f, b) => {
    let y = await l(f, b);
    if (!o || f.params._meta?.[Ee] !== "1") return y;
    return {
      ...y,
      _meta: {
        ...y._meta,
        [Ee]: await _Mo()
      }
    };
  });
}
function Ue(r) {
  return "closeSSEStream" in r;
}
var jqn = "callerGone";
async function zpa(r, u, o, l, f, b) {
  $h(r);
  let y = mUr(u, o, H(), "stdio", l, f, b),
    h = new _gn();
  await y.connect(h), vt(() => y.close());
}
class be extends OW {
  #e;
  constructor(r) {
    super();
    this.#e = r;
  }
  get(r) {
    return this.#e.get(r);
  }
}
function mUr(debug, verbose, session, l, storageV5, b = "raw", y = {
  kind: "absent"
}, workspaceRoot) {
  let launchPermissionContext = y.kind === "parsed" ? y.context : void 0,
    credentials = TA(storageV5),
    p = l === "http";
  I1n(session.host, Wsn);
  let Q = kg();
  if (Q.disableBackgroundAgentLaunch(), Q.disableRemoteAgentIsolation(), Q.disableBackgroundDeadline(), Q.disableForkSubagent(), p) GMo(kg());else Q.disableBackgroundCompletionNotice();
  if (xTi(sas()), h$(), QA()) h9n(storageV5).catch(a);
  if (NZ(), oK()) _lr().catch(a);
  let readFileState = _E($x, void 0, p),
    ke = new OW(),
    agentDefinitions = {
      activeAgents: [],
      allAgents: []
    },
    de = p ? Promise.resolve() : IP(pe(), storageV5).then(e => {
      agentDefinitions = qge(e, e.allAgents.filter(item => {
        if (p0e(item)) return !0;
        return m0e(item, "subagent", "definition"), !1;
      }));
    }).catch(e => {
      a(e);
    }),
    x = new Nke({
      name: "claude/tengu",
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
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
    ue = Xn(),
    servedTools = () => O4e(p);
  if (p) {
    let {
        toolOutputServerCapabilities: toolOutputServerCapabilities
      } = import.meta.require("B:/~BUN/root/chunk-tng2788x.js"),
      T = toolOutputServerCapabilities(servedTools, launchPermissionContext);
    if (T !== void 0) {
      if (x.registerCapabilities(T), !dbe()) {
        let {
          backgroundCommands: backgroundCommands,
          keepsBackgroundCommandsCapability: keepsBackgroundCommandsCapability
        } = import.meta.require("B:/~BUN/root/chunk-090gxr0p.js");
        x.registerCapabilities(keepsBackgroundCommandsCapability(backgroundCommands.of(session.host).life));
      }
    }
    if (launchPermissionContext !== void 0) {
      let {
        holdsSafetyAsksCapability: holdsSafetyAsksCapability
      } = import.meta.require("B:/~BUN/root/chunk-nfj3kcp8.js");
      x.registerCapabilities(holdsSafetyAsksCapability());
      let {
        rendersUnderSessionRulesCapability: rendersUnderSessionRulesCapability
      } = import.meta.require("B:/~BUN/root/chunk-bbha33b8.js");
      x.registerCapabilities(rendersUnderSessionRulesCapability());
    }
    let {
      interfaceVersionCapability: interfaceVersionCapability
    } = import.meta.require("B:/~BUN/root/chunk-ajbmvhc8.js");
    x.registerCapabilities(interfaceVersionCapability());
  }
  let q = null,
    xe = () => {
      if (q === null) return;
      let e = servedTools().map(item => item.name).join(`
`);
      if (e === q) return;
      let T = q;
      q = e, x.sendToolListChanged().catch(i => {
        if (q === e) q = T;
        t(`mcp serve: tools/list_changed not sent: ${d(i)}`);
      });
    },
    me = !1,
    Ae = xD(() => {
      queueMicrotask(() => {
        if (me) return;
        try {
          xe();
        } catch (error) {
          t(`mcp serve: tool re-list on policy verdict failed: ${d(error)}`, {
            level: "error"
          });
        }
      });
    }),
    tellToolListChanged = () => x.sendToolListChanged();
  x.oninitialized = () => {
    Re(session.host, tellToolListChanged);
  }, x.onclose = () => {
    he(session.host, tellToolListChanged), me = !0, Ae(), ue.abort($l("shutdown"));
  }, x.setRequestHandler(ove, async () => {
    await de;
    let tools = await o4s(l, {
      agentDefinitions: agentDefinitions
    });
    return q = tools.map(item => item.name).join(`
`), {
      tools: tools
    };
  });
  let Oe = {
    session: session,
    run: e => e(),
    bind: e => e,
    [Symbol.dispose]: () => {}
  };
  function X(e, tools_2, session_2) {
    let abortController = Ju(ue),
      M = () => abortController.abort($l("remote-cancel"));
    if (e.aborted) M();else e.addEventListener("abort", M, {
      once: !0
    });
    let toolState = new be(ke),
      K,
      getAppState = () => {
        if (K ??= {
          ...Fme(),
          ...(y.kind === "parsed" && {
            toolPermissionContext: y.context
          })
        }, !p) return K;
        return {
          ...K,
          toolPermissionContext: I4e(K.toolPermissionContext)
        };
      };
    return {
      toolUseContext: {
        abortController: abortController,
        messageQueue: wm(),
        session: session_2,
        agentContext: {
          agentType: "main",
          agentId: _S()
        },
        options: {
          commands: [],
          tools: tools_2,
          toolCatalog: toolCatalog,
          mainLoopModel: at(),
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
        getArtifactReadObservation: GIe(getAppState),
        artifactRegistries: JTt(),
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
          mainLoopModel: at()
        },
        messages: [],
        turnStartIndex: 0,
        readFileState: readFileState,
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
  return Pe(x, Jne, p, async ({
    params: {
      name: name,
      arguments: args,
      _meta: i
    }
  }, {
    signal: signal,
    sendNotification: sendNotification,
    authInfo: authInfo,
    requestId: requestId
  }) => {
    let {
      transport: transport
    } = x;
    using Le = p ? import.meta.require("B:/~BUN/root/chunk-gb5w7ax4.js").servingCall(session.host) : void 0;
    let Z = async n => {
        if (p) {
          let v = import.meta.require("B:/~BUN/root/chunk-gb5w7ax4.js");
          return v.withCpuReport(n, session.host, i, await v.lookAtOtherPrograms(session.host, i));
        }
        return n;
      },
      callerLogsSharedEvents = p && transport !== void 0 && I1n(session.host, i?.[iEo]),
      fe = () => {
        if (transport !== void 0 && Ue(transport)) transport.closeSSEStream(requestId);
      };
    if (signal.aborted) fe();else signal.addEventListener("abort", fe, {
      once: !0
    });
    if (await de, p) {
      let {
          refuseCallerInterface: refuseCallerInterface
        } = import.meta.require("B:/~BUN/root/chunk-ajbmvhc8.js"),
        {
          bringsToolHostPermissionRequest: bringsToolHostPermissionRequest
        } = import.meta.require("B:/~BUN/root/chunk-tng2788x.js"),
        S = bringsToolHostPermissionRequest(i) ? void 0 : refuseCallerInterface(name, i);
      if (S !== void 0) return S;
    }
    if (y.kind === "unreadable") {
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
    if (p && transport !== void 0) {
      let {
        takeSessionEndHooks: takeSessionEndHooks
      } = import.meta.require("B:/~BUN/root/chunk-yf96qzrb.js");
      takeSessionEndHooks(i?.[ZIr], {
        session: session,
        storageV5: storageV5,
        credentials: credentials
      });
    }
    if (p && launchPermissionContext !== void 0) {
      let {
        takeShellDirectoryHeld: takeShellDirectoryHeld
      } = import.meta.require("B:/~BUN/root/chunk-5zkqx6ah.js");
      takeShellDirectoryHeld(i?.[ye], session);
    }
    if (p && name !== (await import("B:/~BUN/root/chunk-sw70dqt3.js")).RUN_MONITOR_COMMAND_CALL) {
      let {
        bringsToolHostPermissionRequest: bringsToolHostPermissionRequest_2,
        refusedResult: refusedResult
      } = import.meta.require("B:/~BUN/root/chunk-tng2788x.js");
      if (bringsToolHostPermissionRequest_2(i)) {
        let {
            handleToolHostPermissionRequest: handleToolHostPermissionRequest
          } = await import("B:/~BUN/root/chunk-2ma8q72f.js"),
          D = await handleToolHostPermissionRequest({
            name: name,
            args: args,
            meta: i,
            servedTools: servedTools,
            launchPermissionContext: launchPermissionContext,
            newCall: () => {
              let O = X(P4e.has(name) ? _e(signal, authInfo) : signal, servedTools(), session);
              return {
                toolUseContext: O.toolUseContext,
                release: () => oe(O.toolState)
              };
            },
            startHeartbeat: () => J(i?.progressToken, sendNotification),
            callerLogsSharedEvents: callerLogsSharedEvents
          });
        return await Z(D ?? refusedResult({
          code: "unsupported_protocol",
          message: `${name} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.`
        }));
      }
    }
    let Se = args?.deny_rules;
    using A = launchPermissionContext === void 0 && !(Array.isArray(Se) && Se.length > 0) ? Oe : (await import("B:/~BUN/root/chunk-genacfpv.js")).ownCallDirectory(session, signal);
    if (p) {
      let {
          countedUnlessRepeated: countedUnlessRepeated,
          SERVED_FILE_CALLS: SERVED_FILE_CALLS
        } = await import("B:/~BUN/root/chunk-1exy9hh0.js"),
        S = SERVED_FILE_CALLS.get(name);
      if (S) {
        using D = J(i?.progressToken, sendNotification);
        let O,
          w = authInfo?.extra?.[jqn];
        try {
          let {
              summary: summary,
              output: output
            } = await countedUnlessRepeated(name, A.bind(() => S(args, signal, {
              tellToolListChanged: tellToolListChanged,
              toolUseContext: () => (O ??= X(signal, servedTools(), A.session)).toolUseContext,
              session: A.session,
              launchPermissionContext: launchPermissionContext,
              workspaceRoot: workspaceRoot,
              ...(callerLogsSharedEvents && {
                callerLogsSharedEvents: !0
              }),
              reportProgress: D.report,
              callerGone: w instanceof AbortSignal ? w : void 0,
              meta: i,
              checkAsServedTool: async (G, s, I) => {
                let Y = wn(servedTools(), G);
                if (!Y?.isEnabled()) return {
                  rejection: `${name} was not run: this server does not serve ${G}.`
                };
                let z = Jb(Y, s);
                if (!z.success) return {
                  rejection: `${name} was not run: its input is not valid for ${G}: ${z.error.message}`
                };
                let {
                    toolUseContext: toolUseContext
                  } = O ??= X(signal, servedTools(), A.session),
                  ae = await Y.validateInput?.(z.data, toolUseContext);
                if (ae && !ae.result) return {
                  rejection: `${name} was not run: ${G} refused its input: ${ae.message}`
                };
                let Ce = launchPermissionContext && I4e(launchPermissionContext),
                  ve = I.length === 0 ? Ce : (await import("B:/~BUN/root/chunk-t9trdqw5.js")).withDenyRulesOfOneCall(Ce, I);
                if (I.length > 0 && ve === void 0) return {
                  rejection: `${name} was not run: one of the deny rules sent with it could not be read. Retrying won't help.`
                };
                let {
                  checkPlainCall: checkPlainCall
                } = await import("B:/~BUN/root/chunk-tng2788x.js");
                return checkPlainCall(Y, z.data, toolUseContext, ve, i);
              }
            }))),
            {
              encodeServedOutput: encodeServedOutput
            } = await import("B:/~BUN/root/chunk-qjm5jsts.js");
          return await Z(A.run(() => encodeServedOutput(summary, output)));
        } catch (error) {
          let {
            ServedCallError: ServedCallError
          } = await import("B:/~BUN/root/chunk-s80b9xvx.js");
          return await Z({
            isError: !0,
            content: [{
              type: "text",
              text: d(error)
            }],
            ...(error instanceof ServedCallError && error.meta !== void 0 && {
              _meta: error.meta
            })
          });
        } finally {
          if (O) oe(O.toolState);
        }
      }
    }
    let tools_3 = servedTools(),
      te = p && P4e.has(name),
      ge = callerLogsSharedEvents;
    if (p && !te) {
      let {
          answerToolOutputRequest: answerToolOutputRequest
        } = await import("B:/~BUN/root/chunk-tng2788x.js"),
        v = await A.run(() => answerToolOutputRequest({
          name: name,
          args: args,
          meta: i,
          tools: tools_3,
          launchPermissionContext: launchPermissionContext,
          newCall: () => {
            let S = X(signal, tools_3, A.session);
            return {
              toolUseContext: S.toolUseContext,
              release: () => oe(S.toolState)
            };
          },
          startHeartbeat: () => J(i?.progressToken, sendNotification)
        }));
      if (v !== void 0) return v;
    }
    let R = te ? tk(vS(), name) : tk(tools_3, name);
    if (!R) throw Error(`Tool ${name} not found`);
    let {
      toolUseContext: toolUseContext_2,
      toolState: toolState_2
    } = X(te ? _e(signal, authInfo) : signal, tools_3, A.session);
    try {
      if (!R.isEnabled()) {
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
      let n = {
          ...(args ?? {})
        },
        v = p ? Hme.filter(item => item in n) : [],
        S = p ? skt(R, n) : Jb(R, n);
      if (!S.success) {
        let text_3 = `Tool ${name} arguments failed schema validation: ${S.error.message}`;
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
      let D = await A.run(() => R.validateInput?.(S.data, toolUseContext_2));
      if (D && !D.result) {
        let text_4 = `Tool ${name} input is invalid: ${D.message}`;
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
      let O = !1;
      if (p && b === "rendered") {
        let {
          asksForEditResult: asksForEditResult
        } = await import("B:/~BUN/root/chunk-c6xwthbe.js");
        O = asksForEditResult(R.name, i);
      }
      let w = await A.run(async () => (await import("B:/~BUN/root/chunk-tng2788x.js")).checkPlainCall(R, S.data, toolUseContext_2, p && launchPermissionContext !== void 0 ? I4e(launchPermissionContext) : launchPermissionContext, i));
      if ("rejection" in w) return t(`MCP server: ${w.rejection}`, {
        level: "error"
      }), {
        isError: !0,
        content: [{
          type: "text",
          text: w.rejection
        }],
        ...(w.meta !== void 0 && {
          _meta: w.meta
        })
      };
      using V = J(i?.progressToken, sendNotification);
      let N = await A.run(() => R.call(S.data, {
          ...w.toolUseContext,
          permissionPhase: w.toolUseContext.permissionPhase ?? {}
        }, Kw, el({
          content: []
        }), void 0, b === "raw" ? {
          gitDiffRead: !0
        } : O ? {
          smallResultAsked: !0
        } : void 0)),
        j,
        G = !1;
      if (te) {
        let {
          encodeUnlistedToolResult: encodeUnlistedToolResult
        } = await import("B:/~BUN/root/chunk-qjm5jsts.js");
        j = A.run(() => encodeUnlistedToolResult(R, N));
      } else if (b === "rendered") {
        let {
            renderToolResultForMCP: renderToolResultForMCP,
            withinAnswerLimit: withinAnswerLimit
          } = await import("B:/~BUN/root/chunk-wvn4pn5q.js"),
          {
            answer: answer,
            tooLarge: tooLarge
          } = withinAnswerLimit(R, await A.run(() => renderToolResultForMCP(R, N, toolUseContext_2)));
        j = O ? await (await import("B:/~BUN/root/chunk-c6xwthbe.js")).withEditResult(answer, N) : answer, G = tooLarge;
      }
      if (j === void 0) {
        let s = N.data,
          I = typeof s === "object" && s !== null && "backgroundTaskId" in s && typeof s.backgroundTaskId === "string" ? {
            ...s,
            backgroundOutputPath: Rd(s.backgroundTaskId)
          } : s;
        j = {
          content: [{
            type: "text",
            text: _(I)
          }]
        };
      }
      if (v.length > 0) {
        let text_5 = ikt(v),
          I = j.content.at(-1);
        if (I?.type === "text") I.text += `
${text_5}`;else j.content.push({
          type: "text",
          text: text_5
        });
      }
      if (!ge) if (G) c(o8t(R.name), "result_too_large");else g(o8t(R.name));
      return await Z(j);
    } catch (error) {
      let text_6 = (error instanceof Error ? fts(error) : [String(error)]).filter(Boolean).join(`
`).trim() || "Error";
      if (mct(error)) t(`MCP server tool call '${name}' aborted`);else {
        let {
          code: code,
          isSad: isSad
        } = s8t(error);
        if (isSad) {
          if (t(`MCP server tool call '${name}' failed: ${text_6}`, {
            level: "error"
          }), !ge) c(o8t(R.name), code);
        } else {
          let w = F(error);
          a("telemetryMessage" in w ? w : qe(w, `mcp server tool '${R.name}' threw`)), m(o8t(R.name), code);
        }
      }
      return await Z({
        isError: !0,
        content: [{
          type: "text",
          text: text_6
        }]
      });
    } finally {
      oe(toolState_2);
    }
  }), x;
}
function oe(r) {}
function _e(r, u) {
  let o = u?.extra?.[jqn];
  return o instanceof AbortSignal ? AbortSignal.any([r, o]) : r;
}
export { pUr, Rqs, Tun, _Mo, Aqs, jqn, zpa, mUr };