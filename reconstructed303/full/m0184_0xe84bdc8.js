// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  tDo,
  yJe,
  q$t,
  xNr,
  uW,
  K$t,
  VC,
  En,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  ajt,
  rWo
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  IFt
} from "B:/~BUN/root/chunk-x73fxyt1.js";
import {
  G7t
} from "B:/~BUN/root/chunk-mrkvqm9w.js";
var h = "tengu_log_datadog_events",
  d = "tengu_quizzical_giraffe",
  p = new Set(["tengu_started", "tengu_oauth_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_race_recovered", "tengu_oauth_refresh_token_cleared_on_disk", "tengu_api_error", "tengu_feature_bad", "tengu_feature_sad"]);

function m() {
  if (q$t("datadog")) return !1;
  try {
    return E(h, !1)
  } catch {
    return !1
  }
}

function _(e, n) {
  if (!p.has(e)) return n;
  try {
    let {
      value: o,
      source: a
    } = En(d, !1), r = a === "fallback" || a === "disabled";
    return {
      ...n,
      [d]: c(r ? "unset" : o === !0 ? "on" : "off")
    }
  } catch {
    return n
  }
}

function g(e) {
  return e || uW()
}

function f(e, n, o, a) {
  let r = a();
  if (!g(r)) return;
  let i = _(e, G7t(n)),
    s = o !== null ? {
      ...i,
      sample_rate: o
    } : i;
  if (r) IFt(e, ajt(s));
  K$t(e, s)
}
var l = !1;

function k(e, n, o) {
  if (l) {
    t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, {
      level: "error"
    });
    return
  }
  l = !0;
  try {
    let a = xNr(e);
    if (a === 0) return;
    if (tDo()) {
      f(e, n, a, o);
      return
    }
    let r = () => {
      l = !0;
      try {
        f(e, n, a, o)
      } finally {
        l = !1
      }
    };
    yJe().then(r, r)
  } finally {
    l = !1
  }
}
async function v(e, n, o) {
  let a = xNr(e);
  if (a === 0) return;
  if (!tDo()) await yJe();
  let r = o();
  if (!g(r)) return;
  let i = _(e, G7t(n)),
    s = a !== null ? {
      ...i,
      sample_rate: a
    } : i,
    u = [];
  if (r) u.push(IFt(e, ajt(s)));
  u.push(VC(e, s)), await Promise.all(u)
}

function c7() {
  rWo(y(m))
}

function y(e) {
  return {
    logEvent: (n, o) => k(n, o, e),
    logEventAsync: (n, o) => v(n, o, e)
  }
}
export {
  c7
};
