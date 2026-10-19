// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Zn,
  d,
  Wt,
  HA
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  L,
  j,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Bf,
  J,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  o,
  oe,
  u,
  U,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  um
} from "B:/~BUN/root/chunk-hz8x9zsh.js";
var m1t = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;

function S(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e)
}
var K = {
  ")": "(",
  "]": "[",
  "}": "{"
};

function Ane(e) {
  while (e.length > 0) {
    let n = e.at(-1);
    if (".,;:!?".includes(n)) {
      e = e.slice(0, -1);
      continue
    }
    let r = K[n];
    if (!r) break;
    let i = 0,
      s = 0;
    for (let c of e)
      if (c === r) i++;
      else if (c === n) s++;
    if (s > i) e = e.slice(0, -1);
    else break
  }
  return e
}

function FBo(e) {
  for (let n of e.matchAll(m1t)) return Ane(n[0]);
  return
}
var X = "tengu_lively_beaver";
class N {
  reader = null;
  register(e) {
    let n = this.reader;
    return this.reader = e, n
  }
}
var T = new N;

function UKs(e) {
  return T.register(e)
}

function g1t() {
  let e = T.reader;
  if (!e) return !1;
  try {
    return e(X, !1) === !0
  } catch {
    return !1
  }
}
var Z_t = "account_on_hold",
  h1t = "https://claude.ai/restricted",
  R = "Your account is on hold and can't use Claude Code. View details or appeal: ";

function HBo(e) {
  return `${R}${e}`
}

