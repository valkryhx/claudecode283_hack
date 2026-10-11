// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  zo,
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  h1,
  Ec,
  ed,
  Hl,
  P0,
  US,
  nf,
  gb,
  Sy,
  un,
  aC,
  Dg,
  iHr,
  pt,
  Im,
  kKn,
  Vun,
  yut,
  NMo,
  HMo,
  FMo,
  jk
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  q,
  j,
  H2,
  Wo
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  l,
  v,
  B,
  BBe
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Se,
  Xr
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  rE
} from "B:/~BUN/root/chunk-zksmb712.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  re,
  xr
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  It
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  $0,
  zDo
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  jye
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  dde,
  J0,
  af
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  Cn
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  mu,
  ie,
  ot,
  fo
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Ie,
  Os,
  Cy
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  Kb,
  _$t,
  x$e,
  Eye,
  wUr,
  TD,
  rAe
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  E3n,
  UNo,
  f$,
  lAe,
  T3n,
  WNo
} from "B:/~BUN/root/chunk-4h4gje25.js";
import {
  ppt,
  zRe,
  ine,
  o5e,
  rNo,
  oNo,
  sNo,
  O$r
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  vte
} from "B:/~BUN/root/chunk-5ym02gv2.js";
import {
  J6
} from "B:/~BUN/root/chunk-hecveget.js";
import {
  $Re,
  Dq,
  f$r
} from "B:/~BUN/root/chunk-6pbxcdg3.js";
import {
  Yce
} from "B:/~BUN/root/chunk-erkcnv3k.js";
import {
  o,
  E,
  M,
  ae,
  C,
  u,
  fe,
  z,
  A
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  ya
} from "B:/~BUN/root/chunk-nfc48pcb.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  readFileSync as $n
} from "fs";
import {
  join as Wn,
  resolve as Vn
} from "path";

function dDr(e, n, i, r, s, c) {
  let d = Ie();
  if (!(c?.ignoreEnvOptOut === !0 && d === "firstParty" && Cy() && !a.ANTHROPIC_UNIX_SOCKET) && zo(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER)) return "";
  let m = `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.283",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-09-25T00:44:42Z",GIT_SHA:"4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION}.${e}`,
    g = process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
    y = d === "firstParty" && Os() || d === "vertex" ? " cch=00000;" : "",
    _ = kKn(),
    S = _ ? ` cc_workload=${_};` : "",
    P = jk(n) && !n.isMainSession ? " cc_is_subagent=true;" : "",
    O = i !== void 0 && /^req_[A-Za-z0-9_-]{1,36}$/.test(i) && d === "firstParty" && Os() ? ` cc_prev_req=${i};` : "",
    Xe = r !== void 0 && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r) && d === "firstParty" && Os() ? ` cc_prompt_id=${r};` : "",
    Ze = typeof s === "string" && /^[a-z][a-z_]{0,31}$/.test(s) && d === "firstParty" && Os() ? ` cc_turn_origin=${s};` : "",
    pe = `x-anthropic-billing-header: cc_version=${m}; cc_entrypoint=${g};${y}${S}${P}${O}${Xe}${Ze}`;
  return t(`attribution header ${pe}`), pe
}

function gGn(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(rE))
}

function lIo(e) {
  if (e.isSubscriber) return {
    apiKey: null,
    authToken: e.oauthAccessToken ?? null
  };
  return {
    apiKey: e.apiKey,
    authToken: null
  }
}
import {
  createHash as he
} from "crypto";
import {
  closeSync as Qe,
  constants as me,
  fstatSync as nn,
  openSync as tn,
  readSync as rn
} from "fs";
import {
  unlink as on,
  open as sn
} from "fs/promises";
var x = 8,
  ge = 4096,
  an = ".stamp.json",
  ye = f(() => u({
    v: A(1),
    identity: o().regex(/^[0-9a-f]{64}$/),
    kind: z(["org", "key", "wif", "token"]),
    sha: o().min(1).max(128),
    confirmed_at: E().int().nonnegative(),
    hipaa_seen: C(o().regex(/^[0-9a-f]{64}$/)).max(x).default([]),
    hipaa_seen_incomplete: M().optional(),
    hipaa_ruled_out: C(o().regex(/^[0-9a-f]{64}$/)).max(x).optional()
  }));

function nFe(e) {
  return `${e}${an}`
}

function Ble(e) {
  return he("sha256").update(e.descriptor).digest("hex")
}

function Ahe(e) {
  return he("sha256").update(e).digest("hex").slice(0, 32)
}
var _e = {
  seen: [],
  incomplete: !1,
  ruledOut: []
};

function GLt(e) {
  return {
    seen: e.hipaa_seen,
    incomplete: e.hipaa_seen_incomplete === !0,
    ruledOut: e.hipaa_ruled_out ?? []
  }
}

function hGn(e, n) {
  switch (e.kind) {
    case "ok":
      return GLt(e.stamp);
    case "absent":
      return n;
    case "unusable":
      return {
        seen: n.seen, incomplete: !0, ruledOut: []
      }
  }
}

function be(e) {
  return e.incomplete ? {
    hipaa_seen_incomplete: !0,
    hipaa_ruled_out: e.ruledOut.slice(-x)
  } : {}
}

function Ce(e, n, i) {
  if (e === null || e.sha !== i) return {
    kind: "unstamped",
    hipaaSeen: e?.hipaa_seen ?? []
  };
  if (e.identity !== n) return {
    kind: "foreign",
    hipaaSeen: e.hipaa_seen
  };
  return {
    kind: "match",
    stamp: e
  }
}
var ln = new Set(["EMFILE", "ENFILE", "EAGAIN", "EBUSY", "EINTR"]);

function Ae(e) {
  let n = v(e);
  return n !== void 0 && ln.has(n) ? {
    kind: "unusable",
    cause: "io",
    code: n
  } : {
    kind: "unusable",
    cause: "content"
  }
}

function Dcn(e) {
  return e.kind === "unusable" && e.cause === "io"
}

function w(e) {
  let n = nFe(e),
    i;
  try {
    i = tn(n, me.O_RDONLY | mu);
    let r = nn(i);
    if (!r.isFile() || r.size > ge) return {
      kind: "unusable",
      cause: "content"
    };
    let s = Buffer.alloc(r.size),
      c = rn(i, s, 0, r.size, 0),
      d = ye().safeParse(ct(s.toString("utf-8", 0, c), !1));
    return d.success ? {
      kind: "ok",
      stamp: d.data
    } : {
      kind: "unusable",
      cause: "content"
    }
  } catch (r) {
    if (B(r)) return {
      kind: "absent"
    };
    return t(`Policy limits: stamp unreadable (${l(r)}); cache reads as unvouched`), Ae(r)
  } finally {
    if (i !== void 0) try {
      Qe(i)
    } catch {}
  }
}
async function rFe(e) {
  let n;
  try {
    n = await sn(nFe(e), me.O_RDONLY | mu);
    let i = await n.stat();
    if (!i.isFile() || i.size > ge) return {
      kind: "unusable",
      cause: "content"
    };
    let r = ye().safeParse(ct(await n.readFile({
      encoding: "utf-8"
    }), !1));
    return r.success ? {
      kind: "ok",
      stamp: r.data
    } : {
      kind: "unusable",
      cause: "content"
    }
  } catch (i) {
    return B(i) ? {
      kind: "absent"
    } : Ae(i)
  } finally {
    await n?.close().catch(() => {})
  }
}

function uDr({
  principal: e,
  bodySha: n,
  confirmedAt: i,
  bodyTaints: r,
  previous: s,
  authority: c
}) {
  let d = Ble(e),
    p = r.includes("hipaa"),
    m, g;
  if (c === "prior_evidence" && !p) m = s.seen.slice(), g = s.ruledOut.slice();
  else if (m = s.seen.filter((_) => _ !== d), g = s.ruledOut.filter((_) => _ !== d), p) m.push(d);
  else if (s.incomplete) g.push(d);
  let y = m.length > x;
  return {
    v: 1,
    identity: d,
    kind: e.kind,
    sha: n,
    confirmed_at: i,
    hipaa_seen: m.slice(-x),
    ...be({
      ...s,
      incomplete: s.incomplete || y,
      ruledOut: g
    })
  }
}
var cn = "0".repeat(64);

