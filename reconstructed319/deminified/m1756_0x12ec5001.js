// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qi, $G } from "B:/~BUN/root/chunk-qey16aan.js";
import { ra } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { zC } from "B:/~BUN/root/chunk-wv4xq162.js";
import { SS } from "B:/~BUN/root/chunk-wgm0dv7j.js";
import { q4e } from "B:/~BUN/root/chunk-fw3bvjzd.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
var sUe = (settings, s, baseline) => new Promise((l, c) => {
  let n = !1,
    o = null;
  function i(t) {
    return o !== null && !ra(t, o);
  }
  (async () => {
    let {
      rerender: rerender,
      unmount: unmount,
      waitUntilExit: waitUntilExit
    } = await $G(e(SS, {
      children: e(d, {
        settings: settings,
        baseline: baseline,
        onAccept: r => {
          if (!i(r)) return !1;
          if (n = !0, l("approved"), rerender(null), !s) unmount();
        },
        onReject: r => {
          if (!i(r)) return !1;
          if (n = !0, l("rejected"), rerender(null), !s) unmount();
        }
      })
    }, "managed-settings-security"), zC(!1));
    if (o = Date.now(), await waitUntilExit(), !n) {
      let r = Error("Managed-settings consent dialog exited without an answer");
      a(r), c(r);
    }
  })().catch(t => {
    a(t), c(t);
  });
});
function d(g) {
  let o = S(11),
    {
      settings: settings_2,
      baseline: baseline_2,
      onAccept: onAccept,
      onReject: onReject
    } = g,
    n = Qi(),
    onAccept_2;
  if (o[0] !== n || o[1] !== onAccept) onAccept_2 = () => onAccept(n), o[0] = n, o[1] = onAccept, o[2] = onAccept_2;else onAccept_2 = o[2];
  let onReject_2;
  if (o[3] !== n || o[4] !== onReject) onReject_2 = () => onReject(n), o[3] = n, o[4] = onReject, o[5] = onReject_2;else onReject_2 = o[5];
  let p;
  if (o[6] !== baseline_2 || o[7] !== settings_2 || o[8] !== onAccept_2 || o[9] !== onReject_2) p = e(q4e, {
    settings: settings_2,
    baseline: baseline_2,
    reveal: "default",
    onAccept: onAccept_2,
    onReject: onReject_2
  }), o[6] = baseline_2, o[7] = settings_2, o[8] = onAccept_2, o[9] = onReject_2, o[10] = p;else p = o[10];
  return p;
}
export { sUe };