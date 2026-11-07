// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  TSn
} from "B:/~BUN/root/chunk-mnfsb3sg.js";
import {
  cQ,
  w8
} from "B:/~BUN/root/chunk-m14ekgr4.js";
import "B:/~BUN/root/chunk-kkxpsb0h.js";
import {
  M
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var s = M(function(p) {
  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  p.OTLPTraceExporter = void 0;
  var e = TSn(),
    t = w8(),
    o = cQ();
  class c extends o.OTLPExporterBase {
    constructor(u = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u, "TRACES"), t.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"))
    }
  }
  p.OTLPTraceExporter = c
});
var l = M(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  r.OTLPTraceExporter = void 0;
  var i = s();
  Object.defineProperty(r, "OTLPTraceExporter", {
    enumerable: !0,
    get: function() {
      return i.OTLPTraceExporter
    }
  })
});
export default l();
