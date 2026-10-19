// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Y,
  je
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  se
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  Sde,
  AZe
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  smn,
  lt,
  ct
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import {
  I5,
  xTe,
  Bne
} from "B:/~BUN/root/chunk-7j1crw74.js";
import {
  delimiter as l,
  join as C
} from "path";

function Al(e, t) {
  if (t in e) return e[t];
  if (I() !== "windows") return;
  let n = Object.keys(e).find((r) => r.toUpperCase() === t.toUpperCase());
  return n === void 0 ? void 0 : e[n]
}
class f {
  #e = !1;
  get forcedUnavailable() {
    return this.#e
  }
  forceUnavailable(e) {
    this.#e = e
  }
}
var T = new f;

function u() {
  return !T.forcedUnavailable && typeof Bun < "u" && typeof Bun.ant?.windowsProcessCreationTime === "function"
}
var y = 116444736000000000n;

function KUt(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  try {
    return Bun.ant.windowsProcessCreationTime(e) ?? void 0
  } catch {
    return
  }
}

function d(e) {
  return Number((e - y) / 10000n)
}
async function KFr(e) {
  if (I() !== "linux" && I() !== "wsl") return;
  if (!_2(e)) return;
  try {
    let t = await se().readFile(`/proc/${e}/stat`, {
      encoding: "utf8"
    });
    return xTe(t)
  } catch {
    return
  }
}
async function Lge(e) {
  return Bne(await KFr(e))
}
async function Vcn(e) {
  if (I() !== "macos") return Lge(e);
  let {
    code: t,
    stdout: n
  } = await lt("ps", ["-o", "stat=", "-p", String(e)], {
    timeout: 1000
  });
  return t === 0 && n.trim().startsWith("Z")
}
var x = 2147483647;

function _2(e) {
  return Number.isInteger(e) && e > 1 && e <= x
}

function am(e) {
  if (!_2(e)) return !1;
  try {
    return process.kill(e, 0), !1
  } catch (t) {
    return k(t) === "ESRCH"
  }
}
var _ = 16;
async function KWe() {
  let e = I();
  if (e !== "linux" && e !== "wsl") return !0;
  let t = se(),
    n = await t.readlink("/proc/self").catch(() => null);
  if (n === null || n !== String(process.pid)) return !1;
  let r = await t.readdir("/proc").catch(() => null);
  if (!r) return !1;
  return r.filter((o) => /^\d+$/.test(o.name)).length >= _
}

function zEe(e, t) {
  let n = e.filter((r) => Math.abs(r) > 1);
  for (let r of n) {
    try {
      process.kill(r, "SIGTERM")
    } catch {
      continue
    }
    return setTimeout((i, o, s) => {
      if (!t5n(o, s)) return;
      try {
        process.kill(i, "SIGKILL")
      } catch {}
    }, 5000, r, Math.abs(n[0]), t).unref(), !0
  }
  return !1
}
async function Nge(e, t, n = "SIGTERM") {
  return !1
}
async function m(e, t) {
  let n = await Fge(e);
  if (n !== void 0) return GEe(t, n) ? "same" : "other";
  try {
    return process.kill(e, 0), "other"
  } catch (r) {
    return k(r) === "ESRCH" ? "gone" : "other"
  }
}

function Ayt(e) {
  return
}

