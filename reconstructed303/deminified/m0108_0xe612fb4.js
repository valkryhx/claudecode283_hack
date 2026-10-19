// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, L, j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Hbt, c6s, kGe, ITe, EGe, ljt, mF, U5 } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { La, qs, ne, Up } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a, or } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Wge } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { D5 } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Gcn } from "B:/~BUN/root/chunk-hvvs3ef6.js";
import { sBt, iBt, b2, KM, k5n, E5n, Wyt, mHr, Bge, sun, oVs } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { HEe } from "B:/~BUN/root/chunk-dq3y90rd.js";
import { aE } from "B:/~BUN/root/chunk-3q5m6gqn.js";
var UD = 50000,
  fFr = 1e4,
  O3n = 4000,
  JJe = 128000,
  xge = 500000;
var $We = 4,
  jGs = 400000,
  I3n = 200000,
  YC = 50,
  WGs = 1073741824,
  zGs = 1e4,
  lcn = 1e4,
  MUt = 1e5;
var S = null;
function OGs(e) {
  let n = S;
  return S = e, n;
}
function x3n() {
  return S?.("tengu_cobalt_plinth_lovage", !1) === !0;
}
var IGs = ["mcp_needs_auth", "mcp_disabled", "mcp_required_missing", "auth_expired", "auth_overridden", "auth_missing_scope", "design_needs_authorization", "sandbox_violation", "outside_reads_blocked", "memory_paused", "feature_disabled", "policy_denied", "spawn_arg_limit", "staged_for_review"],
  MGs = ["claude_ai", "claude_design"],
  DGs = ["workflows", "artifacts"],
  LGs = ["managed_settings", "org_policy", "unavailable", "user_setting"],
  NGs = ["org_denied", "latched"];
function xEe() {
  return {
    kind: "auth_expired",
    provider: "claude_ai"
  };
}
function XJe(managed) {
  return {
    kind: "auth_overridden",
    provider: "claude_ai",
    managed: managed
  };
}
function acn(e) {
  switch (e) {
    case "env":
      return XJe(!1);
    case "fd":
      return XJe(!0);
    case "store":
    case "none":
      return xEe();
  }
}
var weakMap = new WeakMap();
function $D(e, n) {
  return weakMap.set(e, n), e;
}
function FGs(e) {
  if (e === null || typeof e !== "object") return;
  return weakMap.get(e);
}
function Uo() {
  return ln().CLAUDE_AI_ORIGIN.includes("staging") ? "staging" : "prod";
}
function GGs() {
  return se() ?? ln().CLAUDE_AI_ORIGIN;
}
function se() {
  return;
}
function D(e) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return;
  }
  let o = aE(n.hostname),
    r;
  switch (n.protocol) {
    case "https:":
    case "wss:":
      r = "https:";
      break;
    case "http:":
    case "ws:":
      if (!o) return;
      r = "http:";
      break;
    default:
      return;
  }
  if (n.username !== "" || n.password !== "" || n.pathname !== "/" || n.search !== "" || n.hash !== "") return;
  return `${r}//${n.host}`;
}
function VGs() {
  return !1;
}
function qGs() {
  return ae() ?? ln().BASE_API_URL;
}
function ae() {
  return;
}
function KGs() {
  return !1;
}
function MMe() {
  return;
}
var PEe = "/api/claude_code/policy_limits",
  p = "disabled by your organization's policy",
  v = "disabled for the rest of this session because an organization with a restricted policy was signed in earlier";
function IUt(e, n, o, r) {
  if (HEe(o).length > 0) return `${e} ${n} ${p}.`;
  if (r !== void 0) return r;
  return `${e} ${n} ${p}. Contact your organization admin to enable ${n === "are" ? "them" : "it"}.`;
}
function IMe(e, n) {
  return `${e} ${n} ${v}. Restart Claude Code to re-evaluate.`;
}
function Age(e) {
  return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection and try again.`;
}
function tyt(e) {
  return `Couldn't load your organization's policy, which governs ${e.toLowerCase()}. The request for ${PEe} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path. Ask your network admin to allow it; \`claude doctor\` (or /status in a session) shows which host was asked.`;
}
function pFr(e, n, o) {
  let r = `${e} ${n === "are" ? "aren't" : "isn't"} available`,
    {
      host: host,
      httpStatus: httpStatus
    } = o;
  switch (o.errorCode) {
    case "parse_failed":
      return `${r}: Claude Code couldn't read the reply when it asked ${host} for your organization's policy, which usually means a network proxy or web filter answered instead.`;
    case "network_error":
    case "timeout":
      return `${r}: couldn't reach ${host} to load your organization's policy. Check your network or proxy.`;
    case "auth_failed":
      if (httpStatus === 403) return `${r}: ${host}, or a proxy in front of it, refused the request for your organization's policy (HTTP 403).`;
      return httpStatus === 401 ? `${r}: ${host} didn't accept this session's credentials when Claude Code asked for your organization's policy.` : `${r}: no credentials could be attached to the request for your organization's policy.`;
    case "spurious_304":
      return `${r}: the saved copy of your organization's policy belongs to a previous sign-in, and a fresh one hasn't loaded yet.`;
    case "stale_tunnel_credential":
      return `${r}: the machine running claude ssh changed credentials while your organization's policy was loading, and a fresh copy hasn't loaded yet.`;
    case "request_failed":
      if (httpStatus === 404) return `${r}: the request for your organization's policy got a 404 from ${host}, which usually means a proxy or gateway isn't forwarding ${PEe}.`;
      if (httpStatus === 304) return `${r}: a caching proxy answered in place of ${host} when Claude Code asked for your organization's policy.`;
      if (httpStatus === 407) return `${r}: your proxy asked for authentication before it would forward the request for your organization's policy to ${host}.`;
      if (httpStatus !== null && (httpStatus >= 500 || httpStatus === 429)) return `${r}: your organization's policy couldn't be loaded from ${host} (HTTP ${httpStatus}). Try again later.`;
      return httpStatus !== null ? `${r}: your organization's policy couldn't be loaded from ${host} (HTTP ${httpStatus}). Check your proxy settings.` : `${r}: the request to ${host} for your organization's policy didn't complete. If you use a proxy, check that it lets ${host} through.`;
  }
}
function HGs(e) {
  return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection, then restart Claude Code and try again.`;
}
function $Gs(e) {
  return `/${e} is available for your organization but wasn't when this session started. Restart Claude Code to use it.`;
}
function P3n(e, n) {
  if (HEe(e).length > 0) return p;
  return n ?? p;
}
function UGs() {
  return `${v} \u2014 restart Claude Code to re-evaluate`;
}
function BGs() {
  return "couldn't verify your organization's policy \u2014 check your network connection and try again";
}
function YLo() {
  return `your organization's policy couldn't be loaded: the request for ${PEe} got a 404, which usually means a proxy or gateway isn't forwarding that path. Ask your network admin to allow it`;
}
var Pge = "\u02F9-\u02FC\u230C-\u230F\u231C-\u231F\u239B-\u23CC\u23DC-\u23E1\u2E00-\u2E0D\u2E1C\u2E1D\u2500-\u257F";
var QE = "[Request interrupted by user]",
  Lp = "[Request interrupted by user for tool use]",
  Hx = "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]",
  GO = "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]",
  JH = "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]",
  ZE = "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
  DMe = "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]",
  LMe = "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]",
  NMe = "[Tool call not completed: an approval request expired with no answer, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]",
  FMe = "[Tool call not completed: an approval request was still unanswered when the message that follows arrived and was closed, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]",
  OEe = ["[Request interrupted by user]", "[Request interrupted by user for tool use]", "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]", "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]", "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]", "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.", "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]", "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]"];
