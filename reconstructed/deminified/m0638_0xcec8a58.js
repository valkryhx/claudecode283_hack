// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Hs } from "B:/~BUN/root/chunk-aky7m4ay.js";
import { Nt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
function p() {
  return Hs({
    value: "",
    active: !1,
    launchWarning: null,
    linkSuppliedTexts: new Set(),
    submittedLinkPrefill: null,
    vimMode: "INSERT",
    stash: null
  });
}
var u = new Nt(() => p());
function pM(n) {
  return u.of(n);
}
function Wnr(n) {
  return pM(n).getState().value;
}
function LIe(n, value) {
  n.setState(t => {
    if (t.value === value) return t;
    if (t.value !== "" && value === "") {
      let r = t.value.trim(),
        linkSuppliedTexts = t.launchWarning?.type === "deep-link" && t.launchWarning.text === void 0 ? new Set(t.linkSuppliedTexts).add(r) : t.linkSuppliedTexts;
      return {
        ...t,
        value: value,
        launchWarning: null,
        linkSuppliedTexts: linkSuppliedTexts,
        submittedLinkPrefill: linkSuppliedTexts.has(r) ? t.value : null
      };
    }
    return {
      ...t,
      value: value
    };
  });
}
function znr(n) {
  return pM(n).getState().submittedLinkPrefill;
}
function Gnr(n, e, t) {
  pM(n).setState(r => {
    let o = t.trim();
    if (o === "" || r.linkSuppliedTexts.has(o) || !r.linkSuppliedTexts.has(e.trim())) return r;
    return {
      ...r,
      linkSuppliedTexts: new Set(r.linkSuppliedTexts).add(o)
    };
  });
}
function Vnr(n, stash) {
  n.setState(t => t.stash === stash ? t : {
    ...t,
    stash: stash
  });
}
function Dqt(n, active) {
  n.setState(t => t.active === active ? t : {
    ...t,
    active: active
  });
}
function SEn(n, e) {
  Dqt(pM(n), e);
}
function $bt(n, vimMode) {
  pM(n).setState(t => t.vimMode === vimMode ? t : {
    ...t,
    vimMode: vimMode
  });
}
function qnr(n, e) {
  n.setState(t => {
    let r = e.type === "deep-link" ? e.text?.trim() : void 0,
      linkSuppliedTexts_2 = r === void 0 || t.linkSuppliedTexts.has(r) ? t.linkSuppliedTexts : new Set(t.linkSuppliedTexts).add(r),
      launchWarning = t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t.launchWarning : e;
    return launchWarning === t.launchWarning && linkSuppliedTexts_2 === t.linkSuppliedTexts ? t : {
      ...t,
      launchWarning: launchWarning,
      linkSuppliedTexts: linkSuppliedTexts_2
    };
  });
}
function Knr(n, e) {
  qnr(pM(n), e);
}
export { pM, Wnr, LIe, znr, Gnr, Vnr, Dqt, SEn, $bt, qnr, Knr };