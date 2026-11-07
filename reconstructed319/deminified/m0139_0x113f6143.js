// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { Zet, gpe, NV, F4, $Ls, y7i } from "B:/~BUN/root/chunk-hacd8gcc.js";
import { execFile as h } from "child_process";
var IWn = 2400,
  _0r = 256;
function vCo(t) {
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
function Xz(t, e) {
  return {
    service: t.service,
    name: `${t.name}#${e}`
  };
}
var timeout = 1e4;
var a = null,
  u;
function MWn() {
  return u === !0;
}
function ECo() {
  return F4().lastKnown;
}
function Ran(t) {
  F4().lastKnown = t;
}
function d(t) {
  return new Promise(e => {
    try {
      h("security", ["find-generic-password", "-a", NV(), "-w", "-s", t], {
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
      service: gpe(Zet),
      name: NV()
    },
    r = o => Promise.race([o, promise]);
  return r(Promise.resolve().then(() => n.get(i))).then(async o => {
    if (u = !0, o === null) {
      let l = await r(n.get(Xz(i, "m"))).catch(() => null);
      if (l) try {
        let c = vCo(JSON.parse(l));
        if (!c) return;
        let f = await r(Promise.all(Array.from({
            length: c.n
          }, (p, y) => n.get(Xz(i, y))))),
          m = f.join("");
        if (m.length === c.l && !f.some(item => item == null)) o = Buffer.from(m, "base64").toString("utf8");else return;
      } catch {
        return;
      }
    }
    if ($Ls(o ?? null, e, t), o && t.lastKnown === null) try {
      t.lastKnown = JSON.parse(o);
    } catch {}
  }).catch(() => {
    u = !1;
  });
}
function DWn() {
  let t = Nr();
  if (a || t) return;
  let e = F4(),
    generation = e.generation;
  a = S(e, generation);
  return;
}
async function LWn(t) {
  if (!a) return;
  await (t === void 0 ? a : we(a, t));
}
function TCo() {
  F4().legacyApiKeyPrefetch = null;
}
export { IWn, _0r, vCo, Xz, MWn, ECo, Ran, DWn, LWn, TCo };