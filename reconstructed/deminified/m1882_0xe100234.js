// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ys } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { lgn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { de, fn, ho, Pc, Xn, lt, mg, qu, jl } from "B:/~BUN/root/chunk-8386ms9e.js";
var R = ["manifest_invalid", "disabled_by_default", "identity_unverified", "archive_not_probed", "will_not_load"];
function QKr(e) {
  let t = 0,
    n = 0;
  for (let s of e) {
    if (s.with_only) continue;
    if (n += s.weight, s.passed) t += s.weight;
  }
  return n > 0 ? t / n : 0;
}
function B9n(e) {
  if (e.length === 0) return {
    score: 0,
    passRate: 0
  };
  let score = e.reduce((acc, item) => acc + item.score, 0) / e.length,
    passRate = U(e, s => s.score >= 1) / e.length;
  return {
    score: score,
    passRate: passRate
  };
}
function ZKr(e) {
  let t = [],
    n = e.cases.map(item => ({
      ...item,
      name: Tn(item.name)
    })),
    s = Math.max(4, ...n.map(item => ie(item.name))),
    a = e.cases.some(item => item.runs_without !== void 0);
  if (a) t.push(o("CASE", s) + "  " + o("WITH", 6) + o("W/OUT", 6) + o("\u0394", 7) + o("RUNS", 5) + o("COST", 8) + "NOTES");else t.push(o("CASE", s) + "  " + o("SCORE", 6) + o("PASS%", 6) + o("RUNS", 5) + o("COST", 8) + "NOTES");
  for (let r of n) {
    let c = r.runs.length + (r.runs_without?.length ?? 0),
      g = r.runs.reduce((acc, item) => acc + item.cost_usd, 0) + (r.runs_without?.reduce((i, u) => i + u.cost_usd, 0) ?? 0),
      p = S(r);
    if (a) {
      let {
        score_without: score_without,
        delta: delta
      } = r;
      t.push(o(r.name, s) + "  " + o(r.score.toFixed(2), 6) + o(score_without !== void 0 ? score_without.toFixed(2) : "\u2014", 6) + o(delta !== void 0 ? _(delta) : "\u2014", 7) + o(String(c), 5) + o(`$${g.toFixed(2)}`, 8) + (p ?? ""));
    } else t.push(o(r.name, s) + "  " + o(r.score.toFixed(2), 6) + o(`${Math.round(r.pass_rate * 100)}%`, 6) + o(String(r.runs.length), 5) + o(`$${g.toFixed(2)}`, 8) + (p ?? ""));
  }
  t.push("");
  let l = e.partial ? ` \xB7 \u26A0 partial (${x[e.partial_reason ?? "interrupted"]})` : "";
  if (a) {
    let r = e.cases.filter(item => item.delta !== void 0);
    if (r.length > 0) {
      let c = r.reduce((acc, item) => acc + (item.delta ?? 0), 0) / r.length;
      return t.push(`${e.cases.length} case(s) \xB7 mean \u0394 ${_(c)} \xB7 ${e.duration_seconds}s \xB7 $${e.cost_usd.toFixed(2)}${l}`), t.join(`
`);
    }
  }
  return t.push(`${e.cases.length} case(s) \xB7 ${e.duration_seconds}s \xB7 $${e.cost_usd.toFixed(2)}${l}`), t.join(`
`);
}
function _(e) {
  return `${e > 0 ? "+" : ""}${e.toFixed(2)}`;
}
function S(e) {
  let t = null;
  for (let n of e.runs) {
    for (let s of n.graders) if (!s.passed && (!t || s.weight > t.weight)) t = s;
    if (n.error) return Tn(n.error);
  }
  if (t !== null) {
    let n = t.name,
      s = e.advisories?.find(l => l.grader === n),
      a = e.runs.some(item => item.graders.some(item => item.name === n && item.passed));
    if (s !== void 0 && !a) return Tn(s.text);
  }
  return t ? Tn(`${t.name}: ${t.explanation}`) : null;
}
function o(e, t) {
  let n = ie(e);
  return n > t ? `${e} ` : e + Ys(" ", t - n);
}
function pgt(e, t, partial_reason, claude_version, plugins, concurrency) {
  let cost_usd = e.reduce((acc, {
    report: report
  }) => acc + report.runs.reduce((acc, item) => acc + item.cost_usd, 0) + (report.runs_without?.reduce((p, i) => p + i.cost_usd, 0) ?? 0), 0);
  return {
    schema_version: "1.0",
    claude_version: claude_version,
    started_at: t.toISOString(),
    duration_seconds: Math.round((Date.now() - t.getTime()) / 1000),
    cost_usd: cost_usd,
    partial: partial_reason !== void 0,
    partial_reason: partial_reason,
    concurrency: concurrency,
    plugins: plugins,
    cases: e.map(item => item.report)
  };
}
var x = {
  interrupted: "interrupted",
  cost_ceiling: "cost ceiling hit",
  auth_failed: "stopped: authentication failed"
};
var schemaVersion = 1;
function f() {
  return lt({
    score: fn(),
    passed: ho(),
    turns: fn(),
    costUsd: fn(),
    judgeCostUsd: fn(),
    durationSeconds: fn().optional(),
    startedAt: de().optional(),
    error: de().nullable(),
    tracePath: de(),
    skippedPaidGraders: ho(),
    aborted: lt({
      server: de(),
      tool: de(),
      reason: de()
    }).optional(),
    mocks: lt({
      servers: Xn(lt({
        server: de(),
        kind: jl(["shadow", "standalone"]),
        withheld: qu(!0).optional(),
        replayPinned: fn().optional(),
        tools: Xn(lt({
          tool: de(),
          responder: jl(["fixed", "agent"])
        }))
      })),
      warnings: Xn(de()),
      calls: lt({
        total: fn(),
        errors: fn(),
        unmocked: Xn(lt({
          tool: de(),
          count: fn()
        })),
        costUsd: fn().optional(),
        replay: lt({
          hits: fn(),
          misses: fn()
        }).optional()
      })
    }).optional(),
    graders: Xn(lt({
      name: de(),
      passed: ho(),
      weight: fn(),
      explanation: de(),
      withOnly: ho(),
      scored: ho().optional(),
      judgeVotes: Xn(ho()).optional(),
      evidence: de().optional()
    }))
  });
}
function E() {
  return lt({
    name: de(),
    dir: de(),
    source: de(),
    promptMarkdown: de(),
    model: de().optional(),
    runsPerCase: fn(),
    timeoutSeconds: fn(),
    maxTurns: fn(),
    graders: Xn(lt({
      name: de(),
      type: de(),
      weight: fn(),
      graderMarkdown: de().optional(),
      config: mg(de(), Pc())
    })),
    arms: lt({
      with: Xn(f()),
      without: Xn(f()).optional()
    }),
    advisories: Xn(de()).optional(),
    aggregates: lt({
      score: fn(),
      passRate: fn(),
      scoreWithout: fn().optional(),
      passRateWithout: fn().optional(),
      delta: fn().optional()
    })
  });
}
function e4r() {
  return C(jl(R).optional());
}
function C(problem) {
  return lt({
    schemaVersion: qu(schemaVersion),
    claudeVersion: de(),
    startedAt: de(),
    durationSeconds: fn(),
    costUsd: fn(),
    partial: ho(),
    partialReason: jl(["cost_ceiling", "interrupted", "auth_failed"]).optional(),
    suite: lt({
      root: de(),
      ablation: jl(["none", "with-without"]),
      modelOverride: de().optional(),
      judgeModel: de().optional(),
      caseFilter: de().optional(),
      tagFilters: Xn(de()).optional(),
      threshold: fn(),
      concurrency: fn().int().positive().optional(),
      pluginId: de().optional(),
      plugins: Xn(lt({
        name: de(),
        version: de().optional(),
        path: de(),
        problem: problem
      }))
    }),
    cases: Xn(E()),
    aggregates: lt({
      casesTotal: fn(),
      casesPassed: fn(),
      overallScore: fn(),
      overallPassRate: fn(),
      meanDelta: fn().optional()
    })
  });
}
var P = ["ablation", "aborted", "advisories", "aggregates", "arms", "calls", "caseFilter", "cases", "casesPassed", "casesTotal", "claudeVersion", "concurrency", "config", "costUsd", "count", "delta", "dir", "durationSeconds", "error", "errors", "evidence", "explanation", "graderMarkdown", "graders", "hits", "judgeCostUsd", "judgeModel", "judgeVotes", "kind", "maxTurns", "meanDelta", "misses", "mocks", "model", "modelOverride", "name", "overallPassRate", "overallScore", "partial", "partialReason", "passRate", "passRateWithout", "passed", "path", "pluginId", "plugins", "problem", "promptMarkdown", "reason", "replay", "replayPinned", "responder", "root", "runsPerCase", "schemaVersion", "score", "scoreWithout", "scored", "server", "servers", "skippedPaidGraders", "source", "startedAt", "suite", "tagFilters", "threshold", "timeoutSeconds", "tool", "tools", "total", "tracePath", "turns", "type", "unmocked", "version", "warnings", "weight", "with", "withOnly", "withheld", "without"],
  j = ["config"],
  W = lgn(P),
  K = new Set(j);
