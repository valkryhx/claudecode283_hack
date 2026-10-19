// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Nde
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  RHs,
  wi
} from "B:/~BUN/root/chunk-yjayxywk.js";
import {
  MPe
} from "B:/~BUN/root/chunk-dn8rakwm.js";

function QAn(t, r) {
  wi("user_prompt", {
    prompt_length: String(r?.length ?? 0),
    ...RHs(r),
    ...t.attributes
  })
}

function Pb(t) {
  let r = t.trim();
  if (!r.startsWith("/")) return null;
  let {
    name: e,
    args: n
  } = MPe(r);
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

function qRe(t, r) {
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

function GYt(t, r) {
  let e = Nde();
  if (r === void 0) {
    QAn(t, t.text);
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
var zTt = (t) => typeof t === "string" ? t : t.map((r) => ({
  ...r
}));
export {
  Pb,
  qRe,
  QAn,
  GYt,
  zTt
};
