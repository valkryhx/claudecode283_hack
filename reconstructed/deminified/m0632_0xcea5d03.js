// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { vt } from "B:/~BUN/root/chunk-gf53qpk6.js";
function d8r() {
  return !vt();
}
function u8r(o) {
  return o.filter(item => !item.mcpErrorMetadata && !item.statusOnly && !item.startupFatal);
}
function nje(o) {
  let statusNotices = [],
    invalidEntries = [];
  for (let n of o) (n.statusOnly ? statusNotices : invalidEntries).push(n);
  return {
    statusNotices: statusNotices,
    invalidEntries: invalidEntries
  };
}
function p8r(o) {
  for (let r of o) t(`Invalid setting skipped without dialog (automated session): ${r.file ?? "settings"}: ${r.path}: ${r.message}`, {
    level: "error"
  });
}
export { d8r, u8r, nje, p8r };