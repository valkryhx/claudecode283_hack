// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _1 } from "B:/~BUN/root/chunk-9h1egpkt.js";
import { Ee, A, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var subscribe = () => a,
  a = () => {},
  c = () => {
    return;
  };
function Ae(t, select) {
  let notifier = Ee(_1),
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
  return Dt(current.subscribe, current.get, current.get);
}
export { subscribe as Knr, Ae };