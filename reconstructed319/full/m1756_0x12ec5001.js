// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Qi,
  $G
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  ra
} from "B:/~BUN/root/chunk-tzwf3sbj.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  zC
} from "B:/~BUN/root/chunk-wv4xq162.js";
import {
  SS
} from "B:/~BUN/root/chunk-wgm0dv7j.js";
import {
  q4e
} from "B:/~BUN/root/chunk-fw3bvjzd.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
var sUe = (g, s, u) => new Promise((l, c) => {
  let n = !1,
    o = null;

  function i(t) {
    return o !== null && !ra(t, o)
  }(async () => {
    let {
      rerender: t,
      unmount: p,
      waitUntilExit: f
    } = await $G(e(SS, {
      children: e(d, {
        settings: g,
        baseline: u,
        onAccept: (r) => {
          if (!i(r)) return !1;
          if (n = !0, l("approved"), t(null), !s) p()
        },
        onReject: (r) => {
          if (!i(r)) return !1;
          if (n = !0, l("rejected"), t(null), !s) p()
        }
      })
    }, "managed-settings-security"), zC(!1));
    if (o = Date.now(), await f(), !n) {
      let r = Error("Managed-settings consent dialog exited without an answer");
      a(r), c(r)
    }
  })().catch((t) => {
    a(t), c(t)
  })
});

function d(g) {
  let o = S(11),
    {
      settings: s,
      baseline: u,
      onAccept: l,
      onReject: c
    } = g,
    n = Qi(),
    i;
  if (o[0] !== n || o[1] !== l) i = () => l(n), o[0] = n, o[1] = l, o[2] = i;
  else i = o[2];
  let t;
  if (o[3] !== n || o[4] !== c) t = () => c(n), o[3] = n, o[4] = c, o[5] = t;
  else t = o[5];
  let p;
  if (o[6] !== u || o[7] !== s || o[8] !== i || o[9] !== t) p = e(q4e, {
    settings: s,
    baseline: u,
    reveal: "default",
    onAccept: i,
    onReject: t
  }), o[6] = u, o[7] = s, o[8] = i, o[9] = t, o[10] = p;
  else p = o[10];
  return p
}
export {
  sUe
};
