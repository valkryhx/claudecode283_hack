// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ner
} from "B:/~BUN/root/chunk-hhzpm2ex.js";
import {
  w8,
  Dle
} from "B:/~BUN/root/chunk-m14ekgr4.js";
import "B:/~BUN/root/chunk-kkxpsb0h.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var o = Oe(Ner()),
  p = Oe(w8()),
  r = Oe(Dle());
class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", {
      "Content-Type": "application/x-protobuf"
    }), p.ProtobufMetricsSerializer), e)
  }
}
export {
  t as OTLPMetricExporter
};
