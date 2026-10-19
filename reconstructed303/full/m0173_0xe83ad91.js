// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Fe
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  qjt
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ble,
  Yyt,
  gun,
  JT,
  g4
} from "B:/~BUN/root/chunk-rfp1pa77.js";
import {
  L5,
  pI
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  _f
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  LIe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
var o = null;

function aUs(n) {
  o = n
}

function YPo() {
  return o?.credential() ?? null
}

function lUs() {
  return o?.road() ?? "none_at_claim"
}

function dUs(n, e) {
  if (e === null) return "none_at_claim";
  let t = e.kind === "bearer",
    i = t ? "CLAUDE_CODE_OAUTH_TOKEN" : "ANTHROPIC_API_KEY",
    u = t ? "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR" : "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR";
  return r(n[i]) === void 0 ? qjt(u) ?? "none" : "env_var"
}

function cUs(n) {
  if (L5() || pI() || a(n, "CLAUDE_CODE_CHILD_SESSION") || a(n, "CLAUDECODE")) {
    let d = r(gun(Ble, "OAuth token")),
      s = r(gun(Yyt, "API key"));
    if (d !== void 0 && s !== void 0) return null;
    return d === void 0 ? _(s) : {
      kind: "bearer",
      token: d
    }
  }
  let e = a(n, "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"),
    t = a(n, "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR"),
    i = r(n.CLAUDE_CODE_OAUTH_TOKEN) ?? (e ? r(JT()) : void 0),
    u = r(n.ANTHROPIC_API_KEY) ?? (t ? r(g4()) : void 0);
  if (i !== void 0) return {
    kind: "bearer",
    token: i
  };
  if (u !== void 0) return {
    kind: "key",
    key: u
  };
  if (e || t) return null;
  let l = r(JT());
  if (l !== void 0) return {
    kind: "bearer",
    token: l
  };
  return _(r(g4()))
}

function uUs() {
  let n = o?.env();
  if (n === void 0) return "no_auth";
  if ([...LIe, "CLAUDE_CODE_USE_GATEWAY"].some((i) => Fe(n[i]))) return "third_party_provider";
  let t = r(n.ANTHROPIC_BASE_URL);
  if (t !== void 0 && !_f(t)) return "custom_base_url";
  return YPo() === null ? "no_auth" : null
}
var c = ["USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL"];

function pUs() {
  let n = o?.env() ?? {};
  return c.some((e) => process.env[e] !== n[e])
}

function a(n, e) {
  return r(n[e]) !== void 0
}

function _(n) {
  return n === void 0 ? null : {
    kind: "key",
    key: n
  }
}

function r(n) {
  let e = n?.trim() ?? "";
  return e === "" ? void 0 : e
}
export {
  aUs,
  YPo,
  lUs,
  dUs,
  cUs,
  uUs,
  pUs
};