function cIo(e) {
  return {
    v: 1,
    identity: cn,
    kind: "token",
    sha: "none",
    confirmed_at: 0,
    hipaa_seen: e.seen.slice(-x),
    ...be(e)
  }
}
async function yGn(e, n) {
  await Cn(nFe(e), b(n), 384)
}
async function _Gn(e, n) {
  try {
    return await yGn(e, n), !0
  } catch (i) {
    return t(`Policy limits: failed to write the cache stamp - ${l(i)}`), !1
  }
}
async function dIo(e) {
  try {
    await on(nFe(e))
  } catch (n) {
    if (!B(n)) t(`Policy limits: failed to remove the cache stamp - ${l(n)}`)
  }
}
class Pe {
  notice = null;
  changed = Me();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) return;
    this.notice = e, this.changed.emit(this.notice)
  }
}
var dn = new q(() => new Pe);

function D() {
  return dn.of(j().host)
}

function xe(e) {
  D().replaceNotice(e)
}

function O6e() {
  return D().notice
}

function uIo(e) {
  return D().changed.subscribe(e)
}
var pDr = {
  subscribe: (e) => D().changed.subscribe(e),
  getSnapshot: O6e
};

function Re(e) {
  if (e === 9 || e === 10) return !1;
  return e < 32 || e >= 127 && e <= 159
}

function ve(e) {
  return e === 1564 || e >= 8234 && e <= 8238 || e >= 8294 && e <= 8297
}

function pn(e) {
  return e === 65038 || e === 65039
}

function fn(e) {
  return e >= 55296 && e <= 57343
}

function Te(e) {
  let n = e.codePointAt(0);
  if (e.length === 1) {
    if (n <= 31) return 0;
    if (ve(n)) return 1
  }
  let i = ie(e);
  return i === 0 ? 0 : i === 1 ? 1 : i
}
var k = 4096,
  BLt = /\u2026 \[\+\d+ graphemes\]/,
  hn = 4064,
  mn = 256;

function Oe(e) {
  if (e.length <= k) return e;
  return e.split(`
`).map((n) => {
    if (n.length <= k) return n;
    let i = [],
      r = "";
    for (let {
        segment: s
      }
      of ya().segment(n))
      if (r.length > 0 && r.length + s.length > mn) i.push(r), r = s;
      else r += s;
    if (r.length > 0) i.push(r);
    return i.join(`
`)
  }).join(`
`)
}

function ke(e) {
  let n = "",
    i = 0;
  for (let {
      segment: r
    }
    of ya().segment(e)) {
    n += r;
    let s = ie(n),
      c = s - i;
    if (i = s, c !== Te(r)) return !1
  }
  return !0
}

function gn(e) {
  let n = "",
    i = "",
    r = 0;
  for (let {
      segment: s
    }
    of ya().segment(e)) {
    i += s;
    let c = ie(i),
      d = c - r;
    r = c, n += d === Te(s) ? s : "\uFFFD"
  }
  return n
}

function Ee(e) {
  let n = e;
  for (let i = 0; i < 16; i++) {
    if (ke(n)) return n;
    let r = gn(n);
    if (r === n) break;
    n = r
  }
  if (ke(n)) return n;
  return [...ya().segment(n)].map(() => "\uFFFD").join("")
}

function yn(e, n) {
  let i = "";
  for (let {
      segment: r
    }
    of ya().segment(e)) {
    if (i.length + r.length > n) break;
    i += r
  }
  return i
}

function _n(e) {
  return we(e, hn)
}

function we(e, n) {
  let i = yn(e, n);
  if (i.length > 0) return i;
  let r = Math.min(n, e.length),
    s = e.charCodeAt(r - 1);
  if (s >= 55296 && s <= 56319) r -= 1;
  return e.slice(0, r)
}
var bn = 4 * k * k,
  G = 1024,
  Sn = 64 * G * G;

function An(e) {
  let n = bn,
    i = Sn,
    r = (s) => [...ya().segment(s)].length;
  return e.split(`
`).map((s) => {
    if (s === "") return s;
    if (/^\u2026 \[\+\d+ graphemes\]$/.test(s)) return s;
    let c = s.match(/\u2026 \[\+\d+ graphemes\]$/),
      d = c ? c[0] : "",
      p = c ? s.slice(0, s.length - d.length) : s,
      m = p.length > k,
      g = m ? _n(p) : p,
      y = m ? `\u2026 [+${r(p.slice(g.length))} graphemes]` : "",
      _ = g.length + y.length + d.length,
      S = _ * _;
    if (S <= n) return n -= S, Ee(g) + y + d;
    let P = we(p, G),
      V = P.length < p.length ? `\u2026 [+${r(p.slice(P.length))} graphemes]` : "",
      O = P.length + V.length + d.length,
      Y = O * O;
    if (P.length > 0 && Y <= i) return i -= Y, Ee(P) + V + d;
    return `\u2026 [+${r(p)} graphemes]` + d
  }).join(`
`)
}

function hI(e) {
  for (let n = 0; n < e.length; n++)
    if (Re(e.charCodeAt(n))) return !1;
  return !0
}

function zs(e) {
  return Le(e, !0)
}

function Le(e, n) {
  let i = "";
  for (let s of e) {
    let c = s.codePointAt(0);
    if (pn(c)) continue;
    i += Re(c) || ve(c) || fn(c) ? "\uFFFD" : s
  }
  let r = vte(i);
  return n ? An(r) : r
}
var Pn = /\p{DI}/gu;

function JHe(e) {
  return e.replace(Pn, "")
}

function pGn(e) {
  return cDr(e) === void 0
}

function cDr(e) {
  let n = xn.exec(e);
  if (n !== null) return n[0].codePointAt(0);
  if (En.test(e)) return;
  for (let {
      segment: i
    }
    of ya().segment(e)) {
    if (kn.test(i)) continue;
    let r = ie(i);
    if (r === 0) return i.codePointAt(0);
    if (r > 2 && i.length > 1) {
      for (let s of i)
        if (ie(s) === 0) return s.codePointAt(0)
    }
  }
  return
}
var xn = new RegExp(`(?![\\t\\n\\r])[${dde}]`, "u"),
  kn = /^[\t\n\r]+$/,
  En = /^[\t\n\r\x20-\x7e]*$/;

function $le(e) {
  return Le(JHe(af(e)), !1)
}
var Rn = /\p{Default_Ignorable_Code_Point}/u,
  vn = /\p{Cf}/u;

function In(e) {
  return e >= 8204 && e <= 8207 || e === 1564 || e >= 65024 && e <= 65039 || e >= 6155 && e <= 6159 || e === 10240
}

function F(e, n) {
  return Rn.test(e) || e === "\u2028" || e === "\u2029" || e === "\u2800" || n >= 55296 && n <= 57343 || n === 1109742 || vn.test(e)
}

function S6(e) {
  for (let n of e)
    if (F(n, n.codePointAt(0) ?? 0)) return !0;
  return !1
}

function Tn(e, n) {
  return F(e, n) && !In(n)
}

function De(e, n) {
  let i = "";
  for (let r of e) i += n(r, r.codePointAt(0) ?? 0) ? "\uFFFD" : r;
  return i
}

function On(e, n) {
  let i = Array.from(e),
    r = "";
  for (let s = 0; s < i.length; s++) {
    let c = i[s] ?? "";
    r += n(c, c.codePointAt(0) ?? 0, i[s - 1]?.codePointAt(0) ?? Number.NaN, i[s + 1]?.codePointAt(0) ?? Number.NaN) ? "\uFFFD" : c
  }
  return r
}

function Za(e) {
  return zs(De(e, Tn))
}

function QHe(e) {
  return Q(Ne(e))
}

function Ne(e) {
  return zs(De(e, F))
}
var Che = 2000,
  wn = 253;

function Icn(e) {
  return wn + (e.endsWith(".") && !e.endsWith("..") ? 1 : 0)
}
var E_ = 200000;

function Ln(e, n = Che) {
  return re(e, n) === e
}

function DR(e) {
  return e.includes(`
`) || ie(e) > 80
}

function jLt(e) {
  let n = re(e, Che),
    i = n.replace(/\t/g, " ");
  return n === e ? i : `${i}\u2026`
}

