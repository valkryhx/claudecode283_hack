// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { kE, hn, Xk, jt, v, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { aB } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { X1n } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { vie } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { AD } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { o, u, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
class Q4o {
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
async function Z4o(e, credentials) {
  let r;
  try {
    r = await jt.post("/v1/code/github/import-token", {
      token: e.reveal()
    }, {
      headers: {
        "anthropic-beta": X1n.header
      },
      auth: "teleport-org",
      timeout: 15000,
      validateStatus: () => !0,
      credentials: credentials
    });
  } catch (s) {
    if (rc(s)) {
      t(`import-token network error: ${s.code ?? "unknown"}`, {
        level: "error"
      });
      let sslHint = vie(s);
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
  if (!r.ok) return {
    ok: !1,
    error: {
      kind: "not_signed_in"
    }
  };
  if (r.status === 200) return {
    ok: !0,
    result: r.data
  };
  if (r.status === 400) {
    let message = aB(AD(r.data) ?? "");
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
  if (r.status === 401) return {
    ok: !1,
    error: {
      kind: "not_signed_in"
    }
  };
  return t(`import-token returned ${r.status}`, {
    level: "error"
  }), {
    ok: !1,
    error: {
      kind: "server",
      status: r.status
    }
  };
}
async function sli(e) {
  try {
    return await Xk(e, !1), !0;
  } catch {
    return !1;
  }
}
async function l(credentials_2, {
  timeout: timeout,
  isBackground: isBackground
}) {
  try {
    let s = await jt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: timeout,
      isBackground: isBackground,
      validateStatus: () => !0,
      credentials: credentials_2
    });
    if (!s.ok || s.status !== 200) return null;
    let d = s.data?.auth_source;
    return {
      isAuthenticated: s.data?.is_authenticated === !0,
      authSource: d === "oauth" || d === "cli_import" ? d : null
    };
  } catch {
    return null;
  }
}
async function eYo(e) {
  let n = await l(e, {
    timeout: 1e4,
    isBackground: !1
  });
  return n?.isAuthenticated ? n.authSource : null;
}
async function f(e) {
  let n = await l(e, {
    timeout: 3000,
    isBackground: !0
  });
  if (n === null) return c("api_github_connection_status", "request_failed"), "unknown";
  return g("api_github_connection_status"), n.isAuthenticated ? "connected" : "not_connected";
}
function PBe() {
  return `${nn().CLAUDE_AI_ORIGIN}/code`;
}
class k {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(e, n) {
    if (this.seedFromPersisted(), this.inFlight) await this.inFlight;else if (!h()) await this.fetch(e, n);
    return this.status ?? "unknown";
  }
  async readLive(e, n) {
    if (this.seedFromPersisted(), !this.inFlight && h()) return "unknown";
    let generation = this.generation,
      s = await (this.inFlight ?? this.fetch(e, n));
    return generation === this.generation ? s : "unknown";
  }
  peek(e, n) {
    if (this.seedFromPersisted(), this.status === void 0 && !this.inFlight && !h()) this.fetch(e, n);
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
    if (e) this.status = b(fe(), e);
  }
  fetch(e, n) {
    let generation_2 = this.generation,
      s = f(e).then(d => (this.settle(generation_2, d, n), d), d => (a(d), this.settle(generation_2, "unknown", n), "unknown"));
    return this.inFlight = s, s;
  }
  settle(e, n, r) {
    if (e !== this.generation) return;
    if (this.inFlight = void 0, n === "unknown") {
      this.status ??= n;
      return;
    }
    this.status = n, m(n, r);
  }
}
var Wne = new W(() => new k());
function h() {
  return v("tengu_cheerful_horizon", !1);
}
var C = p(() => u({
  accountUuid: o(),
  orgUuid: o(),
  status: B(["connected", "not_connected"])
}));
function S() {
  let e = hn();
  if (!e?.organizationUuid) return;
  let CLAUDE_CODE_ORGANIZATION_UUID = i.CLAUDE_CODE_ORGANIZATION_UUID;
  if (CLAUDE_CODE_ORGANIZATION_UUID && CLAUDE_CODE_ORGANIZATION_UUID !== e.organizationUuid) return;
  if (kE() !== "store") return;
  return {
    accountUuid: e.accountUuid,
    orgUuid: e.organizationUuid
  };
}
function b(e, n) {
  let r = C().safeParse(e.githubWebConnectionStatusCache);
  if (!r.success || r.data.accountUuid !== n.accountUuid || r.data.orgUuid !== n.orgUuid) return;
  return r.data.status;
}
function m(status, n) {
  let r = S();
  if (!r) return;
  Le(s => b(s, r) === status ? s : {
    ...s,
    githubWebConnectionStatusCache: {
      ...r,
      status: status
    }
  }, n);
}
export { Q4o, Z4o, sli, eYo, PBe, Wne };