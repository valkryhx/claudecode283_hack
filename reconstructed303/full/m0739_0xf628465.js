// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  hi
} from "B:/~BUN/root/chunk-h1tq8zce.js";
import {
  g
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  ee
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  lls
} from "B:/~BUN/root/chunk-n30z8k8v.js";
import {
  YCt
} from "B:/~BUN/root/chunk-nnnnp9q9.js";
var i = "<!-- dataviz-callout -->",
  n = () => "",
  o;

function Q7o(t) {
  n = t
}
async function rKt() {
  let {
    SKILL_MD: t
  } = await import("B:/~BUN/root/chunk-kyrhq990.js");
  return o = lls(hi(t).content.trimStart().replace(i, () => n())), o
}

function Z7o() {
  return o
}

function p(t) {
  return {
    arm() {
      ee().templateLanes[t] = !0
    },
    take() {
      let e = ee().templateLanes,
        a = e[t];
      return e[t] = !1, a
    },
    giveBack() {
      ee().templateLanes[t] = !0
    }
  }
}
var r = p("prototypeArmed");

function eZo() {
  r.arm(), g("prototype_started", {})
}

function tZo() {
  return r.take()
}

function oKt() {
  r.giveBack()
}

function s(t, e) {
  ee().templateLanes.boundSlugs.set(t, e)
}

function nZo(t) {
  return ee().templateLanes.boundSlugs.get(t)
}

function rZo(t, e) {
  s(t, "prototype"), g("prototype_publish", {
    artifact_slug: YCt(t),
    is_first_publish: e
  })
}
export {
  Q7o,
  rKt,
  Z7o,
  eZo,
  tZo,
  oKt,
  nZo,
  rZo
};
