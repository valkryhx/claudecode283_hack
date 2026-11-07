// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q,
  Wn
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  _h
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  Xt
} from "B:/~BUN/root/chunk-jgwwv4gf.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  hi,
  S3
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  R
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  qA,
  st,
  nWt,
  BGs,
  UOo
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  oi
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  TSt
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  Fp,
  QS
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  createHmac as S,
  randomBytes as O
} from "crypto";
var s2e = "poll_",
  K_e = 49152,
  tT = "repl-eval",
  Jue = "repl-status",
  Pyo = "task-notification";

function mFt(e) {
  return (le() || !1) && e === tT ? C : K_e
}
var C = 163840,
  i2e = 1000,
  fNe = 32768,
  hFt = 20,
  v = /^[a-z][a-z0-9-]{0,63}$/;

function gFt(e) {
  return v.test(e)
}
var I = /^[a-z][a-z0-9-]{0,63}$/,
  V = new RegExp(I.source.slice(1, -1)),
  _ = new Set(["kind", "at", "status"]),
  L = new Map([
    [tT, new Set(["log", "result", "error"])]
  ]),
  yFt = "session-notice",
  y = new Map([
    [yFt, new Set(["notice-class", "from-session"])],
    [tT, new Set(["eval", "ms"])],
    [Jue, new Set(["pending"])]
  ]),
  M = new Set([..._, ...[...y.values()].flatMap((e) => [...e])]),
  U = new Set([...y.keys(), tT, Jue]),
  F = new Set([Pyo]),
  W = new Set([yFt]);

function w(e) {
  return e.replace(/[01345789i]/g, (n) => ({
    "0": "o",
    "1": "l",
    "3": "e",
    "4": "a",
    "5": "s",
    "7": "t",
    "8": "b",
    "9": "g",
    i: "l"
  })[n])
}

function B(e, n) {
  if (e === n) return !0;
  let [t, o] = e.length <= n.length ? [e, n] : [n, e];
  if (o.length - t.length > 1) return !1;
  let l = 0,
    s = 0,
    u = 0;
  while (l < t.length && s < o.length) {
    if (t[l] === o[s]) {
      l++, s++;
      continue
    }
    if (u > 0) return !1;
    if (u++, t.length === o.length) l++;
    s++
  }
  return u === 0 || l === t.length
}

function j(e, n) {
  for (let t of [n.length - 1, n.length, n.length + 1]) {
    if (t <= 0 || t > e.length) continue;
    for (let o = 0; o + t <= e.length; o++)
      if (B(e.slice(o, o + t), n)) return !0
  }
  return !1
}

function a2e(e) {
  if (h(e, U)) return !0;
  if (le()) return h(e, F);
  return !1
}

function _Ft(e) {
  return h(e, W)
}

function h(e, n) {
  let t = w(e);
  for (let o of n) {
    let l = w(o);
    if (t.includes(l) || j(t, l)) return !0
  }
  return !1
}
var l2e = ["human-principal", "human-other", "peer-agent", "world-event"];

function A2i(e) {
  return typeof e === "string" && l2e.includes(e)
}

function Bht(e) {
  if (!Array.isArray(e)) return [];
  return e.slice(0, hFt).map((n) => {
    if (n === null || typeof n !== "object" || n.authority === "world-event") return {
      kind: "skipped"
    };
    let t = n.senderText;
    if (typeof t !== "string" || t === "") return {
      kind: "skipped"
    };
    let o = Q(t, K_e);
    return {
      kind: n.authority === "human-principal" ? "principal" : "other",
      entry: n,
      text: o
    }
  })
}
var P = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u0085\u2028\u2029]/g,
  K = new RegExp(`[\\r${P.source.slice(1)}`);

function b(e) {
  return K.test(e)
}

function lQe(e) {
  return e.replace(/\r\n?/g, `
`).replace(P, "")
}

