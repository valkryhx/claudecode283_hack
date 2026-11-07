// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  $H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  mKi,
  da
} from "B:/~BUN/root/chunk-64qg3pvz.js";
import {
  uX
} from "B:/~BUN/root/chunk-kd0f2gn5.js";

function $Qn(t, r) {
  da("user_prompt", {
    prompt_length: String(r?.length ?? 0),
    ...mKi(r),
    ...t.attributes
  })
}

function Vb(t) {
  let r = t.trim();
  if (!r.startsWith("/")) return null;
  let {
    name: e,
    args: n
  } = uX(r);
  if (!e) return null;
  let o = "(MCP)";
  if (n === o) return {
    commandName: `${e} ${o}`,
    args: "",
    isMcp: !0
  };
  if (n.startsWith(o) && /\s/.test(n.charAt(o.length))) return {
    commandName: `${e} ${o}`,
    args: n.slice(o.length).trimStart(),
    isMcp: !0
  };
  return {
    commandName: e,
    args: n,
    isMcp: !1
  }
}

function mBe(t, r) {
  if (!t.subcommands) return;
  let e = r.trimStart(),
    n = e.search(/\s/),
    o = n === -1 ? e : e.slice(0, n),
    s = o ? t.subcommands[o.toLowerCase()] : void 0;
  if (s === void 0) return;
  let m = n === -1 ? "" : e.slice(n + 1).trim();
  if (t.subcommandsBareOnly && m !== "") return;
  return {
    targetName: s,
    consumedToken: o,
    remainingArgs: m
  }
}

function fbn(t, r) {
  let e = $H();
  if (r === void 0) {
    $Qn(t, t.text);
    return
  }
  r({
    text: t.text,
    attributes: {
      ...e && {
        "prompt.id": e
      },
      ...t.attributes
    }
  })
}
var $Kt = (t) => typeof t === "string" ? t : t.map((r) => ({
  ...r
}));
export {
  Vb,
  mBe,
  $Qn,
  fbn,
  $Kt
};
