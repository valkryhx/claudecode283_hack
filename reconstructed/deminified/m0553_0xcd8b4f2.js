// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Vm } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { q, cA, Oy, CK } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, To, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Tr } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Nc, jlt, zan, gDt, kz, ux, tN, QV, Bd, nh, e1, Gzn, Ok } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { GLe, QIt } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { lr } from "B:/~BUN/root/chunk-339q6g5w.js";
import { ro, $r, On, x, PDo, sFr, u4n, t$e, eFt, iFr, ODo, ll, r$e, $s, mD, Iq } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ux, Q5e } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ct, wn, Ue, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { zt } from "B:/~BUN/root/chunk-msy8grqx.js";
import { il } from "B:/~BUN/root/chunk-6bn0bbdx.js";
import { Hn } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { Pz } from "B:/~BUN/root/chunk-7zm7ax4t.js";
import { ZRt, ZG, gk, LVe, Ce, DZt } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Fle } from "B:/~BUN/root/chunk-gksrzz5s.js";
import { ba } from "B:/~BUN/root/chunk-na2t7g12.js";
import { uy, Jp, Zl } from "B:/~BUN/root/chunk-dbvr5zxh.js";
import { Wa } from "B:/~BUN/root/chunk-dz2tgns2.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { basename as Ae, sep as he } from "path";
async function dKt(e, r) {
  if (r.paths.length === 0) return;
  let o = [];
  for (let u of r.paths) try {
    let n = Ye(u);
    o.push(n);
    let s = await ZRt(e.readFileState, n, {
      requireReadBeforeWrite: !0
    });
    if (s !== null) t(`[memdir] re-synced readFileState for ${u} after the background ${r.source} pass wrote it (${s === "changed" ? "content changed" : "mtime only, content identical"})`);
  } catch (error) {
    t(`[memdir] left ${b(u)} out of the background ${r.source} pass's change notice, could not resolve it: ${l(error)}`);
  }
  if (o.length === 0) return;
  e.enqueuePendingMemoryUpdate({
    ...r,
    paths: L(o)
  });
}
class ce {
  extractor = null;
  drainer = async () => {};
}
var K = new q(() => new ce());
function de(e, r, o, u, n) {
  let s = ba(),
    g = s ? Ue : St,
    f = s ? "ls/find/cat/stat/wc/head/tail and similar" : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar",
    y = s ? "rm" : "Remove-Item",
    w = r.length > 0 ? `

## Existing memory files

${r}

Check this list before writing \u2014 update an existing file rather than creating a duplicate.` : "",
    M = o ? "scope guidance, " : "",
    k = `Available tools: ${at}, ${$r}, ${ro}, read-only ${g} (${f}), and ${Ct}/${wn} for paths inside the memory directory only, and ${g} ${y} of .md files inside the memory directory only (outside protected subdirectories like .git or agents${s ? "; rm takes no flags except -f" : ""}). All other tools \u2014 MCP, Agent, write-capable ${g}, etc \u2014 will be denied.`,
    O = `You have a limited turn budget. ${Ct} requires a prior ${at} of the same file, so the efficient strategy is: turn 1 \u2014 issue all ${at} calls in parallel for every file you might update; turn 2 \u2014 issue all ${wn}/${Ct} calls in parallel. Do not interleave reads and writes across multiple turns.`;
  return [`You are now acting as the memory extraction subagent. Analyze the most recent ~${e} messages above and use them to update your persistent memory systems.`, "", k, "", O, "", `You MUST only use content from the last ~${e} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further \u2014 no grepping source files, no reading code to confirm a pattern exists, no git commands.` + w, "", "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.", "", QV() ? "If the user explicitly asks you to remember something, save it immediately. If they ask you to forget something, find and remove the relevant entry." : "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.", "", QV() ? "Apply the memory-writing guidance and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above." : `Apply the memory types, ${M}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above.`, ...(jlt() && !QV() ? ["", "Skip the project-skill upkeep step here: your writes are restricted to the memory directory, so record the correction as a feedback memory only."] : []), ...(u ? ["", `The ${uy} / ${Jp} / ${Zl} tools are unavailable here, so skip anything the scope guidance marks as shared with the project \u2014 the main conversation saves those; never file them in the personal directory instead. Save only what belongs in your personal memory directory.`] : []), ...[]].join(`
`);
}
function te(e) {
  return e.type === "user" || e.type === "assistant";
}
function ge(e, r) {
  if (r === null || r === void 0) return U(e, te);
  let o = !1,
    u = 0;
  for (let n of e) {
    if (!o) {
      if (n.uuid === r) o = !0;
      continue;
    }
    if (te(n)) u++;
  }
  if (!o) return U(e, te);
  return u;
}
function re(e, r, o) {
  let u = r === void 0,
    n = new Set();
  for (let s of e) {
    if (!u) {
      if (s.uuid === r) u = !0;
      continue;
    }
    if (s.type === "user") {
      let content = s.message.content;
      if (Array.isArray(content) && content.some(item => item.type === "tool_result" && item.is_error !== !0 && n.has(item.tool_use_id))) return !0;
      continue;
    }
    if (s.type !== "assistant") continue;
    let content_2 = s.message.content;
    if (!Array.isArray(content_2)) continue;
    for (let f of content_2) {
      if (o && f.type === "tool_use" && u4n.has(f.name)) return !0;
      if (f.type === "tool_use" && f.name === Zl) {
        n.add(f.id);
        continue;
      }
      let y = oe(f);
      if (y !== void 0 && mD(y)) return !0;
    }
  }
  return o && !u && re(e, void 0, !0);
}
var fe = 3;
function le(e) {
  return U(e.split(/\s+/), Boolean);
}
function pe(e) {
  if (e.type !== "user" || e.isMeta) return !1;
  let content_3 = e.message.content;
  if (typeof content_3 === "string") return le(content_3) >= fe;
  if (!Array.isArray(content_3)) return !1;
  return content_3.some(item => item.type === "text" && le(item.text) >= fe);
}
function ye(e, r) {
  let o = r === void 0;
  for (let u of e) {
    if (!o) {
      if (u.uuid === r) o = !0;
      continue;
    }
    if (pe(u)) return !0;
  }
  if (!o) return e.some(pe);
  return !1;
}
function oe(e) {
  if (e.type !== "tool_use" || e.name !== Ct && e.name !== wn) return;
  let input = e.input;
  if (typeof input === "object" && input !== null && "file_path" in input) {
    let file_path = input.file_path;
    return typeof file_path === "string" ? file_path : void 0;
  }
  return;
}
var G = null,
  _e = null,
  W = null,
  GEn = "rm|remove-item|ri|del|erase",
  regExp = new RegExp(`^(?:${GEn})$`, "i");
