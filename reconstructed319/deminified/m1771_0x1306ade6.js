// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ms as initialize } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { dh } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { BAn, jAn, Jfr } from "B:/~BUN/root/chunk-27h4st9h.js";
import { O1 } from "B:/~BUN/root/chunk-79dw4seg.js";
import { xB } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { TTe } from "B:/~BUN/root/chunk-q82am8wz.js";
var f = 3000;
function EUo(e = {}) {
  let r = e.firstFlagFetchWaitMs ?? f,
    o = !1,
    i;
  return {
    get ready() {
      return o;
    },
    whenReady: () => i ??= d(r).then(() => {
      o = !0, c();
    })
  };
}
async function d(budgetMs) {
  let r = performance.now();
  try {
    O1();
  } catch (error) {
    a(F(error));
  }
  let o = !1,
    [i, m, l, g] = await Promise.all([n("the plugin-hook registration pass", async () => {
      await jAn();
    }), n("the remote managed-settings load", xB), n("the policy-limits load", dh), n("the first flag fetch", async () => {
      let {
        timedOut: timedOut
      } = await TTe({
        initialize: initialize,
        budgetMs: budgetMs
      });
      o = !timedOut;
    })]);
  t(`[remote-tools] ready to judge calls after ${Math.round(performance.now() - r)}ms: waited ${i}ms for plugin hooks, ${m}ms for remote managed settings, ${l}ms for policy limits, ${g}ms for the first flag fetch (${o ? "landed" : "not heard in time"})`);
}
async function n(e, r) {
  let o = performance.now();
  try {
    await r();
  } catch (error) {
    t(`[remote-tools] waiting for ${e} failed; serving goes on without it`, {
      level: "error"
    }), a(F(error));
  }
  return Math.round(performance.now() - o);
}
async function c() {
  try {
    let e = (await BAn(!1)) ?? (await Jfr());
    if (e !== void 0) t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`, {
      level: "error"
    });
  } catch (error) {
    a(F(error));
  }
}
export { EUo };