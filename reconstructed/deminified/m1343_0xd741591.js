// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Wh } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { mK } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { pt, nr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Do, Zce } from "B:/~BUN/root/chunk-9xz983aj.js";
import { YYe } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { hEn, qQ } from "B:/~BUN/root/chunk-edggnar8.js";
import { A2e } from "B:/~BUN/root/chunk-n1az4c6j.js";
import { cu, Zp } from "B:/~BUN/root/chunk-gsxez0fk.js";
import { cn } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { o, u, fe, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var UQe = f(() => u({
    method: A("notifications/claude/channel"),
    params: u({
      content: o(),
      meta: fe(o(), o()).optional()
    })
  })),
  gEn = "notifications/claude/channel/permission",
  Lnr = f(() => u({
    method: A(gEn),
    params: u({
      request_id: o(),
      behavior: z(["allow", "deny"])
    })
  })),
  Nnr = "notifications/claude/channel/permission_request",
  m = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function BQe(e, i, a) {
  let s = Object.entries(a ?? {}),
    [l, n] = g(s, ([c]) => m.test(c));
  if (n.length > 0) t(`[channel] ${e}: dropped ${n.length} meta key(s) that don't match ${m.source}: ${n.map(([c]) => c).join(", ")}`, {
    level: "warn"
  });
  let r = l.map(([c, p]) => ` ${c}="${Do(p)}"`).join(""),
    d = Zce(mK, YYe(i));
  return `<${mK} source="${Do(e)}"${r}>
${d}
</${mK}>`;
}
function g(e, i) {
  let a = [],
    s = [];
  for (let l of e) (i(l) ? a : s).push(l);
  return [a, s];
}
function xqt(entries) {
  if (entries) return {
    entries: entries,
    source: "org"
  };
  return {
    entries: hEn(),
    source: "ledger"
  };
}
function Hnr(e) {
  return e === "provider" || e === "disabled" || e === "capability" || e === "era";
}
function Qje(e) {
  if (pt()) {
    let i = nr();
    return (i === "team" || i === "enterprise") && e?.channelsEnabled !== !0;
  }
  return e !== null && e.channelsEnabled !== !0;
}
function dSe(e, i) {
  let a = e.split(":");
  return i.find(item => item.kind === "server" ? e === item.name : a[0] === "plugin" && a[1] === item.name);
}
function jQe(e, i, a, s) {
  if (!A2e(i)) return {
    action: "skip",
    kind: "capability",
    reason: "server did not declare claude/channel capability"
  };
  if (s === "modern") return {
    action: "skip",
    kind: "era",
    reason: "connection negotiated a modern protocol revision with no unsolicited notification path"
  };
  if (Ie() !== "firstParty") return {
    action: "skip",
    kind: "provider",
    reason: "channels are not available on third-party providers"
  };
  if (!qQ()) return {
    action: "skip",
    kind: "disabled",
    reason: "channels feature is not currently available"
  };
  let l = he("policySettings");
  if (Qje(l)) return {
    action: "skip",
    kind: "policy",
    reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)"
  };
  let n = dSe(e, Wh());
  if (!n) return {
    action: "skip",
    kind: "session",
    reason: `server ${e} not in --channels list for this session`
  };
  if (n.kind === "plugin") {
    let r = a ? cu(a) : void 0;
    if (r?.marketplace === void 0 || r.marketplace !== n.marketplace || (n.dev ? r.name !== n.name : !Zp(r.name, n.name))) return {
      action: "skip",
      kind: "marketplace",
      reason: `you asked for plugin:${n.name}@${n.marketplace} but the installed plugin is ${r?.marketplace !== void 0 ? cn(`${r.name}@${r.marketplace}`) : "from an unknown source"}`
    };
    if (!n.dev) {
      let {
        entries: entries_2,
        source: source
      } = xqt(l?.allowedChannelPlugins);
      if (!entries_2.some(item => item.plugin === r.name && item.marketplace === r.marketplace)) {
        let p = cn(`${r.name}@${r.marketplace}`);
        return {
          action: "skip",
          kind: "allowlist",
          reason: source === "org" ? `plugin ${p} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${p} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
        };
      }
    }
  } else if (!n.dev) return {
    action: "skip",
    kind: "allowlist",
    reason: `server ${n.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
  };
  return {
    action: "register"
  };
}
export { UQe, gEn, Lnr, Nnr, BQe, xqt, Hnr, Qje, dSe, jQe };