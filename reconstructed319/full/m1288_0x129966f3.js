// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  iOr,
  kE,
  zS,
  sT,
  TR,
  j3,
  Zbe,
  Qs,
  CVe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  tn,
  Tp
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  _e
} from "B:/~BUN/root/chunk-4vxp7kvb.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  yo
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Qt,
  qm,
  D4
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  wA
} from "B:/~BUN/root/chunk-z2c6k7e2.js";
import {
  Mt,
  ILe
} from "B:/~BUN/root/chunk-h6zqt1s4.js";
import {
  Gg,
  dk,
  WNt,
  sh,
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  ZE,
  PLt,
  pX,
  v1i,
  ALe,
  E1i,
  Nws,
  Amt,
  OLt,
  ven,
  lse,
  xmt,
  xv,
  iee,
  A1,
  HI
} from "B:/~BUN/root/chunk-0xtfwyhv.js";
import {
  wLt,
  sse,
  ZW
} from "B:/~BUN/root/chunk-hhd7smkx.js";
import {
  I1e
} from "B:/~BUN/root/chunk-syedbbsr.js";
import {
  mpi
} from "B:/~BUN/root/chunk-gjq813eb.js";
import {
  Qne,
  j4t,
  lg,
  f$,
  q4t,
  u1e,
  lve
} from "B:/~BUN/root/chunk-p383h22f.js";
import {
  pui,
  hui,
  Mrr,
  Drr
} from "B:/~BUN/root/chunk-dmmmg90e.js";
import {
  G6
} from "B:/~BUN/root/chunk-48nvqxgd.js";
import {
  _t
} from "B:/~BUN/root/chunk-3a409jmn.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
var Q = "__artifactAsk",
  J = ["Claude wants to upload a file to this artifact.", "Claude wants to copy files from another artifact into this one.", "Claude wants to edit this artifact's data."],
  Z = 64,
  dui = 3;

function X(e) {
  return e.length <= 2 ? e.join(" and ") : `${e.slice(0,-1).join(", ")}, and ${e.at(-1)}`
}
var F = /"[^"]*"/g,
  x = "Let Claude read the comments on ";

function cui(e) {
  return `${x}${e?`"${e}"`:"this artifact"}?`
}

function ee(e) {
  if (!e.startsWith(x)) return;
  for (let n of e.matchAll(new RegExp(`${F.source}|\\?(?=\\s)`, "g")))
    if (n[0] === "?") return n.index + 1;
  return
}

function S(e) {
  try {
    return e === void 0 ? void 0 : G6(e)
  } catch {
    return
  }
}

function Crr(e, n, t) {
  let s = te().askCards.get(n);
  if (s === void 0 || s.reason !== t || S(e) !== s.input) return;
  return s.card
}

function uui(e, n = (t) => t) {
  let {
    request: t,
    script: s,
    text: r,
    documents: a,
    files: i,
    file: d,
    source: u
  } = e, p = [];
  if (D(t) && typeof t.method === "string" && typeof t.path === "string") {
    let g = D(t.query) ? new URLSearchParams(Object.entries(t.query).flatMap(([h, o]) => {
        let k = typeof o === "string" ? o : _(o);
        return k === void 0 ? [] : [
          [h, k]
        ]
      })).toString() : "",
      c = n(g === "" ? t.path : `${t.path}?${g}`);
    if (/^[A-Za-z]{1,16}$/.test(t.method) && /^[^\s\p{Cc}]+$/u.test(c)) {
      if (p.push(`${t.method.toUpperCase()} ${c}`), t.body !== void 0) p.push(`Request body \xB7 ${N(L(t.body))}`)
    }
  }
  for (let g of [s, r])
    if (typeof g === "string" && g.trim() !== "") {
      let [c = "", ...h] = j(g.trim());
      p.push(`${N(h.length+1)} \xB7 ${c}`)
    } if (a !== void 0) p.push(`${a} ${P(a,"document")}`);
  if (i !== void 0) {
    let g = i.count - i.names.length,
      c = i.names.map((o) => `"${o}"`),
      h = X(g > 0 ? [...c, `${g} more`] : c);
    p.push(`${i.count} ${P(i.count,"file")} \xB7 ${h}`)
  }
  if (u !== void 0) p.push(`source: ${u}`);
  if (d !== void 0) p.push(`file: ${d}`);
  return p
}

