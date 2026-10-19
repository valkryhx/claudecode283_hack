// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  my
} from "B:/~BUN/root/chunk-k2ekj8re.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  vt,
  yme,
  Bv
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  We
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  jd
} from "B:/~BUN/root/chunk-we0fhavr.js";
import {
  vi
} from "B:/~BUN/root/chunk-8z3a373v.js";
import {
  im
} from "B:/~BUN/root/chunk-hvvs3ef6.js";
import {
  dDs
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  Jct
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  Bjn,
  Xwo,
  xPs,
  Qtn
} from "B:/~BUN/root/chunk-f06s8ws5.js";
import {
  ch
} from "B:/~BUN/root/chunk-vd11ggb1.js";
import {
  hve,
  $ut
} from "B:/~BUN/root/chunk-rx39nt6a.js";
import {
  cEn
} from "B:/~BUN/root/chunk-xa77wp9m.js";
import {
  AT
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  Wq
} from "B:/~BUN/root/chunk-351qj2sm.js";
import {
  uo,
  _c
} from "B:/~BUN/root/chunk-b0487zs4.js";
var c = new Set([im, my]);

function E5r(o, e) {
  if (e.length === 0) return o;
  let t = e.map((i) => [i, uo(i)]),
    n = o.filter((i) => !t.some(([m, r]) => _c(i, m, r)));
  return n.length === o.length ? o : n
}

function f(o) {
  return o.mcpInfo?.cliOwned === !0 && o.mcpInfo.serverName === jd
}
var p = import.meta.require("B:/~BUN/root/chunk-mx0e3fc7.js");

function dEn() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map((o) => o.trim()).filter(Boolean)
}

function T5r(o, e = dEn()) {
  if (hve(o) || Xwo.includes(o.name)) return !0;
  let t = uo(o.name);
  return e.some((n) => n.startsWith(t))
}

function _sr(o, e = () => !1) {
  let t = a.CLAUDE_CODE_BRIEF,
    n = new Set(dEn()),
    i = Qtn(),
    m = o.some($ut);
  return o.filter((r) => Bjn.has(r.name) || i && vt(r, We) && !ch(r) || xPs(r.name) || f(r) || $ut(r) || t && c.has(r.name) || Bv(r, n) || !m && e(r))
}

function mqt(o, e, t, n, i) {
  let [m, r] = AT(cEn(vi(Jct([...o, ...e]), "name"), n), (l) => ch(l) || Wq(l)), s = [...r.sort(yme), ...m.sort(yme)];
  if (p.isCoordinatorMode()) return _sr(s, i);
  return s
}

function gqt(o, e) {
  let t = o.length === 1 ? o[0] : void 0;
  if (t && dDs(e, t)) return [];
  return o
}
export {
  E5r,
  dEn,
  T5r,
  _sr,
  mqt,
  gqt
};
