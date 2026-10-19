// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { we, Sc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { KBr } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Ss } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { lT } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { A_, Ht, Sdn, wdn, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { KBe } from "B:/~BUN/root/chunk-aqd86p9a.js";
import { $pe, ePe } from "B:/~BUN/root/chunk-r9swysv9.js";
import { sd } from "B:/~BUN/root/chunk-j2ppas05.js";
import { O6, E$n } from "B:/~BUN/root/chunk-2wpqgvtg.js";
import { _me } from "B:/~BUN/root/chunk-rzekebyp.js";
import { DKn } from "B:/~BUN/root/chunk-mbz8rhex.js";
import { co } from "B:/~BUN/root/chunk-b0487zs4.js";
var l = new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects"]);
function n8s(e) {
  if (Ht()) return new Set(["bg"]);
  let r = new Set();
  if ((e ?? Sdn()) || A_() !== null) r.add("watched");
  if (gar()) r.add("ccr");
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || Sc()) r.add("bridge");
  let CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
  if (CLAUDE_CODE_ENTRYPOINT !== void 0 && KBr.has(CLAUDE_CODE_ENTRYPOINT)) r.add("desktop");
  if (i8s()) r.add("cli");
  if (!we() && sd()) r.add("repl");
  return r;
}
function gar() {
  if (lT("fanout")) return !0;
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !0;
  if (a.CLAUDE_CODE_REMOTE) return l.has(a.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return !1;
}
async function Cni(e) {
  return W() && e !== void 0 ? wdn(e) : void 0;
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
function r8s(e) {
  let r = new Set(),
    o = o8s();
  for (let n of e) {
    if (o.has(n)) continue;
    for (let s of u[n]) r.add(s);
  }
  if (e.has("bg")) r.delete("summary");
  if (E("tengu_classifier_summary_kill", !1)) r.delete("summary");
  return r;
}
function o8s() {
  return f(E("tengu_classifier_disabled_surfaces", ""));
}
function f(e) {
  let r = new Set();
  for (let o of e.split(",")) {
    let n = o.trim();
    if (!n) continue;
    if (n in u) r.add(n);else if (!O6().warnedUnknownDisabledSurface) O6().warnedUnknownDisabledSurface = !0, t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`);
  }
  return r;
}
function s8s(e) {
  if (e.size === 0) return null;
  let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0 ? Fe(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : m();
  return r === "llm" && E("tengu_cobalt_wren", !1) ? "heuristic" : r;
}
function m() {
  if (E("tengu_classifier_summary_llm_emit", !1)) return "llm";
  return "heuristic";
}
function i8s() {
  return !1;
}
function Rni(e) {
  return $pe() && ePe(e) && E("tengu_projects_thread_recap", !1);
}
var i = new Map([["blocked", "blocked"], ["done", "completed"], ["working", "review_ready"]]);
function Ani(e, r) {
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
      description: E$n(e.detail).text
    })
  };
}
function xni(e, r) {
  let o = r8s(n8s(!1));
  if (!o.has("summary") || s8s(o) === null) return;
  let n = co(e.tool_name),
    s = !n?.toolName || n.serverName === Ss ? _me(e.tool_name) : DKn({
      serverName: n.serverName,
      toolName: n.toolName
    }),
    c = e.tool_name.startsWith("dialog:") ? {
      status_category: "blocked",
      status_detail: "Waiting on a user dialog",
      needs_action: e.action_description
    } : {
      status_category: "blocked",
      status_detail: `Waiting on permission: ${s}`,
      needs_action: `Approve or deny ${s}`
    };
  KBe(r, c);
}
export { n8s, gar, Cni, r8s, o8s, s8s, i8s, Rni, Ani, xni };