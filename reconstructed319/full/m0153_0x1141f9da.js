// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  j5,
  DN,
  Ncn,
  VOo,
  Fcn,
  y$r,
  KOo,
  kKn,
  Wxe,
  zxe,
  qOo,
  _$r,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  YHe,
  _na,
  pPo
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  QGn
} from "B:/~BUN/root/chunk-ca2qz097.js";
import {
  hj,
  WO
} from "B:/~BUN/root/chunk-ww0cdpg4.js";
import {
  kd
} from "B:/~BUN/root/chunk-jbjsy1k0.js";
import {
  mkdirSync as U,
  writeFileSync as I
} from "fs";
import {
  unlink as P
} from "fs/promises";
var y = "/home/claude/.claude/remote",
  Fte = `${y}/.oauth_token`,
  F1t = `${y}/.api_key`,
  zpe = `${y}/.session_ingress_token`,
  pBs = [Fte, F1t, zpe],
  bqe = QGn;

function D(e, n, r, {
  skipInReviewOrigin: o = !1
} = {}) {
  if (!i.CLAUDE_CODE_REMOTE) return;
  if (q()) {
    t(`Skipping ${r} disk persistence in a session with no disk`);
    return
  }
  if (kd()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return
  }
  if (o && hj()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return
  }
  try {
    U(y, {
      recursive: !0,
      mode: 448
    }), I(e, n, {
      encoding: "utf8",
      mode: 384
    }), t(`Persisted ${r} to ${e} for subprocess access`)
  } catch (s) {
    t(`Failed to persist ${r} to disk (non-fatal): ${d(s)}`, {
      level: "error"
    })
  }
}
async function Jea() {
  if (!i.CLAUDE_CODE_REMOTE || q()) return;
  for (let e of pBs) try {
    await P(e), t(`Removed the credential file at ${e}`)
  } catch (n) {
    if (!K(n)) t(`Failed to remove the credential file at ${e} (non-fatal): ${k(n)??"unknown error"}`, {
      level: "error"
    })
  }
}

function R(e) {
  return i.platform !== "linux" && e.startsWith(`${y}/`)
}

