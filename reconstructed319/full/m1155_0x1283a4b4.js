// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  tAe
} from "B:/~BUN/root/chunk-h4ga5e8b.js";

function a(n, r) {
  let e = n.cachedGrowthBookFeatures;
  if (typeof e !== "object" || e === null || Array.isArray(e) || Object.keys(e).length === 0) return !0;
  let o = n.growthBookOverrides;
  return tAe in e || typeof o === "object" && o !== null && tAe in o || r !== void 0 && r.includes(tAe)
}
export {
  a as orgConfigGateFlagOnHand
};
