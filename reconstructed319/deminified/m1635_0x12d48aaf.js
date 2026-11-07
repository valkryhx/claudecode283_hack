// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { eM, pEo } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { o, E, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var r = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 1e4,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    oauth_retry_max_attempts: 3,
    oauth_retry_base_delay_ms: 2000,
    min_version: "0.0.0"
  },
  _ = p(() => u({
    init_retry_max_attempts: E().int().min(1).max(10).default(3),
    init_retry_base_delay_ms: E().int().min(100).default(500),
    init_retry_jitter_fraction: E().min(0).max(1).default(0.25),
    init_retry_max_delay_ms: E().int().min(500).default(4000),
    http_timeout_ms: E().int().min(2000).default(1e4),
    uuid_dedup_buffer_size: E().int().min(100).max(50000).default(2000),
    heartbeat_interval_ms: E().int().min(5000).max(30000).default(20000),
    heartbeat_jitter_fraction: E().min(0).max(0.5).default(0.1),
    token_refresh_buffer_ms: E().int().min(30000).max(1800000).default(300000),
    teardown_archive_timeout_ms: E().int().min(500).max(2000).default(1500),
    connect_timeout_ms: E().int().min(5000).max(60000).default(15000),
    oauth_retry_max_attempts: E().int().min(0).max(6).default(3),
    oauth_retry_base_delay_ms: E().int().min(100).max(1e4).default(2000),
    min_version: o().refine(e => {
      try {
        return eM(e, "0.0.0"), !0;
      } catch {
        return !1;
      }
    }).default("0.0.0")
  }));
async function U7o() {
  let e = await pEo("tengu_bridge_repl_v2_config", r),
    t = _().safeParse(e);
  return t.success ? t.data : r;
}
async function kar() {
  let e = await U7o();
  if (e.min_version && eM({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, e.min_version)) return `Your version of Claude Code (${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION}) is too old for Remote Control.
Version ${e.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
export { U7o, kar };