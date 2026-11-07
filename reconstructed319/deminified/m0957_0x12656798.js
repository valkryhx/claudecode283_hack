// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { Hr, Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { op, gee } from "B:/~BUN/root/chunk-ke150ry1.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { mkdir as g, readdir as k, readFile as h, writeFile as y } from "fs/promises";
import { basename as S, dirname as u, join as p } from "path";
function P(r) {
  return p(m(), `${r}.json`);
}
function m() {
  let r = gee();
  return p(r, z(), "workflows");
}
function xK(r) {
  let a = gee();
  return p(a, z(), "subagents", "workflows", r);
}
function S4r() {
  let r = gee();
  return u(r) === op() ? S(r) : void 0;
}
function W(r, a, n) {
  return Ve.sidecar(r, a, ["workflows", `${n}.json`]);
}
async function Woi(runId, a, n) {
  try {
    let i = {
        runId: runId,
        timestamp: new Date().toISOString(),
        ...a
      },
      l = P(runId),
      s = X() && n ? S4r() : void 0,
      o = z();
    if (await g(u(l), {
      recursive: !0,
      mode: 448
    }), X() && n && s !== void 0 && Hr(`${runId}.json`)) {
      let e = await n.write(W(s, o, runId), _(i), {
        publishDiscipline: "inPlace",
        mode: 384
      });
      if (!e.ok) t(`Failed to write workflow snapshot ${runId}: ${e.error.code}`);
      return;
    }
    await y(l, _(i), {
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
async function LVo(r) {
  let a = r ? S4r() : void 0;
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
        e = ee(o);
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
      sessionId: z(),
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
      let w = ee(Buffer.from(c.value).toString("utf8"));
      return d(w, e.replace(/\.json$/, ""));
    } catch (error) {
      return t(`Failed to parse workflow snapshot ${e}: ${error instanceof Error ? error.message : error}`), null;
    }
  }))).filter(item => item !== null);
  return s.sort((itemA, itemB) => itemB.startTime - itemA.startTime), s;
}
export { xK, S4r, Woi, LVo };