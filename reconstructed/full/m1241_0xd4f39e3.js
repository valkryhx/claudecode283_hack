// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Mst
} from "B:/~BUN/root/chunk-1xb1enjd.js";
import {
  ie,
  nE
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  ya
} from "B:/~BUN/root/chunk-nfc48pcb.js";
var UQr = 30000,
  aL = "bridge-failed",
  fWe = "disabled after repeated failures \xB7 restart to retry",
  Qrr = "Remote Control not started here";

function BQr(t, {
  crossSessionMessaging: e
}, r = new Date) {
  let n = t.startedAt > 0 && t.startedAt <= r.getTime() ? ` (started ${nE(new Date(t.startedAt),{now:r})})` : "";
  return `${Qrr} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${e?", so this terminal can't see your sessions on other machines and they can't reach it":""} \xB7 run /remote-control to move it to this terminal`
}
var Zrr = 150;

function UIe() {
  let t = new Date,
    e = String(t.getHours()).padStart(2, "0"),
    r = String(t.getMinutes()).padStart(2, "0"),
    n = String(t.getSeconds()).padStart(2, "0");
  return `${e}:${r}:${n}`
}

function nKt(t, e) {
  return `${Mst(void 0,e)}/code?environment=${t}`
}

function eor(t, e) {
  let r = e + 20;
  return e + 10 - t % r
}

function ZQe(t, e) {
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
    of ya().segment(t)) {
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

function BIe({
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

function tSt(t) {
  return `Code anywhere with the Claude mobile app or ${t}`
}
var jQr = "Or ask Claude to work in this folder from your projects on claude.ai";

function nSt(t) {
  return `Continue coding in the Claude mobile app or ${t}`
}
var tor = "Run /remote-control to retry";

function WQr(t, e) {
  return `\x1B]8;;${e}\x07${t}\x1B]8;;\x07`
}
export {
  UQr,
  aL,
  fWe,
  Qrr,
  BQr,
  Zrr,
  UIe,
  nKt,
  eor,
  ZQe,
  BIe,
  tSt,
  jQr,
  nSt,
  tor,
  WQr
};
