// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Vr,
  t8
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  j,
  K,
  eye,
  ke,
  ii,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  z,
  mre
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Cr
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  cE,
  hZe
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  pa
} from "B:/~BUN/root/chunk-wg7rg6k5.js";
import {
  readdir as d
} from "fs/promises";
import {
  basename as u,
  dirname as p,
  join as i
} from "path";

function Xp() {
  return i(Pe(), "projects")
}

function Aj(t) {
  return p(t) === Xp() ? u(t) : void 0
}

function dRo(t) {
  if (typeof t === "string") return Aj(t);
  let {
    scope: e
  } = t;
  return e.namespace === "transcript" && e.sessionId === void 0 ? e.projectKey : void 0
}
class g {
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
var c = new z(() => new g);

function cb(t) {
  let e = c.of(j().host),
    n = e.projectDirCache.get(t);
  if (n !== void 0) return mre("config_home"), n;
  let r = i(Xp(), cE(t));
  return e.cacheProjectDir(t, r), r
}

function UOe() {
  let t = ii();
  if (t !== null) return cb(t);
  return hZe() ?? cb(ke())
}

function g3() {
  return eye() ?? UOe()
}

function Lu() {
  return i(g3(), `${K()}.jsonl`)
}

function cRo() {
  return g3()
}

function uRo(t, e) {
  c.of(j().host).setAgentTranscriptSubdir(t, e)
}

function aPr(t) {
  c.of(j().host).clearAgentTranscriptSubdir(t)
}

function Bon() {
  return i(g3(), K(), "subagents")
}

function w1e(t) {
  return ig(t)
}

function ig(t) {
  let e = c.of(j().host).agentTranscriptSubdirs.get(t),
    n = e ? i(Bon(), e) : Bon();
  return i(n, `agent-${t}.jsonl`)
}

function jon(t) {
  return t8(t) ? ig(Vr(t)) : void 0
}
async function E9e(t) {
  let e = Aj(g3());
  if (W() && t !== void 0 && e !== void 0) return f(t, e, K());
  if (de()) return [];
  let n;
  try {
    n = await d(Bon(), {
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
    return (await pa((a) => t.listEntries({
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
        if (s.kind === "key" && s.key.namespace === "transcript" && s.key.agentId !== void 0 && s.key.agentRelPath === void 0 && Cr(s.key.agentId)) r.push(s.key.agentId)
    })).status === "done" ? r : []
  } catch {
    return []
  }
}

function pRo(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let o = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) n[r.identity.agentId] = o
  }
  return n
}
export {
  Xp,
  Aj,
  dRo,
  cb,
  UOe,
  g3,
  Lu,
  cRo,
  uRo,
  aPr,
  Bon,
  w1e,
  ig,
  jon,
  E9e,
  pRo
};
