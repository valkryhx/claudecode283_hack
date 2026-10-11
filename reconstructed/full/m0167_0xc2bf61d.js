// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j,
  Y,
  fre,
  we,
  hm
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  jn
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  nS,
  qUe
} from "B:/~BUN/root/chunk-zv4xh2j0.js";
import {
  Ks
} from "B:/~BUN/root/chunk-1652axk8.js";
import {
  readdir as d
} from "fs/promises";
import {
  basename as p,
  dirname as u,
  join as i
} from "path";

function _d() {
  return i(Se(), "projects")
}

function HF(t) {
  return u(t) === _d() ? p(t) : void 0
}
class c {
  projectDirCache = new Map;
  agentTranscriptSubdirs = new Map;
  cacheProjectDir(t, e) {
    this.projectDirCache.set(t, e)
  }
  clearProjectDirCache() {
    this.projectDirCache.clear()
  }
  setAgentTranscriptSubdir(t, e) {
    this.agentTranscriptSubdirs.set(t, e)
  }
  clearAgentTranscriptSubdir(t) {
    this.agentTranscriptSubdirs.delete(t)
  }
}
var g = new q(() => new c);

function xh(t) {
  let e = g.of(j().host),
    n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = i(_d(), nS(t));
  return e.cacheProjectDir(t, r), r
}

function mct() {
  let t = hm();
  if (t !== null) return xh(t);
  return qUe() ?? xh(we())
}

function FF() {
  return fre() ?? mct()
}

function Rd() {
  return i(FF(), `${Y()}.jsonl`)
}

function x0r(t, e) {
  g.of(j().host).setAgentTranscriptSubdir(t, e)
}

function p2n(t) {
  g.of(j().host).clearAgentTranscriptSubdir(t)
}

function JDt() {
  return i(FF(), Y(), "subagents")
}

function Ig(t) {
  let e = g.of(j().host).agentTranscriptSubdirs.get(t),
    n = e ? i(JDt(), e) : JDt();
  return i(n, `agent-${t}.jsonl`)
}
async function PHe(t) {
  let e = HF(FF());
  if (H() && t !== void 0 && e !== void 0) return f(t, e, Y());
  let n;
  try {
    n = await d(JDt(), {
      withFileTypes: !0
    })
  } catch {
    return []
  }
  return n.filter((r) => r.isFile() && r.name.startsWith("agent-") && r.name.endsWith(".jsonl")).map((r) => r.name.slice(6, -6))
}
async function f(t, e, n) {
  let r = [];
  try {
    return (await Ks((a) => t.listEntries({
      namespace: "transcript",
      projectKey: e,
      sessionId: n
    }, {
      skipKeyStats: !0,
      skipScopeStats: !0,
      ...a !== void 0 && {
        cursor: a
      }
    }), (a) => {
      for (let s of a)
        if (s.kind === "key" && s.key.namespace === "transcript" && s.key.agentId !== void 0 && s.key.agentRelPath === void 0 && jn(s.key.agentId)) r.push(s.key.agentId)
    })).status === "done" ? r : []
  } catch {
    return []
  }
}

function P0r(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let o = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) n[r.identity.agentId] = o
  }
  return n
}
export {
  _d,
  HF,
  xh,
  mct,
  FF,
  Rd,
  x0r,
  p2n,
  JDt,
  Ig,
  PHe,
  P0r
};
