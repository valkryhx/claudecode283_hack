// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  sf
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  ywt,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  tt,
  Dt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  l0
} from "B:/~BUN/root/chunk-gq1er5y2.js";
import {
  BHe
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  kv,
  T2,
  fce,
  Nye
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  Ii
} from "B:/~BUN/root/chunk-bfwh5k9e.js";
import {
  FS
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  spawnSync as K
} from "child_process";
import {
  spawn as C,
  spawnSync as I
} from "child_process";
import {
  basename as w
} from "path";
var _ = /[%!"&|<>^\r\n\0]/,
  v = {
    "\r": "\\r",
    "\n": "\\n",
    "\x00": "\\0"
  };

function h(n) {
  let e = n.match(_)?.[0];
  return e === void 0 ? void 0 : v[e] ?? e
}
var T = new Set(["start", "cmd", "cmd.exe"]);

function x(n) {
  let e = n.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let o = w(r);
    if (T.has(o.toLowerCase())) continue;
    return o
  }
  return w(e[0] ?? n)
}
var k = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"],
  L = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/,
  N = new Set(["code", "cursor", "windsurf", "codium"]);

function S(n) {
  let e = x(n);
  return k.find((r) => e.includes(r))
}

function D(n, e, r) {
  if (!r) return [e];
  if (N.has(n)) return ["-g", `${e}:${r}`];
  if (n === "subl") return [`${e}:${r}`];
  return [e]
}

function b(n, e, r) {
  let o = S(n);
  if (o) return D(o, e, r);
  return r && L.test(w(tt(n, " "))) ? [`+${r}`, e] : [e]
}

function Kit(n) {
  let e = $0();
  if (!e) return !1;
  let r = e.split(" "),
    o = r[0] ?? e,
    f = r.slice(1);
  if (S(e)) {
    let c = {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0
      },
      s;
    {
      let d = h(n);
      if (d) return t(`editor: refusing to open path with cmd.exe metacharacter '${d}': ${n}`, {
        level: "error"
      }), !1;
      s = C(`${e} "${n}"`, {
        ...c,
        shell: !0
      })
    }
    return s.on("error", (d) => t(`editor spawn failed: ${d}`, {
      level: "error"
    })), l0(s.pid), s.unref(), !0
  }
  let p = Ii().get(process.stdout);
  if (!p) return !1;
  p.enterAlternateScreen();
  try {
    let c = {
        stdio: "inherit"
      },
      s;
    {
      let d = h(n);
      if (d) return t(`editor: refusing to open path with cmd.exe metacharacter '${d}': ${n}`, {
        level: "error"
      }), !1;
      s = I(`${e} "${n}"`, {
        ...c,
        shell: !0
      })
    }
    if (s.error) return t(`editor spawn failed: ${s.error}`, {
      level: "error"
    }), !1;
    return !0
  } finally {
    p.exitAlternateScreen()
  }
}
class A {
  isResolved = !1;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (i.VISUAL) this.editor = i.VISUAL;
    else if (i.EDITOR) this.editor = i.EDITOR;
    else this.editor = "start /wait notepad";
    return this.isResolved = !0, this.editor
  }
  reset() {
    this.isResolved = !1, this.editor = void 0
  }
}
var F = new W(() => new A);

function U() {
  return F.of(H().host)
}

function $0() {
  return sf()?.editor ?? U().resolve()
}

function k8() {
  let n = $0();
  if (!n) return;
  let e = x(n);
  return e && e.length <= 8 ? e : void 0
}
var M = {
  code: "code -w",
  subl: "subl --wait"
};

function Kke(n, e) {
  let r = ie(),
    o = Ii().get(process.stdout);
  if (!o) throw Error("Ink instance not found - cannot pause rendering");
  let f = $0();
  if (!f) return {
    content: null
  };
  try {
    r.statSync(n)
  } catch {
    return {
      content: null
    }
  }
  let u = S(f) === void 0;
  if (u) o.enterAlternateScreen();
  else o.prepareTerminalForHandoff();
  try {
    let p = M[f] ?? f,
      c = p.split(" "),
      s = c[0] ?? p,
      d = c.slice(1),
      g = b(f, n, e),
      a;
    {
      let l = h(n);
      if (l) return {
        content: null,
        error: `Can't open this path on Windows \u2014 it contains '${l}', which cmd.exe would interpret: ${n}`
      };
      let y = g.map((R) => `"${R}"`).join(" ");
      a = K(`${p} ${y}`, {
        stdio: "inherit",
        shell: !0
      })
    }
    if (a.error || a.signal || a.status !== null && a.status !== 0) {
      let l = kv(f);
      return {
        content: null,
        error: a.error ? `Couldn't open ${l} \u2014 ${a.error.message}` : a.signal ? `${l} closed unexpectedly (${a.signal})` : `${l} quit unexpectedly (exit code ${a.status})`
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
    if (u) o.exitAlternateScreen();
    else o.restoreTerminalAfterHandoff()
  }
}

function G(n, e, r) {
  let o = n;
  for (let [f, u] of Object.entries(r))
    if (u.type === "text") {
      let p = parseInt(f),
        c = u.content;
      if (u.unavailable || c === "") continue;
      if (u.inline) continue;
      let s = o.indexOf(c);
      if (s !== -1) {
        let d = T2(c),
          g = fce(p, d);
        o = o.slice(0, s) + g + o.slice(s + c.length)
      }
    } return o
}
var E = "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  O = 50;

function V(n) {
  let e = FS(n).split(`
`);
  if (e.length > O) e = e.slice(-O), e.unshift("\u2026 (earlier output truncated)");
  return `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
` + `${e.map((o)=>o?`# ${o}`:"#").join(`
`)}
${E}

`
}

function j(n) {
  let e = n.indexOf(E);
  if (e === -1) return n;
  return n.slice(e + E.length).replace(/^\r?\n\r?\n?/, "")
}

function KY(n, e, r, o) {
  let f = ie(),
    u = BHe();
  try {
    let p = e ? Nye(n, e) : n,
      c = r ? V(r) : "",
      s = c + p,
      d = n.slice(0, o),
      g = o === void 0 ? void 0 : 1 + Dt(c, `
`) + Dt(e ? Nye(d, e) : d, `
`);
    ywt(u, s, {
      encoding: "utf-8",
      flush: !0
    });
    let a = Kke(u, g);
    if (a.content === null) return a;
    let m = a.content;
    if (r) m = j(m);
    let l = m.endsWith(`\r
`) ? `\r
` : `
`;
    if (m.endsWith(l) && !m.endsWith(l + l)) m = m.slice(0, -l.length);
    if (e) m = G(m, n, e);
    return {
      content: m
    }
  } finally {
    try {
      f.unlinkSync(u)
    } catch {}
  }
}
export {
  Kit,
  $0,
  k8,
  Kke,
  KY
};
