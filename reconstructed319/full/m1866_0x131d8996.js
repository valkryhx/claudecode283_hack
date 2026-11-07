// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q,
  Ey,
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  rB,
  hP,
  vjt
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Eo
} from "B:/~BUN/root/chunk-b3jc87kv.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  IHe
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  lt
} from "B:/~BUN/root/chunk-3mm90xb6.js";
import {
  yt
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  es
} from "B:/~BUN/root/chunk-0s9zh2h6.js";
import {
  Xt,
  yKe
} from "B:/~BUN/root/chunk-jgwwv4gf.js";
import {
  jk,
  Ll
} from "B:/~BUN/root/chunk-zy4xrndc.js";

function bGt(e, s) {
  if (!Eo(s)) return d(e);
  return t(`bash spawn failure detail: ${d(e)}`, {
    level: "error"
  }), "shell command failed (detail withheld on this connection)"
}

function yWr() {
  let e = yt().defaultShell;
  if (e === "bash" && !Ll()) return "powershell";
  if (e === "powershell" && !jk()) return "bash";
  return e ?? (Ll() ? "bash" : "powershell")
}
var H = 262144,
  ymn = "Not run: this command was sent for a different folder than the one the session is in now. Ask Claude to run it instead.",
  w = 600000,
  _Wr = "[interrupted]",
  M = "[timed out after 10 minutes]",
  N = "[stopped: the command printed more than 100 MB]";
async function dha(e) {
  let {
    command: s
  } = e, r = e.cwd ?? pe(), o = e.maxOutputChars ?? H, {
    file: i,
    args: l
  } = yWr() === "powershell" ? {
    file: "pwsh",
    args: ["-NoProfile", "-Command", s]
  } : {
    file: "/bin/sh",
    args: ["-c", s]
  }, n = new AbortController, u = setTimeout((D) => D.abort(), w + 2000, n), c = AbortSignal.any(e.abortSignal === void 0 ? [n.signal] : [e.abortSignal, n.signal]), {
    stdout: p,
    stderr: f,
    code: _,
    exitCode: F,
    timedOut: O,
    maxBufferExceeded: A,
    error: h
  } = await lt(i, l, {
    abortSignal: c,
    timeout: w,
    cwd: r,
    env: es(),
    extendEnv: !1,
    preserveOutputOnError: !0,
    withoutControllingTerminal: !0,
    abortEndsProcessGroup: !0,
    waitForExitAfterKill: !0
  }).finally(() => clearTimeout(u)), a = O || n.signal.aborted ? "timeout" : e.abortSignal?.aborted === !0 ? "interrupt" : A ? "output_limit" : void 0, S = h && a === void 0 && !h.startsWith(`Command failed with exit code ${_}`) ? h : "";
  if (S) m("input_remote_bash", "spawn_failed");
  else if (a === "timeout") m("input_remote_bash", "timed_out");
  else if (a === "output_limit") m("input_remote_bash", "output_limit");
  else g("input_remote_bash", {
    interrupted: a === "interrupt"
  });
  let B = S ? bGt(S, e.session) : "",
    R = a === "timeout" ? M : a === "interrupt" ? _Wr : a === "output_limit" ? N : "",
    b = F ?? (a === "interrupt" ? 130 : a === "timeout" ? 124 : _);
  return {
    outputText: `<${rB}>${T(p,o,"")}</${rB}><${hP}>${T(f||B,o,R)}</${hP}><${vjt}>${b}</${vjt}>`,
    exitCode: b
  }
}

function T(e, s, r) {
  let o = r === "" ? "" : `
${r}`,
    i = s - o.length,
    l = Q(e, Math.max(i, 0)),
    n = e.length - l.length,
    u = bWr(l),
    c = Xt(u),
    p = n === 0 && c.length <= i ? c : Xt(yKe(u, i, (f) => U(f + n)));
  return `${p}${p===""?r:o}`
}

function U(e) {
  return `
[output truncated: ${e.toLocaleString("en-US")} more characters not shown]`
}
var E = /\x1b\[[0-9;:]*m/g;

function v(e) {
  let s = [],
    r = e.slice(2, -1).split(";");
  for (let o = 0; o < r.length; o++) {
    let i = r[o],
      l = tt(i, ":"),
      n = l === "" ? 0 : Number(l);
    if (n === 38 || n === 48 || n === 58) {
      let u = i.includes(":") ? i.split(":") : r[o + 1] === "5" ? r.slice(o, o + 3) : r[o + 1] === "2" ? r.slice(o, o + 5) : [i];
      if (!i.includes(":")) o += u.length - 1;
      if (n !== 38) continue;
      if (u[1] === "5" && u.length === 3 && x(u[2])) s.push("38", "5", u[2]);
      else if (u[1] === "2") {
        let c = u.slice(-3);
        if ((u.length === 5 || u.length === 6) && c.every(x)) s.push("38", "2", ...c)
      }
      continue
    }
    if (n === 0 || n === 1 || n === 2 || n === 3 || n === 4 || n === 9 || n >= 21 && n <= 24 || n === 29 || n >= 30 && n <= 37 || n === 39 || n >= 90 && n <= 97) s.push(String(n))
  }
  return s.length === 0 ? "" : `\x1B[${s.join(";")}m`
}

function bWr(e, s = {}) {
  if (s.keepColors !== !0) return C(e);
  let r = e.match(E) ?? [];
  return e.split(E).map((o, i) => C(o) + (r[i] === void 0 ? "" : v(r[i]))).join("")
}

function C(e) {
  return IHe(Ey(e)).replace(/\r\n?/g, `
`).replace(/(?![\t\n])[\p{Cc}\u200B\u200E\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\u206A-\u206F\u061C\u034F\u180E\u115F\u1160\u3164\uFFA0\uFEFF\uFFF9-\uFFFB\u{E0000}-\u{E007F}]/gu, "")
}

function x(e) {
  return e !== void 0 && /^\d{1,3}$/.test(e)
}
export {
  bGt,
  yWr,
  ymn,
  _Wr,
  dha,
  bWr
};
