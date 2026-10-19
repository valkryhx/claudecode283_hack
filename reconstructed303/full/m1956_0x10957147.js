// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  b
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  x,
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  bt,
  Km,
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  re
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  Ft,
  lm,
  K2s
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  sZe
} from "B:/~BUN/root/chunk-yw21pggd.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  VS
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  Vke,
  rYn,
  gp,
  ALr,
  wn,
  US,
  i2,
  E,
  ir
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  sk
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  ea
} from "B:/~BUN/root/chunk-53tmhe2j.js";
import {
  Ko
} from "B:/~BUN/root/chunk-71zxaep1.js";
import {
  RHt,
  IXe,
  u4n,
  MXe
} from "B:/~BUN/root/chunk-nw686kdq.js";
import {
  Ka
} from "B:/~BUN/root/chunk-00v9f07q.js";
import {
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  Noe,
  hFe
} from "B:/~BUN/root/chunk-bvp25jb5.js";
import {
  pM,
  Uq
} from "B:/~BUN/root/chunk-kcbxq7ta.js";
import {
  n4t,
  yz,
  Zrt,
  qEt,
  RCn,
  oar
} from "B:/~BUN/root/chunk-dacmknsv.js";
import {
  I_e
} from "B:/~BUN/root/chunk-v0j0rh1h.js";
import {
  PCn
} from "B:/~BUN/root/chunk-tnzbbxrh.js";
import {
  yZ,
  vLn
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  x6
} from "B:/~BUN/root/chunk-9y4mcm7b.js";
import {
  o5e
} from "B:/~BUN/root/chunk-3a551r0y.js";
import {
  yj,
  See,
  HCr
} from "B:/~BUN/root/chunk-f29awv9y.js";
import {
  tS
} from "B:/~BUN/root/chunk-7wsxhgty.js";
import {
  $a,
  w5n
} from "B:/~BUN/root/chunk-m0xdacj9.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  tc,
  W2
} from "B:/~BUN/root/chunk-eya7pdzx.js";

function Q(e, n, r) {
  var o = -1,
    a = e.length,
    s = n.length,
    c = {};
  while (++o < a) {
    var d = o < s ? n[o] : void 0;
    r(c, e[o], d)
  }
  return c
}
var D = Q;

function ee(e, n) {
  return D(e || [], n || [], sZe)
}
var ETn = ee;
var te = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;

function TTn(e) {
  if (!te.test(e)) return;
  i("tengu_git_operation", {
    operation: b("pr_create")
  }), o5e()?.add(1)
}
var ne = 0,
  M = 1;
