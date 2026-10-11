// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Vr, UR, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { QO } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { de, fn, ho, Xn, lt } from "B:/~BUN/root/chunk-8386ms9e.js";
var c = f(() => Xn(lt({
    id: de(),
    title: de().optional(),
    text: de(),
    footer: de().optional(),
    priority: fn().default(0),
    maxImpressions: fn().default(3),
    accentBar: ho().default(!0),
    requiresModel: de().optional()
  })).default([])),
  i = [];
function u() {
  let n = UR("tengu_startup_announcements", i),
    t = c().safeParse(n);
  return t.success ? t.data : i;
}
function s(n) {
  return n.requiresModel === void 0 || Vr(n.requiresModel);
}
function L1e(n) {
  let t = QO();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let r = le().announcementImpressions ?? {},
    o = u().filter(item => (r[item.id] ?? 0) < item.maxImpressions && s(item)).sort((itemA, itemB) => itemB.priority - itemA.priority)[0];
  if (n && o !== void 0) t.startupAnnouncementPick = o;
  return o;
}
function QYr() {
  let n = u().filter(s).sort((itemA, itemB) => itemB.priority - itemA.priority)[0];
  if (n === void 0) return !1;
  return JSON.stringify({
    id: n.id,
    title: n.title,
    text: n.text,
    footer: n.footer
  });
}
export { L1e, QYr };