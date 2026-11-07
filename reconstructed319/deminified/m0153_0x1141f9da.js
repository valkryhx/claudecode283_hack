// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { j5 as getCached_3, DN as setCached_3, Ncn, VOo, Fcn, y$r as getCached_4, KOo as setCached_4, kKn, Wxe, zxe, qOo, _$r, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { YHe, _na, pPo } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { QGn } from "B:/~BUN/root/chunk-ca2qz097.js";
import { hj, WO } from "B:/~BUN/root/chunk-ww0cdpg4.js";
import { kd } from "B:/~BUN/root/chunk-jbjsy1k0.js";
import { mkdirSync as U, writeFileSync as I } from "fs";
import { unlink as P } from "fs/promises";
var y = "/home/claude/.claude/remote",
  wellKnownPath_3 = `${y}/.oauth_token`,
  wellKnownPath_4 = `${y}/.api_key`,
  zpe = `${y}/.session_ingress_token`,
  pBs = [wellKnownPath_3, wellKnownPath_4, zpe],
  maxBytes = QGn;
function D(e, n, r, {
  skipInReviewOrigin = !1
} = {}) {
  if (!i.CLAUDE_CODE_REMOTE) return;
  if (q()) {
    t(`Skipping ${r} disk persistence in a session with no disk`);
    return;
  }
  if (kd()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (skipInReviewOrigin && hj()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    U(y, {
      recursive: !0,
      mode: 448
    }), I(e, n, {
      encoding: "utf8",
      mode: 384
    }), t(`Persisted ${r} to ${e} for subprocess access`);
  } catch (error) {
    t(`Failed to persist ${r} to disk (non-fatal): ${d(error)}`, {
      level: "error"
    });
  }
}
async function Jea() {
  if (!i.CLAUDE_CODE_REMOTE || q()) return;
  for (let e of pBs) try {
    await P(e), t(`Removed the credential file at ${e}`);
  } catch (error) {
    if (!K(error)) t(`Failed to remove the credential file at ${e} (non-fatal): ${k(error) ?? "unknown error"}`, {
      level: "error"
    });
  }
}
function R(e) {
  return i.platform !== "linux" && e.startsWith(`${y}/`);
}
function JGn(e, n) {
  return idn(e, n).token;
}
function idn(e, n) {
  if (kd()) return {
    token: null,
    miss: "enoent"
  };
  if (WO()) return {
    token: null,
    miss: "enoent"
  };
  if (q() || R(e)) return {
    token: null,
    miss: "enoent"
  };
  try {
    let token = YHe(e, {
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
    if (K(error)) return {
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
async function F(e, n, r, o, {
  skipInReviewOrigin: skipInReviewOrigin_2 = !1
} = {}) {
  if (!i.CLAUDE_CODE_REMOTE) return;
  if (q()) {
    t(`Skipping ${r} disk persistence in a session with no disk`);
    return;
  }
  if (kd()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (skipInReviewOrigin_2 && hj()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let m = await o.writeHandoffCredential(e, n);
  if (m.state === "written") {
    t(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  t(`Failed to persist ${r} to disk (non-fatal): ${m.code ?? "unknown error"}`, {
    level: "error"
  });
}
async function h(e, n, r) {
  if (kd() || WO() || q() || R(e)) return null;
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
function kxo({
  envVar: envVar,
  wellKnownPath: wellKnownPath,
  readPath = wellKnownPath,
  label: label,
  fileLabel = label,
  getCached: getCached,
  setCached: setCached,
  skipInReviewOrigin: skipInReviewOrigin_3 = !1
}) {
  let g = getCached();
  if (g !== void 0) return g;
  let E = process.env[envVar];
  if (!E) {
    let l = JGn(readPath, fileLabel);
    return zxe(envVar, "file", l), setCached(l), l;
  }
  let p = parseInt(E, 10);
  if (Number.isNaN(p)) return t(`${envVar} must be a valid file descriptor number, got: ${E}`, {
    level: "error"
  }), setCached(null), null;
  if (pPo(p)) {
    let l = O(),
      c = l ? Qtt(p, label) : JGn(readPath, fileLabel);
    if (l) delete process.env[envVar], Wxe(envVar);
    if (zxe(envVar, l ? "descriptor_direct" : "file_after_socket", c), setCached(c), c && l) D(wellKnownPath, c, fileLabel, {
      skipInReviewOrigin: skipInReviewOrigin_3
    });
    return c;
  }
  try {
    let l = `/proc/self/fd/${p}`,
      c = YHe(l, {
        maxBytes: maxBytes
      }).trim();
    if (!c) return t(`File descriptor contained empty ${label}`, {
      level: "error"
    }), setCached(null), null;
    return t(`Successfully read ${label} from file descriptor ${p}`), zxe(envVar, "descriptor_by_path", c), setCached(c), D(wellKnownPath, c, fileLabel, {
      skipInReviewOrigin: skipInReviewOrigin_3
    }), c;
  } catch (error) {
    t(`Failed to read ${label} from file descriptor ${p}: ${d(error)}`, {
      level: "error"
    });
    let c = JGn(readPath, fileLabel);
    if (c) return zxe(envVar, "file_after_failed_read", c), setCached(c), c;
    let A = k(error);
    if ((A === "EACCES" || A === "EPERM") && O()) {
      let u = Qtt(p, label);
      if (delete process.env[envVar], Wxe(envVar), u) return zxe(envVar, "descriptor_direct", u), setCached(u), D(wellKnownPath, u, fileLabel, {
        skipInReviewOrigin: skipInReviewOrigin_3
      }), u;
    }
    return setCached(null), null;
  }
}
function O() {
  return (!i.CLAUDE_CODE_REMOTE || WO()) && typeof process.send !== "function";
}
function Qtt(e, n) {
  try {
    t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = _na(e, {
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
async function vxo({
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
  let E = getCached_2();
  if (E !== void 0) return E;
  let p = process.env[envVar_2];
  if (!p) {
    let u = await h(readPath_2, fileLabel_2, credentials);
    return zxe(envVar_2, "file", u), C(getCached_2, setCached_2, u);
  }
  let l = parseInt(p, 10);
  if (Number.isNaN(l)) return t(`${envVar_2} must be a valid file descriptor number, got: ${p}`, {
    level: "error"
  }), setCached_2(null), null;
  let c = O(),
    A = () => {
      delete process.env[envVar_2], Wxe(envVar_2);
    };
  if (pPo(l)) {
    if (!c) {
      let f = await h(readPath_2, fileLabel_2, credentials);
      return zxe(envVar_2, "file_after_socket", f), C(getCached_2, setCached_2, f);
    }
    let u = Qtt(l, label_2);
    if (A(), zxe(envVar_2, "descriptor_direct", u), setCached_2(u), u) await F(wellKnownPath_2, u, fileLabel_2, credentials, {
      skipInReviewOrigin: skipInReviewOrigin_4
    });
    return u;
  }
  try {
    let u = `/proc/self/fd/${l}`,
      f = YHe(u, {
        maxBytes: maxBytes
      }).trim();
    if (!f) return t(`File descriptor contained empty ${label_2}`, {
      level: "error"
    }), setCached_2(null), null;
    return t(`Successfully read ${label_2} from file descriptor ${l}`), zxe(envVar_2, "descriptor_by_path", f), setCached_2(f), await F(wellKnownPath_2, f, fileLabel_2, credentials, {
      skipInReviewOrigin: skipInReviewOrigin_4
    }), f;
  } catch (error) {
    t(`Failed to read ${label_2} from file descriptor ${l}: ${d(error)}`, {
      level: "error"
    });
    let f = await h(readPath_2, fileLabel_2, credentials);
    if (f) return zxe(envVar_2, "file_after_failed_read", f), C(getCached_2, setCached_2, f);
    let w = k(error);
    if ((w === "EACCES" || w === "EPERM") && c) {
      let T = Qtt(l, label_2);
      if (A(), T) return zxe(envVar_2, "descriptor_direct", T), setCached_2(T), await F(wellKnownPath_2, T, fileLabel_2, credentials, {
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
function Sqe() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) && !q();
}
async function Qea({
  attempts = 10,
  delayMs = 100
} = {}) {
  for (let r = 0; r < attempts && Sqe(); r++) await J(delayMs), rFr();
  return !Sqe();
}
function S() {
  i.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"), Wxe("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
}
function rFr() {
  let CLAUDE_BG_AUTH_SNAPSHOT_PATH = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!CLAUDE_BG_AUTH_SNAPSHOT_PATH || q()) return;
  let n;
  try {
    n = b(CLAUDE_BG_AUTH_SNAPSHOT_PATH);
  } catch (error) {
    if (v(error)) return t(`bg auth snapshot busy, will retry on the next read: ${d(error)}`, {
      level: "warn"
    }), k(error);
    if (!K(error)) t(`Failed to consume bg auth snapshot: ${d(error)}`, {
      level: "warn"
    });
  }
  if (S(), n === void 0) return;
  try {
    P(CLAUDE_BG_AUTH_SNAPSHOT_PATH).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      _$r(r.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (setCached_3(r.accessToken), Ncn(!0), VOo(typeof r.organizationUuid === "string" ? r.organizationUuid : null), Array.isArray(r.scopes) && r.scopes.length > 0) Fcn(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    t("Consumed bg auth snapshot from sockDir");
  } catch (error) {
    if (!K(error)) t(`Failed to consume bg auth snapshot: ${d(error)}`, {
      level: "warn"
    });
  }
}
async function mBs(e) {
  let CLAUDE_BG_AUTH_SNAPSHOT_PATH_2 = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!CLAUDE_BG_AUTH_SNAPSHOT_PATH_2 || q()) return;
  let r = await e.readHandoffCredential(CLAUDE_BG_AUTH_SNAPSHOT_PATH_2, {
    symlinkAtPath: i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse"
  });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== CLAUDE_BG_AUTH_SNAPSHOT_PATH_2) return;
  switch (r.state) {
    case "absent":
      S();
      return;
    case "read-failed":
      if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && x() === "windows")) S();
      t(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, {
        level: "warn"
      });
      return;
    case "present":
      break;
  }
  S(), e.discardSpentCredentialFile(CLAUDE_BG_AUTH_SNAPSHOT_PATH_2).catch(() => {});
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      _$r(o.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (setCached_3(o.accessToken), Ncn(!0), VOo(typeof o.organizationUuid === "string" ? o.organizationUuid : null), Array.isArray(o.scopes) && o.scopes.length > 0) Fcn(o.scopes);
    if (o.subscriptionType) i.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) i.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    t("Consumed bg auth snapshot from sockDir");
  } catch (error) {
    t(`Failed to consume bg auth snapshot: ${d(error)}`, {
      level: "warn"
    });
  }
}
function KU(e) {
  return (process.env[e]?.trim() ?? "") !== "" || kKn(e);
}
function IE() {
  return rFr(), kxo({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_3,
    label: "OAuth token",
    getCached: getCached_3,
    setCached: setCached_3,
    skipInReviewOrigin: !0
  });
}
async function Exo(e) {
  return await mBs(e), hBs(e);
}
async function hBs(credentials_2) {
  return vxo({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_3,
    label: "OAuth token",
    getCached: getCached_3,
    setCached: setCached_3,
    credentials: credentials_2,
    skipInReviewOrigin: !0
  });
}
function H1t() {
  let e = qOo();
  if (e !== void 0) return e;
  rFr();
  let n = qOo();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR = i.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    o = CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR ? parseInt(CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, 10) : Number.NaN,
    s = Number.isNaN(o) || i.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !pPo(o) ? null : Qtt(o, "gateway token");
  if (_$r(s), delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR?.trim()) Wxe("CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR");
  return s;
}
function qU() {
  let e = getCached_4();
  if (e !== void 0) return e;
  return kxo({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: wellKnownPath_4,
    label: "API key",
    getCached: getCached_4,
    setCached: setCached_4
  });
}
async function Zea(credentials_3) {
  return vxo({
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
  return n === "EBUSY" || n === "EPERM" || n === "EACCES" && x() === "windows";
}
function b(e) {
  let n = () => YHe(e, {
    maxBytes: maxBytes,
    symlinkAtPath: i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
    regularFileOnly: !0
  });
  try {
    return n();
  } catch (error) {
    if (v(error)) return n();
    throw error;
  }
}
export { wellKnownPath_3 as Fte, wellKnownPath_4 as F1t, zpe, pBs, maxBytes as bqe, Jea, JGn, idn, kxo, Qtt, vxo, Sqe, Qea, rFr, mBs, KU, IE, Exo, hBs, H1t, qU, Zea };