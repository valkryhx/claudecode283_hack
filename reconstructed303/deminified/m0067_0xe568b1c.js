// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ms } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
function ajt(t) {
  let e;
  for (let n in t) if (n.startsWith("_PROTO_")) {
    if (e === void 0) e = {
      ...t
    };
    delete e[n];
  }
  return e ?? t;
}
var u = 1000;
function l() {
  return {
    eventQueue: [],
    sink: null,
    droppedEventCount: 0
  };
}
function s(t, e) {
  if (t.eventQueue.length >= u) t.eventQueue.shift(), t.droppedEventCount++;
  t.eventQueue.push(e);
}
class r {
  state = l();
}
var c = new z(() => new r());
function a() {
  return ms(c);
}
function rWo(t) {
  let state = a().state;
  if (state.sink !== null) return !1;
  if (state.sink = t, state.eventQueue.length > 0) {
    let eventQueue = state.eventQueue;
    state.eventQueue = [], queueMicrotask(() => {
      for (let o of eventQueue) if (o.async) t.logEventAsync(o.eventName, o.metadata);else t.logEvent(o.eventName, o.metadata);
    });
  }
  return !0;
}
function i(eventName, metadata) {
  let state_2 = a().state;
  if (state_2.sink === null) {
    s(state_2, {
      eventName: eventName,
      metadata: metadata,
      async: !1
    });
    return;
  }
  state_2.sink.logEvent(eventName, metadata);
}
async function Qs(eventName_2, metadata_2) {
  let state_3 = a().state;
  if (state_3.sink === null) {
    s(state_3, {
      eventName: eventName_2,
      metadata: metadata_2,
      async: !0
    });
    return;
  }
  await state_3.sink.logEventAsync(eventName_2, metadata_2);
}
export { ajt, rWo, i, Qs };