function L(e, n = new WeakSet) {
  if (typeof e === "string") return j(e).length;
  if (typeof e !== "object" || e === null || n.has(e)) return 1;
  n.add(e);
  let t = Array.isArray(e) ? e : Object.values(e);
  return t.length === 0 ? 1 : t.reduce((s, r) => s + (typeof r === "string" ? 1 : L(r, n)), 2)
}

function j(e) {
  return e.split(/\r\n|[\r\n\u2028\u2029]/)
}

function N(e) {
  return `${e} ${e===1?"line":"lines"}`
}

function ne(e, n, t, s = te().askCardFacts.get(e)) {
  let r = te(),
    a = r.askClassCards.get(e),
    i = s?.target,
    d = s?.values ?? [],
    u = s?.audience ?? "";
  if (r.askClassCards.delete(e), r.askCardFacts.delete(e), s === void 0 || s.generic === !0 || n.behavior !== "ask" || n.decisionReason?.type !== "safetyCheck" && n.decisionReason?.type !== "other" || n.decisionReason.reason.trim() === "") return;
  let p = n.decisionReason.reason,
    g = p.indexOf(`

`),
    c = g === -1 ? p : p.slice(0, g),
    h = g === -1 ? [] : p.slice(g + 2).split(`
`).filter((b) => b !== ""),
    o = n.updatedInput ?? t,
    k = D(o) ? o[Q] : void 0,
    y;
  if (k === void 0) {
    let C = J.find((v) => c.startsWith(v))?.length ?? ee(c),
      A = C === void 0 ? c : c.slice(0, C),
      U = C === void 0 ? "" : c.slice(C).trim(),
      E = i?.title ?? "",
      T = E !== "" ? `"${E}"` : i?.url,
      R = [],
      I = (v) => h.some((Y) => Y.endsWith(v));
    if (T !== void 0 && !A.includes(T) && !I(T)) R.push(T);
    let O = i?.url;
    if (s?.foreign === !0 && O !== void 0 && !A.includes(O) && !R.includes(O) && !I(O)) R.push(O);
    if (U !== "") R.push(U);
    let V = u === "" || c.replace(F, "").includes(u);
    y = {
      question: A,
      lines: R,
      values: [...h, ...V ? d : [...d, u]]
    }
  } else if (a !== void 0 && a.reason === c && S(k) === a.stamp) {
    let [b, ...C] = a.parts, A = u === "" || a.saysPublic;
    y = b === void 0 ? void 0 : {
      question: b,
      lines: C,
      values: A ? d : [...d, u]
    }
  }
  let w = S(o);
  if (w !== void 0 && y !== void 0) sve(r.askCards, e, {
    input: w,
    card: y,
    reason: p
  })
}

function fui(e, n) {
  let t = e.checkPermissions;
  return l8r(e, {
    async checkPermissions(s, r) {
      let a = await t.call(this, s, r),
        i = r.toolUseId,
        d = a.behavior === "ask" ? a.updatedInput ?? s : null;
      if (i !== void 0 && D(d)) {
        let u;
        try {
          u = n(d, r)
        } catch {
          u = {
            values: [],
            generic: !0
          }
        }
        sve(te().askCardFacts, i, u)
      }
      return a
    }
  })
}

function Rrr(e) {
  let n = e.checkPermissions;
  return l8r(e, {
    async checkPermissions(t, s) {
      let r = s.toolUseId;
      if (r !== void 0) {
        let i = te();
        i.askCards.delete(r), i.askClassCards.delete(r), i.askCardFacts.delete(r)
      }
      let a = await n.call(this, t, s);
      if (r !== void 0) ne(r, a, t);
      return a
    }
  })
}

function sve(e, n, t) {
  if (e.delete(n), e.set(n, t), e.size > Z) {
    let s = e.keys().next().value;
    if (s !== void 0) e.delete(s)
  }
}

