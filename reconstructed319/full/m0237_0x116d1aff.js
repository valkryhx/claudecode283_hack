// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  vpe,
  J0r,
  Tte,
  wQi,
  kQi,
  vQi,
  jan,
  EQi,
  Jz,
  PBt,
  IBt,
  ctt,
  Gan,
  Epe
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  H,
  JA,
  i2s,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k,
  K,
  Ime
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Ue,
  Nr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  OC
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  VA
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  St
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Te,
  Ci,
  Yc
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  aT,
  nUt
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  CAe,
  tzn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  nOr,
  V1,
  md,
  tsn,
  Sc,
  Qa,
  Tg,
  $v,
  Wm,
  Vx,
  uh,
  Ln,
  kE,
  Tm,
  IOs,
  Rt,
  Jko,
  Yd,
  SIr,
  nH
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  bCo,
  a7i,
  JD,
  Die,
  SCo,
  c7i,
  g0r
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  OE,
  Yln,
  YV,
  txo,
  TUs,
  DHe,
  $Gn,
  EH
} from "B:/~BUN/root/chunk-c79wfkj4.js";
import {
  dan,
  oKe,
  yAe,
  UUt,
  VDr,
  HJi,
  $Ji,
  I0s
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  E2e
} from "B:/~BUN/root/chunk-hvykkx00.js";
import {
  pbe
} from "B:/~BUN/root/chunk-4jfmvmew.js";
import {
  dRe
} from "B:/~BUN/root/chunk-n9ctns18.js";
import {
  IPr
} from "B:/~BUN/root/chunk-4nmzxstq.js";
import {
  npe
} from "B:/~BUN/root/chunk-5g14jzvf.js";
import {
  mpe
} from "B:/~BUN/root/chunk-zvpxvfbv.js";
import {
  o,
  E,
  I,
  oe,
  C,
  u,
  me,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Go
} from "B:/~BUN/root/chunk-cf143bsb.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  randomUUID as Me
} from "crypto";
import {
  readFileSync as Fe
} from "fs";
import {
  join as He,
  resolve as Ne
} from "path";
import {
  createHash as ke
} from "crypto";
import {
  constants as Re
} from "fs";
import {
  unlink as Ee,
  open as Ie
} from "fs/promises";

function MAr(e) {
  return e !== null && e.admitsOnly !== !0
}
var S = 8,
  ee = 4096,
  we = ".stamp.json",
  ne = p(() => u({
    v: T(1),
    identity: o().regex(/^[0-9a-f]{64}$/),
    kind: B(["org", "key", "wif", "token"]),
    sha: o().min(1).max(128),
    confirmed_at: E().int().nonnegative(),
    hipaa_seen: C(o().regex(/^[0-9a-f]{64}$/)).max(S).default([]),
    hipaa_seen_incomplete: I().optional(),
    hipaa_ruled_out: C(o().regex(/^[0-9a-f]{64}$/)).max(S).optional()
  }));

function dgt(e) {
  return `${e}${we}`
}

function sRe(e) {
  return ke("sha256").update(e.descriptor).digest("hex")
}

function Hse(e) {
  return nt(e).slice(0, 32)
}
var te = {
  seen: [],
  incomplete: !1,
  ruledOut: []
};

function N$n(e) {
  return {
    seen: e.hipaa_seen,
    incomplete: e.hipaa_seen_incomplete === !0,
    ruledOut: e.hipaa_ruled_out ?? []
  }
}

function Z_o(e, n) {
  switch (e.kind) {
    case "ok":
      return N$n(e.stamp);
    case "absent":
      return n;
    case "unusable":
      return {
        seen: n.seen, incomplete: !0, ruledOut: []
      }
  }
}

function ie(e) {
  return e.incomplete ? {
    hipaa_seen_incomplete: !0,
    hipaa_ruled_out: e.ruledOut.slice(-S)
  } : {}
}

function re(e, n, r) {
  if (e === null || e.sha !== r) return {
    kind: "unstamped",
    hipaaSeen: e?.hipaa_seen ?? []
  };
  if (e.identity !== n) return {
    kind: "foreign",
    hipaaSeen: e.hipaa_seen
  };
  return {
    kind: "match",
    stamp: e
  }
}
var xe = new Set(["EMFILE", "ENFILE", "EAGAIN", "EBUSY", "EINTR"]);

function se(e) {
  let n = k(e);
  return n !== void 0 && xe.has(n) ? {
    kind: "unusable",
    cause: "io",
    code: n
  } : {
    kind: "unusable",
    cause: "content"
  }
}

function DAr(e) {
  return e.kind === "unusable" && e.cause === "io"
}

function w(e) {
  let n = PBt(dgt(e), ee, {
    refuseLinkOnWindows: vpe()
  });
  switch (n.kind) {
    case "absent":
      return {
        kind: "absent"
      };
    case "refused":
      return {
        kind: "unusable", cause: "content"
      };
    case "error":
      return t(`Policy limits: stamp unreadable (${d(n.error)}); cache reads as unvouched`), se(n.error);
    case "ok":
      try {
        let r = ne().safeParse(et(n.text, !1));
        return r.success ? {
          kind: "ok",
          stamp: r.data
        } : {
          kind: "unusable",
          cause: "content"
        }
      } catch {
        return {
          kind: "unusable",
          cause: "content"
        }
      }
  }
}
async function cgt(e) {
  let n;
  try {
    n = await Ie(dgt(e), Re.O_RDONLY | Go);
    let r = await n.stat();
    if (!r.isFile() || r.size > ee) return {
      kind: "unusable",
      cause: "content"
    };
    let s = ne().safeParse(et(await n.readFile({
      encoding: "utf-8"
    }), !1));
    return s.success ? {
      kind: "ok",
      stamp: s.data
    } : {
      kind: "unusable",
      cause: "content"
    }
  } catch (r) {
    return K(r) ? {
      kind: "absent"
    } : se(r)
  } finally {
    await n?.close().catch(() => {})
  }
}

function bRs({
  principal: e,
  bodySha: n,
  confirmedAt: r,
  bodyTaints: s,
  previous: l,
  authority: f
}) {
  let c = sRe(e),
    y = s.includes("hipaa"),
    h, m;
  if (f === "prior_evidence" && !y) h = l.seen.slice(), m = l.ruledOut.slice();
  else if (h = l.seen.filter((g) => g !== c), m = l.ruledOut.filter((g) => g !== c), y) h.push(c);
  else if (l.incomplete) m.push(c);
  let R = h.length > S;
  return {
    v: 1,
    identity: c,
    kind: e.kind,
    sha: n,
    confirmed_at: r,
    hipaa_seen: h.slice(-S),
    ...ie({
      ...l,
      incomplete: l.incomplete || R,
      ruledOut: m
    })
  }
}
var Oe = "0".repeat(64);

function bqi(e) {
  return {
    v: 1,
    identity: Oe,
    kind: "token",
    sha: "none",
    confirmed_at: 0,
    hipaa_seen: e.seen.slice(-S),
    ...ie(e)
  }
}
async function ebo(e, n) {
  await zn(dgt(e), _(n), 384)
}
async function tbo(e, n) {
  try {
    return await ebo(e, n), !0
  } catch (r) {
    return t(`Policy limits: failed to write the cache stamp - ${d(r)}`), !1
  }
}
async function Sqi(e) {
  try {
    await Ee(dgt(e))
  } catch (n) {
    if (!K(n)) t(`Policy limits: failed to remove the cache stamp - ${d(n)}`)
  }
}
class ae {
  notice = null;
  changed = De();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) return;
    this.notice = e, this.changed.emit(this.notice)
  }
}
var Le = new W(() => new ae);

