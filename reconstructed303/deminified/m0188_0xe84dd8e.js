// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { v5 } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Fn, Xa, ba } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { sc } from "B:/~BUN/root/chunk-bgdxazfn.js";
var p = " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";
class SelfHostedRunnerApiError extends Error {
  status;
  constructor(t, e) {
    super(e);
    this.name = "SelfHostedRunnerApiError", this.status = t;
  }
}
var _qe = 8080;
function l() {
  let {
    getAPIProvider: getAPIProvider
  } = import.meta.require("B:/~BUN/root/chunk-5hdvgynh.js");
  if (getAPIProvider() !== "firstParty") throw new SelfHostedRunnerApiError(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.");
}
function bqe() {
  let t = a.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (t) return t;
  return ln().BASE_API_URL;
}
function y7o() {
  return ln().CLAUDE_AI_ORIGIN;
}
async function m(credentials) {
  l();
  let e = import.meta.require("B:/~BUN/root/chunk-268y702m.js");
  if (e.isConsoleProfileSessionsCredential()) {
    let s = await e.sessionsApiAccessToken(!0);
    if (!s) throw new SelfHostedRunnerApiError(401, e.cloudSessionsSignInRefusal());
    return s;
  }
  await ba({
    credentials: credentials
  }).catch(() => {});
  let o = W() && credentials !== void 0 ? (await Xa(credentials))?.accessToken : Fn()?.accessToken;
  if (!o) throw new SelfHostedRunnerApiError(401, "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)");
  return o;
}
function nNe(ui) {
  return {
    ui: ui
  };
}
async function rNe(method, e, data, signal, c) {
  l();
  let d = await m(c),
    n = await Ct.request({
      method: method,
      url: `${bqe()}${e}`,
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
      if (Ct.isAxiosError(r) && !Ct.isCancel(r) && r.response === void 0) throw new SelfHostedRunnerApiError(0, `${method} ${e}: ${r.message}`);
      throw r;
    });
  if (n.status >= 400) {
    let r = n.data?.error?.message ?? _(n.data),
      u = `HTTP ${n.status} ${method} ${e}: ${r}`;
    if ([401, 403, 404, 409, 429].includes(n.status)) {
      let f = n.status === 401 || n.status === 403 ? p : "";
      throw new SelfHostedRunnerApiError(n.status, u + f);
    }
    throw Error(u);
  }
  return n.data;
}
function v8(tool_use_id, e) {
  return {
    tool_use_id: tool_use_id,
    type: "tool_result",
    content: sc(_(e))
  };
}
function MV(t) {
  let e = v5(t);
  if (e !== null) return e;
  return Object.entries(t).filter(([, o]) => o !== void 0).map(([o, s]) => `${o}=${typeof s === "string" ? s : _(s)}`).join(" ");
}
export { _qe, bqe, y7o, nNe, rNe, v8, MV };