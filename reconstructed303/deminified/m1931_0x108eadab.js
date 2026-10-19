// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Hpt } from "B:/~BUN/root/chunk-f2vyj316.js";
class l4t extends TransformStream {
  constructor({
    onError: onError,
    onRetry: onRetry,
    onComment: onComment
  } = {}) {
    let s;
    super({
      start(e) {
        s = Hpt({
          onEvent: r => {
            e.enqueue(r);
          },
          onError(r) {
            onError === "terminate" ? e.error(r) : typeof onError == "function" && onError(r);
          },
          onRetry: onRetry,
          onComment: onComment
        });
      },
      transform(e) {
        s.feed(e);
      }
    });
  }
}
export { l4t };