// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  Xr
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  cAe,
  kJ,
  DN,
  cY,
  HUr,
  XNo
} from "B:/~BUN/root/chunk-2d028bdz.js";
import {
  execFile as h
} from "child_process";
var I$t = 2400,
  zfn = 256;

function A3n(e) {
  if (!e || typeof e !== "object") return null;
  let {
    n: t,
    l: n
  } = e;
  if (typeof t === "number" && typeof n === "number" && Number.isInteger(t) && Number.isInteger(n) && t > 0 && t <= 256 && n > 0 && n <= t * 2400) return {
    n: t,
    l: n
  };
  return null
}

function G0(e, t) {
  return {
    service: e.service,
    name: `${e.name}#${t}`
  }
}
var d = 1e4;
var i = null,
  u;

function O$t() {
  return u === !0
}

function x3n() {
  return cY().lastKnown
}

function Ppt(e) {
  cY().lastKnown = e
}

function g(e) {
  return new Promise((t) => {
    try {
      h("security", ["find-generic-password", "-a", DN(), "-w", "-s", e], {
        encoding: "utf-8",
        timeout: d,
        windowsHide: !0
      }, (n, a) => {
        let r = Boolean(n && "killed" in n && n.killed);
        t(r ? null : {
          stdout: n ? null : a?.trim() || null
        })
      })
    } catch {
      t(null)
    }
  })
}

function w(e, t) {
  let n = globalThis.Bun?.secrets;
  if (!n || typeof n.get !== "function") return u = !1, Promise.resolve();
  let a = new Promise((o, s) => {
      setTimeout((c) => c(Error("probe timeout")), d, s).unref()
    }),
    r = {
      service: kJ(cAe),
      name: DN()
    },
    l = (o) => Promise.race([o, a]);
  return l(Promise.resolve().then(() => n.get(r))).then(async (o) => {
    if (u = !0, o === null) {
      let s = await l(n.get(G0(r, "m"))).catch(() => null);
      if (s) try {
        let c = A3n(JSON.parse(s));
        if (!c) return;
        let f = await l(Promise.all(Array.from({
            length: c.n
          }, (p, y) => n.get(G0(r, y))))),
          m = f.join("");
        if (m.length === c.l && !f.some((p) => p == null)) o = Buffer.from(m, "base64").toString("utf8");
        else return
      } catch {
        return
      }
    }
    if (HUr(o ?? null, t, e), o && e.lastKnown === null) try {
      e.lastKnown = JSON.parse(o)
    } catch {}
  }).catch(() => {
    u = !1
  })
}

function M$t() {
  if (i || Xr()) return;
  let e = cY(),
    t = e.generation;
  i = w(e, t);
  return
}
async function D$t(e) {
  if (!i) return;
  await (e === void 0 ? i : nt(i, e))
}

function P3n() {
  cY().legacyApiKeyPrefetch = null
}
export {
  I$t,
  zfn,
  A3n,
  G0,
  O$t,
  x3n,
  Ppt,
  M$t,
  D$t,
  P3n
};
