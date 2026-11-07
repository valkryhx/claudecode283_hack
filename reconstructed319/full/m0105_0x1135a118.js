// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function NH(e) {
  return e.slice(e.lastIndexOf(")") + 2).split(" ")[19]
}

function Fnt(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[1],
    n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n
}

function vcn(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[2],
    n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n
}

function XHr(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[3],
    n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n
}

function ooa(e) {
  let [, r, n, i, , , , , , , , t, u, d, o] = e.slice(e.lastIndexOf(")") + 2).split(" ", 15).map(Number), s = (t ?? NaN) + (u ?? NaN) + (d ?? NaN) + (o ?? NaN);
  return r === void 0 || n === void 0 || i === void 0 || Number.isNaN(r + n + i + s) ? void 0 : {
    ppid: r,
    pgrp: n,
    session: i,
    cpuTicks: s
  }
}

function Ujt(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ", 20).map(Number),
    [, n, i, t, , , , , , , , u, d, o, s] = r,
    c = r[19],
    m = (u ?? NaN) + (d ?? NaN),
    a = (o ?? NaN) + (s ?? NaN);
  return n === void 0 || i === void 0 || t === void 0 || c === void 0 || Number.isNaN(n + i + t + c + m + a) ? void 0 : {
    ppid: n,
    pgrp: i,
    session: t,
    starttime: c,
    ownTicks: m,
    childrenTicks: a
  }
}

function N5(e) {
  let r = e.lastIndexOf(")");
  if (r < 0) return;
  let n = e.slice(r + 2),
    i = n.indexOf(" "),
    t = i < 0 ? n : n.slice(0, i);
  return t.length === 0 ? void 0 : t
}

function SG(e) {
  return e === "Z" || e === "X"
}

function soa(e) {
  let r = e.indexOf("("),
    n = e.lastIndexOf(")"),
    i = Number.parseInt(e.slice(n + 2).split(" ", 13)[12] ?? "", 10);
  return r < 0 || n < r || Number.isNaN(i) ? void 0 : {
    name: e.slice(r + 1, n),
    systemTicks: i
  }
}
export {
  NH,
  Fnt,
  vcn,
  XHr,
  ooa,
  Ujt,
  N5,
  SG,
  soa
};