function I(e) {
  return ie(e.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0
}

function X(e) {
  return Array.from(e).filter((n) => Fe(n)).join("")
}

function Fe(e) {
  return ie(e.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0
}
var Dn = 8,
  Mn = /\p{M}/u;

function Nn(e) {
  return Mn.test(e) || !Fe(e)
}

function ig(e) {
  let n = "",
    i = 0,
    r = !1;
  for (let s of e) {
    if (s === `
`) {
      if (r) n += "\uFFFD", r = !1;
      n += s, i = 0;
      continue
    }
    if (!Nn(s)) {
      if (r) n += "\uFFFD", r = !1;
      n += s, i = 0;
      continue
    }
    if (i < Dn) {
      n += s, i++;
      continue
    }
    r = !0
  }
  return r ? `${n}\uFFFD` : n
}

function Q(e) {
  return zs(ig(e))
}

function Fn(e) {
  let n = Array.from(e),
    i = 0,
    r = n.length;
  while (i < r && !I(n[i] ?? "")) i++;
  while (r > i && !I(n[r - 1] ?? "")) r--;
  return n.slice(i, r).join("")
}

function Z(e, n) {
  let i = Array.from(Fn(e));
  return n === "end" ? i.at(-1) : i[0]
}

function He(e) {
  return Z(e, "end") === "\u2026"
}

function tIo(e) {
  let n = Array.from(e),
    i = n.length;
  for (;;) {
    let r = i;
    while (r > 0 && !I(n[r - 1] ?? "")) r--;
    if (r > 0 && n[r - 1] === "\u2026") {
      i = r - 1;
      continue
    }
    break
  }
  return n.slice(0, i).join("")
}

function Bz(e) {
  let n = [],
    i = !1;
  for (let r of Array.from(e)) {
    if (r !== `
` && !I(r)) {
      i = !0;
      continue
    }
    if (r === "\uFFFD" && i) {
      i = !1;
      continue
    }
    i = !1, n.push(r)
  }
  return I(n.join(""))
}

function Hn(e) {
  return /^[A-Za-z_$][\w$]*$/.test(e)
}

function ECe(e) {
  return QHe(e)
}

function N(e) {
  return Q(zs(On(e, (n, i, r, s) => {
    if (i === 65038 || i === 65039) return !(r > 127 || s === 8419);
    if (i === 8204 || i === 8205) return !(r > 127 && s > 127);
    if (i >= 6155 && i <= 6159) return !(r > 127);
    return F(n, i)
  })))
}

function l1(e) {
  if (e === void 0) return !1;
  let n = QHe(e).replace(/\uFFFD/g, "").replace(/\s+/g, " ").trim();
  return n !== "" && ie(n) > 0
}
var ZHe = 48,
  w0 = 256;

function Ste(e) {
  let n = ECe(re(e, w0)),
    i = n.replace(/\s+/g, " ").trim();
  return ot(Ocn(i, n, e.length > w0), ZHe)
}

function Ocn(e, n, i = !1) {
  let r = Z(e, "start") === '"' || Z(e, "end") === '"' || He(e);
  return e === n && !r && !i ? e : b(n)
}

function Ue(e) {
  let n = ECe(re(e, w0)),
    i = n.replace(/\s+/g, " ").trim();
  return Ocn(i, n, e.length > w0)
}

function Ule(e) {
  return re(e, w0) === e
}

function TCe(e, n) {
  let i = new Map,
    r = (d) => n(d).normalize("NFC");
  for (let d of e) {
    let p = r(d),
      m = i.get(p) ?? new Set;
    m.add(d), i.set(p, m)
  }
  let s = (d) => b(re(d, Che)).replace(/[\u007f-\uffff]/g, (p) => `\\u${p.charCodeAt(0).toString(16).padStart(4,"0")}`) + (d.length > Che ? "\u2026" : ""),
    c = new Map;
  return e.map((d) => {
    let p = r(d);
    if ((i.get(p)?.size ?? 0) <= 1) return n(d);
    let m = s(d),
      g = c.get(m) ?? new Map;
    c.set(m, g);
    let y = g.get(d) ?? g.size + 1;
    return g.set(d, y), y > 1 ? `${m} (#${y})` : m
  })
}

function WLt(e) {
  let n = new Map;
  for (let c of e) n.set(c, Hn(c) ? c : b(QHe(c)));
  let i = new Map;
  for (let c of n.values()) i.set(c, (i.get(c) ?? 0) + 1);
  let r = Un(e),
    s = new Map;
  for (let c of e) {
    let d = n.get(c) ?? "",
      p = (i.get(d) ?? 0) > 1 || r.has(c.normalize("NFC"));
    s.set(c, p ? b(c).replace(/[\u007f-\uffff]/g, (m) => `\\u${m.charCodeAt(0).toString(16).padStart(4,"0")}`) : d)
  }
  return s
}

function Un(e) {
  let n = new Map,
    i = new Set;
  for (let r of e) {
    let s = r.normalize("NFC"),
      c = n.get(s);
    if (c !== void 0 && c !== r) i.add(s);
    else n.set(s, r)
  }
  return i
}

function Wb(e) {
  return typeof e === "string" && x6e(e) ? "" : String(OX(e))
}

function OX(e) {
  let n = typeof e === "string" && !x6e(e) ? e : $Re;
  return Dq(Ste(n))
}

function x6e(e) {
  return e === "" || ie(re(e, w0)) === 0
}

function Bn(e) {
  return e.replace(/_+/g, " ").trim().replace(/\b\w/g, (n) => n.toUpperCase())
}

function nIo(e) {
  let n = re((e.scope === "claudeai" ? e.displayName : void 0) ?? "", w0),
    i = re(e.title ?? "", w0),
    r = N(re(e.serverName, w0)),
    s = l1(n) ? N(n) : Bz(r) ? r : "(unnamed server)",
    c = re(e.toolName, w0),
    d = ECe(Bn(c)),
    p = ECe(c),
    m = l1(i) ? N(i) : Bz(d) ? d : Bz(p) ? p : "(unnamed tool)";
  return Dq(ot(`${s} \u2014 ${m}`.replace(/\s+/g, " ").trim(), ZHe))
}

function Mcn(e) {
  return Dq(Rhe(e, "(unnamed tool)"))
}

function Rhe(e, n) {
  let i = Ste(e);
  return Bz(i) ? i : n
}

function ai(e) {
  if (typeof e !== "string") return {
    text: Dq(""),
    needsGutter: !1
  };
  let n = Q(Za(jLt(e)));
  return {
    text: Dq(n),
    needsGutter: DR(n)
  }
}

function jz(e) {
  if (typeof e !== "string") return null;
  if (!Ule(e) || e.trim() === "" || ie(e) === 0) return null;
  if (ig(e) !== e) return null;
  return {
    display: Dq(Ue(e))
  }
}
var R = "(value cannot be shown in full \u2014 approval withheld; one-time options only)",
  Kn = 1e4,
  zn = 64;

function J(e, n, i = 0) {
  if (typeof e === "string") {
    if (e.length + 2 > n.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let c = b(e);
    if (n.unitsRemaining -= c.length, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return c
  }
  if (typeof e === "number") {
    let c = Number.isFinite(e) ? String(e) : "null";
    if (n.unitsRemaining -= c.length, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return c
  }
  if (typeof e === "boolean" || e === null) {
    if (n.unitsRemaining -= String(e).length, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return String(e)
  }
  if (typeof e === "bigint") throw Error("bigint payload cannot be serialized");
  if (typeof e !== "object") return;
  if (i >= zn) throw Error("payload exceeds the serialization depth wall");
  if (Array.isArray(e)) {
    let c = e.length;
    if (typeof c !== "number" || !Number.isSafeInteger(c) || c < 0) throw Error("payload length is not an honest array length");
    if (n.elementsRemaining -= c, n.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
    if (n.unitsRemaining -= 2 + (c > 0 ? c - 1 : 0), n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    let d = [];
    for (let p = 0; p < c; p++) {
      let m = J(e[p], n, i + 1);
      if (m === void 0) {
        if (n.unitsRemaining -= 4, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
        d.push("null")
      } else d.push(m)
    }
    return `[${d.join(",")}]`
  }
  let r = Object.entries(e);
  if (n.elementsRemaining -= r.length, n.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
  if (n.unitsRemaining -= 2, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
  let s = [];
  for (let [c, d] of r) {
    let p = J(d, n, i + 1);
    if (p === void 0) continue;
    if (c.length + 2 > n.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let m = b(c);
    if (n.unitsRemaining -= m.length + 1 + (s.length > 0 ? 1 : 0), n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    s.push(`${m}:${p}`)
  }
  return `{${s.join(",")}}`
}

function T_(e, n) {
  let i;
  if (typeof e === "string") i = e;
  else try {
    let d = J(e, {
      unitsRemaining: n?.maxUnits ?? Che,
      elementsRemaining: Kn
    });
    if (d === void 0) return {
      kind: "withheld",
      marker: Dq(R)
    };
    i = d
  } catch {
    return {
      kind: "withheld",
      marker: Dq(R)
    }
  }
  if (!Ln(i, n?.maxUnits)) return {
    kind: "withheld",
    marker: Dq(R)
  };
  let r = n?.softWrap ? Oe(i) : i,
    s = (n?.scrub === "key" ? Ne(r) : Za(r)).replace(/\t/g, " "),
    c = n?.softWrap ? s.replaceAll(`
`, "") : s;
  if (BLt.test(c)) return {
    kind: "withheld",
    marker: Dq(R)
  };
  if (ig(s) !== s) return {
    kind: "withheld",
    marker: Dq(R)
  };
  return {
    kind: "full",
    text: Dq(s),
    needsGutter: DR(s)
  }
}

function yI(e) {
  let n = Za(e);
  return BLt.test(n) || Be(n)
}

function rIo(e) {
  return Be(Za(e))
}

function Be(e) {
  return ig(e) !== e
}

function fGn(e) {
  let n = ECe(re(e, w0)),
    i = n.replace(/\s+/g, " ").trim();
  return Ocn(i, n, i.includes(",") || i.includes(";") || X(i).includes(" and ") || X(i).startsWith("and ") || X(i).endsWith(" and") || e.length > w0 || ig(re(e, w0)) !== re(e, w0))
}

function uN(e, n = Ue) {
  return TCe(e, n).map((i) => Dq(i))
}

function Fs(e) {
  return e.replace(/[\n\r\u2028\u2029]/g, "\uFFFD")
}

function zLt(e, n) {
  let i = e.map((g) => T_(g, n)),
    r = new Map;
  e.forEach((g, y) => {
    let _ = i[y];
    if (_.kind === "full" && !r.has(g)) r.set(g, Fs(_.text).replace(/\s+/g, " ").trim())
  });
  let s = e.filter((g, y) => i[y].kind === "full"),
    c = uN(s, (g) => r.get(g) ?? ""),
    d = [],
    p = 0,
    m = 0;
  for (let g of i)
    if (g.kind === "full") d.push({
      text: String(c[p++]),
      withheld: !1
    });
    else m += 1, d.push({
      text: `${g.marker} (#${m})`,
      withheld: !0
    });
  return d
}

function P6e(e) {
  if (typeof e !== "string") return f$r("");
  return f$r(Za(e))
}

function wte(e) {
  if (typeof e !== "string") return null;
  let n = N(re(e, w0)).replace(/\t/g, " ");
  if (!Bz(xr(n))) return null;
  if (He(xr(n))) return null;
  return Dq(fo(n, 24, !0))
}

function oIo(e, ...n) {
  let i = e[0] ?? "";
  for (let r = 0; r < n.length; r++) i += n[r] ?? "", i += e[r + 1] ?? "";
  return Dq(i)
}

function eFe(e) {
  return /[\u0000-\u001f\u007f-\u009f]/.test(e) || S6(e)
}

function ee(e) {
  let n = re(J0(e, "").toLowerCase(), 64).trim();
  return /^[a-z0-9_-]+$/.test(n) ? n : ""
}
var I6e = 16;

function mGn(e) {
  let n = typeof e === "object" && e !== null && "compliance_taints" in e ? e.compliance_taints : void 0;
  if (!Array.isArray(n)) return 0;
  let i = U(n, (s) => typeof s !== "string" || ee(s) === ""),
    r = L(n.filter((s) => typeof s === "string").map(ee).filter((s) => s.length > 0));
  return i + Math.max(0, r.length - I6e)
}
var Ke = f(() => u({
    restrictions: fe(o(), u({
      allowed: M()
    })),
    compliance_taints: C(ae()).default([]).transform((e, n) => {
      let i = L(e.filter((r) => typeof r === "string").map(ee).filter((r) => r.length > 0)).slice(0, I6e);
      if (e.length > 0 && i.length === 0) n.addIssue({
        code: "custom",
        message: "compliance_taints had entries but none were well-formed regime names"
      });
      return i
    }),
    monitoring_notice: u({
      text: o().max(500).transform((e) => J0(e, "", {
        keepEmojiJoiners: !0
      })),
      url: o().max(2048).url().startsWith("https://").refine((e) => !eFe(e)).nullish().catch(null)
    }).nullable().default(null).catch(null),
    defaults: fe(o(), ae()).default({}).catch({})
  })),
  tFe = {
    restrictions: {},
    compliance_taints: [],
    monitoring_notice: null,
    defaults: {}
  },
  sIo = ["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "EHOSTUNREACH", "ENETUNREACH", "EPIPE", "CERT_ERROR", "ABORTED", "OTHER"],
  iIo = ["invalid_request_error", "authentication_error", "permission_error", "not_found_error", "rate_limit_error"],
  aIo = ["ip_not_in_allowed_range", "claude_code_key_creator_not_member", "organization_disabled", "organization_on_hold", "restricted_regime_endpoint", "oauth_not_allowed_for_organization", "oauth_scope_insufficient", "token_expired"];
var bGn = "policy-limits.json",
  qn = 5000,
  ze = 256,
  We = {
    kind: "absent"
  },
  SGn = 30000;

function wGn() {
  return Vun() ? We : w(Pw())
}

function vGn(e) {
  return e.kind === "absent" && !Vun() ? w(Pw()) : e
}
class pIo {
  sessionCache = null;
  lastFetchOutcome = null;
  settledWithoutVerdictFor = null;
  failOpenVerdict = !1;
  sessionFromServerFetch = !1;
  diskAdoptionSuppressed = !1;
  diskAdoptionEpoch = 0;
  storageV5 = void 0;
  lastStampVerdict = "none";
  lastStampMatchedIdentity = null;
  hipaaEvidence = _e;
  hipaaSeenUnreadable = !1;
  diskBodyChecksum = null;
  diskConfirmedAtMs = null;
  diskRefusedAtMs = null;
  hipaaEvidenceLoaded = !1;
  hintedTaints = [];
  hintedDeniedKeys = [];
  hintedEnforcedKeys = [];
  sessionAttributed = !1;
  attributedBearerDigest = null;
  principalFromOAuthBearer = !1;
  evidenceRereadForBearer = void 0;
  wifRecordedOrg = void 0;
  wifAccountDiverged = !1;
  wifSourceLocation = void 0;
  wifRecordProfile = void 0;
  oauthPrincipalMemo = null;
  storedLoginAccountAtWire = null;
  storedLoginNotedTokenDigest = null;
  tunnelSocket = void 0;
  cacheRevision = 0;
  verdictChanged = Me();
  heldStartSignal = Me();
  replaceSessionCache(e, n = !1, i = !1) {
    if (this.failOpenVerdict = e !== null && (n || this.failOpenVerdict && (i || e === this.sessionCache)), this.sessionCache = e, e === null) this.sessionAttributed = !1, this.attributedBearerDigest = null, this.evidenceRereadForBearer = void 0;
    this.cacheRevision++;
    let r = E3n(this.effectiveTaints());
    if (xe(e?.monitoring_notice ?? null), r) h1();
    this.emitVerdictChanged()
  }
  effectiveTaints(e = this.sessionCache?.compliance_taints ?? []) {
    return this.hintedTaints.length === 0 ? e : L([...this.hintedTaints, ...e]).slice(0, I6e)
  }
  dropHintedTaints() {
    if (this.hintedTaints.length === 0 && this.hintedDeniedKeys.length === 0 && this.hintedEnforcedKeys.length === 0) return;
    if (this.hintedTaints = [], this.hintedDeniedKeys = [], this.hintedEnforcedKeys = [], this.cacheRevision++, E3n(this.effectiveTaints())) h1();
    this.emitVerdictChanged()
  }
  hintFromRefusedBody(e) {
    if (this.sessionCache !== null && this.sessionAttributed) return;
    let n = e.compliance_taints.filter((p) => CDr.some(([m]) => m === p)),
      i = L([...this.hintedTaints, ...n]),
      r = Object.entries(e.restrictions).filter(([p, m]) => m?.allowed === !1 && !se(p)).map(([p]) => p),
      s = L([...this.hintedDeniedKeys, ...r]).slice(0, ze),
      c = Object.entries(e.restrictions).filter(([p, m]) => m?.allowed === !0 && se(p)).map(([p]) => p),
      d = L([...this.hintedEnforcedKeys, ...c]).slice(0, ze);
    if (i.length === this.hintedTaints.length && s.length === this.hintedDeniedKeys.length && d.length === this.hintedEnforcedKeys.length) return;
    if (this.hintedTaints = i, this.hintedDeniedKeys = s, this.hintedEnforcedKeys = d, this.cacheRevision++, E3n(this.effectiveTaints())) h1();
    this.emitVerdictChanged()
  }
  emitVerdictChanged() {
    try {
      this.heldStartSignal.emit()
    } catch (e) {
      t(`Policy limits: a held-start listener threw: ${l(e)}`, {
        level: "error"
      })
    }
    if (yut()) return;
    try {
      this.verdictChanged.emit()
    } catch (e) {
      t(`Policy limits: a verdict-change listener threw: ${l(e)}`, {
        level: "error"
      })
    }
  }
}
var S2o = new q(() => new pIo);

function h() {
  return S2o.of(j().host)
}

function VLt(e) {
  let n = h();
  n.sessionFromServerFetch = e !== null, n.replaceSessionCache(e)
}

function Lcn(e) {
  let n = h();
  n.sessionFromServerFetch = !1, n.replaceSessionCache(e)
}

function fDr() {
  let e = h();
  e.sessionFromServerFetch = !1, e.replaceSessionCache(tFe, !0)
}

function qct(e) {
  let n = h(),
    i = n.sessionCache !== null;
  if (!i) n.sessionFromServerFetch = !1, n.sessionAttributed = n.lastStampVerdict === "match", n.attributedBearerDigest = n.sessionAttributed ? qe() : null, n.evidenceRereadForBearer = void 0;
  n.replaceSessionCache(e, !1, i)
}

function mDr(e) {
  if (UNo(e)) h1()
}

function kGn(e, n, i = !0) {
  let r = h();
  if (r.lastFetchOutcome = e, e === null || e.success) r.settledWithoutVerdictFor = null;
  else if (!e.retrying && (i || !EGn(e))) {
    let s = e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && e.httpStatus !== null && (e.httpStatus === 404 || e.httpStatus >= 500);
    r.settledWithoutVerdictFor = s ? n ?? fIo() ?? "" : null
  }
  r.cacheRevision++, r.emitVerdictChanged()
}

function EGn(e) {
  return e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && (e.httpStatus === null || e.httpStatus >= 500 || e.httpStatus >= 400 && !BBe(e.httpStatus))
}

function xhe() {
  return h().lastFetchOutcome
}

function gDr() {
  h().storageV5 = void 0
}

function Phe() {
  return c1() !== void 0 || Wo()
}

function TGn() {
  return Phe() || h().diskAdoptionSuppressed
}

function v0() {
  return h().sessionCache
}

function qLt() {
  let e = h();
  e.diskAdoptionSuppressed = !0, e.diskAdoptionEpoch++
}

function M6e() {
  return h().diskAdoptionEpoch
}

function Ncn() {
  h().diskAdoptionSuppressed = !1
}

function CGn() {
  return h().diskAdoptionSuppressed
}

function Kct() {
  return h().cacheRevision
}

function hDr() {
  return yut() ? -1 : Kct()
}

function jle(e) {
  return h().verdictChanged.subscribe(e)
}

function oFe(e) {
  return h().heldStartSignal.subscribe(e)
}

function Pw() {
  return Wn(Se(), bGn)
}

function c1() {
  let e = h();
  if (e.tunnelSocket === void 0) {
    let n = a.ANTHROPIC_UNIX_SOCKET,
      i = a.CLAUDE_CODE_OAUTH_TOKEN,
      r = a.ANTHROPIC_API_KEY,
      s = !a.ANTHROPIC_AUTH_TOKEN && (i === rAe && !r || r === rAe && !i);
    e.tunnelSocket = n && s ? n : null
  }
  return e.tunnelSocket ?? void 0
}

function yDr() {
  h().tunnelSocket = void 0
}

function RGn(e = {}) {
  if (Ie() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !c1() && !Os()) return "custom_base_url";
  return
}

function C_() {
  return CCe() === void 0
}

function CCe(e = {}) {
  let n = RGn(e);
  if (n !== void 0) return n;
  if (c1()) return;
  try {
    let {
      key: r
    } = gb({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (r) return
  } catch {}
  if (ed()) return;
  let i = un();
  if (!i?.accessToken) return "no_auth";
  if (!i.scopes?.includes(rE)) return "oauth_no_inference_scope";
  if (i.subscriptionType == null) return;
  if (i.subscriptionType !== "enterprise" && i.subscriptionType !== "team") return "prosumer_oauth";
  return
}

function KLt() {
  let e = h();
  if (H() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  if (TGn()) return h().sessionCache;
  if (e.diskRefusedAtMs !== null && Date.now() - e.diskRefusedAtMs < qn) return null;
  let n = wGn();
  if (!e.hipaaEvidenceLoaded && !Vun()) T(n);
  let i;
  try {
    i = Ucn($n(Pw(), "utf-8"))
  } catch {
    return null
  }
  if (i === null) return null;
  try {
    return AGn(i, vGn(n))
  } catch (r) {
    return t(`Policy limits: cache admission failed (${l(r)}); cold start`, {
      level: "error"
    }), null
  }
}

function AGn(e, n) {
  let i = h();
  if (Vun()) return i.lastStampVerdict = "disabled", i.lastStampMatchedIdentity = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = null, e;
  let r = jye(Xct(e));
  if (T(n), n.kind === "absent") return i.lastStampVerdict = "legacy", i.lastStampMatchedIdentity = null, i.diskBodyChecksum = r, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = null, e;
  let s = n.kind === "ok" ? n.stamp : null,
    c = MX(),
    d = c === null ? "" : Ble(c),
    p = Ce(s, d, r);
  switch (i.lastStampMatchedIdentity = null, p.kind) {
    case "match":
      return i.lastStampVerdict = "match", i.lastStampMatchedIdentity = d, i.diskBodyChecksum = r, i.diskConfirmedAtMs = p.stamp.confirmed_at, i.diskRefusedAtMs = null, i.dropHintedTaints(), e;
    case "unstamped":
      return i.lastStampVerdict = "torn", i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = Date.now(), i.hintFromRefusedBody(e), t("Policy limits: the cache stamp does not vouch for the cached body; cold start (its compliance taints and explicit denials still deny)"), null;
    case "foreign":
      return i.lastStampVerdict = "foreign", i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = Date.now(), i.hintFromRefusedBody(e), t("Policy limits: the cache was written under another credential's identity; cold start (its compliance taints and explicit denials still deny until this credential's verdict lands)"), null
  }
}

function MX() {
  let e = h();
  if (e.principalFromOAuthBearer = !1, c1() !== void 0) return null;
  let n = null,
    i = "none";
  try {
    ({
      key: n,
      source: i
    } = gb())
  } catch {}
  if (!n && ed()) {
    if (e.wifAccountDiverged) return null;
    let r = Kb(),
      s = a.ANTHROPIC_PROFILE,
      c;
    try {
      if (c = (r === "env-quad" ? a.ANTHROPIC_ORGANIZATION_ID?.trim() : x$e()?.organizationUuid?.trim()) || "", c && e.wifSourceLocation === void 0) {
        if (r === "profile-implicit") {
          let g = TD();
          e.wifRecordProfile = g === null ? void 0 : Eye(g)
        } else if (r === "profile-explicit") e.wifRecordProfile = s;
        e.wifSourceLocation = ce(r)
      }
    } catch (g) {
      return t(`Policy limits: WIF profile unreadable (${l(g)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0, null
    }
    if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = c.toLowerCase() || null;
    else if (e.wifRecordedOrg !== (c.toLowerCase() || null)) return t("Policy limits: the WIF source now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = !0, null;
    if (!c) return null;
    let d = r === "env-quad" ? null : TD(),
      p = r === "env-quad" ? ce("env-quad") : s ? ue(d, s) : void 0;
    if (r === "profile-implicit" && s !== void 0 && s !== e.wifRecordProfile || r === "profile-explicit" && (s === void 0 || s !== e.wifRecordProfile) || p !== void 0 && p !== e.wifSourceLocation || p === void 0 && r !== "env-quad" && e.wifSourceLocation !== void 0 && (d === null ? e.wifSourceLocation !== "" : !e.wifSourceLocation.startsWith(ue(d, "")))) return t("Policy limits: the environment now selects a different WIF source than the one this process derived its principal from; its policy verdicts are session-only until restart"), e.wifAccountDiverged = !0, null;
    let m = en(c);
    if (m) return te(m);
    return {
      kind: "wif",
      descriptor: `wif:${Ahe([e.wifSourceLocation,c.toLowerCase()].join("\x00"))}`
    }
  }
  if (pt()) {
    let r = un()?.accessToken;
    if (!r) return null;
    return e.principalFromOAuthBearer = !0, jn(r)
  }
  if (i === "apiKeyHelper") return null;
  if (n) return {
    kind: "key",
    descriptor: `key:${Ahe(n)}`
  };
  return null
}

function _Dr() {
  let e = h();
  if (e.wifAccountDiverged || US() || !ed()) return;
  let n;
  try {
    n = e.wifSourceLocation !== void 0 && ce(Kb()) !== e.wifSourceLocation
  } catch (r) {
    t(`Policy limits: WIF profile selection unreadable (${l(r)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0;
    return
  }
  if (n) {
    e.wifAccountDiverged = !0, t("Policy limits: the active WIF source moved since this process derived its principal; its policy verdicts are session-only until restart");
    return
  }
  let i;
  try {
    if (Kb() === "env-quad") i = a.ANTHROPIC_ORGANIZATION_ID?.trim().toLowerCase() || null;
    else _$t(), i = x$e()?.organizationUuid?.trim().toLowerCase() ?? null
  } catch (r) {
    t(`Policy limits: WIF account record unreadable (${l(r)}); its policy verdicts are session-only until restart`), e.wifAccountDiverged = !0;
    return
  }
  if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = i;
  else if (e.wifRecordedOrg !== i) e.wifAccountDiverged = !0, t("Policy limits: the WIF profile now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart")
}
async function xGn(e, n) {
  let i = un()?.accessToken;
  if (!i) return;
  let r = h(),
    s = await Dg(n);
  if (s !== "store") {
    if (s !== "none") r.storedLoginNotedTokenDigest = Ahe(i);
    return
  }
  let c = await iHr(e),
    d = un()?.accessToken;
  if (!d) return;
  r.storedLoginNotedTokenDigest = Ahe(d), r.storedLoginAccountAtWire = {
    tokenDigest: Ahe(d),
    organizationUuid: d === i ? c : null
  }
}

function bDr() {
  let e = un()?.accessToken;
  if (!e) return !1;
  let n = h(),
    i = Ahe(e);
  if (n.storedLoginNotedTokenDigest !== i) return !0;
  let r = n.storedLoginAccountAtWire;
  return r !== null && r.tokenDigest === i && r.organizationUuid !== (en(Im()?.organizationUuid) ?? null)
}

function jn(e) {
  let n = h(),
    i = Im(),
    r = en(a.CLAUDE_CODE_ORGANIZATION_UUID),
    s = Ahe(e),
    c = n.storedLoginAccountAtWire,
    d = c !== null && c.tokenDigest === s ? c.organizationUuid : void 0,
    p = [s, r ?? "", i?.organizationUuid ?? "", d === void 0 ? "" : `fresh:${d??"-"}`, a.CLAUDE_CODE_OAUTH_TOKEN ? "env" : ""].join("|"),
    m = n.oauthPrincipalMemo;
  if (m?.key === p && (m.expiresAtMs === null || Date.now() < m.expiresAtMs)) return m.principal;
  let g = {
      kind: "token",
      descriptor: `token:${s}`
    },
    y = !1,
    _ = aC();
  switch (_) {
    case "store": {
      let S = en(i?.organizationUuid) ?? null;
      if (d !== void 0 && d !== S) g = {
        kind: "token",
        descriptor: `token:${s}`,
        unclassified: !0
      };
      else if (S) g = te(S);
      else g = {
        kind: "token",
        descriptor: `token:${s}`,
        storedLoginOrgless: !0
      };
      break
    }
    case "env":
    case "fd":
      if (_ === "fd" && H2() && !Ec()) g = null, y = !0;
      else if (r) g = {
        ...te(r),
        bearerDigest: s
      };
      break;
    case "none":
      g = {
        kind: "token",
        descriptor: `token:${s}`,
        unclassified: !0
      };
      break
  }
  return n.oauthPrincipalMemo = {
    key: p,
    principal: g,
    daemonSnapshotWorker: y,
    expiresAtMs: _ === "none" || g === null ? Date.now() + SGn : null
  }, g
}

function te(e) {
  return {
    kind: "org",
    descriptor: `org:${e.toLowerCase()}`
  }
}

function PGn() {
  let e = h();
  e.sessionAttributed = !0, e.attributedBearerDigest = qe(), e.evidenceRereadForBearer = void 0, e.dropHintedTaints()
}

function Ve() {
  let e = un()?.accessToken;
  return e ? Ahe(e) : null
}

function qe() {
  let e = h();
  try {
    MX()
  } catch {
    return null
  }
  return e.principalFromOAuthBearer ? Ve() : null
}

function Hcn() {
  let e = h();
  e.sessionAttributed = !1, e.attributedBearerDigest = null, e.evidenceRereadForBearer = void 0
}

function fIo() {
  let e = MX();
  return e === null ? null : Ble(e)
}

function Fcn() {
  return h().lastStampVerdict
}

function SDr() {
  return h().lastStampMatchedIdentity
}

function wDr() {
  let e = h();
  if (!e.hipaaEvidenceLoaded) T(je());
  return e.hipaaEvidence
}

function T(e) {
  let n = h();
  if (n.hipaaEvidenceLoaded = !Dcn(e), e.kind === "ok") n.hipaaEvidence = GLt(e.stamp);
  else if (e.kind === "unusable" && !Dcn(e)) n.hipaaSeenUnreadable = !0
}

function je() {
  return Phe() ? We : w(Pw())
}

function $cn() {
  return h().hipaaEvidence
}

function mIo() {
  let e;
  try {
    e = MX()
  } catch (r) {
    t(`Policy limits: principal unreadable for the evidence tier (${l(r)}); judged on the machine's evidence`, {
      level: "error"
    }), e = {
      kind: "token",
      descriptor: "token:unreadable",
      unclassified: !0
    }
  }
  if (e === null) {
    let r = h().oauthPrincipalMemo;
    if (!r?.daemonSnapshotWorker || r.principal !== null) return !1;
    let s = wDr();
    return s.seen.length > 0 || s.incomplete
  }
  let n = wDr();
  if (Ye(e)) {
    let r = e.storedLoginOrgless === !0 && e.unclassified !== !0 && n.ruledOut.includes(Ble(e));
    return n.seen.length > 0 || n.incomplete && !r
  }
  let i = Ble(e);
  return n.seen.includes(i) || n.incomplete && !n.ruledOut.includes(i)
}

function Ye(e) {
  return e.unclassified === !0 || e.storedLoginOrgless === !0
}

function IGn(e, n, i) {
  let r = h();
  r.diskBodyChecksum = e, r.diskConfirmedAtMs = i, r.hipaaEvidence = n, r.hipaaEvidenceLoaded = !0, r.diskRefusedAtMs = null
}

function sFe(e) {
  let n = h(),
    {
      hipaaEvidence: i,
      hipaaSeenUnreadable: r
    } = n;
  if (T(e), r !== n.hipaaSeenUnreadable || !Yn(i, n.hipaaEvidence)) n.cacheRevision++, n.emitVerdictChanged()
}

function Yn(e, n) {
  return e.incomplete === n.incomplete && e.seen.length === n.seen.length && e.seen.every((i, r) => i === n.seen[r]) && e.ruledOut.length === n.ruledOut.length && e.ruledOut.every((i, r) => i === n.ruledOut[r])
}

function vDr() {
  return h().diskBodyChecksum
}

function kDr() {
  return h().diskConfirmedAtMs
}

function OGn(e, n) {
  let i = h();
  if (e !== void 0 && i.diskBodyChecksum === e && i.diskConfirmedAtMs !== null) i.diskConfirmedAtMs = n
}

function Yct() {
  let e = h();
  e.diskBodyChecksum = null, e.diskConfirmedAtMs = null, e.diskRefusedAtMs = null, e.hipaaEvidenceLoaded = !1, e.lastStampVerdict = "none", e.lastStampMatchedIdentity = null, e.dropHintedTaints()
}

function Ucn(e) {
  let n = YLt(ct(e, !1));
  return n.success ? n.data : null
}
var Ge = new WeakMap;

function YLt(e) {
  let n = Ke().safeParse(e);
  if (n.success) Ge.set(n.data, e);
  return n
}

function Xct(e) {
  return Ge.get(e) ?? e
}

function MGn(e, n) {
  let i = h();
  if (i.storageV5 = e, n !== null && i.sessionCache === null && !i.diskAdoptionSuppressed) qct(n)
}
var EDr = {
  allow_product_feedback: {
    deniedUnder: ["hipaa", "zdr"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Feedback",
    verb: "is",
    requirementId: "HIPAA-R1"
  },
  allow_web_fetch: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Web fetch",
    verb: "is",
    requirementId: "HIPAA-R3"
  },
  allow_memory_sync: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "allow",
    label: "Memory sync",
    verb: "is",
    requirementId: "HIPAA-R5",
    hardBlockUnder: ["hipaa"]
  },
  allow_design_sync: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "Design sync",
    verb: "is",
    requirementId: "HIPAA-R9"
  },
  allow_projects_tool: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Projects",
    verb: "are",
    requirementId: "HIPAA-R17",
    hardBlockUnder: ["hipaa"]
  },
  allow_claude_browser_extension: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Claude in Chrome",
    verb: "is",
    requirementId: "HIPAA-R34"
  },
  allow_remote_sessions: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Cloud sessions",
    verb: "are",
    requirementId: "HIPAA-R6"
  },
  allow_remote_control: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Remote Control",
    verb: "is",
    requirementId: "HIPAA-R6"
  },
  allow_cobalt_plinth: {
    deniedUnder: ["hipaa", "zdr"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Artifacts",
    verb: "are",
    requirementId: "HIPAA-R16"
  },
  allow_team_onboarding: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "hold",
    label: "Team onboarding",
    verb: "is",
    requirementId: "HIPAA-R13",
    hardBlockUnder: ["hipaa"]
  },
  allow_error_reporting: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Error reporting",
    verb: "is",
    requirementId: "HIPAA-R19"
  },
  allow_auto_mode_sibling_docs: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Repository lookups",
    verb: "are",
    requirementId: "HIPAA-R36"
  },
  allow_send_file: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "File upload",
    verb: "is",
    requirementId: "HIPAA-R37"
  },
  allow_heap_dump: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Heap dumps",
    verb: "are",
    requirementId: "HIPAA-R38"
  },
  allow_local_checkpoint_commit: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Usage-limit checkpoints",
    verb: "are",
    requirementId: "HIPAA-R39"
  },
  ...{},
  allow_plugin_skill_search: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Plugin and skill search",
    verb: "is",
    requirementId: "HIPAA-R26"
  },
  allow_plugin_directory_search: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "The plugin directory",
    verb: "is",
    requirementId: "HIPAA-R35"
  },
  allow_connector_suggest: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Connector suggestions",
    verb: "are",
    requirementId: "HIPAA-R43"
  },
  ...{},
  allow_account_skills_sync: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account skills sync",
    verb: "is",
    requirementId: "HIPAA-R29"
  },
  allow_account_plugins_sync: {
    deniedUnder: ["hipaa"],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account plugins sync",
    verb: "is",
    requirementId: "HIPAA-R30"
  },
  allow_mycelium: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Peer messaging",
    verb: "is",
    requirementId: "HIPAA-R25",
    hardBlockUnder: ["hipaa"]
  },
  ...{},
  allow_usage_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage patterns",
    verb: "are",
    requirementId: "HIPAA-R31"
  },
  allow_skill_doctor_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Skill token counts",
    verb: "are",
    requirementId: "HIPAA-R32"
  },
  allow_insights: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Insights",
    verb: "are",
    requirementId: "HIPAA-R40"
  },
  allow_stats_transcript_scan: {
    deniedUnder: ["hipaa"],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage stats",
    verb: "are",
    requirementId: "HIPAA-R42"
  },
  ...{},
  allow_model_catalog: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "allow",
    label: "The model catalog",
    verb: "is",
    requirementId: "HIPAA-R33"
  },
  allow_container_result_files: {
    deniedUnder: ["hipaa", "zdr"],
    onCacheMiss: "deny",
    label: "Saving large tool results in the tool container",
    verb: "is",
    requirementId: "HIPAA-R53"
  },
  allow_promo_offers: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Promotional offers",
    verb: "are",
    requirementId: "HIPAA-R54"
  },
  allow_previous_conversation_pointer: {
    deniedUnder: ["hipaa"],
    onCacheMiss: "deny",
    label: "Linking a new conversation to the one it replaces",
    verb: "is",
    requirementId: "HIPAA-R58"
  }
};

