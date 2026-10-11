// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  x,
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  y,
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  Hg
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  he,
  ln
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  MH
} from "B:/~BUN/root/chunk-evn8cf3v.js";

function $Jn(u, {
  requireOnboarding: r = !0
} = {}) {
  let o = le();
  if (r && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !x("tengu_maple_pier", !1)) return null;
  let e = he("userSettings")?.permissions?.defaultMode,
    t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some((n) => he(n)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && MH(u)) return e;
  return null
}

function UJn(u, r, o) {
  if (le().hasSeenAutoDefaultNudge) return;
  let e = Hg(r.current_mode);
  if (u === "shown") {
    i("tengu_auto_default_nudge_shown", {
      current_mode: ue(e),
      surface: y("ide")
    });
    return
  }
  let t = r.choice === "accept" ? "accept" : "decline";
  if (t === "accept") ln("userSettings", {
    permissions: {
      defaultMode: "auto"
    }
  }, void 0, o);
  Ee((n) => n.hasSeenAutoDefaultNudge ? n : {
    ...n,
    hasSeenAutoDefaultNudge: !0
  }, o), i("tengu_auto_default_nudge_resolved", {
    choice: y(t),
    outcome: t === "accept" ? y("switched") : y("declined"),
    current_mode: ue(e),
    surface: y("ide")
  })
}
export {
  $Jn,
  UJn
};
