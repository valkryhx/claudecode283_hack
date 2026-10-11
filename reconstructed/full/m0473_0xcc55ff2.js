// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  P2
} from "B:/~BUN/root/chunk-snmb1kqg.js";
import {
  so,
  yn
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  ee
} from "B:/~BUN/root/chunk-65tbbnf1.js";
import {
  Uk
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  K3,
  XB
} from "B:/~BUN/root/chunk-j36yaq51.js";
import {
  Dr
} from "B:/~BUN/root/chunk-c4gqp24s.js";

function i0n(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`
}
class o {
  availability = () => !1;
  register(e) {
    this.availability = e
  }
  isAvailable() {
    return this.availability()
  }
}
var a = new o;

function mlo(e) {
  a.register(e)
}

function eCt() {
  return a.isAvailable()
}
var a0n = new o;

function glo(e) {
  a0n.register(e)
}

function HXt() {
  return a0n.isAvailable() ? `read it with the ${yn} tool (action: "read", url)` : `${Dr} the url`
}

function hlo() {
  return eCt() ? `for a workshop page use the ${yn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read there; otherwise ${HXt()}` : HXt()
}

function G7(e) {
  let t = e !== "plain" && eCt(),
    n = HXt(),
    r = so(),
    s = ee().contentHostEgressDenied.has(r) && !(K3() && !XB(Uk)),
    i = r === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return {
    readRemedy: t ? `for a workshop page use the ${yn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read and force there; otherwise ${n}` : n,
    forceAdvisory: t ? "" : " force:true discards that newer version \u2014 someone's save from the page itself, or another session's publish \u2014 so use it only when the user explicitly asks to overwrite.",
    contentReadsBlocked: s ? P2() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${i0n(i)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${i} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null
  }
}
export {
  i0n,
  mlo,
  eCt,
  a0n,
  glo,
  HXt,
  hlo,
  G7
};
