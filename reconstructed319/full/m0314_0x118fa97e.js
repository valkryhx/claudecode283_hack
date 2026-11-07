// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  Nae,
  pm
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  $b
} from "B:/~BUN/root/chunk-sxvr9rzb.js";
import {
  jte
} from "B:/~BUN/root/chunk-63176a0t.js";
var u = 1500;
class s {
  buffer = "";
  seeded = "";
  capturing = !1;
  readableHandler = null;
  hasField = !1;
  fieldKeyAt = 0;
  fieldClosedAt = null;
  isFieldQueued = !1;
  queuedPrompt = null;
  isPromptFromField = !1;
  hasLaunchWarning = !1
}
var d = new W(() => new s);

function r() {
  return d.of(H().host)
}

function XSa() {
  let e = r();
  if (!process.stdin.isTTY || e.capturing || $b("-p") || $b("--print")) return;
  e.capturing = !0, e.buffer = "", e.seeded = "", e.hasField = !1, e.fieldKeyAt = 0, e.isFieldQueued = !1, e.queuedPrompt = null, e.hasLaunchWarning = !1;
  try {
    process.stdin.setEncoding("utf8"), process.stdin.setRawMode(!0), process.stdin.ref(), e.readableHandler = () => {
      let t = process.stdin.read();
      while (t !== null) {
        if (typeof t === "string") f(t);
        t = process.stdin.read()
      }
    }, process.stdin.on("readable", e.readableHandler)
  } catch {
    e.capturing = !1
  }
}

function f(e) {
  let t = r(),
    n = 0;
  while (n < e.length) {
    let a = e[n],
      o = a.charCodeAt(0);
    if (o === 3) {
      yR(), process.exit(130);
      return
    }
    if (o === 4) {
      yR();
      return
    }
    if (o === 127 || o === 8) {
      if (t.buffer.length > 0) {
        let i = jte(t.buffer);
        t.buffer = t.buffer.slice(0, -(i.length || 1))
      }
      n++;
      continue
    }
    if (o === 27) {
      n++;
      let i = n < e.length ? e.charCodeAt(n) : -1;
      if (i === 91) {
        n++;
        while (n < e.length && e.charCodeAt(n) < 64) n++;
        if (n < e.length) n++
      } else if (i === 93 || i === 80 || i === 88 || i === 94 || i === 95) {
        n++;
        while (n < e.length) {
          let l = e.charCodeAt(n);
          if (l === 7) {
            n++;
            break
          }
          if (l === 27 && n + 1 < e.length && e.charCodeAt(n + 1) === 92) {
            n += 2;
            break
          }
          n++
        }
      } else if (i === 79) n += 2;
      else if (i !== -1 && i !== 27) n++;
      continue
    }
    if (o < 32 && o !== 9 && o !== 10 && o !== 13) {
      n++;
      continue
    }
    if (o === 13) {
      t.buffer += `
`, n++;
      continue
    }
    t.buffer += a, n++
  }
}

function yR() {
  let e = r();
  if (!e.capturing) return;
  if (e.capturing = !1, e.readableHandler) process.stdin.removeListener("readable", e.readableHandler), e.readableHandler = null
}

function Wnn() {
  yR();
  let e = r(),
    t = e.buffer.trim();
  if (e.buffer = "", e.seeded = "", e.hasField) e.fieldClosedAt = Date.now();
  if (e.isFieldQueued) e.queuedPrompt = t;
  return e.isPromptFromField = e.hasField, e.hasField = !1, e.fieldKeyAt = 0, e.isFieldQueued = !1, t
}

function ZHn() {
  return r().buffer.trim().length > 0
}

function e$n(e) {
  let t = r();
  t.buffer = e, t.seeded = e
}

function iCs() {
  return r().seeded !== ""
}

function Zht() {
  let {
    buffer: e,
    seeded: t
  } = r();
  return e !== t
}

function r_o() {
  yR();
  let e = r();
  if (!e.hasField && Zht()) n$n();
  return e.hasField = !0, e.buffer
}

function o_o(e) {
  let t = r();
  t.buffer = e, t.isFieldQueued = !1, n$n()
}

function aCs() {
  return r().buffer
}

function lCs() {
  r().isFieldQueued = !0
}

function dCs() {
  r().hasLaunchWarning = !0
}

function cCs() {
  let e = r(),
    t = e.hasLaunchWarning;
  return e.hasLaunchWarning = !1, t
}

function t$n() {
  return r().isFieldQueued
}

function uCs() {
  return r().isPromptFromField
}

function fCs() {
  return r().queuedPrompt !== null
}

function pCs() {
  let e = r(),
    t = e.queuedPrompt;
  return e.queuedPrompt = null, t
}

function n$n() {
  r().fieldKeyAt = Date.now()
}

function r$n() {
  let e = r();
  if (!e.hasField || !Zht()) return "";
  let t = e.buffer.trim();
  return e.buffer = "", e.seeded = "", e.isFieldQueued = !1, t
}

function wQe() {
  return r().hasField
}

function egt() {
  let {
    hasField: e,
    fieldClosedAt: t
  } = r();
  return e || t !== null
}

function mCs() {
  let {
    fieldClosedAt: e
  } = r();
  return e === null ? 1 / 0 : Date.now() - e
}

function s_o() {
  let e = Date.now() - r().fieldKeyAt;
  return e < 0 ? 0 : Math.max(0, u - e)
}
async function hCs(e) {
  for (;;) {
    let t = s_o();
    if (t === 0 || e.aborted) return;
    await J(t, e)
  }
}
async function gCs() {
  for (;;) {
    Nae();
    let e = Date.now() - pm();
    if (e >= u) return;
    if (e < 0) {
      await J(u);
      return
    }
    await J(u - e)
  }
}
export {
  XSa,
  yR,
  Wnn,
  ZHn,
  e$n,
  iCs,
  Zht,
  r_o,
  o_o,
  aCs,
  lCs,
  dCs,
  cCs,
  t$n,
  uCs,
  fCs,
  pCs,
  n$n,
  r$n,
  wQe,
  egt,
  mCs,
  s_o,
  hCs,
  gCs
};
