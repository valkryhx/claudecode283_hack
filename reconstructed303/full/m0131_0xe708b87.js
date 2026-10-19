// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  jGe,
  WGe,
  X4,
  k$,
  Gjt,
  Vjt,
  ajr,
  ljr,
  k2o,
  hSt,
  lye,
  djr,
  FJn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  d,
  k,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  cZe,
  _Ys,
  SBr
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  hun
} from "B:/~BUN/root/chunk-gvbpfcgq.js";
import {
  xl
} from "B:/~BUN/root/chunk-648jq7hr.js";
import {
  mkdirSync as H,
  writeFileSync as U
} from "fs";
import {
  unlink as P
} from "fs/promises";

function c5() {
  return a.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review"
}
var C = "/home/claude/.claude/remote",
  Ble = `${C}/.oauth_token`,
  Yyt = `${C}/.api_key`,
  jle = `${C}/.session_ingress_token`,
  zFo = [Ble, Yyt, jle],
  ZMe = hun;

function D(e, n, r, {
  skipInReviewOrigin: o = !1
} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (xl()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return
  }
  if (o && c5()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return
  }
  try {
    H(C, {
      recursive: !0,
      mode: 448
    }), U(e, n, {
      encoding: "utf8",
      mode: 384
    }), t(`Persisted ${r} to ${e} for subprocess access`)
  } catch (s) {
    t(`Failed to persist ${r} to disk (non-fatal): ${d(s)}`, {
      level: "error"
    })
  }
}
async function kVs() {
  if (!a.CLAUDE_CODE_REMOTE) return;
  for (let e of zFo) try {
    await P(e), t(`Removed the credential file at ${e}`)
  } catch (n) {
    if (!G(n)) t(`Failed to remove the credential file at ${e} (non-fatal): ${k(n)??"unknown error"}`, {
      level: "error"
    })
  }
}

function gun(e, n) {
  return uBt(e, n).token
}

function uBt(e, n) {
  if (xl()) return {
    token: null,
    miss: "enoent"
  };
  try {
    let r = cZe(e, {
      maxBytes: ZMe,
      regularFileOnly: !0
    }).trim();
    if (!r) return {
      token: null,
      miss: "empty"
    };
    return t(`Read ${n} from well-known file ${e}`), {
      token: r
    }
  } catch (r) {
    if (G(r)) return {
      token: null,
      miss: "enoent"
    };
    return t(`Failed to read ${n} from ${e}: ${d(r)}`, {
      level: "debug"
    }), {
      token: null,
      miss: k(r) === "EACCES" ? "eacces" : "other"
    }
  }
}
async function h(e, n, r, o, {
  skipInReviewOrigin: s = !1
} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (xl()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return
  }
  if (s && c5()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return
  }
  let _ = await o.writeHandoffCredential(e, n);
  if (_.state === "written") {
    t(`Persisted ${r} to ${e} for subprocess access`);
    return
  }
  t(`Failed to persist ${r} to disk (non-fatal): ${_.code??"unknown error"}`, {
    level: "error"
  })
}
async function F(e, n, r) {
  if (xl()) return null;
  let o = await r.readHandoffCredential(e, {
    symlinkAtPath: "follow"
  });
  switch (o.state) {
    case "present": {
      let s = o.contents.trim();
      if (!s) return null;
      return t(`Read ${n} from well-known file ${e}`), s
    }
    case "absent":
      return null;
    case "read-failed":
      return t(`Failed to read ${n} from ${e}: ${o.code??"unknown error"}`, {
        level: "debug"
      }), null
  }
}

