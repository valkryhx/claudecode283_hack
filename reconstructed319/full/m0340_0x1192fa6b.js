// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  xr,
  qe,
  F,
  d,
  ci,
  qt
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  ao
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Sea,
  wea,
  QAo,
  P1t,
  kea,
  vea,
  O1t,
  Eea,
  ZAo,
  exo,
  iwe,
  NGn,
  Btt,
  Xp,
  jtt,
  I1t,
  OE,
  FGn
} from "B:/~BUN/root/chunk-c79wfkj4.js";
import {
  Zd
} from "B:/~BUN/root/chunk-3vtkd50k.js";
import {
  T_t
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
var gO = "0.128.0";
var Lqi = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u";

function te() {
  if (typeof Deno < "u" && Deno.build != null) return "deno";
  if (typeof EdgeRuntime < "u") return "edge";
  if (Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) === "[object process]") return "node";
  return "unknown"
}
var ne = () => {
  let e = te();
  if (e === "deno") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": gO,
    "X-Stainless-OS": b(Deno.build.os),
    "X-Stainless-Arch": x(Deno.build.arch),
    "X-Stainless-Runtime": "deno",
    "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
  };
  if (typeof EdgeRuntime < "u") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": gO,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": `other:${EdgeRuntime}`,
    "X-Stainless-Runtime": "edge",
    "X-Stainless-Runtime-Version": globalThis.process?.version ?? "unknown"
  };
  if (e === "node") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": gO,
    "X-Stainless-OS": b(globalThis.process.platform ?? "unknown"),
    "X-Stainless-Arch": x(globalThis.process.arch ?? "unknown"),
    "X-Stainless-Runtime": "node",
    "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown"
  };
  let n = re();
  if (n) return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": gO,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": `browser:${n.browser}`,
    "X-Stainless-Runtime-Version": n.version
  };
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": gO,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  }
};

function re() {
  if (typeof navigator > "u" || !navigator) return null;
  let e = [{
    key: "edge",
    pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "chrome",
    pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "firefox",
    pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "safari",
    pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
  }];
  for (let {
      key: n,
      pattern: r
    }
    of e) {
    let s = r.exec(navigator.userAgent);
    if (s) {
      let o = s[1] || 0,
        c = s[2] || 0,
        u = s[3] || 0;
      return {
        browser: n,
        version: `${o}.${c}.${u}`
      }
    }
  }
  return null
}
var x = (e) => {
    if (e === "x32") return "x32";
    if (e === "x86_64" || e === "x64") return "x64";
    if (e === "arm") return "arm";
    if (e === "aarch64" || e === "arm64") return "arm64";
    if (e) return `other:${e}`;
    return "unknown"
  },
  b = (e) => {
    if (e = e.toLowerCase(), e.includes("ios")) return "iOS";
    if (e === "android") return "Android";
    if (e === "darwin") return "MacOS";
    if (e === "win32") return "Windows";
    if (e === "freebsd") return "FreeBSD";
    if (e === "openbsd") return "OpenBSD";
    if (e === "linux") return "Linux";
    if (e) return `Other:${e}`;
    return "Unknown"
  },
  L, QAr = () => L ?? (L = ne());

function y() {
  return Math.floor(Date.now() / 1000)
}
class yrn {
  constructor(e, n) {
    this.cached = null, this.pendingRefresh = null, this.nextForce = !1, this.lastAdvisoryError = 0, this.provider = e, this.onAdvisoryRefreshError = n
  }
  async getToken() {
    let e = this.nextForce;
    this.nextForce = !1;
    let n = this.cached;
    if (e || n == null) return (await this.refresh(e)).token;
    if (n.expiresAt == null) return n.token;
    let r = n.expiresAt - y();
    if (r > vea) return n.token;
    if (r > O1t) return this.backgroundRefresh(), n.token;
    return (await this.refresh()).token
  }
  invalidate() {
    this.cached = null, this.nextForce = !0
  }
  refresh(e = !1) {
    if (this.pendingRefresh && !e) return this.pendingRefresh;
    return this.doRefresh(e)
  }
  backgroundRefresh() {
    if (this.pendingRefresh) return;
    if (y() - this.lastAdvisoryError < Eea) return;
    this.doRefresh().catch((e) => {
      this.lastAdvisoryError = y(), this.onAdvisoryRefreshError?.(e)
    })
  }
  doRefresh(e = !1) {
    return this.pendingRefresh = this.provider(e ? {
      forceRefresh: !0
    } : void 0).then((n) => (this.cached = n, this.pendingRefresh = null, n), (n) => {
      throw this.pendingRefresh = null, n
    }), this.pendingRefresh
  }
}
var vw = (e) => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return
};
var Nqi = "1.0",
  z$n = "1.0",
  ie = /^[A-Za-z0-9_.-]+$/;

