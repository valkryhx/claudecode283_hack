// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { jGe as getCached_5, WGe as setCached_5, X4 as getCached_3, k$ as setCached_3, Gjt, Vjt, ajr as getCached_4, ljr as setCached_4, k2o, hSt, lye, djr, FJn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { cZe, _Ys, SBr } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { hun } from "B:/~BUN/root/chunk-gvbpfcgq.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
import { mkdirSync as H, writeFileSync as U } from "fs";
import { unlink as P } from "fs/promises";
function c5() {
  return a.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
var C = "/home/claude/.claude/remote",
  wellKnownPath_3 = `${C}/.oauth_token`,
  wellKnownPath_4 = `${C}/.api_key`,
  wellKnownPath_5 = `${C}/.session_ingress_token`,
  zFo = [wellKnownPath_3, wellKnownPath_4, wellKnownPath_5],
  maxBytes = hun;
function D(e, n, r, {
  skipInReviewOrigin = !1
} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (xl()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (skipInReviewOrigin && c5()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    H(C, {
      recursive: !0,
      mode: 448
    }), U(e, n, {
      encoding: "utf8",
      mode: 384
    }), t(`Persisted ${r} to ${e} for subprocess access`);
  } catch (error) {
    t(`Failed to persist ${r} to disk (non-fatal): ${d(error)}`, {
      level: "error"
    });
  }
}
async function kVs() {
  if (!a.CLAUDE_CODE_REMOTE) return;
  for (let e of zFo) try {
    await P(e), t(`Removed the credential file at ${e}`);
  } catch (error) {
    if (!G(error)) t(`Failed to remove the credential file at ${e} (non-fatal): ${k(error) ?? "unknown error"}`, {
      level: "error"
    });
  }
}
function gun(e, n) {
  return uBt(e, n).token;
}
function uBt(e, n) {
  if (xl()) return {
    token: null,
    miss: "enoent"
  };
  try {
    let token = cZe(e, {
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
    if (G(error)) return {
      token: null,
      miss: "enoent"
    };
    return t(`Failed to read ${n} from ${e}: ${d(error)}`, {
      level: "debug"
    }), {
      token: null,
      miss: k(error) === "EACCES" ? "eacces" : "other"
    };
  }
}
async function h(e, n, r, o, {
  skipInReviewOrigin: skipInReviewOrigin_2 = !1
} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (xl()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (skipInReviewOrigin_2 && c5()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let _ = await o.writeHandoffCredential(e, n);
  if (_.state === "written") {
    t(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  t(`Failed to persist ${r} to disk (non-fatal): ${_.code ?? "unknown error"}`, {
    level: "error"
  });
}
async function F(e, n, r) {
  if (xl()) return null;
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
function O({
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
    let i = gun(readPath, fileLabel);
    return lye(envVar, "file", i), setCached(i), i;
  }
  let p = parseInt(g, 10);
  if (Number.isNaN(p)) return t(`${envVar} must be a valid file descriptor number, got: ${g}`, {
    level: "error"
  }), setCached(null), null;
  if (SBr(p)) {
    let i = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
      c = i ? rze(p, label) : gun(readPath, fileLabel);
    if (i) delete process.env[envVar], hSt(envVar);
    if (lye(envVar, i ? "descriptor_direct" : "file_after_socket", c), setCached(c), c && i) D(wellKnownPath, c, fileLabel, {
      skipInReviewOrigin: skipInReviewOrigin_3
    });
    return c;
  }
  try {
    let i = `/proc/self/fd/${p}`,
      c = cZe(i, {
        maxBytes: maxBytes
      }).trim();
    if (!c) return t(`File descriptor contained empty ${label}`, {
      level: "error"
    }), setCached(null), null;
    return t(`Successfully read ${label} from file descriptor ${p}`), lye(envVar, "descriptor_by_path", c), setCached(c), D(wellKnownPath, c, fileLabel, {
      skipInReviewOrigin: skipInReviewOrigin_3
    }), c;
  } catch (error) {
    t(`Failed to read ${label} from file descriptor ${p}: ${d(error)}`, {
      level: "error"
    });
    let c = gun(readPath, fileLabel);
    if (c) return lye(envVar, "file_after_failed_read", c), setCached(c), c;
    let A = k(error);
    if ((A === "EACCES" || A === "EPERM") && !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function") {
      let l = rze(p, label);
      if (delete process.env[envVar], hSt(envVar), l) return lye(envVar, "descriptor_direct", l), setCached(l), D(wellKnownPath, l, fileLabel, {
        skipInReviewOrigin: skipInReviewOrigin_3
      }), l;
    }
    return setCached(null), null;
  }
}
function rze(e, n) {
  try {
    t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = _Ys(e, {
      maxBytes: maxBytes
    }).trim();
    if (!r) return t(`File descriptor ${e} contained empty ${n}`, {
      level: "error"
    }), null;
    return t(`Successfully read ${n} directly from inherited descriptor ${e}`), r;
  } catch (error) {
    return t(`Failed to read ${n} directly from descriptor ${e}: ${d(error)}`, {
      level: "error"
    }), null;
  }
}
async function y({
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
  let p = process.env[envVar_2];
  if (!p) {
    let l = await F(readPath_2, fileLabel_2, credentials);
    return lye(envVar_2, "file", l), T(getCached_2, setCached_2, l);
  }
  let i = parseInt(p, 10);
  if (Number.isNaN(i)) return t(`${envVar_2} must be a valid file descriptor number, got: ${p}`, {
    level: "error"
  }), setCached_2(null), null;
  let c = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
    A = () => {
      delete process.env[envVar_2], hSt(envVar_2);
    };
  if (SBr(i)) {
    if (!c) {
      let f = await F(readPath_2, fileLabel_2, credentials);
      return lye(envVar_2, "file_after_socket", f), T(getCached_2, setCached_2, f);
    }
    let l = rze(i, label_2);
    if (A(), lye(envVar_2, "descriptor_direct", l), setCached_2(l), l) await h(wellKnownPath_2, l, fileLabel_2, credentials, {
      skipInReviewOrigin: skipInReviewOrigin_4
    });
    return l;
  }
  try {
    let l = `/proc/self/fd/${i}`,
      f = cZe(l, {
        maxBytes: maxBytes
      }).trim();
    if (!f) return t(`File descriptor contained empty ${label_2}`, {
      level: "error"
    }), setCached_2(null), null;
    return t(`Successfully read ${label_2} from file descriptor ${i}`), lye(envVar_2, "descriptor_by_path", f), setCached_2(f), await h(wellKnownPath_2, f, fileLabel_2, credentials, {
      skipInReviewOrigin: skipInReviewOrigin_4
    }), f;
  } catch (error) {
    t(`Failed to read ${label_2} from file descriptor ${i}: ${d(error)}`, {
      level: "error"
    });
    let f = await F(readPath_2, fileLabel_2, credentials);
    if (f) return lye(envVar_2, "file_after_failed_read", f), T(getCached_2, setCached_2, f);
    let w = k(error);
    if ((w === "EACCES" || w === "EPERM") && c) {
      let S = rze(i, label_2);
      if (A(), S) return lye(envVar_2, "descriptor_direct", S), setCached_2(S), await h(wellKnownPath_2, S, fileLabel_2, credentials, {
        skipInReviewOrigin: skipInReviewOrigin_4
      }), S;
    }
    return T(getCached_2, setCached_2, null);
  }
}
function T(e, n, r) {
  let o = e();
  if (o !== void 0) return o;
  return n(r), r;
}
function Xyt() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH);
}
async function EVs({
  attempts = 10,
  delayMs = 100
} = {}) {
  for (let r = 0; r < attempts && Xyt(); r++) await Y(delayMs), D5n();
  return !Xyt();
}
function D5n() {
  let CLAUDE_BG_AUTH_SNAPSHOT_PATH = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!CLAUDE_BG_AUTH_SNAPSHOT_PATH) return;
  let n;
  try {
    n = N(CLAUDE_BG_AUTH_SNAPSHOT_PATH);
  } catch (error) {
    if (v(error)) return t(`bg auth snapshot busy, will retry on the next read: ${d(error)}`, {
      level: "warn"
    }), k(error);
    if (!G(error)) t(`Failed to consume bg auth snapshot: ${d(error)}`, {
      level: "warn"
    });
  }
  if (delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH, n === void 0) return;
  try {
    P(CLAUDE_BG_AUTH_SNAPSHOT_PATH).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      FJn(r.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (setCached_3(r.accessToken), Gjt(!0), Array.isArray(r.scopes) && r.scopes.length > 0) Vjt(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    t("Consumed bg auth snapshot from sockDir");
  } catch (error) {
    if (!G(error)) t(`Failed to consume bg auth snapshot: ${d(error)}`, {
      level: "warn"
    });
  }
}
async function GFo(e) {
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
      if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && I() === "windows")) a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
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
      FJn(o.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (setCached_3(o.accessToken), Gjt(!0), Array.isArray(o.scopes) && o.scopes.length > 0) Vjt(o.scopes);
    if (o.subscriptionType) a.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) a.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    t("Consumed bg auth snapshot from sockDir");
  } catch (error) {
    t(`Failed to consume bg auth snapshot: ${d(error)}`, {
      level: "warn"
    });
  }
}
function LJ(e) {
  return (process.env[e]?.trim() ?? "") !== "" || k2o(e);
}
function JT() {
  return D5n(), O({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_3,
    label: "OAuth token",
    getCached: getCached_3,
    setCached: setCached_3,
    skipInReviewOrigin: !0
  });
}
async function AHr(e) {
  return await GFo(e), VFo(e);
}
async function VFo(credentials_2) {
  return y({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_3,
    label: "OAuth token",
    getCached: getCached_3,
    setCached: setCached_3,
    credentials: credentials_2,
    skipInReviewOrigin: !0
  });
}
function Jyt() {
  let e = djr();
  if (e !== void 0) return e;
  D5n();
  let n = djr();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR = a.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    o = CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR ? parseInt(CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, 10) : Number.NaN,
    s = Number.isNaN(o) || a.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !SBr(o) ? null : rze(o, "gateway token");
  return FJn(s), delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, s;
}
function g4() {
  return O({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_4,
    label: "API key",
    getCached: getCached_4,
    setCached: setCached_4
  });
}
async function TVs(credentials_3) {
  return y({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_4,
    label: "API key",
    getCached: getCached_4,
    setCached: setCached_4,
    credentials: credentials_3
  });
}
function v(e) {
  let n = k(e);
  return n === "EBUSY" || n === "EPERM" || n === "EACCES" && I() === "windows";
}
function N(e) {
  let n = () => cZe(e, {
    maxBytes: maxBytes,
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
    regularFileOnly: !0
  });
  try {
    return n();
  } catch (error) {
    if (v(error)) return n();
    throw error;
  }
}
function L() {
  return O({
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
async function CVs(credentials_4) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await y({
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
function bd() {
  let CLAUDE_CODE_SESSION_ACCESS_TOKEN = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (CLAUDE_CODE_SESSION_ACCESS_TOKEN) return CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  return L();
}
function Qyt() {
  return bd() !== null;
}
function PB() {
  let e = bd();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = {
        Cookie: `sessionKey=${e}`
      },
      CLAUDE_CODE_ORGANIZATION_UUID = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (CLAUDE_CODE_ORGANIZATION_UUID) n["X-Organization-Uuid"] = CLAUDE_CODE_ORGANIZATION_UUID;
    return n;
  }
  return JEe(e);
}
function JEe(e) {
  return e ? {
    Authorization: `Bearer ${e}`
  } : {};
}
function L5n(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export { c5, wellKnownPath_3 as Ble, wellKnownPath_4 as Yyt, wellKnownPath_5 as jle, zFo, maxBytes as ZMe, kVs, gun, uBt, rze, Xyt, EVs, D5n, GFo, LJ, JT, AHr, VFo, Jyt, g4, TVs, CVs, bd, Qyt, PB, JEe, L5n };