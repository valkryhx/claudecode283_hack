// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ne
} from "B:/~BUN/root/chunk-qdyt0gq6.js";
import {
  Jt,
  ve,
  Z,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  jUn
} from "B:/~BUN/root/chunk-3xtmwvra.js";
j();
var D0 = Jt(null),
  Azr = Jt(null),
  xzr = Jt(null);

function yhn() {
  let e = ve(xzr);
  if (!e) throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e
}
var Pzr = Jt(null);

function s8() {
  let e = ve(Pzr);
  if (!e) throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e
}

function Uw() {
  let e = ve(Azr);
  if (!e) throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e
}

function t() {
  let e = ve(D0);
  if (!e) throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");
  return e
}

function G(e) {
  let n = t();
  return Ne(n, e)
}

function ar() {
  return t().setState
}

function s$o() {
  let e = t();
  return Z(() => jUn(e.setState), [e])
}

function Gr() {
  return t()
}

function xs(e) {
  return Ne(ve(D0), e)
}
export {
  D0,
  Azr,
  xzr,
  yhn,
  Pzr,
  s8,
  Uw,
  G,
  ar,
  s$o,
  Gr,
  xs
};
