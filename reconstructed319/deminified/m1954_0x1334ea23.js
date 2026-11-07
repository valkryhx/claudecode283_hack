// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { $p, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Oi } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Qs } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ss, Yf, fn, Fa, Zx, Jd, j_t, _k } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { Wc } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { Tlt } from "B:/~BUN/root/chunk-gjq813eb.js";
import { Mt, Omt, Pu, Dy } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { Eir } from "B:/~BUN/root/chunk-x29v5gdt.js";
import { pX, ALe, fGe } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { Pp } from "B:/~BUN/root/chunk-qn600xqp.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { UK, U4t } from "B:/~BUN/root/chunk-e2g6ph6a.js";
import { TBe, Vhe, Ole, Bit, Ile } from "B:/~BUN/root/chunk-7exknzyq.js";
import { Hyn } from "B:/~BUN/root/chunk-y7sn9cer.js";
import { iqt, Qbn } from "B:/~BUN/root/chunk-a0ay7b2x.js";
import { AP } from "B:/~BUN/root/chunk-3vayx43w.js";
import { Fm } from "B:/~BUN/root/chunk-vdqpev1m.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var p = "README.md",
  path = "project/README.md",
  K = 12000,
  Y = 7000,
  q = 700,
  Nyn = {
    interrupted: "interrupted before it could be read",
    timeout: "reading it took too long",
    failed: "the read failed unexpectedly"
  };
