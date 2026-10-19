// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { zu, cC, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _hn } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { yg } from "B:/~BUN/root/chunk-245a2x6v.js";
import { _, Fc, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { p0 } from "B:/~BUN/root/chunk-nggrknsv.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { KC, TMe } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Uto, UOn } from "B:/~BUN/root/chunk-96eamgtc.js";
import { qMt } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { o, v, u, De, Jr, fe, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Zs } from "B:/~BUN/root/chunk-wegca9zh.js";
import { vTe, Us } from "B:/~BUN/root/chunk-t7350kw8.js";
import { vZe } from "B:/~BUN/root/chunk-eya7pdzx.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
import { createHash as re } from "crypto";
import { dirname as ie, join as K } from "path";
import { constants as Y } from "fs";
import { open as q } from "fs/promises";
import { join as S } from "path";
var J = 4194304,
  Z = 5,
  Q = ["sso_account_id", "sso_role_name", "sso_session", "sso_start_url", "role_arn", "source_profile", "credential_source", "credential_process", "web_identity_token_file", "region"],
  ee = ["type", "client_email", "audience", "service_account_impersonation_url", "quota_project_id"],
  te = f(() => {
    let e = o().optional().catch(void 0);
    return u({
      type: e,
      client_email: e,
      audience: e,
      service_account_impersonation_url: e,
      quota_project_id: e
    });
  });
async function y(e) {
  try {
    let n = await q(e, Y.O_RDONLY | vTe | Zs);
    try {
      let r = await n.stat();
      if (!r.isFile() || r.size > J) {
        t("[3p-model-memory] an AWS or gcloud identity file is over 4 MB or not a regular file, so start-up model checks will not reuse saved results");
        return;
      }
      let l = Buffer.alloc(r.size),
        s = 0;
      while (s < r.size) {
        let {
          bytesRead: bytesRead
        } = await n.read(l, s, r.size - s, s);
        if (bytesRead === 0) break;
        s += bytesRead;
      }
      return {
        text: l.subarray(0, s).toString("utf8"),
        mtimeMs: r.mtimeMs
      };
    } finally {
      await n.close();
    }
  } catch (error) {
    if (G(error)) return {
      text: ""
    };
    t(`[3p-model-memory] identity file unreadable: ${k(error) ?? "unknown"}`);
    return;
  }
}
var x = vZe(async () => {
  let {
      getHomeDir: getHomeDir,
      loadSharedConfigFiles: loadSharedConfigFiles
    } = await import("B:/~BUN/root/chunk-y2xqax22.js").then(m => ve(m.default, 1)),
    r = getHomeDir(),
    configFilepath = _hn(a.AWS_CONFIG_FILE || S(r, ".aws", "config"), r),
    filepath = _hn(a.AWS_SHARED_CREDENTIALS_FILE || S(r, ".aws", "credentials"), r);
  if ((await Promise.all([y(configFilepath), y(filepath)])).includes(void 0)) return;
  try {
    let {
        configFile: configFile,
        credentialsFile: credentialsFile
      } = await loadSharedConfigFiles({
        configFilepath: configFilepath,
        filepath: filepath,
        ignoreCache: !0
      }),
      m = [],
      p = a.AWS_PROFILE || "default";
    for (let E = 0; p && E <= Z; E++) {
      let b = {
        ...configFile[p],
        ...credentialsFile[p]
      };
      m.push(`profile=${p}`);
      for (let A of Q) m.push(`${A}=${b[A] ?? ""}`);
      if (b.sso_session) {
        let A = configFile[`sso-session.${b.sso_session}`];
        m.push(`sso_session_start_url=${A?.sso_start_url ?? ""}`);
      }
      m.push(`aws_access_key_id=${b.aws_access_key_id ?? ""}`), p = b.source_profile && b.source_profile !== p ? b.source_profile : void 0;
    }
    return m.join(`
`);
  } catch (error) {
    t(`[3p-model-memory] AWS config unreadable: ${k(error) ?? "unknown"}`);
    return;
  }
}, () => "aws");
function ne(e) {
  let n = !1,
    r = {};
  for (let l of e.split(/\r?\n/)) {
    let s = l.trim(),
      i = /^\[(.+)\]$/.exec(s);
    if (i) {
      n = i[1].trim() === "core";
      continue;
    }
    let c = /^(project|account)\s*=\s*(.*)$/.exec(s);
    if (n && c) r[c[1]] = c[2].trim();
  }
  return [`project=${r.project ?? ""}`, `account=${r.account ?? ""}`];
}
var L = vZe(async () => {
  let e = UOn(),
    n = await y(S(e, "active_config"));
  if (n === void 0) return;
  let r = a.CLOUDSDK_ACTIVE_CONFIG_NAME || n.text.trim() || "default",
    l = a.GOOGLE_APPLICATION_CREDENTIALS || a.google_application_credentials || S(Uto(), "application_default_credentials.json"),
    [s, i] = await Promise.all([y(S(e, "configurations", `config_${r}`)), y(l)]);
  if (s === void 0 || i === void 0) return;
  let c = [`config=${r}`, ...ne(s.text)],
    g = i.text ? te().safeParse(pt(i.text, !1)) : void 0,
    m = g?.success ? g.data : {};
  for (let p of ee) c.push(`${p}=${m[p] ?? ""}`);
  if (m.type === "authorized_user") c.push(`adc_file=${i.mtimeMs}`);
  return c.join(`
`);
}, () => "gcp");
var oe = 900000,
  Pbe = 86400000,
  se = 600000,
  ce = 604800000,
  ae = "1",
  version = 1,
  j = 65536,
  de = 16,
  ue = 32,
  h = "[3p-model-memory]",
  le = 300,
  me = {
    refused: "the provider refuses this model for the account",
    denied: "an IAM or SCP policy denies the call",
    temporary: "nothing learned about the model",
    failed: "a failure this build cannot interpret"
  },
  pe = f(() => Jr("s", [De({
    s: C("ok"),
    at: v()
  }), De({
    s: C("refused"),
    at: v(),
    rc: v().optional()
  })])),
  _e = f(() => De({
    version: C(version),
    entries: fe(o(), fe(o(), pe()))
  })),
  ge = f(() => u({
    version: v()
  })),
  M = Symbol("newer format");
function FOn() {
  return K(Pe(), "cache", "model-access.json");
}
function Zas() {
  return K(Pe(), "cache", "provider-probe-verdicts.json");
}
function be() {
  return Boolean(a.AWS_BEARER_TOKEN_BEDROCK) || Boolean(a.CLOUDSDK_AUTH_ACCESS_TOKEN) || Boolean(a.CLAUDE_CODE_SKIP_VERTEX_AUTH && a.ANTHROPIC_API_KEY) || KC() || TMe() !== void 0;
}
function Pst() {
  let ANTHROPIC_CUSTOM_HEADERS = a.ANTHROPIC_CUSTOM_HEADERS;
  if (!ANTHROPIC_CUSTOM_HEADERS) return "";
  let n = [];
  for (let r of ANTHROPIC_CUSTOM_HEADERS.split(/\n|\r\n/)) {
    let l = r.indexOf(":");
    if (l !== -1) n.push(r.slice(0, l).trim().toLowerCase());
  }
  return n.filter(item => item !== "").sort().join(",");
}
async function Ost(e, n, r = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.303",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-18T20:20:57Z",
  GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  try {
    if (a.CLAUDE_CODE_SKIP_MODEL_ACCESS_MEMORY || be()) return;
    let l = e === "vertex" ? await L() : await x();
    if (l === void 0) return;
    let s = await n();
    return re("sha256").update([e, ae, r, ...s.map(item => item ?? ""), l].join("\x00")).digest("hex").slice(0, 24);
  } catch (error) {
    t(`${h} not used this start: ${k(error) ?? "unknown"}`);
    return;
  }
}
var w = vZe(async e => {
    let n = await H(e);
    return n === M ? {} : n;
  }),
  z = vZe(async e => {});
async function H(e) {
  let n;
  try {
    let i = gn();
    if (Us === 0) {
      let c = await i.lstat(e);
      if (c !== void 0 && !c.isFile) return {};
    }
    n = await i.readTail(e, j + 1, {
      noFollow: !0
    });
  } catch (error) {
    if (!G(error)) t(`${h} read failed: ${k(error) ?? "unknown"}`);
    return {};
  }
  if (n.length > j) return t(`${h} file over 64 KB; ignoring it`), {};
  let r = pt(n.toString("utf8"), !1),
    l = ge().safeParse(r);
  if (l.success && l.data.version > version) return M;
  let s = _e().safeParse(r);
  if (!s.success) return t(`${h} file not in this format; ignoring it`), {};
  return s.data.entries;
}
function P(e, n) {
  if (e === void 0 || e.at > n) return;
  if (e.s === "ok") return n - e.at <= oe ? {
    state: "ok",
    at: e.at
  } : void 0;
  if (n - e.at > Pbe) return;
  return {
    state: "refused",
    at: e.at,
    ...(e.rc !== void 0 && e.rc <= n && {
      recheckClaimedAt: e.rc
    })
  };
}
async function kFe(e, n, r = Date.now()) {
  return P((await w(FOn()))[e]?.[n], r);
}
function V(e, n = Date.now()) {
  return e.state === "refused" && n - Math.max(e.at, e.recheckClaimedAt ?? 0) >= se;
}
function D(e, n, r, l) {
  let s = FOn(),
    c = z(s).then(async () => {
      let g = await H(s);
      if (g === M) return r(void 0);
      let entries = W(g, e, n, r, l);
      try {
        let p = gn();
        await p.mkdir(ie(s)), await p.atomicWrite(s, _({
          version: version,
          entries: entries
        }), 384);
      } catch (error) {
        t(`${h} write failed: ${k(error) ?? "unknown"}`);
      }
      return entries[e]?.[n];
    }).catch(() => {
      return;
    });
  return z.cache.set(s, c.then(() => {})), c;
}
function T(e, n, r, l) {
  let s = FOn(),
    i = w(s);
  w.cache.set(s, i.then(c => W(c, e, n, () => r, l), () => ({})));
}
async function EFe(e, n, s_2, at = Date.now()) {
  let s = {
    s: s_2,
    at: at
  };
  T(e, n, s, at), await D(e, n, () => s, at);
}
async function Ae(e, n, r = Date.now()) {
  T(e, n, void 0, r), await D(e, n, () => {
    return;
  }, r);
}
async function Ee(e, n, rc = Date.now()) {
  let l = !1,
    s = await D(e, n, c => {
      let g = P(c, rc);
      if (g !== void 0 && V(g, rc)) return l = !0, {
        s: "refused",
        at: g.at,
        rc: rc
      };
      return c;
    }, rc);
  if (T(e, n, s, rc), l) return {
    claimed: !0
  };
  let current = P(s, rc);
  return current === void 0 ? {
    claimed: !1
  } : {
    claimed: !1,
    current: current
  };
}
function W(e, n, r, l, s) {
  let i = {};
  for (let [m, p] of Object.entries(e)) {
    let E = {};
    for (let [b, A] of Object.entries(p)) {
      let O = A.s === "ok" ? ce : Pbe;
      if (A.at <= s + O && s - A.at <= O) E[b] = A;
    }
    i[m] = E;
  }
  let c = l(i[n]?.[r]),
    g = {
      ...i[n]
    };
  if (delete g[r], c !== void 0) g[r] = c;
  return i[n] = Object.fromEntries(Object.entries(g).sort(([, m], [, p]) => p.at - m.at).slice(0, ue)), Object.fromEntries(Object.entries(i).filter(([, m]) => Object.keys(m).length > 0).sort(([, m], [, p]) => N(p) - N(m)).slice(0, de));
}
function N(e) {
  return Math.max(...Object.values(e).map(item => item.at));
}
function B(e) {
  if (typeof e !== "object" || e === null || !("status" in e)) return;
  return typeof e.status === "number" ? e.status : void 0;
}
function he(e, n) {
  if (e === "refused" || e === "denied") return e;
  let r = B(n);
  return e === "credential" || r === void 0 || r === 408 || r === 429 || r >= 500 ? "temporary" : "failed";
}
async function HOn(e, n, r, l, s) {
  let i = await Se(e, n, r, l, s);
  return s?.onVerdict?.(i.verdict, i.rememberedAt), i.verdict;
}
async function Se(e, n, r, l, s) {
  if (n !== void 0 && !s?.live) {
    let i = await kFe(n, r),
      c = !1;
    if (i !== void 0 && s?.isDefault && V(i)) {
      let m = await Ee(n, r);
      c = m.claimed, i = m.claimed ? void 0 : m.current;
    }
    if (i !== void 0) return t(`${h} ${e} ${r}: ${i.state} (remembered)`), {
      verdict: i.state === "ok" ? "accessible" : "refused",
      rememberedAt: i.at
    };
    let verdict = await I(e, n, r, l, s);
    if (c && verdict === "denied") return EFe(n, r, "refused"), {
      verdict: "refused"
    };
    return {
      verdict: verdict
    };
  }
  return {
    verdict: await I(e, n, r, l, s)
  };
}
async function I(e, n, r, l, s) {
  let i = await l(),
    c = i.accessible ? void 0 : qMt(e, i.error);
  if (c === "outdated") {
    let F = s?.versionTooOld === "unavailable",
      U = F ? "not switching to it" : "keeping it, so the first request shows the update message";
    if (t(`${h} ${e} ${r}: needs a newer Claude Code than ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}; ${U} (not saved; any earlier answer cleared)`), n !== void 0) Ae(n, r);
    return F ? "failed" : "accessible";
  }
  if (n !== void 0 && (i.accessible || c === "refused")) EFe(n, r, i.accessible ? "ok" : "refused");
  if (i.accessible || c === void 0) return "accessible";
  let g = he(c, i.error),
    m = B(i.error),
    p = m !== void 0 ? null : yg(i.error),
    E = i.error instanceof cC ? "timeout" : m !== void 0 ? `HTTP ${m}` : p !== null ? Fc(p.code) : i.error instanceof zu ? "connection error" : "no HTTP status",
    b = p?.message ?? d(i.error),
    A = m !== void 0 ? `${m} ` : p !== null ? `${p.code}: ` : void 0,
    O = Fc(A !== void 0 && b.startsWith(A) ? b.slice(A.length) : b);
  return t(`${h} ${e} ${r}: check failed: ${me[g]} (${c === "credential" ? "a credential error, " : ""}${E}: ${p0(O, le)})`, {
    level: g === "refused" || g === "denied" ? "debug" : "error"
  }), g;
}
async function $On(e, n, r, l) {
  let s = [];
  for (let c of e) {
    let g = await Promise.all(c.map(r)),
      m = await Promise.all(c.map(item => n(item, !1))),
      p = c.find((item, index) => m[index]);
    if (p !== void 0) return p;
    s.push(...c.filter((item, index) => g[index]));
  }
  if (s.length === 0 || Date.now() > l) return;
  let i = await Promise.all(s.map(item => n(item, !0)));
  return s.find((item, index) => i[index]);
}
export { Pbe, FOn, Zas, Pst, Ost, kFe, EFe, HOn, $On };