// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  hgr
} from "B:/~BUN/root/chunk-at7axhcd.js";
import {
  hcn
} from "B:/~BUN/root/chunk-0y3bphdf.js";
import {
  T7r
} from "B:/~BUN/root/chunk-873x5maq.js";
import {
  k7r
} from "B:/~BUN/root/chunk-rje38cxe.js";
import {
  ha
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  Noo
} from "B:/~BUN/root/chunk-d3dc4x7w.js";
import {
  Th
} from "B:/~BUN/root/chunk-rdxve5qj.js";
import {
  Ame
} from "B:/~BUN/root/chunk-zfb6h1v8.js";
import {
  o1
} from "B:/~BUN/root/chunk-aky7m4ay.js";

function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(([o, t]) => t?.url !== void 0 && !Ame(o) && ha(t.url) === r)?.[0]
}

function l(e, r) {
  return (e.workshopVerifiedSlugs ?? []).includes(r) || Object.entries(e.frameUrls ?? {}).some(([o, t]) => t?.url !== void 0 && ha(t.url) === r && hcn(o))
}
var d = Object.freeze({}),
  m = o1("artifactReadConsentSlugs", d),
  c = o1("artifactConsentEpoch", 0);

function Gor(e, r) {
  return {
    ownPublishes: hgr(e, r),
    workshopTelemetry: Noo(e, r),
    whiteboardTelemetry: k7r(e, r),
    prReviewTargets: T7r(e, r),
    recordedPages: {
      isWorkshopPage: (o) => l(e(), o),
      localSourcePath: (o) => a(e(), o)
    },
    sharedReadConsent: m(e, r),
    consentEpoch: c(e, r)
  }
}

function TWe() {
  let e = {};
  return Gor(() => e, (r) => {
    e = r(e)
  })
}
var CWe = {
  assign: () => Th[0],
  get: () => {
    return
  }
};

function XIe(e) {
  return {
    assign(r) {
      let o = e.get(),
        t = o.assignments.get(r);
      if (t) return t;
      let i = Th[o.index % Th.length];
      return e.set((s) => {
        if (s.assignments.has(r)) return s;
        let n = new Map(s.assignments);
        return n.set(r, i), {
          assignments: n,
          index: s.index + 1
        }
      }), i
    },
    get(r) {
      return e.get().assignments.get(r)
    }
  }
}
var L5 = Object.freeze({
  bridge: void 0,
  channel: void 0
});
class gTn {
  #e = void 0;
  #r = void 0;
  get bridge() {
    return this.#e
  }
  get channel() {
    return this.#r
  }
  connectBridge(e) {
    this.#e = e
  }
  disconnectBridge() {
    this.#e = void 0
  }
  setChannel(e) {
    this.#r = e
  }
}
export {
  Gor,
  TWe,
  CWe,
  XIe,
  L5,
  gTn
};
