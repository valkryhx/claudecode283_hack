// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { no } from "B:/~BUN/root/chunk-ewvnv67m.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Pzr } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { WCe } from "B:/~BUN/root/chunk-gbtzpa3e.js";
function gbe() {
  let e = no();
  if (e.builtinPluginsInitialized) return;
  if (e.builtinPluginsInitialized = !0, WCe("sec-default", () => import.meta.require("B:/~BUN/root/chunk-pj8jgzyh.js")), WCe("agents-md", () => import.meta.require("B:/~BUN/root/chunk-rbzw517g.js")), WCe("telemetry", () => import.meta.require("B:/~BUN/root/chunk-jcbs8zhh.js")), a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    if (WCe("plugin-authoring", () => import.meta.require("B:/~BUN/root/chunk-pc0j6ab7.js")), !Pzr()) WCe("tips", () => import.meta.require("B:/~BUN/root/chunk-zg326jsx.js")), WCe("mermaid", () => import.meta.require("B:/~BUN/root/chunk-sydeergy.js"));
  }
  let r = a.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !Pzr();
  if (r) WCe("responsive-mode", () => import.meta.require("B:/~BUN/root/chunk-6sdc9y19.js")), WCe("diff", () => import.meta.require("B:/~BUN/root/chunk-nkyfw8kf.js"));
  if (r) WCe("claude-test", () => import.meta.require("B:/~BUN/root/chunk-ehghw1wf.js"));
}
export { gbe };