function v(e) {
  return {
    score: e.score,
    passed: e.score >= 1,
    turns: e.turns,
    costUsd: e.cost_usd,
    judgeCostUsd: e.judge_cost_usd,
    durationSeconds: e.duration_seconds,
    startedAt: e.started_at,
    error: e.error,
    tracePath: e.trace_path,
    skippedPaidGraders: e.skipped_paid_graders ?? !1,
    ...(e.aborted && {
      aborted: e.aborted
    }),
    ...(e.mocks && {
      mocks: e.mocks
    }),
    graders: e.graders.map(item => ({
      name: item.name,
      passed: item.passed,
      weight: item.weight,
      explanation: item.explanation,
      withOnly: item.with_only ?? !1,
      scored: item.scored ?? !(item.with_only ?? !1),
      judgeVotes: item.judge_votes,
      evidence: item.evidence
    }))
  };
}
function A(e, t) {
  return {
    name: t.name,
    dir: t.dir,
    source: t.source,
    promptMarkdown: e.execution.prompt ?? "",
    model: e.execution.model,
    runsPerCase: e.runs,
    timeoutSeconds: e.execution.timeout_seconds,
    maxTurns: e.execution.max_turns,
    graders: e.graders.map(item => {
      let {
        name: name,
        type: type,
        weight: weight,
        ...config
      } = item;
      return {
        name: name,
        type: type,
        weight: weight,
        graderMarkdown: item.type === "llm" || item.type === "baseline" ? item.criteria : void 0,
        config: config
      };
    }),
    arms: {
      with: t.runs.map(v),
      without: t.runs_without?.map(v)
    },
    ...(t.advisories && {
      advisories: t.advisories.map(item => item.text)
    }),
    aggregates: {
      score: t.score,
      passRate: t.pass_rate,
      scoreWithout: t.score_without,
      passRateWithout: t.pass_rate_without,
      delta: t.delta
    }
  };
}
function t4r(e) {
  let {
      aggregate: aggregate,
      resolvedCases: resolvedCases,
      root: root,
      ablation: ablation,
      pluginId: pluginId,
      modelOverride: modelOverride,
      judgeModel: judgeModel,
      caseFilter: caseFilter,
      tagFilters: tagFilters,
      threshold: threshold
    } = e,
    cases = resolvedCases.map(({
      case_: case_,
      report: report_2
    }) => A(case_, report_2)),
    h = cases.map(item => item.aggregates.delta).filter(item => item !== void 0);
  return {
    schemaVersion: schemaVersion,
    claudeVersion: aggregate.claude_version,
    startedAt: aggregate.started_at,
    durationSeconds: aggregate.duration_seconds,
    costUsd: aggregate.cost_usd,
    partial: aggregate.partial,
    partialReason: aggregate.partial_reason,
    suite: {
      root: root,
      ablation: ablation,
      pluginId: pluginId,
      modelOverride: modelOverride,
      judgeModel: judgeModel,
      caseFilter: caseFilter,
      tagFilters: tagFilters,
      threshold: threshold,
      concurrency: aggregate.concurrency,
      plugins: aggregate.plugins.map(({
        name: name_2,
        version: version,
        path: path,
        problem: problem_2
      }) => ({
        name: name_2,
        ...(version !== void 0 && {
          version: version
        }),
        path: path,
        ...(problem_2 !== void 0 && {
          problem: problem_2
        })
      }))
    },
    cases: cases,
    aggregates: {
      casesTotal: cases.length,
      casesPassed: U(cases, d => d.aggregates.score >= threshold),
      overallScore: J9e(cases.map(item => item.aggregates.score)),
      overallPassRate: J9e(cases.map(item => item.aggregates.passRate)),
      meanDelta: h.length > 0 ? J9e(h) : void 0
    }
  };
}
function J9e(e) {
  return e.length === 0 ? 0 : e.reduce((acc, item) => acc + item, 0) / e.length;
}
export { QKr, B9n, ZKr, pgt, e4r, t4r, J9e };