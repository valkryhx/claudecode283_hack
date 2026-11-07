// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Nr
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  Zet,
  gpe,
  NV,
  F4,
  $Ls,
  y7i
} from "B:/~BUN/root/chunk-hacd8gcc.js";
import {
  execFile as h
} from "child_process";
var IWn = 2400,
  _0r = 256;

function vCo(t) {
  if (!t || typeof t !== "object") return null;
  let {
    n: e,
    l: n
  } = t;
  if (typeof e === "number" && typeof n === "number" && Number.isInteger(e) && Number.isInteger(n) && e > 0 && e <= 256 && n > 0 && n <= e * 2400) return {
    n: e,
    l: n
  };
  return null
}

function Xz(t, e) {
  return {
    service: t.service,
    name: `${t.name}#${e}`
  }
}
var g = 1e4;
var a = null,
  u;

function MWn() {
  return u === !0
}

function ECo() {
  return F4().lastKnown
}

function Ran(t) {
  F4().lastKnown = t
}

function d(t) {
  return new Promise((e) => {
    try {
      h("security", ["find-generic-password", "-a", NV(), "-w", "-s", t], {
        encoding: "utf-8",
        timeout: g,
        windowsHide: !0
      }, (n, s) => {
        let i = Boolean(n && "killed" in n && n.killed);
        e(i ? null : {
          stdout: n ? null : s?.trim() || null
        })
      })
    } catch {
      e(null)
    }
  })
}

function S(t, e) {
  let n = globalThis.Bun?.secrets;
  if (!n || typeof n.get !== "function") return u = !1, Promise.resolve();
  let s = new Promise((o, l) => {
      setTimeout((c) => c(Error("probe timeout")), g, l).unref()
    }),
    i = {
      service: gpe(Zet),
      name: NV()
    },
    r = (o) => Promise.race([o, s]);
  return r(Promise.resolve().then(() => n.get(i))).then(async (o) => {
    if (u = !0, o === null) {
      let l = await r(n.get(Xz(i, "m"))).catch(() => null);
      if (l) try {
        let c = vCo(JSON.parse(l));
        if (!c) return;
        let f = await r(Promise.all(Array.from({
            length: c.n
          }, (p, y) => n.get(Xz(i, y))))),
          m = f.join("");
        if (m.length === c.l && !f.some((p) => p == null)) o = Buffer.from(m, "base64").toString("utf8");
        else return
      } catch {
        return
      }
    }
    if ($Ls(o ?? null, e, t), o && t.lastKnown === null) try {
      t.lastKnown = JSON.parse(o)
    } catch {}
  }).catch(() => {
    u = !1
  })
}

function DWn() {
  let t = Nr();
  if (a || t) return;
  let e = F4(),
    n = e.generation;
  a = S(e, n);
  return
}
async function LWn(t) {
  if (!a) return;
  await (t === void 0 ? a : we(a, t))
}

function TCo() {
  F4().legacyApiKeyPrefetch = null
}
export {
  IWn,
  _0r,
  vCo,
  Xz,
  MWn,
  ECo,
  Ran,
  DWn,
  LWn,
  TCo
};