class zrt {
  ws;
  parseMessage;
  started = !1;
  opened;
  constructor(e, n) {
    this.ws = e;
    this.parseMessage = n;
    this.opened = new Promise((o, a) => {
      if (this.ws.readyState === M) o();
      else {
        let s = this.ws,
          c = () => {
            s.removeEventListener("open", c), s.removeEventListener("error", d), o()
          },
          d = (f) => {
            s.removeEventListener("open", c), s.removeEventListener("error", d), X("error", "mcp_websocket_connect_fail"), a(H(f.error ?? f))
          };
        s.addEventListener("open", c), s.addEventListener("error", d)
      }
    }), this.opened.catch(() => {});
    let r = this.ws;
    r.addEventListener("message", this.onBunMessage), r.addEventListener("error", this.onBunError), r.addEventListener("close", this.onBunClose)
  }
  onclose;
  onerror;
  onmessage;
  onBunMessage = (e) => {
    try {
      let n = typeof e.data === "string" ? e.data : String(e.data);
      if (Buffer.byteLength(n) > x6) {
        this.handleError(new x(`MCP server sent a WebSocket message over ${x6/1024/1024} MiB. Claude Code did not read it and closed the connection.`, "mcp websocket message over the cap")), this.close().catch(() => {});
        return
      }
      let r = J(n),
        o = this.parseMessage(r);
      this.onmessage?.(o)
    } catch (n) {
      this.handleError(n)
    }
  };
  onBunError = () => {
    this.handleError(Error("WebSocket error"))
  };
  onBunClose = () => {
    this.handleCloseCleanup()
  };
  handleError(e) {
    X("error", "mcp_websocket_message_fail"), this.onerror?.(H(e))
  }
  handleCloseCleanup() {
    this.onclose?.();
    let e = this.ws;
    e.removeEventListener("message", this.onBunMessage), e.removeEventListener("error", this.onBunError), e.removeEventListener("close", this.onBunClose)
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if (await this.opened, this.ws.readyState !== M) throw X("error", "mcp_websocket_start_not_opened"), Error("WebSocket is not open. Cannot start transport.");
    this.started = !0
  }
  async close() {
    if (this.ws.readyState === M || this.ws.readyState === ne) this.ws.close();
    this.handleCloseCleanup()
  }
  async send(e) {
    if (this.ws.readyState !== M) throw X("error", "mcp_websocket_send_not_opened"), Error("WebSocket is not open. Cannot send message.");
    let n = _(e);
    try {
      this.ws.send(n)
    } catch (r) {
      throw this.handleError(r), r
    }
  }
}
var A = 20;
class F {
  connections = new Map;
  toolLists = new tc({
    max: A
  });
  resourceLists = new tc({
    max: A
  });
  resourceTemplateLists = new tc({
    max: A
  });
  commandLists = new tc({
    max: A
  });
  reauthInFlight = new Map;
  settledCachedDialFailures = new Map;
  refusedCachedRows = new Set;
  liveClients = new Set;
  forgetListings() {
    this.toolLists.clear(), this.resourceLists.clear(), this.resourceTemplateLists.clear(), this.commandLists.clear()
  }
}

function Po() {
  let e = Ft();
  if (e.connectionCache === null) e.connectionCache = new F, W2(e.connectionCache.connections), W2(e.connectionCache.settledCachedDialFailures), W2(e.connectionCache.refusedCachedRows);
  return e.connectionCache
}

function CTn(e, n, r) {
  function o(...s) {
    return U(r(), n(...s), () => e(...s))
  }
  let a = {
    get: (s) => r().get(s),
    set(s, c) {
      return r().set(s, c), a
    },
    has: (s) => r().has(s),
    delete: (s) => r().delete(s),
    clear: () => r().clear()
  };
  return Object.assign(o, {
    cache: a
  })
}

function wRe(e, n, r) {
  function o(...s) {
    return U(r(), n(...s), () => e(...s))
  }
  return Object.assign(o, {
    cache: {
      get: (s) => r().peek(s),
      set: (s, c) => void r().set(s, c),
      has: (s) => r().has(s),
      delete: (s) => r().delete(s),
      clear: () => r().clear(),
      size: () => r().size
    }
  })
}

function U(e, n, r) {
  let o = e.get(n);
  if (o !== void 0) return o;
  let a = r();
  return e.set(n, a), a
}
var oe = 100,
  se = 400,
  ie = 100,
  B = 300,
  ae = 600;

function RTn() {
  if (Km()) throw Error("Claude Code is shutting down; not starting this MCP server process")
}

function TEt(e) {
  let n = bt(() => ce(e));
  return e.once("exit", () => n()), n
}

