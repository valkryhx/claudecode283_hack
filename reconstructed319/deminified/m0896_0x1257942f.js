// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ke } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { ul, tte, RVe, mie, v, EE } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { nl } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { hr } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { DLe, Tb, Nmt, vNn } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { $I } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { Oir, Iir, kXr, Mir, yEn } from "B:/~BUN/root/chunk-5jbxkytw.js";
import { xu, RLe } from "B:/~BUN/root/chunk-17caj8fw.js";
import { Dq, eU, QLn, ZP, Au } from "B:/~BUN/root/chunk-hhd7smkx.js";
import { ge, Mn, ws, MLs, qc, vr, Ft, v_, Lp } from "B:/~BUN/root/chunk-b3kw6jpx.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { tcn } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { randomBytes as Ve } from "crypto";
function UIe() {
  return i.CLAUDE_CODE_ARTIFACT_DB ?? !0;
}
function A1e() {
  return UIe() && (i.CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE ?? v("tengu_umber_stile", !1)) === !0;
}
var ye = "/api/frame/db/agent",
  Ye = 5000;
class K extends Ke {}
var ne = String.raw`(?!\.\.?(?:/|$))[A-Za-z0-9_\-.~:@+]{1,200}`,
  regExp = new RegExp(`^${ne}$`),
  regExp_2 = new RegExp(`^${ne}(?:/${ne}){0,14}$`);
function e6t(e) {
  return (Dt(e, "/") + 1) % 2 === 1;
}
function wir(e) {
  let t = s => s.length > 120 ? `${s.slice(0, 60)}\u2026${s.slice(-40)}` : s,
    r = e.split("/"),
    u = r.length,
    a = t(r.slice(0, -1).join("/")),
    n = t(r[u - 1]);
  return `collection '${t(e)}' has ${u} segments, which makes it a document path, not a collection: collection paths have an odd number of segments (collection/document/collection/\u2026) and the document is collection + doc_id. For that document use collection '${a}' with doc_id '${n}'; for a collection inside it, add one more segment. Per-user data follows the same rule \u2014 collection 'data/users/<id>' (3 segments) holds that user's documents, so 'data/users/<id>/decks' is one document and 'data/users/<id>/decks/cards' a collection.`;
}
var oW = 1000,
  Rlt = ["get", "list", "query"],
  Sve = ["set", "update", "delete"],
  WE = "str_replace",
  er = [...Sve, WE],
  Alt = ["view", "interact", "admin"];
function gpi() {
  return Ve(16).toString("base64url");
}
var x1e = 200,
  kir = /^(?!__.*__$)[^\p{Cc}\p{Cf}\p{Zl}\p{Zp}"\\./[\]]{1,200}$/u,
  CQ = 262144,
  kAt = 4 * CQ,
  maxContentLength_2 = 4194304,
  maxContentLength = 16384,
  Zvn = 1000,
  cJo = 100,
  $B = 50,
  vir = 1048576,
  ve = ["edit_no_match", "edit_ambiguous", "edit_field_missing", "edit_field_not_string", "version_mismatch"];
function de(e) {
  return ve.some(item => item === e);
}
var Ge = new Map([["not_found", "not_found"], ["invalid_argument", "invalid_argument"], ["quota_or_rate", "quota_or_rate"], ["busy", "busy"], ["upstream_auth", "upstream_auth"], ["store_unavailable", "store_unavailable"], ["not_declared", "not_declared"], ["too_large", "too_large"], ["quota_exceeded", "quota_exceeded"], ["invalid-argument", "invalid_argument"], ["not-found", "not_found"], ["resource-exhausted", "quota_or_rate"], ["resource_exhausted", "quota_or_rate"], ["data-unavailable", "store_unavailable"], ["unavailable", "store_unavailable"], ["upstream-error", "store_unavailable"], ...ve.map(item => [item, item])]),
  Xe = new Set(["an OAuth access token is required", "a directly presented OAuth access token is required", "db verbs require a user-scoped OAuth token, not an org service key"]);
function Je(e, t) {
  if (e !== 403 || typeof t !== "string") return;
  let r = t.trim();
  if (Xe.has(r)) return {
    code: "credential_rejected",
    reason: "custody_403"
  };
  if (r.startsWith(Dq)) return {
    code: "cloud_unavailable",
    reason: "ccr_credential_refused"
  };
  return;
}
function Ze(e) {
  if (e === 404 || e === 403) return "not_found";
  if (e === 400 || e === 422) return "invalid_argument";
  if (e === 413) return "too_large";
  if (e === 429) return "quota_or_rate";
  if (e === 409 || e === 412) return "busy";
  if (e === 401) return "upstream_auth";
  return "store_unavailable";
}
function C(e) {
  switch (e) {
    case "not_found":
    case "invalid_argument":
    case "too_large":
    case "not_declared":
      return "invalid_argument";
    case "quota_or_rate":
      return "resource_exhausted";
    case "quota_exceeded":
      return "quota_exceeded";
    case "busy":
    case "upstream_auth":
    case "store_unavailable":
    case "credential_rejected":
    case "cloud_unavailable":
    case "network_off":
      return "unavailable";
    case "edit_no_match":
    case "edit_ambiguous":
    case "edit_field_missing":
    case "edit_field_not_string":
    case "version_mismatch":
      return e;
  }
}
var ypi = ["eq", "ne", "in", "not-in", "lt", "lte", "gt", "gte", "array-contains"],
  _pi = ["==", "!=", "<", "<=", ">", ">="],
  ke = {
    "==": "eq",
    "!=": "ne",
    "<": "lt",
    "<=": "lte",
    ">": "gt",
    ">=": "gte"
  };
function Qe(e) {
  return Object.hasOwn(ke, e);
}
function et(e) {
  return Qe(e) ? ke[e] : e;
}
var V = p(() => Lp(!0).optional().catch(void 0)),
  Re = p(() => ws().optional().catch(void 0)),
  tt = p(() => Ft({
    exists: ws(),
    data: v_(ge(), qc()).optional(),
    version: Mn().int().optional(),
    updatedAt: ge().optional(),
    authoredByOthers: V(),
    [Nmt]: V(),
    outside_writer: Re()
  })),
  rt = p(() => Ft({
    docs: vr(Ft({
      id: ge(),
      data: v_(ge(), qc()),
      version: Mn().int().optional(),
      updatedAt: ge().optional()
    })),
    nextCursor: ge().optional(),
    authoredByOthers: V(),
    [Nmt]: V(),
    outside_writer: Re()
  })),
  $e = p(() => Ft({
    documents: Mn().int().safe().nonnegative(),
    maxDocuments: Mn().int().safe().positive()
  }).optional().catch(void 0));
function De(e, t) {
  if (t === void 0 && typeof e === "object" && e !== null && e.usage !== void 0) c("artifact_db_write", "malformed_usage");
}
var Ae = 4,
  nt = 600;
function Ee(e) {
  let t = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(t)) return [];
  let r = [];
  for (let u of t) {
    if (r.length >= Ae) break;
    if (typeof u !== "string") continue;
    let a = vNn(u, nt);
    if (a !== void 0) r.push(a);
  }
  return r;
}
var at = p(() => Ft({
    version: Mn().int().optional(),
    usage: $e()
  })),
  ot = p(() => Ft({
    results: vr(Ft({
      version: Mn().int().optional()
    })),
    usage: $e()
  })),
  it = p(() => Ft({
    error: Ft({
      code: Lp("invalid_argument"),
      message: Lp("invalid argument"),
      verb: MLs().optional()
    })
  }));
