// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nB
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  ss,
  Qt
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import {
  te
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  tM
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  ose,
  ZW
} from "B:/~BUN/root/chunk-hhd7smkx.js";
import {
  Vn
} from "B:/~BUN/root/chunk-tacrdmts.js";

function bXr(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`
}
class n {
  availability = () => !1;
  register(e) {
    this.availability = e
  }
  isAvailable() {
    return this.availability()
  }
}
var SXr = new n;

function Dpi(e) {
  SXr.register(e)
}

function gEn() {
  return SXr.isAvailable() ? `read it with the ${Qt} tool (action: "read", url)` : `${Vn} the url`
}

function Ege() {
  let e = gEn(),
    o = ss(),
    i = te().contentHostEgressDenied.has(o) && !(ose() && !ZW(tM)),
    t = o === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return {
    readRemedy: e,
    forceAdvisory: " force:true discards that newer version \u2014 someone's save from the page itself, or another session's publish \u2014 so use it only when the user explicitly asks to overwrite.",
    contentReadsBlocked: i ? nB() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${bXr(t)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${t} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null
  }
}
export {
  bXr,
  SXr,
  Dpi,
  gEn,
  Ege
};