function O({
  envVar: e,
  wellKnownPath: n,
  readPath: r = n,
  label: o,
  fileLabel: s = o,
  getCached: _,
  setCached: u,
  skipInReviewOrigin: E = !1
}) {
  let m = _();
  if (m !== void 0) return m;
  let g = process.env[e];
  if (!g) {
    let i = gun(r, s);
    return lye(e, "file", i), u(i), i
  }
  let p = parseInt(g, 10);
  if (Number.isNaN(p)) return t(`${e} must be a valid file descriptor number, got: ${g}`, {
    level: "error"
  }), u(null), null;
  if (SBr(p)) {
    let i = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
      c = i ? rze(p, o) : gun(r, s);
    if (i) delete process.env[e], hSt(e);
    if (lye(e, i ? "descriptor_direct" : "file_after_socket", c), u(c), c && i) D(n, c, s, {
      skipInReviewOrigin: E
    });
    return c
  }
  try {
    let i = `/proc/self/fd/${p}`,
      c = cZe(i, {
        maxBytes: ZMe
      }).trim();
    if (!c) return t(`File descriptor contained empty ${o}`, {
      level: "error"
    }), u(null), null;
    return t(`Successfully read ${o} from file descriptor ${p}`), lye(e, "descriptor_by_path", c), u(c), D(n, c, s, {
      skipInReviewOrigin: E
    }), c
  } catch (i) {
    t(`Failed to read ${o} from file descriptor ${p}: ${d(i)}`, {
      level: "error"
    });
    let c = gun(r, s);
    if (c) return lye(e, "file_after_failed_read", c), u(c), c;
    let A = k(i);
    if ((A === "EACCES" || A === "EPERM") && !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function") {
      let l = rze(p, o);
      if (delete process.env[e], hSt(e), l) return lye(e, "descriptor_direct", l), u(l), D(n, l, s, {
        skipInReviewOrigin: E
      }), l
    }
    return u(null), null
  }
}

function rze(e, n) {
  try {
    t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = _Ys(e, {
      maxBytes: ZMe
    }).trim();
    if (!r) return t(`File descriptor ${e} contained empty ${n}`, {
      level: "error"
    }), null;
    return t(`Successfully read ${n} directly from inherited descriptor ${e}`), r
  } catch (r) {
    return t(`Failed to read ${n} directly from descriptor ${e}: ${d(r)}`, {
      level: "error"
    }), null
  }
}
async function y({
  envVar: e,
  wellKnownPath: n,
  readPath: r = n,
  label: o,
  fileLabel: s = o,
  getCached: _,
  setCached: u,
  credentials: E,
  skipInReviewOrigin: m = !1
}) {
  let g = _();
  if (g !== void 0) return g;
  let p = process.env[e];
  if (!p) {
    let l = await F(r, s, E);
    return lye(e, "file", l), T(_, u, l)
  }
  let i = parseInt(p, 10);
  if (Number.isNaN(i)) return t(`${e} must be a valid file descriptor number, got: ${p}`, {
    level: "error"
  }), u(null), null;
  let c = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
    A = () => {
      delete process.env[e], hSt(e)
    };
  if (SBr(i)) {
    if (!c) {
      let f = await F(r, s, E);
      return lye(e, "file_after_socket", f), T(_, u, f)
    }
    let l = rze(i, o);
    if (A(), lye(e, "descriptor_direct", l), u(l), l) await h(n, l, s, E, {
      skipInReviewOrigin: m
    });
    return l
  }
  try {
    let l = `/proc/self/fd/${i}`,
      f = cZe(l, {
        maxBytes: ZMe
      }).trim();
    if (!f) return t(`File descriptor contained empty ${o}`, {
      level: "error"
    }), u(null), null;
    return t(`Successfully read ${o} from file descriptor ${i}`), lye(e, "descriptor_by_path", f), u(f), await h(n, f, s, E, {
      skipInReviewOrigin: m
    }), f
  } catch (l) {
    t(`Failed to read ${o} from file descriptor ${i}: ${d(l)}`, {
      level: "error"
    });
    let f = await F(r, s, E);
    if (f) return lye(e, "file_after_failed_read", f), T(_, u, f);
    let w = k(l);
    if ((w === "EACCES" || w === "EPERM") && c) {
      let S = rze(i, o);
      if (A(), S) return lye(e, "descriptor_direct", S), u(S), await h(n, S, s, E, {
        skipInReviewOrigin: m
      }), S
    }
    return T(_, u, null)
  }
}

function T(e, n, r) {
  let o = e();
  if (o !== void 0) return o;
  return n(r), r
}

function Xyt() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH)
}
async function EVs({
  attempts: e = 10,
  delayMs: n = 100
} = {}) {
  for (let r = 0; r < e && Xyt(); r++) await Y(n), D5n();
  return !Xyt()
}

