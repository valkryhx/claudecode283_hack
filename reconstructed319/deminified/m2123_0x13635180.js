// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { GIe, TJo, CJo, RJo } from "B:/~BUN/root/chunk-gvv6aaq0.js";
import { eVo } from "B:/~BUN/root/chunk-bq1zhyqz.js";
import { C8o } from "B:/~BUN/root/chunk-w9jsv3qz.js";
import { wdi } from "B:/~BUN/root/chunk-xa8mb85y.js";
function aQn(t) {
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
function a4r(t) {
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
function XTt(t, e) {
  return {
    markPrResolvedThisSession: () => n(e),
    isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed,
    markUltrareviewOverageConfirmed: () => a4r(e),
    getAdvisorSetting: () => t().advisorModel,
    getMcp: () => t().mcp,
    getProactivityLevel: () => t().proactivityLevel,
    getWebBrowser: () => t().webBrowser,
    ...aQn(e),
    setWebBrowserSlice: C8o(e),
    setArtifactReadVersion: TJo(e),
    getArtifactReadObservation: GIe(t),
    artifactRegistries: eVo(t, e),
    setArtifactContractTarget: CJo(e),
    getArtifactContractTarget: RJo(t),
    enqueuePendingMemoryUpdate: s(e),
    agentLifecycle: wdi(t, e)
  };
}
export { a4r, aQn, XTt };