// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { jn, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { _d, FF } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { mkdir as g, readdir as k, readFile as h, writeFile as y } from "fs/promises";
import { basename as S, dirname as u, join as p } from "path";
function P(r) {
  return p(m(), `${r}.json`);
}
function m() {
  let r = FF();
  return p(r, Y(), "workflows");
}
function uO(r) {
  let a = FF();
  return p(a, Y(), "subagents", "workflows", r);
}
function ETn() {
  let r = FF();
  return u(r) === _d() ? S(r) : void 0;
}
function W(r, a, n) {
  return Ae.sidecar(r, a, ["workflows", `${n}.json`]);
}
async function G7r(runId, a, n) {
  try {
    let i = {
        runId: runId,
        timestamp: new Date().toISOString(),
        ...a
      },
      l = P(runId),
      s = H() && n ? ETn() : void 0,
      o = Y();
    if (await g(u(l), {
      recursive: !0,
      mode: 448
    }), H() && n && s !== void 0 && jn(`${runId}.json`)) {
      let e = await n.write(W(s, o, runId), b(i), {
        publishDiscipline: "inPlace",
        mode: 384
      });
      if (!e.ok) t(`Failed to write workflow snapshot ${runId}: ${e.error.code}`);
      return;
    }
    await y(l, b(i), {
      encoding: "utf8",
      mode: 384
    });
  } catch (error) {
    t(`Failed to write workflow snapshot ${runId}: ${error instanceof Error ? error.message : error}`);
  }
}
function d(r, a) {
  let runId_2 = r.runId ?? a;
  return {
    runId: runId_2,
    taskId: r.taskId ?? runId_2,
    timestamp: r.timestamp ?? new Date(0).toISOString(),
    script: r.script ?? "",
    scriptPath: r.scriptPath,
    args: r.args,
    result: r.result,
    agentCount: r.agentCount ?? 0,
    logs: r.logs ?? [],
    durationMs: r.durationMs ?? 0,
    error: r.error,
    summary: typeof r.summary === "string" ? r.summary : void 0,
    workflowName: typeof r.workflowName === "string" ? r.workflowName : void 0,
    title: r.title,
    status: r.status ?? (r.error ? "failed" : "completed"),
    startTime: r.startTime ?? (Date.parse(r.timestamp ?? "") || 0),
    phases: r.phases,
    defaultModel: r.defaultModel,
    workflowProgress: r.workflowProgress ?? [],
    totalTokens: r.totalTokens ?? 0,
    totalToolCalls: r.totalToolCalls ?? 0
  };
}
async function psr(r) {
  let a = r ? ETn() : void 0;
  if (r && a !== void 0) return j(r, a);
  let n = m(),
    i;
  try {
    i = await k(n);
  } catch {
    return [];
  }
  let l = (await Promise.all(i.filter(item => item.endsWith(".json")).map(async item => {
    try {
      let o = await h(p(n, item), "utf8"),
        e = J(o);
      return d(e, item.replace(/\.json$/, ""));
    } catch (error) {
      return t(`Failed to parse workflow snapshot ${item}: ${error instanceof Error ? error.message : error}`), null;
    }
  }))).filter(item => item !== null);
  return l.sort((itemA, itemB) => itemB.startTime - itemA.startTime), l;
}
async function j(r, projectKey) {
  let n = {
      namespace: "sidecar",
      projectKey: projectKey,
      sessionId: Y(),
      relPath: ["workflows"]
    },
    i = [],
    cursor;
  do {
    let o = await r.listEntries(n, cursor === void 0 ? void 0 : {
      cursor: cursor
    });
    if (!o.ok) return t(`Failed to list workflow snapshots: ${o.error.code}`), [];
    for (let e of o.value.items) {
      if (e.kind !== "key" || e.key.namespace !== "sidecar") continue;
      if ((e.key.relPath.at(-1) ?? "").endsWith(".json")) i.push(e.key);
    }
    cursor = o.value.cursor;
  } while (cursor !== void 0);
  let s = (await Promise.all(i.map(async item => {
    let e = item.relPath.at(-1) ?? "";
    try {
      let f = await r.read([item]);
      if (!f.ok) return t(`Failed to parse workflow snapshot ${e}: ${f.error.code}`), null;
      let c = f.value.items[0];
      if (!c?.found) return t(`Failed to parse workflow snapshot ${e}: deleted between list and read`), null;
      let w = J(Buffer.from(c.value).toString("utf8"));
      return d(w, e.replace(/\.json$/, ""));
    } catch (error) {
      return t(`Failed to parse workflow snapshot ${e}: ${error instanceof Error ? error.message : error}`), null;
    }
  }))).filter(item => item !== null);
  return s.sort((itemA, itemB) => itemB.startTime - itemA.startTime), s;
}
export { uO, ETn, G7r, psr };