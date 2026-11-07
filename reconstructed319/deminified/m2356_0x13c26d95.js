// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, R, qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { vt, sg, t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { a, ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { xa, Ab, Vf, Xko, hn, v, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ng } from "B:/~BUN/root/chunk-65j2302z.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { EO, qy, q3 } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { Id, Dzn, $n, Sd, Tbt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { br, rwe } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { Ou, Aet } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { BDr } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { Ns } from "B:/~BUN/root/chunk-4rgskab2.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { uee } from "B:/~BUN/root/chunk-s9vv4h32.js";
import { w3e, y1e } from "B:/~BUN/root/chunk-2r6mec8n.js";
import { Hee } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { pde, adr, vMe, b$ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Dtn, kFn, XLe } from "B:/~BUN/root/chunk-detjgwj4.js";
import { SLn, bLe } from "B:/~BUN/root/chunk-wm0axmjp.js";
import { sFi, Dze, Lze } from "B:/~BUN/root/chunk-cj2cn5y2.js";
import { dD, D2 as toolName } from "B:/~BUN/root/chunk-pjcve3z9.js";
import { Y0e } from "B:/~BUN/root/chunk-4ffx6rrs.js";
import { PDn, zTe } from "B:/~BUN/root/chunk-8ytf4evt.js";
import { Vat } from "B:/~BUN/root/chunk-gxjwzbjn.js";
import { r5e, u7o, h7o } from "B:/~BUN/root/chunk-6c65wqph.js";
import { sre, ire } from "B:/~BUN/root/chunk-44wgxs8c.js";
import { b1e, I3e, uvn, pvn } from "B:/~BUN/root/chunk-560mcemn.js";
import { Nui, Ror, Fui } from "B:/~BUN/root/chunk-wwbphjk5.js";
import { _Ie } from "B:/~BUN/root/chunk-bq7y7t0q.js";
import { zr } from "B:/~BUN/root/chunk-7jbamvvk.js";
import { ZRt } from "B:/~BUN/root/chunk-z6x3rhe7.js";
import { dlt } from "B:/~BUN/root/chunk-hm7jb5w7.js";
import { Osr } from "B:/~BUN/root/chunk-grafhwky.js";
import { bvn, mAt } from "B:/~BUN/root/chunk-wabgka6b.js";
import { zM } from "B:/~BUN/root/chunk-kr1v6gnh.js";
import { Mft } from "B:/~BUN/root/chunk-4xx5w1am.js";
import { Al } from "B:/~BUN/root/chunk-md18120p.js";
import { yw } from "B:/~BUN/root/chunk-x0zaah42.js";
import { Vq } from "B:/~BUN/root/chunk-e99p2x0p.js";
import { Ta as serverName_2, zFe, uJi, IDr, fJi as message } from "B:/~BUN/root/chunk-e0q1m1z9.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, oe, u, me } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { cnt } from "B:/~BUN/root/chunk-0mf55a06.js";
function Ae(e, r, n) {
  var i = -1,
    d = e.length,
    s = r.length,
    f = {};
  while (++i < d) {
    var h = i < s ? r[i] : void 0;
    n(f, e[i], h);
  }
  return f;
}
var pe = Ae;
function ke(e, r) {
  return pe(e || [], r || [], cnt);
}
var nor = ke;
var Pe = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;
function ror(e) {
  if (!Pe.test(e)) return;
  l("tengu_git_operation", {
    operation: b("pr_create")
  }), Mft()?.add(1);
}
var Re = 0,
  Y = 1;
