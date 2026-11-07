// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Po } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Jna } from "B:/~BUN/root/chunk-65j2302z.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { ZD, be, Ga, kp, kte } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { RYo } from "B:/~BUN/root/chunk-ya7new2p.js";
import { aRe } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { o, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { homedir as U, hostname } from "os";
import { dirname as y, join as A } from "path";
function MK(e) {
  return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var version = 1,
  terms = "unattended-serving:v1:auto-arm-classifier",
  P = "unattended-serving-consent.json",
  D = p(() => u({
    version: T(version),
    choice: B(["accepted", "declined"]),
    terms: o(),
    decidedAt: o(),
    hostname: o()
  }));
function v() {
  return A(U(), ".claude", "state", P);
}
function Pqt(e = hostname()) {
  return aRe(MK(e));
}
function Q6r() {
  return `change it in /config, or delete ${ks(v())} to be asked again`;
}
function h() {
  return {
    readText: async () => {
      try {
        return await Dn().read(v());
      } catch (error) {
        if (K(error)) return;
        throw error;
      }
    },
    writeText: async e => {
      let n = v();
      await Dn().mkdir(y(n), 448), await Dn().atomicWrite(n, e, 384);
    },
    now: () => new Date(),
    hostname: hostname
  };
}
async function U6e(e) {
  let n = e === void 0 ? i() : void 0,
    readAt = Date.now(),
    a = n?.writes,
    {
      choice: choice,
      unreadable: unreadable,
      staleYes: staleYes
    } = await E(e ?? h()),
    f = n !== void 0 && ZD() && (await RYo(Jna())),
    hostAllows = f && (await n3r({
      start: !0
    })).confined;
  if (n !== void 0 && a === n.writes && (n.view === void 0 || !c(n) || readAt >= n.view.readAt)) {
    if (n.view = {
      choice: choice,
      readAt: readAt,
      unreadable: unreadable,
      staleYes: staleYes === !0,
      hostAllows: hostAllows,
      grantOutsideSandbox: f && !hostAllows
    }, c(n)) n.staleUnresolved = !1;
  }
  return choice;
}
async function E(e) {
  let n;
  try {
    n = await e.readText();
  } catch (error) {
    return t(`unattended-serving consent: store unreadable (${d(error)})`, {
      level: "warn"
    }), {
      choice: "unset",
      unreadable: !0
    };
  }
  if (n === void 0) return {
    choice: "unset",
    unreadable: !1
  };
  try {
    let r = D().safeParse(ee(n));
    if (!r.success) return {
      choice: "unset",
      unreadable: !0
    };
    let a = r.data.choice === "declined" || MK(r.data.hostname) === MK(e.hostname()) && r.data.terms === terms;
    return {
      choice: a ? r.data.choice : "unset",
      unreadable: !1,
      staleYes: !a && r.data.choice === "accepted"
    };
  } catch {
    return {
      choice: "unset",
      unreadable: !0
    };
  }
}
async function B6e(choice_2, n) {
  if (choice_2 === "accepted" && E8()) return t("unattended-serving consent: a Yes while settings turn unattended serving off is not stored", {
    level: "warn"
  }), !1;
  let r = n === void 0 ? i() : void 0,
    a = n ?? h();
  try {
    if (await a.writeText(_({
      version: version,
      choice: choice_2,
      terms: terms,
      decidedAt: a.now().toISOString(),
      hostname: MK(a.hostname())
    }, null, 2) + `
`), r !== void 0) r.writes += 1, r.view = {
      choice: choice_2,
      readAt: Date.now(),
      unreadable: !1,
      staleYes: !1,
      hostAllows: r.view?.hostAllows === !0,
      grantOutsideSandbox: r.view?.grantOutsideSandbox === !0
    }, r.staleUnresolved = !1;
    return !0;
  } catch (error) {
    return t(`unattended-serving consent: answer not saved (${d(error)})`, {
      level: "warn"
    }), !1;
  }
}
var N = 3000,
  M = new W(() => ({
    view: void 0,
    refresh: void 0,
    refreshStartedAt: void 0,
    abandoned: void 0,
    staleUnresolved: !1,
    writes: 0
  }));
function i() {
  return Po(M);
}
function zne() {
  let e = i();
  if (!c(e)) x(e);
  return e.view?.choice ?? "unset";
}
function c(e, n = Date.now()) {
  if (e.view === void 0) return !1;
  let r = n - e.view.readAt;
  return r >= 0 && r <= N;
}
function WCt(e = Date.now()) {
  return c(i(), e);
}
var b = 1500;
async function Oqt(e) {
  let n = i();
  if (c(n)) return;
  let r = x(n),
    a,
    s,
    g = e?.aborted === !0 ? Promise.resolve("gave_up") : new Promise(l => {
      a = setTimeout(f => f("gave_up"), b, l), s = () => l("gave_up"), e?.addEventListener("abort", s, {
        once: !0
      });
    });
  if (await Promise.race([r, g]), clearTimeout(a), s !== void 0) e?.removeEventListener("abort", s);
  if (!c(n)) n.staleUnresolved = !0, w(n, r);
}
function w(e, n) {
  if (e.refresh !== n || e.abandoned !== void 0) return !1;
  return e.refresh = void 0, e.refreshStartedAt = void 0, e.abandoned = n, n.finally(() => {
    if (e.abandoned === n) e.abandoned = void 0;
  }), !0;
}
function x(e) {
  if (e.refresh !== void 0) {
    if (e.refreshStartedAt !== void 0 && performance.now() - e.refreshStartedAt <= b || !w(e, e.refresh)) return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let n = U6e().catch(() => {
    return;
  }).finally(() => {
    if (e.refresh === n) e.refresh = void 0, e.refreshStartedAt = void 0;
  });
  return e.refresh = n, n;
}
function Z6r() {
  return zne() === "accepted";
}
function E8() {
  return e3r() !== void 0;
}
function e3r() {
  let e = n => n?.remoteTools?.allowUnattendedServing === !1;
  return kp().some(e) || kte().some(e) || e(be("policySettings")) ? "managed" : e(Ga("userSettings")) ? "user" : void 0;
}
function USn() {
  zne();
}
function t3r() {
  let {
    view: view
  } = i();
  return view?.unreadable === !0 || view?.staleYes === !0;
}
function TYo() {
  return i().view?.unreadable === !0;
}
async function n3r({
  start: start
}) {
  try {
    let {
      classifyDeviceSandboxPosture: classifyDeviceSandboxPosture,
      ensureDeviceSandboxPosture: ensureDeviceSandboxPosture,
      readDeviceSandboxSnapshot: readDeviceSandboxSnapshot
    } = await import("B:/~BUN/root/chunk-1byjkjzx.js");
    return start ? await ensureDeviceSandboxPosture() : classifyDeviceSandboxPosture(readDeviceSandboxSnapshot(), {
      requireStarted: !1
    });
  } catch (error) {
    return t(`unattended-serving consent: command sandbox could not be asked, taken as not confining (${d(error)})`, {
      level: "warn"
    }), {
      confined: !1,
      reason: "sandbox_failed_to_start"
    };
  }
}
function O() {
  return i().view?.hostAllows === !0;
}
function CYo() {
  let e = i();
  return !e.staleUnresolved && e.view?.grantOutsideSandbox === !0;
}
function C(e, n) {
  return n && e.view !== void 0 && e.view.choice === "unset" && !e.view.unreadable;
}
function Jit() {
  try {
    let e = i();
    return !E8() && !e.staleUnresolved && C(e, e.view?.hostAllows === !0);
  } catch {
    return !1;
  }
}
function Iqt(e) {
  try {
    let n = Z6r(),
      r = i();
    return E8() || r.staleUnresolved || !n && !C(r, e ?? O());
  } catch (error) {
    return t(`unattended-serving consent: read failed, call treated as unconsented (${d(error)})`, {
      level: "warn"
    }), !0;
  }
}
export { MK, version as etr, terms as ttr, Pqt, Q6r, U6e, B6e, zne, WCt, Oqt, Z6r, E8, e3r, USn, t3r, TYo, n3r, CYo, Jit, Iqt };