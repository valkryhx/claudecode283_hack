// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { jr } from "B:/~BUN/root/chunk-46ahshhq.js";
import { wf } from "B:/~BUN/root/chunk-dew5sv9w.js";
var u = [jr, "raw.githubusercontent.com", "objects.githubusercontent.com", "gist.githubusercontent.com", "gitlab.com", "bitbucket.org", "codeberg.org", "dev.azure.com", "ssh.dev.azure.com", "storage.googleapis.com"];
function s(t) {
  let e,
    n = /^[^@/]+@([^:/]+):/.exec(t);
  if (n) e = n[1];else try {
    e = new URL(t).hostname;
  } catch {
    return "unknown";
  }
  let i = e.toLowerCase();
  return u.find(item => item === i) ?? "other";
}
function a(t) {
  return t.includes(`anthropics/${wf}`);
}
function vF(t, e, n, i, r, is_directory, o) {
  l("tengu_plugin_remote_fetch", {
    source: f(t),
    host: f(e ? s(e) : "unknown"),
    is_official: t === "plugin_catalog" || (e ? a(e) : !1),
    outcome: f(n),
    duration_ms: Math.round(i),
    ...(r && {
      error_kind: f(r)
    }),
    ...(is_directory !== void 0 ? {
      is_directory: is_directory
    } : {}),
    ...(o && {
      submodule_selection: f(o.fetched === "all" ? "all" : "selected"),
      submodules_recorded: o.recorded,
      submodules_fetched: o.fetched === "all" ? o.recorded : o.fetched
    })
  });
}
function j9(t) {
  let e = String(t?.message ?? t);
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(e)) return "dns_or_refused";
  if (/ETIMEDOUT|timed out|timeout/i.test(e)) return "timeout";
  if (/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(e)) return "conn_reset";
  if (/403|401|authentication|permission denied/i.test(e)) return "auth";
  if (/404|not found|repository not found/i.test(e)) return "not_found";
  if (/certificate|SSL|TLS|unable to get local issuer/i.test(e)) return "tls";
  if (/Invalid response format|Invalid marketplace schema/i.test(e)) return "invalid_schema";
  return "other";
}
export { vF, j9 };