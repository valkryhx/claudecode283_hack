// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, di } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Ste } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { he, pu, EJ } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { o, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { homedir as U, hostname } from "os";
import { dirname as x, join as y } from "path";
function aW(e) {
  return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var version = 1,
  terms = "unattended-serving:v1:auto-arm-classifier",
  T = "unattended-serving-consent.json",
  D = f(() => u({
    version: A(version),
    choice: z(["accepted", "declined"]),
    terms: o(),
    decidedAt: o(),
    hostname: o()
  }));
function m() {
  return y(U(), ".claude", "state", T);
}
function zZe(e = hostname()) {
  return Ste(aW(e));
}
function vAn() {
  return `change it in /config, or delete ${xa(m())} to be asked again`;
}
function S() {
  return {
    readText: async () => {
      try {
        return await Qt().read(m());
      } catch (error) {
        if (B(error)) return;
        throw error;
      }
    },
    writeText: async e => {
      let n = m();
      await Qt().mkdir(x(n), 448), await Qt().atomicWrite(n, e, 384);
    },
    now: () => new Date(),
    hostname: hostname
  };
}
async function GZe(e) {
  let n = e === void 0 ? d() : void 0,
    readAt = Date.now(),
    i = n?.writes,
    {
      choice: choice,
      unreadable: unreadable,
      staleYes: staleYes
    } = await E(e ?? S());
  if (n !== void 0 && i === n.writes && (n.view === void 0 || !s(n) || readAt >= n.view.readAt)) {
    if (n.view = {
      choice: choice,
      readAt: readAt,
      unreadable: unreadable,
      staleYes: staleYes === !0
    }, s(n)) n.staleUnresolved = !1;
  }
  return choice;
}
async function E(e) {
  let n;
  try {
    n = await e.readText();
  } catch (error) {
    return t(`unattended-serving consent: store unreadable (${l(error)})`, {
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
    let r = D().safeParse(J(n));
    if (!r.success) return {
      choice: "unset",
      unreadable: !0
    };
    let i = r.data.choice === "declined" || aW(r.data.hostname) === aW(e.hostname()) && r.data.terms === terms;
    return {
      choice: i ? r.data.choice : "unset",
      unreadable: !1,
      staleYes: !i && r.data.choice === "accepted"
    };
  } catch {
    return {
      choice: "unset",
      unreadable: !0
    };
  }
}
async function rwe(choice_2, n) {
  let r = n === void 0 ? d() : void 0,
    i = n ?? S();
  try {
    if (await i.writeText(b({
      version: version,
      choice: choice_2,
      terms: terms,
      decidedAt: i.now().toISOString(),
      hostname: aW(i.hostname())
    }, null, 2) + `
`), r !== void 0) r.writes += 1, r.view = {
      choice: choice_2,
      readAt: Date.now(),
      unreadable: !1,
      staleYes: !1
    }, r.staleUnresolved = !1;
    return !0;
  } catch (error) {
    return t(`unattended-serving consent: answer not saved (${l(error)})`, {
      level: "warn"
    }), !1;
  }
}
var N = 3000,
  P = new q(() => ({
    view: void 0,
    refresh: void 0,
    refreshStartedAt: void 0,
    abandoned: void 0,
    staleUnresolved: !1,
    writes: 0
  }));
function d() {
  return di(P);
}
function zze() {
  let e = d();
  if (!s(e)) w(e);
  return e.view?.choice ?? "unset";
}
function s(e, n = Date.now()) {
  if (e.view === void 0) return !1;
  let r = n - e.view.readAt;
  return r >= 0 && r <= N;
}
function idr(e = Date.now()) {
  return s(d(), e);
}
var p = 1500;
async function adr(e) {
  let n = d();
  if (s(n)) return;
  let r = w(n),
    i,
    a,
    g = e?.aborted === !0 ? Promise.resolve("gave_up") : new Promise(c => {
      i = setTimeout(C => C("gave_up"), p, c), a = () => c("gave_up"), e?.addEventListener("abort", a, {
        once: !0
      });
    });
  if (await Promise.race([r, g]), clearTimeout(i), a !== void 0) e?.removeEventListener("abort", a);
  if (!s(n)) n.staleUnresolved = !0, h(n, r);
}
function h(e, n) {
  if (e.refresh !== n || e.abandoned !== void 0) return !1;
  return e.refresh = void 0, e.refreshStartedAt = void 0, e.abandoned = n, n.finally(() => {
    if (e.abandoned === n) e.abandoned = void 0;
  }), !0;
}
function w(e) {
  if (e.refresh !== void 0) {
    if (e.refreshStartedAt !== void 0 && performance.now() - e.refreshStartedAt <= p || !h(e, e.refresh)) return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let n = GZe().catch(() => {
    return;
  }).finally(() => {
    if (e.refresh === n) e.refresh = void 0, e.refreshStartedAt = void 0;
  });
  return e.refresh = n, n;
}
function _() {
  return zze() === "accepted";
}
function Gze() {
  return kAn() !== void 0;
}
function kAn() {
  let e = n => n?.remoteTools?.allowUnattendedServing === !1;
  return pu().some(e) || EJ().some(e) || e(he("policySettings")) ? "managed" : e(he("userSettings")) ? "user" : void 0;
}
function Kvt() {
  zze();
}
function EAn() {
  let {
    view: view
  } = d();
  return view?.unreadable === !0 || view?.staleYes === !0;
}
function Yvt() {
  try {
    let e = _();
    return Gze() || d().staleUnresolved || !e;
  } catch (error) {
    return t(`unattended-serving consent: read failed, call treated as unconsented (${l(error)})`, {
      level: "warn"
    }), !0;
  }
}
export { aW, version as vYt, terms as kYt, zZe, vAn, GZe, rwe, zze, idr, adr, Gze, kAn, Kvt, EAn, Yvt };