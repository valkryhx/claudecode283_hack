// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { a$s } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { CAe, AKe, H4 } from "B:/~BUN/root/chunk-7wn6n2hd.js";
function dRe() {
  if (!CAe()) throw Error("the MDM settings have not been read yet");
  if (H4()) throw Error("an admin-owned settings document could not be read");
  if (a$s() !== void 0) throw Error("the managed-settings path was overridden");
  let e = AKe()[0]?.forceLoginOrgUUID;
  if (e === void 0) return;
  return typeof e === "string" ? [e] : e;
}
export { dRe };