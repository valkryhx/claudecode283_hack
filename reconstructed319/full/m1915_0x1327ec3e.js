// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  rs
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  bh
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  nl
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  mt
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  NA
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  Tu
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Qt,
  wy,
  uKe,
  Xe,
  fn,
  XFe,
  _d,
  Bn,
  rN,
  sj,
  dCo,
  Jd,
  D4,
  _k,
  _Wn
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  te,
  $Lt
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  MJo,
  uXr,
  dg
} from "B:/~BUN/root/chunk-gvv6aaq0.js";
import {
  z8,
  GK,
  YJo,
  XJo,
  SEn,
  JJo
} from "B:/~BUN/root/chunk-gnvjfqfc.js";
import {
  xu
} from "B:/~BUN/root/chunk-17caj8fw.js";
import {
  Au
} from "B:/~BUN/root/chunk-hhd7smkx.js";
import {
  x_e,
  u7e,
  NS
} from "B:/~BUN/root/chunk-z2c6k7e2.js";
import {
  Op,
  bw
} from "B:/~BUN/root/chunk-jxvayzd7.js";
import {
  qC
} from "B:/~BUN/root/chunk-gjq813eb.js";
import {
  Mt,
  Aen,
  o3,
  om,
  Omt,
  uR,
  Pu
} from "B:/~BUN/root/chunk-h6zqt1s4.js";
import {
  Gg,
  dk,
  sh,
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  QW
} from "B:/~BUN/root/chunk-cejfpzdt.js";
import {
  j8,
  WE,
  x1e,
  CQ,
  kAt
} from "B:/~BUN/root/chunk-x29v5gdt.js";
import {
  lse,
  A1
} from "B:/~BUN/root/chunk-0xtfwyhv.js";
import {
  _vn
} from "B:/~BUN/root/chunk-eahns82c.js";
import {
  B4t,
  Qne,
  BK,
  jK,
  n2,
  age,
  lg,
  tA,
  IB
} from "B:/~BUN/root/chunk-p383h22f.js";
import {
  rX
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  UK,
  $4t
} from "B:/~BUN/root/chunk-e2g6ph6a.js";
import {
  RB,
  CBe
} from "B:/~BUN/root/chunk-7exknzyq.js";
import {
  Skn,
  AP,
  gIe
} from "B:/~BUN/root/chunk-3vayx43w.js";
import {
  zYt,
  aXo,
  lXo,
  dXo,
  px,
  Hvn,
  $vn
} from "B:/~BUN/root/chunk-ksrrpr8r.js";
import {
  UM,
  a_,
  n3e,
  cIe
} from "B:/~BUN/root/chunk-m7hjq5yn.js";
import {
  e1i
} from "B:/~BUN/root/chunk-0q69tvcp.js";
import {
  c9,
  QK
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  t6e
} from "B:/~BUN/root/chunk-sv4w4w5j.js";
import {
  i7n
} from "B:/~BUN/root/chunk-9t9mprhn.js";
import {
  rQ
} from "B:/~BUN/root/chunk-kq13e9zq.js";
import {
  JG
} from "B:/~BUN/root/chunk-f61vm6d0.js";
import {
  Vn
} from "B:/~BUN/root/chunk-tacrdmts.js";
import {
  tgt
} from "B:/~BUN/root/chunk-r2kdqtaa.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function mzo(e, n, r) {
  let o = te();
  if (n.agentId !== void 0 || !IB(n).hasInteractiveUI || o.accountEpoch !== r.account || o.conversationEpoch !== r.conversation) return;
  o.deferredSurface.set(e.slug, {
    slug: e.slug,
    url: e.url
  })
}

function hzo(e, n) {
  let r = te(),
    o = r.deferredSurface.get(n);
  if (o === void 0) return;
  if (r.remoteControlSkippedSlugs.has(n) && rX(e.options.messageClientPlatform)) return;
  if (r.deferredSurface.delete(n), STt(e, !0, o, !1) === "auto_open_skipped_remote_control") r.deferredSurface.set(n, o)
}

