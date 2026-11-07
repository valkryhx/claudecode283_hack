// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { k, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { jA } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { Mu } from "B:/~BUN/root/chunk-x1xft50h.js";
import { JS } from "B:/~BUN/root/chunk-1g25msn4.js";
import { lstat as u, readdir as w, rmdir as g, unlink as y } from "fs/promises";
import { dirname as h, join as l } from "path";
var DLn = "images",
  MSs = /^(\d+)\.[a-z]+$/;
async function PBi(a, p) {
  let e = {
      removed: 0,
      errors: 0
    },
    r = ie(),
    n,
    i;
  try {
    n = await r.realpath(p ?? Mu()), i = await r.readdir(n);
  } catch {
    return e;
  }
  let o = z();
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
      if (!m.isDirectory() || m.name === o || Nt(m.name) === null) continue;
      let d = l(s, m.name, DLn);
      try {
        let f = await r.lstat(d);
        if (!f.isDirectory() || f.mtime >= a) continue;
        if (await I(d, a)) e.removed++;
      } catch (error) {
        if (!qt(error)) e.errors++;
      }
    }
  }
  return e;
}
async function I(a, p) {
  let e = await JS(a, [a], {
    leaf: "replace"
  });
  try {
    await e.recheckBeforeWrite();
    let r = await u(e.ioPath);
    if (!r.isDirectory() || r.mtime >= p) return !1;
    let n = l(a, "any"),
      i = await JS(n, [n], {
        leaf: "replace"
      });
    try {
      let o = h(i.ioPath);
      await i.recheckBeforeWrite();
      for (let t of await w(o)) {
        let s = t.lastIndexOf(".tmp."),
          c = s === -1 ? t : t.slice(0, s);
        if (!MSs.test(c) || s !== -1 && !jA(t, c)) continue;
        await i.recheckBeforeWrite(), await y(l(o, t)).catch(() => {});
      }
    } finally {
      await i.close();
    }
    await e.recheckBeforeWrite();
    try {
      await g(e.ioPath);
    } catch (error) {
      let t = k(error);
      if (t === "ENOTEMPTY" || t === "EEXIST") return !1;
      throw error;
    }
    return !0;
  } finally {
    await e.close();
  }
}
export { DLn, MSs, PBi };