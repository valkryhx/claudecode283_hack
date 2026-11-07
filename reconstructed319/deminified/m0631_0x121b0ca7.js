// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { id } from "B:/~BUN/root/chunk-65j2302z.js";
import { vp, Sbt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { ZD, be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { tAr } from "B:/~BUN/root/chunk-m749kjym.js";
import { kd } from "B:/~BUN/root/chunk-jbjsy1k0.js";
function qTt() {
  if (i.NODE_EXTRA_CA_CERTS) return;
  let o = f();
  if (o) process.env.NODE_EXTRA_CA_CERTS = o, t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`);
}
function f() {
  try {
    if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !id() && Sbt("NODE_EXTRA_CA_CERTS")) {
      t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
      return;
    }
    if (vp()) return;
    if (ZD() || kd()) return;
    let o = fe(),
      e = tAr(o?.env, "globalConfig"),
      s = Kt("userSettings") ? be("userSettings") : void 0,
      n = tAr(s?.env, "userSettings");
    t(`CA certs: Config fallback - globalEnv keys: ${e ? Object.keys(e).join(",") : "none"}, settingsEnv keys: ${n ? Object.keys(n).join(",") : "none"}`);
    let r = n?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
    if (r) t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r;
  } catch (error) {
    t(`CA certs: Config fallback failed: ${error}`, {
      level: "error"
    }), c("ca_certs_load", "config_read_failed");
    return;
  }
}
export { qTt };