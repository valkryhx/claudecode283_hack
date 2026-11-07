// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { cQ, w8, Dle } from "B:/~BUN/root/chunk-m14ekgr4.js";
import "B:/~BUN/root/chunk-kkxpsb0h.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var t = Oe(cQ()),
  o = Oe(w8()),
  r = Oe(Dle());
class e extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", {
      "Content-Type": "application/json"
    }), o.JsonTraceSerializer));
  }
}
export { e as OTLPTraceExporter };