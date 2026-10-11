// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
class e {
  directories = [];
  get() {
    return this.directories;
  }
  publish(o) {
    let i = L([...o.additionalWorkingDirectories.values()].map(item => item.path)).sort(),
      directories = this.directories;
    if (directories.length === i.length && directories.every((item, index) => item === i[index])) return !1;
    return this.directories = i, !0;
  }
  reset() {
    this.directories = [];
  }
}
var a = new q(() => new e());
function n() {
  return a.of(j().host);
}
function dse() {
  return n().get();
}
function G8t(o) {
  return n().publish(o);
}
export { dse, G8t };