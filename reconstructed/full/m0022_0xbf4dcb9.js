// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  P,
  v,
  B,
  wre,
  Q$
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  xn,
  Dn,
  zh,
  Ka,
  G$,
  oM,
  B_,
  XY,
  JY,
  sM,
  Wi,
  Yi,
  $xe,
  rS,
  bH,
  FC,
  kl,
  ns,
  rP,
  gQ
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  N9e,
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  Ne
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  q,
  di,
  Y,
  Wo
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  aH
} from "B:/~BUN/root/chunk-0fnha6bz.js";
import {
  Ys,
  Xd,
  re,
  Ze
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  rt
} from "B:/~BUN/root/chunk-mmkravm0.js";
import * as f from "fs";
import {
  appendFile as vn,
  chmod as An,
  copyFile as On,
  link as Rn,
  lstat as Ie,
  mkdir as Pn,
  open as I,
  readdir as Ln,
  readFile as yt,
  readlink as Fn,
  realpath as Tn,
  rename as _n,
  rmdir as In,
  rm as Cn,
  stat as bt,
  symlink as Hn,
  unlink as Nn
} from "fs/promises";
import {
  homedir as kt
} from "os";
import * as d from "path";
import {
  writeFileSync as wn
} from "fs";
import {
  appendFile as Le,
  mkdir as at,
  rename as ut,
  stat as dn,
  symlink as fn,
  unlink as De
} from "fs/promises";
import {
  dirname as U,
  isAbsolute as gn,
  join as _,
  resolve as ht
} from "path";

function zg(e) {
  return {
    ok: !0,
    value: e
  }
}

function xf(e) {
  return {
    ok: !1,
    error: e
  }
}
class We extends Error {
  constructor(e) {
    super("Result was an error (see .error)");
    this.name = "ResultError", Object.defineProperty(this, "error", {
      value: e,
      enumerable: !1
    })
  }
}

function wBo(e) {
  if (e.ok) return e.value;
  throw new We(e.error)
}
var Gu = {
  home: (e) => ({
    space: "home",
    path: e
  }),
  workspace: (e) => ({
    space: "workspace",
    path: e
  }),
  system: (e) => ({
    space: "system",
    path: e
  }),
  userNamed: (e) => ({
    space: "userNamed",
    path: e
  })
};

function t2r(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = Reflect.get(e, "code"),
    r = Reflect.get(e, "telemetryCode");
  return n === "Failed" && typeof r === "string" && (Q$(r) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(r))
}

function vBo(e) {
  if (t2r(e)) {
    if (e.cause instanceof Error) return e.cause;
    return Object.assign(new P(rt(e), "host file operation refused by the storage backend"), {
      code: e.telemetryCode,
      cause: e
    })
  }
  return Object.assign(new P(rt(e), "host file operation could not be performed by the storage backend"), {
    cause: e
  })
}
var ge = globalThis.process?.getBuiltinModule?.("async_hooks"),
  Ue = ge !== void 0,
  he = ge ? new ge.AsyncLocalStorage : {
    run: (e, n) => n(),
    getStore: () => {
      return
    }
  };

function pe({
  writeBatch: e,
  sizeOf: n,
  flushIntervalMs: r = 1000,
  maxBufferSize: i = 100,
  maxBufferBytes: s = 1 / 0,
  immediateMode: o = !1
}) {
  let a = [],
    u = 0,
    c = null,
    l = null;

  function g() {
    if (c) clearTimeout(c), c = null
  }

  function p(S) {
    try {
      e(S)
    } catch {}
  }

  function m() {
    if (l) p(l), l = null;
    if (a.length === 0) return;
    p(a), a = [], u = 0, g()
  }

  function A() {
    if (!c) c = setTimeout(m, r)
  }

  function w() {
    if (l) {
      l.push(...a), a = [], u = 0, g();
      return
    }
    let S = a;
    a = [], u = 0, g(), l = S, setImmediate(() => {
      let h = l;
      if (l = null, h) p(h)
    })
  }
  return {
    write(S) {
      if (o) {
        p([S]);
        return
      }
      if (a.push(S), u += n(S), A(), a.length >= i || u >= s) w()
    },
    flush: m,
    dispose() {
      m()
    }
  }
}

function kBo({
  writeFn: e,
  flushIntervalMs: n,
  maxBufferSize: r,
  maxBufferBytes: i,
  immediateMode: s
}) {
  return pe({
    writeBatch: (o) => e(o.join("")),
    sizeOf: (o) => o.length,
    flushIntervalMs: n,
    maxBufferSize: r,
    maxBufferBytes: i,
    immediateMode: s
  })
}

function Dt(e) {
  if (typeof e === "function") return e;
  if (Symbol.asyncDispose in e) return () => e[Symbol.asyncDispose]();
  return () => e[Symbol.dispose]()
}
class me {
  #e = new Set;
  #t = !1;
  get drainStarted() {
    return this.#t
  }
  register(e) {
    let n = Dt(e);
    this.#e.add(n);
    let r = () => {
      this.#e.delete(n)
    };
    return Object.assign(r, {
      [Symbol.dispose]: r
    })
  }
  async drain() {
    this.#t = !0;
    let e = Array.from(this.#e);
    this.#e.clear();
    let r = (await Promise.allSettled(e.map(async (i) => i()))).find((i) => i.status === "rejected");
    if (r !== void 0) throw r.reason
  }
  async [Symbol.asyncDispose]() {
    await this.drain()
  }
  get sizeForTesting() {
    return this.#e.size
  }
}
class ze {
  cleanup = new me;
  preExitFlush = new me
}
var Ft = new q(() => new ze);

function V() {
  return di(Ft)
}
var lre = 2000;

function gt(e) {
  return V().cleanup.register(e)
}
async function m9e() {
  await V().cleanup.drain()
}

function oE() {
  return V().cleanup.drainStarted
}

function AC(e) {
  return V().preExitFlush.register(e)
}
async function Vhn() {
  await V().preExitFlush.drain()
}
class je {
  parsed = new Map;
  lookup(e) {
    return this.parsed.get(e)
  }
  remember(e, n) {
    this.parsed.set(e, n)
  }
  reset() {
    this.parsed.clear()
  }
}
var Me = new je;

function Ge(e) {
  let n = Me.lookup(e);
  if (n !== void 0) return n;
  let r = Tt(e);
  return Me.remember(e, r), r
}

function Tt(e) {
  if (!e || e.trim() === "") return null;
  let n = e.split(",").map((o) => o.trim()).filter(Boolean);
  if (n.length === 0) return null;
  let r = n.some((o) => o.startsWith("!")),
    i = n.some((o) => !o.startsWith("!"));
  if (r && i) return null;
  let s = n.map((o) => o.replace(/^!/, "").toLowerCase());
  return {
    include: r ? [] : s,
    exclude: r ? s : [],
    isExclusive: r
  }
}

function _t(e) {
  let n = [],
    r = e.match(/^MCP server ["']([^"']+)["']/);
  if (r && r[1]) n.push("mcp"), n.push(r[1].toLowerCase());
  else {
    let o = e.match(/^([^:[]+):/);
    if (o && o[1]) n.push(o[1].trim().toLowerCase())
  }
  let i = e.match(/^\[([^\]]+)]/);
  if (i && i[1]) n.push(i[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) n.push("1p");
  let s = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (s && s[1]) {
    let o = s[1].trim().toLowerCase();
    if (o.length < 30 && !o.includes(" ")) n.push(o)
  }
  return Array.from(new Set(n))
}

function It(e, n) {
  if (!n) return !0;
  if (e.length === 0) return !1;
  if (n.isExclusive) return !e.some((r) => n.exclude.includes(r));
  else return e.some((r) => n.include.includes(r))
}

function Ve(e, n) {
  if (!n) return !0;
  let r = _t(e);
  return It(r, n)
}
var et = /api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret/i,
  Ke = "[^\\s,;&}\\])]+",
  Je = `"[^"]*"|'[^']*'|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|(?:Bearer|Basic)\\s+(?:\\[REDACTED\\]|${Ke})|${Ke}`,
  Ct = ["sk", "ant", "api"].join("-"),
  O = "[\\w=-]{20,}(?:\\.[0-9a-z]{9})?",
  tt = [{
    id: "url-userinfo",
    source: ":\\/\\/([^/@\\s]+)@",
    confidence: "low"
  }, {
    id: "gcp-service-account",
    source: "\\b([a-z0-9-]+@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
    flags: "i",
    confidence: "low"
  }, {
    id: "loose-anthropic-key",
    source: "\\b(sk-ant-?[\\w-]{10,})",
    confidence: "low"
  }, {
    id: "http-auth-scheme",
    source: "\\b(?:Bearer|Basic)\\s+([A-Za-z0-9+/=._~-]{20,})",
    flags: "i",
    confidence: "low"
  }, {
    id: "loose-jwt",
    source: "\\b(eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,})",
    confidence: "low"
  }, {
    id: "sensitive-assign",
    source: `(?:${et.source})[\\w.-]*["']?\\s*[=:]\\s*(${Je})`,
    flags: "i",
    confidence: "low"
  }, {
    id: "cloud-env-var",
    source: `\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w+\\s*[=:]\\s*(${Je})`,
    flags: "i",
    confidence: "low"
  }, {
    id: "aws-access-token",
    source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
    confidence: "high"
  }, {
    id: "gcp-api-key",
    source: "\\b(AIza[\\w-]{35})(?![\\w-])",
    confidence: "high"
  }, {
    id: "google-oauth-client-secret",
    source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])",
    confidence: "high"
  }, {
    id: "azure-ad-client-secret",
    source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
    confidence: "high"
  }, {
    id: "digitalocean-pat",
    source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "digitalocean-access-token",
    source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-api-key",
    source: `\\b(${Ct}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-admin-api-key",
    source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-oauth-token",
    source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "openai-api-key",
    source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}",
    confidence: "high"
  }, {
    id: "openai-legacy-api-key",
    source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])",
    confidence: "high"
  }, {
    id: "huggingface-access-token",
    source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "supabase-secret-key",
    source: "\\bsb_secret_[A-Za-z0-9_-]{20,}",
    confidence: "high"
  }, {
    id: "supabase-access-token",
    source: "\\bsbp_[a-z0-9]{40,}",
    confidence: "high"
  }, {
    id: "github-pat",
    source: "ghp_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-fine-grained-pat",
    source: "github_pat_\\w{82}",
    confidence: "high"
  }, {
    id: "github-app-token",
    source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-oauth",
    source: "gho_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-refresh-token",
    source: "ghr_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "gitlab-pat",
    source: `glpat-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-deploy-token",
    source: `gldt-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-runner-authentication-token",
    source: `glrt-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-oauth-app-secret",
    source: `gloas-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-pipeline-trigger-token",
    source: `glptt-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-kubernetes-agent-token",
    source: `glagent-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-incoming-mail-token",
    source: `glimt-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-scim-oauth-token",
    source: `glsoat-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-ci-build-token",
    source: `glcbt-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-feed-token",
    source: `glft-${O}`,
    confidence: "high"
  }, {
    id: "gitlab-feature-flag-client-token",
    source: `glffct-${O}`,
    confidence: "high"
  }, {
    id: "slack-bot-token",
    source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
    confidence: "high"
  }, {
    id: "slack-user-token",
    source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
    confidence: "high"
  }, {
    id: "slack-rotation-token",
    source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}",
    confidence: "high"
  }, {
    id: "slack-app-token",
    source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
    flags: "i",
    confidence: "high"
  }, {
    id: "slack-workflow-token",
    source: "\\bxwfp-[a-zA-Z0-9-]{20,}",
    confidence: "high"
  }, {
    id: "slack-webhook-url",
    source: "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}",
    flags: "i",
    confidence: "high"
  }, {
    id: "twilio-api-key",
    source: "SK[0-9a-fA-F]{32}",
    confidence: "high"
  }, {
    id: "sendgrid-api-token",
    source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "npm-access-token",
    source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "pypi-upload-token",
    source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
    confidence: "high"
  }, {
    id: "databricks-api-token",
    source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "hashicorp-tf-api-token",
    source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
    confidence: "high"
  }, {
    id: "pulumi-api-token",
    source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "postman-api-token",
    source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-api-key",
    source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-cloud-api-token",
    source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-service-account-token",
    source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "sentry-user-token",
    source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "sentry-org-token",
    source: "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
    confidence: "high"
  }, {
    id: "stripe-access-token",
    source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "shopify-access-token",
    source: "shpat_[a-fA-F0-9]{32}",
    confidence: "high"
  }, {
    id: "shopify-shared-secret",
    source: "shpss_[a-fA-F0-9]{32}",
    confidence: "high"
  }],
  Ht = 64;

