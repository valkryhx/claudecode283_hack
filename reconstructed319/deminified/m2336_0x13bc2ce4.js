// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { y0t } from "B:/~BUN/root/chunk-ghg0e5bm.js";
class dvn extends TransformStream {
  constructor({
    onError: onError,
    onRetry: onRetry,
    onComment: onComment
  } = {}) {
    let s;
    super({
      start(e) {
        s = y0t({
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
export { dvn };