// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Q6n } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { tEe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
function v3t(r, s, t = "replace") {
  r(n => {
    let command = n.alwaysDenyRules.command,
      o = t === "union" ? L([...(command ?? []), ...s.filter(item => !Q6n.test(item))]) : [...s];
    if ((command?.length ?? 0) === o.length && (command ?? []).every((item, index) => item === o[index])) return n;
    return {
      ...n,
      alwaysDenyRules: {
        ...n.alwaysDenyRules,
        command: o.length > 0 ? o : void 0
      }
    };
  });
}
function mE(r) {
  let s = r.trim();
  if (!s.startsWith("/")) return null;
  let {
    name: t,
    args: args
  } = tEe(s);
  if (!t) return null;
  let e = "(MCP)";
  if (args === e) return {
    commandName: `${t} ${e}`,
    args: "",
    isMcp: !0
  };
  if (args.startsWith(e) && /\s/.test(args.charAt(e.length))) return {
    commandName: `${t} ${e}`,
    args: args.slice(e.length).trimStart(),
    isMcp: !0
  };
  return {
    commandName: t,
    args: args,
    isMcp: !1
  };
}
function fpe(r, s) {
  if (!r.subcommands) return;
  let t = s.trimStart(),
    n = t.search(/\s/),
    consumedToken = n === -1 ? t : t.slice(0, n),
    targetName = consumedToken ? r.subcommands[consumedToken.toLowerCase()] : void 0;
  if (targetName === void 0) return;
  let remainingArgs = n === -1 ? "" : t.slice(n + 1).trim();
  if (r.subcommandsBareOnly && remainingArgs !== "") return;
  return {
    targetName: targetName,
    consumedToken: consumedToken,
    remainingArgs: remainingArgs
  };
}
export { v3t, mE, fpe };