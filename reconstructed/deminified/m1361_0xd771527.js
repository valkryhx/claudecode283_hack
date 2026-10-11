// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { m } from "B:/~BUN/root/chunk-51n463p1.js";
import { Zs, gae } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { _W, MG, Ce, tg, aqe, got, EDe, BO } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Co, Qc } from "B:/~BUN/root/chunk-yzpw1mdr.js";
import { mE, fpe } from "B:/~BUN/root/chunk-3a6ntswp.js";
function Iqo(o) {
  let {
      inputString: e,
      context: n,
      uuid: uuid,
      origin: origin,
      verifiedSlackHumanTurn: verifiedSlackHumanTurn
    } = o,
    target = f(e, n.options.commands);
  if (target === void 0) return {
    kind: "none"
  };
  let {
      folded: folded,
      effectiveCmd: effectiveCmd
    } = target,
    c = got(effectiveCmd, {
      origin: origin,
      relayAuthored: verifiedSlackHumanTurn === !0
    });
  if (aqe(effectiveCmd) && c) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: e,
    effectiveContext: n
  };
  let u = EDe(effectiveCmd);
  if (u && Qc(effectiveCmd)) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: folded ? `/${u.name}${folded.args ? ` ${folded.args}` : ""}` : e.replace(/^\/\S+/, `/${u.name}`),
    effectiveContext: {
      ...n,
      options: {
        ...n.options,
        commands: [{
          ...u,
          isEnabled: () => Qc(effectiveCmd)
        }, ...n.options.commands]
      }
    }
  };
  return {
    kind: "blocked",
    result: g({
      target: target,
      inputString: e,
      uuid: uuid,
      origin: origin,
      surface: "bridge"
    })
  };
}
function Oqo(o) {
  let {
      inputString: inputString,
      context: context,
      uuid: uuid_2,
      origin: origin_2
    } = o,
    target_2 = f(inputString, context.options.commands);
  if (target_2 === void 0 || got(target_2.effectiveCmd, {
    origin: origin_2,
    relayAuthored: !0
  })) return {
    kind: "none"
  };
  return {
    kind: "blocked",
    result: g({
      target: target_2,
      inputString: inputString,
      uuid: uuid_2,
      origin: origin_2,
      surface: "relay"
    })
  };
}
function g({
  target: {
    parsed: parsed,
    cmd: cmd,
    folded: folded_2,
    effectiveCmd: effectiveCmd_2
  },
  inputString: inputString_2,
  uuid: uuid_3,
  origin: origin_3,
  surface: surface
}) {
  let {
    sanitizedName: d,
    skillNameHash: skillNameHash
  } = _W({
    rawName: cmd.name,
    canonicalName: cmd.name,
    isMcp: cmd.loadedFrom === "mcp",
    isBuiltIn: BO().has(cmd.name),
    isBundled: cmd.type === "prompt" && cmd.source === "bundled",
    isOfficial: cmd.type === "prompt" && MG(cmd)
  });
  i("tengu_slash_command_unavailable", {
    command_name: d,
    ...skillNameHash,
    surface: surface === "bridge" ? y("bridge") : y("relay"),
    reason: y("unavailable_over_remote_control")
  }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let resultText = folded_2 ? `/${Co(cmd)} ${folded_2.consumedToken} isn't available over Remote Control.` : `/${Co(effectiveCmd_2)} isn't available over Remote Control.`,
    content = gae(cmd, parsed.args) || gae(effectiveCmd_2, folded_2 ? folded_2.args : parsed.args) ? `/${parsed.commandName} ***` : inputString_2;
  return {
    messages: [Ce({
      content: content,
      uuid: uuid_3,
      origin: origin_3
    }), tg(`<local-command-stdout>${resultText}</local-command-stdout>`)],
    shouldQuery: !1,
    resultText: resultText
  };
}
function f(o, e) {
  let parsed_2 = mE(o);
  if (parsed_2 === null) return;
  let cmd_2 = Zs(parsed_2.commandName, e);
  if (!cmd_2) return;
  let r = fpe(cmd_2, parsed_2.args),
    command = r ? Zs(r.targetName, e) : void 0,
    folded_3 = r && command && Qc(command) ? {
      command: command,
      consumedToken: r.consumedToken,
      args: r.remainingArgs
    } : void 0;
  return {
    parsed: parsed_2,
    cmd: cmd_2,
    folded: folded_3,
    effectiveCmd: folded_3 ? folded_3.command : cmd_2
  };
}
function ctr(o, e) {
  let n = f(o, e);
  if (n === void 0) return !0;
  let {
    effectiveCmd: effectiveCmd_3
  } = n;
  return effectiveCmd_3.type === "prompt" && aqe(effectiveCmd_3);
}
export { Iqo, Oqo, ctr };