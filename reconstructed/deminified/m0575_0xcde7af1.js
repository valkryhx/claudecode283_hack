// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { eL } from "B:/~BUN/root/chunk-d4pzq02b.js";
import { Pe, T, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var subscribe = () => a,
  a = () => {},
  c = () => {
    return;
  };
function xe(t, select) {
  let notifier = Pe(eL),
    r = T(null);
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
export { subscribe as Nvn, xe };