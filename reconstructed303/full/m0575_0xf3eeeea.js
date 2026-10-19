// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  ip,
  gDe
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  iEo,
  Wfe,
  TN,
  Opt
} from "B:/~BUN/root/chunk-p64g0hj8.js";

function sAt() {
  let n = ip();
  return n ? {
    entrypoint: n.toLowerCase().slice(0, 64)
  } : {}
}

function wfr() {
  let n = iEo();
  return n && !gDe() ? {
    session_id: n
  } : {}
}
var _so = 3600000;

function fMn() {
  let n = ee().sessionHintsRefusedAt;
  if (n !== void 0 && Date.now() - n < _so) return {};
  return {
    ...sAt(),
    ...wfr()
  }
}

function mMn() {
  ee().sessionHintsRefusedAt = Date.now()
}
var vfr = ["entrypoint", "session_id", "request_id"],
  u = new Set(vfr);

function gMn(n, s, i) {
  let o = vfr.filter((t) => i[t] !== void 0);
  if (n !== 400 || o.length === 0) return [];
  let e = TN(s);
  if (!Wfe.test(e)) return [];
  let r = o.filter((t) => Opt(e, t));
  if (r.length > 0) return r;
  return Object.keys(i).some((t) => !u.has(t) && Opt(e, t)) ? [] : o
}

function r8t(n) {
  return n.includes("entrypoint") || n.includes("session_id")
}

function Zds(n) {
  let {
    entrypoint: s,
    session_id: i,
    request_id: o,
    ...e
  } = n;
  return e
}
export {
  sAt,
  wfr,
  _so,
  fMn,
  mMn,
  vfr,
  gMn,
  r8t,
  Zds
};