function gOe(e, t, n, o) {
  let r = () => n.abortController.signal.aborted ? "interrupted" : t.aborted ? "timeout" : "failed";
  return new Promise(s => {
    let i = () => s(o(r()));
    if (t.aborted) {
      e.catch(() => {}), i();
      return;
    }
    t.addEventListener("abort", i, {
      once: !0
    }), e.then(d => {
      t.removeEventListener("abort", i), s(d);
    }, d => {
      t.removeEventListener("abort", i);
      let l = r();
      if (l === "failed") a(d);
      s(o(l));
    });
  });
}
function Ati(e, t) {
  let n = e.find(item => item.default !== void 0);
  if (n === void 0 || n.default === void 0) return e.length === 0 ? {
    url: void 0,
    why: "the account lists no design systems \u2014 build without one unless the user names one"
  } : {
    url: void 0,
    why: `no default is set among the ${e.length}${t ? " or more" : ""} design systems the account lists \u2014 name the listed systems to the user and ask which to use before creating, then read their pick with its own call; with nobody to ask, build without one; they are ${J(e)}`
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
  let n = e.slice(0, 3).map(item => `${_(Fm(Zx(item.title, 40)) ?? "Untitled")} ${Fa(item.url, "(unrecognized address)")}`);
  return e.length > 3 ? `${n.join(", ")}, and ${e.length - 3} more` : n.join(", ");
}
async function $zo(e, signal, n, o, r, s) {
  let parsed = fn(e);
  if (parsed === null || parsed.env !== ss()) return {
    ok: !1,
    why: "it is not an Artifact URL of this session's claude.ai",
    code: "not_a_link"
  };
  let l = [...(TBe() ? ["files"] : []), ...(o ? ["store"] : [])];
  if (l.length === 0) return {
    ok: !1,
    ...L("off", "off")
  };
  if (l.every(item => M(item, parsed, e, n, r))) return {
    ok: !1,
    why: why,
    code: "rule"
  };
  let f = {
      signal: signal,
      credentials: n.credentials
    },
    m = await gOe(Pp(parsed, {
      toolUseId: n.toolUseId,
      abortController: {
        signal: signal
      },
      ...f
    }, s).then(() => {
      return;
    }), signal, n, b => b);
  if (m !== void 0) return {
    ok: !1,
    why: `${Nyn[m]} \u2014 read it with its own call`,
    code: `probe_${m}`
  };
  let w = Mt(parsed.slug);
  if (Omt(w)) return {
    ok: !1,
    why: "it is in another of the user's organizations, which this login cannot read \u2014 say so rather than guess its values",
    code: "other_org"
  };
  let owned = Pu(w);
  if (Dy(parsed.slug) && !Qs(n.agentContext)) return {
    ok: !1,
    why: why_2,
    code: "notice_pending"
  };
  await gOe(iqt(parsed, f), signal, n, () => {
    return;
  });
  let filesRuled = M("files", parsed, e, n, r),
    storeRuled = M("store", parsed, e, n, r);
  return {
    ok: !0,
    parsed: parsed,
    owned: owned,
    filesRuled: filesRuled,
    storeRuled: storeRuled,
    filesOk: TBe() && !filesRuled && U(parsed, owned, "files", n),
    storeOk: o && !storeRuled && U(parsed, owned, "store", n)
  };
}
function Uzo(e, t, n, o) {
  return !(Dy(e.slug) && !Qs(n.agentContext)) && !M("files", e, t, n, o) && U(e, Pu(Mt(e.slug)), "files", n);
}
async function xti(url, t, n, o, r, s) {
  let i = {
      default: t.default,
      title: t.title
    },
    d = (unavailable, O) => (c("artifact_design_system_guide", O), {
      design_system: {
        url: url,
        ...i,
        unavailable: unavailable
      }
    }),
    l = await $zo(url, n, o, r, s, "design_system_guide");
  if (!l.ok) return d(l.why, l.code);
  let {
      parsed: parsed_2,
      owned: owned_2,
      filesRuled: filesRuled_2,
      storeRuled: storeRuled_2,
      filesOk: filesOk,
      storeOk: storeOk
    } = l,
    b = G(TBe(), filesRuled_2, filesOk),
    C = G(r, storeRuled_2, storeOk);
  if (!filesOk && !storeOk) {
    let R = L(b, C);
    return d(R.why, R.code);
  }
  let [E, V] = await Promise.all([storeOk ? ie(parsed_2, n, o) : S, filesOk ? ne(parsed_2, n, o) : te]),
    v = oe(V),
    project = v.doc?.path === path,
    store = !project && E.doc !== void 0,
    P = project ? v.doc : E.doc ?? v.doc;
  if (P === void 0) {
    let R = E.why ?? v.why,
      O = E.moved === !0 && b === "off" ? Z : L(b, C);
    return R === void 0 ? d(O.why, O.code) : d(R, "nothing_read");
  }
  if (!owned_2) vKr(parsed_2, store ? "read_db" : "read_file", o);
  g("artifact_design_system_guide", {
    store: store,
    project: project,
    owned: owned_2
  });
  let unavailable_2 = store || project ? void 0 : C === "ruled" ? `a permission rule governs reading its store, ${x}` : C === "unconsented" ? `its store needs approval to read here, ${x}` : E.unchecked === !0 ? `its store could not be checked, ${x}` : E.keptButUnread === !0 ? `its store's README is empty or could not be read here, ${x}` : void 0;
  return {
    design_system: {
      url: url,
      ...i,
      ...(store && {
        store: !0
      }),
      docs: [P],
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
function M(e, t, n, o, pipelineRan) {
  return e === "files" ? n6e(t, n, "read_file", o, {
    pipelineRan: pipelineRan
  }) || n6e(t, n, "read_file", o, {
    pipelineRan: pipelineRan,
    fields: {
      path: path
    }
  }) : n6e(t, n, "read_db", o, {
    pipelineRan: pipelineRan
  }) || n6e(t, n, "read_db", o, {
    pipelineRan: pipelineRan,
    fields: fields
  });
}
function G(e, t, n) {
  return !e ? "off" : t ? "ruled" : n ? "read" : "unconsented";
}
function L(e, t) {
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
      path: p
    },
    read_db: {
      db_op: "get",
      collection: "files",
      doc_id: p
    }
  };
function n6e(e, t, action, o, r = {}) {
  let fields_2 = r.fields ?? (action === "list_files" ? {} : Q[action]),
    i = se(o);
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
  }]).some(item => ["deny", "ask"].some(f => AP(i, e, t, f, {
    action: item.action,
    fields: item.fields,
    wholeToolAskAnswered: r.pipelineRan === !0
  }) !== null));
}
function U(e, t, n, o) {
  if (!UK(o)) {
    let r = Ile(e, o, n === "store");
    return !r.ask || r.remember === "artifact" && ALe(r, e.slug, fGe(t, e));
  }
  return n === "store" ? t || Bit(o, e.slug) : Vhe(o, e, "files", "land");
}
function vKr(e, t, n) {
  if (!UK(n) && !pX("foreign_read", e.slug)) {
    let o = t === "read_db" ? Bit(n, e.slug) : Ole(n, e.slug);
    U4t(t, e.slug, void 0, o || void 0);
  }
}
var S = {
  doc: void 0,
  why: void 0
};
async function W(e, t, n, o, r) {
  let s = await gOe(Tlt(e, t, o, r.credentials, "artifact_design_system_guide_read"), o, r, late => ({
    err: Nyn[late],
    late: late
  }));
  if (s.err === null) return s.html.trim() === "" ? S : {
    doc: N(s.html, t),
    why: void 0
  };
  if (s.missingFile === !0 || n && s.status === 404 && s.errorCode === void 0) return S;
  let failed = s.late !== void 0 ? Nyn[s.late] : "the content host refused or failed";
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
  let [root, project_2] = await Promise.all([W(e, p, !1, t, n), W(e, path, !0, t, n)]);
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
    why: `its ${project_3.failed === root_2.failed ? `${path} and ${p} could not be fetched (${root_2.failed})` : `${path} (${project_3.failed}) and ${p} (${root_2.failed}) could not be fetched`} \u2014 read the design system with its own call, which may ask the user`
  };
  return project_3.why !== void 0 ? project_3 : root_2;
}
var re = new Set(["store_unavailable", "busy", "quota_or_rate", "quota_exceeded", "upstream_auth"]);
function B(e, collection, docId, o, r) {
  return gOe(Eir(r.session.host, {
    slug: e.slug,
    op: "get",
    collection: collection,
    docId: docId,
    askFrame: !0
  }, o, r.storageV5, r.credentials), o, r, reason => ({
    kind: "error",
    code: "store_unavailable",
    message: Nyn[reason],
    reason: reason
  }));
}
async function ie(e, t, n) {
  let [o, r] = await Promise.all([B(e, fields.collection, fields.doc_id, t, n), B(e, "files", p, t, n)]);
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
  if (de(o.docs[0]?.data)) return {
    doc: void 0,
    why: void 0,
    moved: !0
  };
  let s = ae(r);
  return {
    ...(s === void 0 && r.kind !== "not_found" && {
      keptButUnread: !0
    }),
    doc: s === void 0 ? void 0 : N(s),
    why: r.kind === "error" ? `its store could not be read (${r.message}) \u2014 ${k}` : r.kind === "ok" && s === void 0 ? typeof r.docs[0]?.data.data === "string" ? "its README.md in the store is empty" : "its README.md is a stored file rather than an inline document \u2014 read it from the system with its own call" : void 0
  };
}
function de(e) {
  let t = D(e) ? e.movedTo : void 0;
  return D(t) && typeof t.path === "string" && typeof t.at === "string";
}
function ae(e) {
  if (e.kind !== "ok") return;
  let t = e.docs[0]?.data.data;
  return typeof t === "string" && t.trim() !== "" ? t : void 0;
}
function EKr(path_2, t, n) {
  let text = Jd(t),
    chars = Array.from(text).length;
  return chars > n ? {
    path: path_2,
    text: Jd(Oi(text, n)),
    chars: chars,
    clipped: !0
  } : {
    path: path_2,
    text: text,
    chars: chars
  };
}
var le = [`
## Consuming this system (generated`, `
## Index (generated`],
  H = "[\u2026authored guide clipped here; its generated tail follows\u2026]";
