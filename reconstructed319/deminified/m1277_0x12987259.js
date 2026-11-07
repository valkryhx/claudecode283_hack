// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S_ } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { qM, p9, Eno, _9, bI } from "B:/~BUN/root/chunk-27h4st9h.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
async function w_n({
  toolUseContext: toolUseContext,
  forkContextMessages: forkContextMessages,
  mainThreadAgentDefinition: mainThreadAgentDefinition
}) {
  let {
    systemPrompt: systemPrompt,
    userContext: userContext,
    systemContext: systemContext
  } = Eno() ?? (await i(toolUseContext, mainThreadAgentDefinition));
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
  let [systemPrompt_2, userContext_2, systemContext_2] = await Promise.all([e.renderedSystemPrompt ?? n(e, o), bI(e.session, e.storageV5, e.credentials), _9(e.session, e.options.cacheBreakerPhrase)]);
  return {
    systemPrompt: systemPrompt_2,
    userContext: userContext_2,
    systemContext: systemContext_2
  };
}
async function n(toolUseContext_2, mainThreadAgentDefinition_2) {
  let t = se(toolUseContext_2),
    defaultSystemPrompt = await qM(toolUseContext_2.options.tools, S_({
      permissionMode: t.mode,
      mainLoopModel: toolUseContext_2.options.mainLoopModel
    }));
  return p9({
    mainThreadAgentDefinition: mainThreadAgentDefinition_2,
    toolUseContext: toolUseContext_2,
    customSystemPrompt: toolUseContext_2.options.customSystemPrompt,
    defaultSystemPrompt: defaultSystemPrompt,
    appendSystemPrompt: toolUseContext_2.options.appendSystemPrompt
  });
}
export { w_n };