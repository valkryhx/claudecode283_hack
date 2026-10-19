// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { wr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { nze, ine, xB, DJ, WFo, wVs } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { execFile as h } from "child_process";
var cun = 2400,
  M5n = 256;
function THr(t) {
  if (!t || typeof t !== "object") return null;
  let {
    n: n_2,
    l: l_2
  } = t;
  if (typeof n_2 === "number" && typeof l_2 === "number" && Number.isInteger(n_2) && Number.isInteger(l_2) && n_2 > 0 && n_2 <= 256 && l_2 > 0 && l_2 <= n_2 * 2400) return {
    n: n_2,
    l: l_2
  };
  return null;
}
function o$(t, e) {
  return {
    service: t.service,
    name: `${t.name}#${e}`
  };
}
var timeout = 1e4;
var a = null,
  u;
function uun() {
  return u === !0;
}
function CHr() {
  return DJ().lastKnown;
}
function cBt(t) {
  DJ().lastKnown = t;
}
function d(t) {
  return new Promise(e => {
    try {
      h("security", ["find-generic-password", "-a", xB(), "-w", "-s", t], {
        encoding: "utf-8",
        timeout: timeout,
        windowsHide: !0
      }, (n, s) => {
        let i = Boolean(n && "killed" in n && n.killed);
        e(i ? null : {
          stdout: n ? null : s?.trim() || null
        });
      });
    } catch {
      e(null);
    }
  });
}
function S(t, e) {
  let n = globalThis.Bun?.secrets;
  if (!n || typeof n.get !== "function") return u = !1, Promise.resolve();
  let promise = new Promise((o, l) => {
      setTimeout(c => c(Error("probe timeout")), timeout, l).unref();
    }),
    i = {
      service: ine(nze),
      name: xB()
    },
    r = o => Promise.race([o, promise]);
  return r(Promise.resolve().then(() => n.get(i))).then(async o => {
    if (u = !0, o === null) {
      let l = await r(n.get(o$(i, "m"))).catch(() => null);
      if (l) try {
        let c = THr(JSON.parse(l));
        if (!c) return;
        let f = await r(Promise.all(Array.from({
            length: c.n
          }, (p, y) => n.get(o$(i, y))))),
          m = f.join("");
        if (m.length === c.l && !f.some(item => item == null)) o = Buffer.from(m, "base64").toString("utf8");else return;
      } catch {
        return;
      }
    }
    if (WFo(o ?? null, e, t), o && t.lastKnown === null) try {
      t.lastKnown = JSON.parse(o);
    } catch {}
  }).catch(() => {
    u = !1;
  });
}
function pun() {
  let t = wr();
  if (a || t) return;
  let e = DJ(),
    generation = e.generation;
  a = S(e, generation);
  return;
}
async function fun(t) {
  if (!a) return;
  await (t === void 0 ? a : je(a, t));
}
function RHr() {
  DJ().legacyApiKeyPrefetch = null;
}
export { cun, M5n, THr, o$, uun, CHr, cBt, pun, fun, RHr };