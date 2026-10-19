// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { nYn, zC, VT, MD, uB, idn, vht, vs, Iht } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { $s } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { cn, x_, wW } from "B:/~BUN/root/chunk-qp0344nb.js";
import { BE } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { kt } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { jg, MS, amt, Fh, le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { ov, Rmt, MK, FHs, kke, HHs, xxo, Q9e, Amt, aFt, UX, Z9e, $C, T3, UN, sA } from "B:/~BUN/root/chunk-66hg7026.js";
import { iAt, Q7, eU } from "B:/~BUN/root/chunk-neajqqs3.js";
import { PAe } from "B:/~BUN/root/chunk-36awbxtc.js";
import { gds } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { FY, uFe, Wp, L0, WCt, lAe, tue } from "B:/~BUN/root/chunk-cfst22ma.js";
import { rpr } from "B:/~BUN/root/chunk-7sgsvmmg.js";
import { Uis, jis, MPn, DPn } from "B:/~BUN/root/chunk-21sxe603.js";
import { fr, Nx } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { ye } from "B:/~BUN/root/chunk-shj1mfyk.js";
var Q = "__artifactAsk",
  Z = ["Claude wants to upload a file to this artifact.", "Claude wants to copy files from another artifact into this one.", "Claude wants to edit this artifact's data."],
  X = 64,
  Dis = 3;
function ne(e) {
  return e.length <= 2 ? e.join(" and ") : `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
var F = /"[^"]*"/g,
  L = "Let Claude read the comments on ";
function Lis(e) {
  return `${L}${e ? `"${e}"` : "this artifact"}?`;
}
function te(e) {
  if (!e.startsWith(L)) return;
  for (let n of e.matchAll(new RegExp(`${F.source}|\\?(?=\\s)`, "g"))) if (n[0] === "?") return n.index + 1;
  return;
}
function P(e) {
  try {
    return e === void 0 ? void 0 : rpr(e);
  } catch {
    return;
  }
}
function wPn(e, n, t) {
  let s = ee().askCards.get(n);
  if (s === void 0 || s.reason !== t || P(e) !== s.input) return;
  return s.card;
}
function Nis(e, n = t => t) {
  let {
      request: request,
      script: script,
      text: text,
      documents: documents,
      files: files,
      file: file,
      source: source
    } = e,
    p = [];
  if (N(request) && typeof request.method === "string" && typeof request.path === "string") {
    let g = N(request.query) ? new URLSearchParams(Object.entries(request.query).flatMap(([h, o]) => {
        let k = typeof o === "string" ? o : _(o);
        return k === void 0 ? [] : [[h, k]];
      })).toString() : "",
      f = n(g === "" ? request.path : `${request.path}?${g}`);
    if (/^[A-Za-z]{1,16}$/.test(request.method) && /^[^\s\p{Cc}]+$/u.test(f)) {
      if (p.push(`${request.method.toUpperCase()} ${f}`), request.body !== void 0) p.push(`Request body \xB7 ${I(j(request.body))}`);
    }
  }
  for (let g of [script, text]) if (typeof g === "string" && g.trim() !== "") {
    let [f = "", ...h] = x(g.trim());
    p.push(`${I(h.length + 1)} \xB7 ${f}`);
  }
  if (documents !== void 0) p.push(`${documents} ${O(documents, "document")}`);
  if (files !== void 0) {
    let g = files.count - files.names.length,
      f = files.names.map(item => `"${item}"`),
      h = ne(g > 0 ? [...f, `${g} more`] : f);
    p.push(`${files.count} ${O(files.count, "file")} \xB7 ${h}`);
  }
  if (source !== void 0) p.push(`source: ${source}`);
  if (file !== void 0) p.push(`file: ${file}`);
  return p;
}
function j(e, n = new WeakSet()) {
  if (typeof e === "string") return x(e).length;
  if (typeof e !== "object" || e === null || n.has(e)) return 1;
  n.add(e);
  let t = Array.isArray(e) ? e : Object.values(e);
  return t.length === 0 ? 1 : t.reduce((acc, item) => acc + (typeof item === "string" ? 1 : j(item, n)), 2);
}
function x(e) {
  return e.split(/\r\n|[\r\n\u2028\u2029]/);
}
function I(e) {
  return `${e} ${e === 1 ? "line" : "lines"}`;
}
function se(e, n, t, s = ee().askCardFacts.get(e)) {
  let r = ee(),
    d = r.askClassCards.get(e),
    a = s?.target,
    u = s?.values ?? [],
    l = s?.audience ?? "";
  if (r.askClassCards.delete(e), r.askCardFacts.delete(e), s === void 0 || s.generic === !0 || n.behavior !== "ask" || n.decisionReason?.type !== "safetyCheck" && n.decisionReason?.type !== "other" || n.decisionReason.reason.trim() === "") return;
  let reason = n.decisionReason.reason,
    g = reason.indexOf(`

`),
    f = g === -1 ? reason : reason.slice(0, g),
    h = g === -1 ? [] : reason.slice(g + 2).split(`
`).filter(item => item !== ""),
    o = n.updatedInput ?? t,
    k = N(o) ? o[Q] : void 0,
    card;
  if (k === void 0) {
    let b = Z.find(item => f.startsWith(item))?.length ?? te(f),
      question = b === void 0 ? f : f.slice(0, b),
      v = b === void 0 ? "" : f.slice(b).trim(),
      U = a?.title ?? "",
      T = U !== "" ? `"${U}"` : a?.url,
      lines = [],
      E = D => h.some(item => item.endsWith(D));
    if (T !== void 0 && !question.includes(T) && !E(T)) lines.push(T);
    let S = a?.url;
    if (s?.foreign === !0 && S !== void 0 && !question.includes(S) && !lines.includes(S) && !E(S)) lines.push(S);
    if (v !== "") lines.push(v);
    let Y = l === "" || f.replace(F, "").includes(l);
    card = {
      question: question,
      lines: lines,
      values: [...h, ...(Y ? u : [...u, l])]
    };
  } else if (d !== void 0 && d.reason === f && P(k) === d.stamp) {
    let [question_2, ...lines_2] = d.parts,
      A = l === "" || d.saysPublic;
    card = question_2 === void 0 ? void 0 : {
      question: question_2,
      lines: lines_2,
      values: A ? u : [...u, l]
    };
  }
  let input = P(o);
  if (input !== void 0 && card !== void 0) Zce(r.askCards, e, {
    input: input,
    card: card,
    reason: reason
  });
}
function Fis(e, n) {
  let checkPermissions = e.checkPermissions;
  return Fcr(e, {
    async checkPermissions(s, r) {
      let d = await checkPermissions.call(this, s, r),
        toolUseId = r.toolUseId,
        u = d.behavior === "ask" ? d.updatedInput ?? s : null;
      if (toolUseId !== void 0 && N(u)) {
        let l;
        try {
          l = n(u, r);
        } catch {
          l = {
            values: [],
            generic: !0
          };
        }
        Zce(ee().askCardFacts, toolUseId, l);
      }
      return d;
    }
  });
}
function vPn(e) {
  let checkPermissions_2 = e.checkPermissions;
  return Fcr(e, {
    async checkPermissions(t, s) {
      let toolUseId_2 = s.toolUseId;
      if (toolUseId_2 !== void 0) {
        let a = ee();
        a.askCards.delete(toolUseId_2), a.askClassCards.delete(toolUseId_2), a.askCardFacts.delete(toolUseId_2);
      }
      let d = await checkPermissions_2.call(this, t, s);
      if (toolUseId_2 !== void 0) se(toolUseId_2, d, t);
      return d;
    }
  });
}
function Zce(e, n, t) {
  if (e.delete(n), e.set(n, t), e.size > X) {
    let s = e.keys().next().value;
    if (s !== void 0) e.delete(s);
  }
}
function Fcr(e, n) {
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(n));
}
function Hcr(e, n) {
  let t = kt(e);
  return n.toolUseId !== void 0 && t?.lastProbeToolUseId === n.toolUseId ? ICt(t) : {
    owned: void 0,
    public: void 0,
    outsideOrg: UN(t) || W(),
    invitedByOtherOrg: t?.external === !0
  };
}
function ICt(e) {
  let invitedByOtherOrg = e?.external === !0;
  if (e === void 0 || e.probeFailed === !0) return {
    owned: void 0,
    public: void 0,
    outsideOrg: UN(e) || W(),
    invitedByOtherOrg: invitedByOtherOrg
  };
  let t = e.mode === "unknown" ? void 0 : e.mode === "public",
    outsideOrg = UN(e);
  if (e.role === void 0) return {
    owned: t === !0 ? !1 : void 0,
    public: t,
    outsideOrg: outsideOrg,
    invitedByOtherOrg: invitedByOtherOrg
  };
  return {
    owned: e.role === "unknown" ? void 0 : e.role === "owner",
    public: t,
    outsideOrg: outsideOrg,
    invitedByOtherOrg: invitedByOtherOrg,
    ...((e.role === "owner" || e.role === "writer") && {
      canWrite: !0
    })
  };
}
function W() {
  return BE() ? void 0 : !1;
}
function KA(operation, n, t) {
  let s = Hcr(n.slug, t);
  return {
    operation: operation,
    artifactId: n.slug,
    owned: s.owned,
    public: s.public,
    outsideOrg: s.outsideOrg,
    invitedByOtherOrg: s.invitedByOtherOrg,
    networkOff: MCt(n),
    turnStartedByHuman: MD(t.messages),
    ...(s.canWrite === !0 && {
      canWrite: !0
    })
  };
}
var oe = new Set(["scheduled", "retry", "catch_up", "manual"]);
function M(e) {
  return e?.kind === "task-notification" && e.subkind === "scheduled-trigger" && e.fireReason !== void 0 && oe.has(e.fireReason);
}
function ast(e) {
  if (q(e)) return !1;
  if (!M(uB(e.messages).decider?.origin)) return !1;
  let n = ee();
  if (!n.routineRunTainted && !idn(e.messages, (t, s) => VT(s) || M(t))) n.routineRunTainted = !0;
  return !n.routineRunTainted;
}
function $cr() {
  if (Iht() !== void 0) return !1;
  if (fr()) return Q7() && re() && nYn();
  return !Nx() && $C() && xe() === "firstParty" && zC() === "env";
}
function B() {
  return iAt("POST", "/api/frame/deploy/direct");
}
function K(e) {
  return ee().frameRelay.servedUntil.get(e) ?? 0;
}
function re() {
  let e = B();
  if (e === null || eU(e)) return !1;
  let routineRelayNotCarried = ee().routineRelayNotCarried;
  return routineRelayNotCarried === null || K(e) > routineRelayNotCarried.servedUntil;
}
function $Zr() {
  let e = B();
  ee().routineRelayNotCarried = {
    servedUntil: e === null ? 0 : K(e)
  };
}
function q(e) {
  let {
    mode: mode,
    modeBeforeRewrite: modeBeforeRewrite
  } = le(e);
  return $s(mode) || modeBeforeRewrite !== void 0 && $s(modeBeforeRewrite);
}
function lst(e, n) {
  if (q(e)) return !1;
  let {
      messages: messages
    } = e,
    decider = uB(messages).decider;
  if (decider === null || messages[decider.index]?.type !== "user" || decider.origin?.kind !== "task-notification") return !1;
  let index = decider.index;
  for (; index > 0; index--) {
    let a = messages[index - 1];
    if (a == null || a.type === "assistant" || a.type === "user" && !vht(a) && a.origin?.kind !== "task-notification") break;
  }
  let d = messages.slice(index);
  return idn(d, (a, u) => u.type === "user" && a?.kind === "task-notification" && a.subkind === void 0 && Uis(u.uuid) === n) && ie(d, n);
}
function ie(e, n) {
  let t = e[0] === void 0 ? NaN : Date.parse(e[0].timestamp),
    s = DPn();
  if (s !== void 0 && !(Number.isFinite(t) && s < t)) return !1;
  if (MPn(n, t)) return !1;
  let r = !1;
  for (let d of e) {
    if (d?.type !== "assistant" || !Array.isArray(d.message.content)) continue;
    for (let a of d.message.content) if (a.type === "tool_use" && ae(a.name, a.input)) {
      let u = jis(a.id);
      if (u?.ownWordsOnly !== !0 || u.slug !== n) return !1;
      r = !0;
    }
  }
  return r;
}
function ae(e, n) {
  let t = e === x_ ? PAe("comments", n) : e === cn ? n : void 0;
  return typeof t === "object" && t !== null && "action" in t && t.action === "comments";
}
var cFe = !0;
function YV(e, n) {
  return e.ask && e.basis === "unattended" || cFe && le(n).mode === "plan";
}
var Ucr = !0;
function x1(e) {
  return Ucr && le(e).mode === "plan";
}
function aAe(e, n, t, s, r = () => ov(KA("read", n, e))) {
  return !t && s && !x1(e) ? r() : null;
}
function H(e) {
  return $C() && Fh(e);
}
function Doe(e, n, t) {
  let s = H(e) && !MD(e.messages);
  if (!s && !MS(e)) return null;
  let r = t.endsWith(".") ? t : `${t}.`;
  return {
    behavior: "deny",
    message: `${n}. This needs a yes to: ${r} ${s ? "No one can answer that prompt in this Cowork session, and this turn was not started by the user's own message \u2014 tell the user in chat; do not retry it on this turn." : "No one can answer that prompt from plan mode in this session \u2014 keep planning in the plan file and raise it with the user in chat; do not retry while plan mode is on."}`,
    decisionReason: {
      type: "safetyCheck",
      reason: s ? "Artifact call with a new-comments notice pending, on a turn the user's own message did not start, in a Cowork session that has no one to answer its prompt" : "Notification-triggered artifact call in plan mode has no one to answer its prompt",
      classifierApprovable: !1
    }
  };
}
function bbe(e, n, t) {
  if (!Bcr(e, t)) return null;
  return {
    behavior: "deny",
    message: `${n}. Reading content of an artifact the user does not own, or whose ownership couldn't be confirmed, needs a person's yes, and no one can answer the prompt in this session \u2014 tell the user in chat instead of retrying.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "Reading content of an artifact that is not confirmed to be the user's own requires a live human consent surface in this session",
      classifierApprovable: !1
    }
  };
}
function Bcr(e, n) {
  return Fh(e) && ($C() || n);
}
function MCt(e) {
  return gds(e?.env);
}
var G = "this artifact",
  de = "no one was asked first \u2014 nothing was returned; retry the same action so the user is asked",
  ue = "no one can be asked about it in this session \u2014 nothing was returned; do not retry it here",
  ce = "a PermissionRequest hook answered the permission prompt in the user's place; only the user's own approval allows this read \u2014 nothing was returned; do not retry it here, and tell the user their hook answered for them (to approve it themselves they would narrow the hook so it no longer answers this prompt)";
