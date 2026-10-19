// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { zC, wn, Qv, Gt, E, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { gL } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { jdn } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Rc } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { MJ } from "B:/~BUN/root/chunk-245a2x6v.js";
import { Tx } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { o, u, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
class gJr {
  #t;
  constructor(e) {
    this.#t = e;
  }
  reveal() {
    return this.#t;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
}
async function hJr(e, credentials) {
  let i;
  try {
    i = await Gt.post("/v1/code/github/import-token", {
      token: e.reveal()
    }, {
      headers: {
        "anthropic-beta": jdn.header
      },
      auth: "teleport-org",
      timeout: 15000,
      validateStatus: () => !0,
      credentials: credentials
    });
  } catch (r) {
    if (Rc(r)) {
      t(`import-token network error: ${r.code ?? "unknown"}`, {
        level: "error"
      });
      let sslHint = MJ(r);
      return {
        ok: !1,
        error: {
          kind: "network",
          ...(sslHint && {
            sslHint: sslHint
          })
        }
      };
    }
    return {
      ok: !1,
      error: {
        kind: "not_signed_in"
      }
    };
  }
  if (!i.ok) return {
    ok: !1,
    error: {
      kind: "not_signed_in"
    }
  };
  if (i.status === 200) return {
    ok: !0,
    result: i.data
  };
  if (i.status === 400) {
    let message = gL(Tx(i.data) ?? "");
    return {
      ok: !1,
      error: {
        kind: "invalid_token",
        ...(message && {
          message: message
        })
      }
    };
  }
  if (i.status === 401) return {
    ok: !1,
    error: {
      kind: "not_signed_in"
    }
  };
  return t(`import-token returned ${i.status}`, {
    level: "error"
  }), {
    ok: !1,
    error: {
      kind: "server",
      status: i.status
    }
  };
}
async function bns(e) {
  try {
    return await Qv(e), !0;
  } catch {
    return !1;
  }
}
async function c(credentials_2, {
  timeout: timeout,
  isBackground: isBackground
}) {
  try {
    let r = await Gt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: timeout,
      isBackground: isBackground,
      validateStatus: () => !0,
      credentials: credentials_2
    });
    if (!r.ok || r.status !== 200) return null;
    let s = r.data?.auth_source;
    return {
      isAuthenticated: r.data?.is_authenticated === !0,
      authSource: s === "oauth" || s === "cli_import" ? s : null
    };
  } catch {
    return null;
  }
}
async function yJr(e) {
  let n = await c(e, {
    timeout: 1e4,
    isBackground: !1
  });
  return n?.isAuthenticated ? n.authSource : null;
}
async function h(e) {
  let n = await c(e, {
    timeout: 3000,
    isBackground: !0
  });
  if (n === null) return p("api_github_connection_status", "request_failed"), "unknown";
  return g("api_github_connection_status"), n.isAuthenticated ? "connected" : "not_connected";
}
function FRe() {
  return `${ln().CLAUDE_AI_ORIGIN}/code`;
}
class k {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(e, n) {
    if (this.seedFromPersisted(), this.inFlight) await this.inFlight;else if (!d()) await this.fetch(e, n);
    return this.status ?? "unknown";
  }
  async readLive(e, n) {
    if (this.seedFromPersisted(), !this.inFlight && d()) return "unknown";
    let generation = this.generation,
      r = await (this.inFlight ?? this.fetch(e, n));
    return generation === this.generation ? r : "unknown";
  }
  peek(e, n) {
    if (this.seedFromPersisted(), this.status === void 0 && !this.inFlight && !d()) this.fetch(e, n);
    return this.status;
  }
  markConnected(e) {
    this.generation++, this.inFlight = void 0, this.status = "connected", m("connected", e);
  }
  clear() {
    this.generation++, this.inFlight = void 0, this.status = void 0;
  }
  seedFromPersisted() {
    if (this.status !== void 0 || this.inFlight) return;
    let e = S();
    if (e) this.status = b(ue(), e);
  }
  fetch(e, n) {
    let generation_2 = this.generation,
      r = h(e).then(s => (this.settle(generation_2, s, n), s), s => (l(s), this.settle(generation_2, "unknown", n), "unknown"));
    return this.inFlight = r, r;
  }
  settle(e, n, i) {
    if (e !== this.generation) return;
    if (this.inFlight = void 0, n === "unknown") {
      this.status ??= n;
      return;
    }
    this.status = n, m(n, i);
  }
}
var wz = new z(() => new k());
function d() {
  return E("tengu_cheerful_horizon", !1);
}
var C = f(() => u({
  accountUuid: o(),
  orgUuid: o(),
  status: U(["connected", "not_connected"])
}));
function S() {
  let e = wn();
  if (!e?.organizationUuid) return;
  let CLAUDE_CODE_ORGANIZATION_UUID = a.CLAUDE_CODE_ORGANIZATION_UUID;
  if (CLAUDE_CODE_ORGANIZATION_UUID && CLAUDE_CODE_ORGANIZATION_UUID !== e.organizationUuid) return;
  if (zC() !== "store") return;
  return {
    accountUuid: e.accountUuid,
    orgUuid: e.organizationUuid
  };
}
function b(e, n) {
  let i = C().safeParse(e.githubWebConnectionStatusCache);
  if (!i.success || i.data.accountUuid !== n.accountUuid || i.data.orgUuid !== n.orgUuid) return;
  return i.data.status;
}
function m(status, n) {
  let i = S();
  if (!i) return;
  Ce(r => b(r, i) === status ? r : {
    ...r,
    githubWebConnectionStatusCache: {
      ...i,
      status: status
    }
  }, n);
}
export { gJr, hJr, bns, yJr, FRe, wz };