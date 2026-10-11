// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { We } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { q } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { $i, yRe, Aut, apn, x, Gb } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ss } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Fa } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { Bn } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { zXt, GXt, m0n, VXt, nCt } from "B:/~BUN/root/chunk-r1ja2che.js";
import { O3e, Ch, q3, URo, cx, Ud } from "B:/~BUN/root/chunk-j36yaq51.js";
import { $d, rle } from "B:/~BUN/root/chunk-1zdknz5q.js";
import { de, fn, ho, uKr, Pc, Xn, lt, mg, qu } from "B:/~BUN/root/chunk-8386ms9e.js";
import { randomBytes as Oe } from "crypto";
function Rse() {
  return a.CLAUDE_CODE_ARTIFACT_DB ?? !0;
}
function Qpe() {
  return Rse() && (a.CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE ?? x("tengu_umber_stile", !1)) === !0;
}
var ue = "/api/frame/db/agent",
  Ie = 5000;
class H extends We {}
var z = String.raw`(?!\.\.?(?:/|$))[A-Za-z0-9_\-.~:@+]{1,200}`,
  regExp = new RegExp(`^${z}$`),
  regExp_2 = new RegExp(`^${z}(?:/${z}){0,14}$`);
function Ett(e) {
  return (Gt(e, "/") + 1) % 2 === 1;
}
function aXt(e) {
  let t = o => o.length > 120 ? `${o.slice(0, 60)}\u2026${o.slice(-40)}` : o,
    n = e.split("/"),
    l = n.length,
    s = t(n.slice(0, -1).join("/")),
    c = t(n[l - 1]);
  return `collection '${t(e)}' has ${l} segments, which makes it a document path, not a collection: collection paths have an odd number of segments (collection/document/collection/\u2026) and the document is collection + doc_id. For that document use collection '${s}' with doc_id '${c}'; for a collection inside it, add one more segment. Per-user data follows the same rule \u2014 collection 'data/users/<id>' (3 segments) holds that user's documents, so 'data/users/<id>/decks' is one document and 'data/users/<id>/decks/cards' a collection.`;
}
var CO = 1000,
  $0e = ["get", "list", "query"],
  H7 = ["set", "update", "delete"],
  J_ = "str_replace",
  Ot = [...H7, J_],
  kTt = ["interact", "admin"];
