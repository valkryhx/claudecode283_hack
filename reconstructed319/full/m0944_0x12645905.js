// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Sr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Ui,
  j4
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  wo,
  Ece,
  E_r,
  jIn,
  sD
} from "B:/~BUN/root/chunk-1tbewxs3.js";
import {
  uie
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  sfe
} from "B:/~BUN/root/chunk-teehnwdh.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";

function RIe(e) {
  return e.type
}

function J8r(e) {
  return e.type === "failed" && !sD(e) || e.type === "needs-auth"
}

function bsr(e, n) {
  return J8r(e) && !n(e.name)
}

function EYt(e) {
  let n = RIe(e);
  switch (n) {
    case "disabled":
    case "pending":
    case "needs-approval":
      return n;
    case "connected":
    case "failed":
    case "needs-auth":
    case "cached":
      return null;
    default:
      return n
  }
}

function v3e(e) {
  return `"${wo(e)}" is disabled \u2014 enable it in /mcp first`
}

function TYt(e, n) {
  return `MCP server ${wo(e)} is disabled \u2014 enable it (mcp_toggle) before ${n}`
}

function eAt(e, n) {
  return `MCP server ${wo(e)} is not approved for this project \u2014 approve it in /mcp before ${n}`
}

function mge(e) {
  return `"${wo(e)}" was disabled in another session \u2014 disable and re-enable it in /mcp, or restart, to reconnect`
}

function svn(e) {
  let n = wo(e),
    t = `"${e}" was re-enabled in another session, so this disable didn't persist \u2014 /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
  return j4(e) && [...t].length <= 1024 ? t : `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`
}

function E3e(e, n, t) {
  if (!n) {
    let o = U(e, (s) => s.type === "disabled" && !t(s.name));
    if (o === 0) return null;
    let l = U(e, (s) => s.type === "disabled" && t(s.name));
    return `${o} MCP server(s) were re-enabled in another session, so this disable didn't persist for them \u2014 enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` + (l > 0 ? ` The other ${l} ${l===1?"remains":"remain"} disabled.` : "")
  }
  let r = e.filter((o) => o.type !== "disabled" && RIe(o) !== "needs-approval" && t(o.name));
  if (r.length === 0) return null;
  let i = U(r, Ui),
    c = U(r, (o) => !Ui(o) && sD(o)),
    d = r.length - i - c,
    a = [];
  if (d > 0) a.push(`${d} MCP server(s) were disabled in another session \u2014 disable and re-enable them in /mcp, or restart, to reconnect.`);
  if (c > 0) a.push(`${c} MCP server(s) were disabled in another session but aren't configured yet \u2014 there's nothing to reconnect until they are.`);
  if (i > 0) a.push(`${i} MCP server(s) are still available in this session but were disabled in another \u2014 they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`);
  return a.join(" ")
}

function Q8r(e) {
  return `"${wo(e)}" is blocked by your organization's managed policy \u2014 it can't be authenticated or reconnected here`
}

function T3e(e) {
  return `Claude Code refuses MCP server "${wo(e)}" because it reserves that address for its own use. No administrator set this. Retrying won't help, only removing it or changing its address.`
}

function Z8r(e) {
  return `"${wo(e)}" is a project-scope MCP server (.mcp.json) that is not approved for this project \u2014 approve it via /mcp first, then authenticate or reconnect it`
}

function C3e(e, n, t, r) {
  return n === "project-approval" ? Z8r(e) : uie(e, t) ? T3e(e) : r ?? Q8r(e)
}

function AIe(e, n, t, r) {
  if (n !== "project-approval" && uie(e, t)) return new Sr(T3e(e), "MCP server refused at a reserved address");
  return n === "project-approval" ? new Sr(Z8r(e), "MCP server not approved for this project") : new sfe(r ?? Q8r(e), "MCP server blocked by enterprise managed policy", "mcp_policy_blocked")
}

function RS(e, n, t) {
  return e === "project-approval" ? {
    error: E_r,
    errorCode: "APPROVAL_REQUIRED"
  } : {
    error: uie(n, t) ? jIn : Ece,
    errorCode: "POLICY_BLOCKED"
  }
}

function Ssr(e) {
  return e.type === "failed" && e.errorCode === "POLICY_BLOCKED"
}

function ivn(e) {
  return `"${wo(e)}" is still available in this session, but another session disabled it \u2014 it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`
}

function i9o(e, n) {
  if (n === "ide") throw new Sr("The IDE connection is managed automatically and can't be reconnected manually");
  let t = e.find((i) => i.name === n),
    r = t && EYt(t);
  if (r) throw new Sr(r === "disabled" ? v3e(n) : r === "pending" ? `"${wo(n)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing` : `"${wo(n)}" is pending approval \u2014 approve it in the terminal first`)
}
export {
  RIe,
  J8r,
  bsr,
  EYt,
  v3e,
  TYt,
  eAt,
  mge,
  svn,
  E3e,
  Q8r,
  T3e,
  Z8r,
  C3e,
  AIe,
  RS,
  Ssr,
  ivn,
  i9o
};
