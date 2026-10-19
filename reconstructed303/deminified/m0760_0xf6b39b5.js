// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nr } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ps, xW } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { fo, tee, HTs as error, _en, px } from "B:/~BUN/root/chunk-00v9f07q.js";
import { mJ } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
function Y_e(e) {
  return e.type;
}
function alr(e) {
  return e.type === "failed" && !px(e) || e.type === "needs-auth";
}
function FRn(e, n) {
  return alr(e) && !n(e.name);
}
function TTt(e) {
  let n = Y_e(e);
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
      return n;
  }
}
function RNe(e) {
  return `"${fo(e)}" is disabled \u2014 enable it in /mcp first`;
}
function CTt(e, n) {
  return `MCP server ${fo(e)} is disabled \u2014 enable it (mcp_toggle) before ${n}`;
}
function Rot(e, n) {
  return `MCP server ${fo(e)} is not approved for this project \u2014 approve it in /mcp before ${n}`;
}
function voe(e) {
  return `"${fo(e)}" was disabled in another session \u2014 disable and re-enable it in /mcp, or restart, to reconnect`;
}
function Z4t(e) {
  let n = fo(e),
    t = `"${e}" was re-enabled in another session, so this disable didn't persist \u2014 /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
  return xW(e) && [...t].length <= 1024 ? t : `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`;
}
function ANe(e, n, t) {
  if (!n) {
    let o = F(e, s => s.type === "disabled" && !t(s.name));
    if (o === 0) return null;
    let l = F(e, s => s.type === "disabled" && t(s.name));
    return `${o} MCP server(s) were re-enabled in another session, so this disable didn't persist for them \u2014 enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` + (l > 0 ? ` The other ${l} ${l === 1 ? "remains" : "remain"} disabled.` : "");
  }
  let r = e.filter(item => item.type !== "disabled" && Y_e(item) !== "needs-approval" && t(item.name));
  if (r.length === 0) return null;
  let i = F(r, Ps),
    c = F(r, o => !Ps(o) && px(o)),
    d = r.length - i - c,
    a = [];
  if (d > 0) a.push(`${d} MCP server(s) were disabled in another session \u2014 disable and re-enable them in /mcp, or restart, to reconnect.`);
  if (c > 0) a.push(`${c} MCP server(s) were disabled in another session but aren't configured yet \u2014 there's nothing to reconnect until they are.`);
  if (i > 0) a.push(`${i} MCP server(s) are still available in this session but were disabled in another \u2014 they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`);
  return a.join(" ");
}
function llr(e) {
  return `"${fo(e)}" is blocked by your organization's managed policy \u2014 it can't be authenticated or reconnected here`;
}
function xNe(e) {
  return `Claude Code refuses MCP server "${fo(e)}" because it reserves that address for its own use. No administrator set this. Retrying won't help, only removing it or changing its address.`;
}
function dlr(e) {
  return `"${fo(e)}" is a project-scope MCP server (.mcp.json) that is not approved for this project \u2014 approve it via /mcp first, then authenticate or reconnect it`;
}
function vz(e, n, t, r) {
  return n === "project-approval" ? dlr(e) : mJ(e, t) ? xNe(e) : r ?? llr(e);
}
function kJr(e, n, t, r) {
  if (n !== "project-approval" && mJ(e, t)) return new Nr(xNe(e), "MCP server refused at a reserved address");
  return n === "project-approval" ? new Nr(dlr(e), "MCP server not approved for this project") : new Nr(r ?? llr(e), "MCP server blocked by enterprise managed policy");
}
function J_(e, n, t) {
  return e === "project-approval" ? {
    error: error,
    errorCode: "APPROVAL_REQUIRED"
  } : {
    error: mJ(n, t) ? _en : tee,
    errorCode: "POLICY_BLOCKED"
  };
}
function HRn(e) {
  return e.type === "failed" && e.errorCode === "POLICY_BLOCKED";
}
function eYt(e) {
  return `"${fo(e)}" is still available in this session, but another session disabled it \u2014 it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`;
}
function EJr(e, n) {
  if (n === "ide") throw new Nr("The IDE connection is managed automatically and can't be reconnected manually");
  let t = e.find(item => item.name === n),
    r = t && TTt(t);
  if (r) throw new Nr(r === "disabled" ? RNe(n) : r === "pending" ? `"${fo(n)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing` : `"${fo(n)}" is pending approval \u2014 approve it in the terminal first`);
}
export { Y_e, alr, FRn, TTt, RNe, CTt, Rot, voe, Z4t, ANe, llr, xNe, dlr, vz, kJr, J_, HRn, eYt, EJr };