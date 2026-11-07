// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  pJ,
  zfe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  R,
  F,
  d,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  f7,
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  St,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  g,
  c,
  ao
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Dn
} from "B:/~BUN/root/chunk-9jpwd6f1.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  uN,
  Lb
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  loe
} from "B:/~BUN/root/chunk-fc7k1zas.js";
import {
  m8
} from "B:/~BUN/root/chunk-g780fcfj.js";
import {
  TA
} from "B:/~BUN/root/chunk-sc660841.js";
import {
  Qnn,
  p$n,
  Znn
} from "B:/~BUN/root/chunk-yrh147c7.js";
import {
  bA
} from "B:/~BUN/root/chunk-q2s07yzr.js";
import {
  Khn,
  nUo,
  rUo,
  Z9s
} from "B:/~BUN/root/chunk-5yr8g0ct.js";
import {
  tXs
} from "B:/~BUN/root/chunk-5vdgde6t.js";
import {
  HV,
  USe
} from "B:/~BUN/root/chunk-ts69mavc.js";
import {
  o,
  E,
  I,
  u,
  B,
  gl
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  randomUUID as ge
} from "crypto";
import {
  join as fe
} from "path";

function ve(r) {
  return typeof r === "object" && r !== null && "type" in r && (r.type === "token_update" || r.type === "auth_401_result")
}

function Te(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401"
}
var Ae = 300000,
  ue = 240000,
  Se = 300000,
  be = 30000,
  _e = 86400000;

function pe() {
  return Ve.state("daemon-auth-cooldown")
}

function Ce() {
  return Ve.state("daemon-auth-status")
}

