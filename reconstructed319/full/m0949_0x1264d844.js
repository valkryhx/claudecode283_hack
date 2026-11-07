// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  ye,
  Du
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ncn
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  zo
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  PT
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  gr
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  tb,
  Gt,
  x1n,
  P1n,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  n7e
} from "B:/~BUN/root/chunk-x4zqd4cy.js";
import {
  VEe,
  Aye
} from "B:/~BUN/root/chunk-jmt91fq8.js";
import {
  Dse
} from "B:/~BUN/root/chunk-tjfmeakx.js";
import {
  Kd
} from "B:/~BUN/root/chunk-p2ta953m.js";
import {
  gZ
} from "B:/~BUN/root/chunk-2ys4h17s.js";
import {
  vhr
} from "B:/~BUN/root/chunk-wznngf8b.js";
import {
  YAr
} from "B:/~BUN/root/chunk-4jfmvmew.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
var l = new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects"]);

function xia(e) {
  if (Gt()) return new Set(["bg"]);
  let r = new Set;
  if ((e ?? x1n()) || tb() !== null) r.add("watched");
  if (c4r()) r.add("ccr");
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || Du()) r.add("bridge");
  let s = i.CLAUDE_CODE_ENTRYPOINT;
  if (s !== void 0 && ncn.has(s)) r.add("desktop");
  if (Mia()) r.add("cli");
  if (!ye() && Kd()) r.add("repl");
  return r
}

function c4r() {
  if (PT("fanout")) return !0;
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !0;
  if (i.CLAUDE_CODE_REMOTE) return l.has(i.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return !1
}
async function Qga(e) {
  return X() && e !== void 0 ? P1n(e) : void 0
}
var u = {
  bg: ["state"],
  watched: ["state"],
  ccr: ["summary"],
  bridge: ["summary"],
  desktop: ["summary"],
  cli: ["summary"],
  repl: ["headline"]
};

function Pia(e) {
  let r = new Set,
    s = Oia();
  for (let n of e) {
    if (s.has(n)) continue;
    for (let o of u[n]) r.add(o)
  }
  if (e.has("bg")) r.delete("summary");
  if (v("tengu_classifier_summary_kill", !1)) r.delete("summary");
  return r
}

function Oia() {
  return f(v("tengu_classifier_disabled_surfaces", ""))
}

function f(e) {
  let r = new Set;
  for (let s of e.split(",")) {
    let n = s.trim();
    if (!n) continue;
    if (n in u) r.add(n);
    else if (!gZ().warnedUnknownDisabledSurface) gZ().warnedUnknownDisabledSurface = !0, t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`)
  }
  return r
}

function Iia(e) {
  if (e.size === 0) return null;
  let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0 ? Pe(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : m();
  return r === "llm" && v("tengu_cobalt_wren", !1) ? "heuristic" : r
}

function m() {
  if (v("tengu_classifier_summary_llm_emit", !1)) return "llm";
  return "heuristic"
}

function Mia() {
  return !1
}

function Zga(e) {
  return VEe() && Aye(e) && v("tengu_projects_thread_recap", !1)
}
var a = new Map([
  ["blocked", "blocked"],
  ["done", "completed"],
  ["working", "review_ready"]
]);

function eya(e, r) {
  if (e.recap) return {
    status_category: e.state === "failed" ? "failed" : a.get(e.state) ?? "review_ready",
    status_detail: e.recap.headline,
    needs_action: e.state === "blocked" ? e.recap.needs : "",
    recent_action: e.recap.needsYou,
    description: e.recap.happened,
    reply: e.recap.reply
  };
  return {
    status_category: a.get(e.state) ?? "review_ready",
    status_detail: e.detail,
    needs_action: e.state === "blocked" ? e.needs ?? "" : "",
    recent_action: e.output.result ?? "",
    ...r?.projectsRecap && {
      description: vhr(e.detail).text
    }
  }
}

function tya(e, r) {
  let s = Pia(xia(!1));
  if (!s.has("summary") || Iia(s) === null) return;
  let n = gr(e.tool_name),
    o = !n?.toolName || n.serverName === zo ? Dse(e.tool_name) : YAr({
      serverName: n.serverName,
      toolName: n.toolName
    }),
    c = e.tool_name.startsWith("dialog:") ? {
      status_category: "blocked",
      status_detail: "Waiting on a user dialog",
      needs_action: e.action_description
    } : {
      status_category: "blocked",
      status_detail: `Waiting on permission: ${o}`,
      needs_action: `Approve or deny ${o}`
    };
  n7e(r, c)
}
export {
  xia,
  c4r,
  Qga,
  Pia,
  Oia,
  Iia,
  Mia,
  Zga,
  eya,
  tya
};
