// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { jb } from "B:/~BUN/root/chunk-fhmaxxy1.js";
import { vAt, kAt, F7t } from "B:/~BUN/root/chunk-3jyp964r.js";
import { _6 } from "B:/~BUN/root/chunk-mrt797ke.js";
import { $5 } from "B:/~BUN/root/chunk-7r4zb9xn.js";
function btr() {
  let o = !1,
    e;
  return {
    get ready() {
      return o;
    },
    whenReady: () => e ??= a().then(() => {
      o = !0, m();
    })
  };
}
async function a() {
  let o = performance.now();
  try {
    _6();
  } catch (error) {
    d(te(error));
  }
  let [e, r, i] = await Promise.all([n("the plugin-hook registration pass", async () => {
    await kAt();
  }), n("the remote managed-settings load", $5), n("the policy-limits load", jb)]);
  t(`[remote-tools] ready to judge calls after ${Math.round(performance.now() - o)}ms: waited ${e}ms for plugin hooks, ${r}ms for remote managed settings, ${i}ms for policy limits`);
}
async function n(o, e) {
  let r = performance.now();
  try {
    await e();
  } catch (error) {
    t(`[remote-tools] waiting for ${o} failed; serving goes on without it`, {
      level: "error"
    }), d(te(error));
  }
  return Math.round(performance.now() - r);
}
async function m() {
  try {
    let o = (await vAt(!1)) ?? (await F7t());
    if (o !== void 0) t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${o}`, {
      level: "error"
    });
  } catch (error) {
    d(te(error));
  }
}
export { btr };