function k(e) {
  return e.exitCode !== null || e.signalCode !== null
}
async function ce(e) {
  let n = e.pid;
  if (n === void 0 || k(e)) return;
  if (I() === "windows") {
    t(`[MCP] stdio server process ${n} has no established connection at exit; closing its stdin`), await OKt(e);
    return
  }
  let r = new Promise((a) => {
      e.once("exit", () => a())
    }),
    o = [
      ["SIGINT", oe],
      ["SIGTERM", se],
      ["SIGKILL", ie]
    ];
  for (let [a, s] of o) {
    if (k(e)) return;
    t(`[MCP] stdio server process ${n} has no established connection at exit; sending ${a}`);
    try {
      e.kill(a)
    } catch {
      return
    }
    await je(r, s)
  }
}
async function OKt(e) {
  let n = e.pid;
  if (n === void 0 || k(e)) return;
  let r = new Promise((o) => {
    e.once("exit", () => o())
  });
  if (e.stdin?.end(), await je(r, B), k(e)) return;
  t(`[MCP] stdio server process ${n} is still running ${B}ms after stdin closed; terminating its process tree`), tS(n), await je(r, ae)
}

function ue() {
  return VS() && ir("tengu_eventual_noodle", !1) === !0
}

function G(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text"
}
async function ATn(e, n) {
  if (!ue()) return;
  let r = await n([...e.filter((o) => !G(o)), ...e.filter(G)]);
  if (r.content.every((o) => o.type === "text" && o.text.trim() === "")) {
    if (r.content.length > 0) p("mcp_content_over_structured", "blank_text");
    return
  }
  return g("mcp_content_over_structured"), r
}

function xTn() {
  return E("tengu_serene_teapot", !0) !== !1
}

function pe() {
  return E("tengu_mcp_claudeai_eligibility_gate", !1)
}

function PTn(e) {
  return e.type === "claudeai-proxy" && e.eligible === !1 && pe()
}
var V = 1000,
  me = 30000,
  fe = {
    now: () => performance.now(),
    arm: (e, n) => {
      let r = setTimeout(e, n).unref();
      return () => clearTimeout(r)
    }
  };

function Nqe(e, n, r = fe) {
  let o = !0,
    a, s = Number.NEGATIVE_INFINITY,
    c = V,
    d = () => {
      c = V, o = !0
    },
    f = () => {
      let h = a;
      if (a = void 0, h === void 0) {
        d();
        return
      }(async () => n(h.cause))().catch((y) => {
        re(e.name, `list_changed refetch failed: ${Ko(y,e.config)}`)
      }).finally(() => {
        if (s = r.now(), h.settle(), a === void 0) {
          d();
          return
        }
        C(), c = Math.min(c * 2, me)
      })
    },
    u = () => {
      if (I_e(e)) {
        a?.settle(), a = void 0, d();
        return
      }
      f()
    },
    C = () => {
      o = !1;
      let h = s + c - r.now();
      if (h > 0) r.arm(u, h);
      else f()
    };
  return (h) => {
    let y = a;
    if (y === void 0) {
      let P = () => {},
        l = new Promise((v) => P = v);
      if (y = a = {
          cause: h,
          settled: l,
          settle: P
        }, o) C()
    } else y.cause = h;
    return y.settled
  }
}
var he = new z(() => new Map);

function ge() {
  return he.of(j().host)
}

function OTn(e, n, r) {
  let o = ge().get(e);
  if (o === void 0 || !o.toolNames.has(n)) return {
    mayOverlap: !1,
    call: r
  };
  return {
    mayOverlap: !0,
    call: (a, s, ...c) => o.slots.run(s.abortController.signal, () => r(a, s, ...c))
  }
}
var CEt = {
  getValidator(e) {
    if (ea().claim("mcp_output_schema_unchecked")) t("An MCP server listed a tool with an outputSchema in a session that compiles no schemas; that tool's results are not checked against it", {
      level: "warn"
    });
    return (n) => ({
      valid: !0,
      data: n,
      errorMessage: void 0
    })
  }
};

function W(e) {
  return e.scope === "dynamic" && !sk(e) && lm.bridgeCarrier === void 0 && "url" in e && typeof e.url === "string" && K2s(e.url)
}

function ITn(e, n) {
  return W(e) ? n : MXe(n)
}

