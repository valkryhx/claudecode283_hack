// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Xr
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  EM
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Fn
} from "B:/~BUN/root/chunk-8f4z6bdn.js";

function t() {
  if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return !1;
  if (!Fn()) return !0;
  return !1
}

function sXi() {
  return i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !i.CLAUDE_CODE_BYOC_ENABLE_DATADOG
}

function e() {
  return i.CLAUDE_CODE_CUSTOM_OAUTH_URL !== void 0
}

function uUt() {
  return !EM() && !e()
}

function sS() {
  return EM() || t() || Xr() !== null || e()
}

function bSe() {
  return t() || Xr() !== null || e()
}

function npe() {
  return i.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL
}

function _J() {
  if (npe()) return !1;
  return EM()
}
export {
  sXi,
  uUt,
  sS,
  bSe,
  npe,
  _J
};
