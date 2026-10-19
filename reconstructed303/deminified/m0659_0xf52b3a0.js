// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Cy } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { F, L, K, _v, cP, Q4, tQn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, xo, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { vr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Rr } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { XCs, JCs, nbo, QCs, E5e, jen } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { ep } from "B:/~BUN/root/chunk-tqyz3ejx.js";
import { xLt, zGn, ILt, wX, RG, Cj, la, u1e, FE } from "B:/~BUN/root/chunk-c44qc88s.js";
import { wt, VT, ao, Pr, On, E, FNr, FDo, Hht, PJe, Tle, HDo, Hzs, rp, e4, IJe, K6n, Zi, f2, hB, wJ } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { ZM, V_t } from "B:/~BUN/root/chunk-8z3a373v.js";
import { Sn } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { wA } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { dt, Kt, We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { Xl, vt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { wK } from "B:/~BUN/root/chunk-gjdk1btq.js";
import { dc, sg, fO, Ho, Ul } from "B:/~BUN/root/chunk-ses0c36n.js";
import { kf, aXt, tJt, m6, HR, JPt, Re, Bt, kHn, Do, ni } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Fme } from "B:/~BUN/root/chunk-8pqw0dhk.js";
import { _sr } from "B:/~BUN/root/chunk-nn3x1kws.js";
import { pJo } from "B:/~BUN/root/chunk-am51k53f.js";
import { xS, Jf, Dc } from "B:/~BUN/root/chunk-j82xms77.js";
import { IS } from "B:/~BUN/root/chunk-rzekebyp.js";
import { Si } from "B:/~BUN/root/chunk-bk5b2aym.js";
import { da } from "B:/~BUN/root/chunk-0zewma8k.js";
import { Qe } from "B:/~BUN/root/chunk-5k20pvvh.js";
async function _vn(e, r) {
  if (r.paths.length === 0) return;
  let n = [];
  for (let s of r.paths) try {
    let o = it(s);
    n.push(o);
    let u = await tJt(e.readFileState, o, {
      requireReadBeforeWrite: !0
    });
    if (u !== null) t(`[memdir] re-synced readFileState for ${s} after the background ${r.source} pass wrote it (${u === "changed" ? "content changed" : "mtime only, content identical"})`);
  } catch (error) {
    t(`[memdir] left ${_(s)} out of the background ${r.source} pass's change notice, could not resolve it: ${d(error)}`);
  }
  if (n.length === 0) return;
  e.enqueuePendingMemoryUpdate({
    ...r,
    paths: L(n)
  });
}
import { basename as ft, sep as ut } from "path";
var weakSet = new WeakSet();
function bvn(e) {
  return `the ${e.ruleBehavior} rule "${Sn(e.ruleValue)}"`;
}
function mrr(e, r, n) {
  if (weakSet.has(e)) return;
  weakSet.add(e);
  let s = `${bvn(r)} (from ${wA(r.source)})`,
    o = r.ruleBehavior === "deny" ? `${s} blocks those writes` : `${s} needs your approval for each write, and background saving can't ask`;
  return `Claude isn't saving memories to ${n} in the background: ${o}. Saving resumes once that rule is removed or no longer covers that folder, and may then include what was skipped.`;
}
class je {
  extractor = null;
  drainer = async () => {};
  disarm = () => {};
  owedWithin = () => !1;
  onPassEnded = null;
}
var ce = new z(() => new je());
function Be(e, r, n, s, o) {
  let u = Xl(),
    y = u ? We : xt,
    h = u ? "ls/find/cat/stat/wc/head/tail and similar" : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar",
    M = u ? "rm" : "Remove-Item",
    N = r.length > 0 ? `

## Existing memory files

${r}

Check this list before writing \u2014 update an existing file rather than creating a duplicate.` : "",
    Y = n ? "scope guidance, " : "",
    B = `Available tools: ${Qe}, ${Pr}, ${ao}, read-only ${y} (${h}), and ${dt}/${Kt} for paths inside the memory directory only, and ${y} ${M} of .md files inside the memory directory only (outside protected subdirectories like .git or agents${u ? "; rm takes no flags except -f" : ""}). All other tools \u2014 MCP, Agent, write-capable ${y}, etc \u2014 will be denied.`,
    x = `You have a limited turn budget. ${dt} requires a prior ${Qe} of the same file, so the efficient strategy is: turn 1 \u2014 issue all ${Qe} calls in parallel for every file you might update; turn 2 \u2014 issue all ${Kt}/${dt} calls in parallel. Do not interleave reads and writes across multiple turns.`;
  return [`You are now acting as the memory extraction subagent. Analyze the most recent ~${e} messages above and use them to update your persistent memory systems.`, "", B, "", x, "", `You MUST only use content from the last ~${e} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further \u2014 no grepping source files, no reading code to confirm a pattern exists, no git commands.` + N, "", "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.", "", "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.", "", `Apply the memory types, ${Y}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above.`, ...(xLt() ? ["", "Skip the project-skill upkeep step here: your writes are restricted to the memory directory, so record the correction as a feedback memory only."] : []), ...(s ? ["", `The ${xS} / ${Jf} / ${Dc} tools are unavailable here, so skip anything the scope guidance marks as shared with the project \u2014 the main conversation saves those; never file them in the personal directory instead. Save only what belongs in your personal memory directory.`] : []), ...[]].join(`
`);
}
var Ye = 2,
  bt = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}\p{Script=Tibetan}]/gu,
  Ot = new Set(["?", "\uFF1F", "\u061F"]),
  Ct = /^[\s\p{P}\p{S}\p{M}]$/u;
