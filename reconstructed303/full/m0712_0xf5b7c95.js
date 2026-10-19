// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  hr
} from "B:/~BUN/root/chunk-7gwemd3j.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  jhe,
  vb
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  Qme
} from "B:/~BUN/root/chunk-h2myanpn.js";

function Tce() {
  let i = hr();
  if (i.builtinPluginsInitialized) return;
  if (i.builtinPluginsInitialized = !0, Qme("cc-plugin-sec-default", () => import.meta.require("B:/~BUN/root/chunk-n9nkh30h.js")), Qme("cc-plugin-agents-md", () => import.meta.require("B:/~BUN/root/chunk-cr5b7185.js")), Qme("cc-plugin-telemetry", () => import.meta.require("B:/~BUN/root/chunk-5c63vx97.js")), a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    if (Qme("cc-plugin-plugin-authoring", () => import.meta.require("B:/~BUN/root/chunk-rgxh5ac0.js")), Qme("cc-plugin-mods-guide", () => import.meta.require("B:/~BUN/root/chunk-ca9fcbfj.js")), !jhe()) Qme("cc-plugin-tips", () => import.meta.require("B:/~BUN/root/chunk-d3bh11vp.js")), Qme("cc-plugin-mermaid", () => import.meta.require("B:/~BUN/root/chunk-jbbx0dr2.js"))
  }
  let e = a.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !jhe();
  if (e || vb() === "remote") Qme("cc-plugin-responsive-mode", () => import.meta.require("B:/~BUN/root/chunk-aq1bzss2.js"));
  if (e) Qme("cc-plugin-diff", () => import.meta.require("B:/~BUN/root/chunk-a3q5rmbj.js"));
  if (a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") Qme("cc-plugin-you-should-know", () => import.meta.require("B:/~BUN/root/chunk-vjgppjw6.js"));
  if (e) Qme("cc-plugin-easel", () => import.meta.require("B:/~BUN/root/chunk-zadkgtbk.js"));
  if (e) Qme("cc-plugin-claude-test", () => import.meta.require("B:/~BUN/root/chunk-qyk31jb1.js"))
}
export {
  Tce
};
