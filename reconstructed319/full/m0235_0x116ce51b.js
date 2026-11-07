// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  rs
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Xr,
  w0,
  WKn,
  une
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  OC
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  OYi,
  VPr,
  Cz,
  tBn,
  lvo,
  pC
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  bjt,
  Bna,
  mVn,
  FPo
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  Te,
  Ci,
  Yc,
  jSe
} from "B:/~BUN/root/chunk-8f4z6bdn.js";

function G(e) {
  return w0(e) || tBn(e?.jwt ?? i.ANTHROPIC_AUTH_TOKEN) || OYi()
}
var M = ["harness", "user", "project", "local", "flag", "managed", "admin_default"],
  qRs = /^(?:claude_proj|chan)_(?:staging_|local_)?01[1-9A-HJ-NP-Za-km-z]{22}$/;

function Pqi(e) {
  return e.isSubscriber && S()
}

function YRs(e, r, u, p, d, T, o) {
  let n = Te();
  if (!(o?.ignoreEnvOptOut === !0 && N()) && I()) return "";
  let b = `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.319",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-11-05T18:14:18Z",GIT_SHA:"fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION}.${e}`,
    h = une() ?? process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
    U = n === "firstParty" && Ci() || n === "vertex" ? " cch=00000;" : "",
    l = lvo(),
    x = l ? ` cc_workload=${l};` : "",
    D = pC(r) && !r.isMainSession ? " cc_is_subagent=true;" : "",
    w = u !== void 0 && /^req_[A-Za-z0-9_-]{1,36}$/.test(u) && n === "firstParty" && Ci() ? ` cc_prev_req=${u};` : "",
    v = p !== void 0 && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(p) && n === "firstParty" && Ci() ? ` cc_prompt_id=${p};` : "",
    k = typeof d === "string" && /^[a-z][a-z_]{0,31}$/.test(d) && n === "firstParty" && Ci() ? ` cc_turn_origin=${d};` : "",
    P = T?.promptIndex,
    m = T?.turnIndex,
    j = c(P, 0) && c(m, 1) && n === "firstParty" && Ci() ? ` cc_prompt_index=${P}; cc_turn_index=${m};` : "",
    a = n === "gateway" ? Xr() : null,
    A = (n === "gateway" || jSe() !== void 0) && G(a),
    _ = a?.url ?? i.ANTHROPIC_BASE_URL,
    L = _ !== void 0 && (!URL.canParse(_) || VPr(Cz(new URL(_)))) || a?.hostVerdict !== void 0 && "vouched" in a.hostVerdict,
    H = (n === "gateway" || A) && !L ? ` cc_gateway=${A?"1":"env"};` : "",
    s = o?.attributionProject,
    q = s !== void 0 && qRs.test(s.taggedId) && F.has(s.source) && S() ? ` cc_project=${s.taggedId}; cc_project_src=${s.source};` : "",
    E = o?.responseBeforeCompaction?.messageId,
    O = o?.responseBeforeCompaction?.turnPosition?.promptIndex,
    g = o?.responseBeforeCompaction?.turnPosition?.turnIndex,
    R = n === "firstParty" && Ci(),
    Y = E !== void 0 && /^msg_[A-Za-z0-9_]{1,64}$/.test(E) && R ? ` cc_prev_msg=${E};` : "",
    B = c(O, 0) && c(g, 1) && R ? ` cc_prev_prompt_index=${O}; cc_prev_turn_index=${g};` : "",
    y = `x-anthropic-billing-header: cc_version=${b}; cc_entrypoint=${h};${U}${x}${D}${w}${v}${k}${j}${H}${q}${Y}${B}`;
  return t(`attribution header ${y}`), y
}
var f = "local_projects";

function JAr() {
  if (une() !== void 0) return !1;
  return WKn(f), !0
}

function Oqi() {
  if (une() === f) WKn(void 0)
}

function Iqi() {
  if (une() !== void 0 || i.CLAUDE_CODE_ENTRYPOINT !== "sdk-cli") return !1;
  return WKn(bjt), !0
}
var C = "claude-desktop-3p";

function Mqi() {
  let e = i.CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS;
  if (i.unset("CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS"), e === void 0) return;
  let r = une();
  if (r !== void 0) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: requests already go out under the name "${r}"`);
    return
  }
  if (i.CLAUDE_CODE_ENTRYPOINT !== C) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: it is read only when CLAUDE_CODE_ENTRYPOINT is ${C}, not "${i.CLAUDE_CODE_ENTRYPOINT??""}"`);
    return
  }
  if (!Bna(e)) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: "${e}" must be 1 to 32 characters of a-z, 0-9, _ and -, start with a letter and not start with sdk`);
    return
  }
  if (mVn(e) !== void 0 || FPo(e) || e === f) {
    t(`CLAUDE_CODE_ENTRYPOINT_ON_REQUESTS ignored: "${e}" is reserved (an entrypoint name, a name beginning with remote, or local_projects)`);
    return
  }
  WKn(e)
}

function E2e(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(OC))
}

function Dqi(e) {
  if (e.isSubscriber) return {
    apiKey: null,
    authToken: e.oauthAccessToken ?? null
  };
  return {
    apiKey: e.apiKey,
    authToken: null
  }
}

function c(e, r) {
  return typeof e === "number" && Number.isInteger(e) && e >= r && e <= 1e7
}

function N() {
  return Te() === "firstParty" && Yc() && !i.ANTHROPIC_UNIX_SOCKET
}

function S() {
  return N() && !i.CLAUDE_CODE_REMOTE && !I()
}

function I() {
  return rs(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER)
}
var F = new Set(M);
export {
  qRs,
  Pqi,
  YRs,
  JAr,
  Oqi,
  Iqi,
  Mqi,
  E2e,
  Dqi
};
