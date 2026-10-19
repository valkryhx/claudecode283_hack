// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Kbe,
  Joo,
  Qoo,
  Zoo
} from "B:/~BUN/root/chunk-8tjgv4bf.js";
import {
  eXr
} from "B:/~BUN/root/chunk-0s60mnx7.js";
import {
  Ieo
} from "B:/~BUN/root/chunk-7amxvs8z.js";
import {
  ras
} from "B:/~BUN/root/chunk-bq1ehv15.js";

function par(t) {
  t((e) => e.ultrareviewOverageConfirmed ? e : {
    ...e,
    ultrareviewOverageConfirmed: !0
  })
}

function s(t) {
  return (e) => t((o) => ({
    ...o,
    pendingMemoryUpdates: [...o.pendingMemoryUpdates, e]
  }))
}

function n(t) {
  t((e) => e.prResolvedThisSession ? e : {
    ...e,
    prResolvedThisSession: !0
  })
}

function WCn(t) {
  let e = (o) => t((r) => {
    let i = typeof o === "function" ? o(r.toolPermissionContext) : o;
    return r.toolPermissionContext === i ? r : {
      ...r,
      toolPermissionContext: i
    }
  });
  return {
    setToolPermissionContext: e,
    setSessionToolPermissionContext: e
  }
}

function oot(t, e) {
  return {
    markPrResolvedThisSession: () => n(e),
    isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed,
    markUltrareviewOverageConfirmed: () => par(e),
    getAdvisorSetting: () => t().advisorModel,
    getMcp: () => t().mcp,
    getProactivityLevel: () => t().proactivityLevel,
    getWebBrowser: () => t().webBrowser,
    ...WCn(e),
    setWebBrowserSlice: Ieo(e),
    setArtifactReadVersion: Joo(e),
    getArtifactReadObservation: Kbe(t),
    artifactRegistries: eXr(t, e),
    setArtifactContractTarget: Qoo(e),
    getArtifactContractTarget: Zoo(t),
    enqueuePendingMemoryUpdate: s(e),
    agentLifecycle: ras(t, e)
  }
}
export {
  par,
  WCn,
  oot
};
