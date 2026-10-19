// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  ad
} from "B:/~BUN/root/chunk-2ypz4cxh.js";
import {
  tS
} from "B:/~BUN/root/chunk-7wsxhgty.js";
import {
  readFile as a
} from "fs/promises";
class n {
  firedSites = new Set;
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), i("tengu_dead_probe_adopt_ticks_token", {
      site: c(e)
    })
  }
  reset() {
    this.firedSites.clear()
  }
}
var l = new z(() => new n);

function f() {
  return l.of(j().host)
}

function u4r(e) {
  f().fire(e)
}
async function j2t(e) {
  return null
}
async function knt(e, t, r) {
  if (r !== void 0) {
    if (await ad(e, {
        skipCache: !0
      }) !== r) return
  } else if (t !== void 0) {
    if (u4r("kill_gate"), await j2t(e) !== t) return
  } else return;
  await tS(e, "SIGTERM").catch(() => {})
}
export {
  u4r,
  j2t,
  knt
};
