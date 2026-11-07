// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Hr
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  QU,
  kae
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  Wq
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  chr,
  PPn
} from "B:/~BUN/root/chunk-kexqfgtm.js";
import {
  Vp,
  wb
} from "B:/~BUN/root/chunk-1b2nf93s.js";
import {
  qa
} from "B:/~BUN/root/chunk-qzcyr88d.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readdir as P,
  stat as w
} from "fs/promises";
import {
  basename as ee,
  join as g
} from "path";

function S(s) {
  let e = Wq(s);
  return e !== void 0 && Hr(e) ? e : void 0
}
async function Sjo(s, e, o, d, a, u) {
  let f = X() && d !== void 0 ? S(s) : void 0;
  if (d !== void 0 && f !== void 0) {
    let i = new Map;
    try {
      await qa((r) => d.listEntries({
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
          let l = QU(t.key.sessionId);
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
    let r = QU(i.slice(0, -6));
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
async function aZs(s, e, o) {
  let d = await Sjo(s, !1, void 0, o);
  for (let a = 0; a < d.length; a += h) {
    let f = (await Promise.all(d.slice(a, a + h).map(async (n) => {
      let c = await kae(n.filePath, wb(Vp(n.filePath, o)));
      return c !== null && chr(c.tail) === e && await PPn(n.filePath, c.head, c.tail, c.size, o) ? n.filePath : void 0
    }))).find((n) => n !== void 0);
    if (f !== void 0) return f
  }
  return
}
export {
  Sjo,
  aZs
};
