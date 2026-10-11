// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  y
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Zs,
  gae
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  _W,
  MG,
  Ce,
  tg,
  aqe,
  got,
  EDe,
  BO
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Co,
  Qc
} from "B:/~BUN/root/chunk-yzpw1mdr.js";
import {
  mE,
  fpe
} from "B:/~BUN/root/chunk-3a6ntswp.js";

function Iqo(o) {
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
  } = a, c = got(d, {
    origin: r,
    relayAuthored: s === !0
  });
  if (aqe(d) && c) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: e,
    effectiveContext: n
  };
  let u = EDe(d);
  if (u && Qc(d)) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: l ? `/${u.name}${l.args?` ${l.args}`:""}` : e.replace(/^\/\S+/, `/${u.name}`),
    effectiveContext: {
      ...n,
      options: {
        ...n.options,
        commands: [{
          ...u,
          isEnabled: () => Qc(d)
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

function Oqo(o) {
  let {
    inputString: e,
    context: n,
    uuid: t,
    origin: r
  } = o, s = f(e, n.options.commands);
  if (s === void 0 || got(s.effectiveCmd, {
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
  } = _W({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: BO().has(e.name),
    isBundled: e.type === "prompt" && e.source === "bundled",
    isOfficial: e.type === "prompt" && MG(e)
  });
  i("tengu_slash_command_unavailable", {
    command_name: d,
    ...c,
    surface: l === "bridge" ? y("bridge") : y("relay"),
    reason: y("unavailable_over_remote_control")
  }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let u = n ? `/${Co(e)} ${n.consumedToken} isn't available over Remote Control.` : `/${Co(t)} isn't available over Remote Control.`,
    p = gae(e, o.args) || gae(t, n ? n.args : o.args) ? `/${o.commandName} ***` : r;
  return {
    messages: [Ce({
      content: p,
      uuid: s,
      origin: a
    }), tg(`<local-command-stdout>${u}</local-command-stdout>`)],
    shouldQuery: !1,
    resultText: u
  }
}

function f(o, e) {
  let n = mE(o);
  if (n === null) return;
  let t = Zs(n.commandName, e);
  if (!t) return;
  let r = fpe(t, n.args),
    s = r ? Zs(r.targetName, e) : void 0,
    a = r && s && Qc(s) ? {
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

function ctr(o, e) {
  let n = f(o, e);
  if (n === void 0) return !0;
  let {
    effectiveCmd: t
  } = n;
  return t.type === "prompt" && aqe(t)
}
export {
  Iqo,
  Oqo,
  ctr
};
