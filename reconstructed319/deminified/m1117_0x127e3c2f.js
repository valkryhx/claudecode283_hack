// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { R, d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { ove, Jne } from "B:/~BUN/root/chunk-ahv8vexc.js";
import { Nke } from "B:/~BUN/root/chunk-m0t2mx64.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ca, RG, Cl, jb, ad } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { _, ee, Zy, MH, ZS } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { kwt } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { _gn } from "B:/~BUN/root/chunk-w6ejqas5.js";
import { o, I, oe, C, u, Be, Dr, me, B, T, $R } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { createHash as de } from "crypto";
import { constants as S } from "fs";
import z from "path";
import { open as L } from "fs/promises";
import J from "path";
var A = 120;
function F(e) {
  return e.length > A ? `${Q(e, A)}...` : e;
}
function Eh(e) {
  return kwt(_(F(e)));
}
function yBo(e) {
  if (typeof e === "string") return Eh(e);
  let t = _(e) ?? String(e);
  return t.length <= A ? kwt(t) : kwt(_(F(t)));
}
async function sE(e, t, r, i = []) {
  let n = J.resolve(e, t),
    s = Eh(t),
    anchors = [e, ...i];
  if (jb(t) && !Cl(t) || jb(n) && !Cl(n)) throw new R(`${r}: ${s} is an automounter path (macOS /Network, or the bare /net root) \u2014 refusing it (a lookup there is a network request)`, "plugin eval: a repo-authored path is an automounter path \u2014 refusing it");
  let c = ad(n) || ad(t) && !ca(n, e);
  if (ca(t, e) && i.every(item => ca(n, item)) && !c) throw new R(`${r}: ${s} is a network-reaching path (UNC / automount) \u2014 refusing it`, "plugin eval: a repo-authored path is network-reaching \u2014 refusing it");
  let m,
    y = await MH(ZS, n, {
      anchors: anchors,
      surfaceNetworkRaw: !0,
      unreadableAncestry: "unverified",
      onOutcome: h => {
        if (h.kind === "resolved") m = h.path;
      }
    });
  if (y === Zy) throw new R(`${r}: ${s} passes through a component that cannot be examined (unreadable, a link or junction whose target does not exist, or a symlink chain too long to follow) \u2014 refusing it (it could not be vetted)`, "plugin eval: a repo-authored path has an unexaminable component \u2014 refusing it");
  if (y !== void 0) throw new R(`${r}: ${s} passes through a symlink to a network-reaching path (or a dotted one that cannot be vetted) \u2014 refusing it`, "plugin eval: a repo-authored path links to a network-reaching path \u2014 refusing it");
  if (m !== void 0 && RG(m)) throw new R(`${r}: ${s} leads to an automounter map directory (/net, /net/<host>; macOS /Network, /home) \u2014 refusing it (naming anything in it asks the automounter or a host)`, "plugin eval: a repo-authored path lands on an automounter map directory \u2014 refusing it");
}
import N from "path";
var te = 8192,
  H = 50000000,
  re = /^[is]*$/;
