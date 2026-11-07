// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ke
} from "B:/~BUN/root/chunk-y2g9f85n.js";
class bSn extends Ke {
  why;
  constructor(e) {
    super(`serving client ${e} while the request was pending`);
    this.why = e;
    this.name = "ServingInstanceGoneError"
  }
}
class SSn extends Ke {
  status;
  constructor(e) {
    super("request event dropped after an upload attempt that may have landed; delivery unknown");
    this.status = e;
    this.name = "RequestDeliveryUnknownError"
  }
}
class oYo extends Ke {
  constructor() {
    super("request withdrawn before it left this process; not delivered");
    this.name = "RequestWithdrawnUnsentError"
  }
}
class wSn extends Ke {
  status;
  constructor(e) {
    super("request event refused by the session service; not delivered");
    this.status = e;
    this.name = "RequestNotDeliveredError"
  }
}
export {
  bSn,
  SSn,
  oYo,
  wSn
};
