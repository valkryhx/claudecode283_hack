// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ke } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ba, Ote, mMe, Mht, E, Yk } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { is } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Ua } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { ar } from "B:/~BUN/root/chunk-qp0344nb.js";
import { xke, Hh, Pin } from "B:/~BUN/root/chunk-gt1x0gdb.js";
import { fMn, mMn, vfr, gMn, r8t } from "B:/~BUN/root/chunk-bb0js010.js";
import { Dz, qF, SMn, OR, Oc } from "B:/~BUN/root/chunk-neajqqs3.js";
import { lu, Dve } from "B:/~BUN/root/chunk-p64g0hj8.js";
import { ge, mn, Vo, MFo, ec, sr, St, hg, Fp } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { ijt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { randomBytes as Me } from "crypto";
function jbe() {
  return a.CLAUDE_CODE_ARTIFACT_DB ?? !0;
}
function TAe() {
  return jbe() && (a.CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE ?? E("tengu_umber_stile", !1)) === !0;
}
var ue = "/api/frame/db/agent",
  Te = 5000;
class N extends Ke {}
var Q = String.raw`(?!\.\.?(?:/|$))[A-Za-z0-9_\-.~:@+]{1,200}`,
  regExp = new RegExp(`^${Q}$`),
  regExp_2 = new RegExp(`^${Q}(?:/${Q}){0,14}$`);
function $Rt(e) {
  return ($t(e, "/") + 1) % 2 === 1;
}
function TIn(e) {
  let t = i => i.length > 120 ? `${i.slice(0, 60)}\u2026${i.slice(-40)}` : i,
    r = e.split("/"),
    c = r.length,
    s = t(r.slice(0, -1).join("/")),
    l = t(r[c - 1]);
  return `collection '${t(e)}' has ${c} segments, which makes it a document path, not a collection: collection paths have an odd number of segments (collection/document/collection/\u2026) and the document is collection + doc_id. For that document use collection '${s}' with doc_id '${l}'; for a collection inside it, add one more segment. Per-user data follows the same rule \u2014 collection 'data/users/<id>' (3 segments) holds that user's documents, so 'data/users/<id>/decks' is one document and 'data/users/<id>/decks/cards' a collection.`;
}
var WF = 1000,
  v4e = ["get", "list", "query"],
  pue = ["set", "update", "delete"],
  zw = "str_replace",
  Ht = [...pue, zw],
  _5t = ["view", "interact", "admin"];
function eds() {
  return Me(16).toString("base64url");
}
var CAe = 200,
  CIn = /^(?!__.*__$)[^\p{Cc}\p{Cf}\p{Zl}\p{Zp}"\\./[\]]{1,200}$/u,
  WY = 262144,
  Yst = 4 * WY,
  maxContentLength_2 = 4194304,
  maxContentLength = 16384,
  b5t = 1000,
  Vro = 100,
  jL = 50,
  RIn = 1048576,
  le = ["edit_no_match", "edit_ambiguous", "edit_field_missing", "edit_field_not_string", "version_mismatch"];
function ne(e) {
  return le.some(item => item === e);
}
var Pe = new Map([["not_found", "not_found"], ["invalid_argument", "invalid_argument"], ["quota_or_rate", "quota_or_rate"], ["busy", "busy"], ["upstream_auth", "upstream_auth"], ["store_unavailable", "store_unavailable"], ["not_declared", "not_declared"], ["too_large", "too_large"], ["quota_exceeded", "quota_exceeded"], ["invalid-argument", "invalid_argument"], ["not-found", "not_found"], ["resource-exhausted", "quota_or_rate"], ["resource_exhausted", "quota_or_rate"], ["data-unavailable", "store_unavailable"], ["unavailable", "store_unavailable"], ["upstream-error", "store_unavailable"], ...le.map(item => [item, item])]),
  We = new Set(["an OAuth access token is required", "a directly presented OAuth access token is required", "db verbs require a user-scoped OAuth token, not an org service key"]);
function He(e, t) {
  if (e !== 403 || typeof t !== "string") return;
  let r = t.trim();
  if (We.has(r)) return {
    code: "credential_rejected",
    reason: "custody_403"
  };
  if (r.startsWith(Dz)) return {
    code: "cloud_unavailable",
    reason: "ccr_credential_refused"
  };
  return;
}
function Ne(e) {
  if (e === 404 || e === 403) return "not_found";
  if (e === 400 || e === 422) return "invalid_argument";
  if (e === 413) return "too_large";
  if (e === 429) return "quota_or_rate";
  if (e === 409 || e === 412) return "busy";
  if (e === 401) return "upstream_auth";
  return "store_unavailable";
}
function O(e) {
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
var tds = ["eq", "ne", "in", "not-in", "lt", "lte", "gt", "gte", "array-contains"],
  nds = ["==", "!=", "<", "<=", ">", ">="],
  ce = {
    "==": "eq",
    "!=": "ne",
    "<": "lt",
    "<=": "lte",
    ">": "gt",
    ">=": "gte"
  };
function je(e) {
  return Object.hasOwn(ce, e);
}
function Ue(e) {
  return je(e) ? ce[e] : e;
}
var fe = f(() => Fp(!0).optional().catch(void 0)),
  me = f(() => Vo().optional().catch(void 0)),
  Ve = f(() => St({
    exists: Vo(),
    data: hg(ge(), ec()).optional(),
    version: mn().int().optional(),
    updatedAt: ge().optional(),
    authoredByOthers: fe(),
    outside_writer: me()
  })),
  ze = f(() => St({
    docs: sr(St({
      id: ge(),
      data: hg(ge(), ec()),
      version: mn().int().optional(),
      updatedAt: ge().optional()
    })),
    nextCursor: ge().optional(),
    authoredByOthers: fe(),
    outside_writer: me()
  })),
  he = f(() => St({
    documents: mn().int().safe().nonnegative(),
    maxDocuments: mn().int().safe().positive()
  }).optional().catch(void 0));
function _e(e, t) {
  if (t === void 0 && typeof e === "object" && e !== null && e.usage !== void 0) p("artifact_db_write", "malformed_usage");
}
var be = 4,
  Ge = 600;
function pe(e) {
  let t = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(t)) return [];
  let r = [];
  for (let c of t) {
    if (r.length >= be) break;
    if (typeof c !== "string") continue;
    let s = Pin(c, Ge);
    if (s !== void 0) r.push(s);
  }
  return r;
}
var Xe = f(() => St({
    version: mn().int().optional(),
    usage: he()
  })),
  Ye = f(() => St({
    results: sr(St({
      version: mn().int().optional()
    })),
    usage: he()
  })),
  Je = f(() => St({
    error: St({
      code: Fp("invalid_argument"),
      message: Fp("invalid argument"),
      verb: MFo().optional()
    })
  }));
function j(e, t) {
  return e === 400 && Je().safeParse(t).success;
}
class K {
  refusedAt = void 0;
  get unsupported() {
    return this.refusedAt !== void 0 && Date.now() - this.refusedAt < Ze;
  }
}
var Ze = 3600000,
  qro = new z(() => new K()),
  we = new z(() => new K()),
  Qe = new z(() => new K());
function et(e, t) {
  if (!j(e, t)) return !1;
  let {
    reason: reason
  } = t.error;
  return reason === void 0 || reason === "bad_json";
}
var tt = f(() => St({
    error: St({
      code: ge().optional(),
      reason: ec().optional(),
      kind: ec().optional(),
      limit: ec().optional(),
      version: ec().optional(),
      index: ec().optional(),
      required: ec().optional()
    }).optional()
  })),
  ve = new Set(["docs_per_collection", "docs_per_database", "databases_per_org"]);
function rds(e) {
  return ve.has(e);
}
var rt = {
  quota_exceeded: new Set([...ve, "bytes_per_database"]),
  quota_or_rate: new Set(["active_leases", "rate_limited", "write_capacity", "scan_budget", "response_budget"])
};
function nt(e, t) {
  let r = rt[e];
  return r !== void 0 && r.has(t);
}
function ie(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 ? e : void 0;
}
function at(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0 ? e : void 0;
}
var ot = /^[a-z][a-z_-]{0,63}$/;
function V(e, t) {
  let r = He(e, t);
  if (r !== void 0) return r;
  let c = tt().safeParse(t),
    s = c.success ? c.data.error : void 0,
    l = s?.code,
    code = l !== void 0 ? Pe.get(l) : void 0;
  if (l !== void 0 && code !== void 0) {
    let d = s?.kind;
    if (nt(code, d)) return {
      code: code,
      reason: d,
      kind: d,
      limit: ie(s?.limit)
    };
    let h = code === "version_mismatch" && s?.required === !0,
      serverReason = typeof s?.reason === "string" && ot.test(s.reason) ? s.reason : void 0;
    return {
      code: code,
      reason: h ? "version_required" : l.replace(/-/g, "_"),
      ...(ne(code) && {
        version: ie(s?.version),
        index: at(s?.index),
        ...(h && {
          required: !0
        })
      }),
      ...(serverReason !== void 0 && {
        serverReason: serverReason
      })
    };
  }
  let n = Ne(e);
  return {
    code: n,
    reason: n
  };
}
var ods = [`db write failed (${O("version_mismatch")}): `, `db batch write failed (${O("version_mismatch")}): `],
  Kro = {
    write: "Not saved: Claude needs to read the latest version of this document before changing it.",
    delete: "Not deleted: Claude needs to read the latest version of this document before deleting it."
  };
function W(e, t, r, c, s, l, i) {
  let n = `field '${s ?? "?"}'`,
    d = l?.current !== void 0 ? ` The document is at version ${l.current}.` : "",
    h = l?.pinned !== void 0 && l.current === l.pinned,
    u = `db ${t} failed (${O(e)})`;
  switch (e) {
    case "not_found":
      return `${u}: no such artifact, collection, or document (or no access \u2014 the two are deliberately indistinguishable)`;
    case "invalid_argument":
      return `${u}: the server could not accept the request as shaped${i !== void 0 ? ` (reason: ${i})` : ""}`;
    case "too_large":
      return `${u}: the request body exceeds the server's size limit \u2014 send less per call`;
    case "quota_or_rate":
      return `${u}: ${se(r, c) ?? "over a rate or storage limit \u2014 retry later or write less"}`;
    case "quota_exceeded":
      return `${u}: ${se(r, c) ?? "a storage limit on this artifact's database has been reached \u2014 delete documents; retrying won't help"}`;
    case "busy":
      return `${u}: lost to a concurrent change \u2014 re-read and retry deliberately`;
    case "upstream_auth":
      return `${u}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "store_unavailable":
      return `${u}: the store is unavailable right now \u2014 try again`;
    case "not_declared":
      return `${u}: this artifact's current published version does not declare the database capability \u2014 republish it with the db capability declared, then retry`;
    case "credential_rejected":
      return `${u}: the server refused this session's credential at the artifact-db door \u2014 not an artifact-access or existence answer; report this as a client/server integration fault`;
    case "cloud_unavailable":
      return `${u}: reading and editing artifact data isn't available in this cloud session right now; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it`;
    case "network_off":
      return t === "read" ? `${u}: this cloud session's network access is turned off (or could not be confirmed), so it cannot read artifact data${qF() ? "" : " \u2014 writes still work"}; do not retry the read here` : `${u}: this cloud session's network access is turned off (or could not be confirmed), and the gateway did not accept this call as a write it allows \u2014 do not retry it here`;
    case "edit_no_match":
      return h ? `${u}: old_str does not occur in ${n} of that document, so nothing was written by this call. The document is still at version ${l?.current}, the one this edit was pinned to, so nothing changed under you: old_str itself does not match the stored text \u2014 copy it exactly as it appears in the field's value (the decoded string, not JSON-escaped source)` : `${u}: old_str does not occur in ${n} of that document, so nothing was written by this call.${d} Copy the text exactly as it appears in the field's value (the decoded string, not JSON-escaped source). If you were retrying after a call whose outcome you did not see, that earlier call may already have applied \u2014 read the document back before trying again. If someone else changed that text, re-read and re-plan the edit`;
    case "edit_ambiguous":
      return `${u}: old_str occurs more than once in ${n} of that document; nothing was written.${d} Include more surrounding text so it is unique, or pass replace_all to change every occurrence`;
    case "edit_field_missing":
      return `${u}: the document has no top-level ${n}; nothing was written.${d} str_replace edits an existing top-level string field \u2014 read the document to see its fields, or use update to add one`;
    case "edit_field_not_string":
      return `${u}: ${n} is not a string (str_replace edits top-level string fields only); nothing was written \u2014 use update for structured fields.${d}`;
    case "version_mismatch":
      if (l?.required === !0) {
        let k = l.path ?? "that document",
          y = "Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns";
        switch (l.op) {
          case "delete":
            return `${u}: ${k} is an existing document and this delete carried no if_version \u2014 nothing was deleted. Read it back and, if it should still be deleted, resend the delete with if_version set to the version that read returns`;
          case "update":
            return `${u}: ${k} is an existing document and this update carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
          default:
            return `${u}: ${k} already exists and this write carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
        }
      }
      return l?.current !== void 0 ? `${u}: the document is no longer at version ${l.pinned ?? "?"}, the one this write was pinned to \u2014 it is now at version ${l.current}; nothing was written. Read it back, re-plan the write against what it holds now, and pin to that version` : `${u}: the document is no longer at version ${l?.pinned ?? "?"}, the one this write was pinned to \u2014 it has changed or may have been deleted; nothing was written. Read it back: if it still exists, re-plan the write against what it holds now and pin to its version; if it is gone, ${l?.op === "delete" ? "a delete has nothing left to do" : 're-create it with a "set" and no if_version only if it should exist again'}`;
  }
}
function se(e, t) {
  let r = t === void 0 ? "document limit" : `limit of ${t} documents`,
    c = t === void 0 ? "storage limit" : `storage limit of ${ijt(t)}`;
  switch (e) {
    case "docs_per_collection":
      return `this collection has reached its ${r} \u2014 delete documents; retrying won't help`;
    case "docs_per_database":
      return `this artifact's database has reached its ${r} \u2014 delete documents before adding more; retrying won't help`;
    case "bytes_per_database":
      return `this artifact's database has reached its ${c} (the total size of its documents, not their count) \u2014 delete documents or make them smaller; a write that makes an existing document larger can be refused too, and retrying won't help`;
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
var J = "data/users/me",
  ye = "whoami",
  it = f(() => St({
    id: ge().min(1)
  }));
function ke(e, t) {
  return `${e}:${t}`;
}
function U() {
  return SMn("POST", ue, "bound") === "relay";
}
async function st(e, t) {
  if (U()) return null;
  let r = (await xke(t))?.accountUuid;
  return r ? ke(r, e) : null;
}
async function ee(e, t, r) {
  let c = await Yk(r);
  return c?.accountUuid !== void 0 && ke(c.accountUuid, e) === t;
}
function te() {
  let Authorization = Ote().headers.Authorization;
  return Authorization === void 0 ? null : mMe(Authorization);
}
async function Re(credentials) {
  if (!Mht()) return;
  for (let t = 0; t < 2; t++) try {
    await ba({
      credentials: credentials
    });
  } catch {}
}
function sds(e) {
  let {
    resolvedMeIds: resolvedMeIds,
    inFlightMeIds: inFlightMeIds
  } = Ae.of(e);
  resolvedMeIds.clear(), inFlightMeIds.clear();
}
function $e(e, docId) {
  if (e === J || e.startsWith(J + "/")) return r => ({
    collection: "data/users/" + r + e.slice(J.length),
    docId: docId
  });
  return null;
}
var P = Symbol("contested-me-key");
class Ee {
  resolvedMeIds = new Map();
  inFlightMeIds = new Map();
}
var Ae = new z(() => new Ee());
function De(e, t, r, c, s) {
  if (t === "malformed_whoami_echo") return `db ${r} failed (unavailable): resolving 'me' returned an unreadable response \u2014 the artifact db service may need an update`;
  if (e === "not_declared") return `db ${r} failed (${O(e)}): resolving 'me' needs this artifact's published version to declare the db and user capabilities \u2014 republish with both declared, then retry`;
  return W(e, r, c, s) + (r === "write" && Fe.has(e) ? L : "");
}
var L = "; nothing was written",
  Fe = new Set(["too_large", "credential_rejected", "cloud_unavailable", "network_off"]);
async function ae(e, t, r, c, s, l) {
  let i = Ae.of(e),
    {
      resolvedMeIds: resolvedMeIds_2,
      inFlightMeIds: inFlightMeIds_2
    } = i,
    h = await st(r, l),
    u = null;
  if (h !== null && (resolvedMeIds_2.has(h) || inFlightMeIds_2.has(h))) {
    if (await ee(r, h, s)) {
      if (resolvedMeIds_2.has(h)) await Re(l);
      u = h;
    }
  }
  let k = u === null ? void 0 : resolvedMeIds_2.get(u);
  if (u !== null && k !== void 0 && !U()) {
    if (k.fingerprint === te()) return {
      ok: !0,
      id: k.id
    };
    if (resolvedMeIds_2.get(u) === k) resolvedMeIds_2.delete(u);
  }
  let y;
  if (h === null) y = await Z(i, t, r, c, h, s, l);else {
    let o = u === null ? void 0 : inFlightMeIds_2.get(u);
    if (!o) o = (async () => {
      if (!(await ee(r, h, s))) return p(t, "contested_me_key"), P;
      return Z(i, t, r, c, h, s, l);
    })(), inFlightMeIds_2.set(h, o), o.finally(() => {
      if (inFlightMeIds_2.get(h) === o) inFlightMeIds_2.delete(h);
    }).catch(() => {});
    let w = await o;
    y = w === P ? await Z(i, t, r, c, null, s, l) : w;
  }
  if (y.ok) return y;
  if ("composed" in y) return {
    ok: !1,
    result: y.composed
  };
  let v = t === "artifact_db_read" ? "read" : "write";
  return m(t, y.reason), {
    ok: !1,
    result: {
      kind: "error",
      code: y.code,
      message: De(y.code, y.reason, v, y.kind, y.limit),
      reason: y.reason
    }
  };
}
async function Z(e, t, r, c, s, l, credentials_2) {
  let fingerprint = null;
  if (s !== null) {
    if (await Re(credentials_2), fingerprint = te(), fingerprint === null || U()) return P;
  }
  let d = await G(t, r, ye, {}, {
    timeout: 15000,
    maxContentLength: maxContentLength,
    credentials: credentials_2,
    reportSentAuth: s !== null
  }, c);
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
    } = V(d.status, d.data);
    return {
      ok: !1,
      code: code_2,
      reason: `whoami_${reason_2}`,
      kind: kind,
      limit: limit
    };
  }
  let h = it().safeParse(d.data);
  if (!h.success || !regExp.test(h.data.id)) return {
    ok: !1,
    code: "store_unavailable",
    reason: "malformed_whoami_echo"
  };
  if (s !== null) {
    if (fingerprint === null || fingerprint !== d.sentAuthFingerprint || fingerprint !== te() || !(await ee(r, s, l))) return p(t, "auth_unstable_me_key"), P;
    if (U()) return P;
    e.resolvedMeIds.set(s, {
      id: h.data.id,
      fingerprint: fingerprint
    });
  }
  return {
    ok: !0,
    id: h.data.id
  };
}
async function G(e, slug, verb, args, s, signal) {
  let i = verb === "batch" ? "batch_" : "",
    n = verb === ye,
    d = e === "artifact_db_read" ? "read" : "write",
    h = s.requestId !== void 0 ? Qe.of(s.requestId.host) : void 0,
    u = {
      slug: slug,
      verb: verb,
      args: args,
      ...(s.asLevel !== void 0 && {
        asLevel: s.asLevel
      }),
      ...(s.requireVersion === !0 && {
        requireVersion: !0
      }),
      ...(e === "artifact_db_write" && !n && fMn()),
      ...(e === "artifact_db_write" && !n && s.requestId !== void 0 && h !== void 0 && !h.unsupported && Dve(s.requestId.id))
    },
    k = () => Oc.postRelayBound(ue, u, {
      refreshOAuth: !0,
      credentials: s.credentials,
      headers: lu(),
      timeout: s.timeout,
      maxContentLength: s.maxContentLength,
      signal: signal,
      reportSentAuth: s.reportSentAuth
    }),
    y = !1,
    v = async () => {
      let w = await k();
      if (w.ok && w.gatewayRetryAfterMs !== void 0 && !y) {
        if (y = !0, await Y(Math.min(w.gatewayRetryAfterMs, Te), signal, {
          abortError: () => new N()
        }), w = await k(), w.ok && w.route === "relay" && w.fromFrame) p(e, `${i}${n ? "whoami_" : ""}relay_busy_recovered`);
      }
      return w;
    },
    o;
  try {
    o = await v();
    let w = o.ok && o.fromFrame ? gMn(o.status, o.data, u) : [];
    if (w.length > 0) {
      if (w.includes("request_id") && h !== void 0) p(e, `${i}request_id_rejected`), h.refusedAt = Date.now();
      if (r8t(w)) p(e, `${i}session_hints_rejected`), mMn();
      u = is(u, r8t(w) ? vfr : w), o = await v();
    }
    if (h !== void 0 && u.request_id !== void 0 && o.ok && o.fromFrame && et(o.status, o.data)) {
      let {
        request_id: request_id,
        ...S
      } = u;
      if (u = S, o = await v(), o.ok && o.fromFrame && o.status >= 200 && o.status < 300) h.refusedAt = Date.now(), p(e, `${i}request_id_unsupported`);
    }
  } catch (error) {
    if (Ua(error) || error instanceof N) throw error;
    let D = e !== "artifact_db_read" && !n && OR(error);
    return m(e, `${i}${D ? "relay_request_error" : "request_error"}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: D ? "db write outcome unknown (relay request failed) \u2014 it may have applied; read back before retrying" : `db ${d} failed (network error)`,
        reason: D ? "relay_request_error" : "request_error"
      }
    };
  }
  if (!o.ok) {
    if (o.reason === "relay-unavailable" || o.reason === "relay-not-served") {
      let reason_3 = `${n ? "whoami_" : ""}${o.reason.replace(/-/g, "_")}`;
      return m(e, `${i}${reason_3}`, {
        status: o.status
      }), {
        ok: !1,
        result: {
          kind: "error",
          code: "store_unavailable",
          message: `db ${d} failed (${O("store_unavailable")}): ${n ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection did not carry the request${o.status ? ` (HTTP ${o.status})` : ""}, so nothing ran; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it${d === "write" ? L : ""}`,
          reason: reason_3
        }
      };
    }
    return m(e, `${i}${o.reason.replace(/-/g, "_")}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: o.reason === "no-auth" ? Hh(o.detail) : `db ${d} unavailable: ${o.reason}`,
        reason: "transport"
      }
    };
  }
  if (o.gatewayPolicy === "network-off") {
    let reason_4 = n ? "whoami_network_off" : "network_off";
    return p(e, `${i}${reason_4}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "network_off",
        message: n ? De("network_off", reason_4, d) : W("network_off", d) + (d === "write" ? L : ""),
        reason: reason_4
      }
    };
  }
  if (o.gatewayRetryAfterMs !== void 0) {
    let reason_5 = `${n ? "whoami_" : ""}relay_busy_retried`,
      D = verb === zw;
    return m(e, `${i}${reason_5}`, {
      status: o.status
    }), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: `db ${d} failed (${O("store_unavailable")}): ${n ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection was temporarily unavailable (HTTP ${o.status}, after one retry); ${D ? "the edit may or may not have applied \u2014 read it back before retrying" : `this is transient and nothing ran \u2014 retry shortly${d === "write" ? L : ""}`}`,
        reason: reason_5
      }
    };
  }
  if (!o.fromFrame) return m(e, `${i}${n ? "whoami_relay_error" : "relay_error"}`, {
    status: o.status
  }), {
    ok: !1,
    result: {
      kind: "error",
      code: "store_unavailable",
      message: n ? `db ${d} failed: resolving 'me' failed (relay HTTP ${o.status}) \u2014 try again` : e === "artifact_db_read" ? `db read failed (relay HTTP ${o.status}) \u2014 try again` : `db write outcome unknown (relay HTTP ${o.status}) \u2014 it may have applied; read back before retrying`,
      reason: n ? "whoami_relay_error" : "relay_error"
    }
  };
  return {
    ok: !0,
    status: o.status,
    data: o.data,
    sentAuthFingerprint: o.sentAuthFingerprint,
    ...(o.route === "relay" && o.response.headers?.[dt] === "session" && {
      sessionScoped: !0
    }),
    ...(s.asLevel !== void 0 && {
      levelConfirmed: lt(o.data) === s.asLevel
    })
  };
}
var dt = "x-frame-relay-read-scope-applied",
  ut = `db read failed (${O("not_found")}): nothing this session can read at that address \u2014 with the organization's cloud network access turned off, this session can read the data only of artifacts it published itself (or there is no such artifact, collection, or document); do not retry the read here`;
function lt(e) {
  if (e === null || typeof e !== "object") return;
  let t = Reflect.get(e, "asLevel");
  if (typeof t === "string") return t;
  let r = Reflect.get(e, "error"),
    c = r !== null && typeof r === "object" ? Reflect.get(r, "asLevel") : void 0;
  return typeof c === "string" ? c : void 0;
}
async function AIn(e, t, r, c, credentials_3) {
  let {
      slug: slug_2,
      op: op,
      query: query
    } = t,
    {
      collection: collection,
      docId: docId_2
    } = t;
  if (!ar.test(slug_2)) return m("artifact_db_read", "invalid_slug"), {
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
  if (!$Rt(collection)) return m("artifact_db_read", "parity"), {
    kind: "error",
    code: "invalid_argument",
    message: TIn(collection),
    reason: "parity"
  };
  if (op === "get" && docId_2 === void 0) return m("artifact_db_read", "missing_doc_id"), {
    kind: "error",
    code: "invalid_argument",
    message: "doc_id is required for a get",
    reason: "missing_doc_id"
  };
  let u = $e(collection, docId_2),
    meId;
  if (u !== null) {
    let b = await ae(e, "artifact_db_read", slug_2, r, c, credentials_3);
    if (!b.ok) return b.result;
    meId = b.id, {
      collection: collection,
      docId: docId_2
    } = u(b.id);
  }
  let path = docId_2 !== void 0 ? `${collection}/${docId_2}` : collection;
  if (path.length > WF) return m("artifact_db_read", "path_too_long"), {
    kind: "error",
    code: "invalid_argument",
    message: `the composed document path is ${path.length} bytes \u2014 the limit is ${WF}`,
    reason: "path_too_long"
  };
  let v = op === "get" ? {
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
        where: query.where.map(([field, R, value]) => ({
          field: field,
          op: Ue(R),
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
    o = await G("artifact_db_read", slug_2, op, v, {
      timeout: 15000,
      maxContentLength: maxContentLength_2,
      credentials: credentials_3,
      ...(t.asLevel !== void 0 && {
        asLevel: t.asLevel
      })
    }, r);
  if (!o.ok) return o.result;
  if (o.status === 200) {
    if (op === "get") {
      let R = Ve().safeParse(o.data);
      if (!R.success) return m("artifact_db_read", "malformed_echo"), {
        kind: "error",
        code: "store_unavailable",
        message: "db read returned an unreadable response \u2014 try again",
        reason: "malformed_echo"
      };
      let B = {
        ...(o.levelConfirmed !== void 0 && {
          levelConfirmed: o.levelConfirmed
        }),
        ...(meId !== void 0 && {
          meId: meId
        })
      };
      if (!R.data.exists) return p("artifact_db_read", "not_found"), {
        kind: "not_found",
        ...B
      };
      return g("artifact_db_read"), {
        kind: "ok",
        ...B,
        docs: [{
          id: docId_2 ?? "",
          data: R.data.data ?? {},
          ...(R.data.version !== void 0 && {
            version: R.data.version
          }),
          ...(R.data.updatedAt !== void 0 && {
            updatedAt: R.data.updatedAt
          })
        }],
        ...(R.data.version !== void 0 && {
          version: R.data.version
        }),
        ...(R.data.authoredByOthers && {
          authoredByOthers: !0
        }),
        ...(R.data.outside_writer !== void 0 && {
          outsideWriter: R.data.outside_writer
        })
      };
    }
    let b = ze().safeParse(o.data);
    if (!b.success) return m("artifact_db_read", "malformed_echo"), {
      kind: "error",
      code: "store_unavailable",
      message: "db read returned an unreadable response \u2014 try again",
      reason: "malformed_echo"
    };
    return g("artifact_db_read"), {
      kind: "ok",
      ...(o.levelConfirmed !== void 0 && {
        levelConfirmed: o.levelConfirmed
      }),
      ...(meId !== void 0 && {
        meId: meId
      }),
      docs: b.data.docs,
      ...(b.data.nextCursor !== void 0 && b.data.nextCursor !== "" && {
        nextCursor: b.data.nextCursor
      }),
      ...(b.data.authoredByOthers && {
        authoredByOthers: !0
      }),
      ...(b.data.outside_writer !== void 0 && {
        outsideWriter: b.data.outside_writer
      })
    };
  }
  let {
      code: code_3,
      reason: reason_6,
      kind: kind_2,
      limit: limit_2,
      serverReason: serverReason_2
    } = V(o.status, o.data),
    A = code_3 === "not_found" && o.sessionScoped === !0;
  return m("artifact_db_read", A ? "not_found_session_scoped" : reason_6), {
    kind: "error",
    code: code_3,
    ...(o.levelConfirmed !== void 0 && {
      levelConfirmed: o.levelConfirmed
    }),
    message: A ? ut : W(code_3, "read", kind_2, limit_2, void 0, void 0, serverReason_2),
    reason: A ? "not_found_session_scoped" : reason_6
  };
}
function M(reason_7, message, r = "") {
  return m("artifact_db_write", `${r}${reason_7}`), {
    kind: "error",
    code: "invalid_argument",
    message: message,
    reason: reason_7
  };
}
async function Se(e, t, r = "") {
  let {
    collection: collection_2,
    docId: docId_3
  } = e;
  if (!regExp_2.test(collection_2) || !regExp.test(docId_3)) return {
    ok: !1,
    result: M("invalid_segment", 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)', r)
  };
  if (!$Rt(collection_2)) return {
    ok: !1,
    result: M("parity", TIn(collection_2), r)
  };
  let l = $e(collection_2, docId_3);
  if (l !== null) {
    let n = await t();
    if (!n.ok) return n;
    ({
      collection: collection_2,
      docId: docId_3
    } = l(n.id));
  }
  let path_2 = `${collection_2}/${docId_3}`;
  if (path_2.length > WF) return {
    ok: !1,
    result: M("path_too_long", `the composed document path is ${path_2.length} bytes \u2014 the limit is ${WF}`, r)
  };
  return {
    ok: !0,
    path: path_2
  };
}
function xe(e, path_3, data, c, ifVersion) {
  let l = ifVersion !== void 0 && {
    ifVersion: ifVersion
  };
  switch (e) {
    case "delete":
      return {
        path: path_3,
        ...l
      };
    case "set":
      return {
        path: path_3,
        data: data,
        replace: !0,
        ...l
      };
    case "update":
      return {
        path: path_3,
        data: data,
        ...l
      };
    case "str_replace":
      return {
        path: path_3,
        field: c?.field,
        old_str: c?.oldStr,
        new_str: c?.newStr,
        ...(c?.replaceAll === !0 && {
          replace_all: !0
        }),
        idem: c?.idem,
        ...l
      };
  }
}
async function ids(host, t, r, c, s) {
  let {
    slug: slug_3,
    op: op_2,
    data: data_2,
    edit: edit
  } = t;
  if (!ar.test(slug_3)) return M("invalid_slug", "not a valid artifact id");
  let h = await Se(t, () => ae(host, "artifact_db_write", slug_3, r, c, s));
  if (!h.ok) return h.result;
  return oe(slug_3, op_2, h.path, data_2, r, s, t.asLevel, edit, t.ifVersion, t.requireVersion === !0 && op_2 !== "str_replace" ? {
    host: host,
    address: `${t.collection}/${t.docId}`
  } : void 0, t.requestId !== void 0 ? {
    host: host,
    id: t.requestId
  } : void 0);
}
async function oe(e, op_3, r, c, s, credentials_4, asLevel, n, pinned, h, requestId) {
  let k = h !== void 0 ? we.of(h.host) : void 0,
    y = k !== void 0 && !k.unsupported,
    v = await G("artifact_db_write", e, op_3, xe(op_3, r, c, n, pinned), {
      timeout: 30000,
      ...(asLevel !== void 0 && {
        asLevel: asLevel
      }),
      ...(y && {
        requireVersion: !0
      }),
      ...(requestId !== void 0 && {
        requestId: requestId
      }),
      maxContentLength: maxContentLength,
      credentials: credentials_4
    }, s);
  if (!v.ok) return v.result;
  if (y && k !== void 0 && j(v.status, v.data)) {
    let b = await oe(e, op_3, r, c, s, credentials_4, asLevel, n, pinned, void 0, requestId);
    if (ct(b)) k.refusedAt = Date.now(), p("artifact_db_write", "require_version_unsupported");
    return b;
  }
  if (v.status === 200) {
    let b = v.levelConfirmed !== void 0 && {
        levelConfirmed: v.levelConfirmed
      },
      R = Xe().safeParse(v.data);
    if (!R.success) return p("artifact_db_write", "malformed_echo"), {
      kind: "ok",
      ...b
    };
    g("artifact_db_write"), _e(v.data, R.data.usage);
    let warnings = pe(v.data);
    return {
      kind: "ok",
      ...b,
      ...(R.data.version !== void 0 && {
        version: R.data.version
      }),
      ...(R.data.usage !== void 0 && {
        usage: R.data.usage
      }),
      ...(warnings.length > 0 && {
        warnings: warnings
      })
    };
  }
  let {
    code: code_4,
    reason: reason_8,
    kind: kind_3,
    limit: limit_3,
    version: q,
    required: required,
    serverReason: serverReason_3
  } = V(v.status, v.data);
  return (ne(code_4) ? p : m)("artifact_db_write", reason_8), {
    kind: "error",
    code: code_4,
    ...(v.levelConfirmed !== void 0 && {
      levelConfirmed: v.levelConfirmed
    }),
    message: W(code_4, "write", kind_3, limit_3, n?.field, {
      pinned: pinned,
      current: q,
      op: op_3,
      required: required,
      path: h?.address
    }, serverReason_3) + (Fe.has(code_4) ? L : "") + (code_4 === "invalid_argument" && (pinned !== void 0 || n?.replaceAll === !0) ? `. If this server does not yet accept \`${pinned !== void 0 ? "if_version" : "replace_all"}\`, that alone explains the refusal \u2014 nothing was written; retry without it only if an unconditional ${pinned !== void 0 ? "write" : "single replacement"} is acceptable here` : ""),
    reason: reason_8
  };
}
function ct(e) {
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
async function ads(host_2, t, r, c, credentials_5) {
  let {
    slug: slug_4,
    ops: ops,
    asLevel: asLevel_2
  } = t;
  if (!ar.test(slug_4)) return M("invalid_slug", "not a valid artifact id", "batch_");
  if (ops.length === 0 || ops.length > jL) return M("batch_size", `a batch takes 1-${jL} writes \u2014 ${ops.length} were given`, "batch_");
  let d,
    h = () => d ??= ae(host_2, "artifact_db_write", slug_4, r, c, credentials_5),
    u = [],
    k = new Set();
  for (let [x, F] of ops.entries()) {
    let C = await Se(F, h, "batch_");
    if (!C.ok) return {
      ...C.result,
      message: `write ${x + 1} of ${ops.length}: ${C.result.message}`
    };
    if (k.has(C.path)) return M("duplicate_path", `write ${x + 1} of ${ops.length} addresses ${C.path}, which an earlier write in this batch already addresses \u2014 a batch writes each document at most once`, "batch_");
    k.add(C.path), u.push({
      op: F.op,
      path: C.path,
      ...(F.data !== void 0 && {
        data: F.data
      }),
      ...(F.ifVersion !== void 0 && {
        ifVersion: F.ifVersion
      })
    });
  }
  let pinned_2 = u.some(item => item.ifVersion !== void 0),
    args_2 = {
      ops: u.map(({
        op: op_4,
        path: path_4,
        data: data_3,
        ifVersion: ifVersion_2
      }) => ({
        op: op_4,
        ...xe(op_4, path_4, data_3, void 0, ifVersion_2)
      }))
    },
    o;
  try {
    o = Buffer.byteLength(_({
      slug: slug_4,
      verb: "batch",
      args: args_2
    }), "utf8");
  } catch {
    return M("data_invalid", "every document in the batch must be a JSON-serializable object", "batch_");
  }
  if (o > RIn) return M("batch_too_large", `the batch serializes to ${o} bytes \u2014 the limit for one request is ${RIn}; split it into smaller batches`, "batch_");
  let w = qro.of(host_2),
    D = t.requireVersion === !0 ? host_2 : void 0,
    requestId_2 = t.requestId !== void 0 ? {
      host: host_2,
      id: t.requestId
    } : void 0;
  if (w.unsupported && !pinned_2) return de(slug_4, u, r, credentials_5, asLevel_2, D, requestId_2);
  let q = we.of(host_2),
    I = t.requireVersion === !0 && !q.unsupported,
    A = x => G("artifact_db_write", slug_4, "batch", args_2, {
      timeout: 60000,
      maxContentLength: maxContentLength,
      credentials: credentials_5,
      ...(asLevel_2 !== void 0 && {
        asLevel: asLevel_2
      }),
      ...(x && {
        requireVersion: !0
      }),
      ...(requestId_2 !== void 0 && {
        requestId: requestId_2
      })
    }, r),
    b = await A(I);
  if (!b.ok) return b.result;
  if (I && j(b.status, b.data)) {
    if (b = await A(!1), !b.ok) return b.result;
    if (asLevel_2 === void 0) q.refusedAt = Date.now(), p("artifact_db_write", "batch_require_version_unsupported");
  }
  if (asLevel_2 === void 0 && j(b.status, b.data)) return w.refusedAt = Date.now(), pinned_2 ? ft() : de(slug_4, u, r, credentials_5, void 0, D, requestId_2);
  if (b.status === 200) {
    let x = b.levelConfirmed !== void 0 && {
        levelConfirmed: b.levelConfirmed
      },
      F = Ye().safeParse(b.data);
    if (!F.success || F.data.results.length !== ops.length) return p("artifact_db_write", "malformed_batch_echo"), {
      kind: "ok",
      ...x,
      results: ops.map(() => ({}))
    };
    g("artifact_db_write"), _e(b.data, F.data.usage);
    let warnings_2 = pe(b.data);
    return {
      kind: "ok",
      ...x,
      results: F.data.results.map(item => item.version !== void 0 ? {
        version: item.version
      } : {}),
      ...(F.data.usage !== void 0 && {
        usage: F.data.usage
      }),
      ...(warnings_2.length > 0 && {
        warnings: warnings_2
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
    required: required_2,
    serverReason: serverReason_4
  } = V(b.status, b.data);
  (ne(code_5) ? p : m)("artifact_db_write", `batch_${reason_9}`);
  let index_2 = index !== void 0 && index < u.length ? index : void 0;
  return {
    kind: "error",
    code: code_5,
    ...(b.levelConfirmed !== void 0 && {
      levelConfirmed: b.levelConfirmed
    }),
    message: mt(code_5, kind_4, limit_4, {
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
      serverReason: serverReason_4
    }),
    reason: reason_9
  };
}
function ft() {
  return p("artifact_db_write", "batch_pinned_unsupported"), {
    kind: "error",
    code: "invalid_argument",
    reason: "batch_pinned_unsupported",
    message: `db batch write failed (${O("invalid_argument")}): this server does not take batch writes yet (nor, most likely, \`if_version\`), and a batch with \`if_version\` pins is never applied one write at a time \u2014 nothing was written. Resend it without the pins only if unconditional writes are acceptable here`
  };
}
function mt(e, t, r, c) {
  if (e === "too_large") return `db batch write failed (${O(e)}): the batch body exceeds the server's 1 MiB request limit \u2014 nothing was written; split it into smaller write_db calls`;
  if (e === "version_mismatch" && c?.required === !0) {
    let i = `db batch write failed (${O(e)})`,
      n = "Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending",
      stale = c.stale;
    return stale !== void 0 ? `${i}: writes[${stale.index}] (write ${stale.index + 1} of ${stale.total}) targets ${stale.path}, which already exists, and carried no if_version \u2014 the whole batch wrote nothing. Read that document back, re-plan its ${stale.op === "delete" ? "delete (if it should still be deleted)" : "write on what it holds now"} with if_version set to the version the read returns, then resend the batch. ${"Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending"}` : `${i}: one of the writes targets a document that already exists and carried no if_version \u2014 the whole batch wrote nothing. Read the existing documents this batch writes, re-plan those entries on what they hold now with if_version set to the versions the reads return, then resend the batch`;
  }
  if (e === "version_mismatch") {
    let i = `db batch write failed (${O(e)}): the batch is atomic, so nothing was written \u2014 none of the writes applied`,
      n = c?.stale;
    if (n === void 0 || n.ifVersion === void 0) return `${i}. A document one of the writes was pinned to with if_version is no longer at that version (or no longer exists). Re-read the pinned documents, re-plan those writes against what they hold now with fresh pins, then resend the batch`;
    let d = `writes[${n.index}] (write ${n.index + 1} of ${n.total}, ${_(n.path)})`,
      h = "It is the first stale pin the server met; later pinned entries were not checked, so re-read any pinned document you are unsure of too, then resend the batch";
    return c?.version !== void 0 ? `${i}. ${d} was pinned to version ${n.ifVersion} and that document is now at version ${c.version}: read it back, re-plan its write against what it holds now and pin to that version. ${h}` : `${i}. ${d} was pinned to version ${n.ifVersion} and that document has changed or may have been deleted (the server named no current version): read it back \u2014 if it still exists, re-plan its write against what it holds now and pin to its version; if it is gone, drop that entry, or re-create it with a "set" entry and no if_version only if it should exist again. ${h}`;
  }
  let s = W(e, "batch write", t, r, void 0, void 0, c?.serverReason),
    l = e === "invalid_argument" && c?.pinned === !0 ? ". If this server does not yet accept `if_version` on batch writes, that alone explains the refusal \u2014 resend without the pins only if unconditional writes are acceptable here" : "";
  return $pr(e) ? `${s}; the batch is atomic, so nothing was written${l}` : `${s}; the batch's outcome is unknown \u2014 it applies all-or-nothing and may have committed; read back before retrying`;
}
function $pr(e) {
  return e !== "store_unavailable";
}
async function de(e, t, r, c, s, host_3, i) {
  p("artifact_db_write", "batch_fallback_sequential");
  let results = [],
    usage,
    warnings_3 = [],
    levelConfirmed,
    k = v => s !== void 0 && v > 0 && levelConfirmed !== !0 ? ` (as_level '${s}' unconfirmed for them \u2014 they may have run at your own level)` : "",
    y = "this server does not take batch writes yet, so the batch was applied one write at a time and is NOT atomic";
  for (let [failedIndex, {
    op: op_5,
    path: w,
    data: data_4
  }] of t.entries()) {
    let S = `${failedIndex} ${failedIndex === 1 ? "entry" : "entries"} before it already committed`,
      q = t.length - failedIndex - 1,
      I = b => ({
        kind: "error",
        code: "store_unavailable",
        reason: "batch_fallback_aborted",
        message: `${y}: interrupted at writes[${failedIndex}] (write ${failedIndex + 1} of ${t.length}). The ${S}${k(failedIndex)}; writes[${failedIndex}] itself ${b ? "may or may not have applied" : "did not run"}; the ${q} after it did not run.`,
        fallback: "sequential",
        results: results,
        failedIndex: failedIndex
      });
    if (r.aborted) return I(!1);
    let A;
    try {
      A = await oe(e, op_5, w, data_4, r, c, s, void 0, void 0, host_3 && {
        host: host_3,
        address: w
      }, i);
    } catch (error) {
      if (Ua(error)) return I(!0);
      if (error instanceof N) return I(!1);
      throw error;
    }
    if (A.kind === "error") return {
      kind: "error",
      code: A.code,
      reason: A.reason,
      message: `${y}: writes[${failedIndex}] (write ${failedIndex + 1} of ${t.length}) failed \u2014 ${A.message.replace(L, `; writes[${failedIndex}] was not applied`)}. The ${S}${k(failedIndex)}; the ${q} after it did not run.`,
      fallback: "sequential",
      results: results,
      failedIndex: failedIndex
    };
    results.push(A.version !== void 0 ? {
      version: A.version
    } : {}), usage = A.usage ?? (op_5 === "delete" ? void 0 : usage);
    for (let b of A.warnings ?? []) if (warnings_3.length < be && !warnings_3.includes(b)) warnings_3.push(b);
    if (A.levelConfirmed !== void 0) levelConfirmed = (levelConfirmed ?? !0) && A.levelConfirmed;
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
export { jbe, TAe, regExp as $8, regExp_2 as Voe, $Rt, TIn, WF, v4e, pue, zw, _5t, eds, CAe, CIn, WY, Yst, b5t, Vro, jL, RIn, tds, nds, qro, rds, ods, Kro, sds, AIn, ids, ads, $pr };