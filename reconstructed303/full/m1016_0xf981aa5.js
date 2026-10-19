// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  it
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  dE
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  rB
} from "B:/~BUN/root/chunk-7h4t08m3.js";
import {
  qU,
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  VF,
  F1,
  bue,
  Xoe,
  F4e
} from "B:/~BUN/root/chunk-8tjgv4bf.js";
import {
  Yxs
} from "B:/~BUN/root/chunk-yq5myw2y.js";
import {
  zft
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  createHash as M
} from "crypto";
import {
  readFile as U,
  stat as z,
  unlink as J
} from "fs/promises";

function qce(e, i, n) {
  return e.ver === i && (e.observers === void 0 || Object.hasOwn(e.observers, n))
}

function _(e, i, n) {
  return qce(e.getArtifactReadObservation(i), n, e.agentId ?? "main") && !bue(e.agentId, i, n)
}

function hdr(e) {
  return e.fileReadingLimits?.maxTokens ?? rB().maxTokens
}

function WTt(e, i) {
  let n = hdr(i),
    t = [],
    d = 0,
    r = 0;
  while (r <= e.length) {
    let o = e.indexOf(`
`, r),
      u = o === -1 ? e.length : o;
    if (d++, zft(e.slice(r, u), "html") > n / 4) t.push({
      line: d,
      start: r,
      end: u
    });
    r = u + 1
  }
  return {
    lines: d,
    unterminated: !e.endsWith(`
`),
    overlong: t
  }
}
var k = 3,
  K = 8,
  X = 32;

function UYt({
  html: e,
  ver: i,
  shape: n,
  sent: t,
  recorded: d,
  lineCount: r = !0
}) {
  let o = (s) => s.toLocaleString("en-US"),
    u = n.unterminated ? n.lines : n.lines - 1,
    h = `version ${i}: ${o(Buffer.byteLength(e))} bytes${r?`, ${o(u)} ${O(u,"line")}`:""}`;
  if (n.overlong.length === 0) return `${h}, ${r?"each":"every line"} short enough to Read with offset/limit`;
  let m = (t !== void 0 && n.overlong.length <= X ? t : void 0)?.replace(/\r\n/g, `
`),
    C;
  try {
    C = m === void 0 ? void 0 : F4e(m)
  } catch (s) {
    if (!(s instanceof Xoe)) throw s
  }
  let P = m === void 0 ? void 0 : new Set([...m.split(`
`), ...C?.split(`
`) ?? []]),
    y = n.overlong.map((s) => {
      let B = e.slice(s.start, s.end).replace(/\r$/, ""),
        A = P === void 0 ? void 0 : P.has(B) ? "same" : "differs";
      return {
        line: s.line,
        chars: s.end - s.start,
        verdict: A
      }
    }),
    x = y.slice(0, k),
    b = y.slice(k),
    R = b.length,
    a = b.filter((s) => s.verdict === "differs"),
    H = R > 0 && b.every((s) => s.verdict === "same"),
    v = a.slice(0, K).map((s) => o(s.line)),
    c = a.length - v.length,
    S = a.length === 0 ? H ? ", none differing from what you sent" : "" : `, of which ${O(a.length,"line")} ${v.join(", ")}${c>0?` and ${o(c)} more`:""} ${a.length===1?"differs":"differ"} from what you sent`,
    w = (s) => `line ${o(s.line)} (${o(s.chars)} characters${s.verdict==="differs"?", which differs from the content you sent":s.verdict==="same"?", identical to a line you sent":""})`;
  return `${h}; a single Read may not return ${x.map(w).join(", or ")}${R>0?`, or ${o(R)} more such ${O(R,"line")}${S}`:""}` + (d ? " \u2014 no whole Read of it is needed: Read the lines you need with offset/limit, and take those long lines from the saved file, never from your own copy" : "")
}
async function Fot({
  filepath: e,
  persistId: i,
  html: n,
  slug: t,
  ver: d,
  confirmsResend: r,
  batch: o,
  heldSkipsRead: u
}, h) {
  let f = h.agentId ?? "main",
    {
      lines: m,
      overlong: C
    } = WTt(n, h),
    P = C.length === 0,
    y = _(h, t, d),
    x = y && u ? "held" : "unverifiable",
    b = it(e),
    R = await dE(b).catch(() => {
      return
    });
  if (R === void 0) return x === "held" ? "held" : "unexaminable";
  let a = M("sha256").update(n).digest("hex"),
    H = ee().pendingHandoverReads,
    v = H.get(b),
    c = v !== void 0 && v.slug === t && v.ver === d && v.contentHash === a ? v : void 0;
  if (c !== void 0) c.mtimeMs = R;
  if (!P) return x;
  let S = y && u;
  if (c !== void 0) {
    if (c.handedTo.add(f), S) return c.completedBy.add(f), "held";
    if (r) c.confirmsResendFor.set(f, o ?? "");
    else c.confirmsResendFor.delete(f);
    return c.completedBy.delete(f), c.unrecordableBy.has(f) ? "unverifiable" : "pending"
  }
  let w = new Set;
  for (let [B, A] of H)
    if (A.slug === t) {
      for (let W of A.unrecordableBy) w.add(W);
      H.delete(B)
    } let s = !n.endsWith(`
`);
  return H.set(b, {
    slug: t,
    ver: d,
    mtimeMs: R,
    totalLines: m,
    unterminated: s,
    contentHash: a,
    bytes: Buffer.byteLength(n),
    requiredLines: s ? m : m - 1,
    linesReturned: new Map,
    linesPrepared: new Map,
    completedBy: new Set(S ? [f] : []),
    handedTo: new Set([f]),
    unrecordableBy: w,
    persistId: i,
    confirmsResendFor: new Map(r ? [
      [f, o ?? ""]
    ] : [])
  }), S ? "held" : w.has(f) ? "unverifiable" : "pending"
}
async function YAn(e, i, n) {
  for (let [t, d] of ee().pendingHandoverReads)
    if (d.slug === e && d.ver === i) {
      let r = await dE(t).catch(() => {
        return
      });
      return r !== void 0 && r !== d.mtimeMs ? {
        persistId: `${n}-${Date.now().toString(36)}`,
        editedCopy: t
      } : {
        persistId: d.persistId
      }
    } return {
    persistId: n
  }
}
async function SKe(e, i) {
  let n = it(e),
    t = ee().pendingHandoverReads,
    d = t.get(n);
  if (d === void 0) return;
  if (M("sha256").update(i).digest("hex") !== d.contentHash) {
    t.delete(n);
    return
  }
  let r = await dE(n).catch(() => {
    return
  });
  if (r !== void 0) d.mtimeMs = r
}

