// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bo
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  $d
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  oPe
} from "B:/~BUN/root/chunk-ws830w2f.js";
import {
  KMo
} from "B:/~BUN/root/chunk-y1bqc7ky.js";
var Gwe = "repo_rules_unread";

function qpa(e, o) {
  let t = oPe(e, o.meta);
  return t instanceof Promise ? t.then((r) => s(r, o)) : s(t, o)
}

function s(e, o) {
  if (e.refused !== void 0) return (e.refused.cause === "repo_rules_read_failed" ? m : c)("mcp_serve_file_call", e.refused.cause), Gwe;
  return e.repoRules === void 0 ? o.launchPermissionContext : n(o.launchPermissionContext, e.repoRules, o)
}

function n(e, o, {
  session: t
}) {
  let r = e ?? $d();
  return {
    ...r,
    ...KMo({
      alwaysDenyRules: {},
      alwaysAskRules: {}
    }, r, Bo(t).originalCwd, o, "upload")
  }
}
export {
  Gwe,
  qpa
};
