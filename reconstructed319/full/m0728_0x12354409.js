// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Vs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  ol
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  QBs,
  Hxo
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  B9i
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
async function Yyo(r) {
  let e = L([Vs(), ol()]).filter((t) => t !== null);
  for (let t of e) try {
    let o = await QBs(r, t);
    if (o !== void 0) {
      let i = await B9i(t, o.gitRoot, r);
      if (typeof i === "string") Hxo(i, o.gitRoot, o.canonicalRoot)
    }
  } catch (o) {
    a(o)
  }
}
export {
  Yyo
};
