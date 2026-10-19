// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { s7t } from "B:/~BUN/root/chunk-qvd6ab1g.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { PWt, Qhn, Zhn, Oet } from "B:/~BUN/root/chunk-7sxpk2ns.js";
import { nts } from "B:/~BUN/root/chunk-a4ntc3g3.js";
import { fr } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { readFileSync as E } from "fs";
import { posix as _ } from "path";
var m = `${nts}toolContainerCpu`,
  d = "anthropic/toolContainerCpu",
  R = 1,
  b = 86400000,
  x = 31 * b;
function f(n) {
  return Dn(n) && n[m] === R;
}
var c = new z(() => ({}));
function PWr(n, e) {
  if (e !== "tool-container" || !fr() || a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") return;
  let r;
  try {
    r = E("/proc/self/cgroup", "utf8");
  } catch {
    return;
  }
  let t = Qhn(r);
  if (t === void 0) return;
  let u = l(0),
    o = Zhn(t);
  if (u !== void 0) {
    let usageFile = o === void 0 ? void 0 : _.join(o, "cpuacct.usage"),
      msAtZero = usageFile === void 0 ? void 0 : Oet(usageFile);
    c.of(n).meter = {
      machineMsAtZero: u.cpuMs - u.daemonCpuMs,
      callsBeingServed: 0,
      atCallsStart: void 0,
      inCallMs: 0,
      inCallCpuMs: 0,
      shell: usageFile === void 0 || msAtZero === void 0 ? void 0 : {
        usageFile: usageFile,
        msAtZero: msAtZero
      }
    };
  }
  s7t(o);
}
function xZs(n) {
  let {
    meter: meter
  } = c.of(n);
  if (meter === void 0) return;
  if (meter.callsBeingServed++ === 0) meter.atCallsStart = l(meter.machineMsAtZero);
  return {
    [Symbol.dispose]() {
      if (--meter.callsBeingServed === 0) {
        let r = M(meter, l(meter.machineMsAtZero));
        meter.inCallMs = r.ms, meter.inCallCpuMs = r.cpuMs, meter.atCallsStart = void 0;
      }
    }
  };
}
function PZs(n, e, r) {
  let {
    meter: meter_2
  } = c.of(e);
  if (meter_2 === void 0 || !f(r)) return n;
  let u = meter_2.shell === void 0 ? void 0 : Oet(meter_2.shell.usageFile),
    o = l(meter_2.machineMsAtZero);
  if (o === void 0) return n;
  let s = M(meter_2, o),
    cpu_ms = Math.floor(o.cpuMs),
    shell_cpu_ms = meter_2.shell === void 0 || u === void 0 ? void 0 : Math.floor(u - meter_2.shell.msAtZero),
    C = {
      start_time_unix_ms: Math.floor(performance.timeOrigin),
      up_ms: Math.floor(o.upMs),
      cpu_ms: cpu_ms,
      daemon_cpu_ms: Math.floor(o.daemonCpuMs),
      in_call_ms: Math.floor(s.ms),
      in_call_cpu_ms: Math.floor(s.cpuMs),
      ...(shell_cpu_ms !== void 0 && shell_cpu_ms >= 1 && shell_cpu_ms <= cpu_ms && {
        shell_cpu_ms: shell_cpu_ms
      })
    },
    h = n.isError === !0 ? d : m;
  return {
    ...n,
    _meta: {
      ...n._meta,
      [h]: C
    }
  };
}
function M({
  atCallsStart: atCallsStart,
  inCallMs: e,
  inCallCpuMs: r
}, t) {
  return atCallsStart === void 0 || t === void 0 ? {
    ms: e,
    cpuMs: r
  } : {
    ms: e + t.upMs - atCallsStart.upMs,
    cpuMs: r + Math.max(0, t.cpuMs - atCallsStart.cpuMs)
  };
}
function l(n) {
  let e = Oet(_.join(PWt, "cpuacct.usage"));
  if (e === void 0) return;
  try {
    let {
      user: user,
      system: system
    } = process.cpuUsage();
    return {
      cpuMs: Math.max(0, e - n),
      daemonCpuMs: (user + system) / 1000,
      upMs: performance.now()
    };
  } catch {
    return;
  }
}
export { PWr, xZs, PZs };