function x() {
  return Le.of(H().host)
}

function le(e) {
  x().replaceNotice(e)
}

function KFt() {
  return x().notice
}

function wqi(e) {
  return x().changed.subscribe(e)
}
var SRs = {
  subscribe: (e) => x().changed.subscribe(e),
  getSnapshot: KFt
};

function oRe(e) {
  return /[\u0000-\u001f\u007f-\u009f]/.test(e) || pbe(e)
}

function M(e) {
  let n = Q(VA(e, "").toLowerCase(), 64).trim();
  return /^[a-z0-9_-]+$/.test(n) ? n : ""
}
var VFt = 16;

function Q_o(e) {
  let n = typeof e === "object" && e !== null && "compliance_taints" in e ? e.compliance_taints : void 0;
  if (!Array.isArray(n)) return 0;
  let r = U(n, (l) => typeof l !== "string" || M(l) === ""),
    s = L(n.filter((l) => typeof l === "string").map(M).filter((l) => l.length > 0));
  return r + Math.max(0, s.length - VFt)
}
var ce = p(() => u({
    restrictions: me(o(), u({
      allowed: I()
    })),
    compliance_taints: C(oe()).default([]).transform((e, n) => {
      let r = L(e.filter((s) => typeof s === "string").map(M).filter((s) => s.length > 0)).slice(0, VFt);
      if (e.length > 0 && r.length === 0) n.addIssue({
        code: "custom",
        message: "compliance_taints had entries but none were well-formed regime names"
      });
      return r
    }),
    monitoring_notice: u({
      text: o().max(500).transform((e) => VA(e, "", {
        keepEmojiJoiners: !0
      })),
      url: o().max(2048).url().startsWith("https://").refine((e) => !oRe(e)).nullish().catch(null)
    }).nullable().default(null).catch(null),
    defaults: me(o(), oe()).default({}).catch({}),
    core_skills: C(o().max(128)).max(256).optional().catch([]),
    artifact_create_notice: u({
      text: o().transform((e) => VA(Q(e, 500), " ", {
        keepEmojiJoiners: !0
      }).replace(/\s+/g, " ").trim()).pipe(o().min(1))
    }).nullish().catch({
      text: "Your organization requires a person to approve each new artifact."
    })
  })),
  FQe = {
    restrictions: {},
    compliance_taints: [],
    monitoring_notice: null,
    defaults: {}
  },
  gqi = ["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "EHOSTUNREACH", "ENETUNREACH", "EPIPE", "CERT_ERROR", "ABORTED", "OTHER"],
  yqi = ["invalid_request_error", "authentication_error", "permission_error", "not_found_error", "rate_limit_error"],
  IAr = ["ip_not_in_allowed_range", "claude_code_key_creator_not_member", "organization_disabled", "organization_on_hold", "restricted_regime_endpoint", "oauth_not_allowed_for_organization", "oauth_scope_insufficient", "token_expired", "oauth_application_deactivated", "oauth_token_no_organization", "oauth_token_no_account", "oauth_account_not_member"],
  _qi = ["token_expired", "token_revoked", "token_invalid", "credential_invalid", "org_access_revoked", "workspace_revoked", "application_deactivated", "token_no_organization", "token_no_account", "account_not_member"];
var nbo = "policy-limits.json",
  Be = 604800000,
  Ve = 5000,
  de = 256,
  fe = {
    kind: "absent"
  },
  rbo = 30000;

function obo() {
  return J0r() ? fe : w(XI())
}

function sbo(e) {
  return e.kind === "absent" && !J0r() ? w(XI()) : e
}
class kqi {
  sessionCache = null;
  lastFetchOutcome = null;
  feedbackRefusal = null;
  settledWithoutVerdictFor = null;
  failOpenVerdict = !1;
  sessionFromServerFetch = !1;
  lastServedCoreSkills = null;
  verdictEnvBearerDigest = null;
  diskAdoptionSuppressed = !1;
  diskAdoptionEpoch = 0;
  storageV5 = void 0;
  lastStampVerdict = "none";
  storedCopyTrust = "not_asked";
  lastStampMatchedIdentity = null;
  hipaaEvidence = te;
  hipaaSeenUnreadable = !1;
  diskBodyChecksum = null;
  diskConfirmedAtMs = null;
  sessionBodyReceivedAtMs = null;
  diskRefusedAtMs = null;
  hipaaEvidenceLoaded = !1;
  hintedTaints = [];
  hintedDeniedKeys = [];
  hintedEnforcedKeys = [];
  sessionAttributed = !1;
  attributedBearerDigest = null;
  attributedPrincipalIdentity = null;
  unnamedStampSalt = Me();
  tunnelEpochHeard = void 0;
  sessionVerdictDisowned = !1;
  principalRung = "none";
  evidenceRereadForBearer = void 0;
  wifRecordedOrg = void 0;
  wifAccountDiverged = !1;
  wifSourceLocation = void 0;
  wifRecordProfile = void 0;
  oauthPrincipalMemo = null;
  storedLoginAccountAtWire = null;
  storedLoginNotedTokenDigest = null;
  machinePinsSignIn = void 0;
  cacheRevision = 0;
  verdictChanged = De();
  heldStartSignal = De();
  replaceSessionCache(e, n = !1, r = !1) {
    if (this.failOpenVerdict = e !== null && (n || this.failOpenVerdict && (r || e === this.sessionCache)), this.sessionCache = e, e?.core_skills !== void 0) this.lastServedCoreSkills = this.sessionFromServerFetch ? e.core_skills : this.narrowedServedList(e.core_skills);
    if (!r) this.verdictEnvBearerDigest = null;
    if (e === null) this.sessionAttributed = !1, this.attributedBearerDigest = null, this.attributedPrincipalIdentity = null, this.sessionVerdictDisowned = !1, this.evidenceRereadForBearer = void 0;
    this.cacheRevision++;
    let s = bCo(this.effectiveTaints());
    if (le(e?.monitoring_notice ?? null), s) V1();
    this.emitVerdictChanged()
  }
  effectiveTaints(e = this.sessionCache?.compliance_taints ?? []) {
    return this.hintedTaints.length === 0 ? e : L([...this.hintedTaints, ...e]).slice(0, VFt)
  }
  dropHintedTaints() {
    if (this.hintedTaints.length === 0 && this.hintedDeniedKeys.length === 0 && this.hintedEnforcedKeys.length === 0) return;
    if (this.hintedTaints = [], this.hintedDeniedKeys = [], this.hintedEnforcedKeys = [], this.cacheRevision++, bCo(this.effectiveTaints())) V1();
    this.emitVerdictChanged()
  }
  hintFromRefusedBody(e) {
    if (this.sessionCache !== null && this.sessionAttributed) return;
    let n = e.compliance_taints.filter((h) => NRs.some(([m]) => m === h)),
      r = L([...this.hintedTaints, ...n]),
      s = Object.entries(e.restrictions).filter(([h, m]) => m?.allowed === !1 && !N(h)).map(([h]) => h),
      l = L([...this.hintedDeniedKeys, ...s]).slice(0, de),
      f = Object.entries(e.restrictions).filter(([h, m]) => m?.allowed === !0 && N(h)).map(([h]) => h),
      c = L([...this.hintedEnforcedKeys, ...f]).slice(0, de),
      y = !1;
    if (e.core_skills !== void 0) {
      let h = this.narrowedServedList(e.core_skills);
      if (this.lastServedCoreSkills === null || h.join(`
`) !== this.lastServedCoreSkills.join(`
`)) this.lastServedCoreSkills = h, y = !0
    }
    if (!y && r.length === this.hintedTaints.length && l.length === this.hintedDeniedKeys.length && c.length === this.hintedEnforcedKeys.length) return;
    if (this.hintedTaints = r, this.hintedDeniedKeys = l, this.hintedEnforcedKeys = c, this.cacheRevision++, bCo(this.effectiveTaints())) V1();
    this.emitVerdictChanged()
  }
  narrowedServedList(e) {
    let n = new Set(this.lastServedCoreSkills ?? IPr);
    return e.filter((r) => n.has(r))
  }
  emitVerdictChanged() {
    try {
      this.heldStartSignal.emit()
    } catch (e) {
      t(`Policy limits: a held-start listener threw: ${d(e)}`, {
        level: "error"
      })
    }
    if (Tte()) return;
    try {
      this.verdictChanged.emit()
    } catch (e) {
      t(`Policy limits: a verdict-change listener threw: ${d(e)}`, {
        level: "error"
      })
    }
  }
}
var Wca = new W(() => new kqi);

function a() {
  return Wca.of(H().host)
}

function F$n(e) {
  let n = a();
  if (n.sessionFromServerFetch = e !== null, e === null) n.sessionBodyReceivedAtMs = null;
  n.replaceSessionCache(e)
}

function wRs(e) {
  a().sessionBodyReceivedAtMs = e
}

function kRs() {
  return a().sessionBodyReceivedAtMs
}

function LAr(e) {
  let n = a();
  n.sessionFromServerFetch = !1, n.replaceSessionCache(e)
}

function ibo(e) {
  a().verdictEnvBearerDigest = e
}

function qFt() {
  let e = a().verdictEnvBearerDigest;
  if (e === null) return null;
  let n = Tg();
  if (jan() || !n || E2e({
      anthropicAuthEnabled: Qa(),
      oauthScopes: Ln()?.scopes
    }) || $v() != null) return "gone";
  return Hse(n) === e ? "same" : "replaced"
}

function vRs() {
  let e = a();
  e.sessionFromServerFetch = !1, e.sessionBodyReceivedAtMs = null, e.replaceSessionCache(FQe, !0)
}

function urn(e) {
  let n = a(),
    r = n.sessionCache !== null;
  if (!r) n.sessionFromServerFetch = !1, n.sessionAttributed = n.lastStampVerdict === "match", n.attributedBearerDigest = n.sessionAttributed ? ye() : null, n.attributedPrincipalIdentity = n.sessionAttributed ? n.lastStampMatchedIdentity : null, n.sessionVerdictDisowned = n.lastStampVerdict === "disabled", n.evidenceRereadForBearer = void 0, n.sessionBodyReceivedAtMs = null;
  n.replaceSessionCache(e, !1, r)
}

function ERs(e) {
  if (a7i(e)) V1()
}

function abo(e, n, r = !0) {
  let s = a();
  if (s.lastFetchOutcome = e, e === null || e.success) s.settledWithoutVerdictFor = null;
  else if (!e.retrying && (r || !lbo(e))) {
    let l = e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && e.httpStatus !== null && (e.httpStatus === 404 || e.httpStatus >= 500);
    s.settledWithoutVerdictFor = l ? n ?? YFt() ?? "" : null
  }
  s.cacheRevision++, s.emitVerdictChanged()
}

function lbo(e) {
  return e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && (e.httpStatus === null || e.httpStatus >= 500 || e.httpStatus >= 400 && !Ime(e.httpStatus))
}

function fbe() {
  return a().lastFetchOutcome
}

function TRs() {
  a().storageV5 = void 0
}

function ANe() {
  return zF() !== void 0 || q()
}

function NAr() {
  return nH() !== "none"
}

function FAr() {
  return ANe() || a().diskAdoptionSuppressed
}

function mU() {
  return a().sessionCache
}

function H$n() {
  let e = a();
  e.diskAdoptionSuppressed = !0, e.diskAdoptionEpoch++
}

function ugt() {
  return a().diskAdoptionEpoch
}

function HAr() {
  a().diskAdoptionSuppressed = !1
}

function $Ar() {
  return a().diskAdoptionSuppressed
}

function frn() {
  return a().cacheRevision
}

function CRs() {
  return Tte() ? -1 : frn()
}

function xD(e) {
  return a().verdictChanged.subscribe(e)
}

function xNe(e) {
  return a().heldStartSignal.subscribe(e)
}

function XI() {
  return He(Ue(), nbo)
}

function zF() {
  return nOr()
}

function he() {
  let e = a();
  if (e.machinePinsSignIn !== void 0) return e.machinePinsSignIn;
  let n = tzn();
  if (CAe()) e.machinePinsSignIn = n;
  return n
}

function RRs() {
  a().machinePinsSignIn = void 0
}
var $$n = new Set(["prosumer_oauth", "third_party_provider", "custom_base_url"]);

function UAr(e = {}) {
  if (Te() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !zF() && !Ci()) return "custom_base_url";
  return
}

function By() {
  return Sz() === void 0
}

function Sz(e = {}) {
  let n = UAr(e);
  if (n !== void 0) return n;
  if (zF()) return;
  try {
    let {
      key: l
    } = Vx({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (l) return
  } catch {}
  if (Sc()) return;
  if (tsn() && !jan()) return;
  let r = Ln();
  if (!r?.accessToken) return "no_auth";
  if (!r.scopes?.includes(OC)) return "oauth_no_inference_scope";
  let s = SIr(r.subscriptionType ?? null, Jko(r));
  if (s === null) return;
  if (s !== "enterprise" && s !== "team") return he() ? void 0 : "prosumer_oauth";
  return
}

function prn() {
  let e = a();
  if (X() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  if (FAr()) return a().sessionCache;
  if (e.diskRefusedAtMs !== null && Date.now() - e.diskRefusedAtMs < Ve) return null;
  let n = obo();
  if (!e.hipaaEvidenceLoaded && !J0r()) v(n);
  e.storedCopyTrust = "not_asked";
  let r;
  try {
    r = WAr(Fe(XI(), "utf-8"))
  } catch {
    return null
  }
  if (r === null) return null;
  try {
    return dbo(r, sbo(n))
  } catch (s) {
    return t(`Policy limits: cache admission failed (${d(s)}); cold start`, {
      level: "error"
    }), null
  }
}

function dbo(e, n) {
  let r = a();
  if (J0r()) return r.lastStampVerdict = "disabled", r.lastStampMatchedIdentity = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = null, F(e, void 0);
  let s = Jz(pgt(e));
  if (v(n), n.kind === "absent") return r.lastStampVerdict = "legacy", r.lastStampMatchedIdentity = null, r.diskBodyChecksum = s, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = null, F(e, s);
  let l = n.kind === "ok" ? n.stamp : null,
    f = $ee(),
    c = f === null ? "" : sRe(f),
    y = re(l, c, s);
  switch (r.lastStampMatchedIdentity = null, y.kind) {
    case "match":
      r.lastStampVerdict = "match", r.lastStampMatchedIdentity = c, r.diskBodyChecksum = s, r.diskConfirmedAtMs = y.stamp.confirmed_at, r.diskRefusedAtMs = null;
      let h = F(e, s);
      if (h !== null) r.dropHintedTaints();
      return h;
    case "unstamped":
      return r.lastStampVerdict = "torn", r.diskBodyChecksum = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = Date.now(), r.hintFromRefusedBody(e), t("Policy limits: the cache stamp does not vouch for the cached body; cold start (its compliance taints and explicit denials still deny)"), null;
    case "foreign":
      return r.lastStampVerdict = "foreign", r.diskBodyChecksum = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = Date.now(), r.hintFromRefusedBody(e), t("Policy limits: the cache was written under another credential's identity; cold start (its compliance taints and explicit denials still deny until this credential's verdict lands)"), null
  }
}

function F(e, n) {
  let r = a();
  if (!vpe()) return r.storedCopyTrust = "not_asked", e;
  let s, l;
  try {
    l = {
      orgs: dRe()
    }
  } catch (f) {
    t(`Policy limits: the admin organization pin is not known: ${d(f)}`), l = void 0
  }
  if (l === void 0) s = "org_pin_unknown";
  else try {
    let f = Gan({
      kind: "policy-limits",
      cachePath: XI(),
      body: pgt(e),
      bodySha: n ?? Jz(pgt(e)),
      account: Yd(),
      pinnedOrgs: l.orgs,
      nowMs: Date.now(),
      roots: Epe()
    });
    if (f.trusted) return r.storedCopyTrust = f, e;
    s = f.reason
  } catch (f) {
    t(`Policy limits: the gate on a stored copy failed: ${d(f)}`, {
      level: "error"
    }), s = "error"
  }
  return r.storedCopyTrust = {
    trusted: !1,
    reason: s
  }, r.diskBodyChecksum = null, r.diskConfirmedAtMs = null, r.diskRefusedAtMs = Date.now(), r.hintFromRefusedBody(e), t(`Policy limits: the stored copy is not trusted at rest (${s}); cold start (its compliance taints and explicit denials still deny)`), null
}

function $ee() {
  let e = a();
  if (e.principalRung = "none", zF() !== void 0) return e.principalRung = "tunnel", null;
  let n = null,
    r = "none";
  try {
    ({
      key: n,
      source: r
    } = Vx())
  } catch {}
  if (!n && Sc()) {
    if (e.principalRung = "wif", e.wifAccountDiverged) return null;
    let s = OE(),
      l = i.ANTHROPIC_PROFILE,
      f;
    try {
      if (f = (s === "env-quad" ? i.ANTHROPIC_ORGANIZATION_ID?.trim() : YV()?.organizationUuid?.trim()) || "", e.wifSourceLocation === void 0) {
        if (s === "profile-implicit") {
          let m = EH();
          e.wifRecordProfile = m === null ? void 0 : DHe(m)
        } else if (s === "profile-explicit") e.wifRecordProfile = l;
        e.wifSourceLocation = z(s)
      }
    } catch (m) {
      return t(`Policy limits: WIF profile unreadable (${d(m)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0, null
    }
    if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = f.toLowerCase() || null;
    else if (e.wifRecordedOrg !== (f.toLowerCase() || null)) return t("Policy limits: the WIF source now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = !0, null;
    if (!f) return null;
    let c = s === "env-quad" ? null : EH(),
      y = s === "env-quad" ? z("env-quad") : l ? j(c, l) : void 0;
    if (s === "profile-implicit" && l !== void 0 && l !== e.wifRecordProfile || s === "profile-explicit" && (l === void 0 || l !== e.wifRecordProfile) || y !== void 0 && y !== e.wifSourceLocation || y === void 0 && s !== "env-quad" && e.wifSourceLocation !== void 0 && (c === null ? e.wifSourceLocation !== "" : !e.wifSourceLocation.startsWith(j(c, "")))) return t("Policy limits: the environment now selects a different WIF source than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = !0, null;
    let h = Nt(f);
    if (h) return O(h);
    return {
      kind: "wif",
      descriptor: `wif:${Hse([e.wifSourceLocation,f.toLowerCase()].join("\x00"))}`
    }
  }
  if (Rt()) {
    let s = Ln()?.accessToken;
    if (s) return e.principalRung = "oauth", ze(s)
  }
  if (r === "apiKeyHelper") return e.principalRung = "helper", null;
  if (n) return e.principalRung = "key", {
    kind: "key",
    descriptor: `key:${Hse(n)}`
  };
  return null
}

function ARs() {
  let e = a();
  if (e.wifAccountDiverged || $v() || !Sc()) return;
  let n;
  try {
    n = e.wifSourceLocation !== void 0 && z(OE()) !== e.wifSourceLocation
  } catch (s) {
    t(`Policy limits: WIF profile selection unreadable (${d(s)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0;
    return
  }
  if (n) {
    e.wifAccountDiverged = !0, t("Policy limits: the active WIF source moved since this process derived its principal; its policy verdicts are session-only until restart");
    return
  }
  let r;
  try {
    if (OE() === "env-quad") r = i.ANTHROPIC_ORGANIZATION_ID?.trim().toLowerCase() || null;
    else Yln(), r = YV()?.organizationUuid?.trim().toLowerCase() ?? null
  } catch (s) {
    t(`Policy limits: WIF account record unreadable (${d(s)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0;
    return
  }
  if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = r;
  else if (e.wifRecordedOrg !== r) e.wifAccountDiverged = !0, t("Policy limits: the WIF profile now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart")
}

function mwa() {
  let e = a();
  try {
    if ($v() || !Sc() || OE() === "env-quad") return "not_in_use";
    let n = EH(),
      r = n === null ? void 0 : txo(n, e.wifRecordProfile ?? $Gn(n));
    if (r === void 0) return "unreadable";
    let s = ue(YV()),
      l = e.wifRecordedOrg === void 0 ? s : e.wifRecordedOrg;
    if (ue(r) !== l) return "moved";
    return s === l ? "same" : "memory_differs"
  } catch {
    return "unreadable"
  }
}

function ue(e) {
  let n = e?.organizationUuid;
  return typeof n === "string" ? n.trim().toLowerCase() || null : null
}
async function cbo(e, n) {
  let r = Ln()?.accessToken;
  if (!r) return;
  let s = a(),
    l = await Tm(n);
  if (l !== "store") {
    if (l !== "none") s.storedLoginNotedTokenDigest = Hse(r);
    return
  }
  let f = await IOs(e),
    c = Ln()?.accessToken;
  if (!c) return;
  s.storedLoginNotedTokenDigest = Hse(c), s.storedLoginAccountAtWire = {
    tokenDigest: Hse(c),
    organizationUuid: c === r ? f : null
  }
}

function ubo() {
  let e = Ln()?.accessToken;
  if (!e) return !1;
  let n = a(),
    r = Hse(e);
  if (n.storedLoginNotedTokenDigest !== r) return !0;
  let s = n.storedLoginAccountAtWire;
  return s !== null && s.tokenDigest === r && s.organizationUuid !== (Nt(Yd()?.organizationUuid) ?? null)
}

function ze(e) {
  let n = a(),
    r = Yd(),
    s = Nt(i.CLAUDE_CODE_ORGANIZATION_UUID),
    l = Hse(e),
    f = n.storedLoginAccountAtWire,
    c = f !== null && f.tokenDigest === l ? f.organizationUuid : void 0,
    y = [l, s ?? "", r?.organizationUuid ?? "", c === void 0 ? "" : `fresh:${c??"-"}`, i.CLAUDE_CODE_OAUTH_TOKEN ? "env" : ""].join("|"),
    h = n.oauthPrincipalMemo;
  if (h?.key === y && (h.expiresAtMs === null || Date.now() < h.expiresAtMs)) return h.principal;
  let m = {
      kind: "token",
      descriptor: `token:${l}`
    },
    R = !1,
    g = kE();
  switch (g) {
    case "store": {
      let P = Nt(r?.organizationUuid) ?? null;
      if (c !== void 0 && c !== P) m = {
        kind: "token",
        descriptor: `token:${l}`,
        unclassified: !0
      };
      else if (P) m = O(P);
      else m = {
        kind: "token",
        descriptor: `token:${l}`,
        storedLoginOrgless: !0
      };
      break
    }
    case "env":
    case "fd":
      if (g === "fd" && JA() && !md()) {
        let P = Nt(i2s()),
          ve = Nt(r?.organizationUuid);
        m = P !== null && P.toLowerCase() === ve?.toLowerCase() ? {
          ...O(P),
          admitsOnly: !0
        } : null, R = !0
      } else if (s) m = {
        ...O(s),
        bearerDigest: l
      };
      break;
    case "none":
      m = {
        kind: "token",
        descriptor: `token:${l}`,
        unclassified: !0
      };
      break
  }
  return n.oauthPrincipalMemo = {
    key: y,
    principal: m,
    daemonSnapshotWorker: R,
    expiresAtMs: g === "none" || m === null ? Date.now() + rbo : null
  }, m
}

function O(e) {
  return {
    kind: "org",
    descriptor: `org:${e.toLowerCase()}`
  }
}

function fbo(e) {
  let n = a();
  n.sessionAttributed = !0, n.attributedBearerDigest = ye();
  try {
    n.attributedPrincipalIdentity = YFt() ?? e ?? be()
  } catch (r) {
    t(`Policy limits: principal unreadable at attribution (${d(r)})`, {
      level: "error"
    }), n.attributedPrincipalIdentity = g0r
  }
  n.sessionVerdictDisowned = !1, n.evidenceRereadForBearer = void 0, n.dropHintedTaints()
}

function Y() {
  let e = Ln()?.accessToken;
  return e ? Hse(e) : null
}

function ye() {
  let e = a();
  try {
    $ee()
  } catch {
    return null
  }
  return e.principalRung === "oauth" ? Y() : null
}

function mrn() {
  let e = a(),
    n = !e.sessionVerdictDisowned;
  if (e.sessionAttributed = !1, e.attributedBearerDigest = null, e.attributedPrincipalIdentity = null, e.sessionVerdictDisowned = !0, e.evidenceRereadForBearer = void 0, n) e.cacheRevision++, e.emitVerdictChanged()
}

function YFt() {
  let e = $ee();
  return e === null ? null : sRe(e)
}

function pbo() {
  let e = a().storedCopyTrust;
  return e === "not_asked" ? e : IBt(e)
}

function xRs() {
  return ctt(a().storedCopyTrust)
}

function BAr() {
  return a().lastStampVerdict
}

function PRs() {
  return a().lastStampMatchedIdentity
}

function mbo() {
  let e = a();
  if (!e.hipaaEvidenceLoaded) v(ge());
  return e.hipaaEvidence
}

function v(e) {
  let n = a();
  if (n.hipaaEvidenceLoaded = !DAr(e), e.kind === "ok") n.hipaaEvidence = N$n(e.stamp);
  else if (e.kind === "unusable" && !DAr(e)) n.hipaaSeenUnreadable = !0
}

function ge() {
  return ANe() ? fe : w(XI())
}

function jAr() {
  return a().hipaaEvidence
}

function ORs() {
  let e;
  try {
    e = $ee()
  } catch (s) {
    t(`Policy limits: principal unreadable for the evidence tier (${d(s)}); judged on the machine's evidence`, {
      level: "error"
    }), e = {
      kind: "token",
      descriptor: "token:unreadable",
      unclassified: !0
    }
  }
  if (e === null || e.admitsOnly === !0) {
    let s = a().oauthPrincipalMemo;
    if (e === null && (!s?.daemonSnapshotWorker || s.principal !== null)) return !1;
    let l = mbo();
    return l.seen.length > 0 || l.incomplete
  }
  let n = mbo();
  if (G(e)) {
    let s = e.storedLoginOrgless === !0 && e.unclassified !== !0 && n.ruledOut.includes(sRe(e));
    return n.seen.length > 0 || n.incomplete && !s
  }
  let r = sRe(e);
  return n.seen.includes(r) || n.incomplete && !n.ruledOut.includes(r)
}

function G(e) {
  return e.unclassified === !0 || e.storedLoginOrgless === !0
}

function hbo(e, n, r) {
  let s = a();
  s.diskBodyChecksum = e, s.diskConfirmedAtMs = r, s.hipaaEvidence = n, s.hipaaEvidenceLoaded = !0, s.diskRefusedAtMs = null
}

function fgt(e) {
  let n = a(),
    {
      hipaaEvidence: r,
      hipaaSeenUnreadable: s
    } = n;
  if (v(e), s !== n.hipaaSeenUnreadable || !Ke(r, n.hipaaEvidence)) n.cacheRevision++, n.emitVerdictChanged()
}

function Ke(e, n) {
  return e.incomplete === n.incomplete && e.seen.length === n.seen.length && e.seen.every((r, s) => r === n.seen[s]) && e.ruledOut.length === n.ruledOut.length && e.ruledOut.every((r, s) => r === n.ruledOut[s])
}

function IRs() {
  return a().diskBodyChecksum
}

function MRs() {
  return a().diskConfirmedAtMs
}

function hrn() {
  let e = a();
  e.diskBodyChecksum = null, e.diskConfirmedAtMs = null, e.diskRefusedAtMs = null, e.hipaaEvidenceLoaded = !1, e.lastStampVerdict = "none", e.lastStampMatchedIdentity = null, e.storedCopyTrust = "not_asked", e.dropHintedTaints()
}

function WAr(e) {
  let n = U$n(et(e, !1));
  return n.success ? n.data : null
}
var _e = new WeakMap;

function U$n(e) {
  let n = ce().safeParse(e);
  if (n.success) _e.set(n.data, e);
  return n
}

function pgt(e) {
  return _e.get(e) ?? e
}

function gbo(e, n) {
  let r = a();
  if (r.storageV5 = e, n !== null && r.sessionCache === null && !r.diskAdoptionSuppressed) urn(n)
}
var DRs = {
  allow_product_feedback: {
    deniedUnder: ["hipaa", "zdr"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Feedback",
    verb: "is",
    requirementId: "HIPAA-R1"
  },
  allow_web_fetch: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Web fetch",
    verb: "is",
    requirementId: "HIPAA-R3"
  },
  allow_memory_sync: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "allow",
    label: "Memory sync",
    verb: "is",
    requirementId: "HIPAA-R5",
    hardBlockUnder: ["hipaa"]
  },
  allow_design_sync: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "Design sync",
    verb: "is",
    requirementId: "HIPAA-R9"
  },
  allow_connector_file_downloads: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Downloading files from claude.ai connectors",
    verb: "is",
    requirementId: "HIPAA-R114"
  },
  allow_channels: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Channels",
    verb: "are",
    requirementId: "HIPAA-R71"
  },
  ...{},
  allow_projects_tool: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Projects",
    verb: "are",
    requirementId: "HIPAA-R17",
    hardBlockUnder: ["hipaa"]
  },
  allow_claude_browser_extension: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Claude in Chrome",
    verb: "is",
    requirementId: "HIPAA-R34"
  },
  allow_chrome_tab_group_title: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Chrome tab group titles",
    verb: "are",
    requirementId: "HIPAA-R113"
  },
  allow_remote_sessions: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Cloud sessions",
    verb: "are",
    requirementId: "HIPAA-R6"
  },
  allow_remote_control: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Remote Control",
    verb: "is",
    requirementId: "HIPAA-R6"
  },
  allow_cobalt_plinth: {
    deniedUnder: ["hipaa", "zdr"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Artifacts",
    verb: "are",
    requirementId: "HIPAA-R16"
  },
  allow_team_onboarding: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Team onboarding",
    verb: "is",
    requirementId: "HIPAA-R13",
    hardBlockUnder: ["hipaa"]
  },
  allow_error_reporting: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Error reporting",
    verb: "is",
    requirementId: "HIPAA-R19"
  },
  allow_auto_mode_sibling_docs: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Repository lookups",
    verb: "are",
    requirementId: "HIPAA-R36"
  },
  allow_repo_visibility_probe: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Repository visibility checks",
    verb: "are",
    requirementId: "HIPAA-R36"
  },
  allow_send_file: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "File upload",
    verb: "is",
    requirementId: "HIPAA-R37"
  },
  allow_drive_file_references: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "File references for connectors",
    verb: "are",
    requirementId: "HIPAA-R87"
  },
  allow_connector_file_uploads: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Sending files to claude.ai connectors",
    verb: "is",
    requirementId: "HIPAA-R103"
  },
  allow_gmail_file_references: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "File references for connectors",
    verb: "are",
    requirementId: "HIPAA-R106"
  },
  allow_heap_dump: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Heap dumps",
    verb: "are",
    requirementId: "HIPAA-R38"
  },
  allow_local_checkpoint_commit: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Usage-limit checkpoints",
    verb: "are",
    requirementId: "HIPAA-R39"
  },
  allow_plugin_skill_search: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Plugin and skill search",
    verb: "is",
    requirementId: "HIPAA-R26"
  },
  allow_plugin_directory_search: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "The plugin directory",
    verb: "is",
    requirementId: "HIPAA-R35"
  },
  allow_connector_suggest: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Connector suggestions",
    verb: "are",
    requirementId: "HIPAA-R43"
  },
  ...{
    allow_mcp_task_worker_wake: {
      deniedUnder: ["hipaa"],
      onCacheMiss: "deny",
      label: "Restarting a worker for a background task",
      verb: "is",
      requirementId: "HIPAA-R57"
    }
  },
  allow_plugin_publish: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Publishing a plugin from Claude Code",
    verb: "is",
    requirementId: "HIPAA-R72"
  },
  ...{},
  allow_account_skills_sync: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account skills sync",
    verb: "is",
    requirementId: "HIPAA-R29"
  },
  allow_account_plugins_sync: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account plugins sync",
    verb: "is",
    requirementId: "HIPAA-R30"
  },
  allow_bundled_skills: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "Bundled skills",
    verb: "are",
    requirementId: "HIPAA-R56"
  },
  allow_mycelium: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Peer messaging",
    verb: "is",
    requirementId: "HIPAA-R25",
    hardBlockUnder: ["hipaa"]
  },
  ...{},
  allow_usage_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage patterns",
    verb: "are",
    requirementId: "HIPAA-R31"
  },
  allow_skill_doctor_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Skill token counts",
    verb: "are",
    requirementId: "HIPAA-R32"
  },
  allow_insights: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Insights",
    verb: "are",
    requirementId: "HIPAA-R40"
  },
  allow_stats_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage stats",
    verb: "are",
    requirementId: "HIPAA-R42"
  },
  ...{},
  allow_model_catalog: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "The model catalog",
    verb: "is",
    requirementId: "HIPAA-R33"
  },
  allow_container_result_files: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Saving large tool results in the tool container",
    verb: "is",
    requirementId: "HIPAA-R53"
  },
  allow_promo_offers: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Promotional offers",
    verb: "are",
    requirementId: "HIPAA-R54"
  },
  allow_previous_conversation_pointer: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Linking a new conversation to the one it replaces",
    verb: "is",
    requirementId: "HIPAA-R58"
  },
  allow_api_auth_warm: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Warming the API credential cache",
    verb: "is",
    requirementId: "HIPAA-R59"
  },
  allow_cache_keepalive: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Renewing the prompt cache lifetime",
    verb: "is",
    requirementId: "HIPAA-R65"
  }
};

