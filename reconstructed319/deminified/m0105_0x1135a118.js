// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function NH(e) {
  return e.slice(e.lastIndexOf(")") + 2).split(" ")[19];
}
function Fnt(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[1],
    n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n;
}
function vcn(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[2],
    n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n;
}
function XHr(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[3],
    n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n;
}
function ooa(e) {
  let [, ppid, pgrp, session,,,,,,,, t, u, d, o] = e.slice(e.lastIndexOf(")") + 2).split(" ", 15).map(Number),
    cpuTicks = (t ?? NaN) + (u ?? NaN) + (d ?? NaN) + (o ?? NaN);
  return ppid === void 0 || pgrp === void 0 || session === void 0 || Number.isNaN(ppid + pgrp + session + cpuTicks) ? void 0 : {
    ppid: ppid,
    pgrp: pgrp,
    session: session,
    cpuTicks: cpuTicks
  };
}
function Ujt(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ", 20).map(Number),
    [, ppid_2, pgrp_2, session_2,,,,,,,, u, d, o, s] = r,
    starttime = r[19],
    ownTicks = (u ?? NaN) + (d ?? NaN),
    childrenTicks = (o ?? NaN) + (s ?? NaN);
  return ppid_2 === void 0 || pgrp_2 === void 0 || session_2 === void 0 || starttime === void 0 || Number.isNaN(ppid_2 + pgrp_2 + session_2 + starttime + ownTicks + childrenTicks) ? void 0 : {
    ppid: ppid_2,
    pgrp: pgrp_2,
    session: session_2,
    starttime: starttime,
    ownTicks: ownTicks,
    childrenTicks: childrenTicks
  };
}
function N5(e) {
  let r = e.lastIndexOf(")");
  if (r < 0) return;
  let n = e.slice(r + 2),
    i = n.indexOf(" "),
    t = i < 0 ? n : n.slice(0, i);
  return t.length === 0 ? void 0 : t;
}
function SG(e) {
  return e === "Z" || e === "X";
}
function soa(e) {
  let r = e.indexOf("("),
    n = e.lastIndexOf(")"),
    systemTicks = Number.parseInt(e.slice(n + 2).split(" ", 13)[12] ?? "", 10);
  return r < 0 || n < r || Number.isNaN(systemTicks) ? void 0 : {
    name: e.slice(r + 1, n),
    systemTicks: systemTicks
  };
}
export { NH, Fnt, vcn, XHr, ooa, Ujt, N5, SG, soa };