function I9n(e) {
  return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`
}
var ve = HBo(h1t);

function $Bo(e) {
  if (!g1t() || !e.startsWith(R)) return !1;
  let n = e.slice(R.length);
  return S(n) && Lze(n) === n
}
var v = 2048,
  Z = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;

function Q(e) {
  try {
    return e === new URL(ln().CLAUDE_AI_ORIGIN).origin
  } catch {
    return !1
  }
}

function Lze(e) {
  if (typeof e !== "string" || e.length > v) return h1t;
  let n;
  try {
    n = new URL(e)
  } catch {
    return h1t
  }
  if (n.protocol !== "https:" || n.username || n.password || n.port || n.hash) return h1t;
  let r = n.hostname;
  return (r === "claude.ai" || r.endsWith(".claude.ai") || r === "anthropic.com" || r.endsWith(".anthropic.com") || Q(n.origin)) && n.href.length <= v && Z.test(n.href) ? n.href : h1t
}
var ee = f(() => u({
  error: U(["invalid_grant", "access_denied"]),
  error_description: C(Z_t),
  error_uri: oe().optional()
}));

function lfn(e) {
  if (!g1t()) return null;
  let n = e;
  if (typeof n === "string") {
    if (!n.includes(Z_t)) return null;
    try {
      n = J(n)
    } catch {
      return null
    }
  }
  let r = ee().safeParse(n);
  return r.success ? {
    url: Lze(r.data.error_uri)
  } : null
}
class The extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError"
  }
}
class XJ extends Error {
  error;
  errorDescription;
  errorUri;
  displayMessage;
  constructor(e, n, r) {
    super("OAuth authorization was denied or failed");
    this.error = e;
    this.errorDescription = n;
    this.errorUri = r;
    this.name = "OAuthCallbackError", this.displayMessage = n ? `${e}: ${n}` : e
  }
}

function M9n(e) {
  return e instanceof XJ && e.errorDescription === Z_t
}
var BKs = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  jKs = "refresh_token",
  bUr = "/v1/oauth/token",
  ebt = "oauth-2025-04-20",
  WKs = "oidc-federation-2026-04-01",
  zKs = 120,
  tbt = 30,
  GKs = 5,
  P = 1048576;

function SUr(e) {
  if (!e) return;
  let n;
  try {
    n = new URL(e)
  } catch (i) {
    throw new Uu(`Invalid token endpoint base URL "${e}": ${i}`)
  }
  if (n.protocol === "https:") return;
  let r = n.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (n.protocol === "http:" && (r === "localhost" || r === "127.0.0.1" || r === "::1")) return;
  throw new Uu(`Refusing to send credential over non-https token endpoint "${e}"`)
}
async function wUr(e, n) {
  let r = await ne(e),
    i;
  try {
    i = JSON.parse(r)
  } catch {
    throw new Uu(`Token endpoint returned non-JSON response (status ${e.status})`, e.status, sde(r), n)
  }
  if (!i.access_token) throw new Uu(`Token endpoint response missing access_token: ${JSON.stringify(sde(i))}`, e.status, sde(i), n);
  if (i.token_type && i.token_type.toLowerCase() !== "bearer") throw new Uu(`Token endpoint response: unsupported token_type "${i.token_type}" (want Bearer)`, e.status, sde(i), n);
  return i
}
var w = 2000,
  te = new Set(["error", "error_description", "error_uri"]);

function sde(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let n;
    try {
      n = JSON.parse(e)
    } catch {
      if (e.length <= w) return e;
      return e.slice(0, w) + `... <${e.length-w} more chars>`
    }
    return JSON.stringify(sde(n))
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let n = {};
    for (let [r, i] of Object.entries(e))
      if (te.has(r)) n[r] = i;
    return n
  }
  return null
}
async function dfn(e, n = (r) => console.warn(`anthropic-sdk: ${r}`)) {
  return
}
async function Nze(e, n) {
  let {
    fs: r,
    path: i
  } = await import("B:/~BUN/root/chunk-62zz5fwx.js"), s = i.dirname(e);
  await r.promises.mkdir(s, {
    recursive: !0,
    mode: 448
  });
  let c = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let l = await r.promises.open(c, "w", 384);
    try {
      await l.writeFile(JSON.stringify(n, null, 2)), await l.sync()
    } finally {
      await l.close()
    }
    await r.promises.rename(c, e)
  } catch (l) {
    throw await r.promises.unlink(c).catch(() => {}), l
  }
  try {
    let l = await r.promises.open(s, "r");
    try {
      await l.sync()
    } finally {
      await l.close()
    }
  } catch {}
}
async function ne(e) {
  if (!e.body) return "";
  let n = e.body.getReader(),
    r = [],
    i = 0;
  for (;;) {
    let {
      done: c,
      value: l
    } = await n.read();
    if (c) break;
    if (i + l.length > P) {
      let p = P - i;
      if (p > 0) r.push(l.subarray(0, p));
      await n.cancel();
      break
    }
    r.push(l), i += l.length
  }
  let s;
  if (r.length === 1) s = r[0];
  else {
    s = new Uint8Array(r.reduce((l, p) => l + p.length, 0));
    let c = 0;
    for (let l of r) s.set(l, c), c += l.length
  }
  return new TextDecoder("utf-8").decode(s)
}
class Uu extends Zn {
  constructor(e, n = null, r = null, i = null) {
    super(e);
    this.statusCode = n, this.body = r, this.requestId = i
  }
}
import {
  lstatSync as re,
  readFileSync as ie,
  realpathSync as ae
} from "fs";
import {
  basename as k,
  dirname as ce,
  isAbsolute as b,
  join as g,
  parse as le,
  relative as ue,
  resolve as O,
  sep as B
} from "path";

function Fze(e) {
  if (!(e instanceof Uu) || e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403) return null;
  return lfn(e.body)
}

function nbt(e) {
  return e instanceof Uu && e.statusCode === null && e.message.includes("has expired and no refresh is available")
}
var fe = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"];
class M {
  precedenceSource = {
    filled: !1
  };
  authType = {
    filled: !1
  };
  profileBaseUrl = {
    filled: !1
  };
  accountInfo = {
    filled: !1
  };
  federationIdentity = {
    filled: !1
  };
  profileStoreDenyPaths = {
    filled: !1
  };
  settingsBearerRejected = !1;
  primedFiles = void 0
}
var h = new z(() => new M);

function fv() {
  let e = h.of(j().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let n = pe();
  return e.precedenceSource = {
    filled: !0,
    value: n
  }, n
}

function pe() {
  let e = oL(),
    n = Y();
  if (n) {
    if (e === null) return null;
    let r = E(e, n);
    return r === "oidc_federation" || r === "user_oauth" ? "profile-explicit" : null
  }
  if (q()) return "env-quad";
  if (e !== null) {
    let r = E(e, mTe(e));
    if (r === "oidc_federation" || r === "user_oauth") return "profile-implicit"
  }
  return null
}

function cfn() {
  let e = h.of(j().host);
  e.precedenceSource = {
    filled: !1
  }, e.authType = {
    filled: !1
  }, e.profileBaseUrl = {
    filled: !1
  }, e.federationIdentity = {
    filled: !1
  }, e.profileStoreDenyPaths = {
    filled: !1
  }, e.settingsBearerRejected = !1, y1t()
}

function y1t() {
  h.of(j().host).accountInfo = {
    filled: !1
  }
}

function ufn() {
  return fv() !== null
}

function ide() {
  let e = h.of(j().host);
  if (e.authType.filled) return e.authType.value;
  let n = ge();
  return e.authType = {
    filled: !0,
    value: n
  }, n
}

function ge() {
  let e = fv();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let n = oL();
  if (n === null) return null;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : mTe(n),
    i = E(n, r);
  return i === "oidc_federation" || i === "user_oauth" ? i : null
}

function Hze() {
  return fv() === "profile-implicit" && ide() === "user_oauth"
}

function E5() {
  let e = h.of(j().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let n = he();
  return e.accountInfo = {
    filled: !0,
    value: n
  }, n
}

function he() {
  let e = fv();
  if (e === null || e === "env-quad") return;
  let n = oL();
  if (n === null) return;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : mTe(n),
    i = m(x(n, r));
  if (i === null) return;
  try {
    let s = JSON.parse(i);
    return {
      organizationUuid: s.organization_uuid,
      organizationName: s.organization_name,
      accountEmail: s.account_email,
      workspaceId: s.workspace_id,
      workspaceName: s.workspace_name
    }
  } catch {
    return
  }
}

function _1t() {
  let e = fv();
  if (e === "env-quad") {
    let n = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad \xB7 org ${F(process.env.ANTHROPIC_ORGANIZATION_ID??"")} \xB7 rule ${F(process.env.ANTHROPIC_FEDERATION_RULE_ID??"")}${n?` \xB7 ws ${n.startsWith("wrkspc_")?F(n):n}`:""}`
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let n = oL(),
      r = n === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : mTe(n);
    return `credentials-file \xB7 ${ide()??"unknown"} \xB7 profile ${r}`
  }
  return "inactive"
}

