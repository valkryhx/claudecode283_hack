// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  qg
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  fq,
  DR,
  ex,
  wq,
  abr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
async function V6t({
  toolUseContext: e,
  forkContextMessages: o,
  mainThreadAgentDefinition: t
}) {
  let {
    systemPrompt: s,
    userContext: m,
    systemContext: r
  } = abr() ?? await i(e, t);
  return {
    systemPrompt: s,
    userContext: m,
    systemContext: r,
    toolUseContext: e,
    forkContextMessages: o,
    advisorModel: e.getAdvisorSetting()
  }
}
async function i(e, o) {
  let [t, s, m] = await Promise.all([e.renderedSystemPrompt ?? n(e, o), DR(e.session, e.storageV5, e.credentials), fq(e.session, e.options.cacheBreakerPhrase)]);
  return {
    systemPrompt: t,
    userContext: s,
    systemContext: m
  }
}
async function n(e, o) {
  let t = le(e),
    s = await ex(e.options.tools, qg({
      permissionMode: t.mode,
      mainLoopModel: e.options.mainLoopModel
    }));
  return wq({
    mainThreadAgentDefinition: o,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: s,
    appendSystemPrompt: e.options.appendSystemPrompt
  })
}
export {
  V6t
};
