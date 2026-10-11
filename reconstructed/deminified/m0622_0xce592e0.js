// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { _ } from "B:/~BUN/root/chunk-51n463p1.js";
import { ee } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { ms } from "B:/~BUN/root/chunk-rtyz5f1n.js";
import { xso } from "B:/~BUN/root/chunk-crnh5x5m.js";
import { $Ze } from "B:/~BUN/root/chunk-d3dc4x7w.js";
function i(t) {
  return {
    arm() {
      ee().templateLanes[t] = !0;
    },
    take() {
      let templateLanes = ee().templateLanes,
        a = templateLanes[t];
      return templateLanes[t] = !1, a;
    },
    giveBack() {
      ee().templateLanes[t] = !0;
    }
  };
}
var o = i("prototypeArmed");
function iJr() {
  o.arm(), _("prototype_started", {});
}
function aJr() {
  return o.take();
}
function abt() {
  o.giveBack();
}
function p(t, e) {
  ee().templateLanes.boundSlugs.set(t, e);
}
function lJr(t) {
  return ee().templateLanes.boundSlugs.get(t);
}
function cJr(t, is_first_publish) {
  p(t, "prototype"), _("prototype_publish", {
    artifact_slug: $Ze(t),
    is_first_publish: is_first_publish
  });
}
var s = "<!-- dataviz-callout -->",
  n = () => "",
  r;
function dJr(t) {
  n = t;
}
async function kQe() {
  let {
    SKILL_MD: SKILL_MD
  } = await import("B:/~BUN/root/chunk-hj3m9n60.js");
  return r = xso(ms(SKILL_MD).content.trimStart().replace(s, () => n())), r;
}
function uJr() {
  return r;
}
export { iJr, aJr, abt, lJr, cJr, dJr, kQe, uJr };