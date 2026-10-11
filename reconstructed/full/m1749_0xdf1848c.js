// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  we,
  sT,
  Fo,
  Te
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  y
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  te,
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  gt,
  oE,
  b,
  J,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  la
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  aH
} from "B:/~BUN/root/chunk-0fnha6bz.js";
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Oo,
  ne,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  K
} from "B:/~BUN/root/chunk-5px6g0cn.js";
import {
  ap,
  jt,
  Tf,
  Lfn
} from "B:/~BUN/root/chunk-dv435n4g.js";
import {
  yy,
  gb,
  rf,
  An,
  of,
  jk,
  x,
  Wk
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Ay,
  Tn
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  _s
} from "B:/~BUN/root/chunk-sjxe7c01.js";
import {
  Xan
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  OG,
  yW,
  Syr
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  H8t
} from "B:/~BUN/root/chunk-41rbevax.js";
import {
  Hd
} from "B:/~BUN/root/chunk-ydzwkn0c.js";
import {
  mKe
} from "B:/~BUN/root/chunk-cn8bxjex.js";
import {
  Hsn
} from "B:/~BUN/root/chunk-r6m7remx.js";
import {
  Qf
} from "B:/~BUN/root/chunk-sa6ew4xs.js";
import {
  ZUe
} from "B:/~BUN/root/chunk-0bx1tycm.js";
import {
  pd,
  rre
} from "B:/~BUN/root/chunk-tndjj29v.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";

function N(e, r, n) {
  var s = -1,
    a = e.length,
    o = r.length,
    c = {};
  while (++s < a) {
    var d = s < o ? r[s] : void 0;
    n(c, e[s], d)
  }
  return c
}
var E = N;

function G(e, r) {
  return E(e || [], r || [], ZUe)
}
var C8t = G;
var F = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;

function R8t(e) {
  if (!F.test(e)) return;
  i("tengu_git_operation", {
    operation: y("pr_create")
  }), mKe()?.add(1)
}
var V = 0,
  h = 1;
class T2e {
  ws;
  parseMessage;
  started = !1;
  opened;
  constructor(e, r) {
    this.ws = e;
    this.parseMessage = r;
    this.opened = new Promise((s, a) => {
      if (this.ws.readyState === h) s();
      else {
        let o = this.ws,
          c = () => {
            o.removeEventListener("open", c), o.removeEventListener("error", d), s()
          },
          d = (g) => {
            o.removeEventListener("open", c), o.removeEventListener("error", d), K("error", "mcp_websocket_connect_fail"), a(te(g.error ?? g))
          };
        o.addEventListener("open", c), o.addEventListener("error", d)
      }
    }), this.opened.catch(() => {});
    let n = this.ws;
    n.addEventListener("message", this.onBunMessage), n.addEventListener("error", this.onBunError), n.addEventListener("close", this.onBunClose)
  }
  onclose;
  onerror;
  onmessage;
  onBunMessage = (e) => {
    try {
      let r = typeof e.data === "string" ? e.data : String(e.data),
        n = J(r),
        s = this.parseMessage(n);
      this.onmessage?.(s)
    } catch (r) {
      this.handleError(r)
    }
  };
  onBunError = () => {
    this.handleError(Error("WebSocket error"))
  };
  onBunClose = () => {
    this.handleCloseCleanup()
  };
  handleError(e) {
    K("error", "mcp_websocket_message_fail"), this.onerror?.(te(e))
  }
  handleCloseCleanup() {
    this.onclose?.();
    let e = this.ws;
    e.removeEventListener("message", this.onBunMessage), e.removeEventListener("error", this.onBunError), e.removeEventListener("close", this.onBunClose)
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if (await this.opened, this.ws.readyState !== h) throw K("error", "mcp_websocket_start_not_opened"), Error("WebSocket is not open. Cannot start transport.");
    this.started = !0
  }
  async close() {
    if (this.ws.readyState === h || this.ws.readyState === V) this.ws.close();
    this.handleCloseCleanup()
  }
  async send(e) {
    if (this.ws.readyState !== h) throw K("error", "mcp_websocket_send_not_opened"), Error("WebSocket is not open. Cannot send message.");
    let r = b(e);
    try {
      this.ws.send(r)
    } catch (n) {
      throw this.handleError(n), n
    }
  }
}
var C = 20;
class w {
  connections = new Map;
  toolLists = new pd({
    max: C
  });
  resourceLists = new pd({
    max: C
  });
  resourceTemplateLists = new pd({
    max: C
  });
  commandLists = new pd({
    max: C
  });
  reauthInFlight = new Map;
  settledCachedDialFailures = new Map;
  refusedCachedRows = new Set;
  liveClients = new Set
}

function zr() {
  let e = jt();
  if (e.connectionCache === null) e.connectionCache = new w, rre(e.connectionCache.connections), rre(e.connectionCache.settledCachedDialFailures), rre(e.connectionCache.refusedCachedRows);
  return e.connectionCache
}

