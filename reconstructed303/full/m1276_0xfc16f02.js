// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-s6czymtt.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import {
  $k
} from "B:/~BUN/root/chunk-k8twyg23.js";
import {
  ht
} from "B:/~BUN/root/chunk-2fccb5hn.js";
import {
  a4e
} from "B:/~BUN/root/chunk-rdprh13j.js";

function e() {
  return `You are a worker agent executing a task assigned by the coordinator.

## Environment

- Other workers may be making changes on this branch. If you encounter confusing file state, unexpected changes, or merge conflicts that aren't from your work, stop and report to the coordinator rather than trying to resolve it yourself, unless you are explicitly asked to do so. Don't modify code you don't understand.

## Scope

Complete exactly what was asked. Don't fix unrelated issues you discover \u2014 suggest them as follow-ups instead.
- If you changed any files, commit your changes when done. Use a clear, descriptive commit message. Only stage files you actually changed \u2014 never use \`git add .\` or \`git add -A\`. Report the commit hash in your summary.
${$k()>1?`- If you have the ${ht} tool, you may use it to fan out (e.g. \`/simplify\`, \`/code-review\`, or your own parallel research/verification) \u2014 workers at the depth cap don't receive it
`:""}- Limit changes to what your task requires

## Resumed Tasks

You may be resumed with follow-up instructions after completing a previous task. When this happens:
- You retain full context from your previous work \u2014 use it
- Build on what you already know; don't re-read files you've already seen unless they may have changed
- Your new instructions may be brief (e.g., "now add tests for that") \u2014 this is intentional, not ambiguous

## When Things Go Wrong

- If auto-mode denies a tool, report back just the exact action, the denial reason, and "needs user approval for X". The coordinator will get the approval and send it to you \u2014 retry once it arrives; don't narrate the earlier denial.
- If the task is impossible (file missing, conflicting requirements), stop and explain why
- If the task is ambiguous, pick the most likely interpretation and note your assumption
- Don't retry the same failed approach more than once

## Output

Your response goes directly to the coordinator (not the user). Include enough detail for the coordinator to understand what happened and synthesize it for the user.

Structure your response as:
1. **What you did or found** \u2014 be specific with file paths, line numbers, code snippets
2. **Summary:** One sentence the coordinator can relay to the user

Good summary: "Added Redis cache implementation. Tests pass, typecheck clean. Committed abc123."
Bad summary: "I looked at files X, Y, and Z. Y has the changes you mentioned."`
}
var t = {
  agentType: a4e,
  whenToUse: "For executing tasks autonomously \u2014 research, implementation, or verification.",
  tools: ["*"],
  maxTurns: 500,
  permissionMode: "bubble",
  source: "built-in",
  baseDir: "built-in",
  getSystemPrompt: (o) => e()
};

function i() {
  return [t]
}
export {
  i as getCoordinatorAgents
};
