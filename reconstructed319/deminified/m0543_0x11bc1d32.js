// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { hr, fn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { Nvr, Fvr, SLt } from "B:/~BUN/root/chunk-cejfpzdt.js";
import { XJe, Fm } from "B:/~BUN/root/chunk-vdqpev1m.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var Jpo = "publish_files",
  Qpo = "copy_file",
  ien = "create_from_type",
  bLt = new Set(["publish_version", "edit_version", Jpo, Qpo, ien]),
  JSs = new Set(["publish_version", Jpo, "authorize_upload"]);
function aen(e, t) {
  return e === ien || JSs.has(e) && !(D(t) && t.slug !== void 0 && t.slug !== null && t.slug !== "");
}
var zLn = "delete_artifact";
function l(e) {
  let t = Array.isArray(e) ? e.find(item => D(item) && item.type === "text") : void 0,
    n = typeof e === "string" ? e : D(t) ? t.text : void 0;
  if (typeof n !== "string") return null;
  let r = et(n, !1);
  return D(r) ? r : null;
}
function KJe(e) {
  let t = l(e);
  if (t === null || typeof t.url !== "string") return null;
  let n = fn(t.url);
  if (n === null || t.slug !== void 0 && t.slug !== n.slug) return null;
  let title = typeof t.title === "string" ? Fm(t.title) : null,
    version = typeof t.version === "string" && XJe.test(t.version) ? t.version : void 0;
  return {
    slug: n.slug,
    env: n.env,
    ...(title !== null && title !== "" && {
      title: title
    }),
    ...(version !== void 0 && {
      version: version
    })
  };
}
function p(e, t, n) {
  let role = e.author_role === void 0 || e.author_role === null ? void 0 : typeof e.author_role === "string" && Nvr.test(e.author_role) ? e.author_role : "degraded",
    o = Fvr(e.source, role),
    u = SLt([{
      account: typeof e.author_id === "string" ? e.author_id : "unknown",
      ...(role !== void 0 && {
        role: role
      }),
      ...(o && {
        postedByArtifact: !0
      })
    }], t);
  return u === "unknown" && n && e.by_user === !0 && !o && role !== "degraded" ? "own" : u;
}
function QBi(e, t, n) {
  let r = l(e);
  if (r === null) return null;
  let o = D(r.thread) ? [r.thread] : r.threads === null ? [] : Array.isArray(r.threads) ? r.threads : null;
  if (o === null) return null;
  let u = [];
  for (let i of o) {
    if (!D(i) || typeof i.id !== "string") return null;
    let a = Array.isArray(i.comments) ? i.comments : D(i.first_comment) ? [i.first_comment] : null;
    if (a === null) return null;
    for (let s of a) {
      if (!D(s) || typeof s.id !== "string" || typeof s.text !== "string") return null;
      u.push({
        threadId: i.id,
        id: s.id,
        ...(typeof s.to_claude_at === "string" && {
          toClaudeAt: s.to_claude_at
        }),
        text: s.text,
        authorship: p(s, t, n)
      });
    }
  }
  return u;
}
function Dvr(e) {
  let t = l(e);
  return {
    read: typeof t?.read === "string" ? t.read : void 0,
    shared: typeof t?.shared === "string" ? t.shared : void 0
  };
}
function ZBi(e) {
  let t = l(e)?.content;
  return D(t) && t.kept_in === "files";
}
function Lvr(e) {
  let t = l(e);
  return t !== null && t.deleted === !0 && typeof t.slug === "string" && hr.test(t.slug) ? t.slug : null;
}
class d {
  writers = null;
  loadWriters = null;
  register(e) {
    this.writers = e;
  }
  loaded() {
    if (this.writers === null) this.loadWriters?.();
    return this.writers;
  }
}
var pCe = new d();
function e1i(e) {
  pCe.register(e);
}
class c {
  arm = null;
  register(e) {
    this.arm = e;
  }
}
var QSs = new c();
function t1i(e) {
  QSs.register(e);
}
export { Jpo, Qpo, ien, bLt, JSs, aen, zLn, KJe, QBi, Dvr, ZBi, Lvr, pCe, e1i, QSs, t1i };