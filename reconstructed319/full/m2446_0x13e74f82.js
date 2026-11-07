// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  cQ,
  w8,
  Dle
} from "B:/~BUN/root/chunk-m14ekgr4.js";
import {
  D6e
} from "B:/~BUN/root/chunk-kkxpsb0h.js";
import {
  od,
  Jh
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  M
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var l = M(function(y) {
  Object.defineProperty(y, "__esModule", {
    value: !0
  });
  y.AggregationTemporalityPreference = void 0;
  var I;
  (function(r) {
    r[r.DELTA = 0] = "DELTA", r[r.CUMULATIVE = 1] = "CUMULATIVE", r[r.LOWMEMORY = 2] = "LOWMEMORY"
  })(I = y.AggregationTemporalityPreference || (y.AggregationTemporalityPreference = {}))
});
var s = M(function(P) {
  Object.defineProperty(P, "__esModule", {
    value: !0
  });
  P.OTLPMetricExporterBase = P.LowMemoryTemporalitySelector = P.DeltaTemporalitySelector = P.CumulativeTemporalitySelector = void 0;
  var O = Jh(),
    e = D6e(),
    o = l(),
    g = cQ(),
    _ = od(),
    b = () => e.AggregationTemporality.CUMULATIVE;
  P.CumulativeTemporalitySelector = b;
  var B = (r) => {
    switch (r) {
      case e.InstrumentType.COUNTER:
      case e.InstrumentType.OBSERVABLE_COUNTER:
      case e.InstrumentType.GAUGE:
      case e.InstrumentType.HISTOGRAM:
      case e.InstrumentType.OBSERVABLE_GAUGE:
        return e.AggregationTemporality.DELTA;
      case e.InstrumentType.UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        return e.AggregationTemporality.CUMULATIVE
    }
  };
  P.DeltaTemporalitySelector = B;
  var D = (r) => {
    switch (r) {
      case e.InstrumentType.COUNTER:
      case e.InstrumentType.HISTOGRAM:
        return e.AggregationTemporality.DELTA;
      case e.InstrumentType.GAUGE:
      case e.InstrumentType.UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      case e.InstrumentType.OBSERVABLE_COUNTER:
      case e.InstrumentType.OBSERVABLE_GAUGE:
        return e.AggregationTemporality.CUMULATIVE
    }
  };
  P.LowMemoryTemporalitySelector = D;

  function j() {
    let r = (O.getStringFromEnv("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
    if (r === "cumulative") return P.CumulativeTemporalitySelector;
    if (r === "delta") return P.DeltaTemporalitySelector;
    if (r === "lowmemory") return P.LowMemoryTemporalitySelector;
    return _.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${r}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`), P.CumulativeTemporalitySelector
  }

  function N(r) {
    if (r != null) {
      if (r === o.AggregationTemporalityPreference.DELTA) return P.DeltaTemporalitySelector;
      else if (r === o.AggregationTemporalityPreference.LOWMEMORY) return P.LowMemoryTemporalitySelector;
      return P.CumulativeTemporalitySelector
    }
    return j()
  }
  var w = Object.freeze({
    type: e.AggregationType.DEFAULT
  });

  function q(r) {
    return r?.aggregationPreference ?? (() => w)
  }
  class L extends g.OTLPExporterBase {
    _aggregationTemporalitySelector;
    _aggregationSelector;
    constructor(r, E) {
      super(r);
      this._aggregationSelector = q(E), this._aggregationTemporalitySelector = N(E?.temporalityPreference)
    }
    selectAggregation(r) {
      return this._aggregationSelector(r)
    }
    selectAggregationTemporality(r) {
      return this._aggregationTemporalitySelector(r)
    }
  }
  P.OTLPMetricExporterBase = L
});
var R = M(function(f) {
  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  f.OTLPMetricExporter = void 0;
  var x = s(),
    A = w8(),
    n = Dle();
  class d extends x.OTLPMetricExporterBase {
    constructor(r) {
      super(n.createOtlpHttpExportDelegate(n.convertLegacyHttpOptions(r ?? {}, "METRICS", "v1/metrics", {
        "Content-Type": "application/json"
      }), A.JsonMetricsSerializer), r)
    }
  }
  f.OTLPMetricExporter = d
});
var C = M(function(T) {
  Object.defineProperty(T, "__esModule", {
    value: !0
  });
  T.OTLPMetricExporter = void 0;
  var G = R();
  Object.defineProperty(T, "OTLPMetricExporter", {
    enumerable: !0,
    get: function() {
      return G.OTLPMetricExporter
    }
  })
});
var U = M(function(m) {
  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  m.OTLPMetricExporter = void 0;
  var h = C();
  Object.defineProperty(m, "OTLPMetricExporter", {
    enumerable: !0,
    get: function() {
      return h.OTLPMetricExporter
    }
  })
});
var Ner = M(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.OTLPMetricExporterBase = t.LowMemoryTemporalitySelector = t.DeltaTemporalitySelector = t.CumulativeTemporalitySelector = t.AggregationTemporalityPreference = t.OTLPMetricExporter = void 0;
  var F = U();
  Object.defineProperty(t, "OTLPMetricExporter", {
    enumerable: !0,
    get: function() {
      return F.OTLPMetricExporter
    }
  });
  var Y = l();
  Object.defineProperty(t, "AggregationTemporalityPreference", {
    enumerable: !0,
    get: function() {
      return Y.AggregationTemporalityPreference
    }
  });
  var a = s();
  Object.defineProperty(t, "CumulativeTemporalitySelector", {
    enumerable: !0,
    get: function() {
      return a.CumulativeTemporalitySelector
    }
  });
  Object.defineProperty(t, "DeltaTemporalitySelector", {
    enumerable: !0,
    get: function() {
      return a.DeltaTemporalitySelector
    }
  });
  Object.defineProperty(t, "LowMemoryTemporalitySelector", {
    enumerable: !0,
    get: function() {
      return a.LowMemoryTemporalitySelector
    }
  });
  Object.defineProperty(t, "OTLPMetricExporterBase", {
    enumerable: !0,
    get: function() {
      return a.OTLPMetricExporterBase
    }
  })
});
export {
  Ner
};
