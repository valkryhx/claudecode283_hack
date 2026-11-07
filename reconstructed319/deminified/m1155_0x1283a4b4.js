// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { tAe } from "B:/~BUN/root/chunk-h4ga5e8b.js";
function a(n, r) {
  let cachedGrowthBookFeatures = n.cachedGrowthBookFeatures;
  if (typeof cachedGrowthBookFeatures !== "object" || cachedGrowthBookFeatures === null || Array.isArray(cachedGrowthBookFeatures) || Object.keys(cachedGrowthBookFeatures).length === 0) return !0;
  let growthBookOverrides = n.growthBookOverrides;
  return tAe in cachedGrowthBookFeatures || typeof growthBookOverrides === "object" && growthBookOverrides !== null && tAe in growthBookOverrides || r !== void 0 && r.includes(tAe);
}
export { a as orgConfigGateFlagOnHand };