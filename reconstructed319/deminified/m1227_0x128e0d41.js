// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { P3 } from "B:/~BUN/root/chunk-0aq7t0nw.js";
import { Bp, Of } from "B:/~BUN/root/chunk-bvb659eh.js";
import { je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import * as t from "vm";
var l = `(() => {
  'use strict'
  Object.defineProperty(globalThis, 'pinned', { value: 0 })
  const isOwn = e => Object.getPrototypeOf(e) === TypeError.prototype
  let first = false
  let second = false
  let third = true
  try {
    Object.defineProperty(globalThis, 'pinned', { value: 1 })
  } catch (e) {
    first = isOwn(e)
  }
  try {
    class Base { constructor() { return globalThis } }
    class Derived extends Base { pinned = 1 }
    new Derived()
  } catch (e) {
    second = isOwn(e)
  }
  try {
    let receiver
    Object.defineProperty(globalThis, 'getter', { get() { receiver = this } })
    void globalThis.getter
    Object.preventExtensions(receiver)
    Object.defineProperty(globalThis, 'fresh', { value: 1 })
  } catch (e) {
    third = isOwn(e)
  }
  return first && second && third
})()`,
  h = `(pending, report) => {
  void (async () => {
    await pending
    await {
      then(resolve) {
        report(Object.getPrototypeOf(resolve) === Function.prototype)
        resolve()
      },
    }
  })()
}`,
  n;
function wen() {
  return n ??= d(), n;
}
function Ows(e) {
  return e !== "passed" && !Of();
}
function Iws() {
  return n !== void 0;
}
function d() {
  if (!Bp()) return "not_bun";
  try {
    let {
        drainMicrotasks: drainMicrotasks
      } = je("bun:jsc"),
      o = P3({
        __proto__: null
      }, {
        codeGeneration: {
          strings: !1,
          wasm: !1
        }
      }),
      r = t.runInContext(l, o) === !0,
      i,
      {
        promise: promise,
        resolve: resolve
      } = Promise.withResolvers();
    t.runInContext(h, o)(promise, u => {
      i = u;
    }), queueMicrotask(resolve), drainMicrotasks();
    let s = i === !0;
    if (r && s) return "passed";
    if (!r && !s) return "both";
    return r ? "thenable_after_await" : "rejected_definitions";
  } catch (error) {
    switch (typeof error === "object" && error !== null && "name" in error && error.name) {
      case "TypeError":
        return "threw_type_error";
      case "ReferenceError":
        return "threw_reference_error";
      case "SyntaxError":
        return "threw_syntax_error";
      case "RangeError":
        return "threw_range_error";
      default:
        return "threw_other";
    }
  }
}
export { wen, Ows, Iws };