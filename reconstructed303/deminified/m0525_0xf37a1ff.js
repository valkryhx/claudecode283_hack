// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, J, hI, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { ns, cF } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { Mc } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { hl } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { o, v, T, u, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { rm as P } from "fs/promises";
import { join as y } from "path";
var w = ".prompt-stash",
  x = 262144,
  O = 256,
  z = f(() => u({
    text: o(),
    cursorOffset: v().int().nonnegative(),
    pasteIds: T(v().int().nonnegative()).max(O),
    launchWarning: u({
      type: U(["deep-link", "prefill"]),
      prefillLength: v().int().nonnegative()
    }).optional()
  }));
function D(e) {
  return _({
    text: e.text,
    cursorOffset: e.cursorOffset,
    pasteIds: Object.values(e.pastedContents).filter(item => !item.inline).slice(0, O).map(item => item.id),
    launchWarning: e.launchWarning
  });
}
function i3r(e) {
  let r = [],
    s = "";
  for (let i of e.replace(/\r\n|\r/g, `
`).replaceAll("\t", "    ").split(/\u200C+/)) {
    let n = hI(i, "", {
      keepNewlines: !0
    });
    if (n === "") continue;
    if (s !== "" && /\S$/.test(s) && /^\S/.test(n)) r.push("\u200C");
    r.push(n), s = n;
  }
  return r.join("");
}
async function qLe(e, r) {
  await P(e, {
    force: !0
  });
  let s = await cF(e, r, 384);
  try {
    await ns(s, e);
  } catch (error) {
    throw await P(s, {
      force: !0
    }).catch(() => {}), error;
  }
}
function E(e) {
  let r;
  try {
    r = J(e);
  } catch {
    return null;
  }
  let s = z().safeParse(r);
  if (!s.success) return null;
  let {
      cursorOffset: cursorOffset,
      pasteIds: pasteIds,
      launchWarning: launchWarning
    } = s.data,
    d = i3r(s.data.text),
    j = new Set(pasteIds),
    text = "",
    S = 0;
  for (let c of Mc(d)) if (j.has(c.id)) text += d.slice(S, c.index), S = c.index + c.match.length;
  if (text += d.slice(S), text.trim() === "") return null;
  return {
    text: text,
    mode: "prompt",
    cursorOffset: ne(text, Math.min(cursorOffset, text.length)).length,
    pastedContents: {},
    launchWarning: launchWarning
  };
}
async function I(e, r) {
  let s = y(e, w),
    i = r === null ? "" : D(r);
  if (Buffer.byteLength(i) > x) t("[bg] prompt stash too large to persist; kept in memory only", {
    level: "warn"
  }), i = "";
  try {
    let n = await P(s, {
      force: !0
    }).then(() => !0, h => (hl(h), !1));
    if (i === "" && n) return;
    await qLe(s, i);
  } catch (error) {
    if (!G(error)) hl(error);
  }
}
async function k(e) {
  let r = await al(y(e, w), x);
  if (!r) return null;
  let s = E(r);
  if (s === null) t("[bg] persisted prompt stash unreadable or empty", {
    level: "warn"
  }), m("bg_prompt_stash_restore", "unreadable_or_empty");
  return s;
}
class a3r {
  #t;
  #e;
  #r = Promise.resolve();
  #s = !1;
  #o;
  constructor(e) {
    this.#t = e, this.#e = b(e.getState().stash), this.#o = e.subscribe(this.#n);
  }
  #n = () => {
    let e = b(this.#t.getState().stash);
    if (e === this.#e) return;
    this.#e = e;
    let CLAUDE_JOB_DIR = a.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    this.#r = this.#r.then(() => I(CLAUDE_JOB_DIR, e));
  };
  async restore() {
    let CLAUDE_JOB_DIR_2 = a.CLAUDE_JOB_DIR;
    if (this.#s || !CLAUDE_JOB_DIR_2) return !1;
    this.#s = !0;
    let stash = await k(CLAUDE_JOB_DIR_2);
    if (stash === null) return !1;
    if (this.#t.getState().stash !== null) return p("bg_prompt_stash_restore", "slot_taken"), !1;
    return this.#e = stash, this.#t.setState(s => ({
      ...s,
      stash: stash
    })), g("bg_prompt_stash_restore"), !0;
  }
  flush() {
    return this.#r;
  }
  dispose() {
    this.#o();
  }
}
function b(e) {
  return e?.cameBack === !0 ? null : e;
}
export { i3r, qLe, a3r };