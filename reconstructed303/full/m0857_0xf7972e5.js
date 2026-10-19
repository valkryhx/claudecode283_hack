// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  er
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  nNr
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  _n,
  ti
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ne,
  mk
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  Yf
} from "B:/~BUN/root/chunk-2wpqgvtg.js";
import {
  BNn,
  Gz
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Xo
} from "B:/~BUN/root/chunk-9tkh434c.js";
import {
  zpe,
  h_
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  mb
} from "B:/~BUN/root/chunk-97bdq2mm.js";
import {
  ua
} from "B:/~BUN/root/chunk-pp80ffk4.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";

function NY(e) {
  if (typeof e !== "string") return "";
  let t = ti(_n(mk(ne(e, 4 * Yf)))),
    r = e.length > 4 * Yf || t.length > Yf - 2,
    s = "";
  for (let {
      segment: o
    }
    of ua().segment(r ? ne(t, Yf - 2) : t)) s += ie(o) === 0 ? " " : o;
  return ti(r ? `${s} \u2026` : s)
}

function Wss() {
  return !1
}
async function zss(e) {
  return []
}
class Bxn extends Error {
  rows;
  constructor(e, t) {
    super("the cloud list walk failed part way", {
      cause: t
    });
    this.rows = e
  }
}
class J7r extends Error {}

function Gss(e) {
  let {
    state: t,
    tempo: r,
    reason: s
  } = h(e), o = e.config?.sources, n = NY(Array.isArray(o) ? o.find((a) => a?.type === "git_repository")?.url : void 0), l = NY(e.title), d = e.external_metadata?.post_turn_summary, w = u(d?.status_detail) || u(e.external_metadata?.task_summary), p = h_(t) === "success" && d?.reply === void 0 ? u(d?.recent_action) : "", S = u(d?.needs_action), g = e.config?.outcomes, c = Array.isArray(g) ? g.find((a) => a?.type === "git_repository")?.git_info : void 0, i = e.worker_status === "requires_action" ? e.external_metadata?.pending_action : void 0, b = [i?.display_tool_name, i?.tool_name].map(NY).find((a) => /^[A-Za-z][A-Za-z0-9_-]{0,127}$/.test(a)) ?? "a tool", m = NY(i?.action_description), C = r === "blocked" ? i?.tool_name === Xo ? BNn(k(i.input)).text : i?.tool_name === mb ? "approve plan" : typeof i?.tool_name === "string" && m !== "" ? Gz(i.tool_name.startsWith("dialog:") ? `awaiting input: ${m}` : `approve ${b}: ${m}`) : Gz(S ? `awaiting input: ${S}` : "awaiting input") : void 0;
  return {
    state: t,
    detail: s || w || Gz([c?.repo, Array.isArray(c?.branches) ? c.branches[0] : void 0].map(u).filter((a) => a !== "").join(" \xB7 ")) || "no summary yet",
    tempo: r,
    needs: C,
    output: p ? {
      result: p
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
  }
}

function Vss(e, t) {
  let r = new Set(t.map((n) => er(n.state.sessionId))),
    s = e.filter((n) => n.id.startsWith("remote-pending-") && !r.has(er(n.state.sessionId))),
    o = [...t, ...s];
  return e.length === o.length && e.every((n, l) => n.id === o[l].id && n.activity === o[l].activity && !0 && R(n.state, o[l].state)) ? e : o
}

function R(e, t) {
  let r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !1;
  return r.every((s) => {
    let o = e[s],
      n = t[s];
    if (o === n) return !0;
    return typeof o === "object" && typeof n === "object" && o !== null && n !== null && Bun.deepEquals(o, n)
  })
}

function y(e) {
  return e.status === "paused" && e.worker_status === "requires_action"
}

function h(e) {
  let t = nNr(e).startup_failure;
  if (t !== void 0) {
    let r = e.external_metadata?.last_init_error?.message,
      s = typeof r === "string" && r.length > 4000 && !t.endsWith("\u2026");
    return {
      state: "failed",
      tempo: "idle",
      reason: NY(s ? `${t} \u2026` : t) || "the cloud environment failed to start"
    }
  }
  if (e.worker_status === "requires_action") return {
    state: y(e) ? "blocked" : "working",
    tempo: "blocked"
  };
  if (e.worker_status === "idle" || e.status === "paused") switch (e.status_bucket) {
    case "blocked":
      return {
        state: "blocked", tempo: "blocked"
      };
    case "failed":
      return {
        state: "failed", tempo: "idle", reason: u(e.external_metadata?.post_turn_summary?.status_detail) || "the last turn failed"
      };
    case "working":
      return {
        state: "working", tempo: "active"
      };
    case "completed":
      return {
        state: "done", tempo: "idle"
      };
    default:
      return e.worker_status === "idle" ? {
        state: "done",
        tempo: "idle"
      } : {
        state: "stopped",
        tempo: "idle",
        reason: "paused \xB7 reply to resume"
      }
  }
  if (e.worker_status === "running" && e.connection_status === "disconnected") return {
    state: "stopped",
    tempo: "idle",
    reason: "lost contact with the cloud environment"
  };
  if (e.worker_status === void 0 || e.worker_status === null || e.worker_status === "WORKER_STATUS_UNSPECIFIED") return {
    state: "working",
    tempo: "active",
    reason: zpe
  };
  return {
    state: "working",
    tempo: "active"
  }
}

function u(e) {
  let t = NY(e);
  return /[\p{L}\p{N}]/u.test(t) && !t.startsWith("[ede_diagnostic]") ? t : ""
}

function k(e) {
  let [t] = f([e]);
  return {
    questions: f(t?.questions).flatMap((r) => {
      let s = NY(r.question);
      return s === "" ? [] : [{
        question: s,
        options: f(r.options).flatMap((o) => {
          let n = NY(o.label);
          return n === "" ? [] : [{
            label: n
          }]
        })
      }]
    }).slice(0, 1)
  }
}

function f(e) {
  return Array.isArray(e) ? e.slice(0, 4).filter((t) => typeof t === "object" && t !== null) : []
}
class E {
  ownScreen = !1;
  startsPlainSessions = !1
}
var Ie = new z(() => new E);
var et = new z(() => Me());
export {
  NY,
  Wss,
  zss,
  Bxn,
  J7r,
  Gss,
  Vss
};