function STt(e, n, r, o, s) {
  if (!n) return null;
  let u = MJo(),
    a = i7n(),
    l = rX(e.options.messageClientPlatform),
    d = te(),
    p = o && !d.remoteControlSkippedSlugs.has(r.slug) ? "auto_open_skipped_redeploy" : a !== null ? `auto_open_skipped_${a}` : l ? "auto_open_skipped_remote_control" : rs(i.CLAUDE_CODE_ARTIFACT_AUTO_OPEN) ? "auto_open_skipped_env" : null;
  if (p !== null) {
    if (p === "auto_open_skipped_remote_control") d.remoteControlSkippedSlugs.add(r.slug);
    return uXr("frame_surfaced", {
      slug: r.slug,
      via: u,
      mode: p,
      credentials: e.credentials
    }), p
  }
  $Lt(r.slug);
  let g = r.url;
  try {
    let c = new URL(r.url);
    c.searchParams.set("via", "auto_preview"), g = c.toString()
  } catch {}
  return tgt(g).then((c) => {
    if (!c.ok) t(`[artifact] auto-open failed (${c.reason}): ${c.detail??""}`);
    s?.(c.ok), uXr("frame_surfaced", {
      slug: r.slug,
      via: u,
      mode: c.ok ? "auto_open_ok" : `auto_open_failed_${c.reason}`,
      credentials: e.credentials
    })
  }), null
}
import {
  join as O
} from "path";
var k = null;

function fti(e, n) {
  return e.getAppState().frameUrls[n]
}

function BVt(e, n) {
  return e ? {
    type: "safetyCheck",
    reason: n,
    classifierApprovable: !1
  } : {
    type: "other",
    reason: n
  }
}

function r_(e, n) {
  let r = D4(Mt(e.slug)?.title || QK(n.getAppState().frameUrls).find(([, o]) => o.title && _d(o.url) === e.slug)?.[1].title);
  return {
    url: Bn(e),
    ...r && {
      title: r
    }
  }
}

function gzo(e, n, r, {
  mcpPublished: o = !1
} = {}) {
  let s = `${c9}${n.slug}`,
    u = s,
    a = !1,
    l = !1,
    d;
  if (e.setAppState((f) => {
      let [p, g] = Object.entries(f.frameUrls).find(([, h]) => _d(h.url) === n.slug) ?? [];
      if (a = p !== void 0 && g?.dismissed !== !0, u = p !== void 0 && p !== s ? p : s, l = f.frameOpenFailedPath === u, o && p !== void 0 && p !== s && g !== void 0) {
        let {
          [p]: h, ...A
        } = f.frameUrls, {
          dismissed: Q,
          ...v
        } = g;
        return d = {
          ...A,
          [p]: {
            ...v,
            updatedAt: Date.now()
          }
        }, {
          ...f,
          frameUrls: d
        }
      }
      if (p !== void 0 && g?.dismissed === !0) {
        let {
          dismissed: h,
          ...A
        } = g;
        return {
          ...f,
          frameUrls: {
            ...f.frameUrls,
            [p]: A
          }
        }
      }
      if (a && f.frameUrls[s] === void 0) return f;
      let {
        [s]: c, ...w
      } = f.frameUrls;
      return d = {
        ...w,
        [s]: {
          url: Bn(n),
          updatedAt: Date.now(),
          ...(r ?? c?.title) !== void 0 && {
            title: r ?? c?.title
          },
          ...(o || c?.mcpPublished === !0) && {
            mcpPublished: !0
          },
          ...(o || c?.mcpPublishedHere === !0) && {
            mcpPublishedHere: !0
          }
        }
      }, {
        ...f,
        frameUrls: d
      }
    }), o && d !== void 0) JG(d);
  return {
    rowKey: u,
    alreadyShown: a,
    lastOpenFailed: l
  }
}

function F(e, n) {
  t6e(n, {
    updateAppState: e.setAppState,
    context: e
  })
}

function Pyn(e, n, r) {
  e.setAppState((o) => {
    if (r) return o.frameOpenFailedPath === n ? {
      ...o,
      frameOpenFailedPath: null
    } : o;
    if (o.frameOpenFailedPath === n) return o;
    return {
      ...o,
      frameOpenFailedPath: n,
      frameOpenFailedSeen: !1
    }
  })
}

