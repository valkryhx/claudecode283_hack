// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  _
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Ua
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  it
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  tT
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Sn
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  Fd
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  cn,
  Um,
  $Me,
  Le,
  Yt,
  DEe,
  il,
  Hn,
  qM,
  ZH,
  PFr,
  Rl,
  wW,
  Sb,
  Acn
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  Jm
} from "B:/~BUN/root/chunk-8tjgv4bf.js";
import {
  k3,
  NN,
  VAo,
  YNt,
  Ksn,
  qAo
} from "B:/~BUN/root/chunk-ggdk44cm.js";
import {
  Oc
} from "B:/~BUN/root/chunk-neajqqs3.js";
import {
  Mae,
  kFt,
  gh
} from "B:/~BUN/root/chunk-gt1x0gdb.js";
import {
  lu
} from "B:/~BUN/root/chunk-p64g0hj8.js";
import {
  Pf,
  zv
} from "B:/~BUN/root/chunk-cw2ph5fw.js";
import {
  EE
} from "B:/~BUN/root/chunk-grt0b3xy.js";
import {
  kt,
  pFt,
  R3,
  Qu,
  eXe,
  UC,
  Id
} from "B:/~BUN/root/chunk-ydtn2zrk.js";
import {
  jg,
  MS,
  Fh,
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  V3t,
  Dls
} from "B:/~BUN/root/chunk-7sgsvmmg.js";
import {
  Z$,
  J3t
} from "B:/~BUN/root/chunk-khznyweq.js";
import {
  Voe,
  zw,
  CAe,
  WY,
  Yst
} from "B:/~BUN/root/chunk-kjk3ptap.js";
import {
  UX,
  UN
} from "B:/~BUN/root/chunk-66hg7026.js";
import {
  FCt,
  FY,
  P1,
  D8,
  X$,
  Loe,
  Wp,
  vE
} from "B:/~BUN/root/chunk-cfst22ma.js";
import {
  x1,
  DCt
} from "B:/~BUN/root/chunk-r4yejzt5.js";
import {
  UL,
  iAe
} from "B:/~BUN/root/chunk-k4hy19cw.js";
import {
  LZr,
  wE,
  UKe
} from "B:/~BUN/root/chunk-yzkbrvfz.js";
import {
  NRt,
  iro,
  aro,
  lro,
  ST,
  u5t,
  p5t
} from "B:/~BUN/root/chunk-3cvce3jg.js";
import {
  N3t,
  YA,
  Am,
  iue,
  Mbe
} from "B:/~BUN/root/chunk-0s5a84zv.js";
import {
  l7
} from "B:/~BUN/root/chunk-jyg55gdv.js";
import {
  lG,
  rD
} from "B:/~BUN/root/chunk-n0e205s6.js";
import {
  pr
} from "B:/~BUN/root/chunk-j1zjtkgf.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";
import {
  join as E
} from "path";
var w = null;

function GQo(e, t) {
  return e.getAppState().frameUrls[t]
}

function Gkt(e, t) {
  return e ? {
    type: "safetyCheck",
    reason: t,
    classifierApprovable: !1
  } : {
    type: "other",
    reason: t
  }
}

function Mg(e, t) {
  let n = wW(kt(e.slug)?.title || rD(t.getAppState().frameUrls).find(([, r]) => r.title && il(r.url) === e.slug)?.[1].title);
  return {
    url: Hn(e),
    ...n && {
      title: n
    }
  }
}

