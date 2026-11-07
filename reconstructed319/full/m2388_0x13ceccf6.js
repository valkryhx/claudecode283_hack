// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Mr
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Ze
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  pt
} from "B:/~BUN/root/chunk-v95bwhaa.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  $cr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  fUe
} from "B:/~BUN/root/chunk-8k8kczfy.js";
import {
  gt
} from "B:/~BUN/root/chunk-sx03ea6s.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  O,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function LFo({
  configHome: _,
  storageV5: h,
  origin: d,
  onDone: w
}) {
  let i = d === "first_run",
    o = fUe(w, {
      selfOpened: i,
      onCancelled: (t) => c("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled")
    });
  pt("confirm:no", () => p("not_now"), {
    context: "Confirmation",
    isActive: i && !o.decided
  }), O(() => {
    l("tengu_home_settings_mode_prompt_shown", {
      origin: f(d)
    })
  }, [d]);

  function p(t) {
    if (!o.take()) return;
    if (l("tengu_home_settings_mode_prompt", {
        choice: f(t),
        origin: f(d)
      }), t === "not_now") {
      c("ccr_home_seed_mode_prompt", "dismissed"), o.handBack(t);
      return
    }
    $cr(t, h).then((u) => {
      if (o.settled()) return;
      switch (u) {
        case "refused":
          m("ccr_home_seed_mode_prompt", "not_written"), o.handBack("not_saved");
          return;
        case "not_stored":
          m("ccr_home_seed_mode_prompt", "not_stored"), o.handBack("not_stored");
          return;
        case "unconfirmed":
          c("ccr_home_seed_mode_prompt", "unconfirmed");
          break;
        case "written":
          if (t === "forward") g("ccr_home_seed_mode_prompt");
          else c("ccr_home_seed_mode_prompt", "declined");
          break
      }
      o.handBack(t)
    }, (u) => {
      if (a(u), o.settled()) return;
      m("ccr_home_seed_mode_prompt", "write_failed"), o.handBack("not_saved")
    })
  }
  if (o.decided) return o.exitHintShowing ? r(n, {
    dimColor: !0,
    italic: !0,
    children: ["Press ", o.exit.keyName, " again to exit"]
  }) : null;
  return r(ke, {
    title: "Use this machine's settings in cloud sessions?",
    onCancel: () => p("not_now"),
    isCancelActive: !i,
    inputGuide: o.exit.pending ? r(n, {
      children: ["Press ", o.exit.keyName, " again to exit"]
    }) : r(Ce, {
      children: [e(Y, {
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
        children: Mr(_)
      }), e(n, {
        children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent."
      }), e(n, {
        dimColor: !0,
        children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud."
      })]
    }), e(Ze, {
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
      hideIndexes: i,
      disablePrintableKeybindings: i,
      isDisabled: o.choicesDisabled,
      refuseInput: o.refuseInput,
      onChange: p,
      onCancel: () => p("not_now")
    })]
  })
}
export {
  LFo
};
