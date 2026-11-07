// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bK
} from "B:/~BUN/root/chunk-68y6snsb.js";
import {
  ve,
  A,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var Ozr = () => a,
  a = () => {},
  c = () => {
    return
  };

function Ne(t, i) {
  let n = ve(bK),
    r = A(null);
  if (r.current === null) r.current = {
    select: i,
    last: null,
    source: null,
    get: c,
    notifier: n,
    subscribe: Ozr
  };
  let e = r.current;
  if (e.select = i, e.source !== t || e.notifier !== n) e.notifier = n, e.subscribe = t ? n?.paced(t.subscribe) ?? t.subscribe : Ozr;
  if (e.source !== t) e.source = t, e.last = null, e.get = t ? () => {
    let s = t.getSnapshot(),
      o = e.select;
    if (!o) return s;
    let u = e.last;
    if (u !== null && u.snapshot === s && u.select === o) return u.selected;
    let l = o(s);
    return e.last = {
      snapshot: s,
      select: o,
      selected: l
    }, l
  } : c;
  return At(e.subscribe, e.get, e.get)
}
export {
  Ozr,
  Ne
};
