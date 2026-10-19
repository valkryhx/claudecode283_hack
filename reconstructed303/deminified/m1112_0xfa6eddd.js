// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ke } from "B:/~BUN/root/chunk-3aez4b53.js";
class ServingInstanceGoneError extends Ke {
  why;
  constructor(e) {
    super(`serving client ${e} while the request was pending`);
    this.why = e;
    this.name = "ServingInstanceGoneError";
  }
}
class RequestDeliveryUnknownError extends Ke {
  status;
  constructor(e) {
    super("request event dropped after an upload attempt that may have landed; delivery unknown");
    this.status = e;
    this.name = "RequestDeliveryUnknownError";
  }
}
class RequestWithdrawnUnsentError extends Ke {
  constructor() {
    super("request withdrawn before it left this process; not delivered");
    this.name = "RequestWithdrawnUnsentError";
  }
}
class RequestNotDeliveredError extends Ke {
  status;
  constructor(e) {
    super("request event refused by the session service; not delivered");
    this.status = e;
    this.name = "RequestNotDeliveredError";
  }
}
export { ServingInstanceGoneError as X4t, RequestDeliveryUnknownError as J4t, RequestWithdrawnUnsentError as wJr, RequestNotDeliveredError as Q4t };