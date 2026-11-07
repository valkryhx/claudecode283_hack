// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { W2s } from "B:/~BUN/root/chunk-game8aqv.js";
import { K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { wc, aH } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { vt, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { yd } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Td } from "B:/~BUN/root/chunk-4vcs773m.js";
import { VYe } from "B:/~BUN/root/chunk-t7hmm90h.js";
import { Vo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { o, E, He } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { rm as m } from "fs/promises";
import { join as t } from "path";
var s = ".pending-wakeup",
  u = 1024,
  f = p(() => He({
    toolUseId: o().min(1).max(256),
    scheduledFor: E().int().positive(),
    chainStartedAt: E().int().nonnegative()
  }));
async function Lpn(i, r) {
  let e = t(i, s);
  try {
    if (r === void 0) {
      if (await m(e, {
        force: !0
      }).then(() => !0, d => (Td(d), !1))) return;
    }
    await VYe(e, r === void 0 ? "" : _(r));
  } catch (error) {
    if (!K(error)) Td(error);
  }
}
async function o5s(i) {
  let r = await yd(t(i, s), u);
  if (!r) return null;
  try {
    let e = f().safeParse(ee(r));
    return e.success ? e.data : null;
  } catch {
    return null;
  }
}
class xNo {
  #o = Promise.resolve();
  #r = 0;
  #e;
  #i;
  constructor() {
    this.#i = W2s(this.#n);
  }
  #n = i => {
    try {
      if (!wc()) return;
      let r = aH();
      if (r === void 0) return;
      if (i !== void 0 && Vo()) return;
      this.#e ??= vt(() => this.#o);
      let e = ++this.#r;
      this.#o = this.#o.then(() => e === this.#r ? Lpn(r, i) : void 0);
    } catch (error) {
      a(error);
    }
  };
  flush() {
    return this.#o;
  }
  dispose() {
    this.#i(), this.#o.then(() => this.#e?.());
  }
}
export { Lpn, o5s, xNo };