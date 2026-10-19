// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ms } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { n6s } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { IB, me, Zp, Vle } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Y7r } from "B:/~BUN/root/chunk-k0k4yp33.js";
import { $me } from "B:/~BUN/root/chunk-mbz8rhex.js";
import { o, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { homedir as y, hostname } from "os";
import { dirname as A, join as T } from "path";
function LY(e) {
  return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var version = 1,
  terms = "unattended-serving:v1:auto-arm-classifier",
  D = "unattended-serving-consent.json",
  P = f(() => u({
    version: C(version),
    choice: U(["accepted", "declined"]),
    terms: o(),
    decidedAt: o(),
    hostname: o()
  }));
function m() {
  return T(y(), ".claude", "state", D);
}
function dCt(e = hostname()) {
  return $me(LY(e));
}
function ecr() {
  return `change it in /config, or delete ${Es(m())} to be asked again`;
}
function h() {
  return {
    readText: async () => {
      try {
        return await gn().read(m());
      } catch (error) {
        if (G(error)) return;
        throw error;
      }
    },
    writeText: async e => {
      let n = m();
      await gn().mkdir(A(n), 448), await gn().atomicWrite(n, e, 384);
    },
    now: () => new Date(),
    hostname: hostname
  };
}
async function Xce(e) {
  let n = e === void 0 ? i() : void 0,
    readAt = Date.now(),
    a = n?.writes,
    {
      choice: choice,
      unreadable: unreadable,
      staleYes: staleYes
    } = await E(e ?? h()),
    hostAllows = n !== void 0 && IB() && (await Y7r(n6s())) && (await rcr({
      start: !0
    }));
  if (n !== void 0 && a === n.writes && (n.view === void 0 || !c(n) || readAt >= n.view.readAt)) {
    if (n.view = {
      choice: choice,
      readAt: readAt,
      unreadable: unreadable,
      staleYes: staleYes === !0,
      hostAllows: hostAllows
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
    let r = P().safeParse(J(n));
    if (!r.success) return {
      choice: "unset",
      unreadable: !0
    };
    let a = r.data.choice === "declined" || LY(r.data.hostname) === LY(e.hostname()) && r.data.terms === terms;
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
async function tFe(choice_2, n) {
  if (choice_2 === "accepted" && K$()) return t("unattended-serving consent: a Yes while settings turn unattended serving off is not stored", {
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
      hostname: LY(a.hostname())
    }, null, 2) + `
`), r !== void 0) r.writes += 1, r.view = {
      choice: choice_2,
      readAt: Date.now(),
      unreadable: !1,
      staleYes: !1,
      hostAllows: r.view?.hostAllows === !0
    }, r.staleUnresolved = !1;
    return !0;
  } catch (error) {
    return t(`unattended-serving consent: answer not saved (${d(error)})`, {
      level: "warn"
    }), !1;
  }
}
var N = 3000,
  M = new z(() => ({
    view: void 0,
    refresh: void 0,
    refreshStartedAt: void 0,
    abandoned: void 0,
    staleUnresolved: !1,
    writes: 0
  }));
function i() {
  return ms(M);
}
function I8() {
  let e = i();
  if (!c(e)) b(e);
  return e.view?.choice ?? "unset";
}
function c(e, n = Date.now()) {
  if (e.view === void 0) return !1;
  let r = n - e.view.readAt;
  return r >= 0 && r <= N;
}
function K7r(e = Date.now()) {
  return c(i(), e);
}
var p = 1500;
async function m6t(e) {
  let n = i();
  if (c(n)) return;
  let r = b(n),
    a,
    s,
    v = e?.aborted === !0 ? Promise.resolve("gave_up") : new Promise(l => {
      a = setTimeout(g => g("gave_up"), p, l), s = () => l("gave_up"), e?.addEventListener("abort", s, {
        once: !0
      });
    });
  if (await Promise.race([r, v]), clearTimeout(a), s !== void 0) e?.removeEventListener("abort", s);
  if (!c(n)) n.staleUnresolved = !0, w(n, r);
}
function w(e, n) {
  if (e.refresh !== n || e.abandoned !== void 0) return !1;
  return e.refresh = void 0, e.refreshStartedAt = void 0, e.abandoned = n, n.finally(() => {
    if (e.abandoned === n) e.abandoned = void 0;
  }), !0;
}
function b(e) {
  if (e.refresh !== void 0) {
    if (e.refreshStartedAt !== void 0 && performance.now() - e.refreshStartedAt <= p || !w(e, e.refresh)) return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let n = Xce().catch(() => {
    return;
  }).finally(() => {
    if (e.refresh === n) e.refresh = void 0, e.refreshStartedAt = void 0;
  });
  return e.refresh = n, n;
}
function R() {
  return I8() === "accepted";
}
function K$() {
  return tcr() !== void 0;
}
function tcr() {
  let e = n => n?.remoteTools?.allowUnattendedServing === !1;
  return Zp().some(e) || Vle().some(e) || e(me("policySettings")) ? "managed" : e(me("userSettings")) ? "user" : void 0;
}
function g6t() {
  I8();
}
function ncr() {
  let {
    view: view
  } = i();
  return view?.unreadable === !0 || view?.staleYes === !0;
}
function h6t() {
  return i().view?.unreadable === !0;
}
async function rcr({
  start: start
}) {
  try {
    let {
      classifyDeviceSandboxPosture: classifyDeviceSandboxPosture,
      ensureDeviceSandboxPosture: ensureDeviceSandboxPosture,
      readDeviceSandboxSnapshot: readDeviceSandboxSnapshot
    } = await import("B:/~BUN/root/chunk-9q2h245s.js");
    return start ? (await ensureDeviceSandboxPosture()).confined : classifyDeviceSandboxPosture(readDeviceSandboxSnapshot(), {
      requireStarted: !1
    }).confined;
  } catch {
    return !1;
  }
}
function I() {
  return i().view?.hostAllows === !0;
}
function x(e, n) {
  return n && e.view !== void 0 && e.view.choice === "unset" && !e.view.unreadable;
}
function PKe() {
  try {
    let e = i();
    return !K$() && !e.staleUnresolved && x(e, e.view?.hostAllows === !0);
  } catch {
    return !1;
  }
}
function cCt(e) {
  try {
    let n = R(),
      r = i();
    return K$() || r.staleUnresolved || !n && !x(r, e ?? I());
  } catch (error) {
    return t(`unattended-serving consent: read failed, call treated as unconsented (${d(error)})`, {
      level: "warn"
    }), !0;
  }
}
export { LY, version as Fxn, terms as Hxn, dCt, ecr, Xce, tFe, I8, K7r, m6t, K$, tcr, g6t, ncr, h6t, rcr, PKe, cCt };