function D(e) {
  let r = 0,
    i = 1,
    n = 0,
    s = !1,
    a = !1,
    c = !1;
  for (let l = 0; l < e.length; l++) {
    let f = e[l];
    if (f === "(" || f === ")" || f === "|") return {
      problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
    };
    if (f === "^") {
      if (l !== 0) return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      s = !0, a = !1, c = !1;
      continue;
    }
    if (f === "$") {
      if (l !== e.length - 1) return {
        problem: 'expect: /regex/ guards use a small dialect \u2014 literals, ".", escapes, character classes, and quantifiers (* + ? {m,n}) on single atoms, with optional ^ and $; no groups "(\u2026)", alternation "|", backreferences, or lookaround. Use a list of literals, a type name, or several simpler guards instead'
      };
      continue;
    }
    let b = null;
    if (f === "*") b = {
      lo: 0,
      hi: 1 / 0
    };else if (f === "+") b = {
      lo: 1,
      hi: 1 / 0
    };else if (f === "?") {
      if (c) {
        c = !1;
        continue;
      }
      b = {
        lo: 0,
        hi: 1
      };
    } else if (f === "{") {
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
    if (c = !1, f === "\\") {
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
    if (f === "[") {
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
  if (i > H) return {
    problem: "too many optional/bounded repeats for an expect: guard"
  };
  let m = l => {
      let f = 1;
      for (let b = 1; b <= r; b++) f = f * (l + b) / b;
      return (s ? 1 : Math.max(1, l)) * f * i * (l + n);
    },
    maxSubject = 0,
    h = te;
  while (maxSubject < h) {
    let l = Math.ceil((maxSubject + h) / 2);
    if (m(l) <= H) maxSubject = l;else h = l - 1;
  }
  if (maxSubject < 16) return {
    problem: "this combination of repeats leaves no useful subject length under the matching budget \u2014 use fewer quantifiers"
  };
  return {
    maxSubject: maxSubject,
    problem: null
  };
}
var ne = new Set(["string", "number", "bool", "boolean", "object", "array"]);
function P(e, t) {
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
function G2t(e, t, r = "") {
  for (let [i, n] of Object.entries(t)) {
    let s = r ? `${r}.${i}` : i,
      a = P(e, s),
      c = ie(a, n, s, e);
    if (c !== null) return c;
  }
  return null;
}
function ie(e, t, r, i) {
  if (Array.isArray(t)) return t.some(item => U(e, item)) ? null : `${r} = ${v(e)} is not one of [${t.join(", ")}]`;
  if (typeof t === "object" && t !== null) return G2t(i, t, r);
  let n = G(t);
  if (n !== null) {
    let s = typeof e === "string" ? e : typeof e === "number" || typeof e === "boolean" ? String(e) : null,
      a = D(n.source);
    if (!("maxSubject" in a)) return `${r}: ${t} is not a usable guard (${a.problem})`;
    let maxSubject_2 = a.maxSubject;
    if (s !== null && s.length > maxSubject_2) return `${r} is ${s.length} characters, more than this /regex/ guard checks (${maxSubject_2})`;
    return s !== null && n.test(s) ? null : `${r} = ${v(e)} does not match ${t}`;
  }
  if (ne.has(t)) {
    let s = t === "boolean" ? "bool" : t;
    return se(e) === s ? null : `${r} = ${v(e)} is not a ${t}`;
  }
  return U(e, t) ? null : `${r} = ${v(e)} is not "${t}"`;
}
function U(e, t) {
  if (typeof e === "string") return e === t;
  if (typeof e === "number" || typeof e === "boolean") return String(e) === t;
  return !1;
}
function G(e) {
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
  return t.length > 80 ? `${Q(t, 77)}...` : t;
}
var O = 32;
function _Bo(e, t = "") {
  let r = [];
  if (t === "") {
    let i = q(e);
    if (i > O) return r.push(`expect: ${i} guards is more than the ${O} one responder may carry \u2014 every call checks each of them; keep the ones that catch a wrong call`), r;
  }
  for (let [i, n] of Object.entries(e)) {
    let s = t ? `${t}.${i}` : i;
    if (Array.isArray(n)) {
      if (n.length === 0) r.push(`expect.${s}: an empty list of allowed values can never be satisfied \u2014 list at least one`);
      continue;
    }
    if (typeof n === "object" && n !== null) {
      r.push(..._Bo(n, s));
      continue;
    }
    if (/^\/.*\/[a-z]*$/s.test(n)) try {
      let a = G(n),
        c = a ? D(a.source) : null;
      if (a && !re.test(a.flags)) r.push(`expect.${s}: ${n} \u2014 only the i and s flags are supported in expect: guards`);else if (c && c.problem !== null) r.push(`expect.${s}: ${n} \u2014 ${c.problem}`);
    } catch (error) {
      r.push(`expect.${s}: invalid regular expression ${n} (${error instanceof Error ? error.message : String(error)}) \u2014 a value written /like this/ is read as a regex; for a literal that starts and ends with a slash, write a one-element list: ["${n}"]`);
    }
  }
  return r;
}
var ae = /^(?!\.{1,2}$)[A-Za-z0-9._-]+$/;
async function QGr(e, t, r, i, n = Number.POSITIVE_INFINITY) {
  let reason = null,
    a = [],
    c = 0;
  for (let y of e.matchAll(/\{\{\s*(input\.[A-Za-z0-9_.-]+|file:(?:[^{}]|\{input\.[A-Za-z0-9_.-]+\})+?)\s*\}\}/g)) {
    a.push(e.slice(c, y.index)), c = y.index + y[0].length;
    let h = y[1] ?? "";
    if (h.startsWith("input.")) {
      let g = P(t, h.slice(6)),
        w = g === void 0 ? "" : typeof g === "string" ? g : _(g);
      a.push(w.length > n ? `${Q(w, n)}\u2026 [${w.length - n} more characters omitted]` : w);
      continue;
    }
    let l = h.slice(5).trim(),
      f = null;
    if (l = l.replace(/\{input\.([A-Za-z0-9_.-]+)\}/g, (g, w) => {
      let E = P(t, w),
        M = E === void 0 || E === null ? "" : String(E);
      if (!ae.test(M)) f = `{input.${w}} = ${v(E)} is not a plain file-name segment`;
      return M;
    }), f !== null) {
      reason ??= f;
      continue;
    }
    let b = N.resolve(r, l);
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
  let r = N.relative(e, t);
  return r !== "" && !r.startsWith("..") && !N.isAbsolute(r);
}
function q(e) {
  let t = 0;
  for (let r of Object.values(e)) if (t += typeof r === "object" && r !== null && !Array.isArray(r) ? q(r) : 1, t > O) break;
  return t;
}
import { createConnection as ue } from "net";
var ygn = "eval aborted by mock",
  UUe = "mock agent responder failed";
var pe = p(() => u({
    verdict: B(["ok", "tool_error", "abort"]),
    text: o(),
    replay: B(["hit", "miss"]).optional()
  })),
  fe = 4194304;
async function X(e, t, r) {
  try {
    let i = await ge(e.socketPath, `${_({
      token: e.token,
      ...t
    })}
`, r);
    return pe().parse(ee(i));
  } catch (error) {
    return process.stderr.write(`eval mock stand-in: agent relay failed: ${d(error)}
`), {
      verdict: "abort",
      text: `${UUe} (harness_unreachable) \u2014 see the eval debug log`
    };
  }
}
function ge(path, t, r) {
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
      if (a = Buffer.concat([a, h]), a.length > fe) {
        m(Error("relay response too large"));
        return;
      }
      let l = a.indexOf(10);
      if (l !== -1) m(null, a.subarray(0, l).toString("utf8"));
    }), s.once("error", h => m(h)), s.once("close", () => m(Error("harness closed the relay without answering")));
  });
}
var he = p(() => {
    let e = $R(() => Be([o(), C(o()), me(o(), e)])),
      expect = me(o(), e).nullable(),
      r = Dr("kind", [u({
        kind: T("fixed"),
        body: o(),
        isError: I(),
        expect: expect,
        baseDir: o()
      }), u({
        kind: T("agent"),
        prompt: o(),
        abortWhen: o().nullable(),
        expect: expect,
        baseDir: o(),
        replay: u({
          mockHash: o(),
          replayDir: o(),
          pinned: me(o(), o())
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
      tools: C(u({
        name: o(),
        description: o(),
        inputSchema: me(o(), oe())
      })),
      responders: me(o(), r),
      agent: u({
        socketPath: o(),
        token: o()
      }).nullable()
    });
  }),
  V = 1048576;
async function $ha(e, t) {
  if (!e) throw Error("missing spec path");
  let r = await ve(e);
  if (t !== void 0 && de("sha256").update(r).digest("hex") !== t) throw Error("spec file does not match the hash the harness launched this stand-in with \u2014 refusing to serve it");
  let i = Se(r),
    n = be(i),
    s = new _gn();
  if (!(await W(i.callLogPath, _({
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
    n = new Nke({
      name: `eval-mock/${spec.server}`,
      version: "1"
    }, {
      capabilities: {
        tools: {}
      }
    });
  n.onclose = () => abortController.abort(), n.setRequestHandler(ove, async () => ({
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
  n.setRequestHandler(Jne, c => {
    let m = s.then(() => a(c.params));
    return s = m.catch(() => {}), m;
  });
  async function a(c) {
    let tool = c.name,
      y = c.arguments ?? {},
      h = Date.now(),
      l = Object.hasOwn(spec.responders, tool) ? spec.responders[tool] : void 0,
      f = l === void 0 ? {
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
        verdict: f.verdict,
        output: Y(f.text),
        ms: Date.now() - h,
        ...(f.replay && {
          replay: f.replay
        })
      };
    if (!(await W(spec.callLogPath, _(b))) && f.verdict === "abort") process.stderr.write(`eval mock stand-in: could not write the abort record to the call log
`);
    switch (f.verdict) {
      case "ok":
        return {
          content: [{
            type: "text",
            text: s9n(f.text)
          }]
        };
      case "tool_error":
        return {
          content: [{
            type: "text",
            text: s9n(f.text)
          }],
          isError: !0
        };
      case "abort":
        return {
          content: [{
            type: "text",
            text: `${ygn} ${spec.nonce}: ${spec.server}/${tool} \u2014 ${f.text}`
          }],
          isError: !0
        };
    }
  }
  return n;
}
async function ye(e, input, r, tool_2 = "") {
  if (e.expect !== null) {
    let n = G2t(input, e.expect);
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
        return X(r.spec.agent, {
          registeredName: r.spec.registeredName,
          tool: tool_2,
          input: input
        }, r.signal);
      }
    case "fixed":
      {
        let n = await QGr(e.body, input, e.baseDir, ZGr);
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
async function ZGr(e) {
  try {
    await sE(z.dirname(e), z.basename(e), "mock fixture");
    let t = await L(e, S.O_RDONLY | (x() === "windows" ? 0 : S.O_NONBLOCK));
    try {
      let r = await t.stat();
      if (!r.isFile()) return {
        problem: "is not a regular file"
      };
      if (r.size > V) return {
        problem: `is ${r.size} bytes, over the ${V}-byte fixture limit`
      };
      return (await Z(t, r.size)).toString("utf8");
    } finally {
      await t.close();
    }
  } catch (error) {
    return {
      problem: K(error) ? "no such fixture" : `could not be read (${k(error) ?? d(error)})`
    };
  }
}
var bBo = 16384,
  j = 16384;
function Y(e) {
  return e.length > j ? `${Q(e, j)}\u2026[truncated]` : e;
}
function we(e) {
  let t = _(e) ?? "";
  return t.length > j ? Y(t) : e;
}
async function W(e, t) {
  try {
    let r = S.O_WRONLY | S.O_APPEND | S.O_CREAT | (x() === "windows" ? 0 : S.O_NONBLOCK),
      i = await L(e, r, 384);
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
function s9n(e) {
  return regExp.test(e.trimStart()) ? `${xe}${e.trimStart()}` : e;
}
var xe = "| ",
  regExp = new RegExp(`^(?:${ygn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|MCP server "|MCP error -32000: Connection closed)`);
function Se(e) {
  return he().parse(ee(e));
}
var Ee = 4194304;
async function ve(e) {
  await sE(z.dirname(e), z.basename(e), "mock spec");
  let t = await L(e, S.O_RDONLY | (x() === "windows" ? 0 : S.O_NONBLOCK));
  try {
    let r = await t.stat();
    if (!r.isFile()) throw Error("spec path is not a regular file \u2014 refusing to read it");
    if (r.size > Ee) throw Error("spec file is over the size limit the harness writes \u2014 refusing to read it");
    return (await Z(t, r.size)).toString("utf8");
  } finally {
    await t.close();
  }
}
export { Eh, yBo, sE, G2t, _Bo, QGr, ygn, UUe, $ha, ZGr, bBo, s9n };