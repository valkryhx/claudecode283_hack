// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j, Y, Axe, jGr, Te, wo, fH, j_e } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { ao, sP, Xs } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { $o } from "B:/~BUN/root/chunk-54p0h65d.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { An, O0, Nw, $Ht, gD } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Zi, ju } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Ld } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { Lt, QYn, w2 } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Fl } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { i$, kpn } from "B:/~BUN/root/chunk-73hzyafy.js";
import { p_e, h$o, kC } from "B:/~BUN/root/chunk-mjdkd2h9.js";
import { de, Xn, lt } from "B:/~BUN/root/chunk-8386ms9e.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var B = f(() => lt({
  sub: de().optional().catch(void 0),
  email: de().optional().catch(void 0),
  groups: Xn(de()).optional().catch(void 0)
}).passthrough());
function w(e) {
  let n = e.indexOf("."),
    o = e.indexOf(".", n + 1);
  if (n < 0 || o < 0) return null;
  try {
    let i = B().safeParse(J(Buffer.from(e.slice(n + 1, o), "base64url").toString("utf8")));
    return i.success ? i.data : null;
  } catch {
    return null;
  }
}
function Ubo(e) {
  return fH(e) ? w(e.jwt)?.sub || void 0 : void 0;
}
var attrs = Object.freeze({}),
  z = new q(() => ({
    jwt: void 0,
    attrs: attrs
  }));
function gUn() {
  let e = wo(),
    n = fH(e) ? e.jwt : void 0,
    o = z.of(j().host);
  if (n === o.jwt) return o.attrs;
  if (o.jwt = n, !n) return o.attrs = attrs;
  let i = w(n);
  if (!i) return o.attrs = attrs;
  let r = {
    "identity.source": "gateway-oidc"
  };
  if (i.sub) r["user.id"] = i.sub;
  if (i.email) r["user.email"] = i.email;
  if (i.groups && i.groups.length > 0) r["user.groups"] = i.groups.join(",");
  return o.attrs = Object.freeze(r);
}
var h = be(Zi(), 1);
import { AsyncLocalStorage as H } from "async_hooks";
class D {
  als = new H();
  active() {
    return this.als.getStore() ?? h.ROOT_CONTEXT;
  }
  with(e, n, o, ...i) {
    let r = o == null ? n : n.bind(o);
    return this.als.run(e, r, ...i);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, n) {
    if (typeof n === "function") {
      let o = (...i) => this.with(e, () => n(...i));
      return Object.defineProperty(o, "length", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: n.length
      }), o;
    }
    return n;
  }
  enable() {
    return this;
  }
  disable() {
    return this.als.disable(), this;
  }
}
var fae = new D();
class k {
  current = void 0;
}
var U = new q(() => new k());
function bTr(e) {
  U.of(j().host).current = e;
}
function STr() {
  return U.of(j().host).current;
}
function hUn() {
  let e = fae.active();
  if (e !== h.ROOT_CONTEXT) return e;
  return STr() ?? e;
}
var _ = be(Zi(), 1),
  F = be(ju(), 1);
var V = {
    OTEL_METRICS_INCLUDE_SESSION_ID: !0,
    OTEL_METRICS_INCLUDE_VERSION: !1,
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0,
    OTEL_METRICS_INCLUDE_ENTRYPOINT: !1,
    OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: !0,
    OTEL_METRICS_INCLUDE_REPOSITORY: !1
  },
  S = "vcs.repository.url.full",
  A = "vcs.repository.name",
  O = "vcs.owner.name",
  b = "vcs.provider.name",
  W = "vcs.ref.head.revision",
  K = "vcs.ref.head.name",
  X = "vcs.ref.head.type",
  Q = [S, O, A, b],
  Z = "gitea.com",
  ee = /^ssh:\/\/[^/?#]*:7999(?=[/?#]|$)/i;
function m(e) {
  let n = V[e],
    o = process.env[e];
  if (o === void 0) return n;
  return Ne(o);
}
function L(e) {
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o < 33 || o === 44 || o === 59 || o === 92 || o > 126) return !1;
  }
  return !0;
}
var M = 255,
  P = $o(e => {
    if (!e) return {};
    let n = {};
    try {
      for (let o of e.split(",")) {
        let [i, r, ...c] = o.split("=");
        if (i === void 0 || r === void 0 || c.length > 0) continue;
        let s = i.trim(),
          u = r.trim().split(/^"|"$/).join("");
        if (s.length === 0 || s.length > M || !L(s)) throw Error("invalid resource attribute key");
        if (u.length > M || !L(u)) throw Error("invalid resource attribute value");
        n[s] = decodeURIComponent(u);
      }
    } catch {
      return {};
    }
    return n;
  });
