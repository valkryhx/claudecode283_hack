// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { x, d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { zce, x8 } from "B:/~BUN/root/chunk-d8rhtyyx.js";
import { Wce } from "B:/~BUN/root/chunk-bvx12xr8.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Vi, uV, pl, Ry, Qa } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, J, Ey, S$, W_, BZe } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { jVt } from "B:/~BUN/root/chunk-vpngb77h.js";
import { o, M, oe, T, u, $e, Jr, fe, U, C, sT } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { createHash as de } from "crypto";
import { constants as S } from "fs";
import R from "path";
import { open as j } from "fs/promises";
import Q from "path";
var z = 120;
function F(e) {
  return e.length > z ? `${ne(e, z)}...` : e;
}
function af(e) {
  return BZe(_(F(e)));
}
function k6r(e) {
  if (typeof e === "string") return af(e);
  let t = _(e) ?? String(e);
  return t.length <= z ? BZe(t) : BZe(_(F(t)));
}
async function tw(e, t, r, i = []) {
  let n = Q.resolve(e, t),
    s = af(t),
    anchors = [e, ...i];
  if (Ry(t) && !pl(t) || Ry(n) && !pl(n)) throw new x(`${r}: ${s} is an automounter path (macOS /Network, or the bare /net root) \u2014 refusing it (a lookup there is a network request)`, "plugin eval: a repo-authored path is an automounter path \u2014 refusing it");
  let c = Qa(n) || Qa(t) && !Vi(n, e);
  if (Vi(t, e) && i.every(item => Vi(n, item)) && !c) throw new x(`${r}: ${s} is a network-reaching path (UNC / automount) \u2014 refusing it`, "plugin eval: a repo-authored path is network-reaching \u2014 refusing it");
  let m,
    y = await S$(W_, n, {
      anchors: anchors,
      surfaceNetworkRaw: !0,
      unreadableAncestry: "unverified",
      onOutcome: h => {
        if (h.kind === "resolved") m = h.path;
      }
    });
  if (y === Ey) throw new x(`${r}: ${s} passes through a component that cannot be examined (unreadable, a link or junction whose target does not exist, or a symlink chain too long to follow) \u2014 refusing it (it could not be vetted)`, "plugin eval: a repo-authored path has an unexaminable component \u2014 refusing it");
  if (y !== void 0) throw new x(`${r}: ${s} passes through a symlink to a network-reaching path (or a dotted one that cannot be vetted) \u2014 refusing it`, "plugin eval: a repo-authored path links to a network-reaching path \u2014 refusing it");
  if (m !== void 0 && uV(m)) throw new x(`${r}: ${s} leads to an automounter map directory (/net, /net/<host>; macOS /Network, /home) \u2014 refusing it (naming anything in it asks the automounter or a host)`, "plugin eval: a repo-authored path lands on an automounter map directory \u2014 refusing it");
}
import A from "path";
var ee = 8192,
  B = 50000000,
  te = /^[is]*$/;
