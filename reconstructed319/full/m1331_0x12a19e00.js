// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  st,
  dv
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Rt,
  dr
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  _G
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  FLr,
  ri,
  wk,
  wH,
  uc,
  ky
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Et
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  br
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  vc,
  X_t
} from "B:/~BUN/root/chunk-jgwwv4gf.js";
import {
  hUt
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  O4r,
  FKt
} from "B:/~BUN/root/chunk-p13t3he7.js";
import {
  QRt
} from "B:/~BUN/root/chunk-kv6ht8ms.js";
import {
  lc
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  o,
  u,
  me,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var DKt = p(() => u({
    method: T("notifications/claude/channel"),
    params: u({
      content: o(),
      meta: me(o(), o()).optional()
    })
  })),
  x4r = "notifications/claude/channel/permission",
  KVo = p(() => u({
    method: T(x4r),
    params: u({
      request_id: o(),
      behavior: B(["allow", "deny"])
    })
  })),
  qVo = "notifications/claude/channel/permission_request",
  f = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

function g(e) {
  return br(e, "channel")
}

function LKt(e, r, n) {
  return {
    mode: "prompt",
    agentId: st(),
    value: h(e, r, n),
    toolsUsed: [g(e)],
    priority: "next",
    isMeta: !0,
    origin: {
      kind: "channel",
      server: e
    },
    skipSlashCommands: !0,
    skipAttachments: !0
  }
}

function h(e, r, n) {
  lc(g(e));
  let i = Object.entries(n ?? {}),
    [c, a] = k(i, ([d]) => f.test(d));
  if (a.length > 0) t(`[channel] ${e}: dropped ${a.length} meta key(s) that don't match ${f.source}: ${a.map(([d])=>d).join(", ")}`, {
    level: "warn"
  });
  let s = c.map(([d, l]) => ` ${d}="${vc(l)}"`).join(""),
    m = X_t(_G, hUt(r));
  return `<${_G} source="${vc(e)}"${s}>
${m}
</${_G}>`
}

function k(e, r) {
  let n = [],
    i = [];
  for (let c of e)(r(c) ? n : i).push(c);
  return [n, i]
}

function FQn(e) {
  if (e) return {
    entries: e,
    source: "org"
  };
  return {
    entries: O4r(),
    source: "ledger"
  }
}

function YVo(e) {
  return e === "provider" || e === "disabled" || e === "capability" || e === "era"
}

function lCt(e) {
  if (Rt()) {
    let r = dr();
    return (r === "team" || r === "enterprise") && e?.channelsEnabled !== !0
  }
  return e !== null && e.channelsEnabled !== !0
}

function Bke(e, r) {
  let n = e.split(":");
  return r.find((i) => i.kind === "server" ? e === i.name : n[0] === "plugin" && (n[1] === i.name || n[1] === wH(i.name, `${i.name}@${i.marketplace}`)))
}

function P4r(e, r) {
  let n = e ? uc(e) : void 0,
    i = uc(wk(`${r.name}@${r.marketplace}`)).name;
  return n?.marketplace !== void 0 && n.marketplace === r.marketplace && (r.dev ? n.name === i : ky(n.name, i))
}

function NKt(e, r, n, i) {
  if (!QRt(r)) return {
    action: "skip",
    kind: "capability",
    reason: "server did not declare claude/channel capability"
  };
  if (i === "modern") return {
    action: "skip",
    kind: "era",
    reason: "connection negotiated a modern protocol revision with no unsolicited notification path"
  };
  if (Te() !== "firstParty") return {
    action: "skip",
    kind: "provider",
    reason: "channels are not available on third-party providers"
  };
  if (FKt()) return {
    action: "skip",
    kind: "disabled",
    reason: "channels feature is not currently available"
  };
  let c = be("policySettings");
  if (lCt(c)) return {
    action: "skip",
    kind: "policy",
    reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)"
  };
  let a = Bke(e, dv());
  if (!a) return {
    action: "skip",
    kind: "session",
    reason: `server ${e} not in --channels list for this session`
  };
  if (a.kind === "plugin") {
    let s = n ? uc(n) : void 0;
    if (s?.marketplace === void 0 || !P4r(n, a)) return {
      action: "skip",
      kind: "marketplace",
      reason: `you asked for plugin:${a.name}@${a.marketplace} but the installed plugin is ${s?.marketplace!==void 0?Et(`${s.name}@${s.marketplace}`):"from an unknown source"}`
    };
    if (!a.dev) {
      let {
        entries: m,
        source: d
      } = FQn(c?.allowedChannelPlugins);
      if (!m.some((l) => l.marketplace === s.marketplace && (l.plugin === s.name || l.marketplace === ri && FLr(l.plugin) === s.name))) {
        let l = Et(`${s.name}@${s.marketplace}`);
        return {
          action: "skip",
          kind: "allowlist",
          reason: d === "org" ? `plugin ${l} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${l} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
        }
      }
    }
  } else if (!a.dev) return {
    action: "skip",
    kind: "allowlist",
    reason: `server ${a.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
  };
  return {
    action: "register"
  }
}
export {
  DKt,
  x4r,
  KVo,
  qVo,
  LKt,
  FQn,
  YVo,
  lCt,
  Bke,
  P4r,
  NKt
};
