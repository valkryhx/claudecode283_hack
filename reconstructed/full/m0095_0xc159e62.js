// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  ce,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  QBt,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  C_e
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  tBe,
  vhn,
  t9e
} from "B:/~BUN/root/chunk-23aycy1d.js";
import {
  Re
} from "B:/~BUN/root/chunk-yv67t8hr.js";

function da(e, n) {
  if (n in e) return e[n];
  if (O() !== "windows") return;
  let r = Object.keys(e).find((i) => i.toUpperCase() === n.toUpperCase());
  return r === void 0 ? void 0 : e[r]
}
var l;

function bfn() {
  if (l !== void 0) return l;
  if (O() !== "windows") return l = null, l;
  try {
    let e = Re("bun:ffi");
    l = e.dlopen("kernel32.dll", {
      OpenProcess: {
        args: ["u32", "i32", "u32"],
        returns: "ptr"
      },
      GetProcessTimes: {
        args: ["ptr", "ptr", "ptr", "ptr", "ptr"],
        returns: "i32"
      },
      CreateToolhelp32Snapshot: {
        args: ["u32", "u32"],
        returns: "ptr"
      },
      Process32FirstW: {
        args: ["ptr", "ptr"],
        returns: "i32"
      },
      Process32NextW: {
        args: ["ptr", "ptr"],
        returns: "i32"
      },
      CloseHandle: {
        args: ["ptr"],
        returns: "i32"
      }
    }).symbols, t("[win32-kernel32] bun:ffi loaded")
  } catch (e) {
    t(`[win32-kernel32] bun:ffi unavailable, falling back to spawn: ${e instanceof Error?e.message:String(e)}`), l = null
  }
  return l
}
class d {
  #e = !1;
  get forcedUnavailable() {
    return this.#e
  }
  forceUnavailable(e) {
    this.#e = e
  }
}
var y = new d;

function f() {
  return !y.forcedUnavailable && bfn() !== null
}
var w = 4096,
  x = 116444736000000000n;

function bpt(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  let n = bfn();
  if (n == null) return;
  let r = n.OpenProcess(w, 0, e);
  if (!r) return;
  try {
    let i = new Uint8Array(8),
      s = new Uint8Array(8),
      o = new Uint8Array(8),
      u = new Uint8Array(8);
    if (n.GetProcessTimes(r, i, s, o, u) === 0) return;
    return new DataView(i.buffer).getBigUint64(0, !0)
  } catch {
    return
  } finally {
    n.CloseHandle(r)
  }
}

function m(e) {
  return Number((e - x) / 10000n)
}
async function f3n(e) {
  if (O() !== "linux" && O() !== "wsl") return;
  if (!Sfn(e)) return;
  try {
    let n = await ce().readFile(`/proc/${e}/stat`, {
      encoding: "utf8"
    });
    return vhn(n)
  } catch {
    return
  }
}
async function g$t(e) {
  return t9e(await f3n(e))
}
var T = 2147483647;

function Sfn(e) {
  return Number.isInteger(e) && e > 1 && e <= T
}

function Hh(e) {
  if (!Sfn(e)) return !1;
  try {
    return process.kill(e, 0), !1
  } catch (n) {
    return v(n) === "ESRCH"
  }
}
var C = 16;
async function wfn() {
  let e = O();
  if (e !== "linux" && e !== "wsl") return !0;
  let n = ce(),
    r = await n.readlink("/proc/self").catch(() => null);
  if (r === null || r !== String(process.pid)) return !1;
  let i = await n.readdir("/proc").catch(() => null);
  if (!i) return !1;
  return i.filter((o) => /^\d+$/.test(o.name)).length >= C
}

function Xce(e, n) {
  let r = e.filter((i) => Math.abs(i) > 1);
  for (let i of r) {
    try {
      process.kill(i, "SIGTERM")
    } catch {
      continue
    }
    return setTimeout((s, o, u) => {
      if (!kfn(o, u)) return;
      try {
        process.kill(s, "SIGKILL")
      } catch {}
    }, 5000, i, Math.abs(r[0]), n).unref(), !0
  }
  return !1
}
async function cne(e, n, r = "SIGTERM") {
  return !1
}
async function p(e, n) {
  let r = await eAe(e);
  if (r !== void 0) return R$e(n, r) ? "same" : "other";
  try {
    return process.kill(e, 0), "other"
  } catch (i) {
    return v(i) === "ESRCH" ? "gone" : "other"
  }
}

function S5e(e) {
  return
}

function gUr(e, n = 12) {
  return []
}
async function hUr(e, n = 10) {
  return (await vfn(e, n)).ancestors
}
async function vfn(e, n = 10) {
  {
    let o = `
      $currentPid = ${String(e)}
      $ancestors = @()
      for ($i = 0; $i -lt ${n}; $i++) {
        $proc = Get-CimInstance Win32_Process -Filter "ProcessId=$currentPid" -ErrorAction SilentlyContinue
        if (-not $proc -or -not $proc.ParentProcessId -or $proc.ParentProcessId -eq 0) { break }
        $currentPid = $proc.ParentProcessId
        $ancestors += $currentPid
      }
      $ancestors -join ','
    `.trim(),
      u = await Ve("powershell.exe", ["-NoProfile", "-Command", o], {
        timeout: 3000
      });
    return {
      ancestors: u.code !== 0 || !u.stdout?.trim() ? [] : u.stdout.trim().split(",").filter(Boolean).map((c) => parseInt(c, 10)).filter((c) => !isNaN(c)),
      readFailed: !1,
      truncated: !1
    }
  }
  let r = `pid=${String(e)}; for i in $(seq 1 ${n}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`,
    i = await Ve("sh", ["-c", r], {
      timeout: 3000
    }),
    s = (i.stdout ?? "").trim().split(`
`).filter(Boolean);
  return {
    ancestors: s.filter((o) => o !== "END" && o !== "FAIL").map((o) => parseInt(o, 10)).filter((o) => !isNaN(o)),
    readFailed: i.code !== 0 || s.at(-1) === "FAIL",
    truncated: i.code === 0 && s.at(-1) !== "END" && s.at(-1) !== "FAIL"
  }
}

