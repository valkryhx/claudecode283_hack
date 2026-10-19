// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { U9t } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { isDeepStrictEqual as t } from "util";
function rFe(a, i) {
  i(r => {
    let o = r;
    if ("cacheBreakerPhrase" in a) {
      let cacheBreakerPhrase = a.cacheBreakerPhrase,
        cacheBreakerPhrase_2 = cacheBreakerPhrase == null ? void 0 : String(cacheBreakerPhrase);
      if (o.cacheBreakerPhrase !== cacheBreakerPhrase_2) o = {
        ...o,
        cacheBreakerPhrase: cacheBreakerPhrase_2
      };
    }
    if ("autoCompactWindow" in a) {
      let autoCompactWindow = a.autoCompactWindow,
        autoCompactWindow_2 = autoCompactWindow == null ? U9t() : Number(autoCompactWindow);
      if (!t(o.autoCompactWindow, autoCompactWindow_2)) o = {
        ...o,
        autoCompactWindow: autoCompactWindow_2
      };
    }
    if ("briefTranscript" in a) {
      let briefTranscript = Boolean(a.briefTranscript);
      if (o.briefTranscript !== briefTranscript) o = {
        ...o,
        briefTranscript: briefTranscript
      };
    }
    if ("isBriefOnly" in a) {
      let isBriefOnly = Boolean(a.isBriefOnly);
      if (o.isBriefOnly !== isBriefOnly) o = {
        ...o,
        isBriefOnly: isBriefOnly
      };
    }
    if ("slackTagConnected" in a) {
      let slackTagConnected = Boolean(a.slackTagConnected);
      if (o.slackTagConnected !== slackTagConnected) o = {
        ...o,
        slackTagConnected: slackTagConnected
      };
    }
    if ("fastMode" in a) {
      let fastMode = Boolean(a.fastMode);
      if (o.fastMode !== fastMode) o = {
        ...o,
        fastMode: fastMode
      };
    }
    if ("model" in a) {
      let model = a.model,
        n = model == null ? null : String(model);
      if (o.mainLoopModelForSession !== n) o = {
        ...o,
        mainLoopModelForSession: n
      };
      if (o.mainLoopModel !== n) o = {
        ...o,
        mainLoopModel: n
      };
    }
    return o;
  });
}
export { rFe };