function TDr(e) {
  return Object.hasOwn(EDr, e)
}

function Jct(e) {
  return TDr(e) ? EDr[e] : void 0
}
var $e = new Set(["hipaa"]);

function w2o(e) {
  return Jct(e)?.serverPopulated === !0 && !NMo()
}

function gIo(e) {
  return Jct(e)?.transcriptScan === !0 && !FMo()
}

function W() {
  return Object.keys(EDr).filter(TDr)
}

function w6(e) {
  let n = Jct(e);
  return {
    featureLabel: n?.label ?? e,
    verb: n?.verb ?? "is"
  }
}
var CDr = W().flatMap((e) => (Jct(e)?.deniedUnder ?? []).map((n) => [n, e])),
  v2o = W().flatMap((e) => (Jct(e)?.hardBlockUnder ?? []).map((n) => [n, e])),
  k2o = new Set(W().filter((e) => Jct(e)?.onCacheMiss !== "allow")),
  RDr = new Set(W().filter((e) => Jct(e)?.onCacheMiss === "hold")),
  Gn = new Set(["allow_product_feedback"]),
  Xn = new Set(["allow_web_fetch", "allow_design_sync"]);

function oe(e) {
  if (!Xn.has(e) || !C_() || HMo()) return !1;
  let n = h();
  if (n.sessionCache !== null && n.sessionAttributed) {
    let i = Ve();
    if (i !== null && i === n.attributedBearerDigest) return !1;
    if (n.evidenceRereadForBearer !== i) n.evidenceRereadForBearer = i, n.hipaaEvidenceLoaded = !1;
    let r = wDr();
    if (r.seen.length === 0 && !r.incomplete || !Zn()) return !1
  }
  return mIo()
}

