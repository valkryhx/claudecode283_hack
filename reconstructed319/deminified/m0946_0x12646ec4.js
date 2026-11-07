// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _P, zWs } from "B:/~BUN/root/chunk-game8aqv.js";
import { We, R, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a, ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Qd, Ui, HBt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { to, Dd } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { R_ } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Uo } from "B:/~BUN/root/chunk-4vxp7kvb.js";
import { rM } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { zw, Vd, kdt, vdt, JTn, Gw, Kve, k3t, W5e, s9, Edt, odr, gF, nxn, t9e, u9t, rxn, Ex, Gu, fw, jo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { UEe } from "B:/~BUN/root/chunk-mcdkvptw.js";
import { Zl } from "B:/~BUN/root/chunk-1tbewxs3.js";
import { qr, QCe } from "B:/~BUN/root/chunk-vmp6vbba.js";
import { zr, fI, GRt } from "B:/~BUN/root/chunk-7jbamvvk.js";
import { WM } from "B:/~BUN/root/chunk-bf9d8yv4.js";
import { Ns } from "B:/~BUN/root/chunk-4rgskab2.js";
import { NG } from "B:/~BUN/root/chunk-59sqv3yw.js";
import { Dui, BRt } from "B:/~BUN/root/chunk-pcgcya2e.js";
import { I8 } from "B:/~BUN/root/chunk-ryr6jnq0.js";
import { Cu } from "B:/~BUN/root/chunk-2d2hmxhb.js";
import { RS, Ssr } from "B:/~BUN/root/chunk-pyp8n05h.js";
import { ffi } from "B:/~BUN/root/chunk-eb8f1fhs.js";
import { ed, XTe } from "B:/~BUN/root/chunk-nk52yc3v.js";
import { Wwe } from "B:/~BUN/root/chunk-5ha2avah.js";
class U extends Error {}
var F = "Call the tool again: it is checked again each time, and Claude Code replaces it with the server's own tool once that is loaded.",
  ee = /^[A-Za-z0-9_-]+$/;
function W(n) {
  return n.every(item => ee.test(item.name)) && new Set(n.map(item => item.name)).size === n.length;
}
function K(row, o, e, dialer, isHandshakeHanded) {
  let s = {
    row: row,
    dialer: dialer,
    isHandshakeHanded: isHandshakeHanded,
    handedByName: new Map(W(e) ? e.map(item => [item.name, item]) : []),
    ask: void 0,
    passed: new Set()
  };
  for (let m of o) ne(s, m);
}
function ne(n, o) {
  let e = o.mcpInfo?.toolName,
    {
      call: call,
      validateInput: validateInput,
      checkPermissions: checkPermissions,
      askInputPreparer: askInputPreparer
    } = o;
  if (o.call = async (f, r, ...p) => {
    let y = await H(n, o, e, r);
    if (y !== void 0) throw new R(y, "MCP tool refused by the check of its handed listing");
    return call(f, r, ...p);
  }, o.validateInput = async (f, r) => {
    let message = await H(n, o, e, r);
    if (message !== void 0) return {
      result: !1,
      message: message,
      errorCode: 3
    };
    return (await validateInput?.(f, r)) ?? {
      result: !0
    };
  }, o.checkPermissions = async (f, r) => {
    let p = await H(n, o, e, r);
    if (p !== void 0) return {
      behavior: "deny",
      message: p,
      decisionReason: {
        type: "other",
        reason: p
      }
    };
    return checkPermissions(f, r);
  }, askInputPreparer !== void 0) o.askInputPreparer = async (f, r, p) => {
    let error = await H(n, o, e, r);
    return error === void 0 ? askInputPreparer(f, r, p) : {
      prepare: async () => ({
        error: error
      })
    };
  };
}
async function H(n, o, e, C) {
  let {
    row: row_2,
    handedByName: handedByName,
    passed: passed
  } = n;
  if (e === void 0) return D(row_2, o.name, "Claude Code could not tell which of the server's tools this is");
  let {
    signal: signal
  } = C.abortController;
  if (passed.has(e)) return;
  let r = n.ask ??= te(n, C.toolUseId),
    p;
  try {
    p = await WM(r.answer, {
      signal: signal,
      timeoutMs: 2 * ed(),
      serverName: row_2.name,
      context: "MCP tool check"
    });
  } catch (error) {
    if (V(n, r), We(error)) throw error;
    if (!r.hasAnswered || error instanceof U) {
      let M = r.hasAnswered ? d(error) : "the server did not answer in time";
      return I(n, r, "not_compared", `${D(row_2, e, M)} Try the call again.`);
    }
    return I(n, r, "not_compared", error instanceof R ? d(error) : D(row_2, e, Y(error, row_2)));
  }
  if (n.isHandshakeHanded && p.hasOtherHandshake) return I(n, r, "handshake", `MCP server "${row_2.name}" does not match what Claude Code was given at start-up (in its capabilities, name, version or instructions), so the call was not made. ${F}`);
  let y = p.tools.get(e);
  if (y === void 0 && p.mayListMore) return I(n, r, "not_compared", `${D(row_2, e, "the server's list could not be matched tool by tool")} ${F}`);
  if (!handedByName.has(e)) return I(n, r, "not_compared", `${D(row_2, e, "the list given at start-up could not be matched tool by tool")} ${F}`);
  if (y === void 0) return I(n, r, "tool_gone", `MCP server "${row_2.name}" no longer offers the tool "${e}", so the call was not made.`);
  if (!_P(y, handedByName.get(e))) return I(n, r, "tool_differs", `MCP server "${row_2.name}" lists the tool "${e}" differently from the definition that Claude Code was given at start-up, so the call was not made. ${F}`);
  g("mcp_handed_listing_check"), passed.add(e);
  return;
}
function te(n, o) {
  let e = {
    answer: oe(n, o),
    hasAnswered: !1
  };
  return e.answer.finally(() => {
    e.hasAnswered = !0;
  }).catch(() => {}), e;
}
async function oe({
  row: row_3,
  dialer: dialer_2,
  isHandshakeHanded: isHandshakeHanded_2
}, toolUseId) {
  let u = await dialer_2.ensureConnectedClient(row_3, {
      context: "MCP tool call",
      toolUseId: toolUseId
    }),
    s = u.instructions !== row_3.instructions;
  if (isHandshakeHanded_2 && s) c("mcp_handed_listing_check", "instructions_differ");
  let m = !_P(u.capabilities, row_3.capabilities) || u.serverInfo?.name !== row_3.serverInfo?.name || u.serverInfo?.version !== row_3.serverInfo?.version;
  if (isHandshakeHanded_2 && m) c("mcp_handed_listing_check", "handshake_differs");
  let f = await dialer_2.listToolsRaw(u.client, {
      timeout: ed()
    }).catch(p => {
      if (We(p)) throw p;
      throw new U(Y(p, row_3));
    }),
    r = W(f.tools);
  return {
    tools: new Map(r ? f.tools.map(item => [item.name, item]) : []),
    mayListMore: f.nextCursor !== void 0 || !r,
    hasOtherHandshake: s || m
  };
}
function V(n, o) {
  if (n.ask === o) n.ask = void 0;
}
function I(n, o, e, C) {
  if (V(n, o), e !== "handshake") c("mcp_handed_listing_check", e);
  return ae(n.row.name, C), C;
}
function D(n, o, e) {
  return `The tool "${o}" could not be checked against what MCP server "${n.name}" lists (${e}), so the call was not made.`;
}
function Y(n, o) {
  return Zl(Cu(o.name, o.config, Ns(n, o.config)));
}
function A() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
}
function Z(n) {
  let o = performance.now();
  try {
    let e = A();
    if (QCe("mcp_client_module_load_ms") === void 0) qr("mcp_client_module_load_ms", performance.now() - o, o);
    return e;
  } catch (error) {
    a(error), t(`[MCP] ${n} connect error: ${error}`);
    return;
  }
}
var D6s = 1000,
  Ffn = [500, 1500, 4000],
  re = Ffn.reduce((acc, item) => acc + item, 0);
