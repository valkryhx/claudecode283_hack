// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { hJo } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { _d } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { qS } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { mje } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ugt } from "B:/~BUN/root/chunk-3xtmwvra.js";
function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(([n, s]) => s?.url !== void 0 && !mje(n) && _d(s.url) === r)?.[0];
}
function d(e, r) {
  return Object.entries(e.frameUrls ?? {}).some(([n, s]) => s?.url !== void 0 && _d(s.url) === r && (n.endsWith(".workshop.html") || n.endsWith(".workshop.md")));
}
var l = Object.freeze({}),
  c = Ugt("artifactReadConsentSlugs", l),
  g = Ugt("artifactConsentEpoch", 0);
function eVo(e, r) {
  return {
    ownPublishes: hJo(e, r),
    recordedPages: {
      isWorkshopPage: n => d(e(), n),
      localSourcePath: n => a(e(), n)
    },
    sharedReadConsent: c(e, r),
    consentEpoch: g(e, r)
  };
}
function JTt() {
  let e = {};
  return eVo(() => e, r => {
    e = r(e);
  });
}
var QTt = {
  assign: () => qS[0],
  get: () => {
    return;
  }
};
function bit(e) {
  return {
    assign(r) {
      let n = e.get(),
        s = n.assignments.get(r);
      if (s) return s;
      let o = qS[n.index % qS.length];
      return e.set(i => {
        if (i.assignments.has(r)) return i;
        let assignments = new Map(i.assignments);
        return assignments.set(r, o), {
          assignments: assignments,
          index: i.index + 1
        };
      }), o;
    },
    get(r) {
      return e.get().assignments.get(r);
    }
  };
}
var Hhe = Object.freeze({
  bridge: void 0,
  channel: void 0
});
class l4r {
  #e = void 0;
  #r = void 0;
  #n = 0;
  get bridge() {
    return this.#e;
  }
  get channel() {
    return this.#r;
  }
  get bridgeConnects() {
    return this.#n;
  }
  connectBridge(e) {
    this.#e = e, this.#n++;
  }
  disconnectBridge() {
    this.#e = void 0;
  }
  setChannel(e) {
    this.#r = e;
  }
}
export { eVo, JTt, QTt, bit, Hhe, l4r };