function Zn() {
  try {
    let e = MX();
    return e !== null && Ye(e)
  } catch {
    return !0
  }
}

function Xt(e) {
  let n = UE();
  if (gIo(e)) {
    let s = n?.restrictions[e];
    if (s) return s.allowed;
    return !(C_() && h().hintedDeniedKeys.includes(e))
  }
  if (!n) {
    if (k2o.has(e)) {
      if (C_() && !(RDr.has(e) && RCe() && !ACe())) return !1;
      if (Gn.has(e) && It() && !(e === "allow_product_feedback" && J6())) return !1
    }
    if (K(e, T3n())) return !1;
    if (oe(e)) return !1;
    let s = h();
    if (s.hintedDeniedKeys.length === 0 && s.hintedTaints.length === 0) return !0;
    if (!C_()) return !0;
    if (s.hintedDeniedKeys.includes(e)) return !1;
    return XLt({
      restrictions: {},
      compliance_taints: []
    }, e, s.hintedTaints)
  }
  let i = h();
  if (n.restrictions[e] === void 0 && i.hintedDeniedKeys.includes(e)) return !1;
  if (RDr.has(e) && uq() && !(RCe() && !ACe())) return !1;
  if (oe(e)) return !1;
  let r = i.sessionFromServerFetch;
  return XLt({
    restrictions: n.restrictions,
    compliance_taints: r ? n.compliance_taints : []
  }, e, [...T3n(), ...i.hintedTaints, ...r ? [] : n.compliance_taints])
}

