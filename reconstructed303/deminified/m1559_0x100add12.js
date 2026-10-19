// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Yr, mA, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { FP } from "B:/~BUN/root/chunk-71vwhz3n.js";
import { ge, mn, Vo, sr, St } from "B:/~BUN/root/chunk-rm2gz7kj.js";
var c = f(() => sr(St({
    id: ge(),
    title: ge().optional(),
    text: ge(),
    footer: ge().optional(),
    priority: mn().default(0),
    maxImpressions: mn().default(3),
    accentBar: Vo().default(!0),
    requiresModel: ge().optional()
  })).default([])),
  i = [];
function u() {
  let n = mA("tengu_startup_announcements", i),
    t = c().safeParse(n);
  return t.success ? t.data : i;
}
function s(n) {
  return n.requiresModel === void 0 || Yr(n.requiresModel);
}
function vCe(n) {
  let t = FP();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let r = ue().announcementImpressions ?? {},
    o = u().filter(item => (r[item.id] ?? 0) < item.maxImpressions && s(item)).sort((itemA, itemB) => itemB.priority - itemA.priority)[0];
  if (n && o !== void 0) t.startupAnnouncementPick = o;
  return o;
}
function B6o() {
  let n = u().filter(s).sort((itemA, itemB) => itemB.priority - itemA.priority)[0];
  if (n === void 0) return !1;
  return JSON.stringify({
    id: n.id,
    title: n.title,
    text: n.text,
    footer: n.footer
  });
}
export { vCe, B6o };