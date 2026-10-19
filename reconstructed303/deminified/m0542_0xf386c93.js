// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Cr } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { lI, uGe } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { Aj } from "B:/~BUN/root/chunk-9080897a.js";
import { h$n, L7t } from "B:/~BUN/root/chunk-9y4mcm7b.js";
import { Vp, vC } from "B:/~BUN/root/chunk-k798mzph.js";
import { pa } from "B:/~BUN/root/chunk-wg7rg6k5.js";
import { readdir as P, stat as w } from "fs/promises";
import { basename as ee, join as g } from "path";
function S(s) {
  let e = Aj(s);
  return e !== void 0 && Cr(e) ? e : void 0;
}
async function KYr(s, e, projectPath, d, budget, ownWorktrees) {
  let projectKey = W() && d !== void 0 ? S(s) : void 0;
  if (d !== void 0 && projectKey !== void 0) {
    let i = new Map();
    try {
      await pa(cursor => d.listEntries({
        namespace: "transcript",
        projectKey: projectKey
      }, {
        skipScopeStats: !0,
        ...(e ? {} : {
          skipKeyStats: !0
        }),
        ...(cursor !== void 0 && {
          cursor: cursor
        })
      }), r => {
        for (let t of r) {
          if (t.kind !== "key" || t.key.namespace !== "transcript") continue;
          let sessionId = lI(t.key.sessionId);
          if (!sessionId) continue;
          if (e && t.mtimeMs === void 0) continue;
          let mtime = e ? Math.trunc(t.mtimeMs ?? 0) : 0,
            p = i.get(sessionId);
          if (p !== void 0) {
            if (mtime > p.mtime) p.mtime = mtime;
            continue;
          }
          i.set(sessionId, {
            sessionId: sessionId,
            filePath: g(s, `${t.key.sessionId}.jsonl`),
            mtime: mtime,
            projectPath: projectPath,
            ownWorktrees: ownWorktrees
          });
        }
      }, budget !== void 0 ? {
        budget: budget
      } : void 0);
    } catch {}
    return [...i.values()];
  }
  let n;
  try {
    n = await P(s);
  } catch {
    return [];
  }
  return (await Promise.all(n.map(async item => {
    if (!item.endsWith(".jsonl")) return null;
    let sessionId_2 = lI(item.slice(0, -6));
    if (!sessionId_2) return null;
    let filePath = g(s, item);
    if (!e) return {
      sessionId: sessionId_2,
      filePath: filePath,
      mtime: 0,
      projectPath: projectPath,
      ownWorktrees: ownWorktrees
    };
    try {
      let l = await w(filePath);
      return {
        sessionId: sessionId_2,
        filePath: filePath,
        mtime: l.mtime.getTime(),
        projectPath: projectPath,
        ownWorktrees: ownWorktrees
      };
    } catch {
      return null;
    }
  }))).filter(item => item !== null);
}
var h = 32;
async function uJo(s, e, o) {
  let d = await KYr(s, !1, void 0, o);
  for (let a = 0; a < d.length; a += h) {
    let f = (await Promise.all(d.slice(a, a + h).map(async item => {
      let c = await uGe(item.filePath, vC(Vp(item.filePath, o)));
      return c !== null && h$n(c.tail) === e && (await L7t(item.filePath, c.head, c.tail, c.size, o)) ? item.filePath : void 0;
    }))).find(item => item !== void 0);
    if (f !== void 0) return f;
  }
  return;
}
export { KYr, uJo };