class URt {
  ws;
  parseMessage;
  started = !1;
  opened;
  constructor(e, r) {
    this.ws = e;
    this.parseMessage = r;
    this.opened = new Promise((i, d) => {
      if (this.ws.readyState === Y) i();else {
        let ws = this.ws,
          f = () => {
            ws.removeEventListener("open", f), ws.removeEventListener("error", h), i();
          },
          h = C => {
            ws.removeEventListener("open", f), ws.removeEventListener("error", h), V("error", "mcp_websocket_connect_fail"), d(F(C.error ?? C));
          };
        ws.addEventListener("open", f), ws.addEventListener("error", h);
      }
    }), this.opened.catch(() => {});
    let ws_2 = this.ws;
    ws_2.addEventListener("message", this.onBunMessage), ws_2.addEventListener("error", this.onBunError), ws_2.addEventListener("close", this.onBunClose);
  }
  onclose;
  onerror;
  onmessage;
  onBunMessage = e => {
    try {
      let r = typeof e.data === "string" ? e.data : String(e.data);
      if (Buffer.byteLength(r) > Vq) {
        this.handleError(new R(`MCP server sent a WebSocket message over ${Vq / 1024 / 1024} MiB. Claude Code did not read it and closed the connection.`, "mcp websocket message over the cap")), this.close().catch(() => {});
        return;
      }
      let n = ee(r),
        i = this.parseMessage(n);
      this.onmessage?.(i);
    } catch (error) {
      this.handleError(error);
    }
  };
  onBunError = () => {
    this.handleError(Error("WebSocket error"));
  };
  onBunClose = () => {
    this.handleCloseCleanup();
  };
  handleError(e) {
    V("error", "mcp_websocket_message_fail"), this.onerror?.(F(e));
  }
  handleCloseCleanup() {
    this.onclose?.();
    let ws_3 = this.ws;
    ws_3.removeEventListener("message", this.onBunMessage), ws_3.removeEventListener("error", this.onBunError), ws_3.removeEventListener("close", this.onBunClose);
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if (await this.opened, this.ws.readyState !== Y) throw V("error", "mcp_websocket_start_not_opened"), Error("WebSocket is not open. Cannot start transport.");
    this.started = !0;
  }
  async close() {
    if (this.ws.readyState === Y || this.ws.readyState === Re) this.ws.close();
    this.handleCloseCleanup();
  }
  async send(e) {
    if (this.ws.readyState !== Y) throw V("error", "mcp_websocket_send_not_opened"), Error("WebSocket is not open. Cannot send message.");
    let r = _(e);
    try {
      this.ws.send(r);
    } catch (error) {
      throw this.handleError(error), error;
    }
  }
}
var dge = "CONNECT_SUSPENDED",
  Z = 10;
function Q4t(clock) {
  return {
    clock: clock,
    awakeStart: clock.monotonicNow(),
    wallStart: clock.now()
  };
}
function Z4t({
  clock: clock_2,
  awakeStart: awakeStart,
  wallStart: wallStart
}) {
  return `${Math.round(clock_2.now() - wallStart)}ms, ${Math.round(clock_2.monotonicNow() - awakeStart)}ms of it awake`;
}
function oor(e, {
  clock: clock_3,
  awakeStart: awakeStart_2,
  wallStart: wallStart_2
}) {
  if (!(clock_3.now() - wallStart_2 - (clock_3.monotonicNow() - awakeStart_2) > BDr) || !v("tengu_mcp_connect_suspend_redial", !0)) return;
  return `MCP server "${e}" connection timed out. Your computer went to sleep or its clock changed while connecting.`;
}
async function sor(e, r, n) {
  let i = zr(),
    d = await e(),
    s = 0;
  while (s < Z && d.type === "failed" && d.errorCode === dge && r() && zr() === i) s++, ae(d.name, `Connecting again after a sleep or a clock change (${s} of at most ${Z})`), d = await e();
  if (s === 0) return d;
  if (d.type !== "failed") g("mcp_connect_suspend_redial");else if (d.errorCode !== dge) c("mcp_connect_suspend_redial", "failed");else if (c("mcp_connect_suspend_redial", "slept_again"), s === Z && r()) n();
  return d;
}
var Me = 100,
  Ie = 400,
  Oe = 100,
  fe = 300,
  Le = 600;