function LRs(e) {
  return Object.hasOwn(DRs, e)
}

function XFt(e) {
  return LRs(e) ? DRs[e] : void 0
}
var pe = new Set(["hipaa"]);

function zca(e) {
  return XFt(e)?.serverPopulated === !0 && !wQi()
}

function vqi(e) {
  return XFt(e)?.transcriptScan === !0 && !EQi()
}

function A() {
  return Object.keys(DRs).filter(LRs)
}

function $se(e) {
  let n = XFt(e);
  return {
    featureLabel: n?.label ?? e,
    verb: n?.verb ?? "is"
  }
}
var NRs = A().flatMap((e) => (XFt(e)?.deniedUnder ?? []).map((n) => [n, e])),
  Gca = A().flatMap((e) => (XFt(e)?.hardBlockUnder ?? []).map((n) => [n, e])),
  Vca = new Set(A().filter((e) => XFt(e)?.onCacheMiss !== "allow")),
  FRs = new Set(A().filter((e) => XFt(e)?.onCacheMiss === "hold")),
  Eqi = new Set(A().filter((e) => XFt(e)?.onFailOpenVerdict === "deny")),
  qe = new Set(["allow_product_feedback"]),
  Pe = new Set(["allow_web_fetch", "allow_design_sync", "allow_channels", ...[]]);

