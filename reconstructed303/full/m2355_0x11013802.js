// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  zce,
  x8
} from "B:/~BUN/root/chunk-d8rhtyyx.js";
import {
  Wce
} from "B:/~BUN/root/chunk-bvx12xr8.js";
import {
  Kbe
} from "B:/~BUN/root/chunk-8tjgv4bf.js";
import {
  Cy
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  j,
  aC,
  PQ
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ye,
  H,
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  bt,
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  sot,
  iot,
  _oe
} from "B:/~BUN/root/chunk-0s60mnx7.js";
import {
  tt,
  TNr,
  G$t,
  kdn
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  mr,
  gg,
  jl
} from "B:/~BUN/root/chunk-jkv8n5r0.js";
import {
  Mf
} from "B:/~BUN/root/chunk-bp7zxkzq.js";
import {
  $0,
  I0n,
  xSe,
  ZAe,
  tpe,
  LR,
  zlo,
  sw,
  Rp,
  TPt,
  c6e,
  CPt,
  yd,
  Fg,
  Emo,
  Jbs
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  vee
} from "B:/~BUN/root/chunk-8gzvb73z.js";
import {
  CO
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  HT,
  hw
} from "B:/~BUN/root/chunk-h1tq8zce.js";
import {
  Pn,
  fb
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  gH
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  Wc
} from "B:/~BUN/root/chunk-7j5tvnqj.js";
import {
  A6
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  $b
} from "B:/~BUN/root/chunk-351qj2sm.js";
import {
  Dvn
} from "B:/~BUN/root/chunk-9f50y83h.js";
import {
  lot
} from "B:/~BUN/root/chunk-sgcv8apk.js";
import {
  TL
} from "B:/~BUN/root/chunk-5c2pwbes.js";
import {
  X_,
  bY
} from "B:/~BUN/root/chunk-3yw4brjw.js";
import {
  jE
} from "B:/~BUN/root/chunk-psvhak2h.js";
import {
  wre,
  VDe,
  qDe,
  Tet,
  TWt,
  mKo,
  NWr
} from "B:/~BUN/root/chunk-90mm1g9e.js";
import {
  cnt
} from "B:/~BUN/root/chunk-vv0ryjbc.js";
import {
  jVt
} from "B:/~BUN/root/chunk-vpngb77h.js";
import {
  hst
} from "B:/~BUN/root/chunk-bq1ehv15.js";
import {
  bje
} from "B:/~BUN/root/chunk-q56gve2c.js";
var ke = 30000;

function Q(a, M, c = ke) {
  if (a === void 0) return {
    report: void 0,
    [Symbol.dispose]() {}
  };
  let N = 0,
    P = 0,
    I = (w, E) => (P = w > P ? w : P + 0.001, M({
      method: "notifications/progress",
      params: {
        progressToken: a,
        progress: P,
        message: E
      }
    })),
    h = setInterval(() => {
      N += 1;
      let w = N * c / 1000;
      I(w, `Running for ${w}s`).catch((E) => {
        t(`MCP server: progress heartbeat not sent: ${d(E)}`)
      })
    }, c);
  return h.unref?.(), {
    report: (w) => I(0, w),
    [Symbol.dispose]() {
      clearInterval(h)
    }
  }
}

function _e(a) {
  return "closeSSEStream" in a
}
var $hn = "callerGone";
async function CZs(a, M, c, N, P, I) {
  Rp(a);
  let h = OQn(M, c, j(), "stdio", N, P, I),
    w = new jVt;
  await h.connect(w), bt(() => h.close())
}
class Te extends gH {
  #e;
  constructor(a) {
    super();
    this.#e = a
  }
  get(a) {
    return this.#e.get(a)
  }
}