function Kst() {
  let e = gD(),
    n = Y(),
    o = gUn(),
    i = Object.keys(o).length > 0,
    r = {},
    c = P(a.OTEL_RESOURCE_ATTRIBUTES);
  if (m("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES")) for (let [u, l] of Object.entries(c)) {
    if (i && (u.startsWith("user.") || u.startsWith("identity."))) continue;
    r[u] = l;
  }
  if (r["user.id"] = e, m("OTEL_METRICS_INCLUDE_SESSION_ID")) {
    if (r["session.id"] = n, a.CLAUDE_CODE_REMOTE_SESSION_ID) r["ccr.session.id"] = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  }
  if (m("OTEL_METRICS_INCLUDE_VERSION")) r["app.version"] = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION;
  if (m("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let u = Ld();
    if (u) r["app.entrypoint"] = u;
  }
  if (m("OTEL_METRICS_INCLUDE_REPOSITORY")) {
    let u = c[S] === void 0 ? N().attributes : void 0;
    for (let l of Q) {
      let p = c[l] ?? u?.[l];
      if (p) r[l] = p;
    }
  }
  let s = O0() ?? An() ?? re();
  if (s) {
    let {
      organizationUuid: organizationUuid,
      emailAddress: emailAddress,
      accountUuid: accountUuid
    } = s;
    if (organizationUuid) r["organization.id"] = organizationUuid;
    if (emailAddress) r["user.email"] = emailAddress;
    if (accountUuid && m("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      r["user.account_uuid"] = accountUuid;
      let g = a.CLAUDE_CODE_ACCOUNT_TAGGED_ID || kpn("user", accountUuid);
      if (g) r["user.account_id"] = g;
    }
  }
  if (Object.assign(r, o), Nw.terminal) r["terminal.type"] = Nw.terminal;
  return r;
}
var te = new q(() => ({
  settled: void 0,
  attributes: void 0
}));
function N() {
  let e = te.of(j().host);
  if (e.settled === void 0 && !Lt()) e.settled = QYn().then(n => {
    e.attributes = n ? ne(n) : void 0;
  }).catch(d);
  return e;
}
function ne(e) {
  let n = e.search(/[?#]/);
  if (n >= 0 && e.includes("@", n)) return;
  let o = w2((n >= 0 ? e.slice(0, n) : e).replace(/\/+$/, ""));
  if (!o) return;
  let [i = "", ...r] = o.split("/"),
    c = p_e(i),
    s = r.filter(item => item.length > 0),
    u = s.at(-1);
  if (!c || !u || c.includes("@") || c.includes(":") && !/^\[[0-9a-f:.]+\]$/i.test(c) || s.some(item => item.includes("@"))) return;
  let l = kC(c),
    p = l === "other" ? c : h$o[l],
    g = l !== "other" ? l : p === Z ? "gitea" : void 0,
    E = s.length - 3,
    T = g === void 0 && E >= 0 && s[E] === "scm",
    v = T ? [...s.slice(0, E), ...s.slice(E + 1)] : s,
    y = v.slice(0, -1),
    C = y.at(-1);
  if (g === void 0 && C !== void 0 && (T || ee.test(e.trim()))) {
    let R = [...y.slice(0, -1), "projects", C, "repos", u];
    return {
      [S]: `https://${p}/${R.join("/")}`,
      [O]: C,
      [A]: u,
      [b]: "bitbucket"
    };
  }
  return {
    [S]: `https://${p}/${v.join("/")}`,
    ...(y.length > 0 && {
      [O]: y.join("/")
    }),
    [A]: u,
    ...(g !== void 0 && {
      [b]: g
    })
  };
}
function Bbo({
  commitId: commitId,
  branch: branch
}) {
  return {
    [W]: commitId,
    ...(branch !== void 0 && {
      [K]: branch,
      [X]: "branch"
    })
  };
}
async function jbo() {
  if (m("OTEL_METRICS_INCLUDE_REPOSITORY") && P(a.OTEL_RESOURCE_ATTRIBUTES)[S] === void 0) await N().settled;
}
var oe = new q(() => ({
  token: void 0,
  identity: null
}));
function re() {
  if (!a.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = Fl();
  if (!e) return null;
  let n = oe.of(j().host);
  if (e === n.token) return n.identity;
  n.token = e;
  let o = i$(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
  if (typeof o !== "object" || o === null) return n.identity = null;
  let i = o,
    r = s => typeof s === "string" && s.length > 0 ? s : void 0,
    c = i.act ?? {};
  return n.identity = {
    organizationUuid: r(i.organization_uuid),
    accountUuid: r(i.account_uuid),
    emailAddress: r(i.account_email) ?? r(c.email)
  };
}
class G {
  nextSequence = 0;
  warnedNoEventLogger = !1;
}
var ie = new q(() => new G());
function se() {
  return a.OTEL_LOG_USER_PROMPTS;
}
function mIt(e) {
  return se() ? e : "<REDACTED>";
}
function Wbo() {
  return a.OTEL_LOG_ASSISTANT_RESPONSES ?? a.OTEL_LOG_USER_PROMPTS;
}
var ue = new F.W3CTraceContextPropagator();
function ce() {
  let e = hUn(),
    n = _.trace.getSpanContext(e);
  if (n && _.isSpanContextValid(n)) return e;
  if (Te() && a.TRACEPARENT) return ue.extract(e, {
    traceparent: a.TRACEPARENT,
    tracestate: a.TRACESTATE
  }, _.defaultTextMapGetter);
  return;
}
async function Zo(e, n = {}, o) {
  let i = ie.of(j().host),
    attributes = {
      ...Kst(),
      "event.name": e,
      "event.timestamp": new Date().toISOString(),
      "event.sequence": i.nextSequence++
    },
    c = j_e();
  if (c) attributes["prompt.id"] = c;
  let CLAUDE_CODE_WORKSPACE_HOST_PATHS = a.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (CLAUDE_CODE_WORKSPACE_HOST_PATHS) attributes["workspace.host_paths"] = CLAUDE_CODE_WORKSPACE_HOST_PATHS.split("|");
  Object.assign(attributes, $Ht(o));
  for (let [E, T] of Object.entries(n)) if (T !== void 0) attributes[E] = T;
  let u = new Date(),
    context = ce(),
    p = {
      timestamp: u,
      observedTimestamp: u,
      body: `claude_code.${e}`,
      attributes: attributes,
      ...(context && {
        context: context
      })
    },
    g = Axe();
  if (g) {
    g.emit(p);
    return;
  }
  if (!jGr(p) && !i.warnedNoEventLogger) i.warnedNoEventLogger = !0, t(`[3P telemetry] Event dropped (no event logger initialized): ${e}`, {
    level: "warn"
  });
}
function _9(e) {
  if (e.from === e.to) return;
  Zo("permission_mode_changed", {
    from_mode: e.from,
    to_mode: e.to,
    ...(e.trigger && {
      trigger: e.trigger
    })
  });
}
function eEe(e) {
  Zo("compaction", {
    trigger: e.trigger,
    success: String(e.success),
    duration_ms: String(Math.round(e.durationMs)),
    ...(e.preTokens !== void 0 && {
      pre_tokens: String(e.preTokens)
    }),
    ...(e.postTokens !== void 0 && {
      post_tokens: String(e.postTokens)
    }),
    ...(e.error && {
      error: e.error
    }),
    ...(e.precomputeReuse && {
      precompute_reuse: e.precomputeReuse
    })
  });
}
function wTr(e) {
  Zo("retention_sweep", {
    result: e.result,
    period_days: String(e.periodDays),
    used_default: String(e.usedDefault),
    ...(e.skipReason && {
      skip_reason: e.skipReason
    }),
    ...(e.transcriptsDeleted !== void 0 && {
      transcripts_deleted: String(e.transcriptsDeleted)
    }),
    ...(e.transcriptsExemptedDesktop !== void 0 && {
      transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop)
    }),
    ...(e.sessionFilesDeleted !== void 0 && {
      session_files_deleted: String(e.sessionFilesDeleted)
    }),
    ...(e.artifactsDeleted !== void 0 && {
      artifacts_deleted: String(e.artifactsDeleted)
    }),
    ...(e.filesRetainedFresh !== void 0 && {
      files_retained_fresh: String(e.filesRetainedFresh)
    }),
    ...(e.filesPastCutoff !== void 0 && {
      files_past_cutoff: String(e.filesPastCutoff)
    }),
    ...(e.errorCount !== void 0 && {
      error_count: String(e.errorCount)
    }),
    ...(e.historyEntriesPruned !== void 0 && {
      history_entries_pruned: String(e.historyEntriesPruned)
    })
  });
}
var x = !1;
function zbo(e) {
  if (x) return;
  x = !0;
  try {
    let n = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    Zo("internal_error", {
      error_name: sP(n) ?? "Error",
      error_code: ao(e)
    });
  } finally {
    x = !1;
  }
}
function BM(e) {
  Zo("at_mention", {
    mention_type: e.mentionType,
    success: String(e.success)
  });
}
function $me(e) {
  let n = e.error !== void 0 ? Xs(e.error) : null;
  Zo("auth", {
    action: e.action,
    success: String(e.success),
    auth_method: e.authMethod,
    ...(n && {
      error_category: n.kind,
      ...(n.status !== void 0 && {
        status_code: String(n.status)
      })
    })
  });
}
export { Ubo, gUn, Kst, Bbo, jbo, fae, bTr, STr, hUn, mIt, Wbo, Zo, _9, eEe, wTr, zbo, BM, $me };