function l8r(e, n) {
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(n))
}

function d8r(e, n) {
  let t = Mt(e);
  return ILe(t, n.toolUseId) ? F4t(t) : {
    owned: void 0,
    public: void 0,
    outsideOrg: A1(t) || W(),
    outsideAudience: void 0,
    invitedByOtherOrg: t?.external === !0
  }
}

function F4t(e) {
  let n = e?.external === !0,
    t = e?.outsideAudience;
  if (e === void 0 || e.probeFailed === !0) return {
    owned: void 0,
    public: void 0,
    outsideOrg: A1(e) || W(),
    outsideAudience: void 0,
    invitedByOtherOrg: n
  };
  let s = e.mode === "unknown" ? void 0 : e.mode === "public",
    r = A1(e);
  if (e.role === void 0) return {
    owned: s === !0 ? !1 : void 0,
    public: s,
    outsideOrg: r,
    outsideAudience: t,
    invitedByOtherOrg: n
  };
  return {
    owned: e.role === "unknown" ? void 0 : e.role === "owner",
    public: s,
    outsideOrg: r,
    outsideAudience: t,
    invitedByOtherOrg: n,
    ...(e.role === "owner" || e.role === "writer") && {
      canWrite: !0
    }
  }
}

function W() {
  return wA() ? void 0 : !1
}

function BM(e, n, t) {
  let s = d8r(n.slug, t);
  return {
    operation: e,
    artifactId: n.slug,
    owned: s.owned,
    public: s.public,
    outsideOrg: s.outsideOrg,
    outsideAudience: s.outsideAudience,
    invitedByOtherOrg: s.invitedByOtherOrg,
    networkOff: H4t(n),
    turnStartedByHuman: sT(t.messages),
    ...s.canWrite === !0 && {
      canWrite: !0
    }
  }
}
var oe = new Set(["scheduled", "retry", "catch_up", "manual"]);

function M(e) {
  return e?.kind === "task-notification" && e.subkind === "scheduled-trigger" && e.fireReason !== void 0 && oe.has(e.fireReason)
}

function l1e(e) {
  if (Arr(e)) return !1;
  if (!M(TR(e.messages).decider?.origin)) return !1;
  let n = te();
  if (!n.routineRunTainted && !j3(e.messages, (t, s) => zS(s) || M(t))) n.routineRunTainted = !0;
  return !n.routineRunTainted
}

function ARt() {
  if (CVe() !== void 0) return !1;
  if (tn()) return sse() && re() && iOr();
  return !Tp() && xv() && Te() === "firstParty" && kE() === "env"
}

function B() {
  return wLt("POST", "/api/frame/deploy/direct")
}

function q(e) {
  return te().frameRelay.servedUntil.get(e) ?? 0
}

function re() {
  let e = B();
  if (e === null || ZW(e)) return !1;
  let n = te().routineRelayNotCarried;
  return n === null || q(e) > n.servedUntil
}

function X5o() {
  let e = B();
  te().routineRelayNotCarried = {
    servedUntil: e === null ? 0 : q(e)
  }
}

function Arr(e) {
  let {
    mode: n,
    modeBeforeRewrite: t
  } = se(e);
  return yo(n) || t !== void 0 && yo(t)
}

function xRt(e, n) {
  if (Arr(e)) return !1;
  let {
    messages: t
  } = e, s = TR(t).decider;
  if (s === null || t[s.index]?.type !== "user" || s.origin?.kind !== "task-notification") return !1;
  let r = s.index;
  for (; r > 0; r--) {
    let i = t[r - 1];
    if (i == null || i.type === "assistant" || i.type === "user" && !Zbe(i) && i.origin?.kind !== "task-notification") break
  }
  let a = t.slice(r);
  return j3(a, (i, d) => d.type === "user" && i?.kind === "task-notification" && i.subkind === void 0 && pui(d.uuid) === n) && ie(a, n)
}

