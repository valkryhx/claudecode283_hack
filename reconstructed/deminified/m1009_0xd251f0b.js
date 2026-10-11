// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Sb } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { JB, ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { AO, wL, W7, Ose, KTt } from "B:/~BUN/root/chunk-at7axhcd.js";
import { O4e, OEo } from "B:/~BUN/root/chunk-q5ke49kw.js";
import { KX } from "B:/~BUN/root/chunk-p10aw0p6.js";
import { createHash as O } from "crypto";
import { readFile as U, stat as z, unlink as J } from "fs/promises";
function QSe(e, i, n) {
  return e.ver === i && (e.observers === void 0 || Object.hasOwn(e.observers, n));
}
function T(e, i, n) {
  return QSe(e.getArtifactReadObservation(i), n, e.agentId ?? "main") && !W7(e.agentId, i, n);
}
function kZe(e, i) {
  let n = i.fileReadingLimits?.maxTokens ?? KX().maxTokens,
    overlong = [],
    o = 0,
    start = 0;
  while (start <= e.length) {
    let s = e.indexOf(`
`, start),
      end = s === -1 ? e.length : s;
    if (o++, O4e(e.slice(start, end), "html") > n / 4) overlong.push({
      line: o,
      start: start,
      end: end
    });
    start = end + 1;
  }
  return {
    lines: o,
    unterminated: !e.endsWith(`
`),
    overlong: overlong
  };
}
var E = 3,
  K = 8,
  X = 32;
