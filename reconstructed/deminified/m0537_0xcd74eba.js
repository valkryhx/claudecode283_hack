// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { v, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { ce } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { TC } from "B:/~BUN/root/chunk-2swveyqa.js";
import { rl } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { cy } from "B:/~BUN/root/chunk-q1gfnztc.js";
import { lstat as u, readdir as w, rmdir as g, unlink as y } from "fs/promises";
import { dirname as h, join as l } from "path";
var Iar = "images",
  Oar = /^(\d+)\.[a-z]+$/;
async function dto(a, p) {
  let e = {
      removed: 0,
      errors: 0
    },
    r = ce(),
    n,
    i;
  try {
    n = await r.realpath(p ?? rl()), i = await r.readdir(n);
  } catch {
    return e;
  }
  let o = Y();
  for (let t of i) {
    if (!t.isDirectory()) continue;
    let s = l(n, t.name),
      c;
    try {
      c = await r.readdir(s);
    } catch {
      continue;
    }
    for (let m of c) {
      if (!m.isDirectory() || m.name === o || en(m.name) === null) continue;
      let d = l(s, m.name, Iar);
      try {
        let f = await r.lstat(d);
        if (!f.isDirectory() || f.mtime >= a) continue;
        if (await I(d, a)) e.removed++;
      } catch (error) {
        if (!Et(error)) e.errors++;
      }
    }
  }
  return e;
}
async function I(a, p) {
  let e = await cy(a, [a], {
    leaf: "replace"
  });
  try {
    await e.recheckBeforeWrite();
    let r = await u(e.ioPath);
    if (!r.isDirectory() || r.mtime >= p) return !1;
    let n = l(a, "any"),
      i = await cy(n, [n], {
        leaf: "replace"
      });
    try {
      let o = h(i.ioPath);
      await i.recheckBeforeWrite();
      for (let t of await w(o)) {
        let s = t.lastIndexOf(".tmp."),
          c = s === -1 ? t : t.slice(0, s);
        if (!Oar.test(c) || s !== -1 && !TC(t, c)) continue;
        await i.recheckBeforeWrite(), await y(l(o, t)).catch(() => {});
      }
    } finally {
      await i.close();
    }
    await e.recheckBeforeWrite();
    try {
      await g(e.ioPath);
    } catch (error) {
      let t = v(error);
      if (t === "ENOTEMPTY" || t === "EEXIST") return !1;
      throw error;
    }
    return !0;
  } finally {
    await e.close();
  }
}
export { Iar, Oar, dto };