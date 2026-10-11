// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  ge
} from "B:/~BUN/root/chunk-51erc9xb.js";
import {
  ZQt
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Rn
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  Sue
} from "B:/~BUN/root/chunk-j1w97k9d.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  R,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();

function mZn({
  configHome: h,
  storageV5: g,
  origin: l,
  onDone: w
}) {
  let u = l === "first_run",
    o = Sue(w, {
      selfOpened: u,
      onCancelled: (t) => p("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled")
    });
  ze("confirm:no", () => f("not_now"), {
    context: "Confirmation",
    isActive: u && !o.decided
  }), R(() => {
    i("tengu_home_settings_mode_prompt_shown", {
      origin: c(l)
    })
  }, [l]);

  function f(t) {
    if (!o.take()) return;
    if (i("tengu_home_settings_mode_prompt", {
        choice: c(t),
        origin: c(l)
      }), t === "not_now") {
      p("ccr_home_seed_mode_prompt", "dismissed"), o.handBack(t);
      return
    }
    ZQt(t, g).then((a) => {
      if (o.settled()) return;
      if (a === "refused") m("ccr_home_seed_mode_prompt", "not_written");
      else if (a === "unconfirmed") p("ccr_home_seed_mode_prompt", "unconfirmed");
      else if (t === "forward") _("ccr_home_seed_mode_prompt");
      else p("ccr_home_seed_mode_prompt", "declined");
      o.handBack(a === "refused" ? "not_saved" : t)
    }, (a) => {
      if (d(a), o.settled()) return;
      m("ccr_home_seed_mode_prompt", "write_failed"), o.handBack("not_saved")
    })
  }
  if (o.decided) return o.exitHintShowing ? r(n, {
    dimColor: !0,
    italic: !0,
    children: ["Press ", o.exit.keyName, " again to exit"]
  }) : null;
  return r(ge, {
    title: "Use this machine's settings in cloud sessions?",
    onCancel: () => f("not_now"),
    isCancelActive: !u,
    inputGuide: o.exit.pending ? r(n, {
      children: ["Press ", o.exit.keyName, " again to exit"]
    }) : r(ye, {
      children: [e(F, {
        chord: "enter",
        action: "confirm"
      }), e(Xe, {
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
        children: Rn(h)
      }), e(n, {
        children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus the permission rules that don't name paths on this machine, into each cloud session you start with claude --cloud, so it follows the same instructions and preferences. It skips credential files and anything your Read rules or sandbox settings deny, never sends hooks, environment variables, MCP servers, or plugins, and sends nothing outside this folder, even through a link or an @import. What is sent is encrypted at rest, and each launch tells you what it sent."
      }), e(n, {
        dimColor: !0,
        children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud."
      })]
    }), e(Fe, {
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
      hideIndexes: u,
      isDisabled: o.choicesDisabled,
      refuseInput: o.refuseInput,
      onChange: f,
      onCancel: () => f("not_now")
    })]
  })
}
export {
  mZn
};