function wTt(e, n) {
  return Pu(e) && BK(e) && !n2(e) ? " (yours; a co-writer has also published to it)" : n === "files" && Pu(e) && jK(e) ? " (yours; its files come from an Artifact type its publisher wrote)" : om(e)
}

function cKr(e, n) {
  return Pu(e) && BK(e) && !n2(e) ? " [ownership: yours, co-written: a non-owner has also published to it]" : n === "files" && Pu(e) && jK(e) ? _Wn : `${uR(e)}${o3(e)}`
}

function I(e) {
  return _([e.path, e.from.slug, e.from.path, e.from.ver ?? ""])
}

function yzo(e) {
  return L(e.map(I)).sort().join(`
`)
}

function uKr(e, n) {
  return (e ?? "") === yzo(n)
}

function kTt(e, n) {
  let {
    mode: r,
    modeBeforeRewrite: o
  } = se(e);
  if (r === "auto" || o === "auto") return !1;
  return lse(e.getAppState(), r === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs", n)
}

function fKr(e, n, r, o, s, u, a = !1) {
  let l = s && !n2(Mt(r.slug));
  if (UK(n) && (l || a) && o && !Qne(e, n) && !CBe(n, r, Pu(Mt(r.slug))) && (Gg(n) || dk(n) || RB(n))) throw m("artifact_cowritten_consent", "refused_unasked", {
    assets: u === "assets",
    ...!l && {
      from_type: !0
    }
  }), new Xe(l ? `a co-writer has published to this artifact, so its ${u} are someone else's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)` : `this artifact was created from an Artifact type, so its ${u} are the type publisher's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`, `${u==="files"?"file":"asset"}_${l?"cowritten":"from_type"}_unasked`)
}

function Oyn(e, n, r) {
  return m("artifact_outside_org_consent", "refused_unasked", {
    assets: n === "asset_copy"
  }), new Xe($4t(e, !0, n === "file_copy" ? {
    retryUrl: r
  } : void 0), `${n}_outside_org_unasked`)
}

function _Jn(e, n, r) {
  if (e === x_e) U(n, r)
}

function U(e, n) {
  throw m("artifact_outside_org_consent", "refused_unasked", {
    assets: n !== "files"
  }), new Xe($4t(e), `${n==="files"?"file":"asset"}_outside_org_unasked`)
}

function qst(e) {
  let {
    assetId: n,
    outDir: r
  } = age(e);
  if (n === void 0 || !wy.test(n)) return;
  let o, s = !1;
  try {
    if (r === void 0 || r === "") {
      let {
        url: u
      } = e, a = typeof u === "string" ? fn(u) : null, l = a !== null ? rQ(a.slug) : null;
      s = l !== null, o = l ?? pe()
    } else o = mt(r)
  } catch {
    return
  }
  return {
    stem: O(o, n),
    ...s && {
      defaultDir: !0
    }
  }
}

function lI(e, n = "", r = "url") {
  if (XFe(e) === void 0) return;
  let o = fn(e),
    s = o !== null ? ` (${Bn(o)})` : "";
  return {
    result: !1,
    message: `\`${r}\` names a path inside the artifact \u2014 pass the artifact's own URL${s} as \`${r}\`${n}.`,
    errorCode: 4
  }
}

function f8(e) {
  let n = (d) => {
      let f = e[d];
      return typeof f === "string" ? f : void 0
    },
    r = e.data,
    o = r !== null && typeof r === "object" && !Array.isArray(r) ? r : void 0,
    {
      replace_all: s,
      if_version: u,
      query: a
    } = e,
    l = a !== null && typeof a === "object" && !Array.isArray(a) ? a : void 0;
  return {
    dbOp: n("db_op"),
    collection: n("collection"),
    docId: n("doc_id"),
    data: o,
    query: l,
    outDir: n("out_dir"),
    filePath: n("file_path"),
    strReplace: {
      field: n("field"),
      oldStr: n("old_str"),
      newStr: n("new_str"),
      replaceAll: s === void 0 ? void 0 : NA(s) === !0
    },
    ifVersion: pKr(u) ? u : void 0
  }
}

function pKr(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1
}
var _zo = ["set", "update", WE, "delete"];

function Q7(e) {
  let n = bzo(e);
  return n === Op ? [] : n
}

function bzo(e) {
  let n = bw(e.writes);
  if (n === void 0 || n === Op) return n ?? [];
  return n.map((r) => {
    let o = (g) => r !== null && typeof r === "object" ? r[g] : void 0,
      s = {
        db_op: o("op"),
        collection: o("collection"),
        doc_id: o("doc_id"),
        data: o("data"),
        file_path: o("file_path"),
        if_version: o("if_version")
      },
      {
        dbOp: u,
        collection: a,
        docId: l,
        data: d,
        filePath: f,
        ifVersion: p
      } = f8(s);
    return {
      op: u,
      collection: a,
      docId: l,
      data: d,
      filePath: f,
      ifVersion: p,
      ifVersionGiven: s.if_version !== void 0
    }
  })
}

function N(e) {
  return e.db_op === px ? Q7(e).map((n) => n.ifVersion) : []
}

function Szo(e) {
  return f8(e).ifVersion !== void 0 || N(e).some((n) => n !== void 0)
}

function mKr(e) {
  return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === px
}

function Iyn(e) {
  return dCo(Jd(NS(e.ruleValue.ruleContent ?? "", {
    max: 1024
  }).replace(_k, " ")))
}

function WC(e) {
  let n = e?.type_url;
  return typeof n === "string" ? n : void 0
}

function vTt(e) {
  let n = e?.type;
  return typeof n === "string" ? n : void 0
}

function hKr(e) {
  return `type_url: not an Artifact type's link: ${e} \u2014 pass a ${uKe()} link from a list_types result`
}

function gKr(e) {
  return e.auto_open === "after_first_write" ? "after_first_write" : "at_create"
}

function nBe(e) {
  let {
    outDir: n,
    collection: r
  } = f8(e);
  if (n === void 0) return {
    kind: "inline"
  };
  let o;
  try {
    o = mt(n === "" ? pe() : n)
  } catch {
    return {
      kind: "unresolvable"
    }
  }
  let s = r !== void 0 && j8.test(r) ? O(o, ...r.split("/").map(wzo)) : o;
  return {
    kind: "dir",
    outDir: o,
    dir: s
  }
}

function wzo(e) {
  let n = e.replaceAll("~", "@"),
    r = x();
  return r === "windows" || r === "wsl" ? n.replaceAll(":", "%3A") : n
}

function kzo(e, n) {
  return `${e}\x00${mn(n)}`
}
var pti = {
  changed: "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the write so it is checked again",
  via_link: "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 pass the resolved path, or copy the file under the working directory first",
  hard_link: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and pass the copy",
  read_denied: "reading where file_path resolves is blocked by a Read permission rule \u2014 the write was not attempted",
  no_identity: $vn,
  not_a_file: Hvn,
  size: `file_path is empty or larger than ${kAt} bytes \u2014 write_db reads at most that much JSON, and the document must serialize to ${CQ} bytes or fewer`
};

function ETt(e) {
  return typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string"
}

function jVt(e) {
  if (typeof e !== "object" || e === null || e.action !== "write_db") return !1;
  if (typeof e.file_path === "string") return !0;
  return Q7(e).some((n) => n.filePath !== void 0)
}
var vzo = 3000;

function yKr(e) {
  try {
    return Buffer.byteLength(_(e), "utf8")
  } catch {
    return null
  }
}
var j = 1024,
  mti = 49152,
  B = /data:[a-z0-9.+-]+\/[a-z0-9.+-]+(?:;[a-z0-9=.+-]+)*;base64,[A-Za-z0-9+/_-]{1000,}/gi,
  E = /^[A-Za-z0-9+/_-]+$/,
  C = /^[A-Za-z0-9+/_-]+={0,2}$/,
  M = new Set([60, 64, 76]);

function H(e) {
  let n = e.trim(),
    r = n.indexOf(`
`),
    o = n.slice(r + 1, r + 513);
  if (!/[A-Z]/.test(o) || !/[a-z]/.test(o) || !/[0-9]/.test(o)) return !1;
  if (r === -1) return C.test(n);
  let s = bh(n.slice(0, r), "\r");
  if (!E.test(s)) return !1;
  let u = n.slice(r + 1).replaceAll(`\r
`, `
`).split(`
`),
    a = u.pop() ?? "",
    l = u[0]?.length ?? s.length;
  return M.has(l) && s.length <= l && a.length <= l && C.test(a) && u.every((d) => d.length === l && E.test(d))
}

function V(e) {
  if (H(e)) return e.length;
  let n = 0;
  for (let r of e.matchAll(B)) n += r[0].length;
  return n
}

function hti(e) {
  let n = 0,
    r = 0,
    o = [...e];
  while (o.length > 0) {
    let s = o.pop();
    if (typeof s === "string") {
      let u = s.length >= j ? V(s) : 0;
      if (u > 0) n++, r += u
    } else if (typeof s === "object" && s !== null)
      for (let u of Object.values(s)) o.push(u)
  }
  return {
    strings: n,
    chars: r
  }
}

function gti(e, n, r, o, s, u) {
  let a = QW(e, r),
    l = s.get(e),
    d = `${l??"viewer"}${!a&&u.has(e)?", outside your organization":""} ${e.slice(0,8)}`,
    f = n === "assistant" ? a ? "Claude (via the user)" : `Claude (via ${d})` : n !== void 0 && n !== "" ? `viewer ${e.slice(0,8)} (unverified lane)` : a ? l !== void 0 ? `the user (${l})` : "the user" : d;
  return o ? `${f}, posted by the artifact` : f
}
var yti = 5,
  Ezo = 10;

function _Kr(e, n) {
  let r = e.length > n ? ` and ${e.length-n} more` : "";
  return `${e.slice(0,n).join(", ")}${r}`
}
var S = (e) => e.outsideAsk || e.flaggedOutside;

function bJn(e) {
  let [n] = e;
  if (e.length === 1 && n !== void 0) {
    let a = [];
    if (S(n)) a.push(n.resolvesOutside ? "reaches, through a symbolic link, a file outside the folders this session can read" : "is outside the folders this session can read");
    if (n.linkNote !== "" && !S(n)) a.push("is a hard link to a file that may also live elsewhere on this machine");
    return a.length === 0 ? "" : ` The local file "${Tu(n.askPath,256)}" ${a.join(" and ")}.`
  }
  let r = (a) => ` (${_Kr(a.map((l)=>`"${Tu(l.askPath,256)}"`),Ezo)})`,
    o = [{
      group: e.filter((a) => S(a) && !a.resolvesOutside),
      one: "is outside the folders this session can read",
      many: "are outside the folders this session can read"
    }, {
      group: e.filter((a) => a.resolvesOutside),
      one: "reaches, through a symbolic link, a file outside the folders this session can read",
      many: "reach, through symbolic links, files outside the folders this session can read"
    }, {
      group: e.filter((a) => a.linkNote !== "" && !S(a)),
      one: "is a hard link to a file that may also live elsewhere on this machine",
      many: "are hard links to files that may also live elsewhere on this machine"
    }].filter((a) => a.group.length > 0),
    [s] = o;
  if (s === void 0) return "";
  if (o.length === 1 && s.group.length === e.length) return ` ${e.length===2?"Both":`All ${e.length}`} local files being copied ${s.many}${r(s.group)}.`;
  let u = o.map((a) => `${a.group.length} ${a.group.length===1?a.one:a.many}${r(a.group)}`);
  return ` Of the ${e.length} local files being copied, ${u.join("; ")}.`
}

function Oke(e) {
  if (e === void 0) return "";
  try {
    let n = _(e);
    return `${NS(n,{max:300}).replace(_k," ")}${SJn(n,300)}`
  } catch {
    return "(unserializable payload)"
  }
}

function SJn(e, n) {
  return Array.from(e.slice(0, 2 * n + 2)).length <= n ? "" : `\u2026 [truncated \u2014 ${Buffer.byteLength(e,"utf8")} bytes total]`
}

function _ti({
  field: e,
  oldStr: n,
  newStr: r,
  replaceAll: o
}) {
  let s = (u, a) => {
    if (u === void 0) return "(missing)";
    let l = _(u);
    return `${NS(l,{max:a}).replace(_k," ").replace(rN,"'").replace(sj,"'")}${SJn(l,a)}`
  };
  return `field ${s(e,x1e)}: replace ${o===!0?"every ":""}${s(n,200)} with ${s(r,200)}`
}

function Tzo(e) {
  return e !== null && typeof e === "object" && e.live === !1 && Object.keys(e).length === 1
}
var P = new Set([...XJo, ...SEn]);

function b(e, n) {
  if (typeof n === "string") return P.has(GK(n));
  return typeof e === "string" && P.has(z8(e) ?? "")
}

function Czo(e) {
  if (typeof e !== "object" || e === null) return 0;
  let {
    file_path: n,
    files: r
  } = e, o = b(n) ? 1 : 0, s = bw(r);
  if (s === Op) return Op;
  if (s !== void 0)
    for (let u of s) o += b(typeof u === "string" ? u : u?.path, u?.contentType) ? 1 : 0;
  else if (r !== null && typeof r === "object")
    for (let [u, a] of Object.entries(r)) {
      if (a === null || Tzo(a)) continue;
      let l = typeof a === "object" && typeof a.artifact === "string" ? a.path : void 0;
      o += (l !== void 0 ? b(u) || b(l) : b(u, a?.contentType)) ? 1 : 0
    }
  return o
}
var G = new Set([...JJo, ...YJo]);

function y(e, n, r) {
  if (typeof e !== "string") return !1;
  let o = z8(e);
  if (o === void 0 || !r.has(GK(o))) return !1;
  return n === void 0 || typeof n === "string" && r.has(GK(n))
}

function W(e, n, r) {
  return y(e, void 0, r) && y(n, void 0, r)
}

function R(e) {
  return e.live !== void 0 || e.reseed !== void 0
}

function bti(e) {
  return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp")
}

function Rzo(e, n) {
  if (typeof e !== "object" || e === null) return !1;
  let r = n.documents ? G : JJo,
    {
      file_path: o,
      files: s
    } = e;
  if (R(e) || !y(o, void 0, r)) return !1;
  if (s === void 0) return !0;
  let u = bw(s);
  if (u === Op) return !1;
  if (u !== void 0) return u.every((a) => typeof a === "string" ? y(a, void 0, r) : a !== null && typeof a === "object" && !R(a) && y(a.path, a.contentType, r));
  if (s === null || typeof s !== "object") return !1;
  return Object.entries(s).every(([a, l]) => {
    if (l === null) return !0;
    if (typeof l === "string") return y(a, void 0, r);
    if (typeof l !== "object" || Array.isArray(l)) return !1;
    if (R(l)) return !1;
    let d = l;
    if (typeof d.from === "string" && d.artifact !== void 0) return !1;
    if (typeof d.artifact === "string") return W(a, l.path, r);
    return y(a, l.contentType, r)
  })
}

function Azo() {
  return cIe(UM().shape.action, "read_file")
}

function xzo() {
  return cIe(UM().shape.action, "delete")
}

function TTt() {
  return cIe(UM().shape.action, "open")
}

function WVt() {
  return cIe(UM().shape.action, "pin")
}

function Myn() {
  return cIe(UM().shape.action, "share")
}

function Pzo() {
  return "version" in UM().shape
}

function Sti(e, n) {
  if (e?.title === void 0) return;
  if (n === void 0) return e.title;
  let r = _d(n);
  return r !== null && _d(e.url) === r ? e.title : void 0
}
var wti = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);

