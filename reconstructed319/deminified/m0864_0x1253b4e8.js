// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bK } from "B:/~BUN/root/chunk-68y6snsb.js";
import { ve, A, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var subscribe = () => a,
  a = () => {},
  c = () => {
    return;
  };
function Ne(t, select) {
  let notifier = ve(bK),
    r = A(null);
  if (r.current === null) r.current = {
    select: select,
    last: null,
    source: null,
    get: c,
    notifier: notifier,
    subscribe: subscribe
  };
  let current = r.current;
  if (current.select = select, current.source !== t || current.notifier !== notifier) current.notifier = notifier, current.subscribe = t ? notifier?.paced(t.subscribe) ?? t.subscribe : subscribe;
  if (current.source !== t) current.source = t, current.last = null, current.get = t ? () => {
    let snapshot = t.getSnapshot(),
      select_2 = current.select;
    if (!select_2) return snapshot;
    let last = current.last;
    if (last !== null && last.snapshot === snapshot && last.select === select_2) return last.selected;
    let selected = select_2(snapshot);
    return current.last = {
      snapshot: snapshot,
      select: select_2,
      selected: selected
    }, selected;
  } : c;
  return At(current.subscribe, current.get, current.get);
}
export { subscribe as Ozr, Ne };