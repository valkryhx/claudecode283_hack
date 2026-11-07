// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  yOo,
  LN,
  Hae
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  H$r
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  LHn
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  createHash as s
} from "crypto";
import {
  join as i
} from "path";

function Av() {
  return LN() ?? i(Hae() ?? hLt(), z())
}

function hLt() {
  return i(Ue(), "uploads")
}

function nse() {
  return [hLt(), Hae() ?? LHn()]
}

function HLn(t, e) {
  return `${t}-${u(e)}`
}

function Vpo(t) {
  return s("sha256").update(t.toLowerCase()).digest("hex").slice(0, 8)
}
var a = /^[A-Za-z0-9_-]{8}-/;

function o(t) {
  return H$r(t.replace(/_+$/, ""))
}

function u(t) {
  return o(t) ? t + "_" : t
}

function LBi(t) {
  let e = t.replace(a, "");
  if (e.endsWith("_") && o(e)) return e.slice(0, -1);
  return e || t
}
var c = 1024;

function NBi(t, e) {
  let n = yOo();
  if (!n.has(t) && n.size >= c) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r)
  }
  n.set(t, e)
}

function ymt(t) {
  return yOo().get(t)
}
export {
  Av,
  hLt,
  nse,
  HLn,
  Vpo,
  LBi,
  NBi,
  ymt
};
