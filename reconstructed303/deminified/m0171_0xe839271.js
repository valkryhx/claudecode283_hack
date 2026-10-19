// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { M3 } from "B:/~BUN/root/chunk-asrchj7k.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { constants as E, statSync as b } from "fs";
import { access as x, stat as R } from "fs/promises";
import { isAbsolute as O, join as N } from "path";
function W(e) {
  return e.replace(/[a-z]/g, r => r.toUpperCase());
}
function m(e) {
  return e.toUpperCase();
}
var u = He(new Map(), e => e.clear());
function g(e) {
  let r = m(e);
  return [...u].filter(([, n]) => m(n.name) === r);
}
function v(e, r) {
  for (let [n, o] of g(e)) if (c(o.name) === r) u.delete(n);
}
var l = He({
  isOpen: !1
}, e => {
  e.isOpen = !1;
});
function c(e) {
  return process.env[e];
}
function h(e, r) {
  if (r === void 0) {
    delete process.env[e];
    return;
  }
  process.env[e] = r;
}
function w(e) {
  return c(e.name) === e.theirs;
}
function y() {
  let e = [...u.values()];
  return l.isOpen ? e : e.filter(w);
}
function z$s(name) {
  let r = W(name);
  for (let [o, a] of l.isOpen ? [] : g(name)) if (!w(a)) u.delete(o);
  let n = u.get(r) ?? {
    name: name,
    before: c(name)
  };
  return () => {
    u.set(r, {
      ...n,
      theirs: void 0
    });
    for (let [o, a] of g(name)) u.set(o, {
      ...a,
      theirs: c(a.name)
    });
  };
}
function G$s(e) {
  return () => {
    v(e, c(e));
  };
}
function zIr(e) {
  if (l.isOpen) return;
  for (let [r, n] of Object.entries(e)) if (n !== void 0) v(r, n);
}
function GIr() {
  return y().map(item => item.name);
}
function pKn(e) {
  if (l.isOpen) return e();
  let r = y();
  if (r.length === 0) return e();
  for (let n = r.length - 1; n >= 0; n--) h(r[n].name, r[n].before);
  l.isOpen = !0;
  try {
    return e();
  } finally {
    for (let n of r) h(n.name, n.theirs);
    l.isOpen = !1;
  }
}
function Vv(e) {
  if (GIr().length === 0) return e();
  try {
    zIr(me("policySettings")?.env ?? {});
  } catch (error) {
    t(`managed settings' env could not be read, so no variable a person's plugin wrote is read as the organization's: ${d(error)}`, {
      level: "error"
    });
  }
  return pKn(e);
}
var jT = "CLAUDE_CODE_PROCESS_WRAPPER",
  dXe = 12000,
  S = {
    argv: [],
    error: null,
    platformIgnored: !1,
    record: ""
  };
class P {
  memoRaw = void 0;
  memoState = S;
  getState() {
    let e = Vv(() => process.env[jT]);
    if (!e) return S;
    let r = e === this.memoRaw ? this.memoState.error : null;
    if (e === this.memoRaw && r === null) return this.memoState;
    if (this.memoRaw = e, this.memoState = A(e), this.memoState.error && this.memoState.error !== r) t(`${jT} is set but can't be used \u2014 self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`, {
      level: "error"
    });else if (this.memoState.platformIgnored) t(`${jT} is set but ignored on Windows \u2014 the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`, {
      level: "warn"
    });
    return this.memoState;
  }
}
var C = new z(() => new P());
function fKn() {
  return C.of(j().host).getState();
}
function ff() {
  return fKn().argv;
}
function Of() {
  return fKn().error;
}
async function BN() {
  if (Of() !== null) return !1;
  let e = ff();
  if (e.length === 0) return !0;
  let r = TPo(e)[0];
  return r === void 0 ? !0 : EPo(r);
}
async function EPo(e) {
  try {
    if (!(await R(e)).isFile()) return !1;
    return await x(e, E.X_OK), !0;
  } catch {
    return !1;
  }
}
function TPo(e) {
  let r = e[0];
  return r !== void 0 && r.startsWith("/") ? [r] : [];
}
async function cXe() {
  let e = Of();
  if (e) return e;
  if (await BN()) return null;
  return `${jT}: launcher \`${ff()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry`;
}
function Xj() {
  return fKn().record;
}
function A(e) {
  if (I() === "windows") return {
    argv: [],
    error: null,
    platformIgnored: !0,
    record: ""
  };
  let argv;
  try {
    argv = B(e);
  } catch (error) {
    return f(error instanceof Error ? error.message : String(error));
  }
  if (argv.length === 0) return f("the value is set but contains no launcher \u2014 unset the variable to run without one, or set it to the absolute path of your launcher");
  let n = argv[0];
  if (n === process.execPath || n === N(M3(), "claude")) return f(`launcher \`${n}\` is Claude Code's own launch path \u2014 point ${jT} at your launcher, not at claude`);
  if (!O(n)) return f("the launcher must be an absolute path, not a bare name resolved via PATH");
  try {
    let o = b(n);
    if (!o.isFile() || (o.mode & 73) === 0) return f(`launcher \`${n}\` is not an executable regular file`);
  } catch {
    return f(`launcher \`${n}\` does not exist or is not readable`);
  }
  return {
    argv: argv,
    error: null,
    platformIgnored: !1,
    record: argv.map(item => /[\s"]/.test(item) ? _(item) : item).join(" ")
  };
}
function f(e) {
  return {
    argv: [],
    error: `${jT}: ${e}`,
    platformIgnored: !1,
    record: ""
  };
}
var T = ";|&$()`<>";
function B(e) {
  let r = e.trim();
  if (r === "") return [];
  if (r.startsWith("[")) {
    let s;
    try {
      s = J(r);
    } catch {
      throw Error("value starts with `[` but is not valid JSON");
    }
    if (!Array.isArray(s) || !s.every(item => typeof item === "string")) throw Error("JSON form must be an array of strings");
    if (s.length > 0 && s.some(item => item === "")) {
      if (s.every(item => item === "")) return [];
      throw Error("the JSON array contains an empty element \u2014 remove it, or fill in the value it was a placeholder for");
    }
    return s;
  }
  let n = [],
    o = "",
    a = !1,
    p = !1;
  for (let s = 0; s < r.length; s++) {
    let i = r[s];
    if (p) {
      if (i === "\\" && (r[s + 1] === '"' || r[s + 1] === "\\")) o += r[++s];else if (i === '"') p = !1;else o += i;
      continue;
    }
    if (i === '"') {
      p = !0, a = !0;
      continue;
    }
    if (/\s/.test(i)) {
      if (a) n.push(o), o = "", a = !1;
      continue;
    }
    if (T.includes(i)) throw Error("the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) \u2014 it is an argv list, not a shell command");
    o += i, a = !0;
  }
  if (p) throw Error("unterminated double quote");
  if (a) n.push(o);
  if (n.length > 0 && n.some(item => item === "")) {
    if (n.every(item => item === "")) return [];
    throw Error('the value contains an empty `""` token \u2014 remove it, or fill in the value it was a placeholder for');
  }
  return n;
}
export { z$s, G$s, zIr, GIr, pKn, Vv, jT, dXe, fKn, ff, Of, BN, EPo, TPo, cXe, Xj };