function VQo(e, t, n) {
  let r = `${lG}${t.slug}`,
    i = r,
    a = !1,
    s = !1;
  return e.setAppState((o) => {
    let [l, u] = Object.entries(o.frameUrls).find(([, d]) => il(d.url) === t.slug) ?? [];
    if (a = l !== void 0 && u?.dismissed !== !0, i = l !== void 0 && l !== r ? l : r, s = o.frameOpenFailedPath === i, l !== void 0 && u?.dismissed === !0) {
      let {
        dismissed: d,
        ...y
      } = u;
      return {
        ...o,
        frameUrls: {
          ...o.frameUrls,
          [l]: y
        }
      }
    }
    if (a && o.frameUrls[r] === void 0) return o;
    let {
      [r]: p, ...f
    } = o.frameUrls;
    return {
      ...o,
      frameUrls: {
        ...f,
        [r]: {
          url: Hn(t),
          updatedAt: Date.now(),
          ...(n ?? p?.title) !== void 0 && {
            title: n ?? p?.title
          }
        }
      }
    }
  }), {
    rowKey: i,
    alreadyShown: a,
    lastOpenFailed: s
  }
}

function nEn(e, t, n) {
  e.setAppState((r) => {
    if (n) return r.frameOpenFailedPath === t ? {
      ...r,
      frameOpenFailedPath: null
    } : r;
    if (r.frameOpenFailedPath === t) return r;
    return {
      ...r,
      frameOpenFailedPath: t,
      frameOpenFailedSeen: !1
    }
  })
}

function yrt(e, t) {
  return Id(e) && P1(e) && !X$(e) ? " (yours; a co-writer has also published to it)" : t === "files" && Id(e) && D8(e) ? " (yours; its files come from an Artifact type its publisher wrote)" : Qu(e)
}

function asr(e, t) {
  return Id(e) && P1(e) && !X$(e) ? " [ownership: yours, co-written: a non-owner has also published to it]" : t === "files" && Id(e) && D8(e) ? Acn : `${UC(e)}${R3(e)}`
}

function O(e) {
  return _([e.path, e.from.slug, e.from.path, e.from.ver ?? ""])
}

function a5r(e) {
  return L(e.map(O)).sort().join(`
`)
}

function lsr(e, t) {
  return (e ?? "") === a5r(t)
}