function B$n(e) {
  let n = We(e);
  return Kca(e) || n
}

function Kca(e) {
  if (!Pe.has(e) || vQi() || !By()) return !1;
  let n = a();
  if (n.sessionCache !== null && !n.failOpenVerdict && !n.sessionVerdictDisowned) return !1;
  let r;
  try {
    $ee(), r = n.principalRung
  } catch {
    return !0
  }
  if (r === "wif" && Rt()) return !0;
  if (r === "none" && Tg() !== void 0 && jan()) return !1;
  return r === "oauth" || r === "tunnel" || r === "none"
}

function We(e) {
  if (!Pe.has(e) || !By() || kQi()) return !1;
  let n = a();
  if (n.sessionCache !== null && n.sessionAttributed) {
    let r = Y();
    if (r !== null && r === n.attributedBearerDigest) return !1;
    if (n.evidenceRereadForBearer !== r) n.evidenceRereadForBearer = r, n.hipaaEvidenceLoaded = !1;
    let s = mbo();
    if (s.seen.length === 0 && !s.incomplete || !je()) return !1
  }
  return ORs()
}

function je() {
  try {
    let e = $ee();
    return e !== null && G(e)
  } catch {
    return !0
  }
}

function gn(e) {
  return !J(e) && Se(e)
}

