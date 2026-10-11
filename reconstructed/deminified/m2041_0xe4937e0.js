// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { KSt } from "B:/~BUN/root/chunk-jrprj4p5.js";
import { Jj, wU } from "B:/~BUN/root/chunk-4b5c5wsn.js";
import "B:/~BUN/root/chunk-gptbhnvb.js";
import { k } from "B:/~BUN/root/chunk-yv67t8hr.js";
var u = k(function (s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.OTLPLogExporter = void 0;
  var e = KSt(),
    t = wU(),
    o = Jj();
  class p extends o.OTLPExporterBase {
    constructor(L = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(L, "LOGS"), t.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
    }
  }
  s.OTLPLogExporter = p;
});
var n = k(function (r) {
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