// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Ti } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Htr } from "B:/~BUN/root/chunk-7y5t5m69.js";
var n = [{
  kind: "ios_app",
  found: t => t.has_ios_app_project
}, {
  kind: "android_app",
  found: t => t.has_android_app_project
}];
class i {
  #t = 0;
  #o = 0;
  #e = new Map();
  get started() {
    return this.#t > 0;
  }
  start() {
    this.#t++, this.#r(!1);
  }
  conversationReset() {
    if (this.started) this.#t++, this.#r(!1);
  }
  directoryChanged() {
    if (!this.started) {
      this.start();
      return;
    }
    this.#r(!1);
  }
  turnStarting() {
    let t = this.#t;
    if (!this.started || this.#o === t) return;
    if (this.#o = t, n.some(({
      kind: kind
    }) => this.#e.get(kind) !== t)) this.#r(!0);
  }
  #r(fresh) {
    let e = this.#t;
    Htr({
      fresh: fresh
    }).then(r => {
      if (e !== this.#t || r === null) return;
      if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e) c("dev_intent_detect", "project_unreadable", {
        kind: b("ios_app"),
        trigger: b("project_scan")
      });
      for (let {
        kind: kind_2,
        found: found
      } of n) if (found(r) === !0 && this.#e.get(kind_2) !== e) this.#e.set(kind_2, e), this.#n(kind_2);
    });
  }
  #n(kind_3) {
    try {
      Ti({
        type: "system",
        subtype: "dev_intent",
        kind: kind_3,
        trigger: "project_scan"
      }), g("dev_intent_detect", {
        kind: f(kind_3),
        trigger: b("project_scan")
      });
    } catch (error) {
      a(qe(F(error), "project dev intent send failed")), m("dev_intent_detect", "project_send_threw", {
        kind: f(kind_3),
        trigger: b("project_scan")
      });
    }
  }
}
var JCt = new W(() => new i());
export { JCt };