function HRs(e) {
  return J(e) && Se(e)
}

function Se(e) {
  let n = Nv();
  if (vqi(e)) {
    let r = n?.restrictions[e];
    if (r) return r.allowed;
    return !(By() && a().hintedDeniedKeys.includes(e))
  }
  if (!n) {
    if (Vca.has(e)) {
      if (By() && !(FRs.has(e) && w2e() && !HQe())) return !1;
      if (qe.has(e) && St() && !(e === "allow_product_feedback" && npe())) return !1
    }
    if (D(e, SCo())) return !1;
    if (B$n(e)) return !1;
    let r = a();
    if (r.hintedDeniedKeys.length === 0 && r.hintedTaints.length === 0) return !0;
    if (!By()) return !0;
    if (r.hintedDeniedKeys.includes(e)) return !1;
    return mgt({
      restrictions: {},
      compliance_taints: []
    }, e, r.hintedTaints)
  }
  if (FRs.has(e) && wE() && !(w2e() && !HQe())) return !1;
  if (Eqi.has(e) && wE()) return !1;
  if (B$n(e)) return !1;
  return !Ce(e, n)
}

function J(e) {
  if (e !== "allow_product_feedback") return !1;
  let n = a(),
    r = n.feedbackRefusal;
  if (r === null || Te() !== "firstParty") return !1;
  if (n.sessionFromServerFetch && n.sessionCache?.restrictions[e]?.allowed === !0) return !1;
  let s = Date.now() - r.at;
  return s >= 0 && s < Be && r.principal === zAr()
}

