// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ner } from "B:/~BUN/root/chunk-hhzpm2ex.js";
import { TSn } from "B:/~BUN/root/chunk-mnfsb3sg.js";
import { w8 } from "B:/~BUN/root/chunk-m14ekgr4.js";
import "B:/~BUN/root/chunk-kkxpsb0h.js";
import { M } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var u = M(function (i) {
  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  i.OTLPMetricExporter = void 0;
  var o = Ner(),
    e = TSn(),
    c = w8();
  class p extends o.OTLPMetricExporterBase {
    constructor(t) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(t ?? {}, "METRICS"), c.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), t);
    }
  }
  i.OTLPMetricExporter = p;
});
var n = M(function (r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  r.OTLPMetricExporter = void 0;
  var l = u();
  Object.defineProperty(r, "OTLPMetricExporter", {
    enumerable: !0,
    get: function () {
      return l.OTLPMetricExporter;
    }
  });
});
export default n();