// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
function Vze(n, i) {
  i(r => {
    let o = r;
    if ("cacheBreakerPhrase" in n) {
      let cacheBreakerPhrase = n.cacheBreakerPhrase,
        cacheBreakerPhrase_2 = cacheBreakerPhrase == null ? void 0 : String(cacheBreakerPhrase);
      if (o.cacheBreakerPhrase !== cacheBreakerPhrase_2) o = {
        ...o,
        cacheBreakerPhrase: cacheBreakerPhrase_2
      };
    }
    if ("autoCompactWindow" in n) {
      let autoCompactWindow = n.autoCompactWindow,
        autoCompactWindow_2 = autoCompactWindow == null ? void 0 : Number(autoCompactWindow);
      if (o.autoCompactWindow !== autoCompactWindow_2) o = {
        ...o,
        autoCompactWindow: autoCompactWindow_2
      };
    }
    if ("briefTranscript" in n) {
      let briefTranscript = Boolean(n.briefTranscript);
      if (o.briefTranscript !== briefTranscript) o = {
        ...o,
        briefTranscript: briefTranscript
      };
    }
    if ("isBriefOnly" in n) {
      let isBriefOnly = Boolean(n.isBriefOnly);
      if (o.isBriefOnly !== isBriefOnly) o = {
        ...o,
        isBriefOnly: isBriefOnly
      };
    }
    if ("slackTagConnected" in n) {
      let slackTagConnected = Boolean(n.slackTagConnected);
      if (o.slackTagConnected !== slackTagConnected) o = {
        ...o,
        slackTagConnected: slackTagConnected
      };
    }
    if ("fastMode" in n) {
      let fastMode = Boolean(n.fastMode);
      if (o.fastMode !== fastMode) o = {
        ...o,
        fastMode: fastMode
      };
    }
    if ("model" in n) {
      let model = n.model,
        a = model == null ? null : String(model);
      if (o.mainLoopModelForSession !== a) o = {
        ...o,
        mainLoopModelForSession: a
      };
      if (o.mainLoopModel !== a) o = {
        ...o,
        mainLoopModel: a
      };
    }
    return o;
  });
}
export { Vze };