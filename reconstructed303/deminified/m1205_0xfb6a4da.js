// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Bu, M, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
var version = 1,
  m = 65536,
  r = f(() => Bu().min(0).default(0)),
  p = f(() => u({
    version: Bu()
  })),
  n = f(() => u({
    version: C(version),
    generation: Bu().min(1),
    appliedBeforeFirstAsk: M(),
    outcome: U(["applied", "partial"]),
    filesApplied: r(),
    filesRefused: r(),
    settingsWritten: M().default(!1),
    replacedForeign: r(),
    writtenAtMs: Bu().min(0)
  }));
function sto(o) {
  let e = n().safeParse({
    ...o,
    version: version
  });
  if (!e.success) throw Error("home ready row is off-schema");
  return Buffer.from(_(e.data));
}
function _On(o) {
  if (o.length > m) return {
    ok: !1,
    reason: "oversize"
  };
  let e = pt(o.toString("utf8"), !1),
    s = p().safeParse(e);
  if (s.success && s.data.version !== version) return {
    ok: !1,
    reason: "unsupported_version"
  };
  let a = n().safeParse(e);
  if (!a.success) return {
    ok: !1,
    reason: "malformed"
  };
  let {
    version: version_2,
    ...ready
  } = a.data;
  return {
    ok: !0,
    ready: ready
  };
}
export { sto, _On };