function MTn(e, n) {
  if (n === void 0 || !Object.hasOwn(n, RHt) || !W(e)) return n;
  return {
    ...n,
    [IXe]: u4n
  }
}
var K = "the user can reconnect it in their claude.ai connector settings",
  gz = {
    notConnected(e) {
      return rYn() ? `MCP server "${e}" needs to be connected in claude.ai` : `MCP server "${e}" needs to be connected in claude.ai (run /mcp to connect it)`
    },
    signInAgain(e) {
      if (yj(e)) return HCr;
      let n = `MCP server "${e}" needs you to sign in again`;
      return VS() ? `${n} (${K})` : Vke() ? n : `${n} (run /mcp to re-authenticate)`
    },
    helperRejected(e) {
      let n = `MCP server "${e}" rejected the credential from its headersHelper`;
      return Vke() ? `${n} (check the helper, then start a new task or chat)` : `${n} (check the helper and run /mcp to reconnect, or to authenticate if the server also uses OAuth)`
    },
    headerRejected(e) {
      let n = `MCP server "${e}" rejected the Authorization header in its config`;
      return Vke() ? `${n} (update it, then start a new task or chat)` : `${n} (update it, then run /mcp to reconnect)`
    },
    dialNeedsAuth(e) {
      if (yj(e)) return See("needs_auth");
      return `MCP server "${e}" needs authentication`
    },
    dialNotConnected(e, n) {
      if (yj(e)) return See("failed");
      return `MCP server "${e}" is not connected${n}`
    },
    sessionCredentialRejected(e, n) {
      if (yj(e)) return HCr;
      return `MCP server "${e}" rejected the session credential (HTTP ${n})`
    },
    stepUp(e, n) {
      if (yj(e)) return HCr;
      let r = Ka(n ?? "", void 0, "none"),
        o = `MCP server "${e}" needs additional permissions (scope: "${r}")`;
      return VS() ? `${o} \u2014 ${K}` : `${o} \u2014 run /mcp to re-authenticate`
    }
  };
class L {
  byMessageId = new Map
}

function DTn(e, n) {
  if (!n) return {};
  let r = e.get(L).byMessageId.get(n);
  return {
    ["anthropic/memory.response_id"]: n,
    ...r !== void 0 && {
      ["anthropic/memory.chain"]: r
    }
  }
}

function LTn(e, n, r) {
  if (!n || !r || !("anthropic/memory.chain" in r)) return;
  let o = r["anthropic/memory.chain"],
    a = e.get(L).byMessageId;
  if (a.delete(n), typeof o !== "string" || o.length > 16384) return;
  a.set(n, o);
  for (let s of a.keys()) {
    if (a.size <= 8) break;
    a.delete(s)
  }
}

function Fqe(e) {
  return async (n, r) => {
    let o = await e(n, r);
    if (![301, 302, 303, 307, 308].includes(o.status) || !o.headers.has("Location")) return o;
    let a = new Headers(o.headers);
    return a.delete("Location"), new Response(o.body, {
      status: o.status,
      statusText: o.statusText,
      headers: a
    })
  }
}

function NTn() {
  let e = wn();
  if (!e) return;
  return {
    accountUuid: e.accountUuid,
    organizationUuid: e.organizationUuid,
    credentialInstalled: gp() || ALr()
  }
}

function FTn(e, n, r) {
  let o = () => import("B:/~BUN/root/chunk-4f1f2hqc.js"),
    a = (f, u) => ({
      listed: n,
      input: f,
      toolPermissionContext: le(u),
      callTool: r(u),
      signal: u.abortController.signal,
      session: u.session
    }),
    s = e.validateInput;
  e.validateInput = async (f, u) => (await o()).validateToolFileInputs(n, s, f, u);
  let c = e.call;
  e.call = async (f, u, ...C) => {
    let {
      argsWithFileInputs: h
    } = await o(), y = await h({
      ...a(f ?? {}, u),
      toolUseId: u.toolUseId
    });
    return c(y, u, ...C)
  };
  let d = e.askInputPreparer;
  e.askInputPreparer = async (f, u, C) => (await o()).fileInputAskPreparer({
    ...a(f, u),
    toolUseId: C
  }) ?? d?.(f, u, C)
}
var Ce = new Set(hFe.map((e) => e.name));

