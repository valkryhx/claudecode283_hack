// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  wo
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  $D
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  zn
} from "B:/~BUN/root/chunk-sd4cj2qx.js";

function e() {
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return !1;
  return !zn()
}

function uLo() {
  return a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !a.CLAUDE_CODE_BYOC_ENABLE_DATADOG
}

function t() {
  return a.CLAUDE_CODE_CUSTOM_OAUTH_URL !== void 0
}

function Ng() {
  return e() || wo() !== null || $D() || t()
}

function pLo() {
  return e() || wo() !== null || t()
}

function J6() {
  return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL
}

function PN() {
  if (J6()) return !1;
  return $D()
}
export {
  uLo,
  Ng,
  pLo,
  J6,
  PN
};
