// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Kf
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  YU,
  pk,
  SE,
  tB,
  hNn
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
async function vkt({
  toolUseContext: e,
  forkContextMessages: o,
  mainThreadAgentDefinition: t
}) {
  let {
    systemPrompt: s,
    userContext: m,
    systemContext: r
  } = hNn() ?? await i(e, t);
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
  let [t, s, m] = await Promise.all([e.renderedSystemPrompt ?? n(e, o), pk(e.session, e.storageV5, e.credentials), YU(e.session, e.options.cacheBreakerPhrase)]);
  return {
    systemPrompt: t,
    userContext: s,
    systemContext: m
  }
}
async function n(e, o) {
  let t = me(e),
    s = await SE(e.options.tools, Kf({
      permissionMode: t.mode,
      mainLoopModel: e.options.mainLoopModel
    }));
  return tB({
    mainThreadAgentDefinition: o,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: s,
    appendSystemPrompt: e.options.appendSystemPrompt
  })
}
export {
  vkt
};
