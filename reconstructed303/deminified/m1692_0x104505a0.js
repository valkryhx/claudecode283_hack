// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { cn as name, mcn as ruleContentField, a4 } from "B:/~BUN/root/chunk-qp0344nb.js";
import { Jds } from "B:/~BUN/root/chunk-dt8mvd2y.js";
import { min, EO, bIr, Ixo, Mxo } from "B:/~BUN/root/chunk-66hg7026.js";
import { Si } from "B:/~BUN/root/chunk-bk5b2aym.js";
Jds(() => EO() && !min());
var k_e = {
  name: name,
  aliases: void 0,
  enablesCodeExecution: void 0,
  underlyingV1ToolName: void 0,
  aliasSkillToolNames: void 0,
  familyParentToolName: void 0,
  mcpInfo: void 0,
  isMcp: void 0,
  isLsp: void 0,
  searchHint: "render an HTML file to a claude.ai web page",
  briefStandalone: !0,
  shouldDefer: !1,
  whenToUse: `publishes pages on claude.ai; reads claude.ai artifact links. Load it with ${Si} (select:${name}) before writing any document, plan, analysis or visual, and whenever other people come up as readers, even after the work is written. Its description says whether to publish, offer a page or do neither.`,
  backgrounding: "never",
  maxResultSizeChars: a4,
  persistenceThresholdCeiling: a4,
  skipAggregateToolResultBudget: !0,
  preserveToolUseResultInSubagents: !0,
  stripToolUseResultAtCreation: !0,
  ruleContentField: ruleContentField,
  isEnabled() {
    Ixo();
    let e = bIr();
    return Mxo(e), e === null;
  }
};
export { k_e };