function _rt(e, t) {
  let {
    mode: n,
    modeBeforeRewrite: r
  } = le(e);
  if (n === "auto" || r === "auto") return !1;
  return UX(e.getAppState(), n === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs", t)
}

function dsr(e, t, n, r, i, a, s = !1) {
  let o = i && !X$(kt(n.slug));
  if (x1(t) && (o || s) && r && !FY(e, t) && !iAe(t, n, Id(kt(n.slug))) && (jg(t) || MS(t) || UL(t))) throw m("artifact_cowritten_consent", "refused_unasked", {
    assets: a === "assets",
    ...!o && {
      from_type: !0
    }
  }), new Le(o ? `a co-writer has published to this artifact, so its ${a} are someone else's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)` : `this artifact was created from an Artifact type, so its ${a} are the type publisher's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`, `${a==="files"?"file":"asset"}_${o?"cowritten":"from_type"}_unasked`)
}

function dqt(e, t, n) {
  return m("artifact_outside_org_consent", "refused_unasked", {
    assets: t === "asset_copy"
  }), new Le(DCt(e, !0, t === "file_copy" ? {
    retryUrl: n
  } : void 0), `${t}_outside_org_unasked`)
}

function rEn(e, t, n) {
  if (e === Mae) D(t, n)
}

function D(e, t) {
  throw m("artifact_outside_org_consent", "refused_unasked", {
    assets: t !== "files"
  }), new Le(DCt(e), `${t==="files"?"file":"asset"}_outside_org_unasked`)
}

function fqe(e) {
  let {
    assetId: t,
    outDir: n
  } = Loe(e);
  if (t === void 0 || !Um.test(t)) return;
  let r, i = !1;
  try {
    if (n === void 0 || n === "") {
      let {
        url: a
      } = e, s = typeof a === "string" ? Yt(a) : null, o = s !== null ? l7(s.slug) : null;
      i = o !== null, r = o ?? ce()
    } else r = it(n)
  } catch {
    return
  }
  return {
    stem: E(r, t),
    ...i && {
      defaultDir: !0
    }
  }
}

function RR(e, t = "", n = "url") {
  if (DEe(e) === void 0) return;
  let r = Yt(e),
    i = r !== null ? ` (${Hn(r)})` : "";
  return {
    result: !1,
    message: `\`${n}\` names a path inside the artifact \u2014 pass the artifact's own URL${i} as \`${n}\`${t}.`,
    errorCode: 4
  }
}

function OV(e) {
  let t = (l) => {
      let u = e[l];
      return typeof u === "string" ? u : void 0
    },
    n = e.data,
    r = n !== null && typeof n === "object" && !Array.isArray(n) ? n : void 0,
    {
      replace_all: i,
      if_version: a,
      query: s
    } = e,
    o = s !== null && typeof s === "object" && !Array.isArray(s) ? s : void 0;
  return {
    dbOp: t("db_op"),
    collection: t("collection"),
    docId: t("doc_id"),
    data: r,
    query: o,
    outDir: t("out_dir"),
    filePath: t("file_path"),
    strReplace: {
      field: t("field"),
      oldStr: t("old_str"),
      newStr: t("new_str"),
      replaceAll: i === void 0 ? void 0 : tT(i) === !0
    },
    ifVersion: csr(a) ? a : void 0
  }
}

function csr(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1
}
var l5r = ["set", "update", zw, "delete"];

function wY(e) {
  let t = d5r(e);
  return t === Pf ? [] : t
}

function d5r(e) {
  let t = zv(e.writes);
  if (t === void 0 || t === Pf) return t ?? [];
  return t.map((n) => {
    let r = (f) => n !== null && typeof n === "object" ? n[f] : void 0,
      i = {
        db_op: r("op"),
        collection: r("collection"),
        doc_id: r("doc_id"),
        data: r("data"),
        file_path: r("file_path"),
        if_version: r("if_version")
      },
      {
        dbOp: a,
        collection: s,
        docId: o,
        data: l,
        filePath: u,
        ifVersion: p
      } = OV(i);
    return {
      op: a,
      collection: s,
      docId: o,
      data: l,
      filePath: u,
      ifVersion: p,
      ifVersionGiven: i.if_version !== void 0
    }
  })
}

function P(e) {
  return e.db_op === ST ? wY(e).map((t) => t.ifVersion) : []
}

function c5r(e) {
  return OV(e).ifVersion !== void 0 || P(e).some((t) => t !== void 0)
}

function usr(e) {
  return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === ST
}

function cqt(e) {
  return PFr(Rl(gh(e.ruleValue.ruleContent ?? "", {
    max: 1024
  }).replace(Sb, " ")))
}

function Ck(e) {
  let t = e?.type_url;
  return typeof t === "string" ? t : void 0
}

function brt(e) {
  let t = e?.type;
  return typeof t === "string" ? t : void 0
}

function psr(e) {
  return `type_url: not an Artifact type's link: ${e} \u2014 pass a ${$Me()} link from a list_types result`
}

function fsr(e) {
  return e.auto_open === "after_first_write" ? "after_first_write" : "at_create"
}

function mRe(e) {
  let {
    outDir: t,
    collection: n
  } = OV(e);
  if (t === void 0) return {
    kind: "inline"
  };
  let r;
  try {
    r = it(t === "" ? ce() : t)
  } catch {
    return {
      kind: "unresolvable"
    }
  }
  let i = n !== void 0 && Voe.test(n) ? E(r, ...n.split("/").map(u5r)) : r;
  return {
    kind: "dir",
    outDir: r,
    dir: i
  }
}

function u5r(e) {
  let t = e.replaceAll("~", "@"),
    n = I();
  return n === "windows" || n === "wsl" ? t.replaceAll(":", "%3A") : t
}

function p5r(e, t) {
  return `${e}\x00${Sn(t)}`
}
var qQo = {
  changed: "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the write so it is checked again",
  via_link: "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 pass the resolved path, or copy the file under the working directory first",
  hard_link: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and pass the copy",
  read_denied: "reading where file_path resolves is blocked by a Read permission rule \u2014 the write was not attempted",
  no_identity: p5t,
  not_a_file: u5t,
  size: `file_path is empty or larger than ${Yst} bytes \u2014 write_db reads at most that much JSON, and the document must serialize to ${WY} bytes or fewer`
};

function Srt(e) {
  return typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string"
}

function Vkt(e) {
  if (typeof e !== "object" || e === null || e.action !== "write_db") return !1;
  if (typeof e.file_path === "string") return !0;
  return wY(e).some((t) => t.filePath !== void 0)
}
var f5r = 3000;

function msr(e) {
  try {
    return Buffer.byteLength(_(e), "utf8")
  } catch {
    return null
  }
}
var T = 1024,
  KQo = 49152,
  x = /data:[a-z0-9.+-]+\/[a-z0-9.+-]+(?:;[a-z0-9=.+-]+)*;base64,[A-Za-z0-9+/_-]{1000,}/gi,
  R = /^[A-Za-z0-9+/_-]+$/,
  A = /^[A-Za-z0-9+/_-]+={0,2}$/,
  F = new Set([60, 64, 76]);

function v(e) {
  let t = e.trim(),
    n = t.indexOf(`
`),
    r = t.slice(n + 1, n + 513);
  if (!/[A-Z]/.test(r) || !/[a-z]/.test(r) || !/[0-9]/.test(r)) return !1;
  if (n === -1) return A.test(t);
  let i = t.slice(0, n).replace(/\r$/, "");
  if (!R.test(i)) return !1;
  let a = t.slice(n + 1).replaceAll(`\r
`, `
`).split(`
`),
    s = a.pop() ?? "",
    o = a[0]?.length ?? i.length;
  return F.has(o) && i.length <= o && s.length <= o && A.test(s) && a.every((l) => l.length === o && R.test(l))
}

function U(e) {
  if (v(e)) return e.length;
  let t = 0;
  for (let n of e.matchAll(x)) t += n[0].length;
  return t
}

function YQo(e) {
  let t = 0,
    n = 0,
    r = [...e];
  while (r.length > 0) {
    let i = r.pop();
    if (typeof i === "string") {
      let a = i.length >= T ? U(i) : 0;
      if (a > 0) t++, n += a
    } else if (typeof i === "object" && i !== null)
      for (let a of Object.values(i)) r.push(a)
  }
  return {
    strings: t,
    chars: n
  }
}

function XQo(e, t, n, r, i, a) {
  let s = Z$(e, n),
    o = i.get(e),
    l = `${o??"viewer"}${!s&&a.has(e)?", outside your organization":""} ${e.slice(0,8)}`,
    u = t === "assistant" ? s ? "Claude (via the user)" : `Claude (via ${l})` : t !== void 0 && t !== "" ? `viewer ${e.slice(0,8)} (unverified lane)` : s ? o !== void 0 ? `the user (${o})` : "the user" : l;
  return r ? `${u}, posted by the artifact` : u
}
var JQo = 5,
  m5r = 10;

function gsr(e, t) {
  let n = e.length > t ? ` and ${e.length-t} more` : "";
  return `${e.slice(0,t).join(", ")}${n}`
}
var h = (e) => e.outsideAsk || e.flaggedOutside;

function oEn(e) {
  let [t] = e;
  if (e.length === 1 && t !== void 0) {
    let s = [];
    if (h(t)) s.push(t.resolvesOutside ? "reaches, through a symbolic link, a file outside the folders this session can read" : "is outside the folders this session can read");
    if (t.linkNote !== "" && !h(t)) s.push("is a hard link to a file that may also live elsewhere on this machine");
    return s.length === 0 ? "" : ` The local file "${Fd(t.askPath,256)}" ${s.join(" and ")}.`
  }
  let n = (s) => ` (${gsr(s.map((o)=>`"${Fd(o.askPath,256)}"`),m5r)})`,
    r = [{
      group: e.filter((s) => h(s) && !s.resolvesOutside),
      one: "is outside the folders this session can read",
      many: "are outside the folders this session can read"
    }, {
      group: e.filter((s) => s.resolvesOutside),
      one: "reaches, through a symbolic link, a file outside the folders this session can read",
      many: "reach, through symbolic links, files outside the folders this session can read"
    }, {
      group: e.filter((s) => s.linkNote !== "" && !h(s)),
      one: "is a hard link to a file that may also live elsewhere on this machine",
      many: "are hard links to files that may also live elsewhere on this machine"
    }].filter((s) => s.group.length > 0),
    [i] = r;
  if (i === void 0) return "";
  if (r.length === 1 && i.group.length === e.length) return ` ${e.length===2?"Both":`All ${e.length}`} local files being copied ${i.many}${n(i.group)}.`;
  let a = r.map((s) => `${s.group.length} ${s.group.length===1?s.one:s.many}${n(s.group)}`);
  return ` Of the ${e.length} local files being copied, ${a.join("; ")}.`
}

function Ece(e) {
  if (e === void 0) return "";
  try {
    let t = _(e);
    return `${gh(t,{max:300}).replace(Sb," ")}${sEn(t,300)}`
  } catch {
    return "(unserializable payload)"
  }
}

function sEn(e, t) {
  return Array.from(e.slice(0, 2 * t + 2)).length <= t ? "" : `\u2026 [truncated \u2014 ${Buffer.byteLength(e,"utf8")} bytes total]`
}

function QQo({
  field: e,
  oldStr: t,
  newStr: n,
  replaceAll: r
}) {
  let i = (a, s) => {
    if (a === void 0) return "(missing)";
    let o = _(a);
    return `${gh(o,{max:s}).replace(Sb," ").replace(qM,"'").replace(ZH,"'")}${sEn(o,s)}`
  };
  return `field ${i(e,CAe)}: replace ${r===!0?"every ":""}${i(t,200)} with ${i(n,200)}`
}

function g5r(e) {
  return e !== null && typeof e === "object" && e.live === !1 && Object.keys(e).length === 1
}
var k = new Set([...YNt, ...Ksn]);

function g(e, t) {
  if (typeof t === "string") return k.has(NN(t));
  return typeof e === "string" && k.has(k3(e) ?? "")
}

function h5r(e) {
  if (typeof e !== "object" || e === null) return 0;
  let {
    file_path: t,
    files: n
  } = e, r = g(t) ? 1 : 0, i = zv(n);
  if (i === Pf) return Pf;
  if (i !== void 0)
    for (let a of i) r += g(typeof a === "string" ? a : a?.path, a?.contentType) ? 1 : 0;
  else if (n !== null && typeof n === "object")
    for (let [a, s] of Object.entries(n)) {
      if (s === null || g5r(s)) continue;
      let o = typeof s === "object" && typeof s.artifact === "string" ? s.path : void 0;
      r += (o !== void 0 ? g(a) || g(o) : g(a, s?.contentType)) ? 1 : 0
    }
  return r
}
var j = new Set([...qAo, ...VAo]);

function c(e, t, n) {
  if (typeof e !== "string") return !1;
  let r = k3(e);
  if (r === void 0 || !n.has(NN(r))) return !1;
  return t === void 0 || typeof t === "string" && n.has(NN(t))
}

function B(e, t, n) {
  return c(e, void 0, n) && c(t, void 0, n)
}

function S(e) {
  return e.live !== void 0 || e.reseed !== void 0
}

function ZQo(e) {
  return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp")
}

function y5r(e, t) {
  if (typeof e !== "object" || e === null) return !1;
  let n = t.documents ? j : qAo,
    {
      file_path: r,
      files: i
    } = e;
  if (S(e) || !c(r, void 0, n)) return !1;
  if (i === void 0) return !0;
  let a = zv(i);
  if (a === Pf) return !1;
  if (a !== void 0) return a.every((s) => typeof s === "string" ? c(s, void 0, n) : s !== null && typeof s === "object" && !S(s) && c(s.path, s.contentType, n));
  if (i === null || typeof i !== "object") return !1;
  return Object.entries(i).every(([s, o]) => {
    if (o === null) return !0;
    if (typeof o === "string") return c(s, void 0, n);
    if (typeof o !== "object" || Array.isArray(o)) return !1;
    if (S(o)) return !1;
    let l = o;
    if (typeof l.from === "string" && l.artifact !== void 0) return !1;
    if (typeof l.artifact === "string") return B(s, o.path, n);
    return c(s, o.contentType, n)
  })
}

function _5r() {
  return Mbe(YA().shape.action, "read_file")
}

function b5r() {
  return Mbe(YA().shape.action, "delete")
}

function wrt() {
  return Mbe(YA().shape.action, "open")
}

function qkt() {
  return Mbe(YA().shape.action, "pin")
}

function uqt() {
  return Mbe(YA().shape.action, "share")
}

function S5r() {
  return "version" in YA().shape
}

function e7o(e, t) {
  if (e?.title === void 0) return;
  if (t === void 0) return e.title;
  let n = il(t);
  return n !== null && il(e.url) === n ? e.title : void 0
}
var t7o = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);