function XLt(e, n, i = []) {
  let r = e.compliance_taints;
  if (v2o.some(([d, p]) => p === n && (r.includes(d) || i.includes(d)))) return !1;
  let s = e.restrictions[n];
  if (s) return s.allowed;
  if (gIo(n)) return !0;
  let c = w2o(n) ? [...i.filter((d) => !($e.has(d) && r.includes(d))), ...r.filter((d) => !$e.has(d))] : [...i, ...r];
  return !K(n, c)
}

function ADr(e) {
  if (e.compliance_taints.some((n) => CDr.some(([i]) => i === n))) return !1;
  if (Object.keys(e.defaults ?? {}).length > 0 || e.monitoring_notice !== null && e.monitoring_notice !== void 0) return !1;
  return Object.entries(e.restrictions).every(([n, i]) => se(n) ? i?.allowed !== !0 : i?.allowed !== !1)
}

function se(e) {
  return e.startsWith("enforce_") || e.startsWith("require_")
}

function K(e, n) {
  if (n.length === 0) return !1;
  for (let [i, r] of CDr)
    if (r === e && n.includes(i)) return !0;
  return !1
}
WNo({
  isPolicyAllowed: (e) => Xt(e),
  commandPolicyGateAllows: (e) => E2o(e),
  policyDenyKind: (e) => Iw(e),
  policyDeniedReason: (e, n, i) => kf(e, n, i),
  complianceTaintsSettled: () => LGn(),
  policyLimitsCacheLoaded: () => pq()
});

