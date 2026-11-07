// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  xr,
  d,
  WH,
  qt,
  tx
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  H,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  og,
  t,
  ee,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  o,
  oe,
  u,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Qm
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var Vln = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;

function x(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e)
}
var K = {
  ")": "(",
  "]": "[",
  "}": "{"
};

function jpe(e) {
  while (e.length > 0) {
    let n = e.at(-1);
    if (".,;:!?".includes(n)) {
      e = e.slice(0, -1);
      continue
    }
    let r = K[n];
    if (!r) break;
    let s = 0,
      c = 0;
    for (let a of e)
      if (a === r) s++;
      else if (a === n) c++;
    if (c > s) e = e.slice(0, -1);
    else break
  }
  return e
}

function kUs(e) {
  for (let n of e.matchAll(Vln)) return jpe(n[0]);
  return
}
var Z = "tengu_lively_beaver";
class v {
  reader = null;
  register(e) {
    let n = this.reader;
    return this.reader = e, n
  }
}
var N = new v;

function bea(e) {
  return N.register(e)
}

function Kln() {
  let e = N.reader;
  if (!e) return !1;
  try {
    return e(Z, !1) === !0
  } catch {
    return !1
  }
}
var x1t = "account_on_hold",
  qln = "https://claude.ai/restricted",
  A = "Your account is on hold and can't use Claude Code. View details or appeal: ";

function vUs(e) {
  return `${A}${e}`
}

