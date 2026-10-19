// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Hd } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Ht } from "B:/~BUN/root/chunk-hb6x4e3n.js";
function GXo() {
  return !Ht();
}
function Ynt(o) {
  return o.filter(item => !item.mcpErrorMetadata && !item.statusOnly && !item.startupFatal);
}
function Xnt(o) {
  let statusNotices = [],
    invalidEntries = [];
  for (let n of o) (n.statusOnly ? statusNotices : invalidEntries).push(n);
  return {
    statusNotices: statusNotices,
    invalidEntries: invalidEntries
  };
}
function Jnt(o) {
  for (let r of o) t(`Invalid setting skipped without dialog (automated session): ${r.file === void 0 ? "settings" : Hd(r.file)}: ${r.path}: ${r.message}`, {
    level: "error"
  });
}
export { GXo, Ynt, Xnt, Jnt };