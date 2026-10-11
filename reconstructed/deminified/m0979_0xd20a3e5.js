// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { We, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { sa, By, XO, Fit, $it, Aae, oge, e4e, sge, M9, kk, ion, rn, TB, $Ee, Xon, IOt, Jon, _4e, IAr } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { o, E, M, ae, C, u, ut, $e, Qo, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { lstat as ee, mkdir as ne, open as te } from "fs/promises";
import { dirname as re } from "path";
var maxBytes = 67108864,
  mode = 384,
  mode_2 = 448;
async function J4t(e, n) {
  if (H() && n !== void 0) try {
    let t = await n.backend.read([{
      key: n.key,
      offset: 0,
      length: maxBytes + 1
    }]);
    if (!t.ok) return {
      kind: "unreadable"
    };
    let [r] = t.value.items;
    if (!r.found) return {
      kind: "absent"
    };
    return r.totalBytes > maxBytes ? {
      kind: "unreadable"
    } : {
      kind: "ok",
      content: Buffer.from(r.value.buffer, r.value.byteOffset, r.value.byteLength)
    };
  } catch {
    return {
      kind: "unreadable"
    };
  }
  try {
    let t = await ee(e, {
      bigint: !0
    });
    if (!t.isFile()) return {
      kind: "unreadable"
    };
    let r = await te(e, sa());
    try {
      let s = await r.stat({
        bigint: !0
      });
      if (s.dev !== t.dev || s.ino !== t.ino || !s.isFile() || s.size > maxBytes) return {
        kind: "unreadable"
      };
      return {
        kind: "ok",
        content: await $Ee(r, Number(s.size))
      };
    } finally {
      await r.close();
    }
  } catch (error) {
    return B(error) ? {
      kind: "absent"
    } : {
      kind: "unreadable"
    };
  }
}
async function MCn(e, n, t) {
  if (n.length > maxBytes) throw Error("session record too large to store");
  if (H() && t !== void 0) {
    let r = await t.backend.write(t.key, n, {
      mode: mode
    });
    if (!r.ok) throw Error("dir-sync: session record write failed", {
      cause: r.error
    });
    return;
  }
  await ne(re(e), {
    recursive: !0,
    mode: mode_2
  }), await Cn(e, n, mode);
}
async function v(e, n, t) {
  if (e.length > maxBytes) throw Error("session record too large to store");
  let r = !1;
  async function* s() {
    if (yield e, n.aborted) throw r = !0, new We();
  }
  let l = await t.backend.writeFromStream(t.key, s(), {
    maxBytes: maxBytes,
    mode: mode
  });
  if (l.ok) return;
  if (r) throw new We();
  throw Error("dir-sync: session record write failed", {
    cause: l.error
  });
}
var x = 1,
  P = 2,
  D = 3,
  j = 4,
  DCn = 8,
  _ = 16,
  V = 64,
  Awt = 4096,
  U = 4096,
  W = 4096;