function ie(e, n) {
  let t = e[0] === void 0 ? NaN : Date.parse(e[0].timestamp),
    s = Drr();
  if (s !== void 0 && !(Number.isFinite(t) && s < t)) return !1;
  if (Mrr(n, t)) return !1;
  let r = !1;
  for (let a of e) {
    if (a?.type !== "assistant" || !Array.isArray(a.message.content)) continue;
    for (let i of a.message.content)
      if (i.type === "tool_use" && ae(i.name, i.input)) {
        let d = hui(i.id);
        if (d?.ownWordsOnly !== !0 || d.slug !== n) return !1;
        r = !0
      }
  }
  return r
}

function ae(e, n) {
  let t = e === qm ? I1e("comments", n) : e === Qt ? n : void 0;
  return typeof t === "object" && t !== null && "action" in t && t.action === "comments"
}
var d3e = !0;

function O8(e, n) {
  return e.ask && e.basis === "unattended" || d3e && se(n).mode === "plan"
}
var c8r = !0;

function UK(e) {
  return c8r && se(e).mode === "plan"
}

function c3e(e, n, t, s, r = () => ZE(BM("read", n, e))) {
  return !t && s && !UK(e) ? r() : null
}

function K(e) {
  return xv() && sh(e)
}

function ive(e, n, t) {
  let s = K(e) && !sT(e.messages);
  if (!s && !dk(e)) return null;
  let r = t.endsWith(".") ? t : `${t}.`;
  return {
    behavior: "deny",
    message: `${n}. This needs a yes to: ${r} ${s?"No one can answer that prompt in this Cowork session, and this turn was not started by the user's own message \u2014 tell the user in chat; do not retry it on this turn.":"No one can answer that prompt from plan mode in this session \u2014 keep planning in the plan file and raise it with the user in chat; do not retry while plan mode is on."}`,
    decisionReason: {
      type: "safetyCheck",
      reason: s ? "Artifact call with a new-comments notice pending, on a turn the user's own message did not start, in a Cowork session that has no one to answer its prompt" : "Notification-triggered artifact call in plan mode has no one to answer its prompt",
      classifierApprovable: !1
    }
  }
}

function d1e(e, n, t) {
  if (!u8r(e, t)) return null;
  return {
    behavior: "deny",
    message: `${n}. Reading content of an artifact the user does not own, or whose ownership couldn't be confirmed, needs a person's yes, and no one can answer the prompt in this session \u2014 tell the user in chat instead of retrying.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "Reading content of an artifact that is not confirmed to be the user's own requires a live human consent surface in this session",
      classifierApprovable: !1
    }
  }
}

function u8r(e, n) {
  return sh(e) && (xv() || n)
}

function H4t(e) {
  return mpi(e?.env)
}
var H = "this artifact",
  de = "no one was asked first \u2014 nothing was returned; retry the same action so the user is asked",
  ue = "no one can be asked about it in this session \u2014 nothing was returned; do not retry it here",
  le = "a PermissionRequest hook answered the permission prompt in the user's place; only the user's own approval allows this read \u2014 nothing was returned; do not retry it here, and tell the user their hook answered for them (to approve it themselves they would narrow the hook so it no longer answers this prompt)";

function PRt(e, n, t, s) {
  if (he(n, t)) return !0;
  if (lse(WNt(n), s === "page" ? "artifactReadConsentSlugs" : "artifactAssetReadHumanConsentSlugs", t)) return !0;
  if (sh(n) || lve(n)) return !1;
  return j4t(e, n) || !yo(se(n).mode) && !ce(e) && Qne(e, n)
}

function G(e) {
  let n = e.toolUseId === void 0 ? void 0 : e.toolDecisions?.get(e.toolUseId);
  return n?.source === "hook" && n.decision !== "reject"
}

function $4t(e, n = !1, t) {
  let s = G(e),
    r = n ? !Gg(e) || sh(e) && !yo(se(e).mode) : sh(e);
  if (!n) return `this turned out to be a public artifact from outside your organization, and ${r?ue:s?le:de}`;
  let a = t === void 0 ? "nothing was copied" : "nothing was published",
    i = t === void 0 ? "Retry the same action so that question is asked." : t.retryUrl !== void 0 ? `Retry publishing with url: ${_(t.retryUrl)} so that question is asked.` : "Retry the same publish so that question is asked.";
  return r ? `the source artifact belongs to another organization and nobody can be asked about copying from it in this session, so ${a}. Don't retry it here.` : `the source artifact belongs to another organization and nobody was asked whether to copy from another organization's artifact, so ${a}. ${i}`
}

function xrr(e, n, t) {
  return HI(Mt(n)) && (t || f8r(e, n))
}

function f8r(e, n) {
  return Nws(n) || lse(WNt(e), "artifactOutsideOrgConsentSlugs", n)
}

function ce(e) {
  let n = Reflect.get(e, f$);
  return typeof n === "object" && n !== null && Reflect.get(n, "classifier") === !0
}
var Prr = "This artifact was created outside your organization.";

function Orr(e, n, t) {
  let s = D4(n),
    r = s ? `"${s}"` : H,
    a = s ? `"${s}"` : "This artifact",
    i = `Let Claude read it${t?` and ${t}`:""}?`;
  switch (e) {
    case "someone_else":
      return `${a} was made by someone else. ${i}`;
    case "unknown":
      return `Claude couldn't check who made ${r}. ${i}`;
    case "cowritten":
      return `Other people can edit ${r}. ${i}`;
    case "from_type":
      return `${a} was made from someone else's artifact type. ${i}`
  }
}

