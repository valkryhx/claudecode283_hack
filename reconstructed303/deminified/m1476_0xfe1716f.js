// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Uoo } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { pqn } from "B:/~BUN/root/chunk-ggdk44cm.js";
import { _ts } from "B:/~BUN/root/chunk-93zvyb6f.js";
import { hts } from "B:/~BUN/root/chunk-jkqvc97h.js";
import { il } from "B:/~BUN/root/chunk-qp0344nb.js";
import { mas } from "B:/~BUN/root/chunk-nnnnp9q9.js";
import { Bb } from "B:/~BUN/root/chunk-bvhc5fp3.js";
import { Gpe } from "B:/~BUN/root/chunk-n0e205s6.js";
import { xK } from "B:/~BUN/root/chunk-b4xxgr0r.js";
function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(([o, s]) => s?.url !== void 0 && !Gpe(o) && il(s.url) === r)?.[0];
}
function l(e) {
  return Object.entries(e.frameUrls ?? {}).flatMap(([path, o]) => {
    if (o?.url === void 0 || Gpe(path)) return [];
    if (o.dismissed === !0) return [];
    let slug = il(o.url),
      unasked = o.routineUnasked === !0 || o.commentUnasked === !0;
    return slug === null ? [] : [{
      path: path,
      slug: slug,
      url: o.url,
      unasked: unasked
    }];
  });
}
function d(e, r) {
  return (e.workshopVerifiedSlugs ?? []).includes(r) || Object.entries(e.frameUrls ?? {}).some(([o, s]) => s?.url !== void 0 && il(s.url) === r && pqn(o));
}
var c = Object.freeze({}),
  m = xK("artifactReadConsentSlugs", c),
  g = xK("artifactConsentEpoch", 0);
function eXr(e, r) {
  return {
    ownPublishes: Uoo(e, r),
    workshopTelemetry: mas(e, r),
    whiteboardTelemetry: hts(e, r),
    prReviewTargets: _ts(e, r),
    recordedPages: {
      isWorkshopPage: o => d(e(), o),
      localSourcePath: o => a(e(), o),
      heldSourcePages: () => l(e())
    },
    sharedReadConsent: m(e, r),
    consentEpoch: g(e, r)
  };
}
function sot() {
  let e = {};
  return eXr(() => e, r => {
    e = r(e);
  });
}
var iot = {
  assign: () => Bb[0],
  get: () => {
    return;
  }
};
function Jqe(e) {
  return {
    assign(r) {
      let o = e.get(),
        s = o.assignments.get(r);
      if (s) return s;
      let t = Bb[o.index % Bb.length];
      return e.set(n => {
        if (n.assignments.has(r)) return n;
        let assignments = new Map(n.assignments);
        return assignments.set(r, t), {
          assignments: assignments,
          index: n.index + 1
        };
      }), t;
    },
    get(r) {
      return e.get().assignments.get(r);
    }
  };
}
var _oe = Object.freeze({
  bridge: void 0,
  channel: void 0
});
class far {
  #e = void 0;
  #r = void 0;
  get bridge() {
    return this.#e;
  }
  get channel() {
    return this.#r;
  }
  connectBridge(e) {
    this.#e = e;
  }
  disconnectBridge() {
    this.#e = void 0;
  }
  setChannel(e) {
    this.#r = e;
  }
}
export { eXr, sot, iot, Jqe, _oe, far };