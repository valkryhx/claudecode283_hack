// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Fn
} from "B:/~BUN/root/chunk-8f4z6bdn.js";

function QVr(s) {
  if (!s.startsWith("https://")) return {
    ok: !1,
    cause: "non_https"
  };
  let e;
  try {
    e = new URL(s)
  } catch {
    return {
      ok: !1,
      cause: "unparseable"
    }
  }
  if (e.protocol !== "https:") return {
    ok: !1,
    cause: "non_https"
  };
  if (e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || e.pathname !== "" && e.pathname !== "/") return {
    ok: !1,
    cause: "origin_extras"
  };
  return {
    ok: !0,
    origin: e.origin
  }
}
var t = /^cse_[A-Za-z0-9_]+$/;

function r() {
  if (!i.CCR_SESSION_PROFILE) return {
    ok: !1,
    cause: null
  };
  let s = i.SESSION_INGRESS_URL;
  if (!s) return {
    ok: !1,
    cause: "missing_ingress_url"
  };
  let e = QVr(s);
  if (!e.ok) return {
    ok: !1,
    cause: `invalid_ingress_origin:${e.cause}`
  };
  let n = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!n) return {
    ok: !1,
    cause: "missing_session_id"
  };
  if (!n.startsWith("cse_")) return {
    ok: !1,
    cause: "non_cse_session_id"
  };
  if (!t.test(n)) return {
    ok: !1,
    cause: "malformed_session_id"
  };
  if (!Fn()) return {
    ok: !1,
    cause: "non_first_party"
  };
  return {
    ok: !0,
    config: {
      ingressOrigin: e.origin,
      remoteSessionId: n
    }
  }
}

function Ahe() {
  let s = r();
  return s.ok ? s.config : null
}

function RWo() {
  let s = r();
  return s.ok ? null : s.cause
}

function AWo() {
  return i.CCR_SESSION_PROFILE
}
export {
  QVr,
  Ahe,
  RWo,
  AWo
};
