// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { gsn, Jbe, gFe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { kOt, L8e, yct, bno, uW, Ie, c_ } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ts, Cd, ni, YDe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { RZ, yoe } from "B:/~BUN/root/chunk-ex2shtaj.js";
import { Vb, mBe } from "B:/~BUN/root/chunk-425aft7z.js";
import { Nze, WSr, H0e, QDt } from "B:/~BUN/root/chunk-hskja58z.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
function iha(r) {
  let {
      inputString: e,
      context: n,
      uuid: uuid,
      origin: origin,
      verifiedSlackHumanTurn: verifiedSlackHumanTurn
    } = r,
    target = S(e, n.options.commands, !1);
  if (target === void 0) return {
    kind: "none"
  };
  let {
      folded: folded,
      effectiveCmd: effectiveCmd
    } = target,
    c = L8e(effectiveCmd, {
      origin: origin,
      relayAuthored: verifiedSlackHumanTurn === !0
    });
  if (kOt(effectiveCmd) && c) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: e,
    effectiveContext: n
  };
  let d = yct(effectiveCmd);
  if (d && Cd(effectiveCmd)) {
    let bridgeRewrite = {
      ...d,
      isEnabled: () => Cd(effectiveCmd)
    };
    return {
      kind: "updated",
      effectiveSkipSlash: !1,
      effectiveInput: folded ? `/${d.name}${folded.args ? ` ${folded.args}` : ""}` : e.replace(/^\/\S+/, `/${d.name}`),
      effectiveContext: {
        ...n,
        options: {
          ...n.options,
          commands: [bridgeRewrite, ...n.options.commands]
        }
      },
      bridgeRewrite: bridgeRewrite
    };
  }
  return {
    kind: "blocked",
    result: p({
      target: target,
      inputString: e,
      uuid: uuid,
      origin: origin,
      surface: "bridge"
    })
  };
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
  return n && !e.bridgeCarried || bno(r);
}
function aha(r) {
  let {
      inputString: inputString,
      context: context,
      uuid: uuid_2,
      origin: origin_2,
      inboundOrigin: inboundOrigin
    } = r,
    target_2 = S(inputString, context.options.commands, !0);
  if (target_2 === void 0 || _(target_2.effectiveCmd, {
    origin: origin_2,
    relayAuthored: !0,
    inboundOrigin: inboundOrigin,
    bridgeCarried: !1,
    bridgeRewrite: void 0
  })) return {
    kind: "none"
  };
  return {
    kind: "blocked",
    result: p({
      target: target_2,
      inputString: inputString,
      uuid: uuid_2,
      origin: origin_2,
      surface: "relay"
    })
  };
}
function lha(r) {
  let {
    cmd: e,
    commandName: commandName,
    args: args,
    inputString: inputString_2,
    uuid: uuid_3,
    author: author
  } = r;
  if (_(e, author)) return;
  let s = Vb(inputString_2);
  return p({
    target: {
      parsed: {
        commandName: s?.commandName ?? commandName,
        args: args,
        isMcp: !1
      },
      cmd: e,
      folded: void 0,
      effectiveCmd: e
    },
    inputString: inputString_2,
    uuid: uuid_3,
    origin: author.origin,
    surface: author.bridgeCarried ? "bridge" : "relay"
  });
}
function p({
  target: {
    parsed: parsed,
    cmd: cmd,
    folded: folded_2,
    effectiveCmd: effectiveCmd_2
  },
  inputString: inputString_3,
  uuid: uuid_4,
  origin: origin_3,
  surface: surface
}) {
  let {
    sanitizedName: u,
    skillNameHash: skillNameHash
  } = RZ({
    rawName: cmd.name,
    canonicalName: cmd.name,
    isMcp: cmd.loadedFrom === "mcp",
    isBuiltIn: uW().has(cmd.name),
    isBundled: cmd.type === "prompt" && cmd.source === "bundled",
    isOfficial: cmd.type === "prompt" && yoe(cmd)
  });
  l("tengu_slash_command_unavailable", {
    command_name: u,
    ...skillNameHash,
    surface: surface === "bridge" ? b("bridge") : b("relay"),
    reason: surface === "bridge" ? b("unavailable_over_remote_control") : b("withheld_from_relay_participant")
  }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let d = folded_2 ? `/${Ts(cmd)} ${folded_2.consumedToken}` : `/${Ts(effectiveCmd_2)}`,
    resultText = surface === "bridge" ? `${d} isn't available over Remote Control.` : `${d} isn't available to a relay participant.`,
    content = YDe(cmd, parsed.args) || YDe(effectiveCmd_2, folded_2 ? folded_2.args : parsed.args) ? `/${parsed.commandName} ***` : inputString_3,
    C = Ie({
      content: content,
      uuid: uuid_4,
      origin: origin_3
    });
  return C.queueSkipSlashCommands = !0, {
    messages: [C, c_(`<local-command-stdout>${resultText}</local-command-stdout>`)],
    shouldQuery: !1,
    resultText: resultText
  };
}
function S(r, e, n) {
  let i = Vb(r);
  if (i === null) return;
  let cmd_2 = ni(i.commandName, e),
    args_2 = i.args;
  if (n && (cmd_2 === void 0 || !Cd(cmd_2))) {
    let c = args_2.trimStart(),
      d = c.search(/\s/),
      g = d === -1 ? c : c.slice(0, d),
      f = g ? ni(`${i.commandName}:${g}`, e) : void 0;
    if (f) cmd_2 = f, args_2 = d === -1 ? "" : c.slice(d + 1).trimStart();
  }
  if (!cmd_2) return;
  let t = mBe(cmd_2, args_2),
    command = t ? ni(t.targetName, e) : void 0,
    folded_3 = t && command && Cd(command) ? {
      command: command,
      consumedToken: t.consumedToken,
      args: t.remainingArgs
    } : void 0;
  return {
    parsed: args_2 === i.args ? i : {
      ...i,
      args: args_2
    },
    cmd: cmd_2,
    folded: folded_3,
    effectiveCmd: folded_3 ? folded_3.command : cmd_2
  };
}
function GFo(r, e) {
  let n = S(r, e, !1);
  if (n === void 0) return !0;
  let {
    effectiveCmd: effectiveCmd_3
  } = n;
  return effectiveCmd_3.type === "prompt" && kOt(effectiveCmd_3);
}
export { iha, aha, lha, GFo };