// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Jj, wU, t4 } from "B:/~BUN/root/chunk-4b5c5wsn.js";
import "B:/~BUN/root/chunk-gptbhnvb.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var t = be(Jj()),
  o = be(wU()),
  r = be(t4());
class e extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", {
      "Content-Type": "application/json"
    }), o.JsonTraceSerializer));
  }
}
export { e as OTLPTraceExporter };