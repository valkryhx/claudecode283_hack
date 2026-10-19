// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  wx
} from "B:/~BUN/root/chunk-hkc0g0wr.js";

function Car(e) {
  return wx() ? e : void 0
}

function Fce(e) {
  return Car(e.proactivityLevel)
}

function _Rn(e, t) {
  let i = Car(t);
  return {
    permissionMode: e ?? (i === void 0 ? void 0 : "default"),
    proactivityLevel: i
  }
}
export {
  Car,
  Fce,
  _Rn
};
