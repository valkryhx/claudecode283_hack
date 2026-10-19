// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Yit, Ha } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { bh } from "B:/~BUN/root/chunk-qp0344nb.js";
import { eO } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Ov } from "B:/~BUN/root/chunk-78zw0pmb.js";
import { lFe, D6t } from "B:/~BUN/root/chunk-9c9e3vsk.js";
function aFe() {
  return Ov() && !Bn();
}
function p(e, n) {
  if (!e) return "idle-fork";
  return n ? "defer-then-fork" : "abort-then-fork";
}
function d(e) {
  let {
    inFlight: inFlight
  } = e;
  if (e.isBg) return {
    ok: !0,
    via: "detach",
    inFlight: inFlight
  };
  if (!e.fleetEnabled) return {
    ok: !1,
    reason: "fleet-disabled",
    inFlight: inFlight
  };
  if (e.isRemote) return {
    ok: !1,
    reason: "remote",
    inFlight: inFlight
  };
  if (e.persistenceDisabled) return {
    ok: !1,
    reason: "persistence",
    inFlight: inFlight
  };
  if (e.isExternalLoading) return {
    ok: !1,
    reason: "loading",
    inFlight: inFlight
  };
  return {
    ok: !0,
    via: p(e.isLoading, e.betweenCalls),
    inFlight: inFlight
  };
}
function rPn(e, n) {
  return !n && !f(e);
}
function f(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return !1;
  }
  return !1;
}
function _cr(e) {
  let n = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "assistant") {
      if (o.message?.stop_reason !== null) return n;
      for (let i of o.message?.content ?? []) if (i.type === "text" && typeof i.text === "string") n += i.text.length;
    } else if (o.type === "user") return n;
  }
  return n;
}
function bcr(e, n) {
  let r = e.length;
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    if (s.type === "assistant") {
      if (s.message?.stop_reason !== null) break;
      r = i;
    } else if (s.type === "user") break;
  }
  let o = "";
  for (let i = r; i < e.length; i++) {
    let s = e[i];
    if (s.type !== "assistant") continue;
    for (let a of s.message?.content ?? []) if (a.type === "text" && typeof a.text === "string") o += a.text;
  }
  return o + (n ?? "");
}
function oPn(e) {
  let n,
    r = !1;
  return o => {
    if (r) return !0;
    try {
      return n ??= lFe(e()), D6t(o.under, n);
    } catch (error) {
      return r = !0, t(`heldScreening could not read the screening: ${error}`, {
        level: "error"
      }), !0;
    }
  };
}
function Scr(e, n) {
  let r = 0;
  for (let o of e) {
    if (Yit(o)) continue;
    if (o.priority === "later" || o.drainOnly === !0 || o.screeningPending === !0 || o.promptSubmitted !== void 0 && n !== void 0 && n(o.promptSubmitted) || o.mode === "bash" || o.mode === "poll-event" || eO(o.value) && !o.skipSlashCommands) r++;
  }
  return r;
}
function yis(e) {
  return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${O(e, "subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function I6t(e, n) {
  return `Backgrounding cancelled \u2014 ${e}.${n === void 0 ? "" : ` ${n}`}`;
}
var sPn = I6t("you have unsent text in the input", "Send it or clear it, then press \u2190 again."),
  _is = "Still backgrounding after the current tool \u2014 a question is waiting for your answer.",
  wcr = I6t("the turn was stopped");
function l(e) {
  if (e.type !== "user") return !1;
  let n = e.message?.content;
  return Array.isArray(n) && n[0]?.type === "tool_result" && n.every(item => item.type === "tool_result" || item.type === "text" || item.type === "image");
}
function g(e) {
  if (e.type === "system") return !0;
  if (e.type === "assistant") {
    let n = e.message?.stop_reason;
    return n === null || n === "tool_use";
  }
  if (e.type === "user") return bh(e);
  return !1;
}
function vCt(e) {
  let n = e.length,
    r = !1;
  while (n > 0) {
    let i = e[n - 1];
    if (i.type === "user") {
      if (bh(i)) r ||= l(i);else if (r && l(i)) ;else break;
    } else if (i.type === "assistant") {
      if (!g(i)) break;
      r = !1;
    }
    n--;
  }
  let o = e.slice(n).filter(item => item.type !== "user" && item.type !== "assistant" && item.type !== "system");
  if (n + o.length === e.length) return e;
  return [...e.slice(0, n), ...o];
}
function M6t(e) {
  let n = vCt(e);
  for (let r = n.length - 1; r >= 0; r--) {
    let o = n[r].type;
    if (o === "user" || o === "assistant") return n[r].uuid;
  }
  return;
}
function bis(e, n) {
  if (e === null || e.length < 1 || e.length > n.length) return !1;
  let r = e.length - 1;
  if (n[r]?.uuid !== e.uuid) return !1;
  for (let o = e.length; o < n.length; o++) {
    let i = n[o].type;
    if (i === "user" || i === "assistant") return !1;
  }
  return !0;
}
function iPn(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "user") return !bh(r);
    if (r.type === "assistant") return !1;
  }
  return !1;
}
function aPn(e) {
  return e.ok && e.via !== "detach";
}
function kCt(e) {
  return d({
    ...e,
    fleetEnabled: Ov(),
    isRemote: Bn(),
    persistenceDisabled: Ha()
  });
}
export { aFe, rPn, _cr, bcr, oPn, Scr, yis, I6t, sPn, _is, wcr, vCt, M6t, bis, iPn, aPn, kCt };