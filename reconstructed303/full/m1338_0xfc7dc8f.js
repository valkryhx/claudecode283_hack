// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  c2
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  _,
  J
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  jh
} from "B:/~BUN/root/chunk-k9zm82w3.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Hu
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Ct
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  jin
} from "B:/~BUN/root/chunk-7ybsx93y.js";
import {
  o,
  v,
  M,
  T,
  u,
  _t,
  fe,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  hs
} from "B:/~BUN/root/chunk-qjf8jcwq.js";
var n = {
  non_exclusive_heartbeat_interval_ms: 0,
  multisession_poll_interval_ms_not_at_capacity: 2000,
  multisession_poll_interval_ms_partial_capacity: 2000,
  multisession_poll_interval_ms_at_capacity: 600000,
  reclaim_older_than_ms: 5000,
  session_keepalive_interval_v2_ms: 120000,
  sse_connect_timeout_ms: 30000,
  watch_sessions: !1,
  watch_connected_poll_interval_ms: 60000,
  watch_fallback_poll_interval_ms: 30000,
  watch_session_end_window_ms: 600000
};
var c = {
    message: "must be 0 (disabled) or \u2265100ms"
  },
  m = f(() => u({
    non_exclusive_heartbeat_interval_ms: v().int().min(0).default(0),
    multisession_poll_interval_ms_not_at_capacity: v().int().min(100).default(n.multisession_poll_interval_ms_not_at_capacity),
    multisession_poll_interval_ms_partial_capacity: v().int().min(100).default(n.multisession_poll_interval_ms_partial_capacity),
    multisession_poll_interval_ms_at_capacity: v().int().refine((e) => e === 0 || e >= 100, c).default(n.multisession_poll_interval_ms_at_capacity),
    reclaim_older_than_ms: v().int().min(1).default(5000),
    session_keepalive_interval_v2_ms: v().int().min(0).default(120000),
    sse_connect_timeout_ms: v().int().max(Hu).refine((e) => e === 0 || e >= 20000, {
      message: "must be 0 (disabled) or \u226520000ms"
    }).default(n.sse_connect_timeout_ms),
    watch_sessions: M().catch(n.watch_sessions),
    watch_connected_poll_interval_ms: v().int().min(15000).max(96000).catch(n.watch_connected_poll_interval_ms),
    watch_fallback_poll_interval_ms: v().int().min(15000).max(96000).catch(n.watch_fallback_poll_interval_ms),
    watch_session_end_window_ms: v().int().min(0).max(3600000).catch(n.watch_session_end_window_ms)
  }).refine((e) => e.non_exclusive_heartbeat_interval_ms > 0 || e.multisession_poll_interval_ms_at_capacity > 0, {
    message: "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0"
  }));

function q8() {
  let e = c2("tengu_bridge_poll_interval_config", n, 300000),
    t = m().safeParse(e);
  return t.success ? t.data : n
}
var p = f(() => _t({
    version: C(1),
    session_ingress_token: o().min(1),
    api_base_url: o(),
    claude_code_args: fe(o(), o()).optional().catch(void 0),
    mcp_config: _t({
      content: o(),
      path: o().optional(),
      mode: v().optional()
    }).optional().catch(void 0),
    auto_mode_environment: T(o()).optional().catch(void 0),
    worktree: M().optional().catch(void 0)
  })),
  d = {
    secret_did_not_decode: "Work secret is not valid JSON",
    unsupported_version: "Unsupported work secret version",
    missing_session_ingress_token: "Invalid work secret: missing or empty session_ingress_token",
    missing_api_base_url: "Invalid work secret: missing api_base_url"
  };
class GFe extends Error {
  verdict;
  constructor(e) {
    super(d[e]);
    this.verdict = e;
    this.name = "WorkSecretShapeError"
  }
}

function kue(e) {
  let t;
  try {
    t = J(Buffer.from(e, "base64url").toString("utf-8"))
  } catch {
    throw new GFe("secret_did_not_decode")
  }
  let s = p().safeParse(t);
  if (s.success) return s.data;
  let i = new Set(s.error.issues.map((r) => r.path[0]));
  if (i.has(void 0) || i.has("version")) throw new GFe("unsupported_version");
  if (i.has("session_ingress_token")) throw new GFe("missing_session_ingress_token");
  throw new GFe("missing_api_base_url")
}

function VFe(e, t) {
  if (e === t) return !0;
  let s = e.slice(e.lastIndexOf("_") + 1),
    i = t.slice(t.lastIndexOf("_") + 1);
  return s.length >= 4 && s === i
}

function qFe(e, t) {
  return jh(t, "sessionId"), `${e.replace(/\/+$/,"")}/v1/code/sessions/${t}`
}
async function wit(e, t) {
  let s = await Ct.post(`${e}/worker/register`, {}, {
      headers: {
        Authorization: `Bearer ${t}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "User-Agent": hs()
      },
      timeout: 1e4
    }),
    i = s.data?.worker_epoch,
    r = typeof i === "string" ? Number(i) : i;
  if (typeof r !== "number" || !Number.isFinite(r) || !Number.isSafeInteger(r)) {
    let a = jin(`${_(s.data)}`, "register_worker_response");
    throw Error(`registerWorker: invalid worker_epoch in response${a===void 0?" (the response is not quoted: it is too long or is not one plain line)":`: ${a}`}`)
  }
  return r
}
export {
  q8,
  GFe,
  kue,
  VFe,
  qFe,
  wit
};
