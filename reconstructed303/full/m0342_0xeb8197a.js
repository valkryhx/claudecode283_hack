// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Cr,
  r0,
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  Vm
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  Bf
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Gm
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  basename as u,
  dirname as c,
  isAbsolute as l,
  join as p,
  relative as k,
  sep as f
} from "path";
import {
  isAbsolute as S,
  sep as a
} from "path";

function g(e) {
  let n = process.cwd();
  return n.endsWith(a) ? n + e : n + a + e
}

function bIt(e) {
  return (n) => e.hostFiles.realPath(Bf.workspace(n === "" || S(n) ? n : g(n)), {
    native: !0
  })
}

function wC(e) {
  return e === void 0 ? void 0 : {
    hoverRestOn: W(),
    realPath: bIt(e)
  }
}

function m(e) {
  return e.namespace !== "transcript" || e.journal !== void 0 || e.sessionJournal !== void 0 ? void 0 : e.agentId ?? null
}

function Vp(e, n) {
  if (!W() || n === void 0) return;
  if (typeof e !== "string") return m(e.key) === null ? {
    backend: n,
    key: e.key
  } : void 0;
  if (!e.endsWith(".jsonl")) return;
  let t = c(e);
  if (c(t) !== Vm()) return;
  let r = u(t),
    o = u(e, ".jsonl");
  if (e !== p(Vm(), r, `${o}.jsonl`)) return;
  let d = Be.transcript(r, o);
  return Gm(d) === void 0 ? {
    backend: n,
    key: d
  } : void 0
}

function nws(e, n) {
  if (!W() || n === void 0) return;
  if (typeof e !== "string") return typeof m(e.key) === "string" ? {
    backend: n,
    key: e.key
  } : void 0;
  let t = k(Vm(), e);
  if (t === "" || t === ".." || t.startsWith(`..${f}`) || l(t)) return;
  let r = t.split(f);
  if (e !== p(Vm(), ...r)) return;
  let o = r.at(-1);
  if (r.length < 4 || r[2] !== "subagents" || o === void 0 || !o.startsWith("agent-") || !o.endsWith(".jsonl")) return;
  let d = o.slice(6, -6),
    i = r.slice(3, -1);
  if (!r0([r[0], r[1], d]) || i.length > 0 && !r0(i)) return;
  let s = Be.transcript(r[0], r[1], d, i.length > 0 ? i : void 0);
  return Gm(s) === void 0 ? {
    backend: n,
    key: s
  } : void 0
}

function nj(e) {
  if (!W() || e === void 0) return;
  return {
    backend: e,
    transcriptKey: Be.transcript,
    isKeySegment: Cr,
    realWorkspacePath: bIt(e)
  }
}

function vC(e) {
  return e === void 0 ? void 0 : {
    source: e,
    hoverRestOn: W()
  }
}
export {
  bIt,
  wC,
  Vp,
  nws,
  nj,
  vC
};
