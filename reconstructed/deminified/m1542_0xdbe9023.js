// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { uh, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { qr } from "B:/~BUN/root/chunk-y04k89s2.js";
import { AF, Qee, ld, ft, JMt, hl, qp } from "B:/~BUN/root/chunk-faawr4jv.js";
import { Xo } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { so, Jf, Bt, gi, Ov, pc, C$e, ch } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { El } from "B:/~BUN/root/chunk-at7axhcd.js";
import { Rm } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { nGe } from "B:/~BUN/root/chunk-7z8vew74.js";
import { dXt } from "B:/~BUN/root/chunk-ndb6ecfp.js";
import { Ku } from "B:/~BUN/root/chunk-tyqwkyrh.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { gL, FZe } from "B:/~BUN/root/chunk-h9ex720v.js";
import { Mze, G5, yG, twe, V5 } from "B:/~BUN/root/chunk-sjxdbr0h.js";
import { Zbt } from "B:/~BUN/root/chunk-r8egpw36.js";
import { wZe, Avt } from "B:/~BUN/root/chunk-exdrqg09.js";
import { aS } from "B:/~BUN/root/chunk-xanxfwr0.js";
import { u } from "B:/~BUN/root/chunk-n8qdr73v.js";
var h = "README.md",
  path = "project/README.md",
  K = 12000,
  Y = 7000,
  q = 700,
  lbt = {
    interrupted: "interrupted before it could be read",
    timeout: "reading it took too long",
    failed: "the read failed unexpectedly"
  };
function foe(e, t, n, o) {
  let r = () => n.abortController.signal.aborted ? "interrupted" : t.aborted ? "timeout" : "failed";
  return new Promise(s => {
    let i = () => s(o(r()));
    if (t.aborted) {
      e.catch(() => {}), i();
      return;
    }
    t.addEventListener("abort", i, {
      once: !0
    }), e.then(a => {
      t.removeEventListener("abort", i), s(a);
    }, a => {
      t.removeEventListener("abort", i);
      let l = r();
      if (l === "failed") d(a);
      s(o(l));
    });
  });
}
function wJr(e, t) {
  let n = e.find(item => item.default !== void 0);
  if (n === void 0 || n.default === void 0) return e.length === 0 ? {
    url: void 0,
    why: "the account lists no design systems \u2014 build without one unless the user names one",
    code: "default_none_listed"
  } : {
    url: void 0,
    why: `no default is set among the ${e.length}${t ? " or more" : ""} design systems the account lists \u2014 name the listed systems to the user and ask which to use before creating, then read their pick with its own call; with nobody to ask, build without one; they are ${J(e)}`,
    code: "default_unmarked"
  };
  return {
    url: n.url,
    source: {
      default: n.default,
      title: n.title
    }
  };
}
function J(e) {
  let n = e.slice(0, 3).map(item => `${b(Rm(Ov(item.title, 40)) ?? "Untitled")} ${gi(item.url, "(unrecognized address)")}`);
  return e.length > 3 ? `${n.join(", ")}, and ${e.length - 3} more` : n.join(", ");
}
async function Qtr(e, signal, n, o, r, s) {
  let parsed = Bt(e);
  if (parsed === null || parsed.env !== so()) return {
    ok: !1,
    why: "it is not an Artifact URL of this session's claude.ai",
    code: "not_a_link"
  };
  let l = [...(Mze() ? ["files"] : []), ...(o ? ["store"] : [])];
  if (l.length === 0) return {
    ok: !1,
    ...M("off", "off")
  };
  if (l.every(item => O(item, parsed, e, n, r))) return {
    ok: !1,
    why: why,
    code: "rule"
  };
  let c = {
      signal: signal,
      credentials: n.credentials
    },
    g = await foe(Ku(parsed, {
      toolUseId: n.toolUseId,
      abortController: {
        signal: signal
      },
      ...c
    }, s).then(() => {
      return;
    }), signal, n, y => y);
  if (g !== void 0) return {
    ok: !1,
    why: `${lbt[g]} \u2014 read it with its own call`,
    code: `probe_${g}`
  };
  let w = ft(parsed.slug);
  if (JMt(w)) return {
    ok: !1,
    why: "it is in another of the user's organizations, which this login cannot read \u2014 say so rather than guess its values",
    code: "other_org"
  };
  let owned = hl(w);
  if (qp(parsed.slug) && !Xo(n.agentContext)) return {
    ok: !1,
    why: why_2,
    code: "notice_pending"
  };
  await foe(wZe(parsed, c), signal, n, () => {
    return;
  });
  let filesRuled = O("files", parsed, e, n, r),
    storeRuled = O("store", parsed, e, n, r);
  return {
    ok: !0,
    parsed: parsed,
    owned: owned,
    filesRuled: filesRuled,
    storeRuled: storeRuled,
    filesOk: Mze() && !filesRuled && I(parsed, owned, "files", n),
    storeOk: o && !storeRuled && I(parsed, owned, "store", n)
  };
}
function Ztr(e, t, n, o) {
  return !(qp(e.slug) && !Xo(n.agentContext)) && !O("files", e, t, n, o) && I(e, hl(ft(e.slug)), "files", n);
}
async function vJr(url, t, n, o, r, s) {
  let i = {
      default: t.default,
      title: t.title
    },
    a = (unavailable, T) => (p("artifact_design_system_guide", T), {
      design_system: {
        url: url,
        ...i,
        unavailable: unavailable
      }
    }),
    l = await Qtr(url, n, o, r, s, "design_system_guide");
  if (!l.ok) return a(l.why, l.code);
  let {
      parsed: parsed_2,
      owned: owned_2,
      filesRuled: filesRuled_2,
      storeRuled: storeRuled_2,
      filesOk: filesOk,
      storeOk: storeOk
    } = l,
    y = j(Mze(), filesRuled_2, filesOk),
    D = j(r, storeRuled_2, storeOk);
  if (!filesOk && !storeOk) {
    let R = M(y, D);
    return a(R.why, R.code);
  }
  let [E, V] = await Promise.all([storeOk ? se(parsed_2, n, o) : S, filesOk ? ne(parsed_2, n, o) : te]),
    C = oe(V),
    project = C.doc?.path === path,
    store = !project && E.doc !== void 0,
    N = project ? C.doc : E.doc ?? C.doc;
  if (N === void 0) {
    let R = E.why ?? C.why,
      T = E.moved === !0 && y === "off" ? Z : M(y, D);
    return R === void 0 ? a(T.why, T.code) : a(R, "nothing_read");
  }
  if (!owned_2) Ykn(parsed_2, store ? "read_db" : "read_file", o);
  _("artifact_design_system_guide", {
    store: store,
    project: project,
    owned: owned_2
  });
  let unavailable_2 = store || project ? void 0 : D === "ruled" ? `a permission rule governs reading its store, ${x}` : D === "unconsented" ? `its store needs approval to read here, ${x}` : E.unchecked === !0 ? `its store could not be checked, ${x}` : E.keptButUnread === !0 ? `its store's README is empty or could not be read here, ${x}` : void 0;
  return {
    design_system: {
      url: url,
      ...i,
      ...(store && {
        store: !0
      }),
      docs: [N],
      ...(unavailable_2 !== void 0 && {
        unavailable: unavailable_2
      })
    }
  };
}
var k = "read it with its own call, which may ask the user",
  why = "a permission rule governs reading it \u2014 read it with its own call and that rule decides",
  x = "so this is its published README, which may be older than the one in its store",
  Z = {
    why: "it moved to its own files, which this session does not serve",
    code: "nothing_read"
  };
