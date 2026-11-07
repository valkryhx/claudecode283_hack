// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { st } from "B:/~BUN/root/chunk-game8aqv.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { mIr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { see } from "B:/~BUN/root/chunk-m4674qtc.js";
import { yJ } from "B:/~BUN/root/chunk-1s0yt4vj.js";
function uX(e) {
  let name = e.startsWith("/") ? e.slice(1) : e,
    t = name.search(/\s/);
  if (t === -1) return {
    name: name,
    args: ""
  };
  return {
    name: name.slice(0, t),
    args: name.slice(t + 1).trim()
  };
}
function _w(e) {
  if (typeof e === "string") return e.trim().startsWith("/");
  if (!Array.isArray(e)) return !1;
  let n = e.at(-1);
  return n?.type === "text" && typeof n.text === "string" && n.text.trim().startsWith("/");
}
function y1i(e, n, t) {
  return e !== void 0 && e.mode === "poll-event" && (e.pollEvent?.wake === !0 || t) && !n;
}
function wmo(e, n) {
  return e === "prompt" || e === "bash" && n === !0 || e === "orphaned-permission" || e === "task-notification" || e === "poll-event";
}
function _c(e) {
  return e.agentId === st();
}
var _1i = {
  kind: "task-notification",
  source: "goal-checkin"
};
function Qvr(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "goal-checkin";
}
var b1i = {
  kind: "task-notification",
  source: "worker-checkin"
};
function xLt(e) {
  return e.origin?.kind === "task-notification" && (e.origin.source === "goal-checkin" || e.origin.source === "worker-checkin" || e.origin.source === "shell-checkin");
}
function Rmt(e) {
  return _c(e) && e.mode === "task-notification";
}
function aNn(e) {
  let origin = e.queueOrigin ?? e.origin;
  return xLt({
    origin: origin
  }) ? see(origin) : origin;
}
function Pws(e) {
  return e.queueMode ?? r(aNn(e));
}
function ben(e) {
  return e.queueSkipAttachments === !0 || Pws(e) === "task-notification" ? !0 : void 0;
}
function lNn(e, n) {
  if (!yJ(e)) return;
  if ("text_not_typed" in e && e.text_not_typed === !0) g("input_text_not_typed");else c("input_text_not_typed", "malformed_mark");
  let ownFilePaths = (n?.writtenFiles ?? []).flatMap(item => item.inlined ? [] : [item.path]);
  return {
    textNotTyped: !0,
    skipSlashCommands: !0,
    ...(ownFilePaths.length > 0 && {
      ownFilePaths: ownFilePaths
    })
  };
}
function Sen(e) {
  if (e.handedOff !== !0 && e.textNotTyped !== !0) return e.queueSkipSlashCommands === !0 && _w(e.message.content) ? {
    skipSlashCommands: !0
  } : void 0;
  return {
    textNotTyped: !0,
    noPersonArrived: !0,
    drainOnly: !0,
    ...(_w(e.message.content) && {
      skipSlashCommands: !0
    })
  };
}
function r(e) {
  return e?.kind === "task-notification" ? "task-notification" : "prompt";
}
function Zvr(e) {
  let {
      origin: origin_2
    } = e,
    t = origin_2?.kind === "plugin" ? origin_2.name : typeof origin_2 === "object" && origin_2 !== null && "plugin" in origin_2 ? origin_2.plugin : void 0;
  return e.scheduledByPlugin ?? t;
}
function dNn(e, n) {
  return Zvr(e) === Zvr(n);
}
function eEr(e) {
  return e.some(mIr) ? void 0 : e.map(Zvr).find(item => item !== void 0);
}
export { uX, _w, y1i, wmo, _c, _1i, Qvr, b1i, xLt, Rmt, aNn, Pws, ben, lNn, Sen, Zvr, dNn, eEr };