function F(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`
}

function H7e() {
  let e = h.of(j().host);
  if (e.profileBaseUrl.filled) return e.profileBaseUrl.value;
  let n = me();
  return e.profileBaseUrl = {
    filled: !0,
    value: n
  }, n
}

function me() {
  let e = fv();
  if (e === null || e === "env-quad") return;
  let n = oL();
  if (n === null) return;
  try {
    let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : mTe(n),
      i = m(g(n, "configs", `${r}.json`));
    if (i === null) return;
    let s = JSON.parse(i);
    return typeof s.base_url === "string" && s.base_url.trim() ? s.base_url.trim() : void 0
  } catch {
    return
  }
}
var _e = f(() => u({
  organization_id: o().optional(),
  workspace_id: o().optional(),
  authentication: u({
    type: o().optional(),
    federation_rule_id: o().optional()
  }).loose().optional()
}).loose());

function xai() {
  let e = h.of(j().host);
  if (e.federationIdentity.filled) return e.federationIdentity.value;
  let n = Ie();
  return e.federationIdentity = {
    filled: !0,
    value: n
  }, n
}

function Ie() {
  let e = fv();
  if (e === null) return;
  if (e === "env-quad") return H({
    organizationId: a.ANTHROPIC_ORGANIZATION_ID,
    federationRuleId: a.ANTHROPIC_FEDERATION_RULE_ID,
    workspaceId: a.ANTHROPIC_WORKSPACE_ID
  });
  let n = oL();
  if (n === null) return;
  try {
    let r = m(g(n, "configs", `${D9n(n)}.json`));
    if (r === null) return;
    let i = _e().safeParse(J(r));
    if (!i.success || i.data.authentication?.type !== "oidc_federation") return;
    return H({
      organizationId: i.data.organization_id,
      federationRuleId: i.data.authentication.federation_rule_id,
      workspaceId: i.data.workspace_id
    })
  } catch {
    return
  }
}

function H({
  organizationId: e,
  federationRuleId: n,
  workspaceId: r
}) {
  let i = e?.trim(),
    s = n?.trim();
  if (!i || !s) return;
  let c = r?.trim() || void 0;
  return {
    organizationId: i,
    federationRuleId: s,
    ...c !== void 0 && {
      workspaceId: c
    }
  }
}

function UBo() {
  return h.of(j().host).settingsBearerRejected
}

function BBo(e) {
  h.of(j().host).settingsBearerRejected = e
}
var Oe = ["configs", "credentials"],
  ye = ["active_config"];

function pfn() {
  let e = h.of(j().host);
  if (e.profileStoreDenyPaths.filled) return e.profileStoreDenyPaths.value;
  let {
    value: n,
    complete: r
  } = Ae();
  if (r) e.profileStoreDenyPaths = {
    filled: !0,
    value: n
  };
  return n
}

function Ae() {
  let e = oL();
  if (e === null) return {
    value: null,
    complete: !0
  };
  let n = {
    dirs: [e],
    files: []
  };
  try {
    let r = O(e);
    n = D(r) ? {
      dirs: Oe.map((p) => g(r, p)),
      files: ye.map((p) => g(r, p))
    } : {
      dirs: [r],
      files: []
    };
    let s = D9n(e),
      c = x(e, s);
    if (typeof c !== "string" || !c.trim()) return {
      value: n,
      complete: !0
    };
    let l = L(b(c) ? [O(c)] : [O(r, c), O(c)]).filter((p) => !n.dirs.some((y) => p === y || p.startsWith(y + B)) && !n.files.includes(p) && !D(p));
    return {
      value: {
        dirs: n.dirs,
        files: [...n.files, ...l.filter((p) => !Re(p))]
      },
      complete: !0
    }
  } catch (r) {
    return t(`WIF profile store: could not resolve the active profile's credentials path (${d(r)}); denying the store root only`, {
      level: "warn"
    }), {
      value: n,
      complete: !1
    }
  }
}

