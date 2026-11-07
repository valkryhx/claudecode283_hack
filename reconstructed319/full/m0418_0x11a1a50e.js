// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  er,
  e_
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  wp,
  $jn,
  u0s,
  Ujn,
  R_t,
  Wet
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  gr,
  to
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  i,
  Ar
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  VJ
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  I_,
  zna
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  Y6i,
  R1n,
  Yvo,
  Gy,
  Oh,
  pn,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  gSe
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Lue
} from "B:/~BUN/root/chunk-2r9r3hfm.js";
import {
  _0t
} from "B:/~BUN/root/chunk-zymc6pem.js";
import {
  NUt
} from "B:/~BUN/root/chunk-e0q1m1z9.js";
import {
  bn
} from "B:/~BUN/root/chunk-2631cdbp.js";
var c;

function $Fi(e) {
  if (c === void 0) c = new Set(e)
}

function h() {
  if (c === void 0) c = new Set;
  return c
}
var yys = Object.freeze({
    twoStageClassifier: !0,
    sameTurnSiblingContext: !0,
    editRemovalVisibility: !0,
    editRemovalCap: 3000,
    outcomeVisibility: !1,
    repoVisibility: !0,
    gitStatusType: !0,
    gitStatusUploads: !1,
    tagConnectorWrites: !1,
    envOnboarding: !0,
    severityByModel: Object.freeze({
      "claude-sonnet-5[1m]": Object.freeze({
        t1: 25,
        t2: 35
      }),
      "claude-opus-4-8[1m]": Object.freeze({
        t1: 45,
        t2: 35
      }),
      "claude-sonnet-5": Object.freeze({
        t1: 25,
        t2: 35
      }),
      "claude-opus-4-8": Object.freeze({
        t1: 45,
        t2: 35
      })
    })
  }),
  f = Object.freeze({});

function Yu() {
  let e = v("tengu_auto_mode_config", f) ?? f;
  if (e !== f) return e;
  return Oh() ? f : yys
}
var R = Object.freeze([]),
  E, p = R;

function UFi(e) {
  if (!zna() || !T()) return R;
  if (e === E) return p;
  let t = new Set,
    o = new Set;
  for (let r of e)
    if (r.mcpInfo !== void 0 && O(r.mcpInfo) && !_0t(r)) t.add(r), o.add(to(r.mcpInfo.serverName));
  for (let r of e)
    if (!t.has(r)) {
      let n = `${r.name}_`;
      for (let a of o)
        if (u(n, a)) o.delete(a)
    } return E = e, p = [...o].sort(), p
}

function O(e) {
  switch (e.scope) {
    case "user":
      return h().has(e.serverName);
    case "claudeai":
      return e.serverType === "claudeai-proxy" && e.pluginTelemetry === void 0;
    case "managed":
    case "enterprise":
    case "dynamic":
    case "project":
    case "local":
    case "agent":
    case void 0:
      return !1
  }
}

function s(e) {
  return e.toLowerCase().replaceAll(/[-_]+/g, "_").replaceAll("0", "o").replaceAll(/[1i]/g, "l")
}

function u(e, t) {
  let o = s(e),
    r = s(t);
  if (o.startsWith(r)) return !0;
  for (let n = r.length - 2; n <= r.length + 2; n++)
    if (n > 0 && n <= o.length && VJ(o.slice(0, n), r, 2) <= 2) return !0;
  return !1
}

function T() {
  return Yu().tagConnectorWrites === !0
}

function BFi(e) {
  if (e.length === 0) return "";
  return `

## Claude Tag connector writes

This is a Claude Tag session: its users work with it from Slack, and their requests often reach this agent through delegation, so the request behind an action may not be visible in this transcript. The connectors configured for this session are the MCP tools named ${e.map((o)=>`\`${o}*\``).join(", ")}. Those prefixes match byte for byte: a tool whose name differs in case or punctuation (for example \`-\` for \`_\`) belongs to another server and is not covered. A call to one of those tools that creates, writes, or edits content (for example, adding rows to a sheet or inserting text into a doc) is not blocked for lack of a visible user request: for these calls, a missing or delegated request is not by itself a reason to block under the User Intent Rule, scope escalation, External System Writes, or Unrequested Commit in a Connected App. Every other rule still applies in full, including: HARD BLOCK rules; exposing credentials or secrets; moving sensitive or confidential content to a destination or audience it does not belong in; deleting, clearing, or mass-modifying content; other destructive or irreversible changes; changing who can access a file or resource (sharing and permission changes); and sending messages, emails, or notifications to people. This exception covers only the tools named above. A write through any other route (a shell command, curl, a web request, or any other MCP server) is judged by the normal rules.`
}
var m = to(wp),
  w = 2000;