function J5o(e) {
  return `Approving covers its files${e?", and copying them into other artifacts,":""} for the rest of the conversation.`
}

function fe(e, n, t) {
  let s = pe(e, n, t);
  if (e.remember !== "artifact") return s;
  let r = iee() ? "task" : "conversation";
  return s.replace(/\?$/, ` for the rest of this ${r}?`)
}

function z(e) {
  return e.class === "public_change" && e.basis !== "unattended" && e.about !== "someone_else" && e.about !== "outside_audience" && e.missing !== "public" && e.missing !== "outsideAudience"
}

function pe(e, n, t) {
  let s = D4(n),
    r = s ? `"${s}"` : H,
    a = s ? `"${s}"` : "This artifact";
  switch (e.class) {
    case "delete":
      return `Permanently delete ${s||t===void 0?r:t}?`;
    case "public_change":
      if (z(e)) return `${a} is public. Allow Claude to change it?`;
      if (e.basis === "unattended") return `Allow Claude to change ${r}?`;
      if (e.about === "outside_audience") return `${a} can be seen outside your organization. Allow Claude to change it?`;
      if (e.about === "someone_else") return e.missing === "owned" ? `Claude couldn't check who made ${r}. Allow Claude to change it?` : `${a} was made by someone else. Allow Claude to change it?`;
      return `Claude couldn't check who can see ${r}. Allow Claude to change it?`;
    case "access_change":
      return `Allow Claude to change who can open or comment on ${r}?`;
    case "standing_job":
      return `Allow Claude to keep replying to comments on ${r}?`;
    case "foreign_read":
      return Orr(e.missing === "owned" ? "unknown" : "someone_else", n)
  }
}

function ge(e) {
  return e.about === "outside_org" ? Prr : void 0
}

function t2(e) {
  return Oat(e.input, e.context, [e])
}