function mqe(e) {
  if (le(e).mode === "plan") return "plan";
  if (UL(e)) return "cowork_no_surface";
  if (Fh(e)) return "no_surface";
  return null
}

function C(e, t, n) {
  let r = n ? "Copying from this artifact is" : e.ruleValue.toolName === pr ? "Artifact reads are" : "Reading this artifact is",
    i = t === "" ? "" : ` \u2014 ${t}`;
  return `${r} blocked by ${UKe(e)}${i}`
}

function zA(e, t = "", n = !1) {
  return {
    behavior: "deny",
    message: `${C(e,t,n)}.`,
    decisionReason: {
      type: "rule",
      rule: e
    }
  }
}

function IV(e, t, n, r, i) {
  let a = wE(le(e), t, n, "deny", i);
  return a === null ? void 0 : new Le(C(a, r, i.copySource === !0), "read_denied")
}

function a7(e) {
  return e.ruleValue.toolName === pr ? ` (your ${pr} ask rule covers artifact reads)` : ` (your ${e.ruleValue.toolName} ask rule covers this url)`
}

function pqt(e) {
  if (!iue() || e === null || e === void 0) return !1;
  if (e.action !== void 0 && e.action !== "publish") return !1;
  let t = kFt(e);
  if (t !== void 0) return N(t) && t.room !== void 0;
  let n = Ck(e);
  if (n !== void 0) {
    let a = Yt(n);
    return a !== null && FCt(a.slug)
  }
  let r = typeof e.url === "string" ? Yt(e.url) : null,
    i;
  try {
    i = r !== null ? kt(r.slug) : typeof e.file_path === "string" ? pFt(it(e.file_path)) : void 0
  } catch {
    i = void 0
  }
  return i?.capabilities?.room !== void 0
}
var hsr = {
  threadIds: new Set,
  commentIds: new Set
};