function ior() {
  if (sg()) throw Error("Claude Code is shutting down; not starting this MCP server process");
}
function eYt(e) {
  let r = vt(() => Fe(e));
  return e.once("exit", () => r()), r;
}
function J(e) {
  return e.exitCode !== null || e.signalCode !== null;
}
async function Fe(e) {
  let pid = e.pid;
  if (pid === void 0 || J(e)) return;
  if (x() === "windows") {
    t(`[MCP] stdio server process ${pid} has no established connection at exit; closing its stdin`), await Ckn(e);
    return;
  }
  let promise = new Promise(d => {
      e.once("exit", () => d());
    }),
    i = [["SIGINT", Me], ["SIGTERM", Ie], ["SIGKILL", Oe]];
  for (let [d, s] of i) {
    if (J(e)) return;
    t(`[MCP] stdio server process ${pid} has no established connection at exit; sending ${d}`);
    try {
      e.kill(d);
    } catch {
      return;
    }
    await we(promise, s);
  }
}
async function Ckn(e) {
  let pid_2 = e.pid;
  if (pid_2 === void 0 || J(e)) return;
  let promise_2 = new Promise(i => {
    e.once("exit", () => i());
  });
  if (e.stdin?.end(), await we(promise_2, fe), J(e)) return;
  t(`[MCP] stdio server process ${pid_2} is still running ${fe}ms after stdin closed; terminating its process tree`), Ab(pid_2), await we(promise_2, Le);
}
function Ne() {
  return ng() && rn("tengu_eventual_noodle", !1) === !0;
}
function he(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text";
}
async function aor(e, r) {
  if (!Ne()) return;
  let n = await r([...e.filter(item => !he(item)), ...e.filter(he)]);
  if (n.content.every(item => item.type === "text" && item.text.trim() === "")) {
    if (n.content.length > 0) c("mcp_content_over_structured", "blank_text");
    return;
  }
  return g("mcp_content_over_structured"), n;
}
function lor() {
  return v("tengu_serene_teapot", !0) !== !1;
}
var weakSet = new WeakSet();
function Oui(e) {
  return weakSet.has(e);
}
function dor(e, r, n) {
  let i = new URL(n).href,
    d = !1;
  return async (s, f) => {
    if (new URL(s).href !== i) return e(s, f);
    if (d && f?.method === "GET" && !new Headers(f.headers).has("last-event-id")) {
      ae(r, "Listen-stream GET not sent: the server's last answer had an Allow header that does not list GET, so Claude Code answered the GET with 405 itself");
      let response = new Response(null, {
        status: 405,
        statusText: "Method Not Allowed"
      });
      return weakSet.add(response), response;
    }
    let h = await e(s, f),
      C = h.headers.get("allow");
    return d = C !== null && !C.split(",").some(item => item.trim().toUpperCase() === "GET"), h;
  };
}
var _e = 1000,
  De = 30000,
  Ue = {
    now: () => performance.now(),
    arm: (e, r) => {
      let n = setTimeout(e, r).unref();
      return () => clearTimeout(n);
    }
  };
function $at(e, r, n = Ue) {
  let i = !0,
    d,
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    f = _e,
    h = () => {
      f = _e, i = !0;
    },
    C = () => {
      let k = d;
      if (d = void 0, k === void 0) {
        h();
        return;
      }
      (async () => r(k.cause))().catch(M => {
        ae(e.name, `list_changed refetch failed: ${Ns(M, e.config)}`);
      }).finally(() => {
        if (NEGATIVE_INFINITY = n.now(), k.settle(), d === void 0) {
          h();
          return;
        }
        A(), f = Math.min(f * 2, De);
      });
    },
    S = () => {
      if (_Ie(e)) {
        d?.settle(), d = void 0, h();
        return;
      }
      C();
    },
    A = () => {
      i = !1;
      let k = NEGATIVE_INFINITY + f - n.now();
      if (k > 0) n.arm(S, k);else C();
    };
  return cause => {
    let M = d;
    if (M === void 0) {
      let settle = () => {},
        y = new Promise(P => settle = P);
      if (M = d = {
        cause: cause,
        settled: y,
        settle: settle
      }, i) A();
    } else M.cause = cause;
    return M.settled;
  };
}
var xe = p(() => u({
    server_instructions: o().optional(),
    server_instructions_by_server: me(o(), o()).optional(),
    tools: me(o(), o()).optional(),
    search_hints: me(o(), o()).optional(),
    param_descriptions: me(o(), me(o(), o())).optional(),
    prompts: me(o(), o()).optional(),
    skills: me(o(), o()).optional()
  })),
  He = p(() => me(o(), oe()));
