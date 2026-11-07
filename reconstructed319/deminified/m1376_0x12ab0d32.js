// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { U3t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { isDeepStrictEqual as t } from "util";
function G6e(a, i) {
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
        autoCompactWindow_2 = autoCompactWindow == null ? U3t() : Number(autoCompactWindow);
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
export { G6e };