function y(e) {
  return Lue.some((t) => {
    let o = e.startsWith(t) ? e.slice(t.length) : "";
    return !o.includes("__") && NUt.some((r) => r === o)
  })
}
var b = new Set($jn.map(s)),
  C = s(m),
  S = s("browser_");

function M(e) {
  return [...e.matchAll(/[\w-]+/g)].every(([t]) => {
    let o = s(t);
    if (!o.includes(S)) return !0;
    let r = o.startsWith(C) ? o.slice(C.length) : o;
    return r === "" || b.has(r)
  })
}

function _() {
  if (!Ujn()) return !1;
  let {
    value: e,
    source: t
  } = pn(u0s, !1);
  return e === !0 && t === "payload" && !Gy()
}

function A() {
  let {
    value: e,
    source: t
  } = pn(Y6i, "");
  if (t !== "payload" || Gy()) return;
  let o = typeof e === "string" ? e.trimEnd() : e;
  return typeof o === "string" && o.startsWith("- **") && o.length <= w && /^[\x20-\x7e]*$/.test(o) && !/[<\\]/.test(o) && !o.includes("cc_automode") && M(o) ? `
${o}` : void 0
}

function jFi(e, t) {
  if (!I_()) return;
  let o = !1;
  for (let r of e)
    if (r.name.startsWith(m)) {
      if (r.mcpInfo?.serverName !== wp || r.mcpInfo.scope !== "dynamic") return;
      o = !0
    } if (!o) return;
  for (let r of e) {
    if (r.name.startsWith(m)) continue;
    let n = r.name.split("__"),
      a = n.map((l, d) => n.slice(d).join("__"));
    if (u(`${r.name}_`, m) || !y(r.name) && n.some((l) => s(l).includes(S)) || $jn.some((l) => a.some((d) => u(`${d}_`, `${l}_`)))) return
  }
  if (!Yvo(t ?? e_()) || !(Ar.CLAUDE_CODE_AUTO_MODE_REMOTE_BROWSER ?? _())) return;
  return A()
}
var g = `
- **Chrome-MCP**:`;

function WFi(e, t) {
  for (let o = e.indexOf(g); o !== -1; o = e.indexOf(g, o + 1)) {
    let r = e.indexOf(`
`, o + 1);
    if (r !== -1 && e.startsWith(t, r)) return !0
  }
  return !1
}

function zFi(e, t) {
  let o = t === void 0 ? -1 : e.indexOf(g);
  if (o === -1) return e;
  let r = e.indexOf(`
`, o + 1),
    n = r === -1 ? e.length : r;
  return e.slice(0, n) + t + e.slice(n)
}
var B = new Map([
  ["browser_take_screenshot", new Set(["type", "fullPage", "scale", "region"])],
  ["browser_snapshot", new Set(["ref", "depth", "filter", "find", "max_chars", "offset"])],
  ["browser_wait_for", new Set(["time", "text", "textGone"])]
]);

function _ys(e, t, o, r) {
  let n = e.mcpInfo;
  if (n?.serverName !== wp || n.scope !== "dynamic") return !1;
  let a = B.get(n.toolName);
  if (a === void 0 || typeof t !== "object" || t === null || Array.isArray(t) || !Object.keys(t).every((l) => a.has(l))) return !1;
  return o.mode === "auto" && r === "auto" && o.canAutoClassifierRun === !0 && o.servedCall !== !0 && !gSe() && I_() && Yvo(e_()) && _()
}

function jZ() {
  if (er() && R_t()) return !0;
  return I_() && i.CLAUDE_CODE_REMOTE && (e_() ?? []).some(R1n) && Wet()
}

function V$(e) {
  return (e.mcpInfo?.serverName ?? gr(e.name)?.serverName) === wp && jZ()
}
var bys = "Tools of MCP server 'remote-browser' (the cloud browser) can only be called by the model in this session, where each call gets auto mode's safety check or a person's approval; this call would skip both.";

function e0n(e) {
  let t = bn(e);
  return V$({
    name: t,
    mcpInfo: {
      serverName: t
    }
  })
}
export {
  $Fi,
  yys,
  Yu,
  UFi,
  BFi,
  jFi,
  WFi,
  zFi,
  _ys,
  jZ,
  V$,
  bys,
  e0n
};
