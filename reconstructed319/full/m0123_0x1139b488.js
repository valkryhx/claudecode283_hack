// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  _qn
} from "B:/~BUN/root/chunk-wt4dg253.js";
import {
  $Gs,
  UGs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  or,
  Oc,
  SP,
  ca,
  wh
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  vk
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  isAbsolute as d
} from "path";

function adn(e) {
  if (!/^[A-Za-z]:[\\/]/.test(e)) return [];
  let n = wh(e.slice(0, 3));
  if (n == null || !or(n)) return [];
  let r = wh(e);
  if (r == null || !or(r)) return [];
  let t = SP(n),
    o = SP(r);
  if (t == null || o == null || t !== o) return [];
  return [e, r]
}

function ldn() {
  return i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted"
}

function tn() {
  return i.CLAUDE_CODE_REMOTE === !0 && i.CLAUDE_CODE_ENVIRONMENT_KIND === void 0
}

function oFr() {
  return tn() || !1
}

function Tp() {
  return i.CLAUDE_CODE_REMOTE === !0 && i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc"
}

function EC() {
  return tn() || Tp()
}

function gj() {
  return Tp() && ldn()
}

function _St() {
  return !1
}

function tta(e) {
  return gj() && e === void 0 ? ["memory"] : void 0
}

function nta(e, n) {
  return !(e && gj() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) && !i.CLAUDE_CODE_DISABLE_WORKING_SYNC) ? "not_admitted" : n === _qn ? "admitted" : "moved_directory"
}

function Gpe() {
  return Tp() && $Gs()
}

function $1t() {
  return _qn
}
var s = he(new Map, (e) => e.clear()),
  u = 60000;

function ZGn(e) {
  let n = s.get(e);
  if (n !== void 0 && (n.share !== void 0 || Date.now() - n.askedAt < u)) return n.share ?? e;
  let r = adn(e)[1];
  return s.set(e, {
    share: r,
    askedAt: Date.now()
  }), r ?? e
}

function ddn(e, n) {
  return d(e) && !Oc(e) && !ca(e, n)
}

function rta() {
  return Tp() && UGs()
}

function R_() {
  return i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge"
}

function Hte() {
  return R_() && !vk()
}

function sFr(e) {
  return e.hostedWorker || R_() && e.transportPersists !== !1
}
export {
  adn,
  ldn,
  tn,
  oFr,
  Tp,
  EC,
  gj,
  _St,
  tta,
  nta,
  Gpe,
  $1t,
  ZGn,
  ddn,
  rta,
  R_,
  Hte,
  sFr
};