function Yst(e) {
  if (se(e).mode === "plan") return "plan";
  if (RB(e)) return "cowork_no_surface";
  if (sh(e)) return "no_surface";
  return null
}

function T(e, n, r) {
  let o = r ? "Copying from this artifact is" : e.ruleValue.toolName === Vn ? "Artifact reads are" : "Reading this artifact is",
    s = n === "" ? "" : ` \u2014 ${n}`;
  return `${o} blocked by ${gIe(e)}${s}`
}

function o$(e, n = "", r = !1) {
  return {
    behavior: "deny",
    message: `${T(e,n,r)}.`,
    decisionReason: {
      type: "rule",
      rule: e
    }
  }
}

function Z7(e, n, r, o, s) {
  let u = AP(se(e), n, r, "deny", s);
  return u === null ? void 0 : new Xe(T(u, o, s.copySource === !0), "read_denied")
}

function Mhe(e) {
  return e.ruleValue.toolName === Vn ? ` (your ${Vn} ask rule covers artifact reads)` : ` (your ${e.ruleValue.toolName} ask rule covers this url)`
}

function Dyn(e) {
  if (!n3e() || e === null || e === void 0) return !1;
  if (e.action !== void 0 && e.action !== "publish") return !1;
  let n = u7e(e);
  if (n !== void 0) return D(n) && n.room !== void 0;
  let r = WC(e);
  if (r !== void 0) {
    let u = fn(r);
    return u !== null && B4t(u.slug)
  }
  let o = typeof e.url === "string" ? fn(e.url) : null,
    s;
  try {
    s = o !== null ? Mt(o.slug) : typeof e.file_path === "string" ? Aen(mt(e.file_path)) : void 0
  } catch {
    s = void 0
  }
  return s?.capabilities?.room !== void 0
}
var bKr = {
  threadIds: new Set,
  commentIds: new Set
};

