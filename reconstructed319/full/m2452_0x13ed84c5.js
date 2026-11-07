// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  cQ,
  w8,
  Dle
} from "B:/~BUN/root/chunk-m14ekgr4.js";
import "B:/~BUN/root/chunk-kkxpsb0h.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var t = Oe(cQ()),
  e = Oe(w8()),
  o = Oe(Dle());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(o.createOtlpHttpExportDelegate(o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", {
      "Content-Type": "application/x-protobuf"
    }), e.ProtobufLogsSerializer))
  }
}
export {
  r as OTLPLogExporter
};
