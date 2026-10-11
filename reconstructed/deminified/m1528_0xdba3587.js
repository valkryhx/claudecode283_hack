// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { m } from "B:/~BUN/root/chunk-51n463p1.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { wz, ld, ft, glt, uX, su, JMt, KT, hl } from "B:/~BUN/root/chunk-faawr4jv.js";
import { Fa } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { G, jx } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Mn } from "B:/~BUN/root/chunk-1f9marcm.js";
import { Va } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { yn, Pp, KRe, Oe, Bt, Vce, ha, En, Ox, ED, N1, ch, c$t } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { Lf } from "B:/~BUN/root/chunk-at7axhcd.js";
import { lq, oD, hMr, vhe, PLt, yMr } from "B:/~BUN/root/chunk-0y3bphdf.js";
import { Ud, fX } from "B:/~BUN/root/chunk-j36yaq51.js";
import { $d } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { Bf, NE } from "B:/~BUN/root/chunk-z51p19sq.js";
import { Btt, Sm } from "B:/~BUN/root/chunk-r1ja2che.js";
import { gE } from "B:/~BUN/root/chunk-7z8vew74.js";
import { zf, fy, Pm, me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { Hkt, Jso } from "B:/~BUN/root/chunk-5yefzev8.js";
import { HU, NEt } from "B:/~BUN/root/chunk-dty6td52.js";
import { m8, J_, Zpe, AG, Q2e } from "B:/~BUN/root/chunk-ndb6ecfp.js";
import { uI } from "B:/~BUN/root/chunk-7d9qjs8x.js";
import { Dvt, m4, zH, q5, mL, h7, tu, ok, gL, HZe } from "B:/~BUN/root/chunk-h9ex720v.js";
import { wP, g7 } from "B:/~BUN/root/chunk-sjxdbr0h.js";
import { Icr, aS, OOe } from "B:/~BUN/root/chunk-xanxfwr0.js";
import { wtt, nmr as reason_2, rmr, omr as reason_3, dw, hTt as not_a_file, yTt as no_identity } from "B:/~BUN/root/chunk-0mrty9z0.js";
import { Akt, wT, gp, ase, Ope } from "B:/~BUN/root/chunk-8qbd7aj8.js";
import { YK } from "B:/~BUN/root/chunk-ve023kqk.js";
import { b3, qA } from "B:/~BUN/root/chunk-zfb6h1v8.js";
import { Dr } from "B:/~BUN/root/chunk-c4gqp24s.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { join as R } from "path";
var w = null;
function EQr(e, t) {
  return e.getAppState().frameUrls[t];
}
function XQe(e, reason) {
  return e ? {
    type: "safetyCheck",
    reason: reason,
    classifierApprovable: !1
  } : {
    type: "other",
    reason: reason
  };
}
function Qm(e, t) {
  let title = N1(ft(e.slug)?.title || qA(t.getAppState().frameUrls).find(([, r]) => r.title && ha(r.url) === e.slug)?.[1].title);
  return {
    url: En(e),
    ...(title && {
      title: title
    })
  };
}
function TQr(e, t, n) {
  let r = `${b3}${t.slug}`,
    rowKey = r,
    alreadyShown = !1,
    lastOpenFailed = !1;
  return e.setAppState(i => {
    let l = Object.entries(i.frameUrls).find(([, d]) => ha(d.url) === t.slug)?.[0];
    if (alreadyShown = l !== void 0, rowKey = l !== void 0 && l !== r ? l : r, lastOpenFailed = i.frameOpenFailedPath === rowKey, alreadyShown && i.frameUrls[r] === void 0) return i;
    let {
      [r]: u,
      ...p
    } = i.frameUrls;
    return {
      ...i,
      frameUrls: {
        ...p,
        [r]: {
          url: En(t),
          updatedAt: Date.now(),
          ...((n ?? u?.title) !== void 0 && {
            title: n ?? u?.title
          })
        }
      }
    };
  }), {
    rowKey: rowKey,
    alreadyShown: alreadyShown,
    lastOpenFailed: lastOpenFailed
  };
}
function Wqt(e, frameOpenFailedPath, n) {
  e.setAppState(r => {
    if (n) return r.frameOpenFailedPath === frameOpenFailedPath ? {
      ...r,
      frameOpenFailedPath: null
    } : r;
    if (r.frameOpenFailedPath === frameOpenFailedPath) return r;
    return {
      ...r,
      frameOpenFailedPath: frameOpenFailedPath,
      frameOpenFailedSeen: !1
    };
  });
}
function aWe(e, t) {
  return hl(e) && zH(e) && !mL(e) ? " (yours; a co-writer has also published to it)" : t === "files" && hl(e) && q5(e) ? " (yours; its files come from an Artifact type its publisher wrote)" : su(e);
}
function AEn(e, t) {
  return hl(e) && zH(e) && !mL(e) ? " [ownership: yours, co-written: a non-owner has also published to it]" : t === "files" && hl(e) && q5(e) ? c$t : `${KT(e)}${uX(e)}`;
}
function E(e) {
  return b([e.path, e.from.slug, e.from.path, e.from.ver ?? ""]);
}
function Irr(e) {
  return L(e.map(E)).sort().join(`
`);
}
function xEn(e, t) {
  return (e ?? "") === Irr(t);
}
function lWe(e, t) {
  let mode = me(e).mode;
  if (mode === "auto") return !1;
  return wz(e.getAppState(), mode === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs", t);
}
function PEn(e, t, n, r, s, a, o = !1) {
  let i = s && !mL(ft(n.slug));
  if ((!ld() || gL(t)) && (i || o) && r && !m4(e, t) && !g7(t, n, hl(ft(n.slug))) && (zf(t) || fy(t) || wP(t))) throw m("artifact_cowritten_consent", "refused_unasked", {
    assets: a === "assets",
    ...(!i && {
      from_type: !0
    })
  }), new Oe(i ? `a co-writer has published to this artifact, so its ${a} are someone else's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)` : `this artifact was created from an Artifact type, so its ${a} are the type publisher's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`, `${a === "files" ? "file" : "asset"}_${i ? "cowritten" : "from_type"}_unasked`);
}
function Ybt(e, t, retryUrl) {
  return m("artifact_outside_org_consent", "refused_unasked", {
    assets: t === "asset_copy"
  }), new Oe(HZe(e, !0, t === "file_copy" ? {
    retryUrl: retryUrl
  } : void 0), `${t}_outside_org_unasked`);
}
function zqt(e, t, n) {
  if (e === fX) C(t, n);
}
function C(e, t) {
  throw m("artifact_outside_org_consent", "refused_unasked", {
    assets: t !== "files"
  }), new Oe(HZe(e), `${t === "files" ? "file" : "asset"}_outside_org_unasked`);
}
function FIe(e) {
  let {
    assetId: assetId,
    outDir: outDir
  } = h7(e);
  if (assetId === void 0 || !Pp.test(assetId)) return;
  let r,
    s = !1;
  try {
    if (outDir === void 0 || outDir === "") {
      let {
          url: url
        } = e,
        o = typeof url === "string" ? Bt(url) : null,
        i = o !== null ? YK(o.slug) : null;
      s = i !== null, r = i ?? oe();
    } else r = Ye(outDir);
  } catch {
    return;
  }
  return {
    stem: R(r, assetId),
    ...(s && {
      defaultDir: !0
    })
  };
}
function EA(e, t = "", n = "url") {
  if (Vce(e) === void 0) return;
  let r = Bt(e),
    s = r !== null ? ` (${En(r)})` : "";
  return {
    result: !1,
    message: `\`${n}\` names a path inside the artifact \u2014 pass the artifact's own URL${s} as \`${n}\`${t}.`,
    errorCode: 4
  };
}
function bU(e) {
  let t = l => {
      let u = e[l];
      return typeof u === "string" ? u : void 0;
    },
    n = e.data,
    data = n !== null && typeof n === "object" && !Array.isArray(n) ? n : void 0,
    {
      replace_all: replace_all,
      if_version: if_version,
      query: query
    } = e,
    query_2 = query !== null && typeof query === "object" && !Array.isArray(query) ? query : void 0;
  return {
    dbOp: t("db_op"),
    collection: t("collection"),
    docId: t("doc_id"),
    data: data,
    query: query_2,
    outDir: t("out_dir"),
    filePath: t("file_path"),
    strReplace: {
      field: t("field"),
      oldStr: t("old_str"),
      newStr: t("new_str"),
      replaceAll: replace_all === void 0 ? void 0 : jx(replace_all) === !0
    },
    ifVersion: IEn(if_version) ? if_version : void 0
  };
}
function IEn(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1;
}
var Orr = ["set", "update", J_, "delete"];
function Vj(e) {
  let t = Mrr(e);
  return t === Bf ? [] : t;
}
function Mrr(e) {
  let t = NE(e.writes);
  if (t === void 0 || t === Bf) return t ?? [];
  return t.map(item => {
    let r = d => item !== null && typeof item === "object" ? item[d] : void 0,
      s = {
        db_op: r("op"),
        collection: r("collection"),
        doc_id: r("doc_id"),
        data: r("data"),
        file_path: r("file_path"),
        if_version: r("if_version")
      },
      {
        dbOp: a,
        collection: collection,
        docId: docId,
        data: data_2,
        filePath: filePath,
        ifVersion: ifVersion
      } = bU(s);
    return {
      op: a,
      collection: collection,
      docId: docId,
      data: data_2,
      filePath: filePath,
      ifVersion: ifVersion,
      ifVersionGiven: s.if_version !== void 0
    };
  });
}
function P(e) {
  return e.db_op === dw ? Vj(e).map(item => item.ifVersion) : [];
}
function Drr(e) {
  return bU(e).ifVersion !== void 0 || P(e).some(item => item !== void 0);
}
function OEn(e) {
  return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === dw;
}
function Gqt(e) {
  return Sm(e.ruleValue.ruleContent ?? "", {
    max: 1024
  }).replace(ch, " ");
}
function ow(e) {
  let t = e?.type_url;
  return typeof t === "string" ? t : void 0;
}
function cWe(e) {
  let t = e?.type;
  return typeof t === "string" ? t : void 0;
}
function MEn(e) {
  return `type_url: not an Artifact type's link: ${e} \u2014 pass a ${KRe()} link from a list_types result`;
}
function DEn(e) {
  return e.auto_open === "after_first_write" ? "after_first_write" : "at_create";
}
function Yue(e) {
  let {
    outDir: outDir_2,
    collection: collection_2
  } = bU(e);
  if (outDir_2 === void 0) return {
    kind: "inline"
  };
  let outDir_3;
  try {
    outDir_3 = Ye(outDir_2 === "" ? oe() : outDir_2);
  } catch {
    return {
      kind: "unresolvable"
    };
  }
  let dir = collection_2 !== void 0 && m8.test(collection_2) ? R(outDir_3, ...collection_2.split("/").map(Lrr)) : outDir_3;
  return {
    kind: "dir",
    outDir: outDir_3,
    dir: dir
  };
}
function Lrr(e) {
  let t = e.replaceAll("~", "@"),
    n = O();
  return n === "windows" || n === "wsl" ? t.replaceAll(":", "%3A") : t;
}
function Nrr(e, t) {
  return `${e}\x00${Mn(t)}`;
}
var CQr = {
  changed: "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the write so it is checked again",
  via_link: "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 pass the resolved path, or copy the file under the working directory first",
  hard_link: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and pass the copy",
  read_denied: "reading where file_path resolves is blocked by a Read permission rule \u2014 the write was not attempted",
  no_identity: no_identity,
  not_a_file: not_a_file,
  size: `file_path is empty or larger than ${Q2e} bytes \u2014 write_db reads at most that much JSON, and the document must serialize to ${AG} bytes or fewer`
};
function dWe(e) {
  return typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string";
}
function JQe(e) {
  if (typeof e !== "object" || e === null || e.action !== "write_db") return !1;
  if (typeof e.file_path === "string") return !0;
  return Vj(e).some(item => item.filePath !== void 0);
}
var Hrr = 3000;
function LEn(e) {
  try {
    return Buffer.byteLength(b(e), "utf8");
  } catch {
    return null;
  }
}
function RQr(e, t, n, r, s, a) {
  let o = HU(e, n),
    i = s.get(e),
    l = `${i ?? "viewer"}${!o && a.has(e) ? ", outside your organization" : ""} ${e.slice(0, 8)}`,
    u = t === "assistant" ? o ? "Claude (via the user)" : `Claude (via ${l})` : t !== void 0 && t !== "" ? `viewer ${e.slice(0, 8)} (unverified lane)` : o ? i !== void 0 ? `the user (${i})` : "the user" : l;
  return r ? `${u}, posted by the artifact` : u;
}
var AQr = 5,
  Frr = 10;
function NEn(e, t) {
  let n = e.length > t ? ` and ${e.length - t} more` : "";
  return `${e.slice(0, t).join(", ")}${n}`;
}
var h = e => e.outsideAsk || e.flaggedOutside;
function Vqt(e) {
  let [t] = e;
  if (e.length === 1 && t !== void 0) {
    let o = [];
    if (h(t)) o.push(t.resolvesOutside ? "reaches, through a symbolic link, a file outside the folders this session can read" : "is outside the folders this session can read");
    if (t.linkNote !== "" && !h(t)) o.push("is a hard link to a file that may also live elsewhere on this machine");
    return o.length === 0 ? "" : ` The local file "${Va(t.askPath, 256)}" ${o.join(" and ")}.`;
  }
  let n = o => ` (${NEn(o.map(item => `"${Va(item.askPath, 256)}"`), Frr)})`,
    r = [{
      group: e.filter(item => h(item) && !item.resolvesOutside),
      one: "is outside the folders this session can read",
      many: "are outside the folders this session can read"
    }, {
      group: e.filter(item => item.resolvesOutside),
      one: "reaches, through a symbolic link, a file outside the folders this session can read",
      many: "reach, through symbolic links, files outside the folders this session can read"
    }, {
      group: e.filter(item => item.linkNote !== "" && !h(item)),
      one: "is a hard link to a file that may also live elsewhere on this machine",
      many: "are hard links to files that may also live elsewhere on this machine"
    }].filter(item => item.group.length > 0),
    [s] = r;
  if (s === void 0) return "";
  if (r.length === 1 && s.group.length === e.length) return ` ${e.length === 2 ? "Both" : `All ${e.length}`} local files being copied ${s.many}${n(s.group)}.`;
  let a = r.map(item => `${item.group.length} ${item.group.length === 1 ? item.one : item.many}${n(item.group)}`);
  return ` Of the ${e.length} local files being copied, ${a.join("; ")}.`;
}
function YQ(e) {
  if (e === void 0) return "";
  try {
    let t = b(e);
    return `${Sm(t, {
      max: 300
    }).replace(ch, " ")}${qqt(t, 300)}`;
  } catch {
    return "(unserializable payload)";
  }
}
function qqt(e, t) {
  return Array.from(e.slice(0, 2 * t + 2)).length <= t ? "" : `\u2026 [truncated \u2014 ${Buffer.byteLength(e, "utf8")} bytes total]`;
}
function xQr({
  field: field,
  oldStr: oldStr,
  newStr: newStr,
  replaceAll: replaceAll
}) {
  let s = (a, max) => {
    if (a === void 0) return "(missing)";
    let i = b(a);
    return `${Sm(i, {
      max: max
    }).replace(ch, " ").replace(Ox, "'").replace(ED, "'")}${qqt(i, max)}`;
  };
  return `field ${s(field, Zpe)}: replace ${replaceAll === !0 ? "every " : ""}${s(oldStr, 200)} with ${s(newStr, 200)}`;
}
function $rr(e) {
  return e !== null && typeof e === "object" && e.live === !1 && Object.keys(e).length === 1;
}
var S = new Set([...vhe, ...PLt]);
function g(e, t) {
  if (typeof t === "string") return S.has(oD(t));
  return typeof e === "string" && S.has(lq(e) ?? "");
}
function Urr(e) {
  if (typeof e !== "object" || e === null) return 0;
  let {
      file_path: file_path,
      files: files
    } = e,
    r = g(file_path) ? 1 : 0,
    s = NE(files);
  if (s === Bf) return Bf;
  if (s !== void 0) for (let a of s) r += g(typeof a === "string" ? a : a?.path, a?.contentType) ? 1 : 0;else if (files !== null && typeof files === "object") for (let [a, o] of Object.entries(files)) {
    if (o === null || $rr(o)) continue;
    let i = typeof o === "object" && typeof o.artifact === "string" ? o.path : void 0;
    r += (i !== void 0 ? g(a) || g(i) : g(a, o?.contentType)) ? 1 : 0;
  }
  return r;
}
var D = new Set([...yMr, ...hMr]);
function c(e, t, n) {
  if (typeof e !== "string") return !1;
  let r = lq(e);
  if (r === void 0 || !n.has(oD(r))) return !1;
  return t === void 0 || typeof t === "string" && n.has(oD(t));
}
function T(e, t, n) {
  return c(e, void 0, n) && c(t, void 0, n);
}
function _(e) {
  return e.live !== void 0 || e.reseed !== void 0;
}
function PQr(e) {
  return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp");
}
function Brr(e, t) {
  if (typeof e !== "object" || e === null) return !1;
  let n = t.documents ? D : yMr,
    {
      file_path: file_path_2,
      files: files_2
    } = e;
  if (_(e) || !c(file_path_2, void 0, n)) return !1;
  if (files_2 === void 0) return !0;
  let a = NE(files_2);
  if (a === Bf) return !1;
  if (a !== void 0) return a.every(item => typeof item === "string" ? c(item, void 0, n) : item !== null && typeof item === "object" && !_(item) && c(item.path, item.contentType, n));
  if (files_2 === null || typeof files_2 !== "object") return !1;
  return Object.entries(files_2).every(([o, i]) => {
    if (i === null) return !0;
    if (typeof i === "string") return c(o, void 0, n);
    if (typeof i !== "object" || Array.isArray(i)) return !1;
    if (_(i)) return !1;
    let l = i;
    if (typeof l.from === "string" && l.artifact !== void 0) return !1;
    if (typeof l.artifact === "string") return T(o, i.path, n);
    return c(o, i.contentType, n);
  });
}
function jrr() {
  return Ope(wT().shape.action, "read_file");
}
function Wrr() {
  return Ope(wT().shape.action, "delete");
}
function uWe() {
  return Ope(wT().shape.action, "open");
}
function QQe() {
  return Ope(wT().shape.action, "pin");
}
function IQr(e, t) {
  if (e?.title === void 0) return;
  if (t === void 0) return e.title;
  let n = ha(t);
  return n !== null && ha(e.url) === n ? e.title : void 0;
}
var OQr = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);
function Xbt(e) {
  if (me(e).mode === "plan") return "plan";
  if (wP(e)) return "cowork_no_surface";
  if (Pm(e)) return "no_surface";
  return null;
}
function A(e, t, n) {
  let r = n ? "Copying from this artifact is" : e.ruleValue.toolName === Dr ? "Artifact reads are" : "Reading this artifact is",
    s = t === "" ? "" : ` \u2014 ${t}`;
  return `${r} blocked by ${OOe(e)}${s}`;
}
function ZC(rule, t = "", n = !1) {
  return {
    behavior: "deny",
    message: `${A(rule, t, n)}.`,
    decisionReason: {
      type: "rule",
      rule: rule
    }
  };
}
function sG(e, t, n, r, s) {
  let a = aS(me(e), t, n, "deny", s);
  return a === null ? void 0 : new Oe(A(a, r, s.copySource === !0), "read_denied");
}
function XQ(e) {
  return e.ruleValue.toolName === Dr ? ` (your ${Dr} ask rule covers artifact reads)` : ` (your ${e.ruleValue.toolName} ask rule covers this url)`;
}
function Jbt(e) {
  if (!ase() || e === null || e === void 0) return !1;
  if (e.action !== void 0 && e.action !== "publish") return !1;
  let t = Btt(e);
  if (t !== void 0) return G(t) && t.room !== void 0;
  let n = ow(e);
  if (n !== void 0) {
    let a = Bt(n);
    return a !== null && Dvt(a.slug);
  }
  let r = typeof e.url === "string" ? Bt(e.url) : null,
    s;
  try {
    s = r !== null ? ft(r.slug) : typeof e.file_path === "string" ? glt(Ye(e.file_path)) : void 0;
  } catch {
    s = void 0;
  }
  return s?.capabilities?.room !== void 0;
}
var HEn = {
  threadIds: new Set(),
  commentIds: new Set()
};
function zrr(e) {
  return {
    url: Lf(e.slug),
    release: e.current
  };
}
function OH(e) {
  let t = typeof e === "string" ? Bt(e) : null;
  if (!t) throw new Oe(`not an artifact URL: ${String(e)}`, "invalid_url");
  return t;
}
function Kqt(e, t, n, r) {
  if (typeof n !== "object" || n === null || !OEn(n)) return;
  let {
    writes: writes,
    ...a
  } = n;
  for (let [index, i] of Vj(n).entries()) {
    let rule_2 = Icr(t, e, {
      ...a,
      db_op: i.op,
      collection: i.collection,
      doc_id: i.docId,
      ...(i.data !== void 0 && {
        data: i.data
      }),
      ...(i.filePath !== void 0 && {
        file_path: i.filePath
      })
    }, r);
    if (rule_2) return {
      index: index,
      rule: rule_2
    };
  }
  return;
}
function FEn(e, t, n, r) {
  if (typeof n !== "object" || n === null || n.db_op !== J_) return;
  return Icr(t, e, {
    ...n,
    db_op: "update"
  }, r) ?? void 0;
}
function qj(e) {
  return e.ruleValue.ruleContent === void 0 ? e.ruleValue.toolName : `${e.ruleValue.toolName}(${Gqt(e)})`;
}
function Yqt(e, t, n) {
  let r = Kqt(e, t, n, "deny");
  return r === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${yn} has been denied by your rule ${qj(r.rule)} (writes[${r.index}] of this batch matches it), so nothing in the batch was written.`,
    decisionReason: {
      type: "rule",
      rule: r.rule
    }
  };
}
function MQr(e, t, n) {
  let rule_3 = FEn(e, t, n, "deny");
  return rule_3 === void 0 ? void 0 : {
    behavior: "deny",
    message: `Permission to use ${yn} has been denied by your rule ${qj(rule_3)} (a str_replace is an update of one field), so nothing was written.`,
    decisionReason: {
      type: "rule",
      rule: rule_3
    }
  };
}
function DQr(e, t, n, r) {
  let s = Kqt(e, n, r, "ask");
  if (s === void 0 || typeof r !== "object" || r === null) return;
  let a = Reflect.get(r, "url"),
    o = typeof a === "string" ? Bt(a) : null;
  return {
    behavior: "ask",
    message: `Claude wants to write a batch to this artifact's database, and writes[${s.index}] matches your ask rule ${qj(s.rule)} \u2014 the full permission check could not complete, so approving covers only this call.`,
    updatedInput: {
      ...r,
      [tu]: !1,
      [ok]: o === null ? null : Qm(o, t)
    },
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "rule",
      rule: s.rule
    }
  };
}
function tk(e, t) {
  if (!JMt(ft(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${En(e)}: ${wtt}. ${t}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: reason_2
    }
  };
}
function $En(e, t) {
  let n = tk(e, t);
  if (n !== null) return n;
  if (!uI(ft(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${En(e)}: ${rmr}. ${t}; tell the user.`,
    decisionReason: {
      type: "other",
      reason: reason_3
    }
  };
}
function Qbt(e, t, n) {
  let r = e === "watch" && gp();
  if (r && t.path !== void 0 && w?.livePathFrom(t) === void 0) return {
    result: !1,
    message: w?.LIVE_PATH_INVALID ?? "invalid path",
    errorCode: 8
  };
  let s = Object.keys(t).filter(item => item !== "action" && item !== "url" && !(e === "read_page_data" && item === "schema") && !(r && item === "path") && t[item] !== void 0);
  if (s.length > 0) return {
    result: !1,
    message: `action "${e}" takes only ${e === "read_page_data" ? "`url` and `schema`" : r ? "`url` (and `path`)" : "`url`"} \u2014 remove ${s.join(", ")}.`,
    errorCode: 8
  };
  if (e === "read_page_data") {
    let schema = t.schema,
      frozenReadPageDataSchemaNames = ee().frozenReadPageDataSchemaNames;
    if (schema === void 0) return {
      result: !1,
      message: `action "read_page_data" requires \`schema\` \u2014 the registered interaction schema to validate against${frozenReadPageDataSchemaNames?.size ? ` (e.g. "${[...frozenReadPageDataSchemaNames][0]}")` : ""}.`,
      errorCode: 7
    };
    if (!Akt(schema)) return {
      result: !1,
      message: `interaction schema "${Sm(schema)}" is not available in this session. Available schemas: ${[...(frozenReadPageDataSchemaNames ?? [])].join(", ") || "(none)"}.`,
      errorCode: 8
    };
    let u = Hkt(schema);
    if (!u.ok) return {
      result: !1,
      message: u.reason === "unknown" ? `unknown interaction schema "${schema}" \u2014 registered schemas: ${Jso().join(", ") || "(none)"}.` : `interaction schema "${schema}" failed validation in this build \u2014 report this; nothing can be read against it.`,
      errorCode: 8
    };
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
    };
  }
  let a = EA(n);
  if (a) return a;
  let o = gE(n);
  if (!o.ok) return {
    result: !1,
    message: o.message,
    errorCode: o.errorCode
  };
  return {
    result: !0
  };
}
var iWe = 64,
  timeout = 15000,
  maxContentLength = 65536;
async function kQr(e, ids, signal, credentials) {
  let s = ee(),
    accountEpoch = s.accountEpoch,
    o = s.profileIdsForgets.get(e) ?? 0,
    i;
  try {
    i = await Ud.postRelayBound(`/api/frame/user/profiles/${encodeURIComponent(e)}`, {
      ids: ids
    }, {
      refreshOAuth: !0,
      credentials: credentials,
      headers: $d(),
      timeout: timeout,
      maxContentLength: maxContentLength,
      signal: signal
    });
  } catch (error) {
    if (Fa(error)) throw error;
    return {
      ok: !1
    };
  }
  if (!i.ok) return {
    ok: !1
  };
  let l = () => ee() === s && s.accountEpoch === accountEpoch && (s.profileIdsForgets.get(e) ?? 0) === o;
  if (!i.fromFrame || i.status < 200 || i.status >= 300) {
    if (i.fromFrame && l() && i.status === 403 && G(i.data) && i.data.error === "not_declared") s.profileIdsServed.set(e, !1);
    return {
      ok: !1,
      status: i.status
    };
  }
  let u = G(i.data) ? i.data.profiles : void 0;
  if (!G(u)) return {
    ok: !1,
    status: i.status
  };
  let p = new Set(ids),
    profiles = {};
  for (let [f, k] of Object.entries(u)) {
    if (!p.has(f)) continue;
    let y = Prr(k);
    if (y.name !== void 0 || y.guest === !0) profiles[f] = y;
  }
  if (l()) s.profileIdsServed.set(e, !0), N(e, {
    ...Object.fromEntries(ids.map(item => [item, {}])),
    ...profiles
  });
  return {
    ok: !0,
    profiles: profiles
  };
}
function Prr(e) {
  if (!G(e)) return {};
  let name = NEt(e.name);
  return {
    ...(name !== void 0 && {
      name: name
    }),
    ...(e.guest === !0 && {
      guest: !0
    })
  };
}
var I = 512;
function v(e, t) {
  return `${e}\x00${t}`;
}
function N(e, t) {
  let profileNames = ee().profileNames;
  for (let [r, s] of Object.entries(t)) {
    let a = v(e, r);
    profileNames.delete(a), profileNames.set(a, s.name === void 0 ? {
      ...s,
      at: Date.now()
    } : s);
  }
  while (profileNames.size > I) {
    let r = profileNames.keys().next().value;
    if (r === void 0) break;
    profileNames.delete(r);
  }
}
export { iWe, kQr, Prr, EQr, XQe, Qm, TQr, Wqt, aWe, AEn, Irr, xEn, lWe, PEn, Ybt, zqt, FIe, EA, bU, IEn, Orr, Vj, Mrr, Drr, OEn, Gqt, ow, cWe, MEn, DEn, Yue, Lrr, Nrr, CQr, dWe, JQe, Hrr, LEn, RQr, AQr, Frr, NEn, Vqt, YQ, qqt, xQr, $rr, Urr, PQr, Brr, jrr, Wrr, uWe, QQe, IQr, OQr, Xbt, ZC, sG, XQ, Jbt, HEn, zrr, OH, Kqt, FEn, qj, Yqt, MQr, DQr, tk, $En, Qbt };