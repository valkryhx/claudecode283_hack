// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S_
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  qM,
  p9,
  Eno,
  _9,
  bI
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
async function w_n({
  toolUseContext: e,
  forkContextMessages: o,
  mainThreadAgentDefinition: t
}) {
  let {
    systemPrompt: s,
    userContext: m,
    systemContext: r
  } = Eno() ?? await i(e, t);
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
  let [t, s, m] = await Promise.all([e.renderedSystemPrompt ?? n(e, o), bI(e.session, e.storageV5, e.credentials), _9(e.session, e.options.cacheBreakerPhrase)]);
  return {
    systemPrompt: t,
    userContext: s,
    systemContext: m
  }
}
async function n(e, o) {
  let t = se(e),
    s = await qM(e.options.tools, S_({
      permissionMode: t.mode,
      mainLoopModel: e.options.mainLoopModel
    }));
  return p9({
    mainThreadAgentDefinition: o,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: s,
    appendSystemPrompt: e.options.appendSystemPrompt
  })
}
export {
  w_n
};
