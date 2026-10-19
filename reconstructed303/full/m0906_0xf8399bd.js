// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ke
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Gd,
  je,
  ka
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  ki
} from "B:/~BUN/root/chunk-p4t63p2q.js";
var h = 5000,
  C = 4000,
  a = 1000,
  w = 4000,
  b = 1000,
  S = 250;

function _es(e) {
  e.browserRosterVersion++, e.browserRosterChanged.emit()
}
async function bes(e) {
  let n = ki(),
    t = n.bridgeBinding,
    o = t?.socketClient;
  if (t === void 0 || o?.listConnectedExtensions === void 0 || o.hasActiveSelection?.() === !0 || !E("tengu_hushed_lantern", !0)) return !1;
  if (!(Boolean(t.context.getPersistedDeviceId?.()) || ((await je(Promise.resolve().then(() => t.context.getLocalDeviceIds?.()), a).catch(() => {
      return
    }))?.size ?? 0) > 0)) return !1;
  if (n.relayConnectFailed === o && !o.isConnected()) return !1;
  let d = o.listConnectedExtensions.bind(o),
    i = Gd.monotonicNow(),
    c = n.noBrowserFound?.client === o && n.noBrowserFound.rosterVersion === n.browserRosterVersion,
    r = c ? "none_cached" : await ka(g(n, o, d), e, () => new Ke).catch((_) => {
      if (e.aborted) return "aborted";
      return l(_), "failed"
    });
  if (r !== "present" && r !== "roster_changed" && !c) p("chrome_permission_prompt", `browser_check_${r}`, {
    elapsed_ms: Math.round(Gd.monotonicNow() - i)
  });
  return r === "none" || r === "none_short_wait" || r === "none_cached"
}
async function Ses() {
  let e = ki().bridgeBinding?.socketClient;
  if (e?.listConnectedExtensions === void 0) return !1;
  let n = await f(e, e.listConnectedExtensions.bind(e), a).catch((t) => (l(t), "failed"));
  if (n !== "none" && n !== "present") p("chrome_setup_card_answer", `browser_check_${n}`);
  return n === "none"
}
async function g(e, n, t) {
  let o = Gd.now() + h;
  if (await je(n.ensureConnected(), C) !== !0) return e.relayConnectFailed = n, "connect_failed";
  e.relayConnectFailed = void 0;
  let s = e.browserRosterVersion,
    d = Gd.now(),
    i = await f(n, t, a);
  if (i !== "none" || e.browserRosterVersion !== s) return i === "none" ? "roster_changed" : i;
  let c = Math.min(w, o - Gd.now() - S);
  if (c < b) return "no_time_to_wait";
  let r = () => {},
    _ = new Promise((m) => {
      r = e.browserRosterChanged.subscribe(m)
    });
  if (await je(_, c).finally(() => r()), e.browserRosterVersion !== s) return "roster_changed";
  let u = await f(n, t, a);
  if (u !== "none" || e.browserRosterVersion !== s) return u === "none" ? "roster_changed" : u;
  if (Gd.now() - d < w) return "none_short_wait";
  return e.noBrowserFound = {
    client: n,
    rosterVersion: s
  }, "none"
}
async function f(e, n, t) {
  let o = await je(n(), t);
  if (!e.isConnected()) return "connection_lost";
  if (o === void 0) return "list_timeout";
  return o.length > 0 ? "present" : "none"
}
export {
  _es,
  bes,
  Ses
};
