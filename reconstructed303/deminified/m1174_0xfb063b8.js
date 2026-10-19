// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ye, H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ei } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { VPn } from "B:/~BUN/root/chunk-t4v0bt40.js";
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
    VPn({
      fresh: fresh
    }).then(r => {
      if (e !== this.#t || r === null) return;
      if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e) p("dev_intent_detect", "project_unreadable", {
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
      Ei({
        type: "system",
        subtype: "dev_intent",
        kind: kind_3,
        trigger: "project_scan"
      }), g("dev_intent_detect", {
        kind: c(kind_3),
        trigger: b("project_scan")
      });
    } catch (error) {
      l(Ye(H(error), "project dev intent send failed")), m("dev_intent_detect", "project_send_threw", {
        kind: c(kind_3),
        trigger: b("project_scan")
      });
    }
  }
}
var mst = new z(() => new i());
export { mst };