function HTn(e) {
  let n = `${pM}${e}`;
  return {
    coerceInput: (o) => {
      let a = vLn(o);
      return a === o ? null : {
        input: a,
        shapeClass: "chrome_host_only_args_removed"
      }
    },
    checkPermissions: async (o, a) => {
      PCn(a.options?.messageClientPlatform);
      let s = [],
        c = !1,
        d = !0;
      if (e === "file_upload" && de()) return Y();
      if (e === "navigate") {
        if (typeof o.url !== "string") return w("navigate url is not a string");
        s.push(o.url)
      } else if (e === "browser_batch") {
        if (o.actions !== void 0 && !Array.isArray(o.actions)) return w("batch actions is not an array");
        for (let l of Array.isArray(o.actions) ? o.actions : []) {
          if (!N(l) || typeof l.name !== "string") return w("unreadable batch item");
          if (l.name === "browser_batch") return w("nested batch");
          if (!Ce.has(l.name)) return w("unrecognized batch item name");
          if (l.name === "file_upload" && de()) return Y();
          if (l.name === "navigate") {
            if (!N(l.input) || typeof l.input.url !== "string") return w("batch navigate url is not a string");
            if (s.push(l.input.url), c = !0, RCn(l.input.url)) d = !1
          } else if (!Noe.has(l.name) || l.input !== void 0 && !N(l.input) || !yZ(l.name, N(l.input) ? l.input : {})) d = !1
        }
      }
      let f = e === "browser_batch" && c && d,
        u = s.filter((l) => !RCn(l)),
        C, h = new Map;
      if (u.length > 0) {
        let l = le(a),
          v = Zrt(l);
        for (let R of u) {
          let S = oar(R);
          if (!S) return m("chrome_permission_prompt", "non_web_url"), {
            behavior: "deny",
            message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: non-web or unparseable URL",
              classifierApprovable: !1
            }
          };
          let O = qEt(v, S.host);
          if (O) return p("chrome_permission_prompt", "domain_rule_denied"), O;
          let T = yz(S.host);
          if (!v.allowed.has(T) && !h.has(T)) h.set(T, S.host);
          C ??= S
        }
        if (C !== void 0 && h.size === 0 && (e === "navigate" || f)) {
          let R = yz(C.host),
            S = v.sourceOf.get(R) ?? v.sourceOf.get(n4t(R)) ?? "session";
          if (l.chromeClassifierFloorEnabled !== !0) return {
            behavior: "allow",
            updatedInput: o,
            decisionReason: {
              type: "rule",
              rule: {
                source: S,
                ruleBehavior: "allow",
                ruleValue: {
                  toolName: Uq,
                  ruleContent: C.host
                }
              }
            }
          };
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            updatedInput: o,
            decisionReason: {
              type: "other",
              reason: `Claude in Chrome action on ${C.host}`
            },
            metadata: {
              command: {
                name: n,
                chrome: {
                  ...C,
                  domainAllowed: !0
                }
              }
            }
          }
        }
      }
      if (Noe.has(e) && yZ(e, o)) return {
        behavior: "allow",
        updatedInput: o
      };
      let y = !de();
      return {
        behavior: "passthrough",
        message: "Claude in Chrome requires permission.",
        suggestions: h.size === 1 && (e === "navigate" || f) && y ? [{
          type: "addRules",
          rules: [...h.values()].map((l) => ({
            toolName: Uq,
            ruleContent: l
          })),
          behavior: "allow",
          destination: "session"
        }] : void 0
      }
    },
    suppressesAlwaysAllowRule: () => !0,
    ignoresWholeToolAllowRule: () => !0,
    excludedFromAutoModeAllowlist: () => !0,
    excludedFromModeBypassAllow: () => !0
  }
}

