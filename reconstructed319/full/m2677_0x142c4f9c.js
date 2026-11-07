// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R,
  Sr,
  Lh,
  UN,
  Ai
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Oyt,
  Rsn,
  Osn,
  LD,
  nS,
  Dsn,
  k1n,
  jt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  St,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Snt
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  Ju
} from "B:/~BUN/root/chunk-vmcmhkh2.js";
import {
  FHe
} from "B:/~BUN/root/chunk-1x03q1j7.js";
import {
  iRe,
  xd
} from "B:/~BUN/root/chunk-f0zgv0ya.js";
import {
  XW
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  Fot
} from "B:/~BUN/root/chunk-f3r4v4h0.js";
import {
  dh
} from "B:/~BUN/root/chunk-rc0vwsyy.js";
import {
  J0e
} from "B:/~BUN/root/chunk-1ratk947.js";
import {
  PF
} from "B:/~BUN/root/chunk-jypg1bby.js";
import {
  EMt
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  lar
} from "B:/~BUN/root/chunk-r4hgrky7.js";
import {
  IW,
  kce
} from "B:/~BUN/root/chunk-vyjvp8sa.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
var F = 25000,
  M = 4,
  G = 15000,
  B = 200,
  K = 8000000,
  U = 1e6,
  L = 128,
  Y = 60000,
  E = "Run `claude auth login` (or /login in a local session), then try again.",
  H = {
    started_by_session: "Cloud sessions cannot be read from a program that was started inside a Claude Code session. Start it outside the session and try again.",
    provider: "Cloud sessions aren't available with this API provider. They run on Anthropic's infrastructure and require an Anthropic account.",
    evaluation_run: EMt,
    nonessential_traffic: "Cloud sessions are unavailable while CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set.",
    policy: "Cloud sessions are disabled by your organization's policy.",
    policy_unverified: "Your organization's policy could not be read, so cloud sessions are unavailable. Try again in a moment.",
    not_signed_in: `Cloud sessions need a sign-in with a Claude account. ${E}`,
    sign_in_expired: `Your sign-in was not accepted. ${E}`,
    not_found: "That cloud session was not found for this sign-in.",
    forbidden: "The service did not allow this sign-in to read cloud sessions from this computer. Try Claude Code on the web instead.",
    temporarily_unavailable: "Cloud sessions could not be read right now. Try again in a moment.",
    failed: "Cloud sessions could not be read."
  },
  V = "Cloud sessions are disabled for the rest of this session because an organization with a restricted policy was signed in earlier. Restart Claude Code to check again.",
  z = "Your organization's policy could not be loaded: the request for it got a 404, which usually means that a proxy or gateway does not forward it. Ask your network admin to forward it; `claude doctor` shows which host was asked.",
  X = `Cloud sessions aren't available with this Console sign-in. They need a sign-in with a Claude account. ${E}`,
  j = "Cloud sessions can't be read with this Console sign-in.",
  q = "Cloud sessions can't be read with your Console sign-in in this process. This is a bug in Claude Code; please report it.";
class Yoa {
  inFlight = 0;
  reported = new Set;
  proofRereadAt = Number.NEGATIVE_INFINITY;
  async pageWasRefused() {
    if (Date.now() - this.proofRereadAt < Y) return;
    this.proofRereadAt = Date.now();
    try {
      let {
        clearTrustedDeviceTokenCache: e
      } = await import("B:/~BUN/root/chunk-r0p2edvv.js");
      e()
    } catch (e) {
      t(`[cloud-sessions] the kept read of the trusted-device proof was not cleared: ${Lh(e)??"error"}`, {
        level: "error"
      })
    }
  }
  async answer(e, s) {
    if (e.subtype === "get_cloud_session") NUr(e.subtype, e.session_id);
    let r = await this.bounded(e.subtype, s, async (d) => {
        let u = e.subtype === "list_cloud_sessions" && e.user_initiated !== !0,
          _ = await FUr(!u);
        if (_ !== null) return _;
        let l = XW();
        if (e.subtype === "list_cloud_sessions") {
          let S = await Hun(l ? `/v1/code/sessions?limit=${B}` : "/v1/sessions", {
              signal: d,
              context: s,
              maxResponseBytes: K,
              olderApi: !l,
              isBackground: u
            }),
            k = S.ok && S.status === 404 ? kP("failed") : $un(S, u);
          if (k !== null) return k;
          let f = S.ok ? S.data : void 0;
          if (!it(f) || !Array.isArray(f.data)) return kP("failed");
          return {
            status: "ok",
            sessions: f.data.flatMap((n) => {
              if (!it(n) || typeof n.id !== "string") return [];
              let C = Snt(n.id),
                I = [n.updated_at, n.last_event_at, n.created_at].find((y) => typeof y === "string");
              if (C.length > L || !J0e.test(C) || typeof I !== "string") return [];
              let b;
              switch (n.session_status) {
                case "running":
                case "idle":
                case "requires_action":
                case "archived":
                case "pending":
                case "failed":
                  b = n.session_status;
                  break;
                default:
                  b = lar({
                    status: typeof n.status === "string" ? n.status : void 0,
                    worker_status: typeof n.worker_status === "string" ? n.worker_status : void 0,
                    connection_status: typeof n.connection_status === "string" ? n.connection_status : void 0
                  })
              }
              let h = x(n, "sources").find((y) => it(y) && y.type === "git_repository"),
                [D, T] = it(h) && typeof h.url === "string" ? FHe(h.url)?.split("/") ?? [] : [],
                O = D && T ? {
                  owner: D,
                  name: T
                } : void 0,
                N = P(n);
              return [{
                id: C,
                title: typeof n.title === "string" ? n.title : "",
                updated_at: I,
                status: b,
                ...Oyt(n.environment_kind) && {
                  environment_kind: n.environment_kind
                },
                ...O !== void 0 && {
                  repository: O
                },
                ...N !== void 0 && {
                  branch: N
                }
              }]
            }),
            truncated: l ? typeof f.next_cursor === "string" && f.next_cursor !== "" : f.has_more === !0
          }
        }
        let p = await Hun(l ? `/v1/code/sessions/${e.session_id}` : `/v1/sessions/${e.session_id}`, {
            signal: d,
            context: s,
            maxResponseBytes: U,
            olderApi: !l,
            isBackground: u
          }),
          v = $un(p, u);
        if (v !== null) return v;
        let A = p.ok ? p.data : void 0,
          c = l ? Rsn(A) : A;
        if (!it(c)) return kP("not_found");
        let w = P(c);
        return {
          status: "ok",
          ...typeof c.title === "string" && c.title !== "" && {
            title: c.title
          },
          ...w !== void 0 && {
            branch: w
          },
          ...Oyt(c.environment_kind) && {
            environment_kind: c.environment_kind
          }
        }
      }),
      o = r.status === "unavailable" ? r.reason ?? "failed" : void 0;
    switch (e.subtype) {
      case "list_cloud_sessions":
        if (o === void 0) g("sdk_list_cloud_sessions");
        else m("sdk_list_cloud_sessions", o);
        break;
      case "get_cloud_session":
        if (o === void 0) g("sdk_get_cloud_session");
        else m("sdk_get_cloud_session", o);
        break
    }
    return r
  }
  async bounded(e, s, r) {
    if (this.inFlight >= M) return kP("temporarily_unavailable");
    this.inFlight++;
    let o = Ju(s.abortController);
    try {
      let d = await we(r(o.signal), F);
      if (d !== void 0) return d;
      return o.abort(), kP("temporarily_unavailable")
    } catch (d) {
      let {
        kind: u,
        status: _
      } = Ai(d), l = Lh(d) ?? "error";
      if (t(`[cloud-sessions] ${e} failed: ${l} ${u} ${_??"no status"}`, {
          level: "error"
        }), u === "other" && !o.signal.aborted && !UN(d) && !this.reported.has(l)) this.reported.add(l), a(new R(`[cloud-sessions] ${e} failed: ${l}`, "a cloud-session read failed with an internal error"));
      let p = u !== "other" && _ === void 0 && !UN(d);
      return kP(o.signal.aborted || p ? "temporarily_unavailable" : "failed")
    } finally {
      this.inFlight--
    }
  }
}

