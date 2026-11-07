// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { fG } from "B:/~BUN/root/chunk-4hj5k2m3.js";
import { lu } from "B:/~BUN/root/chunk-xfdxa8bd.js";
var max = 20,
  g = new Set(["mcp_invalid_oauth_token", "mcp_unauthorized_after_token_refresh", "mcp_oauth_token_refresh_failed", "mcp_oauth_no_refresh_token"]);
class d {
  connections = new Map();
  toolLists = new lu({
    max: max
  });
  resourceLists = new lu({
    max: max
  });
  resourceTemplateLists = new lu({
    max: max
  });
  commandLists = new lu({
    max: max
  });
  reauthInFlight = new Map();
  settledCachedDialFailures = new Map();
  refusedCachedRows = new Set();
  lapsedCcrSignIns = new Set();
  urlsOnDrainingHosts = new Set();
  containerRestartsByUrl = new Map();
  liveClients = new Set();
  noteCcrDialAnswer(e, t) {
    if (t.status === 401 && g.has(t.headers.get("X-Mcp-Error-Code") ?? "")) this.lapsedCcrSignIns.add(e);else this.lapsedCcrSignIns.delete(e);
  }
  lapsedSignInKey(e) {
    return this.lapsedCcrSignIns.has(e) ? e : void 0;
  }
  restoreLapsed(e, t) {
    if (e === t) this.lapsedCcrSignIns.add(t);
  }
  noteToolPortMarks(e, t) {
    if (t.headers.get("x-ccr-tool-container-host-draining") === "1") this.urlsOnDrainingHosts.add(String(e));
    let n = t.headers.get("x-ccr-tool-container-restart");
    if (n === "replaced" || n === "restarted" && !this.containerRestartsByUrl.has(String(e))) this.containerRestartsByUrl.set(String(e), n);
  }
  forgetListings() {
    this.toolLists.clear(), this.resourceLists.clear(), this.resourceTemplateLists.clear(), this.commandLists.clear();
  }
}
function Do() {
  let e = bt();
  if (e.connectionCache === null) e.connectionCache = new d(), fG(e.connectionCache.connections), fG(e.connectionCache.settledCachedDialFailures), fG(e.connectionCache.refusedCachedRows), fG(e.connectionCache.lapsedCcrSignIns), fG(e.connectionCache.urlsOnDrainingHosts), fG(e.connectionCache.containerRestartsByUrl);
  return e.connectionCache;
}
function Qir(e, t, n, o) {
  function i(...r) {
    let a = t(...r);
    return u(n(), a, () => {
      let l = o(() => e(...r), () => n().get(a) === l, r);
      return l;
    });
  }
  let cache = {
    get: r => n().get(r),
    set(r, a) {
      return n().set(r, a), cache;
    },
    has: r => n().has(r),
    delete: r => n().delete(r),
    clear: () => n().clear()
  };
  return Object.assign(i, {
    cache: cache
  });
}
function N1e(e, t, n) {
  function o(...s) {
    return u(n(), t(...s), () => e(...s));
  }
  return Object.assign(o, {
    cache: {
      get: s => n().peek(s),
      set: (s, r) => void n().set(s, r),
      has: s => n().has(s),
      delete: s => n().delete(s),
      clear: () => n().clear(),
      size: () => n().size
    }
  });
}
function u(e, t, n) {
  let o = e.get(t);
  if (o !== void 0) return o;
  let i = n();
  return e.set(t, i), i;
}
export { Do, Qir, N1e };