function w5r(e) {
  return {
    url: Jm(e.slug),
    release: e.current
  }
}

function A0(e) {
  let t = typeof e === "string" ? Yt(e) : null;
  if (!t) throw new Le(`not an artifact URL: ${String(e)}`, "invalid_url");
  return t
}

function iEn(e, t, n, r) {
  if (typeof n !== "object" || n === null || !usr(n)) return;
  let {
    writes: i,
    ...a
  } = n;
  for (let [s, o] of wY(n).entries()) {
    let l = LZr(t, e, {
      ...a,
      db_op: o.op,
      collection: o.collection,
      doc_id: o.docId,
      ...o.data !== void 0 && {
        data: o.data
      },
      ...o.filePath !== void 0 && {
        file_path: o.filePath
      }
    }, r);
    if (l) return {
      index: s,
      rule: l
    }
  }
  return
}

function ysr(e, t, n, r) {
  if (typeof n !== "object" || n === null || n.db_op !== zw) return;
  return LZr(t, e, {
    ...n,
    db_op: "update"
  }, r) ?? void 0
}

function OL(e) {
  return e.ruleValue.ruleContent === void 0 ? e.ruleValue.toolName : `${e.ruleValue.toolName}(${cqt(e)})`
}

function aEn(e, t, n) {
  let r = iEn(e, t, n, "deny");
  return r === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${cn} has been denied by your rule ${OL(r.rule)} (writes[${r.index}] of this batch matches it), so nothing in the batch was written.`,
    decisionReason: {
      type: "rule",
      rule: r.rule
    }
  }
}

function n7o(e, t, n) {
  let r = ysr(e, t, n, "deny");
  return r === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${cn} has been denied by your rule ${OL(r)} (a str_replace is an update of one field), so nothing was written.`,
    decisionReason: {
      type: "rule",
      rule: r
    }
  }
}