function zAr() {
  try {
    return YFt()
  } catch (e) {
    return t(`Policy limits: no principal for the feedback refusal: ${d(e)}`, {
      level: "error"
    }), null
  }
}

function $Rs(e) {
  a().feedbackRefusal = e
}

function URs(e) {
  if (e === null || e !== zAr()) return null;
  let n = {
      principal: e,
      at: Date.now()
    },
    r = a();
  return r.feedbackRefusal = n, r.cacheRevision++, r.emitVerdictChanged(), n
}

function Ce(e, n) {
  let r = a();
  if (n.restrictions[e] === void 0 && r.hintedDeniedKeys.includes(e)) return !0;
  let s = r.sessionFromServerFetch;
  return !mgt({
    restrictions: n.restrictions,
    compliance_taints: s ? n.compliance_taints : []
  }, e, [...SCo(), ...r.hintedTaints, ...s ? [] : n.compliance_taints])
}

function mgt(e, n, r = []) {
  let s = e.compliance_taints;
  if (Gca.some(([c, y]) => y === n && (s.includes(c) || r.includes(c)))) return !1;
  let l = e.restrictions[n];
  if (l) return l.allowed;
  if (vqi(n)) return !0;
  let f = zca(n) ? [...r.filter((c) => !(pe.has(c) && s.includes(c))), ...s.filter((c) => !pe.has(c))] : [...r, ...s];
  return !D(n, f)
}