function be(e, n) {
  let r = /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi,
    i = /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
  r.lastIndex = n;
  let s = r.exec(e);
  if (!s) return null;
  i.lastIndex = s.index + s[0].length + Ht;
  let o = i.exec(e);
  if (!o) return null;
  return {
    start: s.index,
    end: o.index + o[0].length
  }
}

function Nt(e) {
  return be(e, 0) !== null
}

function Bt(e) {
  let n = be(e, 0);
  if (!n) return e;
  let r = "",
    i = 0;
  while (n) r += e.slice(i, n.start) + "[REDACTED]", i = n.end, n = be(e, i);
  return r + e.slice(i)
}
var Ye = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  Xe = "(?=[^a-zA-Z0-9_\\-+=]|$)",
  $t = "(?<![a-zA-Z0-9_\\-])";

function Wt() {
  return tt.map((e) => ({
    id: e.id,
    confidence: e.confidence,
    re: new RegExp(e.confidence !== "high" ? e.source : $t + (e.source.endsWith(Ye) ? e.source.slice(0, -Ye.length) + Xe : e.source + Xe), (e.flags ?? "").replace("g", "") + "g")
  }))
}

function ye(e) {
  return tt.map((n) => ({
    id: n.id,
    confidence: n.confidence,
    re: new RegExp(n.source, e ? (n.flags ?? "").replace("g", "") + "g" : n.flags ?? "")
  }))
}

function ke(e, n) {
  if (typeof n !== "string") return "[REDACTED]";
  let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? n[0] : "",
    i = e.lastIndexOf(n);
  return `${e.slice(0,i)}${r}[REDACTED]${r}${e.slice(i+n.length)}`
}
var Ut = 512,
  zt = 512;
class nt {
  testRules = null;
  redactRules = null;
  displayRules = null;
  resultCache = new Map;
  scan(e) {
    this.testRules ??= ye(!1);
    let n = [];
    for (let r of this.testRules)
      if (r.confidence === "high" && r.re.test(e)) n.push({
        ruleId: r.id,
        label: r.id.split("-").map((i) => ln[i] ?? Xd(i)).join(" ")
      });
    if (Nt(e)) n.push({
      ruleId: "private-key",
      label: "Private Key"
    });
    return n
  }
  redactContext(e) {
    this.redactRules ??= ye(!0);
    let n = Bt(e);
    for (let r of this.redactRules)
      if (r.confidence === "low") n = n.replace(r.re, ke);
    return n
  }
  redactTokens(e) {
    this.redactRules ??= ye(!0);
    let n = e;
    for (let r of this.redactRules)
      if (r.confidence === "high") n = n.replace(r.re, ke);
    return n
  }
  redact(e) {
    let n = e.length <= Ut;
    if (n) {
      let i = this.resultCache.get(e);
      if (i !== void 0) return i
    }
    let r = this.redactTokens(this.redactContext(e));
    if (n) {
      if (this.resultCache.size >= zt) this.resultCache.delete(this.resultCache.keys().next().value);
      this.resultCache.set(e, r)
    }
    return r
  }
  redactForDisplay(e) {
    this.displayRules ??= Wt();
    let n = e;
    for (let r of this.displayRules) {
      if (r.confidence !== "high") continue;
      n = n.replace(r.re, Gt)
    }
    return n
  }
}
var Z = new nt;

function h9e(e) {
  return Z.scan(e)
}

function qo(e) {
  return Z.redact(e)
}

function i2r(e) {
  return Z.redactContext(e)
}

function Xhn(e) {
  return Z.redactTokens(e)
}
var w1t = 16384;

function EBo(e, n) {
  let r = i2r(e);
  for (let i = n + 2 * w1t;; i *= 2) {
    if (r.length <= i) return Xhn(r);
    let s = Xhn(r.slice(0, i)),
      o = s.length - w1t;
    if (o >= n) return re(s, o)
  }
}
var Mt = /[$\x60|;&<>()\s]/,
  jt = /[/.@:~*?\\]/;

function Gt(e, n) {
  let r = typeof n === "string" ? n : e;
  if (Mt.test(r) || jt.test(r)) return e;
  return ke(e, n)
}

function O_e(e) {
  return Z.redactForDisplay(e)
}

function O2(e, n = qo) {
  if (typeof e === "string") return n(e);
  if (Array.isArray(e)) return e.map((r) => O2(r, n));
  if (e !== null && typeof e === "object") {
    let r = Object.create(null);
    for (let [i, s] of Object.entries(e))
      if (typeof s === "string") {
        let o = `${i}: `,
          a = n(o + s);
        r[i] = a.startsWith(o) ? a.slice(o.length) : n(s)
      } else r[i] = O2(s, n);
    return r
  }
  return e
}

function TBo(e) {
  let n = Object.create(null);
  for (let [r, i] of Object.entries(e)) n[r] = et.test(r) ? "[REDACTED]" : i;
  return n
}
var sE = "[redacted URL]";

function Qe(e) {
  let n = R(e);
  if (!/%(?:40|3a|5c)/i.test(n)) return e;
  let r = /^(?:https?|wss?|ftp|file):/i.test(n);
  return n.replace(r ? /%(40|3a)/gi : /%(40|3a|5c)/gi, (i, s) => String.fromCharCode(parseInt(s, 16)))
}

function we(e, n, r) {
  let i = n(e),
    s = Qe(e);
  if (i === r || s === e) return i;
  return i !== null && Qe(i) === n(s) ? i : r
}

function v1t(e) {
  return we(e, Vt, null)
}

function Vt(e) {
  try {
    let n = new URL(e);
    if (!n.host || ve(e) || Ee(n) || Oe(e, n) || ot(e)) return null;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "")
  } catch {
    return null
  }
}
var a2r = /[@:]|\/\//;

function q5n(e) {
  let n = v1t(e);
  if (n === null) return null;
  let {
    protocol: r,
    host: i,
    pathname: s
  } = new URL(n);
  if (!a2r.test(s)) return n;
  let o = s.replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\/{2,}/g, (a) => `/${Ys("%2F",a.length-1)}`);
  return `${r}//${i}${o}`
}

