// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ise, Cgr, Rgr, Agr } from "B:/~BUN/root/chunk-at7axhcd.js";
import { Gor } from "B:/~BUN/root/chunk-kchavkh0.js";
import { Jcr } from "B:/~BUN/root/chunk-t90pe00y.js";
import { XZr } from "B:/~BUN/root/chunk-gff94s4f.js";
function fTn(t) {
  t(e => e.ultrareviewOverageConfirmed ? e : {
    ...e,
    ultrareviewOverageConfirmed: !0
  });
}
function s(t) {
  return e => t(o => ({
    ...o,
    pendingMemoryUpdates: [...o.pendingMemoryUpdates, e]
  }));
}
function n(t) {
  t(e => e.prResolvedThisSession ? e : {
    ...e,
    prResolvedThisSession: !0
  });
}
function mTn(t) {
  let e = o => t(r => {
    let toolPermissionContext = typeof o === "function" ? o(r.toolPermissionContext) : o;
    return r.toolPermissionContext === toolPermissionContext ? r : {
      ...r,
      toolPermissionContext: toolPermissionContext
    };
  });
  return {
    setToolPermissionContext: e,
    setSessionToolPermissionContext: e
  };
}
function EWe(t, e) {
  return {
    markPrResolvedThisSession: () => n(e),
    isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed,
    markUltrareviewOverageConfirmed: () => fTn(e),
    getAdvisorSetting: () => t().advisorModel,
    getMcp: () => t().mcp,
    getProactivityLevel: () => t().proactivityLevel,
    getWebBrowser: () => t().webBrowser,
    ...mTn(e),
    setWebBrowserSlice: Jcr(e),
    setArtifactReadVersion: Cgr(e),
    getArtifactReadObservation: Ise(t),
    artifactRegistries: Gor(t, e),
    setArtifactContractTarget: Rgr(e),
    getArtifactContractTarget: Agr(t),
    enqueuePendingMemoryUpdate: s(e),
    agentLifecycle: XZr(t, e)
  };
}
export { fTn, mTn, EWe };