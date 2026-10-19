// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  k,
  Fr
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  ct
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import {
  spawn as b
} from "child_process";
import {
  join as E
} from "path";
var y = 500;

function tS(e, o = "SIGKILL") {
  if (!Number.isInteger(e) || e <= 1) return Promise.resolve(new Set);
  return _(e), Promise.resolve(new Set)
}
async function T(e, o) {
  let r = await nFo(e);
  try {
    process.kill(-e, o)
  } catch (n) {
    try {
      process.kill(e, o)
    } catch {}
    if (k(n) !== "ESRCH") w("group_kill", n)
  }
  for (let n of r) try {
    process.kill(n, o)
  } catch {}
  return r
}
async function qFr(e) {
  let o = [...e].filter((n) => Number.isInteger(n) && n > 1),
    r = new Map;
  return o.length, r;
  return h(o)
}
async function qUt(e, o) {
  e.size;
  return
}
async function h(e) {
  let o = new Map,
    {
      stdout: r
    } = await ct("ps", ["-o", "pid=", "-o", "lstart=", "-p", e.join(",")], {
      timeout: y,
      cwd: "/",
      env: {
        USER_TYPE: "external",
        NODE_ENV: "production",
        LC_ALL: "C",
        TZ: "UTC"
      },
      stripFinalNewline: !1
    });
  for (let n of r.split(`
`)) {
    let s = n.match(/^\s*(\d+)\s+(\S.*\S)\s*$/);
    if (s) o.set(Number(s[1]), s[2])
  }
  return o
}
async function nFo(e, {
  sameSession: o
} = {
  sameSession: !1
}) {
  let r;
  try {
    r = await Promise.race([N(o), new Promise((m) => {
      let u = setTimeout((d) => d(""), y, m);
      if (typeof u === "object") u.unref()
    })])
  } catch (m) {
    return w("enum_spawn", m), new Set
  }
  let n = new Map,
    s = new Map;
  for (let m of r.split(`
`)) {
    let u = m.match(/^\s*(\d+)\s+(\d+)(?:\s+(\S+))?\s*$/);
    if (!u) continue;
    let d = Number(u[1]),
      P = Number(u[2]);
    if (u[3] !== void 0) s.set(d, u[3]);
    let g = n.get(P);
    if (g) g.push(d);
    else n.set(P, [d])
  }
  let l = s.get(e);
  if (o && (l === void 0 || new Set(s.values()).size < 2)) return new Set;
  let p = new Set,
    f = [e];
  while (f.length > 0) {
    let m = f.shift();
    for (let u of n.get(m) ?? [])
      if (u > 1 && u !== e && u !== process.pid && !p.has(u) && (!o || s.get(u) === l)) p.add(u), f.push(u)
  }
  return p
}

function N(e) {
  return new Promise((o, r) => {
    let n;
    try {
      let l = e ? ["-o", I() === "macos" ? "sess=" : "sid="] : [];
      n = b("ps", ["-A", "-o", "pid=", "-o", "ppid=", ...l], {
        cwd: "/",
        stdio: ["ignore", "pipe", "ignore"],
        windowsHide: !0
      })
    } catch (l) {
      r(l);
      return
    }
    let s = "";
    n.stdout?.on("data", (l) => s += l), n.once("error", r), n.once("close", () => o(s))
  })
}

function _(e) {
  let o = {
      id: null
    },
    r = (n) => {
      w("taskkill", n);
      try {
        process.kill(e)
      } catch {}
      S(o)
    };
  try {
    o.id = typeof Bun < "u" && typeof Bun.ant?.windowsProcessPin === "function" ? Bun.ant.windowsProcessPin(e) : null;
    let n = a.SYSTEMROOT || "C:\\Windows",
      s = E(n, "System32", "taskkill.exe"),
      l = b(s, ["/PID", String(e), "/T", "/F"], {
        cwd: void 0,
        stdio: "ignore",
        windowsHide: !0
      });
    l.once("error", r), l.once("exit", () => S(o))
  } catch (n) {
    r(n)
  }
}

function S(e) {
  let o = e.id;
  if (e.id = null, o === null) return;
  try {
    Bun.ant.windowsProcessUnpin(o)
  } catch {}
}

function w(e, o) {
  try {
    let r = k(o),
      n = Fr(o);
    t(`killProcessTree ${e} failed: ${r??o}`), i("tengu_bash_tool_kill_error", {
      stage: c(e),
      ...n && {
        error_code: n
      }
    })
  } catch {}
}
export {
  tS,
  qFr,
  qUt,
  nFo
};
