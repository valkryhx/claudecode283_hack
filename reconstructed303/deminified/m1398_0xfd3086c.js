// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ZIt } from "B:/~BUN/root/chunk-m42n0wc9.js";
import { mv } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { ua } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
var k5o = 30000,
  g1 = "bridge-failed",
  rnt = "disabled after repeated failures \xB7 restart to retry",
  Wqr = "Remote Control not started here";
function E5o(t, {
  crossSessionMessaging: crossSessionMessaging
}, now = new Date()) {
  let n = t.startedAt > 0 && t.startedAt <= now.getTime() ? ` (started ${mv(new Date(t.startedAt), {
    now: now
  })})` : "";
  return `${Wqr} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${crossSessionMessaging ? ", so this terminal can't see your sessions on other machines and they can't reach it" : ""} \xB7 run /remote-control to move it to this terminal`;
}
var zqr = 150;
function CVe() {
  let date = new Date(),
    e = String(date.getHours()).padStart(2, "0"),
    r = String(date.getMinutes()).padStart(2, "0"),
    n = String(date.getSeconds()).padStart(2, "0");
  return `${e}:${r}:${n}`;
}
function USn(t, e) {
  return `${ZIt(void 0, e)}/code?environment=${t}`;
}
function Gqr(t, e) {
  let r = e + 20;
  return e + 10 - t % r;
}
function mvt(before, e) {
  let r = ie(before),
    n = e - 1,
    i = e + 1;
  if (n >= r || i < 0) return {
    before: before,
    shimmer: "",
    after: ""
  };
  let g = Math.max(0, n),
    s = 0,
    before_2 = "",
    shimmer = "",
    after = "";
  for (let {
    segment: segment
  } of ua().segment(before)) {
    let u = ie(segment);
    if (s + u <= g) before_2 += segment;else if (s > i) after += segment;else shimmer += segment;
    s += u;
  }
  return {
    before: before_2,
    shimmer: shimmer,
    after: after
  };
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
  error: error,
  connected: connected,
  sessionActive: sessionActive,
  reconnecting: reconnecting
}) {
  if (error) return m;
  if (reconnecting) return d;
  if (sessionActive || connected) return f;
  return p;
}
function f2t(t) {
  return `Code anywhere with the Claude mobile app or ${t}`;
}
var T5o = "Or ask Claude to work in this folder from your projects on claude.ai";
function m2t(t) {
  return `Continue coding in the Claude mobile app or ${t}`;
}
var Vqr = "Run /remote-control to retry";
function C5o(t, e) {
  return `\x1B]8;;${e}\x07${t}\x1B]8;;\x07`;
}
export { k5o, g1, rnt, Wqr, E5o, zqr, CVe, USn, Gqr, mvt, RVe, f2t, T5o, m2t, Vqr, C5o };