function NUr(e, s) {
  if (typeof s !== "string" || s.length > L || !J0e.test(s)) throw new Sr(`${e}: session_id is not a cloud session id`)
}
async function FUr(e) {
  if (await Fot() !== void 0) return kP("started_by_session");
  if (Te() !== "firstParty") return kP("provider");
  if (i.CLAUDE_CODE_EVAL_CONFINED) return kP("evaluation_run");
  if (St()) return kP("nonessential_traffic");
  if (await dh(), kce() !== null) switch (iRe() ? "route_missing" : xd(IW.policy)) {
    case "org_denied":
      if (e) await PF("allow_remote_sessions", "cloud_session");
      return kP("policy");
    case "latched":
      return kP("policy", V);
    case "route_missing":
      return kP("policy_unverified", z);
    default:
      return kP("policy_unverified")
  }
  if (nS()) {
    if (!k1n()) return kP("failed", q);
    let s = Dsn();
    if (s === "unknown") return kP("policy_unverified");
    return kP("not_signed_in", s === "not_ldr" ? X : j)
  }
  return null
}
async function Hun(e, s) {
  s.signal.throwIfAborted();
  let r = s.withDeviceProof ? (await LD())["X-Trusted-Device-Token"] : void 0,
    o = {
      ...s.olderApi && {
        "anthropic-beta": Osn
      },
      ...r !== void 0 && {
        "X-Trusted-Device-Token": r
      }
    };
  return s.signal.throwIfAborted(), jt.get(e, {
    auth: "teleport-org",
    ...Object.keys(o).length > 0 && {
      headers: o
    },
    maxRedirects: 0,
    validateStatus: () => !0,
    timeout: s.timeoutMs ?? G,
    maxContentLength: s.maxResponseBytes,
    signal: s.signal,
    isBackground: s.isBackground,
    credentials: s.context.credentials,
    storageV5: s.context.storageV5
  })
}

function $un(e, s) {
  if (!e.ok) switch (e.reason) {
    case "data-residency":
      return kP("provider");
    case "essential-traffic-only":
      return kP("nonessential_traffic");
    case "no-auth":
      return kP("not_signed_in")
  }
  switch (e.status) {
    case 200:
      return null;
    case 401:
      return kP(s ? "temporarily_unavailable" : "sign_in_expired");
    case 403:
      return kP("forbidden");
    case 404:
      return kP("not_found");
    case 429:
      return kP("temporarily_unavailable");
    default:
      return kP(e.status >= 500 ? "temporarily_unavailable" : "failed")
  }
}

function kP(e, s = H[e]) {
  return {
    status: "unavailable",
    reason: e,
    message: s
  }
}

function x(e, s) {
  let r = it(e.config) ? e.config : e.session_context,
    o = it(r) ? r[s] : void 0;
  return Array.isArray(o) ? o : []
}

function P(e) {
  let s = x(e, "outcomes").find((d) => it(d) && d.type === "git_repository"),
    r = it(s) ? s.git_info : void 0,
    o = it(r) && Array.isArray(r.branches) ? r.branches[0] : void 0;
  return typeof o === "string" && o !== "" ? o : void 0
}
export {
  Yoa,
  NUr,
  FUr,
  Hun,
  $un,
  kP
};
