// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { $c } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { Qf } from "B:/~BUN/root/chunk-sa6ew4xs.js";
import { readFile as a } from "fs/promises";
class n {
  firedSites = new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), i("tengu_dead_probe_adopt_ticks_token", {
      site: c(e)
    });
  }
  reset() {
    this.firedSites.clear();
  }
}
var l = new q(() => new n());
function f() {
  return l.of(j().host);
}
function oer(e) {
  f().fire(e);
}
async function Fyt(e) {
  return null;
}
async function lje(e, t, r) {
  if (r !== void 0) {
    if ((await $c(e, {
      skipCache: !0
    })) !== r) return;
  } else if (t !== void 0) {
    if (oer("kill_gate"), (await Fyt(e)) !== t) return;
  } else return;
  await Qf(e, "SIGTERM").catch(() => {});
}
export { oer, Fyt, lje };