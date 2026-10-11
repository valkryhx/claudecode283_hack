// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { dp } from "B:/~BUN/root/chunk-zksmb712.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { rf, Dt, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Xt } from "B:/~BUN/root/chunk-3hjtxzqy.js";
var timeout = 1e4,
  a = {
    auth: "teleport-org",
    timeout: timeout,
    headers: {
      "anthropic-beta": dp
    }
  };
function SWe() {
  if (It()) return !1;
  if (!Xt("allow_team_onboarding")) return !1;
  if (!rf()) return !1;
  return x("tengu_flint_harbor_share", !1);
}
function o(e) {
  if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `Onboarding guide unavailable: ${e.reason}`);
  return e.data;
}
function t() {
  if (!Xt("allow_team_onboarding")) throw Error("Onboarding guide unavailable: policy-disabled");
}
async function m7r(content, name, credentials) {
  t();
  let d = await Dt.post("/api/organizations/:orgUUID/claude_code/onboarding", {
      content: content,
      name: name
    }, {
      ...a,
      credentials: credentials
    }),
    s = o(d);
  return i("tengu_team_onboarding_share_created", {}), s;
}
async function Lor(e, content_2, credentials_2) {
  t();
  let d = await Dt.put(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`, {
      content: content_2
    }, {
      ...a,
      credentials: credentials_2
    }),
    s = o(d);
  return i("tengu_team_onboarding_share_updated", {}), s;
}
async function g7r(e, credentials_3) {
  t();
  let r = await Dt.delete(`/api/organizations/:orgUUID/claude_code/onboarding/${encodeURIComponent(e)}`, void 0, {
    ...a,
    credentials: credentials_3
  });
  o(r), i("tengu_team_onboarding_share_deleted", {});
}
async function Nor(credentials_4) {
  t();
  let n = await Dt.get("/api/organizations/:orgUUID/claude_code/onboarding", {
    ...a,
    credentials: credentials_4
  });
  return o(n).guides;
}
export { SWe, m7r, Lor, g7r, Nor };