function Y(e, t) {
  return e === 400 && it().safeParse(t).success;
}
class G {
  refusedAt = void 0;
  get unsupported() {
    return this.refusedAt !== void 0 && Date.now() - this.refusedAt < st;
  }
}
var st = 3600000,
  uJo = new W(() => new G()),
  Fe = new W(() => new G()),
  dt = new W(() => new G());
function ut(e, t) {
  if (!Y(e, t)) return !1;
  let {
    reason: reason
  } = t.error;
  return reason === void 0 || reason === "bad_json";
}
var ct = p(() => Ft({
    error: Ft({
      code: ge().optional(),
      reason: qc().optional(),
      kind: qc().optional(),
      limit: qc().optional(),
      version: qc().optional(),
      index: qc().optional(),
      required: qc().optional()
    }).optional()
  })),
  Se = new Set(["docs_per_collection", "docs_per_database", "databases_per_org"]);
function bpi(e) {
  return Se.has(e);
}
var lt = {
  quota_exceeded: new Set([...Se, "bytes_per_database"]),
  quota_or_rate: new Set(["active_leases", "rate_limited", "write_capacity", "scan_budget", "response_budget", "refused_writes"])
};
function ft(e, t) {
  let r = lt[e];
  return r !== void 0 && r.has(t);
}
function be(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 ? e : void 0;
}
function ht(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0 ? e : void 0;
}
var mt = /^[a-z][a-z_-]{0,63}$/;
function X(e, t) {
  let r = Je(e, t);
  if (r !== void 0) return r;
  let u = ct().safeParse(t),
    a = u.success ? u.data.error : void 0,
    n = a?.code,
    code = n !== void 0 ? Ge.get(n) : void 0;
  if (n !== void 0 && code !== void 0) {
    let kind = a?.kind;
    if (ft(code, kind)) return {
      code: code,
      reason: kind === "refused_writes" ? n.replace(/-/g, "_") : kind,
      kind: kind,
      limit: be(a?.limit)
    };
    let h = code === "version_mismatch" && a?.required === !0,
      serverReason = typeof a?.reason === "string" && mt.test(a.reason) ? a.reason : void 0;
    return {
      code: code,
      reason: h ? "version_required" : n.replace(/-/g, "_"),
      ...(de(code) && {
        version: be(a?.version),
        index: ht(a?.index),
        ...(h && {
          required: !0
        })
      }),
      ...(serverReason !== void 0 && {
        serverReason: serverReason
      }),
      ...(n === "not-found" && {
        storeNotFound: !0
      })
    };
  }
  let o = Ze(e);
  return {
    code: o,
    reason: o
  };
}
var Spi = [`db write failed (${C("version_mismatch")}): `, `db batch write failed (${C("version_mismatch")}): `],
  fJo = {
    write: "Not saved: Claude needs to read the latest version of this document before changing it.",
    delete: "Not deleted: Claude needs to read the latest version of this document before deleting it."
  };
function P(e, t, r, u, a, n, s) {
  let o = `field '${a ?? "?"}'`,
    l = n?.current !== void 0 ? ` The document is at version ${n.current}.` : "",
    h = n?.pinned !== void 0 && n.current === n.pinned,
    f = `db ${t} failed (${C(e)})`;
  switch (e) {
    case "not_found":
      {
        if (n?.storeNotFound !== !0) return `${f}: no such artifact, collection, or document (or no access \u2014 the two are deliberately indistinguishable)`;
        let op = n.op;
        if (op === "update" || op === "str_replace") return `${f}: no such artifact, collection, or document \u2014 the artifact's database refused this ${op}. Most often there is no document at its path; otherwise the database's access rules or your access level do not let you write it. This write was not applied. ${op} only changes an existing document. If you read this document earlier and it was there, read it again before anything else rather than re-creating it. Otherwise, if it should exist, create it with set (if set is refused the same way, you may not write there); if not, stop \u2014 resending this ${op} will not succeed`;
        return op === "delete" ? `${f}: the artifact's database refused this delete: the database has never been written to (so there is nothing to delete), the database's access rules or your access level do not let you delete there, or, less often, this artifact's data cannot be written right now; do not retry it` : `${f}: the artifact's database refused this write at its path, most often because the database's access rules or your access level do not allow it (less often, this artifact's data cannot be written right now); this write was not applied \u2014 do not retry it`;
      }
    case "invalid_argument":
      return `${f}: the server could not accept the request as shaped${s !== void 0 ? ` (reason: ${s})` : ""}`;
    case "too_large":
      return `${f}: the request body exceeds the server's size limit \u2014 send less per call`;
    case "quota_or_rate":
      return `${f}: ${pe(r, u) ?? "over a rate or storage limit \u2014 retry later or write less"}`;
    case "quota_exceeded":
      return `${f}: ${pe(r, u) ?? "a storage limit on this artifact's database has been reached \u2014 delete documents; retrying won't help"}`;
    case "busy":
      return `${f}: lost to a concurrent change \u2014 re-read and retry deliberately`;
    case "upstream_auth":
      return `${f}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "store_unavailable":
      return `${f}: the store is unavailable right now \u2014 try again`;
    case "not_declared":
      return `${f}: the version of this artifact served to this session does not declare the database capability`;
    case "credential_rejected":
      return `${f}: the server refused this session's credential at the artifact-db door \u2014 not an artifact-access or existence answer; report this as a client/server integration fault`;
    case "cloud_unavailable":
      return `${f}: reading and editing artifact data isn't available in this cloud session right now; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it`;
    case "network_off":
      return t === "read" ? `${f}: this cloud session's network access is turned off (or could not be confirmed), so it cannot read artifact data${eU() ? "" : " \u2014 writes still work"}; do not retry the read here` : `${f}: this cloud session's network access is turned off (or could not be confirmed), and the gateway did not accept this call as a write it allows \u2014 do not retry it here`;
    case "edit_no_match":
      return h ? `${f}: old_str does not occur in ${o} of that document, so nothing was written by this call. The document is still at version ${n?.current}, the one this edit was pinned to, so nothing changed under you: old_str itself does not match the stored text \u2014 copy it exactly as it appears in the field's value (the decoded string, not JSON-escaped source)` : `${f}: old_str does not occur in ${o} of that document, so nothing was written by this call.${l} Copy the text exactly as it appears in the field's value (the decoded string, not JSON-escaped source). If you were retrying after a call whose outcome you did not see, that earlier call may already have applied \u2014 read the document back before trying again. If someone else changed that text, re-read and re-plan the edit`;
    case "edit_ambiguous":
      return `${f}: old_str occurs more than once in ${o} of that document; nothing was written.${l} Include more surrounding text so it is unique, or pass replace_all to change every occurrence`;
    case "edit_field_missing":
      return `${f}: the document has no top-level ${o}; nothing was written.${l} str_replace edits an existing top-level string field \u2014 read the document to see its fields, or use update to add one`;
    case "edit_field_not_string":
      return `${f}: ${o} is not a string (str_replace edits top-level string fields only); nothing was written \u2014 use update for structured fields.${l}`;
    case "version_mismatch":
      if (n?.required === !0) {
        let y = n.path ?? "that document",
          k = "Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns";
        switch (n.op) {
          case "delete":
            return `${f}: ${y} is an existing document and this delete carried no if_version \u2014 nothing was deleted. Read it back and, if it should still be deleted, resend the delete with if_version set to the version that read returns`;
          case "update":
            return `${f}: ${y} is an existing document and this update carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
          default:
            return `${f}: ${y} already exists and this write carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
        }
      }
      return n?.current !== void 0 ? `${f}: the document is no longer at version ${n.pinned ?? "?"}, the one this write was pinned to \u2014 it is now at version ${n.current}; nothing was written. Read it back, re-plan the write against what it holds now, and pin to that version` : `${f}: the document is no longer at version ${n?.pinned ?? "?"}, the one this write was pinned to \u2014 it has changed or may have been deleted; nothing was written. Read it back: if it still exists, re-plan the write against what it holds now and pin to its version; if it is gone, ${n?.op === "delete" ? "a delete has nothing left to do" : 're-create it with a "set" and no if_version only if it should exist again'}`;
  }
}
var _t = 3600000,
  reason_2 = "not_declared_remembered";
