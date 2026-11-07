// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { xh } from "B:/~BUN/root/chunk-psjm1gcn.js";
import { j0e } from "B:/~BUN/root/chunk-tnfsxzpz.js";
function pkt() {
  return xh() || j0e();
}
function P4s(e) {
  switch (e.kind) {
    case "elsewhere":
      return "elsewhere";
    case "nowhere":
      return e.hasOwnSessionRecord ? "here_only" : "nowhere";
    case "unknown":
      return e.why === "not_looked" ? "not_looked" : "unknown";
  }
}
function s4n(e, o) {
  l("tengu_remote_attach_record_lookup", {
    outcome: f(e),
    entry_point: f(o)
  });
}
export { pkt, P4s, s4n };