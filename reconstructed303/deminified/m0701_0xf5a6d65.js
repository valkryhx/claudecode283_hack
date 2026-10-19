// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Oh, ERs } from "B:/~BUN/root/chunk-dn8rakwm.js";
function m2r() {
  let t,
    o = !1,
    r = () => {
      if (Oh()) o = !0, import("B:/~BUN/root/chunk-f1q30wr2.js").then(({
        createRemoteToolHostsRuntime: createRemoteToolHostsRuntime
      }) => {
        t = createRemoteToolHostsRuntime();
      }).catch(e => {
        l(H(e)), o = !1;
      });
    },
    loopbackDev = void 0;
  if (ERs({
    get remote() {
      if (!o) r();
      return t;
    },
    ...(loopbackDev !== void 0 && {
      loopbackDev: loopbackDev
    })
  }), Oh()) r();
}
export { m2r };