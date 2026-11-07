// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Wt
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  JA
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Lte
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  Ln,
  Tm,
  HRe,
  Kl,
  ul
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  FWn
} from "B:/~BUN/root/chunk-qfq22jk9.js";
import {
  pue,
  uCe,
  U2
} from "B:/~BUN/root/chunk-7pj7keyk.js";
import {
  Mc
} from "B:/~BUN/root/chunk-46f9vyk7.js";
import {
  AL
} from "B:/~BUN/root/chunk-s937snw9.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
var g = " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment",
  h = "Self-hosted runner tools need your claude.ai login, and Claude Code didn't send it to the configured API address because your administrator set an API key helper. Ask your administrator to remove the key helper or to use Anthropic's API address.";
class u extends Error {
  status;
  constructor(e, t) {
    super(t);
    this.name = "SelfHostedRunnerApiError", this.status = e
  }
}
var Gst = 8080;

function f() {
  let {
    getAPIProvider: e
  } = import.meta.require("B:/~BUN/root/chunk-rwm37q80.js");
  if (e() !== "firstParty") throw new u(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.")
}
var p = "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)";

function Pke() {
  let e = i.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (e) return e;
  return nn().BASE_API_URL
}

function Iei() {
  return nn().CLAUDE_AI_ORIGIN
}
async function A(e, t = Pke()) {
  f();
  let n = import.meta.require("B:/~BUN/root/chunk-xc64vz5b.js");
  if (n.isConsoleProfileSessionsCredential()) {
    let a = await n.sessionsApiAccessToken(!0);
    if (!a) throw new u(401, n.cloudSessionsSignInRefusal());
    return a
  }
  await ul({
    credentials: e
  }).catch(() => {});
  let o = X() && e !== void 0 ? (await Kl(e))?.accessToken : Ln()?.accessToken;
  if (!o) throw new u(401, p);
  if (pue(t, !0)) {
    let a = await Tm(e);
    if ((a === "env" || a === "fd") && !JA() && !HRe() && Ln()?.accessToken === o) return o;
    let d = uCe();
    throw new u(403, d === "admin" ? h : new AL(d).message)
  }
  return o
}

function JYe(e) {
  return {
    ui: e
  }
}
async function ZUe(e, t, n, o, a) {
  await U2({
    url: Pke(),
    signal: o
  }), f();
  let d = Pke(),
    c = await A(a, d);
  if (Pke() !== d) return ZUe(e, t, n, o, a);
  if (FWn(c)) throw new u(401, p);
  let r = await Wt.request({
    method: e,
    url: `${Pke()}${t}`,
    data: n,
    headers: {
      Authorization: `Bearer ${c}`,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    timeout: 20000,
    signal: o,
    validateStatus: (s) => s < 500
  }).catch((s) => {
    if (Wt.isAxiosError(s) && !Wt.isCancel(s) && s.response === void 0) throw new u(0, `${e} ${t}: ${s.message}`);
    throw s
  });
  if (r.status >= 400) {
    let s = r.data?.error?.message ?? _(r.data),
      l = `HTTP ${r.status} ${e} ${t}: ${s}`;
    if ([401, 403, 404, 409, 429].includes(r.status)) {
      let m = r.status === 401 || r.status === 403 ? g : "";
      throw new u(r.status, l + m)
    }
    throw Error(l)
  }
  return r.data
}

function Mne(e, t) {
  return {
    tool_use_id: e,
    type: "tool_result",
    content: Mc(_(t))
  }
}

function u8(e) {
  let t = Lte(e);
  if (t !== null) return t;
  return Object.entries(e).filter(([, n]) => n !== void 0).map(([n, o]) => `${n}=${typeof o==="string"?o:_(o)}`).join(" ")
}
export {
  Gst,
  Pke,
  Iei,
  JYe,
  ZUe,
  Mne,
  u8
};
