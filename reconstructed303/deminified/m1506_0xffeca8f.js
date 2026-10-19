// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Qi as initialize } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { qv } from "B:/~BUN/root/chunk-pbq7kcha.js";
import { hJt, yJt, UNn } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { jj } from "B:/~BUN/root/chunk-0n2201tc.js";
import { E1 } from "B:/~BUN/root/chunk-hw809fek.js";
import { jBe } from "B:/~BUN/root/chunk-p95zaxtt.js";
var f = 3000;
function fKr(e = {}) {
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
    jj();
  } catch (error) {
    l(H(error));
  }
  let o = !1,
    [i, a, m, g] = await Promise.all([n("the plugin-hook registration pass", async () => {
      await yJt();
    }), n("the remote managed-settings load", E1), n("the policy-limits load", qv), n("the first flag fetch", async () => {
      let {
        timedOut: timedOut
      } = await jBe({
        initialize: initialize,
        budgetMs: budgetMs
      });
      o = !timedOut;
    })]);
  t(`[remote-tools] ready to judge calls after ${Math.round(performance.now() - r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o ? "landed" : "not heard in time"})`);
}
async function n(e, r) {
  let o = performance.now();
  try {
    await r();
  } catch (error) {
    t(`[remote-tools] waiting for ${e} failed; serving goes on without it`, {
      level: "error"
    }), l(H(error));
  }
  return Math.round(performance.now() - o);
}
async function c() {
  try {
    let e = (await hJt(!1)) ?? (await UNn());
    if (e !== void 0) t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`, {
      level: "error"
    });
  } catch (error) {
    l(H(error));
  }
}
export { fKr };