function Uat(e) {
  if (!e.pluginSource) return;
  let {
    name: name,
    marketplace: marketplace
  } = $n(e.pluginSource);
  if (!Sd(marketplace) && !Tbt(name, marketplace)) return;
  let i = v("tengu_official_plugin_prompt_overrides", {}),
    d = He().safeParse(i);
  if (!d.success) {
    t("tengu_official_plugin_prompt_overrides: GB payload is not an object; ignoring", {
      level: "error"
    });
    return;
  }
  let s = d.data[name];
  if (s === void 0) return;
  let f = xe().safeParse(s);
  if (!f.success) {
    t(`tengu_official_plugin_prompt_overrides: entry for '${name}' failed schema (${f.error.issues[0]?.message}); using baked-in text`, {
      level: "error"
    });
    return;
  }
  let h = f.data;
  if (Object.keys(h).length === 0) return;
  return {
    ...h,
    server_instructions_by_server: B(h.server_instructions_by_server),
    tools: B(h.tools),
    search_hints: B(h.search_hints),
    param_descriptions: B(h.param_descriptions),
    prompts: B(h.prompts),
    skills: B(h.skills)
  };
}
function B(e) {
  if (e === void 0) return;
  let r = Object.create(null);
  return Object.assign(r, e);
}
function cor(e, r) {
  if (!e) return;
  let server_instructions_by_server = e.server_instructions_by_server;
  if (server_instructions_by_server) {
    let i = rwe(r),
      d = i && server_instructions_by_server[i.serverName];
    if (d !== void 0) return d;
  }
  return e.server_instructions;
}
function uor(e, r) {
  if (!r || !e.properties) return e;
  let properties = {
      ...e.properties
    },
    i = !1;
  for (let [d, description] of Object.entries(r)) {
    let f = properties[d];
    if (f !== null && typeof f === "object") properties[d] = {
      ...f,
      description: description
    }, i = !0;
  }
  if (!i) return e;
  return {
    ...e,
    properties: properties
  };
}
var je = new W(() => new Map());
function Be() {
  return je.of(H().host);
}
function por(e, r, call) {
  let i = Be().get(e);
  if (i === void 0 || !i.toolNames.has(r)) return {
    mayOverlap: !1,
    call: call
  };
  return {
    mayOverlap: !0,
    call: (d, s, ...f) => i.slots.run(s.abortController.signal, () => call(d, s, ...f))
  };
}
var tYt = {
  getValidator(e) {
    if (xa().claim("mcp_output_schema_unchecked")) t("An MCP server listed a tool with an outputSchema in a session that compiles no schemas; that tool's results are not checked against it", {
      level: "warn"
    });
    return data => ({
      valid: !0,
      data: data,
      errorMessage: void 0
    });
  }
};
class Q {
  byMessageId = new Map();
}
function mor(e, r) {
  if (!r) return {};
  let n = e.get(Q).byMessageId.get(r);
  return {
    ["anthropic/memory.response_id"]: r,
    ...(n !== void 0 && {
      ["anthropic/memory.chain"]: n
    })
  };
}
function hor(e, r, n) {
  if (!r || !n || !("anthropic/memory.chain" in n)) return;
  let i = n["anthropic/memory.chain"],
    byMessageId = e.get(Q).byMessageId;
  if (byMessageId.delete(r), typeof i !== "string" || i.length > 16384) return;
  byMessageId.set(r, i);
  for (let s of byMessageId.keys()) {
    if (byMessageId.size <= 8) break;
    byMessageId.delete(s);
  }
}
function Bat(e) {
  return async (r, n) => {
    let i = await e(r, n);
    if (![301, 302, 303, 307, 308].includes(i.status) || !i.headers.has("Location")) return i;
    let headers = new Headers(i.headers);
    return headers.delete("Location"), new Response(i.body, {
      status: i.status,
      statusText: i.statusText,
      headers: headers
    });
  };
}
function gor() {
  let e = hn();
  if (!e) return;
  return {
    accountUuid: e.accountUuid,
    organizationUuid: e.organizationUuid,
    credentialInstalled: Vf() || Xko()
  };
}
function yor(e, listed, n) {
  let i = () => import("B:/~BUN/root/chunk-rvk0xfay.js"),
    d = (input, y) => ({
      listed: listed,
      input: input,
      toolPermissionContext: se(y),
      callTool: n(y),
      signal: y.abortController.signal,
      session: y.session
    }),
    validateInput = e.validateInput;
  e.validateInput = async (E, y) => (await i()).validateToolFileInputs(listed, validateInput, E, y);
  let f = br(listed.client.name, listed.name),
    h = E => XLe(se(E)).has(f),
    C = () => kFn(e, f),
    checkPermissions = e.checkPermissions;
  e.checkPermissions = async (E, y) => {
    let P = await checkPermissions.call(e, E, y);
    if (P.behavior === "deny" || !h(y)) return P;
    if (P.behavior !== "ask") return C();
    let {
      suggestions: suggestions,
      ...U
    } = P;
    return {
      ...U,
      matchedAskRule: Dtn(f)
    };
  };
  let permissionCheckFailureDecision = e.permissionCheckFailureDecision;
  e.permissionCheckFailureDecision = (E, y) => {
    let P = permissionCheckFailureDecision?.call(e, E, y);
    return P?.behavior !== "deny" && h(y) ? C() : P;
  };
  let k = e.call;
  e.call = async (E, y, ...P) => {
    let {
        argsWithFileInputs: argsWithFileInputs
      } = await i(),
      U = await argsWithFileInputs({
        ...d(E ?? {}, y),
        toolUseId: y.toolUseId
      });
    return k(U, y, ...P);
  };
  let askInputPreparer = e.askInputPreparer;
  if (e.askInputPreparer = async (E, y, toolUseId) => (await i()).fileInputAskPreparer({
    ...d(E, y),
    toolUseId: toolUseId
  }) ?? askInputPreparer?.(E, y, toolUseId), q()) ze()?.applyArtifactFileCard(e, listed.meta, listed.client);
}
function ze() {
  return import.meta.require("B:/~BUN/root/chunk-z0e85ng6.js");
}
class X {
  answer;
  constructor(e) {
    this.answer = e;
  }
}
async function We(e, r, n) {
  let i = r.requestState === void 0 || r.inputResponses === void 0 ? {
    repeated: !1
  } : {
    repeated: !0,
    requestState: r.requestState,
    inputResponses: r.inputResponses
  };
  for (let d = 0;; d++) try {
    let result = await e(r.arguments, i);
    if (result.interrupted) throw new Ke();
    if (d > 0) g("mcp_session_recovery");
    return result.inputRequired ?? new X({
      result: result
    });
  } catch (s) {
    if (s instanceof EO) {
      if (!s.mayHaveRun && d === 0) {
        c("mcp_session_recovery", s.expiryKind);
        continue;
      }
      m("mcp_session_recovery", d === 0 ? "may_have_run_no_retry" : "session_retry_exhausted");
    } else if (d > 0 && !n.aborted) m("mcp_session_recovery", "retry_failed_other");
    if (s instanceof qy) return new X({
      toolError: s
    });
    if (typeof s === "object" && s !== null) PDn(s);
    throw s;
  }
}
async function Ce(e, r, {
  context: n,
  canUseTool: canUseTool,
  serverName: serverName
}) {
  if (!(r instanceof X)) throw new R("Claude Code could not read the connector's answer because of a bug in Claude Code, so it is not known whether the tool ran. Tell the user before calling the tool again.", "MCP connector file upload: final answer was not a tool result");
  if ("toolError" in r.answer) throw PDn(r.answer.toolError), r.answer.toolError;
  let result_2 = r.answer.result;
  if (result_2.downloadOffers !== void 0) {
    let k;
    await Vat(result_2, e, {
      canUseTool: canUseTool,
      toolUseContext: n,
      signal: n.abortController.signal,
      onAwaitingUserInput: M => {
        if (M) k ??= Hee();else k?.(), k = void 0;
      },
      serverName: serverName,
      imageLimits: Al(n.options.mainLoopModel)
    });
  }
  let {
      content: f,
      _meta: _meta,
      structuredContent: structuredContent,
      resourceLinks: resourceLinks
    } = result_2,
    _meta_2 = ZRt(e, zM(_meta));
  return {
    data: f,
    ...((_meta_2 || structuredContent || resourceLinks) && {
      mcpMeta: {
        ...(_meta_2 && {
          _meta: _meta_2
        }),
        ...(structuredContent && {
          structuredContent: structuredContent
        }),
        ...(resourceLinks && {
          resourceLinks: resourceLinks
        })
      }
    })
  };
}
function _or(e, r, n) {
  if (yw(r.client.config) === void 0) return;
  if (!u7o(() => !r5e() && mAt())) {
    Ge(e, r, n !== void 0);
    return;
  }
  let i = {
      ...r,
      speaksFiles: n !== void 0 && SLn(r.client),
      ...(n === void 0 && {
        sendsNoFiles: !0
      })
    },
    d = !1,
    s = !1;
  try {
    let C = ye(i);
    s = C.anothers, d = !s && C.schemaMarksAFile && Ve(i);
  } catch (error) {
    t(`[${e.name}] Claude Code could not work out whether this tool takes files, so it will not upload files for this tool. The tool can still be called as usual, unless Claude Code has shown the model a path in place of a file in this session: then this tool's calls may fail.`, {
      level: "warn"
    }), a(qe(error, "MCP connector file upload: checking whether a tool takes files failed, so the tool was left without file upload"));
  }
  if (s) return;
  let f = (C, S) => async A => {
      if (n === void 0) throw new bLe(r.client.name);
      return We(n(C, S), A, C.abortController.signal);
    },
    h = (context, canUseTool_2) => async A => Ce(r.client.config, A, {
      context: context,
      canUseTool: canUseTool_2,
      serverName: r.client.name
    });
  if (d) {
    re().wrapConnectorUploadTool(e, i, f, h);
    return;
  }
  Se(e, C => re().connectorUploadChecks(e, C, i, f, h));
}
function ye(e) {
  let r = bvn(e);
  return {
    anothers: r === "file_reference" || Lze(e.client, e.name) !== void 0 || r === "listed_mark" && Y0e.some(item => uee(e.client, item)) || w3e(e.name) && y1e(e.client),
    schemaMarksAFile: r === "schema_mark"
  };
}
function Ge(e, r, n) {
  let i;
  Se(e, d => re().connectorUploadChecks(e, d, {
    ...r,
    speaksFiles: n && SLn(r.client),
    ...(!n && {
      sendsNoFiles: !0
    }),
    listedBeforeUploads: !0
  }, () => async () => {
    throw new bLe(r.client.name);
  }, (context_2, canUseTool_3) => async h => Ce(r.client.config, h, {
    context: context_2,
    canUseTool: canUseTool_3,
    serverName: r.client.name
  })), d => u7o() && h7o(d()) && !(i ??= $e(e, r)));
}
function $e(e, r) {
  try {
    return ye(r).anothers;
  } catch (error) {
    return t(`[${e.name}] Claude Code could not work out whether another file feature owns this tool, which was listed while uploads read off, so its calls go through the upload's checks.`, {
      level: "warn"
    }), a(qe(error, "MCP connector file upload: checking who owns a tool listed with uploads off failed, so the tool was put behind the checks")), !1;
  }
}
function Ve(e) {
  if (!e.speaksFiles) return !1;
  let {
    connectorUploadMayAct: connectorUploadMayAct
  } = import.meta.require("B:/~BUN/root/chunk-edd8tg8c.js");
  return connectorUploadMayAct(e);
}
function re() {
  return import.meta.require("B:/~BUN/root/chunk-qywccfct.js");
}
function Se(e, r, n = i => h7o(i())) {
  let i = {
      validateInput: e.validateInput,
      checkPermissions: e.checkPermissions,
      call: e.call
    },
    d;
  e.validateInput = async (s, f) => n(() => f?.messages) ? (d ??= r(i)).validateInput(s, f) : (await i.validateInput?.call(e, s, f)) ?? {
    result: !0
  }, e.checkPermissions = async (s, f) => n(() => f?.messages) ? (d ??= r(i)).checkPermissions(s, f) : i.checkPermissions.call(e, s, f), e.call = async (...s) => n(() => s[1]?.messages) ? (d ??= r(i)).call(...s) : i.call.call(e, ...s);
}
var Ye = new Set(ire.map(item => item.name)),
  Je = "anthropic/chromeWorkerDecides",
  Xe = "claudecode/chromeJudgedSite",
  Ze = "anthropic/chromeOwnTabsUnasked",
  Qe = new Set(["computer", "find", "form_input", "get_page_text", "read_page", "read_console_messages", "read_network_requests"]),
  Ee = "tabs_context_mcp",
  eo = 259,
  oo = 5000;