function E2o(e) {
  if (!TDr(e)) return t(`[policy] policyGate names unknown policy key "${e}"; denying`, {
    level: "warn"
  }), !1;
  return Xt(e)
}

function uq() {
  if (!C_()) return !1;
  return UE() === null || h().failOpenVerdict
}

function RCe() {
  if (!uq()) return !1;
  let e = h();
  if (e.settledWithoutVerdictFor === null) return !1;
  let n;
  try {
    n = fIo()
  } catch {
    return !1
  }
  return e.settledWithoutVerdictFor === (n ?? "")
}

function ACe() {
  let e;
  try {
    e = MX()
  } catch {
    return !0
  }
  if (e === null || e.unclassified) return !0;
  let n = h();
  if (!n.hipaaSeenUnreadable) T(je());
  let i = mIo();
  return n.hipaaSeenUnreadable || !n.hipaaEvidenceLoaded || i
}

function iFe() {
  if (!C_() || UE() !== null) return !1;
  return le()
}

function le() {
  let e = h().lastFetchOutcome;
  return e !== null && !e.success && e.httpStatus === 404
}

function kf(e, n, i, r) {
  if (Xt(e)) return null;
  if (iFe()) return o5e(n);
  switch (Iw(e)) {
    case "route_missing":
      return o5e(n);
    case "cache_miss":
      return ine(n);
    case "latched":
      return zRe(n, i);
    case "org_denied":
    case null:
      return ppt(n, i, lAe(), r)
  }
}