function L6s(n) {
  let {
      regularMcpConfigs: o,
      claudeaiConfigPromise: claudeaiConfigPromise,
      state: state,
      storageV5: storageV5,
      credentials: credentials,
      dialInConnect: dialInConnect,
      onDialStart: onDialStart,
      dialFirst: dialFirst,
      dialOptions: dialOptions,
      leaveAlwaysLoadWaitTo: leaveAlwaysLoadWaitTo
    } = n,
    knownListings = n.knownListings && Er(n.knownListings, tools => Array.isArray(tools) ? {
      tools: tools
    } : tools),
    epoch = zr(),
    nonBlocking = i.MCP_CONNECTION_NONBLOCKING !== !1;
  zWs(nonBlocking);
  let deferConnect = nonBlocking;
  async function connect() {
    Uo("before_mcp_connect_user"), Uo("before_mcp_connect_connector");
    let L = tLo({
        configs: o,
        label: "regular",
        nonBlocking: nonBlocking,
        dialInConnect: dialInConnect,
        onDialStart: onDialStart,
        dialFirst: dialFirst,
        dialOptions: dialOptions,
        state: state,
        storageV5: storageV5,
        credentials: credentials,
        knownListings: knownListings,
        leaveAlwaysLoadWaitTo: leaveAlwaysLoadWaitTo
      }).then(() => Uo("after_mcp_connect_user")),
      w = z(nonBlocking, () => claudeaiConfigPromise.then(claudeaiConfigs => Q({
        claudeaiConfigs: claudeaiConfigs,
        regularMcpConfigs: o,
        state: state,
        deferConnect: deferConnect,
        storageV5: storageV5,
        epoch: epoch
      })).then(S => S === "superseded" ? [] : S), "claude.ai connectors").then(() => Uo("after_mcp_connect_connector"));
    await Promise.all([L, w]);
  }
  return {
    connect: connect
  };
}
function N6s(n) {
  return i.CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT === !0 && Boolean(n) && !R_();
}
function tLo(n) {
  let {
      configs: configs,
      label: label,
      nonBlocking: nonBlocking_2,
      state: state_2,
      storageV5: storageV5_2,
      credentials: credentials_2,
      knownListings: knownListings_2,
      dialInConnect: dialInConnect_2,
      onDialStart: onDialStart_2,
      dialFirst: dialFirst_2,
      dialOptions: dialOptions_2,
      leaveAlwaysLoadWaitTo: leaveAlwaysLoadWaitTo_2
    } = n,
    P = (S, b) => S.alwaysLoad === !0 || knownListings_2 !== void 0 && Object.hasOwn(knownListings_2, b),
    O = leaveAlwaysLoadWaitTo_2 === void 0 ? {} : rM(configs, (S, b) => S.alwaysLoad === !0 && S.scope === "dynamic" && !Qd(S) && !(knownListings_2 !== void 0 && Object.hasOwn(knownListings_2, b))),
    _ = rM(configs, (S, b) => P(S, b) && !Object.hasOwn(O, b)),
    L = rM(configs, (S, b) => !P(S, b)),
    w = Object.keys(_).length > 0;
  if (Object.keys(O).length > 0) {
    let S = x(O, `${label}-required`, state_2, !1, storageV5_2, credentials_2, knownListings_2, onDialStart_2, dialFirst_2, dialOptions_2);
    leaveAlwaysLoadWaitTo_2?.(() => z(!1, () => S, "--mcp-config alwaysLoad servers"));
  }
  return Promise.all([...(w ? [z(!1, () => x(_, `${label}-required`, state_2, !1, storageV5_2, credentials_2, knownListings_2, onDialStart_2, dialFirst_2, dialOptions_2), "--mcp-config alwaysLoad servers")] : []), z(nonBlocking_2, () => x(L, label, state_2, nonBlocking_2 && !dialInConnect_2, storageV5_2, credentials_2, knownListings_2, onDialStart_2, dialFirst_2, dialOptions_2), "--mcp-config servers")]).then(() => {});
}
function x(n, o, e, C = !1, u, s, m, f, r, p) {
  let y = Object.keys(n);
  if (y.length === 0) return [];
  let h = m && Er(m, S => S.tools);
  e.applyMcpUpdate(S => ({
    ...S,
    clients: [...S.clients, ...Object.entries(n).map(([name, config]) => ({
      name: name,
      type: "pending",
      config: config
    }))]
  }));
  let M = new Map(),
    P = y.map(item => new Promise(b => M.set(item, b))),
    O = Promise.withResolvers(),
    _ = new Set(),
    L = S => {
      for (let b of Object.keys(S)) _.add(b);
      $fn(S, e, u, void 0, O.promise).catch(b => t(`[MCP] ${o} retry error: ${b}`)).finally(() => {
        for (let b of Object.keys(S)) _.delete(b);
      });
    },
    w = () => {
      let S = Z(o);
      if (!S) {
        for (let k of M.values()) k();
        return;
      }
      if (f !== void 0 && y.some(item => !Object.hasOwn(h ?? {}, item))) f();
      let b = r === void 0 ? n : {
        ...rM(n, (k, v) => r(v)),
        ...n
      };
      S.getMcpToolsCommandsAndResources(k => {
        let {
            client: client
          } = k,
          B = Object.hasOwn(m ?? {}, client.name) ? m?.[client.name] : void 0,
          T = B?.handshake;
        if (client.type === "cached" && B !== void 0) client.listedByHost = !0;
        if (client.type === "cached" && T !== void 0) {
          client.capabilities = T.capabilities, client.serverInfo = {
            name: T.serverInfo.name,
            version: T.serverInfo.version
          };
          let j = S.capMcpInstructions(T.instructions, client.name, I8(client.config));
          if (j !== void 0) client.instructions = j;
        }
        if (client.type === "cached" && B?.comparedBeforeUse) K(client, k.tools, B.tools, S, T !== void 0);
        n1r(e, k), ffi();
        let {
          name: name_2
        } = k.client;
        if (M.get(name_2)?.(), !_.has(name_2)) {
          let j = rM(n, (le, X) => X === name_2);
          if (KYn(j, e).length > 0) L(j);
        }
      }, b, u, s, h, !0, void 0, p).catch(k => t(`[MCP] ${o} connect error: ${k}`)).finally(() => {
        for (let k of M.values()) k();
        O.resolve(performance.now()), L(rM(n, (k, v) => !_.has(v)));
      });
    };
  if (C) setImmediate(w);else w();
  return P;
}
function n1r(n, o) {
  let {
      client: client_2,
      tools: tools_2,
      commands: commands,
      attemptEpoch: attemptEpoch
    } = o,
    m,
    f = "applied",
    r = GRt(client_2.config, attemptEpoch);
  return n.applyMcpUpdate(p => {
    f = "applied", m = void 0;
    let y = p.clients.find(item => item.name === client_2.name);
    if (!y || y.config !== client_2.config && !A().areMcpConfigsEqual(y.config, client_2.config)) {
      if (client_2.type === "connected") ae(client_2.name, y ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)" : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)"), m = () => N(client_2);
      return f = "dropped", p;
    }
    if (r) {
      if (ae(client_2.name, "applyConnectionResult: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)"), client_2.type === "connected") m = () => {
        A().detachAndCloseConnection(client_2).catch(() => {});
      };
      return f = "superseded", p;
    }
    let h = client_2.type !== "failed" && client_2.type !== "disabled" ? Gu(client_2.name, client_2.config) : null;
    if (h !== "managed-policy" && !Ssr(client_2) && jo(client_2.name) && client_2.type !== "disabled") {
      let M = client_2.type === "connected" && y.type === "connected" && y.client === client_2.client;
      if (client_2.type === "connected" && !M) ae(client_2.name, "applyConnectionResult: disposing connect that settled after a disable"), m = () => N(client_2);
      if (f = "refused", y.type === "disabled" || y.type === "connected" && Ui(client_2)) return p;
      return G(p, {
        name: client_2.name,
        type: "disabled",
        config: y.config
      });
    }
    if (h) {
      if (client_2.type === "connected") ae(client_2.name, `applyConnectionResult: disposing connect that settled after a ${h} deny`);
      return m = () => {
        if (client_2.type === "connected") N(client_2);
        A().dropDiscoveryEntry(client_2.name, client_2.config).catch(() => {});
      }, f = "refused", G(p, {
        name: client_2.name,
        type: "failed",
        config: y.config,
        ...RS(h, client_2.name, client_2.config)
      });
    }
    if (!HBt(y, client_2)) return f = "dropped", p;
    return {
      ...p,
      clients: p.clients.map(item => item.name === client_2.name ? client_2 : item),
      tools: Wwe([...p.tools, ...tools_2], M => M.name),
      commands: Wwe([...p.commands, ...commands], M => M.name)
    };
  }), m?.(), f;
}
function KYn(n, o, e = !0) {
  let C = o.getClients();
  return Object.entries(n).filter(([u, s]) => {
    let m = C.find(item => item.name === u);
    return m !== void 0 && (kdt(m) || e && vdt(m)) && A().areMcpConfigsEqual(m.config, s);
  });
}
function Hfn(n) {
  let o = e => {
    let transientRetryPasses = bt().transientRetryPasses;
    for (let u of n) {
      let s = (transientRetryPasses.get(u) ?? 0) + e;
      if (s > 0) transientRetryPasses.set(u, s);else transientRetryPasses.delete(u);
    }
  };
  return o(1), {
    [Symbol.dispose]: () => o(-1)
  };
}
async function $fn(n, o, e, C = s => n1r(o, s), u) {
  let s = () => KYn(n, o);
  if (s().length === 0) return;
  using m = Hfn(Object.keys(n));
  let attemptEpoch_2 = zr(),
    {
      signal: signal_2
    } = o,
    p = performance.now(),
    y = 0;
  for (let [M, delayMs] of Ffn.entries()) {
    let O = M === Ffn.length - 1;
    if (await J(delayMs, signal_2), u !== void 0 && O) {
      let v = (await u) + re + y;
      await J(Math.max(0, v - performance.now()), signal_2);
    }
    if (signal_2?.aborted) return;
    if (zr() !== attemptEpoch_2) {
      t("[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)");
      return;
    }
    let _ = KYn(n, o, O);
    if (_.length === 0) {
      if (s().length > 0) continue;
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
    t(`[MCP] Retry attempt ${M + 1}: ${_.length} transiently-failed remote server(s)`);
    let L = [];
    for (let v of _) {
      if (!(await A().discardMemoizedConnectResult(...v))) continue;
      let [name_3, config_2] = v,
        E = Gu(name_3, config_2);
      if (E) {
        C({
          client: {
            name: name_3,
            type: "failed",
            config: config_2,
            ...RS(E, name_3, config_2)
          },
          tools: [],
          commands: [],
          attemptEpoch: attemptEpoch_2
        });
        continue;
      }
      L.push(v);
    }
    if (L.length === 0 || signal_2?.aborted) continue;
    let recovered = 0,
      stillRetryable = 0,
      b = performance.now(),
      sincePassStartMs = Math.round(b - p);
    if (await A().getMcpToolsCommandsAndResources(v => {
      if (!signal_2?.aborted) {
        if (C(v), v.client.type === "connected") recovered++;else if (JTn(v.client)) stillRetryable++;
      } else if (v.client.type === "connected") A().detachAndCloseConnection(v.client).catch(() => {});
    }, Object.fromEntries(L), e), y += performance.now() - b, !signal_2?.aborted) l("tengu_mcp_connect_retry_attempt", {
      attempt: M + 1,
      delayMs: delayMs,
      sincePassStartMs: sincePassStartMs,
      retryable: _.length,
      dialed: L.length,
      recovered: recovered,
      stillRetryable: stillRetryable
    });
    if (s().length === 0) {
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
  }
  let h = s();
  if (h.length > 0) t(`[MCP] Retry: ${h.length} remote server(s) still failed after all retries: ${h.map(([M]) => M).join(", ")}`);
}
async function z(n, o, e) {
  if (n) {
    Promise.resolve(o()).catch(() => {}), t(`[MCP] ${e} running fully async (nonblocking)`);
    return;
  }
  let C = o(),
    u = Date.now(),
    s = XTe(),
    m;
  if (Array.isArray(C)) m = C;else {
    let y,
      h = await Promise.race([C.catch(M => (a(M), "failed")), new Promise(M => {
        y = setTimeout(P => P("deadline"), s, M);
      })]);
    if (clearTimeout(y), h === "deadline") {
      t(`[MCP] ${e} config fetch not ready after ${s}ms \u2014 proceeding; background connection continues`);
      return;
    }
    if (h === "failed") {
      t(`[MCP] ${e} batch failed to start \u2014 proceeding without waiting on it`);
      return;
    }
    m = h;
  }
  let f = Math.max(0, s - (Date.now() - u));
  if (m.length === 0) return;
  let r = Z(e);
  if (!r) return;
  let p = await r.awaitEachWithDeadline(m, f);
  if (p > 0) t(`[MCP] ${e}: ${p}/${m.length} not ready after ${s}ms \u2014 proceeding; background connection continues`);
}
function F6s(state_3, storageV5_3, e) {
  Edt(), odr();
  let epoch_2 = zr(),
    u = (async () => {
      let s = await s9(e);
      if (!fI(epoch_2)) return q("list fetch");
      let {
        allowed: m,
        blocked: blocked
      } = Ex(s);
      if (W5e(), blocked.length > 0) t(`[MCP] claude.ai connectors blocked by enterprise policy after account switch: ${blocked.join(", ")}`);
      let restorablePlugins = await ie(state_3, storageV5_3),
        regularMcpConfigs = Object.fromEntries([...Object.entries(restorablePlugins), ...state_3.getClients().filter(item => item.config.scope !== "claudeai").map(item => [item.name, item.config])]);
      return Q({
        claudeaiConfigs: m,
        regularMcpConfigs: regularMcpConfigs,
        state: state_3,
        deferConnect: !1,
        storageV5: storageV5_3,
        epoch: epoch_2,
        restorablePlugins: restorablePlugins
      });
    })();
  return {
    mounted: u.then(s => s === "superseded" ? s : "mounted"),
    settled: u.then(s => s === "superseded" ? [] : Promise.all(s)).then(() => {})
  };
}
function q(n) {
  return t(`[MCP] claude.ai connector list superseded by an account switch (${n}) \u2014 not mounting`), "superseded";
}
async function Q(n) {
  if (!fI(n.epoch)) return q("list fetch");
  let o = await ce(n);
  if (!fI(n.epoch)) return q("dedup");
  return [...se(n.restorablePlugins ?? {}, o.suppressedPlugins, n.state, n.storageV5), ...de(o, n.state, n.deferConnect, n.storageV5)];
}
async function ie(n, storageV5_4) {
  let e = n.getSuppressedPluginServers();
  if (e.length === 0) return {};
  let {
      servers: servers,
      warnings: warnings
    } = await fw({}, {
      storageV5: storageV5_4
    }),
    s = rxn(warnings),
    m = {},
    f = new Set();
  for (let r of e) {
    let p = servers[r];
    if (p && p.pluginSource !== void 0) m[r] = p;else if (!s.has(r)) f.add(r);
  }
  if (f.size > 0) t(`[MCP] Dropping ${f.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[...f].join(", ")}`), n.applyMcpUpdate(r => ({
    ...r,
    suppressedPluginMcpServers: (r.suppressedPluginMcpServers ?? []).filter(item => !f.has(item))
  }));
  return m;
}
function se(n, o, e, C) {
  let u = new Set(e.getClients().map(item => item.name)),
    s = new Set(),
    m = {};
  for (let [r, p] of Object.entries(n)) {
    if (o.has(r)) continue;
    if (s.add(r), !u.has(r)) m[r] = p;
  }
  if (s.size === 0) return [];
  e.applyMcpUpdate(r => ({
    ...r,
    suppressedPluginMcpServers: (r.suppressedPluginMcpServers ?? []).filter(item => !s.has(item))
  }));
  let f = Object.keys(m);
  if (f.length > 0) t(`[MCP] Restoring ${f.length} plugin server(s) no longer duplicated by claude.ai connectors after account switch: ${f.join(", ")}`);
  return x(m, "plugin-restore", e, !1, C);
}
async function ce(n) {
  let {
      claudeaiConfigs: claudeaiConfigs_2,
      regularMcpConfigs: regularMcpConfigs_2,
      state: state_4
    } = n,
    u = u9t(regularMcpConfigs_2),
    suppressedPlugins = new Set(u);
  if (u.length > 0) t(`[MCP] Removing ${u.length} plugin server(s) that the organization's connector settings block: ${u.join(", ")}`);
  if (Object.keys(claudeaiConfigs_2).length > 0 || suppressedPlugins.size > 0) {
    let f = new Set(),
      r = new Set();
    for (let h of Object.values(claudeaiConfigs_2)) {
      let M = gF(h);
      if (M) (BRt(h) ? r : f).add(M);
    }
    let p = [],
      kept;
    for (let [h, M] of Object.entries(regularMcpConfigs_2)) {
      if (!h.startsWith("plugin:")) continue;
      if (suppressedPlugins.has(h)) continue;
      let P = gF(M);
      if (!P) continue;
      if (f.has(P)) suppressedPlugins.add(h);else if (r.has(P)) {
        if (p.push(h), kept ??= Dui(), !kept) suppressedPlugins.add(h);
      }
    }
    if (p.length > 0) l("tengu_mcp_plugin_beside_ineligible_connector", {
      plugin_server_count: p.length,
      kept: kept
    });
    if (kept) t(`[MCP] Lazy dedup: keeping ${p.length} plugin server(s) whose only duplicate claude.ai connectors are ineligible: ${p.join(", ")}`);
    if (suppressedPlugins.size > 0) {
      if (suppressedPlugins.size > u.length) {
        let h = new Set(u);
        t(`[MCP] Lazy dedup: suppressing ${suppressedPlugins.size - u.length} plugin server(s) that duplicate claude.ai connectors: ${[...suppressedPlugins].filter(item => !h.has(item)).join(", ")}`);
      }
      for (let h of state_4.getClients()) {
        if (!suppressedPlugins.has(h.name) || !(Ui(h) || h.type === "pending")) continue;
        if (h.type === "connected") UEe(h, void 0), A().clearServerCache(h.name, h.config).catch(() => {});else A().disposeServerConnectionDetached(h.name, h.config);
      }
      state_4.applyMcpUpdate(h => {
        let {
          clients: clients,
          tools: tools_3,
          commands: commands_2,
          resources: resources
        } = h;
        clients = clients.filter(item => !suppressedPlugins.has(item.name)), tools_3 = tools_3.filter(item => !item.mcpInfo || !suppressedPlugins.has(item.mcpInfo.serverName));
        for (let w of suppressedPlugins) commands_2 = Kve(commands_2, w), resources = k3t(resources, w);
        let suppressedPluginMcpServers = [...(h.suppressedPluginMcpServers ?? []).filter(item => !suppressedPlugins.has(item)), ...suppressedPlugins];
        return {
          ...h,
          clients: clients,
          tools: tools_3,
          commands: commands_2,
          resources: resources,
          suppressedPluginMcpServers: suppressedPluginMcpServers
        };
      });
    }
  }
  let m = rM(regularMcpConfigs_2, (f, r) => !r.startsWith("plugin:"));
  return {
    ...(await t9e(claudeaiConfigs_2, m)),
    suppressedPlugins: suppressedPlugins
  };
}
function de({
  servers: servers_2,
  suppressed: o
}, e, C, u) {
  return e.applyMcpUpdate(s => nxn(s.suppressedClaudeAiConnectors ?? [], o) ? s : {
    ...s,
    suppressedClaudeAiConnectors: o
  }), x(servers_2, "claudeai", e, C, u);
}
function G(n, o) {
  let e = to(o.name);
  return {
    ...n,
    clients: n.clients.map(item => item.name === o.name ? o : item),
    tools: NG(n.tools, C => Dd(C, o.name, e)),
    commands: NG(n.commands, C => Gw(C, o.name)),
    resources: zw(n.resources, o.name),
    resourceTemplates: zw(n.resourceTemplates, o.name)
  };
}
function N(n) {
  if (Vd()) UEe(n, void 0);
  n.cleanup().catch(() => {}), A().clearServerCache(n.name, n.config).catch(() => {});
}
export { D6s, Ffn, L6s, N6s, tLo, n1r, KYn, Hfn, $fn, F6s };