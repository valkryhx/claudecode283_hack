// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  v,
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  b,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Pg
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  be,
  qn
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  BY
} from "B:/~BUN/root/chunk-zh1rck2m.js";

function gLo(u, {
  requireOnboarding: n = !0
} = {}) {
  let o = fe();
  if (n && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !v("tengu_maple_pier", !0)) return null;
  let e = be("userSettings")?.permissions?.defaultMode,
    t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some((r) => be(r)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && BY(u)) return e;
  return null
}

function yLo(u, n, o) {
  if (fe().hasSeenAutoDefaultNudge) return;
  let e = Pg(n.current_mode);
  if (u === "shown") {
    l("tengu_auto_default_nudge_shown", {
      current_mode: de(e),
      surface: b("ide")
    });
    return
  }
  let t = n.choice === "accept" ? "accept" : "decline";
  if (t === "accept") qn("userSettings", {
    permissions: {
      defaultMode: "auto"
    }
  }, void 0, o);
  Le((r) => r.hasSeenAutoDefaultNudge ? r : {
    ...r,
    hasSeenAutoDefaultNudge: !0
  }, o), l("tengu_auto_default_nudge_resolved", {
    choice: b(t),
    outcome: t === "accept" ? b("switched") : b("declined"),
    current_mode: de(e),
    surface: b("ide")
  })
}
export {
  gLo,
  yLo
};