function wpi(e, t) {
  return t.code === "not_declared" && (t.reason === "not_declared" || t.reason === reason_2) && te().dbUndeclaredAt.has(e);
}
function ue(e, t, r, u = "") {
  let {
      dbUndeclaredAt: dbUndeclaredAt
    } = te(),
    n = dbUndeclaredAt.get(t);
  if (n === void 0) return;
  if (Date.now() - n >= _t) {
    dbUndeclaredAt.delete(t);
    return;
  }
  return m(e, `${u}${reason_2}`), {
    kind: "error",
    code: "not_declared",
    message: `${r} (this repeats the server's answer from earlier in this session; the call was not sent. The server is asked again an hour after that answer, or sooner if this session publishes the artifact, sees a new version of it, or sees its capabilities include a database)`,
    reason: reason_2
  };
}
function ce(e, t) {
  let r = te();
  r.dbUndeclaredAt.delete(e);
  let u = r.dbUndeclaredDroppedAt.get(e);
  if (u === void 0 || u < t) r.dbUndeclaredDroppedAt.set(e, t);
}
function le(e, t, r, u) {
  if (t !== 404 || r !== "not_declared") return;
  let a = te(),
    n = a.dbUndeclaredDroppedAt.get(e);
  if ($I(u) || n !== void 0 && u <= n) return;
  a.dbUndeclaredAt.set(e, Date.now());
}
function pe(e, t) {
  let r = t === void 0 ? "document limit" : `limit of ${t} documents`,
    u = t === void 0 ? "storage limit" : `storage limit of ${tcn(t)}`;
  switch (e) {
    case "docs_per_collection":
      return `this collection has reached its ${r} \u2014 delete documents; retrying won't help`;
    case "docs_per_database":
      return `this artifact's database has reached its ${r} \u2014 delete documents before adding more; retrying won't help`;
    case "bytes_per_database":
      return `this artifact's database has reached its ${u} (the total size of its documents, not their count) \u2014 delete documents or make them smaller; a write that makes an existing document larger can be refused too, and retrying won't help`;
    case "databases_per_org":
      return "this organization has reached its limit on artifact databases; retrying won't help";
    case "active_leases":
      return "this database has too many active leases \u2014 retry after some expire or are released";
    case "rate_limited":
      return "rate-limited \u2014 retry shortly";
    case "write_capacity":
      return "too many concurrent writes to this database \u2014 retry shortly";
    case "scan_budget":
      return "the query scans too many documents \u2014 narrow the query or add filters; retrying won't help";
    case "response_budget":
      return "the query's result is too large \u2014 request fewer documents; retrying won't help";
    case "refused_writes":
      return "the server refused this operation on this path earlier (a missing document, a path you may not write, or an invalid argument), and after repeated refused writes to this artifact it is briefly turning away repeats of it, whatever data they carry; this write was not applied. Do not resend it unchanged now: use a different operation or path (for example set, to create a document that should exist); if it was refused for its data, fix the data and send it again in a few minutes; otherwise stop";
    case void 0:
      return;
  }
}
var ee = "data/users/me",
  xe = "whoami",
  bt = p(() => Ft({
    id: ge().min(1)
  }));
function Ce(e, t) {
  return `${e}:${t}`;
}
function z() {
  return QLn("POST", ye, "bound") === "relay";
}
async function pt(e, t) {
  if (z()) return null;
  let r = (await DLe(t))?.accountUuid;
  return r ? Ce(r, e) : null;
}
async function oe(e, t, r) {
  let u = await EE(r);
  return u?.accountUuid !== void 0 && Ce(u.accountUuid, e) === t;
}
function ie() {
  let Authorization = tte().headers.Authorization;
  return Authorization === void 0 ? null : RVe(Authorization);
}
async function Oe(credentials) {
  if (!mie()) return;
  for (let t = 0; t < 2; t++) try {
    await ul({
      credentials: credentials
    });
  } catch {}
}
function kpi(e) {
  let {
    resolvedMeIds: resolvedMeIds,
    inFlightMeIds: inFlightMeIds
  } = Me.of(e);
  resolvedMeIds.clear(), inFlightMeIds.clear();
}
function Ie(e, docId) {
  if (e === ee || e.startsWith(ee + "/")) return r => ({
    collection: "data/users/" + r + e.slice(ee.length),
    docId: docId
  });
  return null;
}
var U = Symbol("contested-me-key");
class Be {
  resolvedMeIds = new Map();
  inFlightMeIds = new Map();
}
var Me = new W(() => new Be());
function qe(e, t, r, u, a) {
  if (t === "malformed_whoami_echo") return `db ${r} failed (unavailable): resolving 'me' returned an unreadable response \u2014 the artifact db service may need an update`;
  if (e === "not_declared") return `db ${r} failed (${C(e)}): resolving 'me' needs this artifact's published version to declare the db and user capabilities \u2014 republish with both declared, then retry`;
  return P(e, r, u, a) + (r === "write" && Le.has(e) ? N : "");
}
var N = "; nothing was written",
  Le = new Set(["too_large", "credential_rejected", "cloud_unavailable", "network_off"]);
