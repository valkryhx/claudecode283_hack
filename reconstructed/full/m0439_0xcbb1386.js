// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  qte
} from "B:/~BUN/root/chunk-gf53qpk6.js";
class r {
  stampMs = 0;
  detachedSinceLastAttach = !1;
  reset() {
    this.stampMs = 0, this.detachedSinceLastAttach = !1
  }
}
var s = new q(() => new r);

function a() {
  return s.of(j().host)
}

function Ynr(e) {
  let t = a();
  if (e === 0) {
    t.reset();
    return
  }
  if (t.detachedSinceLastAttach || t.stampMs === 0) t.stampMs = e;
  t.detachedSinceLastAttach = !1
}

function Lqt() {
  a().detachedSinceLastAttach = !0
}

function Xnr() {
  return a().detachedSinceLastAttach
}

function uSe() {
  return a().stampMs
}

function jbt(e) {
  if (!qte()) return !1;
  let {
    detachedSinceLastAttach: t,
    stampMs: o
  } = a();
  return t || o !== 0 && e - o < 500
}
async function Nqt() {
  for (;;) {
    let e = Date.now();
    if (!jbt(e)) return;
    let {
      detachedSinceLastAttach: t,
      stampMs: o
    } = a(), c = t || o === 0 ? 500 : o + 500 - e;
    await Q(Math.max(25, c) + 25)
  }
}
export {
  Ynr,
  Lqt,
  Xnr,
  uSe,
  jbt,
  Nqt
};