function JGn(e, n) {
  return idn(e, n).token
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
    let r = YHe(e, {
      maxBytes: bqe,
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
    if (K(r)) return {
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
async function F(e, n, r, o, {
  skipInReviewOrigin: s = !1
} = {}) {
  if (!i.CLAUDE_CODE_REMOTE) return;
  if (q()) {
    t(`Skipping ${r} disk persistence in a session with no disk`);
    return
  }
  if (kd()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return
  }
  if (s && hj()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return
  }
  let m = await o.writeHandoffCredential(e, n);
  if (m.state === "written") {
    t(`Persisted ${r} to ${e} for subprocess access`);
    return
  }
  t(`Failed to persist ${r} to disk (non-fatal): ${m.code??"unknown error"}`, {
    level: "error"
  })
}
async function h(e, n, r) {
  if (kd() || WO() || q() || R(e)) return null;
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

function kxo({
  envVar: e,
  wellKnownPath: n,
  readPath: r = n,
  label: o,
  fileLabel: s = o,
  getCached: m,
  setCached: a,
  skipInReviewOrigin: _ = !1
}) {
  let g = m();
  if (g !== void 0) return g;
  let E = process.env[e];
  if (!E) {
    let l = JGn(r, s);
    return zxe(e, "file", l), a(l), l
  }
  let p = parseInt(E, 10);
  if (Number.isNaN(p)) return t(`${e} must be a valid file descriptor number, got: ${E}`, {
    level: "error"
  }), a(null), null;
  if (pPo(p)) {
    let l = O(),
      c = l ? Qtt(p, o) : JGn(r, s);
    if (l) delete process.env[e], Wxe(e);
    if (zxe(e, l ? "descriptor_direct" : "file_after_socket", c), a(c), c && l) D(n, c, s, {
      skipInReviewOrigin: _
    });
    return c
  }
  try {
    let l = `/proc/self/fd/${p}`,
      c = YHe(l, {
        maxBytes: bqe
      }).trim();
    if (!c) return t(`File descriptor contained empty ${o}`, {
      level: "error"
    }), a(null), null;
    return t(`Successfully read ${o} from file descriptor ${p}`), zxe(e, "descriptor_by_path", c), a(c), D(n, c, s, {
      skipInReviewOrigin: _
    }), c
  } catch (l) {
    t(`Failed to read ${o} from file descriptor ${p}: ${d(l)}`, {
      level: "error"
    });
    let c = JGn(r, s);
    if (c) return zxe(e, "file_after_failed_read", c), a(c), c;
    let A = k(l);
    if ((A === "EACCES" || A === "EPERM") && O()) {
      let u = Qtt(p, o);
      if (delete process.env[e], Wxe(e), u) return zxe(e, "descriptor_direct", u), a(u), D(n, u, s, {
        skipInReviewOrigin: _
      }), u
    }
    return a(null), null
  }
}

function O() {
  return (!i.CLAUDE_CODE_REMOTE || WO()) && typeof process.send !== "function"
}

function Qtt(e, n) {
  try {
    t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = _na(e, {
      maxBytes: bqe
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
async function vxo({
  envVar: e,
  wellKnownPath: n,
  readPath: r = n,
  label: o,
  fileLabel: s = o,
  getCached: m,
  setCached: a,
  credentials: _,
  skipInReviewOrigin: g = !1
}) {
  let E = m();
  if (E !== void 0) return E;
  let p = process.env[e];
  if (!p) {
    let u = await h(r, s, _);
    return zxe(e, "file", u), C(m, a, u)
  }
  let l = parseInt(p, 10);
  if (Number.isNaN(l)) return t(`${e} must be a valid file descriptor number, got: ${p}`, {
    level: "error"
  }), a(null), null;
  let c = O(),
    A = () => {
      delete process.env[e], Wxe(e)
    };
  if (pPo(l)) {
    if (!c) {
      let f = await h(r, s, _);
      return zxe(e, "file_after_socket", f), C(m, a, f)
    }
    let u = Qtt(l, o);
    if (A(), zxe(e, "descriptor_direct", u), a(u), u) await F(n, u, s, _, {
      skipInReviewOrigin: g
    });
    return u
  }
  try {
    let u = `/proc/self/fd/${l}`,
      f = YHe(u, {
        maxBytes: bqe
      }).trim();
    if (!f) return t(`File descriptor contained empty ${o}`, {
      level: "error"
    }), a(null), null;
    return t(`Successfully read ${o} from file descriptor ${l}`), zxe(e, "descriptor_by_path", f), a(f), await F(n, f, s, _, {
      skipInReviewOrigin: g
    }), f
  } catch (u) {
    t(`Failed to read ${o} from file descriptor ${l}: ${d(u)}`, {
      level: "error"
    });
    let f = await h(r, s, _);
    if (f) return zxe(e, "file_after_failed_read", f), C(m, a, f);
    let w = k(u);
    if ((w === "EACCES" || w === "EPERM") && c) {
      let T = Qtt(l, o);
      if (A(), T) return zxe(e, "descriptor_direct", T), a(T), await F(n, T, s, _, {
        skipInReviewOrigin: g
      }), T
    }
    return C(m, a, null)
  }
}

function C(e, n, r) {
  let o = e();
  if (o !== void 0) return o;
  return n(r), r
}

function Sqe() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) && !q()
}
async function Qea({
  attempts: e = 10,
  delayMs: n = 100
} = {}) {
  for (let r = 0; r < e && Sqe(); r++) await J(n), rFr();
  return !Sqe()
}

function S() {
  i.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"), Wxe("CLAUDE_BG_AUTH_SNAPSHOT_PATH")
}

function rFr() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e || q()) return;
  let n;
  try {
    n = b(e)
  } catch (r) {
    if (v(r)) return t(`bg auth snapshot busy, will retry on the next read: ${d(r)}`, {
      level: "warn"
    }), k(r);
    if (!K(r)) t(`Failed to consume bg auth snapshot: ${d(r)}`, {
      level: "warn"
    })
  }
  if (S(), n === void 0) return;
  try {
    P(e).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      _$r(r.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return
    }
    if (DN(r.accessToken), Ncn(!0), VOo(typeof r.organizationUuid === "string" ? r.organizationUuid : null), Array.isArray(r.scopes) && r.scopes.length > 0) Fcn(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    t("Consumed bg auth snapshot from sockDir")
  } catch (r) {
    if (!K(r)) t(`Failed to consume bg auth snapshot: ${d(r)}`, {
      level: "warn"
    })
  }
}
async function mBs(e) {
  let n = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!n || q()) return;
  let r = await e.readHandoffCredential(n, {
    symlinkAtPath: i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse"
  });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== n) return;
  switch (r.state) {
    case "absent":
      S();
      return;
    case "read-failed":
      if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && x() === "windows")) S();
      t(`Failed to consume bg auth snapshot: ${r.code??"unknown error"}`, {
        level: "warn"
      });
      return;
    case "present":
      break
  }
  S(), e.discardSpentCredentialFile(n).catch(() => {});
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      _$r(o.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return
    }
    if (DN(o.accessToken), Ncn(!0), VOo(typeof o.organizationUuid === "string" ? o.organizationUuid : null), Array.isArray(o.scopes) && o.scopes.length > 0) Fcn(o.scopes);
    if (o.subscriptionType) i.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) i.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    t("Consumed bg auth snapshot from sockDir")
  } catch (o) {
    t(`Failed to consume bg auth snapshot: ${d(o)}`, {
      level: "warn"
    })
  }
}