function N(e, i, n) {
  for (let [t, d] of ee().pendingHandoverReads)
    if (d.slug === i && (n === void 0 || d.ver === n) && d.handedTo.has(e) && !d.completedBy.has(e) && !d.unrecordableBy.has(e)) return [t, d];
  return
}

function BYt(e, i, n) {
  return N(e ?? "main", i, n) !== void 0
}

function I(e, i, n, t = !1) {
  let d = e.agentId ?? "main",
    r = N(d, i, n);
  if (r === void 0) return;
  let o = r[1];
  return V(o, e) || !t && _(e, i, o.ver) ? void 0 : r
}

function ydr(e, i, n, {
  ignoreHold: t = !1
} = {}) {
  let d = I(e, i, n, t);
  return d === void 0 ? void 0 : T(d[0], d[1], e.agentId)
}
async function GQr(e, i, n) {
  let t = I(e, i, n);
  if (t === void 0) return;
  let [d, r] = t, o;
  try {
    o = await dE(d) === r.mtimeMs ? "intact" : "changed"
  } catch (u) {
    o = G(u) ? "changed" : "unknown"
  }
  return {
    ...T(d, r, e.agentId),
    file: o
  }
}

function T(e, i, n) {
  return {
    path: e,
    slug: i.slug,
    ver: i.ver,
    lines: i.requiredLines,
    unterminated: i.unterminated,
    unread: D(i.linesReturned.get(n ?? "main") ?? [], i.requiredLines)
  }
}

function VQr(e, i, n) {
  let t = I(e, i, n);
  return t !== void 0 && q(t[1], e.agentId, e.agentId ?? "main") === void 0
}

function qQr(e, i, n, t) {
  I(e, i, n)?.[1].confirmsResendFor.set(e.agentId ?? "main", t)
}

function _dr({
  lines: e,
  unterminated: i,
  unread: n
}) {
  let t = n.reduce((d, [r, o]) => d + o - r + 1, 0);
  return `${e} ${O(e,"line")}` + (i ? `; the last has no trailing newline, so \`wc -l\` reports ${e-1} \u2014 Read through line ${e} and leave the file as it is` : "") + (t > 0 && t < e ? `; you have not yet Read ${O(t,"line")} ${n.map(([d,r])=>d===r?`${d}`:`${d}-${r}`).join(", ")}` : "")
}

function wKe(e, i, n, t) {
  let d = ydr(e, i, n, t);
  return d === void 0 ? "" : ` (${_dr(d)})`
}

