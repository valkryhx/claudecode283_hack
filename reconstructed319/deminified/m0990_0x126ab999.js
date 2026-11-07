// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { lf, FC, d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { fqn } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ON } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Dh } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Gm } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { aT, DVe } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { y3o, fnr } from "B:/~BUN/root/chunk-vy0a90jx.js";
import { tJt } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { o, E, u, He, Dr, me, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { n$e, Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { lVn } from "B:/~BUN/root/chunk-4hj5k2m3.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { createHash as ie } from "crypto";
import { dirname as oe, join as H } from "path";
import { constants as Y } from "fs";
import { open as J } from "fs/promises";
import { join as y } from "path";
var Z = 4194304,
  Q = 5,
  ee = ["sso_account_id", "sso_role_name", "sso_session", "sso_start_url", "role_arn", "source_profile", "credential_source", "credential_process", "web_identity_token_file", "region"],
  te = ["type", "client_email", "audience", "service_account_impersonation_url", "quota_project_id"],
  re = p(() => {
    let e = o().optional().catch(void 0);
    return u({
      type: e,
      client_email: e,
      audience: e,
      service_account_impersonation_url: e,
      quota_project_id: e
    });
  });
async function O(e) {
  try {
    let r = await J(e, Y.O_RDONLY | n$e | ro);
    try {
      let n = await r.stat();
      if (!n.isFile() || n.size > Z) {
        t("[3p-model-memory] an AWS or gcloud identity file is over 4 MB or not a regular file, so start-up model checks will not reuse saved results");
        return;
      }
      let f = Buffer.alloc(n.size),
        c = 0;
      while (c < n.size) {
        let {
          bytesRead: bytesRead
        } = await r.read(f, c, n.size - c, c);
        if (bytesRead === 0) break;
        c += bytesRead;
      }
      return {
        text: f.subarray(0, c).toString("utf8"),
        mtimeMs: n.mtimeMs
      };
    } finally {
      await r.close();
    }
  } catch (error) {
    if (K(error)) return {
      text: ""
    };
    t(`[3p-model-memory] identity file unreadable: ${k(error) ?? "unknown"}`);
    return;
  }
}
var L = lVn(async () => {
  let {
      getHomeDir: getHomeDir,
      loadSharedConfigFiles: loadSharedConfigFiles
    } = await import("B:/~BUN/root/chunk-7msd32tw.js").then(m => Oe(m.default, 1)),
    n = getHomeDir(),
    configFilepath = fqn(i.AWS_CONFIG_FILE || y(n, ".aws", "config"), n),
    filepath = fqn(i.AWS_SHARED_CREDENTIALS_FILE || y(n, ".aws", "credentials"), n);
  if ((await Promise.all([O(configFilepath), O(filepath)])).includes(void 0)) return;
  try {
    let {
        configFile: configFile,
        credentialsFile: credentialsFile
      } = await loadSharedConfigFiles({
        configFilepath: configFilepath,
        filepath: filepath,
        ignoreCache: !0
      }),
      l = [],
      m = i.AWS_PROFILE || "default";
    for (let h = 0; m && h <= Q; h++) {
      let A = {
        ...configFile[m],
        ...credentialsFile[m]
      };
      l.push(`profile=${m}`);
      for (let b of ee) l.push(`${b}=${A[b] ?? ""}`);
      if (A.sso_session) {
        let b = configFile[`sso-session.${A.sso_session}`];
        l.push(`sso_session_start_url=${b?.sso_start_url ?? ""}`);
      }
      l.push(`aws_access_key_id=${A.aws_access_key_id ?? ""}`), m = A.source_profile && A.source_profile !== m ? A.source_profile : void 0;
    }
    return l.join(`
`);
  } catch (error) {
    t(`[3p-model-memory] AWS config unreadable: ${k(error) ?? "unknown"}`);
    return;
  }
}, () => "aws");
function ne(e) {
  let r = !1,
    n = {};
  for (let f of e.split(/\r?\n/)) {
    let c = f.trim(),
      s = /^\[(.+)\]$/.exec(c);
    if (s) {
      r = s[1].trim() === "core";
      continue;
    }
    let a = /^(project|account)\s*=\s*(.*)$/.exec(c);
    if (r && a) n[a[1]] = a[2].trim();
  }
  return [`project=${n.project ?? ""}`, `account=${n.account ?? ""}`];
}
var x = lVn(async () => {
  let e = fnr(),
    r = await O(y(e, "active_config"));
  if (r === void 0) return;
  let n = i.CLOUDSDK_ACTIVE_CONFIG_NAME || r.text.trim() || "default",
    f = i.GOOGLE_APPLICATION_CREDENTIALS || i.google_application_credentials || y(y3o(), "application_default_credentials.json"),
    [c, s] = await Promise.all([O(y(e, "configurations", `config_${n}`)), O(f)]);
  if (c === void 0 || s === void 0) return;
  let a = [`config=${n}`, ...ne(c.text)],
    g = s.text ? re().safeParse(et(s.text, !1)) : void 0,
    l = g?.success ? g.data : {};
  for (let m of te) a.push(`${m}=${l[m] ?? ""}`);
  if (l.type === "authorized_user") a.push(`adc_file=${s.mtimeMs}`);
  return a.join(`
`);
}, () => "gcp");
var se = 900000,
  oIe = 86400000,
  ce = 600000,
  ae = 604800000,
  de = "1",
  version = 1,
  j = 65536,
  ue = 16,
  fe = 32,
  S = "[3p-model-memory]",
  le = 300,
  pe = {
    refused: "the provider refuses this model for the account",
    denied: "an IAM or SCP policy denies the call",
    temporary: "nothing learned about the model",
    failed: "a failure this build cannot interpret"
  },
  _e = p(() => Dr("s", [He({
    s: T("ok"),
    at: E()
  }), He({
    s: T("refused"),
    at: E(),
    rc: E().optional()
  })])),
  ge = p(() => He({
    version: T(version),
    entries: me(o(), me(o(), _e()))
  })),
  Ae = p(() => u({
    version: E()
  })),
  M = Symbol("newer format");
function dnr() {
  return H(Ue(), "cache", "model-access.json");
}
function oci() {
  return H(Ue(), "cache", "provider-probe-verdicts.json");
}
function be() {
  return Boolean(i.AWS_BEARER_TOKEN_BEDROCK) || Boolean(i.CLOUDSDK_AUTH_ACCESS_TOKEN) || Boolean(i.CLAUDE_CODE_SKIP_VERTEX_AUTH && i.ANTHROPIC_API_KEY) || aT() || DVe() !== void 0;
}
function aRt() {
  let ANTHROPIC_CUSTOM_HEADERS = i.ANTHROPIC_CUSTOM_HEADERS;
  if (!ANTHROPIC_CUSTOM_HEADERS) return "";
  let r = [];
  for (let n of ANTHROPIC_CUSTOM_HEADERS.split(/\n|\r\n/)) {
    let f = n.indexOf(":");
    if (f !== -1) r.push(n.slice(0, f).trim().toLowerCase());
  }
  return r.filter(item => item !== "").sort().join(",");
}
async function lRt(e, r, n = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.319",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-11-05T18:14:18Z",
  GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  try {
    if (q() || i.CLAUDE_CODE_SKIP_MODEL_ACCESS_MEMORY || be()) return;
    let f = e === "vertex" ? await x() : await L();
    if (f === void 0) return;
    let c = await r();
    return ie("sha256").update([e, de, n, ...c.map(item => item ?? ""), f].join("\x00")).digest("hex").slice(0, 24);
  } catch (error) {
    t(`${S} not used this start: ${k(error) ?? "unknown"}`);
    return;
  }
}
var R = lVn(async e => {
    let r = await V(e);
    return r === M ? {} : r;
  }),
  z = lVn(async e => {});
async function V(e) {
  if (q()) return {};
  let r;
  try {
    let s = Dn();
    if (Go === 0) {
      let a = await s.lstat(e);
      if (a !== void 0 && !a.isFile) return {};
    }
    r = await s.readTail(e, j + 1, {
      noFollow: !0
    });
  } catch (error) {
    if (!K(error)) t(`${S} read failed: ${k(error) ?? "unknown"}`);
    return {};
  }
  if (r.length > j) return t(`${S} file over 64 KB; ignoring it`), {};
  let n = et(r.toString("utf8"), !1),
    f = Ae().safeParse(n);
  if (f.success && f.data.version > version) return M;
  let c = ge().safeParse(n);
  if (!c.success) return t(`${S} file not in this format; ignoring it`), {};
  return c.data.entries;
}
function P(e, r) {
  if (e === void 0 || e.at > r) return;
  if (e.s === "ok") return r - e.at <= se ? {
    state: "ok",
    at: e.at
  } : void 0;
  if (r - e.at > oIe) return;
  return {
    state: "refused",
    at: e.at,
    ...(e.rc !== void 0 && e.rc <= r && {
      recheckClaimedAt: e.rc
    })
  };
}
async function J6e(e, r, n = Date.now()) {
  return P((await R(dnr()))[e]?.[r], n);
}
function W(e, r = Date.now()) {
  return e.state === "refused" && r - Math.max(e.at, e.recheckClaimedAt ?? 0) >= ce;
}
function C(e, r, n, f) {
  if (q()) return Promise.resolve(n(void 0));
  let c = dnr(),
    a = z(c).then(async () => {
      let g = await V(c);
      if (g === M) return n(void 0);
      let entries = B(g, e, r, n, f);
      try {
        let m = Dn();
        await m.mkdir(oe(c)), await m.atomicWrite(c, _({
          version: version,
          entries: entries
        }), 384);
      } catch (error) {
        t(`${S} write failed: ${k(error) ?? "unknown"}`);
      }
      return entries[e]?.[r];
    }).catch(() => {
      return;
    });
  return z.cache.set(c, a.then(() => {})), a;
}
function D(e, r, n, f) {
  let c = dnr(),
    s = R(c);
  R.cache.set(c, s.then(a => B(a, e, r, () => n, f), () => ({})));
}
async function Q6e(e, r, s_2, at = Date.now()) {
  let c = {
    s: s_2,
    at: at
  };
  D(e, r, c, at), await C(e, r, () => c, at);
}
async function Ee(e, r, n = Date.now()) {
  D(e, r, void 0, n), await C(e, r, () => {
    return;
  }, n);
}
async function he(e, r, rc = Date.now()) {
  let f = !1,
    c = await C(e, r, a => {
      let g = P(a, rc);
      if (g !== void 0 && W(g, rc)) return f = !0, {
        s: "refused",
        at: g.at,
        rc: rc
      };
      return a;
    }, rc);
  if (D(e, r, c, rc), f) return {
    claimed: !0
  };
  let current = P(c, rc);
  return current === void 0 ? {
    claimed: !1
  } : {
    claimed: !1,
    current: current
  };
}
function B(e, r, n, f, c) {
  let s = {};
  for (let [l, m] of Object.entries(e)) {
    let h = {};
    for (let [A, b] of Object.entries(m)) {
      let w = b.s === "ok" ? ae : oIe;
      if (b.at <= c + w && c - b.at <= w) h[A] = b;
    }
    s[l] = h;
  }
  let a = f(s[r]?.[n]),
    g = {
      ...s[r]
    };
  if (delete g[n], a !== void 0) g[n] = a;
  return s[r] = Object.fromEntries(Object.entries(g).sort(([, l], [, m]) => m.at - l.at).slice(0, fe)), Object.fromEntries(Object.entries(s).filter(([, l]) => Object.keys(l).length > 0).sort(([, l], [, m]) => N(m) - N(l)).slice(0, ue));
}
function N(e) {
  return Math.max(...Object.values(e).map(item => item.at));
}
function U(e) {
  if (typeof e !== "object" || e === null || !("status" in e)) return;
  return typeof e.status === "number" ? e.status : void 0;
}
function Se(e, r) {
  if (e === "refused" || e === "denied") return e;
  let n = U(r);
  return e === "credential" || n === void 0 || n === 408 || n === 429 || n >= 500 ? "temporary" : "failed";
}
async function cnr(e, r, n, f, c) {
  let s = await ye(e, r, n, f, c);
  return c?.onVerdict?.(s.verdict, s.rememberedAt), s.verdict;
}
async function ye(e, r, n, f, c) {
  if (r !== void 0 && !c?.live) {
    let s = await J6e(r, n),
      a = !1;
    if (s !== void 0 && c?.isDefault && W(s)) {
      let l = await he(r, n);
      a = l.claimed, s = l.claimed ? void 0 : l.current;
    }
    if (s !== void 0) return t(`${S} ${e} ${n}: ${s.state} (remembered)`), {
      verdict: s.state === "ok" ? "accessible" : "refused",
      rememberedAt: s.at
    };
    let verdict = await I(e, r, n, f, c);
    if (a && verdict === "denied") return Q6e(r, n, "refused"), {
      verdict: "refused"
    };
    return {
      verdict: verdict
    };
  }
  return {
    verdict: await I(e, r, n, f, c)
  };
}
async function I(e, r, n, f, c) {
  let s = await f(),
    a = s.accessible ? void 0 : tJt(e, s.error);
  if (a === "outdated") {
    let F = c?.versionTooOld === "unavailable",
      X = F ? "not switching to it" : "keeping it, so the first request shows the update message";
    if (t(`${S} ${e} ${n}: needs a newer Claude Code than ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}; ${X} (not saved; any earlier answer cleared)`), r !== void 0) Ee(r, n);
    return F ? "failed" : "accessible";
  }
  if (r !== void 0 && (s.accessible || a === "refused")) Q6e(r, n, s.accessible ? "ok" : "refused");
  if (s.accessible || a === void 0) return "accessible";
  let g = Se(a, s.error),
    l = U(s.error),
    m = l !== void 0 ? null : Gm(s.error),
    h = s.error instanceof FC ? "timeout" : l !== void 0 ? `HTTP ${l}` : m !== null ? Dh(m.code) : s.error instanceof lf ? "connection error" : "no HTTP status",
    A = m?.message ?? d(s.error),
    b = l !== void 0 ? `${l} ` : m !== null ? `${m.code}: ` : void 0,
    w = Dh(b !== void 0 && A.startsWith(b) ? A.slice(b.length) : A);
  return t(`${S} ${e} ${n}: check failed: ${pe[g]} (${a === "credential" ? "a credential error, " : ""}${h}: ${ON(w, le)})`, {
    level: g === "refused" || g === "denied" ? "debug" : "error"
  }), g;
}
async function unr(e, r, n, f) {
  let c = [];
  for (let a of e) {
    let g = await Promise.all(a.map(n)),
      l = await Promise.all(a.map(item => r(item, !1))),
      m = a.find((item, index) => l[index]);
    if (m !== void 0) return m;
    c.push(...a.filter((item, index) => g[index]));
  }
  if (c.length === 0 || Date.now() > f) return;
  let s = await Promise.all(c.map(item => r(item, !0)));
  return c.find((item, index) => s[index]);
}
export { oIe, dnr, oci, aRt, lRt, J6e, Q6e, cnr, unr };