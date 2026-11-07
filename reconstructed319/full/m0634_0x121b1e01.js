// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  rcn,
  gjs
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  at,
  iIs,
  xyt,
  FIs,
  Gsn,
  dEo,
  HIs,
  Vsn,
  T4,
  Ksn,
  kO,
  pn,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Xnn
} from "B:/~BUN/root/chunk-de98q5we.js";
import {
  HPn
} from "B:/~BUN/root/chunk-q7dbkm6t.js";
var k = "tengu_log_datadog_events",
  d = "tengu_quizzical_giraffe",
  y = new Set(["tengu_started", "tengu_oauth_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_race_recovered", "tengu_oauth_refresh_token_cleared_on_disk", "tengu_api_error", "tengu_feature_bad", "tengu_feature_sad"]);

function S() {
  if (Gsn("datadog")) return !1;
  try {
    return v(k, !1)
  } catch {
    return !1
  }
}

function _(e, o) {
  if (!y.has(e)) return o;
  try {
    let {
      value: n,
      source: r
    } = pn(d, !1), a = r === "fallback" || r === "disabled";
    return {
      ...o,
      [d]: f(a ? "unset" : n === !0 ? "on" : "off")
    }
  } catch {
    return o
  }
}

function E(e, o) {
  let n = HIs(e);
  if (n === 0 || e !== "tengu_feature_ok" || o.feature_name === void 0) return n;
  let r = Vsn(dEo()[`${e}:${o.feature_name}`]?.sample_rate);
  if (r === null) return n;
  return n === null ? r : n * r
}

function p(e) {
  return e || T4()
}

function h(e, o) {}

function m() {
  try {
    return at()
  } catch {
    return
  }
}

function g(e, o, n, r) {
  let a = r();
  if (!p(a)) return;
  let u = m(),
    s = _(e, HPn(o, u)),
    i = n !== null ? {
      ...s,
      sample_rate: n
    } : s;
  FIs(u, () => {
    if (a) Xnn(e, rcn(i));
    Ksn(e, i), h(e, i)
  })
}
var l = !1;

function M(e, o, n) {
  if (l) {
    t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, {
      level: "error"
    });
    return
  }
  l = !0;
  try {
    let r = E(e, o);
    if (r === 0) return;
    if (iIs()) {
      g(e, o, r, n);
      return
    }
    let a = () => {
      l = !0;
      try {
        g(e, o, r, n)
      } finally {
        l = !1
      }
    };
    xyt().then(a, a)
  } finally {
    l = !1
  }
}
async function A(e, o, n) {
  let r = E(e, o);
  if (r === 0) return;
  if (!iIs()) await xyt();
  let a = n();
  if (!p(a)) return;
  let u = m(),
    s = _(e, HPn(o, u)),
    i = r !== null ? {
      ...s,
      sample_rate: r
    } : s,
    c = [];
  FIs(u, () => {
    if (a) c.push(Xnn(e, rcn(i)));
    c.push(kO(e, i)), h(e, i)
  }), await Promise.all(c)
}

function vle() {
  gjs(R(S))
}

function R(e) {
  return {
    logEvent: (o, n) => M(o, n, e),
    logEventAsync: (o, n) => A(o, n, e)
  }
}
export {
  vle
};
