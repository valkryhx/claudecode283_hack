// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  F,
  d,
  AG
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  z,
  Ee
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  aY
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  rr
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  za,
  v,
  fh,
  vl,
  uJ
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  dt,
  Yt
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  QQ,
  sA,
  A8t,
  Ie,
  Bt,
  Kpr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  OEr,
  Aue,
  pse
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  lm,
  YF,
  mZe
} from "B:/~BUN/root/chunk-nwv7r07s.js";
import {
  Ny
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  K8n,
  q8n,
  MGr,
  DGr,
  LGr,
  FUe,
  NGr
} from "B:/~BUN/root/chunk-pcg5y2vq.js";
import {
  sTt,
  sZs,
  gVt,
  iZs
} from "B:/~BUN/root/chunk-kvmw05zs.js";
import {
  OS,
  $g
} from "B:/~BUN/root/chunk-kgvnwy91.js";
import {
  Uf
} from "B:/~BUN/root/chunk-zy4xrndc.js";
import {
  Pv,
  yg,
  jf
} from "B:/~BUN/root/chunk-m1zmpfya.js";

function K() {
  return v("tengu_onyx_plover", null)
}

function tgn() {
  let e = K();
  return e?.enabled === !0 || e?.available === !0
}

function xEt() {
  if (!tgn()) return !1;
  let e = yt().autoDreamEnabled;
  if (e !== void 0) return e;
  return K()?.enabled === !0
}
class Z {
  runner = null
}
var B = new W(() => new Z);
var le = "## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.",
  de = `### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;

function Q(e, r, o, y = !1, c = !1, s = !1) {
  return `# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${mZe}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${y?`
${le}
`:""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${lm}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- If a \`sessions/\` subdirectory exists, review recent entries there

## Phase 2 \u2014 Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now
2. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 \u2014 Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${c?` The ${Pv} / ${yg} / ${jf} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.`:""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${lm}\` so it stays under ${YF} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${de}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o?`

## Additional context

${o}`:""}`
}
var ue = 30;

function Y(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "dream"
}

function ee(e, r) {
  let o = OS("dream"),
    y = {
      ...$g(o, "dream", "dreaming"),
      type: "dream",
      status: "running",
      skipTranscript: !0,
      phase: "starting",
      sessionsReviewing: r.sessionsReviewing,
      filesTouched: [],
      turns: [],
      abortController: r.abortController,
      priorMtime: r.priorMtime,
      ...r.storageV5 !== void 0 && {
        storageV5: r.storageV5
      }
    };
  return e.register(y), o
}

function te(e, r, o, y) {
  y.update(e, (c) => {
    let s = new Set(c.filesTouched),
      n = o.filter((a) => !s.has(a) && s.add(a));
    if (r.text === "" && r.toolUseCount === 0 && n.length === 0) return c;
    return {
      ...c,
      phase: n.length > 0 ? "updating" : c.phase,
      filesTouched: n.length > 0 ? [...c.filesTouched, ...n] : c.filesTouched,
      turns: c.turns.slice(-(ue - 1)).concat(r)
    }
  })
}

function re(e, r) {
  r.update(e, (o) => ({
    ...o,
    status: "completed",
    endTime: Date.now(),
    notified: !0,
    abortController: void 0
  })), g("task_dream"), za(e, "completed", {
    skipTranscript: !0,
    ambient: !0
  })
}

function oe(e, r) {
  r.update(e, (o) => ({
    ...o,
    status: "failed",
    endTime: Date.now(),
    notified: !0,
    abortController: void 0
  })), m("task_dream", "task_dream_failed"), za(e, "failed", {
    skipTranscript: !0,
    ambient: !0
  })
}
var w = null,
  ce = 600000,
  pe = new RegExp(`^\\s*(?:${DGr})\\b`, "i"),
  se = {
    minHours: 24,
    minSessions: 5
  };

function fe() {
  let e = v("tengu_onyx_plover", null);
  return {
    minHours: typeof e?.minHours === "number" && Number.isFinite(e.minHours) && e.minHours > 0 ? e.minHours : se.minHours,
    minSessions: typeof e?.minSessions === "number" && Number.isFinite(e.minSessions) && e.minSessions > 0 ? e.minSessions : se.minSessions
  }
}