function rFo(e, t = 12) {
  return []
}
async function oFo(e, t = 10) {
  return (await e5n(e, t)).ancestors
}
async function e5n(e, t = 10) {
  {
    let o = `
      $currentPid = ${String(e)}
      $ancestors = @()
      for ($i = 0; $i -lt ${t}; $i++) {
        $proc = Get-CimInstance Win32_Process -Filter "ProcessId=$currentPid" -ErrorAction SilentlyContinue
        if (-not $proc -or -not $proc.ParentProcessId -or $proc.ParentProcessId -eq 0) { break }
        $currentPid = $proc.ParentProcessId
        $ancestors += $currentPid
      }
      $ancestors -join ','
    `.trim(),
      s = await ct("powershell.exe", ["-NoProfile", "-Command", o], {
        timeout: 3000
      });
    return {
      ancestors: s.code !== 0 || !s.stdout?.trim() ? [] : s.stdout.trim().split(",").filter(Boolean).map((a) => parseInt(a, 10)).filter((a) => !isNaN(a)),
      readFailed: !1,
      truncated: !1
    }
  }
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`,
    r = await ct("sh", ["-c", n], {
      timeout: 3000
    }),
    i = (r.stdout ?? "").trim().split(`
`).filter(Boolean);
  return {
    ancestors: i.filter((o) => o !== "END" && o !== "FAIL").map((o) => parseInt(o, 10)).filter((o) => !isNaN(o)),
    readFailed: r.code !== 0 || i.at(-1) === "FAIL",
    truncated: r.code === 0 && i.at(-1) !== "END" && i.at(-1) !== "FAIL"
  }
}

function sFo(e) {
  try {
    let n = `powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${String(e)}\\").CommandLine"`,
      r = smn(n, {
        timeout: 1000
      });
    return r ? r.trim() : null
  } catch {
    return null
  }
}

function YWe(e) {
  try {
    if (u()) return KUt(e)?.toString();
    return smn(`powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=${e}\\").CreationDate.Ticks"`, {
      timeout: 1000
    })?.trim() || void 0
  } catch {
    return
  }
}

function t5n(e, t) {
  if (t === void 0) return !0;
  return g(t, YWe(e))
}

function GEe(e, t) {
  if (t === e) return !0;
  let n = Number(e),
    r = Number(t);
  return Number.isFinite(n) && Number.isFinite(r) && n > 300000000000000000 !== r > 300000000000000000
}

function g(e, t) {
  return t === void 0 || t === e || F(e, t)
}

function F(e, t) {
  if (!u()) return !1;
  let n = Number(e),
    r = Number(t);
  return Number.isFinite(n) && Number.isFinite(r) && n > 300000000000000000 !== r > 300000000000000000
}
async function ek(e, t) {
  if (t === void 0) return !0;
  return g(t, await ad(e))
}
async function Uh(e, t) {
  let n = await ad(e, {
    skipCache: !0
  });
  return n === void 0 ? void 0 : GEe(t, n)
}
class h {
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
var Fle = new h;
class w {
  #e = new Map;
  get(e) {
    return this.#e.get(e)
  }
  set(e, t) {
    this.#e.set(e, t)
  }
}
var E = new z(() => new w);

function Hle() {
  return Fle.token ?? Fle.set(YWe(process.pid))
}
var N = 1000;
async function O_() {
  return Fle.token ?? await je(ad(process.pid).then((e) => Fle.token ?? Fle.set(e)), N)
}

function jD(e) {
  if (u()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart
}

function tne(e) {
  return u() ? {
    procStart: void 0,
    procStartFt: e
  } : {
    procStart: e,
    procStartFt: void 0
  }
}
var A = 60000,
  L = 5000;
async function ad(e, t) {
  let n = Date.now(),
    r = E.of(j().host);
  if (t?.env !== void 0) return S(e, t.env);
  if (!t?.skipCache) {
    let c = r.get(e),
      a = c?.miss ? L : A;
    if (c && n - c.at < a) return c.p
  }
  let i = S(e),
    o = {
      at: n,
      p: i
    };
  r.set(e, o);
  let s = await i;
  if (s === void 0 && r.get(e) === o) o.miss = !0, o.at = Date.now();
  return s
}
var p = 250,
  b = 2500;
async function Fge(e) {
  let t = Date.now() + b,
    n = !1,
    r = await je(ad(e, {
      skipCache: !0
    }).finally(() => {
      n = !0
    }), b);
  if (r !== void 0 || !n) return r;
  let i = p + Math.floor(Math.random() * p),
    o = t - Date.now() - i;
  if (o <= 0) return;
  return await Y(i), je(ad(e, {
    skipCache: !0
  }), o)
}
var R = 1e4;

function P(e) {
  let t = AZe(Al(e, "PATH") ?? "").split(l),
    n = C(Al(e, "SystemRoot") || "C:\\Windows", "System32", "WindowsPowerShell", "v1.0").toLowerCase();
  return t.filter((r) => r.replace(/[\\/]+$/, "").toLowerCase() === n).join(l)
}
async function S(e, t) {
  let n = t === void 0 ? {} : {
    env: t,
    extendEnv: !1
  };
  try {
    {
      if (u()) return KUt(e)?.toString();
      let o = t === void 0 ? "powershell.exe" : Sde("powershell.exe", P(t));
      if (o === null) return;
      let s = await ct(o, ["-NoProfile", "-Command", `(Get-CimInstance Win32_Process -Filter "ProcessId=${e}").CreationDate.Ticks`], {
        timeout: R,
        ...n
      });
      return s.code === 0 && s.stdout?.trim() ? s.stdout.trim() : void 0
    }
    let r = t === void 0 ? "ps" : Sde("ps", P(t));
    if (r === null) return;
    let i = await ct(r, ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      ...n,
      env: {
        ...t ?? process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    return i.code === 0 && i.stdout ? i.stdout.trim() : void 0
  } catch {
    return
  }
}
async function mQe(e) {
  try {
    {
      if (u()) {
        let o = KUt(e);
        return o === void 0 ? null : d(o)
      }
      let r = await ct("powershell.exe", ["-NoProfile", "-Command", `[DateTimeOffset]::new((Get-CimInstance Win32_Process -Filter "ProcessId=${e}").CreationDate).ToUnixTimeMilliseconds()`], {
          timeout: 1000
        }),
        i = Number(r.stdout?.trim());
      return r.code === 0 && Number.isFinite(i) ? i : null
    }
    let t = await ct("ps", ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      env: {
        ...process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    if (t.code !== 0 || !t.stdout?.trim()) return null;
    let n = Date.parse(`${t.stdout.trim()} UTC`);
    return Number.isFinite(n) ? n : null
  } catch {
    return null
  }
}
export {
  Al,
  KUt,
  KFr,
  Lge,
  Vcn,
  _2,
  am,
  KWe,
  zEe,
  Nge,
  Ayt,
  rFo,
  oFo,
  e5n,
  sFo,
  YWe,
  t5n,
  GEe,
  ek,
  Uh,
  Fle,
  Hle,
  O_,
  jD,
  tne,
  ad,
  Fge,
  mQe
};
