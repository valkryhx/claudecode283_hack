// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { te } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { randomUUID as s } from "crypto";
var m = 256;
function Irr(e = s(), t) {
  if (t !== void 0) {
    let laneNoticeSlugs = te().laneNoticeSlugs;
    laneNoticeSlugs.set(e, t), r(laneNoticeSlugs);
  }
  return e;
}
function pui(e) {
  return te().laneNoticeSlugs.get(e);
}
function mui(e, slug, ownWordsOnly) {
  let n = te(),
    i = Date.now();
  if (e !== void 0) n.commentReads.set(e, {
    slug: slug,
    ownWordsOnly: ownWordsOnly
  }), r(n.commentReads);
  if (n.commentReadAtBySlug.delete(slug), n.commentReadAtBySlug.set(slug, i), r(n.commentReadAtBySlug) || !ownWordsOnly) n.lastOthersCommentReadAt = i;
}
function hui(e) {
  return te().commentReads.get(e);
}
function Mrr(e, t) {
  for (let [o, n] of te().commentReadAtBySlug) if (o !== e && !(Number.isFinite(t) && n < t)) return !0;
  return !1;
}
function Drr() {
  return te().lastOthersCommentReadAt;
}
function r(e) {
  if (e.size <= m) return !1;
  let t = e.keys().next().value;
  if (t !== void 0) e.delete(t);
  return !0;
}
export { Irr, pui, mui, hui, Mrr, Drr };