// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Cr
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  lI,
  uGe
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  Aj
} from "B:/~BUN/root/chunk-9080897a.js";
import {
  h$n,
  L7t
} from "B:/~BUN/root/chunk-9y4mcm7b.js";
import {
  Vp,
  vC
} from "B:/~BUN/root/chunk-k798mzph.js";
import {
  pa
} from "B:/~BUN/root/chunk-wg7rg6k5.js";
import {
  readdir as P,
  stat as w
} from "fs/promises";
import {
  basename as ee,
  join as g
} from "path";

function S(s) {
  let e = Aj(s);
  return e !== void 0 && Cr(e) ? e : void 0
}
async function KYr(s, e, o, d, a, u) {
  let f = W() && d !== void 0 ? S(s) : void 0;
  if (d !== void 0 && f !== void 0) {
    let i = new Map;
    try {
      await pa((r) => d.listEntries({
        namespace: "transcript",
        projectKey: f
      }, {
        skipScopeStats: !0,
        ...e ? {} : {
          skipKeyStats: !0
        },
        ...r !== void 0 && {
          cursor: r
        }
      }), (r) => {
        for (let t of r) {
          if (t.kind !== "key" || t.key.namespace !== "transcript") continue;
          let l = lI(t.key.sessionId);
          if (!l) continue;
          if (e && t.mtimeMs === void 0) continue;
          let m = e ? Math.trunc(t.mtimeMs ?? 0) : 0,
            p = i.get(l);
          if (p !== void 0) {
            if (m > p.mtime) p.mtime = m;
            continue
          }
          i.set(l, {
            sessionId: l,
            filePath: g(s, `${t.key.sessionId}.jsonl`),
            mtime: m,
            projectPath: o,
            ownWorktrees: u
          })
        }
      }, a !== void 0 ? {
        budget: a
      } : void 0)
    } catch {}
    return [...i.values()]
  }
  let n;
  try {
    n = await P(s)
  } catch {
    return []
  }
  return (await Promise.all(n.map(async (i) => {
    if (!i.endsWith(".jsonl")) return null;
    let r = lI(i.slice(0, -6));
    if (!r) return null;
    let t = g(s, i);
    if (!e) return {
      sessionId: r,
      filePath: t,
      mtime: 0,
      projectPath: o,
      ownWorktrees: u
    };
    try {
      let l = await w(t);
      return {
        sessionId: r,
        filePath: t,
        mtime: l.mtime.getTime(),
        projectPath: o,
        ownWorktrees: u
      }
    } catch {
      return null
    }
  }))).filter((i) => i !== null)
}
var h = 32;
async function uJo(s, e, o) {
  let d = await KYr(s, !1, void 0, o);
  for (let a = 0; a < d.length; a += h) {
    let f = (await Promise.all(d.slice(a, a + h).map(async (n) => {
      let c = await uGe(n.filePath, vC(Vp(n.filePath, o)));
      return c !== null && h$n(c.tail) === e && await L7t(n.filePath, c.head, c.tail, c.size, o) ? n.filePath : void 0
    }))).find((n) => n !== void 0);
    if (f !== void 0) return f
  }
  return
}
export {
  KYr,
  uJo
};
