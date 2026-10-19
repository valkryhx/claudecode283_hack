// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _n, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Or, xe, bp } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { fW } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { DM, rge, tt, qH, lJ } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { sn } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { FFt } from "B:/~BUN/root/chunk-pbq7kcha.js";
import { eRs, tRs, nRs, Ien } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { A6t as roots, uZr, Kxn, bCt } from "B:/~BUN/root/chunk-e6jzpkbb.js";
import { yOn, eRt } from "B:/~BUN/root/chunk-vac5hr4g.js";
import { Mn } from "B:/~BUN/root/chunk-j0ghr71r.js";
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
    i = Ien(e, n) !== null ? `applied to ${p(n)} (document v${e.version})` : o === "" ? `loaded (document v${e.version}), nothing in it for any model (its publisher switched it off)` : `loaded (document v${e.version}), nothing in it for ${p(n)}; it has entries for models matching ${o}`;
  return r ? `${i}; base URL treated as the Anthropic API` : i;
}
function E(e) {
  return p(e.entries.map(item => item.pattern.source).join(", "));
}
function p(e) {
  return _n(R(e));
}
function D() {
  let e = a.CLAUDE_CODE_CLIENT_DATA_URL?.trim();
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
  if (n.protocol !== "https:" || n.username !== "" || n.password !== "" || n.port !== "" || !fW(n.hostname) || /[?#]/.test(e) || !eRs.test(n.pathname)) return {
    kind: "invalid_url"
  };
  return {
    kind: "ok",
    source: {
      url: n.toString(),
      signingContext: tRs(n.pathname),
      cacheKey: uZr(n.pathname),
      roots: roots
    }
  };
}
function d() {
  return Or().clientDataUrl;
}
function Zss({
  flagUrl: flagUrl,
  runsOnAnotherMachine = !1,
  buildVersion: buildVersion_2 = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION
} = {}) {
  try {
    if (flagUrl !== void 0) a.set("CLAUDE_CODE_CLIENT_DATA_URL", flagUrl);
    let resolution = D();
    if (resolution.kind === "unset" || !k() || U(resolution, runsOnAnotherMachine) !== void 0) return;
    let loaded = g(resolution, runsOnAnotherMachine, buildVersion_2);
    loaded.catch(() => {}), d().pending = {
      resolution: resolution,
      loaded: loaded
    };
  } catch (error) {
    l(error);
  }
}
async function eis() {
  try {
    let pending = d().pending;
    if (pending === void 0) return !1;
    let n = await pending.loaded;
    return "document" in n && L(n.document);
  } catch (error) {
    return l(error), !1;
  }
}
async function tis({
  runsOnAnotherMachine: runsOnAnotherMachine_2 = !1,
  buildVersion: buildVersion_3 = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION
} = {}) {
  try {
    let r = D(),
      pending_2 = d().pending;
    d().pending = void 0;
    let i = pending_2 !== void 0 && b(pending_2.resolution, r) ? pending_2 : void 0;
    if (r.kind === "unset") {
      w();
      return;
    }
    let failure = U(r, runsOnAnotherMachine_2);
    if (failure !== void 0 || pending_2 !== void 0 && i === void 0) w();
    if (failure === void 0 && i === void 0 && !sn("allow_model_catalog")) return f(m("policy_denied"));
    let u = failure !== void 0 ? {
      failure: failure
    } : i !== void 0 ? await i.loaded : await g(r, runsOnAnotherMachine_2, buildVersion_3);
    if (i !== void 0 && "failure" in u && S.has(u.failure)) u = await g(r, runsOnAnotherMachine_2, buildVersion_3);
    if ("failure" in u) return f(m(u.failure, u));
    if (i !== void 0 && !sn("allow_model_catalog")) return f(m("policy_denied"));
    if (L(u.document)) FFt();
    if (r.kind === "ok") await eRt(r.source.cacheKey, u.document);
    d().document = u.document, t(`[clientDataUrl] loaded document v${u.document.version} covering ${u.document.entries.length} model pattern(s)`);
    return;
  } catch (error) {
    return l(error), f(m("exception"));
  }
}
function L(e) {
  if (d().assumesFirstPartyBaseUrl) return !1;
  let n = e.entries.find(item => item.clientData.assume_first_party_base_url === !0);
  if (n === void 0 || bp()) return !1;
  if (a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL !== void 0 || y()) return t(`[clientDataUrl] assume_first_party_base_url in the document not applied: ${y() ? "the host manages the provider" : "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL is already set"}`), !1;
  return d().assumesFirstPartyBaseUrl = !0, qH(), lJ(), t(`[clientDataUrl] assume_first_party_base_url applied (entry ${n.pattern.source}): the base URL is treated as the Anthropic API from here on`), !0;
}
function nis() {
  let {
    document: document
  } = d();
  if (document === void 0 || a.CLAUDE_CODE_ALLOW_OTHER_MODELS) return;
  let n = Mn(tt());
  return Ien(document, n) === null ? A(document, n) : void 0;
}
function ris(e, n) {
  let {
    document: document_2
  } = d();
  if (document_2 === void 0) return e;
  let o = Ien(document_2, Mn(n ?? tt()));
  return o === null ? e : {
    ...e,
    ...o
  };
}
function ois(e) {
  let {
    document: document_3
  } = d();
  return document_3 !== void 0 && document_3.entries.length > 0 && Ien(document_3, Mn(e ?? tt())) === null;
}
function sis() {
  let {
    document: document_4
  } = d();
  return document_4 === void 0 ? void 0 : v(document_4, Mn(tt()), d().assumesFirstPartyBaseUrl);
}
async function g(e, n, buildVersion_4) {
  let o = U(e, n);
  if (o !== void 0 || e.kind !== "ok") return {
    failure: o ?? "invalid_url"
  };
  let {
      source: source
    } = e,
    s = await Kxn({
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
  if (s.status !== "ok") {
    let {
      httpStatus: httpStatus_2
    } = s;
    if (httpStatus_2 === 404 || httpStatus_2 === 410) return {
      failure: "not_found"
    };
    return {
      failure: s.status === "error" ? s.reason : "http_status",
      httpStatus: httpStatus_2
    };
  }
  if (!s.hasSidecar) {
    let {
      sidecarHttpStatus: c
    } = s;
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
  let u = await bCt({
    documentBytes: s.documentBytes,
    sidecar: s.sidecar,
    roots: source.roots,
    context: source.signingContext
  });
  if (!u.ok) return {
    failure: u.reason
  };
  let _ = nRs(s.documentBytes);
  if (!_.ok) return {
    failure: _.reason
  };
  let {
    document: document_5
  } = _;
  if (document_5.version < (await yOn(source.cacheKey))) return {
    failure: "replayed_version"
  };
  let {
    minClaudeCodeVersion: minClaudeCodeVersion_2
  } = document_5;
  if (minClaudeCodeVersion_2 !== void 0 && DM(rge(buildVersion_4), minClaudeCodeVersion_2)) return {
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
  if (xe() !== "firstParty") return "third_party_provider";
  return;
}
function y() {
  return a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || a.CLAUDE_CODE_HOST_AUTH_ENV_VAR !== void 0;
}
function k() {
  return xe() === "firstParty" && !bp() && a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL === void 0 && !y();
}
var S = new Set(["network", "http_status", "read_failed"]);
function b(e, n) {
  return e.kind === "ok" ? n.kind === "ok" && e.source.url === n.source.url : n.kind === "invalid_url";
}
function w() {
  if (!d().assumesFirstPartyBaseUrl) return;
  d().assumesFirstPartyBaseUrl = !1, qH(), lJ(), t("[clientDataUrl] assume_first_party_base_url withdrawn: the launch does not use the document it came from");
}
export { Zss, eis, tis, nis, ris, ois, sis };