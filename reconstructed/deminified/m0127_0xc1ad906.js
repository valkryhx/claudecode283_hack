// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { v, ao } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { spawn as S } from "child_process";
import { join as y } from "path";
var timeout = 500;
function Qf(e, r = "SIGKILL") {
  if (!Number.isInteger(e) || e <= 1) return Promise.resolve(new Set());
  return T(e), Promise.resolve(new Set());
}
async function P(e, r) {
  let o = await mUr(e);
  try {
    process.kill(-e, r);
  } catch (error) {
    try {
      process.kill(e, r);
    } catch {}
    if (v(error) !== "ESRCH") w("group_kill", error);
  }
  for (let n of o) try {
    process.kill(n, r);
  } catch {}
  return o;
}
async function u3n(e) {
  let r = [...e].filter(item => Number.isInteger(item) && item > 1),
    o = new Map();
  return r.length, o;
  return h(r);
}
async function p3n(e, r) {
  e.size;
  return;
}
async function h(e) {
  let r = new Map(),
    {
      stdout: stdout
    } = await Ve("ps", ["-o", "pid=", "-o", "lstart=", "-p", e.join(",")], {
      timeout: timeout,
      cwd: "/",
      env: {
        USER_TYPE: "external",
        NODE_ENV: "production",
        LC_ALL: "C",
        TZ: "UTC"
      },
      stripFinalNewline: !1
    });
  for (let n of stdout.split(`
`)) {
    let s = n.match(/^\s*(\d+)\s+(\S.*\S)\s*$/);
    if (s) r.set(Number(s[1]), s[2]);
  }
  return r;
}
async function mUr(e, {
  sameSession: sameSession
} = {
  sameSession: !1
}) {
  let o;
  try {
    o = await Promise.race([E(sameSession), new Promise(m => {
      let u = setTimeout(p => p(""), timeout, m);
      if (typeof u === "object") u.unref();
    })]);
  } catch (error) {
    return w("enum_spawn", error), new Set();
  }
  let n = new Map(),
    s = new Map();
  for (let m of o.split(`
`)) {
    let u = m.match(/^\s*(\d+)\s+(\d+)(?:\s+(\S+))?\s*$/);
    if (!u) continue;
    let p = Number(u[1]),
      k = Number(u[2]);
    if (u[3] !== void 0) s.set(p, u[3]);
    let g = n.get(k);
    if (g) g.push(p);else n.set(k, [p]);
  }
  let l = s.get(e);
  if (sameSession && (l === void 0 || new Set(s.values()).size < 2)) return new Set();
  let f = new Set(),
    d = [e];
  while (d.length > 0) {
    let m = d.shift();
    for (let u of n.get(m) ?? []) if (u > 1 && u !== e && u !== process.pid && !f.has(u) && (!sameSession || s.get(u) === l)) f.add(u), d.push(u);
  }
  return f;
}
function E(e) {
  return new Promise((r, o) => {
    let n;
    try {
      let l = e ? ["-o", O() === "macos" ? "sess=" : "sid="] : [];
      n = S("ps", ["-A", "-o", "pid=", "-o", "ppid=", ...l], {
        cwd: "/",
        stdio: ["ignore", "pipe", "ignore"],
        windowsHide: !0
      });
    } catch (error) {
      o(error);
      return;
    }
    let s = "";
    n.stdout?.on("data", l => s += l), n.once("error", o), n.once("close", () => r(s));
  });
}
function T(e) {
  let r = o => {
    w("taskkill", o);
    try {
      process.kill(e);
    } catch {}
  };
  try {
    let o = a.SYSTEMROOT || "C:\\Windows",
      n = y(o, "System32", "taskkill.exe");
    S(n, ["/PID", String(e), "/T", "/F"], {
      cwd: void 0,
      stdio: "ignore",
      windowsHide: !0
    }).once("error", r);
  } catch (error) {
    r(error);
  }
}
function w(e, r) {
  try {
    let o = v(r),
      error_code = ao(r);
    t(`killProcessTree ${e} failed: ${o ?? r}`), i("tengu_bash_tool_kill_error", {
      stage: c(e),
      ...(error_code && {
        error_code: error_code
      })
    });
  } catch {}
}
export { Qf, u3n, p3n, mUr };