function Jhn(e) {
  return e.replace(/:\/\/[^/?#]*@/g, "://")
}

function Bh(e) {
  return we(e, X, sE)
}

function X(e) {
  if (!e) return e;
  if (te(e) || st(e) || ve(e)) return sE;
  try {
    let n = new URL(e);
    if (!n.host) throw TypeError("opaque");
    if ((n.username !== "" || n.password !== "") && `${n.pathname}${n.search}${n.hash}`.includes("@") || Ee(n) || Oe(e, n)) return sE;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "")
  } catch {
    let n = R(e),
      r = Re(n),
      i = n.slice(r),
      s = Pe(i),
      o = i.search(/[?#]/);
    if (s !== -1 && o !== -1 && o < s) return sE;
    let a = s === -1 ? i : i.slice(s + 1),
      u = a.search(/[?#]/);
    if (u !== -1 && a.includes("@", u) && (s !== -1 || !sn(a, u, r !== 0))) return sE;
    let c = Ze(Ze(s === -1 ? n : n.slice(r + s + 1), "?"), "#"),
      l = c.lastIndexOf("@"),
      g = l === -1 ? c : c.slice(l + 1);
    return W(g) && !W(n) && !/^:\d+\/?$/.test(g.startsWith("[") ? g.slice(g.indexOf("]") + 1) : g.slice(g.indexOf(":"))) ? sE : g
  }
}
var xe = /^(?:(?:file:\/\/)?[a-z]:(?:\\|\/(?!\/))|\\\\)/i;

function Dp(e) {
  return we(e, Zt, sE)
}

function Zt(e) {
  if (te(e) || ve(e)) return sE;
  if (xe.test(e)) {
    let s = e.indexOf("?", e.startsWith("\\\\?\\") ? 4 : 0);
    return s === -1 ? e : e.slice(0, s)
  }
  if (st(e) && !rn(e)) return sE;
  let n;
  try {
    n = new URL(e)
  } catch {
    return Q(e, qe(e) ? X(e) : e)
  }
  if (!n.host) return Q(e, n.search || n.hash || qe(e) ? X(e) : e);
  if (Oe(e, n)) return sE;
  let r = n.username !== "" && Ae(n.protocol.slice(0, -1)),
    i = n.username !== "" && !/^[^:]*:\//.test(R(e));
  return Q(e, r || i || n.password || ne(n.username) || Ee(n) || n.search || n.hash ? X(e) : e)
}

function pBe(e) {
  return Q(e, Bh(e))
}

function ZJ(e, n, r) {
  return n === "" || n === r ? e : e.split(n).join(r)
}

function yK(e, n) {
  let r = typeof n === "string" || n === void 0 ? [n] : n;
  for (let i of r) {
    if (!i || !/[\s'"`<>]/.test(i)) continue;
    let s = Dp(i);
    if (s === i) continue;
    e = ZJ(e, i, s);
    let o = Re(i),
      a = i.slice(o),
      u = a.indexOf("/");
    for (let c of new Set([a.indexOf("@"), Pe(a)]))
      if (o !== 0 && c !== -1 && (u === -1 || c < u)) {
        let l = i.slice(0, o) + a.slice(c + 1);
        e = ZJ(e, l, s)
      }
  }
  return D$(e)
}

function Kt(e) {
  let n = R(e),
    r = Re(n),
    i = r !== 0,
    s = n.indexOf("#");
  if (n.includes("?") || s !== -1 && (i || n.includes("@", s))) return !0;
  let o = n.slice(r),
    a = Pe(o);
  if (a === -1) return !1;
  let u = n.slice(0, r - 3),
    c = /^(?:ftps?|wss?)$/i.test(u) ? o.slice(0, a).replace(/^[/\\]+/, "") : o.slice(0, a);
  return ne(c) || i && (/https?$/i.test(u) || !c.includes("/") && Ae(u))
}
var l2r = /:|%3a/i;

function Ee(e) {
  return !e.hostname.startsWith("[") && /%3a/i.test(e.hostname) && `${e.pathname}${e.search}${e.hash}`.includes("@")
}

function ne(e) {
  return l2r.test(e)
}

function ve(e) {
  let n = R(e),
    r = n.indexOf(":"),
    i = r === -1 ? "" : n.slice(0, r);
  if (!/^[a-z][a-z0-9+.-]*$/i.test(i) || !/(?:ssh|git\+ssh|ssh\+git|git|file)$/i.test(i) || xe.test(n)) return !1;
  let s = n.slice(r + 1),
    o = Ze(s.slice(/^\/*/.exec(s)[0].length), "/"),
    a = o.search(/[?#]/);
  if (!(/%40/i.test(o) || a !== -1 && o.includes("@", a))) return !1;
  let u = o.replace(/%([0-9a-f]{2})/gi, (l, g) => String.fromCharCode(parseInt(g, 16))),
    c = u.lastIndexOf("@");
  return c !== -1 && u.slice(0, c).includes(":")
}

function W(e) {
  let n = e.indexOf(":"),
    r = e.indexOf("/");
  return n > 0 && !e.includes("://") && (r === -1 || n < r)
}

function Q(e, n) {
  let r = (s, o) => Jt(s) || /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.test(s) && o !== s && !o.toLowerCase().startsWith(s.slice(0, s.indexOf("://") + 3).toLowerCase()) || W(s) && (Yt(s) || /[\t\n\r]/.test(s) || Xt(s, o));
  return n !== e && W(n) && !W(e) || r(e, n) || r(n, n) ? sE : n
}

function Jt(e) {
  let n = /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.exec(e);
  if (!n && !W(e)) return !1;
  let r = n ? /^(?:[\w.~+-]+(?::[^@/?#%\s[\]]*)?@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\])?(?::[\w~-]*)?(?:\/|$)/i : /^(?:[\w.~+-]+@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\]):/i,
    i = n ? e.slice(n[0].length) : e,
    s = n ? i.slice(Math.max(i.indexOf("/"), 0)) : "";
  return !r.test(i) || /(?:@|%40)(?:\[|%5b)/i.test(s)
}

function Yt(e) {
  try {
    return new URL(e).host !== ""
  } catch {
    return !1
  }
}

function Xt(e, n) {
  let r = R(e),
    i = r.indexOf(":"),
    s = r.slice(0, i);
  if (i <= 0 || /[/?#]/.test(s) || e.includes("://")) return !1;
  let o = s.lastIndexOf("@"),
    a = r.indexOf("@["),
    u = a !== -1 ? a + 1 : r.startsWith("[") ? 0 : -1,
    c = s.slice(o + 1);
  if (u !== -1) {
    let l = r.indexOf("]", u);
    if (u !== o + 1 || r[l + 1] !== ":" || /[/?#@\\]/.test(r.slice(u + 1, l))) return !0;
    c = r.slice(u, l + 1)
  }
  return n !== e && n !== sE && !n.startsWith(`${c}:`)
}

function qe(e) {
  return Kt(e) || Qt(e)
}

function Qt(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""),
    r = n.indexOf("://");
  if (r !== -1 && /[?#]/.test(n)) return !0;
  let i = Ze(r === -1 ? n : n.slice(r + 3), "/"),
    s = i.lastIndexOf("@");
  return s !== -1 && (ne(i.slice(0, s)) || r !== -1 && Ae(n.slice(0, r)))
}

function Ae(e) {
  return !/^(?:ssh|git\+ssh|ssh\+git)$/i.test(e)
}

function R(e) {
  return e.replace(/^[\u0000-\u0020]+/, "").replace(/[\t\n\r]/g, "")
}
var ee = "(^|[^a-z0-9+.-]|%[0-9a-f]{2})",
  qt = "https?|wss?|ftps?",
  it = "ssh\\+git|git\\+ssh|ssh|git",
  en = new RegExp(`[a-z](?:[a-z0-9+.-]{1,31}:\\/+|:\\/\\/)|(?:https?|ftps?):(?!\\/)|${ee}(?:wss?|file):(?!\\/)|${ee}(?:${it}):(?!\\/)(?=[^@/?#\\s]*?(?::|%3a))`, "i");

function te(e, {
  forDestination: n = !1
} = {}) {
  let r = R(e).replace(/\\/g, "/"),
    i = r.search(/[?#]/),
    s = i === -1 ? r : r.slice(0, i),
    o = (n ? /^[a-z][a-z0-9+.-]*:\/*/i.exec(s) : null) ?? /:\/+/.exec(s);
  if (!o) return !1;
  let a = o.index + o[0].length,
    u = (n ? en : /[a-z][a-z0-9+.-]{1,31}:\/+/i).exec(s.slice(a)),
    c = a + (u?.index ?? 0) + (u?.[0].length ?? 0);
  return u !== null && (r.includes("@", c) || /%40/i.test(Ze(r.slice(c), "/")))
}

function st(e) {
  let n = R(e);
  if (xe.test(n) || /^file:/i.test(n)) return !1;
  return ot(e)
}

function ot(e) {
  let n = R(e),
    r = n.search(/[?#]/),
    s = (r === -1 ? n : n.slice(0, r)).indexOf("\\");
  return s !== -1 && n.includes("@", s)
}

function tn(e) {
  let n = R(e),
    r = /(?:ssh|git\+ssh|ssh\+git|git):\/\//i.exec(n);
  if (!r) return !1;
  let i = n.slice(r.index + r[0].length).replace(/%40/gi, "@").replace(/%5b/gi, "["),
    s = i.search(/[/?#]/);
  return s !== -1 && i.includes("@[", s)
}

function Oe(e, n) {
  return te(e, {
    forDestination: !0
  }) || te(n.href, {
    forDestination: !0
  }) || tn(e) || n.protocol === "file:" && nn(e)
}

function nn(e) {
  let n = R(e),
    r = n.search(/[?#]/),
    s = (r === -1 ? n : n.slice(0, r)).indexOf("\\"),
    o = n.lastIndexOf("@");
  return s !== -1 && o > s && /:|%3a/i.test(n.slice(s, o))
}

function rn(e) {
  return /^[\w .+~@\\/-]*$/.test(e) && !/\\(?:[^A-Za-z0-9@]|$)| $|\.[_~+]*\.|(?:^|\/)[_~+]*\.[_~+]*$/.test(e) && !/(?:^|[^\\])@|@[^\\/ ]*(?:[/ ]|$)/.test(e)
}

function Re(e) {
  let n = e.indexOf("://");
  return n !== -1 && /^[a-z][a-z0-9+.-]*$/i.test(e.slice(0, n)) ? n + 3 : 0
}

function Pe(e) {
  let n = e.indexOf("@");
  if (n === -1) return -1;
  let r = e.search(/[?#]/);
  if (r !== -1 && r < n && e.lastIndexOf("/", r) !== -1) return -1;
  let i = e.indexOf("/", n);
  return e.lastIndexOf("@", i === -1 ? e.length : i)
}

function sn(e, n, r) {
  let i = e.indexOf("/");
  if (i <= 0 || i > n) return !1;
  let s = e.slice(0, i).replace(/^\[[^\]]*\]/, "");
  return !ne(r ? s.replace(/:\d+$/, "") : s)
}
var on = /[a-z][a-z0-9+.-]{0,31}:\/\/[^\s'"`<>]+/gi,
  an = /(^|[\s'"`<>])([^\s'"`<>]*(?:@|%40)[^\s'"`<>]*)/gi,
  un = new RegExp(`${ee}(?:${qt}):(?!\\/\\/)|${ee}(?:${it}):(?!\\/\\/)`, "gi");

function cn(e) {
  let n = e.toLowerCase(),
    r = Math.max(n.lastIndexOf("@"), n.lastIndexOf("%40"));
  for (let i of e.matchAll(un)) {
    let s = i.index + i[0].length;
    if (r < s) return -1;
    let o = i.index + (i[1] ?? i[2] ?? "").length;
    if (i[2] === void 0) return o;
    let a = n.indexOf(":", s),
      u = Math.min(a === -1 ? r : a, r);
    if (a !== -1 && a < r || n.slice(s, u).includes("%3a")) return o
  }
  return -1
}

function D$(e) {
  if (!e) return e;
  return e.replace(on, (n) => Dp(n)).replace(an, (n, r, i) => {
    let s = cn(i);
    return s === -1 ? r + i : r + i.slice(0, s) + Dp(i.slice(s))
  })
}
var ln = {
  aws: "AWS",
  gcp: "GCP",
  api: "API",
  pat: "PAT",
  ad: "AD",
  tf: "TF",
  oauth: "OAuth",
  npm: "NPM",
  pypi: "PyPI",
  jwt: "JWT",
  ci: "CI",
  scim: "SCIM",
  github: "GitHub",
  gitlab: "GitLab",
  openai: "OpenAI",
  digitalocean: "DigitalOcean",
  huggingface: "HuggingFace",
  hashicorp: "HashiCorp",
  sendgrid: "SendGrid"
};
var Te = {
    verbose: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4
  },
  hn = 10485760;

function pn(e) {
  return Object.hasOwn(Te, e)
}

function ct(e) {
  return rP(e) ? null : ht(e)
}

function lt() {}
var mn = {
  sessionId: "",
  fromBackend: !1
};

function dt(e, n, r, i) {
  let s = _(n, "debug"),
    o = _(s, `${e.sessionId}.txt`),
    a;
  if (r === null) a = o;
  else if (i !== null && r === i) a = _(i, `${e.sessionId}.txt`);
  else a = r;
  let u = !e.fromBackend && a === o ? "v5" : "raw";
  return {
    target: a,
    arm: u,
    configHome: n,
    rotate: u === "raw" && !(U(a) === s && a.endsWith(".txt")),
    pointLatest: u === "raw" && a !== o
  }
}

function Fe(e) {
  return Gu.userNamed(gn(e) ? e : ht(e))
}

function yn(e) {
  return e.code === "Failed" && e.telemetryCode === "ENOENT"
}

function bn(e, n = Ue) {
  return n ? e : void 0
}
async function ft(e, n, r, i) {
  let s = {
      namespace: "log",
      sessionId: n,
      channel: "debug"
    },
    o = await he.run(!0, () => e.append(s, [{
      data: r
    }], i ? {
      markLatest: !0
    } : void 0));
  if (o.ok) return "landed";
  return i && o.error.code === "InvalidArgument" && o.error.argument === "opts.markLatest" ? "refused" : "dropped"
}
class pt {
  deps;
  minLevel;
  filter;
  toStderr;
  filePath;
  runtimeDebugEnabled = !1;
  hasFormattedOutput = !1;
  debugFromLaunch;
  storageV5;
  writer = null;
  redirect = null;
  pendingWrite = Promise.resolve();
  unflushedChunks = [];
  backendLinesLogged = 0;
  exiting = !1;
  exitHandlerRegistered = !1;
  successor = null;
  writtenBytes = -1;
  rotating = !1;
  resolvedLogPath = null;
  overrideDirectory = null;
  rotationTarget = null;
  latestMarked = !1;
  latestRefused = !1;
  constructor(e) {
    this.deps = e;
    if (this.storageV5 = bn(e.storageV5), e.launchIdentity !== void 0) {
      this.minLevel = e.launchIdentity.minLevel, this.filter = e.launchIdentity.filter, this.toStderr = e.launchIdentity.toStderr, this.filePath = e.launchIdentity.filePath, this.debugFromLaunch = e.launchIdentity.debugFromLaunch;
      return
    }
    let n = Array.isArray(e.argv) ? e.argv : [],
      r = n.indexOf("--"),
      i = r === -1 ? n : n.slice(0, r),
      s = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    this.minLevel = s && pn(s) ? s : "debug";
    let o = i.find((u) => u.startsWith("--debug="));
    this.filter = o ? Ge(o.substring(8)) : null, this.toStderr = i.includes("--debug-to-stderr") || i.includes("-d2e");
    let a = null;
    for (let u = 0; u < i.length; u++) {
      let c = i[u];
      if (c.startsWith("--debug-file=")) {
        a = ct(c.substring(13));
        break
      }
      if (c === "--debug-file" && u + 1 < i.length) {
        a = ct(i[u + 1]);
        break
      }
    }
    this.filePath = a, this.debugFromLaunch = Ne(e.env.DEBUG) || Ne(e.env.DEBUG_SDK) || i.includes("--debug") || i.includes("-d") || this.toStderr || o !== void 0 || this.filePath !== null
  }
  isDebugMode() {
    return this.runtimeDebugEnabled || this.debugFromLaunch
  }
  drainsSyncAtExit() {
    return !(H() && this.storageV5 !== void 0 && this.deps.syncExitDrain === !1)
  }
  launchIdentity() {
    return {
      minLevel: this.minLevel,
      filter: this.filter,
      toStderr: this.toStderr,
      filePath: this.filePath,
      debugFromLaunch: this.debugFromLaunch,
      isAnt: this.deps.isAnt,
      isTestEnvironment: this.deps.isTestEnvironment
    }
  }
  enableDebugLogging() {
    let e = this.isDebugMode() || this.deps.isAnt;
    return this.runtimeDebugEnabled = !0, e
  }
  logPath() {
    return this.filePath ?? (this.overrideDirectory !== null && this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ? _(this.overrideDirectory, `${this.deps.sessionId()}.txt`) : null) ?? this.resolvedLogPath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? this.defaultLogPath()
  }
  defaultLogPath(e = this.deps.sessionId()) {
    return _(this.deps.configHomeDir(), "debug", `${e}.txt`)
  }
  learnedOverrideDirectory() {
    return this.overrideDirectory
  }
  isArmed() {
    return this.storageV5 !== void 0
  }
  log(e, {
    level: n
  } = {
    level: "debug"
  }) {
    if (Te[n] < Te[this.minLevel]) return;
    if (!this.shouldLog(e)) return;
    let r = qo(e.trim());
    if (r.includes(`
`)) r = b(r);
    let s = `${new Date().toISOString()} [${n.toUpperCase()}] ${r}
`;
    if (this.toStderr) {
      this.deps.writeToStderr(s);
      return
    }
    this.write(s)
  }
  write(e) {
    let n = this.getWriter(),
      r = mn;
    if (this.storageV5 !== void 0) {
      if (r = {
          sessionId: this.deps.sessionId(),
          fromBackend: he.getStore() === !0
        }, r.fromBackend) this.backendLinesLogged++
    }
    if (n.write({
        origin: r,
        content: e
      }), this.exiting) n.flush()
  }
  async flush() {
    let e = this.backendLinesLogged;
    if (this.writer?.flush(), await this.pendingWrite, this.storageV5 !== void 0 && this.successor) return this.successor.flush();
    for (let n = 0; this.backendLinesLogged !== e && n < 3; n++) e = this.backendLinesLogged, this.writer?.flush(), await this.pendingWrite
  }
  dispose(e) {
    this.redirect = e;
    try {
      this.writer?.dispose()
    } finally {
      this.redirect = null, this.writer = null
    }
  }
  succeed(e) {
    this.runtimeDebugEnabled = e.runtimeDebugEnabled, this.hasFormattedOutput = e.hasFormattedOutput, this.pendingWrite = e.pendingWrite, this.unflushedChunks = e.unflushedChunks, this.exitHandlerRegistered = e.exitHandlerRegistered, e.successor = this, e.dispose((n) => {
      this.write(n)
    })
  }
  handleExit() {
    if (this.successor) {
      this.successor.handleExit();
      return
    }
    this.exiting = !0, this.writer?.flush(), this.drainSync()
  }
  async maybeRotate(e, n, r = hn) {
    let i = H() && this.storageV5 !== void 0 ? this.storageV5.hostFiles : void 0;
    if (this.writtenBytes < 0)
      if (i) {
        let s = await i.stat(Fe(e));
        this.writtenBytes = s.ok && s.value.kind !== "absent" ? s.value.size : 0
      } else this.writtenBytes = await dn(e).then((s) => s.size).catch(() => 0);
    else this.writtenBytes += n;
    if (this.writtenBytes <= r || this.rotating) return;
    this.rotating = !0;
    try {
      let s = e.endsWith(".txt") ? `${e.slice(0,-4)}.1.txt` : `${e}.1`;
      if (i) {
        let o = Fe(e),
          a = Fe(s),
          u = await i.rename(o, a);
        if (!u.ok && !yn(u.error)) {
          if (await i.delete(a, {
              missingOk: !0
            }), !(await i.rename(o, a)).ok) await i.delete(o, {
            missingOk: !0
          })
        }
      } else try {
        await ut(e, s)
      } catch (o) {
        if (!B(o)) await De(s).catch(() => {}), await ut(e, s).catch(() => De(e).catch(() => {}))
      }
      this.writtenBytes = 0
    } finally {
      this.rotating = !1
    }
  }
  shouldLog(e) {
    if (this.deps.isTestEnvironment && !this.toStderr && this.filePath === null) return !1;
    if (!this.deps.isAnt && !this.isDebugMode()) return !1;
    if (typeof process > "u" || typeof process.versions > "u" || typeof process.versions.node > "u") return !1;
    return Ve(e, this.filter)
  }
  resolveDirToFile(e) {
    return this.resolvedLogPath = _(e, `${this.deps.sessionId()}.txt`), this.resolvedLogPath
  }
  async appendGroup(e, n, r, i) {
    if (this.storageV5 !== void 0 && e.arm === "v5") {
      await this.appendV5AndMark(this.storageV5, n, r);
      return
    }
    if (!this.writesFiles()) return;
    if (i) await at(U(e.target), {
      recursive: !0
    }).catch(() => {});
    let s = e;
    try {
      await Le(e.target, r)
    } catch (o) {
      if (!wre(o)) throw o;
      if (this.storageV5 === void 0) s = {
        ...e,
        target: this.resolveDirToFile(e.target)
      }, await Le(s.target, r);
      else {
        if (this.overrideDirectory = e.target, s = dt(n, e.configHome, e.target, e.target), s.arm === "v5") {
          await this.appendV5AndMark(this.storageV5, n, r);
          return
        }
        await at(U(s.target), {
          recursive: !0
        }).catch(() => {});
        try {
          await Le(s.target, r)
        } catch {
          return
        }
      }
    }
    if (s.rotate) {
      if (this.storageV5 !== void 0 && s.target !== this.rotationTarget) this.rotationTarget = s.target, this.writtenBytes = -1;
      await this.maybeRotate(s.target, Buffer.byteLength(r)).catch(lt)
    }
    if (s.pointLatest) this.markLatestSymlink()
  }
  async appendV5AndMark(e, n, r) {
    let i = H(),
      s = i && !this.latestMarked && !this.latestRefused,
      o = await ft(e, n.sessionId, r, s);
    if (o === "refused") this.latestRefused = !0, o = await ft(e, n.sessionId, r, !1), this.log("debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process", {
      level: "warn"
    });
    if (o !== "landed") return;
    if (s && !this.latestRefused) this.latestMarked = !0;
    else if (!i) this.markLatestSymlink()
  }
  markLatestSymlink() {
    if (!this.latestMarked && this.writesFiles()) this.latestMarked = !0, this.updateLatestSymlink()
  }
  writesFiles() {
    try {
      return this.deps.diskless?.() !== !0 && (this.deps.defaultFile?.() !== !1 || this.filePath !== null || this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR !== void 0)
    } catch {
      return !1
    }
  }
  shiftUnflushedChunk() {
    this.unflushedChunks.shift()
  }
  drainSync() {
    if (this.unflushedChunks.length === 0) return;
    if (!this.drainsSyncAtExit() || !this.writesFiles()) {
      this.unflushedChunks.length = 0;
      return
    }
    let e = [];
    for (let n of this.unflushedChunks.splice(0)) {
      let r = e.at(-1);
      if (r !== void 0 && r.armed === n.armed && (!n.armed || r.target === n.target)) r.parts.push(n);
      else e.push({
        target: n.target,
        armed: n.armed,
        parts: [n]
      })
    }
    for (let {
        target: n,
        armed: r,
        parts: i
      }
      of e) {
      let s = r ? n : this.logPath(),
        o = i.map((a) => a.content).join("");
      try {
        ce().mkdirSync(U(s))
      } catch {}
      try {
        ce().appendFileSync(s, o)
      } catch (a) {
        if (wre(a)) try {
          if (!r) ce().appendFileSync(this.resolveDirToFile(s), o);
          else {
            let u = (g, p) => {
                try {
                  ce().appendFileSync(_(s, `${g}.txt`), p)
                } catch {}
              },
              c = i[0]?.sessionId,
              l = "";
            for (let g of i) {
              if (g.sessionId !== c) u(c, l), c = g.sessionId, l = "";
              l += g.content
            }
            u(c, l)
          }
        } catch {}
      }
    }
  }
  groupLines(e) {
    let n = e[0];
    if (n === void 0) return [];
    if (this.storageV5 === void 0) return [{
      decision: {
        target: this.logPath(),
        arm: "raw",
        configHome: "",
        rotate: !0,
        pointLatest: !0
      },
      origin: n.origin,
      lines: e
    }];
    let r = [];
    for (let i of e) {
      let s = r.at(-1);
      if (s !== void 0 && s.origin.sessionId === i.origin.sessionId && s.origin.fromBackend === i.origin.fromBackend) s.lines.push(i);
      else r.push({
        decision: dt(i.origin, this.deps.configHomeDir(), this.filePath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? null, this.overrideDirectory),
        origin: i.origin,
        lines: [i]
      })
    }
    return r
  }
  getWriter() {
    if (this.writer) return this.writer;
    let e = null,
      n = this.storageV5 !== void 0;
    if (this.writer = pe({
        writeBatch: (r) => {
          if (this.redirect) {
            this.redirect(r.map((s) => s.content).join(""));
            return
          }
          if (this.exiting) {
            for (let s of this.groupLines(r)) this.unflushedChunks.push({
              target: s.decision.target,
              sessionId: s.origin.sessionId,
              armed: n,
              content: s.lines.map((o) => o.content).join("")
            });
            this.drainSync();
            return
          }
          let i = this.writesFiles();
          for (let s of this.groupLines(r)) {
            if (s.decision.arm === "raw" && !i) continue;
            let o = s.lines.map((c) => c.content).join(""),
              a = U(s.decision.target),
              u = s.decision.arm === "raw" && (s.origin.fromBackend || e !== a);
            if (s.decision.arm === "raw") e = a;
            this.unflushedChunks.push({
              target: s.decision.target,
              sessionId: s.origin.sessionId,
              armed: n,
              content: o
            }), this.pendingWrite = this.pendingWrite.then(this.appendGroup.bind(this, s.decision, s.origin, o, u)).catch(lt).then(this.shiftUnflushedChunk.bind(this))
          }
        },
        sizeOf: (r) => r.content.length,
        flushIntervalMs: 1000,
        maxBufferSize: 100,
        immediateMode: this.isDebugMode()
      }), this.deps.registerCleanup(async () => {
        this.writer?.dispose(), await this.pendingWrite
      }), !this.exitHandlerRegistered) this.exitHandlerRegistered = !0, this.deps.onExit(this.handleExit.bind(this));
    return this.writer
  }
  async updateLatestSymlink() {
    try {
      let e = this.logPath(),
        n = _(U(e), "latest");
      await De(n).catch(() => {}), await fn(e, n)
    } catch {}
  }
}
class mt {
  instance = void 0;
  init = {};
  defaultFile = !0;
  setInstance(e) {
    this.instance = e
  }
  setInit(e) {
    this.init = e
  }
  disableDefaultFile() {
    this.defaultFile = !1
  }
}
var kn = new q(() => new mt);

function ie() {
  return di(kn)
}

function _e(e, n) {
  return new pt({
    argv: process.argv,
    env: process.env,
    sessionId: () => Y(),
    configHomeDir: () => Se(),
    onExit: (r) => {
      process.on("exit", r)
    },
    registerCleanup: (r) => {
      gt(r)
    },
    writeToStderr: (r) => {
      aH(r)
    },
    isAnt: n?.isAnt ?? !1,
    isTestEnvironment: n?.isTestEnvironment ?? !1,
    launchIdentity: n,
    storageV5: e.init.storageV5 !== void 0 && e.init.configHome === Se() ? e.init.storageV5 : void 0,
    syncExitDrain: e.init.syncExitDrain,
    diskless: () => Wo(),
    defaultFile: () => e.defaultFile
  })
}

function yj(e) {
  let n = ie();
  n.setInit({
    storageV5: e.storageV5,
    configHome: Se(),
    syncExitDrain: e.syncExitDrain
  });
  let r = n.instance;
  if (r) {
    let i = _e(n, r.launchIdentity());
    n.setInstance(i), i.succeed(r)
  }
  if (e.syncExitDrain === !1 && !L().drainsSyncAtExit()) t("Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short")
}

function L() {
  let e = ie(),
    n = e.instance;
  if (n) return n;
  let r = _e(e);
  return e.setInstance(r), r
}

function k1t() {
  return L().minLevel
}

function _K() {
  return L().isDebugMode()
}

function M2() {
  return L().toStderr
}

function c2r() {
  return L().filePath
}

function d2r() {
  return L().enableDebugLogging()
}

function u2r() {
  let e = ie(),
    n = e.instance;
  if (!n) return;
  let r = _e(e);
  e.setInstance(r), r.succeed(n)
}

function M_e(e) {
  L().hasFormattedOutput = e
}

function p2r() {
  return L().hasFormattedOutput
}
async function Pde() {
  await ie().instance?.flush()
}

function t(e, n = {
  level: "debug"
}) {
  L().log(e, n)
}

function HY() {
  return L().logPath()
}

function f2r(e, n) {
  return e === L().defaultLogPath(n)
}

function FY(e, n) {
  return
}
var Lr = (() => {
  let e = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (e !== void 0) {
    let n = Number(e);
    if (!Number.isNaN(n) && n >= 0) return n
  }
  return 1 / 0
})();
var Sn = {
  [Symbol.dispose]() {}
};

function En() {
  return Sn
}
var gm = En;

function b(e, n, r) {
  using i = gm`JSON.stringify(${se(e)})`;
  return JSON.stringify(e, n, r)
}

function hj(e) {
  return JSON.stringify(e) + `
`
}

function fa(e) {
  return JSON.stringify(e)
}

function qhn(e) {
  using n = gm`jsonlJoin(${e.length})`;
  let r = "";
  for (let i = 0; i < e.length; i++) r += JSON.stringify(e[i]) + `
`;
  return r
}
var J = (e, n) => {
  using r = gm`JSON.parse(${se(e)})`;
  return typeof n > "u" ? JSON.parse(e) : JSON.parse(e, n)
};

function Vo(e) {
  return JSON.parse(e)
}

function tm(e, n) {
  using r = gm`structuredClone(${se(e)})`;
  return structuredClone(e, n)
}

function dBe(e, n, r) {
  using i = gm`fs.writeFileSync(${e}, ${se(n)})`;
  wn(e, n, r)
}

function se(e) {
  return typeof e === "string" ? e.length : e
}
var Bn = "\u2192";

function $n() {
  return 0
}

function hxe() {
  return "r"
}
var z = /[\\/]+/;

function W5n(e, n) {
  let r = (u) => u.split(z).filter(Boolean),
    i = d.resolve(e),
    s = d.resolve(n),
    o = r(i),
    a = r(s);
  return d.parse(i).root === d.parse(s).root && o.length < a.length && o.every((u, c) => u === a[c])
}

function Wn(e) {
  let n = "";
  for (let i of e.split(/([\\/]+)/)) {
    if (i === "." || i === "..") break;
    n += i
  }
  let r = n.replace(/(?<=[^\\/])[\\/]+$/, "");
  return r === "" ? e : r
}

function Un(e) {
  let n = d.join(e).replace(/(?<=[^\\/])[\\/]+$/, "");
  if (Dn(n) && !kl(n)) return n;
  return Wn(e)
}
var zn = Un;

function ue(e, n, r) {
  let i = Ka(e);
  if (n.length === 0 || i || n.some((s) => s === "." || s === "..")) {
    if (r !== void 0 && (n.length > 0 || i)) r(d.join(e, ...n));
    return i ? zn(e) : e
  }
  return d.join(e, ...n)
}
var Uh = "\x00unverified-ancestry",
  S1t = "\x00opaque-link-text";

function He(e) {
  return zh(d.isAbsolute(e) ? e : e.replace(/^(?:\.\.(?:[\\/]+|$))+/, ""))
}

function Khn(e, n = !0) {
  return e.includes("\uFFFD") || He(e) || n && (/^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/.test(e) || /^[\\/]{2}\?[\\/]/.test(e) && !/^[\\/]{2}\?[\\/](?:[A-Za-z]:[\\/]|UNC[\\/])/i.test(e) || e.split(/[\\/]/).some((r) => r !== "." && r !== ".." && /[. ]$/.test(r)))
}

function n2r(e) {
  return e !== void 0 && e !== Uh
}

function Yhn(e) {
  return Object.assign(Error("ELOOP: symbolic link chain too long to vet"), {
    code: "ELOOP",
    path: e
  })
}

function wt(e, n, r = !1, i = !1, s = !1) {
  if (n?.unreadableAncestry !== "unverified") return;
  let o = e !== void 0 && typeof e === "object" && "errno" in e ? e.errno : void 0;
  if (o === "ENOENT" || o === "ENOTDIR") return;
  if (o === "ENAMETOOLONG" && !r && !i && !s) return;
  return Uh
}

function oe(e) {
  return bH(e)
}

function ae(e, n) {
  return n !== void 0 && n.some((r) => bH(r) && !sM(e, r) && (vt(e, r) || Wi(e)))
}

function St(e, n) {
  return n !== void 0 && n.some((r) => bH(r) && vt(r, e))
}

function vt(e, n) {
  let r = (o) => o.length > 1 ? o.replace(/\/+$/, "") : o,
    [i, s] = [r(e), r(n)];
  return i === s || i.startsWith(s === "/" ? s : s + "/")
}

function M(e, n) {
  return n === void 0 || n.every((r) => sM(e, r))
}

function le(e, n) {
  return n === void 0 || n.every((r) => XY(e, r))
}

function xt(e, n, r) {
  let i = Wi(e) ? $xe(e) : null;
  if (i === null || !M(i, n)) return;
  let s = d.join(e);
  if (Wi(s) && JY(s) === JY(i)) return s;
  return ue(e, [], r)
}

function At(e) {
  if (e?.anchors !== void 0 && e.anchors.length > 0) return e.anchors;
  return e?.anchor !== void 0 ? [e.anchor] : void 0
}

function iH(e) {
  return zh(e) || ns(e) || Yi(e) || rS(e) || ff(ph, e) !== void 0
}
async function z5n(e) {
  return zh(e) || ns(e) || Yi(e) || rS(e) || await hK(ph, e) !== void 0
}

function r2r(e, n = ph) {
  return zh(e) || ns(e) || Yi(e) || rS(e) || ff(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0
}
async function I_e(e, n = ph) {
  return zh(e) || ns(e) || Yi(e) || rS(e) || await hK(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0
}
async function Ade(e, n, r = ph) {
  if (zh(e)) return !0;
  if (ns(e)) return !0;
  if (Yi(e)) {
    let i = JY(e);
    if (i === null || n === null || i !== JY(n)) return !0
  }
  if (rS(e)) return !0;
  return (await G5n(e, n, {
    fsImpl: r
  })).verdict !== "clean"
}
async function G5n(e, n, {
  fsImpl: r = ph,
  signal: i
} = {}) {
  let s = await hK(r, e, {
    ...n === null ? {} : {
      anchor: n
    },
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: !0
  }, i);
  if (s === void 0) return {
    verdict: "clean"
  };
  if (s === Uh) return {
    verdict: "unverified"
  };
  return {
    verdict: "network",
    reaches: s
  }
}

function ff(e, n, r) {
  return Be(de(n, r), (i) => {
    if (i.kind === "lstat") return e.lstatSync(i.path);
    if (i.kind === "opendirNofollow") return e.openDirNoFollowSync(i.path), "ok";
    return e.readlinkSync(i.path)
  })
}

function hK(e, n, r, i) {
  return Mn(de(n, r), i, async (s) => {
    if (s.kind === "lstat") return e.lstat(s.path);
    if (s.kind === "opendirNofollow") return await e.openDirNoFollow(s.path), "ok";
    return e.readlink(s.path)
  })
}

function Be(e, n) {
  let r;
  for (;;) {
    let i = e.next(r);
    if (i.done) return i.value;
    try {
      r = n(i.value)
    } catch (s) {
      r = {
        errno: v(s)
      }
    }
  }
}
async function Mn(e, n, r) {
  let i;
  for (;;) {
    let s = e.next(i);
    if (s.done) return s.value;
    if (n?.aborted === !0) return Uh;
    try {
      i = await r(s.value)
    } catch (o) {
      i = {
        errno: v(o)
      }
    }
  }
}

function* de(e, n) {
  let r = At(n);
  if (oe(e) && !ae(e, r)) return e;
  if (Dn(e) && !kl(e) && le(e, r) || Wi(e) && M(e, r)) return;
  let i = d.resolve(e),
    s = d.parse(i).root,
    o = s,
    a = i.slice(s.length).split(z).filter(Boolean),
    u = 0,
    c = !1,
    l = !1,
    g, p = 64,
    m = () => a.some((w) => Ka(w)),
    A = () => /[. ]$/.test(a[0]);
  while (a.length > 0 && u < p) {
    if (c && Ka(a[0])) return Uh;
    let w = d.join(o, a[0]);
    if (Wi(w) && M(w, r) || oe(w) && !(ae(w, r) || St(w, r))) return ue(w, a.slice(1), n?.onCollapsedLanding);
    if (B_(w)) {
      if (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified") return Uh;
      return ue(w, a.slice(1), n?.onCollapsedLanding)
    }
    let S = !1;
    if (S && d.dirname(w) === "/dev/fd" && a.some((E, T) => T > 0 && (E === ".." || E === "."))) {
      a.shift();
      while (a[0] === "." && a.length > 1) a.shift();
      o = w;
      continue
    }
    let h = S ? {
      errno: "ENOENT"
    } : yield {
      kind: "lstat",
      path: w
    };
    if (h === void 0 || typeof h === "string" || "errno" in h) {
      if (n?.launchAncestry && !l && typeof h === "object" && "errno" in h && (h.errno === "EPERM" || h.errno === "EACCES") && W5n(w, n.launchAncestry)) {
        c = !0, a.shift(), o = w;
        continue
      }
      if (typeof h === "object" && "errno" in h && (h.errno === "ENOENT" || h.errno === "ENOTDIR")) n?.onOutcome?.({
        kind: "absent",
        at: o,
        remaining: [...a]
      });
      return wt(h, n, u > 0, m(), A())
    }
    let C = h;
    if (l = !0, !C.isSymbolicLink()) {
      a.shift(), o = w;
      continue
    }
    u++;
    let F = w + "\x00" + a.join("\x00");
    if ((g ??= new Set).has(F)) return;
    g.add(F);
    let j = yield {
      kind: "readlink",
      path: w
    };
    if (typeof j !== "string") return wt(j, n, u > 0, m(), A());
    let D = j;
    if (n?.literalLinkText === "opaque" && Khn(D)) return S1t;
    if (!d.isAbsolute(D)) {
      let E = D.split(z).filter(Boolean);
      if (n?.surfaceNetworkRaw === !0) {
        let T = xt((o.endsWith(d.sep) ? o : o + d.sep) + [...E, ...a.slice(1)].join(d.sep), r, n?.onCollapsedLanding);
        if (T !== void 0) return T
      }
      a.shift(), n?.onHop?.({
        composed: d.resolve(o, D, ...a),
        leaf: a.length === 0,
        text: D
      }), a = [...E, ...a];
      continue
    }
    let k = D;
    if (n?.surfaceNetworkRaw === !0 && a.length > 1 && rS(k)) {
      let E = xt([k, ...a.slice(1)].join(d.sep), r, n?.onCollapsedLanding);
      if (E !== void 0) return E
    }
    if (Dn(k) && !kl(k) && le(k, r) || Wi(k) && M(k, r) || oe(k) && !(ae(k, r) || a.length > 1 && St(k, r))) return a.shift(), ue(k, a, n?.onCollapsedLanding);
    if (n?.surfaceNetworkRaw === !0 && Ka(k) && (Dn(k) || Yi(k) || bH(k) || rS(k))) return a.shift(), a.length === 0 ? k : k + d.sep + a.join(d.sep);
    a.shift(), n?.onHop?.({
      composed: a.length === 0 ? k : d.resolve(k, ...a),
      leaf: a.length === 0,
      text: D
    });
    let N = d.parse(k).root || d.sep;
    o = N, l = !1, a = [...k.slice(N.length).split(z).filter(Boolean), ...a]
  }
  if (a.length > 0 && n?.literalLinkText === "opaque") return S1t;
  if (a.length > 0) return Uh;
  if (u > 0 && rS(o)) return o;
  if (oe(o) && !ae(o, r)) return o;
  if (a.length === 0) n?.onOutcome?.({
    kind: "resolved",
    path: o
  });
  return
}

function jo(e, n) {
  if (Dn(n) && !kl(n) || Wi(n) || FC(n)) return {
    resolvedPath: n,
    isSymlink: !1,
    isCanonical: !1
  };
  let r = ff(e, n);
  if (r === Uh) return {
    resolvedPath: n,
    isSymlink: !1,
    isCanonical: !1
  };
  if (r !== void 0) return {
    resolvedPath: r,
    isSymlink: !0,
    isCanonical: !1
  };
  try {
    let i = xde(e, n);
    return {
      resolvedPath: i,
      isSymlink: i !== n,
      isCanonical: !0
    }
  } catch (i) {
    return {
      resolvedPath: n,
      isSymlink: !1,
      isCanonical: !1
    }
  }
}

function yxe(e) {
  let n = N9e();
  if (n === null) return null;
  try {
    let r = d.resolve(n),
      i = d.resolve(e.cwd()),
      s = d.parse(r).root;
    if (s !== d.parse(i).root) return null;
    let o = r.slice(s.length).split(z).filter(Boolean),
      a = i.slice(s.length).split(z).filter(Boolean),
      u = 0;
    while (u < o.length && u < a.length && o[u] === a[u]) u++;
    return u > 0 ? d.join(s, ...o.slice(0, u)) : null
  } catch {
    return null
  }
}

function xde(e, n) {
  try {
    return e.realpathSync(n)
  } catch (r) {
    let i = v(r);
    if (i !== "EPERM" && i !== "EACCES") throw r;
    let s, o = yxe(e);
    if (ff(e, n, {
        unreadableAncestry: "unverified",
        surfaceNetworkRaw: !0,
        launchAncestry: o,
        onOutcome: (u) => {
          s = u
        }
      }) !== void 0 || s === void 0) throw r;
    if (s.kind === "absent") throw Object.assign(Error("ENOENT: no such file or directory"), {
      code: "ENOENT",
      syscall: "realpath",
      path: n
    });
    return xn(s.path)
  }
}

function cre(e, n, r) {
  let {
    resolvedPath: i
  } = jo(e, n);
  if (r.has(i)) return !0;
  return r.add(i), !1
}
var Ce = /(^|[\\/])\.\.([\\/]|$)/;

function jn(e, n = "win32") {
  let r = e.replace(n === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g, "");
  if (r === "") return e[0];
  if (n === "win32" && /^[A-Za-z]:$/.test(r)) return r + e[2];
  return r
}

function eM(e, n, r) {
  let i = At(r);
  if (Dn(n) && !kl(n) || Wi(n) || FC(n)) {
    if (i !== void 0 && (Wi(n) && !M(n, i) || Dn(n) && !kl(n) && !le(n, i))) {
      let l = ff(e, n, {
        anchors: i,
        surfaceNetworkRaw: r?.surfaceNetworkRaw
      });
      if (l === Uh && r?.surfaceNetworkRaw !== !0) {
        if (r?.surfaceDotDotTargets === !0) throw Yhn(n);
        return n
      }
      return l
    }
    return n
  }
  let s = ff(e, n, r?.surfaceNetworkRaw === !0 ? {
    surfaceNetworkRaw: !0,
    anchors: i
  } : void 0);
  if (s === Uh && r?.surfaceNetworkRaw !== !0) {
    if (r?.surfaceDotDotTargets === !0) throw Yhn(n);
    return
  }
  if (s !== void 0) return s;
  let o = n,
    a = [],
    u = r?.surfaceDotDotTargets === !0,
    c = (l) => a.length === 0 ? l : u && Ce.test(l) ? [l, ...a].join(d.sep) : d.join(l, ...a);
  while (o !== d.dirname(o)) {
    let l, g;
    try {
      l = e.readlinkSync(o)
    } catch (p) {
      g = v(p)
    }
    if (l !== void 0) {
      if (u && Ce.test(l)) return c(d.isAbsolute(l) ? l : d.dirname(o) + d.sep + l);
      let p = d.isAbsolute(l) ? l : d.resolve(d.dirname(o), l);
      if (Dn(p) && !kl(p) || Wi(p) || FC(p) || B_(p) || r?.surfaceNetworkRaw === !0 && Ka(p)) return r?.surfaceNetworkRaw === !0 && a.length > 0 ? p + d.sep + a.join(d.sep) : c(p);
      try {
        let m = xde(e, o);
        return c(m)
      } catch {
        let m = o,
          A = 0,
          w = 64;
        while (A < w) {
          let S;
          try {
            S = e.readlinkSync(m)
          } catch {
            break
          }
          if (u && Ce.test(S)) {
            m = d.isAbsolute(S) ? S : d.dirname(m) + d.sep + S;
            break
          }
          let h = d.isAbsolute(S) ? u ? jn(S) : S : d.resolve(d.dirname(m), S);
          if (Dn(h) && !kl(h) && le(h, i) || Wi(h) && M(h, i) || FC(h) || B_(h) || r?.surfaceNetworkRaw === !0 && Ka(h)) {
            m = h;
            break
          }
          let C;
          try {
            C = e.lstatSync(h)
          } catch {
            m = h;
            break
          }
          if (!C.isSymbolicLink()) {
            m = h;
            break
          }
          m = h, A++
        }
        if (A >= w && r?.surfaceNetworkRaw === !0) return Uh;
        return r?.surfaceNetworkRaw === !0 && a.length > 0 && (Dn(m) && !kl(m) || Wi(m) || FC(m) || B_(m) || Ka(m)) ? m + d.sep + a.join(d.sep) : c(m)
      }
    }
    if (g === "ENOENT") {
      a.unshift(d.basename(o)), o = d.dirname(o);
      continue
    }
    try {
      let p = xde(e, o);
      if (p !== o) return c(p)
    } catch (p) {
      if (u) throw p
    }
    return
  }
  return
}

function Et(e) {
  return Dn(e) && !kl(e) || Yi(e) || oM(e)
}

function V5n(e) {
  return Ot(e, !1) ?? e
}

function o2r(e) {
  return Ot(e, !0)
}

function Ot(e, n) {
  if (Et(e)) return e;
  let r = e,
    i = "";
  for (;;) {
    if (!Ka(r)) {
      let o = gQ(r);
      if (o !== null) {
        let a = i === "" ? o : o.endsWith(d.sep) ? o + i : o + d.sep + i;
        if (Et(a)) return n ? a : e;
        return a
      }
      if (n) try {
        return f.lstatSync(r), null
      } catch (a) {
        if (!B(a)) return null
      }
    }
    let s = d.dirname(r);
    if (s === r) return e;
    i = i === "" ? d.basename(r) : d.basename(r) + d.sep + i, r = s
  }
}

function Ua(e) {
  return Rt(e, "permission")
}

function NY(e) {
  let n = Rt(e, "screen");
  return {
    paths: n.spellings,
    vetted: !n.unresolved
  }
}

function Rt(e, n) {
  let r = e;
  if (r === "~") r = kt().normalize("NFC");
  else if (r.startsWith("~/")) r = d.join(kt().normalize("NFC"), r.slice(2));
  let i = new Set([r]),
    s = (y, x = !1) => ({
      unresolved: !1,
      requested: r,
      spellings: Array.from(i),
      landing: y,
      leafIsSymlink: x
    });
  if (Dn(r) && !kl(r) || Wi(r) || FC(r)) return s(r);
  let o = ce(),
    a = yxe(o),
    u, c, l = !1,
    g = !1,
    p = !1,
    m = [],
    A = new Set,
    w = (y) => {
      let x = d.resolve(y);
      if (!A.has(x)) A.add(x), m.push(y)
    },
    S = r,
    h, C = (y) => {
      if (S = y.path, y.kind === "readlink") {
        g = !0;
        try {
          return o.readlinkSync(y.path)
        } catch (x) {
          throw p = !0, x
        }
      }
      h = void 0;
      try {
        if (y.kind === "opendirNofollow") return o.openDirNoFollowSync(y.path), "ok";
        return o.lstatSync(y.path)
      } catch (x) {
        throw h = v(x), x
      }
    },
    F = Be(de(r, {
      unreadableAncestry: "unverified",
      launchAncestry: a,
      ...{
        literalLinkText: "opaque"
      },
      onCollapsedLanding: (y) => {
        u = y
      },
      onOutcome: (y) => {
        c = y
      },
      onHop: ({
        composed: y,
        leaf: x,
        text: G
      }) => {
        if (x) i.add(y), l = !0;
        if (n === "screen" && He(G)) w(y)
      }
    }), C),
    j = n === "permission" && !g && (h === "ENAMETOOLONG" || !1),
    D = () => {
      let y = xn(r);
      return i.add(y), s(y)
    },
    k = () => j ? D() : {
      unresolved: !0,
      requested: r,
      spellings: Array.from(i),
      stoppedAt: S,
      leafIsSymlink: l
    },
    $e = 8,
    N = () => {
      for (let y = 0; y < m.length; y++) {
        if (y >= $e) return !1;
        let x = m[y];
        if (Dn(x) && !kl(x) || Wi(x) || FC(x)) {
          i.add(x);
          continue
        }
        let G = Be(de(x, {
          unreadableAncestry: "unverified",
          launchAncestry: a,
          onHop: ({
            composed: Pt,
            text: Lt
          }) => {
            if (He(Lt)) w(Pt)
          }
        }), C);
        if (G === Uh || p) return !1;
        if (G !== void 0) i.add(G)
      }
      return !0
    };
  if (F === Uh || F === S1t) return k();
  if (F !== void 0) {
    if (n === "screen" && !N()) return k();
    if (u !== void 0) i.add(u);
    return i.delete(F), i.add(F), s(F, l)
  }
  if (c === void 0) {
    if (n === "screen" && !p) return N() ? D() : k();
    return k()
  }
  if (c.kind === "absent" && (n === "screen" ? c.remaining.some((y) => Ka(y)) : g && c.remaining.some((y) => G$(y)))) return k();
  let E = c.kind === "absent" ? c.at : c.path,
    T = c.kind === "absent" ? c.remaining.join(d.sep) : "",
    fe = xn(T === "" ? E : d.join(E, T));
  if (g || E !== d.parse(E).root) i.add(fe);
  let K = Gn(o, E, T);
  if (K !== void 0 && K !== fe) i.delete(K), i.add(K);
  if (n === "screen" && !N()) return k();
  return s(fe, l)
}

function Gn(e, n, r) {
  let i;
  try {
    i = e.realpathSync(n)
  } catch {
    return
  }
  if (i === n) return;
  return r === "" ? i : d.join(i, r)
}

function g9e(e) {
  return {
    unresolved: !1,
    requested: e,
    spellings: [e],
    landing: e,
    leafIsSymlink: !1
  }
}

function To(e) {
  let n = Ua(e);
  if (!n.unresolved) return n.spellings;
  let {
    resolvedPath: r,
    isCanonical: i,
    isSymlink: s
  } = jo(ce(), n.requested);
  return (i || s) && !n.spellings.includes(r) ? [...n.spellings, r] : n.spellings
}
var ph = {
  cwd() {
    return process.cwd()
  },
  existsSync(e) {
    using n = gm`fs.existsSync(${e})`;
    return f.existsSync(e)
  },
  async stat(e) {
    return bt(e)
  },
  async lstat(e) {
    return Ie(e)
  },
  async openDirNoFollow(e) {
    throw Error("openDirNoFollow is a POSIX-only examination probe")
  },
  openDirNoFollowSync(e) {
    throw Error("openDirNoFollowSync is a POSIX-only examination probe")
  },
  async lstatBigint(e) {
    return Ie(e, {
      bigint: !0
    })
  },
  async statBigint(e) {
    return bt(e, {
      bigint: !0
    })
  },
  async readdir(e) {
    return Ln(e, {
      withFileTypes: !0
    })
  },
  async unlink(e) {
    return Nn(e)
  },
  async rmdir(e) {
    return In(e)
  },
  async rm(e, n) {
    return Cn(e, n)
  },
  async mkdir(e, n) {
    try {
      await Pn(e, {
        recursive: !0,
        ...n
      })
    } catch (r) {
      if (v(r) !== "EEXIST") throw r
    }
  },
  async readFile(e, n) {
    return yt(e, {
      encoding: n.encoding
    })
  },
  async rename(e, n) {
    return _n(e, n)
  },
  async realpath(e) {
    return xn(await Tn(e))
  },
  async readlink(e) {
    return Fn(e)
  },
  async copyFile(e, n) {
    return On(e, n)
  },
  async appendFile(e, n, r) {
    if (r?.mode !== void 0) try {
      let i = await I(e, "ax", r.mode);
      try {
        await i.appendFile(n)
      } finally {
        await i.close()
      }
      return
    } catch (i) {
      if (v(i) !== "EEXIST") throw i
    }
    return vn(e, n)
  },
  async symlink(e, n, r) {
    return Hn(e, n, r)
  },
  async link(e, n) {
    return Rn(e, n)
  },
  async chmod(e, n) {
    return An(e, n)
  },
  statSync(e) {
    using n = gm`fs.statSync(${e})`;
    return f.statSync(e)
  },
  lstatSync(e) {
    using n = gm`fs.lstatSync(${e})`;
    return f.lstatSync(e)
  },
  readFileSync(e, n) {
    using r = gm`fs.readFileSync(${e})`;
    return f.readFileSync(e, {
      encoding: n.encoding
    })
  },
  readSync(e, n) {
    using r = gm`fs.readSync(${e}, ${n.length} bytes)`;
    let i = void 0;
    try {
      i = f.openSync(e, "r");
      let s = [],
        o = 0;
      while (o < n.length) {
        let u = Buffer.allocUnsafe(Math.min(65536, n.length - o)),
          c = f.readSync(i, u, 0, u.length, o);
        if (c === 0) break;
        s.push(u.subarray(0, c)), o += c
      }
      return {
        buffer: Buffer.concat(s, o),
        bytesRead: o
      }
    } finally {
      if (i !== void 0) f.closeSync(i)
    }
  },
  appendFileSync(e, n, r) {
    using i = gm`fs.appendFileSync(${e}, ${n.length} chars)`;
    if (r?.mode !== void 0) try {
      let s = f.openSync(e, "ax", r.mode);
      try {
        f.appendFileSync(s, n)
      } finally {
        f.closeSync(s)
      }
      return
    } catch (s) {
      if (v(s) !== "EEXIST") throw s
    }
    f.appendFileSync(e, n)
  },
  unlinkSync(e) {
    using n = gm`fs.unlinkSync(${e})`;
    f.unlinkSync(e)
  },
  renameSync(e, n) {
    using r = gm`fs.renameSync(${e} ${Bn} ${n})`;
    f.renameSync(e, n)
  },
  readlinkSync(e) {
    using n = gm`fs.readlinkSync(${e})`;
    return f.readlinkSync(e)
  },
  realpathSync(e) {
    using n = gm`fs.realpathSync(${e})`;
    return xn(f.realpathSync(e))
  },
  mkdirSync(e, n) {
    using r = gm`fs.mkdirSync(${e})`;
    let i = {
      recursive: !0
    };
    if (n?.mode !== void 0) i.mode = n.mode;
    try {
      f.mkdirSync(e, i)
    } catch (s) {
      if (v(s) !== "EEXIST") throw s
    }
  },
  readdirSync(e) {
    using n = gm`fs.readdirSync(${e})`;
    return f.readdirSync(e, {
      withFileTypes: !0
    })
  },
  rmSync(e, n) {
    using r = gm`fs.rmSync(${e})`;
    f.rmSync(e, n)
  },
  createWriteStream(e) {
    return f.createWriteStream(e)
  },
  async readFileBytes(e, n) {
    if (n === void 0) return yt(e);
    let r = await I(e, hxe());
    try {
      if (!(await r.stat()).isFile()) return Buffer.alloc(0);
      return await ymt(r, n, "file")
    } finally {
      await r.close()
    }
  },
  async readFileFdGated(e, n) {
    try {
      let r = $n();
      if (r === 0) {
        if (!(await Ie(e)).isFile()) return null
      }
      let i = await I(e, f.constants.O_RDONLY | r);
      try {
        let s = await i.stat();
        if (!s.isFile() || s.size > n) return null;
        let o = Number(s.size),
          a = Buffer.allocUnsafe(o),
          u = 0;
        while (u < o) {
          let {
            bytesRead: c
          } = await i.read(a, u, o - u, u);
          if (c === 0) break;
          u += c
        }
        return {
          content: (u < o ? a.subarray(0, u) : a).toString("utf8"),
          stats: s
        }
      } finally {
        await i.close()
      }
    } catch {
      return null
    }
  }
};

function ce() {
  return ph
}

function mf(e) {
  process.chdir(e);
  try {
    process.cwd()
  } catch {}
}
async function _xe(e, n, r) {
  await using i = typeof e === "string" ? await I(e, "r") : null;
  let s = typeof e === "string" ? i : e,
    o = (await s.stat()).size;
  if (o <= n) return null;
  let a = Math.min(o - n, r),
    u = Buffer.allocUnsafe(a),
    c = 0;
  while (c < a) {
    let {
      bytesRead: l
    } = await s.read(u, c, a - c, n + c);
    if (l === 0) break;
    c += l
  }
  return {
    content: u.toString("utf8", 0, c),
    bytesRead: c,
    bytesTotal: o
  }
}
async function ymt(e, n, r) {
  let i = r !== void 0 ? r === "file" : (await e.stat()).isFile(),
    s = [],
    o = 0;
  while (o < n) {
    let a = Buffer.allocUnsafe(Math.min(65536, n - o)),
      {
        bytesRead: u
      } = await e.read(a, 0, a.length, i ? o : null);
    if (u === 0) break;
    s.push(a.subarray(0, u)), o += u
  }
  return Buffer.concat(s, o)
}
async function Gv(e, n) {
  await using r = typeof e === "string" ? await I(e, "r") : null;
  let i = typeof e === "string" ? r : e,
    s = (await i.stat()).size;
  if (s === 0) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  let o = Math.max(0, s - n),
    a = s - o,
    u = Buffer.allocUnsafe(a),
    c = 0;
  while (c < a) {
    let {
      bytesRead: l
    } = await i.read(u, c, a - c, o + c);
    if (l === 0) break;
    c += l
  }
  return {
    content: u.toString("utf8", 0, c),
    bytesRead: c,
    bytesTotal: s
  }
}
async function* s2r(e, n = 65536) {
  let r = await I(e, "r"),
    i = Buffer.alloc(n),
    s = 0,
    o = [],
    a = 0;
  try {
    while (!0) {
      let {
        bytesRead: u
      } = await r.read(i, 0, n, s);
      if (u === 0) break;
      s += u;
      let c = i.subarray(0, u),
        l = 0;
      while (l < u) {
        let g = c.indexOf(10, l);
        if (g === -1) {
          o.push(Buffer.from(c.subarray(l))), a += u - l;
          break
        }
        if (a === 0) yield c.subarray(l, g);
        else yield Buffer.concat([...o, c.subarray(l, g)], a + (g - l)), o = [], a = 0;
        l = g + 1
      }
    }
  } finally {
    await r.close()
  }
  if (a > 0) yield o.length === 1 ? o[0] : Buffer.concat(o, a)
}
async function* uBe(e) {
  let r = await I(e, "r");
  try {
    let s = (await r.stat()).size,
      o = Buffer.alloc(0),
      a = Buffer.alloc(4096);
    while (s > 0) {
      let u = Math.min(4096, s);
      s -= u, await r.read(a, 0, u, s);
      let c = Buffer.concat([a.subarray(0, u), o]),
        l = c.indexOf(10);
      if (l === -1) {
        o = c;
        continue
      }
      o = Buffer.from(c.subarray(0, l));
      let g = c.toString("utf8", l + 1).split(`
`);
      for (let p = g.length - 1; p >= 0; p--) {
        let m = g[p];
        if (m) yield m
      }
    }
    if (o.length > 0) yield o.toString("utf8")
  } finally {
    await r.close()
  }
}
export {
  zg,
  xf,
  wBo,
  Gu,
  t2r,
  vBo,
  kBo,
  lre,
  gt,
  m9e,
  oE,
  AC,
  Vhn,
  gm,
  b,
  hj,
  fa,
  qhn,
  J,
  Vo,
  tm,
  dBe,
  hxe,
  W5n,
  Uh,
  S1t,
  Khn,
  n2r,
  Yhn,
  iH,
  z5n,
  r2r,
  I_e,
  Ade,
  G5n,
  ff,
  hK,
  jo,
  yxe,
  xde,
  cre,
  eM,
  V5n,
  o2r,
  Ua,
  NY,
  g9e,
  To,
  ph,
  ce,
  mf,
  _xe,
  ymt,
  Gv,
  s2r,
  uBe,
  h9e,
  qo,
  i2r,
  Xhn,
  w1t,
  EBo,
  O_e,
  O2,
  TBo,
  sE,
  v1t,
  a2r,
  q5n,
  Jhn,
  Bh,
  Dp,
  pBe,
  ZJ,
  yK,
  l2r,
  D$,
  yj,
  k1t,
  _K,
  M2,
  c2r,
  d2r,
  u2r,
  M_e,
  p2r,
  Pde,
  t,
  HY,
  f2r,
  FY
};