async function fe(e, t, r, u, a, n) {
  let s = Me.of(e),
    {
      resolvedMeIds: resolvedMeIds_2,
      inFlightMeIds: inFlightMeIds_2
    } = s,
    h = await pt(r, n),
    f = null;
  if (h !== null && (resolvedMeIds_2.has(h) || inFlightMeIds_2.has(h))) {
    if (await oe(r, h, a)) {
      if (resolvedMeIds_2.has(h)) await Oe(n);
      f = h;
    }
  }
  let y = f === null ? void 0 : resolvedMeIds_2.get(f);
  if (f !== null && y !== void 0 && !z()) {
    if (y.fingerprint === ie()) return {
      ok: !0,
      id: y.id
    };
    if (resolvedMeIds_2.get(f) === y) resolvedMeIds_2.delete(f);
  }
  let k;
  if (h === null) k = await re(s, t, r, u, h, a, n);else {
    let d = f === null ? void 0 : inFlightMeIds_2.get(f);
    if (!d) d = (async () => {
      if (!(await oe(r, h, a))) return c(t, "contested_me_key"), U;
      return re(s, t, r, u, h, a, n);
    })(), inFlightMeIds_2.set(h, d), d.finally(() => {
      if (inFlightMeIds_2.get(h) === d) inFlightMeIds_2.delete(h);
    }).catch(() => {});
    let b = await d;
    k = b === U ? await re(s, t, r, u, null, a, n) : b;
  }
  if (k.ok) return k;
  if ("composed" in k) return {
    ok: !1,
    result: k.composed
  };
  let R = t === "artifact_db_read" ? "read" : "write";
  return m(t, k.reason), {
    ok: !1,
    result: {
      kind: "error",
      code: k.code,
      message: qe(k.code, k.reason, R, k.kind, k.limit),
      reason: k.reason
    }
  };
}
async function re(e, t, r, u, a, n, credentials_2) {
  let fingerprint = null;
  if (a !== null) {
    if (await Oe(credentials_2), fingerprint = ie(), fingerprint === null || z()) return U;
  }
  let l = await Z(t, r, xe, {}, {
    timeout: 15000,
    maxContentLength: maxContentLength,
    credentials: credentials_2,
    reportSentAuth: a !== null
  }, u);
  if (!l.ok) return {
    ok: !1,
    composed: l.result
  };
  if (l.status !== 200) {
    let {
      code: code_2,
      reason: reason_3,
      kind: kind_2,
      limit: limit
    } = X(l.status, l.data);
    return {
      ok: !1,
      code: code_2,
      reason: `whoami_${reason_3}`,
      kind: kind_2,
      limit: limit
    };
  }
  let h = bt().safeParse(l.data);
  if (!h.success || !regExp.test(h.data.id)) return {
    ok: !1,
    code: "store_unavailable",
    reason: "malformed_whoami_echo"
  };
  if (a !== null) {
    if (fingerprint === null || fingerprint !== l.sentAuthFingerprint || fingerprint !== ie() || !(await oe(r, a, n))) return c(t, "auth_unstable_me_key"), U;
    if (z()) return U;
    e.resolvedMeIds.set(a, {
      id: h.data.id,
      fingerprint: fingerprint
    });
  }
  return {
    ok: !0,
    id: h.data.id
  };
}
async function Z(e, slug, verb, args, a, signal) {
  let s = verb === "batch" ? "batch_" : "",
    o = verb === xe,
    l = e === "artifact_db_read" ? "read" : "write",
    h = a.requestId !== void 0 ? dt.of(a.requestId.host) : void 0,
    f = {
      slug: slug,
      verb: verb,
      args: args,
      ...(a.asLevel !== void 0 && {
        asLevel: a.asLevel
      }),
      ...(a.requireVersion === !0 && {
        requireVersion: !0
      }),
      ...(e === "artifact_db_write" && !o && Oir()),
      ...(e === "artifact_db_write" && !o && a.requestId !== void 0 && h !== void 0 && !h.unsupported && RLe(a.requestId.id))
    },
    y = () => Au.postRelayBound(ye, f, {
      refreshOAuth: !0,
      credentials: a.credentials,
      headers: xu(),
      timeout: a.timeout,
      maxContentLength: a.maxContentLength,
      signal: signal,
      reportSentAuth: a.reportSentAuth
    }),
    k = !1,
    R = async () => {
      let b = await y();
      if (b.ok && b.gatewayRetryAfterMs !== void 0 && !k) {
        if (k = !0, await J(Math.min(b.gatewayRetryAfterMs, Ye), signal, {
          abortError: () => new K()
        }), b = await y(), b.ok && b.route === "relay" && b.fromFrame) c(e, `${s}${o ? "whoami_" : ""}relay_busy_recovered`);
      }
      return b;
    },
    d;
  try {
    d = await R();
    let b = d.ok && d.fromFrame ? Mir(d.status, d.data, f) : [];
    if (b.length > 0) {
      if (b.includes("request_id") && h !== void 0) c(e, `${s}request_id_rejected`), h.refusedAt = Date.now();
      if (yEn(b)) c(e, `${s}session_hints_rejected`), Iir();
      f = vo(f, yEn(b) ? kXr : b), d = await R();
    }
    if (h !== void 0 && f.request_id !== void 0 && d.ok && d.fromFrame && ut(d.status, d.data)) {
      let {
        request_id: request_id,
        ...F
      } = f;
      if (f = F, d = await R(), d.ok && d.fromFrame && d.status >= 200 && d.status < 300) h.refusedAt = Date.now(), c(e, `${s}request_id_unsupported`);
    }
  } catch (error) {
    if (nl(error) || error instanceof K) throw error;
    let D = e !== "artifact_db_read" && !o && ZP(error);
    return m(e, `${s}${D ? "relay_request_error" : "request_error"}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: D ? "db write outcome unknown (relay request failed) \u2014 it may have applied; read back before retrying" : `db ${l} failed (network error)`,
        reason: D ? "relay_request_error" : "request_error"
      }
    };
  }
  if (!d.ok) {
    if (d.reason === "relay-unavailable" || d.reason === "relay-not-served") {
      let reason_4 = `${o ? "whoami_" : ""}${d.reason.replace(/-/g, "_")}`;
      return m(e, `${s}${reason_4}`, {
        status: d.status
      }), {
        ok: !1,
        result: {
          kind: "error",
          code: "store_unavailable",
          message: `db ${l} failed (${C("store_unavailable")}): ${o ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection did not carry the request${d.status ? ` (HTTP ${d.status})` : ""}, so nothing ran; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it${l === "write" ? N : ""}`,
          reason: reason_4
        }
      };
    }
    return m(e, `${s}${d.reason.replace(/-/g, "_")}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: d.reason === "no-auth" ? Tb(d.detail) : `db ${l} unavailable: ${d.reason}`,
        reason: "transport"
      }
    };
  }
  if (d.gatewayPolicy === "network-off") {
    let reason_5 = o ? "whoami_network_off" : "network_off";
    return c(e, `${s}${reason_5}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "network_off",
        message: o ? qe("network_off", reason_5, l) : P("network_off", l) + (l === "write" ? N : ""),
        reason: reason_5
      }
    };
  }
  if (d.gatewayRetryAfterMs !== void 0) {
    let reason_6 = `${o ? "whoami_" : ""}relay_busy_retried`,
      D = verb === WE;
    return m(e, `${s}${reason_6}`, {
      status: d.status
    }), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: `db ${l} failed (${C("store_unavailable")}): ${o ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection was temporarily unavailable (HTTP ${d.status}, after one retry); ${D ? "the edit may or may not have applied \u2014 read it back before retrying" : `this is transient and nothing ran \u2014 retry shortly${l === "write" ? N : ""}`}`,
        reason: reason_6
      }
    };
  }
  if (!d.fromFrame) return m(e, `${s}${o ? "whoami_relay_error" : "relay_error"}`, {
    status: d.status
  }), {
    ok: !1,
    result: {
      kind: "error",
      code: "store_unavailable",
      message: o ? `db ${l} failed: resolving 'me' failed (relay HTTP ${d.status}) \u2014 try again` : e === "artifact_db_read" ? `db read failed (relay HTTP ${d.status}) \u2014 try again` : `db write outcome unknown (relay HTTP ${d.status}) \u2014 it may have applied; read back before retrying`,
      reason: o ? "whoami_relay_error" : "relay_error"
    }
  };
  return {
    ok: !0,
    status: d.status,
    data: d.data,
    sentAuthFingerprint: d.sentAuthFingerprint,
    ...(d.route === "relay" && d.response.headers?.[gt] === "session" && {
      sessionScoped: !0
    }),
    ...(a.asLevel !== void 0 && {
      levelConfirmed: yt(d.data) === a.asLevel
    })
  };
}
var gt = "x-frame-relay-read-scope-applied",
  wt = `db read failed (${C("not_found")}): nothing this session can read at that address \u2014 with the organization's cloud network access turned off, this session can read the data only of artifacts it published itself (or there is no such artifact, collection, or document); do not retry the read here`;
function yt(e) {
  if (e === null || typeof e !== "object") return;
  let t = Reflect.get(e, "asLevel");
  if (typeof t === "string") return t;
  let r = Reflect.get(e, "error"),
    u = r !== null && typeof r === "object" ? Reflect.get(r, "asLevel") : void 0;
  return typeof u === "string" ? u : void 0;
}
async function Eir(e, t, r, u, credentials_3) {
  let {
      slug: slug_2,
      op: op_2,
      query: query
    } = t,
    {
      collection: collection,
      docId: docId_2
    } = t;
  if (!hr.test(slug_2)) return m("artifact_db_read", "invalid_slug"), {
    kind: "error",
    code: "invalid_argument",
    message: "not a valid artifact id",
    reason: "invalid_slug"
  };
  let f = t.askFrame ? void 0 : ue("artifact_db_read", slug_2, P("not_declared", "read"));
  if (f !== void 0) return f;
  if (!regExp_2.test(collection) || docId_2 !== void 0 && !regExp.test(docId_2)) return m("artifact_db_read", "invalid_segment"), {
    kind: "error",
    code: "invalid_argument",
    message: 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)',
    reason: "invalid_segment"
  };
  if (!e6t(collection)) return m("artifact_db_read", "parity"), {
    kind: "error",
    code: "invalid_argument",
    message: wir(collection),
    reason: "parity"
  };
  if (op_2 === "get" && docId_2 === void 0) return m("artifact_db_read", "missing_doc_id"), {
    kind: "error",
    code: "invalid_argument",
    message: "doc_id is required for a get",
    reason: "missing_doc_id"
  };
  let y = Ie(collection, docId_2),
    meId;
  if (y !== null) {
    let w = await fe(e, "artifact_db_read", slug_2, r, u, credentials_3);
    if (!w.ok) return w.result;
    meId = w.id, {
      collection: collection,
      docId: docId_2
    } = y(w.id);
  }
  let path = docId_2 !== void 0 ? `${collection}/${docId_2}` : collection;
  if (path.length > oW) return m("artifact_db_read", "path_too_long"), {
    kind: "error",
    code: "invalid_argument",
    message: `the composed document path is ${path.length} bytes \u2014 the limit is ${oW}`,
    reason: "path_too_long"
  };
  let d = op_2 === "get" ? {
      path: path
    } : {
      collection: collection,
      ...(query?.limit !== void 0 && {
        limit: query.limit
      }),
      ...(query?.cursor !== void 0 && {
        cursor: query.cursor
      }),
      ...(op_2 === "query" && query?.where !== void 0 && {
        where: query.where.map(([field, A, value]) => ({
          field: field,
          op: et(A),
          value: value
        }))
      }),
      ...(op_2 === "query" && query?.order_by !== void 0 && {
        orderBy: {
          field: query.order_by.field,
          ...(query.order_by.direction !== void 0 && {
            direction: query.order_by.direction
          })
        }
      })
    },
    b = Date.now(),
    D = await Z("artifact_db_read", slug_2, op_2, d, {
      timeout: 15000,
      maxContentLength: maxContentLength_2,
      credentials: credentials_3,
      ...(t.asLevel !== void 0 && {
        asLevel: t.asLevel
      })
    }, r);
  if (!D.ok) return D.result;
  if (D.status === 200) {
    if (ce(slug_2, b), op_2 === "get") {
      let A = tt().safeParse(D.data);
      if (!A.success) return m("artifact_db_read", "malformed_echo"), {
        kind: "error",
        code: "store_unavailable",
        message: "db read returned an unreadable response \u2014 try again",
        reason: "malformed_echo"
      };
      let q = {
        ...(D.levelConfirmed !== void 0 && {
          levelConfirmed: D.levelConfirmed
        }),
        ...(meId !== void 0 && {
          meId: meId
        })
      };
      if (!A.data.exists) return c("artifact_db_read", "not_found"), {
        kind: "not_found",
        ...q
      };
      return g("artifact_db_read"), {
        kind: "ok",
        ...q,
        docs: [{
          id: docId_2 ?? "",
          data: A.data.data ?? {},
          ...(A.data.version !== void 0 && {
            version: A.data.version
          }),
          ...(A.data.updatedAt !== void 0 && {
            updatedAt: A.data.updatedAt
          })
        }],
        ...(A.data.version !== void 0 && {
          version: A.data.version
        }),
        ...(A.data[Nmt] ? {
          markReads: !0
        } : A.data.authoredByOthers && {
          authoredByOthers: !0
        }),
        ...(A.data.outside_writer !== void 0 && {
          outsideWriter: A.data.outside_writer
        })
      };
    }
    let w = rt().safeParse(D.data);
    if (!w.success) return m("artifact_db_read", "malformed_echo"), {
      kind: "error",
      code: "store_unavailable",
      message: "db read returned an unreadable response \u2014 try again",
      reason: "malformed_echo"
    };
    return g("artifact_db_read"), {
      kind: "ok",
      ...(D.levelConfirmed !== void 0 && {
        levelConfirmed: D.levelConfirmed
      }),
      ...(meId !== void 0 && {
        meId: meId
      }),
      docs: w.data.docs,
      ...(w.data.nextCursor !== void 0 && w.data.nextCursor !== "" && {
        nextCursor: w.data.nextCursor
      }),
      ...(w.data[Nmt] ? {
        markReads: !0
      } : w.data.authoredByOthers && {
        authoredByOthers: !0
      }),
      ...(w.data.outside_writer !== void 0 && {
        outsideWriter: w.data.outside_writer
      })
    };
  }
  let {
    code: code_3,
    reason: reason_7,
    kind: kind_3,
    limit: limit_2,
    serverReason: serverReason_2
  } = X(D.status, D.data);
  le(slug_2, D.status, code_3, b);
  let L = code_3 === "not_found" && D.sessionScoped === !0;
  return m("artifact_db_read", L ? "not_found_session_scoped" : reason_7), {
    kind: "error",
    code: code_3,
    ...(D.levelConfirmed !== void 0 && {
      levelConfirmed: D.levelConfirmed
    }),
    message: L ? wt : P(code_3, "read", kind_3, limit_2, void 0, void 0, serverReason_2),
    reason: L ? "not_found_session_scoped" : reason_7
  };
}
function T(reason_8, message, r = "") {
  return m("artifact_db_write", `${r}${reason_8}`), {
    kind: "error",
    code: "invalid_argument",
    message: message,
    reason: reason_8
  };
}
async function Te(e, t, r = "") {
  let {
    collection: collection_2,
    docId: docId_3
  } = e;
  if (!regExp_2.test(collection_2) || !regExp.test(docId_3)) return {
    ok: !1,
    result: T("invalid_segment", 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)', r)
  };
  if (!e6t(collection_2)) return {
    ok: !1,
    result: T("parity", wir(collection_2), r)
  };
  let n = Ie(collection_2, docId_3);
  if (n !== null) {
    let o = await t();
    if (!o.ok) return o;
    ({
      collection: collection_2,
      docId: docId_3
    } = n(o.id));
  }
  let path_2 = `${collection_2}/${docId_3}`;
  if (path_2.length > oW) return {
    ok: !1,
    result: T("path_too_long", `the composed document path is ${path_2.length} bytes \u2014 the limit is ${oW}`, r)
  };
  return {
    ok: !0,
    path: path_2
  };
}
function Pe(e, path_3, data, u, ifVersion) {
  let n = ifVersion !== void 0 && {
    ifVersion: ifVersion
  };
  switch (e) {
    case "delete":
      return {
        path: path_3,
        ...n
      };
    case "set":
      return {
        path: path_3,
        data: data,
        replace: !0,
        ...n
      };
    case "update":
      return {
        path: path_3,
        data: data,
        ...n
      };
    case "str_replace":
      return {
        path: path_3,
        field: u?.field,
        old_str: u?.oldStr,
        new_str: u?.newStr,
        ...(u?.replaceAll === !0 && {
          replace_all: !0
        }),
        idem: u?.idem,
        ...n
      };
  }
}
async function vpi(host, t, r, u, a) {
  let {
    slug: slug_3,
    op: op_3,
    data: data_2,
    edit: edit
  } = t;
  if (!hr.test(slug_3)) return T("invalid_slug", "not a valid artifact id");
  let h = ue("artifact_db_write", slug_3, P("not_declared", "write"));
  if (h !== void 0) return h;
  let f = await Te(t, () => fe(host, "artifact_db_write", slug_3, r, u, a));
  if (!f.ok) return f.result;
  return he(slug_3, op_3, f.path, data_2, r, a, t.asLevel, edit, t.ifVersion, t.requireVersion === !0 && op_3 !== "str_replace" ? {
    host: host,
    address: `${t.collection}/${t.docId}`
  } : void 0, t.requestId !== void 0 ? {
    host: host,
    id: t.requestId
  } : void 0);
}
async function he(e, op_4, r, u, a, credentials_4, asLevel, o, pinned, h, requestId) {
  let y = h !== void 0 ? Fe.of(h.host) : void 0,
    k = y !== void 0 && !y.unsupported,
    R = Date.now(),
    d = await Z("artifact_db_write", e, op_4, Pe(op_4, r, u, o, pinned), {
      timeout: 30000,
      ...(asLevel !== void 0 && {
        asLevel: asLevel
      }),
      ...(k && {
        requireVersion: !0
      }),
      ...(requestId !== void 0 && {
        requestId: requestId
      }),
      maxContentLength: maxContentLength,
      credentials: credentials_4
    }, a);
  if (!d.ok) return d.result;
  if (k && y !== void 0 && Y(d.status, d.data)) {
    let w = await he(e, op_4, r, u, a, credentials_4, asLevel, o, pinned, void 0, requestId);
    if (vt(w)) y.refusedAt = Date.now(), c("artifact_db_write", "require_version_unsupported");
    return w;
  }
  if (d.status === 200) {
    ce(e, R);
    let w = d.levelConfirmed !== void 0 && {
        levelConfirmed: d.levelConfirmed
      },
      A = at().safeParse(d.data);
    if (!A.success) return c("artifact_db_write", "malformed_echo"), {
      kind: "ok",
      ...w
    };
    g("artifact_db_write"), De(d.data, A.data.usage);
    let warnings = Ee(d.data);
    return {
      kind: "ok",
      ...w,
      ...(A.data.version !== void 0 && {
        version: A.data.version
      }),
      ...(A.data.usage !== void 0 && {
        usage: A.data.usage
      }),
      ...(warnings.length > 0 && {
        warnings: warnings
      })
    };
  }
  let {
    code: code_4,
    reason: reason_9,
    kind: kind_4,
    limit: limit_3,
    version: M,
    required: required,
    serverReason: serverReason_3,
    storeNotFound: storeNotFound
  } = X(d.status, d.data);
  return le(e, d.status, code_4, R), (de(code_4) ? c : m)("artifact_db_write", We(reason_9, kind_4, storeNotFound)), {
    kind: "error",
    code: code_4,
    ...(d.levelConfirmed !== void 0 && {
      levelConfirmed: d.levelConfirmed
    }),
    message: P(code_4, "write", kind_4, limit_3, o?.field, {
      pinned: pinned,
      current: M,
      op: op_4,
      required: required,
      path: h?.address,
      storeNotFound: storeNotFound
    }, serverReason_3) + (Le.has(code_4) ? N : "") + (code_4 === "invalid_argument" && (pinned !== void 0 || o?.replaceAll === !0) ? `. If this server does not yet accept \`${pinned !== void 0 ? "if_version" : "replace_all"}\`, that alone explains the refusal \u2014 nothing was written; retry without it only if an unconditional ${pinned !== void 0 ? "write" : "single replacement"} is acceptable here` : ""),
    reason: reason_9
  };
}
function vt(e) {
  if (e.kind !== "error") return !0;
  switch (e.code) {
    case "invalid_argument":
    case "store_unavailable":
    case "quota_or_rate":
    case "quota_exceeded":
    case "upstream_auth":
    case "credential_rejected":
    case "cloud_unavailable":
    case "network_off":
      return !1;
    default:
      return !0;
  }
}
async function Epi(host_2, t, r, u, credentials_5) {
  let {
    slug: slug_4,
    ops: ops,
    asLevel: asLevel_2
  } = t;
  if (!hr.test(slug_4)) return T("invalid_slug", "not a valid artifact id", "batch_");
  let l = ue("artifact_db_write", slug_4, P("not_declared", "batch write"), "batch_");
  if (l !== void 0) return l;
  if (ops.length === 0 || ops.length > $B) return T("batch_size", `a batch takes 1-${$B} writes \u2014 ${ops.length} were given`, "batch_");
  let h,
    f = () => h ??= fe(host_2, "artifact_db_write", slug_4, r, u, credentials_5),
    y = [],
    k = new Set();
  for (let [I, x] of ops.entries()) {
    let B = await Te(x, f, "batch_");
    if (!B.ok) return {
      ...B.result,
      message: `write ${I + 1} of ${ops.length}: ${B.result.message}`
    };
    if (k.has(B.path)) return T("duplicate_path", `write ${I + 1} of ${ops.length} addresses ${B.path}, which an earlier write in this batch already addresses \u2014 a batch writes each document at most once`, "batch_");
    k.add(B.path), y.push({
      op: x.op,
      path: B.path,
      ...(x.data !== void 0 && {
        data: x.data
      }),
      ...(x.ifVersion !== void 0 && {
        ifVersion: x.ifVersion
      })
    });
  }
  let pinned_2 = y.some(item => item.ifVersion !== void 0),
    args_2 = {
      ops: y.map(({
        op: op_5,
        path: path_4,
        data: data_3,
        ifVersion: ifVersion_2
      }) => ({
        op: op_5,
        ...Pe(op_5, path_4, data_3, void 0, ifVersion_2)
      }))
    },
    b;
  try {
    b = Buffer.byteLength(_({
      slug: slug_4,
      verb: "batch",
      args: args_2
    }), "utf8");
  } catch {
    return T("data_invalid", "every document in the batch must be a JSON-serializable object", "batch_");
  }
  if (b > vir) return T("batch_too_large", `the batch serializes to ${b} bytes \u2014 the limit for one request is ${vir}; split it into smaller batches`, "batch_");
  let D = uJo.of(host_2),
    F = t.requireVersion === !0 ? host_2 : void 0,
    requestId_2 = t.requestId !== void 0 ? {
      host: host_2,
      id: t.requestId
    } : void 0;
  if (D.unsupported && !pinned_2) return we(slug_4, y, r, credentials_5, asLevel_2, F, requestId_2);
  let M = Fe.of(host_2),
    E = t.requireVersion === !0 && !M.unsupported,
    S = Date.now(),
    L = I => Z("artifact_db_write", slug_4, "batch", args_2, {
      timeout: 60000,
      maxContentLength: maxContentLength,
      credentials: credentials_5,
      ...(asLevel_2 !== void 0 && {
        asLevel: asLevel_2
      }),
      ...(I && {
        requireVersion: !0
      }),
      ...(requestId_2 !== void 0 && {
        requestId: requestId_2
      })
    }, r),
    w = await L(E);
  if (!w.ok) return w.result;
  if (E && Y(w.status, w.data)) {
    if (w = await L(!1), !w.ok) return w.result;
    if (asLevel_2 === void 0) M.refusedAt = Date.now(), c("artifact_db_write", "batch_require_version_unsupported");
  }
  if (asLevel_2 === void 0 && Y(w.status, w.data)) return D.refusedAt = Date.now(), pinned_2 ? kt() : we(slug_4, y, r, credentials_5, void 0, F, requestId_2);
  if (w.status === 200) {
    ce(slug_4, S);
    let I = w.levelConfirmed !== void 0 && {
        levelConfirmed: w.levelConfirmed
      },
      x = ot().safeParse(w.data);
    if (!x.success || x.data.results.length !== ops.length) return c("artifact_db_write", "malformed_batch_echo"), {
      kind: "ok",
      ...I,
      results: ops.map(() => ({}))
    };
    g("artifact_db_write"), De(w.data, x.data.usage);
    let warnings_2 = Ee(w.data);
    return {
      kind: "ok",
      ...I,
      results: x.data.results.map(item => item.version !== void 0 ? {
        version: item.version
      } : {}),
      ...(x.data.usage !== void 0 && {
        usage: x.data.usage
      }),
      ...(warnings_2.length > 0 && {
        warnings: warnings_2
      })
    };
  }
  let {
    code: code_5,
    reason: reason_10,
    kind: kind_5,
    limit: limit_4,
    version: version,
    index: index,
    required: required_2,
    serverReason: serverReason_4,
    storeNotFound: storeNotFound_2
  } = X(w.status, w.data);
  le(slug_4, w.status, code_5, S), (de(code_5) ? c : m)("artifact_db_write", `batch_${We(reason_10, kind_5, storeNotFound_2)}`);
  let index_2 = index !== void 0 && index < y.length ? index : void 0;
  return {
    kind: "error",
    code: code_5,
    ...(w.levelConfirmed !== void 0 && {
      levelConfirmed: w.levelConfirmed
    }),
    message: Rt(code_5, kind_5, limit_4, {
      pinned: pinned_2,
      stale: index_2 !== void 0 ? {
        index: index_2,
        path: `${ops[index_2].collection}/${ops[index_2].docId}`,
        op: ops[index_2].op,
        ifVersion: ops[index_2].ifVersion,
        total: ops.length
      } : void 0,
      version: version,
      required: required_2,
      serverReason: serverReason_4,
      storeNotFound: storeNotFound_2
    }),
    reason: reason_10
  };
}
function kt() {
  return c("artifact_db_write", "batch_pinned_unsupported"), {
    kind: "error",
    code: "invalid_argument",
    reason: "batch_pinned_unsupported",
    message: `db batch write failed (${C("invalid_argument")}): this server does not take batch writes yet (nor, most likely, \`if_version\`), and a batch with \`if_version\` pins is never applied one write at a time \u2014 nothing was written. Resend it without the pins only if unconditional writes are acceptable here`
  };
}
function Rt(e, t, r, u) {
  if (e === "too_large") return `db batch write failed (${C(e)}): the batch body exceeds the server's 1 MiB request limit \u2014 nothing was written; split it into smaller write_db calls`;
  if (e === "version_mismatch" && u?.required === !0) {
    let s = `db batch write failed (${C(e)})`,
      o = "Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending",
      stale = u.stale;
    return stale !== void 0 ? `${s}: writes[${stale.index}] (write ${stale.index + 1} of ${stale.total}) targets ${stale.path}, which already exists, and carried no if_version \u2014 the whole batch wrote nothing. Read that document back, re-plan its ${stale.op === "delete" ? "delete (if it should still be deleted)" : "write on what it holds now"} with if_version set to the version the read returns, then resend the batch. ${"Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending"}` : `${s}: one of the writes targets a document that already exists and carried no if_version \u2014 the whole batch wrote nothing. Read the existing documents this batch writes, re-plan those entries on what they hold now with if_version set to the versions the reads return, then resend the batch`;
  }
  if (e === "version_mismatch") {
    let s = `db batch write failed (${C(e)}): the batch is atomic, so nothing was written \u2014 none of the writes applied`,
      o = u?.stale;
    if (o === void 0 || o.ifVersion === void 0) return `${s}. A document one of the writes was pinned to with if_version is no longer at that version (or no longer exists). Re-read the pinned documents, re-plan those writes against what they hold now with fresh pins, then resend the batch`;
    let l = `writes[${o.index}] (write ${o.index + 1} of ${o.total}, ${_(o.path)})`,
      h = "It is the first stale pin the server met; later pinned entries were not checked, so re-read any pinned document you are unsure of too, then resend the batch";
    return u?.version !== void 0 ? `${s}. ${l} was pinned to version ${o.ifVersion} and that document is now at version ${u.version}: read it back, re-plan its write against what it holds now and pin to that version. ${h}` : `${s}. ${l} was pinned to version ${o.ifVersion} and that document has changed or may have been deleted (the server named no current version): read it back \u2014 if it still exists, re-plan its write against what it holds now and pin to its version; if it is gone, drop that entry, or re-create it with a "set" entry and no if_version only if it should exist again. ${h}`;
  }
  if (t === "refused_writes") return `db batch write failed (${C(e)}): one of the writes repeats an operation on a path the server refused earlier (a missing document, a path you may not write, or an invalid argument), and after repeated refused writes to this artifact it is briefly turning such repeats away, whatever data they carry; the batch is atomic, so nothing was written. Do not resend the batch as it is: drop or change the entry that was refused before (the server does not say which; for example, use set to create a document that should exist), or stop`;
  if (e === "not_found" && u?.storeNotFound === !0) return `db batch write failed (${C(e)}): the artifact's database refused one of the writes: most often it updates a document that does not exist (update needs an existing one), deletes from a database that has never been written to (nothing to delete), or the database's access rules or your access level do not let you write its path; the batch is atomic, so nothing was written. Read back any document you expected to exist before re-creating it; create documents that should exist with set, and drop the entries that have nothing to do or that you may not write`;
  let a = P(e, "batch write", t, r, void 0, void 0, u?.serverReason),
    n = e === "invalid_argument" && u?.pinned === !0 ? ". If this server does not yet accept `if_version` on batch writes, that alone explains the refusal \u2014 resend without the pins only if unconditional writes are acceptable here" : "";
  return tXr(e) ? `${a}; the batch is atomic, so nothing was written${n}` : `${a}; the batch's outcome is unknown \u2014 it applies all-or-nothing and may have committed; read back before retrying`;
}
function We(e, t, r) {
  if (r === !0) return "store_not_found";
  return t === "refused_writes" ? t : e;
}
function tXr(e) {
  return e !== "store_unavailable";
}
async function we(e, t, r, u, a, host_3, s) {
  c("artifact_db_write", "batch_fallback_sequential");
  let results = [],
    usage,
    warnings_3 = [],
    levelConfirmed,
    y = R => a !== void 0 && R > 0 && levelConfirmed !== !0 ? ` (as_level '${a}' unconfirmed for them \u2014 they may have run at your own level)` : "",
    k = "this server does not take batch writes yet, so the batch was applied one write at a time and is NOT atomic";
  for (let [failedIndex, {
    op: op_6,
    path: b,
    data: data_4
  }] of t.entries()) {
    let F = `${failedIndex} ${failedIndex === 1 ? "entry" : "entries"} before it already committed`,
      O = t.length - failedIndex - 1,
      M = S => ({
        kind: "error",
        code: "store_unavailable",
        reason: "batch_fallback_aborted",
        message: `${k}: interrupted at writes[${failedIndex}] (write ${failedIndex + 1} of ${t.length}). The ${F}${y(failedIndex)}; writes[${failedIndex}] itself ${S ? "may or may not have applied" : "did not run"}; the ${O} after it did not run.`,
        fallback: "sequential",
        results: results,
        failedIndex: failedIndex
      });
    if (r.aborted) return M(!1);
    let E;
    try {
      E = await he(e, op_6, b, data_4, r, u, a, void 0, void 0, host_3 && {
        host: host_3,
        address: b
      }, s);
    } catch (error) {
      if (nl(error)) return M(!0);
      if (error instanceof K) return M(!1);
      throw error;
    }
    if (E.kind === "error") return {
      kind: "error",
      code: E.code,
      reason: E.reason,
      message: `${k}: writes[${failedIndex}] (write ${failedIndex + 1} of ${t.length}) failed \u2014 ${E.message.replace(N, `; writes[${failedIndex}] was not applied`)}. The ${F}${y(failedIndex)}; the ${O} after it did not run.`,
      fallback: "sequential",
      results: results,
      failedIndex: failedIndex
    };
    results.push(E.version !== void 0 ? {
      version: E.version
    } : {}), usage = E.usage ?? (op_6 === "delete" ? void 0 : usage);
    for (let S of E.warnings ?? []) if (warnings_3.length < Ae && !warnings_3.includes(S)) warnings_3.push(S);
    if (E.levelConfirmed !== void 0) levelConfirmed = (levelConfirmed ?? !0) && E.levelConfirmed;
  }
  return {
    kind: "ok",
    results: results,
    ...(usage !== void 0 && {
      usage: usage
    }),
    ...(warnings_3.length > 0 && {
      warnings: warnings_3
    }),
    fallback: "sequential",
    ...(levelConfirmed !== void 0 && {
      levelConfirmed: levelConfirmed
    })
  };
}
export { UIe, A1e, regExp as e6, regExp_2 as j8, e6t, wir, oW, Rlt, Sve, WE, Alt, gpi, x1e, kir, CQ, kAt, Zvn, cJo, $B, vir, ypi, _pi, uJo, bpi, Spi, fJo, wpi, kpi, Eir, vpi, Epi, tXr };