// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { RY, jV, k7 } from "B:/~BUN/root/chunk-796wnyck.js";
import "B:/~BUN/root/chunk-fpterrex.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var t = ve(RY()),
  o = ve(jV()),
  r = ve(k7());
class e extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", {
      "Content-Type": "application/json"
    }), o.JsonTraceSerializer));
  }
}
export { e as OTLPTraceExporter };