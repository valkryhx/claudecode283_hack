// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _n } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ji } from "B:/~BUN/root/chunk-nggrknsv.js";
import { ge, mn, Vo, ec, sr, St, hg, Fp, Ld } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { h9n } from "B:/~BUN/root/chunk-pystvv3m.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
var R = ["manifest_invalid", "disabled_by_default", "identity_unverified", "archive_not_probed", "will_not_load"];
function $qo(e) {
  let t = 0,
    n = 0;
  for (let s of e) {
    if (s.with_only) continue;
    if (n += s.weight, s.passed) t += s.weight;
  }
  return n > 0 ? t / n : 0;
}
function _Wr(e) {
  if (e.length === 0) return {
    score: 0,
    passRate: 0
  };
  let score = e.reduce((acc, item) => acc + item.score, 0) / e.length,
    passRate = F(e, s => s.score >= 1) / e.length;
  return {
    score: score,
    passRate: passRate
  };
}
function Uqo(e) {
  let t = [],
    n = e.cases.map(item => ({
      ...item,
      name: _n(item.name)
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
    if (n.error) return _n(n.error);
  }
  if (t !== null) {
    let n = t.name,
      s = e.advisories?.find(l => l.grader === n),
      a = e.runs.some(item => item.graders.some(item => item.name === n && item.passed));
    if (s !== void 0 && !a) return _n(s.text);
  }
  return t ? _n(`${t.name}: ${t.explanation}`) : null;
}
function o(e, t) {
  let n = ie(e);
  return n > t ? `${e} ` : e + ji(" ", t - n);
}
function SWt(e, t, partial_reason, claude_version, plugins, concurrency) {
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
  return St({
    score: mn(),
    passed: Vo(),
    turns: mn(),
    costUsd: mn(),
    judgeCostUsd: mn(),
    durationSeconds: mn().optional(),
    startedAt: ge().optional(),
    error: ge().nullable(),
    tracePath: ge(),
    skippedPaidGraders: Vo(),
    aborted: St({
      server: ge(),
      tool: ge(),
      reason: ge()
    }).optional(),
    mocks: St({
      servers: sr(St({
        server: ge(),
        kind: Ld(["shadow", "standalone"]),
        withheld: Fp(!0).optional(),
        replayPinned: mn().optional(),
        tools: sr(St({
          tool: ge(),
          responder: Ld(["fixed", "agent"])
        }))
      })),
      warnings: sr(ge()),
      calls: St({
        total: mn(),
        errors: mn(),
        unmocked: sr(St({
          tool: ge(),
          count: mn()
        })),
        costUsd: mn().optional(),
        replay: St({
          hits: mn(),
          misses: mn()
        }).optional()
      })
    }).optional(),
    graders: sr(St({
      name: ge(),
      passed: Vo(),
      weight: mn(),
      explanation: ge(),
      withOnly: Vo(),
      scored: Vo().optional(),
      judgeVotes: sr(Vo()).optional(),
      evidence: ge().optional()
    }))
  });
}
function E() {
  return St({
    name: ge(),
    dir: ge(),
    source: ge(),
    promptMarkdown: ge(),
    model: ge().optional(),
    runsPerCase: mn(),
    timeoutSeconds: mn(),
    maxTurns: mn(),
    graders: sr(St({
      name: ge(),
      type: ge(),
      weight: mn(),
      graderMarkdown: ge().optional(),
      config: hg(ge(), ec())
    })),
    arms: St({
      with: sr(f()),
      without: sr(f()).optional()
    }),
    advisories: sr(ge()).optional(),
    aggregates: St({
      score: mn(),
      passRate: mn(),
      scoreWithout: mn().optional(),
      passRateWithout: mn().optional(),
      delta: mn().optional()
    })
  });
}
function Bqo() {
  return C(Ld(R).optional());
}
function C(problem) {
  return St({
    schemaVersion: Fp(schemaVersion),
    claudeVersion: ge(),
    startedAt: ge(),
    durationSeconds: mn(),
    costUsd: mn(),
    partial: Vo(),
    partialReason: Ld(["cost_ceiling", "interrupted", "auth_failed"]).optional(),
    suite: St({
      root: ge(),
      ablation: Ld(["none", "with-without"]),
      modelOverride: ge().optional(),
      judgeModel: ge().optional(),
      caseFilter: ge().optional(),
      tagFilters: sr(ge()).optional(),
      threshold: mn(),
      concurrency: mn().int().positive().optional(),
      pluginId: ge().optional(),
      plugins: sr(St({
        name: ge(),
        version: ge().optional(),
        path: ge(),
        problem: problem
      }))
    }),
    cases: sr(E()),
    aggregates: St({
      casesTotal: mn(),
      casesPassed: mn(),
      overallScore: mn(),
      overallPassRate: mn(),
      meanDelta: mn().optional()
    })
  });
}
var P = ["ablation", "aborted", "advisories", "aggregates", "arms", "calls", "caseFilter", "cases", "casesPassed", "casesTotal", "claudeVersion", "concurrency", "config", "costUsd", "count", "delta", "dir", "durationSeconds", "error", "errors", "evidence", "explanation", "graderMarkdown", "graders", "hits", "judgeCostUsd", "judgeModel", "judgeVotes", "kind", "maxTurns", "meanDelta", "misses", "mocks", "model", "modelOverride", "name", "overallPassRate", "overallScore", "partial", "partialReason", "passRate", "passRateWithout", "passed", "path", "pluginId", "plugins", "problem", "promptMarkdown", "reason", "replay", "replayPinned", "responder", "root", "runsPerCase", "schemaVersion", "score", "scoreWithout", "scored", "server", "servers", "skippedPaidGraders", "source", "startedAt", "suite", "tagFilters", "threshold", "timeoutSeconds", "tool", "tools", "total", "tracePath", "turns", "type", "unmocked", "version", "warnings", "weight", "with", "withOnly", "withheld", "without"],
  j = ["config"],
  W = h9n(P),
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
function jqo(e) {
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
    b = cases.map(item => item.aggregates.delta).filter(item => item !== void 0);
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
      casesPassed: F(cases, d => d.aggregates.score >= threshold),
      overallScore: LSt(cases.map(item => item.aggregates.score)),
      overallPassRate: LSt(cases.map(item => item.aggregates.passRate)),
      meanDelta: b.length > 0 ? LSt(b) : void 0
    }
  };
}
function LSt(e) {
  return e.length === 0 ? 0 : e.reduce((acc, item) => acc + item, 0) / e.length;
}
export { $qo, _Wr, Uqo, SWt, Bqo, jqo, LSt };