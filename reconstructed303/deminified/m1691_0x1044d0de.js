// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { vy, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { qs } from "B:/~BUN/root/chunk-nggrknsv.js";
import { vs } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Uo, mg, Yt, Ci, KT, Rl, iQe, Sb } from "B:/~BUN/root/chunk-qp0344nb.js";
import { dd } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { ym } from "B:/~BUN/root/chunk-p64g0hj8.js";
import { Qst } from "B:/~BUN/root/chunk-grt0b3xy.js";
import { kt, eXe, Id, dg } from "B:/~BUN/root/chunk-ydtn2zrk.js";
import { AIn } from "B:/~BUN/root/chunk-kjk3ptap.js";
import { MK, kke, aIe } from "B:/~BUN/root/chunk-66hg7026.js";
import { Cp } from "B:/~BUN/root/chunk-8z2waw2h.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { x1, NCt } from "B:/~BUN/root/chunk-r4yejzt5.js";
import { sAe, Moe, M7, jKe, D7 } from "B:/~BUN/root/chunk-k4hy19cw.js";
import { _qt } from "B:/~BUN/root/chunk-79wd7j91.js";
import { BTt, HYt } from "B:/~BUN/root/chunk-5xkp4vxf.js";
import { wE } from "B:/~BUN/root/chunk-yzkbrvfz.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var m = "README.md",
  path = "project/README.md",
  K = 12000,
  Y = 7000,
  q = 700,
  hqt = {
    interrupted: "interrupted before it could be read",
    timeout: "reading it took too long",
    failed: "the read failed unexpectedly"
  };
function E_e(e, t, n, o) {
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
      let a = r();
      if (a === "failed") l(d);
      s(o(a));
    });
  });
}
function i7o(e, t) {
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
  let n = e.slice(0, 3).map(item => `${_(ym(KT(item.title, 40)) ?? "Untitled")} ${Ci(item.url, "(unrecognized address)")}`);
  return e.length > 3 ? `${n.join(", ")}, and ${e.length - 3} more` : n.join(", ");
}
async function A5r(e, signal, n, o, r, s) {
  let parsed = Yt(e);
  if (parsed === null || parsed.env !== Uo()) return {
    ok: !1,
    why: "it is not an Artifact URL of this session's claude.ai",
    code: "not_a_link"
  };
  let a = [...(sAe() ? ["files"] : []), ...(o ? ["store"] : [])];
  if (a.length === 0) return {
    ok: !1,
    ...M("off", "off")
  };
  if (a.every(item => x(item, parsed, e, n, r))) return {
    ok: !1,
    why: why,
    code: "rule"
  };
  let c = {
      signal: signal,
      credentials: n.credentials
    },
    h = await E_e(Cp(parsed, {
      toolUseId: n.toolUseId,
      abortController: {
        signal: signal
      },
      ...c
    }, s).then(() => {
      return;
    }), signal, n, b => b);
  if (h !== void 0) return {
    ok: !1,
    why: `${hqt[h]} \u2014 read it with its own call`,
    code: `probe_${h}`
  };
  let w = kt(parsed.slug);
  if (eXe(w)) return {
    ok: !1,
    why: "it is in another of the user's organizations, which this login cannot read \u2014 say so rather than guess its values",
    code: "other_org"
  };
  let owned = Id(w);
  if (dg(parsed.slug) && !vs(n.agentContext)) return {
    ok: !1,
    why: why_2,
    code: "notice_pending"
  };
  await E_e(BTt(parsed, c), signal, n, () => {
    return;
  });
  let filesRuled = x("files", parsed, e, n, r),
    storeRuled = x("store", parsed, e, n, r);
  return {
    ok: !0,
    parsed: parsed,
    owned: owned,
    filesRuled: filesRuled,
    storeRuled: storeRuled,
    filesOk: sAe() && !filesRuled && I(parsed, owned, "files", n),
    storeOk: o && !storeRuled && I(parsed, owned, "store", n)
  };
}
function x5r(e, t, n, o) {
  return !(dg(e.slug) && !vs(n.agentContext)) && !x("files", e, t, n, o) && I(e, Id(kt(e.slug)), "files", n);
}
async function a7o(url, t, n, o, r, s) {
  let i = {
      default: t.default,
      title: t.title
    },
    d = (unavailable, T) => (p("artifact_design_system_guide", T), {
      design_system: {
        url: url,
        ...i,
        unavailable: unavailable
      }
    }),
    a = await A5r(url, n, o, r, s, "design_system_guide");
  if (!a.ok) return d(a.why, a.code);
  let {
      parsed: parsed_2,
      owned: owned_2,
      filesRuled: filesRuled_2,
      storeRuled: storeRuled_2,
      filesOk: filesOk,
      storeOk: storeOk
    } = a,
    b = G(sAe(), filesRuled_2, filesOk),
    D = G(r, storeRuled_2, storeOk);
  if (!filesOk && !storeOk) {
    let R = M(b, D);
    return d(R.why, R.code);
  }
  let [E, V] = await Promise.all([storeOk ? se(parsed_2, n, o) : S, filesOk ? ne(parsed_2, n, o) : te]),
    C = oe(V),
    project = C.doc?.path === path,
    store = !project && E.doc !== void 0,
    P = project ? C.doc : E.doc ?? C.doc;
  if (P === void 0) {
    let R = E.why ?? C.why,
      T = E.moved === !0 && b === "off" ? Z : M(b, D);
    return R === void 0 ? d(T.why, T.code) : d(R, "nothing_read");
  }
  if (!owned_2) Ssr(parsed_2, store ? "read_db" : "read_file", o);
  g("artifact_design_system_guide", {
    store: store,
    project: project,
    owned: owned_2
  });
  let unavailable_2 = store || project ? void 0 : D === "ruled" ? `a permission rule governs reading its store, ${O}` : D === "unconsented" ? `its store needs approval to read here, ${O}` : E.unchecked === !0 ? `its store could not be checked, ${O}` : E.keptButUnread === !0 ? `its store's README is empty or could not be read here, ${O}` : void 0;
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
  O = "so this is its published README, which may be older than the one in its store",
  Z = {
    why: "it moved to its own files, which this session does not serve",
    code: "nothing_read"
  };
function x(e, t, n, o, pipelineRan) {
  return e === "files" ? JLe(t, n, "read_file", o, {
    pipelineRan: pipelineRan
  }) || JLe(t, n, "read_file", o, {
    pipelineRan: pipelineRan,
    fields: {
      path: path
    }
  }) : JLe(t, n, "read_db", o, {
    pipelineRan: pipelineRan
  }) || JLe(t, n, "read_db", o, {
    pipelineRan: pipelineRan,
    fields: fields
  });
}
function G(e, t, n) {
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
      path: m
    },
    read_db: {
      db_op: "get",
      collection: "files",
      doc_id: m
    }
  };
