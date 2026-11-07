// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Hr } from "B:/~BUN/root/chunk-myfamxtp.js";
import { QU, kae } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { Wq } from "B:/~BUN/root/chunk-ke150ry1.js";
import { chr, PPn } from "B:/~BUN/root/chunk-kexqfgtm.js";
import { Vp, wb } from "B:/~BUN/root/chunk-1b2nf93s.js";
import { qa } from "B:/~BUN/root/chunk-qzcyr88d.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { readdir as P, stat as w } from "fs/promises";
import { basename as ee, join as g } from "path";
function S(s) {
  let e = Wq(s);
  return e !== void 0 && Hr(e) ? e : void 0;
}
async function Sjo(s, e, projectPath, d, budget, ownWorktrees) {
  let projectKey = X() && d !== void 0 ? S(s) : void 0;
  if (d !== void 0 && projectKey !== void 0) {
    let i = new Map();
    try {
      await qa(cursor => d.listEntries({
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
          let sessionId = QU(t.key.sessionId);
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
    let sessionId_2 = QU(item.slice(0, -6));
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
async function aZs(s, e, o) {
  let d = await Sjo(s, !1, void 0, o);
  for (let a = 0; a < d.length; a += h) {
    let f = (await Promise.all(d.slice(a, a + h).map(async item => {
      let c = await kae(item.filePath, wb(Vp(item.filePath, o)));
      return c !== null && chr(c.tail) === e && (await PPn(item.filePath, c.head, c.tail, c.size, o)) ? item.filePath : void 0;
    }))).find(item => item !== void 0);
    if (f !== void 0) return f;
  }
  return;
}
export { Sjo, aZs };