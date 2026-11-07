// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var xDt = "https://claude.com/claude-code",
  Y0i = "https://claude.ai";
function i(t, e) {
  return t?.includes("_staging_") === !0 || e?.includes("staging") === !0;
}
function nco(t, e) {
  return t?.includes("_local_") === !0 || e?.includes("localhost") === !0;
}
function $Xe(t, e) {
  if (nco(t, e)) return "http://localhost:4000";
  if (i(t, e)) return "https://claude-ai.staging.ant.dev";
  return "https://claude.ai";
}
function cd(t, e, n) {
  let {
      toCompatSessionId: toCompatSessionId
    } = import.meta.require("B:/~BUN/root/chunk-kw3d8ydv.js"),
    o = toCompatSessionId(t),
    r = `${$Xe(o, e)}/code/${o}`;
  return n ? `${r}?${new URLSearchParams(n)}` : r;
}
export { xDt, Y0i, nco, $Xe, cd };