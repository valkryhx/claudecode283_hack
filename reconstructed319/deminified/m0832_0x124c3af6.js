// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _S } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Mi, z, IT, S0, V5, b4e } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { FC, Ke, We, F, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, _, ps } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Zr } from "B:/~BUN/root/chunk-eev762xg.js";
import { P, Pa } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { rr } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { nZt } from "B:/~BUN/root/chunk-5m83sh3a.js";
import { d2e, FL, S3 } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { lm } from "B:/~BUN/root/chunk-nwv7r07s.js";
import { Zen, OEr, ttn, Aue, pse, Bq, Aa, v7e, WI } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Lt, za, Kk, xfe, GL, F3, eJ, zS, Qr, _r, On, v, mEo, XIs, z$t, q8i, fet, aSe, QIs, Y8i, fh, ite, V$t, yEo, vl, uJ, R4, bie } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { mj, et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { vH, S1t } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { gT } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { vMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Pkr } from "B:/~BUN/root/chunk-yhafkw66.js";
import { Xn, Ju } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { J6t, T7r, $f, o8e, QQ, sA, A8t, E$, Ie, Bt, Kpr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { co } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { zI } from "B:/~BUN/root/chunk-4xvtrfzh.js";
import { Wl, Vc, X_, lo, dl } from "B:/~BUN/root/chunk-detjgwj4.js";
import { bxi, Sxi, wxi, Dds, kxi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { mi } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { Kr, Es } from "B:/~BUN/root/chunk-jmt91fq8.js";
import { Bce } from "B:/~BUN/root/chunk-875j4y83.js";
import { Fse } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { NVr } from "B:/~BUN/root/chunk-7fz5xawt.js";
import { P7s } from "B:/~BUN/root/chunk-25095ayp.js";
import { OS, $g } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { Ll } from "B:/~BUN/root/chunk-zy4xrndc.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { ez } from "B:/~BUN/root/chunk-m4674qtc.js";
import { Pv, yg, jf } from "B:/~BUN/root/chunk-m1zmpfya.js";
import { as } from "B:/~BUN/root/chunk-w4y83tgx.js";
import { Da } from "B:/~BUN/root/chunk-tc6a3318.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
async function K8n(e, r) {
  if (r.paths.length === 0) return;
  let n = [];
  for (let o of r.paths) try {
    let s = mt(o);
    n.push(s);
    let u = await nZt(e.readFileState, s, {
      requireReadBeforeWrite: !0
    });
    if (u !== null) t(`[memdir] re-synced readFileState for ${o} after the background ${r.source} pass wrote it (${u === "changed" ? "content changed" : "mtime only, content identical"})`);
  } catch (error) {
    t(`[memdir] left ${_(o)} out of the background ${r.source} pass's change notice, could not resolve it: ${d(error)}`);
  }
  if (n.length === 0) return;
  e.enqueuePendingMemoryUpdate({
    ...r,
    paths: L(n)
  });
}
import { basename as nr, normalize as Cr, sep as zt } from "path";
var weakSet = new WeakSet();
function q8n(e) {
  return `the ${e.ruleBehavior} rule "${mn(e.ruleValue)}"`;
}
function MGr(e, r, n) {
  if (weakSet.has(e)) return;
  weakSet.add(e);
  let o = `${q8n(r)} (from ${gT(r.source)})`,
    s = r.ruleBehavior === "deny" ? `${o} blocks those writes` : `${o} needs your approval for each write, and background saving can't ask`;
  return `Claude isn't saving memories to ${n} in the background: ${s}. Saving resumes once that rule is removed or no longer covers that folder, and may then include what was skipped.`;
}
function wt(e, abortController) {
  let n = OS("post_turn_memory"),
    o = {
      ...$g(n, "post_turn_memory", "saving memories"),
      type: "post_turn_memory",
      status: "running",
      skipTranscript: !0,
      abortController: abortController
    };
  return e.register(o), n;
}
function Ye(e, r, status) {
  let o = !1;
  if (r.update(e, s => {
    if (s.status !== "running") return s;
    return o = !0, {
      ...s,
      status: status,
      endTime: Date.now(),
      notified: !0,
      abortController: void 0
    };
  }), o) za(e, status === "killed" ? "stopped" : status, {
    skipTranscript: !0,
    ambient: !0
  });
}
class Pt {
  extractor = null;
  drainer = async () => {};
  disarm = () => {};
  owedWithin = () => !1;
  onPassEnded = null;
  onPassSkipped = null;
  savePlace = null;
  placeNow = null;
  restoredPlace = null;
  restoredPlaceAt = null;
}
var J = new W(() => new Pt());
var Et = 2,
  kr = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}\p{Script=Tibetan}]/gu,
  xr = new Set(["?", "\uFF1F", "\u061F"]),
  wr = /^[\s\p{P}\p{S}\p{M}]$/u;
function Pe(e) {
  return U(e.split(/\s+/), Boolean);
}
function Tt(e) {
  return e.match(kr)?.length ?? 0;
}
function bt(e, r) {
  return Pe(e) >= r || Tt(e) >= r * Et;
}
function Oe(e) {
  return Math.max(Pe(e), Math.floor(Tt(e) / Et));
}
function At(e) {
  if (e < 3) return "0-2";
  if (e < 10) return "3-9";
  if (e < 40) return "10-39";
  return "40+";
}
function St(e) {
  let r = [...e];
  for (let n = r.length - 1; n >= 0; n--) {
    let o = r[n];
    if (xr.has(o)) return !0;
    if (!wr.test(o)) return !1;
  }
  return !1;
}
function Ge(e) {
  return e.type === "user" || e.type === "assistant";
}
function Ct(e, r) {
  if (r === null || r === void 0) return U(e, Ge);
  let n = !1,
    o = 0;
  for (let s of e) {
    if (!n) {
      if (s.uuid === r) n = !0;
      continue;
    }
    if (Ge(s)) o++;
  }
  if (!n) return U(e, Ge);
  return o;
}
var Ot = 3;
function It(e, r) {
  let n = new Set(r.map(item => item.uuid));
  return e.filter(item => !n.has(item.uuid));
}
function Ft(e) {
  return e.some(item => item.type === "attachment" && item.attachment.type === "max_turns_reached");
}
function Wt(e) {
  return e.findLast(r => r.type === "assistant")?.isApiErrorMessage === !0;
}
function Nt(e, r, n, o = !1) {
  let s = r === void 0 ? -1 : e.findIndex(item => item.uuid === r);
  if (s !== -1) return Ve(e.slice(s + 1), n);
  if (n) return Ve(o ? e.slice(Pr(e)) : e, !0);
  return r === void 0 && Ve(e, !1);
}
function Pr(e) {
  return Math.max(e.findLastIndex(r => r.type === "user" && r.interruptedByShutdown !== !0 && !Bce(r.message.content) && !(r.promptSource === void 0 && vMr(r)) && ce(r) !== void 0), 0);
}
function Ve(e, r) {
  let n = new Set();
  for (let o of e) {
    if (o.type === "user") {
      let content = o.message.content;
      if (Array.isArray(content) && content.some(item => item.type === "tool_result" && item.is_error !== !0 && n.has(item.tool_use_id))) return !0;
      continue;
    }
    if (o.type !== "assistant") continue;
    let content_2 = o.message.content;
    if (!Array.isArray(content_2)) continue;
    for (let u of content_2) {
      if (r && u.type === "tool_use" && z$t.has(u.name)) return !0;
      if (u.type === "tool_use" && u.name === jf) {
        n.add(u.id);
        continue;
      }
      let y = Ze(u);
      if (y !== void 0 && R4(y)) return !0;
    }
  }
  return !1;
}
var vt = 3;
function Rt(e) {
  if (e.type !== "user" || e.isMeta) return !1;
  let content_3 = e.message.content;
  if (typeof content_3 === "string") return Pe(content_3) >= vt;
  if (!Array.isArray(content_3)) return !1;
  return content_3.some(item => item.type === "text" && Pe(item.text) >= vt);
}
function Ut(e, r) {
  for (let n = e.length - 1; n >= 0; n--) {
    let o = e[n];
    if (o === void 0 || !zS(o)) continue;
    if (o.type === "user") {
      if (!o.isMeta) return o.uuid;
    } else if (o.type === "attachment" && o.attachment.type === "queued_command" && !o.attachment.isMeta && o.attachment.source_uuid !== void 0) return o.attachment.source_uuid;
  }
  return r?.uuid;
}
function $t(e, r) {
  let n = r === void 0;
  for (let o of e) {
    if (!n) {
      if (o.uuid === r) n = !0;
      continue;
    }
    if (Rt(o)) return !0;
  }
  if (!n) return e.some(Rt);
  return !1;
}
function Er(e, r) {
  if (r === void 0) return e;
  let n = e.findIndex(item => item.uuid === r);
  return n === -1 ? e : e.slice(n + 1);
}
function ce(e) {
  if (e.type === "attachment") {
    let {
      attachment: attachment
    } = e;
    return attachment.type === "queued_command" && !attachment.isMeta ? Je(attachment.prompt) : void 0;
  }
  if (e.type !== "user" || e.isMeta || e.isCompactSummary) return;
  let content_4 = e.message.content;
  if (Array.isArray(content_4) && content_4.every(item => item.type === "tool_result")) return;
  return Je(content_4);
}
function Je(e) {
  return typeof e === "string" ? e : e.filter(item => item.type === "text").map(item => item.text).join(`
`);
}
function Qe(e) {
  if (e.type !== "assistant") return;
  let content_5 = e.message.content;
  return Array.isArray(content_5) ? Je(content_5) : void 0;
}
function Dt(e, r, n) {
  let s = e.flatMap((item, index) => {
    let text = ce(item);
    return text === void 0 ? [] : [{
      index: index,
      text: text
    }];
  }).at(-1);
  if (s === void 0) return !1;
  return bt(Xe(e, n), r) || s.text.trim() !== "" && Tr(e, s.index);
}
function Xe(e, r) {
  return e.flatMap(item => ce(item) ?? []).slice(-Math.max(r, 1)).join(`
`);
}
function Tr(e, r) {
  for (let n = r - 1; n >= 0; n--) {
    let o = e[n];
    if (ce(o) !== void 0) return !1;
    let s = Qe(o);
    if (s !== void 0 && s.trim() !== "") return St(s);
  }
  return !1;
}
function Ht(e, r) {
  let n = Er(e, r).flatMap(s => {
      let text_2 = ce(s);
      if (text_2 === void 0) return [];
      let origin = s.type === "attachment" && s.attachment.type === "queued_command" ? s.attachment.origin : s.type === "user" ? s.origin : void 0;
      return [{
        message: s,
        text: text_2,
        origin: origin
      }];
    }),
    o = n.filter(item => zS(item.message));
  return {
    userTurns: n.length,
    ownWordsTurns: o.length,
    ownWordsChars: o.reduce((acc, item) => acc + item.text.length, 0),
    taskNotificationTurns: U(n, s => s.origin?.kind === "task-notification"),
    unstampedTurns: U(n, s => s.origin === void 0),
    proseWords: Oe(n.map(item => item.text).join(`
`))
  };
}
function Ze(e) {
  if (e.type !== "tool_use" || e.name !== dt && e.name !== Yt) return;
  let input = e.input;
  if (typeof input === "object" && input !== null && "file_path" in input) {
    let file_path = input.file_path;
    return typeof file_path === "string" ? file_path : void 0;
  }
  return;
}
var br = 64,
  jt = 20000,
  Ar = 'Answer with JSON only: {"write_likely": true} or {"write_likely": false}.',
  qt = `

`,
  Gt = "\u2026",
  Sr = [{
    fresh: !0,
    user: !0
  }, {
    fresh: !0,
    user: !1
  }, {
    fresh: !1,
    user: !0
  }, {
    fresh: !1,
    user: !1
  }];
function vr(e, r, n, o) {
  let s = r === void 0 ? -1 : e.findIndex(item => item.uuid === r),
    u = [],
    userTurns = 0;
  for (let w = e.length - 1; w >= 0; w--) {
    let C = e[w],
      M = C.type === "assistant" ? C.isApiErrorMessage || C.message.model === Mi ? void 0 : Qe(C) : Rr(C) ? void 0 : ce(C);
    if (M === void 0 || M.trim() === "") continue;
    let user = C.type !== "assistant";
    if (u.push({
      user: user,
      fresh: w > s,
      body: M.trim()
    }), user && ++userTurns >= n) break;
  }
  if (!u[0]?.fresh) return {
    text: "",
    userTurns: 0
  };
  let h = new Map(),
    b = o;
  for (let {
    fresh: fresh,
    user: user_2
  } of Sr) for (let [M, T] of u.entries()) {
    if (T.fresh !== fresh || T.user !== user_2) continue;
    let B = user_2 ? "User: " : "Assistant: ",
      D = (h.size > 0 ? qt.length : 0) + B.length;
    if (D + T.body.length <= b) {
      h.set(M, B + T.body), b -= D + T.body.length;
      continue;
    }
    let O = b - D - Gt.length;
    if (O > 0) h.set(M, B + Gt + Pa(T.body, O));
    b = 0;
    break;
  }
  return {
    text: u.map((item, index) => h.get(index)).filter(item => item !== void 0).reverse().join(qt),
    userTurns: userTurns
  };
}
async function Vt({
  config: config,
  messages: messages,
  sinceUuid: sinceUuid,
  window: window,
  signal: signal,
  credentials: credentials
}) {
  let y = Date.now(),
    model = config.model ?? "",
    b = "",
    userTurns_2 = 0,
    w = (verdict, error_2) => {
      if (error_2 !== void 0) c("ccr_memory_first_look", error_2);else if (verdict !== "empty") g("ccr_memory_first_look");
      return {
        verdict: verdict,
        error: error_2,
        model: model,
        durationMs: Date.now() - y,
        inputChars: b.length,
        userTurns: userTurns_2
      };
    },
    C = os(signal, {
      timeoutMs: jt,
      refTimer: !0
    });
  try {
    let M = config.model ?? i.ANTHROPIC_SMALL_FAST_MODEL ?? GL();
    model = config.model ?? Kk();
    let T = vr(messages, sinceUuid, window, config.maxInputChars);
    if (b = T.text, userTurns_2 = T.userTurns, b === "") return w("empty");
    if (!F3(model)) return t(`[extractMemories] first look: ${model} is not permitted by the organization's model policy; the pass is not skipped`), w("error", "policy");
    if (xfe(M) !== M || xfe(model) !== model) return t(`[extractMemories] first look: managed settings deny the first look's model (${M}, sent as ${model}); the pass is not skipped`), w("error", "managed_denied");
    let [thinking, D] = eJ(model),
      O = FL(messages, void 0, !1),
      Z = O.length > 0 ? S3(O) : "",
      Y = d2e(messages).map(item => `${item}
`).join(""),
      Q = await Ao(E$({
        model: model,
        system: config.instruction,
        skipSystemPromptPrefix: !0,
        messages: [{
          role: "user",
          content: `${Z}${Y}<exchanges>
${b}
</exchanges>

${Ar}`
        }],
        max_tokens: br + D,
        thinking: thinking,
        output_format: {
          type: "json_schema",
          schema: {
            type: "object",
            properties: {
              write_likely: {
                type: "boolean"
              }
            },
            required: ["write_likely"],
            additionalProperties: !1
          }
        },
        timeout: jt,
        maxRetries: 0,
        signal: C.signal,
        forceAttributionHeader: !0,
        querySource: "extract_memories_first_look",
        credentials: credentials
      }), C.signal, () => new Ke()),
      q = Q.content.find(item => item.type === "text"),
      ee = q?.type === "text" ? et(mj(q.text), !1) : null,
      ae = typeof ee === "object" && ee !== null && "write_likely" in ee ? ee.write_likely : void 0;
    if (typeof ae !== "boolean") return t(`[extractMemories] first look: the model did not answer {"write_likely": true|false} (stop reason ${Q.stop_reason}); the pass is not skipped`), w("error", "no_boolean");
    return w(ae ? "yes" : "no");
  } catch (error) {
    return t(`[extractMemories] first look failed: ${d(error)}; the pass is not skipped`), w("error", error instanceof FC || C.signal.aborted && !signal.aborted ? "timeout" : We(error) ? "aborted" : "api_error");
  } finally {
    C.cleanup();
  }
}
function Rr(e) {
  let r = e.type === "attachment" && e.attachment.type === "queued_command" ? ez(e.attachment.origin, e.attachment.commandMode) : e.type === "user" ? e.origin : void 0;
  return r?.kind === "task-notification" && r.subkind !== "scheduled-trigger";
}
function Kt(e, r, n, o, s) {
  let u = Ll(),
    y = u ? Me : kt,
    h = u ? "ls/find/cat/stat/wc/head/tail and similar" : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar",
    b = u ? "rm" : "Remove-Item",
    K = r.length > 0 ? `

## Existing memory files

${r}

Check this list before writing \u2014 update an existing file rather than creating a duplicate.` : "",
    w = n ? "scope guidance, " : "",
    C = `Available tools: ${ze}, ${_r}, ${Qr}, read-only ${y} (${h}), and ${dt}/${Yt} for paths inside the memory directory only, and ${y} ${b} of .md files inside the memory directory only (outside protected subdirectories like .git or agents${u ? "; rm takes no flags except -f" : ""}). All other tools \u2014 MCP, Agent, write-capable ${y}, etc \u2014 will be denied.`,
    M = `You have a limited turn budget. ${dt} requires a prior ${ze} of the same file, so the efficient strategy is: turn 1 \u2014 issue all ${ze} calls in parallel for every file you might update; turn 2 \u2014 issue all ${Yt}/${dt} calls in parallel. Do not interleave reads and writes across multiple turns.`;
  return [`You are now acting as the memory extraction subagent. Analyze the most recent ~${e} messages above and use them to update your persistent memory systems.`, "", C, "", M, "", `You MUST only use content from the last ~${e} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further \u2014 no grepping source files, no reading code to confirm a pattern exists, no git commands.` + K, "", "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.", "", "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.", "", `Apply the memory types, ${w}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above.`, ...(Zen() ? ["", "Skip the project-skill upkeep step here: your writes are restricted to the memory directory, so record the correction as a feedback memory only."] : []), ...(o ? ["", `The ${Pv} / ${yg} / ${jf} tools are unavailable here, so skip anything the scope guidance marks as shared with the project \u2014 the main conversation saves those; never file them in the personal directory instead. Save only what belongs in your personal memory directory.`] : []), ...[]].join(`
`);
}
var Te = null,
  Jt = null,
  ie = null,
  Ee = null,
  DGr = "rm|remove-item|ri|del|erase",
  regExp = new RegExp(`^(?:${DGr})$`, "i");
function j(e, r, n, o = !0) {
  if (t(`[autoMem] denied ${e.name} (${n}): ${r}`), o) l("tengu_auto_mem_tool_denied", {
    tool_name: On(e.name),
    reason: f(n)
  });
  return {
    behavior: "deny",
    message: r,
    decisionReason: {
      type: "other",
      reason: r
    }
  };
}
function Lr(e, r) {
  let n = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
  if (n.length < 2) return;
  if (!regExp.test(n[0])) return;
  let o = [];
  for (let s = 1; s < n.length; s++) {
    let u = n[s];
    if (/^-(?:Literal)?Path$/i.test(u)) continue;
    if (u.startsWith("-")) return;
    let y = u.startsWith('"') && u.endsWith('"') || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1) : u;
    if (/[*?[\]$`(){}|;&<>"',]/.test(y)) return;
    if (!FUe(y, r)) return;
    o.push(y);
  }
  return o.length > 0 ? o : void 0;
}
var Ir = new Set([ze, _r, Qr, dt, Yt]),
  Fr = {
    restored: "restored",
    none_saved: "none saved",
    not_in_transcript: "not restored: that message is no longer in the transcript"
  };
async function Wr(e, r) {
  let n = await zI(e);
  if (n.kind !== "simple" || n.commands.length !== 1) return !1;
  let o = n.commands[0];
  if (o === void 0 || o.argvSourceLiteral !== !0 || o.argv[0] !== "ls" || o.redirects.length > 0 || o.envVars.length > 0) return !1;
  let s = h => h.replace(/[/\\]+$/, ""),
    u = new Set(ps(r).map(s)),
    y = o.argv.slice(1).filter(item => !/^-[laA1hF]+$/.test(item));
  return y.length > 0 && y.every(item => {
    if (item.startsWith("-") || item.startsWith("~") || item !== item.trim() || item.split(/[/\\]/).includes("..") || /[*?[]/.test(item) || item.includes("\\")) return !1;
    try {
      return ps(mt(item)).every(item => u.has(s(item)));
    } catch {
      return !1;
    }
  });
}
function Nr(e) {
  return e.replace(/['"`\\\u2018-\u201F]/g, "").includes("..");
}
function rt(e, r) {
  if (e?.type === "subcommandResults") return [...e.reasons.values()].some(item => rt(item.decisionReason, r));
  return r === "rule" ? e?.type === "rule" && e.rule.ruleBehavior !== "allow" : e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked" || e?.type === "other" && e.reason === vH;
}
function LGr(e, r) {
  try {
    for (let name of [Yt, dt]) {
      let o = lo(e, {
        name: name
      }) ?? dl(e, {
        name: name
      });
      if (o !== null) return o;
    }
    for (let n of ps(r)) for (let o of ["deny", "ask"]) {
      let s = Aa(n, e, "edit", o);
      if (s !== null) return s;
    }
  } catch (error) {
    a(F(error));
  }
  return;
}
async function Ur(e, r) {
  let n = await zI(e);
  if (n.kind !== "simple" || n.usesAssignedValue === !0 || n.laterLoopPassesDiffer === !0) return;
  if (n.commands.length !== 1) return;
  let o = n.commands[0];
  if (!o) return;
  if (o.argv[0] !== "rm") return;
  if (o.redirects.length > 0) return;
  if (o.envVars.length > 0) return;
  let s = [],
    u = !1;
  for (let y = 1; y < o.argv.length; y++) {
    let h = o.argv[y];
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
    if (!h.startsWith("/") || !FUe(h, r)) return;
    s.push(h);
  }
  return s.length > 0 ? s : void 0;
}
function FUe(e, r) {
  let n = Cr(e).slice(r.length).includes(":");
  return e.endsWith(".md") && !n && bie(e, r);
}
function NGr(e, r, {
  fork = "dream",
  onWriteAllowed: onWriteAllowed
} = {}) {
  return async (s, updatedInput, y, h, toolUseId, K) => {
    if (ite()) return j(s, S1t, "memory_paused");
    if (s.mcpInfo) return j(s, "MCP tools are not available to the memory agent", "mcp_tool");
    if (K !== void 0 || y.hookAskFloor) return j(s, "a PreToolUse hook requires confirmation for this call, and the memory agent runs headless with no user to answer \u2014 the call is denied", "hook_ask");
    let w;
    if (s.name === Me || s.name === kt) {
      let M = P7s("the memory agent", updatedInput);
      if (M.deniedFlag !== void 0) return j(s, M.message, "shell_flag");
      if (w = M.sanitizedInput, x() === "windows" && y.getAppState().toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 && typeof updatedInput.command === "string" && Nr(updatedInput.command)) return j(s, "On Windows with permissions.blockReadsOutsideWorkingDirectories on, the memory agent's shell commands may not contain '..' anywhere, even split by quotes or a backslash, because where it leads cannot be checked. Use absolute paths, and avoid '..' in patterns too.", "windows_dot_dot");
    }
    try {
      let M = import.meta.require("B:/~BUN/root/chunk-xbjn0r4e.js"),
        {
          checkRuleBasedPermissions: checkRuleBasedPermissions
        } = M,
        {
          carriesAskRuleIntent: carriesAskRuleIntent
        } = M,
        D = y.getAppState(),
        path = e.replace(/[/\\]+$/, ""),
        Z = D.toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 && D.toolPermissionContext.restricted !== !0 && !ttn() && ![path, ...ps(path)].some(item => yEo(item.replace(/[/\\]+$/, ""))),
        Y = {
          ...y,
          toolUseId: toolUseId
        },
        Q = {
          ...Y,
          getAppState: () => ({
            ...D,
            toolPermissionContext: {
              ...D.toolPermissionContext,
              additionalWorkingDirectories: new Map([...D.toolPermissionContext.additionalWorkingDirectories, [path, {
                path: path,
                source: "session"
              }]])
            }
          })
        },
        q = await checkRuleBasedPermissions(s, updatedInput, Z && Ir.has(s.name) ? Q : Y, {
          crashIsObjection: !0
        }),
        ee = q?.behavior === "ask" && x() !== "windows" && Z && s.name === Me && q.decisionReason?.type === "safetyCheck" && q.decisionReason.circuitBreaker === "outsideReadsBlocked" && !carriesAskRuleIntent(q) && typeof updatedInput.command === "string" && (await Wr(updatedInput.command, e)) && (await checkRuleBasedPermissions(s, updatedInput, Q, {
          crashIsObjection: !0
        })) === null;
      if (q !== null && !ee) return j(s, q.message ?? "a configured permission rule blocks this call for the memory agent", rt(q.decisionReason, "rule") || q.behavior === "ask" && carriesAskRuleIntent(q) ? "permission_rule" : rt(q.decisionReason, "read_block") ? "read_block" : "permission_check");
    } catch (error) {
      return a(F(error)), j(s, "the memory agent could not evaluate configured permission rules; failing closed", "rule_check_failed");
    }
    if (s.name === co) return {
      behavior: "allow",
      updatedInput: updatedInput
    };
    if (s.name === ze || s.name === _r || s.name === Qr) {
      let toolPermissionContext = y.getAppState().toolPermissionContext,
        T = v7e(s, updatedInput, toolPermissionContext);
      if (T) return j(s, T.message, "network_path");
      if (toolPermissionContext.blockReadsOutsideWorkingDirectories === !0) {
        let B = WI(s, updatedInput, toolPermissionContext);
        if (B.behavior === "deny") {
          let D = s.getPath?.(updatedInput),
            O = ps(e).map(item => item.endsWith(zt) ? item : item + zt);
          if (!(D !== void 0 && !ttn() && ps(D).every(item => O.some(Q => bie(item, Q)))) || B.decisionReason.type !== "other" || B.decisionReason.reason !== vH) return j(s, B.message, "read_block");
        }
      }
      return {
        behavior: "allow",
        updatedInput: updatedInput
      };
    }
    if (s.name === Me || s.name === kt) {
      let updatedInput_2 = w ?? updatedInput,
        T = s.inputSchema.safeParse(updatedInput);
      if (T.success) {
        if (s.isReadOnly(T.data, y)) return {
          behavior: "allow",
          updatedInput: updatedInput_2
        };
        let command = T.data.command;
        if (typeof command === "string") {
          if ((s.name === Me ? await Ur(command, e) : Lr(command, e)) !== void 0) return {
            behavior: "allow",
            updatedInput: updatedInput_2
          };
        }
      }
      let B = s.name === Me;
      return j(s, `Only read-only shell commands and ${B ? "rm (no flags except -f)" : "Remove-Item"} of .md files under ${e} (not protected subdirectories like .git or agents) are permitted in this context (${B ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`, "shell_not_allowed");
    }
    if ((s.name === dt || s.name === Yt) && "file_path" in updatedInput) {
      let file_path_2 = updatedInput.file_path;
      if (typeof file_path_2 === "string" && FUe(file_path_2, e)) return onWriteAllowed?.(file_path_2, toolUseId), {
        behavior: "allow",
        updatedInput: updatedInput
      };
    }
    let C = Ll() ? Me : kt;
    return j(s, `only ${ze}, ${_r}, ${Qr}, read-only ${C}, and ${dt}/${Yt} within ${e} are allowed`, "tool_not_allowed");
  };
}
function makeGate(e, r, n = !0) {
  return async (o, updatedInput_3, u) => {
    if (S0()) return j(o, S1t, "memory_paused", n);
    let toolPermissionContext_2 = u.getAppState().toolPermissionContext;
    if (o8e(toolPermissionContext_2)) return r(), j(o, "tool calls are held in this session until the user writes; this background memory pass cannot run", "tools_held", n);
    if (o.name === as || o.name === co) return {
      behavior: "allow",
      updatedInput: updatedInput_3
    };
    if (!aSe(QIs(u.options.mcpClients))) return j(o, "the session has no CCR memory server; this background memory pass cannot run", "no_memory_server", n);
    if ([...Wl(toolPermissionContext_2), ...Vc(toolPermissionContext_2)].some(item => X_(toolPermissionContext_2, o, item))) return j(o, `${o.name} is blocked by a permission rule for this session`, "permission_rule", n);
    if (!XIs.has(o.name)) return j(o, `this background memory pass may only call ${[...XIs].join(", ")}`, "tool_not_allowed", n);
    if (z$t.has(o.name) && V5() !== e) return r(), j(o, "a newer user turn has started; this background memory pass may no longer write", "newer_turn", n);
    return {
      behavior: "allow",
      updatedInput: updatedInput_3
    };
  };
}
function or(e) {
  let r = new Set();
  for (let n of e) {
    if (n.type !== "user") continue;
    let content_6 = n.message.content;
    if (!Array.isArray(content_6)) continue;
    for (let s of content_6) if (s.type === "tool_result" && s.is_error === !0) r.add(s.tool_use_id);
  }
  return r;
}
function sr(e, r) {
  let n = Ze(e);
  if (n === void 0) return;
  let o;
  try {
    o = mt(n);
  } catch {
    return;
  }
  return FUe(o, r) ? o : void 0;
}
function $r(e, r) {
  let n = or(e),
    o = [];
  for (let s of e) {
    if (s.type !== "assistant") continue;
    let content_7 = s.message.content;
    if (!Array.isArray(content_7)) continue;
    for (let y of content_7) {
      if (y.type === "tool_use" && n.has(y.id)) continue;
      let h = sr(y, r);
      if (h !== void 0) o.push(h);
    }
  }
  return L(o);
}
function Xt(paths) {
  let r = U(paths, n => nr(n) !== lm);
  return {
    source: "extract",
    summary: r > 0 ? `saved ${r} ${P(r, "memory", "memories")}` : "updated the memory index",
    paths: paths
  };
}
function Dr(e, r) {
  let n = new Map(),
    o = [];
  return {
    onMessage: u => {
      if (u.type === "assistant") {
        let content_8 = u.message.content;
        if (!Array.isArray(content_8)) return;
        for (let b of content_8) {
          let K = sr(b, r);
          if (b.type === "tool_use" && K !== void 0) n.set(b.id, K);
        }
        return;
      }
      if (u.type !== "user") return;
      let content_9 = u.message.content;
      if (!Array.isArray(content_9)) return;
      for (let h of content_9) {
        if (h.type !== "tool_result") continue;
        let b = n.get(h.tool_use_id);
        if (b === void 0) continue;
        if (n.delete(h.tool_use_id), h.is_error === !0) continue;
        o.push(b), nZt(e, b, {
          requireReadBeforeWrite: !0
        });
      }
    },
    completedWritePaths: () => L(o)
  };
}
function tt(e) {
  let queryTracking = e.toolUseContext.queryTracking;
  return {
    overageInUse: queryTracking?.billedToUsageCredits ?? mi().overageInUse === !0,
    longContextBilled: queryTracking?.longContextBilled === !0
  };
}
function Zt(e, r) {
  return r.overageInUse && Pkr() ? e.whenOverage : "run";
}
function FUo(host) {
  if (i.CLAUDE_CODE_POST_TURN_MEMORY && fet() === null) t("[extractMemories] CLAUDE_CODE_POST_TURN_MEMORY is set but CLAUDE_CODE_POST_TURN_MEMORY_CONFIG is missing or invalid; the pass is off"), c("ccr_memory_extract", "config_invalid");
  let r = new Set(),
    sinceUuid_2,
    o,
    s = 0;
  function u(p) {
    if (p) sinceUuid_2 = p, o = void 0, s = 0;
  }
  function y(p, E) {
    if (!p) {
      if (s++, s >= Ot) {
        t(`[extractMemories] (mcp) stopped early ${s} passes in a row; the cursor moves on and these turns are not reviewed again`), u(E);
        return;
      }
    }
    o = z(), t(`[extractMemories] (mcp) ${p ? "writes refused after a newer prompt" : "the pass stopped early (an API error, the turn cap or an abort of its fork before anything was saved, or a throw)"}; the cursor stays and the next pass reviews these turns again`);
  }
  let h = !1,
    b = !1,
    K = Xn(),
    turns = 0,
    C = !1,
    resumed_turns,
    resumed_pass_counted_run,
    resumed_cursor,
    D,
    O;
  function Z(p) {
    return r.add(p), p.finally(() => r.delete(p));
  }
  let Y = Te?.createLaptopExtractRunner(host, Z);
  function Q() {
    let p = O;
    if (O = void 0, p?.timer !== void 0) clearTimeout(p.timer);
    return p;
  }
  function q(p, context, promptIndex = V5(), personPrompt = b4e(), billing = tt(context), N = !0) {
    if (Q(), p.idleFlushSeconds === 0) return;
    O = {
      timer: N ? setTimeout(ee, p.idleFlushSeconds * 1000).unref() : void 0,
      dueAt: N ? performance.now() + p.idleFlushSeconds * 1000 : 1 / 0,
      promptIndex: promptIndex,
      personPrompt: personPrompt,
      billing: billing,
      context: context
    };
  }
  function ee() {
    let p = Q();
    if (!p || b || Fse() || V5() !== p.promptIndex) return;
    Z(Le({
      context: p.context,
      trigger: "idle_flush",
      promptIndex: p.promptIndex,
      personPrompt: p.personPrompt,
      billing: p.billing
    }));
  }
  function ae(p) {
    try {
      J.of(host).onPassEnded?.(p);
    } catch (error) {
      a(F(error));
    }
  }
  function ge(p) {
    try {
      J.of(host).onPassSkipped?.(p);
    } catch (error) {
      a(F(error));
    }
  }
  function ot(p) {
    if (C) return;
    C = !0;
    let {
      restoredPlace: restoredPlace,
      restoredPlaceAt: restoredPlaceAt
    } = J.of(host);
    if (!restoredPlace) return;
    let I = restoredPlace.passAt !== null && (restoredPlaceAt ?? Date.now()) >= restoredPlace.passAt,
      G = I ? restoredPlace.tail : restoredPlace.cursor;
    if (turns = I ? 0 : restoredPlace.turns, resumed_turns = turns, resumed_pass_counted_run = I, G !== null && p.some(item => item.uuid === G)) sinceUuid_2 = G;
    let N = sinceUuid_2 !== void 0 ? "restored" : G === null ? "none_saved" : "not_in_transcript";
    resumed_cursor = f(N), t(`[extractMemories] (mcp) resumed from the previous worker: ${turns} turn end(s) since its last pass${I ? " (the pass it had scheduled is counted as run)" : ""}; cursor ${Fr[N]}`);
  }
  function ue(p, passAt) {
    let A = {
      turns: turns,
      cursor: sinceUuid_2 ?? null,
      tail: p.at(-1)?.uuid ?? null,
      passAt: passAt
    };
    try {
      J.of(host).savePlace?.(A);
    } catch (error) {
      a(F(error));
    }
  }
  async function Le({
    context: context_2,
    appendSystemMessage: appendSystemMessage,
    trigger: trigger,
    promptIndex: promptIndex_2 = V5(),
    personPrompt: personPrompt_2 = b4e(),
    billing: billing_2 = tt(context_2)
  }) {
    let {
        messages: messages_2
      } = context_2,
      config_2 = fet(),
      fe = config_2?.carryAcrossRestarts === !0 && trigger === void 0;
    if (config_2?.carryAcrossRestarts) ot(messages_2);
    let message_count = Ct(messages_2, sinceUuid_2);
    if (o !== void 0 && o !== z()) o = void 0, s = 0;
    if (o === void 0 && Nt(messages_2, sinceUuid_2, !!config_2, !!config_2 && v("tengu_mellow_ember", !1) === !0)) {
      if (t("[extractMemories] skipping \u2014 conversation already wrote to memory in this range"), u(messages_2.at(-1)?.uuid), fe) ue(messages_2, null);
      if (l("tengu_extract_memories_skipped_direct_write", {
        message_count: message_count
      }), config_2) ge(trigger ?? "cadence");
      return;
    }
    let re = config_2 ? Ht(messages_2, sinceUuid_2) : void 0,
      Fe = config_2?.proseGate === "chat",
      st = Fe ? Math.max(config_2.reviewWindow, re?.userTurns ?? 0) : 0,
      ur = Fe ? Dt(messages_2, config_2.minProseWords, st) : $t(messages_2, sinceUuid_2),
      be = config_2 && re ? At(Fe ? Oe(Xe(messages_2, st)) : re.proseWords) : void 0;
    if (!ur) {
      if (t("[extractMemories] skipping \u2014 not enough user prose"), u(messages_2.at(-1)?.uuid), fe) ue(messages_2, null);
      l("tengu_extract_memories_skipped_no_prose", {
        message_count: message_count,
        prose_gate: de(config_2?.proseGate),
        prose_words_bucket: de(be)
      });
      return;
    }
    let every_n_turns = config_2?.everyNTurns ?? v("tengu_bramble_lintel", null) ?? 1,
      cacheSafeParams = QQ(context_2),
      _e = config_2 ? Zt(config_2, billing_2) : "run";
    if (trigger === void 0) {
      if (turns++, turns < every_n_turns) {
        if (config_2) {
          let R = turns >= config_2.idleFlushMinTurns;
          if (q(config_2, context_2, promptIndex_2, personPrompt_2, billing_2, R), fe) ue(messages_2, R && config_2.idleFlushSeconds > 0 && _e !== "skip" ? Date.now() + config_2.idleFlushSeconds * 1000 : null);
        }
        return;
      }
    }
    let turns_since_last_pass = turns;
    if (turns = 0, fe) ue(messages_2, Date.now());
    let {
        toolPermissionContext: toolPermissionContext_3
      } = context_2.toolUseContext.getAppState(),
      Ue = config_2 ? void 0 : LGr(toolPermissionContext_3, uJ());
    if (Ue !== void 0) {
      if (t(`[extractMemories] skipping \u2014 ${q8n(Ue)} would refuse memory writes`), l("tengu_extract_memories_skipped_permission_rule", {
        message_count: message_count
      }), appendSystemMessage !== void 0) {
        let R = MGr(host, Ue, vl());
        if (R !== void 0) appendSystemMessage(Bt(R, "warning"));
      }
      return;
    }
    b = !0;
    let Ae = Date.now(),
      $e,
      {
        taskRegistry: taskRegistry
      } = context_2.toolUseContext,
      he,
      He,
      le = !1;
    try {
      if (config_2) {
        if (V5() !== promptIndex_2) {
          t("[extractMemories] skipping (mcp) \u2014 a newer turn started");
          return;
        }
        if (o8e(toolPermissionContext_3)) {
          if (t("[extractMemories] skipping (mcp) \u2014 tool calls are held until a person writes"), fe) ue(messages_2, null);
          return;
        }
        if (_e === "skip") {
          if (o = z(), t("[extractMemories] skipping (mcp) \u2014 the turn was billed to Extra Usage and when_overage is 'skip'; these turns wait for the next pass"), l("tengu_extract_memories_skipped_overage", {
            message_count: message_count,
            trigger: f(trigger ?? "cadence"),
            long_context_billed: billing_2.longContextBilled,
            prose_words_bucket: de(be),
            own_words_turns: re?.ownWordsTurns
          }), fe) ue(messages_2, null);
          return;
        }
        let X = config_2.firstLook === void 0 ? "off" : _e === "first_look" ? "enforce" : config_2.firstLook.mode,
          qe = config_2.firstLook !== void 0 && X !== "off" ? Vt({
            config: config_2.firstLook,
            messages: messages_2,
            sinceUuid: sinceUuid_2,
            window: config_2.reviewWindow,
            signal: context_2.toolUseContext.abortController.signal,
            credentials: context_2.toolUseContext.credentials
          }) : void 0;
        if (qe !== void 0 && X === "enforce") {
          let H = await qe;
          if (t(`[extractMemories] first look (enforce, a "no" skips the pass) answered ${H.verdict} after ${H.durationMs}ms`), V5() !== promptIndex_2) {
            turns = turns_since_last_pass, t("[extractMemories] skipping (mcp) \u2014 a newer turn started during the first look");
            return;
          }
          if (o8e(context_2.toolUseContext.getAppState().toolPermissionContext)) {
            t("[extractMemories] skipping (mcp) \u2014 tool calls were held during the first look");
            return;
          }
          if (H.verdict === "no" || H.verdict === "empty") {
            t(`[extractMemories] skipping (mcp) \u2014 the first look answered ${H.verdict}; these turns wait for the next pass`), l("tengu_extract_memories_skipped_first_look", {
              message_count: message_count,
              trigger: f(trigger ?? "cadence"),
              overage_in_use: billing_2.overageInUse,
              when_overage: f(_e),
              first_look_verdict: f(H.verdict),
              first_look_model: Lt(H.model),
              first_look_ms: H.durationMs,
              first_look_input_chars: H.inputChars,
              first_look_user_turns: H.userTurns,
              prose_words_bucket: de(be),
              own_words_turns: re?.ownWordsTurns
            });
            return;
          }
        }
        t(`[extractMemories] starting (mcp, ${trigger ?? "cadence"}) \u2014 ${message_count} new messages`);
        let superseded_writes = 0,
          Re = Ju(context_2.toolUseContext.abortController);
        if (config_2.declareTask) he = wt(taskRegistry, Re), He = Re.signal;
        let served = Ee?.servedTrial(config_2),
          gt = Ee !== null && served !== void 0 ? await Ee.runTrial({
            served: served,
            config: config_2,
            context: context_2,
            host: host,
            sinceUuid: sinceUuid_2,
            drainSignal: K.signal,
            parentAbort: Re,
            promptIndex: promptIndex_2,
            makeGate: makeGate
          }) : void 0,
          Ce = config_2.staleNote ? bxi(host) : void 0,
          _t = Ce ? Dds(Ce, Es(messages_2), kxi) : "",
          yt = Sxi(host),
          gr = Date.now(),
          xe = await sA({
            promptMessages: [Ie({
              content: (yt ?? config_2.instruction) + _t
            })],
            cacheSafeParams: cacheSafeParams,
            canUseTool: makeGate(promptIndex_2, () => {
              superseded_writes++;
            }),
            querySource: "extract_memories",
            forkLabel: "extract_memories",
            overrides: {
              mcpRequestMeta: Y8i({
                citesEvent: Ut(messages_2, personPrompt_2)
              }),
              abortController: Re
            },
            skipTranscript: !0,
            maxTurns: config_2.maxTurns,
            skipCacheWrite: !0
          }),
          duration_ms = Date.now() - gr;
        le = He?.aborted === !0;
        let ne = await qe;
        if (ne !== void 0 && X === "shadow") t(`[extractMemories] first look (shadow, the pass ran regardless) answered ${ne.verdict} after ${ne.durationMs}ms`);
        let se = It(xe.messages, messages_2);
        if (Ce) wxi(host, Ce, se);
        let yr = or(se),
          written = U(se.flatMap(item => item.type === "assistant" && Array.isArray(item.message.content) ? item.message.content : []), H => H.type === "tool_use" && z$t.has(H.name) && !yr.has(H.id)),
          reached_cap = Ft(se),
          review_unfinished = Wt(se) || written === 0 && (reached_cap || le),
          unfinished_in_a_row = review_unfinished && written === 0 ? s + 1 : 0;
        if (written > 0 || superseded_writes === 0 && !review_unfinished) u(messages_2.at(-1)?.uuid);else y(!review_unfinished, messages_2.at(-1)?.uuid);
        if (l("tengu_extract_memories_extraction", {
          mode: f("mcp"),
          trigger: f(trigger ?? "cadence"),
          account_memory_line_rendered: !1,
          every_n_turns: every_n_turns,
          input_tokens: xe.totalUsage.input_tokens,
          output_tokens: xe.totalUsage.output_tokens,
          cache_read_input_tokens: xe.totalUsage.cache_read_input_tokens,
          cache_creation_input_tokens: xe.totalUsage.cache_creation_input_tokens,
          message_count: message_count,
          parent_context_tokens: $f(messages_2),
          compacted_in_fork: se.some(Kr),
          turn_count: U(se, H => H.type === "assistant"),
          written: written,
          superseded_writes: superseded_writes,
          instruction_source: f(yt === void 0 ? "env" : "memory_context"),
          stale_note_rendered: _t !== "",
          review_unfinished: review_unfinished,
          unfinished_in_a_row: unfinished_in_a_row,
          reached_cap: reached_cap,
          duration_ms: duration_ms,
          fork_model: Lt(context_2.toolUseContext.options.mainLoopModel),
          turns_since_last_pass: turns_since_last_pass,
          prose_gate: f(config_2.proseGate),
          prose_words_bucket: de(be),
          user_turns: re?.userTurns,
          own_words_turns: re?.ownWordsTurns,
          own_words_chars: re?.ownWordsChars,
          task_notification_turns: re?.taskNotificationTurns,
          unstamped_turns: re?.unstampedTurns,
          overage_in_use: billing_2.overageInUse,
          long_context_billed: billing_2.longContextBilled,
          when_overage: f(_e),
          first_look_mode: f(X),
          first_look_verdict: de(ne?.verdict),
          first_look_error: de(ne?.error),
          first_look_model: Lt(ne?.model),
          first_look_ms: ne?.durationMs,
          first_look_input_chars: ne?.inputChars,
          first_look_user_turns: ne?.userTurns,
          idle_flush_min_turns: config_2.idleFlushMinTurns,
          carry_across_restarts: config_2.carryAcrossRestarts,
          resumed_turns: resumed_turns,
          resumed_pass_counted_run: resumed_pass_counted_run,
          resumed_cursor: resumed_cursor
        }), g("ccr_memory_extract"), ae({
          outcome: written > 0 ? "saved" : review_unfinished ? "unfinished" : superseded_writes > 0 ? "writes_refused" : "nothing_to_save",
          trigger: trigger ?? "cadence",
          written: written,
          durationMs: Date.now() - Ae
        }), Ee !== null && gt !== void 0) Ee.logPair(gt, se, trigger ?? "cadence", context_2.toolUseContext.options.mainLoopModel);
        return;
      }
      let R = vl();
      t(`[extractMemories] starting \u2014 ${message_count} new messages, memoryDir=${R}`);
      let ye = OEr(),
        Be = pse() || ye,
        canUseTool = NGr(R, void 0, {
          fork: "extraction"
        }),
        lr = T7r(await J6t(R, Xn().signal, context_2.toolUseContext.storageV5)),
        account_memory_line_rendered = !1,
        je = ie?.isPromoterExtractorOn() === !0 ? ie.typedTurnsInWindow(host, context_2.toolUseContext.session.id, messages_2, sinceUuid_2) : [],
        content_10 = Kt(message_count, lr, Be, ye, account_memory_line_rendered) + (ie?.typedTurnsPromptBlock(je) ?? ""),
        agentId = ie !== null && je.length > 0 ? _S("extract_memories") : void 0,
        mr = agentId === void 0 ? void 0 : ie?.registerExtractorFork(host, agentId, je);
      $e = Dr(context_2.toolUseContext.readFileState, R);
      let V = await sA({
        promptMessages: [Ie({
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
        skipCacheWrite: A8t(),
        onMessage: $e.onMessage
      }).finally(() => mr?.());
      u(messages_2.at(-1)?.uuid);
      let oe = $r(V.messages, R),
        turn_count = U(V.messages, X => X.type === "assistant"),
        ct = V.totalUsage.input_tokens + V.totalUsage.cache_creation_input_tokens + V.totalUsage.cache_read_input_tokens,
        pr = ct > 0 ? (V.totalUsage.cache_read_input_tokens / ct * 100).toFixed(1) : "0.0";
      if (t(`[extractMemories] finished \u2014 ${oe.length} files written, cache: read=${V.totalUsage.cache_read_input_tokens} create=${V.totalUsage.cache_creation_input_tokens} input=${V.totalUsage.input_tokens} (${pr}% hit)`), oe.length > 0) t(`[extractMemories] memories saved: ${oe.join(", ")}`);else t("[extractMemories] no memories saved this run");
      let ke = oe.filter(item => nr(item) !== lm),
        team_memories_saved = U(ke, Bq);
      if (l("tengu_extract_memories_extraction", {
        mode: f("file"),
        input_tokens: V.totalUsage.input_tokens,
        output_tokens: V.totalUsage.output_tokens,
        cache_read_input_tokens: V.totalUsage.cache_read_input_tokens,
        cache_creation_input_tokens: V.totalUsage.cache_creation_input_tokens,
        message_count: message_count,
        parent_context_tokens: $f(messages_2),
        compacted_in_fork: V.messages.some(Kr),
        turn_count: turn_count,
        files_written: oe.length,
        memories_saved: ke.length,
        team_memories_saved: team_memories_saved,
        account_memory_line_rendered: account_memory_line_rendered,
        duration_ms: Date.now() - Ae
      }), t(`[extractMemories] writtenPaths=${oe.length} memoryPaths=${ke.length} appendSystemMessage defined=${appendSystemMessage != null}`), ke.length > 0) {
        let X = Kpr(ke);
        X.teamCount = team_memories_saved, appendSystemMessage?.(X);
      }
      if (oe.length > 0) await K8n(context_2.toolUseContext, Xt(oe));
      g("memory_extract");
    } catch (error) {
      if (le = He?.aborted === !0, t(`[extractMemories] error: ${error}`), !le) l("tengu_extract_memories_error", {
        duration_ms: Date.now() - Ae,
        mode: f(config_2 ? "mcp" : "file")
      }), m(config_2 ? "ccr_memory_extract" : "memory_extract", "agent_error");
      if (config_2) {
        if (he !== void 0 && !le) Ye(he, taskRegistry, "failed");
        ae({
          outcome: le ? "unfinished" : "failed",
          trigger: trigger ?? "cadence",
          written: 0,
          durationMs: Date.now() - Ae
        }), y(!1, messages_2.at(-1)?.uuid);
      }
      let ye = $e?.completedWritePaths() ?? [];
      if (ye.length > 0) try {
        await K8n(context_2.toolUseContext, Xt(ye));
      } catch (error) {
        t(`[extractMemories] could not queue the notice for writes that landed before the error: ${d(error)}`);
      }
    } finally {
      if (b = !1, he !== void 0) Ye(he, taskRegistry, le ? "killed" : "completed");
      let R = D;
      if (D = void 0, R && every_n_turns <= 1) t("[extractMemories] running trailing extraction for stashed context"), await Le({
        context: R.context,
        appendSystemMessage: R.appendSystemMessage,
        trigger: "trailing",
        promptIndex: R.promptIndex,
        personPrompt: R.personPrompt,
        billing: R.billing
      });else if (R && config_2) q(config_2, R.context, R.promptIndex, R.personPrompt, R.billing);
    }
  }
  async function ir(p, E) {
    if (p.toolUseContext.agentId) return;
    let A = Y?.onTurnEnd(p, E);
    try {
      if (V$t() || er()) await ar(p, E);
    } finally {
      await A;
    }
  }
  async function ar(context_3, appendSystemMessage_2) {
    Q();
    let A = fet(),
      I = A !== null,
      G = N => {
        if (A?.carryAcrossRestarts) ot(context_3.messages), ue(context_3.messages, N);
      };
    if (I && (S0() || Zr() || IT())) {
      G(null);
      return;
    }
    if (I && !(aSe(QIs(context_3.toolUseContext.options.mcpClients)) && context_3.toolUseContext.options.tools.some(item => ht(item, mEo)))) {
      t("[extractMemories] skipping (mcp) \u2014 CCR memory server not mounted"), G(null);
      return;
    }
    if (I && Da() && NVr(context_3.toolUseContext.options.tools.filter(item => ht(item, mEo))).length === 0) {
      t("[extractMemories] skipping (mcp) \u2014 coordinator mode: the write tool is held on the memory server's word alone"), G(null);
      return;
    }
    if (!I && !v("tengu_passport_quail", !1) && !er()) return;
    if (!I && !fh()) {
      if (ite()) sinceUuid_2 = context_3.messages.at(-1)?.uuid ?? sinceUuid_2;
      return;
    }
    if (!I && Aue()) return;
    if (rr() !== null) return;
    if (b) {
      t("[extractMemories] extraction in progress \u2014 stashing for trailing run"), l("tengu_extract_memories_coalesced", {});
      let billing_3 = tt(context_3);
      if (D = {
        context: context_3,
        appendSystemMessage: appendSystemMessage_2,
        promptIndex: V5(),
        personPrompt: b4e(),
        billing: billing_3
      }, A) G((A.everyNTurns <= 1 || A.idleFlushSeconds > 0) && Zt(A, billing_3) !== "skip" ? Date.now() + A.idleFlushSeconds * 1000 : null);
      return;
    }
    await Le({
      context: context_3,
      appendSystemMessage: appendSystemMessage_2
    });
  }
  let me = J.of(host);
  me.extractor = (p, E) => Z(ir(p, E)), me.drainer = async (p = 60000) => {
    let E = Date.now() + p;
    K.abort(), ee(), Y?.disarmIdleFlush();
    while (r.size > 0 && Date.now() < E) await Promise.race([Promise.all(r).catch(() => {}), new Promise(A => setTimeout(A, E - Date.now()).unref())]), ee();
  }, me.disarm = () => {
    me.extractor = null, D = void 0, Q(), Y?.disarmIdleFlush();
  }, me.owedWithin = p => r.size > 0 || O?.timer !== void 0 && O.promptIndex === V5() && O.dueAt - performance.now() <= p, me.placeNow = () => ({
    turns: turns,
    cursor: sinceUuid_2 ?? null
  });
}
function er() {
  return ie !== null && ie.EXTRACTOR_RUNS_FOR_PROMOTER && ie.isPromoterExtractorOn();
}
function Aha(e) {
  return Te !== null && Te.isLaptopExtractDispatched(e);
}
function xha(e) {
  return Te !== null && Te.isLaptopExtractSync(e);
}
async function Pha(e, r) {
  await J.of(e.toolUseContext.session.host).extractor?.(e, r);
}
async function Oha(e, r) {
  await J.of(e).drainer(r);
}
function Hr(e) {
  J.of(e).disarm();
}
function Iha(e, r) {
  let n = J.of(e);
  n.restoredPlace = q8i(r), n.restoredPlaceAt = Date.now();
}
function HUo(e, r) {
  J.of(e).savePlace = r;
}
function tr(e, r) {
  return J.of(e).owedWithin(r);
}
function $Uo(e, r) {
  if (r === void 0 || r.passAt === null) return null;
  if (tr(e, Number.NEGATIVE_INFINITY)) return null;
  let timerArmed = tr(e, 1 / 0),
    o = (fet()?.everyNTurns ?? 1) > 1 && Date.now() < r.passAt;
  if (!timerArmed && !o) return null;
  return Hr(e), {
    place: {
      ...r,
      ...J.of(e).placeNow?.(),
      passAt: null
    },
    timerArmed: timerArmed
  };
}
export { K8n, q8n, MGr, DGr, LGr, FUe, NGr, FUo, Aha, xha, Pha, Oha, Iha, HUo, $Uo };