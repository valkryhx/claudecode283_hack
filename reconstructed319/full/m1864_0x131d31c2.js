// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  gsn,
  Jbe,
  gFe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  kOt,
  L8e,
  yct,
  bno,
  uW,
  Ie,
  c_
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ts,
  Cd,
  ni,
  YDe
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  RZ,
  yoe
} from "B:/~BUN/root/chunk-ex2shtaj.js";
import {
  Vb,
  mBe
} from "B:/~BUN/root/chunk-425aft7z.js";
import {
  Nze,
  WSr,
  H0e,
  QDt
} from "B:/~BUN/root/chunk-hskja58z.js";
import {
  _t
} from "B:/~BUN/root/chunk-3a409jmn.js";

function iha(r) {
  let {
    inputString: e,
    context: n,
    uuid: i,
    origin: o,
    verifiedSlackHumanTurn: a
  } = r, t = S(e, n.options.commands, !1);
  if (t === void 0) return {
    kind: "none"
  };
  let {
    folded: s,
    effectiveCmd: u
  } = t, c = L8e(u, {
    origin: o,
    relayAuthored: a === !0
  });
  if (kOt(u) && c) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: e,
    effectiveContext: n
  };
  let d = yct(u);
  if (d && Cd(u)) {
    let g = {
      ...d,
      isEnabled: () => Cd(u)
    };
    return {
      kind: "updated",
      effectiveSkipSlash: !1,
      effectiveInput: s ? `/${d.name}${s.args?` ${s.args}`:""}` : e.replace(/^\/\S+/, `/${d.name}`),
      effectiveContext: {
        ...n,
        options: {
          ...n.options,
          commands: [g, ...n.options.commands]
        }
      },
      bridgeRewrite: g
    }
  }
  return {
    kind: "blocked",
    result: p({
      target: t,
      inputString: e,
      uuid: i,
      origin: o,
      surface: "bridge"
    })
  }
}
var y = new Set([Nze, WSr, H0e, QDt]),
  h = "bot_protected_tengu_iridescent_clover";

function _(r, e) {
  let n = e.inboundOrigin === gsn || e.inboundOrigin === Jbe;
  if (!n && r.type === "prompt" && r.source === "bundled" && y.has(r.name) && (r.name !== H0e || _t(h, {
      safe: !0
    })) && (e.relayAuthored || e.origin?.kind !== "human" && !gFe(e.origin))) return !1;
  if (!e.relayAuthored && !e.bridgeCarried) return !0;
  if (!L8e(r, {
      origin: e.origin,
      relayAuthored: e.relayAuthored
    })) return !1;
  if (r === e.bridgeRewrite) return !0;
  return n && !e.bridgeCarried || bno(r)
}

function aha(r) {
  let {
    inputString: e,
    context: n,
    uuid: i,
    origin: o,
    inboundOrigin: a
  } = r, t = S(e, n.options.commands, !0);
  if (t === void 0 || _(t.effectiveCmd, {
      origin: o,
      relayAuthored: !0,
      inboundOrigin: a,
      bridgeCarried: !1,
      bridgeRewrite: void 0
    })) return {
    kind: "none"
  };
  return {
    kind: "blocked",
    result: p({
      target: t,
      inputString: e,
      uuid: i,
      origin: o,
      surface: "relay"
    })
  }
}

function lha(r) {
  let {
    cmd: e,
    commandName: n,
    args: i,
    inputString: o,
    uuid: a,
    author: t
  } = r;
  if (_(e, t)) return;
  let s = Vb(o);
  return p({
    target: {
      parsed: {
        commandName: s?.commandName ?? n,
        args: i,
        isMcp: !1
      },
      cmd: e,
      folded: void 0,
      effectiveCmd: e
    },
    inputString: o,
    uuid: a,
    origin: t.origin,
    surface: t.bridgeCarried ? "bridge" : "relay"
  })
}

function p({
  target: {
    parsed: r,
    cmd: e,
    folded: n,
    effectiveCmd: i
  },
  inputString: o,
  uuid: a,
  origin: t,
  surface: s
}) {
  let {
    sanitizedName: u,
    skillNameHash: c
  } = RZ({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: uW().has(e.name),
    isBundled: e.type === "prompt" && e.source === "bundled",
    isOfficial: e.type === "prompt" && yoe(e)
  });
  l("tengu_slash_command_unavailable", {
    command_name: u,
    ...c,
    surface: s === "bridge" ? b("bridge") : b("relay"),
    reason: s === "bridge" ? b("unavailable_over_remote_control") : b("withheld_from_relay_participant")
  }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let d = n ? `/${Ts(e)} ${n.consumedToken}` : `/${Ts(i)}`,
    g = s === "bridge" ? `${d} isn't available over Remote Control.` : `${d} isn't available to a relay participant.`,
    f = YDe(e, r.args) || YDe(i, n ? n.args : r.args) ? `/${r.commandName} ***` : o,
    C = Ie({
      content: f,
      uuid: a,
      origin: t
    });
  return C.queueSkipSlashCommands = !0, {
    messages: [C, c_(`<local-command-stdout>${g}</local-command-stdout>`)],
    shouldQuery: !1,
    resultText: g
  }
}

function S(r, e, n) {
  let i = Vb(r);
  if (i === null) return;
  let o = ni(i.commandName, e),
    a = i.args;
  if (n && (o === void 0 || !Cd(o))) {
    let c = a.trimStart(),
      d = c.search(/\s/),
      g = d === -1 ? c : c.slice(0, d),
      f = g ? ni(`${i.commandName}:${g}`, e) : void 0;
    if (f) o = f, a = d === -1 ? "" : c.slice(d + 1).trimStart()
  }
  if (!o) return;
  let t = mBe(o, a),
    s = t ? ni(t.targetName, e) : void 0,
    u = t && s && Cd(s) ? {
      command: s,
      consumedToken: t.consumedToken,
      args: t.remainingArgs
    } : void 0;
  return {
    parsed: a === i.args ? i : {
      ...i,
      args: a
    },
    cmd: o,
    folded: u,
    effectiveCmd: u ? u.command : o
  }
}

function GFo(r, e) {
  let n = S(r, e, !1);
  if (n === void 0) return !0;
  let {
    effectiveCmd: i
  } = n;
  return i.type === "prompt" && kOt(i)
}
export {
  iha,
  aha,
  lha,
  GFo
};
