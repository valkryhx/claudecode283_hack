// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { ILn } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Gn } from "B:/~BUN/root/chunk-c44qc88s.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { RCe } from "B:/~BUN/root/chunk-1jp1xtb9.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { P, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function tqr({
  configHome: configHome,
  storageV5: storageV5,
  origin: origin,
  onDone: onDone
}) {
  let a = origin === "first_run",
    o = RCe(onDone, {
      selfOpened: a,
      onCancelled: t => p("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled")
    });
  rt("confirm:no", () => onChange("not_now"), {
    context: "Confirmation",
    isActive: a && !o.decided
  }), P(() => {
    i("tengu_home_settings_mode_prompt_shown", {
      origin: c(origin)
    });
  }, [origin]);
  function onChange(t) {
    if (!o.take()) return;
    if (i("tengu_home_settings_mode_prompt", {
      choice: c(t),
      origin: c(origin)
    }), t === "not_now") {
      p("ccr_home_seed_mode_prompt", "dismissed"), o.handBack(t);
      return;
    }
    ILn(t, storageV5).then(f => {
      if (o.settled()) return;
      switch (f) {
        case "refused":
          m("ccr_home_seed_mode_prompt", "not_written"), o.handBack("not_saved");
          return;
        case "not_stored":
          m("ccr_home_seed_mode_prompt", "not_stored"), o.handBack("not_stored");
          return;
        case "unconfirmed":
          p("ccr_home_seed_mode_prompt", "unconfirmed");
          break;
        case "written":
          if (t === "forward") g("ccr_home_seed_mode_prompt");else p("ccr_home_seed_mode_prompt", "declined");
          break;
      }
      o.handBack(t);
    }, f => {
      if (l(f), o.settled()) return;
      m("ccr_home_seed_mode_prompt", "write_failed"), o.handBack("not_saved");
    });
  }
  if (o.decided) return o.exitHintShowing ? r(n, {
    dimColor: !0,
    italic: !0,
    children: ["Press ", o.exit.keyName, " again to exit"]
  }) : null;
  return r(be, {
    title: "Use this machine's settings in cloud sessions?",
    onCancel: () => onChange("not_now"),
    isCancelActive: !a,
    inputGuide: o.exit.pending ? r(n, {
      children: ["Press ", o.exit.keyName, " again to exit"]
    }) : r(Se, {
      children: [e(q, {
        chord: "enter",
        action: "confirm"
      }), e(gt, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "skip for now"
      })]
    }),
    children: [r(s, {
      flexDirection: "column",
      gap: 1,
      children: [e(n, {
        bold: !0,
        children: Gn(configHome)
      }), e(n, {
        children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent."
      }), e(n, {
        dimColor: !0,
        children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud."
      })]
    }), e(Xe, {
      options: [{
        label: "Yes, send my settings",
        value: "forward"
      }, {
        label: "No, keep them on this machine",
        value: "keep_local"
      }, {
        label: "Not now",
        value: "not_now"
      }],
      defaultFocusValue: "not_now",
      hideIndexes: a,
      disablePrintableKeybindings: a,
      isDisabled: o.choicesDisabled,
      refuseInput: o.refuseInput,
      onChange: onChange,
      onCancel: () => onChange("not_now")
    })]
  });
}
export { tqr };