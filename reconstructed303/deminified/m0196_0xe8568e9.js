// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ws, Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { S4, u8n, u5, _qs, bqs, Sqs, vBt, wqs, p5, o$r, sTe, fze, s$r, WQe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { F, L, j, o1, Br, pP, de, Eg, XTe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { d, k, G, Sye } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe, wr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { IA } from "B:/~BUN/root/chunk-jpdys232.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, hI, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { xe, xi, bp, UQe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { KC, Yzs } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { An } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { t_t, xun } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { YBs, G4n, qG, qH, fd, y$t, pc, Sl, Xb, Cw, Mp, YE, Fm, Fn, zC, Kg, x0o, Et, np, HLr, JE } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { fv, y1t, E5, mTe, D9n, oL } from "B:/~BUN/root/chunk-pej55jax.js";
import { gHr, sVs, zD, Wge, hHr, lVs } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { IUt, IMe, Age, tyt, P3n, UGs, BGs, YLo } from "B:/~BUN/root/chunk-qp0344nb.js";
import { M2s } from "B:/~BUN/root/chunk-5g9fghtv.js";
import { GX } from "B:/~BUN/root/chunk-mbz8rhex.js";
import { yIe } from "B:/~BUN/root/chunk-r0sre1ss.js";
import { U4n } from "B:/~BUN/root/chunk-edng3c86.js";
import { Fdn } from "B:/~BUN/root/chunk-4qc55bxf.js";
import { Gte } from "B:/~BUN/root/chunk-cqw1xaqm.js";
import { fr } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { HEe } from "B:/~BUN/root/chunk-dq3y90rd.js";
import { o, v, M, oe, T, u, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Us } from "B:/~BUN/root/chunk-t7350kw8.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
import { readFileSync as tt } from "fs";
import { join as nt, resolve as it } from "path";
function Ve(e) {
  return pP(e) || Fdn(e?.jwt ?? a.ANTHROPIC_AUTH_TOKEN) || YBs();
}
var Be = ["harness", "user", "project", "local", "flag", "managed", "admin_default"],
  ze = /^claude_proj_(?:staging_|local_)?01[1-9A-HJ-NP-Za-km-z]{22}$/;
function QPo(e, n, i, r, l, p, c) {
  let m = xe();
  if (!(c?.ignoreEnvOptOut === !0 && se()) && ae()) return "";
  let y = `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}.${e}`,
    P = XTe() ?? process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
    g = m === "firstParty" && xi() || m === "vertex" ? " cch=00000;" : "",
    S = HLr(),
    we = S ? ` cc_workload=${S};` : "",
    Oe = JE(n) && !n.isMainSession ? " cc_is_subagent=true;" : "",
    De = i !== void 0 && /^req_[A-Za-z0-9_-]{1,36}$/.test(i) && m === "firstParty" && xi() ? ` cc_prev_req=${i};` : "",
    Le = r !== void 0 && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r) && m === "firstParty" && xi() ? ` cc_prompt_id=${r};` : "",
    He = typeof l === "string" && /^[a-z][a-z_]{0,31}$/.test(l) && m === "firstParty" && xi() ? ` cc_turn_origin=${l};` : "",
    Q = p?.promptIndex,
    ee = p?.turnIndex,
    Ne = re(Q, 0) && re(ee, 1) && m === "firstParty" && xi() ? ` cc_prompt_index=${Q}; cc_turn_index=${ee};` : "",
    I = m === "gateway" ? Br() : null,
    te = (m === "gateway" || UQe() !== void 0) && Ve(I),
    D = I?.url ?? a.ANTHROPIC_BASE_URL,
    Ue = D !== void 0 && (!URL.canParse(D) || G4n(qG(new URL(D)))) || I?.hostVerdict !== void 0 && "vouched" in I.hostVerdict,
    Fe = (m === "gateway" || te) && !Ue ? ` cc_gateway=${te ? "1" : "env"};` : "",
    A = c?.attributionProject,
    Ke = A !== void 0 && ze.test(A.taggedId) && $e.has(A.source) && qe() ? ` cc_project=${A.taggedId}; cc_project_src=${A.source};` : "",
    ie = `x-anthropic-billing-header: cc_version=${y}; cc_entrypoint=${P};${g}${we}${Oe}${De}${Le}${He}${Ne}${Fe}${Ke}`;
  return t(`attribution header ${ie}`), ie;
}
function vKn(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(IA));
}
function yUs(e) {
  if (e.isSubscriber) return {
    apiKey: null,
    authToken: e.oauthAccessToken ?? null
  };
  return {
    apiKey: e.apiKey,
    authToken: null
  };
}
function re(e, n) {
  return typeof e === "number" && Number.isInteger(e) && e >= n && e <= 1e7;
}
function se() {
  return xe() === "firstParty" && bp() && !a.ANTHROPIC_UNIX_SOCKET;
}
function qe() {
  return se() && !a.CLAUDE_CODE_REMOTE && !ae();
}
function ae() {
  return ws(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER);
}
var $e = new Set(Be);
function fXe() {
  if (xl()) return "tool_container_daemon";
  if (Eg()) return "ccs_tenant";
  return fr() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) ? "hosted_worker" : "none";
}
import { createHash as We } from "crypto";
import { constants as Ye } from "fs";
import { unlink as Ge, open as Je } from "fs/promises";
var b = 8,
  le = 4096,
  Xe = ".stamp.json",
  ce = f(() => u({
    v: C(1),
    identity: o().regex(/^[0-9a-f]{64}$/),
    kind: U(["org", "key", "wif", "token"]),
    sha: o().min(1).max(128),
    confirmed_at: v().int().nonnegative(),
    hipaa_seen: T(o().regex(/^[0-9a-f]{64}$/)).max(b).default([]),
    hipaa_seen_incomplete: M().optional(),
    hipaa_ruled_out: T(o().regex(/^[0-9a-f]{64}$/)).max(b).optional()
  }));