function JLe(e, t, action, o, r = {}) {
  let fields_2 = r.fields ?? (action === "list_files" ? {} : Q[action]),
    i = le(o);
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
  }]).some(item => ["deny", "ask"].some(c => wE(i, e, t, c, {
    action: item.action,
    fields: item.fields,
    wholeToolAskAnswered: r.pipelineRan === !0
  }) !== null));
}
function I(e, t, n, o) {
  if (!x1(o)) {
    let r = D7(e, o, n === "store");
    return !r.ask || r.remember === "artifact" && kke(r, e.slug, aIe(t, e));
  }
  return n === "store" ? t || jKe(o, e.slug) : Moe(o, e, "files", "land");
}
function Ssr(e, t, n) {
  if (!x1(n) && !MK("foreign_read", e.slug)) {
    let o = t === "read_db" ? jKe(n, e.slug) : M7(n, e.slug);
    NCt(t, e.slug, void 0, o || void 0);
  }
}
var S = {
  doc: void 0,
  why: void 0
};
async function W(e, t, n, o, r) {
  let s = await E_e(Qst(e, t, o, r.credentials, "artifact_design_system_guide_read"), o, r, late => ({
    err: hqt[late],
    late: late
  }));
  if (s.err === null) return s.html.trim() === "" ? S : {
    doc: U(s.html, t),
    why: void 0
  };
  if (s.missingFile === !0 || n && s.status === 404 && s.errorCode === void 0) return S;
  let failed = s.late !== void 0 ? hqt[s.late] : "the content host refused or failed";
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
  let [root, project_2] = await Promise.all([W(e, m, !1, t, n), W(e, path, !0, t, n)]);
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
    why: `its ${project_3.failed === root_2.failed ? `${path} and ${m} could not be fetched (${root_2.failed})` : `${path} (${project_3.failed}) and ${m} (${root_2.failed}) could not be fetched`} \u2014 read the design system with its own call, which may ask the user`
  };
  return project_3.why !== void 0 ? project_3 : root_2;
}
var re = new Set(["store_unavailable", "busy", "quota_or_rate", "quota_exceeded", "upstream_auth"]);
function B(e, collection, docId, o, r) {
  return E_e(AIn(r.session.host, {
    slug: e.slug,
    op: "get",
    collection: collection,
    docId: docId
  }, o, r.storageV5, r.credentials), o, r, reason => ({
    kind: "error",
    code: "store_unavailable",
    message: hqt[reason],
    reason: reason
  }));
}
async function se(e, t, n) {
  let [o, r] = await Promise.all([B(e, fields.collection, fields.doc_id, t, n), B(e, "files", m, t, n)]);
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
  let t = N(e) ? e.movedTo : void 0;
  return N(t) && typeof t.path === "string" && typeof t.at === "string";
}
function de(e) {
  if (e.kind !== "ok") return;
  let t = e.docs[0]?.data.data;
  return typeof t === "string" && t.trim() !== "" ? t : void 0;
}
function wsr(path_2, t, n) {
  let text = Rl(t),
    chars = Array.from(text).length;
  return chars > n ? {
    path: path_2,
    text: Rl(qs(text, n)),
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
function U(e, path_3 = m) {
  let n = K,
    text_2 = Rl(e),
    chars_2 = Array.from(text_2).length;
  if (chars_2 <= n) return {
    path: path_3,
    text: text_2,
    chars: chars_2
  };
  let s = ae.map(item => text_2.lastIndexOf(item)).find(item => item !== -1) ?? -1;
  if (s === -1) return wsr(path_3, text_2, n);
  let i = qs(text_2.slice(s), Y),
    d = n - Array.from(i).length - Array.from(H).length - 2,
    a = qs(text_2.slice(0, s), d);
  return {
    path: path_3,
    text: Rl(`${a}
${H}
${i}`),
    chars: chars_2,
    clipped: !0
  };
}
function ue(e, t, n) {
  if (n) return `Its other cards are not attached: read one when you need it with ${dd('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "project/api/tokens.md" (palette, type, fonts); "project/tokens.json" (exact token values); or, where the README's index is shown, a card it names, at "project/" followed by the path the index gives.`;
  return t ? `Its other cards are not attached: read one when you need it with ${dd('action "read_db" and `db_op`: "get"', () => `the ${mg} tool, action "get"`)}, \`url\`: ${_(e)}, and a \`collection\` and \`doc_id\`: "api" and "tokens.md" (palette, type, fonts); "ds" and "tokens" (exact token values); "ds" and "meta" (the system's record). Where the README's index is shown, read a card it names by the collection and doc id the index gives.` : `Its other cards are not attached: read one when you need it with ${dd('action "read_file"', () => 'action "read"')}, \`url\`: ${_(e)}, and a \`path\`: "api/tokens.md" (palette, type, fonts); "tokens.json" (exact token values); or, where the README's index is shown, a card it names, by its path there.`;
}
function yqt(e, t) {
  let n = Array.from(e).length > t;
  return Rl(qs(e, t)).replace(Sb, " ").replace(/[[\]]/g, " ").replace(/\s+/g, " ").trim() + (n ? " \u2026" : "");
}
function vsr(e) {
  if (e === null || typeof e !== "object" || !("docs" in e) || !Array.isArray(e.docs) || !e.docs.some(item => item !== null && typeof item === "object" && "text" in item && item.text !== "")) return;
  return {
    ...e,
    docs: e.docs.map(item => item !== null && typeof item === "object" ? {
      ...item,
      text: ""
    } : item)
  };
}
function l7o(design_system) {
  let t = u(_qt()).safeParse({
      design_system: design_system
    }),
    n = t.success ? t.data.design_system : void 0;
  if (n === void 0) return {
    text: "",
    attached: !1
  };
  let o = n.unavailable === void 0 ? void 0 : yqt(n.unavailable, q);
  if (typeof n.url !== "string") return {
    text: `

[Design system not attached \u2014 ${o ?? "no default could be found"}.]`,
    attached: !1
  };
  let r = Ci(n.url, "(unrecognized address)"),
    s = typeof n.title === "string" ? ` ${_(yqt(iQe(ym(KT(n.title, 200)) ?? ""), 200) || "Untitled")}` : "",
    i = `${r}${s}, the ${n.default === "user" ? "user's" : "organization's"} default design system`,
    d = (n.docs ?? []).find(item => (item.path === m || item.path === path) && item.text !== "");
  if (d === void 0) return {
    text: `

[Design system not attached (${i}) \u2014 ${o ?? "its README is not kept in this record; read it with its own call if you need it"}.]`,
    attached: !1
  };
  let a = U(d.text),
    c = a.clipped === !0 || d.clipped === !0,
    h = Math.max(a.chars, d.chars),
    w = " This is the standing choice; ignore it if the user or the session named another, or declined one, in this conversation.",
    y = c ? `
[\u2026clipped at ${Array.from(a.text).length} of ${h} characters; read the whole file from the design system if you need the rest]` : "";
  return {
    text: `

${vy}
Design system ${i}.${w} Its ${d.path} (${n.store === !0 ? "a document of its store" : "a published file"}) follows \u2014 do not fetch it again${c ? " unless you need the clipped remainder" : ""}.${o !== void 0 ? ` (${o}.)` : ""} ${ue(r, n.store === !0, d.path === path)}

${d.path}:
${HYt(a.text + y)}`,
    attached: !0
  };
}
export { path as gqe, hqt, E_e, i7o, A5r, x5r, a7o, JLe, Ssr, wsr, yqt, vsr, l7o };