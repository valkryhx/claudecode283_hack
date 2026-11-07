// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { tc } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Ab } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { readFile as s } from "fs/promises";
class o {
  firedSites = new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), l("tengu_dead_probe_adopt_ticks_token", {
      site: f(e)
    });
  }
  reset() {
    this.firedSites.clear();
  }
}
var a = new W(() => new o());
function u() {
  return a.of(H().host);
}
function jHo(e) {
  u().fire(e);
}
async function ehn(e) {
  return null;
}
async function Xvt(e, t, r) {
  if (r !== void 0) {
    if ((await tc(e, {
      skipCache: !0
    })) !== r) return;
  } else if (t !== void 0) {
    if (jHo("kill_gate"), (await ehn(e)) !== t) return;
  } else return;
  await Ab(e, "SIGTERM", {
    groupMembersByPidToo: !0
  }).catch(() => {});
}
export { jHo, ehn, Xvt };