function O(e, t, n, o, pipelineRan) {
  return e === "files" ? tSe(t, n, "read_file", o, {
    pipelineRan: pipelineRan
  }) || tSe(t, n, "read_file", o, {
    pipelineRan: pipelineRan,
    fields: {
      path: path
    }
  }) : tSe(t, n, "read_db", o, {
    pipelineRan: pipelineRan
  }) || tSe(t, n, "read_db", o, {
    pipelineRan: pipelineRan,
    fields: fields
  });
}
function j(e, t, n) {
  return !e ? "off" : t ? "ruled" : n ? "read" : "unconsented";
}
function M(e, t) {
  let n = [e, t].filter(item => item !== "read" && item !== "off");
  if (e !== "read" && t !== "read" && n.length === 0) return {
    why: "this session serves neither its files nor its store",
    code: "not_served"
  };
  if (n.includes("unconsented")) return e === "read" || t === "read" ? {
    why: `its ${e === "unconsented" ? "files" : "store"} cannot be read here without the user's approval \u2014 ${k}`,
    code: "nothing_read"
  } : {
    why: why_2,
    code: "not_consented"
  };
  if (n.includes("ruled")) return {
    why: why,
    code: "rule"
  };
  return e === "off" ? {
    why: "its store holds no README for it, and this session does not serve its files",
    code: "nothing_read"
  } : {
    why: t === "off" ? "it has no README to read here (this session does not read stores)" : "it has no README to read",
    code: "nothing_read"
  };
}
var why_2 = `reading it here first needs the user's approval, which this call does not ask for \u2014 ${k}`,
  fields = {
    db_op: "get",
    collection: "ds",
    doc_id: "meta"
  },
  Q = {
    read_file: {
      path: h
    },
    read_db: {
      db_op: "get",
      collection: "files",
      doc_id: h
    }
  };
