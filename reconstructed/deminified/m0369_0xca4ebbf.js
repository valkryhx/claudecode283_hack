// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { smt, Ozr } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Jdn, u0o, it, LKn, LHt, Nut, c4n, Hut, Av, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Wct } from "B:/~BUN/root/chunk-yp00xppt.js";
var u = "tengu_log_datadog_events";
function s() {
  if (Nut("datadog")) return !1;
  try {
    return x(u, !1);
  } catch {
    return !1;
  }
}
function f(e) {
  try {
    Jdn(it());
  } catch {}
  return u0o(e);
}
function d(e, n, sample_rate) {
  let o = f(n),
    r = sample_rate !== null ? {
      ...o,
      sample_rate: sample_rate
    } : o;
  if (s()) Wct(e, smt(r));
  Hut(e, r);
}
var i = !1;
function logEvent(e, n) {
  if (i) {
    t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, {
      level: "error"
    });
    return;
  }
  i = !0;
  try {
    let a = c4n(e);
    if (a === 0) return;
    if (LKn()) {
      d(e, n, a);
      return;
    }
    let o = () => {
      i = !0;
      try {
        d(e, n, a);
      } finally {
        i = !1;
      }
    };
    LHt().then(o, o);
  } finally {
    i = !1;
  }
}
async function logEventAsync(e, n) {
  let sample_rate_2 = c4n(e);
  if (sample_rate_2 === 0) return;
  if (!LKn()) await LHt();
  let o = f(n),
    r = sample_rate_2 !== null ? {
      ...o,
      sample_rate: sample_rate_2
    } : o,
    l = [];
  if (s()) l.push(Wct(e, smt(r)));
  l.push(Av(e, r)), await Promise.all(l);
}
function k4() {
  Ozr({
    logEvent: logEvent,
    logEventAsync: logEventAsync
  });
}
export { k4 };