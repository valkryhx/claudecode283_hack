// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { We, Ke, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { qr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { By, XO, Fit, $it, Aae, sge, kk, jRr, mko, OEe as env, rn, Mt } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Sn, iar, aar, CA, s4, ppe, $H, UCn, aze } from "B:/~BUN/root/chunk-r6beatp9.js";
import { Awt, Q4t, QWe, Z4t, xwt, Poe, Pwt, e3t, Iwt, n3t, HH, eze, Owt, tze, Qir, $eo, ear } from "B:/~BUN/root/chunk-38htkcqc.js";
import { V4t, KWe, q4t } from "B:/~BUN/root/chunk-f5k13r52.js";
import { pl, dpe } from "B:/~BUN/root/chunk-3edaq4dc.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { lstat as oe } from "fs/promises";
import { dirname as de, join as ce } from "path";
var ECn = $H,
  K4t = "out",
  se = "attrs",
  pe = 600000,
  he = 4,
  Q = 600000;
function jir(e) {
  return e.kind === "snapshot" ? e.snapshot.stats.tamperedNames ?? 0 : e.cause?.kind === "tampered_objects" ? e.cause.count : 0;
}
function Wir(e) {
  return e.kind === "sent" || e.kind === "unchanged" ? e.snapshot.stats.tamperedNames ?? 0 : e.kind === "snapshot_refused" ? e.tamperedNames ?? 0 : 0;
}
function fe(e, n, i) {
  return {
    basis: e === null ? null : e === i?.previousLink ? "link" : i?.heldReceived.some(s => s.worktreeCommit === e) ? "container" : "start",
    ...(e !== null && i?.heldReceived.some(s => s.worktreeCommit === e && s.link === !0) === !0 && {
      basisLink: !0
    }),
    linkEdge: e !== null && i?.previousLink != null && e !== i.previousLink && n.includes(i.previousLink),
    chainBroken: i?.chainBroken === !0
  };
}
function me(e) {
  return {
    head: e.head,
    branch: e.branch,
    indexTree: e.indexTree,
    worktreeTree: e.worktreeTree
  };
}
function ie(e, n) {
  return e !== null && n !== null && e.head === n.head && e.branch === n.branch && e.indexTree === n.indexTree && e.worktreeTree === n.worktreeTree;
}
function re(e, n) {
  return n !== null && tze(e).length < Aae - 1 && e.installedSinceUpload.length < Awt;
}
function ge(e, n, i, s, o = null) {
  let r = HH(e);
  return r !== null && r.generation > e.generationSpent && n.lastSentHeld && (e.peerNeed === null || n.needUnanswerable && s - r.sentAtMs < pe) && (re(e, o) ? i.worktreeTree === o && i.head === r.head && i.branch === r.branch && (i.indexTree === r.indexTree || e.start.kind === "folder") : e.downApplied.length === 0 && e.installedSinceUpload.length === 0 && ie(me(r), i));
}
var ke = /^(?:0|[1-9][0-9]{0,8})$/,
  we = 999999999;
