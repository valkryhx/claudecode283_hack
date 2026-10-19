// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { E, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { b, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { _g } from "B:/~BUN/root/chunk-8z3a373v.js";
import { me, In } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { _z } from "B:/~BUN/root/chunk-6azkz4wv.js";
function GGr(u, {
  requireOnboarding = !0
} = {}) {
  let o = ue();
  if (requireOnboarding && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !E("tengu_maple_pier", !0)) return null;
  let e = me("userSettings")?.permissions?.defaultMode,
    t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some(item => me(item)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && _z(u)) return e;
  return null;
}
function VGr(u, n, o) {
  if (ue().hasSeenAutoDefaultNudge) return;
  let e = _g(n.current_mode);
  if (u === "shown") {
    i("tengu_auto_default_nudge_shown", {
      current_mode: pe(e),
      surface: b("ide")
    });
    return;
  }
  let t = n.choice === "accept" ? "accept" : "decline";
  if (t === "accept") In("userSettings", {
    permissions: {
      defaultMode: "auto"
    }
  }, void 0, o);
  Ce(r => r.hasSeenAutoDefaultNudge ? r : {
    ...r,
    hasSeenAutoDefaultNudge: !0
  }, o), i("tengu_auto_default_nudge_resolved", {
    choice: b(t),
    outcome: t === "accept" ? b("switched") : b("declined"),
    current_mode: pe(e),
    surface: b("ide")
  });
}
export { GGr, VGr };