function D(e) {
  let r = 0,
    i = 1,
    n = 0,
    s = !1,
    a = !1,
    c = !1;
  for (let l = 0; l < e.length; l++) {
    let p = e[l];
    if (p === "(" || p === ")" || p === "|") return {
      problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
    };
    if (p === "^") {
      if (l !== 0) return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      s = !0, a = !1, c = !1;
      continue;
    }
    if (p === "$") {
      if (l !== e.length - 1) return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      continue;
    }
    let b = null;
    if (p === "*") b = {
      lo: 0,
      hi: 1 / 0
    };else if (p === "+") b = {
      lo: 1,
      hi: 1 / 0
    };else if (p === "?") {
      if (c) {
        c = !1;
        continue;
      }
      b = {
        lo: 0,
        hi: 1
      };
    } else if (p === "{") {
      let g = /^\{(\d+)(?:,(\d*))?\}/.exec(e.slice(l));
      if (g) {
        let lo = Number(g[1]),
          hi = g[2] === void 0 ? lo : g[2] === "" ? 1 / 0 : Number(g[2]);
        if (hi < lo) return {
          problem: `quantifier ${g[0]} has max < min`
        };
        b = {
          lo: lo,
          hi: hi
        }, l += g[0].length - 1;
      }
    }
    if (b !== null) {
      if (!a) return {
        problem: "a quantifier must follow a single character, escape, or class"
      };
      if (n += (b.hi === 1 / 0 ? b.lo : b.hi) - 1, b.hi === 1 / 0) r++;else i *= b.hi - b.lo + 1;
      a = !1, c = !0;
      continue;
    }
    if (c = !1, p === "\\") {
      let g = e[l + 1];
      if (g === void 0) return {
        problem: "pattern ends with a lone backslash"
      };
      if (/[1-9]/.test(g) || g === "k") return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      if (a = g !== "b" && g !== "B", a) n++;
      l++;
      continue;
    }
    if (p === "[") {
      l++;
      while (l < e.length && e[l] !== "]") {
        if (e[l] === "\\") l++;
        l++;
      }
      if (l >= e.length) return {
        problem: "unterminated character class"
      };
      a = !0, n++;
      continue;
    }
    a = !0, n++;
  }
  if (i > B) return {
    problem: "too many optional/bounded repeats for an expect: guard"
  };
  let m = l => {
      let p = 1;
      for (let b = 1; b <= r; b++) p = p * (l + b) / b;
      return (s ? 1 : Math.max(1, l)) * p * i * (l + n);
    },
    maxSubject = 0,
    h = ee;
  while (maxSubject < h) {
    let l = Math.ceil((maxSubject + h) / 2);
    if (m(l) <= B) maxSubject = l;else h = l - 1;
  }
  if (maxSubject < 16) return {
    problem: "this combination of repeats leaves no useful subject length under the matching budget \u2014 use fewer quantifiers"
  };
  return {
    maxSubject: maxSubject,
    problem: null
  };
}
var re = new Set(["string", "number", "bool", "boolean", "object", "array"]);
function N(e, t) {
  let r = e;
  for (let i of t.split(".")) {
    if (r === null || typeof r !== "object") return;
    if (Array.isArray(r)) {
      if (!/^\d+$/.test(i)) return;
      r = r[Number(i)];
      continue;
    }
    r = Object.hasOwn(r, i) ? r[i] : void 0;
  }
  return r;
}
function Mkt(e, t, r = "") {
  for (let [i, n] of Object.entries(t)) {
    let s = r ? `${r}.${i}` : i,
      a = N(e, s),
      c = ie(a, n, s, e);
    if (c !== null) return c;
  }
  return null;
}
function ie(e, t, r, i) {
  if (Array.isArray(t)) return t.some(item => H(e, item)) ? null : `${r} = ${v(e)} is not one of [${t.join(", ")}]`;
  if (typeof t === "object" && t !== null) return Mkt(i, t, r);
  let n = q(t);
  if (n !== null) {
    let s = typeof e === "string" ? e : typeof e === "number" || typeof e === "boolean" ? String(e) : null,
      a = D(n.source);
    if (!("maxSubject" in a)) return `${r}: ${t} is not a usable guard (${a.problem})`;
    let maxSubject_2 = a.maxSubject;
    if (s !== null && s.length > maxSubject_2) return `${r} is ${s.length} characters, more than this /regex/ guard checks (${maxSubject_2})`;
    return s !== null && n.test(s) ? null : `${r} = ${v(e)} does not match ${t}`;
  }
  if (re.has(t)) {
    let s = t === "boolean" ? "bool" : t;
    return se(e) === s ? null : `${r} = ${v(e)} is not a ${t}`;
  }
  return H(e, t) ? null : `${r} = ${v(e)} is not "${t}"`;
}
function H(e, t) {
  if (typeof e === "string") return e === t;
  if (typeof e === "number" || typeof e === "boolean") return String(e) === t;
  return !1;
}
function q(e) {
  let t = /^\/(.+)\/([a-z]*)$/s.exec(e);
  if (!t) return null;
  return new RegExp(t[1] ?? "", t[2] ?? "");
}
function se(e) {
  if (Array.isArray(e)) return "array";
  if (e === null || e === void 0) return "missing";
  if (typeof e === "boolean") return "bool";
  return typeof e;
}
function v(e) {
  if (e === void 0) return "(missing)";
  let t = _(e);
  return t.length > 80 ? `${ne(t, 77)}...` : t;
}
var P = 32;
function E6r(e, t = "") {
  let r = [];
  if (t === "") {
    let i = X(e);
    if (i > P) return r.push(`expect: ${i} guards is more than the ${P} one responder may carry \u2014 every call checks each of them; keep the ones that catch a wrong call`), r;
  }
  for (let [i, n] of Object.entries(e)) {
    let s = t ? `${t}.${i}` : i;
    if (Array.isArray(n)) {
      if (n.length === 0) r.push(`expect.${s}: an empty list of allowed values can never be satisfied \u2014 list at least one`);
      continue;
    }
    if (typeof n === "object" && n !== null) {
      r.push(...E6r(n, s));
      continue;
    }
    if (/^\/.*\/[a-z]*$/s.test(n)) try {
      let a = q(n),
        c = a ? D(a.source) : null;
      if (a && !te.test(a.flags)) r.push(`expect.${s}: ${n} \u2014 only the i and s flags are supported in expect: guards`);else if (c && c.problem !== null) r.push(`expect.${s}: ${n} \u2014 ${c.problem}`);
    } catch (error) {
      r.push(`expect.${s}: invalid regular expression ${n} (${error instanceof Error ? error.message : String(error)}) \u2014 a value written /like this/ is read as a regex; for a literal that starts and ends with a slash, write a one-element list: ["${n}"]`);
    }
  }
  return r;
}
var ae = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/;
async function mor(e, t, r, i, n = Number.POSITIVE_INFINITY) {
  let reason = null,
    a = [],
    c = 0;
  for (let y of e.matchAll(/\{\{\s*(input\.[A-Za-z0-9_.-]+|file:(?:[^{}]|\{input\.[A-Za-z0-9_.-]+\})+?)\s*\}\}/g)) {
    a.push(e.slice(c, y.index)), c = y.index + y[0].length;
    let h = y[1] ?? "";
    if (h.startsWith("input.")) {
      let g = N(t, h.slice(6)),
        w = g === void 0 ? "" : typeof g === "string" ? g : _(g);
      a.push(w.length > n ? `${ne(w, n)}\u2026 [${w.length - n} more characters omitted]` : w);
      continue;
    }
    let l = h.slice(5).trim(),
      p = null;
    if (l = l.replace(/\{input\.([A-Za-z0-9_.-]+)\}/g, (g, w) => {
      let E = N(t, w),
        L = E === void 0 || E === null ? "" : String(E);
      if (!ae.test(L)) p = `{input.${w}} = ${v(E)} is not a plain file-name segment`;
      return L;
    }), p !== null) {
      reason ??= p;
      continue;
    }
    let b = A.resolve(r, l);
    if (!le(r, b)) {
      reason ??= `{{file:${l}}} names a path outside the mock's directory`;
      continue;
    }
    a.push(i(b).then(g => {
      if (typeof g !== "string") return reason ??= `{{file:${l}}}: ${g.problem}`, "";
      return g;
    }));
  }
  a.push(e.slice(c));
  let m = await Promise.all(a);
  if (reason !== null) return {
    ok: !1,
    reason: reason
  };
  return {
    ok: !0,
    text: m.join("")
  };
}
function le(e, t) {
  let r = A.relative(e, t);
  return r !== "" && !r.startsWith("..") && !A.isAbsolute(r);
}
function X(e) {
  let t = 0;
  for (let r of Object.values(e)) if (t += typeof r === "object" && r !== null && !Array.isArray(r) ? X(r) : 1, t > P) break;
  return t;
}
import { createConnection as ue } from "net";
var BVt = "eval aborted by mock",
  lRe = "mock agent responder failed";