function OQn(a, M, c, N, P, I = "raw", h = {
  kind: "absent"
}, w) {
  let E = h.kind === "parsed" ? h.context : void 0,
    Ce = jE(P),
    f = N === "http";
  kdn(c.host, G$t);
  let Y = Mf();
  if (Y.disableBackgroundAgentLaunch(), Y.disableRemoteAgentIsolation(), Y.disableBackgroundDeadline(), Y.disableForkSubagent(), f) NWr(Mf());
  else Y.disableBackgroundCompletionNotice();
  if (Jbs(Emo()), $0(), aC()) Dvn(P).catch(l);
  if (vee(), PQ()) I0n().catch(l);
  let ve = hw(HT, void 0, f),
    ye = new gH,
    oe = {
      activeAgents: [],
      allAgents: []
    },
    ie = f ? Promise.resolve() : LR(ce(), P).then((e) => {
      oe = tpe(e, e.allAgents.filter((i) => {
        if (xSe(i)) return !0;
        return ZAe(i, "subagent", "definition"), !1
      }))
    }).catch((e) => {
      l(e)
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
    D = () => TWt(f);
  if (f) {
    let {
      toolOutputServerCapabilities: e
    } = import.meta.require("B:/~BUN/root/chunk-j1c3f4re.js"), i = e(D, E);
    if (i !== void 0) {
      if (C.registerCapabilities(i), !bje()) {
        let {
          backgroundCommands: x,
          keepsBackgroundCommandsCapability: q
        } = import.meta.require("B:/~BUN/root/chunk-cgm44pbr.js");
        C.registerCapabilities(q(x.of(c.host).life))
      }
    }
    if (E !== void 0) {
      let {
        holdsSafetyAsksCapability: x
      } = import.meta.require("B:/~BUN/root/chunk-22qr2fep.js");
      C.registerCapabilities(x());
      let {
        rendersUnderSessionRulesCapability: q
      } = import.meta.require("B:/~BUN/root/chunk-95vsf7hc.js");
      C.registerCapabilities(q())
    }
    let {
      uploadsUnderSessionRulesCapability: s,
      monitorUnderSessionRulesCapability: u
    } = import.meta.require("B:/~BUN/root/chunk-shj3djfw.js");
    C.registerCapabilities(s()), C.registerCapabilities(u());
    let {
      interfaceVersionCapability: O
    } = import.meta.require("B:/~BUN/root/chunk-7fa6zh58.js");
    C.registerCapabilities(O())
  }
  let F = null,
    Re = () => {
      if (F === null) return;
      let e = D().map((s) => s.name).join(`
`);
      if (e === F) return;
      let i = F;
      F = e, C.sendToolListChanged().catch((s) => {
        if (F === e) F = i;
        t(`mcp serve: tools/list_changed not sent: ${d(s)}`)
      })
    },
    le = !1,
    Ee = CO(() => {
      queueMicrotask(() => {
        if (le) return;
        try {
          Re()
        } catch (e) {
          t(`mcp serve: tool re-list on policy verdict failed: ${d(e)}`, {
            level: "error"
          })
        }
      })
    });
  C.onclose = () => {
    le = !0, Ee(), ae.abort(jl("shutdown"))
  }, C.setRequestHandler(zce, async () => {
    await ie;
    let e = await mKo(N, {
      agentDefinitions: oe
    });
    return F = e.map((i) => i.name).join(`
`), {
      tools: e
    }
  });
  let be = {
    session: c,
    run: (e) => e(),
    bind: (e) => e,
    [Symbol.dispose]: () => {}
  };

  function W(e, i, s) {
    let u = gg(ae),
      O = () => u.abort(jl("remote-cancel"));
    if (e.aborted) O();
    else e.addEventListener("abort", O, {
      once: !0
    });
    let x = new Te(ye),
      q, k = () => q ??= {
        ...wre(),
        ...h.kind === "parsed" && {
          toolPermissionContext: h.context
        }
      };
    return {
      toolUseContext: {
        abortController: u,
        messageQueue: Fg(),
        session: s,
        agentContext: {
          agentType: "main",
          agentId: Cy()
        },
        options: {
          commands: [],
          tools: i,
          toolCatalog: bY,
          mainLoopModel: tt(),
          thinkingConfig: {
            type: "disabled",
            mechanical: !0
          },
          mcpClients: [],
          mcpResources: {},
          isNonInteractiveSession: !0,
          runQuery: TL,
          debug: a,
          verbose: M,
          agentDefinitions: oe
        },
        getAppState: k,
        setAppState: () => {},
        markPrResolvedThisSession: () => {},
        isUltrareviewOverageConfirmed: () => !1,
        markUltrareviewOverageConfirmed: () => {},
        getAdvisorSetting: () => k().advisorModel,
        getMcp: () => k().mcp,
        getProactivityLevel: () => k().proactivityLevel,
        getWebBrowser: () => k().webBrowser,
        setToolPermissionContext: () => {},
        setSessionToolPermissionContext: () => {},
        taskRegistry: A6,
        queuedNotificationsRegistry: lot,
        sessionHooksRegistry: cnt,
        setWebBrowserSlice: () => {},
        setArtifactReadVersion: () => {},
        getArtifactReadObservation: Kbe(k),
        artifactRegistries: sot(),
        setArtifactContractTarget: () => {},
        getArtifactContractTarget: () => ({
          targetSlug: void 0,
          pins: {}
        }),
        enqueuePendingMemoryUpdate: () => {},
        agentLifecycle: hst,
        teammateColors: iot,
        rootToolSurface: {
          tools: i,
          mainLoopModel: tt()
        },
        messages: [],
        turnStartIndex: 0,
        readFileState: ve,
        dedupUnchangedReads: !1,
        toolState: x,
        toolDecisions: new Map,
        permissionRelays: _oe,
        getFileHistoryState: () => {
          return
        },
        applyFileHistoryOp: () => {},
        applyAttributionOp: () => {},
        storageV5: P,
        credentials: Ce
      },
      toolState: x
    }
  }
  return C.setRequestHandler(x8, async ({
    params: {
      name: e,
      arguments: i,
      _meta: s
    }
  }, {
    signal: u,
    sendNotification: O,
    authInfo: x,
    requestId: q
  }) => {
    let {
      transport: k
    } = C;
    using Pe = f ? import.meta.require("B:/~BUN/root/chunk-d13f5qs4.js").servingCall(c.host) : void 0;
    let K = (r) => f ? import.meta.require("B:/~BUN/root/chunk-d13f5qs4.js").withCpuReport(r, c.host, s) : r,
      re = f && k !== void 0 && kdn(c.host, s?.[TNr]),
      pe = () => {
        if (k !== void 0 && _e(k)) k.closeSSEStream(q)
      };
    if (u.aborted) pe();
    else u.addEventListener("abort", pe, {
      once: !0
    });
    if (await ie, f) {
      let {
        refuseCallerInterface: r
      } = import.meta.require("B:/~BUN/root/chunk-7fa6zh58.js"), {
        bringsToolHostPermissionRequest: y
      } = import.meta.require("B:/~BUN/root/chunk-j1c3f4re.js"), n = y(s) ? void 0 : r(e, s);
      if (n !== void 0) return n
    }
    if (h.kind === "unreadable") {
      let r = `${e} was not run: this server could not read its launch settings (CLAUDE_CODE_MCP_SERVE_SETTINGS), so it runs nothing.`;
      return t(`MCP server: ${r}`, {
        level: "error"
      }), {
        isError: !0,
        content: [{
          type: "text",
          text: r
        }]
      }
    }
    if (f && e !== (await import("B:/~BUN/root/chunk-0pwgdfxg.js")).RUN_MONITOR_COMMAND_CALL) {
      let {
        bringsToolHostPermissionRequest: r,
        refusedResult: y
      } = import.meta.require("B:/~BUN/root/chunk-j1c3f4re.js");
      if (r(s)) {
        let {
          handleToolHostPermissionRequest: n
        } = await import("B:/~BUN/root/chunk-cajh6mc2.js"), A = await n({
          name: e,
          args: i,
          meta: s,
          servedTools: D,
          launchPermissionContext: E,
          newCall: () => {
            let R = W(VDe.has(e) ? ge(u, x) : u, D(), c);
            return {
              toolUseContext: R.toolUseContext,
              release: () => te(R.toolState)
            }
          },
          startHeartbeat: () => Q(s?.progressToken, O),
          callerLogsSharedEvents: re
        });
        return K(A ?? y({
          code: "unsupported_protocol",
          message: `${e} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.`
        }))
      }
    }
    let de = i?.deny_rules;
    using v = E === void 0 && !(Array.isArray(de) && de.length > 0) ? be : (await import("B:/~BUN/root/chunk-06mph8sr.js")).ownCallDirectory(c, u);
    if (f) {
      let {
        countedUnlessRepeated: r,
        SERVED_FILE_CALLS: y
      } = await import("B:/~BUN/root/chunk-n7eqbgkh.js"), n = y.get(e);
      if (n) {
        using A = Q(s?.progressToken, O);
        let R, T = x?.extra?.[$hn];
        try {
          let {
            summary: J,
            output: G
          } = await r(e, v.bind(() => n(i, u, {
            toolUseContext: () => (R ??= W(u, D(), v.session)).toolUseContext,
            session: v.session,
            launchPermissionContext: E,
            workspaceRoot: w,
            ...re && {
              callerLogsSharedEvents: !0
            },
            reportProgress: A.report,
            callerGone: T instanceof AbortSignal ? T : void 0,
            meta: s,
            checkAsServedTool: async (V, o, L, X) => {
              let B = Pn(D(), V);
              if (!B?.isEnabled()) return {
                rejection: `${e} was not run: this server does not serve ${V}.`
              };
              let ee = fb(B, o);
              if (!ee.success) return {
                rejection: `${e} was not run: its input is not valid for ${V}: ${ee.error.message}`
              };
              let {
                toolUseContext: me
              } = R ??= W(u, D(), v.session), ne = await B.validateInput?.(ee.data, me);
              if (ne && !ne.result) return {
                rejection: `${e} was not run: ${V} refused its input: ${ne.message}`
              };
              let fe = X ?? E,
                Se = L.length === 0 ? fe : (await import("B:/~BUN/root/chunk-vf2nkpbg.js")).withDenyRulesOfOneCall(fe, L);
              if (L.length > 0 && Se === void 0) return {
                rejection: `${e} was not run: one of the deny rules sent with it could not be read. Retrying won't help.`
              };
              let {
                checkPlainCall: we
              } = await import("B:/~BUN/root/chunk-j1c3f4re.js");
              return we(B, ee.data, me, Se, s)
            }
          }))), {
            encodeServedOutput: U
          } = await import("B:/~BUN/root/chunk-7q8a24qj.js");
          return K(v.run(() => U(J, G)))
        } catch (J) {
          return K({
            isError: !0,
            content: [{
              type: "text",
              text: d(J)
            }]
          })
        } finally {
          if (R) te(R.toolState)
        }
      }
    }
    let z = D(),
      Z = f && VDe.has(e),
      ue = re;
    if (f && !Z) {
      let {
        answerToolOutputRequest: r
      } = await import("B:/~BUN/root/chunk-j1c3f4re.js"), y = await v.run(() => r({
        name: e,
        args: i,
        meta: s,
        tools: z,
        launchPermissionContext: E,
        newCall: () => {
          let n = W(u, z, v.session);
          return {
            toolUseContext: n.toolUseContext,
            release: () => te(n.toolState)
          }
        },
        startHeartbeat: () => Q(s?.progressToken, O)
      }));
      if (y !== void 0) return y
    }
    let S = Z ? $b(X_(), e) : $b(z, e);
    if (!S) throw Error(`Tool ${e} not found`);
    let {
      toolUseContext: se,
      toolState: he
    } = W(Z ? ge(u, x) : u, z, v.session);
    try {
      if (!S.isEnabled()) {
        let o = `Tool ${e} is not enabled`;
        return t(`MCP server: ${o}`, {
          level: "error"
        }), {
          isError: !0,
          content: [{
            type: "text",
            text: o
          }]
        }
      }
      let r = {
          ...i ?? {}
        },
        y = [];
      if (f) {
        for (let o of qDe)
          if (o in r) delete r[o], y.push(o)
      }
      let n = fb(S, r);
      if (!n.success) {
        let o = `Tool ${e} arguments failed schema validation: ${n.error.message}`;
        return t(`MCP server: ${o}`, {
          level: "error"
        }), {
          isError: !0,
          content: [{
            type: "text",
            text: o
          }]
        }
      }
      let A = await v.run(() => S.validateInput?.(n.data, se));
      if (A && !A.result) {
        let o = `Tool ${e} input is invalid: ${A.message}`;
        return t(`MCP server: ${o}`, {
          level: "error"
        }), {
          isError: !0,
          content: [{
            type: "text",
            text: o
          }]
        }
      }
      let R = !1;
      if (f && I === "rendered") {
        let {
          asksForEditResult: o
        } = await import("B:/~BUN/root/chunk-d2k9xyjz.js");
        R = o(S.name, s)
      }
      let T = await v.run(async () => (await import("B:/~BUN/root/chunk-j1c3f4re.js")).checkPlainCall(S, n.data, se, E, s));
      if ("rejection" in T) return t(`MCP server: ${T.rejection}`, {
        level: "error"
      }), {
        isError: !0,
        content: [{
          type: "text",
          text: T.rejection
        }],
        ...T.meta !== void 0 && {
          _meta: T.meta
        }
      };
      using J = Q(s?.progressToken, O);
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
        U, V = !1;
      if (Z) {
        let {
          encodeUnlistedToolResult: o
        } = await import("B:/~BUN/root/chunk-7q8a24qj.js");
        U = v.run(() => o(S, G))
      } else if (I === "rendered") {
        let {
          renderToolResultForMCP: o,
          withinAnswerLimit: L
        } = await import("B:/~BUN/root/chunk-wa545qwe.js"), {
          answer: X,
          tooLarge: B
        } = L(S, await v.run(() => o(S, G, se)));
        U = R ? await (await import("B:/~BUN/root/chunk-d2k9xyjz.js")).withEditResult(X, G) : X, V = B
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
        }
      }
      if (y.length > 0) {
        let o = Tet(y),
          L = U.content.at(-1);
        if (L?.type === "text") L.text += `
${o}`;
        else U.content.push({
          type: "text",
          text: o
        })
      }
      if (!ue)
        if (V) p(TPt(S.name), "result_too_large");
        else g(TPt(S.name));
      return K(U)
    } catch (r) {
      let n = (r instanceof Error ? zlo(r) : [String(r)]).filter(Boolean).join(`
`).trim() || "Error";
      if (c6e(r)) t(`MCP server tool call '${e}' aborted`);
      else {
        let {
          code: A,
          isSad: R
        } = CPt(r);
        if (R) {
          if (t(`MCP server tool call '${e}' failed: ${n}`, {
              level: "error"
            }), !ue) p(TPt(S.name), A)
        } else {
          let T = H(r);
          l("telemetryMessage" in T ? T : Ye(T, `mcp server tool '${S.name}' threw`)), m(TPt(S.name), A)
        }
      }
      return K({
        isError: !0,
        content: [{
          type: "text",
          text: n
        }]
      })
    } finally {
      te(he)
    }
  }), C
}

function te(a) {}

function ge(a, M) {
  let c = M?.extra?.[$hn];
  return c instanceof AbortSignal ? AbortSignal.any([a, c]) : a
}
export {
  $hn,
  CZs,
  OQn
};
