// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $H } from "B:/~BUN/root/chunk-game8aqv.js";
import { mKi, da } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { uX } from "B:/~BUN/root/chunk-kd0f2gn5.js";
function $Qn(t, r) {
  da("user_prompt", {
    prompt_length: String(r?.length ?? 0),
    ...mKi(r),
    ...t.attributes
  });
}
function Vb(t) {
  let r = t.trim();
  if (!r.startsWith("/")) return null;
  let {
    name: e,
    args: args
  } = uX(r);
  if (!e) return null;
  let o = "(MCP)";
  if (args === o) return {
    commandName: `${e} ${o}`,
    args: "",
    isMcp: !0
  };
  if (args.startsWith(o) && /\s/.test(args.charAt(o.length))) return {
    commandName: `${e} ${o}`,
    args: args.slice(o.length).trimStart(),
    isMcp: !0
  };
  return {
    commandName: e,
    args: args,
    isMcp: !1
  };
}
function mBe(t, r) {
  if (!t.subcommands) return;
  let e = r.trimStart(),
    n = e.search(/\s/),
    consumedToken = n === -1 ? e : e.slice(0, n),
    targetName = consumedToken ? t.subcommands[consumedToken.toLowerCase()] : void 0;
  if (targetName === void 0) return;
  let remainingArgs = n === -1 ? "" : e.slice(n + 1).trim();
  if (t.subcommandsBareOnly && remainingArgs !== "") return;
  return {
    targetName: targetName,
    consumedToken: consumedToken,
    remainingArgs: remainingArgs
  };
}
function fbn(t, r) {
  let e = $H();
  if (r === void 0) {
    $Qn(t, t.text);
    return;
  }
  r({
    text: t.text,
    attributes: {
      ...(e && {
        "prompt.id": e
      }),
      ...t.attributes
    }
  });
}
var $Kt = t => typeof t === "string" ? t : t.map(item => ({
  ...item
}));
export { Vb, mBe, $Qn, fbn, $Kt };