function de(e) {
  return F(e.split(/\s+/), Boolean);
}
function qe(e) {
  return e.match(bt)?.length ?? 0;
}
function Ge(e, r) {
  return de(e) >= r || qe(e) >= r * Ye;
}
function ge(e) {
  return Math.max(de(e), Math.floor(qe(e) / Ye));
}
function Ve(e) {
  if (e < 3) return "0-2";
  if (e < 10) return "3-9";
  if (e < 40) return "10-39";
  return "40+";
}
function ze(e) {
  let r = [...e];
  for (let n = r.length - 1; n >= 0; n--) {
    let s = r[n];
    if (Ot.has(s)) return !0;
    if (!Ct.test(s)) return !1;
  }
  return !1;
}
function we(e) {
  return e.type === "user" || e.type === "assistant";
}
function Je(e, r) {
  if (r === null || r === void 0) return F(e, we);
  let n = !1,
    s = 0;
  for (let o of e) {
    if (!n) {
      if (o.uuid === r) n = !0;
      continue;
    }
    if (we(o)) s++;
  }
  if (!n) return F(e, we);
  return s;
}
var Ze = 3;
function et(e, r) {
  let n = new Set(r.map(item => item.uuid));
  return e.filter(item => !n.has(item.uuid));
}
function tt(e) {
  return e.some(item => item.type === "attachment" && item.attachment.type === "max_turns_reached");
}
function nt(e) {
  return e.findLast(r => r.type === "assistant")?.isApiErrorMessage === !0;
}
function Te(e, r, n) {
  let s = r === void 0,
    o = new Set();
  for (let u of e) {
    if (!s) {
      if (u.uuid === r) s = !0;
      continue;
    }
    if (u.type === "user") {
      let content = u.message.content;
      if (Array.isArray(content) && content.some(item => item.type === "tool_result" && item.is_error !== !0 && o.has(item.tool_use_id))) return !0;
      continue;
    }
    if (u.type !== "assistant") continue;
    let content_2 = u.message.content;
    if (!Array.isArray(content_2)) continue;
    for (let h of content_2) {
      if (n && h.type === "tool_use" && Hht.has(h.name)) return !0;
      if (h.type === "tool_use" && h.name === Dc) {
        o.add(h.id);
        continue;
      }
      let M = be(h);
      if (M !== void 0 && hB(M)) return !0;
    }
  }
  return n && !s && Te(e, void 0, !0);
}
var Ke = 3;
function Xe(e) {
  if (e.type !== "user" || e.isMeta) return !1;
  let content_3 = e.message.content;
  if (typeof content_3 === "string") return de(content_3) >= Ke;
  if (!Array.isArray(content_3)) return !1;
  return content_3.some(item => item.type === "text" && de(item.text) >= Ke);
}
function rt(e, r) {
  for (let n = e.length - 1; n >= 0; n--) {
    let s = e[n];
    if (s === void 0 || !VT(s)) continue;
    if (s.type === "user") {
      if (!s.isMeta) return s.uuid;
    } else if (s.type === "attachment" && s.attachment.type === "queued_command" && !s.attachment.isMeta && s.attachment.source_uuid !== void 0) return s.attachment.source_uuid;
  }
  return r?.uuid;
}
function ot(e, r) {
  let n = r === void 0;
  for (let s of e) {
    if (!n) {
      if (s.uuid === r) n = !0;
      continue;
    }
    if (Xe(s)) return !0;
  }
  if (!n) return e.some(Xe);
  return !1;
}
function It(e, r) {
  if (r === void 0) return e;
  let n = e.findIndex(item => item.uuid === r);
  return n === -1 ? e : e.slice(n + 1);
}
function _e(e) {
  if (e.type === "attachment") {
    let {
      attachment: attachment
    } = e;
    return attachment.type === "queued_command" && !attachment.isMeta ? Ae(attachment.prompt) : void 0;
  }
  if (e.type !== "user" || e.isMeta || e.isCompactSummary) return;
  let content_4 = e.message.content;
  if (Array.isArray(content_4) && content_4.every(item => item.type === "tool_result")) return;
  return Ae(content_4);
}
function Ae(e) {
  return typeof e === "string" ? e : e.filter(item => item.type === "text").map(item => item.text).join(`
`);
}
function Lt(e) {
  if (e.type !== "assistant") return;
  let content_5 = e.message.content;
  return Array.isArray(content_5) ? Ae(content_5) : void 0;
}
function st(e, r, n) {
  let o = e.flatMap((item, index) => {
    let text = _e(item);
    return text === void 0 ? [] : [{
      index: index,
      text: text
    }];
  }).at(-1);
  if (o === void 0) return !1;
  return Ge(Se(e, n), r) || o.text.trim() !== "" && Wt(e, o.index);
}
function Se(e, r) {
  return e.flatMap(item => _e(item) ?? []).slice(-Math.max(r, 1)).join(`
`);
}
function Wt(e, r) {
  for (let n = r - 1; n >= 0; n--) {
    let s = e[n];
    if (_e(s) !== void 0) return !1;
    let o = Lt(s);
    if (o !== void 0 && o.trim() !== "") return ze(o);
  }
  return !1;
}
function at(e, r) {
  let n = It(e, r).flatMap(o => {
      let text_2 = _e(o);
      if (text_2 === void 0) return [];
      let origin = o.type === "attachment" && o.attachment.type === "queued_command" ? o.attachment.origin : o.type === "user" ? o.origin : void 0;
      return [{
        message: o,
        text: text_2,
        origin: origin
      }];
    }),
    s = n.filter(item => VT(item.message));
  return {
    userTurns: n.length,
    ownWordsTurns: s.length,
    ownWordsChars: s.reduce((acc, item) => acc + item.text.length, 0),
    taskNotificationTurns: F(n, o => o.origin?.kind === "task-notification"),
    unstampedTurns: F(n, o => o.origin === void 0),
    proseWords: ge(n.map(item => item.text).join(`
`))
  };
}
function be(e) {
  if (e.type !== "tool_use" || e.name !== dt && e.name !== Kt) return;
  let input = e.input;
  if (typeof input === "object" && input !== null && "file_path" in input) {
    let file_path = input.file_path;
    return typeof file_path === "string" ? file_path : void 0;
  }
  return;
}
var le = null,
  mt = null,
  J = null,
  grr = "rm|remove-item|ri|del|erase",
  regExp = new RegExp(`^(?:${grr})$`, "i");
