// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Cr as isKeySegment, r0, Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { Vm } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { Bf } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Gm } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { basename as u, dirname as c, isAbsolute as l, join as p, relative as k, sep as f } from "path";
import { isAbsolute as S, sep as a } from "path";
function g(e) {
  let n = process.cwd();
  return n.endsWith(a) ? n + e : n + a + e;
}
function bIt(e) {
  return n => e.hostFiles.realPath(Bf.workspace(n === "" || S(n) ? n : g(n)), {
    native: !0
  });
}
function wC(e) {
  return e === void 0 ? void 0 : {
    hoverRestOn: W(),
    realPath: bIt(e)
  };
}
function m(e) {
  return e.namespace !== "transcript" || e.journal !== void 0 || e.sessionJournal !== void 0 ? void 0 : e.agentId ?? null;
}
function Vp(e, backend) {
  if (!W() || backend === void 0) return;
  if (typeof e !== "string") return m(e.key) === null ? {
    backend: backend,
    key: e.key
  } : void 0;
  if (!e.endsWith(".jsonl")) return;
  let t = c(e);
  if (c(t) !== Vm()) return;
  let r = u(t),
    o = u(e, ".jsonl");
  if (e !== p(Vm(), r, `${o}.jsonl`)) return;
  let key = Be.transcript(r, o);
  return Gm(key) === void 0 ? {
    backend: backend,
    key: key
  } : void 0;
}
function nws(e, backend_2) {
  if (!W() || backend_2 === void 0) return;
  if (typeof e !== "string") return typeof m(e.key) === "string" ? {
    backend: backend_2,
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
  let key_2 = Be.transcript(r[0], r[1], d, i.length > 0 ? i : void 0);
  return Gm(key_2) === void 0 ? {
    backend: backend_2,
    key: key_2
  } : void 0;
}
function nj(backend_3) {
  if (!W() || backend_3 === void 0) return;
  return {
    backend: backend_3,
    transcriptKey: Be.transcript,
    isKeySegment: isKeySegment,
    realWorkspacePath: bIt(backend_3)
  };
}
function vC(source) {
  return source === void 0 ? void 0 : {
    source: source,
    hoverRestOn: W()
  };
}
export { bIt, wC, Vp, nws, nj, vC };