function D5n() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e) return;
  let n;
  try {
    n = N(e)
  } catch (r) {
    if (v(r)) return t(`bg auth snapshot busy, will retry on the next read: ${d(r)}`, {
      level: "warn"
    }), k(r);
    if (!G(r)) t(`Failed to consume bg auth snapshot: ${d(r)}`, {
      level: "warn"
    })
  }
  if (delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH, n === void 0) return;
  try {
    P(e).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      FJn(r.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return
    }
    if (k$(r.accessToken), Gjt(!0), Array.isArray(r.scopes) && r.scopes.length > 0) Vjt(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    t("Consumed bg auth snapshot from sockDir")
  } catch (r) {
    if (!G(r)) t(`Failed to consume bg auth snapshot: ${d(r)}`, {
      level: "warn"
    })
  }
}
async function GFo(e) {
  let n = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!n) return;
  let r = await e.readHandoffCredential(n, {
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse"
  });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== n) return;
  switch (r.state) {
    case "absent":
      a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
      return;
    case "read-failed":
      if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && I() === "windows")) a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
      t(`Failed to consume bg auth snapshot: ${r.code??"unknown error"}`, {
        level: "warn"
      });
      return;
    case "present":
      break
  }
  a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"), e.discardSpentCredentialFile(n).catch(() => {});
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      FJn(o.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return
    }
    if (k$(o.accessToken), Gjt(!0), Array.isArray(o.scopes) && o.scopes.length > 0) Vjt(o.scopes);
    if (o.subscriptionType) a.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) a.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    t("Consumed bg auth snapshot from sockDir")
  } catch (o) {
    t(`Failed to consume bg auth snapshot: ${d(o)}`, {
      level: "warn"
    })
  }
}

function LJ(e) {
  return (process.env[e]?.trim() ?? "") !== "" || k2o(e)
}

function JT() {
  return D5n(), O({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: Ble,
    label: "OAuth token",
    getCached: X4,
    setCached: k$,
    skipInReviewOrigin: !0
  })
}
async function AHr(e) {
  return await GFo(e), VFo(e)
}
async function VFo(e) {
  return y({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: Ble,
    label: "OAuth token",
    getCached: X4,
    setCached: k$,
    credentials: e,
    skipInReviewOrigin: !0
  })
}

function Jyt() {
  let e = djr();
  if (e !== void 0) return e;
  D5n();
  let n = djr();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let r = a.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    o = r ? parseInt(r, 10) : Number.NaN,
    s = Number.isNaN(o) || a.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !SBr(o) ? null : rze(o, "gateway token");
  return FJn(s), delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, s
}

function g4() {
  return O({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: Yyt,
    label: "API key",
    getCached: ajr,
    setCached: ljr
  })
}
async function TVs(e) {
  return y({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: Yyt,
    label: "API key",
    getCached: ajr,
    setCached: ljr,
    credentials: e
  })
}

function v(e) {
  let n = k(e);
  return n === "EBUSY" || n === "EPERM" || n === "EACCES" && I() === "windows"
}

function N(e) {
  let n = () => cZe(e, {
    maxBytes: ZMe,
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
    regularFileOnly: !0
  });
  try {
    return n()
  } catch (r) {
    if (v(r)) return n();
    throw r
  }
}

function L() {
  return O({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: jle,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? jle,
    label: "token",
    fileLabel: "session ingress token",
    getCached: jGe,
    setCached: WGe,
    skipInReviewOrigin: !0
  })
}
async function CVs(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await y({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: jle,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? jle,
    label: "token",
    fileLabel: "session ingress token",
    getCached: jGe,
    setCached: WGe,
    credentials: e,
    skipInReviewOrigin: !0
  })
}

function bd() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return L()
}

function Qyt() {
  return bd() !== null
}

function PB() {
  let e = bd();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = {
        Cookie: `sessionKey=${e}`
      },
      r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) n["X-Organization-Uuid"] = r;
    return n
  }
  return JEe(e)
}

function JEe(e) {
  return e ? {
    Authorization: `Bearer ${e}`
  } : {}
}

function L5n(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e
}
export {
  c5,
  Ble,
  Yyt,
  jle,
  zFo,
  ZMe,
  kVs,
  gun,
  uBt,
  rze,
  Xyt,
  EVs,
  D5n,
  GFo,
  LJ,
  JT,
  AHr,
  VFo,
  Jyt,
  g4,
  TVs,
  CVs,
  bd,
  Qyt,
  PB,
  JEe,
  L5n
};