function S(e, r, n) {
  return t(`[autoMem] denied ${e.name} (${n}): ${r}`), i("tengu_auto_mem_tool_denied", {
    tool_name: On(e.name),
    reason: c(n)
  }), {
    behavior: "deny",
    message: r,
    decisionReason: {
      type: "other",
      reason: r
    }
  };
}
function $t(e, r) {
  let n = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
  if (n.length < 2) return;
  if (!regExp.test(n[0])) return;
  let s = [];
  for (let o = 1; o < n.length; o++) {
    let u = n[o];
    if (/^-(?:Literal)?Path$/i.test(u)) continue;
    if (u.startsWith("-")) return;
    let y = u.startsWith('"') && u.endsWith('"') || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1) : u;
    if (/[*?[\]$`(){}|;&<>"',]/.test(y)) return;
    if (!ikt(y, r)) return;
    s.push(y);
  }
  return s.length > 0 ? s : void 0;
}
var Nt = new Set([Qe, Pr, ao, dt, Kt]);
async function Ut(e, r) {
  let n = await wK(e);
  if (n.kind !== "simple" || n.commands.length !== 1) return !1;
  let s = n.commands[0];
  if (s === void 0 || s.argvSourceLiteral !== !0 || s.argv[0] !== "ls" || s.redirects.length > 0 || s.envVars.length > 0) return !1;
  let o = h => h.replace(/[/\\]+$/, ""),
    u = new Set(xo(r).map(o)),
    y = s.argv.slice(1).filter(item => !/^-[laA1hF]+$/.test(item));
  return y.length > 0 && y.every(item => {
    if (item.startsWith("-") || item.startsWith("~") || item !== item.trim() || item.split(/[/\\]/).includes("..") || /[*?[]/.test(item) || item.includes("\\")) return !1;
    try {
      return xo(it(item)).every(item => u.has(o(item)));
    } catch {
      return !1;
    }
  });
}
function Dt(e) {
  return e.replace(/['"`\\\u2018-\u201F]/g, "").includes("..");
}
function ve(e, r) {
  if (e?.type === "subcommandResults") return [...e.reasons.values()].some(item => ve(item.decisionReason, r));
  return r === "rule" ? e?.type === "rule" && e.rule.ruleBehavior !== "allow" : e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked" || e?.type === "other" && e.reason === ZM;
}
function hrr(e, r) {
  try {
    for (let name of [Kt, dt]) {
      let s = Ho(e, {
        name: name
      }) ?? Ul(e, {
        name: name
      });
      if (s !== null) return s;
    }
    for (let n of xo(r)) for (let s of ["deny", "ask"]) {
      let o = la(n, e, "edit", s);
      if (o !== null) return o;
    }
  } catch (error) {
    l(H(error));
  }
  return;
}
async function Ht(e, r) {
  let n = await wK(e);
  if (n.kind !== "simple") return;
  if (n.commands.length !== 1) return;
  let s = n.commands[0];
  if (!s) return;
  if (s.argv[0] !== "rm") return;
  if (s.redirects.length > 0) return;
  if (s.envVars.length > 0) return;
  let o = [],
    u = !1;
  for (let y = 1; y < s.argv.length; y++) {
    let h = s.argv[y];
    if (h === void 0) continue;
    if (!u) {
      if (h === "--") {
        u = !0;
        continue;
      }
      if (h.startsWith("-")) {
        if (h === "-f" || h === "--force") continue;
        return;
      }
    }
    if (/[*?[]/.test(h)) return;
    if (!h.startsWith("/") || !ikt(h, r)) return;
    o.push(h);
  }
  return o.length > 0 ? o : void 0;
}
function ikt(e, r) {
  return e.endsWith(".md") && wJ(e, r);
}
function yrr(e, r, {
  fork = "dream",
  onWriteAllowed: onWriteAllowed
} = {}) {
  return async (o, updatedInput, y, h, toolUseId, N) => {
    if (e4()) return S(o, V_t, "memory_paused");
    if (o.mcpInfo) return S(o, "MCP tools are not available to the memory agent", "mcp_tool");
    if (N !== void 0 || y.hookAskFloor) return S(o, "a PreToolUse hook requires confirmation for this call, and the memory agent runs headless with no user to answer \u2014 the call is denied", "hook_ask");
    let Y;
    if (o.name === We || o.name === xt) {
      let x = pJo("the memory agent", updatedInput);
      if (x.deniedFlag !== void 0) return S(o, x.message, "shell_flag");
      if (Y = x.sanitizedInput, I() === "windows" && y.getAppState().toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 && typeof updatedInput.command === "string" && Dt(updatedInput.command)) return S(o, "On Windows with permissions.blockReadsOutsideWorkingDirectories on, the memory agent's shell commands may not contain '..' anywhere, even split by quotes or a backslash, because where it leads cannot be checked. Use absolute paths, and avoid '..' in patterns too.", "windows_dot_dot");
    }
    try {
      let x = import.meta.require("B:/~BUN/root/chunk-51npjj2b.js"),
        {
          checkRuleBasedPermissions: checkRuleBasedPermissions
        } = x,
        {
          carriesAskRuleIntent: carriesAskRuleIntent
        } = x,
        U = y.getAppState(),
        path = e.replace(/[/\\]+$/, ""),
        Z = U.toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 && U.toolPermissionContext.restricted !== !0 && !ILt() && ![path, ...xo(path)].some(item => K6n(item.replace(/[/\\]+$/, ""))),
        W = {
          ...y,
          toolUseId: toolUseId
        },
        ne = {
          ...W,
          getAppState: () => ({
            ...U,
            toolPermissionContext: {
              ...U.toolPermissionContext,
              additionalWorkingDirectories: new Map([...U.toolPermissionContext.additionalWorkingDirectories, [path, {
                path: path,
                source: "session"
              }]])
            }
          })
        },
        D = await checkRuleBasedPermissions(o, updatedInput, Z && Nt.has(o.name) ? ne : W, {
          crashIsObjection: !0
        }),
        ee = D?.behavior === "ask" && I() !== "windows" && Z && o.name === We && D.decisionReason?.type === "safetyCheck" && D.decisionReason.circuitBreaker === "outsideReadsBlocked" && !carriesAskRuleIntent(D) && typeof updatedInput.command === "string" && (await Ut(updatedInput.command, e)) && (await checkRuleBasedPermissions(o, updatedInput, ne, {
          crashIsObjection: !0
        })) === null;
      if (D !== null && !ee) return S(o, D.message ?? "a configured permission rule blocks this call for the memory agent", ve(D.decisionReason, "rule") || D.behavior === "ask" && carriesAskRuleIntent(D) ? "permission_rule" : ve(D.decisionReason, "read_block") ? "read_block" : "permission_check");
    } catch (error) {
      return l(H(error)), S(o, "the memory agent could not evaluate configured permission rules; failing closed", "rule_check_failed");
    }
    if (o.name === IS) return {
      behavior: "allow",
      updatedInput: updatedInput
    };
    if (o.name === Qe || o.name === Pr || o.name === ao) {
      let toolPermissionContext = y.getAppState().toolPermissionContext,
        b = u1e(o, updatedInput, toolPermissionContext);
      if (b) return S(o, b.message, "network_path");
      if (toolPermissionContext.blockReadsOutsideWorkingDirectories === !0) {
        let R = FE(o, updatedInput, toolPermissionContext);
        if (R.behavior === "deny") {
          let U = o.getPath?.(updatedInput),
            v = xo(e).map(item => item.endsWith(ut) ? item : item + ut);
          if (!(U !== void 0 && !ILt() && xo(U).every(item => v.some(ne => wJ(item, ne)))) || R.decisionReason.type !== "other" || R.decisionReason.reason !== ZM) return S(o, R.message, "read_block");
        }
      }
      return {
        behavior: "allow",
        updatedInput: updatedInput
      };
    }
    if (o.name === We || o.name === xt) {
      let updatedInput_2 = Y ?? updatedInput,
        b = o.inputSchema.safeParse(updatedInput);
      if (b.success) {
        if (o.isReadOnly(b.data, y)) return {
          behavior: "allow",
          updatedInput: updatedInput_2
        };
        let command = b.data.command;
        if (typeof command === "string") {
          if ((o.name === We ? await Ht(command, e) : $t(command, e)) !== void 0) return {
            behavior: "allow",
            updatedInput: updatedInput_2
          };
        }
      }
      let R = o.name === We;
      return S(o, `Only read-only shell commands and ${R ? "rm (no flags except -f)" : "Remove-Item"} of .md files under ${e} (not protected subdirectories like .git or agents) are permitted in this context (${R ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`, "shell_not_allowed");
    }
    if ((o.name === dt || o.name === Kt) && "file_path" in updatedInput) {
      let file_path_2 = updatedInput.file_path;
      if (typeof file_path_2 === "string" && ikt(file_path_2, e)) return onWriteAllowed?.(file_path_2, toolUseId), {
        behavior: "allow",
        updatedInput: updatedInput
      };
    }
    let B = Xl() ? We : xt;
    return S(o, `only ${Qe}, ${Pr}, ${ao}, read-only ${B}, and ${dt}/${Kt} within ${e} are allowed`, "tool_not_allowed");
  };
}
function jt(e, r) {
  return async (n, updatedInput_3, o) => {
    if (cP()) return S(n, V_t, "memory_paused");
    let toolPermissionContext_2 = o.getAppState().toolPermissionContext;
    if (aXt(toolPermissionContext_2)) return r(), S(n, "tool calls are held in this session until the user writes; this background memory pass cannot run", "tools_held");
    if (n.name === Si || n.name === IS) return {
      behavior: "allow",
      updatedInput: updatedInput_3
    };
    if (!Tle(HDo(o.options.mcpClients))) return S(n, "the session has no CCR memory server; this background memory pass cannot run", "no_memory_server");
    if ([...dc(toolPermissionContext_2), ...sg(toolPermissionContext_2)].some(item => fO(toolPermissionContext_2, n, item))) return S(n, `${n.name} is blocked by a permission rule for this session`, "permission_rule");
    if (!FDo.has(n.name)) return S(n, `this background memory pass may only call ${[...FDo].join(", ")}`, "tool_not_allowed");
    if (Hht.has(n.name) && Q4() !== e) return r(), S(n, "a newer user turn has started; this background memory pass may no longer write", "newer_turn");
    return {
      behavior: "allow",
      updatedInput: updatedInput_3
    };
  };
}
function ht(e) {
  let r = new Set();
  for (let n of e) {
    if (n.type !== "user") continue;
    let content_6 = n.message.content;
    if (!Array.isArray(content_6)) continue;
    for (let o of content_6) if (o.type === "tool_result" && o.is_error === !0) r.add(o.tool_use_id);
  }
  return r;
}
function gt(e, r) {
  let n = be(e);
  if (n === void 0) return;
  let s;
  try {
    s = it(n);
  } catch {
    return;
  }
  return ikt(s, r) ? s : void 0;
}
function Yt(e, r) {
  let n = ht(e),
    s = [];
  for (let o of e) {
    if (o.type !== "assistant") continue;
    let content_7 = o.message.content;
    if (!Array.isArray(content_7)) continue;
    for (let y of content_7) {
      if (y.type === "tool_use" && n.has(y.id)) continue;
      let h = gt(y, r);
      if (h !== void 0) s.push(h);
    }
  }
  return L(s);
}
function ct(paths) {
  let r = F(paths, n => ft(n) !== ep);
  return {
    source: "extract",
    summary: r > 0 ? `saved ${r} ${O(r, "memory", "memories")}` : "updated the memory index",
    paths: paths
  };
}
function qt(e, r) {
  let n = new Map(),
    s = [];
  return {
    onMessage: u => {
      if (u.type === "assistant") {
        let content_8 = u.message.content;
        if (!Array.isArray(content_8)) return;
        for (let M of content_8) {
          let N = gt(M, r);
          if (M.type === "tool_use" && N !== void 0) n.set(M.id, N);
        }
        return;
      }
      if (u.type !== "user") return;
      let content_9 = u.message.content;
      if (!Array.isArray(content_9)) return;
      for (let h of content_9) {
        if (h.type !== "tool_result") continue;
        let M = n.get(h.tool_use_id);
        if (M === void 0) continue;
        if (n.delete(h.tool_use_id), h.is_error === !0) continue;
        s.push(M), tJt(e, M, {
          requireReadBeforeWrite: !0
        });
      }
    },
    completedWritePaths: () => L(s)
  };
}
function X4r(e) {
  if (a.CLAUDE_CODE_POST_TURN_MEMORY && PJe() === null) t("[extractMemories] CLAUDE_CODE_POST_TURN_MEMORY is set but CLAUDE_CODE_POST_TURN_MEMORY_CONFIG is missing or invalid; the pass is off"), p("ccr_memory_extract", "config_invalid");
  let r = new Set(),
    n,
    s,
    o = 0;
  function u(f) {
    if (f) n = f, s = void 0, o = 0;
  }
  function y(f, P) {
    if (!f) {
      if (o++, o >= Ze) {
        t(`[extractMemories] (mcp) stopped early ${o} passes in a row; the cursor moves on and these turns are not reviewed again`), u(P);
        return;
      }
    }
    s = K(), t(`[extractMemories] (mcp) ${f ? "writes refused after a newer prompt" : "the pass stopped early (an API error, the turn cap with nothing saved, or a throw)"}; the cursor stays and the next pass reviews these turns again`);
  }
  let h = !1,
    M = !1,
    N = 0,
    Y,
    B;
  function x(f) {
    return r.add(f), f.finally(() => r.delete(f));
  }
  let b = le?.createLaptopExtractRunner(e, x);
  function R() {
    let f = B;
    if (B = void 0, f?.timer !== void 0) clearTimeout(f.timer);
    return f;
  }
  function U(f, context, promptIndex = Q4(), personPrompt = tQn(), oe = !0) {
    if (R(), f.idleFlushSeconds === 0) return;
    B = {
      timer: oe ? setTimeout(v, f.idleFlushSeconds * 1000).unref() : void 0,
      dueAt: oe ? performance.now() + f.idleFlushSeconds * 1000 : 1 / 0,
      promptIndex: promptIndex,
      personPrompt: personPrompt,
      context: context
    };
  }
  function v() {
    let f = R();
    if (!f || M || Fme() || Q4() !== f.promptIndex) return;
    x(W({
      context: f.context,
      trigger: "idle_flush",
      promptIndex: f.promptIndex,
      personPrompt: f.personPrompt
    }));
  }
  function Z(f) {
    try {
      ce.of(e).onPassEnded?.(f);
    } catch (error) {
      l(H(error));
    }
  }
  async function W({
    context: context_2,
    appendSystemMessage: appendSystemMessage,
    trigger: trigger,
    promptIndex: promptIndex_2 = Q4(),
    personPrompt: personPrompt_2 = tQn()
  }) {
    let {
        messages: messages
      } = context_2,
      k = PJe(),
      message_count = Je(messages, n);
    if (s !== void 0 && s !== K()) s = void 0, o = 0;
    if (s === void 0 && Te(messages, n, !!k)) {
      t("[extractMemories] skipping \u2014 conversation already wrote to memory in this range"), u(messages.at(-1)?.uuid), i("tengu_extract_memories_skipped_direct_write", {
        message_count: message_count
      });
      return;
    }
    let X = k ? at(messages, n) : void 0,
      ye = k?.proseGate === "chat",
      Oe = ye ? Math.max(k.reviewWindow, X?.userTurns ?? 0) : 0,
      _t = ye ? st(messages, k.minProseWords, Oe) : ot(messages, n),
      Ce = k && X ? Ve(ye ? ge(Se(messages, Oe)) : X.proseWords) : void 0;
    if (!_t) {
      t("[extractMemories] skipping \u2014 not enough user prose"), u(messages.at(-1)?.uuid), i("tengu_extract_memories_skipped_no_prose", {
        message_count: message_count,
        prose_gate: pe(k?.proseGate),
        prose_words_bucket: pe(Ce)
      });
      return;
    }
    let every_n_turns = k?.everyNTurns ?? E("tengu_bramble_lintel", null) ?? 1,
      cacheSafeParams = m6(context_2);
    if (trigger === void 0) {
      if (N++, N < every_n_turns) {
        if (k) U(k, context_2, promptIndex_2, personPrompt_2, N >= k.idleFlushMinTurns);
        return;
      }
    }
    let turns_since_last_pass = N;
    N = 0;
    let {
        toolPermissionContext: toolPermissionContext_3
      } = context_2.toolUseContext.getAppState(),
      Ee = k ? void 0 : hrr(toolPermissionContext_3, f2());
    if (Ee !== void 0) {
      if (t(`[extractMemories] skipping \u2014 ${bvn(Ee)} would refuse memory writes`), i("tengu_extract_memories_skipped_permission_rule", {
        message_count: message_count
      }), appendSystemMessage !== void 0) {
        let w = mrr(e, Ee, Zi());
        if (w !== void 0) appendSystemMessage(Bt(w, "warning"));
      }
      return;
    }
    M = !0;
    let se = Date.now(),
      xe;
    try {
      if (k) {
        if (Q4() !== promptIndex_2) {
          t("[extractMemories] skipping (mcp) \u2014 a newer turn started");
          return;
        }
        if (aXt(toolPermissionContext_3)) {
          t("[extractMemories] skipping (mcp) \u2014 tool calls are held until a person writes");
          return;
        }
        t(`[extractMemories] starting (mcp, ${trigger ?? "cadence"}) \u2014 ${message_count} new messages`);
        let j = k.staleNote ? XCs(e) : void 0,
          Ue = j ? nbo(j, ni(messages), QCs) : "",
          superseded_writes = 0,
          ue = await HR({
            promptMessages: [Re({
              content: k.instruction + Ue
            })],
            cacheSafeParams: cacheSafeParams,
            canUseTool: jt(promptIndex_2, () => {
              superseded_writes++;
            }),
            querySource: "extract_memories",
            forkLabel: "extract_memories",
            overrides: {
              mcpRequestMeta: Hzs({
                citesEvent: rt(messages, personPrompt_2)
              })
            },
            skipTranscript: !0,
            maxTurns: k.maxTurns,
            skipCacheWrite: !0
          }),
          te = et(ue.messages, messages);
        if (j) JCs(e, j, te);
        let St = ht(te),
          written = F(te.flatMap(item => item.type === "assistant" && Array.isArray(item.message.content) ? item.message.content : []), G => G.type === "tool_use" && Hht.has(G.name) && !St.has(G.id)),
          reached_cap = tt(te),
          review_unfinished = nt(te) || written === 0 && reached_cap,
          unfinished_in_a_row = review_unfinished && written === 0 ? o + 1 : 0;
        if (written > 0 || superseded_writes === 0 && !review_unfinished) u(messages.at(-1)?.uuid);else y(!review_unfinished, messages.at(-1)?.uuid);
        i("tengu_extract_memories_extraction", {
          mode: c("mcp"),
          trigger: c(trigger ?? "cadence"),
          account_memory_line_rendered: !1,
          every_n_turns: every_n_turns,
          input_tokens: ue.totalUsage.input_tokens,
          output_tokens: ue.totalUsage.output_tokens,
          cache_read_input_tokens: ue.totalUsage.cache_read_input_tokens,
          cache_creation_input_tokens: ue.totalUsage.cache_creation_input_tokens,
          message_count: message_count,
          parent_context_tokens: kf(messages),
          compacted_in_fork: te.some(Do),
          turn_count: F(te, G => G.type === "assistant"),
          written: written,
          superseded_writes: superseded_writes,
          stale_note_rendered: Ue !== "",
          review_unfinished: review_unfinished,
          unfinished_in_a_row: unfinished_in_a_row,
          reached_cap: reached_cap,
          duration_ms: Date.now() - se,
          fork_model: wt(context_2.toolUseContext.options.mainLoopModel),
          turns_since_last_pass: turns_since_last_pass,
          prose_gate: c(k.proseGate),
          prose_words_bucket: pe(Ce),
          user_turns: X?.userTurns,
          own_words_turns: X?.ownWordsTurns,
          own_words_chars: X?.ownWordsChars,
          task_notification_turns: X?.taskNotificationTurns,
          unstamped_turns: X?.unstampedTurns,
          idle_flush_min_turns: k.idleFlushMinTurns
        }), g("ccr_memory_extract"), Z({
          outcome: written > 0 ? "saved" : review_unfinished ? "unfinished" : superseded_writes > 0 ? "writes_refused" : "nothing_to_save",
          trigger: trigger ?? "cadence",
          written: written,
          durationMs: Date.now() - se
        });
        return;
      }
      let w = Zi();
      t(`[extractMemories] starting \u2014 ${message_count} new messages, memoryDir=${w}`);
      let ie = zGn(),
        ke = RG() || ie,
        canUseTool = yrr(w, void 0, {
          fork: "extraction"
        }),
        Et = jen(await E5e(w, mr().signal, context_2.toolUseContext.storageV5)),
        account_memory_line_rendered = !1,
        Pe = J?.isPromoterExtractorOn() === !0 ? J.typedTurnsInWindow(e, context_2.toolUseContext.session.id, messages, n) : [],
        content_10 = Be(message_count, Et, ke, ie, account_memory_line_rendered) + (J?.typedTurnsPromptBlock(Pe) ?? ""),
        agentId = J !== null && Pe.length > 0 ? Cy("extract_memories") : void 0,
        Pt = agentId === void 0 ? void 0 : J?.registerExtractorFork(e, agentId, Pe);
      xe = qt(context_2.toolUseContext.readFileState, w);
      let C = await HR({
        promptMessages: [Re({
          content: content_10
        })],
        cacheSafeParams: cacheSafeParams,
        canUseTool: canUseTool,
        querySource: "extract_memories",
        forkLabel: "extract_memories",
        ...(agentId !== void 0 && {
          overrides: {
            agentId: agentId
          }
        }),
        skipTranscript: !0,
        maxTurns: 5,
        skipCacheWrite: JPt(),
        onMessage: xe.onMessage
      }).finally(() => Pt?.());
      u(messages.at(-1)?.uuid);
      let Q = Yt(C.messages, w),
        turn_count = F(C.messages, j => j.type === "assistant"),
        $e = C.totalUsage.input_tokens + C.totalUsage.cache_creation_input_tokens + C.totalUsage.cache_read_input_tokens,
        Tt = $e > 0 ? (C.totalUsage.cache_read_input_tokens / $e * 100).toFixed(1) : "0.0";
      if (t(`[extractMemories] finished \u2014 ${Q.length} files written, cache: read=${C.totalUsage.cache_read_input_tokens} create=${C.totalUsage.cache_creation_input_tokens} input=${C.totalUsage.input_tokens} (${Tt}% hit)`), Q.length > 0) t(`[extractMemories] memories saved: ${Q.join(", ")}`);else t("[extractMemories] no memories saved this run");
      let ae = Q.filter(item => ft(item) !== ep),
        team_memories_saved = F(ae, Cj);
      if (i("tengu_extract_memories_extraction", {
        mode: c("file"),
        input_tokens: C.totalUsage.input_tokens,
        output_tokens: C.totalUsage.output_tokens,
        cache_read_input_tokens: C.totalUsage.cache_read_input_tokens,
        cache_creation_input_tokens: C.totalUsage.cache_creation_input_tokens,
        message_count: message_count,
        parent_context_tokens: kf(messages),
        compacted_in_fork: C.messages.some(Do),
        turn_count: turn_count,
        files_written: Q.length,
        memories_saved: ae.length,
        team_memories_saved: team_memories_saved,
        account_memory_line_rendered: account_memory_line_rendered,
        duration_ms: Date.now() - se
      }), t(`[extractMemories] writtenPaths=${Q.length} memoryPaths=${ae.length} appendSystemMessage defined=${appendSystemMessage != null}`), ae.length > 0) {
        let j = kHn(ae);
        j.teamCount = team_memories_saved, appendSystemMessage?.(j);
      }
      if (Q.length > 0) await _vn(context_2.toolUseContext, ct(Q));
      g("memory_extract");
    } catch (error) {
      if (t(`[extractMemories] error: ${error}`), i("tengu_extract_memories_error", {
        duration_ms: Date.now() - se,
        mode: c(k ? "mcp" : "file")
      }), m(k ? "ccr_memory_extract" : "memory_extract", "agent_error"), k) Z({
        outcome: "failed",
        trigger: trigger ?? "cadence",
        written: 0,
        durationMs: Date.now() - se
      }), y(!1, messages.at(-1)?.uuid);
      let ie = xe?.completedWritePaths() ?? [];
      if (ie.length > 0) try {
        await _vn(context_2.toolUseContext, ct(ie));
      } catch (error) {
        t(`[extractMemories] could not queue the notice for writes that landed before the error: ${d(error)}`);
      }
    } finally {
      M = !1;
      let w = Y;
      if (Y = void 0, w && every_n_turns <= 1) t("[extractMemories] running trailing extraction for stashed context"), await W({
        context: w.context,
        appendSystemMessage: w.appendSystemMessage,
        trigger: "trailing",
        promptIndex: w.promptIndex,
        personPrompt: w.personPrompt
      });else if (w && k) U(k, w.context, w.promptIndex, w.personPrompt);
    }
  }
  async function ne(f, P) {
    if (f.toolUseContext.agentId) return;
    let A = b?.onTurnEnd(f, P);
    try {
      if (IJe() || lt()) await D(f, P);
    } finally {
      await A;
    }
  }
  async function D(context_3, appendSystemMessage_2) {
    R();
    let A = PJe() !== null;
    if (A && (cP() || vr() || _v())) return;
    if (A && !(Tle(HDo(context_3.toolUseContext.options.mcpClients)) && context_3.toolUseContext.options.tools.some(item => vt(item, FNr)))) {
      t("[extractMemories] skipping (mcp) \u2014 CCR memory server not mounted");
      return;
    }
    if (A && da() && _sr(context_3.toolUseContext.options.tools.filter(item => vt(item, FNr))).length === 0) {
      t("[extractMemories] skipping (mcp) \u2014 coordinator mode: the write tool is held on the memory server's word alone");
      return;
    }
    if (!A && !E("tengu_passport_quail", !1) && !lt()) return;
    if (!A && !rp()) {
      if (e4()) n = context_3.messages.at(-1)?.uuid ?? n;
      return;
    }
    if (!A && wX()) return;
    if (Rr() !== null) return;
    if (M) {
      t("[extractMemories] extraction in progress \u2014 stashing for trailing run"), i("tengu_extract_memories_coalesced", {}), Y = {
        context: context_3,
        appendSystemMessage: appendSystemMessage_2,
        promptIndex: Q4(),
        personPrompt: tQn()
      };
      return;
    }
    await W({
      context: context_3,
      appendSystemMessage: appendSystemMessage_2
    });
  }
  let ee = ce.of(e);
  ee.extractor = (f, P) => x(ne(f, P)), ee.drainer = async (f = 60000) => {
    let P = Date.now() + f;
    v(), b?.disarmIdleFlush();
    while (r.size > 0 && Date.now() < P) await Promise.race([Promise.all(r).catch(() => {}), new Promise(A => setTimeout(A, P - Date.now()).unref())]), v();
  }, ee.disarm = () => {
    ee.extractor = null, Y = void 0, R(), b?.disarmIdleFlush();
  }, ee.owedWithin = f => r.size > 0 || B?.timer !== void 0 && B.promptIndex === Q4() && B.dueAt - performance.now() <= f;
}
function lt() {
  return J !== null && J.EXTRACTOR_RUNS_FOR_PROMOTER && J.isPromoterExtractorOn();
}
function dti(e) {
  return le !== null && le.isLaptopExtractDispatched(e);
}
function cti(e) {
  return le !== null && le.isLaptopExtractSync(e);
}
async function uti(e, r) {
  await ce.of(e.toolUseContext.session.host).extractor?.(e, r);
}
async function pti(e, r) {
  await ce.of(e).drainer(r);
}
export { _vn, bvn, mrr, grr, hrr, ikt, yrr, X4r, dti, cti, uti, pti };