function tSe(e, t, action, o, r = {}) {
  let fields_2 = r.fields ?? (action === "list_files" ? {} : Q[action]),
    i = me(o);
  return (action === "read_file" ? [{
    action: action,
    fields: fields_2
  }, {
    action: "read",
    fields: fields_2
  }] : action === "list_files" ? [{
    action: action,
    fields: fields_2
  }, {
    action: "list",
    fields: {
      ...fields_2,
      scope: "files"
    }
  }] : [{
    action: action,
    fields: fields_2
  }]).some(item => ["deny", "ask"].some(c => aS(i, e, t, c, {
    action: item.action,
    fields: item.fields,
    wholeToolAskAnswered: r.pipelineRan === !0
  }) !== null));
}
function I(e, t, n, o) {
  if (ld() && !gL(o)) {
    let r = V5(e, o, n === "store");
    return !r.ask || r.remember === "artifact" && Qee(r, e.slug);
  }
  return n === "store" ? t || twe(o, e.slug) : G5(o, e, "files", "land");
}
function Ykn(e, t, n) {
  if (ld() && !gL(n) && !AF("foreign_read", e.slug)) {
    let o = t === "read_db" ? twe(n, e.slug) : yG(n, e.slug);
    FZe(t, e.slug, void 0, o || void 0);
  }
}
var S = {
  doc: void 0,
  why: void 0
};
async function W(e, t, n, o, r) {
  let s = await foe(nGe(e, t, o, r.credentials, "artifact_design_system_guide_read"), o, r, late => ({
    err: lbt[late],
    late: late
  }));
  if (s.err === null) return s.html.trim() === "" ? S : {
    doc: U(s.html, t),
    why: void 0
  };
  if (s.missingFile === !0 || n && s.status === 404 && s.errorCode === void 0) return S;
  let failed = s.late !== void 0 ? lbt[s.late] : "the content host refused or failed";
  return {
    doc: void 0,
    why: ee(t, failed),
    failed: failed
  };
}
var ee = (e, t) => `its ${e} could not be fetched (${t}) \u2014 ${k}`,
  te = {
    root: S,
    project: S
  };
async function ne(e, t, n) {
  let [root, project_2] = await Promise.all([W(e, h, !1, t, n), W(e, path, !0, t, n)]);
  return {
    root: root,
    project: project_2
  };
}
function oe({
  project: project_3,
  root: root_2
}) {
  if (project_3.doc !== void 0 || root_2.doc !== void 0) return project_3.doc !== void 0 ? project_3 : root_2;
  if (project_3.failed !== void 0 && root_2.failed !== void 0) return {
    doc: void 0,
    why: `its ${project_3.failed === root_2.failed ? `${path} and ${h} could not be fetched (${root_2.failed})` : `${path} (${project_3.failed}) and ${h} (${root_2.failed}) could not be fetched`} \u2014 read the design system with its own call, which may ask the user`
  };
  return project_3.why !== void 0 ? project_3 : root_2;
}
var re = new Set(["store_unavailable", "busy", "quota_or_rate", "quota_exceeded", "upstream_auth"]);
function B(e, collection, docId, o, r) {
  return foe(dXt(r.session.host, {
    slug: e.slug,
    op: "get",
    collection: collection,
    docId: docId
  }, o, r.storageV5, r.credentials), o, r, reason => ({
    kind: "error",
    code: "store_unavailable",
    message: lbt[reason],
    reason: reason
  }));
}
async function se(e, t, n) {
  let [o, r] = await Promise.all([B(e, fields.collection, fields.doc_id, t, n), B(e, "files", h, t, n)]);
  if (o.kind !== "ok") return o.kind !== "error" || o.code === "not_declared" ? {
    doc: void 0,
    why: void 0
  } : {
    doc: void 0,
    why: `its store could not be read (${o.message}) \u2014 ${k}`,
    ...(re.has(o.code) && {
      unchecked: !0
    })
  };
  if (ie(o.docs[0]?.data)) return {
    doc: void 0,
    why: void 0,
    moved: !0
  };
  let s = de(r);
  return {
    ...(s === void 0 && r.kind !== "not_found" && {
      keptButUnread: !0
    }),
    doc: s === void 0 ? void 0 : U(s),
    why: r.kind === "error" ? `its store could not be read (${r.message}) \u2014 ${k}` : r.kind === "ok" && s === void 0 ? typeof r.docs[0]?.data.data === "string" ? "its README.md in the store is empty" : "its README.md is a stored file rather than an inline document \u2014 read it from the system with its own call" : void 0
  };
}
function ie(e) {
  let t = G(e) ? e.movedTo : void 0;
  return G(t) && typeof t.path === "string" && typeof t.at === "string";
}
function de(e) {
  if (e.kind !== "ok") return;
  let t = e.docs[0]?.data.data;
  return typeof t === "string" && t.trim() !== "" ? t : void 0;
}
function Xkn(path_2, t, n) {
  let text = pc(t),
    chars = Array.from(text).length;
  return chars > n ? {
    path: path_2,
    text: pc(qr(text, n)),
    chars: chars,
    clipped: !0
  } : {
    path: path_2,
    text: text,
    chars: chars
  };
}
var ae = [`
## Consuming this system (generated`, `
## Index (generated`],
  H = "[\u2026authored guide clipped here; its generated tail follows\u2026]";
