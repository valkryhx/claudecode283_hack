// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { TSn } from "B:/~BUN/root/chunk-mnfsb3sg.js";
import { cQ, w8 } from "B:/~BUN/root/chunk-m14ekgr4.js";
import "B:/~BUN/root/chunk-kkxpsb0h.js";
import { M } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var u = M(function (s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.OTLPLogExporter = void 0;
  var e = TSn(),
    t = w8(),
    o = cQ();
  class p extends o.OTLPExporterBase {
    constructor(L = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L, "LOGS"), t.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
    }
  }
  s.OTLPLogExporter = p;
});
var n = M(function (r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  r.OTLPLogExporter = void 0;
  var i = u();
  Object.defineProperty(r, "OTLPLogExporter", {
    enumerable: !0,
    get: function () {
      return i.OTLPLogExporter;
    }
  });
});
export default n();