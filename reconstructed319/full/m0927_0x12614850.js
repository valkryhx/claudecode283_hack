// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Qe
} from "B:/~BUN/root/chunk-2f1svh63.js";
import {
  mN,
  dea,
  Eu
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  HA,
  gr
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  K4,
  rG,
  bn
} from "B:/~BUN/root/chunk-2631cdbp.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var a = "tengu_harp_voatavo";

function kgn(n) {
  let e = Eu([...n]),
    t = e.find(dea);
  if (t !== void 0) return {
    kind: "unclosed",
    rule: t
  };
  return v(a, !0) === !1 ? {
    kind: "rules",
    rules: e,
    blocksNothing: []
  } : {
    kind: "rules",
    rules: L([...e, ...e.flatMap(r)]),
    blocksNothing: L(e.filter(i))
  }
}

function f2r(n) {
  let e = n.slice(0, 8).map((t) => `"${Qe(t,64)}"`).join(", ");
  return n.length > 8 ? `${e} and ${n.length-8} more` : e
}

function d7s(n) {
  if (n.length === 0) return [];
  return [{
    kind: "lost",
    name: "--disallowed-tools",
    why: `any other rules apply, but not ${f2r(n)}: a * in a claude.ai connector's name blocks no connector in a cloud session; start a new session with one rule for each connector, such as mcp__claude_ai_Slack or mcp__claude_ai_Slack__<tool>`
  }]
}

function l(n) {
  let e = mN(n);
  if (e.kind === "malformed") return null;
  let t = e.kind === "call" ? e.toolName : n,
    o = gr(t);
  return o === null ? null : {
    ...o,
    name: t
  }
}

function c(n) {
  return bn(K4 + n) === rG + n
}

function r(n) {
  let e = l(n);
  if (!e?.serverName.startsWith(rG)) return [];
  let t = e.serverName.slice(rG.length);
  return c(t) ? [`${HA}${t}__${e.toolName??"*"}${n.slice(e.name.length)}`] : []
}

function i(n) {
  let e = l(n)?.serverName ?? "";
  return e.includes("*") && (e.startsWith(rG) || e.startsWith(`${rG.slice(0,-1)}*`))
}

function kst(n = []) {
  let e = new Set(n),
    t = new Set(n.flatMap(r));
  return {
    disallowed_tools_connector_both_names_count: U(n, (o) => r(o).some((s) => e.has(s))),
    disallowed_tools_connector_local_name_only_count: U(n, (o) => !t.has(o) && r(o).some((s) => !e.has(s))),
    disallowed_tools_connector_wildcard_count: U(n, i)
  }
}
export {
  kgn,
  f2r,
  d7s,
  kst
};