function KU(e) {
  return (process.env[e]?.trim() ?? "") !== "" || kKn(e)
}

function IE() {
  return rFr(), kxo({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: Fte,
    label: "OAuth token",
    getCached: j5,
    setCached: DN,
    skipInReviewOrigin: !0
  })
}
async function Exo(e) {
  return await mBs(e), hBs(e)
}
async function hBs(e) {
  return vxo({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: Fte,
    label: "OAuth token",
    getCached: j5,
    setCached: DN,
    credentials: e,
    skipInReviewOrigin: !0
  })
}

function H1t() {
  let e = qOo();
  if (e !== void 0) return e;
  rFr();
  let n = qOo();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let r = i.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    o = r ? parseInt(r, 10) : Number.NaN,
    s = Number.isNaN(o) || i.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !pPo(o) ? null : Qtt(o, "gateway token");
  if (_$r(s), delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, r?.trim()) Wxe("CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR");
  return s
}

function qU() {
  let e = y$r();
  if (e !== void 0) return e;
  return kxo({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: F1t,
    label: "API key",
    getCached: y$r,
    setCached: KOo
  })
}
async function Zea(e) {
  return vxo({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: F1t,
    label: "API key",
    getCached: y$r,
    setCached: KOo,
    credentials: e
  })
}

function v(e) {
  let n = k(e);
  return n === "EBUSY" || n === "EPERM" || n === "EACCES" && x() === "windows"
}

function b(e) {
  let n = () => YHe(e, {
    maxBytes: bqe,
    symlinkAtPath: i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
    regularFileOnly: !0
  });
  try {
    return n()
  } catch (r) {
    if (v(r)) return n();
    throw r
  }
}
export {
  Fte,
  F1t,
  zpe,
  pBs,
  bqe,
  Jea,
  JGn,
  idn,
  kxo,
  Qtt,
  vxo,
  Sqe,
  Qea,
  rFr,
  mBs,
  KU,
  IE,
  Exo,
  hBs,
  H1t,
  qU,
  Zea
};
