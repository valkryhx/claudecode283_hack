// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pr,
  hB
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  H,
  z,
  Mxe,
  Ee,
  Vs,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  Hr
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  GR,
  KSt
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  qa
} from "B:/~BUN/root/chunk-qzcyr88d.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readdir as d
} from "fs/promises";
import {
  basename as u,
  dirname as p,
  join as i
} from "path";

function op() {
  return i(Ue(), "projects")
}

function Wq(t) {
  return p(t) === op() ? u(t) : void 0
}

function Qks(t) {
  if (typeof t === "string") return Wq(t);
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
var c = new W(() => new g);

function Ny(t) {
  let e = c.of(H().host),
    n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = i(op(), GR(t));
  return e.cacheProjectDir(t, r), r
}

function LGe() {
  let t = Vs();
  if (t !== null) return Ny(t);
  return KSt() ?? Ny(Ee())
}

function gee() {
  return Mxe() ?? LGe()
}

function bp() {
  return i(gee(), `${z()}.jsonl`)
}

function Zks() {
  return gee()
}

function evs(t, e) {
  c.of(H().host).setAgentTranscriptSubdir(t, e)
}

function Lho(t) {
  c.of(H().host).clearAgentTranscriptSubdir(t)
}

function lht() {
  return i(gee(), z(), "subagents")
}

function M7e(t) {
  return Em(t)
}

function Em(t) {
  let e = c.of(H().host).agentTranscriptSubdirs.get(t),
    n = e ? i(lht(), e) : lht();
  return i(n, `agent-${t}.jsonl`)
}

function gFn(t) {
  return hB(t) ? Em(Pr(t)) : void 0
}
async function VLe(t) {
  let e = Wq(gee());
  if (X() && t !== void 0 && e !== void 0) return f(t, e, z());
  if (q()) return [];
  let n;
  try {
    n = await d(lht(), {
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
    return (await qa((a) => t.listEntries({
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
        if (s.kind === "key" && s.key.namespace === "transcript" && s.key.agentId !== void 0 && s.key.agentRelPath === void 0 && Hr(s.key.agentId)) r.push(s.key.agentId)
    })).status === "done" ? r : []
  } catch {
    return []
  }
}

function tvs(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let o = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) n[r.identity.agentId] = o
  }
  return n
}
export {
  op,
  Wq,
  Qks,
  Ny,
  LGe,
  gee,
  bp,
  Zks,
  evs,
  Lho,
  lht,
  M7e,
  Em,
  gFn,
  VLe,
  tvs
};
