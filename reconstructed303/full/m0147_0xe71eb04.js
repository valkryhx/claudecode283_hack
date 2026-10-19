// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Br
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  _$
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Xn
} from "B:/~BUN/root/chunk-8pmnanyd.js";

function t() {
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return !1;
  return !Xn()
}

function xGs() {
  return a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !a.CLAUDE_CODE_BYOC_ENABLE_DATADOG
}

function e() {
  return a.CLAUDE_CODE_CUSTOM_OAUTH_URL !== void 0
}

function icn() {
  return !_$() && !e()
}

function fy() {
  return _$() || t() || Br() !== null || e()
}

function R3n() {
  return t() || Br() !== null || e()
}

function Gte() {
  return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL
}

function i4() {
  if (Gte()) return !1;
  return _$()
}
export {
  xGs,
  icn,
  fy,
  R3n,
  Gte,
  i4
};
