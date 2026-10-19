// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t_ } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { mF } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { V8n, oi, Pw, JM, fc, jm } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Rt } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Et, Er } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Vs, RQe } from "B:/~BUN/root/chunk-cx57tr4b.js";
import { hyt } from "B:/~BUN/root/chunk-e4q58xft.js";
import { Lar, yTt } from "B:/~BUN/root/chunk-jh5vsjwc.js";
import { bot } from "B:/~BUN/root/chunk-cptewj9f.js";
import { o, u, fe, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
var mTt = f(() => u({
    method: C("notifications/claude/channel"),
    params: u({
      content: o(),
      meta: fe(o(), o()).optional()
    })
  })),
  Mar = "notifications/claude/channel/permission",
  qXr = f(() => u({
    method: C(Mar),
    params: u({
      request_id: o(),
      behavior: U(["allow", "deny"])
    })
  })),
  KXr = "notifications/claude/channel/permission_request",
  m = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function gTt(e, i, n) {
  let r = Object.entries(n ?? {}),
    [c, a] = g(r, ([p]) => m.test(p));
  if (a.length > 0) t(`[channel] ${e}: dropped ${a.length} meta key(s) that don't match ${m.source}: ${a.map(([p]) => p).join(", ")}`, {
    level: "warn"
  });
  let s = c.map(([p, l]) => ` ${p}="${Vs(l)}"`).join(""),
    d = RQe(mF, hyt(i));
  return `<${mF} source="${Vs(e)}"${s}>
${d}
</${mF}>`;
}
function g(e, i) {
  let n = [],
    r = [];
  for (let c of e) (i(c) ? n : r).push(c);
  return [n, r];
}
function wRn(entries) {
  if (entries) return {
    entries: entries,
    source: "org"
  };
  return {
    entries: Lar(),
    source: "ledger"
  };
}
function YXr(e) {
  return e === "provider" || e === "disabled" || e === "capability" || e === "era";
}
function _ot(e) {
  if (Et()) {
    let i = Er();
    return (i === "team" || i === "enterprise") && e?.channelsEnabled !== !0;
  }
  return e !== null && e.channelsEnabled !== !0;
}
function $ce(e, i) {
  let n = e.split(":");
  return i.find(item => item.kind === "server" ? e === item.name : n[0] === "plugin" && (n[1] === item.name || n[1] === JM(item.name, `${item.name}@${item.marketplace}`)));
}
function Dar(e, i) {
  let n = e ? fc(e) : void 0,
    r = fc(Pw(`${i.name}@${i.marketplace}`)).name;
  return n?.marketplace !== void 0 && n.marketplace === i.marketplace && (i.dev ? n.name === r : jm(n.name, r));
}
function hTt(e, i, n, r) {
  if (!bot(i)) return {
    action: "skip",
    kind: "capability",
    reason: "server did not declare claude/channel capability"
  };
  if (r === "modern") return {
    action: "skip",
    kind: "era",
    reason: "connection negotiated a modern protocol revision with no unsolicited notification path"
  };
  if (xe() !== "firstParty") return {
    action: "skip",
    kind: "provider",
    reason: "channels are not available on third-party providers"
  };
  if (yTt()) return {
    action: "skip",
    kind: "disabled",
    reason: "channels feature is not currently available"
  };
  let c = me("policySettings");
  if (_ot(c)) return {
    action: "skip",
    kind: "policy",
    reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)"
  };
  let a = $ce(e, t_());
  if (!a) return {
    action: "skip",
    kind: "session",
    reason: `server ${e} not in --channels list for this session`
  };
  if (a.kind === "plugin") {
    let s = n ? fc(n) : void 0;
    if (s?.marketplace === void 0 || !Dar(n, a)) return {
      action: "skip",
      kind: "marketplace",
      reason: `you asked for plugin:${a.name}@${a.marketplace} but the installed plugin is ${s?.marketplace !== void 0 ? Rt(`${s.name}@${s.marketplace}`) : "from an unknown source"}`
    };
    if (!a.dev) {
      let {
        entries: entries_2,
        source: source
      } = wRn(c?.allowedChannelPlugins);
      if (!entries_2.some(item => item.marketplace === s.marketplace && (item.plugin === s.name || item.marketplace === oi && V8n(item.plugin) === s.name))) {
        let l = Rt(`${s.name}@${s.marketplace}`);
        return {
          action: "skip",
          kind: "allowlist",
          reason: source === "org" ? `plugin ${l} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${l} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
        };
      }
    }
  } else if (!a.dev) return {
    action: "skip",
    kind: "allowlist",
    reason: `server ${a.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
  };
  return {
    action: "register"
  };
}
export { mTt, Mar, qXr, KXr, gTt, wRn, YXr, _ot, $ce, Dar, hTt };