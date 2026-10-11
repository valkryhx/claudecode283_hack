// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Te, Bl } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { x5n } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { zv } from "B:/~BUN/root/chunk-339q6g5w.js";
import { hb, vt, qHt, KHt, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { DTe } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { ZZ, Ome } from "B:/~BUN/root/chunk-4dctrsn2.js";
import { Tl } from "B:/~BUN/root/chunk-rfp59gnb.js";
import { gB, Btn } from "B:/~BUN/root/chunk-f71hcy5v.js";
var c = new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects"]);
function ljo(e) {
  if (vt()) return new Set(["bg"]);
  let r = new Set();
  if ((e ?? qHt()) || hb() !== null) r.add("watched");
  if (sTn()) r.add("ccr");
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || Bl()) r.add("bridge");
  let CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
  if (CLAUDE_CODE_ENTRYPOINT !== void 0 && x5n.has(CLAUDE_CODE_ENTRYPOINT)) r.add("desktop");
  if (pjo()) r.add("cli");
  if (!Te() && Tl()) r.add("repl");
  return r;
}
function sTn() {
  if (zv("fanout")) return !0;
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !0;
  if (a.CLAUDE_CODE_REMOTE) return c.has(a.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return !1;
}
async function lKo(e) {
  return H() && e !== void 0 ? KHt(e) : void 0;
}
var o = {
  bg: ["state"],
  watched: ["state"],
  ccr: ["summary"],
  bridge: ["summary"],
  desktop: ["summary"],
  cli: ["summary"],
  repl: ["headline"]
};
function cjo(e) {
  let r = new Set(),
    s = djo();
  for (let n of e) {
    if (s.has(n)) continue;
    for (let u of o[n]) r.add(u);
  }
  if (e.has("bg")) r.delete("summary");
  if (x("tengu_classifier_summary_kill", !1)) r.delete("summary");
  return r;
}
function djo() {
  return l(x("tengu_classifier_disabled_surfaces", ""));
}
function l(e) {
  let r = new Set();
  for (let s of e.split(",")) {
    let n = s.trim();
    if (!n) continue;
    if (n in o) r.add(n);else if (!gB().warnedUnknownDisabledSurface) gB().warnedUnknownDisabledSurface = !0, t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`);
  }
  return r;
}
function ujo(e) {
  if (e.size === 0) return null;
  let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0 ? Ne(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : d();
  return r === "llm" && x("tengu_cobalt_wren", !1) ? "heuristic" : r;
}
function d() {
  if (x("tengu_classifier_summary_llm_emit", !1)) return "llm";
  return "heuristic";
}
function pjo() {
  return !1;
}
function cKo(e) {
  return ZZ() && Ome(e) && x("tengu_projects_thread_recap", !1);
}
var i = new Map([["blocked", "blocked"], ["done", "completed"], ["working", "review_ready"]]);
function dKo(e, r) {
  if (e.recap) return {
    status_category: e.state === "failed" ? "failed" : i.get(e.state) ?? "review_ready",
    status_detail: e.recap.headline,
    needs_action: e.state === "blocked" ? e.recap.needs : "",
    recent_action: e.recap.needsYou,
    description: e.recap.happened,
    reply: e.recap.reply
  };
  return {
    status_category: i.get(e.state) ?? "review_ready",
    status_detail: e.detail,
    needs_action: e.state === "blocked" ? e.needs ?? "" : "",
    recent_action: e.output.result ?? "",
    ...(r?.projectsRecap && {
      description: Btn(e.detail).text
    })
  };
}
function uKo(e, r) {
  let s = cjo(ljo(!1));
  if (!s.has("summary") || ujo(s) === null) return;
  let n = e.tool_name.startsWith("dialog:") ? {
    status_category: "blocked",
    status_detail: "Waiting on a user dialog",
    needs_action: e.action_description
  } : {
    status_category: "blocked",
    status_detail: `Waiting on permission: ${e.tool_name}`,
    needs_action: `Approve or deny ${e.tool_name}`
  };
  DTe(r, n);
}
export { ljo, sTn, lKo, cjo, djo, ujo, pjo, cKo, dKo, uKo };