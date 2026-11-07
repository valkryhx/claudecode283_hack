// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { pme, Zu } from "B:/~BUN/root/chunk-65j2302z.js";
import { bfe } from "B:/~BUN/root/chunk-zstr1969.js";
function Dke() {
  let r = Fr();
  if (r.builtinPluginsInitialized) return;
  if (r.builtinPluginsInitialized = !0, bfe("cc-plugin-sec-default", () => import.meta.require("B:/~BUN/root/chunk-e3m6v0gr.js")), bfe("cc-plugin-agents-md", () => import.meta.require("B:/~BUN/root/chunk-v1dz1hnj.js")), bfe("cc-plugin-telemetry", () => import.meta.require("B:/~BUN/root/chunk-twzg4f6j.js")), bfe("cc-plugin-privacy", () => import.meta.require("B:/~BUN/root/chunk-8gw0fczm.js")), i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    if (bfe("cc-plugin-plugin-authoring", () => import.meta.require("B:/~BUN/root/chunk-ns8yfhm5.js")), bfe("cc-plugin-mods-guide", () => import.meta.require("B:/~BUN/root/chunk-s56fh8sm.js")), !pme()) bfe("cc-plugin-tips", () => import.meta.require("B:/~BUN/root/chunk-5fvxn2j5.js")), bfe("cc-plugin-mermaid", () => import.meta.require("B:/~BUN/root/chunk-10kfh7x5.js"));
  }
  let e = i.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !pme();
  if (e || Zu() === "remote") bfe("cc-plugin-responsive-mode", () => import.meta.require("B:/~BUN/root/chunk-e2wjs8dg.js"));
  if (e) bfe("cc-plugin-diff", () => import.meta.require("B:/~BUN/root/chunk-ayt6axtb.js"));
  if (i.CLAUDE_CODE_ENTRYPOINT !== "local-agent") bfe("cc-plugin-you-should-know", () => import.meta.require("B:/~BUN/root/chunk-z2sjth23.js"));
  if (e || Zu() === "remote_cowork") bfe("cc-plugin-easel", () => import.meta.require("B:/~BUN/root/chunk-w60srjes.js"));
  if (e) bfe("cc-plugin-claude-platform", () => import.meta.require("B:/~BUN/root/chunk-wsy2hr6w.js")), bfe("cc-plugin-claude-test", () => import.meta.require("B:/~BUN/root/chunk-z519ggbv.js"));
}
export { Dke };