function A8t(e, r, n) {
  function s(...o) {
    return P(n(), r(...o), () => e(...o))
  }
  let a = {
    get: (o) => n().get(o),
    set(o, c) {
      return n().set(o, c), a
    },
    has: (o) => n().has(o),
    delete: (o) => n().delete(o),
    clear: () => n().clear()
  };
  return Object.assign(s, {
    cache: a
  })
}

function Hpe(e, r, n) {
  function s(...o) {
    return P(n(), r(...o), () => e(...o))
  }
  return Object.assign(s, {
    cache: {
      get: (o) => n().peek(o),
      set: (o, c) => void n().set(o, c),
      has: (o) => n().has(o),
      delete: (o) => n().delete(o),
      clear: () => n().clear(),
      size: () => n().size
    }
  })
}

function P(e, r, n) {
  let s = e.get(r);
  if (s !== void 0) return s;
  let a = n();
  return e.set(r, a), a
}

function P8t() {
  return x("tengu_serene_teapot", !0) !== !1
}

function B() {
  return x("tengu_mcp_claudeai_eligibility_gate", !1)
}

function I8t(e) {
  return e.type === "claudeai-proxy" && e.eligible === !1 && B()
}
var A = 1000,
  U = 30000,
  W = {
    now: () => performance.now(),
    arm: (e, r) => {
      let n = setTimeout(e, r).unref();
      return () => clearTimeout(n)
    }
  };

function h0e(e, r, n = W) {
  let s = !0,
    a, o = Number.NEGATIVE_INFINITY,
    c = A,
    d = () => {
      c = A, s = !0
    },
    g = () => {
      let u = a;
      if (a = void 0, u === void 0) {
        d();
        return
      }(async () => r(u.cause))().catch((f) => {
        ne(e.name, `list_changed refetch failed: ${_s(f,e.config)}`)
      }).finally(() => {
        if (o = n.now(), u.settle(), a === void 0) {
          d();
          return
        }
        v(), c = Math.min(c * 2, U)
      })
    },
    S = () => {
      if (H8t(e)) {
        a?.settle(), a = void 0, d();
        return
      }
      g()
    },
    v = () => {
      s = !1;
      let u = o + c - n.now();
      if (u > 0) n.arm(S, u);
      else g()
    };
  return (u) => {
    let f = a;
    if (f === void 0) {
      let M = () => {},
        D = new Promise((j) => M = j);
      if (f = a = {
          cause: u,
          settled: D,
          settle: M
        }, s) v()
    } else f.cause = u;
    return f.settled
  }
}

function O8t(e) {
  return yy() ? `MCP server "${e}" needs to be connected in claude.ai` : `MCP server "${e}" needs to be connected in claude.ai (run /mcp to connect it)`
}
var z = "claudecode/agentId",
  Y = "claudecode/agentType",
  q = "claudecode/isObserver",
  Z = 128,
  X = 64;

function Q(e) {
  let {
    name: r,
    config: n
  } = e;
  if (r !== ap) return !1;
  return Tf(n) || n.scope === "dynamic" && "url" in n && typeof n.url === "string" && Lfn(n.url)
}

function M8t(e, r) {
  let {
    agentId: n,
    agentContext: s
  } = r;
  if (n === void 0 || !Q(e)) return {};
  if (jk(s) && s.isMainSession === !0 && s.agentId === n) return {};
  let a = re(Ay(r.agentType ?? ""), Z);
  return {
    [z]: n,
    ...a !== "" && {
      [Y]: a
    },
    ...ee(n, r) && {
      [q]: !0
    }
  }
}

function ee(e, {
  agentContext: r,
  taskRegistry: n
}) {
  let s = [e],
    a = new Set;
  for (let o = s.pop(); o !== void 0; o = s.pop()) {
    if (a.has(o)) continue;
    if (a.size >= X) return !0;
    a.add(o);
    let c = n.get(o);
    if (c !== void 0 && Hd(c)) return !0;
    if (c !== void 0 && "parentAgentId" in c && typeof c.parentAgentId === "string") s.push(c.parentAgentId);
    if (!of(r)) {
      let d = o === r.agentId ? r.parentAgentId : o === e ? r.agentId : void 0;
      if (d !== void 0) s.push(d)
    }
  }
  return !1
}

function D8t() {
  let e = An();
  if (!e) return;
  return {
    accountUuid: e.accountUuid,
    organizationUuid: e.organizationUuid,
    credentialInstalled: rf() || oe()
  }
}

function oe() {
  try {
    return gb({
      skipRetrievingKeyFromApiKeyHelper: !0
    }).source === "/login managed key"
  } catch {
    return !1
  }
}
import {
  isAbsolute as se
} from "path";

function k(e) {
  switch (e) {
    case "projectSettings":
    case "localSettings":
      return "repo";
    case "plugin":
    case "additionalDirectory":
      return "thirdParty";
    case "userSettings":
    case "flagSettings":
    case "policySettings":
    case "built-in":
      return "operator";
    default:
      return e
  }
}