function bh(e) {
  if (e.type !== "user") return !1;
  let n = e.message?.content;
  if (typeof n === "string") return OEe.some(item => n.startsWith(item));
  if (!Array.isArray(n)) return !1;
  return n.length > 0 && n.every(item => {
    let r = item?.type === "text" ? item.text : item?.type === "tool_result" && item.is_error === !0 ? item.content : void 0;
    return typeof r === "string" && OEe.some(item => r.startsWith(item));
  });
}
var bb = "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). STOP what you are doing and wait for the user to tell you how to proceed.",
  nyt = "User rejected tool use",
  VO = "API Error: Request was aborted.",
  QJe = `The user sent a new message while you were working:
`,
  HMe = "Operation stopped by hook";
function dcn(e) {
  return e.startsWith(ZE) || e.startsWith(DMe) || e.startsWith(LMe);
}
var ryt = `

Note: The user's next message may contain a correction or preference. Pay close attention \u2014 if they explain what went wrong or how they'd prefer you to work, consider saving that to memory for future sessions.`;
function IEe(e) {
  if (e.type !== "user" || e.interruptedByShutdown !== !0) return !1;
  let n = e.message?.content;
  return Array.isArray(n) && n.some(item => item.type === "tool_result");
}
var mFr = ` hook feedback:
`,
  XLo = ["Stop", "TeammateIdle", "TaskCreated", "TaskCompleted"];
function M3n(e, n) {
  return `${e}${mFr}${n}`;
}
var DUt = "[structured-output-enforce]",
  JLo = "",
  ZJe = "[projects-reply-gate]",
  ccn = "The previous response failed to produce a valid tool call. Please retry the tool call now.",
  QLo = "Your tool call was malformed and could not be parsed. Please retry.",
  ucn = "[Your previous response had no visible output. Please continue and produce a user-visible response.]",
  pcn = "The PermissionDenied hook indicated you may retry this tool call.",
  LUt = "The turn did not end: a tool call in your last message asked to end it, but another call in that message failed. Deal with the failure, then finish the turn. The calls that succeeded took effect, so do not repeat them.",
  gFr = "Your response above was stopped by a safety classifier \u2014 this is not a tool or API error. " + "The rest of it was withheld, and tool calls in it that had not finished did not run. Do not produce that content again, even reworded.",
  ZLo = gFr + ' Exception: a tool call whose result reads "Interrupted" was already running when the response was stopped; it may have partially or fully completed.',
  oyt = "Output token limit hit. Resume directly \u2014 no apology, no recap of what you were doing. " + "Pick up mid-thought if that is where the cut happened. Break remaining work into smaller pieces.",
  syt = "Output token limit hit while you were still reasoning, before this response produced any text or tool call. That reasoning was not kept and is not part of this conversation, so there is nothing to resume. Continue from the conversation above: reason much more briefly and produce your answer or next tool call well within the output limit.",
  eNo = "Your response was cut off because it exceeded the output token limit. Continue from where you left off. What you write next is shown as a separate block below the text so far, so begin at the start of the line, table row, list item or sentence that was cut, writing it again in full, and if you were inside a code block or a table, open it again first (the same code fence and language, the table's header row). Repeat nothing before that point and do not comment on the interruption. Keep going until the response is complete.",
  tNo = "[Your previous response reached the output limit with no visible output. Please continue and produce a brief user-visible response or tool call right away.]",
  NUt = "Your response above was cut off mid-stream. Resume directly from where it stops \u2014 no apology, no recap. " + "If none of it survived, answer the request from the start.",
  FUt = "Your response above was cut off mid-stream and only your next message is delivered. " + "Write the complete response again from the start \u2014 no apology, no mention of the cut-off.",
  fcn = "Goal check-in: \xAB",
  ce = [DUt, JLo, ZJe, Gcn, fcn].filter(item => item.length > 0),
  k = [oyt, syt, tNo, eNo, NUt, FUt],
  le = [ccn, QLo, ucn, pcn, LUt, gFr, ZLo, ...k];
