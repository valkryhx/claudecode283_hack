// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { fF } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { Uo, cn } from "B:/~BUN/root/chunk-qp0344nb.js";
import { ee } from "B:/~BUN/root/chunk-t63e78w2.js";
import { uA } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { J7, eU } from "B:/~BUN/root/chunk-neajqqs3.js";
import { pr } from "B:/~BUN/root/chunk-j1zjtkgf.js";
function bfr(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`;
}
class o {
  availability = () => !1;
  register(e) {
    this.availability = e;
  }
  isAvailable() {
    return this.availability();
  }
}
var a = new o();
function Xds(e) {
  a.register(e);
}
function n8t() {
  return a.isAvailable();
}
var Sfr = new o();
function Jds(e) {
  Sfr.register(e);
}
function pMn() {
  return Sfr.isAvailable() ? `read it with the ${cn} tool (action: "read", url)` : `${pr} the url`;
}
function Qds() {
  return n8t() ? `for a workshop page use the ${cn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read there; otherwise ${pMn()}` : pMn();
}
function Sue(e) {
  let t = e !== "plain" && n8t(),
    n = pMn(),
    r = Uo(),
    s = ee().contentHostEgressDenied.has(r) && !(J7() && !eU(uA)),
    i = r === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return {
    readRemedy: t ? `for a workshop page use the ${cn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read and force there; otherwise ${n}` : n,
    forceAdvisory: t ? "" : " force:true discards that newer version \u2014 someone's save from the page itself, or another session's publish \u2014 so use it only when the user explicitly asks to overwrite.",
    contentReadsBlocked: s ? fF() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${bfr(i)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${i} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null
  };
}
export { bfr, Xds, n8t, Sfr, Jds, pMn, Qds, Sue };