function Pvt({
  html: html,
  ver: ver,
  shape: shape,
  sent: sent,
  recorded: recorded,
  lineCount = !0
}) {
  let s = a => a.toLocaleString("en-US"),
    f = shape.unterminated ? shape.lines : shape.lines - 1,
    v = `version ${ver}: ${s(Buffer.byteLength(html))} bytes${lineCount ? `, ${s(f)} ${I(f, "line")}` : ""}`;
  if (shape.overlong.length === 0) return `${v}, ${lineCount ? "each" : "every line"} short enough to Read with offset/limit`;
  let l = (sent !== void 0 && shape.overlong.length <= X ? sent : void 0)?.replace(/\r\n/g, `
`),
    H;
  try {
    H = l === void 0 ? void 0 : KTt(l);
  } catch (error) {
    if (!(error instanceof Ose)) throw error;
  }
  let C = l === void 0 ? void 0 : new Set([...l.split(`
`), ...(H?.split(`
`) ?? [])]),
    R = shape.overlong.map(item => {
      let F = html.slice(item.start, item.end).replace(/\r$/, ""),
        verdict = C === void 0 ? void 0 : C.has(F) ? "same" : "differs";
      return {
        line: item.line,
        chars: item.end - item.start,
        verdict: verdict
      };
    }),
    P = R.slice(0, E),
    h = R.slice(E),
    b = h.length,
    u = h.filter(item => item.verdict === "differs"),
    y = b > 0 && h.every(item => item.verdict === "same"),
    m = u.slice(0, K).map(item => s(item.line)),
    c = u.length - m.length,
    x = u.length === 0 ? y ? ", none differing from what you sent" : "" : `, of which ${I(u.length, "line")} ${m.join(", ")}${c > 0 ? ` and ${s(c)} more` : ""} ${u.length === 1 ? "differs" : "differ"} from what you sent`,
    S = a => `line ${s(a.line)} (${s(a.chars)} characters${a.verdict === "differs" ? ", which differs from the content you sent" : a.verdict === "same" ? ", identical to a line you sent" : ""})`;
  return `${v}; a single Read may not return ${P.map(S).join(", or ")}${b > 0 ? `, or ${s(b)} more such ${I(b, "line")}${x}` : ""}` + (recorded ? " \u2014 no whole Read of it is needed: Read the lines you need with offset/limit, and take those long lines from the saved file, never from your own copy" : "");
}
async function EZe({
  filepath: filepath,
  persistId: persistId,
  html: html_2,
  slug: slug,
  ver: ver_2,
  confirmsResend: confirmsResend,
  batch: batch,
  heldSkipsRead: heldSkipsRead
}, v) {
  let g = v.agentId ?? "main",
    {
      lines: l,
      overlong: overlong_2
    } = kZe(html_2, v),
    C = overlong_2.length === 0,
    R = T(v, slug, ver_2),
    P = R && heldSkipsRead ? "held" : "unverifiable",
    h = Ye(filepath),
    mtimeMs = await Sb(h).catch(() => {
      return;
    });
  if (mtimeMs === void 0) return P === "held" ? "held" : "unexaminable";
  let contentHash = O("sha256").update(html_2).digest("hex"),
    pendingHandoverReads = ee().pendingHandoverReads,
    m = pendingHandoverReads.get(h),
    c = m !== void 0 && m.slug === slug && m.ver === ver_2 && m.contentHash === contentHash ? m : void 0;
  if (c !== void 0) c.mtimeMs = mtimeMs;
  if (!C) return P;
  let x = R && heldSkipsRead;
  if (c !== void 0) {
    if (c.handedTo.add(g), x) return c.completedBy.add(g), "held";
    if (confirmsResend) c.confirmsResendFor.set(g, batch ?? "");else c.confirmsResendFor.delete(g);
    return c.completedBy.delete(g), c.unrecordableBy.has(g) ? "unverifiable" : "pending";
  }
  let unrecordableBy = new Set();
  for (let [F, L] of pendingHandoverReads) if (L.slug === slug) {
    for (let W of L.unrecordableBy) unrecordableBy.add(W);
    pendingHandoverReads.delete(F);
  }
  let unterminated = !html_2.endsWith(`
`);
  return pendingHandoverReads.set(h, {
    slug: slug,
    ver: ver_2,
    mtimeMs: mtimeMs,
    totalLines: l,
    unterminated: unterminated,
    contentHash: contentHash,
    bytes: Buffer.byteLength(html_2),
    requiredLines: unterminated ? l : l - 1,
    linesReturned: new Map(),
    linesPrepared: new Map(),
    completedBy: new Set(x ? [g] : []),
    handedTo: new Set([g]),
    unrecordableBy: unrecordableBy,
    persistId: persistId,
    confirmsResendFor: new Map(confirmsResend ? [[g, batch ?? ""]] : [])
  }), x ? "held" : unrecordableBy.has(g) ? "unverifiable" : "pending";
}
async function D6t(e, i, persistId_2) {
  for (let [editedCopy, o] of ee().pendingHandoverReads) if (o.slug === e && o.ver === i) {
    let r = await Sb(editedCopy).catch(() => {
      return;
    });
    return r !== void 0 && r !== o.mtimeMs ? {
      persistId: `${persistId_2}-${Date.now().toString(36)}`,
      editedCopy: editedCopy
    } : {
      persistId: o.persistId
    };
  }
  return {
    persistId: persistId_2
  };
}
async function xze(e, i) {
  let n = Ye(e),
    pendingHandoverReads_2 = ee().pendingHandoverReads,
    o = pendingHandoverReads_2.get(n);
  if (o === void 0) return;
  if (O("sha256").update(i).digest("hex") !== o.contentHash) {
    pendingHandoverReads_2.delete(n);
    return;
  }
  let r = await Sb(n).catch(() => {
    return;
  });
  if (r !== void 0) o.mtimeMs = r;
}
function D(e, i, n) {
  for (let [t, o] of ee().pendingHandoverReads) if (o.slug === i && (n === void 0 || o.ver === n) && o.handedTo.has(e) && !o.completedBy.has(e) && !o.unrecordableBy.has(e)) return [t, o];
  return;
}
function Ivt(e, i, n) {
  return D(e ?? "main", i, n) !== void 0;
}
function A(e, i, n, t = !1) {
  let o = e.agentId ?? "main",
    r = D(o, i, n);
  if (r === void 0) return;
  let s = r[1];
  return V(s, e) || !t && T(e, i, s.ver) ? void 0 : r;
}
function eAn(e, i, n, {
  ignoreHold = !1
} = {}) {
  let o = A(e, i, n, ignoreHold);
  return o === void 0 ? void 0 : k(o[0], o[1], e.agentId);
}
async function ocr(e, i, n) {
  let t = A(e, i, n);
  if (t === void 0) return;
  let [o, r] = t,
    file;
  try {
    file = (await Sb(o)) === r.mtimeMs ? "intact" : "changed";
  } catch (error) {
    file = B(error) ? "changed" : "unknown";
  }
  return {
    ...k(o, r, e.agentId),
    file: file
  };
}
function k(path, i, n) {
  return {
    path: path,
    slug: i.slug,
    ver: i.ver,
    lines: i.requiredLines,
    unterminated: i.unterminated,
    unread: G(i.linesReturned.get(n ?? "main") ?? [], i.requiredLines)
  };
}
function scr(e, i, n) {
  let t = A(e, i, n);
  return t !== void 0 && q(t[1], e.agentId, e.agentId ?? "main") === void 0;
}
function icr(e, i, n, t) {
  A(e, i, n)?.[1].confirmsResendFor.set(e.agentId ?? "main", t);
}
function tAn({
  lines: lines,
  unterminated: unterminated_2,
  unread: unread
}) {
  let t = unread.reduce((acc, [r, s]) => acc + s - r + 1, 0);
  return `${lines} ${I(lines, "line")}` + (unterminated_2 ? `; the last has no trailing newline, so \`wc -l\` reports ${lines - 1} \u2014 Read through line ${lines} and leave the file as it is` : "") + (t > 0 && t < lines ? `; you have not yet Read ${I(t, "line")} ${unread.map(([o, r]) => o === r ? `${o}` : `${o}-${r}`).join(", ")}` : "");
}
function IOe(e, i, n, t) {
  let o = eAn(e, i, n, t);
  return o === void 0 ? "" : ` (${tAn(o)})`;
}
function G(e, i) {
  let n = [],
    t = 0;
  for (let [o, r] of M(e)) {
    if (o > t) n.push([t + 1, Math.min(o, i)]);
    if (t = Math.max(t, r), t >= i) break;
  }
  if (t < i) n.push([t + 1, i]);
  return n;
}
async function acr(e, i) {
  ee().pendingHandoverReads.delete(Ye(e)), OEo(i, e), await J(e).catch(() => {});
}
var w = {
  artifactRead: void 0,
  remaining: void 0,
  commit: () => {
    return;
  }
};
async function GKo(e, i, messageId, t) {
  try {
    let pendingHandoverReads_3 = ee().pendingHandoverReads,
      r = pendingHandoverReads_3.get(e),
      s = i.agentId ?? "main";
    if (r === void 0 || messageId === void 0 || t.lineCount <= 0 || r.completedBy.has(s)) return w;
    if (Math.floor(t.mtimeMs) !== r.mtimeMs || t.totalLines !== r.totalLines) return p("artifact_handover_read", "file_changed"), w;
    if (j(r, e, i)) return w;
    let range = [t.firstLine, t.firstLine + t.lineCount],
      v = await Y(e, r.bytes, r.contentHash);
    if (v === "changed") return pendingHandoverReads_3.delete(e), p("artifact_handover_read", "file_changed"), w;
    if (v === "unreadable") p("artifact_handover_read", "file_unreadable");
    let g = v === "holds",
      l = (r.linesPrepared.get(s) ?? []).filter(item => item.messageId === messageId),
      H = M([...(r.linesReturned.get(s) ?? []), ...l.map(item => item.range), range]),
      C = N(H, r.requiredLines),
      R = {
        messageId: messageId,
        range: range
      };
    r.linesPrepared.set(s, [...l, R]);
    let commit = () => {
        try {
          let u = r.linesPrepared.get(s) ?? [];
          if (pendingHandoverReads_3.get(e) !== r || r.completedBy.has(s) || !u.includes(R)) return;
          let y = u.filter(item => item !== R);
          if (y.length > 0) r.linesPrepared.set(s, y);else r.linesPrepared.delete(s);
          let m = M([...(r.linesReturned.get(s) ?? []), range]);
          if (!g || !N(m, r.requiredLines)) {
            r.linesReturned.set(s, m);
            return;
          }
          return r.linesReturned.delete(s), r.completedBy.add(s), Q(r, e, i, messageId, s) ? {
            slug: r.slug,
            ver: r.ver
          } : void 0;
        } catch (error) {
          d(error);
          return;
        }
      },
      h = !r.unrecordableBy.has(s),
      b = h && r.handedTo.has(s) && !T(i, r.slug, r.ver);
    return {
      artifactRead: C && g && h ? {
        slug: r.slug,
        ver: r.ver
      } : void 0,
      remaining: C || !b ? void 0 : {
        ...k(e, r, i.agentId),
        unread: G(H, r.requiredLines)
      },
      commit: commit
    };
  } catch (error) {
    return d(error), w;
  }
}
function V(e, i) {
  let ver_3 = i.getArtifactReadObservation(e.slug).ver;
  return ver_3 !== void 0 && ver_3 !== e.ver && (AO(ver_3, e.ver) ?? 0) > 0;
}
function j(e, i, n) {
  if (V(e, n)) return ee().pendingHandoverReads.delete(i), p("artifact_handover_read", "superseded"), !0;
  return !1;
}
function M(e) {
  let i = e.map(item => [item[0], item[1]]).sort((itemA, itemB) => itemA[0] - itemB[0]),
    n = [];
  for (let t of i) {
    let o = n.at(-1);
    if (o !== void 0 && t[0] <= o[1]) o[1] = Math.max(o[1], t[1]);else n.push(t);
  }
  return n;
}
function N(e, i) {
  let n = e[0];
  return n !== void 0 && n[0] <= 0 && n[1] >= i;
}
function q(e, i, n) {
  let t = ee().refusedPublishBodies.get(JB(i, e.slug)),
    o = e.confirmsResendFor.get(n);
  return o !== void 0 && (t === void 0 || t.batch !== o) ? void 0 : t;
}
function Q(e, i, n, t, o) {
  if (j(e, i, n)) return !1;
  let r = q(e, n.agentId, o),
    s = r?.observedFrom;
  try {
    n.setArtifactReadVersion(e.slug, e.ver, wL(n.agentId, t));
  } finally {
    if (r !== void 0) if (s === void 0) delete r.observedFrom;else r.observedFrom = s;
  }
  if (QSe(n.getArtifactReadObservation(e.slug), e.ver, o)) return _("artifact_handover_read"), !0;
  return e.unrecordableBy.add(o), p("artifact_handover_read", "seed_not_persisted"), !1;
}
async function Y(e, i, n) {
  try {
    return (await z(e)).size === i && O("sha256").update(await U(e)).digest("hex") === n ? "holds" : "changed";
  } catch (error) {
    return B(error) ? "changed" : "unreadable";
  }
}
export { QSe, kZe, Pvt, EZe, D6t, xze, Ivt, eAn, ocr, scr, icr, tAn, IOe, acr, GKo };