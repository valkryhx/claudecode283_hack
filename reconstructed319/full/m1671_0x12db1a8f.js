// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  $Xe
} from "B:/~BUN/root/chunk-ysxmr1nk.js";
import {
  ern,
  sbe
} from "B:/~BUN/root/chunk-yrh147c7.js";
import {
  x_
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Sa
} from "B:/~BUN/root/chunk-63176a0t.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
var F9s = 30000,
  vK = "bridge-failed",
  _Et = "disabled after repeated failures \xB7 restart to retry",
  H$o = "Remote Control not started here";

function H9s(e, {
  crossSessionMessaging: t
}, r = new Date) {
  let n = e.startedAt > 0 && e.startedAt <= r.getTime() ? ` (started ${x_(new Date(e.startedAt),{now:r})})` : "";
  return `${H$o} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${t?", so this terminal can't see your sessions on other machines and they can't reach it":""} \xB7 run /remote-control to move it to this terminal`
}
var $$o = 150;

function ust() {
  let e = new Date,
    t = String(e.getHours()).padStart(2, "0"),
    r = String(e.getMinutes()).padStart(2, "0"),
    n = String(e.getSeconds()).padStart(2, "0");
  return `${t}:${r}:${n}`
}

function f8n(e, t) {
  return `${$Xe(void 0,t)}/code?environment=${e}`
}

function U$o(e, t) {
  let r = t + 20;
  return t + 10 - e % r
}

function g2t(e, t) {
  let r = ce(e),
    n = t - 1,
    i = t + 1;
  if (n >= r || i < 0) return {
    before: e,
    shimmer: "",
    after: ""
  };
  let g = Math.max(0, n),
    s = 0,
    c = "",
    a = "",
    u = "";
  for (let {
      segment: o
    }
    of Sa().segment(e)) {
    let l = ce(o);
    if (s + l <= g) c += o;
    else if (s > i) u += o;
    else a += o;
    s += l
  }
  return {
    before: c,
    shimmer: a,
    after: u
  }
}
var m = {
    label: "/rc failed",
    color: "error"
  },
  d = {
    label: "/rc reconnecting",
    color: "warning"
  },
  f = {
    label: "/rc active",
    color: "success"
  },
  p = {
    label: "/rc connecting\u2026",
    color: "warning"
  };

function gke({
  error: e,
  connected: t,
  sessionActive: r,
  reconnecting: n
}) {
  if (e) return m;
  if (n) return d;
  if (r || t) return f;
  return p
}

function Uhn(e) {
  return `Code anywhere with the Claude mobile app or ${e}`
}
var $9s = "Or ask Claude to work in this folder from your projects on claude.ai";

function Bhn(e) {
  return `Continue coding in the Claude mobile app or ${e}`
}
var B$o = "Run /remote-control to retry";

function jhn(e) {
  return e === ern || e === sbe || e?.includes("/login") === !0 || e?.includes("/remote-control") === !0 || e?.includes("restart") === !0 || e?.includes("policy") === !0 || e?.includes("update") === !0
}

function U9s(e, t) {
  return `\x1B]8;;${t}\x07${e}\x1B]8;;\x07`
}
export {
  F9s,
  vK,
  _Et,
  H$o,
  H9s,
  $$o,
  ust,
  f8n,
  U$o,
  g2t,
  gke,
  Uhn,
  $9s,
  Bhn,
  B$o,
  jhn,
  U9s
};
