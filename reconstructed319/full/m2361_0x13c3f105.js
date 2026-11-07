// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  g
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  jRe,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  xC,
  ng
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  wp
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  Dd
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  vi
} from "B:/~BUN/root/chunk-knfpag6d.js";
import {
  dD
} from "B:/~BUN/root/chunk-pjcve3z9.js";
import {
  Ov
} from "B:/~BUN/root/chunk-2r9r3hfm.js";
import {
  vfi,
  Efi
} from "B:/~BUN/root/chunk-grafhwky.js";
import {
  Isr,
  Msr
} from "B:/~BUN/root/chunk-m5r98b9b.js";
import {
  Svn
} from "B:/~BUN/root/chunk-kr1v6gnh.js";
var p = "Browser extension is not connected. The user's app may now be showing a card that sets up a browser for Claude. In one or two short sentences, tell them that you need a browser for this, and that they can set up the Claude desktop app or Claude in Chrome in the card below. Give no links or other installation steps, and stop until they reply.",
  u = `${Svn}chrome-no-browser`;

function m({
  agentId: t,
  allowGivenBy: o,
  messages: s,
  toolUseId: r,
  options: {
    messageClientPlatform: e,
    refreshTools: l,
    tools: n
  }
}) {
  return t === void 0 && (tn() || xC()) && ng() && (e === "web_claude_ai" || e === "desktop_app") && (jRe(s) || o?.toolUseId === r && o?.approver === "user") && v("tengu_memoized_owl", !1) && !(l?.() ?? n).some((a) => Ov(a.name) && !a.name.startsWith(dD) || Dd(a, wp))
}
async function gfi(t, o, s, r) {
  let [e, ...l] = t.content ?? [], n = o === "list_connected_browsers" && e?.type === "text" && e.text === "[]";
  if (!(e?.type === "text" && l.length === 0 && (n || Msr(e.text)) && !vi().bridgeBinding?.context.getPersistedDeviceId?.() && m(r) && (!n || v("tengu_fluttering_sutherland", !1) && await Efi(s)) && await vfi())) return t;
  return g("chrome_setup_card_answer"), {
    content: [{
      type: "text",
      text: p
    }]
  }
}

function xsr(t, o, s) {
  if (o?.[u] !== !0) return t;
  let r = Isr();
  if (r !== void 0) return [{
    type: "text",
    text: r
  }];
  if (!(!vi().browserHints?.preferredDeviceId && !i.CLAUDE_CHROME_PAIRED_DEVICE_ID && m(s))) return t;
  return g("chrome_setup_card_answer"), [{
    type: "text",
    text: p
  }]
}
export {
  gfi,
  xsr
};