function Ozo(e) {
  return {
    url: dg(e.slug),
    release: e.current
  }
}

function kB(e) {
  let n = typeof e === "string" ? fn(e) : null;
  if (!n) throw new Xe(`not an artifact URL: ${String(e)}`, "invalid_url");
  return n
}

function wJn(e, n, r, o) {
  if (typeof r !== "object" || r === null || !mKr(r)) return;
  let {
    writes: s,
    ...u
  } = r;
  for (let [a, l] of Q7(r).entries()) {
    let d = Skn(n, e, {
      ...u,
      db_op: l.op,
      collection: l.collection,
      doc_id: l.docId,
      ...l.data !== void 0 && {
        data: l.data
      },
      ...l.filePath !== void 0 && {
        file_path: l.filePath
      }
    }, o);
    if (d) return {
      index: a,
      rule: d
    }
  }
  return
}

function SKr(e, n, r, o) {
  if (typeof r !== "object" || r === null || r.db_op !== WE) return;
  return Skn(n, e, {
    ...r,
    db_op: "update"
  }, o) ?? void 0
}

function vB(e) {
  return e.ruleValue.ruleContent === void 0 ? e.ruleValue.toolName : `${e.ruleValue.toolName}(${Iyn(e)})`
}

function kJn(e, n, r) {
  let o = wJn(e, n, r, "deny");
  return o === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${Qt} has been denied by your rule ${vB(o.rule)} (writes[${o.index}] of this batch matches it), so nothing in the batch was written.`,
    decisionReason: {
      type: "rule",
      rule: o.rule
    }
  }
}

function kti(e, n, r) {
  let o = SKr(e, n, r, "deny");
  return o === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${Qt} has been denied by your rule ${vB(o)} (a str_replace is an update of one field), so nothing was written.`,
    decisionReason: {
      type: "rule",
      rule: o
    }
  }
}