function he() {
  if (rr() !== null) return !1;
  if (aY()) return !1;
  if (!fh()) return !1;
  if (Aue()) return !1;
  return xEt()
}

function ge() {
  return !1
}

function xXs(e) {
  let r = 0,
    o = !1,
    y = new Set;
  B.of(e).runner = async function(s, n) {
    let a = fe(),
      u = ge();
    if (!u && !he()) return;
    let E;
    try {
      E = await sTt(void 0, s.toolUseContext.storageV5)
    } catch (i) {
      t(`[autoDream] readLastConsolidatedAt failed: ${d(i)}`);
      return
    }
    let O = (Date.now() - E) / 3600000;
    if (!u && O < a.minHours) return;
    let q = Date.now() - r;
    if (!u && q < ce) {
      t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(q/1000)}s ago`);
      return
    }
    r = Date.now();
    let p;
    try {
      p = await iZs(E, s.toolUseContext.storageV5)
    } catch (i) {
      t(`[autoDream] listSessionsTouchedSince failed: ${d(i)}`);
      return
    }
    let ae = z();
    if (p = p.filter((i) => i !== ae), !u && p.length < a.minSessions) {
      t(`[autoDream] skip \u2014 ${p.length} sessions since last consolidation, need ${a.minSessions}`), l("tengu_auto_dream_skipped", {
        reason: b("sessions"),
        session_count: p.length,
        min_required: a.minSessions
      });
      return
    }
    let N = LGr(s.toolUseContext.getAppState().toolPermissionContext, uJ());
    if (N !== void 0) {
      if (t(`[autoDream] skip \u2014 ${q8n(N)} would refuse memory writes`), l("tengu_auto_dream_skipped", {
          reason: b("permission_rule")
        }), n !== void 0) {
        let i = MGr(e, N, vl());
        if (i !== void 0) n(Bt(i, "warning"))
      }
      return
    }
    let D;
    if (u) D = E;
    else {
      try {
        D = await sZs(s.toolUseContext.storageV5)
      } catch (i) {
        t(`[autoDream] lock acquire failed: ${d(i)}`);
        return
      }
      if (D === null) {
        l("tengu_auto_dream_skipped", {
          reason: b("lock")
        });
        return
      }
    }
    let S = vl(),
      M = void 0,
      h = M === "unplaced" || M === "capped" ? void 0 : M;
    if (h === "newer" || h !== void 0 && "unreadable" in h) {
      if (!u) await gVt(D, s.toolUseContext.storageV5);
      if (h !== "newer") {
        if (t(`[autoDream] skipped: the memory items could not be read (cause: ${h.unreadable}); the warning above says why and what resumes consolidation`), l("tengu_auto_dream_skipped", {
            reason: b("items_unreadable")
          }), w !== null && n !== void 0 && !y.has(h.unreadable)) y.add(h.unreadable), n?.(Bt(await w.unreadableItemsNotice(h.unreadable, S), "warning"));
        return
      }
      if (t("[autoDream] skip \u2014 newer item record"), l("tengu_auto_dream_skipped", {
          reason: b("record_newer")
        }), w !== null && n !== void 0 && !o) o = !0, n?.(Bt(w.NEWER_RECORD_NOTICE, "warning"));
      return
    }
    let I = pse();
    t(`[autoDream] firing \u2014 ${O.toFixed(1)}h since last, ${p.length} sessions to review`), l("tengu_auto_dream_fired", {
      hours_since: Math.round(O),
      sessions_since: p.length,
      team_memory_enabled: I
    });
    let {
      taskRegistry: x
    } = s.toolUseContext, C = new AbortController, R = ee(x, {
      sessionsReviewing: p.length,
      priorMtime: D,
      abortController: C,
      storageV5: s.toolUseContext.storageV5
    }), L = "fork";
    try {
      let i = Ny(Ee()),
        G = `

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${p.length}):
${p.map((_)=>`- ${_}`).join(`
`)}`,
        we = !1,
        ne = Q(S, i, G, I, OEr(), !1),
        ie = _e(R, x, S),
        H = new Map,
        j = new Set,
        X = !1,
        J = !1,
        V = !1,
        A;
      try {
        A = await sA({
          promptMessages: [Ie({
            content: ne
          })],
          cacheSafeParams: QQ(s),
          canUseTool: NGr(S, h !== void 0 ? w?.keptItemsOf(h) : void 0, {
            fork: "dream",
            onWriteAllowed: (_, U) => H.set(U, _)
          }),
          querySource: "auto_dream",
          forkLabel: "auto_dream",
          skipTranscript: !0,
          overrides: {
            abortController: C
          },
          onMessage: (_) => {
            if (ie(_), ye(_, j), _.type === "assistant") X = _.isApiErrorMessage === !0
          },
          skipCacheWrite: A8t()
        }), J = !0, V = !C.signal.aborted && !X
      } finally {
        let _ = new Set([...H].filter(([k]) => !V || !j.has(k)).map(([, k]) => k)),
          U = new Set([...H].filter(([k]) => V && j.has(k)).map(([, k]) => k));
        if (w !== null && M === "capped") await w.deferCappedRunWrites({
          memoryDir: S,
          dreamWrote: _,
          mayHaveWritten: U
        });
        if (w !== null && h !== void 0) {
          let k = await w.settleDreamItems({
            memoryDir: S,
            before: h,
            dreamWrote: _,
            mayHaveWritten: U
          });
          if ((k.skipped || k.failed) && J && !C.signal.aborted && !u && await w.claimLockGiveBack(S)) await gVt(D, s.toolUseContext.storageV5)
        }
      }
      L = "completion", re(R, x);
      let T = s.toolUseContext.taskRegistry.get(R),
        me = Y(T) ? T.filesTouched.length : 0;
      if (Y(T) && T.filesTouched.length > 0) n?.({
        ...Kpr(T.filesTouched),
        verb: "Improved"
      }), await K8n(s.toolUseContext, {
        source: "dream",
        summary: `consolidated ${T.filesTouched.length} ${P(T.filesTouched.length,"memory file")}`,
        paths: T.filesTouched
      });
      t(`[autoDream] completed \u2014 cache: read=${A.totalUsage.cache_read_input_tokens} created=${A.totalUsage.cache_creation_input_tokens}`), l("tengu_auto_dream_completed", {
        cache_read: A.totalUsage.cache_read_input_tokens,
        cache_created: A.totalUsage.cache_creation_input_tokens,
        output: A.totalUsage.output_tokens,
        sessions_reviewed: p.length,
        files_touched_count: me,
        team_memory_enabled: I,
        account_memory_line_rendered: !1
      })
    } catch (i) {
      if (C.signal.aborted) {
        t("[autoDream] aborted by user");
        return
      }
      if (t(`[autoDream] ${L} failed: ${d(i)}`), l("tengu_auto_dream_failed", {
          phase: f(L),
          error_class: AG(F(i))
        }), L === "fork") oe(R, x), await gVt(D, s.toolUseContext.storageV5)
    }
  }
}

function ye(e, r) {
  if (e.type !== "user" || e.toolDenialKind !== void 0 || typeof e.message.content === "string") return;
  for (let o of e.message.content)
    if (o.type === "tool_result" && o.is_error === !0) r.add(o.tool_use_id)
}

function _e(e, r, o) {
  return (y) => {
    if (y.type !== "assistant") return;
    let c = "",
      s = 0,
      n = [];
    for (let a of y.message.content)
      if (a.type === "text") c += a.text;
      else if (a.type === "tool_use") {
      if (s++, a.name === dt || a.name === Yt) {
        let u = a.input;
        if (typeof u.file_path === "string") n.push(u.file_path)
      } else if (Uf.includes(a.name)) {
        let u = a.input;
        if (typeof u.command === "string" && pe.test(u.command))
          for (let E of u.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g)) n.push(E[0].replace(/^["']|["']$/g, ""))
      }
    }
    te(e, {
      text: c.trim(),
      toolUseCount: s
    }, n.filter((a) => FUe(a, o)), r)
  }
}
async function PXs(e, r) {
  await B.of(e.toolUseContext.session.host).runner?.(e, r)
}
export {
  tgn,
  xEt,
  xXs,
  PXs
};
