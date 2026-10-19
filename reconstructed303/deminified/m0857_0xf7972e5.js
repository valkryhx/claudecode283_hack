// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { nNr } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { _n, ti } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, mk } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Yf } from "B:/~BUN/root/chunk-2wpqgvtg.js";
import { BNn, Gz } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Xo } from "B:/~BUN/root/chunk-9tkh434c.js";
import { zpe as reason_2, h_ } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { mb } from "B:/~BUN/root/chunk-97bdq2mm.js";
import { ua } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
function NY(e) {
  if (typeof e !== "string") return "";
  let t = ti(_n(mk(ne(e, 4 * Yf)))),
    r = e.length > 4 * Yf || t.length > Yf - 2,
    s = "";
  for (let {
    segment: segment
  } of ua().segment(r ? ne(t, Yf - 2) : t)) s += ie(segment) === 0 ? " " : segment;
  return ti(r ? `${s} \u2026` : s);
}
function Wss() {
  return !1;
}
async function zss(e) {
  return [];
}
class Bxn extends Error {
  rows;
  constructor(e, cause) {
    super("the cloud list walk failed part way", {
      cause: cause
    });
    this.rows = e;
  }
}
class J7r extends Error {}
function Gss(e) {
  let {
      state: state,
      tempo: tempo,
      reason: reason
    } = h(e),
    o = e.config?.sources,
    n = NY(Array.isArray(o) ? o.find(item => item?.type === "git_repository")?.url : void 0),
    l = NY(e.title),
    d = e.external_metadata?.post_turn_summary,
    w = u(d?.status_detail) || u(e.external_metadata?.task_summary),
    result = h_(state) === "success" && d?.reply === void 0 ? u(d?.recent_action) : "",
    S = u(d?.needs_action),
    g = e.config?.outcomes,
    c = Array.isArray(g) ? g.find(item => item?.type === "git_repository")?.git_info : void 0,
    i = e.worker_status === "requires_action" ? e.external_metadata?.pending_action : void 0,
    b = [i?.display_tool_name, i?.tool_name].map(NY).find(item => /^[A-Za-z][A-Za-z0-9_-]{0,127}$/.test(item)) ?? "a tool",
    m = NY(i?.action_description),
    needs = tempo === "blocked" ? i?.tool_name === Xo ? BNn(k(i.input)).text : i?.tool_name === mb ? "approve plan" : typeof i?.tool_name === "string" && m !== "" ? Gz(i.tool_name.startsWith("dialog:") ? `awaiting input: ${m}` : `approve ${b}: ${m}`) : Gz(S ? `awaiting input: ${S}` : "awaiting input") : void 0;
  return {
    state: state,
    detail: reason || w || Gz([c?.repo, Array.isArray(c?.branches) ? c.branches[0] : void 0].map(u).filter(item => item !== "").join(" \xB7 ")) || "no summary yet",
    tempo: tempo,
    needs: needs,
    output: result ? {
      result: result
    } : null,
    children: null,
    linkScanOffset: 0,
    template: "remote",
    respawnFlags: [],
    name: l || void 0,
    intent: NY(e.id),
    sessionId: e.id,
    cwd: n || "remote",
    originCwd: n || "remote",
    createdAt: e.created_at,
    updatedAt: e.last_event_at ?? e.created_at,
    firstTerminalAt: null,
    backend: "remote"
  };
}
function Vss(e, t) {
  let r = new Set(t.map(item => er(item.state.sessionId))),
    s = e.filter(item => item.id.startsWith("remote-pending-") && !r.has(er(item.state.sessionId))),
    o = [...t, ...s];
  return e.length === o.length && e.every((item, index) => item.id === o[index].id && item.activity === o[index].activity && !0 && R(item.state, o[index].state)) ? e : o;
}
function R(e, t) {
  let r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !1;
  return r.every(item => {
    let o = e[item],
      n = t[item];
    if (o === n) return !0;
    return typeof o === "object" && typeof n === "object" && o !== null && n !== null && Bun.deepEquals(o, n);
  });
}
function y(e) {
  return e.status === "paused" && e.worker_status === "requires_action";
}
function h(e) {
  let startup_failure = nNr(e).startup_failure;
  if (startup_failure !== void 0) {
    let r = e.external_metadata?.last_init_error?.message,
      s = typeof r === "string" && r.length > 4000 && !startup_failure.endsWith("\u2026");
    return {
      state: "failed",
      tempo: "idle",
      reason: NY(s ? `${startup_failure} \u2026` : startup_failure) || "the cloud environment failed to start"
    };
  }
  if (e.worker_status === "requires_action") return {
    state: y(e) ? "blocked" : "working",
    tempo: "blocked"
  };
  if (e.worker_status === "idle" || e.status === "paused") switch (e.status_bucket) {
    case "blocked":
      return {
        state: "blocked",
        tempo: "blocked"
      };
    case "failed":
      return {
        state: "failed",
        tempo: "idle",
        reason: u(e.external_metadata?.post_turn_summary?.status_detail) || "the last turn failed"
      };
    case "working":
      return {
        state: "working",
        tempo: "active"
      };
    case "completed":
      return {
        state: "done",
        tempo: "idle"
      };
    default:
      return e.worker_status === "idle" ? {
        state: "done",
        tempo: "idle"
      } : {
        state: "stopped",
        tempo: "idle",
        reason: "paused \xB7 reply to resume"
      };
  }
  if (e.worker_status === "running" && e.connection_status === "disconnected") return {
    state: "stopped",
    tempo: "idle",
    reason: "lost contact with the cloud environment"
  };
  if (e.worker_status === void 0 || e.worker_status === null || e.worker_status === "WORKER_STATUS_UNSPECIFIED") return {
    state: "working",
    tempo: "active",
    reason: reason_2
  };
  return {
    state: "working",
    tempo: "active"
  };
}
function u(e) {
  let t = NY(e);
  return /[\p{L}\p{N}]/u.test(t) && !t.startsWith("[ede_diagnostic]") ? t : "";
}
function k(e) {
  let [t] = f([e]);
  return {
    questions: f(t?.questions).flatMap(item => {
      let question = NY(item.question);
      return question === "" ? [] : [{
        question: question,
        options: f(item.options).flatMap(item => {
          let label = NY(item.label);
          return label === "" ? [] : [{
            label: label
          }];
        })
      }];
    }).slice(0, 1)
  };
}
function f(e) {
  return Array.isArray(e) ? e.slice(0, 4).filter(item => typeof item === "object" && item !== null) : [];
}
class E {
  ownScreen = !1;
  startsPlainSessions = !1;
}
var Ie = new z(() => new E());
var et = new z(() => Me());
export { NY, Wss, zss, Bxn, J7r, Gss, Vss };