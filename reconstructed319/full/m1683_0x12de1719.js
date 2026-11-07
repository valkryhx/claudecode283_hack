// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Hr,
  zR,
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Om
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  eg,
  j1t
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  qa
} from "B:/~BUN/root/chunk-qzcyr88d.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readdir as E,
  readFile as fe
} from "fs/promises";
import {
  isAbsolute as h,
  join as m,
  relative as w,
  sep as f
} from "path";

function M(i) {
  let e = w(Om(), i);
  if (e === "" || e.startsWith(`..${f}`) || e === ".." || h(e)) return null;
  let t = e.split(f);
  return t.length < 4 || t[2] !== "subagents" ? null : t
}

function q9s(i) {
  let e = M(i),
    t = e?.at(-1);
  if (!e || !t?.startsWith("agent-") || !t.endsWith(".jsonl")) return null;
  let r = t.slice(6, -6),
    o = e.slice(3, -1);
  if (!zR([e[0], e[1], r]) || o.length > 0 && !zR(o)) return null;
  let a = Ve.transcript(e[0], e[1], r, o.length > 0 ? o : void 0);
  return eg(a) === void 0 ? a : null
}
async function Y9s(i, e, {
  rejectUnlistable: t = !1,
  withLinks: r = !1
} = {}) {
  let o = X() && e !== void 0 ? T(i) : null;
  if (e !== void 0 && o !== null) return v(e, o, i, U, t);
  let a = [];
  async function u(d) {
    let l;
    try {
      l = await E(d, {
        withFileTypes: !0
      })
    } catch (s) {
      if (t && !K(s)) throw s;
      return
    }
    for (let s of l) {
      let c = r && s.isSymbolicLink();
      if ((s.isFile() || c) && s.name.startsWith("agent-") && s.name.endsWith(".jsonl")) {
        let g = s.name.slice(6, -6);
        a.push({
          agentId: g,
          filePath: m(d, s.name),
          ...c && {
            isLink: c
          }
        })
      } else if (s.isDirectory()) await u(m(d, s.name))
    }
  }
  return await u(i), a
}

function T(i) {
  let e = w(Om(), i);
  if (e === "" || e.startsWith(`..${f}`) || h(e)) return null;
  let t = e.split(f);
  if (t.length !== 3 || t[2] !== "subagents" || !zR([t[0], t[1]])) return null;
  let r = {
    namespace: "transcript",
    projectKey: t[0],
    sessionId: t[1]
  };
  return j1t(r) === void 0 ? r : null
}
var U = 1e4;
async function v(i, e, t, r, o) {
  let a = [],
    u = [e],
    d = new Set([""]),
    l = 0;
  try {
    while (u.length > 0) {
      if (++l > r) throw Error("sub-agent listing incomplete");
      let s = u.shift(),
        c = [];
      if ((await qa((p) => i.listEntries(s, {
          skipKeyStats: !0,
          skipScopeStats: !0,
          ...p !== void 0 && {
            cursor: p
          }
        }), (p) => {
          for (let n of p)
            if (n.kind === "key" && n.key.namespace === "transcript" && n.key.agentId !== void 0 && Hr(n.key.agentId) && (n.key.agentRelPath === void 0 || zR(n.key.agentRelPath))) a.push({
              agentId: n.key.agentId,
              filePath: m(t, ...n.key.agentRelPath ?? [], `agent-${n.key.agentId}.jsonl`)
            });
            else if (n.kind === "scope" && n.scope.namespace === "transcript" && n.scope.agentRelPath !== void 0 && zR(n.scope.agentRelPath) && !d.has(n.scope.agentRelPath.join("/"))) {
            let y = {
              ...e,
              agentRelPath: n.scope.agentRelPath
            };
            if (j1t(y) === void 0) d.add(n.scope.agentRelPath.join("/")), c.push(y)
          }
        })).status !== "done") throw Error("sub-agent listing incomplete");
      u.unshift(...c)
    }
  } catch (s) {
    if (o) throw s;
    return []
  }
  return a
}
export {
  q9s,
  Y9s
};
