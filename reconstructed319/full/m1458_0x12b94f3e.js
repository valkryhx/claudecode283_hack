// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t,
  oi
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x7o
} from "B:/~BUN/root/chunk-fk1gx2mz.js";
import {
  i5e
} from "B:/~BUN/root/chunk-8cye11my.js";
import {
  fre
} from "B:/~BUN/root/chunk-3e8b6pq9.js";
import {
  createHash as w
} from "crypto";
var k = "anthropic.ccr.client_event.v1",
  WXr = "claude-code-jcs@1";

function zXr(r) {
  let n = [],
    o = [],
    i = (e) => {
      if (e === null || typeof e === "boolean" || typeof e === "string") n.push(oi(e));
      else if (typeof e === "number") {
        if (!Number.isFinite(e)) throw Error("canonicalJson: non-finite number");
        n.push(String(e))
      } else if (Array.isArray(e)) n.push("["), o.push({
        values: Array.from(e, (s) => s === void 0 ? null : s),
        next: 0
      });
      else if (typeof e === "object") {
        let s = e,
          l = Object.keys(s).filter((c) => s[c] !== void 0).sort();
        n.push("{"), o.push({
          names: l,
          values: l.map((c) => s[c]),
          next: 0
        })
      } else throw Error("canonicalJson: a value with no JSON form")
    };
  i(r);
  while (o.length > 0) {
    let e = o.at(-1);
    if (e.next === e.values.length) {
      n.push(e.names ? "}" : "]"), o.pop();
      continue
    }
    if (e.next > 0) n.push(",");
    if (e.names) n.push(`${oi(e.names[e.next])}:`);
    let s = e.values[e.next];
    e.next += 1, i(s)
  }
  return n.join("")
}

function E(r, n) {
  let {
    uuid: o,
    type: i,
    ...e
  } = n, s = w("sha256").update(zXr(e), "utf8").digest();
  return Buffer.concat([Buffer.from(k, "utf8"), f, Buffer.from(r, "utf8"), f, Buffer.from(o, "utf8"), f, Buffer.from(i, "utf8"), f, s])
}
var f = Buffer.from([0]);

function iar(r, n) {
  let o = i5e + r,
    i = !1;
  return {
    noteSignFailure: () => {
      if (i) return !1;
      return i = !0, !0
    },
    sign: async (e, s) => ({
      kid: o,
      signature: (await n.sign(E(e, s))).toString("base64"),
      jcs_lib: WXr
    })
  }
}
async function P({
  accountUuid: r,
  boundDeviceUuid: n,
  credentials: o,
  held: i
}) {
  return y(await Nlt(r, o, v(i?.rowPk, n) ? i : void 0), n)
}
async function aba(r, n) {
  let o = await fre(n).catch(() => {
    return
  });
  if (o?.status !== "resolved") return;
  let i = await Nlt(o.accountUuid, n),
    e, s = 0,
    l = 0,
    c = (a, u) => {
      let p = ++s;
      a.then((S) => {
        if (p > l) l = p, e = u(S)
      }, () => {})
    };
  return c(r, (a) => a === void 0 ? void 0 : y(i, a)), i.status === "loaded" ? {
    sign: async (a, u) => e?.sign(a, u),
    noteSignFailure: () => e?.noteSignFailure() ?? !1,
    rebind: (a) => c(a, (u) => u !== void 0 && v(i.rowPk, u) ? e ?? y(i, u) : void 0)
  } : void 0
}
async function GXr(r, n, o) {
  let i = await fre(n).catch(() => {
    return
  });
  return i?.status === "resolved" ? P({
    accountUuid: i.accountUuid,
    boundDeviceUuid: r,
    credentials: n,
    held: o
  }) : void 0
}
async function T7o(r, n) {
  let o = await fre(n).catch(() => {
    return
  });
  if (o?.status !== "resolved") return;
  let i = await Nlt(o.accountUuid, n);
  if (i.status !== "loaded" || !v(i.rowPk, r)) return;
  return g("client_event_signer"), iar(i.rowPk, i.key)
}
async function Nlt(r, n, o) {
  if (o?.accountUuid === r) return {
    status: "loaded",
    rowPk: o.rowPk,
    key: o.key
  };
  try {
    let i = await x7o(r, n);
    return i === void 0 ? {
      status: "no_device_key"
    } : {
      status: "loaded",
      rowPk: i.rowPk,
      key: i.key
    }
  } catch (i) {
    return t(`[clientEventSigner] could not load the device key: ${d(i)}`), {
      status: "load_failed"
    }
  }
}

function v(r, n) {
  return r === n.toLowerCase()
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
        return
      }
      return g("client_event_signer"), iar(r.rowPk, r.key)
  }
}
export {
  WXr,
  zXr,
  iar,
  aba,
  GXr,
  T7o,
  Nlt
};