function AJ(e) {
  if (e.type !== "user" || e.isMeta !== !0) return !1;
  let n = E(e.message?.content);
  if (n === void 0) return !1;
  if (ce.some(item => n.startsWith(item))) return !0;
  if (le.includes(n)) return !0;
  return XLo.some(item => n.startsWith(`${item}${mFr}`));
}
function YGs(e) {
  if (!AJ(e)) return !1;
  let n = E(e.message?.content);
  return n === NUt || n === FUt;
}
function XGs(e) {
  return AJ(e) && k.includes(E(e.message?.content) ?? "");
}
function JGs(e) {
  return AJ(e) && E(e.message?.content) === LUt;
}
function E(e) {
  if (typeof e === "string") return e;
  let n = Array.isArray(e) ? e[0] : void 0;
  if (typeof n === "object" && n !== null && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string") return n.text;
  return;
}
var I = 58n,
  de = (1n << 128n) - 1n,
  D3n = 22,
  hFr = "[1-9A-HJ-NP-Za-km-z]{22}",
  regExp = new RegExp("^[1-9A-HJ-NP-Za-km-z]{22}$"),
  fe = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function g(e) {
  if (!fe.test(e)) return null;
  let n = BigInt(`0x${e.replaceAll("-", "")}`),
    o = "";
  for (let r = 0; r < 22; r++) o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[Number(n % I)] + o, n /= I;
  return o;
}
function bW(e) {
  if (!regExp.test(e)) return null;
  let n = 0n;
  for (let r of e) n = n * I + BigInt("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(r));
  if (n > de) return null;
  let o = n.toString(16).padStart(32, "0");
  return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20)}`;
}
var cn = "Artifact",
  iyt = ["document", "slides", "design", "other"],
  x_ = "ArtifactComments",
  mg = "ArtifactData",
  GM = "ArtifactCheck",
  Vte = [cn, x_, mg, GM],
  Um = /^[0-9a-f]{32}$/,
  mcn = "file_path",
  nNo = ["action", "url", "prompt"],
  rNo = ["page", "version"],
  gcn = "Describe what this page contains and reproduce its substantive text content, structure, and any data it presents.",
  oNo = " \u2014 live version; raw HTML follows]",
  hcn = "You hadn't viewed the live version of this artifact, so the publish was refused.",
  sNo = "This session hadn't viewed the live version of this artifact, so the publish was refused.",
  iNo = e => `[Artifact ${e}${oNo}`,
  aNo = " \u2014 live version; a line diff against the content you sent follows]",
  lNo = e => `[Artifact ${e}${aNo}`,
  regExp_2 = new RegExp(`\\n\\[Artifact [\\w-]{1,64}(?:${La(oNo)}|${La(aNo)})\\n`),
  yFr = "Its full source (",
  _Fr = "Merge your edits onto it",
  regExp_3 = new RegExp(`\\n(?=\\[Artifact [\\w-]{1,64}(?:${La(oNo)}|${La(aNo)})\\n|${La(yFr)}|${La(_Fr)})`),
  Ale = "Publish refused \u2014 nothing was merged or published:",
  V = "file_path required to publish. Write the page to an .html file, then call again with its path as `file_path`",
  bFr = `${V}, or pass \`type_url\` to start a new Artifact from a type. There is no inline content parameter.`,
  SFr = `${V}. There is no inline content parameter, and creating an Artifact from a type is not available in this session, so build the page yourself.`,
  uNo = [bFr, SFr],
  MEe = {
    republishForceRefused: "pr_review_republish_force_refused",
    decisionsProvenance: "pr_review_decisions_provenance",
    republishAnchor: "pr_review_republish_anchor",
    republishStamp: "pr_review_republish_stamp",
    overwriteRefused: "pr_review_overwrite_refused"
  };
function $Me() {
  return x3n() ? "\u2026/artifact/<id>" : "\u2026/code/artifact/<uuid>";
}
var ayt = "Artifacts need a claude.ai login",
  ycn = 13,
  _cn = "not_logged_in",
  wFr = 15,
  bcn = 22,
  dai = ["policy_blocked", "policy_fetch_failed", "policy_route_missing"],
  Scn = {
    rate_limited: "publish_rate_limited",
    contract_rollout: "publish_contract_rollout"
  },
  pNo = `${ayt}. Run /login and select "Claude account with subscription", then retry \u2014 the "Anthropic Console account" option does not provide claude.ai credentials.`,
  HUt = "Every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed.",
  wcn = "Changing the input will not help: every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed. The input was also invalid, but the schema error below matters only once that login is available.",
  fNo = `${ayt}, and this remote session authenticates through the machine that launched it, which is not signed in to claude.ai. Sign in to claude.ai on that machine (/login, "Claude account with subscription"), then reconnect this session.`,
  mNo = `${ayt}, but this session authenticates with a credential injected by its host environment, which takes precedence and cannot be changed here. Start a session that is signed in to claude.ai to publish or read artifacts.`;
function gNo(e) {
  return `${ayt}. This session's API access is set up by ${e ? "your organization's managed settings" : "the ANTHROPIC_FEDERATION_RULE_ID / ANTHROPIC_ORGANIZATION_ID environment variables"}, which stays active for everything else \u2014 artifacts also use a claude.ai account. Run /login and select "Claude account with subscription", then retry.`;
}
function vFr(e) {
  switch (e) {
    case "org_policy_unverifiable":
      return "Artifacts can't check the signed-in Claude account's organization settings from this session: the account belongs to a Claude organization (Team or Enterprise), and this session's API access uses a different credential that can't read those settings. Run /login with a personal Claude account (Pro or Max), then retry.";
    case "plan_unreadable":
      return "The signed-in Claude account's plan couldn't be read from this session. Run /login again to refresh the signed-in account, then retry.";
    case "org_denied":
      return IUt("Artifacts", "are", Wge(), "Artifacts are disabled by your organization's policy. Contact your organization admin to enable them, then retry.");
    case "latched":
      return IMe("Artifacts", "are");
    case "cache_miss":
      return Age("Artifacts");
    case "policy_route_missing":
      return tyt("Artifacts");
    case "policy_unavailable":
      return "Artifacts can't check the organization settings that apply to this session: the session's configuration (such as a custom ANTHROPIC_BASE_URL) prevents the policy lookup. Remove that configuration, then retry.";
  }
}
function kFr(policy_kind) {
  switch (policy_kind) {
    case "plan_unreadable":
      return xEe();
    case "org_denied":
    case "latched":
      return {
        kind: "policy_denied",
        feature: "artifacts",
        policy_kind: policy_kind
      };
    case "org_policy_unverifiable":
    case "cache_miss":
    case "policy_route_missing":
    case "policy_unavailable":
      return;
  }
}
function EFr(e) {
  if (q(e)) return "Artifacts aren't available: Anthropic couldn't confirm your organization's settings for this cloud session (HTTP 403). This isn't a problem with your network.";
  return pFr("Artifacts", "are", e.outcome);
}
function q({
  cause: cause,
  outcome: outcome
}) {
  return cause === "policy_fetch_failed" && D5() && outcome.httpStatus === 403 && outcome.serverErrorCode === "oauth_not_allowed_for_organization";
}
var pe = "Claude Code reads that policy from ",
  Ee = /^[A-Za-z0-9.-]+(:[0-9]+)?$/;
function ge(e) {
  return Ee.test(e) ? `${e}${PEe}` : `the API's ${PEe} route`;
}
var he = " and keeps retrying it in the background; whether artifacts are allowed is decided once it loads. Do not retry this call now. Tell the user why artifacts are unavailable and, if a proxy, VPN or web filter is involved, that their IT admin needs to let that address through.",
  Ae = ", and a proxy or gateway that does not forward that path will keep answering 404, so nothing in this session can load it. Do not retry this call. Tell the user that their IT admin needs to let that address through to the API.";
function f7s(e) {
  let n = ge(e.outcome.host);
  if (q(e)) return `Claude Code reads the organization's policy from ${n}. In this cloud session, Anthropic's API refused the request for the user's organization (HTTP 403). Do not retry this call now. Tell the user that artifacts are unavailable because Anthropic couldn't confirm their organization's settings for this cloud session, and that it isn't a problem with their network.`;
  let o = e.cause === "policy_route_missing" ? Ae : he;
  return `${pe}${n}${o}`;
}
function vcn(e) {
  return `${EFr(e)}

${f7s(e)}`;
}
function kcn(e, n) {
  return `${ayt}, and this session is authenticating with ${e}, which takes precedence over a claude.ai account. ${n} Then run /login and select "Claude account with subscription".`;
}
class ArtifactInputError extends Error {
  reasonCode;
  maxErrorChars;
  constructor(e, n, o) {
    super(e);
    this.name = "ArtifactInputError", this.reasonCode = n, this.maxErrorChars = o?.maxErrorChars;
  }
}
var R = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
  O = "https://(?:[a-z0-9-]+\\.)?claude\\.ai",
  eQe = "/(?:artifact|code/(?:artifact|frame))/",
  x = `${R}|${hFr}`,
  y = `${eQe}(?:([A-Za-z0-9_-]*)-)?(${x})(?:[/?#]|$)`,
  C = `${eQe}(?:[A-Za-z0-9_-]*-)?(?:${x})/([^?#]+)`;
function T(e, n = !1) {
  if (e === void 0) return null;
  if (e.length !== D3n) return e;
  return n ? null : bW(e);
}
function m(e) {
  return e?.length === D3n ? {
    shortId: !0
  } : {};
}
var regExp_4 = new RegExp(`^${R}$`),
  vB = /^[\w-]{1,64}$/,
  $Ut = 1024,
  kB = 16000,
  hNo = UD,
  UUt = 20000,
  a4 = 300000,
  UWe = "eval-stub://artifact/";
function Yc() {
  let CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR = or.CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR;
  return typeof CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR === "string" && CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR.length > 0 ? CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR : null;
}
function b() {
  return null;
}
function yNo(e) {
  if (new RegExp(`^${O}(?:[/?#]|$)`).test(e)) return "prod";
  let n = b();
  if (n !== null && new RegExp(`^${n}(?:[/?#]|$)`).test(e)) return "staging";
  return null;
}
function Yt(e) {
  return J(e, !1);
}
function J(e, n) {
  let o = e.match(new RegExp(`^${O}${y}`)),
    slug = T(o?.[2], n);
  if (slug !== null) return h(e, {
    slug: slug,
    env: "prod",
    ...m(o?.[2])
  }, o?.[1]);
  let i = b();
  if (i !== null) {
    let c = e.match(new RegExp(`^${i}${y}`)),
      slug_2 = T(c?.[2], n);
    if (slug_2 !== null) return h(e, {
      slug: slug_2,
      env: "staging",
      ...m(c?.[2])
    }, c?.[1]);
  }
  let s = e.match(new RegExp(`^https://(${R})\\.frame\\.(staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`));
  if (s?.[1]) return h(e, {
    slug: s[1],
    env: s[2] ? "staging" : "prod"
  });
  let u = MMe();
  if (u) {
    let c = e.match(new RegExp(`^https?://([^/?#]+)${y}`)),
      slug_3 = T(c?.[3], n);
    if (c !== null && slug_3 !== null && c[1] === new URL(u).host) return h(e, {
      slug: slug_3,
      env: Uo(),
      ...m(c[3])
    }, c[2]);
  }
  return null;
}
var Te = /^[A-Za-z0-9_-]{1,64}$/,
  Re = /^[a-z0-9][a-z0-9-]{0,59}$/;
function h(e, n, vanity) {
  let r = vanity !== void 0 && Re.test(vanity) ? {
      ...n,
      vanity: vanity
    } : n,
    i = e.indexOf("#"),
    s = i === -1 ? e : e.slice(0, i),
    u = s.indexOf("?");
  if (u === -1) return r;
  let sk = s.slice(u + 1).split("&").find(item => item.startsWith("sk="))?.slice(3);
  return sk !== void 0 && Te.test(sk) ? {
    ...r,
    sk: sk
  } : r;
}
function DEe(e) {
  let n = MMe(),
    o = b(),
    r = e.match(new RegExp(`^${O}${C}`))?.[1] ?? (o !== null ? e.match(new RegExp(`^${o}${C}`))?.[1] : void 0) ?? (n ? e.match(new RegExp(`^https?://${La(new URL(n).host)}${C}`))?.[1] : void 0);
  return r === void 0 || r === "" ? void 0 : r;
}
function QH(e) {
  try {
    let n = new URL(e);
    if (n.protocol === "http:") n.protocol = "https:";
    if (n.hostname.endsWith(".")) n.hostname = n.hostname.slice(0, -1);
    return n.href;
  } catch {
    return e;
  }
}
function VM(e) {
  return typeof e === "string" ? Yt(QH(e)) : null;
}
function xJ(e) {
  let n = QH(e);
  return Yt(n) ?? J(n.toLowerCase(), !0);
}
var regExp_5 = new RegExp(`^${La(UWe)}(${R})(?:[/?#]|$)`);
function tQe(e) {
  let n = e.match(regExp_5);
  return n?.[1] ? {
    slug: n[1]
  } : null;
}
var BWe = "artifact-deleted",
  regExp_6 = new RegExp(`^<${BWe} url="([^"]+)"/>`),
  TFr = "artifact-attached",
  regExp_7 = new RegExp(`^<${TFr} url="([^"]+)"(?: title="([^"]*)")?( own)?/>`);
function il(e) {
  let n = Yt(e)?.slug;
  if (n !== void 0) return n;
  return Yc() !== null ? tQe(e)?.slug ?? null : null;
}
function CFr(e) {
  if (x3n()) {
    let n = g(e);
    if (n !== null) return `/artifact/${n}`;
  }
  return `/code/artifact/${e}`;
}
function N(e) {
  let n = MMe();
  if (n && e === Uo()) return n;
  return "https://claude.ai";
}
function Hn(e) {
  return `${N(e.env)}${CFr(e.slug)}`;
}
function xle(owned) {
  return owned === void 0 ? {} : {
    owned: owned
  };
}
function jWe(e, n) {
  return {
    written: {
      url: Hn(e)
    },
    ...xle(n)
  };
}
function Ecn(e) {
  let n = N(e.env),
    o = g(e.slug);
  return [`${n}/code/artifact/${e.slug}`, ...(o !== null ? [`${n}/artifact/${o}`] : [])];
}
function Zv(e, n) {
  let {
    target: target,
    other: other
  } = RFr(e, n);
  return other === void 0 ? target : `${target} [same artifact: ${other}]`;
}
function RFr(e, target_2) {
  let o = typeof e === "string" ? Yt(e) : null;
  if (o === null) return {
    target: target_2
  };
  let r = N(o.env),
    i = g(o.slug),
    s = `${r}/code/artifact/${o.slug}`;
  if (i === null) return {
    target: s
  };
  let u = `${r}/artifact/${i}`;
  return o.shortId ? {
    target: u,
    other: s
  } : {
    target: s,
    other: u
  };
}
function SNo(e) {
  return e.other === void 0 ? "" : ` [same artifact: ${e.target} is ${e.other}]`;
}
function nQe(e) {
  return `https://${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`;
}
function Ci(e, n) {
  let o = typeof e === "string" ? Yt(e) : null;
  return o ? Hn(o) : n;
}
function AFr(e) {
  let o = e.match(new RegExp(`^https://claude\\.ai${eQe}(${x})/?$`));
  return T(o?.[1]) !== null;
}
var rQe = 8192,
  wNo = rQe * 4,
  L3n = 280,
  y2 = 60,
  Ie = /&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,
  A = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: "\xA0",
    ndash: "\u2013",
    mdash: "\u2014",
    minus: "\u2212",
    hellip: "\u2026",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    laquo: "\xAB",
    raquo: "\xBB",
    middot: "\xB7",
    bull: "\u2022",
    dagger: "\u2020",
    Dagger: "\u2021",
    prime: "\u2032",
    Prime: "\u2033",
    trade: "\u2122",
    copy: "\xA9",
    reg: "\xAE",
    deg: "\xB0",
    times: "\xD7"
  };
function Z(e) {
  return e.replace(/<!--[\s\S]*?(?:-->|$)/g, "");
}
function w(e) {
  let n = Z(e.slice(0, rQe)),
    o = n.search(/<svg/i);
  return o === -1 ? n : n.slice(0, o);
}
function lyt(e) {
  return e.replace(Ie, (n, o) => {
    if (o.startsWith("#")) {
      let i = o[1] === "x" || o[1] === "X" ? parseInt(o.slice(2), 16) : parseInt(o.slice(1), 10);
      return i <= 1114111 && (i < 55296 || i > 57343) ? String.fromCodePoint(i) : n;
    }
    if (Object.hasOwn(A, o)) return A[o] ?? n;
    let r = o.toLowerCase();
    if (Object.hasOwn(A, r)) return A[r] ?? n;
    return n;
  });
}
var ye = /<link\b[^>]*>/gi,
  Ce = 2048,
  Q = /<link\b[^>]{0,2048}\bartifact-thumbnail\b/gi,
  regExp_8 = new RegExp(Q.source, "i"),
  Oe = /([^\s"'<>\/=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g,
  ee = "artifact-thumbnail",
  xe = /^\(\s*prefers-color-scheme\s*:\s*dark\s*\)$/i,
  be = /^(?:all|\(\s*prefers-color-scheme\s*:\s*light\s*\))$/i,
  M = /<(script|style)\b[^>]{0,2048}>[\s\S]*?(?:<\/\1\s*>|$)/gi;
function Ne(e) {
  let n = [];
  for (let o of e.match(ye) ?? []) {
    if (o.length > Ce) {
      if (regExp_8.test(o)) n.push({
        dark: !1,
        oversize: !0
      });
      continue;
    }
    let r, i, s;
    for (let d of o.matchAll(Oe)) {
      let _ = d[1].toLowerCase(),
        f = d[2] ?? d[3] ?? d[4] ?? "";
      if (_ === "rel") r ??= f;else if (_ === "href") i ??= f;else if (_ === "media") s ??= f;
    }
    if (!(r ?? "").toLowerCase().split(/\s+/).includes(ee)) continue;
    let badMedia = lyt(s ?? "").trim(),
      dark = xe.test(badMedia),
      l = badMedia === "" || be.test(badMedia);
    n.push({
      ...(i !== void 0 && {
        href: lyt(i).trim()
      }),
      dark: dark,
      ...(!dark && !l && {
        badMedia: badMedia
      })
    });
  }
  return n;
}
function Tcn(e) {
  let n = {
      pastWindow: !1
    },
    o = w(e).replace(M, "");
  for (let {
    href: href,
    dark: dark_2,
    badMedia: badMedia_2,
    oversize: oversize
  } of Ne(o)) if (oversize) n.oversizeTag = !0;else if (href === void 0) n.missingHref = !0;else if (badMedia_2 !== void 0) n.badMedia ??= badMedia_2;else if (dark_2) n.dark ??= href;else n.light ??= href;
  let r = i => i.match(Q)?.length ?? 0;
  return n.pastWindow = e.includes(ee) && r(Z(e).replace(M, "")) > r(o), n;
}
var vNo = /[<>&"']/,
  we = [["'", "'"], ['"', '"'], ["\u2018", "\u2019"], ["\u201C", "\u201D"], ["`", "`"]];
function N3n(e) {
  let n = e;
  for (let o = 0; o < 4; o++) {
    let r = n.trim();
    for (let [i, s] of we) if (r.length > i.length + s.length - 1 && r.startsWith(i) && r.endsWith(s)) {
      r = r.slice(i.length, r.length - s.length);
      break;
    }
    if (r = lyt(r), r === n) break;
    n = r;
  }
  return n;
}
var G = String.raw`\p{Extended_Pictographic}[\ufe0e\ufe0f]?\p{Emoji_Modifier}?`,
  Fe = String.raw`\u{1f3f4}\u{e0067}\u{e0062}(?:\u{e0065}\u{e006e}\u{e0067}|\u{e0073}\u{e0063}\u{e0074}|\u{e0077}\u{e006c}\u{e0073})\u{e007f}`,
  Ue = String.raw`(?:[#*0-9]\ufe0f?\u20e3|\p{Regional_Indicator}{2}|${Fe}|${G}(?:\u200d${G}){0,3})`,
  regExp_9 = new RegExp(`^${Ue}{1,4}$`, "u"),
  De = /\p{Regional_Indicator}{2}.*\p{Regional_Indicator}/u;
function dyt(e) {
  if (typeof e !== "string" || e.length > 32) return;
  let n = N3n(e);
  return regExp_9.test(n) && !De.test(n) ? n : void 0;
}
function Ccn(e) {
  let o = w(e).match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (o === void 0) return null;
  return Xk(lyt(o));
}
function Xk(e) {
  let o = Array.from(e, i => {
    let s = i.codePointAt(0) ?? 0;
    return s <= 31 || s >= 127 && s <= 159 ? " " : i;
  }).join("").replace(/\s+/g, " ").trim();
  if (o === "") return null;
  let r = Array.from(o);
  return r.length > L3n ? r.slice(0, L3n).join("") : o;
}
var qM = /[\u201C\u201D\u201E\u201F\u2E42\uFF02\u02F5\u02F6\u2033\u2034\u2036\u2037\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E\u2760\u{1F676}-\u{1F678}]/gu,
  ZH = /['\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C8\u02CA\u02CB\u0374\u0384\u055A\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2018\u2019\u201A\u201B\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]{2,}/g,
  SW = /[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu;
function yA(e) {
  return e <= 31 || e >= 127 && e <= 159 || e === 173 || e === 1564 || e >= 8203 && e <= 8207 || e === 8232 || e === 8233 || e >= 8234 && e <= 8238 || e >= 8288 && e <= 8297 || e >= 65024 && e <= 65039 || e === 65279 || e >= 65529 && e <= 65531 || e === 94180 || e >= 917504 && e <= 917999;
}
var WWe = /^[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]$/u;
function ve(e) {
  return e === 8204 || e === 8205;
}
function te(e) {
  return e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999;
}
function oQe(e) {
  return ve(e) || te(e);
}
function QGs(e) {
  return !oQe(e) && (yA(e) || e > 127 && WWe.test(String.fromCodePoint(e)));
}
var ke = /^[\p{Extended_Pictographic}\p{Emoji_Modifier}]$/u,
  $e = 8,
  B = /^[#*0-9]$/,
  Me = /^\p{Script=Han}$/u,
  Ge = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Mongolian}\p{Script=Devanagari}\p{Script=Bengali}\p{Script=Gurmukhi}\p{Script=Gujarati}\p{Script=Oriya}\p{Script=Tamil}\p{Script=Telugu}\p{Script=Kannada}\p{Script=Malayalam}\p{Script=Sinhala}\p{Script=Myanmar}\p{Script=Tibetan}\p{Script=Khmer}]$/u,
  Be = /^[\n\r\t\v\f\u0085\u2028\u2029]$/;
function F3n(e) {
  if ((e.codePointAt(0) ?? 0) < 128) return B.test(e) ? "keycap" : "plain";
  return ke.test(e) ? "pictograph" : B.test(e) ? "keycap" : Me.test(e) ? "han" : Ge.test(e) ? "joining" : "plain";
}
function H3n(e, n) {
  if (te(e)) {
    let rides = e <= 65039 ? n === "pictograph" || n === "han" || n === "keycap" && e === 65039 : n === "han";
    return {
      rides: rides,
      after: rides && n === "pictograph" ? "selector" : "none"
    };
  }
  return {
    rides: e === 8205 ? n === "pictograph" || n === "selector" || n === "joining" : n === "joining",
    after: "none"
  };
}
function cyt(e, n, {
  joiners: joiners
} = {
  joiners: !0
}) {
  let r = Up(e),
    i = [],
    s = 0,
    cut = !1,
    c = 0,
    l = "none";
  for (let d of r) {
    if (++s > 16 * n || i.length >= n + 1) {
      cut = !0;
      break;
    }
    let _ = d.codePointAt(0) ?? 0;
    if (!joiners && oQe(_)) l = "none";else if (oQe(_)) {
      let f = H3n(_, l);
      if (f.rides && c < $e) i.push(d), c++, l = f.after;else l = "none";
    } else if (Be.test(d)) {
      if (i.length > 0 && i.at(-1) !== " ") i.push(" ");
      l = "none";
    } else if (!QGs(_)) i.push(d), l = F3n(d);else l = "none";
  }
  if (i.length > n) cut = !0;
  return {
    kept: Rl(i.slice(0, cut ? n - 1 : n).join("")),
    cut: cut
  };
}
function xFr(e) {
  let n = "",
    o = "none";
  for (let r of Up(e)) {
    let i = He(r, o);
    n += i.shown, o = i.after;
  }
  return n;
}
function He(shown, n) {
  let o = shown.codePointAt(0) ?? 0;
  if (oQe(o)) {
    let r = H3n(o, n);
    return {
      shown: r.rides ? shown : "\uFFFD",
      after: r.after
    };
  }
  if (o === 10 || o === 13 || o === 9) return {
    shown: shown,
    after: "none"
  };
  if (QGs(o)) return {
    shown: "\uFFFD",
    after: "none"
  };
  return {
    shown: shown,
    after: F3n(shown)
  };
}
function KT(e, n) {
  let {
    kept: kept,
    cut: cut_2
  } = cyt(e, n);
  return cut_2 ? `${kept}\u2026` : kept;
}
var Ye = 1024,
  Ke = 2048;
function Oge(e) {
  return typeof e === "string" ? KT(e, Ye) : "(unknown)";
}
function qte(e) {
  return typeof e === "string" ? KT(e, Ke) : "(unknown)";
}
var Xe = 512;
function PFr(e) {
  return e.replace(regExp_11, n => `${n}\\`);
}
function LEe(e) {
  return PFr(KT(e, Xe));
}
function YT(e, n) {
  let {
    kept: kept_2,
    cut: cut_3
  } = cyt(e, n, {
    joiners: !1
  });
  return cut_3 ? `${kept_2}\u2026` : kept_2;
}
var cai = 500,
  kNo = 600;
function uai(e) {
  let n = e?.action;
  return n === void 0 || n === "publish" || n === "live-edit" || n === "sync" || n === "version";
}
var Ige = 25,
  NEe = 200,
  sQe = 50;
function FEe(e) {
  let scope = e.scope;
  return scope === "shared" || scope === "all" ? scope : "mine";
}
var OFr = [Hbt, kGe, c6s, EGe, ljt, ITe],
  H = OFr,
  ze = ["tool_use_error", "sandbox_violations"],
  Y = ["result", "name", "output", "error", "system"];
function We() {
  let {
      open: open,
      close: close,
      slash: slash
    } = b2,
    r = `[${open}][^${sBt}${open}${close}]*[${slash}]`,
    i = `(?<=[${sBt}$])[${open}][A-Za-z]`,
    s = KM(Y),
    u = KM(Y, ({
      close: close_2
    }) => `[\\r\\n${Wyt}]*[${close_2}]`);
  return [new RegExp(`(?=${r})${s.source}`, s.flags), new RegExp(`(?!${i})${u.source}`, u.flags)];
}
function IFr() {
  return [["artifact", mHr], ["artifact", Bge, "owned", "by", "you"], ["artifact", Bge, "raw", "html", "follows"], ["artifact", Bge, "summary", "below"], ["artifact", Bge, "shared", "with", "you"], ["artifact", Bge, "published", "from", "your"], ["artifact", Bge, "live", "version"], ["artifact", Bge, "published", "by", "a", "writer"], ["this", "version", "has", Bge, "published", "files"], ["stored", "for", "the", "live", "version"], ["origin", "of", "this", "version"], ["created", "from", "the", "artifact", "type"], ["end", "of", "live", "content", sun], ["end", "of", "live", "changes", sun], ["an", "unchanged", "line", sun], ["this", "artifact", Bge, "ships", "an", "instructions", "file"], ["could", "not", "check", "whether", "this", "artifact"], ["design", "system", "not", "attached"], ["design", "systems", "not", "listed"], ["design", "systems", "left", "out"], ["published", "types", "titled"], ["artifact", "types", "not", "listed"], ["type", "reference", "pages", "not", "attached"], ["a", "quickstart", "in", "this", "conversation"], ["the", "design", "guidance", "that", "came", "with"], ["how", "to", "build", "and", "iterate", "on"]];
}
class oe {
  #e;
  #t;
  #n;
  get lead() {
    return this.#e ??= oVs(IFr()), this.#e;
  }
  get page() {
    return this.#t ??= [KM(H), this.lead], this.#t;
  }
  get envelopes() {
    return this.#n ??= [KM(L([...H, "transcript", ...U5.filter(item => item !== mF), ...ze])), ...We(), k5n(), E5n(), this.lead], this.#n;
  }
}
var m7s = new z(() => new oe());
function re() {
  return m7s.of(j().host);
}
function ENo() {
  return re().lead;
}
var U = [Lp, Hx, GO, JH];
function Rcn(e) {
  return U.some(item => e.includes(item));
}
var regExp_10 = new RegExp(U.map(item => `${La(item.slice(0, 1))}(?=${La(item.slice(1))})`).join("|"), "g"),
  regExp_11 = new RegExp(["<(?=\\/?(?:tool_use_error|sandbox_violations|error)\\b)", "InputValidationError(?!\\\\)", ...U.map(item => `${La(item.slice(0, 1))}(?=${La(item.slice(1, -1))})`)].join("|"), "gi");
function g7s(e) {
  return e.replace(regExp_10, n => `${n}\\`);
}
function Rl(e, n = "all") {
  let o = re(),
    r = e;
  for (let i of n === "page" ? o.page : o.envelopes) r = r.replace(i, s => `${s}\\`);
  return n === "page" ? r : g7s(r);
}
function TNo(e, n, o = "all") {
  let r = Rl(ne(e, n), o);
  return r.length > n ? Rl(ne(e, n - 1), o) : r;
}
function EB(e, n) {
  return Rl(qs(Array.from(ne(e, n * 4), o => yA(o.codePointAt(0) ?? 0) ? " " : o).join("").replace(SW, " ").replace(/\s+/g, " ").trim(), n));
}
var h7s = 80;
function iQe(e) {
  return XC((sp(Xk(e ?? "") ?? "") ?? "").replace(regExp_13, " ").replace(/:\u2215\u2215/g, "://")).replace(Ple, " ").replace(uyt, pyt).replace(/\s+/g, " ").trim();
}
function wW(e) {
  let n = iQe(e),
    o = ne(n, h7s);
  if (o === n) return n;
  return `${o.endsWith(":\u2215") ? o.slice(0, -1) : o}\u2026`;
}
function sp(e) {
  return Array.from(e, n => yA(n.codePointAt(0) ?? 0) ? " " : n).join("").replace(SW, " ").replace(/"/g, "'").replace(qM, "'").replace(ZH, "'").replace(/\s+/g, " ").trim() || null;
}
var y7s = String.raw`\u002b\u003d\u005e\u007c\u007e\u00a2-\u00a5\u00a8\u00ac\u00af\u00b1\u00b4\u00b8\u00d7\u00f7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u058f\u0606-\u0608\u060b\u07fe\u07ff\u0888\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20c1\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\ua838\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc2\ufdfc\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe3\uffe5\uffe6\uffe9-\uffec\u{10d8e}\u{10d8f}\u{11fdd}-\u{11fe0}\u{1cef0}\u{1d6c1}\u{1d6db}\u{1d6fb}\u{1d715}\u{1d735}\u{1d74f}\u{1d76f}\u{1d789}\u{1d7a9}\u{1d7c3}\u{1e2ff}\u{1ecb0}\u{1eef0}\u{1eef1}\u{1f3fb}-\u{1f3ff}\u{1f8d0}-\u{1f8d8}`,
  K = `[\\p{So}${y7s}\\p{Pd}\\p{Pc}\\p{Mn}\\p{Me}${iBt}\\u02c9\\u02cd\\u2017\\u2053\\u203e\\ufe49-\\ufe4c\\u0640\\u07fa\\u1173\\u1428\\u180a\\u2e0f\\u2f00\\u3127\\u3161\\u3192\\u31d0\\u4e00\\ua4ff\\ua7f7\\ua8fb\\uffda]`,
  regExp_12 = new RegExp(`(?<!${K})${K}+>`, "gu");
function XC(e) {
  return e.replace(/[\u00bb\u02c2-\u02c5\u02ef-\u02ff\u1405\u1406\u1409\u1433\u1434\u1450\u1451\u15d2\u2023\u203a\u204d\u20d0-\u20ef\u2044\u2190-\u21ff\u2215\u226b\u227b\u227d\u227f\u2283\u22b1\u22b3\u22d7\u22d9\u2571\u2572\u2303-\u2304\u232a\u2344\u2348\u23e9-\u23ef\u23f5\u25b6-\u25bb\u261b\u261e\u276d\u276f\u2771\u2794-\u27bf\u27e9\u27eb\u27f0-\u27ff\u2900-\u297f\u29a8-\u29af\u2992\u2994\u29c1\u29d0\u29f5\u29f8\u29fd\u2a20\u2a7a\u2aa2\u2aa7\u2aa9\u2aab\u2aad\u2ab0\u2ab2\u2ab4\u2ab6\u2ab8\u2aba\u2abc\u2af8\u2b00-\u2bff\u3009\u300b\ue000-\uf8ff\ufe65\ufe68\uff0f\uff1e\uff3c\uffe9-\uffec\u{1f449}\u{1f599}\u{1f59b}\u{1f59d}\u{1f782}\u{1f800}-\u{1f8ff}\u{1faf1}\u{1fbc1}-\u{1fbc3}\u{1fbb0}-\u{1fbb8}\u{f0000}-\u{ffffd}\u{100000}-\u{10fffd}]/gu, "?").replace(regExp_12, "?");
}
var uyt = /[:\uFE13\uFE55\uFF1A][/\uFF0F][/\uFF0F]/gu,
  pyt = ":\u2215\u2215",
  Ple = /[<>\uFE64\uFE65\uFF1C\uFF1E]+/gu,
  X = `(?![(){}])[\\p{Ps}\\p{Pe}${Pge}]`,
  regExp_13 = new RegExp(`(?<!\\s)\\s*${X}(?:\\s|${X})*`, "gu"),
  ie = /[:\u02D0\u02D1\u05C3\u2D42\u2D53\u2D57\uA4FD\uA789\u{10781}\u{10782}]|(?![\p{L}\p{N}\p{Zs}])[^\x00-\x7F]/gu,
  regExp_14 = new RegExp(`^(?:${ie.source})$`, "u");
function fyt(e) {
  return l4(e.replace(regExp_13, " ").replace(ie, " ").replace(/ {2,}/g, " "));
}
function l4(e) {
  return e.replace(/sources[^\p{L}\p{N}]+under/giu, "sources-under").replace(/stored[^\p{L}\p{N}]+connector[^\p{L}\p{N}]+grant/giu, "stored-connector-grant").replace(/published[^\p{L}\p{N}]+by[^\p{L}\p{N}]+this[^\p{L}\p{N}]+session/giu, "published-by-this-session").replace(/created[^\p{L}\p{N}]+by[^\p{L}\p{N}]+this[^\p{L}\p{N}]+session/giu, "created-by-this-session");
}
var $3n = " [artifact published by this session]",
  RNo = " [artifact created by this session]",
  Acn = " [ownership: yours, made from an Artifact type \u2014 the files the type put in it were written by the type's publisher]",
  ANo = " [capabilities: declared by the Anthropic-published type this Artifact was made from; this publish cannot change them]",
  xNo = " [destination is a file name Claude Code screens: git, hook, tool and agent settings]",
  PNo = "Automatic edit of an Artifact this session watches, requested by a writer's comment on it; the server re-checks the writer, the thread's edit grant, single-file, size and rate limits";
function JC(e) {
  return XC(sp(e) ?? "").replace(regExp_13, " ").replace(Ple, " ").replace(/ {2,}/g, " ").trim();
}
var Je = /<meta[^>]+name=["']description["'][^>]+content=(["'])((?:(?!\1).)*)\1/is,
  Ze = /<title[^>]*>([\s\S]*?)<\/title>/i,
  Qe = /<h1[^>]*>([\s\S]*?)<\/h1>/i,
  W = new Set(["", "index", "untitled", "document"]);
function ONo(e, n) {
  let o = w(e),
    r = _ => Xk(lyt(_ ?? "")) ?? "",
    i = r(o.match(Je)?.[2]);
  if (i.length >= 10) return i;
  let s = _ => r(o.match(_)?.[1]?.replace(/<[^>]+>/g, "")),
    u = s(Ze),
    c = s(Qe),
    l = u.toLowerCase();
  if (W.has(l) || l === n) u = "";
  let d = c.toLowerCase();
  if (d === u.toLowerCase() || W.has(d) || d === n) return u;
  return c;
}
function xcn(e) {
  let stopped = F(e, o => "rail" in o && o.rail === "live_stopped");
  return {
    watching: e.length - stopped,
    stopped: stopped
  };
}
export { OGs, x3n, IGs, MGs, DGs, LGs, NGs, xEe, XJe, acn, $D, FGs, PEe, IUt, IMe, Age, tyt, pFr, HGs, $Gs, P3n, UGs, BGs, YLo, UD, fFr, O3n, JJe, xge, $We, jGs, I3n, YC, WGs, zGs, lcn, MUt, Uo, GGs, VGs, qGs, KGs, MMe, Pge, QE, Lp, Hx, GO, JH, ZE, DMe, LMe, NMe, FMe, OEe, bh, bb, nyt, VO, QJe, HMe, dcn, ryt, IEe, mFr, XLo, M3n, DUt, JLo, ZJe, ccn, QLo, ucn, pcn, LUt, gFr, ZLo, oyt, syt, eNo, tNo, NUt, FUt, fcn, AJ, YGs, XGs, JGs, D3n, hFr, bW, cn, iyt, x_, mg, GM, Vte, Um, mcn, nNo, rNo, gcn, oNo, hcn, sNo, iNo, aNo, lNo, regExp_2 as dNo, yFr, _Fr, regExp_3 as cNo, Ale, bFr, SFr, uNo, MEe, $Me, ayt, ycn, _cn, wFr, bcn, dai, Scn, pNo, HUt, wcn, fNo, mNo, gNo, vFr, kFr, EFr, f7s, vcn, kcn, ArtifactInputError as Le, eQe, regExp_4 as ar, vB, $Ut, kB, hNo, UUt, a4, UWe, Yc, yNo, Yt, DEe, QH, VM, xJ, tQe, BWe, regExp_6 as _No, TFr, regExp_7 as bNo, il, CFr, Hn, xle, jWe, Ecn, Zv, RFr, SNo, nQe, Ci, AFr, rQe, wNo, L3n, y2, lyt, Tcn, vNo, N3n, dyt, Ccn, Xk, qM, ZH, SW, yA, WWe, oQe, QGs, F3n, H3n, cyt, xFr, KT, Oge, qte, PFr, LEe, YT, cai, kNo, uai, Ige, NEe, sQe, FEe, OFr, IFr, m7s, ENo, Rcn, g7s, Rl, TNo, EB, h7s, iQe, wW, sp, y7s, XC, uyt, pyt, Ple, regExp_13 as Sb, regExp_14 as CNo, fyt, l4, $3n, RNo, Acn, ANo, xNo, PNo, JC, ONo, xcn };