function yUr(e) {
  try {
    let r = `powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${String(e)}\\").CommandLine"`,
      i = QBt(r, {
        timeout: 1000
      });
    return i ? i.trim() : null
  } catch {
    return null
  }
}

function QRe(e) {
  try {
    if (f()) return bpt(e)?.toString();
    return QBt(`powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${e}\\").CreationDate.Ticks"`, {
      timeout: 1000
    })?.trim() || void 0
  } catch {
    return
  }
}

function kfn(e, n) {
  if (n === void 0) return !0;
  return P(n, QRe(e))
}

function R$e(e, n) {
  if (n === e) return !0;
  let r = Number(e),
    i = Number(n);
  return Number.isFinite(r) && Number.isFinite(i) && r > 300000000000000000 !== i > 300000000000000000
}

function P(e, n) {
  return n === void 0 || n === e || F(e, n)
}

function F(e, n) {
  if (!f()) return !1;
  let r = Number(e),
    i = Number(n);
  return Number.isFinite(r) && Number.isFinite(i) && r > 300000000000000000 !== i > 300000000000000000
}
async function M_(e, n) {
  if (n === void 0) return !0;
  return P(n, await $c(e))
}
async function Kk(e, n) {
  let r = await $c(e, {
    skipCache: !0
  });
  return r === void 0 ? void 0 : R$e(n, r)
}
class S {
  #e = void 0;
  get token() {
    return this.#e
  }
  set(e) {
    return this.#e = e, e
  }
  reset() {
    this.#e = void 0
  }
}
var ZRe = new S;
class h {
  #e = new Map;
  get(e) {
    return this.#e.get(e)
  }
  set(e, n) {
    this.#e.set(e, n)
  }
}
var I = new q(() => new h);

function _J() {
  return ZRe.token ?? ZRe.set(QRe(process.pid))
}
async function Dv() {
  return ZRe.token ?? ZRe.set(await $c(process.pid))
}

function Mx(e) {
  if (f()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart
}

function oY(e) {
  return f() ? {
    procStart: void 0,
    procStartFt: e
  } : {
    procStart: e,
    procStartFt: void 0
  }
}
var _ = 60000,
  A = 5000;
async function $c(e, n) {
  let r = Date.now(),
    i = I.of(j().host);
  if (n?.env !== void 0) return g(e, n.env);
  if (!n?.skipCache) {
    let a = i.get(e),
      c = a?.miss ? A : _;
    if (a && r - a.at < c) return a.p
  }
  let s = g(e),
    o = {
      at: r,
      p: s
    };
  i.set(e, o);
  let u = await s;
  if (u === void 0 && i.get(e) === o) o.miss = !0;
  return u
}
var b = 250;
async function eAe(e) {
  let n = await $c(e, {
    skipCache: !0
  });
  if (n !== void 0) return n;
  return await Q(b + Math.floor(Math.random() * b)), $c(e, {
    skipCache: !0
  })
}
async function g(e, n) {
  let r = n === void 0 ? {} : {
    env: n,
    extendEnv: !1
  };
  try {
    {
      if (f()) return bpt(e)?.toString();
      let o = n === void 0 ? "powershell.exe" : C_e("powershell.exe", da(n, "PATH") ?? "");
      if (o === null) return;
      let u = await Ve(o, ["-NoProfile", "-Command", `(Get-CimInstance Win32_Process -Filter "ProcessId=${e}").CreationDate.Ticks`], {
        timeout: 1000,
        ...r
      });
      return u.code === 0 && u.stdout?.trim() ? u.stdout.trim() : void 0
    }
    let i = n === void 0 ? "ps" : C_e("ps", da(n, "PATH") ?? "");
    if (i === null) return;
    let s = await Ve(i, ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      ...r,
      env: {
        ...n ?? process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    return s.code === 0 && s.stdout ? s.stdout.trim() : void 0
  } catch {
    return
  }
}
async function w5e(e) {
  try {
    {
      if (f()) {
        let o = bpt(e);
        return o === void 0 ? null : m(o)
      }
      let i = await Ve("powershell.exe", ["-NoProfile", "-Command", `[DateTimeOffset]::new((Get-CimInstance Win32_Process -Filter "ProcessId=${e}").CreationDate).ToUnixTimeMilliseconds()`], {
          timeout: 1000
        }),
        s = Number(i.stdout?.trim());
      return i.code === 0 && Number.isFinite(s) ? s : null
    }
    let n = await Ve("ps", ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      env: {
        ...process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    if (n.code !== 0 || !n.stdout?.trim()) return null;
    let r = Date.parse(`${n.stdout.trim()} UTC`);
    return Number.isFinite(r) ? r : null
  } catch {
    return null
  }
}
export {
  da,
  bfn,
  bpt,
  f3n,
  g$t,
  Sfn,
  Hh,
  wfn,
  Xce,
  cne,
  S5e,
  gUr,
  hUr,
  vfn,
  yUr,
  QRe,
  kfn,
  R$e,
  M_,
  Kk,
  ZRe,
  _J,
  Dv,
  Mx,
  oY,
  $c,
  eAe,
  w5e
};
