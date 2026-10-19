// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
function B(r) {
  if (r < 60000) return `${Math.round(r / 1000)}s`;
  let n = Math.floor(r / 60000),
    o = Math.round(r % 60000 / 1000);
  return o > 0 ? `${n}m ${o}s` : `${n}m`;
}
function QN(r) {
  let o = (r.startsWith("sk-ant-si-") ? r.slice(10) : r).split(".");
  if (o.length !== 3 || !o[1]) return null;
  try {
    return J(Buffer.from(o[1], "base64url").toString("utf8"));
  } catch {
    return null;
  }
}
function Fdn(r) {
  let n = r ? QN(r) : null,
    o = n !== null && typeof n === "object" && "aud" in n ? n.aud : void 0;
  return o === "claude-gateway" || Array.isArray(o) && o.includes("claude-gateway");
}
function X6n(r) {
  let n = QN(r);
  return n !== null && typeof n === "object" && "session_id" in n && typeof n.session_id === "string" ? n.session_id : void 0;
}
function jO(r) {
  let n = QN(r);
  if (n !== null && typeof n === "object" && "exp" in n && typeof n.exp === "number") return n.exp;
  return null;
}
var L = 300000,
  T = 1800000,
  j = 3,
  G = 60000;
function Ght({
  getAccessToken: getAccessToken,
  onRefresh: onRefresh,
  onExhausted: onExhausted,
  label: label,
  refreshBufferMs = L,
  maxFailures = j,
  adaptiveBuffer = !1,
  rescheduleFromNewToken = !1,
  decodeExpiry = jO,
  formatDelay = B
}) {
  let l = new Map(),
    h = new Map(),
    m = new Map();
  function E(e) {
    let s = (m.get(e) ?? 0) + 1;
    return m.set(e, s), s;
  }
  function schedule(e, s) {
    let f = decodeExpiry(s);
    if (!f) {
      t(`[${label}:token] Could not decode JWT expiry for sessionId=${e}, token prefix=${s.slice(0, 15)}\u2026, keeping existing timer`);
      return;
    }
    let g = l.get(e);
    if (g) clearTimeout(g);
    let a = E(e),
      _ = new Date(f * 1000).toISOString(),
      v = f * 1000 - Date.now(),
      M = adaptiveBuffer ? Math.min(refreshBufferMs, Math.max(1000, Math.floor(v * 0.2))) : refreshBufferMs,
      S = v - M;
    if (S <= 0) t(`[${label}:token] Token for sessionId=${e} expires=${_} (past or within buffer), refreshing immediately`);else {
      let F = adaptiveBuffer ? Math.round(M / 1000) : refreshBufferMs / 1000;
      t(`[${label}:token] Scheduled token refresh for sessionId=${e} in ${formatDelay(S)} (expires=${_}, buffer=${F}s)`);
    }
    w(e, Date.now() + S, a);
  }
  let N = 60000;
  function w(e, s, f) {
    h.delete(e);
    function g() {
      if (m.get(e) !== f) return;
      let a = s - Date.now();
      if (a <= 0) {
        x(e, f);
        return;
      }
      let _ = setTimeout(g, Math.min(a, N));
      l.set(e, _);
    }
    g();
  }
  function scheduleFromExpiresIn(e, s) {
    let f = l.get(e);
    if (f) clearTimeout(f);
    let g = E(e),
      a = Math.max(s * 1000 - refreshBufferMs, 30000);
    t(`[${label}:token] Scheduled token refresh for sessionId=${e} in ${formatDelay(a)} (expires_in=${s}s, buffer=${refreshBufferMs / 1000}s)`), w(e, Date.now() + a, g);
  }
  function refreshNow(e) {
    let s = l.get(e);
    if (s) clearTimeout(s);
    let f = E(e);
    t(`[${label}:token] Immediate token refresh requested for sessionId=${e}`), x(e, f);
  }
  async function x(e, s) {
    let f;
    try {
      f = await getAccessToken();
    } catch (error) {
      t(`[${label}:token] getAccessToken threw for sessionId=${e}: ${d(error)}`, {
        level: "error"
      });
    }
    if (m.get(e) !== s) {
      t(`[${label}:token] doRefresh for sessionId=${e} stale (gen ${s} vs ${m.get(e)}), skipping`);
      return;
    }
    if (!f) {
      let a = (h.get(e) ?? 0) + 1;
      if (h.set(e, a), t(`[${label}:token] No OAuth token available for refresh, sessionId=${e} (failure ${a}${Number.isFinite(maxFailures) ? `/${maxFailures}` : ""})`, {
        level: "error"
      }), X("error", "bridge_token_refresh_no_oauth"), a < maxFailures) {
        let _ = setTimeout(x, G, e, s);
        l.set(e, _);
        return;
      }
      t(`[${label}:token] Refresh chain exhausted for sessionId=${e} after ${a} consecutive failures`, {
        level: "error"
      }), X("error", "bridge_token_refresh_exhausted"), onExhausted?.(e, "no_oauth_token");
      return;
    }
    if (h.delete(e), t(`[${label}:token] Refreshing token for sessionId=${e}: new token prefix=${f.slice(0, 15)}\u2026`), i("tengu_bridge_token_refreshed", {}), onRefresh(e, f), rescheduleFromNewToken && decodeExpiry(f)) {
      schedule(e, f);
      return;
    }
    let g = setTimeout(x, T, e, s);
    l.set(e, g), t(rescheduleFromNewToken ? `[${label}:token] Non-JWT token \u2014 scheduled fallback refresh for sessionId=${e} in ${formatDelay(T)}` : `[${label}:token] Scheduled follow-up refresh for sessionId=${e} in ${formatDelay(T)}`);
  }
  function cancel(e) {
    E(e);
    let s = l.get(e);
    if (s) clearTimeout(s), l.delete(e);
    h.delete(e);
  }
  function cancelAll() {
    for (let e of m.keys()) E(e);
    for (let e of l.values()) clearTimeout(e);
    l.clear(), h.clear();
  }
  return {
    schedule: schedule,
    scheduleFromExpiresIn: scheduleFromExpiresIn,
    refreshNow: refreshNow,
    cancel: cancel,
    cancelAll: cancelAll
  };
}
var Kzs = /^mem_[A-Za-z0-9_-]{1,120}$/;
function I(r) {
  let n = BigInt(58),
    o = Array(22).fill("1"),
    u = 21,
    c = r;
  while (c > 0n) {
    let p = Number(c % n);
    o[u] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[p], c = c / n, u--;
  }
  return o.join("");
}
function P(r) {
  let n = r.replaceAll("-", "");
  if (n.length !== 32) throw Error(`Invalid UUID hex length: ${n.length}`);
  return BigInt("0x" + n);
}
function J6n(r, n) {
  try {
    let o = P(n);
    return `${r}_01${I(o)}`;
  } catch {
    return;
  }
}
function V(r) {
  if (r.length !== 22) return;
  let n = BigInt(58),
    o = 0n;
  for (let u of r) {
    let c = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(u);
    if (c < 0) return;
    o = o * n + BigInt(c);
  }
  return o;
}
function jM(r) {
  let n = r.lastIndexOf("_");
  if (n < 0) return;
  let o = r.slice(n + 1);
  if (!o.startsWith("01")) return;
  let u = V(o.slice(2));
  if (u === void 0) return;
  let c = u.toString(16).padStart(32, "0");
  if (c.length !== 32) return;
  return `${c.slice(0, 8)}-${c.slice(8, 12)}-${c.slice(12, 16)}-${c.slice(16, 20)}-${c.slice(20, 32)}`;
}
export { QN, Fdn, X6n, jO, Ght, Kzs, J6n, jM };