var pe = f(() => u({
    verdict: U(["ok", "tool_error", "abort"]),
    text: o(),
    replay: U(["hit", "miss"]).optional()
  })),
  ge = 4194304;
async function V(e, t, r) {
  try {
    let i = await me(e.socketPath, `${_({
      token: e.token,
      ...t
    })}
`, r);
    return pe().parse(J(i));
  } catch (error) {
    return process.stderr.write(`eval mock stand-in: agent relay failed: ${d(error)}
`), {
      verdict: "abort",
      text: `${lRe} (harness_unreachable) \u2014 see the eval debug log`
    };
  }
}
function me(path, t, r) {
  return new Promise((i, n) => {
    if (r.aborted) {
      n(Error("aborted"));
      return;
    }
    let s = ue({
        path: path
      }),
      a = Buffer.alloc(0),
      c = !1,
      m = (h, l) => {
        if (c) return;
        if (c = !0, r.removeEventListener("abort", y), s.destroy(), h !== null) n(h);else i(l ?? "");
      },
      y = () => m(Error("aborted"));
    r.addEventListener("abort", y, {
      once: !0
    }), s.once("connect", () => s.write(t)), s.on("data", h => {
      if (a = Buffer.concat([a, h]), a.length > ge) {
        m(Error("relay response too large"));
        return;
      }
      let l = a.indexOf(10);
      if (l !== -1) m(null, a.subarray(0, l).toString("utf8"));
    }), s.once("error", h => m(h)), s.once("close", () => m(Error("harness closed the relay without answering")));
  });
}
var he = f(() => {
    let e = sT(() => $e([o(), T(o()), fe(o(), e)])),
      expect = fe(o(), e).nullable(),
      r = Jr("kind", [u({
        kind: C("fixed"),
        body: o(),
        isError: M(),
        expect: expect,
        baseDir: o()
      }), u({
        kind: C("agent"),
        prompt: o(),
        abortWhen: o().nullable(),
        expect: expect,
        baseDir: o(),
        replay: u({
          mockHash: o(),
          replayDir: o(),
          pinned: fe(o(), o())
        }).default({
          mockHash: "",
          replayDir: "",
          pinned: {}
        })
      })]);
    return u({
      registeredName: o(),
      server: o(),
      nonce: o(),
      callLogPath: o(),
      tools: T(u({
        name: o(),
        description: o(),
        inputSchema: fe(o(), oe())
      })),
      responders: fe(o(), r),
      agent: u({
        socketPath: o(),
        token: o()
      }).nullable()
    });
  }),
  Y = 1048576;