function vti(e, n, r, o) {
  let s = wJn(e, r, o, "ask");
  if (s === void 0 || typeof o !== "object" || o === null) return;
  let u = Reflect.get(o, "url"),
    a = typeof u === "string" ? fn(u) : null;
  return {
    behavior: "ask",
    message: `Claude wants to write a batch to this artifact's database, and writes[${s.index}] matches your ask rule ${vB(s.rule)} \u2014 the full permission check could not complete, so approving covers only this call.`,
    updatedInput: {
      ...o,
      [lg]: !1,
      [tA]: a === null ? null : r_(a, n)
    },
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "rule",
      rule: s.rule
    }
  }
}

function lx(e, n) {
  if (!Omt(Mt(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${Bn(e)}: ${zYt}. ${n}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: aXo
    }
  }
}

function Izo(e, n) {
  let r = lx(e, n);
  if (r !== null) return r;
  if (!A1(Mt(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${Bn(e)}: ${lXo}. ${n}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: dXo
    }
  }
}

function Lyn(e, n, r) {
  let o = e === "watch" && a_();
  if (o && n.path !== void 0 && k?.livePathFrom(n) === void 0) return {
    result: !1,
    message: k?.LIVE_PATH_INVALID ?? "invalid path",
    errorCode: 8
  };
  let s = Object.keys(n).filter((l) => l !== "action" && l !== "url" && !(o && l === "path") && n[l] !== void 0);
  if (s.length > 0) return {
    result: !1,
    message: `action "${e}" takes only ${o?"`url` (and `path`)":"`url`"} \u2014 remove ${s.join(", ")}.`,
    errorCode: 8
  };
  if (r === void 0) {
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
  let u = lI(r);
  if (u) return u;
  let a = qC(r);
  if (!a.ok) return {
    result: !1,
    message: a.message,
    errorCode: a.errorCode
  };
  return {
    result: !0
  }
}
e1i({
  addOpenedFrameRow: gzo,
  forgetArtifactDeletedThroughMcp: F,
  markFrameOpenOutcome: Pyn,
  derivePublishContext: IB,
  surfacePublishedArtifact: STt
});
var CTt = 64,
  Y = 15000,
  z = 65536;
async function Eti(e, n, r, o) {
  let s = te(),
    u = s.accountEpoch,
    a = s.profileIdsForgets.get(e) ?? 0,
    l;
  try {
    l = await Au.postRelayBound(`/api/frame/user/profiles/${encodeURIComponent(e)}`, {
      ids: n
    }, {
      refreshOAuth: !0,
      credentials: o,
      headers: xu(),
      timeout: Y,
      maxContentLength: z,
      signal: r
    })
  } catch (c) {
    if (nl(c)) throw c;
    return {
      ok: !1
    }
  }
  if (!l.ok) return {
    ok: !1
  };
  let d = () => te() === s && s.accountEpoch === u && (s.profileIdsForgets.get(e) ?? 0) === a;
  if (!l.fromFrame || l.status < 200 || l.status >= 300) {
    if (l.fromFrame && d() && l.status === 403 && D(l.data) && l.data.error === "not_declared") s.profileIdsServed.set(e, !1);
    return {
      ok: !1
    }
  }
  let f = D(l.data) ? l.data.profiles : void 0;
  if (!D(f)) return {
    ok: !1
  };
  let p = new Set(n),
    g = {};
  for (let [c, w] of Object.entries(f)) {
    if (!p.has(c)) continue;
    let h = Mzo(w);
    if (h.name !== void 0 || h.guest === !0) g[c] = h
  }
  if (d()) s.profileIdsServed.set(e, !0), q(e, {
    ...Object.fromEntries(n.map((c) => [c, {}])),
    ...g
  });
  return {
    ok: !0,
    profiles: g
  }
}

function Mzo(e) {
  if (!D(e)) return {};
  let n = _vn(e.name);
  return {
    ...n !== void 0 && {
      name: n
    },
    ...e.guest === !0 && {
      guest: !0
    }
  }
}
var K = 512;

function X(e, n) {
  return `${e}\x00${n}`
}

function q(e, n) {
  let r = te().profileNames;
  for (let [o, s] of Object.entries(n)) {
    let u = X(e, o);
    r.delete(u), r.set(u, s.name === void 0 ? {
      ...s,
      at: Date.now()
    } : s)
  }
  while (r.size > K) {
    let o = r.keys().next().value;
    if (o === void 0) break;
    r.delete(o)
  }
}
export {
  mzo,
  hzo,
  STt,
  fti,
  BVt,
  r_,
  gzo,
  Pyn,
  wTt,
  cKr,
  yzo,
  uKr,
  kTt,
  fKr,
  Oyn,
  _Jn,
  qst,
  lI,
  f8,
  pKr,
  _zo,
  Q7,
  bzo,
  Szo,
  mKr,
  Iyn,
  WC,
  vTt,
  hKr,
  gKr,
  nBe,
  wzo,
  kzo,
  pti,
  ETt,
  jVt,
  vzo,
  yKr,
  mti,
  hti,
  gti,
  yti,
  Ezo,
  _Kr,
  bJn,
  Oke,
  SJn,
  _ti,
  Tzo,
  Czo,
  bti,
  Rzo,
  Azo,
  xzo,
  TTt,
  WVt,
  Myn,
  Pzo,
  Sti,
  wti,
  Yst,
  o$,
  Z7,
  Mhe,
  Dyn,
  bKr,
  Ozo,
  kB,
  wJn,
  SKr,
  vB,
  kJn,
  kti,
  vti,
  lx,
  Izo,
  Lyn,
  CTt,
  Eti,
  Mzo
};