function U(e) {
  if (!e) throw Error("profile name is empty");
  if (e === "." || e === "..") throw Error(`profile name "${e}" is not allowed`);
  if (e.includes("/") || e.includes("\\")) throw Error(`profile name "${e}" must not contain path separators`);
  if (!ie.test(e)) throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`)
}
var X = async (e) => (await O(e))?.config ?? null, O = async (e) => {
  var n, r;
  let s = await C();
  if (s === null) return null;
  let o = e ?? await K();
  if (o === null) return null;
  U(o);
  let {
    fs: c,
    path: u
  } = await import("B:/~BUN/root/chunk-gx3sdkkb.js"), h = u.join(s, "configs", `${o}.json`), _;
  try {
    _ = await c.promises.readFile(h, "utf-8")
  } catch (E) {
    if (E?.code !== "ENOENT") throw Error(`failed to read config file ${h}: ${E}`);
    _ = null
  }
  if (_ === null) {
    let E = vw("ANTHROPIC_ORGANIZATION_ID"),
      k = vw("ANTHROPIC_IDENTITY_TOKEN_FILE"),
      T = vw("ANTHROPIC_FEDERATION_RULE_ID");
    if (T && E) return {
      fromFile: !1,
      config: {
        organization_id: E,
        workspace_id: vw("ANTHROPIC_WORKSPACE_ID"),
        base_url: vw("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: T,
          service_account_id: vw("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: k ? {
            source: "file",
            path: k
          } : void 0,
          scope: vw("ANTHROPIC_SCOPE")
        }
      }
    };
    return null
  }
  let p;
  try {
    p = JSON.parse(_)
  } catch (E) {
    throw Error(`failed to parse config file ${h}: ${E}`)
  }
  if (!p.authentication) throw Error(`config file ${h} is missing "authentication"`);
  let w = p.authentication.type;
  if (w !== "oidc_federation" && w !== "user_oauth") throw Error(`authentication.type "${w}" is not a known authentication type`);
  if (p.organization_id ?? (p.organization_id = vw("ANTHROPIC_ORGANIZATION_ID")), p.workspace_id ?? (p.workspace_id = vw("ANTHROPIC_WORKSPACE_ID")), p.base_url ?? (p.base_url = vw("ANTHROPIC_BASE_URL")), (n = p.authentication).scope ?? (n.scope = vw("ANTHROPIC_SCOPE")), p.authentication.type === "oidc_federation") {
    if (!p.authentication.identity_token) {
      let E = vw("ANTHROPIC_IDENTITY_TOKEN_FILE");
      if (E) p.authentication.identity_token = {
        source: "file",
        path: E
      }
    }
    if (!p.authentication.federation_rule_id) p.authentication.federation_rule_id = vw("ANTHROPIC_FEDERATION_RULE_ID") ?? "";
    (r = p.authentication).service_account_id ?? (r.service_account_id = vw("ANTHROPIC_SERVICE_ACCOUNT_ID"))
  }
  return {
    config: p,
    fromFile: !0
  }
};
var S = async (e, n) => {
  if (e?.authentication.credentials_path) return e.authentication.credentials_path;
  let r = await C();
  if (!r) return null;
  let s = n ?? await K();
  if (!s) return null;
  U(s);
  let {
    path: o
  } = await import("B:/~BUN/root/chunk-gx3sdkkb.js");
  return o.join(r, "credentials", `${s}.json`)
}, C = async () => {
  if (!oe()) return null;
  let {
    path: e
  } = await import("B:/~BUN/root/chunk-gx3sdkkb.js"), n = vw("ANTHROPIC_CONFIG_DIR");
  if (n) return n;
  if (QAr()["X-Stainless-OS"] === "Windows") {
    let c = vw("APPDATA");
    if (c) return e.join(c, "Anthropic");
    let u = vw("USERPROFILE");
    if (u) return e.join(u, "AppData", "Roaming", "Anthropic");
    return null
  }
  let s = vw("XDG_CONFIG_HOME");
  if (s) return e.join(s, "anthropic");
  let o = vw("HOME");
  if (o) return e.join(o, ".config", "anthropic");
  return null
}, oe = () => {
  let e = QAr()["X-Stainless-Runtime"];
  return e === "node" || e === "deno"
}, K = async () => {
  let e = await C();
  if (!e) return null;
  let n = vw("ANTHROPIC_PROFILE");
  if (n) return n;
  let {
    fs: r,
    path: s
  } = await import("B:/~BUN/root/chunk-gx3sdkkb.js"), o = s.join(e, "active_config");
  try {
    return (await r.promises.readFile(o, "utf-8")).trim() || "default"
  } catch (c) {
    if (c?.code !== "ENOENT") throw Error(`failed to read ${o}: ${c}`);
    return "default"
  }
};

function N(e) {
  if (!e) throw new xr("Identity token file path is empty");
  return async () => {
    let {
      fs: n
    } = await import("B:/~BUN/root/chunk-gx3sdkkb.js"), r;
    try {
      r = await n.promises.readFile(e, "utf-8")
    } catch (o) {
      throw new xr(`Failed to read identity token file at ${e}: ${o}`)
    }
    let s = r.trim();
    if (!s) throw new xr(`Identity token file at ${e} is empty`);
    return s
  }
}

function V(e) {
  if (!e) throw new xr("Identity token value is empty");
  return () => e
}

function j(e) {
  return async () => {
    ZAo(e.baseURL);
    let n = await e.identityTokenProvider();
    if (n.length > 16384) throw new Xp(`Identity token is ${Math.ceil(n.length/1024)} KiB, exceeds the 16 KiB assertion limit`);
    let r = {
      grant_type: Sea,
      assertion: n,
      federation_rule_id: e.federationRuleId,
      organization_id: e.organizationId
    };
    if (e.serviceAccountId) r.service_account_id = e.serviceAccountId;
    if (e.workspaceId) r.workspace_id = e.workspaceId;
    let s = `${e.baseURL}${QAo}`,
      o;
    try {
      o = await e.fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": `${P1t},${kea}`,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${gO} oidcFederationProvider`
        },
        body: JSON.stringify(r)
      })
    } catch (_) {
      throw new Xp(`Failed to reach token endpoint ${s}: ${_}`)
    }
    let c = o.headers.get("Request-Id");
    if (!o.ok) {
      let _ = await o.text().catch(() => ""),
        p = iwe(_),
        w = "";
      if (o.status === 401) w = ` Ensure your federation rule matches your identity token. ${e.workspaceId?"":"If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`;
      throw new Xp(`Token exchange failed with status ${o.status}${c?` (request-id ${c})`:""}: ${p}${w}`, o.status, p, c)
    }
    let u = await exo(o, c),
      h = Number(u.expires_in);
    if (!Number.isFinite(h)) throw new Xp(`Token endpoint response missing required fields: ${JSON.stringify(iwe(u))}`, o.status, iwe(u), c);
    return {
      token: u.access_token,
      expiresAt: y() + h
    }
  }
}

