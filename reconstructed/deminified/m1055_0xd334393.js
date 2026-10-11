// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Kf } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { YU, pk, SE, tB, hNn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
async function vkt({
  toolUseContext: toolUseContext,
  forkContextMessages: forkContextMessages,
  mainThreadAgentDefinition: mainThreadAgentDefinition
}) {
  let {
    systemPrompt: systemPrompt,
    userContext: userContext,
    systemContext: systemContext
  } = hNn() ?? (await i(toolUseContext, mainThreadAgentDefinition));
  return {
    systemPrompt: systemPrompt,
    userContext: userContext,
    systemContext: systemContext,
    toolUseContext: toolUseContext,
    forkContextMessages: forkContextMessages,
    advisorModel: toolUseContext.getAdvisorSetting()
  };
}
async function i(e, o) {
  let [systemPrompt_2, userContext_2, systemContext_2] = await Promise.all([e.renderedSystemPrompt ?? n(e, o), pk(e.session, e.storageV5, e.credentials), YU(e.session, e.options.cacheBreakerPhrase)]);
  return {
    systemPrompt: systemPrompt_2,
    userContext: userContext_2,
    systemContext: systemContext_2
  };
}
async function n(toolUseContext_2, mainThreadAgentDefinition_2) {
  let t = me(toolUseContext_2),
    defaultSystemPrompt = await SE(toolUseContext_2.options.tools, Kf({
      permissionMode: t.mode,
      mainLoopModel: toolUseContext_2.options.mainLoopModel
    }));
  return tB({
    mainThreadAgentDefinition: mainThreadAgentDefinition_2,
    toolUseContext: toolUseContext_2,
    customSystemPrompt: toolUseContext_2.options.customSystemPrompt,
    defaultSystemPrompt: defaultSystemPrompt,
    appendSystemPrompt: toolUseContext_2.options.appendSystemPrompt
  });
}
export { vkt };