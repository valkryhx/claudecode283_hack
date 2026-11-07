// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  readFile as s,
  readlink as u
} from "fs/promises";
import {
  hostname as a
} from "os";
import {
  join as d
} from "path";

function LXi(n) {
  return d(n, "sessions")
}
var RUt = 262144;

function NXi(n) {
  let t = n.replace(/\.json$/, ""),
    e = parseInt(t, 10);
  if (isNaN(e)) return null;
  return {
    pid: e,
    canonical: String(e) === t
  }
}
var p = ["interactive", "bg", "daemon", "daemon-worker"];

function c(n) {
  return p.includes(n) ? n : void 0
}
var f = ["busy", "shell", "idle", "waiting"];

function m(n) {
  return f.includes(n) ? n : void 0
}
var l = 4000000000000000;

function Zin(n) {
  return typeof n === "number" && Number.isFinite(n) && n >= 0 && n <= l
}

function Ljn(n) {
  return Zin(n) ? n : void 0
}

function FXi(n) {
  let t = typeof n === "object" && n !== null ? n : {};
  return {
    cwd: typeof t.cwd === "string" ? t.cwd : "?",
    startedAt: Ljn(t.startedAt) ?? 0,
    procStart: typeof t.procStart === "string" ? t.procStart : void 0,
    ...typeof t.procStartFt === "string" && {
      procStartFt: t.procStartFt
    },
    kind: c(t.kind),
    sessionId: typeof t.sessionId === "string" ? t.sessionId : void 0,
    status: m(t.status),
    entrypoint: typeof t.entrypoint === "string" ? t.entrypoint : void 0,
    ...typeof t.pidDomain === "string" && {
      pidDomain: t.pidDomain
    }
  }
}

function El(n) {
  if (n <= 1) return !1;
  try {
    return process.kill(n, 0), !0
  } catch {
    return !1
  }
}
async function o(n) {
  if (n === "windows") return `win32:${a().toLowerCase()}`;
  if (n !== "linux" && n !== "wsl") return "win32";
  let [t, e] = await Promise.all([s("/etc/machine-id", "utf8").then((r) => r.trim(), () => ""), u("/proc/self/ns/pid").catch(() => "")]);
  return `win32:${t}:${e}`
}
import {
  hostname as S
} from "os";
class i {
  pidSpace = null;
  pidDomain = void 0;
  uidsCollapse = null
}
var Uet = he(new i, (n) => {
  n.pidDomain = void 0
});

function hte() {
  if (Uet.pidSpace === null) {
    let n = "";
    Uet.pidSpace = `${S()}${n===""?"":"#"+n}`
  }
  return Uet.pidSpace
}

function Xx() {
  return Uet.pidDomain ??= (async () => o(x()))().catch((n) => {
    throw Uet.pidDomain = void 0, n
  }), Uet.pidDomain
}
import {
  timingSafeEqual as g
} from "crypto";
import {
  readFile as h
} from "fs/promises";
async function AUt(n) {
  try {
    let t = ee(await h(n, "utf8"));
    if (t === null || typeof t !== "object") return;
    let e = {};
    if ("rvAuth" in t && typeof t.rvAuth === "string") e.rvAuth = t.rvAuth;
    if ("ptyAuth" in t && typeof t.ptyAuth === "string") e.ptyAuth = t.ptyAuth;
    if ("claimAuth" in t && typeof t.claimAuth === "string") e.claimAuth = t.claimAuth;
    return e
  } catch {
    return
  }
}

function OU(n, t) {
  if (typeof n !== "string" || !t || n.length === 0) return !1;
  let e = Buffer.from(n),
    r = Buffer.from(t);
  if (e.length !== r.length) return !1;
  return g(e, r)
}
export {
  LXi,
  RUt,
  NXi,
  Zin,
  Ljn,
  FXi,
  El,
  Uet,
  hte,
  Xx,
  AUt,
  OU
};
