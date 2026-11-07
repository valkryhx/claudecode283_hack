// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Hs
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";

function p() {
  return Hs({
    value: "",
    active: !1,
    launchWarning: null,
    linkSuppliedTexts: new Set,
    submittedLinkPrefill: null,
    vimMode: "INSERT",
    stash: null,
    cameBack: !1
  })
}
var a = new Je(() => p());

function $M(n) {
  return a.of(n)
}

function Vit(n) {
  return $M(n).getState().value
}

function P6e(n, e) {
  n.setState((t) => {
    if (t.value === e) return t;
    if (t.value !== "" && e === "") {
      let r = t.value.trim(),
        o = t.launchWarning?.type === "deep-link" && t.launchWarning.text === void 0 ? new Set(t.linkSuppliedTexts).add(r) : t.linkSuppliedTexts;
      return {
        ...t,
        value: e,
        launchWarning: null,
        linkSuppliedTexts: o,
        submittedLinkPrefill: o.has(r) ? t.value : null,
        cameBack: !1
      }
    }
    return {
      ...t,
      value: e
    }
  })
}

function q4o(n) {
  return $M(n).getState().submittedLinkPrefill
}

function Y4o(n, e, t) {
  $M(n).setState((r) => {
    let o = t.trim();
    if (o === "" || r.linkSuppliedTexts.has(o) || !r.linkSuppliedTexts.has(e.trim())) return r;
    return {
      ...r,
      linkSuppliedTexts: new Set(r.linkSuppliedTexts).add(o)
    }
  })
}

function rli(n, e) {
  P6e($M(n), e)
}

function X4o(n, e) {
  n.setState((t) => t.stash === e ? t : {
    ...t,
    stash: e
  })
}

function xer(n, e) {
  n.setState((t) => t.active === e ? t : {
    ...t,
    active: e
  })
}

function A6r(n, e) {
  xer($M(n), e)
}

function oli(n, e) {
  n.setState((t) => {
    let r = e && t.value !== "";
    return t.cameBack === r ? t : {
      ...t,
      cameBack: r
    }
  })
}

function hSn(n, e) {
  $M(n).setState((t) => t.vimMode === e ? t : {
    ...t,
    vimMode: e
  })
}

function x6r(n, e) {
  n.setState((t) => {
    let r = e.type === "deep-link" ? e.text?.trim() : void 0,
      o = r === void 0 || t.linkSuppliedTexts.has(r) ? t.linkSuppliedTexts : new Set(t.linkSuppliedTexts).add(r),
      i = t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t.launchWarning : e;
    return i === t.launchWarning && o === t.linkSuppliedTexts ? t : {
      ...t,
      launchWarning: i,
      linkSuppliedTexts: o
    }
  })
}

function J4o(n, e) {
  x6r($M(n), e)
}
export {
  $M,
  Vit,
  P6e,
  q4o,
  Y4o,
  rli,
  X4o,
  xer,
  A6r,
  oli,
  hSn,
  x6r,
  J4o
};
