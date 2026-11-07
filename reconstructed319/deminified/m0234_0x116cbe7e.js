// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ot } from "B:/~BUN/root/chunk-0zd0vn8w.js";
import { isIP as P } from "net";
import { BlockList as W, connect as N, isIP as u } from "net";
import { connect as k } from "tls";
import { URL as x } from "url";
import { BlockList as H, isIP as O } from "net";
var rys = ["127.0.0.0/8", "::1"];
function E(e) {
  let t = O(e);
  return t === 4 ? "ipv4" : t === 6 ? "ipv6" : void 0;
}
function oys(e) {
  let t = e.indexOf("/"),
    address_2 = h(t === -1 ? e : e.slice(0, t)),
    family = E(address_2);
  if (!family) return;
  let o = family === "ipv6" ? 128 : 32,
    prefix = o;
  if (t !== -1) {
    let s = e.slice(t + 1);
    if (!/^\d{1,3}$/.test(s) || Number(s) > o) return;
    prefix = Number(s);
  }
  let address = family === "ipv6" ? m(address_2) : void 0;
  if (address !== void 0) return prefix < 96 ? void 0 : {
    address: address,
    prefix: prefix - 96,
    family: "ipv4"
  };
  return {
    address: address_2,
    prefix: prefix,
    family: family
  };
}
function WQt(e, t) {
  let r = oys(t);
  if (!r) return !1;
  try {
    e.addSubnet(r.address, r.prefix, r.family);
  } catch {
    return !1;
  }
  return !0;
}
function S(e) {
  let t = new H();
  for (let r of e) if (!WQt(t, r)) throw Error(`Invalid IP address or CIDR range: ${JSON.stringify(r)}`);
  return t;
}
function f0t(e, t) {
  let r = h(t),
    n = E(r);
  return n !== void 0 && e.check(r, n);
}
function h(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}
function b(e) {
  let t;
  try {
    t = new URL(`http://[${h(e)}]/`).hostname.slice(1, -1);
  } catch {
    return;
  }
  let [r = "", n] = t.split("::"),
    o = r ? r.split(":") : [],
    i = n ? n.split(":") : [],
    c = n === void 0 ? 0 : 8 - o.length - i.length;
  if (c < 0 || o.length + c + i.length !== 8) return;
  return [...o, ...Array(c).fill("0"), ...i].map(item => parseInt(item, 16));
}
var p = (e, t) => `${e >> 8}.${e & 255}.${t >> 8}.${t & 255}`;
function m(e) {
  if (!/ffff/i.test(e)) return;
  let t = b(e);
  return t && t.slice(0, 5).every(item => item === 0) && t[5] === 65535 ? p(t[6], t[7]) : void 0;
}
function LFi(e) {
  if (O(e) !== 6) return;
  let t = b(e);
  if (!t) return;
  let r = (o, i) => t.slice(o, i).every(item => item === 0);
  if (t[0] === 8194) return p(t[1], t[2]);
  let n = p(t[6], t[7]);
  if (t[0] === 100 && t[1] === 65435 && r(2, 6)) return n;
  if (r(0, 5) && (t[5] === 0 || t[5] === 65535)) return n;
  if (r(0, 4) && t[4] === 65535 && t[5] === 0) return n;
  return;
}
var A = S(rys);
function Zuo(e) {
  return f0t(A, e);
}
function NFi(e) {
  let t = e.toLowerCase().replace(/\.$/, "");
  return t === "localhost" || t.endsWith(".localhost");
}
var I = 30000,
  B = new Set(["connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "proxy-connection", "te", "trailer", "transfer-encoding", "upgrade"]);
function sys(e) {
  let t = e?.http ?? process.env.HTTP_PROXY ?? process.env.http_proxy ?? void 0,
    r = e?.https ?? process.env.HTTPS_PROXY ?? process.env.https_proxy ?? t,
    n = e?.noProxy ?? process.env.NO_PROXY ?? process.env.no_proxy ?? "";
  if (!t && !r) return;
  let o = s => {
      if (!s) return;
      let f = /^[a-z][a-z0-9+.-]*:\/\//i.test(s) ? s : `http://${s}`;
      try {
        let l = new x(f);
        if (l.protocol !== "http:" && l.protocol !== "https:" || !l.hostname) throw Error("unsupported scheme or empty host");
        return l;
      } catch {
        Ot(`Invalid parent proxy URL, ignoring: ${R(s)}`, {
          level: "error"
        });
        return;
      }
    },
    httpUrl = o(t),
    httpsUrl = o(r);
  if (!httpUrl && !httpsUrl) return;
  return {
    httpUrl: httpUrl,
    httpsUrl: httpsUrl,
    noProxy: _(n)
  };
}
function _(e) {
  let t = {
    all: !1,
    suffixes: [],
    cidr: new W()
  };
  for (let r of e.split(",")) {
    if (r = r.trim(), !r) continue;
    if (r === "*") {
      t.all = !0;
      continue;
    }
    if (r.includes("/")) {
      WQt(t.cidr, r);
      continue;
    }
    let n = r.toLowerCase(),
      o = /^\[([^\]]+)\](?::\d+)?$/.exec(n);
    if (o) n = o[1];
    if (n.startsWith("*.")) n = n.slice(1);
    if (!u(n)) {
      let i = n.lastIndexOf(":");
      if (i !== -1 && /^\d+$/.test(n.slice(i + 1))) n = n.slice(0, i);
    } else if (WQt(t.cidr, n)) continue;
    t.suffixes.push(n);
  }
  return t;
}
function Swr(e, t) {
  let r = Bze(t.toLowerCase().replace(/\.$/, ""));
  if (r === "localhost" || Zuo(r)) return !0;
  if (e.noProxy.all) return !0;
  if (f0t(e.noProxy.cidr, r)) return !0;
  for (let n of e.noProxy.suffixes) if (n.startsWith(".")) {
    if (r === n.slice(1) || r.endsWith(n)) return !0;
  } else if (r === n || r.endsWith("." + n)) return !0;
  return !1;
}
function wwr(e, t) {
  if (t.isHttps) return e.httpsUrl ?? e.httpUrl;
  return e.httpUrl;
}
function iys(e) {
  let {
      destHost: destHost,
      destPort: destPort
    } = e,
    n = Bze(destHost);
  if (!GDn(n)) return Promise.reject(Error(`Invalid destination host for CONNECT: ${JSON.stringify(destHost)}`));
  if (!Number.isInteger(destPort) || destPort < 1 || destPort > 65535) return Promise.reject(Error(`Invalid destination port: ${destPort}`));
  let o = u(n) === 6 ? `[${n}]:${destPort}` : `${n}:${destPort}`;
  return new Promise((i, c) => {
    let s = e.dial(),
      a = !1,
      f = d => {
        if (a) return;
        a = !0, s.destroy(), c(d);
      },
      l = () => f(Error("Proxy closed during CONNECT handshake"));
    s.setTimeout(e.timeoutMs ?? I, () => f(Error("CONNECT handshake timed out"))), s.once("error", f), s.once("close", l), s.once(e.readyEvent, () => {
      s.write(`CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
` + (e.authHeader ? `Proxy-Authorization: ${e.authHeader}\r
` : "") + `\r
`);
      let d = "",
        w = L => {
          d += L.toString("latin1");
          let y = d.indexOf(`\r
\r
`);
          if (y === -1) {
            if (d.length > 16384) f(Error("CONNECT response header too large"));
            return;
          }
          s.pause(), s.removeListener("data", w);
          let g = d.slice(0, d.indexOf(`\r
`));
          if (!/^HTTP\/1\.[01] 2\d\d(?:\s|$)/.test(g)) return f(Error(`Proxy refused CONNECT: ${g.trim()}`));
          let C = d.slice(y + 4);
          if (C.length) s.unshift(Buffer.from(C, "latin1"));
          a = !0, s.setTimeout(0), s.removeListener("error", f), s.removeListener("close", l), i(s);
        };
      s.on("data", w);
    });
  });
}
function efo(e, destHost_2, destPort_2) {
  let n = Bze(e.hostname),
    port = Number(e.port) || (e.protocol === "https:" ? 443 : 80),
    i = e.protocol === "https:";
  return iys({
    destHost: destHost_2,
    destPort: destPort_2,
    authHeader: ays(e),
    readyEvent: i ? "secureConnect" : "connect",
    dial: () => i ? k({
      host: n,
      port: port,
      ...(u(n) ? {} : {
        servername: n
      })
    }) : N(port, n)
  });
}
function ays(e) {
  if (!e.username && !e.password) return;
  try {
    let t = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  } catch {
    let t = `${e.username}:${e.password}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  }
}
function zDn(e, t, r = Apt(t.headers)) {
  try {
    return e.writeHead(t.statusCode ?? 502, r), !0;
  } catch (error) {
    if (Ot(`Invalid upstream response head (status ${t.statusCode}): ${error instanceof Error ? error.message : String(error)}`, {
      level: "error"
    }), t.destroy(), e.headersSent) return e.destroy(), !1;
    for (let o of e.getHeaderNames()) e.removeHeader(o);
    return e.writeHead(502, {
      "Content-Type": "text/plain"
    }), e.end("Bad Gateway"), !1;
  }
}
function tfo(e, t) {
  let r;
  e.once("response", n => {
    r = n;
  }), e.on("error", n => {
    if (r?.complete) {
      Ot(`Upstream connection failed after a whole answer: ${n.message}`);
      return;
    }
    t(n);
  });
}
function Apt(e, {
  folded = !1
} = {}) {
  let r = c => {
      let s = c.trim().toLowerCase();
      return folded ? s.replace(/[_.]/g, "-") : s;
    },
    n = new Set(),
    connection = e.connection;
  if (connection) for (let c of String(connection).split(",")) n.add(r(c));
  let i = {};
  for (let [c, s] of Object.entries(e)) {
    let a = r(c);
    if (!B.has(a) && !n.has(a)) i[c] = s;
  }
  return i;
}
function Bze(e) {
  return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}
function lys(e) {
  if (!e) return "-";
  if (!e.username && !e.password) return e.href;
  let t = new x(e.href);
  return t.username = "***", t.password = "***", t.href;
}
function R(e) {
  return e.replace(/\/\/[^@/]*@/, "//***:***@");
}
function GDn(e) {
  if (!e || e.length > 255) return !1;
  let t = Bze(e);
  if (t.includes("%")) return !1;
  if (u(t)) return !0;
  return /^[A-Za-z0-9._-]+$/.test(t);
}
function G$(e) {
  try {
    let t = Bze(e),
      r = u(t) === 6 ? `[${t}]` : t,
      n = Bze(new x(`http://${r}/`).hostname);
    return u(n) === 6 ? m(n) ?? n : n.replace(/\.$/, "");
  } catch {
    return;
  }
}
function p0t(e, t, r) {
  let n = u(e) === 6 ? `[${e}]` : e;
  return t === r ? n : `${n}:${t}`;
}
async function nfo(servername, port_2, r, n) {
  let host = servername;
  if (r && !u(servername)) {
    let i = await kwr(servername, port_2, r);
    if (host = i.remoteAddress ?? "", i.destroy(), !host) throw Error(`connect ${servername}:${port_2}: no peer address`);
  }
  return {
    host: host,
    port: port_2,
    ...(n && !u(servername) ? {
      servername: servername
    } : {}),
    agent: !1
  };
}
function kwr(host_2, port_3, lookup, n = I) {
  return new Promise((o, i) => {
    let c = N({
        port: port_3,
        host: host_2,
        lookup: lookup
      }),
      s = !1,
      a = f => {
        if (s) return;
        if (s = !0, c.setTimeout(0), f) c.destroy(), i(f);else o(c);
      };
    c.setTimeout(n, () => a(Error("connect timed out"))), c.once("connect", () => a()), c.once("error", a), c.once("close", () => a(Error("socket closed before connect")));
  });
}
function v(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}
function Xce(hostPattern) {
  if (hostPattern.startsWith("[")) {
    let n = hostPattern.indexOf("]");
    if (n === -1) return {
      hostPattern: hostPattern,
      port: void 0
    };
    let o = v(hostPattern.slice(1, n)),
      hostPattern_2 = G$(o) ?? o,
      c = hostPattern.slice(n + 1);
    if (c === "") return {
      hostPattern: hostPattern_2,
      port: void 0
    };
    let port_4 = T(c.startsWith(":") ? c.slice(1) : "");
    return port_4 === void 0 ? {
      hostPattern: hostPattern,
      port: void 0
    } : {
      hostPattern: hostPattern_2,
      port: port_4
    };
  }
  let t = hostPattern.lastIndexOf(":");
  if (t === -1) return {
    hostPattern: hostPattern,
    port: void 0
  };
  if (hostPattern.indexOf(":") !== t) {
    let n = v(hostPattern);
    return {
      hostPattern: G$(n) ?? n,
      port: void 0
    };
  }
  let port_5 = T(hostPattern.slice(t + 1));
  if (port_5 === void 0) return {
    hostPattern: hostPattern,
    port: void 0
  };
  return {
    hostPattern: hostPattern.slice(0, t),
    port: port_5
  };
}
function T(e) {
  if (!/^[1-9][0-9]{0,4}$/.test(e)) return;
  let t = Number(e);
  return t > 65535 ? void 0 : t;
}
function rfo(e) {
  if (P(e) === 6) return !0;
  if (e.includes("://") || e.includes("/") || e.includes(":")) return !1;
  if (e === "localhost") return !0;
  if (e.startsWith("*.")) {
    let t = e.slice(2);
    if (!t.includes(".") || t.startsWith(".") || t.endsWith(".")) return !1;
    let r = t.split(".");
    return r.length >= 2 && r.every(item => item.length > 0);
  }
  if (e.includes("*")) return !1;
  return e.includes(".") && !e.startsWith(".") && !e.endsWith(".");
}
var ofo = 'Invalid domain pattern. Must be a valid domain (e.g., "example.com"), a wildcard (e.g., "*.example.com"), or a bracketed IPv6 literal (e.g., "[::1]", "[2001:db8::1]:443"). Overly broad patterns like "*.com" or "*" are not allowed for security reasons.';
function dys(e) {
  let t = e.indexOf(":");
  return !(t !== -1 && e.indexOf(":", t + 1) !== -1) || e.startsWith("[");
}
function vwr(e) {
  return dys(e) && rfo(Xce(e).hostPattern);
}
var Ewr = ofo + ' An optional ":port" suffix (1-65535) restricts the entry to that port.';
function cys(e) {
  return e.flatMap(item => {
    let {
      hostPattern: r,
      port: port_6
    } = Xce(item);
    return P(r) ? [{
      range: r,
      port: port_6
    }] : [];
  });
}
function VDn(e) {
  return Xce(e).hostPattern;
}
function gJe(e, t) {
  let r = e.toLowerCase();
  if (t === "*") return !0;
  if (t.startsWith("*.")) {
    if (P(Bze(r))) return !1;
    let n = t.substring(2).toLowerCase();
    return r.endsWith("." + n);
  }
  return r === t.toLowerCase();
}
function Twr(e, t, r) {
  let {
    hostPattern: hostPattern_3,
    port: port_7
  } = Xce(r);
  if (port_7 !== void 0 && port_7 !== t) return !1;
  return gJe(e, hostPattern_3);
}
function zQt(e, t) {
  let r = t.map(VDn);
  if (!e.startsWith("*.")) return r.some(item => gJe(e, item));
  let n = e.slice(2).toLowerCase();
  return r.some(item => {
    if (!item.startsWith("*.")) return !1;
    let i = item.slice(2).toLowerCase();
    return n === i || n.endsWith("." + i);
  });
}
export { rys, oys, WQt, f0t, LFi, Zuo, NFi, sys, Swr, wwr, iys, efo, ays, zDn, tfo, Apt, Bze, lys, GDn, G$, p0t, nfo, kwr, Xce, rfo, ofo, dys, vwr, Ewr, cys, VDn, gJe, Twr, zQt };