// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { zt, CX, $b } from "B:/~BUN/root/chunk-msy8grqx.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Ue } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { ap } from "B:/~BUN/root/chunk-dv435n4g.js";
import { O_ } from "B:/~BUN/root/chunk-5kqdkjak.js";
import { P_ } from "B:/~BUN/root/chunk-58nsgxpm.js";
import { FAo } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { gl, bEe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { M2e } from "B:/~BUN/root/chunk-tw49cqbs.js";
import { w_, ein, H0t } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { vin, Lat } from "B:/~BUN/root/chunk-pnn94d53.js";
import { $kn } from "B:/~BUN/root/chunk-gn719r3c.js";
import { NT } from "B:/~BUN/root/chunk-y39emrp9.js";
import { hi, xc } from "B:/~BUN/root/chunk-w5bkq1td.js";
var c = new Set([O_, P_]),
  f = ["subscribe_pr_activity", "unsubscribe_pr_activity"];
function T(o) {
  return f.some(item => o.endsWith(item));
}
var u = new Set([ap, "github"]);
function kJn(o, e) {
  if (e.length === 0) return o;
  let t = e.map(item => [item, hi(item)]),
    n = o.filter(item => !t.some(([s, i]) => xc(item, s, i)));
  return n.length === o.length ? o : n;
}
function O(o) {
  return o.mcpInfo?.cliOwned === !0 && o.mcpInfo.serverName === ap;
}
var m = import.meta.require("B:/~BUN/root/chunk-q413jja7.js");
function xzt() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map(item => item.trim()).filter(Boolean);
}
function EJn(o, e = xzt()) {
  if (vin(o) || u.has(o.name)) return !0;
  let t = hi(o.name);
  return e.some(item => item.startsWith(t));
}
function A1o(o) {
  let CLAUDE_CODE_BRIEF = a.CLAUDE_CODE_BRIEF,
    t = new Set(xzt()),
    n = H0t();
  return o.filter(item => ein.has(item.name) || n && zt(item, Ue) && !w_(item) || T(item.name) || O(item) || Lat(item) || CLAUDE_CODE_BRIEF && c.has(item.name) || $b(item, t));
}
function Qgt(o, e, t, n) {
  let [r, s] = NT($kn(gl(M2e([...o, ...e]), "name"), n), l => w_(l) || bEe(l)),
    i = [...s.sort(CX), ...r.sort(CX)];
  if (m) {
    if (m.isCoordinatorMode()) return A1o(i);
  }
  return i;
}
function Zgt(o, e) {
  let t = o.length === 1 ? o[0] : void 0;
  if (t && FAo(e, t)) return [];
  return o;
}
export { kJn, xzt, EJn, A1o, Qgt, Zgt };