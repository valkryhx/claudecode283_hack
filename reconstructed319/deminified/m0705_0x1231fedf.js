// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { VA } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Is, qO } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { yd } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { df } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Td } from "B:/~BUN/root/chunk-4vcs773m.js";
import { o, E, C, u, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { rm as P } from "fs/promises";
import { join as y } from "path";
var w = ".prompt-stash",
  x = 262144,
  v = 256,
  j = p(() => u({
    text: o(),
    cursorOffset: E().int().nonnegative(),
    pasteIds: C(E().int().nonnegative()).max(v),
    launchWarning: u({
      type: B(["deep-link", "prefill"]),
      prefillLength: E().int().nonnegative()
    }).optional()
  }));
function z(e) {
  return _({
    text: e.text,
    cursorOffset: e.cursorOffset,
    pasteIds: Object.values(e.pastedContents).filter(item => !item.inline).slice(0, v).map(item => item.id),
    launchWarning: e.launchWarning
  });
}
function njo(e) {
  let r = [],
    s = "";
  for (let a of e.replace(/\r\n|\r/g, `
`).replaceAll("\t", "    ").split(/\u200C+/)) {
    let n = VA(a, "", {
      keepNewlines: !0
    });
    if (n === "") continue;
    if (s !== "" && /\S$/.test(s) && /^\S/.test(n)) r.push("\u200C");
    r.push(n), s = n;
  }
  return r.join("");
}
async function VYe(e, r) {
  await P(e, {
    force: !0
  });
  let s = await qO(e, r, 384);
  try {
    await Is(s, e);
  } catch (error) {
    throw await P(s, {
      force: !0
    }).catch(() => {}), error;
  }
}
function D(e) {
  let r;
  try {
    r = ee(e);
  } catch {
    return null;
  }
  let s = j().safeParse(r);
  if (!s.success) return null;
  let {
      cursorOffset: cursorOffset,
      pasteIds: pasteIds,
      launchWarning: launchWarning
    } = s.data,
    d = njo(s.data.text),
    O = new Set(pasteIds),
    text = "",
    S = 0;
  for (let f of df(d)) if (O.has(f.id)) text += d.slice(S, f.index), S = f.index + f.match.length;
  if (text += d.slice(S), text.trim() === "") return null;
  return {
    text: text,
    mode: "prompt",
    cursorOffset: Q(text, Math.min(cursorOffset, text.length)).length,
    pastedContents: {},
    launchWarning: launchWarning
  };
}
async function I(e, r) {
  let s = y(e, w),
    a = r === null ? "" : z(r);
  if (Buffer.byteLength(a) > x) t("[bg] prompt stash too large to persist; kept in memory only", {
    level: "warn"
  }), a = "";
  try {
    let n = await P(s, {
      force: !0
    }).then(() => !0, h => (Td(h), !1));
    if (a === "" && n) return;
    await VYe(s, a);
  } catch (error) {
    if (!K(error)) Td(error);
  }
}
async function k(e) {
  let r = await yd(y(e, w), x);
  if (!r) return null;
  let s = D(r);
  if (s === null) t("[bg] persisted prompt stash unreadable or empty", {
    level: "warn"
  }), m("bg_prompt_stash_restore", "unreadable_or_empty");
  return s;
}
class rjo {
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
    let CLAUDE_JOB_DIR = i.CLAUDE_JOB_DIR;
    if (!CLAUDE_JOB_DIR) return;
    this.#r = this.#r.then(() => I(CLAUDE_JOB_DIR, e));
  };
  async restore() {
    let CLAUDE_JOB_DIR_2 = i.CLAUDE_JOB_DIR;
    if (this.#s || !CLAUDE_JOB_DIR_2) return !1;
    this.#s = !0;
    let stash = await k(CLAUDE_JOB_DIR_2);
    if (stash === null) return !1;
    if (this.#t.getState().stash !== null) return c("bg_prompt_stash_restore", "slot_taken"), !1;
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
export { njo, VYe, rjo };