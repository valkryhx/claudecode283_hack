// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ne,
  zo
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  Te
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  tQ
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  vt,
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  sTn
} from "B:/~BUN/root/chunk-mxaybm01.js";
import {
  jf
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  UA,
  gk,
  Ce
} from "B:/~BUN/root/chunk-3jyp964r.js";

function bWe() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (zo(e)) return !1;
  if (Ne(e)) return !0;
  if (Te()) return !1;
  if (Je()?.awaySummaryEnabled === !1) return !1;
  return !0
}

function y() {
  let e = a.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return x("tengu_harbor_moth", !1)
}

function mSt(e, n) {
  if (!n.onMetadataChanged) return;
  if (vt() || !sTn() || !y()) return;
  if (e.startedForTurnEnd) return;
  e.startedForTurnEnd = !0, g(e, n)
}

function Dor(e) {
  e.reset()
}
async function g(e, n) {
  e.inFlight?.abort();
  let r = new AbortController;
  e.inFlight = r;
  let o = await gSt(r.signal);
  if (r.signal.aborted) return;
  if (o.kind !== "ok") {
    if (o.kind !== "no-turn") m("ccr_recap_generate", o.kind);
    return
  }
  if (n.getState() === "running") {
    t("[awaySummary] ccr recap dropped: new turn already running");
    return
  }
  if (n.notifyMetadataChanged({
      recap: o.text
    }), o.capped) p("ccr_recap_generate", "capped");
  else _("ccr_recap_generate")
}
var S = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.",
  f = 400;
async function gSt(e, n) {
  let r = UA();
  if (!r && n) {
    if (e.aborted) return {
      kind: "aborted"
    };
    try {
      r = await n()
    } catch (i) {
      return t(`[awaySummary] fallback params rebuild failed: ${i}`), {
        kind: "failed"
      }
    }
    if (e.aborted) return {
      kind: "aborted"
    }
  }
  if (!r) return t("[awaySummary] no CacheSafeParams saved, skipping"), {
    kind: "no-turn"
  };
  let o = new AbortController;
  e.addEventListener("abort", () => o.abort(), {
    once: !0
  });
  try {
    let {
      messages: i
    } = await gk({
      promptMessages: [Ce({
        content: S
      })],
      cacheSafeParams: r,
      overrides: {
        abortController: o
      },
      canUseTool: async () => ({
        behavior: "deny",
        message: "Away summary cannot use tools",
        decisionReason: {
          type: "other",
          reason: "away_summary"
        }
      }),
      querySource: "away_summary",
      forkLabel: "away_summary",
      maxTurns: 1,
      skipCacheWrite: !0,
      skipTranscript: !0
    });
    if (e.aborted) return {
      kind: "aborted"
    };
    let u = i.find((c) => c.type === "assistant" && c.isApiErrorMessage);
    if (u) return {
      kind: "api-error",
      text: l([u], !0)
    };
    let s = l(i, !1),
      d = s.length > f;
    if (d) {
      let c = tQ(s, f);
      t(`[awaySummary] recap capped from ${s.length} to ${c.length} chars`), s = c
    }
    return s ? {
      kind: "ok",
      text: s,
      capped: d
    } : {
      kind: "failed"
    }
  } catch (i) {
    if (e.aborted) return {
      kind: "aborted"
    };
    return t(`[awaySummary] generation failed: ${i}`), {
      kind: "failed"
    }
  }
}

function l(e, n) {
  return jf(e.flatMap((r) => r.type === "assistant" && (n || !r.isApiErrorMessage) ? r.message.content : []).filter((r) => r.type === "text").map((r) => ("text" in r) ? r.text : "").join("")).trim()
}
export {
  bWe,
  mSt,
  Dor,
  gSt
};