function Q4t(e) {
  switch (e.kind) {
    case "clone":
      return e.origin !== "remote" && e.origin !== "attached";
    case "folder":
      return !0;
    case "checkout_empty":
      return !1;
  }
}
function QWe(e) {
  return e.kind === "clone" && e.origin === "attached";
}
function Z4t(e) {
  return e.kind === "checkout_empty" || e.kind === "folder" && e.seeded === !1;
}
function xwt(e) {
  return e.chained === !0 && e.bundle !== null;
}
function Jir(e) {
  return e.acked.length === 0 && e.received.length === 0 && e.everAcknowledged !== !0 && e.peerReadsLinks === void 0;
}
function Poe(e) {
  return e.peerReadsLinks ?? Jir(e);
}
function Pwt(e) {
  return e.sent.reduce((acc, item) => acc + (xwt(item) ? item.bundle.size : 0), 0);
}
function e3t(e) {
  return e.sent.flatMap(item => xwt(item) ? [item.worktreeCommit] : []);
}
function Neo(e) {
  let n = new Set(e3t(e));
  return e.acked.filter(item => n.has(item));
}
function Iwt({
  start: start,
  acked: acked,
  sent: sent
}, r = !1) {
  switch (start.kind) {
    case "clone":
      return [start.pin];
    case "folder":
      return start.seeded === !1 ? [] : [start.pin];
    case "checkout_empty":
      return I(acked, r ? sent.filter(xwt) : sent);
  }
}
function LCn({
  start: start_2,
  acked: acked_2,
  sent: sent_2
}) {
  switch (start_2.kind) {
    case "clone":
      return [start_2.pin];
    case "folder":
      return start_2.seeded === !1 ? [] : [start_2.pin];
    case "checkout_empty":
      return I(acked_2, sent_2);
  }
}
function X({
  acked: acked_3,
  sent: sent_3,
  everSent: everSent
}) {
  let r = new Set([...(everSent ?? []), ...sent_3.map(item => item.worktreeCommit)]);
  return acked_3.filter(item => r.has(item));
}
function V7e(e) {
  return e.start.kind === "checkout_empty" && e.journalEtag === null && e.everAcknowledged !== !0;
}
function t3t(e) {
  return e.filter(item => item.kept !== !0);
}
function n3t({
  start: start_3,
  acked: acked_4,
  sent: sent_4
}) {
  switch (start_3.kind) {
    case "clone":
    case "folder":
      return {
        from: [start_3.pin],
        attributesAt: start_3.pin,
        noneHeld: "walk_all",
        historyHeld: LCn({
          start: start_3,
          acked: acked_4,
          sent: sent_4
        })
      };
    case "checkout_empty":
      return {
        from: L([...I(acked_4, sent_4), start_3.walkFrom, ...(start_3.walkFromParents ?? []).toReversed()]),
        attributesAt: start_3.walkFrom,
        noneHeld: "refuse",
        historyHeld: LCn({
          start: start_3,
          acked: acked_4,
          sent: sent_4
        })
      };
  }
}
var m = f(() => o().regex(rn).refine(TB)),
  R = f(() => o().refine(_4e)),
  K = f(() => $e([u({
    head: m(),
    branch: o().max(M9).nullable().catch(null)
  }), m().transform(head => ({
    head: head,
    branch: null
  }))])),
  Y = f(() => u({
    turn: E().int().positive(),
    notInstalled: C($e([u({
      path: R(),
      reason: o().max(64).transform(e => ion(e) ? e : "other")
    }), R().transform(path => ({
      path: path,
      reason: "other"
    }))])).max(XO),
    truncated: M(),
    complete: A(!0).optional().catch(void 0)
  })),
  ie = f(() => u({
    generation: E().int().positive(),
    head: m(),
    branch: o().max(M9).refine(kk).nullable().catch(null),
    indexCommit: m(),
    worktreeCommit: m(),
    indexTree: m(),
    worktreeTree: m(),
    bundle: Jon().nullable(),
    chained: A(!0).optional().catch(void 0),
    kept: A(!0).optional().catch(void 0),
    withheldCounts: IAr(),
    conflicted: C(o().max(4 * $it)).max(Fit).optional(),
    setAside: C(ae()).transform(e => e.filter(item => typeof item === "string" && /^[0-9a-f]{2,2048}$/.test(item)).slice(0, sge)).optional().catch(void 0),
    setAsideTruncated: A(!0).optional().catch(void 0),
    downApplied: C(Y()).max(Aae),
    fastForwardedTo: C(K()).max(oge).default(() => []),
    fastForwardedOn: C(o().max(M9).nullable().catch(null)).max(oge).optional(),
    sentAtMs: E().int().nonnegative()
  })),
  se = f(() => u({
    version: $e([A(x), A(P), A(D), A(j)]),
    engine: A("git"),
    sessionId: o().min(1),
    armedAtMs: E().int().nonnegative(),
    start: Qo("kind", [u({
      kind: A("clone"),
      pin: m(),
      origin: z(["remote", "bundle", "overlay", "attached"]).optional().catch(void 0)
    }), u({
      kind: A("folder"),
      pin: m(),
      seedTree: m(),
      seeded: A(!1).optional()
    }), u({
      kind: A("checkout_empty"),
      walkFrom: m(),
      walkFromParents: C(m()).max(DCn).optional()
    })]),
    uploadOnly: A(!0).optional(),
    servedLinked: u({
      gitDir: o().min(1),
      gitDirId: o().min(1),
      gitDirBorn: o().min(1).optional(),
      commonDir: o().min(1)
    }).optional(),
    everAcknowledged: A(!0).optional(),
    everSent: C(m()).max(V).optional(),
    sent: C(ie()).max(e4e).refine(e => e.every((item, index) => index === 0 || item.generation < e[index - 1].generation)),
    outboundEtag: o().min(1).max(Xon).nullable(),
    journalEtag: o().min(1).max(Xon).nullable(),
    announcementToken: o().min(1).max(64).nullable().optional(),
    announcementEtag: o().min(1).max(Xon).nullable().optional(),
    acked: C(m()).max(By),
    received: C(u({
      generation: E().int().positive(),
      worktreeCommit: m(),
      link: A(!0).optional().catch(void 0)
    })).max(By),
    appliedGeneration: E().int().nonnegative(),
    installedSinceUpload: C(u({
      path: R(),
      blobId: m().nullable(),
      mode: E().int().nonnegative(),
      turn: E().int().positive().optional()
    })).max(Awt),
    installedEarlier: C(u({
      path: R(),
      blobId: m()
    })).max(U).optional().transform(e => e ?? []),
    parkedRemovals: C(R()).max(W).optional().transform(e => e ?? []),
    parkedRemovalsOverflow: M().optional().transform(e => e ?? !1),
    downApplied: C(Y()).max(Aae),
    peerNeed: m().nullable(),
    peerBasedOn: m().nullable().default(null),
    peerReadsLinks: M().optional().catch(void 0),
    peerLacked: m().optional().catch(void 0),
    peerWritesLinks: M().optional().catch(void 0),
    linkNeed: m().optional().catch(void 0),
    fastForwardedTo: C(K()).max(oge).default(() => []),
    fastForwardedOn: C(o().max(M9).nullable().catch(null)).max(oge).optional(),
    generationSpent: E().int().nonnegative().default(0),
    ended: u({
      reason: z(IOt).catch("ended_earlier"),
      line: o().max(2000),
      atMs: E().int().nonnegative(),
      published: M()
    }).optional().catch(void 0)
  })),
  O = f(() => se().refine(e => e.version === J(e.start))),
  le = f(() => ut({
    engine: o().optional()
  }));