function BRs(e) {
  if (e.compliance_taints.some((n) => NRs.some(([r]) => r === n))) return !1;
  if (Object.keys(e.defaults ?? {}).length > 0 || e.monitoring_notice !== null && e.monitoring_notice !== void 0 || e.artifact_create_notice !== null && e.artifact_create_notice !== void 0) return !1;
  return Object.entries(e.restrictions).every(([n, r]) => N(n) ? r?.allowed !== !0 : r?.allowed !== !1)
}

function N(e) {
  return e.startsWith("enforce_") || e.startsWith("require_")
}

function D(e, n) {
  if (n.length === 0) return !1;
  for (let [r, s] of NRs)
    if (s === e && n.includes(r)) return !0;
  return !1
}
c7i({
  isPolicyAllowed: (e) => gn(e),
  isPolicyEnforced: (e) => Xca(e),
  commandPolicyGateAllows: (e) => Yca(e),
  policyDenyKind: (e) => xd(e),
  policyDeniedReason: (e, n, r) => dp(e, n, r),
  complianceTaintsSettled: () => bbo(),
  policyLimitsCacheLoaded: () => Use(),
  autoDefaultVerdictState: () => qca(),
  policyVerdictAbsent: () => wE(),
  sessionVerdictUnattributed: () => ybo(),
  rowPrincipalStamp: () => GAr(),
  rowOfAnotherPrincipal: (e) => Tqi(e),
  principalSeenUnderHipaa: () => ORs(),
  coreSkills: () => Jca(),
  rememberedCoreSkills: () => Qca()
});

function qca() {
  if (!wE()) return "loaded";
  if (w2e()) return $e() ? "unobtainable_seen_hipaa" : "unobtainable";
  return "pending"
}

function $e() {
  let e;
  try {
    e = $ee()
  } catch {
    return !1
  }
  if (e === null || G(e)) return !1;
  return mbo().seen.includes(sRe(e))
}

function Yca(e) {
  if (!LRs(e)) return t(`[policy] policyGate names unknown policy key "${e}"; denying`, {
    level: "warn"
  }), !1;
  return gn(e)
}

function wE() {
  if (!By()) return !1;
  return Nv() === null || a().failOpenVerdict
}

function FX() {
  return Nv() !== null && a().sessionFromServerFetch
}

function ybo() {
  if (!By()) return !1;
  let e = a();
  if (!e.sessionAttributed) return !0;
  let n = qFt();
  if (n === "replaced" || n === "gone") return !0;
  if (e.attributedBearerDigest !== null && Y() !== e.attributedBearerDigest && ubo()) return !0;
  if (zF() !== void 0) return !1;
  try {
    return Tqi(e.attributedPrincipalIdentity)
  } catch (r) {
    return t(`Policy limits: principal unreadable for attribution (${d(r)}); held as unattributed`, {
      level: "error"
    }), !0
  }
}

function be() {
  let e = a();
  if (e.principalRung === "tunnel") return `tunnel:${e.tunnelEpochHeard??"unheard"}`;
  let n = Ye() || UAr();
  return n ? Ge(n) : g0r
}

function Ye() {
  let e = a();
  if (e.principalRung === "wif") {
    let s = e.wifAccountDiverged ? void 0 : TUs();
    return s && [s.organizationId, s.federationRuleId, s.workspaceId ?? ""].join("\x00")
  }
  let n = Ln(),
    r = Tg();
  return e.principalRung === "helper" ? Vx().key : r && !E2e({
    anthropicAuthEnabled: Qa(),
    oauthScopes: n?.scopes
  }) ? r : n?.accessToken
}

