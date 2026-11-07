// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wt,
  Gln
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var p = /^req_[A-Za-z0-9_-]{1,36}$/;

function Yz(e) {
  return typeof e === "string" && p.test(e)
}

function OJ() {
  return
}
var o = he({
  request: null,
  response: null,
  holder: null
}, (e) => {
  if (e.request !== null) Wt.interceptors.request.eject(e.request), e.request = null;
  if (e.response !== null) Wt.interceptors.response.eject(e.response), e.response = null;
  e.holder = null
});

function RLs(e, r) {
  if (o.request !== null) return;
  o.holder = {
    report: e,
    sendable: r
  }, o.request = Wt.interceptors.request.use((n) => {
    let t = c(n.headers.get("Authorization"), r, () => i(n));
    switch (t.send) {
      case "asItCame":
        break;
      case "held":
        n.headers.set("Authorization", t.value);
        break;
      case "none":
        n.headers.delete("Authorization");
        break
    }
    return n
  }), o.response = Wt.interceptors.response.use((n) => (d(n.status, n.config, e), n), (n) => {
    if (Wt.isAxiosError(n) && n.response) d(n.response.status, n.config, e);
    return Promise.reject(n)
  })
}

function c(e, r, n) {
  for (let t of u(e)) {
    let s = r(t);
    if (s === t) continue;
    return s !== null && typeof e === "string" && !e.includes(",") && n() ? {
      send: "held",
      value: `Bearer ${s}`
    } : {
      send: "none"
    }
  }
  return {
    send: "asItCame"
  }
}

function ALs(e, r) {
  let n = new Headers(e);
  if (o.holder === null) return n;
  let t = c(n.get("Authorization"), o.holder.sendable, () => i({
    url: r
  }));
  switch (t.send) {
    case "asItCame":
      break;
    case "held":
      n.set("Authorization", t.value);
      break;
    case "none":
      n.delete("Authorization");
      break
  }
  return n
}

function xLs(e, r, n) {
  if (o.holder !== null) f(e, () => i({
    url: n
  }), () => r.get("Authorization"), o.holder.report)
}

function Can(e) {
  return u(e)[0] ?? null
}

function u(e) {
  if (Array.isArray(e)) return e.flatMap(u);
  if (typeof e !== "string") return [];
  let n = (e.includes(",") ? [e, ...e.split(",")] : [e]).flatMap((t) => {
    let s = /^\s*bearer\s+/i.exec(t);
    if (s === null) return [];
    let l = t.slice(s[0].length).trim();
    return l === "" ? [] : [l]
  });
  return L(n)
}

function i(e) {
  try {
    if (e === void 0) return !1;
    let r = a(Wt.getUri(e));
    return r !== null && [nn().BASE_API_URL, OJ()].some((n) => n !== void 0 && a(n) === r)
  } catch {
    return !1
  }
}

function a(e) {
  try {
    let r = new URL(e);
    return r.protocol === "https:" || r.protocol === "http:" ? r.origin : null
  } catch {
    return null
  }
}

function d(e, r, n) {
  f(e, () => !r?.skipSessionsBearerReport && i(r), () => r?.headers?.get?.("Authorization"), n)
}

function f(e, r, n, t) {
  try {
    if (e !== 401 || !r()) return;
    let s = Can(n());
    if (s !== null) t(s).catch(() => {})
  } catch {}
}

function PO(e) {
  let r = e?.headers;
  return r instanceof Gln && !r.has("Authorization")
}
export {
  Yz,
  OJ,
  RLs,
  ALs,
  xLs,
  Can,
  PO
};