function J9s(r, n, l, s, h, w = () => !1) {
  let m = () => ({
      usesLoginOffFirstParty: l()
    }),
    k, T = !1,
    y = null,
    v = new Set,
    b = null,
    D = null;

  function W() {
    return D ??= import("B:/~BUN/root/chunk-zcjq31as.js")
  }

  function N(e) {
    let i = {
      type: "token_update",
      accessToken: e
    };
    for (let S of v) try {
      S.send(i)
    } catch {}
  }
  let z;
  async function re(e, i = !1) {
    if (z === e || x() !== "macos" || !(i || w()) || St()) return;
    z = e;
    try {
      let S = await W();
      if (S.isUsing3PServices() && !m().usesLoginOffFirstParty) {
        Y(e);
        return
      }
      if (await S.getClaudeAIOAuthTokenOriginAsync(h) !== "store") return;
      let {
        validateOauthTokenWithOutcome: A,
        isTransientValidateFailure: f
      } = await import("B:/~BUN/root/chunk-1v5sczvs.js"), C = await A(e);
      if (!C.ok) {
        let de = f(C);
        if (de) Y(e);
        c("daemon_snapshot_org_lookup", C.reason, {
          transient: de
        }), n(`auth: token organization lookup: no answer (${C.reason})`);
        return
      }
      let P = C.data?.organization_uuid,
        O = typeof P === "string" && P ? P : null;
      if (g("daemon_snapshot_org_lookup", {
          named: O !== null
        }), k?.accessToken === e) k = {
        ...k,
        organizationUuid: O
      }
    } catch {
      Y(e), n("auth: token organization lookup failed")
    }
  }

  function Y(e) {
    if (z === e) z = void 0
  }

  function H(e) {
    k = {
      accessToken: e.accessToken,
      scopes: e.scopes,
      subscriptionType: e.subscriptionType ?? null,
      rateLimitTier: e.rateLimitTier ?? null,
      organizationUuid: null
    }, re(e.accessToken)
  }
  async function M() {
    let i = await (await W()).getClaudeAIOAuthTokensAsync(h);
    if (i?.accessToken && i.accessToken !== k?.accessToken) H(i), N(i.accessToken);
    j(i?.expiresAt ?? null)
  }
  let V, Z = !1;

  function U(e) {
    if (V = e, b || r.aborted) return;
    if (y) clearTimeout(y), y = null;
    n("auth: no token found, will re-check keychain every 30s"), b = setInterval(function() {
      W().then(async (S) => {
        let A = S.isUsing3PServices() && !l() && !w();
        if (A !== Z) Z = A, n(A ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (A) return;
        S.clearOAuthTokenCache();
        let f = await S.getClaudeAIOAuthTokensAsync(h),
          C;
        if (f?.accessToken && f.accessToken !== V && f.expiresAt && f.expiresAt > Date.now()) C = "auth: token found via keychain re-check";
        else if (f?.refreshToken && await S.checkAndRefreshOAuthTokenIfNeeded({
            credentials: h,
            storageV5: s,
            ...m()
          })) C = "auth: token refreshed via keychain re-check retry";
        if (C) {
          if (await M(), k && b) clearInterval(b), b = null, n(C)
        }
      }).catch((S) => n(`auth: keychain re-check error: ${S}`))
    }, be), b.unref()
  }

  function j(e) {
    if (y) clearTimeout(y), y = null;
    if (!e || r.aborted) return;
    let i = Math.min(Math.max(e - Date.now() - ue, 5000), _e);
    n(`auth: scheduling proactive refresh in ${Math.round(i/1000)}s`), y = setTimeout(ce, i), y.unref()
  }
  async function ce() {
    if (r.aborted) return;
    try {
      n("auth: proactive refresh starting");
      let e = await W(),
        i = k?.accessToken,
        S = await e.checkAndRefreshOAuthTokenIfNeeded({
          credentials: h,
          storageV5: s,
          ...m()
        });
      e.clearOAuthTokenCache();
      let A = await e.getClaudeAIOAuthTokensAsync(h),
        f = A?.expiresAt ?? null,
        C = f === null || f > Date.now() + Ae;
      if (A?.accessToken && (S || A.accessToken !== i || C) && (f === null || f > Date.now() + ue)) {
        await M(), n(S ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return
      }
      if (A?.accessToken && f !== null && f > Date.now()) {
        n("auth: proactive refresh failed, retrying in ~60s (token still valid)"), j(Date.now() + 60000 + ue);
        return
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let P = A?.accessToken ?? i;
      k = void 0, await ie(), U(P)
    } catch (e) {
      n(`auth: proactive refresh error: ${e}`), j(Date.now() + 60000 + ue)
    }
  }
  async function ne(e) {
    if (T) return n("auth: 401 ignored (3P provider active, no OAuth)"), !1;
    n("auth: handling 401");
    let i = await W();
    if (await i.handleOAuth401Error(e, h, s, m())) return i.clearOAuthTokenCache(), await M(), n("auth: 401 recovery succeeded"), !0;
    n("auth: 401 recovery failed, signalling re-auth required"), k = void 0, await ie(), i.clearOAuthTokenCache();
    let A = await i.getClaudeAIOAuthTokensAsync(h);
    if (A?.accessToken !== void 0 && A.accessToken !== e) return await M(), !0;
    return U(e), !1
  }
  let L = null;

  function ie() {
    if (L) return L;
    return L = se().finally(() => {
      L = null
    }), L
  }
  async function se() {
    let e = await W();
    if (e.getAnthropicApiKey()) {
      n("auth: browser login skipped (API key auth available)");
      return
    }
    if (e.isUsing3PServices() && !l()) {
      n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return
    }
    let i = Ue(),
      S = fe(i, "daemon-auth-cooldown"),
      A = fe(i, "daemon-auth-status.json");
    try {
      let f;
      if (X() && s !== void 0) {
        let P = await s.read([pe()]);
        if (!P.ok) throw new R(`v5 cooldown read failed: ${P.error.code}${"telemetryCode"in P.error&&P.error.telemetryCode?` (${P.error.telemetryCode})`:""}`, "daemon-auth v5 cooldown read failed");
        let O = P.value.items[0];
        f = O.found ? Buffer.from(O.value).toString("utf8") : null
      } else f = await Dn().read(S);
      let C = f === null ? NaN : parseInt(f, 10);
      if (!Number.isNaN(C) && Date.now() - C < Se) {
        n("auth: browser login skipped (cooldown)");
        return
      }
    } catch (f) {
      if (!K(f)) n(`auth: cooldown read error: ${f}`)
    }
    try {
      if (await Dn().mkdir(i), X() && s !== void 0) {
        let f = await s.write(pe(), String(Date.now()), {
          publishDiscipline: "inPlace"
        });
        if (!f.ok) throw new R(`v5 cooldown write failed: ${f.error.code}${"telemetryCode"in f.error&&f.error.telemetryCode?` (${f.error.telemetryCode})`:""}`, "daemon-auth v5 cooldown write failed")
      } else await Dn().write(S, String(Date.now()))
    } catch (f) {
      n(`auth: cooldown write error: ${f}`)
    }
    try {
      let {
        execFileNoThrow: f
      } = await import("B:/~BUN/root/chunk-d5derjd7.js")
    } catch {}
    try {
      if (X() && s !== void 0) {
        let f = await s.write(Ce(), _({
          status: "auth_required",
          since: Date.now()
        }), {
          publishDiscipline: "inPlace"
        });
        if (!f.ok) throw new R(`v5 status write failed: ${f.error.code}${"telemetryCode"in f.error&&f.error.telemetryCode?` (${f.error.telemetryCode})`:""}`, "daemon-auth v5 status write failed")
      } else await Dn().write(A, _({
        status: "auth_required",
        since: Date.now()
      }))
    } catch (f) {
      n(`auth: status write error: ${f}`)
    }
    n("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh")
  }

  function Q(e) {
    if (!Te(e)) return;
    ne(e.failedToken).then((i) => {
      for (let S of v) try {
        let A = {
          type: "auth_401_result",
          refreshed: i,
          requestId: e.requestId
        };
        S.send(A)
      } catch {}
    }).catch((i) => {
      n(`auth: 401 handler error: ${i}`);
      for (let S of v) try {
        let A = {
          type: "auth_401_result",
          refreshed: !1,
          requestId: e.requestId
        };
        S.send(A)
      } catch {}
    })
  }

  function G(e) {
    if (v.add(e), e.on("message", Q), k) try {
      let i = {
        type: "token_update",
        accessToken: k.accessToken
      };
      e.send(i)
    } catch {}
  }

  function ae(e) {
    e.removeListener("message", Q), v.delete(e)
  }
  let q = (async () => {
    if (r.aborted) return;
    try {
      let e = await W(),
        i = await e.getClaudeAIOAuthTokensAsync(h);
      if (!i?.accessToken && e.isUsing3PServices()) {
        T = !0, n("auth: 3P provider active, skipping OAuth refresh loop");
        return
      }
      if (i?.accessToken) H(i), j(i.expiresAt ?? null);
      await e.checkAndRefreshOAuthTokenIfNeeded({
        credentials: h,
        storageV5: s,
        ...m()
      }), await M()
    } catch (e) {
      n(`auth: init error: ${e}`)
    }
  })();
  return q.then(() => {
    if (r.aborted || k || T) return;
    U()
  }), r.addEventListener("abort", () => {
    if (y) clearTimeout(y), y = null;
    if (b) clearInterval(b), b = null
  }, {
    once: !0
  }), {
    ready: q,
    getAccessToken() {
      return k?.accessToken
    },
    getAuthSnapshot() {
      if (k && !k.organizationUuid) re(k.accessToken, !0);
      return k
    },
    attachWorker: G,
    detachWorker: ae,
    dispose: te,
    [Symbol.dispose]: te
  };

  function te() {
    if (y) clearTimeout(y), y = null;
    if (b) clearInterval(b), b = null;
    for (let e of v) e.removeListener("message", Q);
    v.clear()
  }
}

function he(r, n, l) {
  if (typeof process.send === "function") {
    let k = function(T) {
        let y = m.get(T);
        if (y) m.delete(T), y.resolve(!1)
      },
      w = r;
    process.on("message", (T) => {
      if (!ve(T)) return;
      if (T.type === "token_update") w = T.accessToken
    });
    let m = new Map;
    return process.on("message", (T) => {
      if (typeof T === "object" && T !== null && "type" in T && T.type === "auth_401_result") {
        let y = T,
          v = m.get(y.requestId);
        if (v) clearTimeout(v.timer), m.delete(y.requestId), v.resolve(y.refreshed)
      }
    }), process.channel?.unref(), {
      getAccessToken() {
        return w
      },
      reportAuth401(T) {
        let y = ge(),
          v = {
            type: "auth_401",
            failedToken: T,
            requestId: y
          };
        return new Promise((b) => {
          let D = setTimeout(k, 30000, y);
          D.unref(), m.set(y, {
            resolve: b,
            timer: D
          });
          try {
            process.send(v)
          } catch {
            clearTimeout(D), m.delete(y), b(!1)
          }
        })
      }
    }
  }
  let s = null;
  async function h() {
    return s ??= await import("B:/~BUN/root/chunk-zcjq31as.js")
  }
  return h(), {
    getAccessToken() {
      return s?.getClaudeAIOAuthTokens()?.accessToken
    },
    async reportAuth401(w) {
      return (await h()).handleOAuth401Error(w, n, l, {
        usesLoginOffFirstParty: !0
      })
    }
  }
}

function oe(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "shutdown"
}

function me(r) {
  if (!oe(r) || typeof r !== "object" || r === null || !("cause" in r)) return;
  return r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield" ? r.cause : void 0
}
var le = p(() => u({
    dir: o(),
    name: o().optional(),
    spawnMode: B(["same-dir", "worktree"]).default("same-dir"),
    capacity: E().int().positive().default(32),
    permissionMode: gl(Lb, B(uN)).optional(),
    sandbox: I().optional(),
    sessionTimeoutSeconds: E().int().positive().optional(),
    createSessionOnStart: I().default(!1)
  }).strict()),
  Ee = 60000,
  Pe = 500,
  ye = async (r, n, l, s, h, w) => {
    let m = le().parse(r);
    if (m.sandbox) l(`The sandbox key is not supported for Remote Control. Remove it. ${p$n}`), process.exit(HV);
    let {
      initializeErrorLogSink: k
    } = await import("B:/~BUN/root/chunk-q47tk7v6.js"), {
      initializeAnalyticsSink: T
    } = await import("B:/~BUN/root/chunk-7ycrq79c.js");
    k(), T();
    let y = () => bA() ?? s.getAccessToken();
    if (!y()) l(Qnn), process.exit(1);
    let [{
      initialize1PEventLogging: v
    }, {
      initializeGrowthBook: b,
      getFeatureValue_CACHED_MAY_BE_STALE: D,
      getUserAttributes: W
    }, {
      flushAnalyticsSinks: N
    }, {
      populateOAuthAccountInfoIfNeeded: z
    }] = await Promise.all([import("B:/~BUN/root/chunk-atzsemwq.js"), import("B:/~BUN/root/chunk-hckxtg11.js"), import("B:/~BUN/root/chunk-a0wg31p3.js"), import("B:/~BUN/root/chunk-92frxbpz.js")]);
    if (v(h), await z(w, h).catch((e) => {
        t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error?e.name:typeof e})`)
      }), !W().organizationUUID) t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");
    else b().catch((e) => {
      t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error?e.name:typeof e}); feature gates keep serving the disk cache`, {
        level: "error"
      })
    });
    if (!loe()) {
      let e = await tUo();
      if (e !== void 0) l(e.reason), await N(), process.exit(e.retry ? 1 : HV)
    }
    let {
      runBridgeHeadless: re,
      BridgeHeadlessPermanentError: Y
    } = await import("B:/~BUN/root/chunk-6083e7qc.js"), H = null, M = !1, V = (e) => {
      if (typeof process.send !== "function") return;
      try {
        process.send(e)
      } catch {}
    }, Z = (e) => V({
      type: "rc_busy",
      busy: e
    }), U = () => {
      if (H !== null) clearInterval(H), H = null
    }, j = (e) => {
      let i = e > 0;
      if (i !== M) M = i, Z(i);
      if (i) {
        if (H === null) H = setInterval((S) => S(!0), Ee, Z), H.unref?.()
      } else U()
    }, ce = D("tengu_daemon_upgrade_defer_busy", !0), ne = null, L = () => {}, ie = new Promise((e) => {
      L = e
    }), se = (e) => {
      if (oe(e)) ne = me(e) ?? null, L()
    };
    process.on("message", se);
    let Q = async () => (await Promise.race([ie, J(Pe)]), ne), G, ae, q;
    try {
      let e = await import("B:/~BUN/root/chunk-gyg20hqd.js"),
        i = e.liveToolHostChecks(m.dir, w),
        S = e.liveToolHostSwitches({
          dir: m.dir,
          checks: i,
          isOfferingFolder: () => G?.getToolHostAdvert().kind === "advertise",
          hasAccessToken: () => Boolean(y())
        }),
        A, f = !1;
      G = await e.watchToolHostAdvert({
        log: l,
        checks: i,
        refuse: e.helperRefusal,
        onVerdict: (P) => {
          if (A !== void 0 && e.isSwitchedOffRemotely(P)) A.sweep("gate_off").catch((O) => a(F(O)))
        }
      }), ae = (P) => {
        try {
          A = e.buildToolHostWorkHandler({
            folder: m.dir,
            switches: S,
            ...P,
            onLiveCountChange: (O) => V({
              type: "rc_serving_tools",
              count: O
            })
          }, {
            unattendedGrant: void 0,
            withoutShellSecrets: !1
          })
        } catch (O) {
          a(F(O))
        }
        return A
      };
      let C;
      q = async () => {
        if (A !== void 0) C ??= e.sweepToolHostForShutdown(A);
        await C
      }, n.addEventListener("abort", () => void q?.(), {
        once: !0
      })
    } catch (e) {
      a(F(e))
    }
    let te = !1;
    try {
      await re({
        dir: m.dir,
        name: m.name,
        spawnMode: m.spawnMode,
        capacity: m.capacity,
        permissionMode: m.permissionMode,
        createSessionOnStart: m.createSessionOnStart,
        getAccessToken: y,
        onAuth401: s.reportAuth401,
        log: l,
        storageV5: h,
        credentials: w,
        onBusyChange: j,
        persistActiveSessionsOnShutdown: ce,
        awaitShutdownCause: Q,
        getToolHostAdvert: G?.getToolHostAdvert,
        createToolHostHandler: ae
      }, n)
    } catch (e) {
      if (!(e instanceof Y)) throw e;
      l(e.message), te = !0
    } finally {
      await q?.(), U(), G?.stop(), process.off("message", se), await N()
    }
    if (te) process.exit(HV)
  };
async function tUo() {
  let [{
    getBridgeBlockedCode: r
  }, {
    checkBridgeMinVersion: n
  }, {
    getUserAttributes: l
  }] = await Promise.all([import("B:/~BUN/root/chunk-n0wh7j50.js"), import("B:/~BUN/root/chunk-gcxbt3qw.js"), import("B:/~BUN/root/chunk-hckxtg11.js")]);
  if (!l().organizationUUID) return {
    reason: ke("token_scope_limited"),
    retry: !1
  };
  let s = await r();
  if (s !== null) return {
    reason: ke(s),
    retry: s === "flags_unreachable" || s === "not_signed_in"
  };
  let h = n();
  return h === null ? void 0 : {
    reason: h,
    retry: !1
  }
}

function ke(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`
}
async function zhn(r, n, l) {
  return ao("daemon_rc_add", async () => {
    let s = "added";
    return await Khn((h) => {
      let w = nUo(h.remoteControl),
        m = w.findIndex((k) => k.dir === r.dir);
      if (m >= 0) {
        let k = Ro(r, (T) => T !== void 0);
        w[m] = {
          ...w[m],
          ...k
        }, s = "updated"
      } else w.push(r), s = "added";
      h.remoteControl = w
    }, n, l), s
  })
}
async function Ghn(r, n, l) {
  return ao("daemon_rc_remove", async () => {
    await Khn((s) => {
      let h = nUo(s.remoteControl),
        w = h.filter((m) => m.dir !== r);
      if (w.length === h.length) return !1;
      if (w.length === 0) delete s.remoteControl;
      else s.remoteControl = w
    }, n, l)
  })
}
var we = p(() => u({
    intervalSeconds: E().positive().default(30)
  }).strict()),
  yke = {
    heartbeat: {
      schema: we,
      run: Oe,
      needsOAuth: !1
    },
    scheduled: {
      schema: rUo,
      run: Z9s,
      needsOAuth: !0
    },
    remoteControl: {
      schema: le,
      run: ye,
      needsOAuth: !0
    }
  };

function SEt(r) {
  return r === "heartbeat" || loe() || r === "remoteControl" && tXs()
}
async function Oe(r, n, l, s) {
  let {
    intervalSeconds: h
  } = we().parse(r);
  l(`heartbeat worker started (interval=${h}s)`);
  while (!n.aborted)
    if (await J(h * 1000, n), !n.aborted) l("heartbeat")
}

function Ie(r, n) {
  let l = () => n.abort();
  r.on("SIGTERM", l), r.on("SIGINT", l), r.on("message", (s) => {
    if (oe(s)) n.abort()
  })
}
async function yha(r, n) {
  if (!r || !(r in yke)) process.stderr.write(`unknown worker kind: ${r}
`), process.exit(2);
  if (!SEt(r)) process.stderr.write(`worker kind '${r}' is not available.
`), process.exit(HV);
  let l = yke[r],
    s = [];
  for await (let v of process.stdin) s.push(v);
  let h;
  try {
    h = ee(Buffer.concat(s).toString("utf8"))
  } catch (v) {
    process.stderr.write(`invalid config JSON on stdin: ${d(v)}
`), process.exit(2)
  }
  let w = l.schema().safeParse(h.config);
  if (!w.success) process.stderr.write(`config validation failed: ${w.error.message}
`), process.exit(2);
  let m = new AbortController;
  Ie(process, m), Me(m);
  let k = m8(n),
    T = TA(k),
    y = he(h.initialAccessToken, T, k);
  if (X() && k !== void 0) {
    f7({
      storageV5: k
    }), pJ(k);
    let [{
      composePolicyLimitsClient: v,
      primePolicyLimitsCache: b
    }, {
      primeFastPathCredentials: D
    }, {
      setGrowthBookCredentials: W,
      setGrowthBookStorageBackend: N
    }] = await Promise.all([import("B:/~BUN/root/chunk-4gnegddh.js"), import("B:/~BUN/root/chunk-dcvh94gr.js"), import("B:/~BUN/root/chunk-hckxtg11.js")]);
    v({
      storageV5: k,
      credentials: T
    }), W(T), N(k), await D(T), await b(k), await zfe(k)
  }
  try {
    await l.run(w.data, m.signal, (v) => process.stdout.write(v + `
`), y, k, T)
  } catch (v) {
    if (xe(v) === 429) process.stdout.write(`rate limited (429): ${d(v)}
`), process.exit(USe);
    if (We(v)) process.stdout.write(`folder already served: ${d(v)}
`), process.exit(USe);
    throw v
  }
}

function We(r) {
  let n = r;
  for (let l = 0; n != null && l < 8; l++) {
    if (n.errorType === Znn) return !0;
    n = n.cause
  }
  return !1
}

function xe(r) {
  let n = r;
  for (let l = 0; n != null && l < 8; l++) {
    let s = n.status;
    if (typeof s === "number") return s;
    let h = n.response?.status;
    if (typeof h === "number") return h;
    n = n.cause
  }
  return
}
var De = 30000;

function He(r) {
  try {
    return process.kill(r, 0), !0
  } catch {
    return !1
  }
}

function Me(r, n) {
  let l = {
      ppid: () => process.ppid,
      isAlive: He,
      log: (m) => process.stdout.write(m + `
`),
      onGone: () => process.exit(0),
      intervalMs: De,
      exitGraceMs: 2000,
      ...n
    },
    s = l.ppid();
  if (s <= 1) return;
  let h = !1,
    w = setInterval(() => {
      if (h) return;
      if (!(!l.isAlive(s) || x() !== "windows" && l.ppid() !== s)) return;
      h = !0, clearInterval(w), l.log("parent supervisor gone \u2014 exiting"), r.abort(), setTimeout(l.onGone, l.exitGraceMs).unref()
    }, l.intervalMs);
  return w.unref(), w
}
export {
  J9s,
  tUo,
  zhn,
  Ghn,
  yke,
  SEt,
  yha
};