function xDr() {
  return Yce(f$()).length > 0
}

function Iw(e) {
  if (Xt(e)) return null;
  if (DGn(e)) return "latched";
  if (UE() !== null) {
    if (RDr.has(e) && uq()) return le() ? "route_missing" : "cache_miss";
    if (!oe(e)) return "org_denied";
    return le() ? "route_missing" : "cache_miss"
  }
  return iFe() ? "route_missing" : "cache_miss"
}

function DGn(e) {
  if (!K(e, T3n()) || K(e, lAe())) return !1;
  if (UE() === null) return !0;
  return de()?.[e]?.allowed !== !1
}

function PDr(e) {
  let n = Iw(e);
  if (n === null) return null;
  if (iFe()) return O$r();
  switch (n) {
    case "route_missing":
      return O$r();
    case "cache_miss":
      return sNo();
    case "latched":
      return oNo();
    case "org_denied":
      return rNo(lAe())
  }
}

function LGn() {
  if ($0() || zDo() || !Cy() || Ie() !== "firstParty" || a.ANTHROPIC_UNIX_SOCKET !== void 0 || Sy() !== void 0 || P0() !== void 0 && !gGn({
      anthropicAuthEnabled: Hl(),
      oauthScopes: un()?.scopes
    })) return !1;
  if (UE() !== null) return !0;
  let e = un();
  return (e?.subscriptionType === "pro" || e?.subscriptionType === "max") && e.scopes?.includes(rE) === !0 && aC() === "store" && !Xr() && !nf({
    skipRetrievingKeyFromApiKeyHelper: !0
  }).key && !ed()
}

function NGn(e) {
  if (!C_()) return !1;
  let n = h();
  return n.hintedDeniedKeys.includes(e) || !XLt({
    restrictions: {},
    compliance_taints: []
  }, e, n.hintedTaints)
}

function w6o(e) {
  return de()?.[e]?.allowed === !0
}

function JLt(e) {
  let n = de();
  if (n?.[e]?.allowed === !0) return !0;
  let i = h();
  return i.hintedEnforcedKeys.includes(e) && n?.[e] === void 0 && (n === null || !i.sessionAttributed) && C_()
}

function IDr(e) {
  let n = UE()?.defaults[e];
  return typeof n === "boolean" ? n : void 0
}

function UE() {
  if (!C_()) return null;
  let e = h();
  if (e.sessionCache) return e.sessionCache;
  if (e.diskAdoptionSuppressed) return null;
  let n = KLt();
  if (n) return qct(n), n;
  return null
}

function pq() {
  if (!C_()) return !0;
  return UE() !== null
}

function de() {
  return UE()?.restrictions ?? null
}

function ce(e) {
  if (e === "env-quad") return a.ANTHROPIC_FEDERATION_RULE_ID?.trim() ?? "";
  let n = TD();
  return n === null || e === null ? "" : ue(n, wUr(n))
}

function ue(e, n) {
  return e === null ? "" : `${Vn(e)}\x00${n}`
}
export {
  BLt,
  hI,
  zs,
  JHe,
  pGn,
  cDr,
  $le,
  S6,
  Za,
  QHe,
  Che,
  Icn,
  E_,
  DR,
  jLt,
  ig,
  tIo,
  Bz,
  ECe,
  l1,
  ZHe,
  w0,
  Ste,
  Ocn,
  Ule,
  TCe,
  WLt,
  Wb,
  OX,
  x6e,
  nIo,
  Mcn,
  Rhe,
  ai,
  jz,
  T_,
  yI,
  rIo,
  fGn,
  uN,
  Fs,
  zLt,
  P6e,
  wte,
  oIo,
  eFe,
  I6e,
  mGn,
  tFe,
  sIo,
  iIo,
  aIo,
  dDr,
  gGn,
  lIo,
  nFe,
  Ble,
  Ahe,
  GLt,
  hGn,
  Dcn,
  rFe,
  uDr,
  cIo,
  yGn,
  _Gn,
  dIo,
  O6e,
  uIo,
  pDr,
  bGn,
  SGn,
  wGn,
  vGn,
  pIo,
  S2o,
  VLt,
  Lcn,
  fDr,
  qct,
  mDr,
  kGn,
  EGn,
  xhe,
  gDr,
  Phe,
  TGn,
  v0,
  qLt,
  M6e,
  Ncn,
  CGn,
  Kct,
  hDr,
  jle,
  oFe,
  Pw,
  c1,
  yDr,
  RGn,
  C_,
  CCe,
  KLt,
  AGn,
  MX,
  _Dr,
  xGn,
  bDr,
  PGn,
  Hcn,
  fIo,
  Fcn,
  SDr,
  wDr,
  $cn,
  mIo,
  IGn,
  sFe,
  vDr,
  kDr,
  OGn,
  Yct,
  Ucn,
  YLt,
  Xct,
  MGn,
  EDr,
  TDr,
  Jct,
  w2o,
  gIo,
  w6,
  CDr,
  v2o,
  k2o,
  RDr,
  Xt,
  XLt,
  ADr,
  E2o,
  uq,
  RCe,
  ACe,
  iFe,
  kf,
  xDr,
  Iw,
  DGn,
  PDr,
  LGn,
  NGn,
  w6o,
  JLt,
  IDr,
  UE,
  pq
};
