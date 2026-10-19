// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ZIt
} from "B:/~BUN/root/chunk-m42n0wc9.js";
import {
  mv
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  ua
} from "B:/~BUN/root/chunk-pp80ffk4.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";
var k5o = 30000,
  g1 = "bridge-failed",
  rnt = "disabled after repeated failures \xB7 restart to retry",
  Wqr = "Remote Control not started here";

function E5o(t, {
  crossSessionMessaging: e
}, r = new Date) {
  let n = t.startedAt > 0 && t.startedAt <= r.getTime() ? ` (started ${mv(new Date(t.startedAt),{now:r})})` : "";
  return `${Wqr} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${e?", so this terminal can't see your sessions on other machines and they can't reach it":""} \xB7 run /remote-control to move it to this terminal`
}
var zqr = 150;

function CVe() {
  let t = new Date,
    e = String(t.getHours()).padStart(2, "0"),
    r = String(t.getMinutes()).padStart(2, "0"),
    n = String(t.getSeconds()).padStart(2, "0");
  return `${e}:${r}:${n}`
}

function USn(t, e) {
  return `${ZIt(void 0,e)}/code?environment=${t}`
}

function Gqr(t, e) {
  let r = e + 20;
  return e + 10 - t % r
}

function mvt(t, e) {
  let r = ie(t),
    n = e - 1,
    i = e + 1;
  if (n >= r || i < 0) return {
    before: t,
    shimmer: "",
    after: ""
  };
  let g = Math.max(0, n),
    s = 0,
    c = "",
    a = "",
    l = "";
  for (let {
      segment: o
    }
    of ua().segment(t)) {
    let u = ie(o);
    if (s + u <= g) c += o;
    else if (s > i) l += o;
    else a += o;
    s += u
  }
  return {
    before: c,
    shimmer: a,
    after: l
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

function RVe({
  error: t,
  connected: e,
  sessionActive: r,
  reconnecting: n
}) {
  if (t) return m;
  if (n) return d;
  if (r || e) return f;
  return p
}

function f2t(t) {
  return `Code anywhere with the Claude mobile app or ${t}`
}
var T5o = "Or ask Claude to work in this folder from your projects on claude.ai";

function m2t(t) {
  return `Continue coding in the Claude mobile app or ${t}`
}
var Vqr = "Run /remote-control to retry";

function C5o(t, e) {
  return `\x1B]8;;${e}\x07${t}\x1B]8;;\x07`
}
export {
  k5o,
  g1,
  rnt,
  Wqr,
  E5o,
  zqr,
  CVe,
  USn,
  Gqr,
  mvt,
  RVe,
  f2t,
  T5o,
  m2t,
  Vqr,
  C5o
};
