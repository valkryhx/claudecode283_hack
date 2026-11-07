// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { io, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { f0 } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { e7, Mu } from "B:/~BUN/root/chunk-x1xft50h.js";
import { JS, aG } from "B:/~BUN/root/chunk-1g25msn4.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
import { randomBytes as p } from "crypto";
import { mkdir as c, writeFile as f } from "fs/promises";
import { basename as w, dirname as E, join as a } from "path";
var _ = "tengu_mossy_knuth";
async function mmn(r, i, t, o) {
  let e = Mu();
  if (!_t(_, {
    safe: !0
  })) {
    let s = o ? a(e, o) : e;
    await c(s, {
      recursive: !0,
      mode: 448
    });
    let m = a(s, `${r}${Date.now()}${i}`);
    return await f(m, t), m;
  }
  await c(e, {
    recursive: !0,
    mode: 448
  }), e7(e);
  let n = a(io(ie(), E(e)).resolvedPath, w(e), `${r}${p(8).toString("hex")}${i}`);
  return await $Fo(n, t), n;
}
async function $Fo(r, i) {
  let t = await JS(r, [r], {
    leaf: "replace"
  });
  try {
    await t.recheckBeforeWrite(), await f0(t.ioPath), await f(t.ioPath, i, {
      mode: 384,
      flag: "wx"
    });
  } catch (error) {
    aG(error, t, r);
  } finally {
    await t.close();
  }
}
export { mmn, $Fo };