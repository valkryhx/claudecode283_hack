// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Pxe as getCached_5, Ixe as setCached_5, Sj as getCached_3, B$ as setCached_3, jmt, Wmt, N8n as getCached_4, H8n as setCached_4, DVr, gyn, F8n, hyn } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { z$e, HHo, Y3n } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { P$t } from "B:/~BUN/root/chunk-h85nq95q.js";
function wJ() {
  return a.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
import { mkdirSync as H, writeFileSync as N } from "fs";
import { unlink as L } from "fs/promises";
var y = "/home/claude/.claude/remote",
  wellKnownPath_3 = `${y}/.oauth_token`,
  wellKnownPath_4 = `${y}/.api_key`,
  wellKnownPath_5 = `${y}/.session_ingress_token`,
  maxBytes = P$t;
function F(e, n, r, {
  skipInReviewOrigin = !1
} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (skipInReviewOrigin && wJ()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    H(y, {
      recursive: !0,
      mode: 448
    }), N(e, n, {
      encoding: "utf8",
      mode: 384
    }), t(`Persisted ${r} to ${e} for subprocess access`);
  } catch (error) {
    t(`Failed to persist ${r} to disk (non-fatal): ${l(error)}`, {
      level: "error"
    });
  }
}
function h(e, n) {
  return Apt(e, n).token;
}
function Apt(e, n) {
  try {
    let token = z$e(e, {
      maxBytes: maxBytes,
      regularFileOnly: !0
    }).trim();
    if (!token) return {
      token: null,
      miss: "empty"
    };
    return t(`Read ${n} from well-known file ${e}`), {
      token: token
    };
  } catch (error) {
    if (B(error)) return {
      token: null,
      miss: "enoent"
    };
    return t(`Failed to read ${n} from ${e}: ${l(error)}`, {
      level: "debug"
    }), {
      token: null,
      miss: v(error) === "EACCES" ? "eacces" : "other"
    };
  }
}
async function w(e, n, r, o, {
  skipInReviewOrigin: skipInReviewOrigin_2 = !1
} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (skipInReviewOrigin_2 && wJ()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let p = await o.writeHandoffCredential(e, n);
  if (p.state === "written") {
    t(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  t(`Failed to persist ${r} to disk (non-fatal): ${p.code ?? "unknown error"}`, {
    level: "error"
  });
}
async function I(e, n, r) {
  let o = await r.readHandoffCredential(e, {
    symlinkAtPath: "follow"
  });
  switch (o.state) {
    case "present":
      {
        let s = o.contents.trim();
        if (!s) return null;
        return t(`Read ${n} from well-known file ${e}`), s;
      }
    case "absent":
      return null;
    case "read-failed":
      return t(`Failed to read ${n} from ${e}: ${o.code ?? "unknown error"}`, {
        level: "debug"
      }), null;
  }
}
function D({
  envVar: envVar,
  wellKnownPath: wellKnownPath,
  readPath = wellKnownPath,
  label: label,
  fileLabel = label,
  getCached: getCached,
  setCached: setCached,
  skipInReviewOrigin: skipInReviewOrigin_3 = !1
}) {
  let m = getCached();
  if (m !== void 0) return m;
  let g = process.env[envVar];
  if (!g) {
    let i = h(readPath, fileLabel);
    return setCached(i), i;
  }
  let f = parseInt(g, 10);
  if (Number.isNaN(f)) return t(`${envVar} must be a valid file descriptor number, got: ${g}`, {
    level: "error"
  }), setCached(null), null;
  if (Y3n(f)) {
    let i = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
      u = i ? S(f, label) : h(readPath, fileLabel);
    if (i) delete process.env[envVar], gyn(envVar);
    if (setCached(u), u && i) F(wellKnownPath, u, fileLabel, {
      skipInReviewOrigin: skipInReviewOrigin_3
    });
    return u;
  }
  try {
    let i = `/proc/self/fd/${f}`,
      u = z$e(i, {
        maxBytes: maxBytes
      }).trim();
    if (!u) return t(`File descriptor contained empty ${label}`, {
      level: "error"
    }), setCached(null), null;
    return t(`Successfully read ${label} from file descriptor ${f}`), setCached(u), F(wellKnownPath, u, fileLabel, {
      skipInReviewOrigin: skipInReviewOrigin_3
    }), u;
  } catch (error) {
    t(`Failed to read ${label} from file descriptor ${f}: ${l(error)}`, {
      level: "error"
    });
    let u = h(readPath, fileLabel);
    if (u) return setCached(u), u;
    let A = v(error);
    if ((A === "EACCES" || A === "EPERM") && !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function") {
      let d = S(f, label);
      if (delete process.env[envVar], gyn(envVar), d) return setCached(d), F(wellKnownPath, d, fileLabel, {
        skipInReviewOrigin: skipInReviewOrigin_3
      }), d;
    }
    return setCached(null), null;
  }
}
function S(e, n) {
  try {
    t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = HHo(e, {
      maxBytes: maxBytes
    }).trim();
    if (!r) return t(`File descriptor ${e} contained empty ${n}`, {
      level: "error"
    }), null;
    return t(`Successfully read ${n} directly from inherited descriptor ${e}`), r;
  } catch (error) {
    return t(`Failed to read ${n} directly from descriptor ${e}: ${l(error)}`, {
      level: "error"
    }), null;
  }
}
async function k({
  envVar: envVar_2,
  wellKnownPath: wellKnownPath_2,
  readPath: readPath_2 = wellKnownPath_2,
  label: label_2,
  fileLabel: fileLabel_2 = label_2,
  getCached: getCached_2,
  setCached: setCached_2,
  credentials: credentials,
  skipInReviewOrigin: skipInReviewOrigin_4 = !1
}) {
  let g = getCached_2();
  if (g !== void 0) return g;
  let f = process.env[envVar_2];
  if (!f) {
    let d = await I(readPath_2, fileLabel_2, credentials);
    return C(getCached_2, setCached_2, d);
  }
  let i = parseInt(f, 10);
  if (Number.isNaN(i)) return t(`${envVar_2} must be a valid file descriptor number, got: ${f}`, {
    level: "error"
  }), setCached_2(null), null;
  let u = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
    A = () => {
      delete process.env[envVar_2], gyn(envVar_2);
    };
  if (Y3n(i)) {
    if (!u) {
      let _ = await I(readPath_2, fileLabel_2, credentials);
      return C(getCached_2, setCached_2, _);
    }
    let d = S(i, label_2);
    if (A(), setCached_2(d), d) await w(wellKnownPath_2, d, fileLabel_2, credentials, {
      skipInReviewOrigin: skipInReviewOrigin_4
    });
    return d;
  }
  try {
    let d = `/proc/self/fd/${i}`,
      _ = z$e(d, {
        maxBytes: maxBytes
      }).trim();
    if (!_) return t(`File descriptor contained empty ${label_2}`, {
      level: "error"
    }), setCached_2(null), null;
    return t(`Successfully read ${label_2} from file descriptor ${i}`), setCached_2(_), await w(wellKnownPath_2, _, fileLabel_2, credentials, {
      skipInReviewOrigin: skipInReviewOrigin_4
    }), _;
  } catch (error) {
    t(`Failed to read ${label_2} from file descriptor ${i}: ${l(error)}`, {
      level: "error"
    });
    let _ = await I(readPath_2, fileLabel_2, credentials);
    if (_) return C(getCached_2, setCached_2, _);
    let R = v(error);
    if ((R === "EACCES" || R === "EPERM") && u) {
      let T = S(i, label_2);
      if (A(), T) return setCached_2(T), await w(wellKnownPath_2, T, fileLabel_2, credentials, {
        skipInReviewOrigin: skipInReviewOrigin_4
      }), T;
    }
    return C(getCached_2, setCached_2, null);
  }
}
function C(e, n, r) {
  let o = e();
  if (o !== void 0) return o;
  return n(r), r;
}
function jfn() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH);
}
async function VNo({
  attempts = 10,
  delayMs = 100
} = {}) {
  for (let r = 0; r < attempts && jfn(); r++) await Q(delayMs), P();
  return !jfn();
}
function P() {
  let CLAUDE_BG_AUTH_SNAPSHOT_PATH = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!CLAUDE_BG_AUTH_SNAPSHOT_PATH) return;
  let n;
  try {
    n = b(CLAUDE_BG_AUTH_SNAPSHOT_PATH);
  } catch (error) {
    if (U(error)) {
      t(`bg auth snapshot busy, will retry on the next read: ${l(error)}`, {
        level: "warn"
      });
      return;
    }
    if (!B(error)) t(`Failed to consume bg auth snapshot: ${l(error)}`, {
      level: "warn"
    });
  }
  if (delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH, n === void 0) return;
  try {
    L(CLAUDE_BG_AUTH_SNAPSHOT_PATH).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      hyn(r.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (setCached_3(r.accessToken), jmt(!0), Array.isArray(r.scopes) && r.scopes.length > 0) Wmt(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    t("Consumed bg auth snapshot from sockDir");
  } catch (error) {
    if (!B(error)) t(`Failed to consume bg auth snapshot: ${l(error)}`, {
      level: "warn"
    });
  }
}
async function DUr(e) {
  let CLAUDE_BG_AUTH_SNAPSHOT_PATH_2 = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!CLAUDE_BG_AUTH_SNAPSHOT_PATH_2) return;
  let r = await e.readHandoffCredential(CLAUDE_BG_AUTH_SNAPSHOT_PATH_2, {
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse"
  });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== CLAUDE_BG_AUTH_SNAPSHOT_PATH_2) return;
  switch (r.state) {
    case "absent":
      a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
      return;
    case "read-failed":
      if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && O() === "windows")) a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
      t(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, {
        level: "warn"
      });
      return;
    case "present":
      break;
  }
  a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"), e.discardSpentCredentialFile(CLAUDE_BG_AUTH_SNAPSHOT_PATH_2).catch(() => {});
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      hyn(o.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (setCached_3(o.accessToken), jmt(!0), Array.isArray(o.scopes) && o.scopes.length > 0) Wmt(o.scopes);
    if (o.subscriptionType) a.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) a.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    t("Consumed bg auth snapshot from sockDir");
  } catch (error) {
    t(`Failed to consume bg auth snapshot: ${l(error)}`, {
      level: "warn"
    });
  }
}
function lY(e) {
  return (process.env[e]?.trim() ?? "") !== "" || DVr(e);
}
function LI() {
  return P(), D({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_3,
    label: "OAuth token",
    getCached: getCached_3,
    setCached: setCached_3,
    skipInReviewOrigin: !0
  });
}
async function R3n(e) {
  return await DUr(e), LUr(e);
}
async function LUr(credentials_2) {
  return k({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_3,
    label: "OAuth token",
    getCached: getCached_3,
    setCached: setCached_3,
    credentials: credentials_2,
    skipInReviewOrigin: !0
  });
}
function xpt() {
  let e = F8n();
  if (e !== void 0) return e;
  P();
  let n = F8n();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR = a.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    o = CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR ? parseInt(CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, 10) : Number.NaN,
    s = Number.isNaN(o) || a.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !Y3n(o) ? null : S(o, "gateway token");
  return hyn(s), delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, s;
}
function vJ() {
  return D({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_4,
    label: "API key",
    getCached: getCached_4,
    setCached: setCached_4
  });
}
async function qNo(credentials_3) {
  return k({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_4,
    label: "API key",
    getCached: getCached_4,
    setCached: setCached_4,
    credentials: credentials_3
  });
}
function U(e) {
  let n = v(e);
  return n === "EBUSY" || n === "EPERM" || n === "EACCES" && O() === "windows";
}
function b(e) {
  let n = () => z$e(e, {
    maxBytes: maxBytes,
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
    regularFileOnly: !0
  });
  try {
    return n();
  } catch (error) {
    if (U(error)) return n();
    throw error;
  }
}
function x() {
  return D({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_5,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? wellKnownPath_5,
    label: "token",
    fileLabel: "session ingress token",
    getCached: getCached_5,
    setCached: setCached_5,
    skipInReviewOrigin: !0
  });
}
async function KNo(credentials_4) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await k({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_5,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? wellKnownPath_5,
    label: "token",
    fileLabel: "session ingress token",
    getCached: getCached_5,
    setCached: setCached_5,
    credentials: credentials_4,
    skipInReviewOrigin: !0
  });
}
function Fl() {
  let CLAUDE_CODE_SESSION_ACCESS_TOKEN = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (CLAUDE_CODE_SESSION_ACCESS_TOKEN) return CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  return x();
}
function YNo() {
  return Fl() !== null;
}
function RD() {
  let e = Fl();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = {
        Cookie: `sessionKey=${e}`
      },
      CLAUDE_CODE_ORGANIZATION_UUID = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (CLAUDE_CODE_ORGANIZATION_UUID) n["X-Organization-Uuid"] = CLAUDE_CODE_ORGANIZATION_UUID;
    return n;
  }
  return ede(e);
}
function ede(e) {
  return e ? {
    Authorization: `Bearer ${e}`
  } : {};
}
function Wfn(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export { wJ, wellKnownPath_3 as Rpt, wellKnownPath_4 as C3n, wellKnownPath_5 as pne, maxBytes as xye, Apt, jfn, VNo, DUr, lY, LI, R3n, LUr, xpt, vJ, qNo, KNo, Fl, YNo, RD, ede, Wfn };