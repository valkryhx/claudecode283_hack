// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { g2 } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { un, Na, $i } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { sd } from "B:/~BUN/root/chunk-xm4508e2.js";
var p = " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";
class SelfHostedRunnerApiError extends Error {
  status;
  constructor(t, e) {
    super(e);
    this.name = "SelfHostedRunnerApiError", this.status = t;
  }
}
var PIe = 8080;
function c() {
  let {
    getAPIProvider: getAPIProvider
  } = import.meta.require("B:/~BUN/root/chunk-4qfk17be.js");
  if (getAPIProvider() !== "firstParty") throw new SelfHostedRunnerApiError(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.");
}
function IIe() {
  let t = a.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (t) return t;
  return an().BASE_API_URL;
}
function MJr() {
  return an().CLAUDE_AI_ORIGIN;
}
async function m(credentials) {
  c(), await $i({
    credentials: credentials
  }).catch(() => {});
  let e = H() && credentials !== void 0 ? (await Na(credentials))?.accessToken : un()?.accessToken;
  if (!e) throw new SelfHostedRunnerApiError(401, "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)");
  return e;
}
function aSe(ui) {
  return {
    ui: ui
  };
}
async function lSe(method, e, data, signal, l) {
  c();
  let d = await m(l),
    n = await mt.request({
      method: method,
      url: `${IIe()}${e}`,
      data: data,
      headers: {
        Authorization: `Bearer ${d}`,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      timeout: 20000,
      signal: signal,
      validateStatus: r => r < 500
    }).catch(r => {
      if (mt.isAxiosError(r) && !mt.isCancel(r) && r.response === void 0) throw new SelfHostedRunnerApiError(0, `${method} ${e}: ${r.message}`);
      throw r;
    });
  if (n.status >= 400) {
    let r = n.data?.error?.message ?? b(n.data),
      u = `HTTP ${n.status} ${method} ${e}: ${r}`;
    if ([401, 403, 404, 409, 429].includes(n.status)) {
      let f = n.status === 401 || n.status === 403 ? p : "";
      throw new SelfHostedRunnerApiError(n.status, u + f);
    }
    throw Error(u);
  }
  return n.data;
}
function rG(tool_use_id, e) {
  return {
    tool_use_id: tool_use_id,
    type: "tool_result",
    content: sd(b(e))
  };
}
function hU(t) {
  let e = g2(t);
  if (e !== null) return e;
  return Object.entries(t).filter(([, o]) => o !== void 0).map(([o, s]) => `${o}=${typeof s === "string" ? s : b(s)}`).join(" ");
}
export { PIe, IIe, MJr, aSe, lSe, rG, hU };