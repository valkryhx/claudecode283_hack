// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function hs() {
  return `claude-code/${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION}`;
}
function kh(e = process.env.CLAUDE_CODE_ENTRYPOINT) {
  switch (e) {
    case "claude-vscode":
      return "claude_code_vscode";
    case "remote":
    case "remote_baku":
    case "remote_cowork":
    case "remote_desktop":
    case "remote_mobile":
    case "remote_projects":
      return "claude_code_remote";
    case "claude-in-teams":
      return "claude_code_remote";
    case "sdk-cli":
    case "sdk-ts":
    case "sdk-py":
      return "claude_code_sdk";
    case "mcp":
      return "claude_code_mcp";
    case "claude-code-github-action":
      return "claude_code_github_action";
    case "local-agent":
      return "claude_code_local_agent";
    case "claude_in_slack":
      return "claude_in_slack";
    case "claude-in-slack":
      return "claude-in-slack";
    case "cli":
    default:
      return "claude_code_cli";
  }
}
function Wjo(e) {
  return `claude-code_${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION.replace(/\./g, "-")}_${e}`;
}
function OXn() {
  if (!process.env.AI_AGENT || process.env.AI_AGENT.startsWith("claude-code_") || process.env.AI_AGENT.startsWith("claude-code/")) process.env.AI_AGENT = Wjo("harness");
}
export { hs, kh, Wjo, OXn };