async function be(e, n) {
  let i = pl(n, se),
    s = i === null ? null : await e.listSessionRefs(n);
  if (i === null || s === null) return null;
  let o = s.flatMap(({
    name: name,
    id: id
  }) => {
    let u = name.slice(i.length + 1);
    return name.startsWith(`${i}/`) && ke.test(u) ? [{
      n: Number(u),
      id: id
    }] : [];
  }).sort((itemA, itemB) => itemA.n - itemB.n);
  return {
    trees: o.map(({
      id: id_2
    }) => id_2),
    next: (o.at(-1)?.n ?? -1) + 1
  };
}
async function ye(e, n, i, s) {
  let o = L(s).filter(item => !i.trees.includes(item));
  if (o.length === 0) return i;
  if (i.next + o.length - 1 > we) return null;
  let r = o.map((u, index) => ({
      name: pl(n, `${se}/${i.next + index}`),
      id: u
    })),
    p = r.filter(item => item.name !== null);
  if (p.length !== r.length || !(await e.writeRefs(p, "create"))) return null;
  return {
    trees: [...i.trees, ...o],
    next: i.next + o.length
  };
}
function TCn(e, n, i) {
  let s = detail => ({
      kind: "refused",
      reason: Mt(n.signal) ? "aborted" : "git_error",
      detail: detail
    }),
    o = async () => (await be(n, i)) ?? ((await n.stands?.()) === !1 ? {
      trees: [],
      next: 0
    } : null);
  return async r => {
    let p = await o(),
      u = await e({
        ...r,
        ...(r.walkFloor !== void 0 && {
          walkFloor: {
            ...r.walkFloor,
            attributeTrees: p?.trees ?? []
          }
        })
      }),
      a = p === null && (u.kind === "snapshot" || u.reason === "attributes_gone"),
      c = a ? await o() : p;
    if (a && (c === null || c.trees.length > 0)) return s("the kept .gitattributes trees could not be listed in the sync repository on this machine before the snapshot was taken");
    if (u.kind !== "snapshot" || c === null) return u;
    let m = u.snapshot.attributesNotKept ?? [];
    if (m.length > 0) t(`dir-sync: ${m.length} committed .gitattributes source(s) read but not kept in full (${L(m.map(({
      why: why
    }) => why)).join(", ")})`);
    let h = new Set(m.flatMap(({
      tree: tree
    }) => tree === null ? [] : [tree]));
    return (await ye(n, i, c, (u.snapshot.attributesTrees ?? []).filter(item => !h.has(item)))) === null ? s("a .gitattributes tree the snapshot read could not be kept in the sync repository on this machine") : u;
  };
}
async function zir({
  record: record,
  deps: deps,
  lastTry = !1
}) {
  let s = Date.now(),
    o = null;
  try {
    let r = await deps.repository.pinForPass();
    if (r.kind === "refused") return {
      kind: "snapshot_refused",
      record: record,
      reason: r.reason,
      detail: r.detail
    };
    if (r.kind === "pinned") o = r.release;
    return await Se(record, r.kind === "nothing_to_pin" ? deps : {
      ...deps,
      repository: r.repository,
      boundaryUnchanged: r.unchanged
    }, s, lastTry);
  } catch (error) {
    if (Ke(error)) return {
      kind: "aborted",
      record: record
    };
    return d(error), _(record, "unknown", "unexpected", "unexpected throw");
  } finally {
    await o?.().catch(() => {});
  }
}
async function Se(record_2, n, i, s) {
  let {
      repository: repository,
      sessionId: sessionId,
      transport: transport
    } = n,
    u = n.chained === !0 && Poe(record_2),
    a = await Z(repository, record_2, u);
  if (a === null && Mt(repository.signal)) return {
    kind: "aborted",
    record: record_2
  };
  let record_3 = j(record_2, a),
    basis = a?.basis ?? null,
    h = {
      signal: repository.signal,
      ...repository.snapshotPin,
      ...(await Re(repository, record_2, a, i)),
      walkFloor: n3t(record_2),
      ...(s && {
        acceptMovedHead: !0
      })
    },
    g = TCn(n.snapshot, repository, sessionId),
    b = await g(basis === null ? {
      basis: null,
      ...h
    } : {
      basis: basis,
      alsoParents: a?.alsoParents ?? [],
      ...h
    }),
    C = b.kind === "refused" && b.reason === "basis_not_held" && a !== null && a.basis !== null,
    k = C ? await g({
      basis: null,
      ...h
    }) : b,
    basis_2 = C ? null : a?.basis ?? null;
  if (k.kind === "refused") return k.reason === "aborted" ? {
    kind: "aborted",
    record: record_3
  } : {
    kind: "snapshot_refused",
    record: record_3,
    reason: k.reason,
    detail: k.detail,
    ...(k.cause !== void 0 && !("count" in k.cause) && (k.cause.kind === "boundary_moved" || k.cause.kind === "store_moved" || k.cause.kind === "git_dir_moved") && {
      cause: k.cause.kind
    }),
    ...(k.cause?.kind === "tampered_objects" && {
      tamperedNames: k.cause.count
    }),
    ...(k.cause?.kind === "attribute_source" && {
      attributeSource: k.cause.source.kind
    }),
    ...(k.cause?.kind === "admin_dir" && {
      outsideCheckout: !0
    })
  };
  let x = a ?? (await Z(repository, record_2, u));
  if (x === null) return Mt(repository.signal) ? {
    kind: "aborted",
    record: record_3
  } : _(record_3, "snapshot", "git_error", "the side repository could not be asked what it holds");
  let record_4 = j(record_2, x),
    O = await ee(repository, k.snapshot);
  if (O === null) return Mt(repository.signal) ? {
    kind: "aborted",
    record: record_4
  } : _(record_4, "snapshot", "git_error", "the snapshot commits have no readable trees");
  if (ge(record_4, x, O, n.now(), n.installedTree?.() ?? null)) return {
    kind: "unchanged",
    record: record_4,
    snapshot: k.snapshot,
    ...(re(record_4, n.installedTree?.() ?? null) && {
      installedBaseline: !0
    })
  };
  let N = await Ce(repository, x, O.head);
  if (N === null && Mt(repository.signal)) return {
    kind: "aborted",
    record: record_4
  };
  let K = basis_2 === null ? [] : [basis_2, ...(a?.alsoParents ?? [])],
    A = N?.known ?? x,
    S = N?.hollow ?? new Set();
  if (S.size > 0) t(`git sync: ${S.size} base(s) this side holds are no longer whole (history rewritten and pruned here); the upload names none of them`);
  let record_5 = j(record_2, A),
    F = basis_2 !== null && S.has(basis_2) ? null : basis_2,
    E = basis_2 === null || !K.some(item => S.has(item)) ? k : S.has(basis_2) ? await g({
      basis: null,
      ...h
    }) : await g({
      basis: basis_2,
      alsoParents: A.alsoParents,
      ...h
    });
  if (E.kind === "refused") return E.reason === "aborted" ? {
    kind: "aborted",
    record: record_5
  } : {
    kind: "snapshot_refused",
    record: record_5,
    reason: E.reason,
    detail: E.detail,
    hollowBases: S.size,
    ...(E.cause?.kind === "attribute_source" && {
      attributeSource: E.cause.source.kind
    }),
    ...(E.cause?.kind === "admin_dir" && {
      outsideCheckout: !0
    })
  };
  let {
      snapshot: snapshot
    } = E,
    le = E === k ? K : F === null ? [] : [F, ...A.alsoParents],
    builtOn = fe(F, le, a),
    q = E === k ? O : await ee(repository, snapshot);
  if (q === null) return Mt(repository.signal) ? {
    kind: "aborted",
    record: record_5
  } : _(record_5, "snapshot", "git_error", "the snapshot commits have no readable trees");
  let {
      branch: branch,
      indexTree: indexTree,
      worktreeTree: worktreeTree
    } = q,
    prerequisites = F === null && A.basis !== null ? A.prerequisites.filter(item => item !== A.basis) : A.prerequisites,
    generation = eze(record_5);
  if (u && (e3t(record_5).length >= jRr || Pwt(record_5) >= mko)) return _(record_5, "put", "file_store_full", `${e3t(record_5).length} link rows holding ${Pwt(record_5)} bytes this session; none put`);
  let name_2 = pl(sessionId, `${K4t}/${generation}`);
  if (name_2 === null) return _(record_5, "refs", "git_error", "the session id cannot name a ref");
  let T = await Le(n.firstUpload, repository, {
    generation: generation,
    keys: {
      head: snapshot.head,
      branch: branch,
      indexTree: indexTree,
      worktreeTree: worktreeTree
    }
  });
  if (n.firstUpload !== void 0 && T === null) await ne(repository, n.firstUpload);
  let D = T?.snapshot ?? snapshot;
  if (!(await repository.writeRefs([{
    name: name_2,
    id: D.worktreeCommit
  }]))) return Mt(repository.signal) ? {
    kind: "aborted",
    record: record_5
  } : _(record_5, "refs", "git_error", "the outbound ref could not be written");
  if (T === null && n.boundaryUnchanged !== void 0 && !(await n.boundaryUnchanged())) return {
    kind: "snapshot_refused",
    record: record_5,
    reason: "busy",
    detail: "the checkout's shallow boundary (its .git/shallow file) changed while the sync point was being prepared",
    cause: "boundary_moved"
  };
  let w = T !== null ? Oe(T) : await V4t(repository, {
    tips: [name_2],
    prerequisites: prerequisites,
    maxBytes: n.maxBundleBytes ?? ECn,
    declareForkPoints: !0
  });
  if ("kind" in w) {
    if (repository.signal?.aborted === !0) return {
      kind: "aborted",
      record: record_5
    };
    return {
      kind: "snapshot_refused",
      record: record_5,
      reason: w.reason,
      detail: w.detail,
      ...(w.cause !== void 0 && {
        cause: w.cause
      })
    };
  }
  if (!w.ok) switch (w.reason) {
    case "aborted":
      return {
        kind: "aborted",
        record: record_5
      };
    case "too_large":
      return {
        kind: "too_large",
        record: record_5,
        sizeBytes: w.sizeBytes,
        hollowBases: S.size
      };
    case "nothing_to_send":
      break;
    case "git_error":
      return _(record_5, "bundle", "git_error", `${w.stage}: ${w.detail}`);
    case "prerequisites_missing":
      return _(record_5, "bundle", "prerequisites_missing", "a base went missing between the probe and the pack");
    case "too_many_prerequisites":
      return {
        kind: "too_many_prerequisites",
        record: record_5,
        prerequisiteCount: w.prerequisiteCount,
        hollowBases: S.size
      };
  }
  let W = record_5.start.kind === "checkout_empty" && record_5.start.walkFromParents === void 0 ? (await repository.readParents?.(record_5.start.walkFrom)) ?? null : null,
    X = bundle => ({
      generation: generation,
      head: D.head,
      branch: branch,
      indexCommit: D.indexCommit,
      worktreeCommit: D.worktreeCommit,
      indexTree: indexTree,
      worktreeTree: worktreeTree,
      bundle: bundle,
      ...(u && bundle !== null && {
        chained: !0
      }),
      withheldCounts: Fe(snapshot),
      ...((snapshot.conflicted?.length ?? 0) > 0 && {
        conflicted: De(snapshot)
      }),
      ...Me(snapshot),
      sentAtMs: n.now()
    });
  if (!w.ok) {
    let record_6 = ear(record_5, X(null), null, W, n.chained);
    return await te(repository, sessionId, record_6), {
      kind: "sent",
      record: record_6,
      generation: generation,
      via: "none",
      bundleBytes: 0,
      commitCount: 0,
      hollowBases: S.size,
      snapshot: snapshot,
      ...(n.firstUpload !== void 0 && {
        firstUpload: "rebuilt"
      }),
      builtOn: builtOn
    };
  }
  if (record_5.journalEtag === null) {
    let f = await M(record_5, n, "push");
    if (f.kind === "foreign") return {
      kind: "other_writer",
      record: record_5
    };
    if (f.kind === "lane_lost") return U(record_5, f);
    if (f.kind === "unknown") return _(record_5, "put", "conflict", "own journal row unreadable before the first write");
    if (f.kind === "ours" && f.lostGeneration !== null) return _(Owt(record_5, f.lostGeneration), "put", "conflict", `generation ${f.lostGeneration} already published by this machine before a restart`);
  }
  if (record_5.sent.length > 0) await n.beforeUpload(generation).catch(() => {});
  let Y = u ? await transport.putLink({
      generation: generation,
      worktreeCommit: D.worktreeCommit
    }, w.content, {
      signal: repository.signal
    }) : await transport.putOutbound(w.content, {
      ifMatchEtag: record_5.outboundEtag,
      signal: repository.signal
    }),
    P = Y;
  if (Y.kind === "conflict") {
    let f = await M(record_5, n, "push");
    if (f.kind === "foreign") return {
      kind: "other_writer",
      record: record_5
    };
    if (f.kind === "lane_lost") return U(record_5, f);
    if (f.kind === "ours" && f.lostGeneration !== null) return _(Owt(record_5, f.lostGeneration), "put", "conflict", `generation ${f.lostGeneration} already published by this machine before a restart`);
    if (f.kind === "ours" || f.kind === "absent") {
      if (u) return _(Owt(record_5, generation), "put", "conflict", `the store row for upload ${generation} already holds other bytes; numbering past it`);
      P = await transport.putOutbound(w.content, {
        ifMatchEtag: null,
        signal: repository.signal
      });
    }
  }
  switch (P.kind) {
    case "ok":
      {
        let record_7 = ear(record_5, X({
          ...P.carried,
          tipRef: T?.bundle.tipRef ?? name_2,
          prerequisites: w.prerequisites
        }), u ? null : P.etag, W, n.chained);
        if (await te(repository, sessionId, record_7), T !== null) await ne(repository, T);
        return {
          kind: "sent",
          record: record_7,
          generation: generation,
          via: P.carried.via,
          bundleBytes: w.sizeBytes,
          commitCount: w.commitCount,
          hollowBases: S.size,
          snapshot: snapshot,
          ...(n.firstUpload !== void 0 && {
            firstUpload: T !== null ? "kept" : "rebuilt"
          }),
          builtOn: T !== null ? {
            basis: null,
            linkEdge: !1,
            chainBroken: !1
          } : builtOn
        };
      }
    case "over_cap":
      return {
        kind: "too_large",
        record: record_5,
        sizeBytes: w.sizeBytes,
        hollowBases: S.size
      };
    case "unauthorized":
      return {
        kind: "lane_lost",
        record: record_5,
        reason: P.kind
      };
    case "lane_unavailable":
      return U(record_5, {
        reason: P.kind,
        cause: P.cause
      });
    case "aborted":
      return {
        kind: "aborted",
        record: record_5
      };
    case "conflict":
    case "lane_full":
    case "path_too_long":
    case "route_unavailable":
    case "rejected":
    case "failed":
      {
        let status = "status" in P ? P.status : void 0;
        return {
          ..._(record_5, "put", u && P.kind === "lane_full" ? "file_store_full" : P.kind, `put ${P.kind}${status === void 0 ? "" : ` ${status}`}`),
          ...(status !== void 0 && {
            status: status
          })
        };
      }
  }
}
async function CCn(e, n, startedAtMs = n.now()) {
  let writer = e.announcementToken ?? null;
  if (writer === null || e.journalEtag !== null || (e.announcementEtag ?? null) !== null || e.sent.length > 0) return null;
  try {
    let o = await n.transport.publishJournal(n.announceUpload({
      generation: eze(e),
      startedAtMs: startedAtMs,
      writer: writer
    }), {
      ifMatchEtag: null,
      createOnly: !0,
      signal: n.repository.signal
    });
    if (o.kind === "ok") return {
      record: {
        ...e,
        announcementEtag: o.etag
      },
      startedAtMs: startedAtMs
    };
    return o.kind === "conflict" ? await Ewt(e, n) : null;
  } catch (error) {
    if (!Ke(error)) d(error);
    return null;
  }
}
async function Ewt(e, n) {
  let i = e.announcementToken ?? null;
  if (i === null || e.journalEtag !== null || (e.announcementEtag ?? null) !== null || e.sent.length > 0) return null;
  try {
    let s = await n.transport.readOwnJournal(n.repository.signal),
      o = s.kind === "ok" ? n.decodeJournal(s.content) : null;
    return s.kind === "ok" && o !== null && o.note === null && !o.abandoned && o.writer !== null && o.writer === i ? {
      record: {
        ...e,
        announcementEtag: s.etag
      },
      startedAtMs: o.startedAtMs
    } : null;
  } catch (error) {
    if (!Ke(error)) d(error);
    return null;
  }
}
async function fOe(e, n, i, s = null, o = !1) {
  let ifMatchEtag = e.announcementEtag ?? null;
  if (ifMatchEtag === null || e.journalEtag !== null) return e;
  try {
    let p = await n.transport.publishJournal(n.announceUpload({
      generation: e.sent[0]?.generation ?? eze(e),
      startedAtMs: n.now(),
      abandoned: !0,
      ...(e.announcementToken != null && {
        writer: e.announcementToken
      })
    }, i), {
      ifMatchEtag: ifMatchEtag,
      signal: n.repository.signal
    });
    if (p.kind === "ok") return {
      ...e,
      announcementEtag: p.etag
    };
    if (p.kind === "conflict" && !o && s !== null) {
      let u = await n.transport.readOwnJournal(n.repository.signal),
        a = u.kind === "ok" ? n.decodeJournal(u.content) : null;
      if (u.kind === "ok" && a !== null && a.note === null && a.writer !== null && a.writer === (e.announcementToken ?? null) && a.startedAtMs === s && u.etag !== ifMatchEtag) {
        let c = {
          ...e,
          announcementEtag: u.etag
        };
        if (a.abandoned && i === void 0) return c;
        let m = await fOe(c, n, i, s, !0);
        return m === c ? e : m;
      }
    }
    return e;
  } catch (error) {
    if (!Ke(error)) d(error);
    return e;
  }
}
async function Gir(record_8, n, i) {
  let writer_2 = record_8.announcementToken ?? null;
  if (!Q4t(record_8.start) || writer_2 === null || record_8.journalEtag !== null || (record_8.announcementEtag ?? null) !== null || record_8.sent.length > 0) return {
    record: record_8,
    done: !0
  };
  try {
    let o = await n.transport.publishJournal(n.announceUpload({
      generation: eze(record_8),
      startedAtMs: n.now(),
      abandoned: !0,
      writer: writer_2
    }, i), {
      ifMatchEtag: null,
      createOnly: !0,
      signal: n.repository.signal
    });
    switch (o.kind) {
      case "ok":
        return {
          record: {
            ...record_8,
            announcementEtag: o.etag
          },
          done: !0
        };
      case "conflict":
        {
          let r = await M(record_8, n, "push");
          switch (r.kind) {
            case "foreign":
              return {
                record: record_8,
                done: !0
              };
            case "unknown":
              return {
                record: record_8,
                done: !1
              };
            case "lane_lost":
              return {
                record: record_8,
                done: !0
              };
            case "absent":
              if (r.etag === null) return {
                record: record_8,
                done: !1
              };
              break;
            case "ours":
              break;
          }
          let p = {
              ...record_8,
              announcementEtag: r.etag
            },
            record_9 = await fOe(p, n, i);
          return {
            record: record_9,
            done: record_9 !== p
          };
        }
      default:
        return {
          record: record_8,
          done: !1
        };
    }
  } catch (error) {
    if (!Ke(error)) d(error);
    return {
      record: record_8,
      done: !1
    };
  }
}
async function YWe({
  record: record_10,
  deps: deps_2,
  uploading: uploading,
  ended: ended
}) {
  try {
    let o = HH(record_10);
    if (o === null) return {
      kind: "nothing_to_publish",
      record: record_10
    };
    let r = deps_2.encodeJournal({
        sessionId: deps_2.sessionId,
        note: _e(record_10, o, {
          appliesLinks: deps_2.appliesLinks === !0
        }),
        ...(uploading !== void 0 && {
          uploading: uploading
        }),
        ...(ended !== void 0 && {
          ended: ended
        })
      }),
      {
        transport: transport_2,
        repository: repository_2
      } = deps_2,
      a = record_10.journalEtag;
    if (record_10.journalEtag === null) {
      let h = await M(record_10, deps_2, "publish");
      if (h.kind === "foreign") return {
        kind: "other_writer",
        record: record_10
      };
      if (h.kind === "lane_lost") return U(record_10, h);
      if (h.kind === "ours" || h.kind === "absent") a = h.etag;
      if (h.kind === "ours" && h.lostGeneration !== null) return {
        kind: "not_delivered",
        record: Owt(record_10, h.lostGeneration),
        reason: "conflict",
        detail: `generation ${h.lostGeneration} already published by this machine before a restart`
      };
      if (h.kind === "unknown") return {
        kind: "not_delivered",
        record: record_10,
        reason: "conflict",
        detail: "own journal row unreadable before the first publish"
      };
    }
    let c = await transport_2.publishJournal(r, {
        ifMatchEtag: a,
        signal: repository_2.signal
      }),
      m = c;
    if (c.kind === "conflict") {
      let h = await M(record_10, deps_2, "publish");
      if (h.kind === "foreign") return {
        kind: "other_writer",
        record: record_10
      };
      if (h.kind === "lane_lost") return U(record_10, h);
      if (h.kind === "ours" && h.lostGeneration !== null) return {
        kind: "not_delivered",
        record: Owt(record_10, h.lostGeneration),
        reason: "conflict",
        detail: `generation ${h.lostGeneration} already published by this machine before a restart`
      };
      if (h.kind === "ours" || h.kind === "absent") m = await transport_2.publishJournal(r, {
        ifMatchEtag: h.etag,
        signal: repository_2.signal
      });
    }
    switch (m.kind) {
      case "ok":
        return {
          kind: "published",
          record: {
            ...record_10,
            journalEtag: m.etag,
            announcementEtag: null,
            announcementToken: null
          }
        };
      case "unauthorized":
        return {
          kind: "lane_lost",
          record: record_10,
          reason: m.kind
        };
      case "lane_unavailable":
        return U(record_10, {
          reason: m.kind,
          cause: m.cause
        });
      case "aborted":
        return {
          kind: "aborted",
          record: record_10
        };
      case "conflict":
      case "lane_full":
      case "path_too_long":
      case "too_large":
      case "failed":
        return {
          kind: "not_delivered",
          record: record_10,
          reason: m.kind,
          detail: `journal put ${m.kind}`
        };
    }
  } catch (error) {
    if (Ke(error)) return {
      kind: "aborted",
      record: record_10
    };
    return d(error), {
      kind: "not_delivered",
      record: record_10,
      reason: "unexpected",
      detail: "unexpected throw"
    };
  }
}
function RCn(e) {
  return e.filter(xwt).map(item => ({
    generation: item.generation,
    worktreeCommit: item.worktreeCommit,
    sha256: item.bundle.sha256,
    size: item.bundle.size
  })).toReversed();
}
function _e(e, n, {
  appliesLinks = !1
} = {}) {
  let chain = RCn(e.sent);
  return {
    engine: "git",
    generation: n.generation,
    head: n.head,
    branch: n.branch,
    indexCommit: n.indexCommit,
    worktreeCommit: n.worktreeCommit,
    bundle: n.bundle,
    ...(chain.length > 0 && {
      chain: chain
    }),
    holds: e.received.map(item => item.worktreeCommit).slice(0, By),
    downApplied: (e.acked.includes(n.worktreeCommit) ? tze(e) : Qir(e)).slice(-Aae).map(item => ({
      turn: item.turn,
      notInstalled: item.notInstalled.slice(0, XO),
      truncated: item.truncated || item.notInstalled.length > XO,
      ...(item.complete === !0 && {
        complete: !0
      })
    })),
    fastForwardedTo: $eo(e),
    withheldCounts: n.withheldCounts,
    ...(n.conflicted !== void 0 && {
      conflicted: n.conflicted
    }),
    ...(n.setAside !== void 0 && n.setAside.length > 0 && {
      setAside: n.setAside
    }),
    ...(n.setAsideTruncated === !0 && {
      setAsideTruncated: !0
    }),
    ...(e.start.kind === "folder" && {
      origin: "folder"
    }),
    ...(QWe(e.start) && {
      attached: !0
    }),
    ...(e.start.kind === "checkout_empty" && {
      origin: "checkout_empty"
    }),
    acceptsHeldParents: !0,
    ...(appliesLinks && {
      appliesLinks: !0
    }),
    readsStanding: !0,
    readsResultEcho: !0,
    ...(Z4t(e.start) && e.acked.length === 0 && {
      seedless: !0
    }),
    ...(n.chained === !0 && {
      chained: !0
    }),
    ...(appliesLinks && e.linkNeed !== void 0 && {
      need: e.linkNeed
    })
  };
}
async function Z(e, n, i = !1) {
  let {
      peerNeed: peerNeed
    } = n,
    o = Iwt(n, i),
    r = i ? e3t(n) : [],
    p = new Set([...(i ? r : n.sent.map(item => item.worktreeCommit)), ...o]),
    u = n.acked.filter(item => p.has(item) && item !== peerNeed).slice(0, he),
    a = n.received.map(item => item.worktreeCommit),
    c = n.sent[0]?.worktreeCommit ?? null,
    m = peerNeed !== null && (a.includes(peerNeed) || n.sent.some(item => item.worktreeCommit === peerNeed || item.head === peerNeed)),
    h = m ? null : r[0] ?? null,
    g = await e.presentCommits(L([...a, ...u, ...o, ...(c === null ? [] : [c]), ...(h === null ? [] : [h])]).filter(item => rn.test(item)));
  if (g === null) return null;
  let heldReceived = n.received.filter(item => g.has(item.worktreeCommit)),
    previousLink = h !== null && g.has(h) ? h : null,
    y = (i && n.peerWritesLinks === !0 ? heldReceived.find(item => item.link === !0) : heldReceived[0])?.worktreeCommit ?? null,
    x = i && y !== null && y === n.peerLacked,
    basis_3 = y !== null && y !== peerNeed && !x ? y : previousLink,
    O = previousLink !== null ? previousLink !== basis_3 ? previousLink : null : u.find(item => g.has(item) && item !== basis_3) ?? null,
    N = n.sent[0] === void 0 ? null : pl(n.sessionId, `${K4t}/${n.sent[0].generation}`),
    describedBy = ((c !== null && N !== null && g.has(c) ? await e.listSessionRefs(n.sessionId) : null) ?? []).some(item => item.name === N && item.id === c) ? c : null,
    S = peerNeed !== null && (n.acked.includes(peerNeed) || a.includes(peerNeed) || o.includes(peerNeed) || n.sent.some(item => item.head === peerNeed || item.worktreeCommit === peerNeed));
  if (peerNeed !== null && !S) t("git sync: the container reports lacking a commit no bundle from here can supply (a fork point below its history); bases unchanged");
  return {
    basis: basis_3,
    alsoParents: basis_3 !== null && O !== null ? [O] : [],
    previousLink: previousLink,
    chainBroken: i && m,
    describedBy: describedBy,
    lastSentHeld: c !== null && g.has(c),
    prerequisites: L([...(basis_3 === null ? [] : [basis_3]), ...(previousLink === null ? [] : [previousLink]), ...u.filter(item => g.has(item)), ...o.filter(item => g.has(item))]).slice(0, UCn),
    heldReceived: heldReceived,
    needUnanswerable: peerNeed !== null && !S
  };
}
async function Re(e, n, i, passStartedAtMs) {
  return i?.describedBy == null ? {} : {
    lastDescribed: {
      worktreeCommit: i.describedBy,
      settledSince: await Pe(e, n)
    },
    passStartedAtMs: passStartedAtMs
  };
}
async function Pe(e, n) {
  let installedSinceUpload = n.installedSinceUpload,
    {
      heldInOwnRight: heldInOwnRight
    } = e;
  if (installedSinceUpload.length === 0 || heldInOwnRight === void 0) return new Map();
  let [o, r] = await Promise.all([e.listSessionRefs(n.sessionId), heldInOwnRight(L(installedSinceUpload.flatMap(({
      blobId: blobId
    }) => blobId === null ? [] : [blobId])))]),
    p = u => u === void 0 ? null : (o ?? []).find(item => item.name === pl(n.sessionId, `in/${u}`))?.id ?? null;
  return new Map(installedSinceUpload.map(item => {
    let a = p(item.turn);
    return [item.path, {
      blobId: item.blobId,
      vouchedBy: a !== null && (item.blobId === null || r?.has(item.blobId) === !0) ? a : null
    }];
  }));
}
function j(e, n) {
  return n === null || Ee(e.received, n.heldReceived) ? e : {
    ...e,
    received: n.heldReceived
  };
}
async function ee(e, n) {
  let i = await e.readTrees([n.indexCommit, n.worktreeCommit]);
  if (i === null) return null;
  let [indexTree_2 = "", worktreeTree_2 = ""] = i;
  return {
    head: n.head,
    branch: ae(n.branch),
    indexTree: indexTree_2,
    worktreeTree: worktreeTree_2
  };
}
async function Ce(e, n, i) {
  let hollow = await e.hollowCommits(L([...n.prerequisites, ...n.heldReceived.map(item => item.worktreeCommit)]), [i]);
  if (hollow === null) return null;
  let o = r => !hollow.has(r);
  return {
    hollow: hollow,
    known: hollow.size === 0 ? n : {
      ...n,
      basis: n.basis !== null && o(n.basis) ? n.basis : null,
      alsoParents: n.alsoParents.filter(o),
      prerequisites: n.prerequisites.filter(o),
      heldReceived: n.heldReceived.filter(item => o(item.worktreeCommit))
    }
  };
}
function Ee(e, n) {
  return e.length === n.length && e.every((item, index) => item.generation === n[index]?.generation && item.worktreeCommit === n[index]?.worktreeCommit);
}
function Vir({
  gitDir: gitDir,
  sessionRoot: sessionRoot,
  timeoutMs: timeoutMs,
  checkoutShallowFile: checkoutShallowFile,
  heldInOwnRight: heldInOwnRight_2,
  storeLook: r
}) {
  let p = {
      against: null,
      verdicts: new Map()
    },
    u = repository_3 => ({
      ...(repository_3.signal !== void 0 && {
        signal: repository_3.signal
      }),
      snapshotPin: repository_3.shallowFile === void 0 ? {} : {
        shallowFile: repository_3.shallowFile
      },
      withSignal: signal => u({
        ...repository_3,
        signal: signal
      }),
      ...(r !== void 0 && {
        lookAtStore: r
      }),
      pinForPass: async () => {
        let c = await checkoutShallowFile?.(repository_3.signal);
        if (typeof c === "object") {
          if (repository_3.signal?.aborted === !0) throw new We();
          return "standing" in c ? {
            kind: "refused",
            reason: "unreadable",
            detail: c.standing
          } : {
            kind: "refused",
            reason: "git_error",
            detail: `the checkout's git layout could not be read (${c.unreadable})`
          };
        }
        let m = await iar(repository_3.gitDir),
          h = c ?? (m.kind === "lender" ? m.shallowFile : null);
        if (h === null) return {
          kind: "nothing_to_pin"
        };
        let g = await q4t(h, de(repository_3.gitDir));
        return "kind" in g ? {
          kind: "refused",
          reason: "git_error",
          detail: KWe(g)
        } : {
          kind: "pinned",
          repository: u({
            ...repository_3,
            shallowFile: g.shallowFile
          }),
          unchanged: g.unchanged,
          release: g.release
        };
      },
      presentCommits: c => Te(repository_3, c),
      hollowCommits: async (c, m) => Ae(p, c, `${await ve(repository_3.gitDir)} ${m.join(" ")}`, (h, g) => Ge(repository_3, h, [...m, ...g])),
      readTrees: c => Ne(repository_3, c),
      readParents: c => Ue(repository_3, c),
      ...(heldInOwnRight_2 !== void 0 && {
        heldInOwnRight: c => heldInOwnRight_2(repository_3, c)
      }),
      writeRefs: (c, m) => s4(repository_3, c, m),
      createBundle: c => aze({
        ...c,
        repository: repository_3
      }),
      listSessionRefs: c => dpe(repository_3, c),
      stands: () => oe(repository_3.gitDir).then(c => c.isDirectory() ? !0 : null, c => {
        let m = v(c);
        return m === "ENOENT" || m === "ENOTDIR" ? !1 : null;
      }),
      deleteRefs: c => ppe(repository_3, c)
    });
  return u({
    gitDir: gitDir,
    sessionRoot: sessionRoot,
    timeoutMs: timeoutMs
  });
}
async function Te(e, n) {
  if (n.length === 0) return new Set();
  let i = await Sn(e, ["cat-file", "--batch-check=%(objecttype)"], {
      input: n.map(item => `${item}
`).join("")
    }),
    s = i.stdout.split(`
`).filter(item => item !== "");
  if (i.exitCode !== 0 || s.length !== n.length) return null;
  return new Set(n.filter((item, index) => s[index] === "commit"));
}
async function Ae(e, n, i, s) {
  if (e.against !== i) e.against = i, e.verdicts.clear();
  let o = n.filter(item => !e.verdicts.has(item)),
    r = new Map(),
    p = () => n.filter(item => (r.get(item) ?? e.verdicts.get(item)) === !0),
    u = o.length === 0 ? "whole" : await s(o, p());
  if (u === null) return null;
  if (u === "whole") o.forEach(item => r.set(item, !0));
  if (u === "hollow") for (let a of o) {
    let c = o.length === 1 ? u : await s([a], p());
    if (c === null) return null;
    if (c !== "unsure") r.set(a, c === "whole");
  }
  if (e.against === i) r.forEach((item, index) => e.verdicts.set(index, item));
  return new Set(n.filter(item => (r.get(item) ?? e.verdicts.get(item)) === !1));
}
async function ve(e) {
  let n = await aar(e);
  if (n.kind !== "lender") return "none";
  let i = async s => {
    try {
      let o = await oe(ce(n.objects, s), {
        bigint: !0
      });
      return `${o.dev}:${o.ino}:${o.ctimeNs}:${o.mtimeNs}`;
    } catch {
      return "absent";
    }
  };
  return `${await i("pack")}/${await i("info")}`;
}
var Be = /^(?:fatal|error): (?:bad tree object |missing [a-z]+ object |Could not read [0-9a-f]{40}|Failed to traverse parents of commit )/m;
async function Ge(e, n, i) {
  let s = await Sn(e, ["rev-list", "--objects", "--quiet", "--filter=blob:none", ...n, "--not", ...i, "--"], {
      env: env
    }),
    o = xe(s);
  if (o === "unsure") t(`git sync: ${CA("the walk that tells whether the bases are still whole", s)}; they stand as probed this time`);
  return o;
}
function xe(e) {
  if (e.exitCode === void 0) return null;
  if (e.exitCode === 0) return "whole";
  return e.exitCode === 128 && Be.test(e.stderr) ? "hollow" : "unsure";
}
function ae(e) {
  return e !== null && kk(e) ? e : null;
}
async function Le(e, n, i) {
  if (e === void 0 || i.generation !== 1) return null;
  let {
      snapshot: snapshot_2
    } = e,
    o = {
      head: snapshot_2.head,
      branch: ae(snapshot_2.position.kind === "branch" ? snapshot_2.position.name : null),
      indexTree: snapshot_2.indexTree,
      worktreeTree: snapshot_2.worktreeTree
    };
  if (!ie(o, i.keys)) return null;
  return (await n.presentCommits([snapshot_2.worktreeCommit]))?.has(snapshot_2.worktreeCommit) === !0 ? e : null;
}
function Oe(e) {
  return {
    ok: !0,
    content: e.bundle.content,
    sizeBytes: e.bundle.sizeBytes,
    sha256: e.bundle.sha256,
    refs: [{
      name: e.bundle.tipRef,
      id: e.snapshot.worktreeCommit
    }],
    omitted: [],
    prerequisites: [...e.bundle.prerequisites],
    commitCount: e.bundle.commitCount
  };
}
async function ne(e, n) {
  let i = pl(n.token, `${K4t}/1`);
  if (i !== null) await e.deleteRefs([i]);
}
function U(record_11, n) {
  return {
    kind: "lane_lost",
    record: record_11,
    reason: n.reason,
    ...(n.cause !== void 0 && {
      cause: n.cause
    })
  };
}
async function M(e, n, i) {
  let s = await n.transport.readOwnJournal(n.repository.signal);
  if (s.kind === "not_found") return {
    kind: "absent",
    etag: null
  };
  if (s.kind === "lane_unavailable" && s.cause !== void 0) return {
    kind: "lane_lost",
    reason: s.kind,
    cause: s.cause
  };
  if (s.kind !== "ok") return {
    kind: "unknown"
  };
  let o = n.decodeJournal(s.content);
  if (o === null) return {
    kind: "foreign"
  };
  if (o.note === null) {
    if (o.writer !== null && o.writer === (e.announcementToken ?? null)) return {
      kind: "ours",
      etag: s.etag,
      lostGeneration: null
    };
    let c = n.now() - o.startedAtMs;
    return o.abandoned || c > Q || c < -Q ? {
      kind: "absent",
      etag: s.etag
    } : {
      kind: "foreign"
    };
  }
  let {
    note: note
  } = o;
  if (e.sent.some(item => item.worktreeCommit === note.worktreeCommit)) return {
    kind: "ours",
    etag: s.etag,
    lostGeneration: null
  };
  let p = await n.repository.presentCommits([note.worktreeCommit]);
  if (p === null) return {
    kind: "unknown"
  };
  if (!p.has(note.worktreeCommit)) return {
    kind: "foreign"
  };
  let u = i === "publish" ? e.sent[0]?.generation ?? eze(e) : eze(e),
    a = note.generation >= u && (note.generation > e.generationSpent || i === "publish" && note.generation === e.sent[0]?.generation);
  return {
    kind: "ours",
    etag: s.etag,
    lostGeneration: a ? note.generation : null
  };
}
async function te(e, n, i) {
  let s = new Set(i.sent.map(item => pl(n, `${K4t}/${item.generation}`))),
    o = pl(n, K4t),
    r = o === null ? null : await e.listSessionRefs(n);
  if (r === null || o === null) return;
  let p = r.map(item => item.name).filter(item => item.startsWith(`${o}/`) && !s.has(item));
  if (p.length > 0) await e.deleteRefs(p);
}
async function Ne(e, n) {
  let i = await Sn(e, ["rev-parse", ...n.map(item => `${item}^{tree}`)]),
    s = i.stdout.split(`
`).filter(item => item !== "");
  if (i.exitCode !== 0 || s.length !== n.length) return null;
  return s;
}
async function Ue(e, n) {
  if (!rn.test(n)) return null;
  let i = await Sn(e, ["rev-parse", `${n}^@`]);
  return i.exitCode === 0 ? i.stdout.split(`
`).filter(item => item !== "") : null;
}
function De(e) {
  return (e.conflicted ?? []).slice(0, Fit).map(item => qr(item, $it));
}
function Me(e) {
  let n = e.setAside ?? [],
    i = e.setAsideTruncated === !0 || n.length > sge;
  return {
    ...(n.length > 0 && {
      setAside: n.slice(0, sge)
    }),
    ...(i && {
      setAsideTruncated: !0
    })
  };
}
function Fe(e) {
  return {
    credentialNamed: e.withheld.credentialNamed.length + e.withheld.hostConfig.length,
    filterAttributed: e.withheld.filterAttributed.length,
    hardLinked: e.withheld.hardLinked.length,
    ...(e.withheld.tooLarge !== void 0 && {
      tooLarge: e.withheld.tooLarge.length
    }),
    ...(e.conflicted !== void 0 && {
      unresolvedConflicts: e.conflicted.length
    })
  };
}
function _(record_12, step, reason, detail_2) {
  return {
    kind: "not_delivered",
    record: record_12,
    step: step,
    reason: reason,
    detail: detail_2
  };
}
export { ECn, K4t, jir, Wir, TCn, zir, CCn, Ewt, fOe, Gir, YWe, RCn, Vir };