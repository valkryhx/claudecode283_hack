// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Q2o } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { bt, _, J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { Qd, FM } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { hl } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { qLe } from "B:/~BUN/root/chunk-2mqa0za1.js";
import { ys } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { o, v, De } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { rm as a } from "fs/promises";
import { join as t } from "path";
var s = ".pending-wakeup",
  p = 1024,
  m = f(() => De({
    toolUseId: o().min(1).max(256),
    scheduledFor: v().int().positive(),
    chainStartedAt: v().int().nonnegative()
  }));
async function pGt(i, r) {
  let e = t(i, s);
  try {
    if (r === void 0) {
      if (await a(e, {
        force: !0
      }).then(() => !0, d => (hl(d), !1))) return;
    }
    await qLe(e, r === void 0 ? "" : _(r));
  } catch (error) {
    if (!G(error)) hl(error);
  }
}
async function Y6o(i) {
  let r = await al(t(i, s), p);
  if (!r) return null;
  try {
    let e = m().safeParse(J(r));
    return e.success ? e.data : null;
  } catch {
    return null;
  }
}
class aVr {
  #o = Promise.resolve();
  #r = 0;
  #e;
  #i;
  constructor() {
    this.#i = Q2o(this.#n);
  }
  #n = i => {
    try {
      if (!Qd()) return;
      let r = FM();
      if (r === void 0) return;
      if (i !== void 0 && ys()) return;
      this.#e ??= bt(() => this.#o);
      let e = ++this.#r;
      this.#o = this.#o.then(() => e === this.#r ? pGt(r, i) : void 0);
    } catch (error) {
      l(error);
    }
  };
  flush() {
    return this.#o;
  }
  dispose() {
    this.#i(), this.#o.then(() => this.#e?.());
  }
}
export { pGt, Y6o, aVr };