// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Bi, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Mto } from "B:/~BUN/root/chunk-wm0xaa4j.js";
import { wFe } from "B:/~BUN/root/chunk-b3gbz2vj.js";
import { sue } from "B:/~BUN/root/chunk-enq05gxv.js";
import { createHash as k } from "crypto";
var E = "anthropic.ccr.client_event.v1",
  jcs_lib = "claude-code-jcs@1";
function Tur(r) {
  let n = [],
    o = [],
    i = e => {
      if (e === null || typeof e === "boolean" || typeof e === "string") n.push(Bi(e));else if (typeof e === "number") {
        if (!Number.isFinite(e)) throw Error("canonicalJson: non-finite number");
        n.push(String(e));
      } else if (Array.isArray(e)) n.push("["), o.push({
        values: Array.from(e, s => s === void 0 ? null : s),
        next: 0
      });else if (typeof e === "object") {
        let s = e,
          names = Object.keys(s).filter(item => s[item] !== void 0).sort();
        n.push("{"), o.push({
          names: names,
          values: names.map(item => s[item]),
          next: 0
        });
      } else throw Error("canonicalJson: a value with no JSON form");
    };
  i(r);
  while (o.length > 0) {
    let e = o.at(-1);
    if (e.next === e.values.length) {
      n.push(e.names ? "}" : "]"), o.pop();
      continue;
    }
    if (e.next > 0) n.push(",");
    if (e.names) n.push(`${Bi(e.names[e.next])}:`);
    let s = e.values[e.next];
    e.next += 1, i(s);
  }
  return n.join("");
}
function P(r, n) {
  let {
      uuid: uuid,
      type: type,
      ...e
    } = n,
    s = k("sha256").update(Tur(e), "utf8").digest();
  return Buffer.concat([Buffer.from(E, "utf8"), f, Buffer.from(r, "utf8"), f, Buffer.from(uuid, "utf8"), f, Buffer.from(type, "utf8"), f, s]);
}
var f = Buffer.from([0]);
function S(r, n) {
  let kid = wFe + r,
    i = !1;
  return {
    noteSignFailure: () => {
      if (i) return !1;
      return i = !0, !0;
    },
    sign: async (e, s) => ({
      kid: kid,
      signature: (await n.sign(P(e, s))).toString("base64"),
      jcs_lib: jcs_lib
    })
  };
}
async function _({
  accountUuid: accountUuid,
  boundDeviceUuid: boundDeviceUuid,
  credentials: credentials,
  held: held
}) {
  return y(await k3t(accountUuid, credentials, v(held?.rowPk, boundDeviceUuid) ? held : void 0), boundDeviceUuid);
}
async function bri(r, n) {
  let o = await sue(n).catch(() => {
    return;
  });
  if (o?.status !== "resolved") return;
  let i = await k3t(o.accountUuid, n),
    e,
    s = 0,
    l = 0,
    c = (a, u) => {
      let p = ++s;
      a.then(w => {
        if (p > l) l = p, e = u(w);
      }, () => {});
    };
  return c(r, a => a === void 0 ? void 0 : y(i, a)), i.status === "loaded" ? {
    sign: async (a, u) => e?.sign(a, u),
    noteSignFailure: () => e?.noteSignFailure() ?? !1,
    rebind: a => c(a, u => u !== void 0 && v(i.rowPk, u) ? e ?? y(i, u) : void 0)
  } : void 0;
}
async function Cur(boundDeviceUuid_2, credentials_2, held_2) {
  let i = await sue(credentials_2).catch(() => {
    return;
  });
  return i?.status === "resolved" ? _({
    accountUuid: i.accountUuid,
    boundDeviceUuid: boundDeviceUuid_2,
    credentials: credentials_2,
    held: held_2
  }) : void 0;
}
async function xto(r, n) {
  let o = await sue(n).catch(() => {
    return;
  });
  if (o?.status !== "resolved") return;
  let i = await k3t(o.accountUuid, n);
  if (i.status !== "loaded" || !v(i.rowPk, r)) return;
  return g("client_event_signer"), S(i.rowPk, i.key);
}
async function k3t(r, n, o) {
  if (o?.accountUuid === r) return {
    status: "loaded",
    rowPk: o.rowPk,
    key: o.key
  };
  try {
    let i = await Mto(r, n);
    return i === void 0 ? {
      status: "no_device_key"
    } : {
      status: "loaded",
      rowPk: i.rowPk,
      key: i.key
    };
  } catch (error) {
    return t(`[clientEventSigner] could not load the device key: ${d(error)}`), {
      status: "load_failed"
    };
  }
}
function v(r, n) {
  return r === n.toLowerCase();
}
function y(r, n) {
  switch (r.status) {
    case "no_device_key":
    case "load_failed":
      m("client_event_signer", r.status);
      return;
    case "loaded":
      if (!v(r.rowPk, n)) {
        m("client_event_signer", "bound_elsewhere");
        return;
      }
      return g("client_event_signer"), S(r.rowPk, r.key);
  }
}
export { jcs_lib as Eur, Tur, bri, Cur, xto, k3t };