function mXe(e) {
  return `${e}${Xe}`;
}
function Hme(e) {
  return We("sha256").update(e.descriptor).digest("hex");
}
function Uae(e) {
  return st(e).slice(0, 32);
}
var ue = {
  seen: [],
  incomplete: !1,
  ruledOut: []
};
function Xin(e) {
  return {
    seen: e.hipaa_seen,
    incomplete: e.hipaa_seen_incomplete === !0,
    ruledOut: e.hipaa_ruled_out ?? []
  };
}
function lMr(e, n) {
  switch (e.kind) {
    case "ok":
      return Xin(e.stamp);
    case "absent":
      return n;
    case "unusable":
      return {
        seen: n.seen,
        incomplete: !0,
        ruledOut: []
      };
  }
}
function pe(e) {
  return e.incomplete ? {
    hipaa_seen_incomplete: !0,
    hipaa_ruled_out: e.ruledOut.slice(-b)
  } : {};
}
function he(stamp, n, i) {
  if (stamp === null || stamp.sha !== i) return {
    kind: "unstamped",
    hipaaSeen: stamp?.hipaa_seen ?? []
  };
  if (stamp.identity !== n) return {
    kind: "foreign",
    hipaaSeen: stamp.hipaa_seen
  };
  return {
    kind: "match",
    stamp: stamp
  };
}
var Ze = new Set(["EMFILE", "ENFILE", "EAGAIN", "EBUSY", "EINTR"]);
function me(e) {
  let code = k(e);
  return code !== void 0 && Ze.has(code) ? {
    kind: "unusable",
    cause: "io",
    code: code
  } : {
    kind: "unusable",
    cause: "content"
  };
}
function kKn(e) {
  return e.kind === "unusable" && e.cause === "io";
}
function w(e) {
  let n = o$r(mXe(e), le, {
    refuseLinkOnWindows: S4()
  });
  switch (n.kind) {
    case "absent":
      return {
        kind: "absent"
      };
    case "refused":
      return {
        kind: "unusable",
        cause: "content"
      };
    case "error":
      return t(`Policy limits: stamp unreadable (${d(n.error)}); cache reads as unvouched`), me(n.error);
    case "ok":
      try {
        let i = ce().safeParse(pt(n.text, !1));
        return i.success ? {
          kind: "ok",
          stamp: i.data
        } : {
          kind: "unusable",
          cause: "content"
        };
      } catch {
        return {
          kind: "unusable",
          cause: "content"
        };
      }
  }
}
async function gXe(e) {
  let n;
  try {
    n = await Je(mXe(e), Ye.O_RDONLY | Us);
    let i = await n.stat();
    if (!i.isFile() || i.size > le) return {
      kind: "unusable",
      cause: "content"
    };
    let r = ce().safeParse(pt(await n.readFile({
      encoding: "utf-8"
    }), !1));
    return r.success ? {
      kind: "ok",
      stamp: r.data
    } : {
      kind: "unusable",
      cause: "content"
    };
  } catch (error) {
    return G(error) ? {
      kind: "absent"
    } : me(error);
  } finally {
    await n?.close().catch(() => {});
  }
}
function ZPo({
  principal: principal,
  bodySha: n,
  confirmedAt: i,
  bodyTaints: bodyTaints,
  previous: previous,
  authority: authority
}) {
  let identity = Hme(principal),
    m = bodyTaints.includes("hipaa"),
    h,
    ruledOut;
  if (authority === "prior_evidence" && !m) h = previous.seen.slice(), ruledOut = previous.ruledOut.slice();else if (h = previous.seen.filter(item => item !== identity), ruledOut = previous.ruledOut.filter(item => item !== identity), m) h.push(identity);else if (previous.incomplete) ruledOut.push(identity);
  let P = h.length > b;
  return {
    v: 1,
    identity: identity,
    kind: principal.kind,
    sha: n,
    confirmed_at: i,
    hipaa_seen: h.slice(-b),
    ...pe({
      ...previous,
      incomplete: previous.incomplete || P,
      ruledOut: ruledOut
    })
  };
}
var identity_2 = "0".repeat(64);
function _Us(e) {
  return {
    v: 1,
    identity: identity_2,
    kind: "token",
    sha: "none",
    confirmed_at: 0,
    hipaa_seen: e.seen.slice(-b),
    ...pe(e)
  };
}
async function dMr(e, n) {
  await An(mXe(e), _(n), 384);
}
async function cMr(e, n) {
  try {
    return await dMr(e, n), !0;
  } catch (error) {
    return t(`Policy limits: failed to write the cache stamp - ${d(error)}`), !1;
  }
}
async function bUs(e) {
  try {
    await Ge(mXe(e));
  } catch (error) {
    if (!G(error)) t(`Policy limits: failed to remove the cache stamp - ${d(error)}`);
  }
}
class ye {
  notice = null;
  changed = Me();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) return;
    this.notice = e, this.changed.emit(this.notice);
  }
}
var et = new z(() => new ye());
function O() {
  return et.of(j().host);
}
function ge(e) {
  O().replaceNotice(e);
}
function getSnapshot() {
  return O().notice;
}
function SUs(e) {
  return O().changed.subscribe(e);
}
var eOo = {
  subscribe: e => O().changed.subscribe(e),
  getSnapshot: getSnapshot
};
function pXe(e) {
  return /[\u0000-\u001f\u007f-\u009f]/.test(e) || GX(e);
}
function H(e) {
  let n = ne(hI(e, "").toLowerCase(), 64).trim();
  return /^[a-z0-9_-]+$/.test(n) ? n : "";
}
var Zmt = 16;
function aMr(e) {
  let n = typeof e === "object" && e !== null && "compliance_taints" in e ? e.compliance_taints : void 0;
  if (!Array.isArray(n)) return 0;
  let i = F(n, l => typeof l !== "string" || H(l) === ""),
    r = L(n.filter(item => typeof item === "string").map(H).filter(item => item.length > 0));
  return i + Math.max(0, r.length - Zmt);
}
var _e = f(() => u({
    restrictions: fe(o(), u({
      allowed: M()
    })),
    compliance_taints: T(oe()).default([]).transform((e, n) => {
      let i = L(e.filter(item => typeof item === "string").map(H).filter(item => item.length > 0)).slice(0, Zmt);
      if (e.length > 0 && i.length === 0) n.addIssue({
        code: "custom",
        message: "compliance_taints had entries but none were well-formed regime names"
      });
      return i;
    }),
    monitoring_notice: u({
      text: o().max(500).transform(e => hI(e, "", {
        keepEmojiJoiners: !0
      })),
      url: o().max(2048).url().startsWith("https://").refine(e => !pXe(e)).nullish().catch(null)
    }).nullable().default(null).catch(null),
    defaults: fe(o(), oe()).default({}).catch({}),
    core_skills: T(o().max(128)).max(256).optional().catch([])
  })),
  uje = {
    restrictions: {},
    compliance_taints: [],
    monitoring_notice: null,
    defaults: {}
  },
  mUs = ["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "EHOSTUNREACH", "ENETUNREACH", "EPIPE", "CERT_ERROR", "ABORTED", "OTHER"],
  gUs = ["invalid_request_error", "authentication_error", "permission_error", "not_found_error", "rate_limit_error"],
  hUs = ["ip_not_in_allowed_range", "claude_code_key_creator_not_member", "organization_disabled", "organization_on_hold", "restricted_regime_endpoint", "oauth_not_allowed_for_organization", "oauth_scope_insufficient", "token_expired"];
var uMr = "policy-limits.json",
  rt = 5000,
  Se = 256,
  be = {
    kind: "absent"
  },
  pMr = 30000;
function fMr() {
  return u8n() ? be : w(GE());
}
function mMr(e) {
  return e.kind === "absent" && !u8n() ? w(GE()) : e;
}
class wUs {
  sessionCache = null;
  lastFetchOutcome = null;
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
  hipaaEvidence = ue;
  hipaaSeenUnreadable = !1;
  diskBodyChecksum = null;
  diskConfirmedAtMs = null;
  diskRefusedAtMs = null;
  hipaaEvidenceLoaded = !1;
  hintedTaints = [];
  hintedDeniedKeys = [];
  hintedEnforcedKeys = [];
  sessionAttributed = !1;
  attributedBearerDigest = null;
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
  tunnelSocket = void 0;
  machinePinsSignIn = void 0;
  cacheRevision = 0;
  verdictChanged = Me();
  heldStartSignal = Me();
  replaceSessionCache(e, n = !1, i = !1) {
    if (this.failOpenVerdict = e !== null && (n || this.failOpenVerdict && (i || e === this.sessionCache)), this.sessionCache = e, e?.core_skills !== void 0) this.lastServedCoreSkills = this.sessionFromServerFetch ? e.core_skills : this.narrowedServedList(e.core_skills);
    if (!i) this.verdictEnvBearerDigest = null;
    if (e === null) this.sessionAttributed = !1, this.attributedBearerDigest = null, this.sessionVerdictDisowned = !1, this.evidenceRereadForBearer = void 0;
    this.cacheRevision++;
    let r = gHr(this.effectiveTaints());
    if (ge(e?.monitoring_notice ?? null), r) qH();
    this.emitVerdictChanged();
  }
  effectiveTaints(e = this.sessionCache?.compliance_taints ?? []) {
    return this.hintedTaints.length === 0 ? e : L([...this.hintedTaints, ...e]).slice(0, Zmt);
  }
  dropHintedTaints() {
    if (this.hintedTaints.length === 0 && this.hintedDeniedKeys.length === 0 && this.hintedEnforcedKeys.length === 0) return;
    if (this.hintedTaints = [], this.hintedDeniedKeys = [], this.hintedEnforcedKeys = [], this.cacheRevision++, gHr(this.effectiveTaints())) qH();
    this.emitVerdictChanged();
  }
  hintFromRefusedBody(e) {
    if (this.sessionCache !== null && this.sessionAttributed) return;
    let n = e.compliance_taints.filter(item => hOo.some(([y]) => y === item)),
      i = L([...this.hintedTaints, ...n]),
      r = Object.entries(e.restrictions).filter(([h, y]) => y?.allowed === !1 && !B(h)).map(([h]) => h),
      l = L([...this.hintedDeniedKeys, ...r]).slice(0, Se),
      p = Object.entries(e.restrictions).filter(([h, y]) => y?.allowed === !0 && B(h)).map(([h]) => h),
      c = L([...this.hintedEnforcedKeys, ...p]).slice(0, Se),
      m = !1;
    if (e.core_skills !== void 0) {
      let h = this.narrowedServedList(e.core_skills);
      if (this.lastServedCoreSkills === null || h.join(`
`) !== this.lastServedCoreSkills.join(`
`)) this.lastServedCoreSkills = h, m = !0;
    }
    if (!m && i.length === this.hintedTaints.length && l.length === this.hintedDeniedKeys.length && c.length === this.hintedEnforcedKeys.length) return;
    if (this.hintedTaints = i, this.hintedDeniedKeys = l, this.hintedEnforcedKeys = c, this.cacheRevision++, gHr(this.effectiveTaints())) qH();
    this.emitVerdictChanged();
  }
  narrowedServedList(e) {
    let n = new Set(this.lastServedCoreSkills ?? U4n);
    return e.filter(item => n.has(item));
  }
  emitVerdictChanged() {
    try {
      this.heldStartSignal.emit();
    } catch (error) {
      t(`Policy limits: a held-start listener threw: ${d(error)}`, {
        level: "error"
      });
    }
    if (u5()) return;
    try {
      this.verdictChanged.emit();
    } catch (error) {
      t(`Policy limits: a verdict-change listener threw: ${d(error)}`, {
        level: "error"
      });
    }
  }
}
var IJs = new z(() => new wUs());
function s() {
  return IJs.of(j().host);
}
function Jin(e) {
  let n = s();
  n.sessionFromServerFetch = e !== null, n.replaceSessionCache(e);
}
function EKn(e) {
  let n = s();
  n.sessionFromServerFetch = !1, n.replaceSessionCache(e);
}
function gMr(e) {
  s().verdictEnvBearerDigest = e;
}
function HFt() {
  let verdictEnvBearerDigest = s().verdictEnvBearerDigest;
  if (verdictEnvBearerDigest === null) return null;
  let n = Xb();
  if (vBt() || !n || vKn({
    anthropicAuthEnabled: Sl(),
    oauthScopes: Fn()?.scopes
  }) || Cw() != null) return "gone";
  return Uae(n) === verdictEnvBearerDigest ? "same" : "replaced";
}
function tOo() {
  let e = s();
  e.sessionFromServerFetch = !1, e.replaceSessionCache(uje, !0);
}
function $Ft(e) {
  let n = s(),
    i = n.sessionCache !== null;
  if (!i) n.sessionFromServerFetch = !1, n.sessionAttributed = n.lastStampVerdict === "match", n.attributedBearerDigest = n.sessionAttributed ? ke() : null, n.sessionVerdictDisowned = n.lastStampVerdict === "disabled", n.evidenceRereadForBearer = void 0;
  n.replaceSessionCache(e, !1, i);
}
function nOo(e) {
  if (sVs(e)) qH();
}
function hMr(e, n, i = !0) {
  let r = s();
  if (r.lastFetchOutcome = e, e === null || e.success) r.settledWithoutVerdictFor = null;else if (!e.retrying && (i || !yMr(e))) {
    let l = e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && e.httpStatus !== null && (e.httpStatus === 404 || e.httpStatus >= 500);
    r.settledWithoutVerdictFor = l ? n ?? vUs() ?? "" : null;
  }
  r.cacheRevision++, r.emitVerdictChanged();
}
function yMr(e) {
  return e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && (e.httpStatus === null || e.httpStatus >= 500 || e.httpStatus >= 400 && !Sye(e.httpStatus));
}
function Bae() {
  return s().lastFetchOutcome;
}
function rOo() {
  s().storageV5 = void 0;
}
function mIe() {
  return RD() !== void 0 || de();
}
function TKn() {
  return fXe() !== "none";
}
function _Mr() {
  return mIe() || s().diskAdoptionSuppressed;
}
function CD() {
  return s().sessionCache;
}
function Qin() {
  let e = s();
  e.diskAdoptionSuppressed = !0, e.diskAdoptionEpoch++;
}
function hXe() {
  return s().diskAdoptionEpoch;
}
function CKn() {
  s().diskAdoptionSuppressed = !1;
}
function RKn() {
  return s().diskAdoptionSuppressed;
}
function UFt() {
  return s().cacheRevision;
}
function oOo() {
  return u5() ? -1 : UFt();
}
function CO(e) {
  return s().verdictChanged.subscribe(e);
}
function yXe(e) {
  return s().heldStartSignal.subscribe(e);
}
function GE() {
  return nt(Pe(), uMr);
}
function RD() {
  let e = s();
  if (e.tunnelSocket === void 0) {
    let ANTHROPIC_UNIX_SOCKET = a.ANTHROPIC_UNIX_SOCKET;
    e.tunnelSocket = ANTHROPIC_UNIX_SOCKET && M2s({
      ANTHROPIC_UNIX_SOCKET: ANTHROPIC_UNIX_SOCKET,
      CLAUDE_CODE_OAUTH_TOKEN: a.CLAUDE_CODE_OAUTH_TOKEN,
      ANTHROPIC_API_KEY: a.ANTHROPIC_API_KEY,
      ANTHROPIC_AUTH_TOKEN: a.ANTHROPIC_AUTH_TOKEN
    }) ? ANTHROPIC_UNIX_SOCKET : null;
  }
  return e.tunnelSocket ?? void 0;
}
function sOo() {
  s().tunnelSocket = void 0;
}
function Ae() {
  let e = s();
  if (e.machinePinsSignIn !== void 0) return e.machinePinsSignIn;
  let n = xun();
  if (t_t()) e.machinePinsSignIn = n;
  return n;
}
function iOo() {
  s().machinePinsSignIn = void 0;
}
var Zin = new Set(["prosumer_oauth", "third_party_provider", "custom_base_url"]);
function bMr(e = {}) {
  if (xe() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !RD() && !xi()) return "custom_base_url";
  return;
}
function dy() {
  return jX() === void 0;
}
function jX(e = {}) {
  let n = bMr(e);
  if (n !== void 0) return n;
  if (RD()) return;
  try {
    let {
      key: key
    } = YE({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (key) return;
  } catch {}
  if (pc()) return;
  if (y$t() && !vBt()) return;
  let i = Fn();
  if (!i?.accessToken) return "no_auth";
  if (!i.scopes?.includes(IA)) return "oauth_no_inference_scope";
  if (i.subscriptionType == null) return;
  if (i.subscriptionType !== "enterprise" && i.subscriptionType !== "team") return Ae() ? void 0 : "prosumer_oauth";
  return;
}
function BFt() {
  let e = s();
  if (W() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  if (_Mr()) return s().sessionCache;
  if (e.diskRefusedAtMs !== null && Date.now() - e.diskRefusedAtMs < rt) return null;
  let n = fMr();
  if (!e.hipaaEvidenceLoaded && !u8n()) R(n);
  e.storedCopyTrust = "not_asked";
  let i;
  try {
    i = PKn(tt(GE(), "utf-8"));
  } catch {
    return null;
  }
  if (i === null) return null;
  try {
    return SMr(i, mMr(n));
  } catch (error) {
    return t(`Policy limits: cache admission failed (${d(error)}); cold start`, {
      level: "error"
    }), null;
  }
}
function SMr(e, n) {
  let i = s();
  if (u8n()) return i.lastStampVerdict = "disabled", i.lastStampMatchedIdentity = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = null, K(e, void 0);
  let r = p5(bXe(e));
  if (R(n), n.kind === "absent") return i.lastStampVerdict = "legacy", i.lastStampMatchedIdentity = null, i.diskBodyChecksum = r, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = null, K(e, r);
  let l = n.kind === "ok" ? n.stamp : null,
    p = D3(),
    c = p === null ? "" : Hme(p),
    m = he(l, c, r);
  switch (i.lastStampMatchedIdentity = null, m.kind) {
    case "match":
      i.lastStampVerdict = "match", i.lastStampMatchedIdentity = c, i.diskBodyChecksum = r, i.diskConfirmedAtMs = m.stamp.confirmed_at, i.diskRefusedAtMs = null;
      let h = K(e, r);
      if (h !== null) i.dropHintedTaints();
      return h;
    case "unstamped":
      return i.lastStampVerdict = "torn", i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = Date.now(), i.hintFromRefusedBody(e), t("Policy limits: the cache stamp does not vouch for the cached body; cold start (its compliance taints and explicit denials still deny)"), null;
    case "foreign":
      return i.lastStampVerdict = "foreign", i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = Date.now(), i.hintFromRefusedBody(e), t("Policy limits: the cache was written under another credential's identity; cold start (its compliance taints and explicit denials still deny until this credential's verdict lands)"), null;
  }
}
function K(e, n) {
  let i = s();
  if (!S4()) return i.storedCopyTrust = "not_asked", e;
  let reason, l;
  try {
    l = {
      orgs: yIe()
    };
  } catch (error) {
    t(`Policy limits: the admin organization pin is not known: ${d(error)}`), l = void 0;
  }
  if (l === void 0) reason = "org_pin_unknown";else try {
    let p = s$r({
      kind: "policy-limits",
      cachePath: GE(),
      body: bXe(e),
      bodySha: n ?? p5(bXe(e)),
      account: np(),
      pinnedOrgs: l.orgs,
      nowMs: Date.now(),
      roots: WQe()
    });
    if (p.trusted) return i.storedCopyTrust = p, e;
    reason = p.reason;
  } catch (error) {
    t(`Policy limits: the gate on a stored copy failed: ${d(error)}`, {
      level: "error"
    }), reason = "error";
  }
  return i.storedCopyTrust = {
    trusted: !1,
    reason: reason
  }, i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = Date.now(), i.hintFromRefusedBody(e), t(`Policy limits: the stored copy is not trusted at rest (${reason}); cold start (its compliance taints and explicit denials still deny)`), null;
}
function D3() {
  let e = s();
  if (e.principalRung = "none", RD() !== void 0) return e.principalRung = "tunnel", null;
  let key_2 = null,
    source = "none";
  try {
    ({
      key: key_2,
      source: source
    } = YE());
  } catch {}
  if (!key_2 && pc()) {
    if (e.principalRung = "wif", e.wifAccountDiverged) return null;
    let r = fv(),
      ANTHROPIC_PROFILE = a.ANTHROPIC_PROFILE,
      p;
    try {
      if (p = (r === "env-quad" ? a.ANTHROPIC_ORGANIZATION_ID?.trim() : E5()?.organizationUuid?.trim()) || "", p && e.wifSourceLocation === void 0) {
        if (r === "profile-implicit") {
          let y = oL();
          e.wifRecordProfile = y === null ? void 0 : mTe(y);
        } else if (r === "profile-explicit") e.wifRecordProfile = ANTHROPIC_PROFILE;
        e.wifSourceLocation = Y(r);
      }
    } catch (error) {
      return t(`Policy limits: WIF profile unreadable (${d(error)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0, null;
    }
    if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = p.toLowerCase() || null;else if (e.wifRecordedOrg !== (p.toLowerCase() || null)) return t("Policy limits: the WIF source now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = !0, null;
    if (!p) return null;
    let c = r === "env-quad" ? null : oL(),
      m = r === "env-quad" ? Y("env-quad") : ANTHROPIC_PROFILE ? J(c, ANTHROPIC_PROFILE) : void 0;
    if (r === "profile-implicit" && ANTHROPIC_PROFILE !== void 0 && ANTHROPIC_PROFILE !== e.wifRecordProfile || r === "profile-explicit" && (ANTHROPIC_PROFILE === void 0 || ANTHROPIC_PROFILE !== e.wifRecordProfile) || m !== void 0 && m !== e.wifSourceLocation || m === void 0 && r !== "env-quad" && e.wifSourceLocation !== void 0 && (c === null ? e.wifSourceLocation !== "" : !e.wifSourceLocation.startsWith(J(c, "")))) return t("Policy limits: the environment now selects a different WIF source than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = !0, null;
    let h = Vt(p);
    if (h) return V(h);
    return {
      kind: "wif",
      descriptor: `wif:${Uae([e.wifSourceLocation, p.toLowerCase()].join("\x00"))}`
    };
  }
  if (Et()) {
    let r = Fn()?.accessToken;
    if (r) return e.principalRung = "oauth", ot(r);
  }
  if (source === "apiKeyHelper") return e.principalRung = "helper", null;
  if (key_2) return e.principalRung = "key", {
    kind: "key",
    descriptor: `key:${Uae(key_2)}`
  };
  return null;
}
function aOo() {
  let e = s();
  if (e.wifAccountDiverged || Cw() || !pc()) return;
  let n;
  try {
    n = e.wifSourceLocation !== void 0 && Y(fv()) !== e.wifSourceLocation;
  } catch (error) {
    t(`Policy limits: WIF profile selection unreadable (${d(error)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0;
    return;
  }
  if (n) {
    e.wifAccountDiverged = !0, t("Policy limits: the active WIF source moved since this process derived its principal; its policy verdicts are session-only until restart");
    return;
  }
  let i;
  try {
    if (fv() === "env-quad") i = a.ANTHROPIC_ORGANIZATION_ID?.trim().toLowerCase() || null;else y1t(), i = E5()?.organizationUuid?.trim().toLowerCase() ?? null;
  } catch (error) {
    t(`Policy limits: WIF account record unreadable (${d(error)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0;
    return;
  }
  if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = i;else if (e.wifRecordedOrg !== i) e.wifAccountDiverged = !0, t("Policy limits: the WIF profile now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart");
}
async function wMr(e, n) {
  let i = Fn()?.accessToken;
  if (!i) return;
  let r = s(),
    l = await Kg(n);
  if (l !== "store") {
    if (l !== "none") r.storedLoginNotedTokenDigest = Uae(i);
    return;
  }
  let p = await x0o(e),
    c = Fn()?.accessToken;
  if (!c) return;
  r.storedLoginNotedTokenDigest = Uae(c), r.storedLoginAccountAtWire = {
    tokenDigest: Uae(c),
    organizationUuid: c === i ? p : null
  };
}
function lOo() {
  let e = Fn()?.accessToken;
  if (!e) return !1;
  let n = s(),
    i = Uae(e);
  if (n.storedLoginNotedTokenDigest !== i) return !0;
  let storedLoginAccountAtWire = n.storedLoginAccountAtWire;
  return storedLoginAccountAtWire !== null && storedLoginAccountAtWire.tokenDigest === i && storedLoginAccountAtWire.organizationUuid !== (Vt(np()?.organizationUuid) ?? null);
}
function ot(e) {
  let n = s(),
    i = np(),
    r = Vt(a.CLAUDE_CODE_ORGANIZATION_UUID),
    bearerDigest = Uae(e),
    storedLoginAccountAtWire_2 = n.storedLoginAccountAtWire,
    c = storedLoginAccountAtWire_2 !== null && storedLoginAccountAtWire_2.tokenDigest === bearerDigest ? storedLoginAccountAtWire_2.organizationUuid : void 0,
    key_3 = [bearerDigest, r ?? "", i?.organizationUuid ?? "", c === void 0 ? "" : `fresh:${c ?? "-"}`, a.CLAUDE_CODE_OAUTH_TOKEN ? "env" : ""].join("|"),
    oauthPrincipalMemo = n.oauthPrincipalMemo;
  if (oauthPrincipalMemo?.key === key_3 && (oauthPrincipalMemo.expiresAtMs === null || Date.now() < oauthPrincipalMemo.expiresAtMs)) return oauthPrincipalMemo.principal;
  let principal_2 = {
      kind: "token",
      descriptor: `token:${bearerDigest}`
    },
    daemonSnapshotWorker = !1,
    g = zC();
  switch (g) {
    case "store":
      {
        let S = Vt(i?.organizationUuid) ?? null;
        if (c !== void 0 && c !== S) principal_2 = {
          kind: "token",
          descriptor: `token:${bearerDigest}`,
          unclassified: !0
        };else if (S) principal_2 = V(S);else principal_2 = {
          kind: "token",
          descriptor: `token:${bearerDigest}`,
          storedLoginOrgless: !0
        };
        break;
      }
    case "env":
    case "fd":
      if (g === "fd" && o1() && !fd()) principal_2 = null, daemonSnapshotWorker = !0;else if (r) principal_2 = {
        ...V(r),
        bearerDigest: bearerDigest
      };
      break;
    case "none":
      principal_2 = {
        kind: "token",
        descriptor: `token:${bearerDigest}`,
        unclassified: !0
      };
      break;
  }
  return n.oauthPrincipalMemo = {
    key: key_3,
    principal: principal_2,
    daemonSnapshotWorker: daemonSnapshotWorker,
    expiresAtMs: g === "none" || principal_2 === null ? Date.now() + pMr : null
  }, principal_2;
}
function V(e) {
  return {
    kind: "org",
    descriptor: `org:${e.toLowerCase()}`
  };
}
function vMr() {
  let e = s();
  e.sessionAttributed = !0, e.attributedBearerDigest = ke(), e.sessionVerdictDisowned = !1, e.evidenceRereadForBearer = void 0, e.dropHintedTaints();
}
function ve() {
  let e = Fn()?.accessToken;
  return e ? Uae(e) : null;
}
function ke() {
  let e = s();
  try {
    D3();
  } catch {
    return null;
  }
  return e.principalRung === "oauth" ? ve() : null;
}
function jFt() {
  let e = s(),
    n = !e.sessionVerdictDisowned;
  if (e.sessionAttributed = !1, e.attributedBearerDigest = null, e.sessionVerdictDisowned = !0, e.evidenceRereadForBearer = void 0, n) e.cacheRevision++, e.emitVerdictChanged();
}
function vUs() {
  let e = D3();
  return e === null ? null : Hme(e);
}
function kMr() {
  let storedCopyTrust = s().storedCopyTrust;
  return storedCopyTrust === "not_asked" ? storedCopyTrust : sTe(storedCopyTrust);
}
function dOo() {
  return fze(s().storedCopyTrust);
}
function AKn() {
  return s().lastStampVerdict;
}
function cOo() {
  return s().lastStampMatchedIdentity;
}
function EMr() {
  let e = s();
  if (!e.hipaaEvidenceLoaded) R(Re());
  return e.hipaaEvidence;
}
function R(e) {
  let n = s();
  if (n.hipaaEvidenceLoaded = !kKn(e), e.kind === "ok") n.hipaaEvidence = Xin(e.stamp);else if (e.kind === "unusable" && !kKn(e)) n.hipaaSeenUnreadable = !0;
}
function Re() {
  return mIe() ? be : w(GE());
}
function xKn() {
  return s().hipaaEvidence;
}
function uOo() {
  let e;
  try {
    e = D3();
  } catch (error) {
    t(`Policy limits: principal unreadable for the evidence tier (${d(error)}); judged on the machine's evidence`, {
      level: "error"
    }), e = {
      kind: "token",
      descriptor: "token:unreadable",
      unclassified: !0
    };
  }
  if (e === null) {
    let oauthPrincipalMemo_2 = s().oauthPrincipalMemo;
    if (!oauthPrincipalMemo_2?.daemonSnapshotWorker || oauthPrincipalMemo_2.principal !== null) return !1;
    let l = EMr();
    return l.seen.length > 0 || l.incomplete;
  }
  let n = EMr();
  if (X(e)) {
    let r = e.storedLoginOrgless === !0 && e.unclassified !== !0 && n.ruledOut.includes(Hme(e));
    return n.seen.length > 0 || n.incomplete && !r;
  }
  let i = Hme(e);
  return n.seen.includes(i) || n.incomplete && !n.ruledOut.includes(i);
}
function X(e) {
  return e.unclassified === !0 || e.storedLoginOrgless === !0;
}
function TMr(e, n, i) {
  let r = s();
  r.diskBodyChecksum = e, r.diskConfirmedAtMs = i, r.hipaaEvidence = n, r.hipaaEvidenceLoaded = !0, r.diskRefusedAtMs = null;
}
function _Xe(e) {
  let n = s(),
    {
      hipaaEvidence: hipaaEvidence,
      hipaaSeenUnreadable: hipaaSeenUnreadable
    } = n;
  if (R(e), hipaaSeenUnreadable !== n.hipaaSeenUnreadable || !at(hipaaEvidence, n.hipaaEvidence)) n.cacheRevision++, n.emitVerdictChanged();
}
function at(e, n) {
  return e.incomplete === n.incomplete && e.seen.length === n.seen.length && e.seen.every((item, index) => item === n.seen[index]) && e.ruledOut.length === n.ruledOut.length && e.ruledOut.every((item, index) => item === n.ruledOut[index]);
}
function pOo() {
  return s().diskBodyChecksum;
}
function fOo() {
  return s().diskConfirmedAtMs;
}
function CMr(e, n) {
  let i = s();
  if (e !== void 0 && i.diskBodyChecksum === e && i.diskConfirmedAtMs !== null) i.diskConfirmedAtMs = n;
}
function WFt() {
  let e = s();
  e.diskBodyChecksum = null, e.diskConfirmedAtMs = null, e.diskRefusedAtMs = null, e.hipaaEvidenceLoaded = !1, e.lastStampVerdict = "none", e.lastStampMatchedIdentity = null, e.storedCopyTrust = "not_asked", e.dropHintedTaints();
}
function PKn(e) {
  let n = ean(pt(e, !1));
  return n.success ? n.data : null;
}
var weakMap = new WeakMap();
function ean(e) {
  let n = _e().safeParse(e);
  if (n.success) weakMap.set(n.data, e);
  return n;
}
function bXe(e) {
  return weakMap.get(e) ?? e;
}
function RMr(e, n) {
  let i = s();
  if (i.storageV5 = e, n !== null && i.sessionCache === null && !i.diskAdoptionSuppressed) $Ft(n);
}
var mOo = {
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
  allow_channels: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Channels",
    verb: "are",
    requirementId: "HIPAA-R71"
  },
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
function gOo(e) {
  return Object.hasOwn(mOo, e);
}
function tgt(e) {
  return gOo(e) ? mOo[e] : void 0;
}
var Ce = new Set(["hipaa"]);
function MJs(e) {
  return tgt(e)?.serverPopulated === !0 && !_qs();
}
function kUs(e) {
  return tgt(e)?.transcriptScan === !0 && !wqs();
}
function E() {
  return Object.keys(mOo).filter(gOo);
}
function WX(e) {
  let n = tgt(e);
  return {
    featureLabel: n?.label ?? e,
    verb: n?.verb ?? "is"
  };
}
var hOo = E().flatMap(item => (tgt(item)?.deniedUnder ?? []).map(n => [n, item])),
  DJs = E().flatMap(item => (tgt(item)?.hardBlockUnder ?? []).map(n => [n, item])),
  LJs = new Set(E().filter(item => tgt(item)?.onCacheMiss !== "allow")),
  yOo = new Set(E().filter(item => tgt(item)?.onCacheMiss === "hold")),
  EUs = new Set(E().filter(item => tgt(item)?.onFailOpenVerdict === "deny")),
  lt = new Set(["allow_product_feedback"]),
  Ie = new Set(["allow_web_fetch", "allow_design_sync", "allow_channels"]);
function tan(e) {
  let n = ct(e);
  return NJs(e) || n;
}
function NJs(e) {
  if (!Ie.has(e) || Sqs() || !dy()) return !1;
  let n = s();
  if (n.sessionCache !== null && !n.failOpenVerdict && !n.sessionVerdictDisowned) return !1;
  let i;
  try {
    D3(), i = n.principalRung;
  } catch {
    return !0;
  }
  if (i === "wif" && Et()) return !0;
  if (i === "none" && Xb() !== void 0 && vBt()) return !1;
  return i === "oauth" || i === "tunnel" || i === "none";
}
function ct(e) {
  if (!Ie.has(e) || !dy() || bqs()) return !1;
  let n = s();
  if (n.sessionCache !== null && n.sessionAttributed) {
    let i = ve();
    if (i !== null && i === n.attributedBearerDigest) return !1;
    if (n.evidenceRereadForBearer !== i) n.evidenceRereadForBearer = i, n.hipaaEvidenceLoaded = !1;
    let r = EMr();
    if (r.seen.length === 0 && !r.incomplete || !dt()) return !1;
  }
  return uOo();
}
function dt() {
  try {
    let e = D3();
    return e !== null && X(e);
  } catch {
    return !0;
  }
}
function sn(e) {
  let n = kw();
  if (kUs(e)) {
    let i = n?.restrictions[e];
    if (i) return i.allowed;
    return !(dy() && s().hintedDeniedKeys.includes(e));
  }
  if (!n) {
    if (LJs.has(e)) {
      if (dy() && !(yOo.has(e) && gIe() && !pje())) return !1;
      if (lt.has(e) && At() && !(e === "allow_product_feedback" && Gte())) return !1;
    }
    if (x(e, hHr())) return !1;
    if (tan(e)) return !1;
    let i = s();
    if (i.hintedDeniedKeys.length === 0 && i.hintedTaints.length === 0) return !0;
    if (!dy()) return !0;
    if (i.hintedDeniedKeys.includes(e)) return !1;
    return SXe({
      restrictions: {},
      compliance_taints: []
    }, e, i.hintedTaints);
  }
  if (yOo.has(e) && BG() && !(gIe() && !pje())) return !1;
  if (EUs.has(e) && BG()) return !1;
  if (tan(e)) return !1;
  return !Te(e, n);
}
function Te(e, n) {
  let i = s();
  if (n.restrictions[e] === void 0 && i.hintedDeniedKeys.includes(e)) return !0;
  let sessionFromServerFetch = i.sessionFromServerFetch;
  return !SXe({
    restrictions: n.restrictions,
    compliance_taints: sessionFromServerFetch ? n.compliance_taints : []
  }, e, [...hHr(), ...i.hintedTaints, ...(sessionFromServerFetch ? [] : n.compliance_taints)]);
}
function SXe(e, n, i = []) {
  let compliance_taints = e.compliance_taints;
  if (DJs.some(([c, m]) => m === n && (compliance_taints.includes(c) || i.includes(c)))) return !1;
  let l = e.restrictions[n];
  if (l) return l.allowed;
  if (kUs(n)) return !0;
  let p = MJs(n) ? [...i.filter(item => !(Ce.has(item) && compliance_taints.includes(item))), ...compliance_taints.filter(item => !Ce.has(item))] : [...i, ...compliance_taints];
  return !x(n, p);
}
function _Oo(e) {
  if (e.compliance_taints.some(item => hOo.some(([i]) => i === item))) return !1;
  if (Object.keys(e.defaults ?? {}).length > 0 || e.monitoring_notice !== null && e.monitoring_notice !== void 0) return !1;
  return Object.entries(e.restrictions).every(([n, i]) => B(n) ? i?.allowed !== !0 : i?.allowed !== !1);
}
function B(e) {
  return e.startsWith("enforce_") || e.startsWith("require_");
}
function x(e, n) {
  if (n.length === 0) return !1;
  for (let [i, r] of hOo) if (r === e && n.includes(i)) return !0;
  return !1;
}
lVs({
  isPolicyAllowed: e => sn(e),
  commandPolicyGateAllows: e => HJs(e),
  policyDenyKind: e => mp(e),
  policyDeniedReason: (e, n, i) => If(e, n, i),
  complianceTaintsSettled: () => AMr(),
  policyLimitsCacheLoaded: () => zX(),
  autoDefaultVerdictState: () => FJs(),
  policyVerdictAbsent: () => BG(),
  principalSeenUnderHipaa: () => uOo(),
  coreSkills: () => $Js(),
  rememberedCoreSkills: () => UJs()
});
function FJs() {
  if (!BG()) return "loaded";
  if (gIe()) return ut() ? "unobtainable_seen_hipaa" : "unobtainable";
  return "pending";
}
function ut() {
  let e;
  try {
    e = D3();
  } catch {
    return !1;
  }
  if (e === null || X(e)) return !1;
  return EMr().seen.includes(Hme(e));
}
function HJs(e) {
  if (!gOo(e)) return t(`[policy] policyGate names unknown policy key "${e}"; denying`, {
    level: "warn"
  }), !1;
  return sn(e);
}
function BG() {
  if (!dy()) return !1;
  return kw() === null || s().failOpenVerdict;
}
function L3() {
  return kw() !== null && s().sessionFromServerFetch;
}
function bOo() {
  return s().sessionVerdictDisowned;
}
function gIe() {
  if (!BG()) return !1;
  let e = s();
  if (e.settledWithoutVerdictFor === null) return !1;
  let n;
  try {
    n = vUs();
  } catch {
    return !1;
  }
  return e.settledWithoutVerdictFor === (n ?? "");
}
function pje() {
  let e;
  try {
    e = D3();
  } catch {
    return !0;
  }
  if (e === null || e.unclassified) return !0;
  let n = s();
  if (!n.hipaaSeenUnreadable) R(Re());
  let i = uOo();
  return n.hipaaSeenUnreadable || !n.hipaaEvidenceLoaded || i;
}
function fje() {
  if (!dy() || kw() !== null || TKn()) return !1;
  return q();
}
function q() {
  let lastFetchOutcome = s().lastFetchOutcome;
  return lastFetchOutcome !== null && !lastFetchOutcome.success && lastFetchOutcome.httpStatus === 404;
}
function If(e, n, i, r) {
  if (sn(e)) return null;
  if (fje()) return tyt(n);
  switch (mp(e)) {
    case "route_missing":
      return tyt(n);
    case "cache_miss":
      return Age(n);
    case "latched":
      return IMe(n, i);
    case "org_denied":
    case null:
      return IUt(n, i, Wge(), r);
  }
}
function SOo() {
  return HEe(zD()).length > 0;
}
function mp(e) {
  if (sn(e)) return null;
  if (OKn(e)) return "latched";
  let n = kw();
  if (n !== null) {
    if ((yOo.has(e) || EUs.has(e) && !Te(e, n)) && BG()) return q() ? "route_missing" : "cache_miss";
    if (!tan(e)) return "org_denied";
    return q() && !TKn() ? "route_missing" : "cache_miss";
  }
  return fje() ? "route_missing" : "cache_miss";
}
function OKn(e) {
  if (!x(e, hHr()) || x(e, Wge())) return !1;
  if (kw() === null) return !0;
  return Z()?.[e]?.allowed !== !1;
}
function wOo(e) {
  let n = mp(e);
  if (n === null) return null;
  if (fje()) return YLo();
  switch (n) {
    case "route_missing":
      return YLo();
    case "cache_miss":
      return BGs();
    case "latched":
      return UGs();
    case "org_denied":
      return P3n(Wge());
  }
}
function AMr() {
  let e = HFt();
  if (e !== null && e !== "same") return !1;
  if (KC() || Yzs() || !bp() || xe() !== "firstParty" || a.ANTHROPIC_UNIX_SOCKET !== void 0 || Fm() !== void 0 || Xb() !== void 0 && !vKn({
    anthropicAuthEnabled: Sl(),
    oauthScopes: Fn()?.scopes
  }) && !(e === "same" && kw() !== null)) return !1;
  if (kw() !== null) return !0;
  let n = Fn();
  return (n?.subscriptionType === "pro" || n?.subscriptionType === "max") && n.scopes?.includes(IA) === !0 && zC() === "store" && !Ae() && !wr() && !Mp({
    skipRetrievingKeyFromApiKeyHelper: !0
  }).key && !pc();
}
function mje(e) {
  if (!dy()) return !1;
  let n = s();
  return n.hintedDeniedKeys.includes(e) || !SXe({
    restrictions: {},
    compliance_taints: []
  }, e, n.hintedTaints);
}
function Tsi(e) {
  return Z()?.[e]?.allowed === !0;
}
function zFt(e) {
  let n = Z();
  if (n?.[e]?.allowed === !0) return !0;
  let i = s();
  return i.hintedEnforcedKeys.includes(e) && n?.[e] === void 0 && (n === null || !i.sessionAttributed) && dy();
}
function vOo(e) {
  let n = kw()?.defaults[e];
  return typeof n === "boolean" ? n : void 0;
}
function $Js() {
  return kw()?.core_skills ?? [];
}
function UJs() {
  if (!dy()) return [];
  return kw()?.core_skills ?? s().lastServedCoreSkills;
}
function kOo() {
  s().lastServedCoreSkills = null;
}
function kw() {
  if (!dy()) return null;
  let e = s();
  if (e.sessionCache) return e.sessionCache;
  if (e.diskAdoptionSuppressed) return null;
  let n = BFt();
  if (n) return $Ft(n), n;
  return null;
}
function zX() {
  if (!dy()) return !0;
  return kw() !== null;
}
function Z() {
  return kw()?.restrictions ?? null;
}
function Y(e) {
  if (e === "env-quad") return a.ANTHROPIC_FEDERATION_RULE_ID?.trim() ?? "";
  let n = oL();
  return n === null || e === null ? "" : J(n, D9n(n));
}
function J(e, n) {
  return e === null ? "" : `${it(e)}\x00${n}`;
}
export { pXe, Zmt, aMr, uje, mUs, gUs, hUs, QPo, vKn, yUs, fXe, mXe, Hme, Uae, Xin, lMr, kKn, gXe, ZPo, _Us, dMr, cMr, bUs, getSnapshot as egt, SUs, eOo, uMr, pMr, fMr, mMr, wUs, IJs, Jin, EKn, gMr, HFt, tOo, $Ft, nOo, hMr, yMr, Bae, rOo, mIe, TKn, _Mr, CD, Qin, hXe, CKn, RKn, UFt, oOo, CO, yXe, GE, RD, sOo, iOo, Zin, bMr, dy, jX, BFt, SMr, D3, aOo, wMr, lOo, vMr, jFt, vUs, kMr, dOo, AKn, cOo, EMr, xKn, uOo, TMr, _Xe, pOo, fOo, CMr, WFt, PKn, ean, bXe, RMr, mOo, gOo, tgt, MJs, kUs, WX, hOo, DJs, LJs, yOo, EUs, tan, NJs, sn, SXe, _Oo, FJs, HJs, BG, L3, bOo, gIe, pje, fje, If, SOo, mp, OKn, wOo, AMr, mje, Tsi, zFt, vOo, $Js, UJs, kOo, kw, zX };