function mTe(e) {
  return m(g(e, "active_config"))?.trim() || "default"
}

function D9n(e) {
  return process.env.ANTHROPIC_PROFILE?.trim() || mTe(e)
}

function E(e, n) {
  let r = m(g(e, "configs", `${n}.json`));
  if (r === null) return null;
  let i;
  try {
    i = JSON.parse(r)
  } catch {
    return null
  }
  let s = i?.authentication?.type ?? null;
  if (s === "user_oauth") {
    if (!m(x(e, n, i))?.trim()) return null
  }
  return s
}

function x(e, n, r) {
  if (r === void 0) {
    let i = m(g(e, "configs", `${n}.json`));
    if (i !== null) try {
      r = JSON.parse(i)
    } catch {}
  }
  return r?.authentication?.credentials_path ?? g(e, "credentials", `${n}.json`)
}

function oL() {
  return G()?.dir ?? null
}

function G() {
  if (de()) return null;
  let e = process.env,
    n = e.ANTHROPIC_CONFIG_DIR?.trim();
  if (n) return {
    dir: n,
    space: "userNamed"
  };
  {
    let s = e.APPDATA?.trim();
    if (s) return {
      dir: g(s, "Anthropic"),
      space: "home"
    };
    let c = e.USERPROFILE?.trim();
    return c ? {
      dir: g(c, "AppData", "Roaming", "Anthropic"),
      space: "home"
    } : null
  }
  let r = e.XDG_CONFIG_HOME?.trim();
  if (r) return {
    dir: g(r, "anthropic"),
    space: "home"
  };
  let i = e.HOME?.trim();
  return i ? {
    dir: g(i, ".config", "anthropic"),
    space: "home"
  } : null
}

function Y() {
  return process.env.ANTHROPIC_PROFILE?.trim()
}

function q() {
  return fe.every((e) => process.env[e]?.trim())
}

function D(e) {
  let n = W(e);
  if (n === le(n).root) return !0;
  let r = ue(n, W(se().cwd())),
    i = r.split(B)[0];
  return r === "" || i !== ".." && !b(r)
}

function W(e) {
  let n = O(e),
    r = "";
  for (;;) try {
    n = g(ae.native(n), r);
    break
  } catch {
    let i = ce(n);
    if (i === n) {
      n = g(n, r);
      break
    }
    r = r ? g(k(n), r) : k(n), n = i
  }
  return n.toLowerCase()
}

function Re(e) {
  try {
    return re(e).isDirectory()
  } catch {
    return !1
  }
}

function m(e) {
  let n = h.of(j().host).primedFiles;
  if (n !== void 0 && n.has(e)) return n.get(e) ?? null;
  try {
    return ie(e, "utf-8")
  } catch (r) {
    if (Wt(r)) return null;
    throw r
  }
}
async function jBo(e) {
  let n = h.of(j().host),
    r = G();
  if (n.precedenceSource.filled || r === null) return;
  let {
    dir: i,
    space: s
  } = r, c = new Map, l = async (_) => {
    let I;
    try {
      I = await e.hostFiles.readText(Bf[s](_))
    } catch (A) {
      return t(`WIF profile read-ahead: the storage backend threw reading ${_}: ${d(A)}`, {
        level: "warn"
      }), null
    }
    if (I.ok) {
      let A = I.value.found ? I.value.value : null;
      return c.set(_, A), A
    }
    if (HA(um(I.error))) c.set(_, null);
    return null
  }, p = Y();
  if (!p && q()) return;
  let y = p || (await l(g(i, "active_config")))?.trim() || "default";
  await l(g(i, "configs", `${y}.json`)), n.primedFiles = c;
  try {
    fv(), ide()
  } catch (_) {
    t(`WIF profile read-ahead: left to the first reader: ${d(_)}`)
  } finally {
    n.primedFiles = void 0
  }
}
export {
  m1t,
  Ane,
  FBo,
  UKs,
  g1t,
  Z_t,
  h1t,
  HBo,
  I9n,
  $Bo,
  Lze,
  lfn,
  The,
  XJ,
  M9n,
  BKs,
  jKs,
  bUr,
  ebt,
  WKs,
  zKs,
  tbt,
  GKs,
  SUr,
  wUr,
  sde,
  dfn,
  Nze,
  Uu,
  Fze,
  nbt,
  fv,
  cfn,
  y1t,
  ufn,
  ide,
  Hze,
  E5,
  _1t,
  H7e,
  xai,
  UBo,
  BBo,
  pfn,
  mTe,
  D9n,
  oL,
  jBo
};
