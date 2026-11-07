// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Po } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
function rcn(e) {
  let t;
  for (let n in e) if (n.startsWith("_PROTO_")) {
    if (t === void 0) t = {
      ...e
    };
    delete t[n];
  }
  return t ?? e;
}
var r = 1000;
function u() {
  return {
    eventQueue: [],
    sink: null,
    droppedEventCount: 0
  };
}
function s(e, t) {
  if (e.eventQueue.length >= r) e.eventQueue.shift(), e.droppedEventCount++;
  e.eventQueue.push(t);
}
class i {
  state = u();
}
var c = new W(() => new i());
function a() {
  return Po(c);
}
function gjs(e) {
  let state = a().state;
  if (state.sink !== null) return !1;
  if (state.sink = e, state.eventQueue.length > 0) {
    let eventQueue = state.eventQueue;
    state.eventQueue = [], queueMicrotask(() => {
      for (let o of eventQueue) if (o.async) e.logEventAsync(o.eventName, o.metadata);else e.logEvent(o.eventName, o.metadata);
    });
  }
  return !0;
}
function yjs() {
  try {
    return a().state.sink?.keepsWholeEvents?.() ?? !0;
  } catch {
    return !0;
  }
}
function l(eventName, metadata) {
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
async function pi(eventName_2, metadata_2) {
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
export { rcn, gjs, yjs, l, pi };