function ie(e) {
  switch (e) {
    case "project":
    case "local":
      return "repo";
    case "user":
    case "dynamic":
    case "enterprise":
    case "claudeai":
    case "managed":
    case "agent":
      return "operator";
    default:
      return e
  }
}

function ae(e) {
  return ie(e.scope) === "repo" || e.agentSource !== void 0 && k(e.agentSource) === "repo"
}

function ce(e, r) {
  if (r !== void 0) return !0;
  if (e.scope === "project") return !0;
  return e.agentSource !== void 0 && k(e.agentSource) !== "operator"
}
async function de(e, r) {
  if (!r.headersHelper) return null;
  let n = typeof r.pluginPath === "string" && se(r.pluginPath) ? r.pluginPath : void 0;
  try {
    ne(e, "Executing headersHelper to get dynamic headers");
    let s = r.scope !== void 0 && ae({
        scope: r.scope,
        agentSource: r.agentSource
      }),
      a = await Hsn({
        command: r.headersHelper,
        isRepoResidentConfig: s,
        repoResidentOrigin: r.declaredIn,
        cwd: n ?? (s ? Fo() ?? r.declaredIn ?? we() : r.scope === "dynamic" && r.agentSource === void 0 ? Fo() ?? we() : Se()),
        scrubCredentialEnv: ce(r, n),
        env: {
          CLAUDE_CODE_MCP_SERVER_NAME: e,
          CLAUDE_CODE_MCP_SERVER_URL: r.url,
          ...n && {
            CLAUDE_PLUGIN_ROOT: n
          }
        }
      });
    if (a.ok) return ne(e, `Successfully retrieved ${Object.keys(a.headers).length} headers from headersHelper`), _("mcp_headers_helper"), a.headers;
    if (a.reason === "missing_trust") {
      let o = sT() ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted" : `accept the trust dialog here once interactively, or set projects[${Syr(Wk())}].hasTrustDialogAccepted in ${la()}`;
      if (ne(e, `headersHelper not run: this workspace has no persisted trust; ${o}.`), Te() && Xan(`mcp headersHelper ${e}`)) aH(`MCP server '${Tn(e)}': headersHelper not run \u2014 this workspace has no persisted trust; ${o}.
`);
      return i("tengu_mcp_headersHelper_missing_trust", {}), p("mcp_headers_helper", "missing_trust"), null
    }
    throw m("mcp_headers_helper", a.reason), Error(le(e, a.reason))
  } catch (s) {
    return Oo(e, `Error getting headers from headersHelper: ${l(s)}`), t(`Error getting MCP headers from headersHelper for server '${e}': ${l(s)}`, {
      level: "error"
    }), null
  }
}

function le(e, r) {
  switch (r) {
    case "exec_failed":
      return `headersHelper for MCP server '${e}' did not return a valid value`;
    case "parse_failed":
      return `headersHelper for MCP server '${e}' did not return valid JSON`;
    case "non_object":
      return `headersHelper for MCP server '${e}' must return a JSON object with string key-value pairs`;
    case "non_string_value":
      return `headersHelper for MCP server '${e}' returned a non-string header value`
  }
}
async function L8t(e, r) {
  let n = {},
    s = [],
    a = OG();
  for (let [c, d] of Object.entries(r.headers ?? {})) {
    let {
      expanded: g,
      missingVars: S
    } = yW(d, void 0, void 0, {
      remoteSink: !0,
      blankList: a
    });
    n[c] = g, s.push(...S)
  }
  if (s.length > 0) ne(e, `Header values reference unset environment variables: ${L(s).join(", ")}`);
  let o = await de(e, r) || {};
  return {
    ...n,
    ...o
  }
}
var R = 100,
  T = 400,
  I = 100;

function x8t() {
  if (oE()) throw Error("Claude Code is shutting down; not starting this MCP server process")
}

function $et(e) {
  let r = gt(() => ue(e));
  return e.once("exit", () => r()), r
}

function H(e) {
  return e.exitCode !== null || e.signalCode !== null
}
async function ue(e) {
  let r = e.pid;
  if (r === void 0 || H(e)) return;
  let n = new Promise((a) => {
    e.once("exit", () => a())
  });
  if (O() === "windows") {
    t(`[MCP] stdio server process ${r} has no established connection at exit; terminating its process tree`), Qf(r), await nt(n, R + T + I);
    return
  }
  let s = [
    ["SIGINT", R],
    ["SIGTERM", T],
    ["SIGKILL", I]
  ];
  for (let [a, o] of s) {
    if (H(e)) return;
    t(`[MCP] stdio server process ${r} has no established connection at exit; sending ${a}`);
    try {
      e.kill(a)
    } catch {
      return
    }
    await nt(n, o)
  }
}
export {
  C8t,
  R8t,
  T2e,
  zr,
  A8t,
  Hpe,
  x8t,
  $et,
  P8t,
  I8t,
  h0e,
  O8t,
  M8t,
  D8t,
  L8t
};