function N(e, path_3 = p) {
  let n = K,
    text_2 = Jd(e),
    chars_2 = Array.from(text_2).length;
  if (chars_2 <= n) return {
    path: path_3,
    text: text_2,
    chars: chars_2
  };
  let s = le.map(item => text_2.lastIndexOf(item)).find(item => item !== -1) ?? -1;
  if (s === -1) return EKr(path_3, text_2, n);
  let i = Oi(text_2.slice(s), Y),
    d = n - Array.from(i).length - Array.from(H).length - 2,
    l = Oi(text_2.slice(0, s), d);
  return {
    path: path_3,
    text: Jd(`${l}
${H}
${i}`),
    chars: chars_2,
    clipped: !0
  };
}
function ue(e, t, n) {
  if (n) return `Its other cards are not attached: read one when you need it with ${Wc('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "project/api/tokens.md" (palette, type, fonts); "project/tokens.json" (exact token values); or, where the README's index is shown, a card it names, at "project/" followed by the path the index gives.`;
  return t ? `Its other cards are not attached: read one when you need it with ${Wc('action "read_db" and `db_op`: "get"', () => `the ${Yf} tool, action "get"`)}, \`url\`: ${_(e)}, and a \`collection\` and \`doc_id\`: "api" and "tokens.md" (palette, type, fonts); "ds" and "tokens" (exact token values); "ds" and "meta" (the system's record). Where the README's index is shown, read a card it names by the collection and doc id the index gives.` : `Its other cards are not attached: read one when you need it with ${Wc('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "api/tokens.md" (palette, type, fonts); "tokens.json" (exact token values); or, where the README's index is shown, a card it names, by its path there.`;
}
function Fyn(e, t) {
  let n = Array.from(e).length > t;
  return Jd(Oi(e, t)).replace(_k, " ").replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim() + (n ? " \u2026" : "");
}
function TKr(e) {
  if (e === null || typeof e !== "object" || !("docs" in e) || !Array.isArray(e.docs) || !e.docs.some(item => item !== null && typeof item === "object" && "text" in item && item.text !== "")) return;
  return {
    ...e,
    docs: e.docs.map(item => item !== null && typeof item === "object" ? {
      ...item,
      text: ""
    } : item)
  };
}
function Pti(design_system) {
  let t = u(Hyn()).safeParse({
      design_system: design_system
    }),
    n = t.success ? t.data.design_system : void 0;
  if (n === void 0) return {
    text: "",
    attached: !1
  };
  let o = n.unavailable === void 0 ? void 0 : Fyn(n.unavailable, q);
  if (typeof n.url !== "string") return {
    text: `

[Design system not attached \u2014 ${o ?? "no default could be found"}.]`,
    attached: !1
  };
  let r = Fa(n.url, "(unrecognized address)"),
    s = typeof n.title === "string" ? ` ${_(Fyn(j_t(Fm(Zx(n.title, 200)) ?? ""), 200) || "Untitled")}` : "",
    i = `${r}${s}, the ${n.default === "user" ? "user's" : "organization's"} default design system`,
    d = (n.docs ?? []).find(item => (item.path === p || item.path === path) && item.text !== "");
  if (d === void 0) return {
    text: `

[Design system not attached (${i}) \u2014 ${o ?? "its README is not kept in this record; read it with its own call if you need it"}.]`,
    attached: !1
  };
  let l = N(d.text),
    f = l.clipped === !0 || d.clipped === !0,
    m = Math.max(l.chars, d.chars),
    w = " This is the standing choice; ignore it if the user or the session named another, or declined one, in this conversation.",
    y = f ? `
[\u2026clipped at ${Array.from(l.text).length} of ${m} characters; read the whole file from the design system if you need the rest]` : "";
  return {
    text: `

${$p}
Design system ${i}.${w} Its ${d.path} (${n.store === !0 ? "a document of its store" : "a published file"}) follows \u2014 do not fetch it again${f ? " unless you need the clipped remainder" : ""}.${o !== void 0 ? ` (${o}.)` : ""} ${ue(r, n.store === !0, d.path === path)}

${d.path}:
${Qbn(l.text + y)}`,
    attached: !0
  };
}
export { path as Xst, Nyn, gOe, Ati, $zo, Uzo, xti, n6e, vKr, EKr, Fyn, TKr, Pti };