function J(e) {
  switch (e.kind) {
    case "clone":
      return QWe(e) ? D : x;
    case "folder":
      return e.seeded === !1 ? P : x;
    case "checkout_empty":
      return j;
  }
}
function r3t({
  sessionId: sessionId,
  armedAtMs: armedAtMs,
  start: start_4,
  uploadOnly = !1,
  servedLinked: servedLinked
}) {
  return {
    version: J(start_4),
    engine: "git",
    sessionId: sessionId,
    armedAtMs: armedAtMs,
    start: start_4,
    ...(uploadOnly && {
      uploadOnly: !0
    }),
    ...(servedLinked !== void 0 && {
      servedLinked: servedLinked
    }),
    ...(start_4.kind === "checkout_empty" && {
      everSent: []
    }),
    sent: [],
    outboundEtag: null,
    journalEtag: null,
    acked: [],
    received: [],
    appliedGeneration: 0,
    installedSinceUpload: [],
    installedEarlier: [],
    parkedRemovals: [],
    parkedRemovalsOverflow: !1,
    downApplied: [],
    peerNeed: null,
    peerBasedOn: null,
    fastForwardedTo: [],
    generationSpent: 0
  };
}
function de(e, n) {
  let t = O().safeParse(e);
  if (!t.success || t.data.sessionId !== n) return null;
  let {
      fastForwardedOn: fastForwardedOn,
      sent: sent_5,
      ...l
    } = t.data,
    sent_6 = sent_5.map(({
      fastForwardedOn: fastForwardedOn_2,
      ...k
    }) => ({
      ...k,
      fastForwardedTo: N(k.fastForwardedTo, fastForwardedOn_2)
    })),
    a = {
      ...l,
      fastForwardedTo: N(l.fastForwardedTo, fastForwardedOn),
      sent: sent_6
    };
  if (a.start.kind !== "checkout_empty") return a;
  let everSent_2 = a.everSent ?? sent_6.map(item => item.worktreeCommit);
  return {
    ...a,
    everSent: everSent_2,
    ...(X({
      ...a,
      everSent: everSent_2
    }).length > 0 && {
      everAcknowledged: !0
    })
  };
}
function N(e, n) {
  return n === void 0 ? [...e] : e.map((item, index) => ({
    head: item.head,
    branch: item.branch ?? n[index] ?? null
  }));
}
function G(e) {
  return {
    fastForwardedTo: e.map(item => item.head),
    fastForwardedOn: e.map(item => item.branch)
  };
}
function q(e) {
  return Buffer.from(b({
    ...e,
    ...G(e.fastForwardedTo),
    sent: e.sent.map(item => ({
      ...item,
      ...G(item.fastForwardedTo)
    }))
  }));
}
async function c7(e, n, t) {
  let r = await J4t(e, t);
  if (r.kind !== "ok") return r;
  let s = ct(r.content.toString("utf8"), !1),
    l = le().safeParse(s);
  if (!l.success) return {
    kind: "unreadable"
  };
  switch (l.data.engine) {
    case void 0:
      return {
        kind: "unreadable"
      };
    case "git":
      {
        let record = de(s, n);
        return record === null ? {
          kind: "unreadable"
        } : {
          kind: "git",
          record: record
        };
      }
    default:
      return {
        kind: "unsupported",
        engine: l.data.engine
      };
  }
}
class GitSessionRecordInvalidError extends Error {
  constructor() {
    super("git session record is not one its reader would accept");
    this.name = "GitSessionRecordInvalidError";
  }
}
async function ZWe(e, n, t) {
  if (!O().safeParse(n).success) throw new GitSessionRecordInvalidError();
  await MCn(e, q(n), t);
}
async function Heo(e, n, t) {
  if (!O().safeParse(e).success) throw new GitSessionRecordInvalidError();
  await v(q(e), n, t);
}
function T(e) {
  return Number.isSafeInteger(e) && e > 0;
}
function HH(e) {
  return e.sent[0] ?? null;
}
function eze(e) {
  return Math.max(e.sent[0]?.generation ?? 0, e.generationSpent) + 1;
}
function Owt(e, generationSpent) {
  return T(generationSpent) && generationSpent > e.generationSpent ? {
    ...e,
    generationSpent: generationSpent
  } : e;
}
function Feo(e) {
  return tze(e).length < Aae && e.installedSinceUpload.length < Awt;
}
function tze(e) {
  return F([...Qir(e), ...e.downApplied]);
}
function Qir(e) {
  return F([...e.sent].reverse().flatMap(item => item.downApplied));
}
function F(e) {
  return [...new Map(e.map(item => [item.turn, item])).values()];
}
function $eo(e) {
  let n = ue(e).map(item => item.head);
  return L(n.reverse()).reverse().slice(-oge);
}
function ue(e) {
  return [...[...e.sent].reverse().flatMap(item => item.fastForwardedTo), ...e.fastForwardedTo];
}
function Ueo(e, n) {
  let t = s => s.filter(item => item.branch === n).at(-1)?.head ?? null,
    r = t(e.fastForwardedTo);
  if (r !== null) return r;
  for (let s of e.sent) {
    if (s.kept === !0) continue;
    if (s.branch === n) return s.head;
    let l = t(s.fastForwardedTo);
    if (l !== null) return l;
  }
  return null;
}
function Beo(e, head_2, t = null) {
  let r = e.fastForwardedTo.at(-1);
  if (!rn.test(head_2) || !TB(head_2) || r?.head === head_2 && r.branch === t) return e;
  let branch = t !== null && kk(t) ? t : null,
    l = e.fastForwardedTo.filter(item => !(item.head === head_2 && item.branch === branch));
  return {
    ...e,
    fastForwardedTo: Q([...l, {
      head: head_2,
      branch: branch
    }], oge)
  };
}
function Q(e, n) {
  if (e.length <= n) return e;
  let t = new Map(e.map((item, index) => [item.branch, index])),
    r = new Set(t.values()),
    s = e.map((item, index) => index).filter(item => !r.has(item)),
    l = new Set(s.slice(0, e.length - n)),
    d = e.filter((item, index) => !l.has(index));
  return d.length <= n ? d : d.slice(-n);
}
function Zir(e, n, t = !1) {
  let acked_5 = L(n.holds.filter(item => rn.test(item))).slice(0, By),
    peerNeed = n.need !== null && rn.test(n.need) ? n.need : null,
    peerBasedOn = n.basedOn != null && rn.test(n.basedOn) ? n.basedOn : null,
    peerReadsLinks = t ? n.readsLinks === !0 : e.peerReadsLinks,
    peerWritesLinks = t ? n.writesLinks === !0 : e.peerWritesLinks,
    peerLacked = t && peerNeed !== null && e.received.some(item => item.worktreeCommit === peerNeed) ? peerNeed : e.peerLacked,
    S = n.installsBankedThrough ?? 0,
    k = i => i.turn >= S,
    c = S > 0 && (e.downApplied.some(item => !k(item)) || e.sent.some(item => item.downApplied.some(item => !k(item))));
  if (acked_5.length === e.acked.length && acked_5.every((item, index) => item === e.acked[index]) && peerNeed === e.peerNeed && peerBasedOn === e.peerBasedOn && peerReadsLinks === e.peerReadsLinks && peerWritesLinks === e.peerWritesLinks && peerLacked === e.peerLacked && !c) return e;
  let w = c ? e.sent.map(item => item.downApplied.some(item => !k(item)) ? {
    ...item,
    downApplied: item.downApplied.filter(k)
  } : item) : e.sent;
  return {
    ...e,
    sent: Z(w, acked_5, peerBasedOn, t),
    acked: acked_5,
    peerNeed: peerNeed,
    peerBasedOn: peerBasedOn,
    ...(peerReadsLinks !== void 0 && {
      peerReadsLinks: peerReadsLinks
    }),
    ...(peerWritesLinks !== void 0 && {
      peerWritesLinks: peerWritesLinks
    }),
    ...(peerLacked !== void 0 && {
      peerLacked: peerLacked
    }),
    downApplied: c ? e.downApplied.filter(k) : e.downApplied,
    ...(e.start.kind === "checkout_empty" && X({
      acked: acked_5,
      sent: e.sent,
      everSent: e.everSent
    }).length > 0 && {
      everAcknowledged: !0
    })
  };
}
function s3t(e, n) {
  if (!T(n.generation) || !rn.test(n.worktreeCommit)) return e;
  let t = e.received.find(item => item.worktreeCommit === n.worktreeCommit);
  if (t !== void 0 && t.generation >= n.generation) return e;
  let {
      generation: generation,
      worktreeCommit: worktreeCommit
    } = n,
    l = n.link === !0 || t?.link === !0;
  return {
    ...e,
    received: ce([{
      generation: generation,
      worktreeCommit: worktreeCommit,
      ...(l && {
        link: !0
      })
    }, ...e.received.filter(item => item.worktreeCommit !== n.worktreeCommit)])
  };
}
function ce(e) {
  let n = e.findIndex(item => item.link === !0);
  return n === By ? [...e.slice(0, By - 1), e[n]] : e.slice(0, By);
}
function NSe(e, linkNeed_2) {
  if (linkNeed_2 === e.linkNeed) return e;
  if (linkNeed_2 === void 0) {
    let {
      linkNeed: linkNeed,
      ...r
    } = e;
    return r;
  }
  return rn.test(linkNeed_2) ? {
    ...e,
    linkNeed: linkNeed_2
  } : e;
}
function jeo(e, n) {
  let t = e.downApplied.find(item => item.turn === n.turn);
  if (!T(n.turn) || t === void 0 && e.downApplied.length >= Aae) return e;
  let r = n.installed.filter(item => _4e(item.path) && (item.blobId === null || rn.test(item.blobId) && TB(item.blobId)) && Number.isSafeInteger(item.mode) && item.mode >= 0),
    s = new Set(r.map(item => item.path)),
    l = new Map(e.installedSinceUpload.map(item => [item.path, item]));
  for (let i of r) l.delete(i.path), l.set(i.path, {
    ...i,
    turn: n.turn
  });
  let d = n.notInstalled.filter(item => _4e(item.path)),
    complete = n.complete,
    S = [...new Map([...(complete ? [] : t?.notInstalled ?? []), ...d].map(item => [item.path, item])).values()].filter(item => !s.has(item.path)),
    k = {
      turn: n.turn,
      notInstalled: S.slice(0, XO),
      truncated: !complete && (t?.truncated ?? !1) || n.truncated || r.length !== n.installed.length || d.length !== n.notInstalled.length || S.length > XO || l.size > Awt,
      ...(complete && {
        complete: !0
      })
    },
    c = new Map(e.installedEarlier.map(item => [item.path, item])),
    w = n.written === void 0 ? null : new Set(n.written);
  for (let i of r) if (i.blobId === null) c.delete(i.path);else if (w === null || w.has(i.path)) c.delete(i.path), c.set(i.path, {
    path: i.path,
    blobId: i.blobId
  });
  return {
    ...e,
    appliedGeneration: Math.max(e.appliedGeneration, n.turn),
    installedSinceUpload: [...l.values()].slice(-Awt),
    installedEarlier: [...c.values()].slice(-U),
    ...(n.parked !== void 0 && pe(n.parked)),
    downApplied: t === void 0 ? [...e.downApplied, k] : e.downApplied.map(item => item.turn === n.turn ? k : item)
  };
}
function pe(e) {
  let parkedRemovals = e.filter(_4e).slice(0, W);
  return {
    parkedRemovals: parkedRemovals,
    parkedRemovalsOverflow: parkedRemovals.length !== e.length
  };
}
function ear(e, n, t, r = null, s = !1) {
  if (n.generation !== eze(e)) return e;
  let branch_2 = n.branch !== null && kk(n.branch) ? n.branch : null,
    d = r === null ? null : L(r.filter(item => rn.test(item))).slice(0, DCn),
    walkFromParents = e.start.kind === "checkout_empty" ? e.start.walkFromParents ?? d : null,
    start_5 = e.start.kind !== "checkout_empty" || walkFromParents === null ? e.start : {
      ...e.start,
      walkFromParents: walkFromParents
    };
  return {
    ...e,
    start: start_5,
    ...(e.start.kind === "checkout_empty" && {
      everSent: L([n.worktreeCommit, ...(e.everSent ?? [])]).slice(0, V)
    }),
    sent: Z([{
      ...n,
      branch: branch_2,
      downApplied: e.downApplied,
      fastForwardedTo: e.fastForwardedTo
    }, ...e.sent], e.acked, e.peerBasedOn, s),
    outboundEtag: t ?? e.outboundEtag,
    installedSinceUpload: [],
    downApplied: [],
    fastForwardedTo: [],
    peerNeed: null
  };
}
function Z(e, n, t = null, r = !1) {
  let s = fe(t3t(e), n, t);
  if (!r) return s;
  let l = new Set(s.map(item => item.generation)),
    d = e.filter(item => xwt(item) && !l.has(item.generation)).map(item => ({
      ...item,
      downApplied: [],
      fastForwardedTo: [],
      kept: !0
    }));
  return d.length === 0 ? s : [...s, ...d].sort((itemA, itemB) => itemB.generation - itemA.generation);
}
function fe(e, n, t = null) {
  let r = e.findIndex(item => n.includes(item.worktreeCommit)),
    s = t === null ? -1 : e.findIndex(item => item.worktreeCommit === t),
    l = r === -1 ? _ : Math.max(r, s, 1) + 1,
    d = e.map((item, index) => r === -1 || index < r || item.downApplied.length === 0 && item.fastForwardedTo.length === 0 ? item : {
      ...item,
      downApplied: [],
      fastForwardedTo: []
    }),
    a = d.slice(0, Math.min(l, _));
  if (r < _) return a;
  let p = a.findLastIndex((c, w) => w !== s),
    S = a[p],
    k = a.flatMap((item, index) => index === p ? [] : index === p - 1 ? [{
      ...item,
      downApplied: F([...S.downApplied, ...item.downApplied]),
      fastForwardedTo: Q([...S.fastForwardedTo, ...item.fastForwardedTo], oge)
    }] : [item]);
  return k.push(d[r]), k;
}
function I(e, n) {
  let t = new Set(e);
  return L(t3t(n).filter(item => t.has(item.worktreeCommit)).map(item => item.head));
}
export { J4t, MCn, DCn, Awt, Q4t, QWe, Z4t, xwt, Jir, Poe, Pwt, e3t, Neo, Iwt, LCn, V7e, t3t, n3t, r3t, c7, GitSessionRecordInvalidError as o3t, ZWe, Heo, HH, eze, Owt, Feo, tze, Qir, $eo, Ueo, Beo, Zir, s3t, NSe, jeo, ear };