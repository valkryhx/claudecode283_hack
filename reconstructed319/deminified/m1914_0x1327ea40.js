// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Gt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { yf, id } from "B:/~BUN/root/chunk-65j2302z.js";
import { Fc } from "B:/~BUN/root/chunk-trd3c21n.js";
import { k1 } from "B:/~BUN/root/chunk-jmka9ye7.js";
function i7n() {
  return Gt() ? "bg" : Fc() ? "teammate" : k1() ? "remote" : id() ? "desktop" : yf() === "claude-vscode" ? "vscode" : null;
}
export { i7n };