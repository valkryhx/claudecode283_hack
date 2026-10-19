// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Cu
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  dm,
  qQe
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  ue
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  nn
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  IB,
  me
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  aje
} from "B:/~BUN/root/chunk-429xgjya.js";
import {
  xl
} from "B:/~BUN/root/chunk-648jq7hr.js";

function Brt() {
  if (a.NODE_EXTRA_CA_CERTS) return;
  let o = s();
  if (o) process.env.NODE_EXTRA_CA_CERTS = o, t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)
}

function s() {
  try {
    if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !Cu() && qQe("NODE_EXTRA_CA_CERTS")) {
      t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
      return
    }
    if (dm()) return;
    if (IB() || xl()) return;
    let o = ue(),
      e = aje(o?.env, "globalConfig"),
      i = nn("userSettings") ? me("userSettings") : void 0,
      n = aje(i?.env, "userSettings");
    t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);
    let r = n?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
    if (r) t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r
  } catch (o) {
    t(`CA certs: Config fallback failed: ${o}`, {
      level: "error"
    }), p("ca_certs_load", "config_read_failed");
    return
  }
}
export {
  Brt
};
