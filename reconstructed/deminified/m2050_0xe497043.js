// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { m4t } from "B:/~BUN/root/chunk-263zss4y.js";
import { wU, t4 } from "B:/~BUN/root/chunk-4b5c5wsn.js";
import "B:/~BUN/root/chunk-gptbhnvb.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var o = be(m4t()),
  p = be(wU()),
  r = be(t4());
class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", {
      "Content-Type": "application/x-protobuf"
    }), p.ProtobufMetricsSerializer), e);
  }
}
export { t as OTLPMetricExporter };