function Aao() {
  return Oe(16).toString("base64url");
}
var Zpe = 200,
  lXt = /^(?!__.*__$)[^\p{Cc}\p{Cf}\p{Zl}\p{Zp}"\\./[\]]{1,200}$/u,
  AG = 262144,
  Q2e = 4 * AG,
  maxContentLength_2 = 4194304,
  maxContentLength = 16384,
  ETt = 1000,
  Umr = 100,
  PP = 50,
  cXt = 1048576,
  ce = ["edit_no_match", "edit_ambiguous", "edit_field_missing", "edit_field_not_string", "version_mismatch"];
function te(e) {
  return ce.some(item => item === e);
}
var qe = new Map([["not_found", "not_found"], ["invalid_argument", "invalid_argument"], ["quota_or_rate", "quota_or_rate"], ["busy", "busy"], ["upstream_auth", "upstream_auth"], ["store_unavailable", "store_unavailable"], ["not_declared", "not_declared"], ["too_large", "too_large"], ["quota_exceeded", "quota_exceeded"], ["invalid-argument", "invalid_argument"], ["not-found", "not_found"], ["resource-exhausted", "quota_or_rate"], ["resource_exhausted", "quota_or_rate"], ["data-unavailable", "store_unavailable"], ["unavailable", "store_unavailable"], ["upstream-error", "store_unavailable"], ...ce.map(item => [item, item])]),
  Me = new Set(["an OAuth access token is required", "a directly presented OAuth access token is required", "db verbs require a user-scoped OAuth token, not an org service key"]);
function Pe(e, t) {
  if (e !== 403 || typeof t !== "string") return;
  let n = t.trim();
  if (Me.has(n)) return {
    code: "credential_rejected",
    reason: "custody_403"
  };
  if (n.startsWith(q3)) return {
    code: "cloud_unavailable",
    reason: "ccr_credential_refused"
  };
  return;
}
function Te(e) {
  if (e === 404 || e === 403) return "not_found";
  if (e === 400 || e === 422) return "invalid_argument";
  if (e === 413) return "too_large";
  if (e === 429) return "quota_or_rate";
  if (e === 409 || e === 412) return "busy";
  if (e === 401) return "upstream_auth";
  return "store_unavailable";
}
function I(e) {
  switch (e) {
    case "not_found":
    case "invalid_argument":
    case "too_large":
    case "not_declared":
      return "invalid-argument";
    case "quota_or_rate":
      return "resource-exhausted";
    case "quota_exceeded":
      return "quota-exceeded";
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
var xao = ["eq", "ne", "in", "not-in", "lt", "lte", "gt", "gte", "array-contains"],
  Pao = ["==", "!=", "<", "<=", ">", ">="],
  le = {
    "==": "eq",
    "!=": "ne",
    "<": "lt",
    "<=": "lte",
    ">": "gt",
    ">=": "gte"
  };
function Le(e) {
  return Object.hasOwn(le, e);
}
function He(e) {
  return Le(e) ? le[e] : e;
}
var fe = f(() => qu(!0).optional().catch(void 0)),
  me = f(() => ho().optional().catch(void 0)),
  Ne = f(() => lt({
    exists: ho(),
    data: mg(de(), Pc()).optional(),
    version: fn().int().optional(),
    updatedAt: de().optional(),
    authoredByOthers: fe(),
    outside_writer: me()
  })),
  Ue = f(() => lt({
    docs: Xn(lt({
      id: de(),
      data: mg(de(), Pc()),
      version: fn().int().optional(),
      updatedAt: de().optional()
    })),
    nextCursor: de().optional(),
    authoredByOthers: fe(),
    outside_writer: me()
  })),
  he = f(() => lt({
    documents: fn().int().safe().nonnegative(),
    maxDocuments: fn().int().safe().positive()
  }).optional().catch(void 0));
function _e(e, t) {
  if (t === void 0 && typeof e === "object" && e !== null && e.usage !== void 0) p("artifact_db_write", "malformed_usage");
}
var je = f(() => lt({
    version: fn().int().optional(),
    usage: he()
  })),
  Ve = f(() => lt({
    results: Xn(lt({
      version: fn().int().optional()
    })),
    usage: he()
  })),
  Ke = f(() => lt({
    error: lt({
      code: qu("invalid_argument"),
      message: qu("invalid argument"),
      verb: uKr().optional()
    })
  }));
function W(e, t) {
  return e === 400 && Ke().safeParse(t).success;
}
class U {
  refusedAt = void 0;
  get unsupported() {
    return this.refusedAt !== void 0 && Date.now() - this.refusedAt < Ye;
  }
}
var Ye = 3600000,
  Bmr = new q(() => new U()),
  be = new q(() => new U()),
  Ge = new q(() => new U());
function Xe(e, t) {
  if (!W(e, t)) return !1;
  let {
    reason: reason
  } = t.error;
  return reason === void 0 || reason === "bad_json";
}
var ze = f(() => lt({
    error: lt({
      code: de().optional(),
      kind: Pc().optional(),
      limit: Pc().optional(),
      version: Pc().optional(),
      index: Pc().optional(),
      required: Pc().optional()
    }).optional()
  })),
  Je = {
    quota_exceeded: new Set(["docs_per_collection", "docs_per_database", "databases_per_org"]),
    quota_or_rate: new Set(["active_leases", "rate_limited", "write_capacity", "scan_budget", "response_budget"])
  };
function Ze(e, t) {
  let n = Je[e];
  return n !== void 0 && n.has(t);
}
function oe(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 ? e : void 0;
}
function Qe(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0 ? e : void 0;
}
function j(e, t) {
  let n = Pe(e, t);
  if (n !== void 0) return n;
  let l = ze().safeParse(t),
    s = l.success ? l.data.error : void 0,
    c = s?.code,
    code = c !== void 0 ? qe.get(c) : void 0;
  if (c !== void 0 && code !== void 0) {
    let d = s?.kind;
    if (Ze(code, d)) return {
      code: code,
      reason: d,
      kind: d,
      limit: oe(s?.limit)
    };
    let r = code === "version_mismatch" && s?.required === !0;
    return {
      code: code,
      reason: r ? "version_required" : c.replace(/-/g, "_"),
      ...(te(code) && {
        version: oe(s?.version),
        index: Qe(s?.index),
        ...(r && {
          required: !0
        })
      })
    };
  }
  let i = Te(e);
  return {
    code: i,
    reason: i
  };
}
var Iao = [`db write failed (${I("version_mismatch")}): `, `db batch write failed (${I("version_mismatch")}): `],
  jmr = {
    write: "Not saved: Claude needs to read the latest version of this document before changing it.",
    delete: "Not deleted: Claude needs to read the latest version of this document before deleting it."
  };
function L(e, t, n, l, s, c) {
  let o = `field '${s ?? "?"}'`,
    i = c?.current !== void 0 ? ` The document is at version ${c.current}.` : "",
    d = c?.pinned !== void 0 && c.current === c.pinned,
    r = `db ${t} failed (${I(e)})`;
  switch (e) {
    case "not_found":
      return `${r}: no such artifact, collection, or document (or no access \u2014 the two are deliberately indistinguishable)`;
    case "invalid_argument":
      return `${r}: the server could not accept the request as shaped`;
    case "too_large":
      return `${r}: the request body exceeds the server's size limit \u2014 send less per call`;
    case "quota_or_rate":
      return `${r}: ${ie(n, l) ?? "over a rate or storage limit \u2014 retry later or write less"}`;
    case "quota_exceeded":
      return `${r}: ${ie(n, l) ?? "a storage limit on this artifact's database has been reached \u2014 delete documents; retrying won't help"}`;
    case "busy":
      return `${r}: lost to a concurrent change \u2014 re-read and retry deliberately`;
    case "upstream_auth":
      return `${r}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "store_unavailable":
      return `${r}: the store is unavailable right now \u2014 try again`;
    case "not_declared":
      return `${r}: this artifact's current published version does not declare the database capability \u2014 republish it with the db capability declared, then retry`;
    case "credential_rejected":
      return `${r}: the server refused this session's credential at the artifact-db door \u2014 not an artifact-access or existence answer; report this as a client/server integration fault`;
    case "cloud_unavailable":
      return `${r}: reading and editing artifact data isn't available in this cloud session right now; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it`;
    case "network_off":
      return t === "read" ? `${r}: this cloud session's network access is turned off (or could not be confirmed), so it cannot read artifact data \u2014 writes still work; do not retry the read here` : `${r}: this cloud session's network access is turned off (or could not be confirmed), and the gateway did not accept this call as a write it allows \u2014 do not retry it here`;
    case "edit_no_match":
      return d ? `${r}: old_str does not occur in ${o} of that document, so nothing was written by this call. The document is still at version ${c?.current}, the one this edit was pinned to, so nothing changed under you: old_str itself does not match the stored text \u2014 copy it exactly as it appears in the field's value (the decoded string, not JSON-escaped source)` : `${r}: old_str does not occur in ${o} of that document, so nothing was written by this call.${i} Copy the text exactly as it appears in the field's value (the decoded string, not JSON-escaped source). If you were retrying after a call whose outcome you did not see, that earlier call may already have applied \u2014 read the document back before trying again. If someone else changed that text, re-read and re-plan the edit`;
    case "edit_ambiguous":
      return `${r}: old_str occurs more than once in ${o} of that document; nothing was written.${i} Include more surrounding text so it is unique, or pass replace_all to change every occurrence`;
    case "edit_field_missing":
      return `${r}: the document has no top-level ${o}; nothing was written.${i} str_replace edits an existing top-level string field \u2014 read the document to see its fields, or use update to add one`;
    case "edit_field_not_string":
      return `${r}: ${o} is not a string (str_replace edits top-level string fields only); nothing was written \u2014 use update for structured fields.${i}`;
    case "version_mismatch":
      if (c?.required === !0) {
        let w = c.path ?? "that document",
          R = "Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns";
        switch (c.op) {
          case "delete":
            return `${r}: ${w} is an existing document and this delete carried no if_version \u2014 nothing was deleted. Read it back and, if it should still be deleted, resend the delete with if_version set to the version that read returns`;
          case "update":
            return `${r}: ${w} is an existing document and this update carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
          default:
            return `${r}: ${w} already exists and this write carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
        }
      }
      return c?.current !== void 0 ? `${r}: the document is no longer at version ${c.pinned ?? "?"}, the one this write was pinned to \u2014 it is now at version ${c.current}; nothing was written. Read it back, re-plan the write against what it holds now, and pin to that version` : `${r}: the document is no longer at version ${c?.pinned ?? "?"}, the one this write was pinned to \u2014 it has changed or may have been deleted; nothing was written. Read it back: if it still exists, re-plan the write against what it holds now and pin to its version; if it is gone, ${c?.op === "delete" ? "a delete has nothing left to do" : 're-create it with a "set" and no if_version only if it should exist again'}`;
  }
}
function ie(e, t) {
  let n = t === void 0 ? "document limit" : `limit of ${t} documents`;
  switch (e) {
    case "docs_per_collection":
      return `this collection has reached its ${n} \u2014 delete documents; retrying won't help`;
    case "docs_per_database":
      return `this artifact's database has reached its ${n} \u2014 delete documents before adding more; retrying won't help`;
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
    case void 0:
      return;
  }
}
var G = "data/users/me",
  pe = "whoami",
  et = f(() => lt({
    id: de().min(1)
  }));
function ge(e, t) {
  return `${e}:${t}`;
}
function N() {
  return URo("POST", ue, "bound") === "relay";
}
async function tt(e, t) {
  if (N()) return null;
  let n = (await O3e(t))?.accountUuid;
  return n ? ge(n, e) : null;
}
async function J(e, t, n) {
  let l = await Gb(n);
  return l?.accountUuid !== void 0 && ge(l.accountUuid, e) === t;
}
function Z() {
  let Authorization = yRe().headers.Authorization;
  return Authorization === void 0 ? null : Aut(Authorization);
}
async function we(credentials) {
  if (!apn()) return;
  for (let t = 0; t < 2; t++) try {
    await $i({
      credentials: credentials
    });
  } catch {}
}
function Oao(e) {
  let {
    resolvedMeIds: resolvedMeIds,
    inFlightMeIds: inFlightMeIds
  } = ke.of(e);
  resolvedMeIds.clear(), inFlightMeIds.clear();
}
function ye(e, docId) {
  if (e === G || e.startsWith(G + "/")) return n => ({
    collection: "data/users/" + n + e.slice(G.length),
    docId: docId
  });
  return null;
}
var T = Symbol("contested-me-key");
class ve {
  resolvedMeIds = new Map();
  inFlightMeIds = new Map();
}
var ke = new q(() => new ve());
function $e(e, t, n, l, s) {
  if (t === "malformed_whoami_echo") return `db ${n} failed (unavailable): resolving 'me' returned an unreadable response \u2014 the artifact db service may need an update`;
  if (e === "not_declared") return `db ${n} failed (${I(e)}): resolving 'me' needs this artifact's published version to declare the db and user capabilities \u2014 republish with both declared, then retry`;
  return L(e, n, l, s) + (n === "write" && Ee.has(e) ? P : "");
}
var P = "; nothing was written",
  Ee = new Set(["too_large", "credential_rejected", "cloud_unavailable", "network_off"]);
async function re(e, t, n, l, s, c) {
  let o = ke.of(e),
    {
      resolvedMeIds: resolvedMeIds_2,
      inFlightMeIds: inFlightMeIds_2
    } = o,
    r = await tt(n, c),
    w = null;
  if (r !== null && (resolvedMeIds_2.has(r) || inFlightMeIds_2.has(r))) {
    if (await J(n, r, s)) {
      if (resolvedMeIds_2.has(r)) await we(c);
      w = r;
    }
  }
  let R = w === null ? void 0 : resolvedMeIds_2.get(w);
  if (w !== null && R !== void 0 && !N()) {
    if (R.fingerprint === Z()) return {
      ok: !0,
      id: R.id
    };
    if (resolvedMeIds_2.get(w) === R) resolvedMeIds_2.delete(w);
  }
  let h;
  if (r === null) h = await X(o, t, n, l, r, s, c);else {
    let u = w === null ? void 0 : inFlightMeIds_2.get(w);
    if (!u) u = (async () => {
      if (!(await J(n, r, s))) return p(t, "contested_me_key"), T;
      return X(o, t, n, l, r, s, c);
    })(), inFlightMeIds_2.set(r, u), u.finally(() => {
      if (inFlightMeIds_2.get(r) === u) inFlightMeIds_2.delete(r);
    }).catch(() => {});
    let g = await u;
    h = g === T ? await X(o, t, n, l, null, s, c) : g;
  }
  if (h.ok) return h;
  if ("composed" in h) return {
    ok: !1,
    result: h.composed
  };
  let y = t === "artifact_db_read" ? "read" : "write";
  return m(t, h.reason), {
    ok: !1,
    result: {
      kind: "error",
      code: h.code,
      message: $e(h.code, h.reason, y, h.kind, h.limit),
      reason: h.reason
    }
  };
}
async function X(e, t, n, l, s, c, credentials_2) {
  let fingerprint = null;
  if (s !== null) {
    if (await we(credentials_2), fingerprint = Z(), fingerprint === null || N()) return T;
  }
  let d = await V(t, n, pe, {}, {
    timeout: 15000,
    maxContentLength: maxContentLength,
    credentials: credentials_2,
    reportSentAuth: s !== null
  }, l);
  if (!d.ok) return {
    ok: !1,
    composed: d.result
  };
  if (d.status !== 200) {
    let {
      code: code_2,
      reason: reason_2,
      kind: kind,
      limit: limit
    } = j(d.status, d.data);
    return {
      ok: !1,
      code: code_2,
      reason: `whoami_${reason_2}`,
      kind: kind,
      limit: limit
    };
  }
  let r = et().safeParse(d.data);
  if (!r.success || !regExp.test(r.data.id)) return {
    ok: !1,
    code: "store_unavailable",
    reason: "malformed_whoami_echo"
  };
  if (s !== null) {
    if (fingerprint === null || fingerprint !== d.sentAuthFingerprint || fingerprint !== Z() || !(await J(n, s, c))) return p(t, "auth_unstable_me_key"), T;
    if (N()) return T;
    e.resolvedMeIds.set(s, {
      id: r.data.id,
      fingerprint: fingerprint
    });
  }
  return {
    ok: !0,
    id: r.data.id
  };
}
async function V(e, slug, verb, args, s, signal) {
  let o = verb === "batch" ? "batch_" : "",
    i = verb === pe,
    d = e === "artifact_db_read" ? "read" : "write",
    r = s.requestId !== void 0 ? Ge.of(s.requestId.host) : void 0,
    w = {
      slug: slug,
      verb: verb,
      args: args,
      ...(s.asLevel !== void 0 && {
        asLevel: s.asLevel
      }),
      ...(s.requireVersion === !0 && {
        requireVersion: !0
      }),
      ...(e === "artifact_db_write" && !i && zXt()),
      ...(e === "artifact_db_write" && !i && s.requestId !== void 0 && r !== void 0 && !r.unsupported && rle(s.requestId.id))
    },
    R = () => Ud.postRelayBound(ue, w, {
      refreshOAuth: !0,
      credentials: s.credentials,
      headers: $d(),
      timeout: s.timeout,
      maxContentLength: s.maxContentLength,
      signal: signal,
      reportSentAuth: s.reportSentAuth
    }),
    h = !1,
    y = async () => {
      let g = await R();
      if (g.ok && g.gatewayRetryAfterMs !== void 0 && !h) {
        if (h = !0, await Q(Math.min(g.gatewayRetryAfterMs, Ie), signal, {
          abortError: () => new H()
        }), g = await R(), g.ok && g.route === "relay" && g.fromFrame) p(e, `${o}${i ? "whoami_" : ""}relay_busy_recovered`);
      }
      return g;
    },
    u;
  try {
    u = await y();
    let g = u.ok && u.fromFrame ? VXt(u.status, u.data, w) : [];
    if (g.length > 0) {
      if (g.includes("request_id") && r !== void 0) p(e, `${o}request_id_rejected`), r.refusedAt = Date.now();
      if (nCt(g)) p(e, `${o}session_hints_rejected`), GXt();
      w = ss(w, nCt(g) ? m0n : g), u = await y();
    }
    if (r !== void 0 && w.request_id !== void 0 && u.ok && u.fromFrame && Xe(u.status, u.data)) {
      let {
        request_id: request_id,
        ...D
      } = w;
      if (w = D, u = await y(), u.ok && u.fromFrame && u.status >= 200 && u.status < 300) r.refusedAt = Date.now(), p(e, `${o}request_id_unsupported`);
    }
  } catch (error) {
    if (Fa(error) || error instanceof H) throw error;
    let A = e !== "artifact_db_read" && !i && cx(error);
    return m(e, `${o}${A ? "relay_request_error" : "request_error"}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: A ? "db write outcome unknown (relay request failed) \u2014 it may have applied; read back before retrying" : `db ${d} failed (network error)`,
        reason: A ? "relay_request_error" : "request_error"
      }
    };
  }
  if (!u.ok) {
    if (u.reason === "relay-unavailable" || u.reason === "relay-not-served") {
      let reason_3 = `${i ? "whoami_" : ""}${u.reason.replace(/-/g, "_")}`;
      return m(e, `${o}${reason_3}`, {
        status: u.status
      }), {
        ok: !1,
        result: {
          kind: "error",
          code: "store_unavailable",
          message: `db ${d} failed (${I("store_unavailable")}): ${i ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection did not carry the request${u.status ? ` (HTTP ${u.status})` : ""}, so nothing ran; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it${d === "write" ? P : ""}`,
          reason: reason_3
        }
      };
    }
    return m(e, `${o}${u.reason.replace(/-/g, "_")}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: u.reason === "no-auth" ? Ch(u.detail) : `db ${d} unavailable: ${u.reason}`,
        reason: "transport"
      }
    };
  }
  if (u.gatewayPolicy === "network-off") {
    let reason_4 = i ? "whoami_network_off" : "network_off";
    return p(e, `${o}${reason_4}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "network_off",
        message: i ? $e("network_off", reason_4, d) : L("network_off", d) + (d === "write" ? P : ""),
        reason: reason_4
      }
    };
  }
  if (u.gatewayRetryAfterMs !== void 0) {
    let reason_5 = `${i ? "whoami_" : ""}relay_busy_retried`,
      A = verb === J_;
    return m(e, `${o}${reason_5}`, {
      status: u.status
    }), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: `db ${d} failed (${I("store_unavailable")}): ${i ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection was temporarily unavailable (HTTP ${u.status}, after one retry); ${A ? "the edit may or may not have applied \u2014 read it back before retrying" : `this is transient and nothing ran \u2014 retry shortly${d === "write" ? P : ""}`}`,
        reason: reason_5
      }
    };
  }
  if (!u.fromFrame) return m(e, `${o}${i ? "whoami_relay_error" : "relay_error"}`, {
    status: u.status
  }), {
    ok: !1,
    result: {
      kind: "error",
      code: "store_unavailable",
      message: i ? `db ${d} failed: resolving 'me' failed (relay HTTP ${u.status}) \u2014 try again` : e === "artifact_db_read" ? `db read failed (relay HTTP ${u.status}) \u2014 try again` : `db write outcome unknown (relay HTTP ${u.status}) \u2014 it may have applied; read back before retrying`,
      reason: i ? "whoami_relay_error" : "relay_error"
    }
  };
  return {
    ok: !0,
    status: u.status,
    data: u.data,
    sentAuthFingerprint: u.sentAuthFingerprint,
    ...(u.route === "relay" && u.response.headers?.[rt] === "session" && {
      sessionScoped: !0
    }),
    ...(s.asLevel !== void 0 && {
      levelConfirmed: at(u.data) === s.asLevel
    })
  };
}
var rt = "x-frame-relay-read-scope-applied",
  nt = `db read failed (${I("not_found")}): nothing this session can read at that address \u2014 with the organization's cloud network access turned off, this session can read the data only of artifacts it published itself (or there is no such artifact, collection, or document); do not retry the read here`;
function at(e) {
  let t = e !== null && typeof e === "object" ? Reflect.get(e, "asLevel") : void 0;
  return typeof t === "string" ? t : void 0;
}
async function dXt(e, t, n, l, credentials_3) {
  let {
      slug: slug_2,
      op: op,
      query: query
    } = t,
    {
      collection: collection,
      docId: docId_2
    } = t;
  if (!Bn.test(slug_2)) return m("artifact_db_read", "invalid_slug"), {
    kind: "error",
    code: "invalid_argument",
    message: "not a valid artifact id",
    reason: "invalid_slug"
  };
  if (!regExp_2.test(collection) || docId_2 !== void 0 && !regExp.test(docId_2)) return m("artifact_db_read", "invalid_segment"), {
    kind: "error",
    code: "invalid_argument",
    message: 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)',
    reason: "invalid_segment"
  };
  if (!Ett(collection)) return m("artifact_db_read", "parity"), {
    kind: "error",
    code: "invalid_argument",
    message: aXt(collection),
    reason: "parity"
  };
  if (op === "get" && docId_2 === void 0) return m("artifact_db_read", "missing_doc_id"), {
    kind: "error",
    code: "invalid_argument",
    message: "doc_id is required for a get",
    reason: "missing_doc_id"
  };
  let w = ye(collection, docId_2);
  if (w !== null) {
    let v = await re(e, "artifact_db_read", slug_2, n, l, credentials_3);
    if (!v.ok) return v.result;
    ({
      collection: collection,
      docId: docId_2
    } = w(v.id));
  }
  let path = docId_2 !== void 0 ? `${collection}/${docId_2}` : collection;
  if (path.length > CO) return m("artifact_db_read", "path_too_long"), {
    kind: "error",
    code: "invalid_argument",
    message: `the composed document path is ${path.length} bytes \u2014 the limit is ${CO}`,
    reason: "path_too_long"
  };
  let h = op === "get" ? {
      path: path
    } : {
      collection: collection,
      ...(query?.limit !== void 0 && {
        limit: query.limit
      }),
      ...(query?.cursor !== void 0 && {
        cursor: query.cursor
      }),
      ...(op === "query" && query?.where !== void 0 && {
        where: query.where.map(([field, k, value]) => ({
          field: field,
          op: He(k),
          value: value
        }))
      }),
      ...(op === "query" && query?.order_by !== void 0 && {
        orderBy: {
          field: query.order_by.field,
          ...(query.order_by.direction !== void 0 && {
            direction: query.order_by.direction
          })
        }
      })
    },
    y = await V("artifact_db_read", slug_2, op, h, {
      timeout: 15000,
      maxContentLength: maxContentLength_2,
      credentials: credentials_3,
      ...(t.asLevel !== void 0 && {
        asLevel: t.asLevel
      })
    }, n);
  if (!y.ok) return y.result;
  if (y.status === 200) {
    if (op === "get") {
      let k = Ne().safeParse(y.data);
      if (!k.success) return m("artifact_db_read", "malformed_echo"), {
        kind: "error",
        code: "store_unavailable",
        message: "db read returned an unreadable response \u2014 try again",
        reason: "malformed_echo"
      };
      let E = y.levelConfirmed !== void 0 && {
        levelConfirmed: y.levelConfirmed
      };
      if (!k.data.exists) return p("artifact_db_read", "not_found"), {
        kind: "not_found",
        ...E
      };
      return _("artifact_db_read"), {
        kind: "ok",
        ...E,
        docs: [{
          id: docId_2 ?? "",
          data: k.data.data ?? {},
          ...(k.data.version !== void 0 && {
            version: k.data.version
          }),
          ...(k.data.updatedAt !== void 0 && {
            updatedAt: k.data.updatedAt
          })
        }],
        ...(k.data.version !== void 0 && {
          version: k.data.version
        }),
        ...(k.data.authoredByOthers && {
          authoredByOthers: !0
        }),
        ...(k.data.outside_writer !== void 0 && {
          outsideWriter: k.data.outside_writer
        })
      };
    }
    let v = Ue().safeParse(y.data);
    if (!v.success) return m("artifact_db_read", "malformed_echo"), {
      kind: "error",
      code: "store_unavailable",
      message: "db read returned an unreadable response \u2014 try again",
      reason: "malformed_echo"
    };
    return _("artifact_db_read"), {
      kind: "ok",
      ...(y.levelConfirmed !== void 0 && {
        levelConfirmed: y.levelConfirmed
      }),
      docs: v.data.docs,
      ...(v.data.nextCursor !== void 0 && v.data.nextCursor !== "" && {
        nextCursor: v.data.nextCursor
      }),
      ...(v.data.authoredByOthers && {
        authoredByOthers: !0
      }),
      ...(v.data.outside_writer !== void 0 && {
        outsideWriter: v.data.outside_writer
      })
    };
  }
  let {
      code: code_3,
      reason: reason_6,
      kind: kind_2,
      limit: limit_2
    } = j(y.status, y.data),
    S = code_3 === "not_found" && y.sessionScoped === !0;
  return m("artifact_db_read", S ? "not_found_session_scoped" : reason_6), {
    kind: "error",
    code: code_3,
    message: S ? nt : L(code_3, "read", kind_2, limit_2),
    reason: S ? "not_found_session_scoped" : reason_6
  };
}
function B(reason_7, message, n = "") {
  return m("artifact_db_write", `${n}${reason_7}`), {
    kind: "error",
    code: "invalid_argument",
    message: message,
    reason: reason_7
  };
}
async function Re(e, t, n = "") {
  let {
    collection: collection_2,
    docId: docId_3
  } = e;
  if (!regExp_2.test(collection_2) || !regExp.test(docId_3)) return {
    ok: !1,
    result: B("invalid_segment", 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)', n)
  };
  if (!Ett(collection_2)) return {
    ok: !1,
    result: B("parity", aXt(collection_2), n)
  };
  let c = ye(collection_2, docId_3);
  if (c !== null) {
    let i = await t();
    if (!i.ok) return i;
    ({
      collection: collection_2,
      docId: docId_3
    } = c(i.id));
  }
  let path_2 = `${collection_2}/${docId_3}`;
  if (path_2.length > CO) return {
    ok: !1,
    result: B("path_too_long", `the composed document path is ${path_2.length} bytes \u2014 the limit is ${CO}`, n)
  };
  return {
    ok: !0,
    path: path_2
  };
}
function Ae(e, path_3, data, l, ifVersion) {
  let c = ifVersion !== void 0 && {
    ifVersion: ifVersion
  };
  switch (e) {
    case "delete":
      return {
        path: path_3,
        ...c
      };
    case "set":
      return {
        path: path_3,
        data: data,
        replace: !0,
        ...c
      };
    case "update":
      return {
        path: path_3,
        data: data,
        ...c
      };
    case "str_replace":
      return {
        path: path_3,
        field: l?.field,
        old_str: l?.oldStr,
        new_str: l?.newStr,
        ...(l?.replaceAll === !0 && {
          replace_all: !0
        }),
        idem: l?.idem,
        ...c
      };
  }
}
async function Mao(host, t, n, l, s) {
  let {
    slug: slug_3,
    op: op_2,
    data: data_2,
    edit: edit
  } = t;
  if (!Bn.test(slug_3)) return B("invalid_slug", "not a valid artifact id");
  let r = await Re(t, () => re(host, "artifact_db_write", slug_3, n, l, s));
  if (!r.ok) return r.result;
  return ne(slug_3, op_2, r.path, data_2, n, s, t.asLevel, edit, t.ifVersion, t.requireVersion === !0 && op_2 !== "str_replace" ? {
    host: host,
    address: `${t.collection}/${t.docId}`
  } : void 0, t.requestId !== void 0 ? {
    host: host,
    id: t.requestId
  } : void 0);
}
async function ne(e, op_3, n, l, s, credentials_4, asLevel, i, pinned, r, requestId) {
  let R = r !== void 0 ? be.of(r.host) : void 0,
    h = R !== void 0 && !R.unsupported,
    y = await V("artifact_db_write", e, op_3, Ae(op_3, n, l, i, pinned), {
      timeout: 30000,
      ...(asLevel !== void 0 && {
        asLevel: asLevel
      }),
      ...(h && {
        requireVersion: !0
      }),
      ...(requestId !== void 0 && {
        requestId: requestId
      }),
      maxContentLength: maxContentLength,
      credentials: credentials_4
    }, s);
  if (!y.ok) return y.result;
  if (h && R !== void 0 && W(y.status, y.data)) {
    let k = await ne(e, op_3, n, l, s, credentials_4, asLevel, i, pinned, void 0, requestId);
    if (ot(k)) R.refusedAt = Date.now(), p("artifact_db_write", "require_version_unsupported");
    return k;
  }
  if (y.status === 200) {
    let k = y.levelConfirmed !== void 0 && {
        levelConfirmed: y.levelConfirmed
      },
      E = je().safeParse(y.data);
    if (!E.success) return p("artifact_db_write", "malformed_echo"), {
      kind: "ok",
      ...k
    };
    return _("artifact_db_write"), _e(y.data, E.data.usage), {
      kind: "ok",
      ...k,
      ...(E.data.version !== void 0 && {
        version: E.data.version
      }),
      ...(E.data.usage !== void 0 && {
        usage: E.data.usage
      })
    };
  }
  let {
    code: code_4,
    reason: reason_8,
    kind: kind_3,
    limit: limit_3,
    version: S,
    required: required
  } = j(y.status, y.data);
  return (te(code_4) ? p : m)("artifact_db_write", reason_8), {
    kind: "error",
    code: code_4,
    message: L(code_4, "write", kind_3, limit_3, i?.field, {
      pinned: pinned,
      current: S,
      op: op_3,
      required: required,
      path: r?.address
    }) + (Ee.has(code_4) ? P : "") + (code_4 === "invalid_argument" && (pinned !== void 0 || i?.replaceAll === !0) ? `. If this server does not yet accept \`${pinned !== void 0 ? "if_version" : "replace_all"}\`, that alone explains the refusal \u2014 nothing was written; retry without it only if an unconditional ${pinned !== void 0 ? "write" : "single replacement"} is acceptable here` : ""),
    reason: reason_8
  };
}
function ot(e) {
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
async function Dao(host_2, t, n, l, credentials_5) {
  let {
    slug: slug_4,
    ops: ops,
    asLevel: asLevel_2
  } = t;
  if (!Bn.test(slug_4)) return B("invalid_slug", "not a valid artifact id", "batch_");
  if (ops.length === 0 || ops.length > PP) return B("batch_size", `a batch takes 1-${PP} writes \u2014 ${ops.length} were given`, "batch_");
  let d,
    r = () => d ??= re(host_2, "artifact_db_write", slug_4, n, l, credentials_5),
    w = [],
    R = new Set();
  for (let [C, F] of ops.entries()) {
    let O = await Re(F, r, "batch_");
    if (!O.ok) return {
      ...O.result,
      message: `write ${C + 1} of ${ops.length}: ${O.result.message}`
    };
    if (R.has(O.path)) return B("duplicate_path", `write ${C + 1} of ${ops.length} addresses ${O.path}, which an earlier write in this batch already addresses \u2014 a batch writes each document at most once`, "batch_");
    R.add(O.path), w.push({
      op: F.op,
      path: O.path,
      ...(F.data !== void 0 && {
        data: F.data
      }),
      ...(F.ifVersion !== void 0 && {
        ifVersion: F.ifVersion
      })
    });
  }
  let pinned_2 = w.some(item => item.ifVersion !== void 0),
    args_2 = {
      ops: w.map(({
        op: op_4,
        path: path_4,
        data: data_3,
        ifVersion: ifVersion_2
      }) => ({
        op: op_4,
        ...Ae(op_4, path_4, data_3, void 0, ifVersion_2)
      }))
    },
    u;
  try {
    u = Buffer.byteLength(b({
      slug: slug_4,
      verb: "batch",
      args: args_2
    }), "utf8");
  } catch {
    return B("data_invalid", "every document in the batch must be a JSON-serializable object", "batch_");
  }
  if (u > cXt) return B("batch_too_large", `the batch serializes to ${u} bytes \u2014 the limit for one request is ${cXt}; split it into smaller batches`, "batch_");
  let g = Bmr.of(host_2),
    A = t.requireVersion === !0 ? host_2 : void 0,
    requestId_2 = t.requestId !== void 0 ? {
      host: host_2,
      id: t.requestId
    } : void 0;
  if (g.unsupported && !pinned_2) return se(slug_4, w, n, credentials_5, asLevel_2, A, requestId_2);
  let S = be.of(host_2),
    v = t.requireVersion === !0 && !S.unsupported,
    k = C => V("artifact_db_write", slug_4, "batch", args_2, {
      timeout: 60000,
      maxContentLength: maxContentLength,
      credentials: credentials_5,
      ...(asLevel_2 !== void 0 && {
        asLevel: asLevel_2
      }),
      ...(C && {
        requireVersion: !0
      }),
      ...(requestId_2 !== void 0 && {
        requestId: requestId_2
      })
    }, n),
    E = await k(v);
  if (!E.ok) return E.result;
  if (v && W(E.status, E.data)) {
    if (E = await k(!1), !E.ok) return E.result;
    S.refusedAt = Date.now(), p("artifact_db_write", "batch_require_version_unsupported");
  }
  if (asLevel_2 === void 0 && W(E.status, E.data)) return g.refusedAt = Date.now(), pinned_2 ? it() : se(slug_4, w, n, credentials_5, void 0, A, requestId_2);
  if (E.status === 200) {
    let C = E.levelConfirmed !== void 0 && {
        levelConfirmed: E.levelConfirmed
      },
      F = Ve().safeParse(E.data);
    if (!F.success || F.data.results.length !== ops.length) return p("artifact_db_write", "malformed_batch_echo"), {
      kind: "ok",
      ...C,
      results: ops.map(() => ({}))
    };
    return _("artifact_db_write"), _e(E.data, F.data.usage), {
      kind: "ok",
      ...C,
      results: F.data.results.map(item => item.version !== void 0 ? {
        version: item.version
      } : {}),
      ...(F.data.usage !== void 0 && {
        usage: F.data.usage
      })
    };
  }
  let {
    code: code_5,
    reason: reason_9,
    kind: kind_4,
    limit: limit_4,
    version: version,
    index: index,
    required: required_2
  } = j(E.status, E.data);
  (te(code_5) ? p : m)("artifact_db_write", `batch_${reason_9}`);
  let index_2 = index !== void 0 && index < w.length ? index : void 0;
  return {
    kind: "error",
    code: code_5,
    message: st(code_5, kind_4, limit_4, {
      pinned: pinned_2,
      stale: index_2 !== void 0 ? {
        index: index_2,
        path: `${ops[index_2].collection}/${ops[index_2].docId}`,
        op: ops[index_2].op,
        ifVersion: ops[index_2].ifVersion,
        total: ops.length
      } : void 0,
      version: version,
      required: required_2
    }),
    reason: reason_9
  };
}
function it() {
  return p("artifact_db_write", "batch_pinned_unsupported"), {
    kind: "error",
    code: "invalid_argument",
    reason: "batch_pinned_unsupported",
    message: `db batch write failed (${I("invalid_argument")}): this server does not take batch writes yet (nor, most likely, \`if_version\`), and a batch with \`if_version\` pins is never applied one write at a time \u2014 nothing was written. Resend it without the pins only if unconditional writes are acceptable here`
  };
}
function st(e, t, n, l) {
  if (e === "too_large") return `db batch write failed (${I(e)}): the batch body exceeds the server's 1 MiB request limit \u2014 nothing was written; split it into smaller write_db calls`;
  if (e === "version_mismatch" && l?.required === !0) {
    let o = `db batch write failed (${I(e)})`,
      i = "Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending",
      stale = l.stale;
    return stale !== void 0 ? `${o}: writes[${stale.index}] (write ${stale.index + 1} of ${stale.total}) targets ${stale.path}, which already exists, and carried no if_version \u2014 the whole batch wrote nothing. Read that document back, re-plan its ${stale.op === "delete" ? "delete (if it should still be deleted)" : "write on what it holds now"} with if_version set to the version the read returns, then resend the batch. ${"Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending"}` : `${o}: one of the writes targets a document that already exists and carried no if_version \u2014 the whole batch wrote nothing. Read the existing documents this batch writes, re-plan those entries on what they hold now with if_version set to the versions the reads return, then resend the batch`;
  }
  if (e === "version_mismatch") {
    let o = `db batch write failed (${I(e)}): the batch is atomic, so nothing was written \u2014 none of the writes applied`,
      i = l?.stale;
    if (i === void 0 || i.ifVersion === void 0) return `${o}. A document one of the writes was pinned to with if_version is no longer at that version (or no longer exists). Re-read the pinned documents, re-plan those writes against what they hold now with fresh pins, then resend the batch`;
    let d = `writes[${i.index}] (write ${i.index + 1} of ${i.total}, ${b(i.path)})`,
      r = "It is the first stale pin the server met; later pinned entries were not checked, so re-read any pinned document you are unsure of too, then resend the batch";
    return l?.version !== void 0 ? `${o}. ${d} was pinned to version ${i.ifVersion} and that document is now at version ${l.version}: read it back, re-plan its write against what it holds now and pin to that version. ${r}` : `${o}. ${d} was pinned to version ${i.ifVersion} and that document has changed or may have been deleted (the server named no current version): read it back \u2014 if it still exists, re-plan its write against what it holds now and pin to its version; if it is gone, drop that entry, or re-create it with a "set" entry and no if_version only if it should exist again. ${r}`;
  }
  let s = L(e, "batch write", t, n),
    c = e === "invalid_argument" && l?.pinned === !0 ? ". If this server does not yet accept `if_version` on batch writes, that alone explains the refusal \u2014 resend without the pins only if unconditional writes are acceptable here" : "";
  return IOn(e) ? `${s}; the batch is atomic, so nothing was written${c}` : `${s}; the batch's outcome is unknown \u2014 it applies all-or-nothing and may have committed; read back before retrying`;
}
function IOn(e) {
  return e !== "store_unavailable";
}
async function se(e, t, n, l, s, host_3, o) {
  p("artifact_db_write", "batch_fallback_sequential");
  let results = [],
    usage,
    levelConfirmed,
    w = h => s !== void 0 && h > 0 && levelConfirmed !== !0 ? ` (as_level '${s}' unconfirmed for them \u2014 they may have run at your own level)` : "",
    R = "this server does not take batch writes yet, so the batch was applied one write at a time and is NOT atomic";
  for (let [failedIndex, {
    op: op_5,
    path: u,
    data: data_4
  }] of t.entries()) {
    let A = `${failedIndex} ${failedIndex === 1 ? "entry" : "entries"} before it already committed`,
      D = t.length - failedIndex - 1,
      S = k => ({
        kind: "error",
        code: "store_unavailable",
        reason: "batch_fallback_aborted",
        message: `${R}: interrupted at writes[${failedIndex}] (write ${failedIndex + 1} of ${t.length}). The ${A}${w(failedIndex)}; writes[${failedIndex}] itself ${k ? "may or may not have applied" : "did not run"}; the ${D} after it did not run.`,
        fallback: "sequential",
        results: results,
        failedIndex: failedIndex
      });
    if (n.aborted) return S(!1);
    let v;
    try {
      v = await ne(e, op_5, u, data_4, n, l, s, void 0, void 0, host_3 && {
        host: host_3,
        address: u
      }, o);
    } catch (error) {
      if (Fa(error)) return S(!0);
      if (error instanceof H) return S(!1);
      throw error;
    }
    if (v.kind === "error") return {
      kind: "error",
      code: v.code,
      reason: v.reason,
      message: `${R}: writes[${failedIndex}] (write ${failedIndex + 1} of ${t.length}) failed \u2014 ${v.message.replace(P, `; writes[${failedIndex}] was not applied`)}. The ${A}${w(failedIndex)}; the ${D} after it did not run.`,
      fallback: "sequential",
      results: results,
      failedIndex: failedIndex
    };
    if (results.push(v.version !== void 0 ? {
      version: v.version
    } : {}), usage = v.usage ?? (op_5 === "delete" ? void 0 : usage), v.levelConfirmed !== void 0) levelConfirmed = (levelConfirmed ?? !0) && v.levelConfirmed;
  }
  return {
    kind: "ok",
    results: results,
    ...(usage !== void 0 && {
      usage: usage
    }),
    fallback: "sequential",
    ...(levelConfirmed !== void 0 && {
      levelConfirmed: levelConfirmed
    })
  };
}
export { Rse, Qpe, regExp as x4, regExp_2 as m8, Ett, aXt, CO, $0e, H7, J_, kTt, Aao, Zpe, lXt, AG, Q2e, ETt, Umr, PP, cXt, xao, Pao, Bmr, Iao, jmr, Oao, dXt, Mao, Dao, IOn };