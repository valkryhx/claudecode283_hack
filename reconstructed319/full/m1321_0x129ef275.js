// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q,
  Yr,
  DE
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  MI
} from "B:/~BUN/root/chunk-0ypwt1ew.js";
import {
  $yo
} from "B:/~BUN/root/chunk-42915bn6.js";
import {
  cl
} from "B:/~BUN/root/chunk-78494p3w.js";
var xQn = 5,
  Hoi = "Structured output was retracted by a model fallback and no retry produced a valid result",
  d = 600;

function $oi(t, r, e) {
  if (r > 0) return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
  let n = `Failed to provide valid structured output after ${t} attempts`;
  return e === void 0 ? n : `${n} \u2014 last StructuredOutput error: ${e}`
}

function RVo(t) {
  let r = typeof t === "string" ? t : Array.isArray(t) ? t.flatMap((i) => i.type === "text" ? [i.text] : []).join(`
`) : void 0;
  if (r === void 0) return;
  let n = r.replace(/^<tool_use_error>/, "").replace(/<\/tool_use_error>$/, "").replace($yo, `
`).split(`
`).map(DE).join(`
`),
    o = MI(n, {
      prependMarker: !1
    }).sanitized,
    u = Yr(o);
  if (u.length === 0) return;
  let s = u.length > d ? Q(u, d) + "\u2026" : u;
  return MI(s, {
    prependMarker: !1
  }).sanitized
}

function Uoi(t, r) {
  try {
    let e = r === void 0 ? 0 : t.lastIndexOf(r) + 1;
    return c(e === 0 ? t : t.slice(e))
  } catch (e) {
    a(e);
    return
  }
}

function c(t) {
  let r = new Set;
  for (let e of t) {
    if (e?.type !== "assistant") continue;
    let n = e.message.content;
    if (!Array.isArray(n)) continue;
    for (let o of n)
      if (o.type === "tool_use" && o.name === cl) r.add(o.id)
  }
  if (r.size === 0) return;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "user") continue;
    let o = n.message.content;
    if (!Array.isArray(o)) continue;
    for (let u = o.length - 1; u >= 0; u--) {
      let s = o[u];
      if (s?.type === "tool_result" && s.is_error === !0 && r.has(s.tool_use_id)) return RVo(s.content)
    }
  }
  return
}
export {
  xQn,
  Hoi,
  $oi,
  RVo,
  Uoi
};
