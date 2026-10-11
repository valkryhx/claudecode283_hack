// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jn } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { WI } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { HF } from "B:/~BUN/root/chunk-06ra9xdn.js";
import { Ks } from "B:/~BUN/root/chunk-1652axk8.js";
import { readdir as g, stat as h } from "fs/promises";
import { basename as ie, join as p } from "path";
function P(s) {
  let n = HF(s);
  return n !== void 0 && jn(n) ? n : void 0;
}
async function eJr(s, n, projectPath, a, budget, ownWorktrees) {
  let projectKey = H() && a !== void 0 ? P(s) : void 0;
  if (a !== void 0 && projectKey !== void 0) {
    let t = new Map();
    try {
      await Ks(cursor => a.listEntries({
        namespace: "transcript",
        projectKey: projectKey
      }, {
        skipScopeStats: !0,
        ...(n ? {} : {
          skipKeyStats: !0
        }),
        ...(cursor !== void 0 && {
          cursor: cursor
        })
      }), i => {
        for (let e of i) {
          if (e.kind !== "key" || e.key.namespace !== "transcript") continue;
          let sessionId = WI(e.key.sessionId);
          if (!sessionId) continue;
          if (n && e.mtimeMs === void 0) continue;
          let mtime = n ? Math.trunc(e.mtimeMs ?? 0) : 0,
            l = t.get(sessionId);
          if (l !== void 0) {
            if (mtime > l.mtime) l.mtime = mtime;
            continue;
          }
          t.set(sessionId, {
            sessionId: sessionId,
            filePath: p(s, `${e.key.sessionId}.jsonl`),
            mtime: mtime,
            projectPath: projectPath,
            ownWorktrees: ownWorktrees
          });
        }
      }, budget !== void 0 ? {
        budget: budget
      } : void 0);
    } catch {}
    return [...t.values()];
  }
  let m;
  try {
    m = await g(s);
  } catch {
    return [];
  }
  return (await Promise.all(m.map(async item => {
    if (!item.endsWith(".jsonl")) return null;
    let sessionId_2 = WI(item.slice(0, -6));
    if (!sessionId_2) return null;
    let filePath = p(s, item);
    if (!n) return {
      sessionId: sessionId_2,
      filePath: filePath,
      mtime: 0,
      projectPath: projectPath,
      ownWorktrees: ownWorktrees
    };
    try {
      let r = await h(filePath);
      return {
        sessionId: sessionId_2,
        filePath: filePath,
        mtime: r.mtime.getTime(),
        projectPath: projectPath,
        ownWorktrees: ownWorktrees
      };
    } catch {
      return null;
    }
  }))).filter(item => item !== null);
}
export { eJr };