function Oat(e, n, t) {
  if (n.toolUseId !== void 0) te().askClassPending.delete(n.toolUseId), te().askClassCards.delete(n.toolUseId);
  let s = [];
  for (let o of t)
    if (!o.ruling.ask) {
      if (o.ruling.foreignRead) U4t(o.action, o.slug, o.ownerAccountId, o.ruling.attested)
    } else if (o.ruling.remember !== "artifact" || !(o.consentHeld ?? ALe(o.ruling, o.slug, o.userOnly === !0)) || o.heldYesDoesNotCover === !0) s.push({
    ...o,
    ruling: o.ruling
  });
  if (s.length === 0) return {
    behavior: "allow",
    updatedInput: {
      ...e,
      [lg]: !1
    }
  };
  let r = (o) => o.ruling.answeredBy === "person" || o.userOnly === !0;
  s.sort((o, k) => Number(r(k)) - Number(r(o)));
  let a = s.some(r),
    i = s.map((o) => ({
      display: o.display,
      question: fe(o.ruling, o.display.title, o.display.url),
      note: ge(o.ruling),
      linked: o.ruling.class === "foreign_read" || o.ruling.about === "someone_else" || o.ruling.missing === "owned",
      reach: o.note
    })),
    d = i.flatMap((o) => o.reach === void 0 ? [o.question] : [o.question, o.reach]).join(" ");
  if (a ? sh(n) : dk(n) || s.some((o) => o.ruling.class === "foreign_read") && K(n)) return {
    behavior: "deny",
    message: `Nothing was done. This needs a yes to: ${i.map((o)=>o.question).join(" ")} No one can answer in this session.`,
    decisionReason: {
      type: "safetyCheck",
      reason: `Artifact ${s.map((o)=>o.ruling.class).join(", ")} ask has no one to answer it`,
      classifierApprovable: !1
    }
  };
  let p = Gg(n),
    g = xmt(),
    c = s.map((o) => ({
      class: o.ruling.class,
      remember: o.ruling.remember,
      ...o.ruling.endpoint && {
        endpoint: !0
      },
      slug: o.slug,
      url: o.display.url,
      ...o.display.title !== void 0 && {
        title: o.display.title
      },
      reachable: p,
      askedIn: g
    }));
  Amt(n, s.filter((o) => ("about" in o.ruling) && o.ruling.about === "outside_org" && !o.ruling.endpoint).map((o) => o.slug), p);
  let h = c.length === 1 ? c[0] : c;
  if (n.toolUseId !== void 0) {
    if (sve(te().askClassPending, n.toolUseId, c), a) sve(te().askClassPersonAsked, n.toolUseId, !0);
    else te().askClassPersonAsked.delete(n.toolUseId);
    if (yo(se(n).mode)) te().askClassNoClassifier.delete(n.toolUseId);
    else sve(te().askClassNoClassifier, n.toolUseId, !0);
    let o = S(h);
    if (o !== void 0) {
      let k = i.flatMap(({
        display: y,
        question: w,
        note: b,
        linked: C,
        reach: A
      }) => [w, ...b === void 0 ? [] : [b], ...w.includes(y.url) || !C && D4(y.title) ? [] : [y.url], ...A === void 0 ? [] : [A]]);
      sve(te().askClassCards, n.toolUseId, {
        stamp: o,
        parts: k,
        saysPublic: s.some((y) => z(y.ruling)),
        reason: d
      })
    }
  }
  return {
    behavior: "ask",
    message: d,
    updatedInput: {
      ...e,
      [lg]: !1,
      [q4t]: h
    },
    ...s.some((o) => o.ruling.class === "delete" || o.ruling.class === "access_change") && {
      defaultToNo: !0
    },
    ...s.some((o) => o.ruling.class === "access_change") && {
      personOnly: !0
    },
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !0,
    decisionReason: {
      type: "safetyCheck",
      reason: d,
      classifierApprovable: !a
    }
  }
}

function Q5o(e) {
  if (e.toolUseId === void 0) return;
  let n = te(),
    t = n.askClassPending,
    s = t.get(e.toolUseId) ?? [];
  t.delete(e.toolUseId);
  let r = n.askClassPersonAsked.get(e.toolUseId);
  n.askClassPersonAsked.delete(e.toolUseId);
  let a = n.askClassNoClassifier.get(e.toolUseId);
  n.askClassNoClassifier.delete(e.toolUseId);
  let i = u1e(e),
    d = !sh(e) && !lve(e) && (i || r === !0 || a === !0 && !yo(se(e).mode));
  if (s[0]?.reachable !== !0 || s[0].askedIn !== xmt() || !Gg(e)) return;
  if (sve(n.askClassTaken, e.toolUseId, s), d) sve(n.askClassTakenByPerson, e.toolUseId, !0);
  if (Qs(e.agentContext)) return;
  for (let u of s)
    if (u.remember === "artifact" && (i || !u.endpoint)) {
      if (v1i(PLt(u), u.slug, d), !u.endpoint && OLt(e, u.slug) && (d || r !== !0 && !G(e))) E1i(u.slug)
    }
}