function R(e, r) {
  return t(`[autoMem] denied ${e.name}: ${r}`), i("tengu_auto_mem_tool_denied", {
    tool_name: On(e.name)
  }), {
    behavior: "deny",
    message: r,
    decisionReason: {
      type: "other",
      reason: r
    }
  };
}
function be(e, r) {
  let o = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
  if (o.length < 2) return;
  if (!regExp.test(o[0])) return;
  let u = [];
  for (let n = 1; n < o.length; n++) {
    let s = o[n];
    if (/^-(?:Literal)?Path$/i.test(s)) continue;
    if (s.startsWith("-")) return;
    let g = s.startsWith('"') && s.endsWith('"') || s.startsWith("'") && s.endsWith("'") ? s.slice(1, -1) : s;
    if (/[*?[\]$`(){}|;&<>"',]/.test(g)) return;
    if (!o7e(g, r)) return;
    u.push(g);
  }
  return u.length > 0 ? u : void 0;
}
async function Ie(e, r) {
  let o = await Pz(e);
  if (o.kind !== "simple") return;
  if (o.commands.length !== 1) return;
  let u = o.commands[0];
  if (!u) return;
  if (u.argv[0] !== "rm") return;
  if (u.redirects.length > 0) return;
  if (u.envVars.length > 0) return;
  let n = [],
    s = !1;
  for (let g = 1; g < u.argv.length; g++) {
    let f = u.argv[g];
    if (f === void 0) continue;
    if (!s) {
      if (f === "--") {
        s = !0;
        continue;
      }
      if (f.startsWith("-")) {
        if (f === "-f" || f === "--force") continue;
        return;
      }
    }
    if (/[*?[]/.test(f)) return;
    if (!f.startsWith("/") || !o7e(f, r)) return;
    n.push(f);
  }
  return n.length > 0 ? n : void 0;
}
function o7e(e, r) {
  return e.endsWith(".md") && Iq(e, r);
}
function VEn(e, r, {
  fork = "dream",
  onWriteAllowed: onWriteAllowed
} = {}) {
  return async (n, updatedInput, g, f, y) => {
    if (Oy()) return R(n, Q5e);
    if (n.name === il) return {
      behavior: "allow",
      updatedInput: updatedInput
    };
    if (n.name === at || n.name === $r || n.name === ro) {
      let toolPermissionContext = g.getAppState().toolPermissionContext,
        k = Gzn(n, updatedInput, toolPermissionContext);
      if (k) return R(n, k.message);
      if (toolPermissionContext.blockReadsOutsideWorkingDirectories === !0) {
        let O = Ok(n, updatedInput, toolPermissionContext);
        if (O.behavior === "deny") {
          let v = n.getPath?.(updatedInput),
            B = To(e).map(item => item.endsWith(he) ? item : item + he);
          if (!(v !== void 0 && !gDt() && To(v).every(item => B.some(d => Iq(item, d)))) || O.decisionReason.type !== "other" || O.decisionReason.reason !== Ux) return R(n, O.message);
        }
      }
      return {
        behavior: "allow",
        updatedInput: updatedInput
      };
    }
    if (n.name === Ue || n.name === St) {
      let M = n.inputSchema.safeParse(updatedInput);
      if (M.success) {
        if (n.isReadOnly(M.data)) return {
          behavior: "allow",
          updatedInput: updatedInput
        };
        let command = M.data.command;
        if (typeof command === "string") {
          if ((n.name === Ue ? await Ie(command, e) : be(command, e)) !== void 0) return {
            behavior: "allow",
            updatedInput: updatedInput
          };
        }
      }
      let k = n.name === Ue;
      return R(n, `Only read-only shell commands and ${k ? "rm (no flags except -f)" : "Remove-Item"} of .md files under ${e} (not protected subdirectories like .git or agents) are permitted in this context (${k ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`);
    }
    if ((n.name === Ct || n.name === wn) && "file_path" in updatedInput) {
      let file_path_2 = updatedInput.file_path;
      if (typeof file_path_2 === "string" && o7e(file_path_2, e)) return onWriteAllowed?.(file_path_2, y), {
        behavior: "allow",
        updatedInput: updatedInput
      };
    }
    let w = ba() ? Ue : St;
    return R(n, `only ${at}, ${$r}, ${ro}, read-only ${w}, and ${Ct}/${wn} within ${e} are allowed`);
  };
}
function Fe(e) {
  return async (r, updatedInput_2, u) => {
    if (Oy()) return R(r, Q5e);
    if (r.name === Wa || r.name === il) return {
      behavior: "allow",
      updatedInput: updatedInput_2
    };
    if (!eFt(iFr(u.options.mcpClients))) return R(r, "the session has no CCR memory server; this background memory pass cannot run");
    let toolPermissionContext_2 = u.getAppState().toolPermissionContext;
    if ([...Bd(toolPermissionContext_2), ...nh(toolPermissionContext_2)].some(item => e1(toolPermissionContext_2, r, item))) return R(r, `${r.name} is blocked by a permission rule for this session`);
    if (!sFr.has(r.name)) return R(r, `this background memory pass may only call ${[...sFr].join(", ")}`);
    if (u4n.has(r.name) && CK() !== e) return R(r, "a newer user turn has started; this background memory pass may no longer write");
    return {
      behavior: "allow",
      updatedInput: updatedInput_2
    };
  };
}
function $e(e) {
  let r = new Set();
  for (let o of e) {
    if (o.type !== "user") continue;
    let content_4 = o.message.content;
    if (!Array.isArray(content_4)) continue;
    for (let n of content_4) if (n.type === "tool_result" && n.is_error === !0) r.add(n.tool_use_id);
  }
  return r;
}
function Te(e, r) {
  let o = oe(e);
  if (o === void 0) return;
  let u;
  try {
    u = Ye(o);
  } catch {
    return;
  }
  return o7e(u, r) ? u : void 0;
}
function Ne(e, r) {
  let o = $e(e),
    u = [];
  for (let n of e) {
    if (n.type !== "assistant") continue;
    let content_5 = n.message.content;
    if (!Array.isArray(content_5)) continue;
    for (let g of content_5) {
      if (g.type === "tool_use" && o.has(g.id)) continue;
      let f = Te(g, r);
      if (f !== void 0) u.push(f);
    }
  }
  return L(u);
}
function Me(paths) {
  let r = U(paths, o => Ae(o) !== Nc);
  return {
    source: "extract",
    summary: r > 0 ? `saved ${r} ${I(r, "memory", "memories")}` : "updated the memory index",
    paths: paths
  };
}
function We(e, r) {
  let o = new Map(),
    u = [];
  return {
    onMessage: s => {
      if (s.type === "assistant") {
        let content_6 = s.message.content;
        if (!Array.isArray(content_6)) return;
        for (let y of content_6) {
          let w = Te(y, r);
          if (y.type === "tool_use" && w !== void 0) o.set(y.id, w);
        }
        return;
      }
      if (s.type !== "user") return;
      let content_7 = s.message.content;
      if (!Array.isArray(content_7)) return;
      for (let f of content_7) {
        if (f.type !== "tool_result") continue;
        let y = o.get(f.tool_use_id);
        if (y === void 0) continue;
        if (o.delete(f.tool_use_id), f.is_error === !0) continue;
        u.push(y), ZRt(e, y, {
          requireReadBeforeWrite: !0
        });
      }
    },
    completedWritePaths: () => L(u)
  };
}
function uor(e) {
  if (a.CLAUDE_CODE_POST_TURN_MEMORY && t$e() === null) t("[extractMemories] CLAUDE_CODE_POST_TURN_MEMORY is set but CLAUDE_CODE_POST_TURN_MEMORY_CONFIG is missing or invalid; the pass is off"), p("ccr_memory_extract", "config_invalid");
  let r = new Set(),
    o,
    u = !1,
    n = !1,
    s = 0,
    g,
    f;
  function y(d) {
    return r.add(d), d.finally(() => r.delete(d));
  }
  let w = G?.createLaptopExtractRunner(e, y);
  function M() {
    let d = f;
    if (f = void 0, d) clearTimeout(d.timer);
    return d;
  }
  function k(d, context, promptIndex = CK()) {
    if (M(), d.idleFlushSeconds === 0) return;
    f = {
      timer: setTimeout(O, d.idleFlushSeconds * 1000).unref(),
      promptIndex: promptIndex,
      context: context
    };
  }
  function O() {
    let d = M();
    if (!d || n || Fle() || CK() !== d.promptIndex) return;
    y(v({
      context: d.context,
      trigger: "idle_flush",
      promptIndex: d.promptIndex
    }));
  }
  async function v({
    context: context_2,
    appendSystemMessage: appendSystemMessage,
    trigger: trigger,
    promptIndex: promptIndex_2 = CK()
  }) {
    let {
        messages: messages
      } = context_2,
      S = t$e(),
      message_count = ge(messages, o);
    if (re(messages, o, !!S)) {
      t("[extractMemories] skipping \u2014 conversation already wrote to memory in this range");
      let h = messages.at(-1);
      if (h?.uuid) o = h.uuid;
      i("tengu_extract_memories_skipped_direct_write", {
        message_count: message_count
      });
      return;
    }
    if (!ye(messages, o)) {
      t("[extractMemories] skipping \u2014 no user prose since last extraction");
      let h = messages.at(-1);
      if (h?.uuid) o = h.uuid;
      i("tengu_extract_memories_skipped_no_prose", {
        message_count: message_count
      });
      return;
    }
    let every_n_turns = S?.everyNTurns ?? x("tengu_bramble_lintel", null) ?? 1,
      cacheSafeParams = ZG(context_2);
    if (trigger === void 0) {
      if (s++, s < every_n_turns) {
        if (S) k(S, context_2, promptIndex_2);
        return;
      }
    }
    s = 0, n = !0;
    let J = Date.now(),
      Q;
    try {
      if (S) {
        if (CK() !== promptIndex_2) {
          t("[extractMemories] skipping (mcp) \u2014 a newer turn started");
          return;
        }
        t(`[extractMemories] starting (mcp, ${trigger ?? "cadence"}) \u2014 ${message_count} new messages`);
        let P = await gk({
            promptMessages: [Ce({
              content: S.instruction
            })],
            cacheSafeParams: cacheSafeParams,
            canUseTool: Fe(promptIndex_2),
            querySource: "extract_memories",
            forkLabel: "extract_memories",
            overrides: {
              mcpRequestMeta: ODo()
            },
            skipTranscript: !0,
            maxTurns: S.maxTurns,
            skipCacheWrite: LVe()
          }),
          ue = messages.at(-1);
        if (ue?.uuid) o = ue.uuid;
        i("tengu_extract_memories_extraction", {
          mode: c("mcp"),
          trigger: c(trigger ?? "cadence"),
          account_memory_line_rendered: !1,
          every_n_turns: every_n_turns,
          input_tokens: P.totalUsage.input_tokens,
          output_tokens: P.totalUsage.output_tokens,
          cache_read_input_tokens: P.totalUsage.cache_read_input_tokens,
          cache_creation_input_tokens: P.totalUsage.cache_creation_input_tokens,
          message_count: message_count,
          turn_count: U(P.messages, we => we.type === "assistant"),
          duration_ms: Date.now() - J
        }), _("ccr_memory_extract");
        return;
      }
      let h = $s();
      t(`[extractMemories] starting \u2014 ${message_count} new messages, memoryDir=${h}`);
      let j = zan(),
        Z = ux() || j,
        canUseTool = VEn(h, void 0, {
          fork: "extraction"
        }),
        ke = QIt(await GLe(h, Hn().signal, context_2.toolUseContext.storageV5)),
        account_memory_line_rendered = !1,
        ee = W?.isPromoterExtractorOn() === !0 ? W.typedTurnsInWindow(e, context_2.toolUseContext.session.id, messages, o) : [],
        content_8 = de(message_count, ke, Z, j, account_memory_line_rendered) + (W?.typedTurnsPromptBlock(ee) ?? ""),
        agentId = W !== null && ee.length > 0 ? Vm("extract_memories") : void 0,
        Se = agentId === void 0 ? void 0 : W?.registerExtractorFork(e, agentId, ee);
      Q = We(context_2.toolUseContext.readFileState, h);
      let T = await gk({
          promptMessages: [Ce({
            content: content_8
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
          skipCacheWrite: LVe(),
          onMessage: Q.onMessage
        }).finally(() => Se?.()),
        ie = messages.at(-1);
      if (ie?.uuid) o = ie.uuid;
      let N = Ne(T.messages, h),
        turn_count = U(T.messages, P => P.type === "assistant"),
        ae = T.totalUsage.input_tokens + T.totalUsage.cache_creation_input_tokens + T.totalUsage.cache_read_input_tokens,
        Re = ae > 0 ? (T.totalUsage.cache_read_input_tokens / ae * 100).toFixed(1) : "0.0";
      if (t(`[extractMemories] finished \u2014 ${N.length} files written, cache: read=${T.totalUsage.cache_read_input_tokens} create=${T.totalUsage.cache_creation_input_tokens} input=${T.totalUsage.input_tokens} (${Re}% hit)`), N.length > 0) t(`[extractMemories] memories saved: ${N.join(", ")}`);else t("[extractMemories] no memories saved this run");
      let H = N.filter(item => Ae(item) !== Nc),
        team_memories_saved = U(H, tN);
      if (i("tengu_extract_memories_extraction", {
        mode: c("file"),
        input_tokens: T.totalUsage.input_tokens,
        output_tokens: T.totalUsage.output_tokens,
        cache_read_input_tokens: T.totalUsage.cache_read_input_tokens,
        cache_creation_input_tokens: T.totalUsage.cache_creation_input_tokens,
        message_count: message_count,
        turn_count: turn_count,
        files_written: N.length,
        memories_saved: H.length,
        team_memories_saved: team_memories_saved,
        account_memory_line_rendered: account_memory_line_rendered,
        duration_ms: Date.now() - J
      }), t(`[extractMemories] writtenPaths=${N.length} memoryPaths=${H.length} appendSystemMessage defined=${appendSystemMessage != null}`), H.length > 0) {
        let P = DZt(H);
        P.teamCount = team_memories_saved, appendSystemMessage?.(P);
      }
      if (N.length > 0) await dKt(context_2.toolUseContext, Me(N));
      _("memory_extract");
    } catch (error) {
      t(`[extractMemories] error: ${error}`), i("tengu_extract_memories_error", {
        duration_ms: Date.now() - J,
        mode: c(S ? "mcp" : "file")
      }), m(S ? "ccr_memory_extract" : "memory_extract", "agent_error");
      let j = Q?.completedWritePaths() ?? [];
      if (j.length > 0) try {
        await dKt(context_2.toolUseContext, Me(j));
      } catch (error) {
        t(`[extractMemories] could not queue the notice for writes that landed before the error: ${l(error)}`);
      }
    } finally {
      n = !1;
      let h = g;
      if (g = void 0, h && every_n_turns <= 1) t("[extractMemories] running trailing extraction for stashed context"), await v({
        context: h.context,
        appendSystemMessage: h.appendSystemMessage,
        trigger: "trailing",
        promptIndex: h.promptIndex
      });else if (h && S) k(S, h.context, h.promptIndex);
    }
  }
  async function B(d, E) {
    if (d.toolUseContext.agentId) return;
    let A = w?.onTurnEnd(d, E);
    try {
      if (r$e() || Ee()) await z(d, E);
    } finally {
      await A;
    }
  }
  async function z(context_3, appendSystemMessage_2) {
    M();
    let A = t$e() !== null;
    if (A && (Oy() || Tr() || cA())) return;
    if (A && !(eFt(iFr(context_3.toolUseContext.options.mcpClients)) && context_3.toolUseContext.options.tools.some(item => zt(item, PDo)))) {
      t("[extractMemories] skipping (mcp) \u2014 CCR memory server not mounted");
      return;
    }
    if (!A && !x("tengu_passport_quail", !1) && !Ee()) return;
    if (!A && !ll()) return;
    if (!A && kz()) return;
    if (lr() !== null) return;
    if (n) {
      t("[extractMemories] extraction in progress \u2014 stashing for trailing run"), i("tengu_extract_memories_coalesced", {}), g = {
        context: context_3,
        appendSystemMessage: appendSystemMessage_2,
        promptIndex: CK()
      };
      return;
    }
    await v({
      context: context_3,
      appendSystemMessage: appendSystemMessage_2
    });
  }
  let C = K.of(e);
  C.extractor = (d, E) => y(B(d, E)), C.drainer = async (d = 60000) => {
    let E = Date.now() + d;
    O(), w?.disarmIdleFlush();
    while (r.size > 0 && Date.now() < E) await Promise.race([Promise.all(r).catch(() => {}), new Promise(A => setTimeout(A, E - Date.now()).unref())]), O();
  };
}
function Ee() {
  return W !== null && W.EXTRACTOR_RUNS_FOR_PROMOTER && W.isPromoterExtractorOn();
}
function Xqo(e) {
  return G !== null && G.isLaptopExtractDispatched(e);
}
function Jqo(e) {
  return G !== null && G.isLaptopExtractSync(e);
}
async function Qqo(e, r) {
  await K.of(e.toolUseContext.session.host).extractor?.(e, r);
}
async function Zqo(e, r) {
  await K.of(e).drainer(r);
}
export { dKt, GEn, o7e, VEn, uor, Xqo, Jqo, Qqo, Zqo };