function bor(e, r, n) {
  let name_2 = `${dD}${e}`,
    weakMap = new WeakMap(),
    checkPermissions_2 = async (updatedInput, h) => {
      Osr(h.options?.messageClientPlatform);
      let C = [],
        S = !1,
        A = !0,
        k = new Set(),
        M = () => q() && Dze.peek(h.session)?.host === void 0;
      if (e === "file_upload" && M()) return ne(zFe);
      if (e === "file_upload" && r?.[sFi] === !0 && !ve(e, se(h))) return ne(uJi);
      if (e === "navigate") {
        if (typeof updatedInput.url !== "string") return z("navigate url is not a string");
        C.push(updatedInput.url);
      } else if (e === "browser_batch") {
        if (updatedInput.actions !== void 0 && !Array.isArray(updatedInput.actions)) return z("batch actions is not an array");
        for (let w of Array.isArray(updatedInput.actions) ? updatedInput.actions : []) {
          if (!D(w) || typeof w.name !== "string") return z("unreadable batch item");
          if (w.name === "browser_batch") return z("nested batch");
          if (!Ye.has(w.name)) return z("unrecognized batch item name");
          if (k.add(Qe.has(w.name) && D(w.input) ? w.input.tabId : void 0), w.name === "file_upload") return ne(M() ? zFe : IDr);
          if (w.name === "navigate") {
            if (!D(w.input) || typeof w.input.url !== "string") return z("batch navigate url is not a string");
            if (C.push(w.input.url), S = !0, uvn(w.input.url)) A = !1;
          } else if (!sre.has(w.name) || w.input !== void 0 && !D(w.input) || !pde(w.name, D(w.input) ? w.input : {})) A = !1;
        }
      }
      let E = r?.[Je] === !0 && n !== void 0 && se(h).mode !== "plan",
        y = se(h),
        P = e === "browser_batch" && E && h.agentId === void 0 && h.toolUseId !== void 0 && !ve(e, y) && y.chromeClassifierFloorEnabled === !0 && y.canAutoClassifierRun === !0;
      if (P && te(y.alwaysAllowRules.session).size > 0) return c("chrome_permission_prompt", "batch_one_by_one"), {
        behavior: "deny",
        message: message,
        decisionReason: {
          type: "safetyCheck",
          reason: "Claude in Chrome: this call does not run in auto mode, so each action is its own call",
          classifierApprovable: !1
        }
      };
      let G = e === "browser_batch" && S && A,
        U = C.filter(item => !uvn(item)),
        O,
        K = new Map();
      if (U.length > 0) {
        let w = se(h),
          I = b1e(w);
        for (let N of U) {
          let T = pvn(N);
          if (!T) return m("chrome_permission_prompt", "non_web_url"), {
            behavior: "deny",
            message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: non-web or unparseable URL",
              classifierApprovable: !1
            }
          };
          let L = I3e(I, T.host);
          if (L) return c("chrome_permission_prompt", "domain_rule_denied"), L;
          let j = b$(T.host);
          if (!I.allowed.has(j) && !K.has(j)) K.set(j, T.host);
          O ??= T;
        }
        if (O !== void 0 && K.size === 0 && (e === "navigate" || G)) {
          if (E && e === "navigate" && Ror(vMe(O.host))) zTe(h, updatedInput, be(O.host, h.agentId === void 0, w.alwaysAllowRules.session), name_2);
          let N = b$(O.host),
            source = I.sourceOf.get(N) ?? I.sourceOf.get(vMe(N)) ?? "session";
          if (w.chromeClassifierFloorEnabled !== !0) return {
            behavior: "allow",
            updatedInput: updatedInput,
            decisionReason: {
              type: "rule",
              rule: {
                source: source,
                ruleBehavior: "allow",
                ruleValue: {
                  toolName: toolName,
                  ruleContent: O.host
                }
              }
            }
          };
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            updatedInput: updatedInput,
            decisionReason: {
              type: "other",
              reason: `Claude in Chrome action on ${O.host}`
            },
            metadata: {
              command: {
                name: name_2,
                chrome: {
                  ...O,
                  domainAllowed: !0
                }
              }
            }
          };
        }
      }
      if (sre.has(e) && pde(e, updatedInput)) return {
        behavior: "allow",
        updatedInput: updatedInput
      };
      let ie = se(h);
      if (e === Ee && r?.[Ze] === !0 && updatedInput.createIfEmpty === !0 && Object.keys(updatedInput).length === 1 && h.toolUseId !== void 0 && ie.mode === "acceptEdits" && Aet() === "acceptEdits" && Dzn({
        mcpInfo: {
          serverName: serverName_2
        }
      }, ie) === void 0) return {
        behavior: "allow",
        updatedInput: updatedInput
      };
      if (E) {
        let w = e === "browser_batch" ? P && k.size === 1 && Object.keys(updatedInput).length === 1 && [...k][0] : !["navigate", "file_upload"].includes(e) && !sre.has(e) && updatedInput.tabId,
          I = typeof w === "number" && h.toolUseId !== void 0 && h.permissionRound !== void 0 ? await n?.(w, h.abortController.signal) : void 0,
          N = I === void 0 ? void 0 : pvn(I),
          T = e === "navigate" ? O : N !== void 0 && N.host.length <= eo ? N : void 0,
          L = se(h),
          j = b1e(L),
          le = T && I3e(j, T.host);
        if (L.mode === "plan") ;else if (P && te(L.alwaysAllowRules.session).size > 0) return checkPermissions_2(updatedInput, h);else if (I !== void 0 && T === void 0) return m("chrome_permission_prompt", "non_web_tab_url"), {
          behavior: "deny",
          message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: non-web or unparseable tab URL",
            classifierApprovable: !1
          }
        };else if (le) return c("chrome_permission_prompt", "domain_rule_denied"), le;else if (T !== void 0 && Ror(vMe(T.host))) {
          if (I !== void 0) g("chrome_permission_prompt");
          if (e !== "browser_batch") zTe(h, updatedInput, be(T.host, h.agentId === void 0, L.alwaysAllowRules.session), name_2);
          let ce = j.allowed.has(b$(T.host)),
            de = !ce && L.chromeClassifierFloorEnabled === !0 && L.canAutoClassifierRun === !0;
          if (de) weakMap.set(updatedInput, T.host);
          let ue = e === "browser_batch" ? `in the ${T.host} tab` : `on ${T.host}`;
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            updatedInput: updatedInput,
            suggestions: de ? [{
              type: "addRules",
              rules: [{
                toolName: toolName,
                ruleContent: T.host
              }],
              behavior: "allow",
              destination: "session"
            }] : void 0,
            decisionReason: {
              type: "other",
              reason: `Claude in Chrome action ${ue}`
            },
            metadata: {
              command: {
                name: name_2,
                description: `Allow Claude in Chrome to ${dlt(e, updatedInput)} ${ue}?`,
                chrome: {
                  ...T,
                  domainAllowed: ce && e !== "browser_batch"
                }
              }
            }
          };
        } else if (I !== void 0) c("chrome_permission_prompt", "tab_site_not_plain");
      }
      let Te = !q();
      return {
        behavior: "passthrough",
        message: "Claude in Chrome requires permission.",
        suggestions: K.size === 1 && (e === "navigate" || G) && Te ? [{
          type: "addRules",
          rules: [...K.values()].map(w => ({
            toolName: toolName,
            ruleContent: w
          })),
          behavior: "allow",
          destination: "session"
        }] : void 0
      };
    };
  return {
    coerceInput: f => {
      let input_2 = adr(f);
      return input_2 === f ? null : {
        input: input_2,
        shapeClass: "chrome_host_only_args_removed"
      };
    },
    checkPermissions: checkPermissions_2,
    suggestedAllowRule: (f, h) => f.toolName === toolName && f.ruleContent !== void 0 && (h === "late" ? Ror(f.ruleContent.replace(/:[0-9]{1,5}$/, "")) : f.ruleContent === weakMap.get(h)),
    suppressesAlwaysAllowRule: () => !0,
    ignoresWholeToolAllowRule: () => !0,
    excludedFromAutoModeAllowlist: () => !0,
    excludedFromModeBypassAllow: () => !0
  };
}
async function Sor(e, r, n) {
  let i = AbortSignal.timeout(oo),
    d = "";
  try {
    let s = await e(Ee, {
        createIfEmpty: !1
      }, AbortSignal.any([n, i])),
      f = Array.isArray(s) ? s[0] : void 0;
    d = D(f) ? String(f.text) : String(s);
    let h = ee(d),
      C = D(h) ? h.availableTabs : void 0,
      S = Array.isArray(C) ? C.find(item => D(item) && item.tabId === r) : void 0;
    if (D(S) && typeof S.url === "string" && S.url) return S.url;
    c("chrome_permission_prompt", "tab_url_unresolved_tab_not_listed");
  } catch (error) {
    if (!n.aborted) t(`Claude in Chrome: the tab read failed: ${String(error)}`, {
      level: "error"
    }), c("chrome_permission_prompt", i.aborted ? "tab_url_unresolved_timed_out" : error instanceof SyntaxError ? d.includes("createIfEmpty") ? "tab_url_unresolved_no_tab_group" : "tab_url_unresolved_not_json" : error instanceof qy ? "tab_url_unresolved_error_answer" : D(error) && error.code === q3 ? "tab_url_unresolved_needs_approval" : "tab_url_unresolved_call_threw");
  }
  return;
}
function be(site, r, n = []) {
  return {
    site: site,
    personLeftItToClassifier: Aet() === "auto" && Ou() || r && te(n).has(b$(site))
  };
}
function wor({
  permissionPhase: permissionPhase,
  toolUseId: toolUseId_2,
  allowGivenBy: allowGivenBy,
  session: session
}) {
  let d = permissionPhase?.pipeline === void 0 && toolUseId_2 !== void 0 ? Fui.peek(session)?.get(toolUseId_2) : void 0;
  if (d !== void 0) return {
    [Nui]: d
  };
  let s = permissionPhase?.pipeline !== void 0 ? permissionPhase.checked?.note : void 0,
    f = allowGivenBy?.toolUseId === toolUseId_2 ? allowGivenBy?.approver : void 0;
  return D(s) && typeof s.site === "string" && (f === "user" || f === "classifier" && s.personLeftItToClassifier === !0) ? {
    [Xe]: b$(s.site)
  } : void 0;
}
function te(session_2 = []) {
  return b1e({
    alwaysAllowRules: {
      session: session_2
    },
    alwaysDenyRules: {}
  }).allowed;
}
function ne(message_2) {
  return {
    behavior: "deny",
    message: message_2,
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: a file_upload that cannot be served",
      classifierApprovable: !1
    }
  };
}
function ve(toolName_2, r) {
  return Id({
    mcpInfo: {
      serverName: serverName_2,
      toolName: toolName_2
    },
    excludedFromModeBypassAllow: () => !0
  }, r) === "auto";
}
function z(e) {
  return m("chrome_permission_prompt", "unjudgeable_chrome_input"), {
    behavior: "deny",
    message: "Can't run this Claude in Chrome action: its input couldn't be safely checked.",
    decisionReason: {
      type: "safetyCheck",
      reason: `Claude in Chrome: ${e}`,
      classifierApprovable: !1
    }
  };
}
export { nor, ror, URt, dge, Q4t, Z4t, oor, sor, ior, eYt, Ckn, aor, lor, Oui, dor, $at, Uat, cor, uor, por, tYt, mor, hor, Bat, gor, yor, _or, bor, Sor, wor };