function Ge(e) {
  return Hse(`${a().unnamedStampSalt}:${Hse(e)}`)
}

function GAr() {
  return YFt() ?? be()
}

function Tqi(e) {
  return e === g0r || GAr() !== e
}

function _bo(e) {
  a().tunnelEpochHeard = e
}

function hgt() {
  return a().sessionVerdictDisowned
}

function w2e() {
  if (!wE()) return !1;
  let e = a();
  if (e.settledWithoutVerdictFor === null) return !1;
  let n;
  try {
    n = YFt()
  } catch {
    return !1
  }
  return e.settledWithoutVerdictFor === (n ?? "")
}

function HQe() {
  let e;
  try {
    e = $ee()
  } catch {
    return !0
  }
  if (e === null || e.unclassified || e.admitsOnly) return !0;
  let n = a();
  if (!n.hipaaSeenUnreadable) v(ge());
  let r = ORs();
  return n.hipaaSeenUnreadable || !n.hipaaEvidenceLoaded || r
}

function iRe() {
  if (!By() || Nv() !== null || NAr()) return !1;
  return V()
}

function V() {
  let e = a().lastFetchOutcome;
  return e !== null && !e.success && e.httpStatus === 404
}

function dp(e, n, r, s) {
  if (gn(e)) return null;
  if (iRe()) return UUt(n);
  switch (xd(e)) {
    case "route_missing":
      return UUt(n);
    case "cache_miss":
      return yAe(n);
    case "latched":
      return oKe(n, r);
    case "org_denied":
    case null:
      return dan(n, r, Die(), s)
  }
}

function jRs() {
  return mpe(JD()).length > 0
}

function xd(e) {
  if (gn(e)) return null;
  if (J(e)) return "org_denied";
  if (VAr(e)) return "latched";
  let n = Nv();
  if (n !== null) {
    if ((FRs.has(e) || Eqi.has(e) && !Ce(e, n)) && wE()) return V() ? "route_missing" : "cache_miss";
    if (!B$n(e)) return "org_denied";
    return V() && !NAr() ? "route_missing" : "cache_miss"
  }
  return iRe() ? "route_missing" : "cache_miss"
}

function VAr(e) {
  if (!D(e, SCo()) || D(e, Die())) return !1;
  if (Nv() === null) return !0;
  return Z()?.[e]?.allowed !== !1
}

function WRs(e) {
  let n = xd(e);
  if (n === null) return null;
  if (iRe()) return I0s();
  switch (n) {
    case "route_missing":
      return I0s();
    case "cache_miss":
      return $Ji();
    case "latched":
      return HJi();
    case "org_denied":
      return VDr(Die())
  }
}

function bbo() {
  let e = qFt();
  if (e !== null && e !== "same") return !1;
  if (aT() || nUt() || !Yc() || Te() !== "firstParty" || i.ANTHROPIC_UNIX_SOCKET !== void 0 || uh() !== void 0 || Tg() !== void 0 && !E2e({
      anthropicAuthEnabled: Qa(),
      oauthScopes: Ln()?.scopes
    }) && !(e === "same" && Nv() !== null)) return !1;
  if (Nv() !== null) return !0;
  let n = Ln();
  return (n?.subscriptionType === "pro" || n?.subscriptionType === "max") && n.scopes?.includes(OC) === !0 && kE() === "store" && !he() && !Nr() && !Wm({
    skipRetrievingKeyFromApiKeyHelper: !0
  }).key && !Sc()
}

function k2e(e) {
  if (!By()) return !1;
  let n = a();
  return n.hintedDeniedKeys.includes(e) || !mgt({
    restrictions: {},
    compliance_taints: []
  }, e, n.hintedTaints)
}

function Xca(e) {
  return Z()?.[e]?.allowed === !0
}

function JFt(e) {
  let n = Z();
  if (n?.[e]?.allowed === !0) return !0;
  let r = a();
  return r.hintedEnforcedKeys.includes(e) && n?.[e] === void 0 && (n === null || !r.sessionAttributed) && By()
}

function zRs(e) {
  let n = Nv()?.defaults[e];
  return typeof n === "boolean" ? n : void 0
}

function Jca() {
  return Nv()?.core_skills ?? []
}

function QFt() {
  return (Nv() ?? a().sessionCache)?.artifact_create_notice?.text ?? null
}

function Qca() {
  if (!By()) return [];
  return Nv()?.core_skills ?? a().lastServedCoreSkills
}

function GRs() {
  a().lastServedCoreSkills = null
}

function Nv() {
  if (!By()) return null;
  let e = a();
  if (e.sessionCache) return e.sessionCache;
  if (e.diskAdoptionSuppressed) return null;
  let n = prn();
  if (n) return urn(n), n;
  return null
}

function Use() {
  if (!By()) return !0;
  return Nv() !== null
}

function Z() {
  return Nv()?.restrictions ?? null
}

function z(e) {
  if (e === "env-quad") return i.ANTHROPIC_FEDERATION_RULE_ID?.trim() ?? "";
  let n = EH();
  return n === null || e === null ? "" : j(n, $Gn(n))
}

function j(e, n) {
  return e === null ? "" : `${Ne(e)}\x00${n}`
}
export {
  oRe,
  VFt,
  Q_o,
  FQe,
  gqi,
  yqi,
  IAr,
  _qi,
  MAr,
  dgt,
  sRe,
  Hse,
  N$n,
  Z_o,
  DAr,
  cgt,
  bRs,
  bqi,
  ebo,
  tbo,
  Sqi,
  KFt,
  wqi,
  SRs,
  nbo,
  rbo,
  obo,
  sbo,
  kqi,
  Wca,
  F$n,
  wRs,
  kRs,
  LAr,
  ibo,
  qFt,
  vRs,
  urn,
  ERs,
  abo,
  lbo,
  fbe,
  TRs,
  ANe,
  NAr,
  FAr,
  mU,
  H$n,
  ugt,
  HAr,
  $Ar,
  frn,
  CRs,
  xD,
  xNe,
  XI,
  zF,
  RRs,
  $$n,
  UAr,
  By,
  Sz,
  prn,
  dbo,
  $ee,
  ARs,
  mwa,
  cbo,
  ubo,
  fbo,
  mrn,
  YFt,
  pbo,
  xRs,
  BAr,
  PRs,
  mbo,
  jAr,
  ORs,
  hbo,
  fgt,
  IRs,
  MRs,
  hrn,
  WAr,
  U$n,
  pgt,
  gbo,
  DRs,
  LRs,
  XFt,
  zca,
  vqi,
  $se,
  NRs,
  Gca,
  Vca,
  FRs,
  Eqi,
  B$n,
  Kca,
  gn,
  HRs,
  zAr,
  $Rs,
  URs,
  mgt,
  BRs,
  qca,
  Yca,
  wE,
  FX,
  ybo,
  GAr,
  Tqi,
  _bo,
  hgt,
  w2e,
  HQe,
  iRe,
  dp,
  jRs,
  xd,
  VAr,
  WRs,
  bbo,
  k2e,
  Xca,
  JFt,
  zRs,
  Jca,
  QFt,
  Qca,
  GRs,
  Nv,
  Use
};
