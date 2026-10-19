// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Rs, tve } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { klt, d$e, f6e, nH, Re, Fy } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { So, Xd } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { $6, $9 } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { Pb, qRe } from "B:/~BUN/root/chunk-nfa24hxs.js";
function Wei(o) {
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
    c = d$e(effectiveCmd, {
      origin: origin,
      relayAuthored: verifiedSlackHumanTurn === !0
    });
  if (klt(effectiveCmd) && c) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: e,
    effectiveContext: n
  };
  let u = f6e(effectiveCmd);
  if (u && Xd(effectiveCmd)) return {
    kind: "updated",
    effectiveSkipSlash: !1,
    effectiveInput: folded ? `/${u.name}${folded.args ? ` ${folded.args}` : ""}` : e.replace(/^\/\S+/, `/${u.name}`),
    effectiveContext: {
      ...n,
      options: {
        ...n.options,
        commands: [{
          ...u,
          isEnabled: () => Xd(effectiveCmd)
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
function zei(o) {
  let {
      inputString: inputString,
      context: context,
      uuid: uuid_2,
      origin: origin_2
    } = o,
    target_2 = f(inputString, context.options.commands);
  if (target_2 === void 0 || d$e(target_2.effectiveCmd, {
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
  } = $6({
    rawName: cmd.name,
    canonicalName: cmd.name,
    isMcp: cmd.loadedFrom === "mcp",
    isBuiltIn: nH().has(cmd.name),
    isBundled: cmd.type === "prompt" && cmd.source === "bundled",
    isOfficial: cmd.type === "prompt" && $9(cmd)
  });
  i("tengu_slash_command_unavailable", {
    command_name: d,
    ...skillNameHash,
    surface: surface === "bridge" ? b("bridge") : b("relay"),
    reason: b("unavailable_over_remote_control")
  }), m("cmd_dispatch", "cmd_unavailable_bridge");
  let resultText = folded_2 ? `/${So(cmd)} ${folded_2.consumedToken} isn't available over Remote Control.` : `/${So(effectiveCmd_2)} isn't available over Remote Control.`,
    content = tve(cmd, parsed.args) || tve(effectiveCmd_2, folded_2 ? folded_2.args : parsed.args) ? `/${parsed.commandName} ***` : inputString_2;
  return {
    messages: [Re({
      content: content,
      uuid: uuid_3,
      origin: origin_3
    }), Fy(`<local-command-stdout>${resultText}</local-command-stdout>`)],
    shouldQuery: !1,
    resultText: resultText
  };
}
function f(o, e) {
  let parsed_2 = Pb(o);
  if (parsed_2 === null) return;
  let cmd_2 = Rs(parsed_2.commandName, e);
  if (!cmd_2) return;
  let r = qRe(cmd_2, parsed_2.args),
    command = r ? Rs(r.targetName, e) : void 0,
    folded_3 = r && command && Xd(command) ? {
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
function gqr(o, e) {
  let n = f(o, e);
  if (n === void 0) return !0;
  let {
    effectiveCmd: effectiveCmd_3
  } = n;
  return effectiveCmd_3.type === "prompt" && klt(effectiveCmd_3);
}
export { Wei, zei, gqr };