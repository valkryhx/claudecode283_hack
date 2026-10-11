// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { m4t } from "B:/~BUN/root/chunk-263zss4y.js";
import { KSt } from "B:/~BUN/root/chunk-jrprj4p5.js";
import { wU } from "B:/~BUN/root/chunk-4b5c5wsn.js";
import "B:/~BUN/root/chunk-gptbhnvb.js";
import { k } from "B:/~BUN/root/chunk-yv67t8hr.js";
var u = k(function (i) {
  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  i.OTLPMetricExporter = void 0;
  var o = m4t(),
    e = KSt(),
    c = wU();
  class p extends o.OTLPMetricExporterBase {
    constructor(t) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(t ?? {}, "METRICS"), c.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), t);
    }
  }
  i.OTLPMetricExporter = p;
});
var n = k(function (r) {
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