function r7o(e, t, n, r) {
  let i = iEn(e, n, r, "ask");
  if (i === void 0 || typeof r !== "object" || r === null) return;
  let a = Reflect.get(r, "url"),
    s = typeof a === "string" ? Yt(a) : null;
  return {
    behavior: "ask",
    message: `Claude wants to write a batch to this artifact's database, and writes[${i.index}] matches your ask rule ${OL(i.rule)} \u2014 the full permission check could not complete, so approving covers only this call.`,
    updatedInput: {
      ...r,
      [Wp]: !1,
      [vE]: s === null ? null : Mg(s, t)
    },
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "rule",
      rule: i.rule
    }
  }
}

function gT(e, t) {
  if (!eXe(kt(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${Hn(e)}: ${NRt}. ${t}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: iro
    }
  }
}

function v5r(e, t) {
  let n = gT(e, t);
  if (n !== null) return n;
  if (!UN(kt(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${Hn(e)}: ${aro}. ${t}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: lro
    }
  }
}

function fqt(e, t, n) {
  let r = e === "watch" && Am();
  if (r && t.path !== void 0 && w?.livePathFrom(t) === void 0) return {
    result: !1,
    message: w?.LIVE_PATH_INVALID ?? "invalid path",
    errorCode: 8
  };
  let i = Object.keys(t).filter((o) => o !== "action" && o !== "url" && !(e === "read_page_data" && o === "schema") && !(r && o === "path") && t[o] !== void 0);
  if (i.length > 0) return {
    result: !1,
    message: `action "${e}" takes only ${e==="read_page_data"?"`url` and `schema`":r?"`url` (and `path`)":"`url`"} \u2014 remove ${i.join(", ")}.`,
    errorCode: 8
  };
  if (e === "read_page_data") {
    let o = t.schema,
      l = ee().frozenReadPageDataSchemaNames;
    if (o === void 0) return {
      result: !1,
      message: `action "read_page_data" requires \`schema\` \u2014 the registered interaction schema to validate against${l?.size?` (e.g. "${[...l][0]}")`:""}.`,
      errorCode: 7
    };
    if (!N3t(o)) return {
      result: !1,
      message: `interaction schema "${gh(o)}" is not available in this session. Available schemas: ${[...l??[]].join(", ")||"(none)"}.`,
      errorCode: 8
    };
    let u = V3t(o);
    if (!u.ok) return {
      result: !1,
      message: u.reason === "unknown" ? `unknown interaction schema "${o}" \u2014 registered schemas: ${Dls().join(", ")||"(none)"}.` : `interaction schema "${o}" failed validation in this build \u2014 report this; nothing can be read against it.`,
      errorCode: 8
    }
  }
  if (n === void 0) {
    if (e === "status") return {
      result: !0
    };
    if (e === "verify") return {
      result: !0
    };
    return {
      result: !1,
      message: `action "${e}" requires \`url\` \u2014 the artifact's claude.ai URL (find it with action: "list" or action: "status").`,
      errorCode: 7
    }
  }
  let a = RR(n);
  if (a) return a;
  let s = EE(n);
  if (!s.ok) return {
    result: !1,
    message: s.message,
    errorCode: s.errorCode
  };
  return {
    result: !0
  }
}
var vrt = 64,
  M = 15000,
  H = 65536;
async function o7o(e, t, n, r) {
  let i = ee(),
    a = i.accountEpoch,
    s = i.profileIdsForgets.get(e) ?? 0,
    o;
  try {
    o = await Oc.postRelayBound(`/api/frame/user/profiles/${encodeURIComponent(e)}`, {
      ids: t
    }, {
      refreshOAuth: !0,
      credentials: r,
      headers: lu(),
      timeout: M,
      maxContentLength: H,
      signal: n
    })
  } catch (d) {
    if (Ua(d)) throw d;
    return {
      ok: !1
    }
  }
  if (!o.ok) return {
    ok: !1
  };
  let l = () => ee() === i && i.accountEpoch === a && (i.profileIdsForgets.get(e) ?? 0) === s;
  if (!o.fromFrame || o.status < 200 || o.status >= 300) {
    if (o.fromFrame && l() && o.status === 403 && N(o.data) && o.data.error === "not_declared") i.profileIdsServed.set(e, !1);
    return {
      ok: !1,
      status: o.status
    }
  }
  let u = N(o.data) ? o.data.profiles : void 0;
  if (!N(u)) return {
    ok: !1,
    status: o.status
  };
  let p = new Set(t),
    f = {};
  for (let [d, y] of Object.entries(u)) {
    if (!p.has(d)) continue;
    let b = k5r(y);
    if (b.name !== void 0 || b.guest === !0) f[d] = b
  }
  if (l()) i.profileIdsServed.set(e, !0), W(e, {
    ...Object.fromEntries(t.map((d) => [d, {}])),
    ...f
  });
  return {
    ok: !0,
    profiles: f
  }
}

function k5r(e) {
  if (!N(e)) return {};
  let t = J3t(e.name);
  return {
    ...t !== void 0 && {
      name: t
    },
    ...e.guest === !0 && {
      guest: !0
    }
  }
}
var V = 512;

function G(e, t) {
  return `${e}\x00${t}`
}

function W(e, t) {
  let n = ee().profileNames;
  for (let [r, i] of Object.entries(t)) {
    let a = G(e, r);
    n.delete(a), n.set(a, i.name === void 0 ? {
      ...i,
      at: Date.now()
    } : i)
  }
  while (n.size > V) {
    let r = n.keys().next().value;
    if (r === void 0) break;
    n.delete(r)
  }
}
export {
  GQo,
  Gkt,
  Mg,
  VQo,
  nEn,
  yrt,
  asr,
  a5r,
  lsr,
  _rt,
  dsr,
  dqt,
  rEn,
  fqe,
  RR,
  OV,
  csr,
  l5r,
  wY,
  d5r,
  c5r,
  usr,
  cqt,
  Ck,
  brt,
  psr,
  fsr,
  mRe,
  u5r,
  p5r,
  qQo,
  Srt,
  Vkt,
  f5r,
  msr,
  KQo,
  YQo,
  XQo,
  JQo,
  m5r,
  gsr,
  oEn,
  Ece,
  sEn,
  QQo,
  g5r,
  h5r,
  ZQo,
  y5r,
  _5r,
  b5r,
  wrt,
  qkt,
  uqt,
  S5r,
  e7o,
  t7o,
  mqe,
  zA,
  IV,
  a7,
  pqt,
  hsr,
  w5r,
  A0,
  iEn,
  ysr,
  OL,
  aEn,
  n7o,
  r7o,
  gT,
  v5r,
  fqt,
  vrt,
  o7o,
  k5r
};
