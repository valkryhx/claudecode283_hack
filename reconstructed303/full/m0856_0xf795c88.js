// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j,
  $c
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  LZe,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  nt,
  $t
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  Yw,
  CU,
  aee,
  yfe
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  nP
} from "B:/~BUN/root/chunk-j8w5f307.js";
import {
  X0e
} from "B:/~BUN/root/chunk-wegca9zh.js";
import {
  ai
} from "B:/~BUN/root/chunk-0x8xex6w.js";
import {
  By
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  spawnSync as W
} from "child_process";
import {
  spawn as _,
  spawnSync as v
} from "child_process";
import {
  basename as S
} from "path";
var L = /[%!"&|<>^\r\n\0]/,
  T = {
    "\r": "\\r",
    "\n": "\\n",
    "\x00": "\\0"
  };

function w(n) {
  let e = n.match(L)?.[0];
  return e === void 0 ? void 0 : T[e] ?? e
}
var k = new Set(["start", "cmd", "cmd.exe"]);

function b(n) {
  let e = n.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let o = S(r);
    if (k.has(o.toLowerCase())) continue;
    return o
  }
  return S(e[0] ?? n)
}
var N = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"],
  x = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/,
  D = new Set(["code", "cursor", "windsurf", "codium"]);

function E(n) {
  let e = b(n);
  return N.find((r) => e.includes(r))
}

function A(n, e, r) {
  if (!r) return [e];
  if (D.has(n)) return ["-g", `${e}:${r}`];
  if (n === "subl") return [`${e}:${r}`];
  return [e]
}

function O(n, e, r) {
  let o = E(n);
  if (o) return A(o, e, r);
  return r && x.test(S(nt(n, " "))) ? [`+${r}`, e] : [e]
}

function cKe(n, e) {
  let r = DP();
  if (!r) return !1;
  let o = r.split(" "),
    u = o[0] ?? r,
    l = o.slice(1),
    p = E(r);
  if (p) {
    let m = A(p, n, e),
      f = {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0
      },
      i;
    {
      let s = w(n);
      if (s) return t(`editor: refusing to open path with cmd.exe metacharacter '${s}': ${n}`, {
        level: "error"
      }), !1;
      let d = m.map((h) => `"${h}"`).join(" ");
      i = _(`${r} ${d}`, {
        ...f,
        shell: !0
      })
    }
    return i.on("error", (s) => t(`editor spawn failed: ${s}`, {
      level: "error"
    })), nP(i.pid), i.unref(), !0
  }
  let c = ai().get(process.stdout);
  if (!c) return !1;
  let g = e && x.test(S(u));
  c.enterAlternateScreen();
  try {
    let m = {
        stdio: "inherit"
      },
      f;
    {
      let i = w(n);
      if (i) return t(`editor: refusing to open path with cmd.exe metacharacter '${i}': ${n}`, {
        level: "error"
      }), !1;
      let s = g ? `+${e} ` : "";
      f = v(`${r} ${s}"${n}"`, {
        ...m,
        shell: !0
      })
    }
    if (f.error) return t(`editor spawn failed: ${f.error}`, {
      level: "error"
    }), !1;
    return !0
  } finally {
    c.exitAlternateScreen()
  }
}
class R {
  isResolved = !1;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (a.VISUAL) this.editor = a.VISUAL;
    else if (a.EDITOR) this.editor = a.EDITOR;
    else this.editor = "start /wait notepad";
    return this.isResolved = !0, this.editor
  }
  reset() {
    this.isResolved = !1, this.editor = void 0
  }
}
var F = new z(() => new R);

function U() {
  return F.of(j().host)
}

function DP() {
  return $c()?.editor ?? U().resolve()
}

function WV() {
  let n = DP();
  if (!n) return;
  let e = b(n);
  return e && e.length <= 8 ? e : void 0
}
var H = {
  code: "code -w",
  subl: "subl --wait"
};

function jce(n, e) {
  let r = se(),
    o = ai().get(process.stdout);
  if (!o) throw Error("Ink instance not found - cannot pause rendering");
  let u = DP();
  if (!u) return {
    content: null
  };
  try {
    r.statSync(n)
  } catch {
    return {
      content: null
    }
  }
  let l = E(u) === void 0;
  if (l) o.enterAlternateScreen();
  else o.prepareTerminalForHandoff();
  try {
    let p = H[u] ?? u,
      c = p.split(" "),
      g = c[0] ?? p,
      m = c.slice(1),
      f = O(u, n, e),
      i;
    {
      let d = w(n);
      if (d) return {
        content: null,
        error: `Can't open this path on Windows \u2014 it contains '${d}', which cmd.exe would interpret: ${n}`
      };
      let h = f.map((I) => `"${I}"`).join(" ");
      i = W(`${p} ${h}`, {
        stdio: "inherit",
        shell: !0
      })
    }
    if (i.error || i.signal || i.status !== null && i.status !== 0) {
      let d = Yw(u);
      return {
        content: null,
        error: i.error ? `Couldn't open ${d} \u2014 ${i.error.message}` : i.signal ? `${d} closed unexpectedly (${i.signal})` : `${d} quit unexpectedly (exit code ${i.status})`
      }
    }
    return {
      content: r.readFileSync(n, {
        encoding: "utf-8"
      })
    }
  } catch {
    return {
      content: null
    }
  } finally {
    if (l) o.exitAlternateScreen();
    else o.restoreTerminalAfterHandoff()
  }
}

function G(n, e, r) {
  let o = n;
  for (let [u, l] of Object.entries(r))
    if (l.type === "text") {
      let p = parseInt(u),
        c = l.content;
      if (l.unavailable || c === "") continue;
      if (l.inline) continue;
      let g = o.indexOf(c);
      if (g !== -1) {
        let m = CU(c),
          f = aee(p, m);
        o = o.slice(0, g) + f + o.slice(g + c.length)
      }
    } return o
}
var y = "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  C = 50;

function K(n) {
  let e = By(n).split(`
`);
  if (e.length > C) e = e.slice(-C), e.unshift("\u2026 (earlier output truncated)");
  return `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
` + `${e.map((o)=>o?`# ${o}`:"#").join(`
`)}
${y}

`
}

function M(n) {
  let e = n.indexOf(y);
  if (e === -1) return n;
  return n.slice(e + y.length).replace(/^\r?\n\r?\n?/, "")
}

function kz(n, e, r, o) {
  let u = se(),
    l = X0e();
  try {
    let p = e ? yfe(n, e) : n,
      c = r ? K(r) : "",
      g = c + p,
      m = n.slice(0, o),
      f = o === void 0 ? void 0 : 1 + $t(c, `
`) + $t(e ? yfe(m, e) : m, `
`);
    LZe(l, g, {
      encoding: "utf-8",
      flush: !0
    });
    let i = jce(l, f);
    if (i.content === null) return i;
    let s = i.content;
    if (r) s = M(s);
    let d = s.endsWith(`\r
`) ? `\r
` : `
`;
    if (s.endsWith(d) && !s.endsWith(d + d)) s = s.slice(0, -d.length);
    if (e) s = G(s, n, e);
    return {
      content: s
    }
  } finally {
    try {
      u.unlinkSync(l)
    } catch {}
  }
}
export {
  cKe,
  DP,
  WV,
  jce,
  kz
};