function Y() {
  return {
    behavior: "deny",
    message: w5n,
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: file_upload in a session with no disk",
      classifierApprovable: !1
    }
  }
}

function w(e) {
  return m("chrome_permission_prompt", "unjudgeable_chrome_input"), {
    behavior: "deny",
    message: "Can't run this Claude in Chrome action: its input couldn't be safely checked.",
    decisionReason: {
      type: "safetyCheck",
      reason: `Claude in Chrome: ${e}`,
      classifierApprovable: !1
    }
  }
}
var $Tn = "claudecode/chromeSite",
  ye = 253,
  q = /^[a-z0-9._-]+$/,
  _e = /^\[[0-9a-f:.]+\]$/;

function UTn(e, n) {
  if (e.name !== $a || !i2(e.config) || !N(n) || n.chrome_site === void 0 && n.chrome_site_port === void 0) return;
  let {
    chrome_site: r,
    chrome_site_port: o
  } = n;
  if (typeof r !== "string" || r.length > ye || !(q.test(r) || _e.test(r)) || Z(`https://${r}`) !== r || o !== void 0 && !Se(o)) return {
    kind: "unreadable"
  };
  return {
    kind: "named",
    site: o === void 0 ? r : `${r}:${o}`,
    offersGrant: o === void 0 && q.test(r) && n.chrome_offers_site_grant === "true"
  }
}

function BTn(e, n) {
  let r = Zrt(n);
  if (e.kind !== "unreadable") {
    let o = qEt(r, e.site);
    return o && {
      ...o,
      decideLocation: "pre-ask"
    }
  }
  if (r.denied.size === 0) return;
  return {
    behavior: "deny",
    message: "Claude in Chrome could not tell which site this call would act on, so it could not check the sites that are denied.",
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: unreadable site",
      classifierApprovable: !1
    },
    decideLocation: "pre-ask"
  }
}

function jTn(e, n, r, o) {
  if (e.kind !== "named") return;
  let {
    site: a
  } = e, s = ve(n, r).some((d) => Z(d) !== a), c = !s && e.offersGrant && !US(o) && o.forRemoteExecution !== !0;
  return {
    behavior: "ask",
    message: "Claude in Chrome requires permission.",
    decisionReason: {
      type: "other",
      reason: s ? `Claude in Chrome action on ${a}, which may also leave that site` : `Claude in Chrome action on ${a}`
    },
    ...c ? {
      suggestions: [{
        type: "addRules",
        rules: [{
          toolName: Uq,
          ruleContent: a
        }],
        behavior: "allow",
        destination: "session"
      }]
    } : {
      suppressAlwaysAllowRule: !0
    }
  }
}

function Se(e) {
  return typeof e === "string" && /^[0-9]{1,5}$/.test(e) && String(Number(e)) === e && Number(e) <= 65535
}

function Z(e) {
  if (typeof e !== "string" || RCn(e)) return;
  let n = oar(e);
  return n && yz(n.host)
}

function ve(e, n) {
  if (e === "navigate") return [n.url];
  if (e !== "browser_batch" || !Array.isArray(n.actions)) return [];
  return n.actions.flatMap((r) => N(r) && r.name === "navigate" ? [N(r.input) ? r.input.url : void 0] : [])
}
export {
  ETn,
  TTn,
  zrt,
  Po,
  CTn,
  wRe,
  RTn,
  TEt,
  OKt,
  ATn,
  xTn,
  PTn,
  Nqe,
  OTn,
  CEt,
  ITn,
  MTn,
  gz,
  DTn,
  LTn,
  Fqe,
  NTn,
  FTn,
  HTn,
  $Tn,
  UTn,
  BTn,
  jTn
};