function pNe(e) {
  return lQe(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;"))
}

function RHn(e) {
  return lQe(Xt(e))
}

function x2i(e) {
  return TSt(_h(lQe(e)))
}

function Que({
  kind: e,
  at: n,
  content: t,
  attributes: o,
  children: l
}) {
  if (!v.test(e)) throw new R(`invalid poll event kind: ${JSON.stringify(e)}`, "invalid poll event kind");
  let s = "";
  for (let [r, d] of Object.entries(o ?? {})) {
    if (r === "kind" || r === "at" || !_.has(r) && y.get(e)?.has(r) !== !0) throw new R(`invalid poll event attribute: ${r}`, "invalid poll event attribute");
    s += ` ${r}="${TRr(d)}"`
  }
  let u = pNe(t);
  if (l !== void 0) {
    if (t !== "") throw new R("poll event: pass content or children, not both", "poll event: content or children");
    let r = L.get(e);
    u = `
`;
    for (let {
        tag: d,
        text: f
      }
      of l) {
      if (r === void 0 || !r.has(d)) throw new R(`invalid poll event child: <${d}> on kind ${e}`, "invalid poll event child");
      let c = RHn(f);
      u += c === "" ? `<${d}/>
` : `<${d}>${c}</${d}>
`
    }
  }
  return `<event kind="${e}" at="${TRr(n)}"${s}>${u}</event>`
}

function wTs(e) {
  return /<\/?event\b/i.test(e)
}

function Oyo({
  kind: e,
  at: n,
  content: t
}) {
  if (!v.test(e)) throw new R(`invalid poll event kind: ${JSON.stringify(e)}`, "invalid poll event kind");
  let o = lQe(t);
  if (wTs(o)) throw new R("verbatim poll event body breaks envelope", "verbatim poll event body breaks envelope");
  return `<event kind="${e}" at="${TRr(n)}">${o}</event>`
}

function TRr(e) {
  return e.replace(/[&<>"'=\r\n\t]/g, " ").replace(P, " ")
}

function CRr(e) {
  if (!e.startsWith("<event")) return {
    ok: !1,
    reason: "must be a single <event> element"
  };
  let n = 6,
    t, o = new Set;
  for (;;) {
    if (n >= e.length) return {
      ok: !1,
      reason: "unterminated opening tag"
    };
    if (e[n] === ">" || e.startsWith("/>", n)) break;
    if (e[n] !== " ") return {
      ok: !1,
      reason: `malformed opening tag at offset ${n}`
    };
    n++;
    let u = V.exec(e.slice(n));
    if (!u || u.index !== 0) return {
      ok: !1,
      reason: `invalid attribute name at offset ${n}`
    };
    let r = u[0];
    if (r.startsWith("xml")) return {
      ok: !1,
      reason: `reserved attribute name ${r}`
    };
    if (o.has(r)) return {
      ok: !1,
      reason: `duplicate attribute ${r}`
    };
    if (!M.has(r)) return {
      ok: !1,
      reason: `unknown attribute ${r}`
    };
    if (o.add(r), n += r.length, !e.startsWith('="', n)) return {
      ok: !1,
      reason: `attribute ${r} must be ="\u2026"-quoted`
    };
    n += 2;
    let d = n;
    for (;;) {
      if (n >= e.length) return {
        ok: !1,
        reason: `unterminated value for attribute ${r}`
      };
      let c = e[n];
      if (c === '"') break;
      if (c === "<" || c === ">" || c === "'" || c === "=") return {
        ok: !1,
        reason: `raw special in attribute ${r}`
      };
      if (b(c) || c === `
` || c === "\t") return {
        ok: !1,
        reason: `control character in attribute ${r}`
      };
      if (c === "&") return {
        ok: !1,
        reason: `ampersand in attribute ${r}`
      };
      n++
    }
    let f = e.slice(d, n);
    if (n++, r === "kind") {
      if (!v.test(f)) return {
        ok: !1,
        reason: "invalid kind attribute"
      };
      t = f
    }
  }
  if (t === void 0) return {
    ok: !1,
    reason: "missing kind attribute"
  };
  if (!o.has("at")) return {
    ok: !1,
    reason: "missing at attribute"
  };
  for (let u of o) {
    if (_.has(u)) continue;
    let r = y.get(t);
    if (r === void 0 || !r.has(u)) return {
      ok: !1,
      reason: `attribute ${u} not allowed on kind ${t}`
    }
  }
  if (e.startsWith("/>", n)) {
    if (n + 2 !== e.length) return {
      ok: !1,
      reason: "content after the root element"
    };
    return {
      ok: !0,
      kind: t
    }
  }
  n++;
  let l = L.get(t),
    s;
  for (; n < e.length; n++) {
    let u = e[n];
    if (u === "<") {
      if (e.startsWith("</event>", n)) {
        if (s !== void 0) return {
          ok: !1,
          reason: `unclosed <${s}> at root close`
        };
        if (n + 8 !== e.length) return {
          ok: !1,
          reason: "content after the root element"
        };
        return {
          ok: !0,
          kind: t
        }
      }
      let r = l === void 0 ? null : /^<(\/?)([a-z]{1,16})(\/?)>/.exec(e.slice(n, n + 20));
      if (r === null || !l.has(r[2])) return {
        ok: !1,
        reason: `markup in body at offset ${n}`
      };
      let [d, f, c, k] = r;
      if (f === "/" && k === "/") return {
        ok: !1,
        reason: `malformed child tag at offset ${n}`
      };
      if (f === "/") {
        if (s !== c) return {
          ok: !1,
          reason: `stray </${c}> at offset ${n}`
        };
        s = void 0
      } else {
        if (s !== void 0) return {
          ok: !1,
          reason: `nested <${c}> inside <${s}>`
        };
        if (k !== "/") s = c
      }
      n += d.length - 1;
      continue
    }
    if (u === ">" || s === void 0 && (u === '"' || u === "'")) return {
      ok: !1,
      reason: `raw special in body at offset ${n}`
    };
    if (b(u)) return {
      ok: !1,
      reason: `control character in body at offset ${n}`
    };
    if (u === "&" && !(e.startsWith("amp;", n + 1) || e.startsWith("lt;", n + 1) || e.startsWith("gt;", n + 1) || e.startsWith("quot;", n + 1) || e.startsWith("#39;", n + 1))) return {
      ok: !1,
      reason: `unknown entity in body at offset ${n}`
    }
  }
  return {
    ok: !1,
    reason: "missing closing tag"
  }
}

function Zb(e) {
  return e.mode === "poll-event"
}

function VI() {
  let e = le() && UOo();
  return (D() || e) && (tn() || !1 || e) && BGs()
}

function AHn() {
  let e = nWt();
  return e !== "host" && e !== "none"
}

function D() {
  return i.CLAUDE_CODE_POLL_EVENTS === !0 || !1
}

function P2i() {
  return le() && !D() && UOo()
}

function xHn(e) {
  let n = e.strippedDangerousRules;
  if (e.alwaysAllowRules.command === void 0 && n?.command === void 0 && e.connectorCardAllows === void 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: void 0
    },
    ...n && {
      strippedDangerousRules: {
        ...n,
        command: void 0
      }
    },
    ...e.connectorCardAllows && {
      connectorCardAllows: void 0
    }
  }
}

function kTs(e, n) {
  let t = xHn(e);
  return {
    ...t,
    alwaysAllowRules: {
      ...t.alwaysAllowRules,
      command: n
    },
    pollEventDeliveryGuard: void 0
  }
}

function vTs(e) {
  let n = xHn(e);
  return n.pollEventDeliveryGuard === !0 ? n : {
    ...n,
    pollEventDeliveryGuard: !0
  }
}

function RRr(e, n, t) {
  if (t?.skipSkillPermissionReset !== !0) {
    let o = Fp() || QS();
    e.setToolPermissionContext((l) => {
      let s = l.alwaysAllowRules.command;
      if (o && l.pollEventDeliveryGuard === void 0 && l.strippedDangerousRules?.command === void 0 && l.connectorCardAllows === void 0 && (s === n || s !== void 0 && n !== void 0 && s.length === n.length && s.every((u, r) => u === n[r]))) return l;
      return kTs(l, n)
    })
  } else if (t.pollEventDelivery === !0 || t.pollEmptyDispatch === !0) e.setToolPermissionContext((o) => vTs(o))
}

function bFt(e, n) {
  for (let t = Math.max(0, n); t < e.length; t++) {
    let o = e[t];
    if (o.type === "attachment" && o.attachment?.type === "poll_events") return !0
  }
  return !1
}

function O2i(e, n) {
  let t = e[n],
    o = t?.message?.content;
  if (t?.type !== "user" || !Array.isArray(o)) return !1;
  let l = new Set;
  for (let s = 0; s < n; s++) {
    let u = e[s],
      r = u.message?.content;
    if (u.type === "assistant" && Array.isArray(r)) {
      for (let d of r)
        if (d?.type === "tool_use" && d.name === hi) l.add(d.id)
    }
  }
  if (l.size === 0) return !1;
  return o.some((s) => s?.type === "tool_result" && typeof s.tool_use_id === "string" && l.has(s.tool_use_id))
}

function SFt(e) {
  if (e.pollEvent === void 0) return a(Error("poll-event command without pollEvent payload")), "";
  return e.pollEvent.envelope
}

function wFt(e) {
  return e.some((n) => n.pollEvent?.declared !== void 0) ? e.map((n) => n.pollEvent?.declared === void 0 ? null : {
    kind: n.pollEvent.kind,
    ...n.pollEvent.declared
  }) : void 0
}

function I2i(e) {
  return {}
}

function ARr(e) {
  return e.mode === "poll-event" && e.agentId === st()
}

function ETs(e) {
  return e.passive !== !0 && e.wake === !0 && e.startsTurn !== !1
}

function xRr(e) {
  return le() && e.mode === "poll-event" && e.pollEvent?.kind === tT && ETs({
    passive: e.passive,
    wake: e.pollEvent.wake,
    startsTurn: e.pollEvent.startsTurn
  })
}

function mNe(e, n) {
  return e.mode === "poll-event" && e.agentId === (n ?? st())
}

function kFt(e) {
  return Buffer.byteLength(oi(e), "utf8")
}

function TTs(e) {
  let n = [],
    t = 0;
  for (let o = 0; o < e.length;) {
    let l = e[o].pollEvent?.group,
      s = o + 1;
    while (l !== void 0 && e[s]?.pollEvent?.group === l) s++;
    let u = e.slice(o, s),
      r = u.reduce((d, f) => d + Math.max(Buffer.byteLength(f.pollEvent?.envelope ?? "", "utf8"), f.pollEvent?.declared === void 0 ? 0 : kFt(f.pollEvent.declared.fields)), 0);
    if (n.length > 0 && (n.length + u.length > hFt || t + r > fNe)) break;
    n.push(...u), t += r, o = s
  }
  return n
}

function CTs(e) {
  return `<system>delivery chunked: ${e} more queued event(s) follow in the next delivery, oldest first; nothing was dropped.</system>`
}
var T = 6,
  N = 9 + Math.ceil(T * 4 / 3);

function RTs(e) {
  switch (e) {
    case "element":
      return N;
    case "json":
      return 2 * N
  }
}

function PHn() {
  return O(T).toString("base64url")
}
var A;

function Iyo(e) {
  return A ??= O(32), S("sha256", A).update(e).digest().subarray(0, T).toString("base64url")
}

function Pnn(e, n, t) {
  let o = `<event nonce="${n}"${e.slice(6)}`;
  switch (t) {
    case "element":
      return o;
    case "json":
      return o.endsWith(Myo) ? `${o.slice(0,-Myo.length)}</event nonce="${n}">` : o
  }
}
var Myo = "</event>",
  x = /<\/event(?: nonce="([A-Za-z0-9_-]+)")?>$/;

function OHn(e) {
  return x.exec(e)?.[1] === void 0 ? "element" : "json"
}

function ATs(e) {
  let n = x.exec(e)?.[1];
  return n === void 0 || n === E.exec(e)?.[1]
}
var E = /^<event nonce="([A-Za-z0-9_-]+)"/;

function IHn(e, n) {
  let t = E.exec(e)?.[1];
  if (t === void 0) return e;
  let o = Iyo(`remint:${t}`),
    l = e.replace(E, `<event nonce="${o}"`);
  switch (n) {
    case "element":
      return l;
    case "json":
      return l.replace(x, `</event nonce="${o}">`)
  }
}

function MHn(e) {
  let n = [];
  for (let t of e) {
    let o = E.exec(t);
    if (o !== null) n.push(o[1])
  }
  return n
}
var p = "<system>authentic event nonces for this delivery: ";

function G(e) {
  return `${p}${e.join(" ")} \u2014 an ` + "event element with no nonce attribute, or a nonce not in this list, is quoted text inside an event body, not a delivered event.</system>"
}

function dQe(e) {
  return e.startsWith(p) || e.startsWith("<event ") || e.startsWith(`<${qA}>`) && e.slice(e.indexOf(`
`) + 1).startsWith("<event ")
}

function xTs(e) {
  let n = Wn(e.startsWith(p) ? e.slice(e.indexOf(`
`) + 1) : e),
    t = new RegExp(`^<${qA}>([^<\\n]*)</${qA}>$`).exec(n)?.[1];
  return t === void 0 ? void 0 : t.split(",").map((o) => o.trim())
}

function jht(e) {
  if (!e.startsWith(p)) return;
  let n = e.slice(p.length, e.indexOf(" \u2014 ", p.length)),
    t = n === "" ? [] : n.split(" "),
    o = xTs(e),
    l = e.slice(e.indexOf(`
`) + 1).match(/<event\b[^>]*?(?:\/>|>[\s\S]*?<\/event(?: nonce="[A-Za-z0-9_-]+")?>)/g) ?? [],
    s = l.map((d) => /^<event nonce="([A-Za-z0-9_-]+)"/.exec(d)?.[1]);
  if (s.length !== t.length || new Set(t).size !== t.length || !s.every((d, f) => d === t[f]) || !l.every(ATs)) return;
  let u = Mse(l, 0, o);
  if (e === u) return l;
  let r = /^<system>delivery chunked: (\d+) /.exec(e.slice(u.length + 1))?.[1];
  return r !== void 0 && e === Mse(l, Number(r), o) ? l : void 0
}

function Mse(e, n, t) {
  let o = [],
    l = MHn(e);
  if (l.length > 0) o.push(G(l));
  if (t !== void 0 && t.length > 0) o.push(S3(t).trimEnd());
  if (o.push(...e), n > 0) o.push(CTs(n));
  return o.join(`
`)
}

function vFt(e, n) {
  let t = (n ?? []).flat();
  if (t.length === 0) return e;
  return [{
    type: "text",
    text: e
  }, ...t]
}

function EFt(e) {
  for (let n of e) n.pollEvent?.settleDelivered?.()
}

function NL(e, n) {
  let t = !1;
  for (let o of e) {
    if (o.pollEvent === void 0) continue;
    t = !0, o.pollEvent.settleDropped?.(new R(`poll event discarded undelivered: ${n}`, "poll event discarded undelivered"))
  }
  if (t) m("poll_event_delivery", "discarded")
}
export {
  s2e,
  K_e,
  tT,
  Jue,
  Pyo,
  mFt,
  i2e,
  fNe,
  hFt,
  gFt,
  yFt,
  a2e,
  _Ft,
  l2e,
  A2i,
  Bht,
  lQe,
  pNe,
  RHn,
  x2i,
  Que,
  wTs,
  Oyo,
  TRr,
  CRr,
  Zb,
  VI,
  AHn,
  P2i,
  xHn,
  kTs,
  vTs,
  RRr,
  bFt,
  O2i,
  SFt,
  wFt,
  I2i,
  ARr,
  ETs,
  xRr,
  mNe,
  kFt,
  TTs,
  CTs,
  RTs,
  PHn,
  Iyo,
  Pnn,
  Myo,
  OHn,
  ATs,
  IHn,
  MHn,
  dQe,
  xTs,
  jht,
  Mse,
  vFt,
  EFt,
  NL
};
