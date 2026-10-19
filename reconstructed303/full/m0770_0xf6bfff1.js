// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  L,
  K,
  Tm
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  es,
  rn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  BV
} from "B:/~BUN/root/chunk-qxrfwvgh.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  ovr,
  qxe,
  Ph,
  Kxe,
  Lpe,
  aIt,
  O7t
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  zp
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  nK,
  G0t,
  QR
} from "B:/~BUN/root/chunk-89m6ef17.js";
import {
  Fdt
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  Yce,
  Xot
} from "B:/~BUN/root/chunk-4bgwjb4z.js";
import {
  fXr
} from "B:/~BUN/root/chunk-hz18r0wg.js";
import {
  Dot,
  GNe,
  eos
} from "B:/~BUN/root/chunk-5qc8qrsy.js";

function IRe() {
  return !a.CLAUDE_DISABLE_ADOPT
}
var c = 50;

function l(e) {
  let o = [];
  for (let n of Tm()) {
    if (e && !e(n)) continue;
    o.push({
      label: "scheduled task",
      detail: `${g(n)} \xB7 ${es(n.prompt,c,!0)}`
    })
  }
  return o
}

function g(e) {
  if (e.recurring) return QR(e.cron);
  let o = nK(e.cron),
    n = o && G0t(o, new Date(e.createdAt), {
      oneShot: !0
    });
  if (!n) return QR(e.cron);
  let t = Math.max(0, n.getTime() - Date.now());
  return `Runs once in ${rn(t,{mostSignificantOnly:!0})}`
}

function Ats(e, {
  includeDream: o = !1
} = {}) {
  let n = [];
  for (let t of Object.values(e)) {
    if (!Ph(t) || t.type === "remote_agent") continue;
    if (!o && t.type === "dream") continue;
    if (t.type === "monitor_ws" && t.ambient) continue;
    if (Lpe(t)) continue;
    if (aIt(t)) continue;
    n.push({
      label: qxe(t.type),
      detail: es(t.description, c, !0)
    })
  }
  return n.push(...l()), n
}
var k = {
  agent: "subagent",
  workflow: "workflow",
  shell: "shell",
  monitor: "monitor",
  mcp: "MCP task"
};

function xts() {
  let e = Fdt(),
    {
      items: o,
      kinds: n
    } = e,
    t = [];
  for (let r of o) {
    if (r.kind === "todo" || r.doneAt !== void 0) continue;
    t.push({
      label: k[r.kind],
      detail: es(r.label, c, !0)
    })
  }
  if (n.includes("auto_mode_scan")) t.push({
    label: ovr.auto_mode_scan,
    detail: "environment scan for /auto-mode-setup"
  });
  if (n.includes("local_memory_import")) t.push({
    label: ovr.local_memory_import,
    detail: "still reading local memory notes; running the command again later continues it"
  });
  return t.push(...l()), t
}

function h(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && !Yce(e)
}

function m(e) {
  return Object.values(e).filter(Ph).filter((o) => o.type !== "remote_agent" && o.type !== "dream").filter((o) => !h(o))
}

function b(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if (Kxe(e)) return !1;
  if (e.type === "in_process_teammate" && e.evictAfter === 0 && e.currentWorkAbortController === void 0 && Lpe(e)) return !1;
  if (e.type === "remote_agent" || e.type === "dream") return !1;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === !0) return !1;
      return e.sidecarSessionId !== K() || e.sidecarProjectDir !== BV()
    }
    return !1
  }
  if (e.type === "monitor_ws" && e.ambient === !0) return !1;
  return !0
}

function S(e) {
  return Yce(e) && e.frameLive !== void 0
}

function pXr() {
  return IRe() && !a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF
}

function T(e) {
  return Yce(e) && Xot(e)
}

function Pts(e) {
  return Object.values(e).some(T) || eos() || GNe().size > 0
}

function wNe(e) {
  return Object.values(e).some(b)
}

function j$(e, {
  sessionCrons: o = !0
} = {}) {
  let n = m(e),
    t = o ? Tm().length : 0,
    r = L(n.map(d)),
    i = new Set(n.flatMap((u) => S(u) ? [u.frameLive.slug] : [])),
    s = !IRe() ? 0 : F(L([...Dot(), ...GNe()]), (u) => !i.has(u));
  if (s > 0 && !r.includes("artifact_watch")) r.push("artifact_watch");
  let p = pXr() ? i.size + s : 0;
  if (t > 0) r.push("session_cron");
  let f = F(Object.values(e), O7t);
  return {
    count: n.length + t + s,
    restartableCount: f,
    kinds: r,
    drainableMonitors: p,
    carriedMonitors: i.size + s
  }
}

function d(e) {
  if (e.type === "monitor_ws" && e.ambient) return "artifact_watch";
  return zp(e) && e.kind === "monitor" ? "monitor" : e.type
}

function nKe(e, o) {
  let n = m(e),
    t = l(o?.cronFilter),
    r = n.length + t.length,
    i = L(n.map(d));
  if (t.length > 0) i.push("session_cron");
  let s = [fXr(n), t.length ? `${t.length} ${O(t.length,"loop")}` : ""];
  return {
    count: r,
    kinds: i,
    summary: s.filter(Boolean).join(", ")
  }
}

function Ots() {
  let {
    tasks: e
  } = Fdt();
  if (e === 0) return;
  return `Detached \u2014 ${e} ${O(e,"task")} still running. Run \`claude agents\` to see your background sessions.`
}
export {
  IRe,
  Ats,
  xts,
  pXr,
  Pts,
  wNe,
  j$,
  nKe,
  Ots
};