async function _ti(e, t) {
  if (!e) throw Error("missing spec path");
  let r = await ve(e);
  if (t !== void 0 && de("sha256").update(r).digest("hex") !== t) throw Error("spec file does not match the hash the harness launched this stand-in with \u2014 refusing to serve it");
  let i = Se(r),
    n = be(i),
    s = new jVt();
  if (!(await K(i.callLogPath, _({
    ready: i.nonce,
    server: i.server
  })))) throw Error("could not write the identity line to the run call log \u2014 refusing to serve unidentified");
  await n.connect(s), process.stdin.on("end", () => void n.close()), process.stdin.on("error", () => void n.close());
}
function be(spec) {
  let t = 0,
    abortController = new AbortController(),
    i = {
      spec: spec,
      signal: abortController.signal
    },
    n = new Wce({
      name: `eval-mock/${spec.server}`,
      version: "1"
    }, {
      capabilities: {
        tools: {}
      }
    });
  n.onclose = () => abortController.abort(), n.setRequestHandler(zce, async () => ({
    tools: spec.tools.map(item => ({
      name: item.name,
      description: item.description,
      inputSchema: {
        type: "object",
        ...item.inputSchema
      }
    }))
  }));
  let s = Promise.resolve();
  n.setRequestHandler(x8, c => {
    let m = s.then(() => a(c.params));
    return s = m.catch(() => {}), m;
  });
  async function a(c) {
    let tool = c.name,
      y = c.arguments ?? {},
      h = Date.now(),
      l = Object.hasOwn(spec.responders, tool) ? spec.responders[tool] : void 0,
      p = l === void 0 ? {
        verdict: "tool_error",
        text: `no mock for ${spec.server}/${tool}`
      } : await ye(l, y, i, tool),
      b = {
        nonce: spec.nonce,
        seq: t++,
        server: spec.server,
        tool: tool,
        responder: l?.kind ?? "fixed",
        input: we(y),
        verdict: p.verdict,
        output: W(p.text),
        ms: Date.now() - h,
        ...(p.replay && {
          replay: p.replay
        })
      };
    if (!(await K(spec.callLogPath, _(b))) && p.verdict === "abort") process.stderr.write(`eval mock stand-in: could not write the abort record to the call log
`);
    switch (p.verdict) {
      case "ok":
        return {
          content: [{
            type: "text",
            text: bkn(p.text)
          }]
        };
      case "tool_error":
        return {
          content: [{
            type: "text",
            text: bkn(p.text)
          }],
          isError: !0
        };
      case "abort":
        return {
          content: [{
            type: "text",
            text: `${BVt} ${spec.nonce}: ${spec.server}/${tool} \u2014 ${p.text}`
          }],
          isError: !0
        };
    }
  }
  return n;
}
async function ye(e, input, r, tool_2 = "") {
  if (e.expect !== null) {
    let n = Mkt(input, e.expect);
    if (n !== null) return {
      verdict: "abort",
      text: `input violates expect: ${n}`
    };
  }
  switch (e.kind) {
    case "agent":
      {
        if (!r || r.spec.agent === null) return {
          verdict: "tool_error",
          text: "agent mock responder called without a harness relay"
        };
        return V(r.spec.agent, {
          registeredName: r.spec.registeredName,
          tool: tool_2,
          input: input
        }, r.signal);
      }
    case "fixed":
      {
        let n = await mor(e.body, input, e.baseDir, gor);
        if (!n.ok) return {
          verdict: "tool_error",
          text: n.reason
        };
        return {
          verdict: e.isError ? "tool_error" : "ok",
          text: n.text
        };
      }
  }
}
async function gor(e) {
  try {
    await tw(R.dirname(e), R.basename(e), "mock fixture");
    let t = await j(e, S.O_RDONLY | (I() === "windows" ? 0 : S.O_NONBLOCK));
    try {
      let r = await t.stat();
      if (!r.isFile()) return {
        problem: "is not a regular file"
      };
      if (r.size > Y) return {
        problem: `is ${r.size} bytes, over the ${Y}-byte fixture limit`
      };
      return (await Z(t, r.size)).toString("utf8");
    } finally {
      await t.close();
    }
  } catch (error) {
    return {
      problem: G(error) ? "no such fixture" : `could not be read (${k(error) ?? d(error)})`
    };
  }
}
var T6r = 16384,
  O = 16384;
