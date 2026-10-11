// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Fz } from "B:/~BUN/root/chunk-dqm1wqrw.js";
import { constants as p, statSync as m } from "fs";
import { access as h, stat as g } from "fs/promises";
import { isAbsolute as d, join as w } from "path";
var kv = "CLAUDE_CODE_PROCESS_WRAPPER",
  qHe = 12000,
  c = {
    argv: [],
    error: null,
    platformIgnored: !1,
    record: ""
  };
class f {
  memoRaw = void 0;
  memoState = c;
  getState() {
    let r = process.env[kv];
    if (!r) return c;
    let e = r === this.memoRaw ? this.memoState.error : null;
    if (r === this.memoRaw && e === null) return this.memoState;
    if (this.memoRaw = r, this.memoState = v(r), this.memoState.error && this.memoState.error !== e) t(`${kv} is set but can't be used \u2014 self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`, {
      level: "error"
    });else if (this.memoState.platformIgnored) t(`${kv} is set but ignored on Windows \u2014 the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`, {
      level: "warn"
    });
    return this.memoState;
  }
}
var S = new q(() => new f());
function Ecn() {
  return S.of(j().host).getState();
}
function au() {
  return Ecn().argv;
}
function Eu() {
  return Ecn().error;
}
async function gI() {
  if (Eu() !== null) return !1;
  let r = au();
  if (r.length === 0) return !0;
  let e = xMr(r)[0];
  return e === void 0 ? !0 : AMr(e);
}
async function AMr(r) {
  try {
    if (!(await g(r)).isFile()) return !1;
    return await h(r, p.X_OK), !0;
  } catch {
    return !1;
  }
}
function xMr(r) {
  let e = r[0];
  return e !== void 0 && e.startsWith("/") ? [e] : [];
}
async function KHe() {
  let r = Eu();
  if (r) return r;
  if (await gI()) return null;
  return `${kv}: launcher \`${au()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry`;
}
function dN() {
  return Ecn().record;
}
function v(r) {
  if (O() === "windows") return {
    argv: [],
    error: null,
    platformIgnored: !0,
    record: ""
  };
  let argv;
  try {
    argv = y(r);
  } catch (error) {
    return i(error instanceof Error ? error.message : String(error));
  }
  if (argv.length === 0) return i("the value is set but contains no launcher \u2014 unset the variable to run without one, or set it to the absolute path of your launcher");
  let s = argv[0];
  if (s === process.execPath || s === w(Fz(), "claude")) return i(`launcher \`${s}\` is Claude Code's own launch path \u2014 point ${kv} at your launcher, not at claude`);
  if (!d(s)) return i("the launcher must be an absolute path, not a bare name resolved via PATH");
  try {
    let n = m(s);
    if (!n.isFile() || (n.mode & 73) === 0) return i(`launcher \`${s}\` is not an executable regular file`);
  } catch {
    return i(`launcher \`${s}\` does not exist or is not readable`);
  }
  return {
    argv: argv,
    error: null,
    platformIgnored: !1,
    record: argv.map(item => /[\s"]/.test(item) ? b(item) : item).join(" ")
  };
}
function i(r) {
  return {
    argv: [],
    error: `${kv}: ${r}`,
    platformIgnored: !1,
    record: ""
  };
}
var P = ";|&$()`<>";
function y(r) {
  let e = r.trim();
  if (e === "") return [];
  if (e.startsWith("[")) {
    let o;
    try {
      o = J(e);
    } catch {
      throw Error("value starts with `[` but is not valid JSON");
    }
    if (!Array.isArray(o) || !o.every(item => typeof item === "string")) throw Error("JSON form must be an array of strings");
    if (o.length > 0 && o.some(item => item === "")) {
      if (o.every(item => item === "")) return [];
      throw Error("the JSON array contains an empty element \u2014 remove it, or fill in the value it was a placeholder for");
    }
    return o;
  }
  let s = [],
    n = "",
    u = !1,
    l = !1;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    if (l) {
      if (a === "\\" && (e[o + 1] === '"' || e[o + 1] === "\\")) n += e[++o];else if (a === '"') l = !1;else n += a;
      continue;
    }
    if (a === '"') {
      l = !0, u = !0;
      continue;
    }
    if (/\s/.test(a)) {
      if (u) s.push(n), n = "", u = !1;
      continue;
    }
    if (P.includes(a)) throw Error("the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) \u2014 it is an argv list, not a shell command");
    n += a, u = !0;
  }
  if (l) throw Error("unterminated double quote");
  if (u) s.push(n);
  if (s.length > 0 && s.some(item => item === "")) {
    if (s.every(item => item === "")) return [];
    throw Error('the value contains an empty `""` token \u2014 remove it, or fill in the value it was a placeholder for');
  }
  return s;
}
export { kv, qHe, Ecn, au, Eu, gI, AMr, xMr, KHe, dN };