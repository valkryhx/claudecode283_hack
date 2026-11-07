// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Nn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { yYi, _Yi, bYi, qUn, eM, zNe, at, V1, U3 } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { pr, Te, Yc } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { X4 } from "B:/~BUN/root/chunk-wthaftk0.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { LQe } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { Aar, T6t } from "B:/~BUN/root/chunk-pfdcv2sc.js";
import { GEn as roots, G7o, Rar, E6t } from "B:/~BUN/root/chunk-6dms8sre.js";
import { Gn } from "B:/~BUN/root/chunk-zpne314q.js";
import { stripVTControlCharacters as R } from "util";
function f(e) {
  return `Error: --client-data-url: ${e}. Claude Code does not start without the configuration it was given; to start without it, remove the flag, or remove CLAUDE_CODE_CLIENT_DATA_URL from your environment or settings.`;
}
function m(e, {
  httpStatus: httpStatus,
  minClaudeCodeVersion: minClaudeCodeVersion,
  buildVersion: buildVersion
} = {}) {
  switch (e) {
    case "invalid_url":
      return "the URL must be the https://downloads.claude.ai/ address Anthropic gave you, exactly as given";
    case "remote_session":
      return "it cannot be used in a cloud, remote-environment or ssh session, which runs Claude Code on another machine";
    case "third_party_provider":
      return "it only works when Claude Code talks to the Anthropic API directly, not through a cloud provider such as Bedrock, Vertex or Foundry, or a cloud gateway";
    case "policy_denied":
      return "your organization's policy does not allow it";
    case "not_found":
      return "there is nothing at that URL; it may have been withdrawn, so ask Anthropic for a new one";
    case "http_status":
    case "timeout":
    case "network":
    case "read_failed":
      return `Claude Code could not fetch the document from downloads.claude.ai (${e === "http_status" ? `HTTP ${httpStatus ?? "error"}` : e}); check that your network or proxy allows https://downloads.claude.ai`;
    case "too_large":
      return "the server returned something too large to be a configuration document; try again, and if it keeps happening ask Anthropic";
    case "unsigned":
    case "sidecar_invalid":
    case "bad_signature":
    case "parse_failed":
      return `the document or its signature is not valid (${e}); ask Anthropic for a new URL`;
    case "unknown_key":
    case "key_unusable":
    case "unsupported_schema":
      return `this version of Claude Code cannot read the document (${e}); update Claude Code`;
    case "replayed_version":
      return "the server returned an older document than one already accepted on this machine; a proxy on your network may be serving an old copy; if not, ask Anthropic for a new URL";
    case "below_minimum_version":
      return `the document requires Claude Code ${minClaudeCodeVersion} or newer and this build is ${buildVersion}; run claude update`;
    case "exception":
      return "Claude Code hit an internal error loading it; run with --debug for details";
  }
}
function A(e, n) {
  let r = E(e);
  return r === "" ? "Error: --client-data-url: the document has nothing for any model (its publisher switched it off). Remove --client-data-url or CLAUDE_CODE_CLIENT_DATA_URL, or pass --allow-other-models (CLAUDE_CODE_ALLOW_OTHER_MODELS=1) to start without applying it." : `Error: --client-data-url: the document has no entry for ${p(n)}; it has entries for models matching ${r}. Pass a matching --model, or --allow-other-models (CLAUDE_CODE_ALLOW_OTHER_MODELS=1) to start without applying it.`;
}
function v(e, n, r) {
  let o = E(e),
    s = qUn(e, n) !== null ? `applied to ${p(n)} (document v${e.version})` : o === "" ? `loaded (document v${e.version}), nothing in it for any model (its publisher switched it off)` : `loaded (document v${e.version}), nothing in it for ${p(n)}; it has entries for models matching ${o}`;
  return r ? `${s}; base URL treated as the Anthropic API` : s;
}
function E(e) {
  return p(e.entries.map(item => item.pattern.source).join(", "));
}
function p(e) {
  return Nn(R(e));
}
function D() {
  let e = i.CLAUDE_CODE_CLIENT_DATA_URL?.trim();
  if (!e) return {
    kind: "unset"
  };
  let n;
  try {
    n = new URL(e);
  } catch {
    return {
      kind: "invalid_url"
    };
  }
  if (n.protocol !== "https:" || n.username !== "" || n.password !== "" || n.port !== "" || !X4(n.hostname) || /[?#]/.test(e) || !yYi.test(n.pathname)) return {
    kind: "invalid_url"
  };
  return {
    kind: "ok",
    source: {
      url: n.toString(),
      signingContext: _Yi(n.pathname),
      cacheKey: G7o(n.pathname),
      roots: roots
    }
  };
}
function d() {
  return pr().clientDataUrl;
}
function Dmi({
  flagUrl: flagUrl,
  runsOnAnotherMachine = !1,
  buildVersion: buildVersion_2 = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION
} = {}) {
  try {
    if (flagUrl !== void 0) i.set("CLAUDE_CODE_CLIENT_DATA_URL", flagUrl);
    let resolution = D();
    if (resolution.kind === "unset" || !k() || U(resolution, runsOnAnotherMachine) !== void 0) return;
    let loaded = g(resolution, runsOnAnotherMachine, buildVersion_2);
    loaded.catch(() => {}), d().pending = {
      resolution: resolution,
      loaded: loaded
    };
  } catch (error) {
    a(error);
  }
}
async function Lmi() {
  try {
    let pending = d().pending;
    if (pending === void 0) return !1;
    let n = await pending.loaded;
    return "document" in n && L(n.document);
  } catch (error) {
    return a(error), !1;
  }
}
async function Nmi({
  runsOnAnotherMachine: runsOnAnotherMachine_2 = !1,
  buildVersion: buildVersion_3 = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION
} = {}) {
  try {
    let r = D(),
      pending_2 = d().pending;
    d().pending = void 0;
    let s = pending_2 !== void 0 && b(pending_2.resolution, r) ? pending_2 : void 0;
    if (r.kind === "unset") {
      w();
      return;
    }
    let failure = U(r, runsOnAnotherMachine_2);
    if (failure !== void 0 || pending_2 !== void 0 && s === void 0) w();
    if (failure === void 0 && s === void 0 && !gn("allow_model_catalog")) return f(m("policy_denied"));
    let l = failure !== void 0 ? {
      failure: failure
    } : s !== void 0 ? await s.loaded : await g(r, runsOnAnotherMachine_2, buildVersion_3);
    if (s !== void 0 && "failure" in l && S.has(l.failure)) l = await g(r, runsOnAnotherMachine_2, buildVersion_3);
    if ("failure" in l) return f(m(l.failure, l));
    if (s !== void 0 && !gn("allow_model_catalog")) return f(m("policy_denied"));
    if (L(l.document)) LQe();
    if (r.kind === "ok") await T6t(r.source.cacheKey, l.document);
    d().document = l.document, t(`[clientDataUrl] loaded document v${l.document.version} covering ${l.document.entries.length} model pattern(s)`);
    return;
  } catch (error) {
    return a(error), f(m("exception"));
  }
}
function L(e) {
  if (d().assumesFirstPartyBaseUrl) return !1;
  let n = e.entries.find(item => item.clientData.assume_first_party_base_url === !0);
  if (n === void 0 || Yc()) return !1;
  if (i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL !== void 0 || y()) return t(`[clientDataUrl] assume_first_party_base_url in the document not applied: ${y() ? "the host manages the provider" : "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL is already set"}`), !1;
  return d().assumesFirstPartyBaseUrl = !0, V1(), U3(), t(`[clientDataUrl] assume_first_party_base_url applied (entry ${n.pattern.source}): the base URL is treated as the Anthropic API from here on`), !0;
}
function Fmi() {
  let {
    document: document
  } = d();
  if (document === void 0 || i.CLAUDE_CODE_ALLOW_OTHER_MODELS) return;
  let n = Gn(at());
  return qUn(document, n) === null ? A(document, n) : void 0;
}
function Hmi(e, n) {
  let {
    document: document_2
  } = d();
  if (document_2 === void 0) return e;
  let o = qUn(document_2, Gn(n ?? at()));
  return o === null ? e : {
    ...e,
    ...o
  };
}
function $mi(e) {
  let {
    document: document_3
  } = d();
  return document_3 !== void 0 && document_3.entries.length > 0 && qUn(document_3, Gn(e ?? at())) === null;
}
function Umi() {
  let {
    document: document_4
  } = d();
  return document_4 === void 0 ? void 0 : v(document_4, Gn(at()), d().assumesFirstPartyBaseUrl);
}
async function g(e, n, buildVersion_4) {
  let o = U(e, n);
  if (o !== void 0 || e.kind !== "ok") return {
    failure: o ?? "invalid_url"
  };
  let {
      source: source
    } = e,
    u = await Rar({
      kind: "hosted",
      url: source.url,
      trust: {
        kind: "compiled_roots",
        roots: source.roots
      },
      cacheKey: source.cacheKey
    }, {
      noCache: !0
    });
  if (u.status !== "ok") {
    let {
      httpStatus: httpStatus_2
    } = u;
    if (httpStatus_2 === 404 || httpStatus_2 === 410) return {
      failure: "not_found"
    };
    return {
      failure: u.status === "error" ? u.reason : "http_status",
      httpStatus: httpStatus_2
    };
  }
  if (!u.hasSidecar) {
    let {
      sidecarHttpStatus: c
    } = u;
    if (c === void 0 || c === 404 || c === 410) return {
      failure: "unsigned"
    };
    return c >= 200 && c < 300 ? {
      failure: "too_large"
    } : {
      failure: "http_status",
      httpStatus: c
    };
  }
  let l = await E6t({
    documentBytes: u.documentBytes,
    sidecar: u.sidecar,
    roots: source.roots,
    context: source.signingContext
  });
  if (!l.ok) return {
    failure: l.reason
  };
  let _ = bYi(u.documentBytes);
  if (!_.ok) return {
    failure: _.reason
  };
  let {
    document: document_5
  } = _;
  if (document_5.version < (await Aar(source.cacheKey))) return {
    failure: "replayed_version"
  };
  let {
    minClaudeCodeVersion: minClaudeCodeVersion_2
  } = document_5;
  if (minClaudeCodeVersion_2 !== void 0 && eM(zNe(buildVersion_4), minClaudeCodeVersion_2)) return {
    failure: "below_minimum_version",
    minClaudeCodeVersion: minClaudeCodeVersion_2,
    buildVersion: buildVersion_4
  };
  return {
    document: document_5
  };
}
function U(e, n) {
  if (e.kind === "invalid_url") return "invalid_url";
  if (n) return "remote_session";
  if (Te() !== "firstParty") return "third_party_provider";
  return;
}
function y() {
  return i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || i.CLAUDE_CODE_HOST_AUTH_ENV_VAR !== void 0;
}
function k() {
  return Te() === "firstParty" && !Yc() && i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL === void 0 && !y();
}
var S = new Set(["network", "http_status", "read_failed"]);
function b(e, n) {
  return e.kind === "ok" ? n.kind === "ok" && e.source.url === n.source.url : n.kind === "invalid_url";
}
function w() {
  if (!d().assumesFirstPartyBaseUrl) return;
  d().assumesFirstPartyBaseUrl = !1, V1(), U3(), t("[clientDataUrl] assume_first_party_base_url withdrawn: the launch does not use the document it came from");
}
export { Dmi, Lmi, Nmi, Fmi, Hmi, $mi, Umi };