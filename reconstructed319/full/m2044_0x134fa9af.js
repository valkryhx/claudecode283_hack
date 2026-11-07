// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Gcr
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Tor,
  $8o,
  _3e
} from "B:/~BUN/root/chunk-b1y7ctsd.js";
import {
  kFo,
  wvt
} from "B:/~BUN/root/chunk-fnxe3tqn.js";
import {
  o,
  C,
  u,
  Be
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  uG
} from "B:/~BUN/root/chunk-4hj5k2m3.js";
var f = 256,
  a = null;

function Zme(e, n, t = !1) {
  let r = Gcr(e);
  return r ? x.of(n)(e, r.serverName, r.toolName, t) : void 0
}
var y = p(() => Be([$8o(), u({
    content: Be([o(), C(u({
      type: o()
    }).passthrough())])
  }).transform((e) => e.content)])),
  Gma = {
    isResultTruncated(e, n) {
      let t = g(e);
      return wvt(t, n) || wvt(l(t), n)
    },
    renderToolResultMessage(e, n, {
      verbose: t
    }) {
      return kFo(l(e), t)
    }
  },
  x = new W(() => uG(d, (e, n, t, r) => r ? `${e}\x00save` : e, f));

function d(e, n, t, r = !1) {
  let s = () => {
    throw Error("Display-only MCP tool invoked \u2014 it exists only for transcript rendering")
  };
  return {
    ..._3e,
    name: e,
    mcpInfo: {
      serverName: n,
      toolName: t
    },
    isEnabled: () => !1,
    outputSchema: y(),
    uiTableKey: Tor,
    userFacingName: () => `${n} - ${t} (MCP)`,
    ...r && a?.isMemorySaveCall({
      serverName: n,
      toolName: t
    }) && {
      userFacingName: () => a.memorySaveRowName(t),
      renderToolUseMessage: (i) => a.memorySaveArgument(i)
    },
    description: async () => s(),
    prompt: async () => s(),
    call: async () => s(),
    checkPermissions: async () => s()
  }
}

function g(e) {
  let n = typeof e === "object" && e !== null && !Array.isArray(e) && "content" in e ? e.content : e;
  if (typeof n === "string") return n;
  return Array.isArray(n) && n.every((t) => typeof t === "object" && t !== null) ? n : void 0
}
var T = /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g,
  O = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g,
  b = /\\u001b/gi,
  S = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;

function c(e) {
  let n = "",
    t = () => n ? ` <${n}>` : "";
  return (e.replace(T, (s, i) => {
    if (i === void 0) return "";
    let m = t();
    return n = i, m
  }) + t()).replace(O, "").replace(b, "\\u241b").replace(S, "\\u2426")
}

function l(e) {
  if (typeof e === "string") return c(e);
  return e?.map((n) => n.type === "text" && ("text" in n) ? {
    type: "text",
    text: c(String(n.text ?? ""))
  } : n)
}
export {
  Zme,
  Gma
};
