// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { zc } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { X5e } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ar } from "B:/~BUN/root/chunk-290k5gh5.js";
import { $1, he } from "B:/~BUN/root/chunk-3rzkfay5.js";
function x5t() {
  if (a.NODE_EXTRA_CA_CERTS) return;
  let n = i();
  if (n) process.env.NODE_EXTRA_CA_CERTS = n, t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${n}`);
}
function i() {
  try {
    if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !zc() && X5e("NODE_EXTRA_CA_CERTS")) {
      t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
      return;
    }
    if ($1()) return;
    let e = le()?.env,
      o = (ar("userSettings") ? he("userSettings") : void 0)?.env;
    t(`CA certs: Config fallback - globalEnv keys: ${e ? Object.keys(e).join(",") : "none"}, settingsEnv keys: ${o ? Object.keys(o).join(",") : "none"}`);
    let r = o?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
    if (r) t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r;
  } catch (error) {
    t(`CA certs: Config fallback failed: ${error}`, {
      level: "error"
    }), p("ca_certs_load", "config_read_failed");
    return;
  }
}
export { x5t };