function Z5o(e, n, t) {
  return me(e, n, t)
}

function me(e, n, t) {
  let s = e.toolUseId === void 0 ? void 0 : te().askClassTaken.get(e.toolUseId);
  return s !== void 0 && s.some((r) => PLt(r) === n && r.slug === t && r.remember === "artifact") && pX(n, t)
}

function he(e, n) {
  let t = te();
  return e.toolUseId !== void 0 && t.askClassTakenByPerson.get(e.toolUseId) === !0 && (t.askClassTaken.get(e.toolUseId)?.some((r) => PLt(r) === "foreign_read" && r.slug === n) ?? !1) || u1e(e) || ven("foreign_read", n)
}

function O_a(e, n, t) {
  if (e.toolUseId === void 0) return;
  let s = te();
  sve(s.askClassPending, e.toolUseId, [{
    class: "foreign_read",
    remember: "this_call",
    slug: n,
    url: t,
    reachable: Gg(e),
    askedIn: xmt()
  }]), sve(s.askClassPersonAsked, e.toolUseId, !0)
}

function e8o(e, n) {
  l("tengu_artifact_routine_write_unasked", {
    db_op: f(e),
    artifact_id: _e(n)
  })
}

function t8o(e, n) {
  l("tengu_artifact_comment_write_unasked", {
    db_op: f(e),
    artifact_id: _e(n)
  })
}

function n8o(e) {
  l("tengu_artifact_comment_publish_unasked", {
    artifact_id: _e(e)
  })
}

function r8o(e) {
  te().commentRepublishedPaths.add(e)
}

function p8r(e) {
  te().routineRepublishedPaths.add(e)
}

function o8o(e) {
  if (e === void 0) return;
  let n = te();
  n.askClassPending.delete(e), n.askClassCards.delete(e), n.askClassPersonAsked.delete(e), n.askClassNoClassifier.delete(e), n.askNamedOtherOrg.delete(e)
}

function s8o(e) {
  l("tengu_artifact_routine_publish_unasked", {
    artifact_id: _e(e)
  })
}

function m8r() {
  return _t("tengu_proud_honey", {
    safe: !1
  })
}

function i8o(e, n) {
  let t = f(n ?? "absent");
  if (l("tengu_artifact_quiet_caps_publish_unasked", {
      artifact_id: _e(e),
      mode: t
    }), n === "owner" || n === "empty") return;
  m("artifact_publish", "quiet_caps_publish_not_owner_only", {
    mode: t
  }), te().quietCapsCardKept = !0
}

function c1e(e, n, t) {
  let s = f(n ?? "absent");
  if (l("tengu_artifact_routine_first_publish_unasked", {
      ...e !== void 0 && {
        artifact_id: _e(e)
      },
      mode: s,
      ...t?.fromType && {
        from_type: !0
      }
    }), n === "owner" || n === "refused_before_send") return;
  if (n !== "stranded" && n !== "refused_shape" && n !== "unknown_outcome") m("artifact_publish", "routine_first_publish_not_owner_only", {
    mode: s,
    ...t?.fromType && {
      from_type: !0
    }
  });
  te().routineRunTainted = !0
}

function U4t(e, n, t, s) {
  l("tengu_artifact_foreign_read_unasked", {
    action: f(e),
    artifact_id: _e(n),
    ...t !== void 0 && {
      owner_account_id: _e(t)
    },
    ...s && {
      attested: !0
    }
  })
}
export {
  dui,
  cui,
  Crr,
  uui,
  fui,
  Rrr,
  sve,
  l8r,
  d8r,
  F4t,
  BM,
  l1e,
  ARt,
  X5o,
  Arr,
  xRt,
  d3e,
  O8,
  c8r,
  UK,
  c3e,
  ive,
  d1e,
  u8r,
  H4t,
  PRt,
  $4t,
  xrr,
  f8r,
  Prr,
  Orr,
  J5o,
  t2,
  Oat,
  Q5o,
  Z5o,
  O_a,
  e8o,
  t8o,
  n8o,
  r8o,
  p8r,
  o8o,
  s8o,
  m8r,
  i8o,
  c1e,
  U4t
};
