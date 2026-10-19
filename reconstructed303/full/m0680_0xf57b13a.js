// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Vt
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  K
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  k,
  Wt
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  se
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  dI
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  wd
} from "B:/~BUN/root/chunk-wegca9zh.js";
import {
  GS
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  lstat as u,
  readdir as w,
  rmdir as g,
  unlink as y
} from "fs/promises";
import {
  dirname as h,
  join as l
} from "path";
var Zeo = "images",
  eto = /^(\d+)\.[a-z]+$/;
async function Ras(a, p) {
  let e = {
      removed: 0,
      errors: 0
    },
    r = se(),
    n, i;
  try {
    n = await r.realpath(p ?? wd()), i = await r.readdir(n)
  } catch {
    return e
  }
  let o = K();
  for (let t of i) {
    if (!t.isDirectory()) continue;
    let s = l(n, t.name),
      c;
    try {
      c = await r.readdir(s)
    } catch {
      continue
    }
    for (let m of c) {
      if (!m.isDirectory() || m.name === o || Vt(m.name) === null) continue;
      let d = l(s, m.name, Zeo);
      try {
        let f = await r.lstat(d);
        if (!f.isDirectory() || f.mtime >= a) continue;
        if (await I(d, a)) e.removed++
      } catch (f) {
        if (!Wt(f)) e.errors++
      }
    }
  }
  return e
}
async function I(a, p) {
  let e = await GS(a, [a], {
    leaf: "replace"
  });
  try {
    await e.recheckBeforeWrite();
    let r = await u(e.ioPath);
    if (!r.isDirectory() || r.mtime >= p) return !1;
    let n = l(a, "any"),
      i = await GS(n, [n], {
        leaf: "replace"
      });
    try {
      let o = h(i.ioPath);
      await i.recheckBeforeWrite();
      for (let t of await w(o)) {
        let s = t.lastIndexOf(".tmp."),
          c = s === -1 ? t : t.slice(0, s);
        if (!eto.test(c) || s !== -1 && !dI(t, c)) continue;
        await i.recheckBeforeWrite(), await y(l(o, t)).catch(() => {})
      }
    } finally {
      await i.close()
    }
    await e.recheckBeforeWrite();
    try {
      await g(e.ioPath)
    } catch (o) {
      let t = k(o);
      if (t === "ENOTEMPTY" || t === "EEXIST") return !1;
      throw o
    }
    return !0
  } finally {
    await e.close()
  }
}
export {
  Zeo,
  eto,
  Ras
};
