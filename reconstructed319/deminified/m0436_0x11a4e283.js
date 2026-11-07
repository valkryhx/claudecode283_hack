// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Hr as isKeySegment, zR, Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { Om } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { og } from "B:/~BUN/root/chunk-2pp12te6.js";
import { eg } from "B:/~BUN/root/chunk-1g25msn4.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { basename as u, dirname as c, isAbsolute as l, join as p, relative as k, sep as f } from "path";
import { isAbsolute as S, sep as a } from "path";
function g(e) {
  let n = process.cwd();
  return n.endsWith(a) ? n + e : n + a + e;
}
function OXt(e) {
  return n => e.hostFiles.realPath(og.workspace(n === "" || S(n) ? n : g(n)), {
    native: !0
  });
}
function FP(e) {
  return e === void 0 ? void 0 : {
    hoverRestOn: X(),
    realPath: OXt(e)
  };
}
function m(e) {
  return e.namespace !== "transcript" || e.journal !== void 0 || e.sessionJournal !== void 0 ? void 0 : e.agentId ?? null;
}
function Vp(e, backend) {
  if (!X() || backend === void 0) return;
  if (typeof e !== "string") return m(e.key) === null ? {
    backend: backend,
    key: e.key
  } : void 0;
  if (!e.endsWith(".jsonl")) return;
  let t = c(e);
  if (c(t) !== Om()) return;
  let r = u(t),
    o = u(e, ".jsonl");
  if (e !== p(Om(), r, `${o}.jsonl`)) return;
  let key = Ve.transcript(r, o);
  return eg(key) === void 0 ? {
    backend: backend,
    key: key
  } : void 0;
}
function jRi(e, backend_2) {
  if (!X() || backend_2 === void 0) return;
  if (typeof e !== "string") return typeof m(e.key) === "string" ? {
    backend: backend_2,
    key: e.key
  } : void 0;
  let t = k(Om(), e);
  if (t === "" || t === ".." || t.startsWith(`..${f}`) || l(t)) return;
  let r = t.split(f);
  if (e !== p(Om(), ...r)) return;
  let o = r.at(-1);
  if (r.length < 4 || r[2] !== "subagents" || o === void 0 || !o.startsWith("agent-") || !o.endsWith(".jsonl")) return;
  let d = o.slice(6, -6),
    i = r.slice(3, -1);
  if (!zR([r[0], r[1], d]) || i.length > 0 && !zR(i)) return;
  let key_2 = Ve.transcript(r[0], r[1], d, i.length > 0 ? i : void 0);
  return eg(key_2) === void 0 ? {
    backend: backend_2,
    key: key_2
  } : void 0;
}
function Rx(backend_3) {
  if (!X() || backend_3 === void 0) return;
  return {
    backend: backend_3,
    transcriptKey: Ve.transcript,
    isKeySegment: isKeySegment,
    realWorkspacePath: OXt(backend_3)
  };
}
function wb(source) {
  return source === void 0 ? void 0 : {
    source: source,
    hoverRestOn: X()
  };
}
export { OXt, FP, Vp, jRi, Rx, wb };