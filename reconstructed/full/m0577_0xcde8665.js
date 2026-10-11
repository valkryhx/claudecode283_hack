// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  q
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Zx
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  rp
} from "B:/~BUN/root/chunk-skjrk8s1.js";
import {
  an
} from "B:/~BUN/root/chunk-zksmb712.js";
import {
  fFt
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  nK
} from "B:/~BUN/root/chunk-zafy1b6k.js";
import {
  fu
} from "B:/~BUN/root/chunk-vyq5y0zs.js";
import {
  aC,
  An,
  Cv,
  Dt,
  x,
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  o,
  u,
  z
} from "B:/~BUN/root/chunk-n8qdr73v.js";
class Xsr {
  #t;
  constructor(e) {
    this.#t = e
  }
  reveal() {
    return this.#t
  }
  toString() {
    return "[REDACTED:gh-token]"
  }
  toJSON() {
    return "[REDACTED:gh-token]"
  } [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]"
  }
}
async function Jsr(e, n) {
  let i;
  try {
    i = await Dt.post("/v1/code/github/import-token", {
      token: e.reveal()
    }, {
      headers: {
        "anthropic-beta": fFt.header
      },
      auth: "teleport-org",
      timeout: 15000,
      validateStatus: () => !0,
      credentials: n
    })
  } catch (r) {
    if (fu(r)) {
      t(`import-token network error: ${r.code??"unknown"}`, {
        level: "error"
      });
      let s = nK(r);
      return {
        ok: !1,
        error: {
          kind: "network",
          ...s && {
            sslHint: s
          }
        }
      }
    }
    return {
      ok: !1,
      error: {
        kind: "not_signed_in"
      }
    }
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
    let r = Zx(rp(i.data) ?? "");
    return {
      ok: !1,
      error: {
        kind: "invalid_token",
        ...r && {
          message: r
        }
      }
    }
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
  }
}
async function OZr(e) {
  try {
    return await Cv(e), !0
  } catch {
    return !1
  }
}
async function h(e, {
  timeout: n,
  isBackground: i
}) {
  try {
    let r = await Dt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: n,
      isBackground: i,
      validateStatus: () => !0,
      credentials: e
    });
    if (!r.ok || r.status !== 200) return null;
    let s = r.data?.auth_source;
    return {
      isAuthenticated: r.data?.is_authenticated === !0,
      authSource: s === "oauth" || s === "cli_import" ? s : null
    }
  } catch {
    return null
  }
}
async function Qsr(e) {
  let n = await h(e, {
    timeout: 1e4,
    isBackground: !1
  });
  return n?.isAuthenticated ? n.authSource : null
}
async function l(e) {
  let n = await h(e, {
    timeout: 3000,
    isBackground: !0
  });
  if (n === null) return p("api_github_connection_status", "request_failed"), "unknown";
  return _("api_github_connection_status"), n.isAuthenticated ? "connected" : "not_connected"
}

function ope() {
  return `${an().CLAUDE_AI_ORIGIN}/code`
}
class m {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(e, n) {
    if (this.seedFromPersisted(), this.inFlight) await this.inFlight;
    else if (!c()) await this.fetch(e, n);
    return this.status ?? "unknown"
  }
  async readLive(e, n) {
    if (this.seedFromPersisted(), !this.inFlight && c()) return "unknown";
    let i = this.generation,
      r = await (this.inFlight ?? this.fetch(e, n));
    return i === this.generation ? r : "unknown"
  }
  peek(e, n) {
    if (this.seedFromPersisted(), this.status === void 0 && !this.inFlight && !c()) this.fetch(e, n);
    return this.status
  }
  markConnected(e) {
    this.generation++, this.inFlight = void 0, this.status = "connected", g("connected", e)
  }
  clear() {
    this.generation++, this.inFlight = void 0, this.status = void 0
  }
  seedFromPersisted() {
    if (this.status !== void 0 || this.inFlight) return;
    let e = k();
    if (e) this.status = S(le(), e)
  }
  fetch(e, n) {
    let i = this.generation,
      r = l(e).then((s) => (this.settle(i, s, n), s), (s) => (d(s), this.settle(i, "unknown", n), "unknown"));
    return this.inFlight = r, r
  }
  settle(e, n, i) {
    if (e !== this.generation) return;
    if (this.inFlight = void 0, n === "unknown") {
      this.status ??= n;
      return
    }
    this.status = n, g(n, i)
  }
}
var DH = new q(() => new m);

function c() {
  return x("tengu_cheerful_horizon", !1)
}
var b = f(() => u({
  accountUuid: o(),
  orgUuid: o(),
  status: z(["connected", "not_connected"])
}));

function k() {
  let e = An();
  if (!e?.organizationUuid) return;
  let n = a.CLAUDE_CODE_ORGANIZATION_UUID;
  if (n && n !== e.organizationUuid) return;
  if (aC() !== "store") return;
  return {
    accountUuid: e.accountUuid,
    orgUuid: e.organizationUuid
  }
}

function S(e, n) {
  let i = b().safeParse(e.githubWebConnectionStatusCache);
  if (!i.success || i.data.accountUuid !== n.accountUuid || i.data.orgUuid !== n.orgUuid) return;
  return i.data.status
}

function g(e, n) {
  let i = k();
  if (!i) return;
  Ee((r) => S(r, i) === e ? r : {
    ...r,
    githubWebConnectionStatusCache: {
      ...i,
      status: e
    }
  }, n)
}
export {
  Xsr,
  Jsr,
  OZr,
  Qsr,
  ope,
  DH
};