function B(e) {
  return async (n) => {
    let {
      fs: r
    } = await import("B:/~BUN/root/chunk-gx3sdkkb.js");
    await NGn(e.credentialsPath, e.onSafetyWarning);
    let s;
    try {
      s = await r.promises.readFile(e.credentialsPath, "utf-8")
    } catch (R) {
      throw new Xp(`Credentials file not found at ${e.credentialsPath}: ${R}`)
    }
    let o;
    try {
      o = JSON.parse(s)
    } catch (R) {
      throw new Xp(`Credentials file at ${e.credentialsPath} is not valid JSON: ${R}`)
    }
    let c = o.access_token;
    if (!c) throw new Xp(`Credentials file at ${e.credentialsPath} must include 'access_token'`);
    let u = o.expires_at;
    if (!n?.forceRefresh && (u == null || y() < u - O1t)) return {
      token: c,
      expiresAt: u ?? null
    };
    let h = o.refresh_token;
    if (!e.clientId || !h) throw new Xp(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId?"set":"empty"}, refresh_token ${h?"set":"empty"})`);
    ZAo(e.baseURL);
    let _ = {
        grant_type: wea,
        refresh_token: h,
        client_id: e.clientId
      },
      p = `${e.baseURL}${QAo}`,
      w;
    try {
      w = await e.fetch(p, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": P1t,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${gO} userOAuthProvider`
        },
        body: JSON.stringify(_)
      })
    } catch (R) {
      throw new Xp(`User OAuth refresh failed to reach token endpoint: ${R}`)
    }
    let E = w.headers.get("Request-Id");
    if (!w.ok) {
      let R = await w.text().catch(() => "");
      throw new Xp(`User OAuth refresh failed (HTTP ${w.status}): ${iwe(R)}`, w.status, iwe(R), E)
    }
    let k = await exo(w, E),
      T = Number(k.expires_in);
    if (!Number.isFinite(T)) throw new Xp(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(iwe(k))}`, w.status, iwe(k), E);
    let D = y() + T,
      ee = k.refresh_token || h;
    return await Btt(e.credentialsPath, {
      ...o,
      version: z$n,
      type: "oauth_token",
      access_token: k.access_token,
      expires_at: D,
      refresh_token: ee
    }), {
      token: k.access_token,
      expiresAt: D
    }
  }
}

function _rn(e, n) {
  let r = e.authentication.credentials_path ?? null,
    s = (e.base_url || n.baseURL).replace(/\/+$/, ""),
    o = se(e, r, s, n),
    c = {};
  if (e.workspace_id && e.authentication.type === "user_oauth") c["anthropic-workspace-id"] = e.workspace_id;
  return {
    provider: o,
    extraHeaders: c,
    baseURL: e.base_url || void 0
  }
}
async function Fqi(e, n) {
  let r = await O(n);
  if (!r) return null;
  let {
    config: s,
    fromFile: o
  } = r, c = s.authentication.credentials_path || !o ? s : {
    ...s,
    authentication: {
      ...s.authentication,
      credentials_path: await S(s, n) ?? void 0
    }
  };
  return _rn(c, e)
}

function se(e, n, r, s) {
  switch (e.authentication.type) {
    case "oidc_federation": {
      let o = e.authentication,
        c = ae(o);
      if (!c) throw new Xp("oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)");
      if (!o.federation_rule_id) throw new Xp("oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).");
      if (!e.organization_id) throw new Xp("oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)");
      let u = j({
        identityTokenProvider: c,
        federationRuleId: o.federation_rule_id,
        organizationId: e.organization_id,
        serviceAccountId: o.service_account_id,
        workspaceId: e.workspace_id,
        baseURL: r,
        fetch: s.fetch,
        userAgent: s.userAgent
      });
      if (n) return ce(u, n, s.onCacheWriteError, s.onSafetyWarning);
      return u
    }
    case "user_oauth": {
      if (!n) throw new Xp("user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)");
      return B({
        credentialsPath: n,
        clientId: e.authentication.client_id,
        baseURL: r,
        fetch: s.fetch,
        userAgent: s.userAgent,
        onSafetyWarning: s.onSafetyWarning
      })
    }
    default: {
      let o = e.authentication.type;
      throw new Xp(`authentication.type "${o}" is not a known authentication type`)
    }
  }
}

function ae(e) {
  if (e.identity_token) {
    let s = e.identity_token.source;
    if (s !== "file") throw new Xp(`identity_token.source "${s}" is not supported by this SDK version (only "file")`);
    if (!e.identity_token.path) throw new Xp('identity_token.source "file" requires a non-empty path');
    return N(e.identity_token.path)
  }
  let n = vw("ANTHROPIC_IDENTITY_TOKEN_FILE");
  if (n) return N(n);
  let r = vw("ANTHROPIC_IDENTITY_TOKEN");
  if (r) return V(r);
  return null
}

function ce(e, n, r, s) {
  return async (o) => {
    let {
      fs: c
    } = await import("B:/~BUN/root/chunk-gx3sdkkb.js");
    await NGn(n, s);
    let u;
    try {
      let _ = await c.promises.readFile(n, "utf-8");
      u = JSON.parse(_);
      let p = u?.access_token;
      if (p && !o?.forceRefresh) {
        let w = u?.expires_at;
        if (w == null || y() < w - O1t) return {
          token: p,
          expiresAt: w ?? null
        }
      }
    } catch (_) {
      if (_?.code !== "ENOENT" && !(_ instanceof SyntaxError)) r?.(_)
    }
    let h = await e(o);
    try {
      await Btt(n, {
        ...u ?? {},
        version: z$n,
        type: "oauth_token",
        access_token: h.token,
        expires_at: h.expiresAt
      })
    } catch (_) {
      r?.(_)
    }
    return h
  }
}
import {
  mkdir as G,
  readFile as fe,
  stat as he
} from "fs/promises";
import {
  dirname as pe,
  join as _e
} from "path";
import {
  dirname as de
} from "path";
var le = {
  "fail-closed": 5,
  "fail-open": 15
};

function P(e, n, r) {
  return (s) => z(n, () => e(s), r)
}

function XRs(e, n) {
  return z(de(e), n, "fail-closed")
}
async function z(e, n, r) {
  let s = le[r],
    o;
  try {
    o = await ue(e, s, r)
  } catch (c) {
    if (r === "fail-closed" || c instanceof Xp) throw c;
    return t(`wif: credentials lock unavailable at ${e} (${d(c)}); refreshing without cross-process serialization`), n()
  }
  try {
    return l("tengu_wif_user_oauth_lock_acquired", {
      mode: f(r)
    }), await n()
  } finally {
    l("tengu_wif_user_oauth_lock_released", {
      mode: f(r)
    });
    try {
      await o()
    } catch (c) {
      if (ci(c)) t(`wif: lock release failed: ${c}`);
      else a(c)
    }
  }
}
async function ue(e, n, r) {
  for (let s = 0;; s++) try {
    return await Zd(e, {
      stale: 60000,
      update: 5000,
      onCompromised: (o) => t(`WIF credentials lock compromised: ${o}`, {
        level: "error"
      })
    })
  } catch (o) {
    if (o.code !== "ELOCKED") throw o;
    if (s >= n) {
      l("tengu_wif_user_oauth_lock_retry_limit", {
        attempt: s,
        mode: f(r)
      });
      let c = new Xp(`Could not acquire credentials lock at ${e} after ${n} retries`);
      throw c.cause = Object.assign(Error("credentials lock busy"), {
        code: "ELOCKED"
      }), c
    }
    l("tengu_wif_user_oauth_lock_retry", {
      attempt: s,
      mode: f(r)
    }), await J(1000 + Math.random() * 1000)
  }
}
class Z {
  generation = 0;
  credentialsPromise = void 0;
  tokenCachePromise = void 0;
  resolvedBaseUrlSnapshot = void 0;
  failedAccessTokens = new Set;
  reset() {
    this.generation += 1, this.credentialsPromise = void 0, this.tokenCachePromise = void 0, this.resolvedBaseUrlSnapshot = void 0, this.failedAccessTokens.clear()
  }
}
var we = new W(() => new Z);

function A() {
  return we.of(H().host)
}
var me = 20;

function cRe() {
  return A().resolvedBaseUrlSnapshot
}

function UQe() {
  return v(A())
}

function v(e) {
  if (e.credentialsPromise === void 0) {
    let {
      generation: n
    } = e;
    e.credentialsPromise = ao("wif_credentials_resolve", async () => {
      let r = await Te();
      if (e.generation !== n) return M(e);
      if (r === null) return e.resolvedBaseUrlSnapshot = null, null;
      let s = i.ANTHROPIC_BASE_URL || r.base_url,
        o = s || "https://api.anthropic.com",
        u = OE() === "env-quad" ? await ge(r, o) : await S(r),
        h = {
          ...r,
          base_url: s,
          ...r.authentication.credentials_path || u === null ? {} : {
            authentication: {
              ...r.authentication,
              credentials_path: u
            }
          }
        },
        [{
          getUserAgent: _
        }, {
          getTLSFetchOptions: p
        }, {
          getProxyFetchOptions: w
        }] = await Promise.all([import("B:/~BUN/root/chunk-zehnmj5r.js"), import("B:/~BUN/root/chunk-tbs1z5mb.js"), import("B:/~BUN/root/chunk-hm55wvr0.js")]),
        E = _rn(h, {
          baseURL: o,
          fetch: (k, T) => fetch(k, {
            ...T,
            ...w({
              forAnthropicAPI: !0,
              url: String(k)
            }),
            ...p(void 0),
            signal: AbortSignal.timeout(1e4)
          }),
          userAgent: _(),
          onSafetyWarning: (k) => t(k, {
            level: "warn"
          }),
          onCacheWriteError: (k) => t(String(k), {
            level: "warn"
          })
        });
      if (u) switch (r.authentication.type) {
        case "user_oauth":
          E.provider = P(Y(Ee(E.provider, u), u, "after-recorded-401", e.failedAccessTokens), pe(u), "fail-closed");
          break;
        case "oidc_federation": {
          let k = T_t();
          if (k === null) break;
          await G(k, {
            recursive: !0,
            mode: 448
          }).catch((T) => t(`wif: cannot create ${k} (${d(T)}); the credentials lock may be unavailable`, {
            level: "warn"
          })), E.provider = P(Y(E.provider, u, "always", e.failedAccessTokens), k, "fail-open");
          break
        }
      }
      if (e.generation !== n) return M(e);
      return e.resolvedBaseUrlSnapshot = E.baseURL ?? null, E
    }).catch((r) => {
      throw t(`WIF credential resolution failed: ${d(r)}`, {
        level: "error"
      }), r instanceof Xp ? r : new Xp(d(r))
    })
  }
  return e.credentialsPromise
}

function M(e) {
  return t("wif: sign-in state was reset during this lookup; looking it up again"), v(e)
}
async function JRs(e) {
  let n = A(),
    r = await Q(n).catch(() => null);
  if (r === null) return;
  if (e) {
    if (n.failedAccessTokens.add(e), n.failedAccessTokens.size > me)
      for (let s of n.failedAccessTokens) {
        n.failedAccessTokens.delete(s);
        break
      }
  }
  r.invalidate()
}

function PNe() {
  return Q(A())
}

function Q(e) {
  return e.tokenCachePromise ??= v(e).then((n) => {
    if (n === null) return null;
    return new yrn(async (s) => {
      try {
        let o = await n.provider(s);
        return g("wif_token_exchange"), o
      } catch (o) {
        let c = o instanceof Xp ? o : new Xp(o instanceof Error ? o.message : String(o), null);
        if (c !== o) c.cause = o;
        throw m("wif_token_exchange", ye(c)), c
      }
    }, (s) => t(String(s), {
      level: "warn"
    }))
  }), e.tokenCachePromise
}

function Y(e, n, r, s) {
  return async (o) => {
    if (!o?.forceRefresh) return e(o);
    if (r === "always" || s.size > 0) try {
      await NGn(n, (p) => t(p, {
        level: "warn"
      }));
      let c = await import("fs"),
        u = JSON.parse(await c.promises.readFile(n, "utf-8")),
        h = u.access_token,
        _ = u.expires_at == null ? null : Number(u.expires_at);
      if (typeof h === "string" && h && !s.has(h) && (_ === null || Date.now() / 1000 < _ - O1t)) {
        let {
          logEvent: p
        } = await import("B:/~BUN/root/chunk-tbhz6sq9.js"), {
          fromEnum: w
        } = await import("B:/~BUN/root/chunk-ezdxjagn.js");
        return p("tengu_wif_user_oauth_refresh_race_resolved", {
          mode: w(r)
        }), t("wif: adopting sibling-rotated access token from credentials file; skipping refresh grant"), {
          token: h,
          expiresAt: _
        }
      }
    } catch (c) {
      t(`wif: rotated-token adoption check failed: ${d(c)}`)
    }
    return e(o)
  }
}

function Ee(e, n) {
  let r = async () => {
    try {
      let s = await import("fs");
      return JSON.parse(await s.promises.readFile(n, "utf-8"))
    } catch {
      return null
    }
  };
  return async (s) => {
    let c = (await r())?.refresh_token;
    try {
      return await e(s)
    } catch (u) {
      if (u instanceof Xp && (u.statusCode === 400 || u.statusCode === 401) && typeof u.body === "string" && u.body.includes('"invalid_grant"') && jtt(u) === null && typeof c === "string" && c) try {
        let h = await r();
        if (h && h.refresh_token === c) {
          let {
            logEvent: _
          } = await import("B:/~BUN/root/chunk-tbhz6sq9.js");
          await Btt(n, {
            ...h,
            refresh_token: void 0
          }), _("tengu_wif_user_oauth_refresh_token_cleared", {})
        }
      } catch (h) {
        if (qt(h)) t(`wif: refresh-token cleanup write failed: ${h}`);
        else a(qe(F(h), "WIF: failed to clear stale user_oauth refresh_token"))
      }
      throw u
    }
  }
}

function hwa(e) {
  if (e instanceof Xp && typeof e.statusCode === "number") return e.statusCode >= 500 || e.statusCode === 429 || e.statusCode === 408;
  let n = e;
  for (let r = 0; r < 4 && n instanceof Error; r++) {
    if (n.name === "TimeoutError" || ke(n)) return !0;
    n = n.cause
  }
  return !1
}

function ke(e) {
  switch ("code" in e && typeof e.code === "string" ? e.code : "") {
    case "ECONNRESET":
    case "ECONNREFUSED":
    case "ECONNABORTED":
    case "ETIMEDOUT":
    case "EHOSTUNREACH":
    case "ENETUNREACH":
    case "ENETDOWN":
    case "ENOTFOUND":
    case "EAI_AGAIN":
    case "EPIPE":
    case "UND_ERR_SOCKET":
    case "UND_ERR_CONNECT_TIMEOUT":
    case "ELOCKED":
    case "ConnectionRefused":
    case "ConnectionClosed":
    case "FailedToOpenSocket":
    case "Timeout":
      return !0;
    default:
      return !1
  }
}

function ye(e) {
  if (I1t(e)) return "no_refresh_available";
  if (jtt(e)) return "account_on_hold";
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx"
  }
  let n = e.message.toLowerCase();
  if (n.includes("parse") || n.includes("json")) return "parse_failed";
  return "network_error"
}

function wbo() {
  A().reset(), FGn()
}
var I = (e) => process.env[e]?.trim() || void 0;
async function Te() {
  if (OE() === "env-quad") {
    let e = I("ANTHROPIC_FEDERATION_RULE_ID"),
      n = I("ANTHROPIC_ORGANIZATION_ID");
    if (e && n) {
      let r = I("ANTHROPIC_IDENTITY_TOKEN_FILE");
      if (r && q()) return null;
      return {
        organization_id: n,
        workspace_id: I("ANTHROPIC_WORKSPACE_ID"),
        base_url: I("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: e,
          service_account_id: I("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: r ? {
            source: "file",
            path: r
          } : void 0,
          scope: I("ANTHROPIC_SCOPE")
        }
      }
    }
  }
  if (q()) return null;
  return X()
}
async function ge(e, n) {
  if (e.authentication.type !== "oidc_federation") return null;
  let r = e.authentication.identity_token?.path,
    s;
  if (r) try {
    s = (await fe(r, "utf-8")).trim()
  } catch (u) {
    return t(`wif: cannot read identity token at ${r} (${d(u)}); federation token cache disabled`), null
  } else s = I("ANTHROPIC_IDENTITY_TOKEN");
  if (!s) return t("wif: no identity token; federation token cache disabled"), null;
  let o = T_t();
  if (o === null) return t("wif: no config directory, or a diskless session; federation token cache disabled"), null;
  return t("wif: federation token cache disabled on Windows (no directory ownership check available)"), null
}
export {
  gO,
  Lqi,
  QAr,
  yrn,
  vw,
  Nqi,
  z$n,
  _rn,
  Fqi,
  XRs,
  cRe,
  UQe,
  JRs,
  PNe,
  hwa,
  wbo
};