function W(e) {
  return e.length > O ? `${ne(e, O)}\u2026[truncated]` : e;
}
function we(e) {
  let t = _(e) ?? "";
  return t.length > O ? W(t) : e;
}
async function K(e, t) {
  try {
    let r = S.O_WRONLY | S.O_APPEND | S.O_CREAT | (I() === "windows" ? 0 : S.O_NONBLOCK),
      i = await j(e, r, 384);
    try {
      if (!(await i.stat()).isFile()) return !1;
      let n = Buffer.from(`${t}
`, "utf8"),
        s = 0;
      while (s < n.length) {
        let {
          bytesWritten: bytesWritten
        } = await i.write(n, s);
        if (bytesWritten <= 0) return !1;
        s += bytesWritten;
      }
      return !0;
    } finally {
      await i.close();
    }
  } catch {
    return !1;
  }
}
async function Z(e, t) {
  let buffer = Buffer.alloc(t),
    i = 0;
  while (i < t) {
    let {
      bytesRead: bytesRead
    } = await e.read({
      buffer: buffer,
      offset: i,
      position: i
    });
    if (bytesRead <= 0) break;
    i += bytesRead;
  }
  return buffer.subarray(0, i);
}
function bkn(e) {
  return regExp.test(e.trimStart()) ? `${xe}${e.trimStart()}` : e;
}
var xe = "| ",
  regExp = new RegExp(`^(?:${BVt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|MCP server "|MCP error -32000: Connection closed)`);
function Se(e) {
  return he().parse(J(e));
}
var Ee = 4194304;
async function ve(e) {
  await tw(R.dirname(e), R.basename(e), "mock spec");
  let t = await j(e, S.O_RDONLY | (I() === "windows" ? 0 : S.O_NONBLOCK));
  try {
    let r = await t.stat();
    if (!r.isFile()) throw Error("spec path is not a regular file \u2014 refusing to read it");
    if (r.size > Ee) throw Error("spec file is over the size limit the harness writes \u2014 refusing to read it");
    return (await Z(t, r.size)).toString("utf8");
  } finally {
    await t.close();
  }
}
export { af, k6r, tw, Mkt, E6r, mor, BVt, lRe, _ti, gor, T6r, bkn };