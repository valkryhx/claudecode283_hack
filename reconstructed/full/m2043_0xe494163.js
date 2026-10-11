// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  KSt
} from "B:/~BUN/root/chunk-jrprj4p5.js";
import {
  Jj,
  wU
} from "B:/~BUN/root/chunk-4b5c5wsn.js";
import "B:/~BUN/root/chunk-gptbhnvb.js";
import {
  k
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var s = k(function(p) {
  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  p.OTLPTraceExporter = void 0;
  var e = KSt(),
    t = wU(),
    o = Jj();
  class c extends o.OTLPExporterBase {
    constructor(u = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u, "TRACES"), t.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"))
    }
  }
  p.OTLPTraceExporter = c
});
var l = k(function(r) {
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