function dst(e, n, t, s) {
  if (ke(n, t)) return !0;
  if (UX(amt(n), s === "page" ? "artifactReadConsentSlugs" : "artifactAssetReadHumanConsentSlugs", t)) return !0;
  if (Fh(n) || tue(n)) return !1;
  return uFe(e, n) || !$s(le(n).mode) && !fe(e) && FY(e, n);
}
function z(e) {
  let n = e.toolUseId === void 0 ? void 0 : e.toolDecisions?.get(e.toolUseId);
  return n?.source === "hook" && n.decision !== "reject";
}
function DCt(e, n = !1, t) {
  let s = z(e),
    r = n ? !jg(e) || Fh(e) && !$s(le(e).mode) : Fh(e);
  if (!n) return `this turned out to be a public artifact from outside your organization, and ${r ? ue : s ? ce : de}`;
  let d = t === void 0 ? "nothing was copied" : "nothing was published",
    a = t === void 0 ? "Retry the same action so that question is asked." : t.retryUrl !== void 0 ? `Retry publishing with url: ${_(t.retryUrl)} so that question is asked.` : "Retry the same publish so that question is asked.";
  return r ? `the source artifact belongs to another organization and nobody can be asked about copying from it in this session, so ${d}. Don't retry it here.` : `the source artifact belongs to another organization and nobody was asked whether to copy from another organization's artifact, so ${d}. ${a}`;
}
function kPn(e, n, t) {
  return sA(kt(n)) && (t || jcr(e, n));
}
function jcr(e, n) {
  return xxo(n) || UX(amt(e), "artifactOutsideOrgConsentSlugs", n);
}
function fe(e) {
  let n = Reflect.get(e, L0);
  return typeof n === "object" && n !== null && Reflect.get(n, "classifier") === !0;
}
var EPn = "This artifact was created outside your organization.";
function TPn(e, n, t) {
  let s = wW(n),
    r = s ? `"${s}"` : G,
    d = s ? `"${s}"` : "This artifact",
    a = `Let Claude read it${t ? ` and ${t}` : ""}?`;
  switch (e) {
    case "someone_else":
      return `${d} was made by someone else. ${a}`;
    case "unknown":
      return `Claude couldn't check who made ${r}. ${a}`;
    case "cowritten":
      return `Other people can edit ${r}. ${a}`;
    case "from_type":
      return `${d} was made from someone else's artifact type. ${a}`;
  }
}
function UZr(e) {
  return `Approving covers its files${e ? ", and copying them into other artifacts," : ""} for the rest of the conversation.`;
}
function pe(e, n, t) {
  let s = ge(e, n, t);
  if (e.remember !== "artifact") return s;
  let r = T3() ? "task" : "conversation";
  return s.replace(/\?$/, ` for the rest of this ${r}?`);
}
function V(e) {
  return e.class === "public_change" && e.basis !== "unattended" && e.about !== "someone_else" && e.missing !== "public";
}
function ge(e, n, t) {
  let s = wW(n),
    r = s ? `"${s}"` : G,
    d = s ? `"${s}"` : "This artifact";
  switch (e.class) {
    case "delete":
      return `Permanently delete ${s || t === void 0 ? r : t}?`;
    case "public_change":
      if (V(e)) return `${d} is public. Allow Claude to change it?`;
      if (e.basis === "unattended") return `Allow Claude to change ${r}?`;
      if (e.about === "someone_else") return e.missing === "owned" ? `Claude couldn't check who made ${r}. Allow Claude to change it?` : `${d} was made by someone else. Allow Claude to change it?`;
      return `Claude couldn't check who can see ${r}. Allow Claude to change it?`;
    case "access_change":
      return `Allow Claude to change who can open or comment on ${r}?`;
    case "standing_job":
      return `Allow Claude to keep replying to comments on ${r}?`;
    case "foreign_read":
      return TPn(e.missing === "owned" ? "unknown" : "someone_else", n);
  }
}
function me(e) {
  return e.about === "outside_org" ? EPn : void 0;
}
function BF(e) {
  return WKe(e.input, e.context, [e]);
}
function WKe(e, n, t) {
  if (n.toolUseId !== void 0) ee().askClassPending.delete(n.toolUseId), ee().askClassCards.delete(n.toolUseId);
  let s = [];
  for (let o of t) if (!o.ruling.ask) {
    if (o.ruling.foreignRead) NCt(o.action, o.slug, o.ownerAccountId, o.ruling.attested);
  } else if (o.ruling.remember !== "artifact" || !(o.consentHeld ?? kke(o.ruling, o.slug, o.userOnly === !0)) || o.heldYesDoesNotCover === !0) s.push({
    ...o,
    ruling: o.ruling
  });
  if (s.length === 0) return {
    behavior: "allow",
    updatedInput: {
      ...e,
      [Wp]: !1
    }
  };
  let r = o => o.ruling.answeredBy === "person" || o.userOnly === !0;
  s.sort((itemA, itemB) => Number(r(itemB)) - Number(r(itemA)));
  let d = s.some(r),
    a = s.map(item => ({
      display: item.display,
      question: pe(item.ruling, item.display.title, item.display.url),
      note: me(item.ruling),
      linked: item.ruling.class === "foreign_read" || item.ruling.about === "someone_else" || item.ruling.missing === "owned",
      reach: item.note
    })),
    u = a.flatMap(item => item.reach === void 0 ? [item.question] : [item.question, item.reach]).join(" ");
  if (d ? Fh(n) : MS(n) || s.some(item => item.ruling.class === "foreign_read") && H(n)) return {
    behavior: "deny",
    message: `Nothing was done. This needs a yes to: ${a.map(item => item.question).join(" ")} No one can answer in this session.`,
    decisionReason: {
      type: "safetyCheck",
      reason: `Artifact ${s.map(item => item.ruling.class).join(", ")} ask has no one to answer it`,
      classifierApprovable: !1
    }
  };
  let reachable = jg(n),
    askedIn = Z9e(),
    f = s.map(item => ({
      class: item.ruling.class,
      remember: item.ruling.remember,
      ...(item.ruling.endpoint && {
        endpoint: !0
      }),
      slug: item.slug,
      url: item.display.url,
      ...(item.display.title !== void 0 && {
        title: item.display.title
      }),
      reachable: reachable,
      askedIn: askedIn
    }));
  Q9e(n, s.filter(item => "about" in item.ruling && item.ruling.about === "outside_org" && !item.ruling.endpoint).map(item => item.slug), reachable);
  let h = f.length === 1 ? f[0] : f;
  if (n.toolUseId !== void 0) {
    if (Zce(ee().askClassPending, n.toolUseId, f), d) Zce(ee().askClassPersonAsked, n.toolUseId, !0);else ee().askClassPersonAsked.delete(n.toolUseId);
    if ($s(le(n).mode)) ee().askClassNoClassifier.delete(n.toolUseId);else Zce(ee().askClassNoClassifier, n.toolUseId, !0);
    let stamp = P(h);
    if (stamp !== void 0) {
      let parts = a.flatMap(({
        display: display,
        question: question_3,
        note: note,
        linked: linked,
        reach: reach
      }) => [question_3, ...(note === void 0 ? [] : [note]), ...(question_3.includes(display.url) || !linked && wW(display.title) ? [] : [display.url]), ...(reach === void 0 ? [] : [reach])]);
      Zce(ee().askClassCards, n.toolUseId, {
        stamp: stamp,
        parts: parts,
        saysPublic: s.some(item => V(item.ruling)),
        reason: u
      });
    }
  }
  return {
    behavior: "ask",
    message: u,
    updatedInput: {
      ...e,
      [Wp]: !1,
      [WCt]: h
    },
    ...(s.some(item => item.ruling.class === "delete" || item.ruling.class === "access_change") && {
      defaultToNo: !0
    }),
    ...(s.some(item => item.ruling.class === "access_change") && {
      personOnly: !0
    }),
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !0,
    decisionReason: {
      type: "safetyCheck",
      reason: u,
      classifierApprovable: !d
    }
  };
}
function BZr(e) {
  if (e.toolUseId === void 0) return;
  let n = ee(),
    askClassPending = n.askClassPending,
    s = askClassPending.get(e.toolUseId) ?? [];
  askClassPending.delete(e.toolUseId);
  let r = n.askClassPersonAsked.get(e.toolUseId);
  n.askClassPersonAsked.delete(e.toolUseId);
  let d = n.askClassNoClassifier.get(e.toolUseId);
  n.askClassNoClassifier.delete(e.toolUseId);
  let a = lAe(e),
    u = !Fh(e) && !tue(e) && (a || r === !0 || d === !0 && !$s(le(e).mode));
  if (s[0]?.reachable !== !0 || s[0].askedIn !== Z9e() || !jg(e)) return;
  if (Zce(n.askClassTaken, e.toolUseId, s), u) Zce(n.askClassTakenByPerson, e.toolUseId, !0);
  if (vs(e.agentContext)) return;
  for (let l of s) if (l.remember === "artifact" && (a || !l.endpoint)) {
    if (FHs(Rmt(l), l.slug, u), !l.endpoint && Amt(e, l.slug) && (u || r !== !0 && !z(e))) HHs(l.slug);
  }
}
function jZr(e, n, t) {
  return he(e, n, t);
}
function he(e, n, t) {
  let s = e.toolUseId === void 0 ? void 0 : ee().askClassTaken.get(e.toolUseId);
  return s !== void 0 && s.some(item => Rmt(item) === n && item.slug === t && item.remember === "artifact") && MK(n, t);
}
function ke(e, n) {
  let t = ee();
  return e.toolUseId !== void 0 && t.askClassTakenByPerson.get(e.toolUseId) === !0 && (t.askClassTaken.get(e.toolUseId)?.some(r => Rmt(r) === "foreign_read" && r.slug === n) ?? !1) || lAe(e) || aFt("foreign_read", n);
}
function pri(e, slug, url) {
  if (e.toolUseId === void 0) return;
  let s = ee();
  Zce(s.askClassPending, e.toolUseId, [{
    class: "foreign_read",
    remember: "this_call",
    slug: slug,
    url: url,
    reachable: jg(e),
    askedIn: Z9e()
  }]), Zce(s.askClassPersonAsked, e.toolUseId, !0);
}
function WZr(e, n) {
  i("tengu_artifact_routine_write_unasked", {
    db_op: c(e),
    artifact_id: ye(n)
  });
}
function zZr(e, n) {
  i("tengu_artifact_comment_write_unasked", {
    db_op: c(e),
    artifact_id: ye(n)
  });
}
function GZr(e) {
  i("tengu_artifact_comment_publish_unasked", {
    artifact_id: ye(e)
  });
}
function VZr(e) {
  ee().commentRepublishedPaths.add(e);
}
function Wcr(e) {
  ee().routineRepublishedPaths.add(e);
}
function qZr(e) {
  if (e === void 0) return;
  let n = ee();
  n.askClassPending.delete(e), n.askClassCards.delete(e), n.askClassPersonAsked.delete(e), n.askClassNoClassifier.delete(e), n.askNamedOtherOrg.delete(e);
}
function KZr(e) {
  i("tengu_artifact_routine_publish_unasked", {
    artifact_id: ye(e)
  });
}
function LCt(e, n, t) {
  let mode_2 = c(n ?? "absent");
  if (i("tengu_artifact_routine_first_publish_unasked", {
    ...(e !== void 0 && {
      artifact_id: ye(e)
    }),
    mode: mode_2,
    ...(t?.fromType && {
      from_type: !0
    })
  }), n === "owner" || n === "refused_before_send") return;
  if (n !== "stranded" && n !== "refused_shape" && n !== "unknown_outcome") m("artifact_publish", "routine_first_publish_not_owner_only", {
    mode: mode_2,
    ...(t?.fromType && {
      from_type: !0
    })
  });
  ee().routineRunTainted = !0;
}
function NCt(e, n, t, s) {
  i("tengu_artifact_foreign_read_unasked", {
    action: c(e),
    artifact_id: ye(n),
    ...(t !== void 0 && {
      owner_account_id: ye(t)
    }),
    ...(s && {
      attested: !0
    })
  });
}
export { Dis, Lis, wPn, Nis, Fis, vPn, Zce, Fcr, Hcr, ICt, KA, ast, $cr, $Zr, lst, cFe, YV, Ucr, x1, aAe, Doe, bbe, Bcr, MCt, dst, DCt, kPn, jcr, EPn, TPn, UZr, BF, WKe, BZr, jZr, pri, WZr, zZr, GZr, VZr, Wcr, qZr, KZr, LCt, NCt };