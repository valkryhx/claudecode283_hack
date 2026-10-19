// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  b
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Rs,
  tve
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  klt,
  d$e,
  f6e,
  nH,
  Re,
  Fy
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  So,
  Xd
} from "B:/~BUN/root/chunk-q0t5e1bx.js";
import {
  $6,
  $9
} from "B:/~BUN/root/chunk-vnmfp48d.js";
import {
  Pb,
  qRe
} from "B:/~BUN/root/chunk-nfa24hxs.js";

function Wei(o) {
  let {
    inputString: e,
    context: n,
    uuid: t,
    origin: r,
    verifiedSlackHumanTurn: s
  } = o, a = f(e, n.options.commands);
  if (a === void 0) return {
    kind: "none"
  };
  let {
    folded: l,
    effectiveCmd: d
  } = a, c = d$e(d, {
    origin: r,
    relayAuthored: s === !0
  });
  if (klt(d) && c) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: e,
    effectiveContext: n
  };
  let u = f6e(d);
  if (u && Xd(d)) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: l ? `/${u.name}${l.args?` ${l.args}`:""}` : e.replace(/^\/\S+/, `/${u.name}`),
    effectiveContext: {
      ...n,
      options: {
        ...n.options,
        commands: [{
          ...u,
          isEnabled: () => Xd(d)
        }, ...n.options.commands]
      }
    }
  };
  return {
    kind: "blocked",
    result: g({
      target: a,
      inputString: e,
      uuid: t,
      origin: r,
      surface: "bridge"
    })
  }
}

function zei(o) {
  let {
    inputString: e,
    context: n,
    uuid: t,
    origin: r
  } = o, s = f(e, n.options.commands);
  if (s === void 0 || d$e(s.effectiveCmd, {
      origin: r,
      relayAuthored: !0
    })) return {
    kind: "none"
  };
  return {
    kind: "blocked",
    result: g({
      target: s,
      inputString: e,
      uuid: t,
      origin: r,
      surface: "relay"
    })
  }
}

function g({
  target: {
    parsed: o,
    cmd: e,
    folded: n,
    effectiveCmd: t
  },
  inputString: r,
  uuid: s,
  origin: a,
  surface: l
}) {
  let {
    sanitizedName: d,
    skillNameHash: c
  } = $6({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: nH().has(e.name),
    isBundled: e.type === "prompt" && e.source === "bundled",
    isOfficial: e.type === "prompt" && $9(e)
  });
  i("tengu_slash_command_unavailable", {
    command_name: d,
    ...c,
    surface: l === "bridge" ? b("bridge") : b("relay"),
    reason: b("unavailable_over_remote_control")
  }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let u = n ? `/${So(e)} ${n.consumedToken} isn't available over Remote Control.` : `/${So(t)} isn't available over Remote Control.`,
    p = tve(e, o.args) || tve(t, n ? n.args : o.args) ? `/${o.commandName} ***` : r;
  return {
    messages: [Re({
      content: p,
      uuid: s,
      origin: a
    }), Fy(`<local-command-stdout>${u}</local-command-stdout>`)],
    shouldQuery: !1,
    resultText: u
  }
}

function f(o, e) {
  let n = Pb(o);
  if (n === null) return;
  let t = Rs(n.commandName, e);
  if (!t) return;
  let r = qRe(t, n.args),
    s = r ? Rs(r.targetName, e) : void 0,
    a = r && s && Xd(s) ? {
      command: s,
      consumedToken: r.consumedToken,
      args: r.remainingArgs
    } : void 0;
  return {
    parsed: n,
    cmd: t,
    folded: a,
    effectiveCmd: a ? a.command : t
  }
}

function gqr(o, e) {
  let n = f(o, e);
  if (n === void 0) return !0;
  let {
    effectiveCmd: t
  } = n;
  return t.type === "prompt" && klt(t)
}
export {
  Wei,
  zei,
  gqr
};