function $Nr(e) {
  return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`
}
var Te = vUs(qln);

function EUs(e) {
  if (!Kln() || !e.startsWith(A)) return !1;
  let n = e.slice(A.length);
  return x(n) && Utt(n) === n
}
var S = 2048,
  X = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;

function Q(e) {
  try {
    return e === new URL(nn().CLAUDE_AI_ORIGIN).origin
  } catch {
    return !1
  }
}

function Utt(e) {
  if (typeof e !== "string" || e.length > S) return qln;
  let n;
  try {
    n = new URL(e)
  } catch {
    return qln
  }
  if (n.protocol !== "https:" || n.username || n.password || n.port || n.hash) return qln;
  let r = n.hostname;
  return (r === "claude.ai" || r.endsWith(".claude.ai") || r === "anthropic.com" || r.endsWith(".anthropic.com") || Q(n.origin)) && n.href.length <= S && X.test(n.href) ? n.href : qln
}
var te = p(() => u({
  error: B(["invalid_grant", "access_denied"]),
  error_description: T(x1t),
  error_uri: oe().optional()
}));

function LGn(e) {
  if (!Kln()) return null;
  let n = e;
  if (typeof n === "string") {
    if (!n.includes(x1t)) return null;
    try {
      n = ee(n)
    } catch {
      return null
    }
  }
  let r = te().safeParse(n);
  return r.success ? {
    url: Utt(r.data.error_uri)
  } : null
}
class nxe extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError"
  }
}
class eae extends Error {
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

function UNr(e) {
  return e instanceof eae && e.errorDescription === x1t
}
var Sea = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  wea = "refresh_token",
  QAo = "/v1/oauth/token",
  P1t = "oauth-2025-04-20",
  kea = "oidc-federation-2026-04-01",
  vea = 120,
  O1t = 30,
  Eea = 5,
  C = 1048576;

function ZAo(e) {
  if (!e) return;
  let n;
  try {
    n = new URL(e)
  } catch (s) {
    throw new Xp(`Invalid token endpoint base URL "${e}": ${s}`)
  }
  if (n.protocol === "https:") return;
  let r = n.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (n.protocol === "http:" && (r === "localhost" || r === "127.0.0.1" || r === "::1")) return;
  throw new Xp(`Refusing to send credential over non-https token endpoint "${e}"`)
}
async function exo(e, n) {
  let r = await re(e),
    s;
  try {
    s = JSON.parse(r)
  } catch {
    throw new Xp(`Token endpoint returned non-JSON response (status ${e.status})`, e.status, iwe(r), n)
  }
  if (!s.access_token) throw new Xp(`Token endpoint response missing access_token: ${JSON.stringify(iwe(s))}`, e.status, iwe(s), n);
  if (s.token_type && s.token_type.toLowerCase() !== "bearer") throw new Xp(`Token endpoint response: unsupported token_type "${s.token_type}" (want Bearer)`, e.status, iwe(s), n);
  return s
}
var R = 2000,
  ne = new Set(["error", "error_description", "error_uri"]);

function iwe(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let n;
    try {
      n = JSON.parse(e)
    } catch {
      if (e.length <= R) return e;
      return e.slice(0, R) + `... <${e.length-R} more chars>`
    }
    return JSON.stringify(iwe(n))
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let n = {};
    for (let [r, s] of Object.entries(e))
      if (ne.has(r)) n[r] = s;
    return n
  }
  return null
}
async function NGn(e, n = (r) => console.warn(`anthropic-sdk: ${r}`)) {
  return
}
async function Btt(e, n) {
  let {
    fs: r,
    path: s
  } = await import("B:/~BUN/root/chunk-gx3sdkkb.js"), c = s.dirname(e);
  await r.promises.mkdir(c, {
    recursive: !0,
    mode: 448
  });
  let a = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let l = await r.promises.open(a, "w", 384);
    try {
      await l.writeFile(JSON.stringify(n, null, 2)), await l.sync()
    } finally {
      await l.close()
    }
    await r.promises.rename(a, e)
  } catch (l) {
    throw await r.promises.unlink(a).catch(() => {}), l
  }
  try {
    let l = await r.promises.open(c, "r");
    try {
      await l.sync()
    } finally {
      await l.close()
    }
  } catch {}
}
async function re(e) {
  if (!e.body) return "";
  let n = e.body.getReader(),
    r = [],
    s = 0;
  for (;;) {
    let {
      done: a,
      value: l
    } = await n.read();
    if (a) break;
    if (s + l.length > C) {
      let h = C - s;
      if (h > 0) r.push(l.subarray(0, h));
      await n.cancel();
      break
    }
    r.push(l), s += l.length
  }
  let c;
  if (r.length === 1) c = r[0];
  else {
    c = new Uint8Array(r.reduce((l, h) => l + h.length, 0));
    let a = 0;
    for (let l of r) c.set(l, a), a += l.length
  }
  return new TextDecoder("utf-8").decode(c)
}
class Xp extends xr {
  constructor(e, n = null, r = null, s = null) {
    super(e);
    this.statusCode = n, this.body = r, this.requestId = s
  }
}
import {
  lstatSync as se,
  readdirSync as be,
  readFileSync as ae,
  realpathSync as ce
} from "fs";
import {
  basename as P,
  dirname as le,
  isAbsolute as z,
  join as f,
  parse as ue,
  relative as de,
  resolve as O,
  sep as U
} from "path";

function jtt(e) {
  if (!(e instanceof Xp) || e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403) return null;
  return LGn(e.body)
}

function I1t(e) {
  return e instanceof Xp && e.statusCode === null && e.message.includes("has expired and no refresh is available")
}
var aSt = {
    created_by: "claude-code"
  },
  fe = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"];
class j {
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
var g = new W(() => new j);

function OE() {
  let e = g.of(H().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let n = pe();
  return e.precedenceSource = {
    filled: !0,
    value: n
  }, n
}

function pe() {
  let e = EH(),
    n = G();
  if (n) {
    if (e === null) return null;
    let r = F(e, n);
    return r === "oidc_federation" || r === "user_oauth" ? "profile-explicit" : null
  }
  if (J()) return "env-quad";
  if (e !== null) {
    let r = F(e, DHe(e));
    if (r === "oidc_federation" || r === "user_oauth") return "profile-implicit"
  }
  return null
}

function FGn() {
  let e = g.of(H().host);
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
  }, e.settingsBearerRejected = !1, Yln()
}

function Yln() {
  g.of(H().host).accountInfo = {
    filled: !1
  }
}

function lSt() {
  return OE() !== null
}

function awe() {
  let e = g.of(H().host);
  if (e.authType.filled) return e.authType.value;
  let n = ge();
  return e.authType = {
    filled: !0,
    value: n
  }, n
}

function ge() {
  let e = OE();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let n = EH();
  if (n === null) return null;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : DHe(n),
    s = F(n, r);
  return s === "oidc_federation" || s === "user_oauth" ? s : null
}

function rxe() {
  return OE() === "profile-implicit" && awe() === "user_oauth"
}

function YV() {
  let e = g.of(H().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let n = he();
  return e.accountInfo = {
    filled: !0,
    value: n
  }, n
}

function he() {
  let e = OE();
  if (e === null || e === "env-quad") return;
  let n = EH();
  if (n === null) return;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : DHe(n);
  return txo(n, r)
}

function txo(e, n) {
  let r = m(E(e, n));
  if (r === null) return;
  try {
    let s = JSON.parse(r);
    return {
      organizationUuid: s.organization_uuid,
      organizationName: s.organization_name,
      accountEmail: s.account_email,
      workspaceId: s.workspace_id,
      workspaceName: s.workspace_name,
      createdBy: s.created_by
    }
  } catch {
    return
  }
}

function Xln() {
  let e = OE();
  if (e === "env-quad") {
    let n = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad \xB7 org ${w(process.env.ANTHROPIC_ORGANIZATION_ID??"")} \xB7 rule ${w(process.env.ANTHROPIC_FEDERATION_RULE_ID??"")}${n?` \xB7 ws ${n.startsWith("wrkspc_")?w(n):n}`:""}`
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let n = EH(),
      r = n === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : DHe(n);
    return `credentials-file \xB7 ${awe()??"unknown"} \xB7 profile ${r}`
  }
  return "inactive"
}