function U(e, path_3 = h) {
  let n = K,
    text_2 = pc(e),
    chars_2 = Array.from(text_2).length;
  if (chars_2 <= n) return {
    path: path_3,
    text: text_2,
    chars: chars_2
  };
  let s = ae.map(item => text_2.lastIndexOf(item)).find(item => item !== -1) ?? -1;
  if (s === -1) return Xkn(path_3, text_2, n);
  let i = qr(text_2.slice(s), Y),
    a = n - Array.from(i).length - Array.from(H).length - 2,
    l = qr(text_2.slice(0, s), a);
  return {
    path: path_3,
    text: pc(`${l}
${H}
${i}`),
    chars: chars_2,
    clipped: !0
  };
}
function le(e, t, n) {
  if (n) return `Its other cards are not attached: read one when you need it with ${El('action "read_file"', () => 'action "read"')}, \`url\`: ${b(e)}, and a \`path\`: "project/api/tokens.md" (palette, type, fonts); "project/tokens.json" (exact token values); or, where the README's index is shown, a card it names, at "project/" followed by the path the index gives.`;
  return t ? `Its other cards are not attached: read one when you need it with ${El('action "read_db" and `db_op`: "get"', () => `the ${Jf} tool, action "get"`)}, \`url\`: ${b(e)}, and a \`collection\` and \`doc_id\`: "api" and "tokens.md" (palette, type, fonts); "ds" and "tokens" (exact token values); "ds" and "meta" (the system's record). Where the README's index is shown, read a card it names by the collection and doc id the index gives.` : `Its other cards are not attached: read one when you need it with ${El('action "read_file"', () => 'action "read"')}, \`url\`: ${b(e)}, and a \`path\`: "api/tokens.md" (palette, type, fonts); "tokens.json" (exact token values); or, where the README's index is shown, a card it names, by its path there.`;
}
function cbt(e, t) {
  let n = Array.from(e).length > t;
  return pc(qr(e, t)).replace(ch, " ").replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim() + (n ? " \u2026" : "");
}
function Jkn(e) {
  if (e === null || typeof e !== "object" || !("docs" in e) || !Array.isArray(e.docs) || !e.docs.some(item => item !== null && typeof item === "object" && "text" in item && item.text !== "")) return;
  return {
    ...e,
    docs: e.docs.map(item => item !== null && typeof item === "object" ? {
      ...item,
      text: ""
    } : item)
  };
}
function kJr(design_system) {
  let t = u(Zbt()).safeParse({
      design_system: design_system
    }),
    n = t.success ? t.data.design_system : void 0;
  if (n === void 0) return {
    text: "",
    attached: !1
  };
  let o = n.unavailable === void 0 ? void 0 : cbt(n.unavailable, q);
  if (typeof n.url !== "string") return {
    text: `

[Design system not attached \u2014 ${o ?? "no default could be found"}.]`,
    attached: !1
  };
  let r = gi(n.url, "(unrecognized address)"),
    s = typeof n.title === "string" ? ` ${b(cbt(C$e(Rm(Ov(n.title, 200)) ?? ""), 200) || "Untitled")}` : "",
    i = `${r}${s}, the ${n.default === "user" ? "user's" : "organization's"} default design system`,
    a = (n.docs ?? []).find(item => (item.path === h || item.path === path) && item.text !== "");
  if (a === void 0) return {
    text: `

[Design system not attached (${i}) \u2014 ${o ?? "its README is not kept in this record; read it with its own call if you need it"}.]`,
    attached: !1
  };
  let l = U(a.text),
    c = l.clipped === !0 || a.clipped === !0,
    g = Math.max(l.chars, a.chars),
    w = " This is the standing choice; ignore it if the user or the session named another, or declined one, in this conversation.",
    m = c ? `
[\u2026clipped at ${Array.from(l.text).length} of ${g} characters; read the whole file from the design system if you need the rest]` : "";
  return {
    text: `

${uh}
Design system ${i}.${w} Its ${a.path} (${n.store === !0 ? "a document of its store" : "a published file"}) follows \u2014 do not fetch it again${c ? " unless you need the clipped remainder" : ""}.${o !== void 0 ? ` (${o}.)` : ""} ${le(r, n.store === !0, a.path === path)}

${a.path}:
${Avt(l.text + m)}`,
    attached: !0
  };
}
export { path as AIe, lbt, foe, wJr, Qtr, Ztr, vJr, tSe, Ykn, Xkn, cbt, Jkn, kJr };