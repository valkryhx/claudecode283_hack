// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  $Uo
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  t_t,
  n0e,
  Gle
} from "B:/~BUN/root/chunk-1gpjpba6.js";

function yIe() {
  if (!t_t()) throw Error("the MDM settings have not been read yet");
  if (Gle()) throw Error("an admin-owned settings document could not be read");
  if ($Uo() !== void 0) throw Error("the managed-settings path was overridden");
  let e = n0e()[0]?.forceLoginOrgUUID;
  if (e === void 0) return;
  return typeof e === "string" ? [e] : e
}
export {
  yIe
};