function w(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`
}

function pqe() {
  let e = g.of(H().host);
  if (e.profileBaseUrl.filled) return e.profileBaseUrl.value;
  let n = me();
  return e.profileBaseUrl = {
    filled: !0,
    value: n
  }, n
}

function me() {
  let e = OE();
  if (e === null || e === "env-quad") return;
  let n = EH();
  if (n === null) return;
  try {
    let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : DHe(n),
      s = m(f(n, "configs", `${r}.json`));
    if (s === null) return;
    let c = JSON.parse(s);
    return typeof c.base_url === "string" && c.base_url.trim() ? c.base_url.trim() : void 0
  } catch {
    return
  }
}
var _e = p(() => u({
  organization_id: o().optional(),
  workspace_id: o().optional(),
  authentication: u({
    type: o().optional(),
    federation_rule_id: o().optional()
  }).loose().optional()
}).loose());

function TUs() {
  let e = g.of(H().host);
  if (e.federationIdentity.filled) return e.federationIdentity.value;
  let n = Ie();
  return e.federationIdentity = {
    filled: !0,
    value: n
  }, n
}

function Ie() {
  let e = OE();
  if (e === null) return;
  if (e === "env-quad") return k({
    organizationId: i.ANTHROPIC_ORGANIZATION_ID,
    federationRuleId: i.ANTHROPIC_FEDERATION_RULE_ID,
    workspaceId: i.ANTHROPIC_WORKSPACE_ID
  });
  let n = EH();
  if (n === null) return;
  try {
    let r = m(f(n, "configs", `${$Gn(n)}.json`));
    if (r === null) return;
    let s = _e().safeParse(ee(r));
    if (!s.success || s.data.authentication?.type !== "oidc_federation") return;
    return k({
      organizationId: s.data.organization_id,
      federationRuleId: s.data.authentication.federation_rule_id,
      workspaceId: s.data.workspace_id
    })
  } catch {
    return
  }
}

function k({
  organizationId: e,
  federationRuleId: n,
  workspaceId: r
}) {
  let s = e?.trim(),
    c = n?.trim();
  if (!s || !c) return;
  let a = r?.trim() || void 0;
  return {
    organizationId: s,
    federationRuleId: c,
    ...a !== void 0 && {
      workspaceId: a
    }
  }
}

function CUs() {
  return g.of(H().host).settingsBearerRejected
}

function RUs(e) {
  g.of(H().host).settingsBearerRejected = e
}
var Oe = ["configs", "credentials"],
  ye = ["active_config"];

function HGn() {
  let e = g.of(H().host);
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
  let e = EH();
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
      dirs: Oe.map((a) => f(r, a)),
      files: ye.map((a) => f(r, a))
    } : {
      dirs: [r],
      files: []
    };
    let c = we(e, $Gn(e)).filter((a) => !n.dirs.some((l) => a === l || a.startsWith(l + U)) && !n.files.includes(a) && !D(a) && !Fe(a));
    return {
      value: {
        dirs: n.dirs,
        files: [...n.files, ...c]
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

function Re(e, n) {
  let r = E(e, n);
  if (!r) return f(e, "credentials", `${n}.json`);
  return typeof r === "string" ? r : null
}

function we(e, n) {
  let r = Re(e, n);
  if (r === null || !r.trim()) return [];
  return L(z(r) ? [O(r)] : [O(e, r), O(r)])
}

function nxo(e) {
  return !!e && /^[A-Za-z0-9_.-]+$/.test(e) && e !== "." && e !== ".."
}

function DHe(e) {
  return m(f(e, "active_config"))?.trim() || "default"
}

function $Gn(e) {
  return process.env.ANTHROPIC_PROFILE?.trim() || DHe(e)
}

function F(e, n) {
  let r = m(f(e, "configs", `${n}.json`));
  if (r === null) return null;
  let s;
  try {
    s = JSON.parse(r)
  } catch {
    return null
  }
  let c = s?.authentication?.type ?? null;
  if (c === "user_oauth") {
    if (!m(E(e, n, s))?.trim()) return null
  }
  return c
}

function E(e, n, r) {
  if (r === void 0) {
    let s = m(f(e, "configs", `${n}.json`));
    if (s !== null) try {
      r = JSON.parse(s)
    } catch {}
  }
  return r?.authentication?.credentials_path ?? f(e, "credentials", `${n}.json`)
}

function EH() {
  return M()?.dir ?? null
}

function M() {
  if (q()) return null;
  let e = process.env,
    n = e.ANTHROPIC_CONFIG_DIR?.trim();
  if (n) return {
    dir: n,
    space: "userNamed"
  };
  {
    let c = e.APPDATA?.trim();
    if (c) return {
      dir: f(c, "Anthropic"),
      space: "home"
    };
    let a = e.USERPROFILE?.trim();
    return a ? {
      dir: f(a, "AppData", "Roaming", "Anthropic"),
      space: "home"
    } : null
  }
  let r = e.XDG_CONFIG_HOME?.trim();
  if (r) return {
    dir: f(r, "anthropic"),
    space: "home"
  };
  let s = e.HOME?.trim();
  return s ? {
    dir: f(s, ".config", "anthropic"),
    space: "home"
  } : null
}

function G() {
  return process.env.ANTHROPIC_PROFILE?.trim()
}

function J() {
  return fe.every((e) => process.env[e]?.trim())
}

function D(e) {
  let n = b(e);
  if (n === ue(n).root) return !0;
  let r = de(n, b(ie().cwd())),
    s = r.split(U)[0];
  return r === "" || s !== ".." && !z(r)
}

function b(e) {
  let n = O(e),
    r = "";
  for (;;) try {
    n = f(ce.native(n), r);
    break
  } catch {
    let s = le(n);
    if (s === n) {
      n = f(n, r);
      break
    }
    r = r ? f(P(n), r) : P(n), n = s
  }
  return n.toLowerCase()
}

function Fe(e) {
  try {
    return se(e).isDirectory()
  } catch {
    return !1
  }
}

function m(e) {
  let n = g.of(H().host).primedFiles;
  if (n !== void 0 && n.has(e)) return n.get(e) ?? null;
  try {
    return ae(e, "utf-8")
  } catch (r) {
    if (qt(r) || WH(r)) return null;
    throw r
  }
}
async function AUs(e) {
  let n = g.of(H().host),
    r = M();
  if (n.precedenceSource.filled || r === null) return;
  let {
    dir: s,
    space: c
  } = r, a = new Map, l = async (_) => {
    let I;
    try {
      I = await e.hostFiles.readText(og[c](_))
    } catch (y) {
      return t(`WIF profile read-ahead: the storage backend threw reading ${_}: ${d(y)}`, {
        level: "warn"
      }), null
    }
    if (I.ok) {
      let y = I.value.found ? I.value.value : null;
      return a.set(_, y), y
    }
    if (tx(Qm(I.error))) a.set(_, null);
    return null
  }, h = G();
  if (!h && J()) return;
  let Y = h || (await l(f(s, "active_config")))?.trim() || "default";
  await l(f(s, "configs", `${Y}.json`)), n.primedFiles = a;
  try {
    OE(), awe()
  } catch (_) {
    t(`WIF profile read-ahead: left to the first reader: ${d(_)}`)
  } finally {
    n.primedFiles = void 0
  }
}
export {
  Vln,
  jpe,
  kUs,
  bea,
  Kln,
  x1t,
  qln,
  vUs,
  $Nr,
  EUs,
  Utt,
  LGn,
  nxe,
  eae,
  UNr,
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
  aSt,
  OE,
  FGn,
  Yln,
  lSt,
  awe,
  rxe,
  YV,
  txo,
  Xln,
  pqe,
  TUs,
  CUs,
  RUs,
  HGn,
  nxo,
  DHe,
  $Gn,
  EH,
  AUs
};
