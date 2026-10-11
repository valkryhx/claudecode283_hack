// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { rg, Svo } from "B:/~BUN/root/chunk-1mdeqc2r.js";
function rQn() {
  let t,
    o = !1,
    r = () => {
      if (rg()) o = !0, import("B:/~BUN/root/chunk-jea4fe7j.js").then(({
        createRemoteToolHostsRuntime: createRemoteToolHostsRuntime
      }) => {
        t = createRemoteToolHostsRuntime();
      }).catch(e => {
        d(te(e)), o = !1;
      });
    };
  if (Svo({
    get remote() {
      if (!o) r();
      return t;
    }
  }), rg()) r();
}
export { rQn };