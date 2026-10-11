// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j, md } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { dBe, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { xs } from "B:/~BUN/root/chunk-p4t9nwg2.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { tT } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { BL, v9, hae, __ } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { BJ } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { jf } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { spawn as A, spawnSync as R } from "child_process";
import { basename as h } from "path";
var C = /[%!"&|<>^\r\n\0]/,
  I = {
    "\r": "\\r",
    "\n": "\\n",
    "\x00": "\\0"
  };
function g(n) {
  let e = n.match(C)?.[0];
  return e === void 0 ? void 0 : I[e] ?? e;
}
var _ = new Set(["start", "cmd", "cmd.exe"]);
function E(n) {
  let e = n.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let o = h(r);
    if (_.has(o.toLowerCase())) continue;
    return o;
  }
  return h(e[0] ?? n);
}
var v = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"],
  T = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/,
  k = new Set(["code", "cursor", "windsurf", "codium"]);
function S(n) {
  let e = E(n);
  return v.find(item => e.includes(item));
}
function L(n, e, r) {
  if (!r) return [e];
  if (k.has(n)) return ["-g", `${e}:${r}`];
  if (n === "subl") return [`${e}:${r}`];
  return [e];
}
function sOe(n, e) {
  let r = _T();
  if (!r) return !1;
  let o = r.split(" "),
    u = o[0] ?? r,
    l = o.slice(1),
    p = S(r);
  if (p) {
    let i = L(p, n, e),
      f = {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0
      },
      c;
    {
      let m = g(n);
      if (m) return t(`editor: refusing to open path with cmd.exe metacharacter '${m}': ${n}`, {
        level: "error"
      }), !1;
      let b = i.map(item => `"${item}"`).join(" ");
      c = A(`${r} ${b}`, {
        ...f,
        shell: !0
      });
    }
    return c.on("error", m => t(`editor spawn failed: ${m}`, {
      level: "error"
    })), tT(c.pid), c.unref(), !0;
  }
  let d = xs().get(process.stdout);
  if (!d) return !1;
  let s = e && T.test(h(u));
  d.enterAlternateScreen();
  try {
    let i = {
        stdio: "inherit"
      },
      f;
    {
      let c = g(n);
      if (c) return t(`editor: refusing to open path with cmd.exe metacharacter '${c}': ${n}`, {
        level: "error"
      }), !1;
      let m = s ? `+${e} ` : "";
      f = R(`${r} ${m}"${n}"`, {
        ...i,
        shell: !0
      });
    }
    if (f.error) return t(`editor spawn failed: ${f.error}`, {
      level: "error"
    }), !1;
    return !0;
  } finally {
    d.exitAlternateScreen();
  }
}
class y {
  isResolved = !1;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (a.VISUAL) this.editor = a.VISUAL;else if (a.EDITOR) this.editor = a.EDITOR;else this.editor = "start /wait notepad";
    return this.isResolved = !0, this.editor;
  }
  reset() {
    this.isResolved = !1, this.editor = void 0;
  }
}
var N = new q(() => new y());
function D() {
  return N.of(j().host);
}
function _T() {
  return md()?.editor ?? D().resolve();
}
function vU() {
  let n = _T();
  if (!n) return;
  let e = E(n);
  return e && e.length <= 8 ? e : void 0;
}
import { spawnSync as F } from "child_process";
var U = {
  code: "code -w",
  subl: "subl --wait"
};
function s7(n) {
  let e = ce(),
    r = xs().get(process.stdout);
  if (!r) throw Error("Ink instance not found - cannot pause rendering");
  let o = _T();
  if (!o) return {
    content: null
  };
  try {
    e.statSync(n);
  } catch {
    return {
      content: null
    };
  }
  let u = S(o) === void 0;
  if (u) r.enterAlternateScreen();else r.prepareTerminalForHandoff();
  try {
    let l = U[o] ?? o,
      p = l.split(" "),
      d = p[0] ?? l,
      s = p.slice(1),
      i;
    {
      let c = g(n);
      if (c) return {
        content: null,
        error: `Can't open this path on Windows \u2014 it contains '${c}', which cmd.exe would interpret: ${n}`
      };
      i = F(`${l} "${n}"`, {
        stdio: "inherit",
        shell: !0
      });
    }
    if (i.error || i.signal || i.status !== null && i.status !== 0) {
      let c = __(o);
      return {
        content: null,
        error: i.error ? `Couldn't open ${c} \u2014 ${i.error.message}` : i.signal ? `${c} closed unexpectedly (${i.signal})` : `${c} quit unexpectedly (exit code ${i.status})`
      };
    }
    return {
      content: e.readFileSync(n, {
        encoding: "utf-8"
      })
    };
  } catch {
    return {
      content: null
    };
  } finally {
    if (u) r.exitAlternateScreen();else r.restoreTerminalAfterHandoff();
  }
}
function P(n, e, r) {
  let o = n;
  for (let [u, l] of Object.entries(r)) if (l.type === "text") {
    let p = parseInt(u),
      content = l.content;
    if (l.unavailable || content === "") continue;
    if (l.inline) continue;
    let s = o.indexOf(content);
    if (s !== -1) {
      let i = BL(content),
        f = v9(p, i);
      o = o.slice(0, s) + f + o.slice(s + content.length);
    }
  }
  return o;
}
var w = "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  x = 50;
function W(n) {
  let e = jf(n).split(`
`);
  if (e.length > x) e = e.slice(-x), e.unshift("\u2026 (earlier output truncated)");
  return `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
` + `${e.map(item => item ? `# ${item}` : "#").join(`
`)}
${w}

`;
}
function H(n) {
  let e = n.indexOf(w);
  if (e === -1) return n;
  return n.slice(e + w.length).replace(/^\r?\n\r?\n?/, "");
}
function LH(n, e, r) {
  let o = ce(),
    u = BJ();
  try {
    let l = e ? hae(n, e) : n,
      p = r ? W(r) + l : l;
    dBe(u, p, {
      encoding: "utf-8",
      flush: !0
    });
    let d = s7(u);
    if (d.content === null) return d;
    let content_2 = d.content;
    if (r) content_2 = H(content_2);
    if (content_2.endsWith(`
`) && !content_2.endsWith(`

`)) content_2 = content_2.slice(0, -1);
    if (e) content_2 = P(content_2, n, e);
    return {
      content: content_2
    };
  } finally {
    try {
      o.unlinkSync(u);
    } catch {}
  }
}
export { sOe, _T, vU, s7, LH };