function D(e, i) {
  let n = [],
    t = 0;
  for (let [d, r] of F(e)) {
    if (d > t) n.push([t + 1, Math.min(d, i)]);
    if (t = Math.max(t, r), t >= i) break
  }
  if (t < i) n.push([t + 1, i]);
  return n
}
async function KQr(e, i) {
  ee().pendingHandoverReads.delete(it(e)), Yxs(i, e), await J(e).catch(() => {})
}
var L = {
  artifactRead: void 0,
  remaining: void 0,
  commit: () => {
    return
  }
};
async function Yni(e, i, n, t) {
  try {
    let d = ee().pendingHandoverReads,
      r = d.get(e),
      o = i.agentId ?? "main";
    if (r === void 0 || n === void 0 || t.lineCount <= 0 || r.completedBy.has(o)) return L;
    if (Math.floor(t.mtimeMs) !== r.mtimeMs || t.totalLines !== r.totalLines) return p("artifact_handover_read", "file_changed"), L;
    if (j(r, e, i)) return L;
    let u = [t.firstLine, t.firstLine + t.lineCount],
      h = await Y(e, r.bytes, r.contentHash);
    if (h === "changed") return d.delete(e), p("artifact_handover_read", "file_changed"), L;
    if (h === "unreadable") p("artifact_handover_read", "file_unreadable");
    let f = h === "holds",
      m = (r.linesPrepared.get(o) ?? []).filter((a) => a.messageId === n),
      C = F([...r.linesReturned.get(o) ?? [], ...m.map((a) => a.range), u]),
      P = E(C, r.requiredLines),
      y = {
        messageId: n,
        range: u
      };
    r.linesPrepared.set(o, [...m, y]);
    let x = () => {
        try {
          let a = r.linesPrepared.get(o) ?? [];
          if (d.get(e) !== r || r.completedBy.has(o) || !a.includes(y)) return;
          let H = a.filter((c) => c !== y);
          if (H.length > 0) r.linesPrepared.set(o, H);
          else r.linesPrepared.delete(o);
          let v = F([...r.linesReturned.get(o) ?? [], u]);
          if (!f || !E(v, r.requiredLines)) {
            r.linesReturned.set(o, v);
            return
          }
          return r.linesReturned.delete(o), r.completedBy.add(o), Q(r, e, i, n, o) ? {
            slug: r.slug,
            ver: r.ver
          } : void 0
        } catch (a) {
          l(a);
          return
        }
      },
      b = !r.unrecordableBy.has(o),
      R = b && r.handedTo.has(o) && !_(i, r.slug, r.ver);
    return {
      artifactRead: P && f && b ? {
        slug: r.slug,
        ver: r.ver
      } : void 0,
      remaining: P || !R ? void 0 : {
        ...T(e, r, i.agentId),
        unread: D(C, r.requiredLines)
      },
      commit: x
    }
  } catch (d) {
    return l(d), L
  }
}

function V(e, i) {
  let n = i.getArtifactReadObservation(e.slug).ver;
  return n !== void 0 && n !== e.ver && (VF(n, e.ver) ?? 0) > 0
}

function j(e, i, n) {
  if (V(e, n)) return ee().pendingHandoverReads.delete(i), p("artifact_handover_read", "superseded"), !0;
  return !1
}

function F(e) {
  let i = e.map((t) => [t[0], t[1]]).sort((t, d) => t[0] - d[0]),
    n = [];
  for (let t of i) {
    let d = n.at(-1);
    if (d !== void 0 && t[0] <= d[1]) d[1] = Math.max(d[1], t[1]);
    else n.push(t)
  }
  return n
}

function E(e, i) {
  let n = e[0];
  return n !== void 0 && n[0] <= 0 && n[1] >= i
}

function q(e, i, n) {
  let t = ee().refusedPublishBodies.get(qU(i, e.slug)),
    d = e.confirmsResendFor.get(n);
  return d !== void 0 && (t === void 0 || t.batch !== d) ? void 0 : t
}

function Q(e, i, n, t, d) {
  if (j(e, i, n)) return !1;
  let r = q(e, n.agentId, d),
    o = r?.observedFrom;
  try {
    n.setArtifactReadVersion(e.slug, e.ver, F1(n.agentId, t))
  } finally {
    if (r !== void 0)
      if (o === void 0) delete r.observedFrom;
      else r.observedFrom = o
  }
  if (qce(n.getArtifactReadObservation(e.slug), e.ver, d)) return g("artifact_handover_read"), !0;
  return e.unrecordableBy.add(d), p("artifact_handover_read", "seed_not_persisted"), !1
}
async function Y(e, i, n) {
  try {
    return (await z(e)).size === i && M("sha256").update(await U(e)).digest("hex") === n ? "holds" : "changed"
  } catch (t) {
    return G(t) ? "changed" : "unreadable"
  }
}
export {
  qce,
  hdr,
  WTt,
  UYt,
  Fot,
  YAn,
  SKe,
  BYt,
  ydr,
  GQr,
  VQr,
  qQr,
  _dr,
  wKe,
  KQr,
  Yni
};
