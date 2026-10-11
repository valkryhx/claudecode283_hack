// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jn as isKeySegment, sA, Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { zu } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { Gu } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { em } from "B:/~BUN/root/chunk-339q6g5w.js";
import { isAbsolute as g, sep as a } from "path";
function l(e) {
  let n = process.cwd();
  return n.endsWith(a) ? n + e : n + a + e;
}
function Est(e) {
  return n => e.hostFiles.realPath(Gu.workspace(n === "" || g(n) ? n : l(n)), {
    native: !0
  });
}
function Cg(e) {
  return e === void 0 ? void 0 : {
    hoverRestOn: H(),
    realPath: Est(e)
  };
}
import { basename as c, dirname as u, isAbsolute as S, join as p, relative as m, sep as f } from "path";
function Ff(e, backend) {
  if (!H() || backend === void 0) return;
  if (!e.endsWith(".jsonl")) return;
  let t = u(e);
  if (u(t) !== zu()) return;
  let r = c(t),
    o = c(e, ".jsonl");
  if (e !== p(zu(), r, `${o}.jsonl`)) return;
  let key = Ae.transcript(r, o);
  return em(key) === void 0 ? {
    backend: backend,
    key: key
  } : void 0;
}
function l_o(e, backend_2) {
  if (!H() || backend_2 === void 0) return;
  let t = m(zu(), e);
  if (t === "" || t === ".." || t.startsWith(`..${f}`) || S(t)) return;
  let r = t.split(f);
  if (e !== p(zu(), ...r)) return;
  let o = r.at(-1);
  if (r.length < 4 || r[2] !== "subagents" || o === void 0 || !o.startsWith("agent-") || !o.endsWith(".jsonl")) return;
  let i = o.slice(6, -6),
    d = r.slice(3, -1);
  if (!sA([r[0], r[1], i]) || d.length > 0 && !sA(d)) return;
  let key_2 = Ae.transcript(r[0], r[1], i, d.length > 0 ? d : void 0);
  return em(key_2) === void 0 ? {
    backend: backend_2,
    key: key_2
  } : void 0;
}
function uV(backend_3) {
  if (!H() || backend_3 === void 0) return;
  return {
    backend: backend_3,
    transcriptKey: Ae.transcript,
    isKeySegment: isKeySegment,
    realWorkspacePath: Est(backend_3)
  };
}
function dv(source) {
  return source === void 0 ? void 0 : {
    source: source,
    hoverRestOn: H()
  };
}
export { Est, Cg, Ff, l_o, uV, dv };